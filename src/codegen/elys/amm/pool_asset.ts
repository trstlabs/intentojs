import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export interface LegacyPoolAsset {
  token: Coin;
  weight: string;
}
export interface LegacyPoolAssetProtoMsg {
  typeUrl: "/elys.amm.LegacyPoolAsset";
  value: Uint8Array;
}
/**
 * @name LegacyPoolAssetAmino
 * @package elys.amm
 * @see proto type: elys.amm.LegacyPoolAsset
 */
export interface LegacyPoolAssetAmino {
  token?: CoinAmino;
  weight?: string;
}
export interface LegacyPoolAssetAminoMsg {
  type: "/elys.amm.LegacyPoolAsset";
  value: LegacyPoolAssetAmino;
}
export interface LegacyPoolAssetSDKType {
  token: CoinSDKType;
  weight: string;
}
export interface PoolAsset {
  token: Coin;
  weight: string;
  externalLiquidityRatio: string;
}
export interface PoolAssetProtoMsg {
  typeUrl: "/elys.amm.PoolAsset";
  value: Uint8Array;
}
/**
 * @name PoolAssetAmino
 * @package elys.amm
 * @see proto type: elys.amm.PoolAsset
 */
export interface PoolAssetAmino {
  token?: CoinAmino;
  weight?: string;
  external_liquidity_ratio?: string;
}
export interface PoolAssetAminoMsg {
  type: "/elys.amm.PoolAsset";
  value: PoolAssetAmino;
}
export interface PoolAssetSDKType {
  token: CoinSDKType;
  weight: string;
  external_liquidity_ratio: string;
}
function createBaseLegacyPoolAsset(): LegacyPoolAsset {
  return {
    token: Coin.fromPartial({}),
    weight: ""
  };
}
export const LegacyPoolAsset = {
  typeUrl: "/elys.amm.LegacyPoolAsset",
  is(o: any): o is LegacyPoolAsset {
    return o && (o.$typeUrl === LegacyPoolAsset.typeUrl || Coin.is(o.token) && typeof o.weight === "string");
  },
  isSDK(o: any): o is LegacyPoolAssetSDKType {
    return o && (o.$typeUrl === LegacyPoolAsset.typeUrl || Coin.isSDK(o.token) && typeof o.weight === "string");
  },
  isAmino(o: any): o is LegacyPoolAssetAmino {
    return o && (o.$typeUrl === LegacyPoolAsset.typeUrl || Coin.isAmino(o.token) && typeof o.weight === "string");
  },
  encode(message: LegacyPoolAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyPoolAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyPoolAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyPoolAsset {
    return {
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: LegacyPoolAsset): JsonSafe<LegacyPoolAsset> {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<LegacyPoolAsset>): LegacyPoolAsset {
    const message = createBaseLegacyPoolAsset();
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: LegacyPoolAssetAmino): LegacyPoolAsset {
    const message = createBaseLegacyPoolAsset();
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: LegacyPoolAsset): LegacyPoolAssetAmino {
    const obj: any = {};
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: LegacyPoolAssetAminoMsg): LegacyPoolAsset {
    return LegacyPoolAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyPoolAssetProtoMsg): LegacyPoolAsset {
    return LegacyPoolAsset.decode(message.value);
  },
  toProto(message: LegacyPoolAsset): Uint8Array {
    return LegacyPoolAsset.encode(message).finish();
  },
  toProtoMsg(message: LegacyPoolAsset): LegacyPoolAssetProtoMsg {
    return {
      typeUrl: "/elys.amm.LegacyPoolAsset",
      value: LegacyPoolAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyPoolAsset.typeUrl, LegacyPoolAsset);
function createBasePoolAsset(): PoolAsset {
  return {
    token: Coin.fromPartial({}),
    weight: "",
    externalLiquidityRatio: ""
  };
}
export const PoolAsset = {
  typeUrl: "/elys.amm.PoolAsset",
  is(o: any): o is PoolAsset {
    return o && (o.$typeUrl === PoolAsset.typeUrl || Coin.is(o.token) && typeof o.weight === "string" && typeof o.externalLiquidityRatio === "string");
  },
  isSDK(o: any): o is PoolAssetSDKType {
    return o && (o.$typeUrl === PoolAsset.typeUrl || Coin.isSDK(o.token) && typeof o.weight === "string" && typeof o.external_liquidity_ratio === "string");
  },
  isAmino(o: any): o is PoolAssetAmino {
    return o && (o.$typeUrl === PoolAsset.typeUrl || Coin.isAmino(o.token) && typeof o.weight === "string" && typeof o.external_liquidity_ratio === "string");
  },
  encode(message: PoolAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    if (message.externalLiquidityRatio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.externalLiquidityRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.externalLiquidityRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolAsset {
    return {
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      weight: isSet(object.weight) ? String(object.weight) : "",
      externalLiquidityRatio: isSet(object.externalLiquidityRatio) ? String(object.externalLiquidityRatio) : ""
    };
  },
  toJSON(message: PoolAsset): JsonSafe<PoolAsset> {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.weight !== undefined && (obj.weight = message.weight);
    message.externalLiquidityRatio !== undefined && (obj.externalLiquidityRatio = message.externalLiquidityRatio);
    return obj;
  },
  fromPartial(object: Partial<PoolAsset>): PoolAsset {
    const message = createBasePoolAsset();
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.weight = object.weight ?? "";
    message.externalLiquidityRatio = object.externalLiquidityRatio ?? "";
    return message;
  },
  fromAmino(object: PoolAssetAmino): PoolAsset {
    const message = createBasePoolAsset();
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.external_liquidity_ratio !== undefined && object.external_liquidity_ratio !== null) {
      message.externalLiquidityRatio = object.external_liquidity_ratio;
    }
    return message;
  },
  toAmino(message: PoolAsset): PoolAssetAmino {
    const obj: any = {};
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.weight = message.weight === "" ? undefined : message.weight;
    obj.external_liquidity_ratio = message.externalLiquidityRatio === "" ? undefined : message.externalLiquidityRatio;
    return obj;
  },
  fromAminoMsg(object: PoolAssetAminoMsg): PoolAsset {
    return PoolAsset.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolAssetProtoMsg): PoolAsset {
    return PoolAsset.decode(message.value);
  },
  toProto(message: PoolAsset): Uint8Array {
    return PoolAsset.encode(message).finish();
  },
  toProtoMsg(message: PoolAsset): PoolAssetProtoMsg {
    return {
      typeUrl: "/elys.amm.PoolAsset",
      value: PoolAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolAsset.typeUrl, PoolAsset);