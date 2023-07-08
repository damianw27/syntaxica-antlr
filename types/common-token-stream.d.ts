import { BufferedTokenStream } from './buffered-token-stream';
import { Lexer } from './lexer';

export declare class CommonTokenStream extends BufferedTokenStream {
  public tokens: string[];

  public constructor(lexer: Lexer, channel?: number);
  public fill(): void;
}
