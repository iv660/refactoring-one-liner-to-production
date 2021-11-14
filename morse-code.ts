import { MORSE_CODE } from './preloaded';


export function decodeMorse(morseCode: string): string {
  const encodedMessage = new EncodedMessage(morseCode);
  
  return encodedMessage.decodedText;
}

// =========================================================

class EncodedMessage {
  
  static readonly WORD_SEPARATOR: string = '   ';
  
  constructor(private encodedText: string) {
    
  }
  
  public get decodedText(): string {
  
    const encodedWords = this.encodedWords;

    const decodedWords: string[] = [];
    for (const encodedWord of encodedWords) {
      const decodedWord = this.decodeWord(encodedWord.encodedText);
      decodedWords.push(decodedWord);
    }

    const decodedMessage = this.makeDecodedMessage(decodedWords);

    return decodedMessage;
  }


  private get encodedWords(): EncodedWord[] {
    const encodedWordsAsText: string[] = this.encodedText.split(EncodedMessage.WORD_SEPARATOR);
    const encodedWords: EncodedWord[] = [];
    
    for (const encodedWordAsText of encodedWordsAsText) {
      encodedWords.push(new EncodedWord(encodedWordAsText));
    }
    
    return encodedWords;
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

// =========================================================

class EncodedWord {
  constructor(public encodedText: string) {}
}
