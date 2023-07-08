import { ATNState } from './atn-state';

export declare class DecisionState extends ATNState {
  public decision: number;
  public nonGreedy: boolean;
}
