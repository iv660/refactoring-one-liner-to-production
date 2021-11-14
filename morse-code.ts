import { MORSE_CODE } from './preloaded';


export function decodeMorse(morseCode: string): string {
  const WORD_SEPARATOR = '   ';
  const LETTER_SEPARATOR = ' ';
  
  const words: string[] = morseCode.split(WORD_SEPARATOR);
  
  const decodedWords: string[] = [];
  for (const word of words) {
    const unpaddedWord = word.trim();
    const letters = unpaddedWord.split(LETTER_SEPARATOR);
    
    const decodedLetters: string[] = [];
    for (const letter of letters) {
      const decodedLetter = MORSE_CODE[letter];
      decodedLetters.push(decodedLetter);
    }
    
    const decodedWord = decodedLetters.join('');
    decodedWords.push(decodedWord);
  }
  
  const decodedMessage = decodedWords.join(' ');
  return decodedMessage.trim();
}
