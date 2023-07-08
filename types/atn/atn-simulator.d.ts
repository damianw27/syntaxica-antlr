import { ATN } from './atn';
import { PredictionContextCache } from './prediction-context-cache';
import { PredicationContext } from '../context';
import { DFAState } from '../dfa/dfa-state';

export declare class ATNSimulator {
  public static readonly ERROR: DFAState;

  public readonly atn: ATN;
  public readonly sharedContextCache: PredictionContextCache;

  public constructor(atn: ATN, sharedContextCache: PredictionContextCache);
  public getCachedContext(context: PredicationContext): PredicationContext;
}
