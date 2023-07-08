import { Parser } from '../parser';
import { RuleNode } from '../tree';

export declare class RuleContext extends RuleNode {
  public parentCtx?: RuleContext;
  public invokingState: number;

  public get ruleContext(): RuleContext;
  public toStringTree(ruleNames: string[] | null, recog: Parser): string;
}
