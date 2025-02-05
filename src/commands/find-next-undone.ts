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
//
// interface ParsedLingue {
//   place: number;
//   frequency: number;
//   word: string;
//   pos: string
//   text: string,
//   forms: string[],
//   english: string
// }
//
//
// interface PraserdLingueMap {
//   verbs: ParsedLingue[];
//   adjectives: ParsedLingue[];
//   nouns: ParsedLingue[];
//   others: ParsedLingue[];
//   parsed: string[];
//   rejected: string[];
// }
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
//
//
// export function saveFreqToFile(data: object) {
//   fs.writeFileSync(freqPath, JSON.stringify(data, null, 4));
// }
//
// export function readFreqFromFile(): PraserdLingueMap {
//   return JSON.parse(fs.readFileSync(freqPath, 'utf-8'));
// }
//
// export function parseNoun(wordToLingue: PraserdLingueMap): Noun[] {
//   const singulars = wordToLingue.nouns.filter((entry) => /^noun, (feminine|masculine)$/.test(entry.pos))
//   const plurals = wordToLingue.nouns.filter((entry) => /^noun, plural, (feminine|masculine)$/.test(entry.pos))
//
//   const singularNounParsed = singulars.map<Noun>((entry) => ({
//     english: entry.english,
//     portuguese: {
//       word: entry.word,
//       gender: entry.pos.includes('masculine') ? 'masculine' : 'feminine',
//       plural: entry.forms.length ? entry.forms[0].match(/plural:\s*([^\s\)]+)/)![1] : ''
//     }
//   }))
//
//   const pluralsNounsParsed = plurals.map<Noun>((entry) => ({
//     english: entry.english,
//     portuguese: {
//       word: entry.forms.length ? entry.forms[0].match(/singular:\s*([^\s\)]+)/)![0] : '',
//       gender: entry.pos.includes('masculine') ? 'masculine' : 'feminine',
//       plural: entry.word
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
// const words: string[] = ['joe', 'dum', 'nao','john','the','seres','jack','terem','serem','oh','tom','michael','quê','desculpe','sam','jesus','fbi','sê','james','george','namorado','david'];
//
// async function findNextUndone() {
//   const currentMap = readFreqFromFile()
//   const allWords = getAllUniqueWordsConjugated(Language.Portuguese);
//   for (const word of Object.keys(frequencyMap)) {
//     if (!allWords.includes(word) && !words.includes(word) && !currentMap.parsed.concat(currentMap.rejected).includes(word)) {
//       const value = frequencyMap[word];
//       const curlCommand = `curl -s -X 'GET' 'http://127.0.0.1:8000/api/v2/translations?query=${encodeURIComponent(word)}&src=pt&dst=en&guess_direction=false&follow_corrections=never' -H 'accept: application/json'`;
//       const lingue = execSync(
//         curlCommand
//       ).toString();
//       const l: Lingue[] =  JSON.parse(lingue);
//       if (JSON.stringify(l).includes('The Linguee server returned 429')) {
//         console.error('Reached the limit');
//         process.exit(0);
//       }
//       if (!l.length) {
//         currentMap.rejected.push(word);
//         continue
//       }
//       const parsedLingue: ParsedLingue = {
//         word,
//         pos: l[0].pos,
//         text: l[0].text,
//         forms: l[0].forms,
//         english: l[0].translations[0].text,
//         place: value.place,
//         frequency: value.frequency,
//       }
//       if (parsedLingue.pos.includes('verb')) {
//         currentMap.verbs.push(parsedLingue);
//       } else if (parsedLingue.pos.includes('noun')) {
//         currentMap.nouns.push(parsedLingue);
//       } else if (parsedLingue.pos.includes('adjective')) {
//         currentMap.adjectives.push(parsedLingue);
//       } else {
//         currentMap.others.push(parsedLingue);
//       }
//       currentMap.parsed.push(word)
//
//       console.log(parsedLingue);
//       saveFreqToFile(currentMap)
//     }
//   }
// }
//
//
// const map = readFreqFromFile();
//
// console.log(map.verbs.map((verb) => ({
//   infinitive: verb.text,
//   english: `to ${verb.english}`
// })));
