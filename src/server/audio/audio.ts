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

const AUDIO_DIR = path.join(os.homedir(), 'audio');

dotenv.config({ path: path.join(os.homedir(), '.oporto.env') });

const getVoiceForLanguage = async (language: Language, text: string) => {
  const audioPrev = await getPreviousAudioVoice(language, text);
  if (audioPrev) return audioPrev;
  switch (language) {
    case Language.Portuguese:
      return getRandomElement(['A', 'B', 'C', 'D'].map((index) => `pt-PT-Wavenet-${index}`));
    case Language.German:
      return getRandomElement(['A', 'B'].map((index) => `de-DE-Neural2-${index}`).concat('de-DE-Polyglot-1'));
    default:
      throw new Error(`Unknown language: [${language}]`);
  }
};

const getLocaleForLanguage = (language: Language) => (language === Language.Portuguese ? 'pt-PT' : 'de-DE');
const getRateInNumber = (rate: Rate) => (rate === 'slow' ? 0.75 : 1);

const synthesize = async (language: Language, text: string, rate: Rate) => {
  const client = new textToSpeech.TextToSpeechClient();
  const voice = await getVoiceForLanguage(language, text);
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: { languageCode: getLocaleForLanguage(language), name: voice },
    audioConfig: { audioEncoding: 'MP3', speakingRate: getRateInNumber(rate) }
  };

  const audioFilePath = `${AUDIO_DIR}/${randomUUID()}.mp3`;

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
  if (!audio) {
    logger.info(`Audio for [${language}] [${text}]. Doesn't exist. Creating...`);
    audio = await synthesize(language, text, rate);
    await saveAudio(language, audio);
  }
  return audio;
}
