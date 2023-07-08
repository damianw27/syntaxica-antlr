import { Transition } from './transition';
import { IntervalSet } from '../misc';
import { ATNState } from '../state';

export declare class AtomTransition extends Transition {
  public readonly label_: number;
  public readonly label: IntervalSet;
  public readonly serializationType: number;

  public constructor(target: ATNState, label: number);
  public makeLabel(): IntervalSet;
  public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
  public toString(): string;
}
