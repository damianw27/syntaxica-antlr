import { ParseTreeListener } from '../tree/parse-tree-listener';
import { ParseTree } from '../tree/parse-tree';

export declare class ParseTreeWalker {
  public static DEFAULT: ParseTreeWalker;

  public walk<T extends ParseTreeListener>(listener: T, t: ParseTree): void;
}
