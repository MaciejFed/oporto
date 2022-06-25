export function simulateTyping(word: string) {
    word.split('').forEach((char) => process.stdin.emit('keypress', {}, { name: char }));
}