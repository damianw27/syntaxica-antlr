import { CharStream } from './char-stream';

export type OnLoad = (stream: CharStream) => void;

export type OnError = (error: Error) => void;

export type FromPathCallback = (err: Error, stream: CharStream) => void;

export declare class CharStreams {
  public static fromString(data: string, decodeToUnicodeCodePoints?: boolean): CharStream;
  public static fromBlob(blob: Blob, encoding: string, onLoad: OnLoad, onError: OnError): void;
  public static fromPath(path: string, encoding: string, callback: FromPathCallback): void;
  public static fromPathSync(path: string, encoding: string): CharStream;
  public static helloWorld(): void;
}
