export declare class HashCode {
  public static hashStuff(...hashes: number[]): number;

  public update(...hashes: number[]): void;
  public finish(): number;
}
