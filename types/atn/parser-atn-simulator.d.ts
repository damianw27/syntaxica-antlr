import { ATNSimulator } from './atn-simulator';
import { PredictionMode } from './predication-mode';
import { DFA } from '../dfa';
import { ATN } from './atn';
import { Recognizer } from '../recognizer';
import { Token } from '../token';
import { TokenStream } from '../token-stream';
import { ParserRuleContext } from '../context';
import { PredictionContextCache } from './prediction-context-cache';

export declare class ParserATNSimulator extends ATNSimulator {
  public predictionMode: PredictionMode;
  public decisionToDFA: DFA[];
  public atn: ATN;
  public debug?: boolean;
  public trace_atn_sim?: boolean;

  public constructor(
    recog: Recognizer<Token>,
    atn: ATN,
    decisionToDFA: DFA[],
    sharedContextCache: PredictionContextCache,
  );
  public adaptivePredict(input: TokenStream, decision: number, outerContext: ParserRuleContext): number;
}
