import { TokenStream } from './token-stream';
import { Lexer } from './lexer';

export declare class BufferedTokenStream extends TokenStream {
  public tokenSource: Lexer;
}
