import { RecognitionException } from './recognizer-exception';
import { Parser } from '../parser';

export declare class FailedPredicateException extends RecognitionException {
  public constructor(recognizer: Parser, predicate?: string, message?: string);
}
