import { Transition } from './transition';
import { ATNState } from '../state';
import { IntervalSet } from '../misc';

export declare class SetTransition extends Transition {
  public readonly serializationType: number;

  public constructor(target: ATNState, set: IntervalSet);
  public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
  public toString(): string;
}
