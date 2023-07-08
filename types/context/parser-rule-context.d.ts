import { RuleContext } from './rule-context';
import { Token } from '../token';
import { ParseTree, TerminalNode } from '../tree';
import { RecognitionException } from '../error';
import { Parser } from '../parser';

type RuleContextConstructor<T> = new (
  parser?: Parser,
  parent?: ParserRuleContext,
  invokingState?: number,
  ...args: any[]
) => T;

export declare class ParserRuleContext extends RuleContext {
  public start: Token;
  public stop?: Token;
  public children: ParserRuleContext[] | null;
  public parentCtx?: ParserRuleContext;
  public exception?: RecognitionException;
  public parser?: Parser;

  public constructor(parent?: ParserRuleContext, invokingStateNumber?: number);
  public copyFrom(ctx: ParserRuleContext): void;
  public getChildCount(): number;
  public getChild(i: number): ParseTree;
  public getToken(ttype: number, i: number): TerminalNode;
  public getTokens(ttype: number): TerminalNode[];
  public getTypedRuleContext<T extends ParserRuleContext>(ctxType: RuleContextConstructor<T>, i: number): T;
  public getTypedRuleContexts<T extends ParserRuleContext>(ctxType: RuleContextConstructor<T>): T[];
}
