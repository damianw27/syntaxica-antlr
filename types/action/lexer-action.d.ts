import { LexerActionType } from '$declarations/antlr/atn/lexer-action-type';
import { HashCode } from '$declarations/antlr/misc/hash-code';

export declare abstract class LexerAction {
  public readonly actionType: LexerActionType;
  public readonly isPositionDependent: boolean;

  protected constructor(action: LexerActionType);
  public hashCode(): number;
  public updateHashCode(hash: HashCode): void;
  public equals(other: LexerAction): boolean;
}
