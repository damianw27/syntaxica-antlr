import { ATNState } from './atn-state';
import { RuleStopState } from './rule-stop-state';

export declare class RuleStartState extends ATNState {
  public stateType: number;
  public stopState: RuleStopState;
  public isPrecedenceRule: boolean;
  public isLeftRecursiveRule: boolean;
}
