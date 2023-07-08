import { ErrorListener } from './error-listener';
import { Recognizer } from '../recognizer';
import { RecognitionException } from './recognizer-exception';

export declare class DiagnosticErrorListener<TSymbol> implements ErrorListener<TSymbol> {
  public syntaxError(
    recognizer: Recognizer<TSymbol>,
    offendingSymbol: TSymbol,
    line: number,
    column: number,
    msg: string,
    exception?: RecognitionException,
  ): void;
}
