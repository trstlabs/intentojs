import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** Spot order */
export enum SpotOrderType {
  STOPLOSS = 0,
  LIMITSELL = 1,
  LIMITBUY = 2,
  MARKETBUY = 3,
  UNRECOGNIZED = -1,
}
export const SpotOrderTypeSDKType = SpotOrderType;
export const SpotOrderTypeAmino = SpotOrderType;
export function spotOrderTypeFromJSON(object: any): SpotOrderType {
  switch (object) {
    case 0:
    case "STOPLOSS":
      return SpotOrderType.STOPLOSS;
    case 1:
    case "LIMITSELL":
      return SpotOrderType.LIMITSELL;
    case 2:
    case "LIMITBUY":
      return SpotOrderType.LIMITBUY;
    case 3:
    case "MARKETBUY":
      return SpotOrderType.MARKETBUY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SpotOrderType.UNRECOGNIZED;
  }
}
export function spotOrderTypeToJSON(object: SpotOrderType): string {
  switch (object) {
    case SpotOrderType.STOPLOSS:
      return "STOPLOSS";
    case SpotOrderType.LIMITSELL:
      return "LIMITSELL";
    case SpotOrderType.LIMITBUY:
      return "LIMITBUY";
    case SpotOrderType.MARKETBUY:
      return "MARKETBUY";
    case SpotOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum PerpetualPosition {
  UNSPECIFIED = 0,
  LONG = 1,
  SHORT = 2,
  UNRECOGNIZED = -1,
}
export const PerpetualPositionSDKType = PerpetualPosition;
export const PerpetualPositionAmino = PerpetualPosition;
export function perpetualPositionFromJSON(object: any): PerpetualPosition {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return PerpetualPosition.UNSPECIFIED;
    case 1:
    case "LONG":
      return PerpetualPosition.LONG;
    case 2:
    case "SHORT":
      return PerpetualPosition.SHORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PerpetualPosition.UNRECOGNIZED;
  }
}
export function perpetualPositionToJSON(object: PerpetualPosition): string {
  switch (object) {
    case PerpetualPosition.UNSPECIFIED:
      return "UNSPECIFIED";
    case PerpetualPosition.LONG:
      return "LONG";
    case PerpetualPosition.SHORT:
      return "SHORT";
    case PerpetualPosition.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface LegacyOrderPriceV1 {
  baseDenom: string;
  quoteDenom: string;
  rate: string;
}
export interface LegacyOrderPriceV1ProtoMsg {
  typeUrl: "/elys.tradeshield.LegacyOrderPriceV1";
  value: Uint8Array;
}
/**
 * @name LegacyOrderPriceV1Amino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.LegacyOrderPriceV1
 */
export interface LegacyOrderPriceV1Amino {
  base_denom?: string;
  quote_denom?: string;
  rate?: string;
}
export interface LegacyOrderPriceV1AminoMsg {
  type: "/elys.tradeshield.LegacyOrderPriceV1";
  value: LegacyOrderPriceV1Amino;
}
export interface LegacyOrderPriceV1SDKType {
  base_denom: string;
  quote_denom: string;
  rate: string;
}
export interface LegacyTriggerPriceV1 {
  tradingAssetDenom: string;
  rate: string;
}
export interface LegacyTriggerPriceV1ProtoMsg {
  typeUrl: "/elys.tradeshield.LegacyTriggerPriceV1";
  value: Uint8Array;
}
/**
 * @name LegacyTriggerPriceV1Amino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.LegacyTriggerPriceV1
 */
export interface LegacyTriggerPriceV1Amino {
  trading_asset_denom?: string;
  rate?: string;
}
export interface LegacyTriggerPriceV1AminoMsg {
  type: "/elys.tradeshield.LegacyTriggerPriceV1";
  value: LegacyTriggerPriceV1Amino;
}
export interface LegacyTriggerPriceV1SDKType {
  trading_asset_denom: string;
  rate: string;
}
function createBaseLegacyOrderPriceV1(): LegacyOrderPriceV1 {
  return {
    baseDenom: "",
    quoteDenom: "",
    rate: ""
  };
}
export const LegacyOrderPriceV1 = {
  typeUrl: "/elys.tradeshield.LegacyOrderPriceV1",
  is(o: any): o is LegacyOrderPriceV1 {
    return o && (o.$typeUrl === LegacyOrderPriceV1.typeUrl || typeof o.baseDenom === "string" && typeof o.quoteDenom === "string" && typeof o.rate === "string");
  },
  isSDK(o: any): o is LegacyOrderPriceV1SDKType {
    return o && (o.$typeUrl === LegacyOrderPriceV1.typeUrl || typeof o.base_denom === "string" && typeof o.quote_denom === "string" && typeof o.rate === "string");
  },
  isAmino(o: any): o is LegacyOrderPriceV1Amino {
    return o && (o.$typeUrl === LegacyOrderPriceV1.typeUrl || typeof o.base_denom === "string" && typeof o.quote_denom === "string" && typeof o.rate === "string");
  },
  encode(message: LegacyOrderPriceV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(18).string(message.quoteDenom);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyOrderPriceV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyOrderPriceV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.quoteDenom = reader.string();
          break;
        case 3:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyOrderPriceV1 {
    return {
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      quoteDenom: isSet(object.quoteDenom) ? String(object.quoteDenom) : "",
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },
  toJSON(message: LegacyOrderPriceV1): JsonSafe<LegacyOrderPriceV1> {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.quoteDenom !== undefined && (obj.quoteDenom = message.quoteDenom);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },
  fromPartial(object: Partial<LegacyOrderPriceV1>): LegacyOrderPriceV1 {
    const message = createBaseLegacyOrderPriceV1();
    message.baseDenom = object.baseDenom ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: LegacyOrderPriceV1Amino): LegacyOrderPriceV1 {
    const message = createBaseLegacyOrderPriceV1();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: LegacyOrderPriceV1): LegacyOrderPriceV1Amino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.rate = message.rate === "" ? undefined : message.rate;
    return obj;
  },
  fromAminoMsg(object: LegacyOrderPriceV1AminoMsg): LegacyOrderPriceV1 {
    return LegacyOrderPriceV1.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyOrderPriceV1ProtoMsg): LegacyOrderPriceV1 {
    return LegacyOrderPriceV1.decode(message.value);
  },
  toProto(message: LegacyOrderPriceV1): Uint8Array {
    return LegacyOrderPriceV1.encode(message).finish();
  },
  toProtoMsg(message: LegacyOrderPriceV1): LegacyOrderPriceV1ProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.LegacyOrderPriceV1",
      value: LegacyOrderPriceV1.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyOrderPriceV1.typeUrl, LegacyOrderPriceV1);
function createBaseLegacyTriggerPriceV1(): LegacyTriggerPriceV1 {
  return {
    tradingAssetDenom: "",
    rate: ""
  };
}
export const LegacyTriggerPriceV1 = {
  typeUrl: "/elys.tradeshield.LegacyTriggerPriceV1",
  is(o: any): o is LegacyTriggerPriceV1 {
    return o && (o.$typeUrl === LegacyTriggerPriceV1.typeUrl || typeof o.tradingAssetDenom === "string" && typeof o.rate === "string");
  },
  isSDK(o: any): o is LegacyTriggerPriceV1SDKType {
    return o && (o.$typeUrl === LegacyTriggerPriceV1.typeUrl || typeof o.trading_asset_denom === "string" && typeof o.rate === "string");
  },
  isAmino(o: any): o is LegacyTriggerPriceV1Amino {
    return o && (o.$typeUrl === LegacyTriggerPriceV1.typeUrl || typeof o.trading_asset_denom === "string" && typeof o.rate === "string");
  },
  encode(message: LegacyTriggerPriceV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradingAssetDenom !== "") {
      writer.uint32(10).string(message.tradingAssetDenom);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyTriggerPriceV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyTriggerPriceV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradingAssetDenom = reader.string();
          break;
        case 3:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyTriggerPriceV1 {
    return {
      tradingAssetDenom: isSet(object.tradingAssetDenom) ? String(object.tradingAssetDenom) : "",
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },
  toJSON(message: LegacyTriggerPriceV1): JsonSafe<LegacyTriggerPriceV1> {
    const obj: any = {};
    message.tradingAssetDenom !== undefined && (obj.tradingAssetDenom = message.tradingAssetDenom);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },
  fromPartial(object: Partial<LegacyTriggerPriceV1>): LegacyTriggerPriceV1 {
    const message = createBaseLegacyTriggerPriceV1();
    message.tradingAssetDenom = object.tradingAssetDenom ?? "";
    message.rate = object.rate ?? "";
    return message;
  },
  fromAmino(object: LegacyTriggerPriceV1Amino): LegacyTriggerPriceV1 {
    const message = createBaseLegacyTriggerPriceV1();
    if (object.trading_asset_denom !== undefined && object.trading_asset_denom !== null) {
      message.tradingAssetDenom = object.trading_asset_denom;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = object.rate;
    }
    return message;
  },
  toAmino(message: LegacyTriggerPriceV1): LegacyTriggerPriceV1Amino {
    const obj: any = {};
    obj.trading_asset_denom = message.tradingAssetDenom === "" ? undefined : message.tradingAssetDenom;
    obj.rate = message.rate === "" ? undefined : message.rate;
    return obj;
  },
  fromAminoMsg(object: LegacyTriggerPriceV1AminoMsg): LegacyTriggerPriceV1 {
    return LegacyTriggerPriceV1.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyTriggerPriceV1ProtoMsg): LegacyTriggerPriceV1 {
    return LegacyTriggerPriceV1.decode(message.value);
  },
  toProto(message: LegacyTriggerPriceV1): Uint8Array {
    return LegacyTriggerPriceV1.encode(message).finish();
  },
  toProtoMsg(message: LegacyTriggerPriceV1): LegacyTriggerPriceV1ProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.LegacyTriggerPriceV1",
      value: LegacyTriggerPriceV1.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyTriggerPriceV1.typeUrl, LegacyTriggerPriceV1);