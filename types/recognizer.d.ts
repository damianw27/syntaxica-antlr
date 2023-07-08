import { ErrorListener } from './error';
import { ATN } from './atn';

export declare class Recognizer<TSymbol> {
  public atn: ATN;
  public state: number;

  public checkVersion(toolVersion: string): void;
  public addErrorListener(listener: ErrorListener<TSymbol>): void;
  public removeErrorListeners(): void;

  public get grammarFileName(): string;
  public get literalNames(): (string | null)[];
  public get symbolicNames(): (string | null)[];
  public get ruleNames(): string[];
  public get serializedATN(): number[];
}
