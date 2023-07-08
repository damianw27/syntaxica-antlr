import { Parser } from '../parser';
import { RecognitionException } from './recognizer-exception';
import { Token } from '../token';

export declare class ErrorStrategy {
  public reset(recognizer: Parser): void;
  public sync(recognizer: Parser): void;
  public recover(recognizer: Parser, e: RecognitionException): void;
  public recoverInline(recognizer: Parser): Token;
  public reportMatch(recognizer: Parser): void;
  public reportError(recognizer: Parser, e: RecognitionException): void;
}
