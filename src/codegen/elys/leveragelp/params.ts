import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** Params defines the parameters for the module. */
export interface LegacyParams {
  leverageMax: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  safetyFactor: string;
  whitelistingEnabled: boolean;
  epochLength: bigint;
  fallbackEnabled: boolean;
  /** Number of positions to process per block */
  numberPerBlock: bigint;
}
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.leveragelp.LegacyParams";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface LegacyParamsAmino {
  leverage_max?: string;
  max_open_positions?: string;
  pool_open_threshold?: string;
  safety_factor?: string;
  whitelisting_enabled?: boolean;
  epoch_length?: string;
  fallback_enabled?: boolean;
  /** Number of positions to process per block */
  number_per_block?: string;
}
export interface LegacyParamsAminoMsg {
  type: "/elys.leveragelp.LegacyParams";
  value: LegacyParamsAmino;
}
/** Params defines the parameters for the module. */
export interface LegacyParamsSDKType {
  leverage_max: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  safety_factor: string;
  whitelisting_enabled: boolean;
  epoch_length: bigint;
  fallback_enabled: boolean;
  number_per_block: bigint;
}
/** Params defines the parameters for the module. */
export interface Params {
  leverageMax: string;
  maxOpenPositions: bigint;
  poolOpenThreshold: string;
  safetyFactor: string;
  whitelistingEnabled: boolean;
  epochLength: bigint;
  fallbackEnabled: boolean;
  /** Number of positions to process per block */
  numberPerBlock: bigint;
  enabledPools: bigint[];
  exitBuffer: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.leveragelp.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  leverage_max?: string;
  max_open_positions?: string;
  pool_open_threshold?: string;
  safety_factor?: string;
  whitelisting_enabled?: boolean;
  epoch_length?: string;
  fallback_enabled?: boolean;
  /** Number of positions to process per block */
  number_per_block?: string;
  enabled_pools?: string[];
  exit_buffer?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.leveragelp.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  leverage_max: string;
  max_open_positions: bigint;
  pool_open_threshold: string;
  safety_factor: string;
  whitelisting_enabled: boolean;
  epoch_length: bigint;
  fallback_enabled: boolean;
  number_per_block: bigint;
  enabled_pools: bigint[];
  exit_buffer: string;
}
function createBaseLegacyParams(): LegacyParams {
  return {
    leverageMax: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    safetyFactor: "",
    whitelistingEnabled: false,
    epochLength: BigInt(0),
    fallbackEnabled: false,
    numberPerBlock: BigInt(0)
  };
}
export const LegacyParams = {
  typeUrl: "/elys.leveragelp.LegacyParams",
  is(o: any): o is LegacyParams {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.leverageMax === "string" && typeof o.maxOpenPositions === "bigint" && typeof o.poolOpenThreshold === "string" && typeof o.safetyFactor === "string" && typeof o.whitelistingEnabled === "boolean" && typeof o.epochLength === "bigint" && typeof o.fallbackEnabled === "boolean" && typeof o.numberPerBlock === "bigint");
  },
  isSDK(o: any): o is LegacyParamsSDKType {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.leverage_max === "string" && typeof o.max_open_positions === "bigint" && typeof o.pool_open_threshold === "string" && typeof o.safety_factor === "string" && typeof o.whitelisting_enabled === "boolean" && typeof o.epoch_length === "bigint" && typeof o.fallback_enabled === "boolean" && typeof o.number_per_block === "bigint");
  },
  isAmino(o: any): o is LegacyParamsAmino {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.leverage_max === "string" && typeof o.max_open_positions === "bigint" && typeof o.pool_open_threshold === "string" && typeof o.safety_factor === "string" && typeof o.whitelisting_enabled === "boolean" && typeof o.epoch_length === "bigint" && typeof o.fallback_enabled === "boolean" && typeof o.number_per_block === "bigint");
  },
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(16).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(40).bool(message.whitelistingEnabled);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(48).int64(message.epochLength);
    }
    if (message.fallbackEnabled === true) {
      writer.uint32(56).bool(message.fallbackEnabled);
    }
    if (message.numberPerBlock !== BigInt(0)) {
      writer.uint32(64).int64(message.numberPerBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxOpenPositions = reader.int64();
          break;
        case 3:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.whitelistingEnabled = reader.bool();
          break;
        case 6:
          message.epochLength = reader.int64();
          break;
        case 7:
          message.fallbackEnabled = reader.bool();
          break;
        case 8:
          message.numberPerBlock = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyParams {
    return {
      leverageMax: isSet(object.leverageMax) ? String(object.leverageMax) : "",
      maxOpenPositions: isSet(object.maxOpenPositions) ? BigInt(object.maxOpenPositions.toString()) : BigInt(0),
      poolOpenThreshold: isSet(object.poolOpenThreshold) ? String(object.poolOpenThreshold) : "",
      safetyFactor: isSet(object.safetyFactor) ? String(object.safetyFactor) : "",
      whitelistingEnabled: isSet(object.whitelistingEnabled) ? Boolean(object.whitelistingEnabled) : false,
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      fallbackEnabled: isSet(object.fallbackEnabled) ? Boolean(object.fallbackEnabled) : false,
      numberPerBlock: isSet(object.numberPerBlock) ? BigInt(object.numberPerBlock.toString()) : BigInt(0)
    };
  },
  toJSON(message: LegacyParams): JsonSafe<LegacyParams> {
    const obj: any = {};
    message.leverageMax !== undefined && (obj.leverageMax = message.leverageMax);
    message.maxOpenPositions !== undefined && (obj.maxOpenPositions = (message.maxOpenPositions || BigInt(0)).toString());
    message.poolOpenThreshold !== undefined && (obj.poolOpenThreshold = message.poolOpenThreshold);
    message.safetyFactor !== undefined && (obj.safetyFactor = message.safetyFactor);
    message.whitelistingEnabled !== undefined && (obj.whitelistingEnabled = message.whitelistingEnabled);
    message.epochLength !== undefined && (obj.epochLength = (message.epochLength || BigInt(0)).toString());
    message.fallbackEnabled !== undefined && (obj.fallbackEnabled = message.fallbackEnabled);
    message.numberPerBlock !== undefined && (obj.numberPerBlock = (message.numberPerBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<LegacyParams>): LegacyParams {
    const message = createBaseLegacyParams();
    message.leverageMax = object.leverageMax ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.fallbackEnabled = object.fallbackEnabled ?? false;
    message.numberPerBlock = object.numberPerBlock !== undefined && object.numberPerBlock !== null ? BigInt(object.numberPerBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.max_open_positions !== undefined && object.max_open_positions !== null) {
      message.maxOpenPositions = BigInt(object.max_open_positions);
    }
    if (object.pool_open_threshold !== undefined && object.pool_open_threshold !== null) {
      message.poolOpenThreshold = object.pool_open_threshold;
    }
    if (object.safety_factor !== undefined && object.safety_factor !== null) {
      message.safetyFactor = object.safety_factor;
    }
    if (object.whitelisting_enabled !== undefined && object.whitelisting_enabled !== null) {
      message.whitelistingEnabled = object.whitelisting_enabled;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    if (object.fallback_enabled !== undefined && object.fallback_enabled !== null) {
      message.fallbackEnabled = object.fallback_enabled;
    }
    if (object.number_per_block !== undefined && object.number_per_block !== null) {
      message.numberPerBlock = BigInt(object.number_per_block);
    }
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.max_open_positions = message.maxOpenPositions !== BigInt(0) ? message.maxOpenPositions?.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold === "" ? undefined : message.poolOpenThreshold;
    obj.safety_factor = message.safetyFactor === "" ? undefined : message.safetyFactor;
    obj.whitelisting_enabled = message.whitelistingEnabled === false ? undefined : message.whitelistingEnabled;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength?.toString() : undefined;
    obj.fallback_enabled = message.fallbackEnabled === false ? undefined : message.fallbackEnabled;
    obj.number_per_block = message.numberPerBlock !== BigInt(0) ? message.numberPerBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LegacyParamsAminoMsg): LegacyParams {
    return LegacyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyParamsProtoMsg): LegacyParams {
    return LegacyParams.decode(message.value);
  },
  toProto(message: LegacyParams): Uint8Array {
    return LegacyParams.encode(message).finish();
  },
  toProtoMsg(message: LegacyParams): LegacyParamsProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyParams.typeUrl, LegacyParams);
function createBaseParams(): Params {
  return {
    leverageMax: "",
    maxOpenPositions: BigInt(0),
    poolOpenThreshold: "",
    safetyFactor: "",
    whitelistingEnabled: false,
    epochLength: BigInt(0),
    fallbackEnabled: false,
    numberPerBlock: BigInt(0),
    enabledPools: [],
    exitBuffer: ""
  };
}
export const Params = {
  typeUrl: "/elys.leveragelp.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.leverageMax === "string" && typeof o.maxOpenPositions === "bigint" && typeof o.poolOpenThreshold === "string" && typeof o.safetyFactor === "string" && typeof o.whitelistingEnabled === "boolean" && typeof o.epochLength === "bigint" && typeof o.fallbackEnabled === "boolean" && typeof o.numberPerBlock === "bigint" && Array.isArray(o.enabledPools) && (!o.enabledPools.length || typeof o.enabledPools[0] === "bigint") && typeof o.exitBuffer === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.leverage_max === "string" && typeof o.max_open_positions === "bigint" && typeof o.pool_open_threshold === "string" && typeof o.safety_factor === "string" && typeof o.whitelisting_enabled === "boolean" && typeof o.epoch_length === "bigint" && typeof o.fallback_enabled === "boolean" && typeof o.number_per_block === "bigint" && Array.isArray(o.enabled_pools) && (!o.enabled_pools.length || typeof o.enabled_pools[0] === "bigint") && typeof o.exit_buffer === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.leverage_max === "string" && typeof o.max_open_positions === "bigint" && typeof o.pool_open_threshold === "string" && typeof o.safety_factor === "string" && typeof o.whitelisting_enabled === "boolean" && typeof o.epoch_length === "bigint" && typeof o.fallback_enabled === "boolean" && typeof o.number_per_block === "bigint" && Array.isArray(o.enabled_pools) && (!o.enabled_pools.length || typeof o.enabled_pools[0] === "bigint") && typeof o.exit_buffer === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leverageMax !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.maxOpenPositions !== BigInt(0)) {
      writer.uint32(16).int64(message.maxOpenPositions);
    }
    if (message.poolOpenThreshold !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.poolOpenThreshold, 18).atomics);
    }
    if (message.safetyFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.safetyFactor, 18).atomics);
    }
    if (message.whitelistingEnabled === true) {
      writer.uint32(40).bool(message.whitelistingEnabled);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(48).int64(message.epochLength);
    }
    if (message.fallbackEnabled === true) {
      writer.uint32(56).bool(message.fallbackEnabled);
    }
    if (message.numberPerBlock !== BigInt(0)) {
      writer.uint32(64).int64(message.numberPerBlock);
    }
    writer.uint32(74).fork();
    for (const v of message.enabledPools) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.exitBuffer !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.exitBuffer, 18).atomics);
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
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.maxOpenPositions = reader.int64();
          break;
        case 3:
          message.poolOpenThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.safetyFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.whitelistingEnabled = reader.bool();
          break;
        case 6:
          message.epochLength = reader.int64();
          break;
        case 7:
          message.fallbackEnabled = reader.bool();
          break;
        case 8:
          message.numberPerBlock = reader.int64();
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.enabledPools.push(reader.uint64());
            }
          } else {
            message.enabledPools.push(reader.uint64());
          }
          break;
        case 10:
          message.exitBuffer = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      leverageMax: isSet(object.leverageMax) ? String(object.leverageMax) : "",
      maxOpenPositions: isSet(object.maxOpenPositions) ? BigInt(object.maxOpenPositions.toString()) : BigInt(0),
      poolOpenThreshold: isSet(object.poolOpenThreshold) ? String(object.poolOpenThreshold) : "",
      safetyFactor: isSet(object.safetyFactor) ? String(object.safetyFactor) : "",
      whitelistingEnabled: isSet(object.whitelistingEnabled) ? Boolean(object.whitelistingEnabled) : false,
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      fallbackEnabled: isSet(object.fallbackEnabled) ? Boolean(object.fallbackEnabled) : false,
      numberPerBlock: isSet(object.numberPerBlock) ? BigInt(object.numberPerBlock.toString()) : BigInt(0),
      enabledPools: Array.isArray(object?.enabledPools) ? object.enabledPools.map((e: any) => BigInt(e.toString())) : [],
      exitBuffer: isSet(object.exitBuffer) ? String(object.exitBuffer) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.leverageMax !== undefined && (obj.leverageMax = message.leverageMax);
    message.maxOpenPositions !== undefined && (obj.maxOpenPositions = (message.maxOpenPositions || BigInt(0)).toString());
    message.poolOpenThreshold !== undefined && (obj.poolOpenThreshold = message.poolOpenThreshold);
    message.safetyFactor !== undefined && (obj.safetyFactor = message.safetyFactor);
    message.whitelistingEnabled !== undefined && (obj.whitelistingEnabled = message.whitelistingEnabled);
    message.epochLength !== undefined && (obj.epochLength = (message.epochLength || BigInt(0)).toString());
    message.fallbackEnabled !== undefined && (obj.fallbackEnabled = message.fallbackEnabled);
    message.numberPerBlock !== undefined && (obj.numberPerBlock = (message.numberPerBlock || BigInt(0)).toString());
    if (message.enabledPools) {
      obj.enabledPools = message.enabledPools.map(e => (e || BigInt(0)).toString());
    } else {
      obj.enabledPools = [];
    }
    message.exitBuffer !== undefined && (obj.exitBuffer = message.exitBuffer);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.leverageMax = object.leverageMax ?? "";
    message.maxOpenPositions = object.maxOpenPositions !== undefined && object.maxOpenPositions !== null ? BigInt(object.maxOpenPositions.toString()) : BigInt(0);
    message.poolOpenThreshold = object.poolOpenThreshold ?? "";
    message.safetyFactor = object.safetyFactor ?? "";
    message.whitelistingEnabled = object.whitelistingEnabled ?? false;
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.fallbackEnabled = object.fallbackEnabled ?? false;
    message.numberPerBlock = object.numberPerBlock !== undefined && object.numberPerBlock !== null ? BigInt(object.numberPerBlock.toString()) : BigInt(0);
    message.enabledPools = object.enabledPools?.map(e => BigInt(e.toString())) || [];
    message.exitBuffer = object.exitBuffer ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.max_open_positions !== undefined && object.max_open_positions !== null) {
      message.maxOpenPositions = BigInt(object.max_open_positions);
    }
    if (object.pool_open_threshold !== undefined && object.pool_open_threshold !== null) {
      message.poolOpenThreshold = object.pool_open_threshold;
    }
    if (object.safety_factor !== undefined && object.safety_factor !== null) {
      message.safetyFactor = object.safety_factor;
    }
    if (object.whitelisting_enabled !== undefined && object.whitelisting_enabled !== null) {
      message.whitelistingEnabled = object.whitelisting_enabled;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    if (object.fallback_enabled !== undefined && object.fallback_enabled !== null) {
      message.fallbackEnabled = object.fallback_enabled;
    }
    if (object.number_per_block !== undefined && object.number_per_block !== null) {
      message.numberPerBlock = BigInt(object.number_per_block);
    }
    message.enabledPools = object.enabled_pools?.map(e => BigInt(e)) || [];
    if (object.exit_buffer !== undefined && object.exit_buffer !== null) {
      message.exitBuffer = object.exit_buffer;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.max_open_positions = message.maxOpenPositions !== BigInt(0) ? message.maxOpenPositions?.toString() : undefined;
    obj.pool_open_threshold = message.poolOpenThreshold === "" ? undefined : message.poolOpenThreshold;
    obj.safety_factor = message.safetyFactor === "" ? undefined : message.safetyFactor;
    obj.whitelisting_enabled = message.whitelistingEnabled === false ? undefined : message.whitelistingEnabled;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength?.toString() : undefined;
    obj.fallback_enabled = message.fallbackEnabled === false ? undefined : message.fallbackEnabled;
    obj.number_per_block = message.numberPerBlock !== BigInt(0) ? message.numberPerBlock?.toString() : undefined;
    if (message.enabledPools) {
      obj.enabled_pools = message.enabledPools.map(e => e.toString());
    } else {
      obj.enabled_pools = message.enabledPools;
    }
    obj.exit_buffer = message.exitBuffer === "" ? undefined : message.exitBuffer;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);