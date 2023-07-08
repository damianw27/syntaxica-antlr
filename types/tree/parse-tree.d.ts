import { SyntaxTree } from '../tree/syntax-tree';

export declare class ParseTree extends SyntaxTree {
  public children: ParseTree[];

  public getText(): string;

  public get ruleIndex(): number;
}
