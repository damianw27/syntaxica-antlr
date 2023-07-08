import { ATN } from './atn/atn';
import { TokenStream } from './token-stream';
import { ParserRuleContext } from './context/parser-rule-context';
import { ParserATNSimulator } from './atn/parser-atn-simulator';
import { ErrorStrategy } from './error/error-strategy';
import { Token } from './token';
import { IntervalSet } from './misc/interval-set';
import { Printer } from './utils/printer';
import { Recognizer } from './recognizer';

export declare class Parser extends Recognizer<Token> {
  public static readonly EOF: number;

  public _input: TokenStream;
  public _ctx: ParserRuleContext;
  public _interp: ParserATNSimulator;
  public _errHandler: ErrorStrategy;
  public _parseListeners?: any[];
  public matchedEOF: boolean;
  public buildParseTrees: boolean;
  public printer?: Printer;

  public constructor(input: TokenStream);
  public match(ttype: number): Token;
  public matchWildcard(): Token;
  public consume(): Token;
  public enterRule(localctx: ParserRuleContext, state: number, ruleIndex: number): void;
  public exitRule(): void;
  public triggerExitRuleEvent(): void;
  public enterOuterAlt(localctx: ParserRuleContext, altNum: number): void;
  public enterRecursionRule(localctx: ParserRuleContext, state: number, ruleIndex: number, precedence: number): void;
  public pushNewRecursionContext(localctx: ParserRuleContext, state: number, ruleIndex: number): void;
  public unrollRecursionContexts(parentCtx: ParserRuleContext): void;
  public precpred(localctx: ParserRuleContext, precedence: number): boolean;
  public getRuleInvocationStack(): string[];
  public dumpDFA(): void;
  public getExpectedTokens(): IntervalSet;
  public getTokenStream(): TokenStream;
  public getATNWithBypassAlts(): ATN;
}
