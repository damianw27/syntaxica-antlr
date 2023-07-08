import { CharStream } from './char-stream';
import { InputStream } from './input-stream';

export declare class Token {
  public static EOF: number;

  public channel: number;
  public tokenIndex: number;
  public line: number;
  public column: number;
  public text: string;
  public type: number;
  public start: number;
  public stop: number;

  public clone: () => Token;
  public cloneWithType: (type: number) => Token;
  public getInputStream: () => CharStream;
  public getTokenSource: () => InputStream;
}
