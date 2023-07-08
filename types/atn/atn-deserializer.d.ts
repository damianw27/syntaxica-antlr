import { ATN } from './atn';
import { ATNDeserializationOptions } from './atn-deserialization-options';

export declare class ATNDeserializer {
  public constructor(options?: ATNDeserializationOptions);
  public deserialize(data: number[]): ATN;
}
