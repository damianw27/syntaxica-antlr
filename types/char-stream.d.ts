export declare class CharStream {
  public index: number;
  public size: number;

  public constructor(data: string, decodeToUnicodeCodePoints?: boolean);
  public reset(): void;
  public consume(): void;
  public LA(offset: number): number;
  public LT(offset: number): number;
  public mark(): number;
  public release(marker: number): void;
  public seek(index: number): void;
  public getText(start: number, stop: number): string;
  public toString(): string;
}
