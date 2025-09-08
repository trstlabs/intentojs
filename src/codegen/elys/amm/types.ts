import { PageRequest, PageRequestAmino, PageRequestSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export enum FilterType {
  FILTER_ALL = 0,
  FILTER_PERPETUAL = 1,
  FILTER_FIXED_WEIGHT = 2,
  FILTER_DYNAMIC_WEIGHT = 3,
  FILTER_LEVERAGE = 4,
  UNRECOGNIZED = -1,
}
export const FilterTypeSDKType = FilterType;
export const FilterTypeAmino = FilterType;
export function filterTypeFromJSON(object: any): FilterType {
  switch (object) {
    case 0:
    case "FILTER_ALL":
      return FilterType.FILTER_ALL;
    case 1:
    case "FILTER_PERPETUAL":
      return FilterType.FILTER_PERPETUAL;
    case 2:
    case "FILTER_FIXED_WEIGHT":
      return FilterType.FILTER_FIXED_WEIGHT;
    case 3:
    case "FILTER_DYNAMIC_WEIGHT":
      return FilterType.FILTER_DYNAMIC_WEIGHT;
    case 4:
    case "FILTER_LEVERAGE":
      return FilterType.FILTER_LEVERAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilterType.UNRECOGNIZED;
  }
}
export function filterTypeToJSON(object: FilterType): string {
  switch (object) {
    case FilterType.FILTER_ALL:
      return "FILTER_ALL";
    case FilterType.FILTER_PERPETUAL:
      return "FILTER_PERPETUAL";
    case FilterType.FILTER_FIXED_WEIGHT:
      return "FILTER_FIXED_WEIGHT";
    case FilterType.FILTER_DYNAMIC_WEIGHT:
      return "FILTER_DYNAMIC_WEIGHT";
    case FilterType.FILTER_LEVERAGE:
      return "FILTER_LEVERAGE";
    case FilterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface QueryEarnPoolRequest {
  poolIds: bigint[];
  filterType: FilterType;
  pagination?: PageRequest;
}
export interface QueryEarnPoolRequestProtoMsg {
  typeUrl: "/elys.amm.QueryEarnPoolRequest";
  value: Uint8Array;
}
/**
 * @name QueryEarnPoolRequestAmino
 * @package elys.amm
 * @see proto type: elys.amm.QueryEarnPoolRequest
 */
export interface QueryEarnPoolRequestAmino {
  pool_ids?: string[];
  filter_type?: FilterType;
  pagination?: PageRequestAmino;
}
export interface QueryEarnPoolRequestAminoMsg {
  type: "/elys.amm.QueryEarnPoolRequest";
  value: QueryEarnPoolRequestAmino;
}
export interface QueryEarnPoolRequestSDKType {
  pool_ids: bigint[];
  filter_type: FilterType;
  pagination?: PageRequestSDKType;
}
export interface EarnPool {
  poolId: bigint;
  assets: PoolAsset[];
  poolRatio: string;
  rewardsApr: string;
  borrowApr: string;
  leverageLp: string;
  perpetual: string;
  tvl: string;
  lpTokenPrice: string;
  rewardsUsd: string;
  rewardCoins: Coin[];
  totalShares: Coin;
  swapFee: string;
  feeDenom: string;
  useOracle: boolean;
  isLeveragelp: boolean;
}
export interface EarnPoolProtoMsg {
  typeUrl: "/elys.amm.EarnPool";
  value: Uint8Array;
}
/**
 * @name EarnPoolAmino
 * @package elys.amm
 * @see proto type: elys.amm.EarnPool
 */
export interface EarnPoolAmino {
  pool_id?: string;
  assets?: PoolAssetAmino[];
  pool_ratio?: string;
  rewards_apr?: string;
  borrow_apr?: string;
  leverage_lp?: string;
  perpetual?: string;
  tvl?: string;
  lp_token_price?: string;
  rewards_usd?: string;
  reward_coins?: CoinAmino[];
  total_shares?: CoinAmino;
  swap_fee?: string;
  fee_denom?: string;
  use_oracle?: boolean;
  is_leveragelp?: boolean;
}
export interface EarnPoolAminoMsg {
  type: "/elys.amm.EarnPool";
  value: EarnPoolAmino;
}
export interface EarnPoolSDKType {
  pool_id: bigint;
  assets: PoolAssetSDKType[];
  pool_ratio: string;
  rewards_apr: string;
  borrow_apr: string;
  leverage_lp: string;
  perpetual: string;
  tvl: string;
  lp_token_price: string;
  rewards_usd: string;
  reward_coins: CoinSDKType[];
  total_shares: CoinSDKType;
  swap_fee: string;
  fee_denom: string;
  use_oracle: boolean;
  is_leveragelp: boolean;
}
export interface QueryEarnPoolResponse {
  pools: EarnPool[];
}
export interface QueryEarnPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryEarnPoolResponse";
  value: Uint8Array;
}
/**
 * @name QueryEarnPoolResponseAmino
 * @package elys.amm
 * @see proto type: elys.amm.QueryEarnPoolResponse
 */
export interface QueryEarnPoolResponseAmino {
  pools?: EarnPoolAmino[];
}
export interface QueryEarnPoolResponseAminoMsg {
  type: "/elys.amm.QueryEarnPoolResponse";
  value: QueryEarnPoolResponseAmino;
}
export interface QueryEarnPoolResponseSDKType {
  pools: EarnPoolSDKType[];
}
function createBaseQueryEarnPoolRequest(): QueryEarnPoolRequest {
  return {
    poolIds: [],
    filterType: 0,
    pagination: undefined
  };
}
export const QueryEarnPoolRequest = {
  typeUrl: "/elys.amm.QueryEarnPoolRequest",
  is(o: any): o is QueryEarnPoolRequest {
    return o && (o.$typeUrl === QueryEarnPoolRequest.typeUrl || Array.isArray(o.poolIds) && (!o.poolIds.length || typeof o.poolIds[0] === "bigint") && isSet(o.filterType));
  },
  isSDK(o: any): o is QueryEarnPoolRequestSDKType {
    return o && (o.$typeUrl === QueryEarnPoolRequest.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint") && isSet(o.filter_type));
  },
  isAmino(o: any): o is QueryEarnPoolRequestAmino {
    return o && (o.$typeUrl === QueryEarnPoolRequest.typeUrl || Array.isArray(o.pool_ids) && (!o.pool_ids.length || typeof o.pool_ids[0] === "bigint") && isSet(o.filter_type));
  },
  encode(message: QueryEarnPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.filterType !== 0) {
      writer.uint32(16).int32(message.filterType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEarnPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEarnPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.poolIds.push(reader.uint64());
            }
          } else {
            message.poolIds.push(reader.uint64());
          }
          break;
        case 2:
          message.filterType = reader.int32() as any;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEarnPoolRequest {
    return {
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => BigInt(e.toString())) : [],
      filterType: isSet(object.filterType) ? filterTypeFromJSON(object.filterType) : -1,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryEarnPoolRequest): JsonSafe<QueryEarnPoolRequest> {
    const obj: any = {};
    if (message.poolIds) {
      obj.poolIds = message.poolIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.poolIds = [];
    }
    message.filterType !== undefined && (obj.filterType = filterTypeToJSON(message.filterType));
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryEarnPoolRequest>): QueryEarnPoolRequest {
    const message = createBaseQueryEarnPoolRequest();
    message.poolIds = object.poolIds?.map(e => BigInt(e.toString())) || [];
    message.filterType = object.filterType ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEarnPoolRequestAmino): QueryEarnPoolRequest {
    const message = createBaseQueryEarnPoolRequest();
    message.poolIds = object.pool_ids?.map(e => BigInt(e)) || [];
    if (object.filter_type !== undefined && object.filter_type !== null) {
      message.filterType = object.filter_type;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEarnPoolRequest): QueryEarnPoolRequestAmino {
    const obj: any = {};
    if (message.poolIds) {
      obj.pool_ids = message.poolIds.map(e => e.toString());
    } else {
      obj.pool_ids = message.poolIds;
    }
    obj.filter_type = message.filterType === 0 ? undefined : message.filterType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEarnPoolRequestAminoMsg): QueryEarnPoolRequest {
    return QueryEarnPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEarnPoolRequestProtoMsg): QueryEarnPoolRequest {
    return QueryEarnPoolRequest.decode(message.value);
  },
  toProto(message: QueryEarnPoolRequest): Uint8Array {
    return QueryEarnPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEarnPoolRequest): QueryEarnPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryEarnPoolRequest",
      value: QueryEarnPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEarnPoolRequest.typeUrl, QueryEarnPoolRequest);
function createBaseEarnPool(): EarnPool {
  return {
    poolId: BigInt(0),
    assets: [],
    poolRatio: "",
    rewardsApr: "",
    borrowApr: "",
    leverageLp: "",
    perpetual: "",
    tvl: "",
    lpTokenPrice: "",
    rewardsUsd: "",
    rewardCoins: [],
    totalShares: Coin.fromPartial({}),
    swapFee: "",
    feeDenom: "",
    useOracle: false,
    isLeveragelp: false
  };
}
export const EarnPool = {
  typeUrl: "/elys.amm.EarnPool",
  is(o: any): o is EarnPool {
    return o && (o.$typeUrl === EarnPool.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.assets) && (!o.assets.length || PoolAsset.is(o.assets[0])) && typeof o.poolRatio === "string" && typeof o.rewardsApr === "string" && typeof o.borrowApr === "string" && typeof o.leverageLp === "string" && typeof o.perpetual === "string" && typeof o.tvl === "string" && typeof o.lpTokenPrice === "string" && typeof o.rewardsUsd === "string" && Array.isArray(o.rewardCoins) && (!o.rewardCoins.length || Coin.is(o.rewardCoins[0])) && Coin.is(o.totalShares) && typeof o.swapFee === "string" && typeof o.feeDenom === "string" && typeof o.useOracle === "boolean" && typeof o.isLeveragelp === "boolean");
  },
  isSDK(o: any): o is EarnPoolSDKType {
    return o && (o.$typeUrl === EarnPool.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.assets) && (!o.assets.length || PoolAsset.isSDK(o.assets[0])) && typeof o.pool_ratio === "string" && typeof o.rewards_apr === "string" && typeof o.borrow_apr === "string" && typeof o.leverage_lp === "string" && typeof o.perpetual === "string" && typeof o.tvl === "string" && typeof o.lp_token_price === "string" && typeof o.rewards_usd === "string" && Array.isArray(o.reward_coins) && (!o.reward_coins.length || Coin.isSDK(o.reward_coins[0])) && Coin.isSDK(o.total_shares) && typeof o.swap_fee === "string" && typeof o.fee_denom === "string" && typeof o.use_oracle === "boolean" && typeof o.is_leveragelp === "boolean");
  },
  isAmino(o: any): o is EarnPoolAmino {
    return o && (o.$typeUrl === EarnPool.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.assets) && (!o.assets.length || PoolAsset.isAmino(o.assets[0])) && typeof o.pool_ratio === "string" && typeof o.rewards_apr === "string" && typeof o.borrow_apr === "string" && typeof o.leverage_lp === "string" && typeof o.perpetual === "string" && typeof o.tvl === "string" && typeof o.lp_token_price === "string" && typeof o.rewards_usd === "string" && Array.isArray(o.reward_coins) && (!o.reward_coins.length || Coin.isAmino(o.reward_coins[0])) && Coin.isAmino(o.total_shares) && typeof o.swap_fee === "string" && typeof o.fee_denom === "string" && typeof o.use_oracle === "boolean" && typeof o.is_leveragelp === "boolean");
  },
  encode(message: EarnPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.assets) {
      PoolAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolRatio !== "") {
      writer.uint32(26).string(message.poolRatio);
    }
    if (message.rewardsApr !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.rewardsApr, 18).atomics);
    }
    if (message.borrowApr !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.borrowApr, 18).atomics);
    }
    if (message.leverageLp !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.leverageLp, 18).atomics);
    }
    if (message.perpetual !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.perpetual, 18).atomics);
    }
    if (message.tvl !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.tvl, 18).atomics);
    }
    if (message.lpTokenPrice !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.lpTokenPrice, 18).atomics);
    }
    if (message.rewardsUsd !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.rewardsUsd, 18).atomics);
    }
    for (const v of message.rewardCoins) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(98).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.feeDenom !== "") {
      writer.uint32(114).string(message.feeDenom);
    }
    if (message.useOracle === true) {
      writer.uint32(120).bool(message.useOracle);
    }
    if (message.isLeveragelp === true) {
      writer.uint32(128).bool(message.isLeveragelp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EarnPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEarnPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.assets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.poolRatio = reader.string();
          break;
        case 4:
          message.rewardsApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.borrowApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.leverageLp = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.perpetual = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.tvl = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.lpTokenPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.rewardsUsd = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.rewardCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 12:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        case 13:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.feeDenom = reader.string();
          break;
        case 15:
          message.useOracle = reader.bool();
          break;
        case 16:
          message.isLeveragelp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EarnPool {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => PoolAsset.fromJSON(e)) : [],
      poolRatio: isSet(object.poolRatio) ? String(object.poolRatio) : "",
      rewardsApr: isSet(object.rewardsApr) ? String(object.rewardsApr) : "",
      borrowApr: isSet(object.borrowApr) ? String(object.borrowApr) : "",
      leverageLp: isSet(object.leverageLp) ? String(object.leverageLp) : "",
      perpetual: isSet(object.perpetual) ? String(object.perpetual) : "",
      tvl: isSet(object.tvl) ? String(object.tvl) : "",
      lpTokenPrice: isSet(object.lpTokenPrice) ? String(object.lpTokenPrice) : "",
      rewardsUsd: isSet(object.rewardsUsd) ? String(object.rewardsUsd) : "",
      rewardCoins: Array.isArray(object?.rewardCoins) ? object.rewardCoins.map((e: any) => Coin.fromJSON(e)) : [],
      totalShares: isSet(object.totalShares) ? Coin.fromJSON(object.totalShares) : undefined,
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      feeDenom: isSet(object.feeDenom) ? String(object.feeDenom) : "",
      useOracle: isSet(object.useOracle) ? Boolean(object.useOracle) : false,
      isLeveragelp: isSet(object.isLeveragelp) ? Boolean(object.isLeveragelp) : false
    };
  },
  toJSON(message: EarnPool): JsonSafe<EarnPool> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }
    message.poolRatio !== undefined && (obj.poolRatio = message.poolRatio);
    message.rewardsApr !== undefined && (obj.rewardsApr = message.rewardsApr);
    message.borrowApr !== undefined && (obj.borrowApr = message.borrowApr);
    message.leverageLp !== undefined && (obj.leverageLp = message.leverageLp);
    message.perpetual !== undefined && (obj.perpetual = message.perpetual);
    message.tvl !== undefined && (obj.tvl = message.tvl);
    message.lpTokenPrice !== undefined && (obj.lpTokenPrice = message.lpTokenPrice);
    message.rewardsUsd !== undefined && (obj.rewardsUsd = message.rewardsUsd);
    if (message.rewardCoins) {
      obj.rewardCoins = message.rewardCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardCoins = [];
    }
    message.totalShares !== undefined && (obj.totalShares = message.totalShares ? Coin.toJSON(message.totalShares) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.useOracle !== undefined && (obj.useOracle = message.useOracle);
    message.isLeveragelp !== undefined && (obj.isLeveragelp = message.isLeveragelp);
    return obj;
  },
  fromPartial(object: Partial<EarnPool>): EarnPool {
    const message = createBaseEarnPool();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.assets = object.assets?.map(e => PoolAsset.fromPartial(e)) || [];
    message.poolRatio = object.poolRatio ?? "";
    message.rewardsApr = object.rewardsApr ?? "";
    message.borrowApr = object.borrowApr ?? "";
    message.leverageLp = object.leverageLp ?? "";
    message.perpetual = object.perpetual ?? "";
    message.tvl = object.tvl ?? "";
    message.lpTokenPrice = object.lpTokenPrice ?? "";
    message.rewardsUsd = object.rewardsUsd ?? "";
    message.rewardCoins = object.rewardCoins?.map(e => Coin.fromPartial(e)) || [];
    message.totalShares = object.totalShares !== undefined && object.totalShares !== null ? Coin.fromPartial(object.totalShares) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.feeDenom = object.feeDenom ?? "";
    message.useOracle = object.useOracle ?? false;
    message.isLeveragelp = object.isLeveragelp ?? false;
    return message;
  },
  fromAmino(object: EarnPoolAmino): EarnPool {
    const message = createBaseEarnPool();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.assets = object.assets?.map(e => PoolAsset.fromAmino(e)) || [];
    if (object.pool_ratio !== undefined && object.pool_ratio !== null) {
      message.poolRatio = object.pool_ratio;
    }
    if (object.rewards_apr !== undefined && object.rewards_apr !== null) {
      message.rewardsApr = object.rewards_apr;
    }
    if (object.borrow_apr !== undefined && object.borrow_apr !== null) {
      message.borrowApr = object.borrow_apr;
    }
    if (object.leverage_lp !== undefined && object.leverage_lp !== null) {
      message.leverageLp = object.leverage_lp;
    }
    if (object.perpetual !== undefined && object.perpetual !== null) {
      message.perpetual = object.perpetual;
    }
    if (object.tvl !== undefined && object.tvl !== null) {
      message.tvl = object.tvl;
    }
    if (object.lp_token_price !== undefined && object.lp_token_price !== null) {
      message.lpTokenPrice = object.lp_token_price;
    }
    if (object.rewards_usd !== undefined && object.rewards_usd !== null) {
      message.rewardsUsd = object.rewards_usd;
    }
    message.rewardCoins = object.reward_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.total_shares !== undefined && object.total_shares !== null) {
      message.totalShares = Coin.fromAmino(object.total_shares);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.fee_denom !== undefined && object.fee_denom !== null) {
      message.feeDenom = object.fee_denom;
    }
    if (object.use_oracle !== undefined && object.use_oracle !== null) {
      message.useOracle = object.use_oracle;
    }
    if (object.is_leveragelp !== undefined && object.is_leveragelp !== null) {
      message.isLeveragelp = object.is_leveragelp;
    }
    return message;
  },
  toAmino(message: EarnPool): EarnPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.assets) {
      obj.assets = message.assets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.assets = message.assets;
    }
    obj.pool_ratio = message.poolRatio === "" ? undefined : message.poolRatio;
    obj.rewards_apr = message.rewardsApr === "" ? undefined : message.rewardsApr;
    obj.borrow_apr = message.borrowApr === "" ? undefined : message.borrowApr;
    obj.leverage_lp = message.leverageLp === "" ? undefined : message.leverageLp;
    obj.perpetual = message.perpetual === "" ? undefined : message.perpetual;
    obj.tvl = message.tvl === "" ? undefined : message.tvl;
    obj.lp_token_price = message.lpTokenPrice === "" ? undefined : message.lpTokenPrice;
    obj.rewards_usd = message.rewardsUsd === "" ? undefined : message.rewardsUsd;
    if (message.rewardCoins) {
      obj.reward_coins = message.rewardCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward_coins = message.rewardCoins;
    }
    obj.total_shares = message.totalShares ? Coin.toAmino(message.totalShares) : undefined;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.fee_denom = message.feeDenom === "" ? undefined : message.feeDenom;
    obj.use_oracle = message.useOracle === false ? undefined : message.useOracle;
    obj.is_leveragelp = message.isLeveragelp === false ? undefined : message.isLeveragelp;
    return obj;
  },
  fromAminoMsg(object: EarnPoolAminoMsg): EarnPool {
    return EarnPool.fromAmino(object.value);
  },
  fromProtoMsg(message: EarnPoolProtoMsg): EarnPool {
    return EarnPool.decode(message.value);
  },
  toProto(message: EarnPool): Uint8Array {
    return EarnPool.encode(message).finish();
  },
  toProtoMsg(message: EarnPool): EarnPoolProtoMsg {
    return {
      typeUrl: "/elys.amm.EarnPool",
      value: EarnPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EarnPool.typeUrl, EarnPool);
function createBaseQueryEarnPoolResponse(): QueryEarnPoolResponse {
  return {
    pools: []
  };
}
export const QueryEarnPoolResponse = {
  typeUrl: "/elys.amm.QueryEarnPoolResponse",
  is(o: any): o is QueryEarnPoolResponse {
    return o && (o.$typeUrl === QueryEarnPoolResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || EarnPool.is(o.pools[0])));
  },
  isSDK(o: any): o is QueryEarnPoolResponseSDKType {
    return o && (o.$typeUrl === QueryEarnPoolResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || EarnPool.isSDK(o.pools[0])));
  },
  isAmino(o: any): o is QueryEarnPoolResponseAmino {
    return o && (o.$typeUrl === QueryEarnPoolResponse.typeUrl || Array.isArray(o.pools) && (!o.pools.length || EarnPool.isAmino(o.pools[0])));
  },
  encode(message: QueryEarnPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      EarnPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEarnPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEarnPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(EarnPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEarnPoolResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => EarnPool.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryEarnPoolResponse): JsonSafe<QueryEarnPoolResponse> {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? EarnPool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryEarnPoolResponse>): QueryEarnPoolResponse {
    const message = createBaseQueryEarnPoolResponse();
    message.pools = object.pools?.map(e => EarnPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEarnPoolResponseAmino): QueryEarnPoolResponse {
    const message = createBaseQueryEarnPoolResponse();
    message.pools = object.pools?.map(e => EarnPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEarnPoolResponse): QueryEarnPoolResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? EarnPool.toAmino(e) : undefined);
    } else {
      obj.pools = message.pools;
    }
    return obj;
  },
  fromAminoMsg(object: QueryEarnPoolResponseAminoMsg): QueryEarnPoolResponse {
    return QueryEarnPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEarnPoolResponseProtoMsg): QueryEarnPoolResponse {
    return QueryEarnPoolResponse.decode(message.value);
  },
  toProto(message: QueryEarnPoolResponse): Uint8Array {
    return QueryEarnPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEarnPoolResponse): QueryEarnPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryEarnPoolResponse",
      value: QueryEarnPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryEarnPoolResponse.typeUrl, QueryEarnPoolResponse);