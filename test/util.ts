import { sleep } from '../src/common/common';

export async function simulateTyping(word: string) {
    for (const char of word.split('')) {
        await sleep(50);
        process.stdin.emit('keypress', {}, { name: char, sequence: char });
    }
}
