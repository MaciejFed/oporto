// import { getAllUniqueWordsConjugated } from '../service/progress/progress';
// import { Language } from '../common/language';
// import { frequencyMap } from '../frequency';
// import readline from 'readline';
// import { execSync } from 'child_process';
// import fs from 'fs';
// import os from 'os';
// import path from 'path';
// import { Noun } from '../repository/exercises-repository';
//
// const freqPath = path.join(os.homedir(), 'mdev/oporto/freq_done.json');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const question = (query: any) => new Promise((resolve) => {
//   rl.question(query, resolve);
// });
//
// interface Lingue {
//   pos: string
//   text: string,
//   forms: string[],
//   translations: {
//     text: string,
//     pos: string
//   }[]
// }
//
// type WordToLingue  = { [key: string]: Lingue[] }
//
//
// export function saveFreqToFile(data: object) {
//   fs.writeFileSync(freqPath, JSON.stringify(data, null, 4));
// }
//
// export function readFreqFromFile(): WordToLingue {
//   return JSON.parse(fs.readFileSync(freqPath, 'utf-8'));
// }
//
// export function parseNoun(wordToLingue: WordToLingue): Noun[] {
//   const singulars = Object.entries(wordToLingue).filter((entry) => /^noun, (feminine|masculine)$/.test(entry[1][0].pos))
//   const plurals = Object.entries(wordToLingue).filter((entry) => /^noun, plural, (feminine|masculine)$/.test(entry[1][0].pos))
//
//   const singularNounParsed = singulars.map<Noun>((entry) => ({
//     english: entry[1][0].translations[0].text,
//     portuguese: {
//       word: entry[0],
//       gender: entry[1][0].pos.includes('masculine') ? 'masculine' : 'feminine',
//       plural: entry[1][0].forms.length ? entry[1][0].forms[0].match(/plural:\s*([^\s\)]+)/)![1] : ''
//     }
//   }))
//
//   const pluralsNounsParsed = plurals.map<Noun>((entry) => ({
//     english: entry[1][0].translations[0].text,
//     portuguese: {
//       word: entry[1][0].forms.length ? entry[1][0].forms[0].match(/singular:\s*([^\s\)]+)/)![0] : '',
//       gender: entry[1][0].pos.includes('masculine') ? 'masculine' : 'feminine',
//       plural: entry[0]
//     }
//   }))
//
//   const newNouns = singularNounParsed.concat(pluralsNounsParsed);
//
//   console.log(newNouns);
//
//   return newNouns
// }
//
//
// const words: string[] = ['dum', 'nao','john','the','seres','jack','terem','serem','oh','tom','michael','quê','desculpe','sam','jesus','fbi','sê','james','george','namorado','david'];
//
// async function findNextUndone() {
//   const currentMap = readFreqFromFile()
//   const allWords = getAllUniqueWordsConjugated(Language.Portuguese);
//   const mapWords = Object.keys(currentMap)
//   for (const word of Object.keys(frequencyMap)) {
//     if (!allWords.includes(word) && !words.includes(word) && !mapWords.includes(word)) {
//       const value = frequencyMap[word];
//       const curlCommand = `curl -X 'GET' 'http://127.0.0.1:8000/api/v2/translations?query=${encodeURIComponent(word)}&src=pt&dst=en&guess_direction=false&follow_corrections=never' -H 'accept: application/json'`;
//       const lingue = execSync(
//         curlCommand
//       ).toString();
//       const l: Lingue[] =  JSON.parse(lingue);
//       currentMap[word] = l;
//       if (!l.length) {
//         continue
//       }
//       console.log({
//         word,
//         type: l[0].pos,
//         translations: l[0].translations.map((tran) => tran.text)
//       })
//       saveFreqToFile(currentMap)
//     }
//   }
// }
//
// const currentMap = readFreqFromFile();
//
// parseNoun(currentMap)
//
// // findNextUndone();
