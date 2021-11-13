import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  const WORD_SEPARATOR = '   ';
  
  const words: string[] = morseCode.split(WORD_SEPARATOR);
  
  return words.map(word => word.trim().split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ').trim();
}
