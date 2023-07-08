import { ATNState } from '../state';
import { DecisionState } from '../state';
import { RuleStartState } from '../state';
import { RuleStopState } from '../state';
import { TokensStartState } from '../state';
import { LexerAction } from '../action';
import { RuleContext } from '../context';
import { IntervalSet } from '../misc';

export declare class ATN {
  public static readonly INVALID_ALT_NUMBER: 0;

  public grammarType: number;
  public maxTokenType: number;
  public states: ATNState[];
  public decisionToState: DecisionState[];
  public ruleToStartState: RuleStartState[];
  public ruleToStopState: RuleStopState[];
  public modeNameToStartState: Record<string, TokensStartState>;
  public ruleToTokenType: number[];
  public lexerActions: LexerAction[];
  public modeToStartState: TokensStartState[];

  public constructor(grammarType: number, maxTokenType: number);
  public nextTokensInContext(s: ATNState, ctx?: RuleContext): IntervalSet;
  public nextTokensNoContext(s: ATNState): IntervalSet;
  public nextTokens(s: ATNState, ctx?: RuleContext): IntervalSet;
  public addState(state: ATNState): void;
  public removeState(state: ATNState): void;
  public defineDecisionState(s: DecisionState): number;
  public getDecisionState(decision: number): DecisionState;
  public getExpectedTokens(stateNumber: number, ctx: RuleContext): IntervalSet;
}
