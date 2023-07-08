import { HashCode } from '../misc';

export declare class PredicationContext {
  public static readonly EMPTY: null;
  public static readonly EMPTY_RETURN_STATE: number;
  public static readonly globalNodeCount: number;
  public static readonly id: number;
  public static readonly trace_atn_sim: boolean;

  public readonly cachedHashCode: number;

  public constructor(cachedHashCode: number);
  public isEmpty(): boolean;
  public isEmptyPath(): boolean;
  public hashCode(): number;
  public updateHashCode(hashCode: HashCode): void;
}
