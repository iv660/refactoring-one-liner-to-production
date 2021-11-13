




import { MORSE_CODE } from './preloaded';
export function decodeMorse(morseCode: string): string {
  return morseCode.split('   ').map(word => word.trim().split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ').trim();
}
