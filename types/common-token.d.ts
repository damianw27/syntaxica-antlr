import { Token } from './token';

export declare class CommonToken extends Token {
  public constructor(source?: number, type?: number, channel?: number, start?: number, stop?: number);
  public toString(): string;
}
