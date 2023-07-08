import { Recognizer } from '../recognizer';
import { ParserRuleContext } from '../context';
import { RuleContext } from '../context';
import { TokenStream } from '../token-stream';
import { CharStream } from '../char-stream';

export interface ExceptionParams {
  message: string;
  recognizer?: Recognizer<never>;
  input?: CharStream | TokenStream;
  ctx?: ParserRuleContext;
}

export declare class RecognitionException extends Error {
  public ctx: RuleContext;

  public constructor(params: ExceptionParams);
}
