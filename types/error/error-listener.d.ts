import { Recognizer } from '../recognizer';
import { RecognitionException } from './recognizer-exception';

export declare class ErrorListener<TSymbol> {
  public syntaxError(
    recognizer: Recognizer<TSymbol>,
    offendingSymbol: TSymbol,
    line: number,
    column: number,
    msg: string,
    e?: RecognitionException,
  ): void;
}
