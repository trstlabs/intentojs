import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface BitArray {
    bits: bigint;
    elems: bigint[];
}
export interface BitArraySDKType {
    bits: bigint;
    elems: bigint[];
}
export declare const BitArray: {
    encode(message: BitArray, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BitArray;
    fromPartial(object: DeepPartial<BitArray>): BitArray;
};
