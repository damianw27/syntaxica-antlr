import { ATNState } from '../state';
import { IntervalSet } from '../misc';

export declare class Transition {
  public static readonly EPSILON: 1;
  public static readonly RANGE: 2;
  public static readonly RULE: 3;
  public static readonly PREDICATE: 4;
  public static readonly ATOM: 5;
  public static readonly ACTION: 6;
  public static readonly SET: 7;
  public static readonly NOT_SET: 8;
  public static readonly WILDCARD: 9;
  public static readonly PRECEDENCE: 10;

  public static readonly serializationNames: [
    'INVALID',
    'EPSILON',
    'RANGE',
    'RULE',
    'PREDICATE',
    'ATOM',
    'ACTION',
    'SET',
    'NOT_SET',
    'WILDCARD',
    'PRECEDENCE',
  ];

  public static readonly serializationTypes: {
    EpsilonTransition: typeof Transition.EPSILON;
    RangeTransition: typeof Transition.RANGE;
    RuleTransition: typeof Transition.RULE;
    PredicateTransition: typeof Transition.PREDICATE;
    AtomTransition: typeof Transition.ATOM;
    ActionTransition: typeof Transition.ACTION;
    SetTransition: typeof Transition.SET;
    NotSetTransition: typeof Transition.NOT_SET;
    WildcardTransition: typeof Transition.WILDCARD;
    PrecedencePredicateTransition: typeof Transition.PRECEDENCE;
  };

  public readonly target: ATNState;
  public isEpsilon: boolean;
  public label: IntervalSet;
  public serializationType?: number;

  public constructor(target: ATNState);
}
