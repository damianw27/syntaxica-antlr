import { Token } from '../token';

export declare class Interval {
  public start: number;
  public stop: number;

  public constructor(start: number, stop: number);
  public constructor(start: Token, stop?: Token);
}
