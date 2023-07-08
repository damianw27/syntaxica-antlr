import { ATNConfigSet } from '../atn';
import { RecognitionException } from './recognizer-exception';
import { Recognizer } from '../recognizer';

export declare class NoViableAltException extends RecognitionException {
  public deadEndConfigs: ATNConfigSet;

  public constructor(recognizer: Recognizer<any>);
}
