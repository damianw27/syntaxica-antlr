import { CharStream } from './char-stream';

export declare class FileStream extends CharStream {
  public fileName: string;

  public constructor(fileName: string, encoding?: string, decodeToUnicodeCodePoints?: boolean);
}
