import { getAudioForText } from '../server/audio/audio';
import { Language } from '../common/language';
import { execSync } from 'child_process';

getAudioForText(Language.Portuguese, 'Posso precisar de ajuda com as caixas grandes', 'normal', 'google').then(
  (res) => {
    execSync(`afplay ${res.path}`);
  }
);
