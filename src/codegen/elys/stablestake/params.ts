import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface LegacyParams {
  depositDenom: string;
  redemptionRate: string;
  epochLength: bigint;
  interestRate: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  totalValue: string;
}
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.stablestake.LegacyParams";
  value: Uint8Array;
}
/**
 * @name LegacyParamsAmino
 * @package elys.stablestake
 * @see proto type: elys.stablestake.LegacyParams
 */
export interface LegacyParamsAmino {
  deposit_denom?: string;
  redemption_rate?: string;
  epoch_length?: string;
  interest_rate?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  total_value?: string;
}
export interface LegacyParamsAminoMsg {
  type: "/elys.stablestake.LegacyParams";
  value: LegacyParamsAmino;
}
export interface LegacyParamsSDKType {
  deposit_denom: string;
  redemption_rate: string;
  epoch_length: bigint;
  interest_rate: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  total_value: string;
}
/** Params defines the parameters for the module. */
export interface Params {
  legacyDepositDenom: string;
  legacyRedemptionRate: string;
  epochLength: bigint;
  legacyInterestRate: string;
  legacyInterestRateMax: string;
  legacyInterestRateMin: string;
  legacyInterestRateIncrease: string;
  legacyInterestRateDecrease: string;
  legacyHealthGainFactor: string;
  totalValue: string;
  legacyMaxLeverageRatio: string;
  legacyMaxWithdrawRatio: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.stablestake.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package elys.stablestake
 * @see proto type: elys.stablestake.Params
 */
export interface ParamsAmino {
  legacy_deposit_denom?: string;
  legacy_redemption_rate?: string;
  epoch_length?: string;
  legacy_interest_rate?: string;
  legacy_interest_rate_max?: string;
  legacy_interest_rate_min?: string;
  legacy_interest_rate_increase?: string;
  legacy_interest_rate_decrease?: string;
  legacy_health_gain_factor?: string;
  total_value?: string;
  legacy_max_leverage_ratio?: string;
  legacy_max_withdraw_ratio?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.stablestake.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  legacy_deposit_denom: string;
  legacy_redemption_rate: string;
  epoch_length: bigint;
  legacy_interest_rate: string;
  legacy_interest_rate_max: string;
  legacy_interest_rate_min: string;
  legacy_interest_rate_increase: string;
  legacy_interest_rate_decrease: string;
  legacy_health_gain_factor: string;
  total_value: string;
  legacy_max_leverage_ratio: string;
  legacy_max_withdraw_ratio: string;
}
function createBaseLegacyParams(): LegacyParams {
  return {
    depositDenom: "",
    redemptionRate: "",
    epochLength: BigInt(0),
    interestRate: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    totalValue: ""
  };
}
export const LegacyParams = {
  typeUrl: "/elys.stablestake.LegacyParams",
  is(o: any): o is LegacyParams {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.depositDenom === "string" && typeof o.redemptionRate === "string" && typeof o.epochLength === "bigint" && typeof o.interestRate === "string" && typeof o.interestRateMax === "string" && typeof o.interestRateMin === "string" && typeof o.interestRateIncrease === "string" && typeof o.interestRateDecrease === "string" && typeof o.healthGainFactor === "string" && typeof o.totalValue === "string");
  },
  isSDK(o: any): o is LegacyParamsSDKType {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.deposit_denom === "string" && typeof o.redemption_rate === "string" && typeof o.epoch_length === "bigint" && typeof o.interest_rate === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.total_value === "string");
  },
  isAmino(o: any): o is LegacyParamsAmino {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.deposit_denom === "string" && typeof o.redemption_rate === "string" && typeof o.epoch_length === "bigint" && typeof o.interest_rate === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.total_value === "string");
  },
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.redemptionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.redemptionRate, 18).atomics);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(24).int64(message.epochLength);
    }
    if (message.interestRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.interestRateMax, 18).atomics);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.interestRateMin, 18).atomics);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.interestRateIncrease, 18).atomics);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.interestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.totalValue !== "") {
      writer.uint32(82).string(message.totalValue);
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
          message.depositDenom = reader.string();
          break;
        case 2:
          message.redemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.epochLength = reader.int64();
          break;
        case 4:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.interestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.interestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.interestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.interestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.totalValue = reader.string();
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
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      redemptionRate: isSet(object.redemptionRate) ? String(object.redemptionRate) : "",
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      interestRate: isSet(object.interestRate) ? String(object.interestRate) : "",
      interestRateMax: isSet(object.interestRateMax) ? String(object.interestRateMax) : "",
      interestRateMin: isSet(object.interestRateMin) ? String(object.interestRateMin) : "",
      interestRateIncrease: isSet(object.interestRateIncrease) ? String(object.interestRateIncrease) : "",
      interestRateDecrease: isSet(object.interestRateDecrease) ? String(object.interestRateDecrease) : "",
      healthGainFactor: isSet(object.healthGainFactor) ? String(object.healthGainFactor) : "",
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : ""
    };
  },
  toJSON(message: LegacyParams): JsonSafe<LegacyParams> {
    const obj: any = {};
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.redemptionRate !== undefined && (obj.redemptionRate = message.redemptionRate);
    message.epochLength !== undefined && (obj.epochLength = (message.epochLength || BigInt(0)).toString());
    message.interestRate !== undefined && (obj.interestRate = message.interestRate);
    message.interestRateMax !== undefined && (obj.interestRateMax = message.interestRateMax);
    message.interestRateMin !== undefined && (obj.interestRateMin = message.interestRateMin);
    message.interestRateIncrease !== undefined && (obj.interestRateIncrease = message.interestRateIncrease);
    message.interestRateDecrease !== undefined && (obj.interestRateDecrease = message.interestRateDecrease);
    message.healthGainFactor !== undefined && (obj.healthGainFactor = message.healthGainFactor);
    message.totalValue !== undefined && (obj.totalValue = message.totalValue);
    return obj;
  },
  fromPartial(object: Partial<LegacyParams>): LegacyParams {
    const message = createBaseLegacyParams();
    message.depositDenom = object.depositDenom ?? "";
    message.redemptionRate = object.redemptionRate ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.interestRate = object.interestRate ?? "";
    message.interestRateMax = object.interestRateMax ?? "";
    message.interestRateMin = object.interestRateMin ?? "";
    message.interestRateIncrease = object.interestRateIncrease ?? "";
    message.interestRateDecrease = object.interestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.totalValue = object.totalValue ?? "";
    return message;
  },
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.redemption_rate !== undefined && object.redemption_rate !== null) {
      message.redemptionRate = object.redemption_rate;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
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
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.redemption_rate = message.redemptionRate === "" ? undefined : message.redemptionRate;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength?.toString() : undefined;
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
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
      typeUrl: "/elys.stablestake.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyParams.typeUrl, LegacyParams);
function createBaseParams(): Params {
  return {
    legacyDepositDenom: "",
    legacyRedemptionRate: "",
    epochLength: BigInt(0),
    legacyInterestRate: "",
    legacyInterestRateMax: "",
    legacyInterestRateMin: "",
    legacyInterestRateIncrease: "",
    legacyInterestRateDecrease: "",
    legacyHealthGainFactor: "",
    totalValue: "",
    legacyMaxLeverageRatio: "",
    legacyMaxWithdrawRatio: ""
  };
}
export const Params = {
  typeUrl: "/elys.stablestake.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.legacyDepositDenom === "string" && typeof o.legacyRedemptionRate === "string" && typeof o.epochLength === "bigint" && typeof o.legacyInterestRate === "string" && typeof o.legacyInterestRateMax === "string" && typeof o.legacyInterestRateMin === "string" && typeof o.legacyInterestRateIncrease === "string" && typeof o.legacyInterestRateDecrease === "string" && typeof o.legacyHealthGainFactor === "string" && typeof o.totalValue === "string" && typeof o.legacyMaxLeverageRatio === "string" && typeof o.legacyMaxWithdrawRatio === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.legacy_deposit_denom === "string" && typeof o.legacy_redemption_rate === "string" && typeof o.epoch_length === "bigint" && typeof o.legacy_interest_rate === "string" && typeof o.legacy_interest_rate_max === "string" && typeof o.legacy_interest_rate_min === "string" && typeof o.legacy_interest_rate_increase === "string" && typeof o.legacy_interest_rate_decrease === "string" && typeof o.legacy_health_gain_factor === "string" && typeof o.total_value === "string" && typeof o.legacy_max_leverage_ratio === "string" && typeof o.legacy_max_withdraw_ratio === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.legacy_deposit_denom === "string" && typeof o.legacy_redemption_rate === "string" && typeof o.epoch_length === "bigint" && typeof o.legacy_interest_rate === "string" && typeof o.legacy_interest_rate_max === "string" && typeof o.legacy_interest_rate_min === "string" && typeof o.legacy_interest_rate_increase === "string" && typeof o.legacy_interest_rate_decrease === "string" && typeof o.legacy_health_gain_factor === "string" && typeof o.total_value === "string" && typeof o.legacy_max_leverage_ratio === "string" && typeof o.legacy_max_withdraw_ratio === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.legacyDepositDenom !== "") {
      writer.uint32(10).string(message.legacyDepositDenom);
    }
    if (message.legacyRedemptionRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.legacyRedemptionRate, 18).atomics);
    }
    if (message.epochLength !== BigInt(0)) {
      writer.uint32(24).int64(message.epochLength);
    }
    if (message.legacyInterestRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.legacyInterestRate, 18).atomics);
    }
    if (message.legacyInterestRateMax !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.legacyInterestRateMax, 18).atomics);
    }
    if (message.legacyInterestRateMin !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.legacyInterestRateMin, 18).atomics);
    }
    if (message.legacyInterestRateIncrease !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.legacyInterestRateIncrease, 18).atomics);
    }
    if (message.legacyInterestRateDecrease !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.legacyInterestRateDecrease, 18).atomics);
    }
    if (message.legacyHealthGainFactor !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.legacyHealthGainFactor, 18).atomics);
    }
    if (message.totalValue !== "") {
      writer.uint32(82).string(message.totalValue);
    }
    if (message.legacyMaxLeverageRatio !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.legacyMaxLeverageRatio, 18).atomics);
    }
    if (message.legacyMaxWithdrawRatio !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.legacyMaxWithdrawRatio, 18).atomics);
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
          message.legacyDepositDenom = reader.string();
          break;
        case 2:
          message.legacyRedemptionRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.epochLength = reader.int64();
          break;
        case 4:
          message.legacyInterestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.legacyInterestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.legacyInterestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.legacyInterestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.legacyInterestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.legacyHealthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.totalValue = reader.string();
          break;
        case 11:
          message.legacyMaxLeverageRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.legacyMaxWithdrawRatio = Decimal.fromAtomics(reader.string(), 18).toString();
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
      legacyDepositDenom: isSet(object.legacyDepositDenom) ? String(object.legacyDepositDenom) : "",
      legacyRedemptionRate: isSet(object.legacyRedemptionRate) ? String(object.legacyRedemptionRate) : "",
      epochLength: isSet(object.epochLength) ? BigInt(object.epochLength.toString()) : BigInt(0),
      legacyInterestRate: isSet(object.legacyInterestRate) ? String(object.legacyInterestRate) : "",
      legacyInterestRateMax: isSet(object.legacyInterestRateMax) ? String(object.legacyInterestRateMax) : "",
      legacyInterestRateMin: isSet(object.legacyInterestRateMin) ? String(object.legacyInterestRateMin) : "",
      legacyInterestRateIncrease: isSet(object.legacyInterestRateIncrease) ? String(object.legacyInterestRateIncrease) : "",
      legacyInterestRateDecrease: isSet(object.legacyInterestRateDecrease) ? String(object.legacyInterestRateDecrease) : "",
      legacyHealthGainFactor: isSet(object.legacyHealthGainFactor) ? String(object.legacyHealthGainFactor) : "",
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : "",
      legacyMaxLeverageRatio: isSet(object.legacyMaxLeverageRatio) ? String(object.legacyMaxLeverageRatio) : "",
      legacyMaxWithdrawRatio: isSet(object.legacyMaxWithdrawRatio) ? String(object.legacyMaxWithdrawRatio) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.legacyDepositDenom !== undefined && (obj.legacyDepositDenom = message.legacyDepositDenom);
    message.legacyRedemptionRate !== undefined && (obj.legacyRedemptionRate = message.legacyRedemptionRate);
    message.epochLength !== undefined && (obj.epochLength = (message.epochLength || BigInt(0)).toString());
    message.legacyInterestRate !== undefined && (obj.legacyInterestRate = message.legacyInterestRate);
    message.legacyInterestRateMax !== undefined && (obj.legacyInterestRateMax = message.legacyInterestRateMax);
    message.legacyInterestRateMin !== undefined && (obj.legacyInterestRateMin = message.legacyInterestRateMin);
    message.legacyInterestRateIncrease !== undefined && (obj.legacyInterestRateIncrease = message.legacyInterestRateIncrease);
    message.legacyInterestRateDecrease !== undefined && (obj.legacyInterestRateDecrease = message.legacyInterestRateDecrease);
    message.legacyHealthGainFactor !== undefined && (obj.legacyHealthGainFactor = message.legacyHealthGainFactor);
    message.totalValue !== undefined && (obj.totalValue = message.totalValue);
    message.legacyMaxLeverageRatio !== undefined && (obj.legacyMaxLeverageRatio = message.legacyMaxLeverageRatio);
    message.legacyMaxWithdrawRatio !== undefined && (obj.legacyMaxWithdrawRatio = message.legacyMaxWithdrawRatio);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.legacyDepositDenom = object.legacyDepositDenom ?? "";
    message.legacyRedemptionRate = object.legacyRedemptionRate ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? BigInt(object.epochLength.toString()) : BigInt(0);
    message.legacyInterestRate = object.legacyInterestRate ?? "";
    message.legacyInterestRateMax = object.legacyInterestRateMax ?? "";
    message.legacyInterestRateMin = object.legacyInterestRateMin ?? "";
    message.legacyInterestRateIncrease = object.legacyInterestRateIncrease ?? "";
    message.legacyInterestRateDecrease = object.legacyInterestRateDecrease ?? "";
    message.legacyHealthGainFactor = object.legacyHealthGainFactor ?? "";
    message.totalValue = object.totalValue ?? "";
    message.legacyMaxLeverageRatio = object.legacyMaxLeverageRatio ?? "";
    message.legacyMaxWithdrawRatio = object.legacyMaxWithdrawRatio ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.legacy_deposit_denom !== undefined && object.legacy_deposit_denom !== null) {
      message.legacyDepositDenom = object.legacy_deposit_denom;
    }
    if (object.legacy_redemption_rate !== undefined && object.legacy_redemption_rate !== null) {
      message.legacyRedemptionRate = object.legacy_redemption_rate;
    }
    if (object.epoch_length !== undefined && object.epoch_length !== null) {
      message.epochLength = BigInt(object.epoch_length);
    }
    if (object.legacy_interest_rate !== undefined && object.legacy_interest_rate !== null) {
      message.legacyInterestRate = object.legacy_interest_rate;
    }
    if (object.legacy_interest_rate_max !== undefined && object.legacy_interest_rate_max !== null) {
      message.legacyInterestRateMax = object.legacy_interest_rate_max;
    }
    if (object.legacy_interest_rate_min !== undefined && object.legacy_interest_rate_min !== null) {
      message.legacyInterestRateMin = object.legacy_interest_rate_min;
    }
    if (object.legacy_interest_rate_increase !== undefined && object.legacy_interest_rate_increase !== null) {
      message.legacyInterestRateIncrease = object.legacy_interest_rate_increase;
    }
    if (object.legacy_interest_rate_decrease !== undefined && object.legacy_interest_rate_decrease !== null) {
      message.legacyInterestRateDecrease = object.legacy_interest_rate_decrease;
    }
    if (object.legacy_health_gain_factor !== undefined && object.legacy_health_gain_factor !== null) {
      message.legacyHealthGainFactor = object.legacy_health_gain_factor;
    }
    if (object.total_value !== undefined && object.total_value !== null) {
      message.totalValue = object.total_value;
    }
    if (object.legacy_max_leverage_ratio !== undefined && object.legacy_max_leverage_ratio !== null) {
      message.legacyMaxLeverageRatio = object.legacy_max_leverage_ratio;
    }
    if (object.legacy_max_withdraw_ratio !== undefined && object.legacy_max_withdraw_ratio !== null) {
      message.legacyMaxWithdrawRatio = object.legacy_max_withdraw_ratio;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.legacy_deposit_denom = message.legacyDepositDenom === "" ? undefined : message.legacyDepositDenom;
    obj.legacy_redemption_rate = message.legacyRedemptionRate === "" ? undefined : message.legacyRedemptionRate;
    obj.epoch_length = message.epochLength !== BigInt(0) ? message.epochLength?.toString() : undefined;
    obj.legacy_interest_rate = message.legacyInterestRate === "" ? undefined : message.legacyInterestRate;
    obj.legacy_interest_rate_max = message.legacyInterestRateMax === "" ? undefined : message.legacyInterestRateMax;
    obj.legacy_interest_rate_min = message.legacyInterestRateMin === "" ? undefined : message.legacyInterestRateMin;
    obj.legacy_interest_rate_increase = message.legacyInterestRateIncrease === "" ? undefined : message.legacyInterestRateIncrease;
    obj.legacy_interest_rate_decrease = message.legacyInterestRateDecrease === "" ? undefined : message.legacyInterestRateDecrease;
    obj.legacy_health_gain_factor = message.legacyHealthGainFactor === "" ? undefined : message.legacyHealthGainFactor;
    obj.total_value = message.totalValue === "" ? undefined : message.totalValue;
    obj.legacy_max_leverage_ratio = message.legacyMaxLeverageRatio === "" ? undefined : message.legacyMaxLeverageRatio;
    obj.legacy_max_withdraw_ratio = message.legacyMaxWithdrawRatio === "" ? undefined : message.legacyMaxWithdrawRatio;
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
      typeUrl: "/elys.stablestake.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);