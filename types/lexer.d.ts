import { Token } from './token';
import { Recognizer } from './recognizer';
import { CharStream } from './char-stream';
import { LexerATNSimulator } from './atn';

export declare class Lexer extends Recognizer<number> {
  public static DEFAULT_MODE: number;

  public text: string;
  public line: number;
  public column: number;
  public _input: CharStream;
  public _interp: LexerATNSimulator;
  public _tokenStartCharIndex: number;
  public _tokenStartLine: number;
  public _tokenStartColumn: number;
  public _type: number;

  public constructor(input: CharStream);
  public reset(): void;
  public nextToken(): Token;
  public skip(): void;
  public more(m?: number): void;
  public pushMode(m: number): void;
  public popMode(): number;
  public emitToken(token: Token): void;
  public emit(): Token;
  public emitEOF(): Token;
  public getAllTokens(): Token[];

  public get channelNames(): string[];
  public get modeNames(): string[];
}
