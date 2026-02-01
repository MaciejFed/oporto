import { Language } from '../../common/language';
import { getRandomElement } from '../../common/common';
import { getAudio, getPreviousAudioVoice, saveAudio } from '../db';
import { logger } from '../../common/logger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { TextToSpeechClient } = require('@google-cloud/text-to-speech').v1beta1;
import dotenv from 'dotenv';
import path from 'path';
import os from 'os';
import fs from 'fs';
import util from 'util';
import { randomUUID } from 'node:crypto';
import { Audio, Rate } from './audio.types';

const AUDIO_DIR = path.join(os.homedir(), 'audio');

dotenv.config({ path: path.join(os.homedir(), '.oporto.env') });

const getAudioPath = () => `${AUDIO_DIR}/${randomUUID()}.wav`;

const getVoiceForLanguage = async (language: Language, text: string, api: 'google' | 'openai') => {
  const audioPrev = await getPreviousAudioVoice(language, text, api);
  if (audioPrev) return audioPrev;
  if (api === 'openai') return 'alloy';
  switch (language) {
    case Language.Portuguese:
      return getRandomElement(['A', 'B', 'C', 'D', 'E', 'F'].map((index) => `pt-PT-Wavenet-${index}`));
    case Language.German:
      return getRandomElement(['A', 'B', 'C', 'F'].map((index) => `de-DE-Neural2-${index}`));
    case Language.Polish:
      return getRandomElement(['A', 'B', 'D', 'E'].map((index) => `pl-PL-Wavenet-${index}`));
    default:
      throw new Error(`Unknown language: [${language}]`);
  }
};

const synthesize = async (language: Language, text: string, rate: Rate, api: 'google' | 'openai') => {
  const client = new TextToSpeechClient();
  const voice = await getVoiceForLanguage(language, text, api);
  const request = {
    input: {
      text,
      prompt: 'Read in a tone that fits to the input. Make sure to use European Portuguese accent.'
    },
    voice: {
      languageCode: 'pt-pt',
      name: 'Achernar',
      modelName: 'gemini-2.5-flash-tts'
    },
    audioConfig: {
      audioEncoding: 'LINEAR16',
      speakingRate: 1.0,
      pitch: 0
    }
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
      rate,
      api
    } as Audio;
  }
  throw new Error(`Could not create audio for [${language}][${text}]`);
};

export async function getAudioForText(
  language: Language,
  text: string,
  rate: Rate,
  api: 'google' | 'openai'
): Promise<Audio> {
  let audio = await getAudio(language, text, rate, api);
  if (!audio) {
    logger.info(`Audio for [${language}] [${text}]. Doesn't exist. Creating...`);
    audio = await synthesize(language, text, rate, api);
    await saveAudio(language, audio);
  }
  return audio;
}
