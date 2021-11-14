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
      const decodedWordAsText: string = encodedWord.decodedText;
      decodedWords.push(decodedWordAsText);
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


  private makeDecodedMessage(decodedWords: string[]): string {
    const decodedMessage = decodedWords.join(' ');
    const unpaddedDecodedMessage = decodedMessage.trim();

    return unpaddedDecodedMessage;
  }
}

// =========================================================

class EncodedWord {
  static readonly LETTER_SEPARATOR: string = ' ';
  
  constructor(public encodedText: string) {}
  
  
  public get decodedText(): string {
    const unpaddedWord = this.encodedText.trim();
    const encodedLetters = unpaddedWord.split(EncodedWord.LETTER_SEPARATOR);

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
}
