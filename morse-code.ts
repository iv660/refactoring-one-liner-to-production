import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  const WORD_SEPARATOR = '   ';
  
  return morseCode.split(WORD_SEPARATOR).map(word => word.trim().split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ').trim();
}
