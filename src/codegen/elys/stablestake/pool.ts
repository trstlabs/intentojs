import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface Pool {
  depositDenom: string;
  interestRate: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  totalValue: string;
  maxLeverageRatio: string;
  maxWithdrawRatio: string;
  id: bigint;
}
export interface PoolProtoMsg {
  typeUrl: "/elys.stablestake.Pool";
  value: Uint8Array;
}
/**
 * @name PoolAmino
 * @package elys.stablestake
 * @see proto type: elys.stablestake.Pool
 */
export interface PoolAmino {
  deposit_denom?: string;
  interest_rate?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  total_value?: string;
  max_leverage_ratio?: string;
  max_withdraw_ratio?: string;
  id?: string;
}
export interface PoolAminoMsg {
  type: "/elys.stablestake.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  deposit_denom: string;
  interest_rate: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  total_value: string;
  max_leverage_ratio: string;
  max_withdraw_ratio: string;
  id: bigint;
}
export interface AmmPool {
  id: bigint;
  totalLiabilities: Coin[];
}
export interface AmmPoolProtoMsg {
  typeUrl: "/elys.stablestake.AmmPool";
  value: Uint8Array;
}
/**
 * @name AmmPoolAmino
 * @package elys.stablestake
 * @see proto type: elys.stablestake.AmmPool
 */
export interface AmmPoolAmino {
  id?: string;
  total_liabilities?: CoinAmino[];
}
export interface AmmPoolAminoMsg {
  type: "/elys.stablestake.AmmPool";
  value: AmmPoolAmino;
}
export interface AmmPoolSDKType {
  id: bigint;
  total_liabilities: CoinSDKType[];
}
function createBasePool(): Pool {
  return {
    depositDenom: "",
    interestRate: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    totalValue: "",
    maxLeverageRatio: "",
    maxWithdrawRatio: "",
    id: BigInt(0)
  };
}
export const Pool = {
  typeUrl: "/elys.stablestake.Pool",
  is(o: any): o is Pool {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.depositDenom === "string" && typeof o.interestRate === "string" && typeof o.interestRateMax === "string" && typeof o.interestRateMin === "string" && typeof o.interestRateIncrease === "string" && typeof o.interestRateDecrease === "string" && typeof o.healthGainFactor === "string" && typeof o.totalValue === "string" && typeof o.maxLeverageRatio === "string" && typeof o.maxWithdrawRatio === "string" && typeof o.id === "bigint");
  },
  isSDK(o: any): o is PoolSDKType {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.deposit_denom === "string" && typeof o.interest_rate === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.total_value === "string" && typeof o.max_leverage_ratio === "string" && typeof o.max_withdraw_ratio === "string" && typeof o.id === "bigint");
  },
  isAmino(o: any): o is PoolAmino {
    return o && (o.$typeUrl === Pool.typeUrl || typeof o.deposit_denom === "string" && typeof o.interest_rate === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.total_value === "string" && typeof o.max_leverage_ratio === "string" && typeof o.max_withdraw_ratio === "string" && typeof o.id === "bigint");
  },
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.interestRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.interestRateMax, 18).atomics);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.interestRateMin, 18).atomics);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.interestRateIncrease, 18).atomics);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.interestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.totalValue !== "") {
      writer.uint32(66).string(message.totalValue);
    }
    if (message.maxLeverageRatio !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.maxLeverageRatio, 18).atomics);
    }
    if (message.maxWithdrawRatio !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.maxWithdrawRatio, 18).atomics);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(88).uint64(message.id);
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
          message.depositDenom = reader.string();
          break;
        case 2:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.interestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.interestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.interestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.interestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.totalValue = reader.string();
          break;
        case 9:
          message.maxLeverageRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.maxWithdrawRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.id = reader.uint64();
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
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      interestRate: isSet(object.interestRate) ? String(object.interestRate) : "",
      interestRateMax: isSet(object.interestRateMax) ? String(object.interestRateMax) : "",
      interestRateMin: isSet(object.interestRateMin) ? String(object.interestRateMin) : "",
      interestRateIncrease: isSet(object.interestRateIncrease) ? String(object.interestRateIncrease) : "",
      interestRateDecrease: isSet(object.interestRateDecrease) ? String(object.interestRateDecrease) : "",
      healthGainFactor: isSet(object.healthGainFactor) ? String(object.healthGainFactor) : "",
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : "",
      maxLeverageRatio: isSet(object.maxLeverageRatio) ? String(object.maxLeverageRatio) : "",
      maxWithdrawRatio: isSet(object.maxWithdrawRatio) ? String(object.maxWithdrawRatio) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.interestRate !== undefined && (obj.interestRate = message.interestRate);
    message.interestRateMax !== undefined && (obj.interestRateMax = message.interestRateMax);
    message.interestRateMin !== undefined && (obj.interestRateMin = message.interestRateMin);
    message.interestRateIncrease !== undefined && (obj.interestRateIncrease = message.interestRateIncrease);
    message.interestRateDecrease !== undefined && (obj.interestRateDecrease = message.interestRateDecrease);
    message.healthGainFactor !== undefined && (obj.healthGainFactor = message.healthGainFactor);
    message.totalValue !== undefined && (obj.totalValue = message.totalValue);
    message.maxLeverageRatio !== undefined && (obj.maxLeverageRatio = message.maxLeverageRatio);
    message.maxWithdrawRatio !== undefined && (obj.maxWithdrawRatio = message.maxWithdrawRatio);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Pool>): Pool {
    const message = createBasePool();
    message.depositDenom = object.depositDenom ?? "";
    message.interestRate = object.interestRate ?? "";
    message.interestRateMax = object.interestRateMax ?? "";
    message.interestRateMin = object.interestRateMin ?? "";
    message.interestRateIncrease = object.interestRateIncrease ?? "";
    message.interestRateDecrease = object.interestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.totalValue = object.totalValue ?? "";
    message.maxLeverageRatio = object.maxLeverageRatio ?? "";
    message.maxWithdrawRatio = object.maxWithdrawRatio ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.interest_rate_max !== undefined && object.interest_rate_max !== null) {
      message.interestRateMax = object.interest_rate_max;
    }
    if (object.interest_rate_min !== undefined && object.interest_rate_min !== null) {
      message.interestRateMin = object.interest_rate_min;
    }
    if (object.interest_rate_increase !== undefined && object.interest_rate_increase !== null) {
      message.interestRateIncrease = object.interest_rate_increase;
    }
    if (object.interest_rate_decrease !== undefined && object.interest_rate_decrease !== null) {
      message.interestRateDecrease = object.interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    if (object.max_leverage_ratio !== undefined && object.max_leverage_ratio !== null) {
      message.maxLeverageRatio = object.max_leverage_ratio;
    }
    if (object.max_withdraw_ratio !== undefined && object.max_withdraw_ratio !== null) {
      message.maxWithdrawRatio = object.max_withdraw_ratio;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
    obj.max_leverage_ratio = message.maxLeverageRatio === "" ? undefined : message.maxLeverageRatio;
    obj.max_withdraw_ratio = message.maxWithdrawRatio === "" ? undefined : message.maxWithdrawRatio;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
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
      typeUrl: "/elys.stablestake.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pool.typeUrl, Pool);
function createBaseAmmPool(): AmmPool {
  return {
    id: BigInt(0),
    totalLiabilities: []
  };
}
export const AmmPool = {
  typeUrl: "/elys.stablestake.AmmPool",
  is(o: any): o is AmmPool {
    return o && (o.$typeUrl === AmmPool.typeUrl || typeof o.id === "bigint" && Array.isArray(o.totalLiabilities) && (!o.totalLiabilities.length || Coin.is(o.totalLiabilities[0])));
  },
  isSDK(o: any): o is AmmPoolSDKType {
    return o && (o.$typeUrl === AmmPool.typeUrl || typeof o.id === "bigint" && Array.isArray(o.total_liabilities) && (!o.total_liabilities.length || Coin.isSDK(o.total_liabilities[0])));
  },
  isAmino(o: any): o is AmmPoolAmino {
    return o && (o.$typeUrl === AmmPool.typeUrl || typeof o.id === "bigint" && Array.isArray(o.total_liabilities) && (!o.total_liabilities.length || Coin.isAmino(o.total_liabilities[0])));
  },
  encode(message: AmmPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.totalLiabilities) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AmmPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmmPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.totalLiabilities.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AmmPool {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      totalLiabilities: Array.isArray(object?.totalLiabilities) ? object.totalLiabilities.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: AmmPool): JsonSafe<AmmPool> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    if (message.totalLiabilities) {
      obj.totalLiabilities = message.totalLiabilities.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalLiabilities = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AmmPool>): AmmPool {
    const message = createBaseAmmPool();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.totalLiabilities = object.totalLiabilities?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AmmPoolAmino): AmmPool {
    const message = createBaseAmmPool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.totalLiabilities = object.total_liabilities?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AmmPool): AmmPoolAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.totalLiabilities) {
      obj.total_liabilities = message.totalLiabilities.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_liabilities = message.totalLiabilities;
    }
    return obj;
  },
  fromAminoMsg(object: AmmPoolAminoMsg): AmmPool {
    return AmmPool.fromAmino(object.value);
  },
  fromProtoMsg(message: AmmPoolProtoMsg): AmmPool {
    return AmmPool.decode(message.value);
  },
  toProto(message: AmmPool): Uint8Array {
    return AmmPool.encode(message).finish();
  },
  toProtoMsg(message: AmmPool): AmmPoolProtoMsg {
    return {
      typeUrl: "/elys.stablestake.AmmPool",
      value: AmmPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AmmPool.typeUrl, AmmPool);