import { ATNConfigSet, LexerActionExecutor } from '../atn';

export declare class PredPrediction {}

export declare class DFAState {
  public stateNumber: number;
  public configs: ATNConfigSet;
  public edges: unknown[];
  public isAcceptState: boolean;
  public prediction: number;
  public lexerActionExecutor: LexerActionExecutor;
  public requiresFullContext: boolean;
  public predicates: PredPrediction[];
}
