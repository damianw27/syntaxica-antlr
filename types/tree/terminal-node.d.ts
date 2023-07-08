import { ParseTree } from '../tree/parse-tree';
import { Token } from '../token';
import { ParserRuleContext } from '../context/parser-rule-context';

export declare class TerminalNode extends ParseTree {
  public symbol: Token;
  public parentCtx: ParserRuleContext;
}
