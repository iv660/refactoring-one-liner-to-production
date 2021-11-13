import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  const WORD_SEPARATOR = '   ';
  
  const words: string[] = morseCode.split(WORD_SEPARATOR);
  
  const decodedWords: string[] = [];
  for (const word of words) {
    const unpaddedWord = word.trim();
    const letters = unpaddedWord.split(' ');
    const decodedWord = letters.map(letter => MORSE_CODE[letter]).join('');
    decodedWords.push(decodedWord);
  }
  
  return decodedWords.join(' ').trim();
}
