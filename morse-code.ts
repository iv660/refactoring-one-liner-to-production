import { MORSE_CODE } from './preloaded';


export function decodeMorse(morseCode: string): string {
  const encodedMessage = new EncodedMessage(morseCode);
  
  return encodedMessage.decodedText;
}

// =========================================================

class EncodedMessage {
  
  constructor(private encodedText: string) {
    
  }
  
  public get decodedText(): string {
  
    const encodedWords = this.breakIntoWords(this.encodedText);

    const decodedWords: string[] = [];
    for (const encodedWord of encodedWords) {
      const decodedWord = this.decodeWord(encodedWord);
      decodedWords.push(decodedWord);
    }

    const decodedMessage = this.makeDecodedMessage(decodedWords);

    return decodedMessage;
  }


  private breakIntoWords(encodedMessage: string): string[] {
    const WORD_SEPARATOR = '   ';

    return encodedMessage.split(WORD_SEPARATOR);
  } 


  private decodeWord(encodedWord: string): string {
    const LETTER_SEPARATOR = ' ';

    const unpaddedWord = encodedWord.trim();
    const encodedLetters = unpaddedWord.split(LETTER_SEPARATOR);

    const decodedLetters: string[] = [];
    for (const encodedLetter of encodedLetters) {
      const decodedLetter = this.decodeLetter(encodedLetter);
      decodedLetters.push(decodedLetter);
    }

    const decodedWord = decodedLetters.join('');

    return decodedWord;
  }


  private decodeLetter(encodedLetter: string): string {
    return MORSE_CODE[encodedLetter];
  }


  private makeDecodedMessage(decodedWords: string[]): string {
    const decodedMessage = decodedWords.join(' ');
    const unpaddedDecodedMessage = decodedMessage.trim();

    return unpaddedDecodedMessage;
  }
}
