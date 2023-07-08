import { ATNSimulator } from './atn-simulator';
import { DFA } from '../dfa';
import { Recognizer } from '../recognizer';
import { ATN } from './atn';
import { CharStream } from '../char-stream';
import { PredictionContextCache } from './prediction-context-cache';

export declare class LexerATNSimulator extends ATNSimulator {
  public decisionToDFA: DFA[];

  public constructor(
    recog: Recognizer<number>,
    atn: ATN,
    decisionToDFA: DFA[],
    sharedContextCache: PredictionContextCache,
  );
  public consume(input: CharStream): void;
}
