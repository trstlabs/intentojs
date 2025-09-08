import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface Pool {
  ammPoolId: bigint;
  health: string;
  leveragedLpAmount: string;
  leverageMax: string;
  maxLeveragelpRatio: string;
  assetLeverageAmounts: AssetLeverageAmount[];
}
export interface PoolProtoMsg {
  typeUrl: "/elys.leveragelp.Pool";
  value: Uint8Array;
}
/**
 * @name PoolAmino
 * @package elys.leveragelp
 * @see proto type: elys.leveragelp.Pool
 */
export interface PoolAmino {
  amm_pool_id?: string;
  health?: string;
  leveraged_lp_amount?: string;
  leverage_max?: string;
  max_leveragelp_ratio?: string;
  asset_leverage_amounts?: AssetLeverageAmountAmino[];
}
export interface PoolAminoMsg {
  type: "/elys.leveragelp.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  amm_pool_id: bigint;
  health: string;
  leveraged_lp_amount: string;
  leverage_max: string;
  max_leveragelp_ratio: string;
  asset_leverage_amounts: AssetLeverageAmountSDKType[];
}
export interface LegacyPool {
  ammPoolId: bigint;
  health: string;
  leveragedLpAmount: string;
  leverageMax: string;
}
export interface LegacyPoolProtoMsg {
  typeUrl: "/elys.leveragelp.LegacyPool";
  value: Uint8Array;
}
/**
 * @name LegacyPoolAmino
 * @package elys.leveragelp
 * @see proto type: elys.leveragelp.LegacyPool
 */
export interface LegacyPoolAmino {
  amm_pool_id?: string;
  health?: string;
  leveraged_lp_amount?: string;
  leverage_max?: string;
}
export interface LegacyPoolAminoMsg {
  type: "/elys.leveragelp.LegacyPool";
  value: LegacyPoolAmino;
}
export interface LegacyPoolSDKType {
  amm_pool_id: bigint;
  health: string;
  leveraged_lp_amount: string;
  leverage_max: string;
}
export interface AssetLeverageAmount {
  denom: string;
  leveragedAmount: string;
}
export interface AssetLeverageAmountProtoMsg {
  typeUrl: "/elys.leveragelp.AssetLeverageAmount";
  value: Uint8Array;
}
/**
 * @name AssetLeverageAmountAmino
 * @package elys.leveragelp
 * @see proto type: elys.leveragelp.AssetLeverageAmount
 */
export interface AssetLeverageAmountAmino {
  denom?: string;
  leveraged_amount?: string;
}
export interface AssetLeverageAmountAminoMsg {
  type: "/elys.leveragelp.AssetLeverageAmount";
  value: AssetLeverageAmountAmino;
}
export interface AssetLeverageAmountSDKType {
  denom: string;
  leveraged_amount: string;
}
function createBasePool(): Pool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    leveragedLpAmount: "",
    leverageMax: "",
    maxLeveragelpRatio: "",
    assetLeverageAmounts: []
  };
}
export const Pool = {
  typeUrl: "/elys.leveragelp.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.ammPoolId === "bigint" && typeof o.health === "string" && typeof o.leveragedLpAmount === "string" && typeof o.leverageMax === "string" && typeof o.maxLeveragelpRatio === "string" && Array.isArray(o.assetLeverageAmounts) && (!o.assetLeverageAmounts.length || AssetLeverageAmount.is(o.assetLeverageAmounts[0])));
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.leveraged_lp_amount === "string" && typeof o.leverage_max === "string" && typeof o.max_leveragelp_ratio === "string" && Array.isArray(o.asset_leverage_amounts) && (!o.asset_leverage_amounts.length || AssetLeverageAmount.isSDK(o.asset_leverage_amounts[0])));
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.leveraged_lp_amount === "string" && typeof o.leverage_max === "string" && typeof o.max_leveragelp_ratio === "string" && Array.isArray(o.asset_leverage_amounts) && (!o.asset_leverage_amounts.length || AssetLeverageAmount.isAmino(o.asset_leverage_amounts[0])));
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(26).string(message.leveragedLpAmount);
    }
    if (message.leverageMax !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    if (message.maxLeveragelpRatio !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxLeveragelpRatio, 18).atomics);
    }
    for (const v of message.assetLeverageAmounts) {
      AssetLeverageAmount.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.health = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.leveragedLpAmount = reader.string();
          break;
        case 4:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxLeveragelpRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.assetLeverageAmounts.push(AssetLeverageAmount.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    return {
      ammPoolId: isSet(object.ammPoolId) ? BigInt(object.ammPoolId.toString()) : BigInt(0),
      health: isSet(object.health) ? String(object.health) : "",
      leveragedLpAmount: isSet(object.leveragedLpAmount) ? String(object.leveragedLpAmount) : "",
      leverageMax: isSet(object.leverageMax) ? String(object.leverageMax) : "",
      maxLeveragelpRatio: isSet(object.maxLeveragelpRatio) ? String(object.maxLeveragelpRatio) : "",
      assetLeverageAmounts: Array.isArray(object?.assetLeverageAmounts) ? object.assetLeverageAmounts.map((e: any) => AssetLeverageAmount.fromJSON(e)) : []
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.ammPoolId !== undefined && (obj.ammPoolId = (message.ammPoolId || BigInt(0)).toString());
    message.health !== undefined && (obj.health = message.health);
    message.leveragedLpAmount !== undefined && (obj.leveragedLpAmount = message.leveragedLpAmount);
    message.leverageMax !== undefined && (obj.leverageMax = message.leverageMax);
    message.maxLeveragelpRatio !== undefined && (obj.maxLeveragelpRatio = message.maxLeveragelpRatio);
    if (message.assetLeverageAmounts) {
      obj.assetLeverageAmounts = message.assetLeverageAmounts.map(e => e ? AssetLeverageAmount.toJSON(e) : undefined);
    } else {
      obj.assetLeverageAmounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.leverageMax = object.leverageMax ?? "";
    message.maxLeveragelpRatio = object.maxLeveragelpRatio ?? "";
    message.assetLeverageAmounts = object.assetLeverageAmounts?.map(e => AssetLeverageAmount.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    }
    if (object.leveraged_lp_amount !== undefined && object.leveraged_lp_amount !== null) {
      message.leveragedLpAmount = object.leveraged_lp_amount;
    }
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    if (object.max_leveragelp_ratio !== undefined && object.max_leveragelp_ratio !== null) {
      message.maxLeveragelpRatio = object.max_leveragelp_ratio;
    }
    message.assetLeverageAmounts = object.asset_leverage_amounts?.map(e => AssetLeverageAmount.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.leveraged_lp_amount = message.leveragedLpAmount === "" ? undefined : message.leveragedLpAmount;
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    obj.max_leveragelp_ratio = message.maxLeveragelpRatio === "" ? undefined : message.maxLeveragelpRatio;
    if (message.assetLeverageAmounts) {
      obj.asset_leverage_amounts = message.assetLeverageAmounts.map(e => e ? AssetLeverageAmount.toAmino(e) : undefined);
    } else {
      obj.asset_leverage_amounts = message.assetLeverageAmounts;
    }
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
function createBaseLegacyPool(): LegacyPool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    leveragedLpAmount: "",
    leverageMax: ""
  };
}
export const LegacyPool = {
  typeUrl: "/elys.leveragelp.LegacyPool",
  is(o: any): o is LegacyPool {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.ammPoolId === "bigint" && typeof o.health === "string" && typeof o.leveragedLpAmount === "string" && typeof o.leverageMax === "string");
  },
  isSDK(o: any): o is LegacyPoolSDKType {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.leveraged_lp_amount === "string" && typeof o.leverage_max === "string");
  },
  isAmino(o: any): o is LegacyPoolAmino {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.leveraged_lp_amount === "string" && typeof o.leverage_max === "string");
  },
  encode(message: LegacyPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.leveragedLpAmount !== "") {
      writer.uint32(26).string(message.leveragedLpAmount);
    }
    if (message.leverageMax !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ammPoolId = reader.uint64();
          break;
        case 2:
          message.health = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.leveragedLpAmount = reader.string();
          break;
        case 4:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyPool {
    return {
      ammPoolId: isSet(object.ammPoolId) ? BigInt(object.ammPoolId.toString()) : BigInt(0),
      health: isSet(object.health) ? String(object.health) : "",
      leveragedLpAmount: isSet(object.leveragedLpAmount) ? String(object.leveragedLpAmount) : "",
      leverageMax: isSet(object.leverageMax) ? String(object.leverageMax) : ""
    };
  },
  toJSON(message: LegacyPool): JsonSafe<LegacyPool> {
    const obj: any = {};
    message.ammPoolId !== undefined && (obj.ammPoolId = (message.ammPoolId || BigInt(0)).toString());
    message.health !== undefined && (obj.health = message.health);
    message.leveragedLpAmount !== undefined && (obj.leveragedLpAmount = message.leveragedLpAmount);
    message.leverageMax !== undefined && (obj.leverageMax = message.leverageMax);
    return obj;
  },
  fromPartial(object: Partial<LegacyPool>): LegacyPool {
    const message = createBaseLegacyPool();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.leveragedLpAmount = object.leveragedLpAmount ?? "";
    message.leverageMax = object.leverageMax ?? "";
    return message;
  },
  fromAmino(object: LegacyPoolAmino): LegacyPool {
    const message = createBaseLegacyPool();
    if (object.amm_pool_id !== undefined && object.amm_pool_id !== null) {
      message.ammPoolId = BigInt(object.amm_pool_id);
    }
    if (object.health !== undefined && object.health !== null) {
      message.health = object.health;
    }
    if (object.leveraged_lp_amount !== undefined && object.leveraged_lp_amount !== null) {
      message.leveragedLpAmount = object.leveraged_lp_amount;
    }
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    return message;
  },
  toAmino(message: LegacyPool): LegacyPoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.leveraged_lp_amount = message.leveragedLpAmount === "" ? undefined : message.leveragedLpAmount;
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
    return obj;
  },
  fromAminoMsg(object: LegacyPoolAminoMsg): LegacyPool {
    return LegacyPool.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyPoolProtoMsg): LegacyPool {
    return LegacyPool.decode(message.value);
  },
  toProto(message: LegacyPool): Uint8Array {
    return LegacyPool.encode(message).finish();
  },
  toProtoMsg(message: LegacyPool): LegacyPoolProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.LegacyPool",
      value: LegacyPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyPool.typeUrl, LegacyPool);
function createBaseAssetLeverageAmount(): AssetLeverageAmount {
  return {
    denom: "",
    leveragedAmount: ""
  };
}
export const AssetLeverageAmount = {
  typeUrl: "/elys.leveragelp.AssetLeverageAmount",
  is(o: any): o is AssetLeverageAmount {
    return o && (o.$typeUrl === AssetLeverageAmount.typeUrl || typeof o.denom === "string" && typeof o.leveragedAmount === "string");
  },
  isSDK(o: any): o is AssetLeverageAmountSDKType {
    return o && (o.$typeUrl === AssetLeverageAmount.typeUrl || typeof o.denom === "string" && typeof o.leveraged_amount === "string");
  },
  isAmino(o: any): o is AssetLeverageAmountAmino {
    return o && (o.$typeUrl === AssetLeverageAmount.typeUrl || typeof o.denom === "string" && typeof o.leveraged_amount === "string");
  },
  encode(message: AssetLeverageAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.leveragedAmount !== "") {
      writer.uint32(18).string(message.leveragedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetLeverageAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetLeverageAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.leveragedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AssetLeverageAmount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      leveragedAmount: isSet(object.leveragedAmount) ? String(object.leveragedAmount) : ""
    };
  },
  toJSON(message: AssetLeverageAmount): JsonSafe<AssetLeverageAmount> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.leveragedAmount !== undefined && (obj.leveragedAmount = message.leveragedAmount);
    return obj;
  },
  fromPartial(object: Partial<AssetLeverageAmount>): AssetLeverageAmount {
    const message = createBaseAssetLeverageAmount();
    message.denom = object.denom ?? "";
    message.leveragedAmount = object.leveragedAmount ?? "";
    return message;
  },
  fromAmino(object: AssetLeverageAmountAmino): AssetLeverageAmount {
    const message = createBaseAssetLeverageAmount();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.leveraged_amount !== undefined && object.leveraged_amount !== null) {
      message.leveragedAmount = object.leveraged_amount;
    }
    return message;
  },
  toAmino(message: AssetLeverageAmount): AssetLeverageAmountAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.leveraged_amount = message.leveragedAmount === "" ? undefined : message.leveragedAmount;
    return obj;
  },
  fromAminoMsg(object: AssetLeverageAmountAminoMsg): AssetLeverageAmount {
    return AssetLeverageAmount.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetLeverageAmountProtoMsg): AssetLeverageAmount {
    return AssetLeverageAmount.decode(message.value);
  },
  toProto(message: AssetLeverageAmount): Uint8Array {
    return AssetLeverageAmount.encode(message).finish();
  },
  toProtoMsg(message: AssetLeverageAmount): AssetLeverageAmountProtoMsg {
    return {
      typeUrl: "/elys.leveragelp.AssetLeverageAmount",
      value: AssetLeverageAmount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AssetLeverageAmount.typeUrl, AssetLeverageAmount);