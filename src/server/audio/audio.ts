import { Language } from '../../common/language';
import { getRandomElement } from '../../common/common';
import { getAudio, saveAudio } from '../db';
import { logger } from '../../common/logger';
import textToSpeech from '@google-cloud/text-to-speech';
import dotenv from 'dotenv';
import path from 'path';
import os from 'os';
import fs from 'fs';
import util from 'util';
import * as protos from '@google-cloud/text-to-speech/build/protos/protos';
import { execSync } from 'child_process';
import { randomUUID } from 'node:crypto';
import { Audio } from './audio.types';

const AUDIO_DIR = path.join(os.homedir(), 'audio');

dotenv.config({ path: path.join(os.homedir(), '.oporto.env') });

const getVoiceForLanguage = (language: Language) => {
  switch (language) {
    case Language.Portuguese:
      return getRandomElement(['A', 'B', 'C', 'D'].map((index) => `pt-PT-Wavenet-${index}`));
    case Language.German:
      return getRandomElement(['A', 'B', 'C', 'D', 'F'].map((index) => `de-DE-Neural2-${index}`));
    default:
      throw new Error(`Unknown language: [${language}]`);
  }
};

const getLocaleForLanguage = (language: Language) => (language === Language.Portuguese ? 'pt-PT' : 'de-DE');

const synthesize = async (language: Language, text: string) => {
  const client = new textToSpeech.TextToSpeechClient();
  const voice = getVoiceForLanguage(language);
  const request: protos.google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: { languageCode: getLocaleForLanguage(language), name: voice },
    audioConfig: { audioEncoding: 'MP3' }
  };

  const audioFilePath = `${AUDIO_DIR}/${randomUUID()}.mp3`;

  const [response] = await client.synthesizeSpeech(request);
  if (response.audioContent) {
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(audioFilePath, response.audioContent, 'binary');
    return {
      path: audioFilePath,
      text,
      voice
    } as Audio;
  }
  throw new Error(`Could not create audio for [${language}][${text}]`);
};

export async function getAudioForText(language: Language, text: string): Promise<Audio> {
  let audio = await getAudio(language, text);
  if (!audio) {
    logger.info(`Audio for [${language}] [${text}]. Doesn't exist. Creating...`);
    audio = await synthesize(language, text);
    await saveAudio(language, audio);
  }
  return audio;
}
