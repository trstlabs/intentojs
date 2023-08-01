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
function createBaseMinter(): Minter {
  return {
    annualProvisions: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions !== "") {
      writer.uint32(10).string(message.annualProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annualProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    startTime: Timestamp.fromPartial({}),
    initialAnnualProvisions: "",
    reductionFactor: "",
    blocksPerYear: BigInt(0)
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialAnnualProvisions !== "") {
      writer.uint32(26).string(message.initialAnnualProvisions);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(34).string(message.reductionFactor);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(40).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialAnnualProvisions = reader.string();
          break;
        case 4:
          message.reductionFactor = reader.string();
          break;
        case 5:
          message.blocksPerYear = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
    message.reductionFactor = object.reductionFactor ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  }
};