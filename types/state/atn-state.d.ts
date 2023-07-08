import { Transition } from '../transition';
import { ATN } from '../atn';
import { IntervalSet } from '../misc';

export declare class ATNState {
  public static readonly INVALID_TYPE: 0;
  public static readonly BASIC: 1;
  public static readonly RULE_START: 2;
  public static readonly BLOCK_START: 3;
  public static readonly PLUS_BLOCK_START: 4;
  public static readonly STAR_BLOCK_START: 5;
  public static readonly TOKEN_START: 6;
  public static readonly RULE_STOP: 7;
  public static readonly BLOCK_END: 8;
  public static readonly STAR_LOOP_BACK: 9;
  public static readonly STAR_LOOP_ENTRY: 10;
  public static readonly PLUS_LOOP_BACK: 11;
  public static readonly LOOP_END: 12;
  public static readonly INVALID_STATE_NUMBER: -1;

  public static readonly serializationNames: [
    'INVALID',
    'BASIC',
    'RULE_START',
    'BLOCK_START',
    'PLUS_BLOCK_START',
    'STAR_BLOCK_START',
    'TOKEN_START',
    'RULE_STOP',
    'BLOCK_END',
    'STAR_LOOP_BACK',
    'STAR_LOOP_ENTRY',
    'PLUS_LOOP_BACK',
    'LOOP_END',
  ];

  public atn: ATN | null;
  public stateNumber: number;
  public stateType: number | null;
  public ruleIndex: number;
  public epsilonOnlyTransitions: boolean;
  public transitions: Transition[];
  public nextTokenWithinRule: IntervalSet | null;
  public toString(): number;
  public equals(other: ATNState): boolean;
  public isNonGreedyExitState(): boolean;
  public addTransition(trans: Transition, index?: number): void;
}
