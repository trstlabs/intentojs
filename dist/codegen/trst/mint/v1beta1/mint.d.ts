import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual expected provisions */
    annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
    annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** the time the chain starts */
    startTime: Timestamp;
    /** initial annual provisions */
    initialAnnualProvisions: string;
    /** factor to reduce inflation by each year */
    reductionFactor: string;
    /** expected blocks per year */
    blocksPerYear: bigint;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
    mint_denom: string;
    start_time: TimestampSDKType;
    initial_annual_provisions: string;
    reduction_factor: string;
    blocks_per_year: bigint;
}
export declare const Minter: {
    encode(message: Minter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Minter;
    fromPartial(object: DeepPartial<Minter>): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
