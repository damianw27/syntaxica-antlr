import { ErrorNode } from '../tree/error-node';
import { TerminalNode } from '../tree/terminal-node';
import { RuleNode } from '../tree/rule-node';
import { ParseTree } from '../tree/parse-tree';

export declare class ParseTreeVisitor<Result> {
  public visit(tree: ParseTree): Result;
  public visitChildren(node: RuleNode): Result;
  public visitTerminal(node: TerminalNode): Result;
  public visitErrorNode(node: ErrorNode): Result;
}
