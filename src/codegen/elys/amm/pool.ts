import { LegacyPoolParams, LegacyPoolParamsAmino, LegacyPoolParamsSDKType, PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./pool_params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export interface LegacyPool {
  poolId: bigint;
  address: string;
  poolParams: LegacyPoolParams;
  totalShares: Coin;
  poolAssets: PoolAsset[];
  totalWeight: string;
  rebalanceTreasury: string;
}
export interface LegacyPoolProtoMsg {
  typeUrl: "/elys.amm.LegacyPool";
  value: Uint8Array;
}
export interface LegacyPoolAmino {
  pool_id?: string;
  address?: string;
  pool_params?: LegacyPoolParamsAmino;
  total_shares?: CoinAmino;
  pool_assets?: PoolAssetAmino[];
  total_weight?: string;
  rebalance_treasury?: string;
}
export interface LegacyPoolAminoMsg {
  type: "/elys.amm.LegacyPool";
  value: LegacyPoolAmino;
}
export interface LegacyPoolSDKType {
  pool_id: bigint;
  address: string;
  pool_params: LegacyPoolParamsSDKType;
  total_shares: CoinSDKType;
  pool_assets: PoolAssetSDKType[];
  total_weight: string;
  rebalance_treasury: string;
}
export interface Pool {
  poolId: bigint;
  address: string;
  poolParams: PoolParams;
  totalShares: Coin;
  poolAssets: PoolAsset[];
  totalWeight: string;
  rebalanceTreasury: string;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.amm.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  pool_id?: string;
  address?: string;
  pool_params?: PoolParamsAmino;
  total_shares?: CoinAmino;
  pool_assets?: PoolAssetAmino[];
  total_weight?: string;
  rebalance_treasury?: string;
}
export interface PoolAminoMsg {
  type: "/elys.amm.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  pool_id: bigint;
  address: string;
  pool_params: PoolParamsSDKType;
  total_shares: CoinSDKType;
  pool_assets: PoolAssetSDKType[];
  total_weight: string;
  rebalance_treasury: string;
}
export interface PoolExtraInfo {
  tvl: string;
  lpTokenPrice: string;
  lpSavedApr: string;
}
export interface PoolExtraInfoProtoMsg {
  typeUrl: "/elys.amm.PoolExtraInfo";
  value: Uint8Array;
}
export interface PoolExtraInfoAmino {
  tvl?: string;
  lp_token_price?: string;
  lp_saved_apr?: string;
}
export interface PoolExtraInfoAminoMsg {
  type: "/elys.amm.PoolExtraInfo";
  value: PoolExtraInfoAmino;
}
export interface PoolExtraInfoSDKType {
  tvl: string;
  lp_token_price: string;
  lp_saved_apr: string;
}
export interface OraclePoolSlippageTrack {
  poolId: bigint;
  timestamp: bigint;
  tracked: Coin[];
}
export interface OraclePoolSlippageTrackProtoMsg {
  typeUrl: "/elys.amm.OraclePoolSlippageTrack";
  value: Uint8Array;
}
export interface OraclePoolSlippageTrackAmino {
  pool_id?: string;
  timestamp?: string;
  tracked?: CoinAmino[];
}
export interface OraclePoolSlippageTrackAminoMsg {
  type: "/elys.amm.OraclePoolSlippageTrack";
  value: OraclePoolSlippageTrackAmino;
}
export interface OraclePoolSlippageTrackSDKType {
  pool_id: bigint;
  timestamp: bigint;
  tracked: CoinSDKType[];
}
export interface WeightBreakingSlippage {
  poolId: bigint;
  date: string;
  amount: string;
}
export interface WeightBreakingSlippageProtoMsg {
  typeUrl: "/elys.amm.WeightBreakingSlippage";
  value: Uint8Array;
}
export interface WeightBreakingSlippageAmino {
  pool_id?: string;
  date?: string;
  amount?: string;
}
export interface WeightBreakingSlippageAminoMsg {
  type: "/elys.amm.WeightBreakingSlippage";
  value: WeightBreakingSlippageAmino;
}
export interface WeightBreakingSlippageSDKType {
  pool_id: bigint;
  date: string;
  amount: string;
}
function createBaseLegacyPool(): LegacyPool {
  return {
    poolId: BigInt(0),
    address: "",
    poolParams: LegacyPoolParams.fromPartial({}),
    totalShares: Coin.fromPartial({}),
    poolAssets: [],
    totalWeight: "",
    rebalanceTreasury: ""
  };
}
export const LegacyPool = {
  typeUrl: "/elys.amm.LegacyPool",
  is(o: any): o is LegacyPool {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.poolId === "bigint" && typeof o.address === "string" && LegacyPoolParams.is(o.poolParams) && Coin.is(o.totalShares) && Array.isArray(o.poolAssets) && (!o.poolAssets.length || PoolAsset.is(o.poolAssets[0])) && typeof o.totalWeight === "string" && typeof o.rebalanceTreasury === "string");
  },
  isSDK(o: any): o is LegacyPoolSDKType {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.pool_id === "bigint" && typeof o.address === "string" && LegacyPoolParams.isSDK(o.pool_params) && Coin.isSDK(o.total_shares) && Array.isArray(o.pool_assets) && (!o.pool_assets.length || PoolAsset.isSDK(o.pool_assets[0])) && typeof o.total_weight === "string" && typeof o.rebalance_treasury === "string");
  },
  isAmino(o: any): o is LegacyPoolAmino {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.pool_id === "bigint" && typeof o.address === "string" && LegacyPoolParams.isAmino(o.pool_params) && Coin.isAmino(o.total_shares) && Array.isArray(o.pool_assets) && (!o.pool_assets.length || PoolAsset.isAmino(o.pool_assets[0])) && typeof o.total_weight === "string" && typeof o.rebalance_treasury === "string");
  },
  encode(message: LegacyPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.poolParams !== undefined) {
      LegacyPoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(50).string(message.totalWeight);
    }
    if (message.rebalanceTreasury !== "") {
      writer.uint32(58).string(message.rebalanceTreasury);
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
          message.poolId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.poolParams = LegacyPoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.totalWeight = reader.string();
          break;
        case 7:
          message.rebalanceTreasury = reader.string();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      poolParams: isSet(object.poolParams) ? LegacyPoolParams.fromJSON(object.poolParams) : undefined,
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      rebalanceTreasury: isSet(object.rebalanceTreasury) ? String(object.rebalanceTreasury) : ""
    };
  },
  toJSON(message: LegacyPool): JsonSafe<LegacyPool> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? LegacyPoolParams.toJSON(message.poolParams) : undefined);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    message.rebalanceTreasury !== undefined && (obj.rebalanceTreasury = message.rebalanceTreasury);
    return obj;
  },
  fromPartial(object: Partial<LegacyPool>): LegacyPool {
    const message = createBaseLegacyPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? LegacyPoolParams.fromPartial(object.poolParams) : undefined;
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    message.rebalanceTreasury = object.rebalanceTreasury ?? "";
    return message;
  },
  fromAmino(object: LegacyPoolAmino): LegacyPool {
    const message = createBaseLegacyPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = LegacyPoolParams.fromAmino(object.pool_params);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.rebalance_treasury !== undefined && object.rebalance_treasury !== null) {
      message.rebalanceTreasury = object.rebalance_treasury;
    }
    return message;
  },
  toAmino(message: LegacyPool): LegacyPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pool_params = message.poolParams ? LegacyPoolParams.toAmino(message.poolParams) : undefined;
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = message.poolAssets;
    }
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.rebalance_treasury = message.rebalanceTreasury === "" ? undefined : message.rebalanceTreasury;
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
      typeUrl: "/elys.amm.LegacyPool",
      value: LegacyPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyPool.typeUrl, LegacyPool);
function createBasePool(): Pool {
  return {
    poolId: BigInt(0),
    address: "",
    poolParams: PoolParams.fromPartial({}),
    totalShares: Coin.fromPartial({}),
    poolAssets: [],
    totalWeight: "",
    rebalanceTreasury: ""
  };
}
export const Pool = {
  typeUrl: "/elys.amm.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.poolId === "bigint" && typeof o.address === "string" && PoolParams.is(o.poolParams) && Coin.is(o.totalShares) && Array.isArray(o.poolAssets) && (!o.poolAssets.length || PoolAsset.is(o.poolAssets[0])) && typeof o.totalWeight === "string" && typeof o.rebalanceTreasury === "string");
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.pool_id === "bigint" && typeof o.address === "string" && PoolParams.isSDK(o.pool_params) && Coin.isSDK(o.total_shares) && Array.isArray(o.pool_assets) && (!o.pool_assets.length || PoolAsset.isSDK(o.pool_assets[0])) && typeof o.total_weight === "string" && typeof o.rebalance_treasury === "string");
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.pool_id === "bigint" && typeof o.address === "string" && PoolParams.isAmino(o.pool_params) && Coin.isAmino(o.total_shares) && Array.isArray(o.pool_assets) && (!o.pool_assets.length || PoolAsset.isAmino(o.pool_assets[0])) && typeof o.total_weight === "string" && typeof o.rebalance_treasury === "string");
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.totalWeight !== "") {
      writer.uint32(50).string(message.totalWeight);
    }
    if (message.rebalanceTreasury !== "") {
      writer.uint32(58).string(message.rebalanceTreasury);
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
          message.poolId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.totalWeight = reader.string();
          break;
        case 7:
          message.rebalanceTreasury = reader.string();
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
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      rebalanceTreasury: isSet(object.rebalanceTreasury) ? String(object.rebalanceTreasury) : ""
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    message.rebalanceTreasury !== undefined && (obj.rebalanceTreasury = message.rebalanceTreasury);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.totalWeight = object.totalWeight ?? "";
    message.rebalanceTreasury = object.rebalanceTreasury ?? "";
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.rebalance_treasury !== undefined && object.rebalance_treasury !== null) {
      message.rebalanceTreasury = object.rebalance_treasury;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = message.poolAssets;
    }
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.rebalance_treasury = message.rebalanceTreasury === "" ? undefined : message.rebalanceTreasury;
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
      typeUrl: "/elys.amm.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
function createBasePoolExtraInfo(): PoolExtraInfo {
  return {
    tvl: "",
    lpTokenPrice: "",
    lpSavedApr: ""
  };
}
export const PoolExtraInfo = {
  typeUrl: "/elys.amm.PoolExtraInfo",
  is(o: any): o is PoolExtraInfo {
    return o && (o.$typeUrl === PoolExtraInfo.typeUrl || typeof o.tvl === "string" && typeof o.lpTokenPrice === "string" && typeof o.lpSavedApr === "string");
  },
  isSDK(o: any): o is PoolExtraInfoSDKType {
    return o && (o.$typeUrl === PoolExtraInfo.typeUrl || typeof o.tvl === "string" && typeof o.lp_token_price === "string" && typeof o.lp_saved_apr === "string");
  },
  isAmino(o: any): o is PoolExtraInfoAmino {
    return o && (o.$typeUrl === PoolExtraInfo.typeUrl || typeof o.tvl === "string" && typeof o.lp_token_price === "string" && typeof o.lp_saved_apr === "string");
  },
  encode(message: PoolExtraInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tvl !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.tvl, 18).atomics);
    }
    if (message.lpTokenPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.lpTokenPrice, 18).atomics);
    }
    if (message.lpSavedApr !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.lpSavedApr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolExtraInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolExtraInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tvl = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lpTokenPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.lpSavedApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolExtraInfo {
    return {
      tvl: isSet(object.tvl) ? String(object.tvl) : "",
      lpTokenPrice: isSet(object.lpTokenPrice) ? String(object.lpTokenPrice) : "",
      lpSavedApr: isSet(object.lpSavedApr) ? String(object.lpSavedApr) : ""
    };
  },
  toJSON(message: PoolExtraInfo): JsonSafe<PoolExtraInfo> {
    const obj: any = {};
    message.tvl !== undefined && (obj.tvl = message.tvl);
    message.lpTokenPrice !== undefined && (obj.lpTokenPrice = message.lpTokenPrice);
    message.lpSavedApr !== undefined && (obj.lpSavedApr = message.lpSavedApr);
    return obj;
  },
  fromPartial(object: Partial<PoolExtraInfo>): PoolExtraInfo {
    const message = createBasePoolExtraInfo();
    message.tvl = object.tvl ?? "";
    message.lpTokenPrice = object.lpTokenPrice ?? "";
    message.lpSavedApr = object.lpSavedApr ?? "";
    return message;
  },
  fromAmino(object: PoolExtraInfoAmino): PoolExtraInfo {
    const message = createBasePoolExtraInfo();
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = object.tvl;
    }
    if (object.lp_token_price !== undefined && object.lp_token_price !== null) {
      message.lpTokenPrice = object.lp_token_price;
    }
    if (object.lp_saved_apr !== undefined && object.lp_saved_apr !== null) {
      message.lpSavedApr = object.lp_saved_apr;
    }
    return message;
  },
  toAmino(message: PoolExtraInfo): PoolExtraInfoAmino {
    const obj: any = {};
    obj.tvl = message.tvl === "" ? undefined : message.tvl;
    obj.lp_token_price = message.lpTokenPrice === "" ? undefined : message.lpTokenPrice;
    obj.lp_saved_apr = message.lpSavedApr === "" ? undefined : message.lpSavedApr;
    return obj;
  },
  fromAminoMsg(object: PoolExtraInfoAminoMsg): PoolExtraInfo {
    return PoolExtraInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolExtraInfoProtoMsg): PoolExtraInfo {
    return PoolExtraInfo.decode(message.value);
  },
  toProto(message: PoolExtraInfo): Uint8Array {
    return PoolExtraInfo.encode(message).finish();
  },
  toProtoMsg(message: PoolExtraInfo): PoolExtraInfoProtoMsg {
    return {
      typeUrl: "/elys.amm.PoolExtraInfo",
      value: PoolExtraInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolExtraInfo.typeUrl, PoolExtraInfo);
function createBaseOraclePoolSlippageTrack(): OraclePoolSlippageTrack {
  return {
    poolId: BigInt(0),
    timestamp: BigInt(0),
    tracked: []
  };
}
export const OraclePoolSlippageTrack = {
  typeUrl: "/elys.amm.OraclePoolSlippageTrack",
  is(o: any): o is OraclePoolSlippageTrack {
    return o && (o.$typeUrl === OraclePoolSlippageTrack.typeUrl || typeof o.poolId === "bigint" && typeof o.timestamp === "bigint" && Array.isArray(o.tracked) && (!o.tracked.length || Coin.is(o.tracked[0])));
  },
  isSDK(o: any): o is OraclePoolSlippageTrackSDKType {
    return o && (o.$typeUrl === OraclePoolSlippageTrack.typeUrl || typeof o.pool_id === "bigint" && typeof o.timestamp === "bigint" && Array.isArray(o.tracked) && (!o.tracked.length || Coin.isSDK(o.tracked[0])));
  },
  isAmino(o: any): o is OraclePoolSlippageTrackAmino {
    return o && (o.$typeUrl === OraclePoolSlippageTrack.typeUrl || typeof o.pool_id === "bigint" && typeof o.timestamp === "bigint" && Array.isArray(o.tracked) && (!o.tracked.length || Coin.isAmino(o.tracked[0])));
  },
  encode(message: OraclePoolSlippageTrack, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    for (const v of message.tracked) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OraclePoolSlippageTrack {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOraclePoolSlippageTrack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.tracked.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OraclePoolSlippageTrack {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      tracked: Array.isArray(object?.tracked) ? object.tracked.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: OraclePoolSlippageTrack): JsonSafe<OraclePoolSlippageTrack> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    if (message.tracked) {
      obj.tracked = message.tracked.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.tracked = [];
    }
    return obj;
  },
  fromPartial(object: Partial<OraclePoolSlippageTrack>): OraclePoolSlippageTrack {
    const message = createBaseOraclePoolSlippageTrack();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.tracked = object.tracked?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OraclePoolSlippageTrackAmino): OraclePoolSlippageTrack {
    const message = createBaseOraclePoolSlippageTrack();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    message.tracked = object.tracked?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: OraclePoolSlippageTrack): OraclePoolSlippageTrackAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    if (message.tracked) {
      obj.tracked = message.tracked.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.tracked = message.tracked;
    }
    return obj;
  },
  fromAminoMsg(object: OraclePoolSlippageTrackAminoMsg): OraclePoolSlippageTrack {
    return OraclePoolSlippageTrack.fromAmino(object.value);
  },
  fromProtoMsg(message: OraclePoolSlippageTrackProtoMsg): OraclePoolSlippageTrack {
    return OraclePoolSlippageTrack.decode(message.value);
  },
  toProto(message: OraclePoolSlippageTrack): Uint8Array {
    return OraclePoolSlippageTrack.encode(message).finish();
  },
  toProtoMsg(message: OraclePoolSlippageTrack): OraclePoolSlippageTrackProtoMsg {
    return {
      typeUrl: "/elys.amm.OraclePoolSlippageTrack",
      value: OraclePoolSlippageTrack.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OraclePoolSlippageTrack.typeUrl, OraclePoolSlippageTrack);
function createBaseWeightBreakingSlippage(): WeightBreakingSlippage {
  return {
    poolId: BigInt(0),
    date: "",
    amount: ""
  };
}
export const WeightBreakingSlippage = {
  typeUrl: "/elys.amm.WeightBreakingSlippage",
  is(o: any): o is WeightBreakingSlippage {
    return o && (o.$typeUrl === WeightBreakingSlippage.typeUrl || typeof o.poolId === "bigint" && typeof o.date === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is WeightBreakingSlippageSDKType {
    return o && (o.$typeUrl === WeightBreakingSlippage.typeUrl || typeof o.pool_id === "bigint" && typeof o.date === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is WeightBreakingSlippageAmino {
    return o && (o.$typeUrl === WeightBreakingSlippage.typeUrl || typeof o.pool_id === "bigint" && typeof o.date === "string" && typeof o.amount === "string");
  },
  encode(message: WeightBreakingSlippage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.date !== "") {
      writer.uint32(18).string(message.date);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.amount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightBreakingSlippage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightBreakingSlippage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.date = reader.string();
          break;
        case 3:
          message.amount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightBreakingSlippage {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      date: isSet(object.date) ? String(object.date) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: WeightBreakingSlippage): JsonSafe<WeightBreakingSlippage> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.date !== undefined && (obj.date = message.date);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<WeightBreakingSlippage>): WeightBreakingSlippage {
    const message = createBaseWeightBreakingSlippage();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.date = object.date ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: WeightBreakingSlippageAmino): WeightBreakingSlippage {
    const message = createBaseWeightBreakingSlippage();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: WeightBreakingSlippage): WeightBreakingSlippageAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.date = message.date === "" ? undefined : message.date;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: WeightBreakingSlippageAminoMsg): WeightBreakingSlippage {
    return WeightBreakingSlippage.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightBreakingSlippageProtoMsg): WeightBreakingSlippage {
    return WeightBreakingSlippage.decode(message.value);
  },
  toProto(message: WeightBreakingSlippage): Uint8Array {
    return WeightBreakingSlippage.encode(message).finish();
  },
  toProtoMsg(message: WeightBreakingSlippage): WeightBreakingSlippageProtoMsg {
    return {
      typeUrl: "/elys.amm.WeightBreakingSlippage",
      value: WeightBreakingSlippage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightBreakingSlippage.typeUrl, WeightBreakingSlippage);