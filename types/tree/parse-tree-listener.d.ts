import { TerminalNode } from '../tree/terminal-node';
import { ErrorNode } from '../tree/error-node';
import { ParserRuleContext } from '../context/parser-rule-context';

export declare abstract class ParseTreeListener {
  public visitTerminal(node: TerminalNode): void;
  public visitErrorNode(node: ErrorNode): void;
  public enterEveryRule(ctx: ParserRuleContext): void;
  public exitEveryRule(ctx: ParserRuleContext): void;
}
