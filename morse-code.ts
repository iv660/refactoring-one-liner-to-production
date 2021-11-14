import { MORSE_CODE } from './preloaded';


export function decodeMorse(morseCode: string): string {
  const encodedWords = breakIntoWords(morseCode);
  
  const decodedWords: string[] = [];
  for (const encodedWord of encodedWords) {
    const decodedWord = decodeWord(encodedWord);
    decodedWords.push(decodedWord);
  }
  
  const decodedMessage = makeDecodedMessage(decodedWords);
  
  return decodedMessage;
}


function breakIntoWords(encodedMessage: string): string[] {
  const WORD_SEPARATOR = '   ';
  
  return encodedMessage.split(WORD_SEPARATOR);
} 


function decodeWord(encodedWord: string): string {
  const LETTER_SEPARATOR = ' ';
  
  const unpaddedWord = encodedWord.trim();
  const encodedLetters = unpaddedWord.split(LETTER_SEPARATOR);

  const decodedLetters: string[] = [];
  for (const encodedLetter of encodedLetters) {
    const decodedLetter = decodeLetter(encodedLetter);
    decodedLetters.push(decodedLetter);
  }
  
  const decodedWord = decodedLetters.join('');
  
  return decodedWord;
}


function decodeLetter(encodedLetter: string): string {
  return MORSE_CODE[encodedLetter];
}


function makeDecodedMessage(decodedWords: string[]): string {
  const decodedMessage = decodedWords.join(' ');
  const unpaddedDecodedMessage = decodedMessage.trim();
  
  return unpaddedDecodedMessage;
}
