import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export interface PoolAsset {
  liabilities: string;
  custody: string;
  takeProfitLiabilities: string;
  takeProfitCustody: string;
  assetDenom: string;
  collateral: string;
}
export interface PoolAssetProtoMsg {
  typeUrl: "/elys.perpetual.PoolAsset";
  value: Uint8Array;
}
export interface PoolAssetAmino {
  liabilities?: string;
  custody?: string;
  take_profit_liabilities?: string;
  take_profit_custody?: string;
  asset_denom?: string;
  collateral?: string;
}
export interface PoolAssetAminoMsg {
  type: "/elys.perpetual.PoolAsset";
  value: PoolAssetAmino;
}
export interface PoolAssetSDKType {
  liabilities: string;
  custody: string;
  take_profit_liabilities: string;
  take_profit_custody: string;
  asset_denom: string;
  collateral: string;
}
export interface LegacyPool {
  ammPoolId: bigint;
  health: string;
  borrowInterestRate: string;
  poolAssetsLong: PoolAsset[];
  poolAssetsShort: PoolAsset[];
  lastHeightBorrowInterestRateComputed: bigint;
  /** funding rate, if positive longs pay shorts, if negative shorts pay longs */
  fundingRate: string;
  feesCollected: Coin[];
}
export interface LegacyPoolProtoMsg {
  typeUrl: "/elys.perpetual.LegacyPool";
  value: Uint8Array;
}
export interface LegacyPoolAmino {
  amm_pool_id?: string;
  health?: string;
  borrow_interest_rate?: string;
  pool_assets_long?: PoolAssetAmino[];
  pool_assets_short?: PoolAssetAmino[];
  last_height_borrow_interest_rate_computed?: string;
  /** funding rate, if positive longs pay shorts, if negative shorts pay longs */
  funding_rate?: string;
  fees_collected?: CoinAmino[];
}
export interface LegacyPoolAminoMsg {
  type: "/elys.perpetual.LegacyPool";
  value: LegacyPoolAmino;
}
export interface LegacyPoolSDKType {
  amm_pool_id: bigint;
  health: string;
  borrow_interest_rate: string;
  pool_assets_long: PoolAssetSDKType[];
  pool_assets_short: PoolAssetSDKType[];
  last_height_borrow_interest_rate_computed: bigint;
  funding_rate: string;
  fees_collected: CoinSDKType[];
}
export interface Pool {
  ammPoolId: bigint;
  health: string;
  borrowInterestRate: string;
  poolAssetsLong: PoolAsset[];
  poolAssetsShort: PoolAsset[];
  lastHeightBorrowInterestRateComputed: bigint;
  /** funding rate, if positive longs pay shorts, if negative shorts pay longs */
  fundingRate: string;
  feesCollected: Coin[];
  leverageMax: string;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.perpetual.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  amm_pool_id?: string;
  health?: string;
  borrow_interest_rate?: string;
  pool_assets_long?: PoolAssetAmino[];
  pool_assets_short?: PoolAssetAmino[];
  last_height_borrow_interest_rate_computed?: string;
  /** funding rate, if positive longs pay shorts, if negative shorts pay longs */
  funding_rate?: string;
  fees_collected?: CoinAmino[];
  leverage_max?: string;
}
export interface PoolAminoMsg {
  type: "/elys.perpetual.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  amm_pool_id: bigint;
  health: string;
  borrow_interest_rate: string;
  pool_assets_long: PoolAssetSDKType[];
  pool_assets_short: PoolAssetSDKType[];
  last_height_borrow_interest_rate_computed: bigint;
  funding_rate: string;
  fees_collected: CoinSDKType[];
  leverage_max: string;
}
function createBasePoolAsset(): PoolAsset {
  return {
    liabilities: "",
    custody: "",
    takeProfitLiabilities: "",
    takeProfitCustody: "",
    assetDenom: "",
    collateral: ""
  };
}
export const PoolAsset = {
  typeUrl: "/elys.perpetual.PoolAsset",
  is(o: any): o is PoolAsset {
    return o && (o.$typeUrl === PoolAsset.typeUrl || typeof o.liabilities === "string" && typeof o.custody === "string" && typeof o.takeProfitLiabilities === "string" && typeof o.takeProfitCustody === "string" && typeof o.assetDenom === "string" && typeof o.collateral === "string");
  },
  isSDK(o: any): o is PoolAssetSDKType {
    return o && (o.$typeUrl === PoolAsset.typeUrl || typeof o.liabilities === "string" && typeof o.custody === "string" && typeof o.take_profit_liabilities === "string" && typeof o.take_profit_custody === "string" && typeof o.asset_denom === "string" && typeof o.collateral === "string");
  },
  isAmino(o: any): o is PoolAssetAmino {
    return o && (o.$typeUrl === PoolAsset.typeUrl || typeof o.liabilities === "string" && typeof o.custody === "string" && typeof o.take_profit_liabilities === "string" && typeof o.take_profit_custody === "string" && typeof o.asset_denom === "string" && typeof o.collateral === "string");
  },
  encode(message: PoolAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liabilities !== "") {
      writer.uint32(10).string(message.liabilities);
    }
    if (message.custody !== "") {
      writer.uint32(18).string(message.custody);
    }
    if (message.takeProfitLiabilities !== "") {
      writer.uint32(26).string(message.takeProfitLiabilities);
    }
    if (message.takeProfitCustody !== "") {
      writer.uint32(34).string(message.takeProfitCustody);
    }
    if (message.assetDenom !== "") {
      writer.uint32(42).string(message.assetDenom);
    }
    if (message.collateral !== "") {
      writer.uint32(50).string(message.collateral);
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
          message.liabilities = reader.string();
          break;
        case 2:
          message.custody = reader.string();
          break;
        case 3:
          message.takeProfitLiabilities = reader.string();
          break;
        case 4:
          message.takeProfitCustody = reader.string();
          break;
        case 5:
          message.assetDenom = reader.string();
          break;
        case 6:
          message.collateral = reader.string();
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
      liabilities: isSet(object.liabilities) ? String(object.liabilities) : "",
      custody: isSet(object.custody) ? String(object.custody) : "",
      takeProfitLiabilities: isSet(object.takeProfitLiabilities) ? String(object.takeProfitLiabilities) : "",
      takeProfitCustody: isSet(object.takeProfitCustody) ? String(object.takeProfitCustody) : "",
      assetDenom: isSet(object.assetDenom) ? String(object.assetDenom) : "",
      collateral: isSet(object.collateral) ? String(object.collateral) : ""
    };
  },
  toJSON(message: PoolAsset): JsonSafe<PoolAsset> {
    const obj: any = {};
    message.liabilities !== undefined && (obj.liabilities = message.liabilities);
    message.custody !== undefined && (obj.custody = message.custody);
    message.takeProfitLiabilities !== undefined && (obj.takeProfitLiabilities = message.takeProfitLiabilities);
    message.takeProfitCustody !== undefined && (obj.takeProfitCustody = message.takeProfitCustody);
    message.assetDenom !== undefined && (obj.assetDenom = message.assetDenom);
    message.collateral !== undefined && (obj.collateral = message.collateral);
    return obj;
  },
  fromPartial(object: Partial<PoolAsset>): PoolAsset {
    const message = createBasePoolAsset();
    message.liabilities = object.liabilities ?? "";
    message.custody = object.custody ?? "";
    message.takeProfitLiabilities = object.takeProfitLiabilities ?? "";
    message.takeProfitCustody = object.takeProfitCustody ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.collateral = object.collateral ?? "";
    return message;
  },
  fromAmino(object: PoolAssetAmino): PoolAsset {
    const message = createBasePoolAsset();
    if (object.liabilities !== undefined && object.liabilities !== null) {
      message.liabilities = object.liabilities;
    }
    if (object.custody !== undefined && object.custody !== null) {
      message.custody = object.custody;
    }
    if (object.take_profit_liabilities !== undefined && object.take_profit_liabilities !== null) {
      message.takeProfitLiabilities = object.take_profit_liabilities;
    }
    if (object.take_profit_custody !== undefined && object.take_profit_custody !== null) {
      message.takeProfitCustody = object.take_profit_custody;
    }
    if (object.asset_denom !== undefined && object.asset_denom !== null) {
      message.assetDenom = object.asset_denom;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    }
    return message;
  },
  toAmino(message: PoolAsset): PoolAssetAmino {
    const obj: any = {};
    obj.liabilities = message.liabilities === "" ? undefined : message.liabilities;
    obj.custody = message.custody === "" ? undefined : message.custody;
    obj.take_profit_liabilities = message.takeProfitLiabilities === "" ? undefined : message.takeProfitLiabilities;
    obj.take_profit_custody = message.takeProfitCustody === "" ? undefined : message.takeProfitCustody;
    obj.asset_denom = message.assetDenom === "" ? undefined : message.assetDenom;
    obj.collateral = message.collateral === "" ? undefined : message.collateral;
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
      typeUrl: "/elys.perpetual.PoolAsset",
      value: PoolAsset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolAsset.typeUrl, PoolAsset);
function createBaseLegacyPool(): LegacyPool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    borrowInterestRate: "",
    poolAssetsLong: [],
    poolAssetsShort: [],
    lastHeightBorrowInterestRateComputed: BigInt(0),
    fundingRate: "",
    feesCollected: []
  };
}
export const LegacyPool = {
  typeUrl: "/elys.perpetual.LegacyPool",
  is(o: any): o is LegacyPool {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.ammPoolId === "bigint" && typeof o.health === "string" && typeof o.borrowInterestRate === "string" && Array.isArray(o.poolAssetsLong) && (!o.poolAssetsLong.length || PoolAsset.is(o.poolAssetsLong[0])) && Array.isArray(o.poolAssetsShort) && (!o.poolAssetsShort.length || PoolAsset.is(o.poolAssetsShort[0])) && typeof o.lastHeightBorrowInterestRateComputed === "bigint" && typeof o.fundingRate === "string" && Array.isArray(o.feesCollected) && (!o.feesCollected.length || Coin.is(o.feesCollected[0])));
  },
  isSDK(o: any): o is LegacyPoolSDKType {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.borrow_interest_rate === "string" && Array.isArray(o.pool_assets_long) && (!o.pool_assets_long.length || PoolAsset.isSDK(o.pool_assets_long[0])) && Array.isArray(o.pool_assets_short) && (!o.pool_assets_short.length || PoolAsset.isSDK(o.pool_assets_short[0])) && typeof o.last_height_borrow_interest_rate_computed === "bigint" && typeof o.funding_rate === "string" && Array.isArray(o.fees_collected) && (!o.fees_collected.length || Coin.isSDK(o.fees_collected[0])));
  },
  isAmino(o: any): o is LegacyPoolAmino {
    return o && (o.$typeUrl === LegacyPool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.borrow_interest_rate === "string" && Array.isArray(o.pool_assets_long) && (!o.pool_assets_long.length || PoolAsset.isAmino(o.pool_assets_long[0])) && Array.isArray(o.pool_assets_short) && (!o.pool_assets_short.length || PoolAsset.isAmino(o.pool_assets_short[0])) && typeof o.last_height_borrow_interest_rate_computed === "bigint" && typeof o.funding_rate === "string" && Array.isArray(o.fees_collected) && (!o.fees_collected.length || Coin.isAmino(o.fees_collected[0])));
  },
  encode(message: LegacyPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    for (const v of message.poolAssetsLong) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolAssetsShort) {
      PoolAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastHeightBorrowInterestRateComputed !== BigInt(0)) {
      writer.uint32(48).int64(message.lastHeightBorrowInterestRateComputed);
    }
    if (message.fundingRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    for (const v of message.feesCollected) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.poolAssetsLong.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolAssetsShort.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastHeightBorrowInterestRateComputed = reader.int64();
          break;
        case 7:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.feesCollected.push(Coin.decode(reader, reader.uint32()));
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
      borrowInterestRate: isSet(object.borrowInterestRate) ? String(object.borrowInterestRate) : "",
      poolAssetsLong: Array.isArray(object?.poolAssetsLong) ? object.poolAssetsLong.map((e: any) => PoolAsset.fromJSON(e)) : [],
      poolAssetsShort: Array.isArray(object?.poolAssetsShort) ? object.poolAssetsShort.map((e: any) => PoolAsset.fromJSON(e)) : [],
      lastHeightBorrowInterestRateComputed: isSet(object.lastHeightBorrowInterestRateComputed) ? BigInt(object.lastHeightBorrowInterestRateComputed.toString()) : BigInt(0),
      fundingRate: isSet(object.fundingRate) ? String(object.fundingRate) : "",
      feesCollected: Array.isArray(object?.feesCollected) ? object.feesCollected.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: LegacyPool): JsonSafe<LegacyPool> {
    const obj: any = {};
    message.ammPoolId !== undefined && (obj.ammPoolId = (message.ammPoolId || BigInt(0)).toString());
    message.health !== undefined && (obj.health = message.health);
    message.borrowInterestRate !== undefined && (obj.borrowInterestRate = message.borrowInterestRate);
    if (message.poolAssetsLong) {
      obj.poolAssetsLong = message.poolAssetsLong.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssetsLong = [];
    }
    if (message.poolAssetsShort) {
      obj.poolAssetsShort = message.poolAssetsShort.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssetsShort = [];
    }
    message.lastHeightBorrowInterestRateComputed !== undefined && (obj.lastHeightBorrowInterestRateComputed = (message.lastHeightBorrowInterestRateComputed || BigInt(0)).toString());
    message.fundingRate !== undefined && (obj.fundingRate = message.fundingRate);
    if (message.feesCollected) {
      obj.feesCollected = message.feesCollected.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feesCollected = [];
    }
    return obj;
  },
  fromPartial(object: Partial<LegacyPool>): LegacyPool {
    const message = createBaseLegacyPool();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    message.poolAssetsLong = object.poolAssetsLong?.map(e => PoolAsset.fromPartial(e)) || [];
    message.poolAssetsShort = object.poolAssetsShort?.map(e => PoolAsset.fromPartial(e)) || [];
    message.lastHeightBorrowInterestRateComputed = object.lastHeightBorrowInterestRateComputed !== undefined && object.lastHeightBorrowInterestRateComputed !== null ? BigInt(object.lastHeightBorrowInterestRateComputed.toString()) : BigInt(0);
    message.fundingRate = object.fundingRate ?? "";
    message.feesCollected = object.feesCollected?.map(e => Coin.fromPartial(e)) || [];
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
    if (object.borrow_interest_rate !== undefined && object.borrow_interest_rate !== null) {
      message.borrowInterestRate = object.borrow_interest_rate;
    }
    message.poolAssetsLong = object.pool_assets_long?.map(e => PoolAsset.fromAmino(e)) || [];
    message.poolAssetsShort = object.pool_assets_short?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.last_height_borrow_interest_rate_computed !== undefined && object.last_height_borrow_interest_rate_computed !== null) {
      message.lastHeightBorrowInterestRateComputed = BigInt(object.last_height_borrow_interest_rate_computed);
    }
    if (object.funding_rate !== undefined && object.funding_rate !== null) {
      message.fundingRate = object.funding_rate;
    }
    message.feesCollected = object.fees_collected?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LegacyPool): LegacyPoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.borrow_interest_rate = message.borrowInterestRate === "" ? undefined : message.borrowInterestRate;
    if (message.poolAssetsLong) {
      obj.pool_assets_long = message.poolAssetsLong.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_long = message.poolAssetsLong;
    }
    if (message.poolAssetsShort) {
      obj.pool_assets_short = message.poolAssetsShort.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_short = message.poolAssetsShort;
    }
    obj.last_height_borrow_interest_rate_computed = message.lastHeightBorrowInterestRateComputed !== BigInt(0) ? message.lastHeightBorrowInterestRateComputed?.toString() : undefined;
    obj.funding_rate = message.fundingRate === "" ? undefined : message.fundingRate;
    if (message.feesCollected) {
      obj.fees_collected = message.feesCollected.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees_collected = message.feesCollected;
    }
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
      typeUrl: "/elys.perpetual.LegacyPool",
      value: LegacyPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyPool.typeUrl, LegacyPool);
function createBasePool(): Pool {
  return {
    ammPoolId: BigInt(0),
    health: "",
    borrowInterestRate: "",
    poolAssetsLong: [],
    poolAssetsShort: [],
    lastHeightBorrowInterestRateComputed: BigInt(0),
    fundingRate: "",
    feesCollected: [],
    leverageMax: ""
  };
}
export const Pool = {
  typeUrl: "/elys.perpetual.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.ammPoolId === "bigint" && typeof o.health === "string" && typeof o.borrowInterestRate === "string" && Array.isArray(o.poolAssetsLong) && (!o.poolAssetsLong.length || PoolAsset.is(o.poolAssetsLong[0])) && Array.isArray(o.poolAssetsShort) && (!o.poolAssetsShort.length || PoolAsset.is(o.poolAssetsShort[0])) && typeof o.lastHeightBorrowInterestRateComputed === "bigint" && typeof o.fundingRate === "string" && Array.isArray(o.feesCollected) && (!o.feesCollected.length || Coin.is(o.feesCollected[0])) && typeof o.leverageMax === "string");
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.borrow_interest_rate === "string" && Array.isArray(o.pool_assets_long) && (!o.pool_assets_long.length || PoolAsset.isSDK(o.pool_assets_long[0])) && Array.isArray(o.pool_assets_short) && (!o.pool_assets_short.length || PoolAsset.isSDK(o.pool_assets_short[0])) && typeof o.last_height_borrow_interest_rate_computed === "bigint" && typeof o.funding_rate === "string" && Array.isArray(o.fees_collected) && (!o.fees_collected.length || Coin.isSDK(o.fees_collected[0])) && typeof o.leverage_max === "string");
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.amm_pool_id === "bigint" && typeof o.health === "string" && typeof o.borrow_interest_rate === "string" && Array.isArray(o.pool_assets_long) && (!o.pool_assets_long.length || PoolAsset.isAmino(o.pool_assets_long[0])) && Array.isArray(o.pool_assets_short) && (!o.pool_assets_short.length || PoolAsset.isAmino(o.pool_assets_short[0])) && typeof o.last_height_borrow_interest_rate_computed === "bigint" && typeof o.funding_rate === "string" && Array.isArray(o.fees_collected) && (!o.fees_collected.length || Coin.isAmino(o.fees_collected[0])) && typeof o.leverage_max === "string");
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammPoolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.ammPoolId);
    }
    if (message.health !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.health, 18).atomics);
    }
    if (message.borrowInterestRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowInterestRate, 18).atomics);
    }
    for (const v of message.poolAssetsLong) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolAssetsShort) {
      PoolAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastHeightBorrowInterestRateComputed !== BigInt(0)) {
      writer.uint32(48).int64(message.lastHeightBorrowInterestRateComputed);
    }
    if (message.fundingRate !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.fundingRate, 18).atomics);
    }
    for (const v of message.feesCollected) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.leverageMax !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.leverageMax, 18).atomics);
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
          message.borrowInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.poolAssetsLong.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolAssetsShort.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastHeightBorrowInterestRateComputed = reader.int64();
          break;
        case 7:
          message.fundingRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.feesCollected.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          message.leverageMax = Decimal.fromAtomics(reader.string(), 18).toString();
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
      borrowInterestRate: isSet(object.borrowInterestRate) ? String(object.borrowInterestRate) : "",
      poolAssetsLong: Array.isArray(object?.poolAssetsLong) ? object.poolAssetsLong.map((e: any) => PoolAsset.fromJSON(e)) : [],
      poolAssetsShort: Array.isArray(object?.poolAssetsShort) ? object.poolAssetsShort.map((e: any) => PoolAsset.fromJSON(e)) : [],
      lastHeightBorrowInterestRateComputed: isSet(object.lastHeightBorrowInterestRateComputed) ? BigInt(object.lastHeightBorrowInterestRateComputed.toString()) : BigInt(0),
      fundingRate: isSet(object.fundingRate) ? String(object.fundingRate) : "",
      feesCollected: Array.isArray(object?.feesCollected) ? object.feesCollected.map((e: any) => Coin.fromJSON(e)) : [],
      leverageMax: isSet(object.leverageMax) ? String(object.leverageMax) : ""
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.ammPoolId !== undefined && (obj.ammPoolId = (message.ammPoolId || BigInt(0)).toString());
    message.health !== undefined && (obj.health = message.health);
    message.borrowInterestRate !== undefined && (obj.borrowInterestRate = message.borrowInterestRate);
    if (message.poolAssetsLong) {
      obj.poolAssetsLong = message.poolAssetsLong.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssetsLong = [];
    }
    if (message.poolAssetsShort) {
      obj.poolAssetsShort = message.poolAssetsShort.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssetsShort = [];
    }
    message.lastHeightBorrowInterestRateComputed !== undefined && (obj.lastHeightBorrowInterestRateComputed = (message.lastHeightBorrowInterestRateComputed || BigInt(0)).toString());
    message.fundingRate !== undefined && (obj.fundingRate = message.fundingRate);
    if (message.feesCollected) {
      obj.feesCollected = message.feesCollected.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feesCollected = [];
    }
    message.leverageMax !== undefined && (obj.leverageMax = message.leverageMax);
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.ammPoolId = object.ammPoolId !== undefined && object.ammPoolId !== null ? BigInt(object.ammPoolId.toString()) : BigInt(0);
    message.health = object.health ?? "";
    message.borrowInterestRate = object.borrowInterestRate ?? "";
    message.poolAssetsLong = object.poolAssetsLong?.map(e => PoolAsset.fromPartial(e)) || [];
    message.poolAssetsShort = object.poolAssetsShort?.map(e => PoolAsset.fromPartial(e)) || [];
    message.lastHeightBorrowInterestRateComputed = object.lastHeightBorrowInterestRateComputed !== undefined && object.lastHeightBorrowInterestRateComputed !== null ? BigInt(object.lastHeightBorrowInterestRateComputed.toString()) : BigInt(0);
    message.fundingRate = object.fundingRate ?? "";
    message.feesCollected = object.feesCollected?.map(e => Coin.fromPartial(e)) || [];
    message.leverageMax = object.leverageMax ?? "";
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
    if (object.borrow_interest_rate !== undefined && object.borrow_interest_rate !== null) {
      message.borrowInterestRate = object.borrow_interest_rate;
    }
    message.poolAssetsLong = object.pool_assets_long?.map(e => PoolAsset.fromAmino(e)) || [];
    message.poolAssetsShort = object.pool_assets_short?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.last_height_borrow_interest_rate_computed !== undefined && object.last_height_borrow_interest_rate_computed !== null) {
      message.lastHeightBorrowInterestRateComputed = BigInt(object.last_height_borrow_interest_rate_computed);
    }
    if (object.funding_rate !== undefined && object.funding_rate !== null) {
      message.fundingRate = object.funding_rate;
    }
    message.feesCollected = object.fees_collected?.map(e => Coin.fromAmino(e)) || [];
    if (object.leverage_max !== undefined && object.leverage_max !== null) {
      message.leverageMax = object.leverage_max;
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.amm_pool_id = message.ammPoolId !== BigInt(0) ? message.ammPoolId?.toString() : undefined;
    obj.health = message.health === "" ? undefined : message.health;
    obj.borrow_interest_rate = message.borrowInterestRate === "" ? undefined : message.borrowInterestRate;
    if (message.poolAssetsLong) {
      obj.pool_assets_long = message.poolAssetsLong.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_long = message.poolAssetsLong;
    }
    if (message.poolAssetsShort) {
      obj.pool_assets_short = message.poolAssetsShort.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets_short = message.poolAssetsShort;
    }
    obj.last_height_borrow_interest_rate_computed = message.lastHeightBorrowInterestRateComputed !== BigInt(0) ? message.lastHeightBorrowInterestRateComputed?.toString() : undefined;
    obj.funding_rate = message.fundingRate === "" ? undefined : message.fundingRate;
    if (message.feesCollected) {
      obj.fees_collected = message.feesCollected.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fees_collected = message.feesCollected;
    }
    obj.leverage_max = message.leverageMax === "" ? undefined : message.leverageMax;
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
      typeUrl: "/elys.perpetual.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);