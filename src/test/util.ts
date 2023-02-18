export function simulateTyping(word: string, hitEnter?: boolean) {
  for (const char of word.split('')) {
    process.stdin.emit('keypress', {}, { name: char, sequence: char });
  }
  if (hitEnter) {
    process.stdin.emit('keypress', {}, { name: 'return' });
  }
}

export function simulateContinueButton() {
  process.stdin.emit('keypress', {}, { name: 'spacebar', sequence: ' ' });
}
