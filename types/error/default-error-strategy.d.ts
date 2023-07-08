import { Parser } from '../parser';
import { ErrorStrategy } from './error-strategy';
import { Token } from '../token';
import { RecognitionException } from './recognizer-exception';

export declare class DefaultErrorStrategy implements ErrorStrategy {
  public recover(recognizer: Parser, e: RecognitionException): void;
  public recoverInline(recognizer: Parser): Token;
  public reportError(recognizer: Parser, e: RecognitionException): void;
  public reportMatch(recognizer: Parser): void;
  public reset(recognizer: Parser): void;
  public sync(recognizer: Parser): void;
}
