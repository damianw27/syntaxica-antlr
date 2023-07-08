import { Token } from './token';
import { Interval } from './misc/interval';

export declare class TokenStream {
  public index: number;
  public size: number;

  public LA(i: number): number;
  public LT(k: number): Token;
  public getText(interval?: Interval): string;
  public getHiddenTokensToLeft(tokenIndex: number, channelName?: string): Token[];
  public getHiddenTokensToRight(tokenIndex: number, channelName?: string): Token[];
  public get(idx: number): Token;
}
