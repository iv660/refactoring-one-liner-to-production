import { MORSE_CODE } from './preloaded';


export function decodeMorse(morseCode: string): string {
  const WORD_SEPARATOR = '   ';
  const LETTER_SEPARATOR = ' ';
  
  const encodedWords: string[] = morseCode.split(WORD_SEPARATOR);
  
  const decodedWords: string[] = [];
  for (const encodedWord of encodedWords) {
    const unpaddedWord = encodedWord.trim();
    const encodedLetters = unpaddedWord.split(LETTER_SEPARATOR);
    
    const decodedLetters: string[] = [];
    for (const encodedLetter of encodedLetters) {
      const decodedLetter = MORSE_CODE[encodedLetter];
      decodedLetters.push(decodedLetter);
    }
    
    const decodedWord = decodedLetters.join('');
    decodedWords.push(decodedWord);
  }
  
  const decodedMessage = decodedWords.join(' ');
  const unpaddedDecodedMessage = decodedMessage.trim();
  
  return unpaddedDecodedMessage;
}
