import { Interval } from './interval';

export declare class IntervalSet {
  public isNil: boolean;
  public size: number;
  public minElement: number;
  public maxElement: number;
  public intervals: Interval[];

  public contains(i: number): boolean;
  public toString(literalNames?: (string | null)[], symbolicNames?: string[], elemsAreChar?: boolean): string;
}
