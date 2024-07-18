import { Language } from '../../common/language';
import { getRandomElement } from '../../common/common';
import { getAudio, getPreviousAudioVoice, saveAudio } from '../db';
import { logger } from '../../common/logger';
import textToSpeech from '@google-cloud/text-to-speech';
import dotenv from 'dotenv';
import path from 'path';
import os from 'os';
import fs from 'fs';
import util from 'util';
import * as protos from '@google-cloud/text-to-speech/build/protos/protos';
import { randomUUID } from 'node:crypto';
import { Audio, Rate } from './audio.types';
import OpenAI from 'openai';

const AUDIO_DIR = path.join(os.homedir(), 'audio');

dotenv.config({ path: path.join(os.homedir(), '.oporto.env') });

const getAudioPath = () => `${AUDIO_DIR}/${randomUUID()}.mp3`;

const getVoiceForLanguage = async (language: Language, text: string) => {
  const audioPrev = await getPreviousAudioVoice(language, text);
  if (audioPrev) return audioPrev;
  switch (language) {
    case Language.Portuguese:
      return getRandomElement(['A', 'B', 'C', 'D'].map((index) => `pt-PT-Wavenet-${index}`));
    case Language.German:
      if (text.split(' ').length < 3) {
        return getRandomElement(
          ['A', 'B', 'C', 'F'].map((index) => `de-DE-Neural2-${index}`).concat('de-DE-Polyglot-1')
        );
      }
      return getRandomElement(['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer']);
    default:
      throw new Error(`Unknown language: [${language}]`);
  }
};

const getLocaleForLanguage = (language: Language) => (language === Language.Portuguese ? 'pt-PT' : 'de-DE');
const getRateInNumber = (rate: Rate) => (rate === 'slow' ? 0.8 : 1);

const synthesizeOpenAI = async (language: Language, text: string, rate: Rate) => {
  const audioFilePath = getAudioPath();
  const voice = (await getVoiceForLanguage(language, text)) as 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

  const openai = new OpenAI();
  const mp3 = await openai.audio.speech.create({
    model: 'tts-1-hd',
    voice,
    speed: getRateInNumber(rate),
    input: text
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(audioFilePath, buffer);

  return {
    path: audioFilePath,
    text,
    voice,
    rate
  } as Audio;
};

const synthesize = async (language: Language, text: string, rate: Rate) => {
  const client = new textToSpeech.TextToSpeechClient();
  const voice = await getVoiceForLanguage(language, text);
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: { languageCode: getLocaleForLanguage(language), name: voice },
    audioConfig: { audioEncoding: 'MP3', speakingRate: getRateInNumber(rate) }
  };

  const audioFilePath = getAudioPath();

  const [response] = await client.synthesizeSpeech(request);
  if (response.audioContent) {
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(audioFilePath, response.audioContent, 'binary');
    return {
      path: audioFilePath,
      text,
      voice,
      rate
    } as Audio;
  }
  throw new Error(`Could not create audio for [${language}][${text}]`);
};

export async function getAudioForText(language: Language, text: string, rate: Rate): Promise<Audio> {
  let audio = await getAudio(language, text, rate);
  const synthesizeFn = language === Language.German && text.split(' ').length > 2 ? synthesizeOpenAI : synthesize;
  if (!audio) {
    logger.info(`Audio for [${language}] [${text}]. Doesn't exist. Creating...`);
    audio = await synthesizeFn(language, text, rate);
    await saveAudio(language, audio);
  }
  return audio;
}
