import { IncentiveInfo, IncentiveInfoAmino, IncentiveInfoSDKType } from "./incentive";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export interface Params {
  lpIncentives?: IncentiveInfo;
  /**
   * gas fees and swap fees portion for lps, `100 - reward_portion_for_lps -
   * reward_portion_for_stakers = revenue percent for protocol`.
   */
  rewardPortionForLps: string;
  /**
   * gas fees and swap fees portion for stakers, `100 - reward_portion_for_lps -
   * reward_portion_for_stakers = revenue percent for protocol`.
   */
  rewardPortionForStakers: string;
  /** Maximum eden reward apr for lps - [0 - 0.3] */
  maxEdenRewardAprLps: string;
  supportedRewardDenoms: SupportedRewardDenom[];
  protocolRevenueAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.masterchef.Params";
  value: Uint8Array;
}
/**
 * @name ParamsAmino
 * @package elys.masterchef
 * @see proto type: elys.masterchef.Params
 */
export interface ParamsAmino {
  lp_incentives?: IncentiveInfoAmino;
  /**
   * gas fees and swap fees portion for lps, `100 - reward_portion_for_lps -
   * reward_portion_for_stakers = revenue percent for protocol`.
   */
  reward_portion_for_lps?: string;
  /**
   * gas fees and swap fees portion for stakers, `100 - reward_portion_for_lps -
   * reward_portion_for_stakers = revenue percent for protocol`.
   */
  reward_portion_for_stakers?: string;
  /**
   * Maximum eden reward apr for lps - [0 - 0.3]
   */
  max_eden_reward_apr_lps?: string;
  supported_reward_denoms?: SupportedRewardDenomAmino[];
  protocol_revenue_address?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.masterchef.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  lp_incentives?: IncentiveInfoSDKType;
  reward_portion_for_lps: string;
  reward_portion_for_stakers: string;
  max_eden_reward_apr_lps: string;
  supported_reward_denoms: SupportedRewardDenomSDKType[];
  protocol_revenue_address: string;
}
export interface SupportedRewardDenom {
  denom: string;
  minAmount: string;
}
export interface SupportedRewardDenomProtoMsg {
  typeUrl: "/elys.masterchef.SupportedRewardDenom";
  value: Uint8Array;
}
/**
 * @name SupportedRewardDenomAmino
 * @package elys.masterchef
 * @see proto type: elys.masterchef.SupportedRewardDenom
 */
export interface SupportedRewardDenomAmino {
  denom?: string;
  min_amount?: string;
}
export interface SupportedRewardDenomAminoMsg {
  type: "/elys.masterchef.SupportedRewardDenom";
  value: SupportedRewardDenomAmino;
}
export interface SupportedRewardDenomSDKType {
  denom: string;
  min_amount: string;
}
function createBaseParams(): Params {
  return {
    lpIncentives: undefined,
    rewardPortionForLps: "",
    rewardPortionForStakers: "",
    maxEdenRewardAprLps: "",
    supportedRewardDenoms: [],
    protocolRevenueAddress: ""
  };
}
export const Params = {
  typeUrl: "/elys.masterchef.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.rewardPortionForLps === "string" && typeof o.rewardPortionForStakers === "string" && typeof o.maxEdenRewardAprLps === "string" && Array.isArray(o.supportedRewardDenoms) && (!o.supportedRewardDenoms.length || SupportedRewardDenom.is(o.supportedRewardDenoms[0])) && typeof o.protocolRevenueAddress === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reward_portion_for_lps === "string" && typeof o.reward_portion_for_stakers === "string" && typeof o.max_eden_reward_apr_lps === "string" && Array.isArray(o.supported_reward_denoms) && (!o.supported_reward_denoms.length || SupportedRewardDenom.isSDK(o.supported_reward_denoms[0])) && typeof o.protocol_revenue_address === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.reward_portion_for_lps === "string" && typeof o.reward_portion_for_stakers === "string" && typeof o.max_eden_reward_apr_lps === "string" && Array.isArray(o.supported_reward_denoms) && (!o.supported_reward_denoms.length || SupportedRewardDenom.isAmino(o.supported_reward_denoms[0])) && typeof o.protocol_revenue_address === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lpIncentives !== undefined) {
      IncentiveInfo.encode(message.lpIncentives, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardPortionForLps !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.rewardPortionForLps, 18).atomics);
    }
    if (message.rewardPortionForStakers !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardPortionForStakers, 18).atomics);
    }
    if (message.maxEdenRewardAprLps !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxEdenRewardAprLps, 18).atomics);
    }
    for (const v of message.supportedRewardDenoms) {
      SupportedRewardDenom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.protocolRevenueAddress !== "") {
      writer.uint32(50).string(message.protocolRevenueAddress);
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
          message.lpIncentives = IncentiveInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewardPortionForLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.rewardPortionForStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.maxEdenRewardAprLps = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.supportedRewardDenoms.push(SupportedRewardDenom.decode(reader, reader.uint32()));
          break;
        case 6:
          message.protocolRevenueAddress = reader.string();
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
      lpIncentives: isSet(object.lpIncentives) ? IncentiveInfo.fromJSON(object.lpIncentives) : undefined,
      rewardPortionForLps: isSet(object.rewardPortionForLps) ? String(object.rewardPortionForLps) : "",
      rewardPortionForStakers: isSet(object.rewardPortionForStakers) ? String(object.rewardPortionForStakers) : "",
      maxEdenRewardAprLps: isSet(object.maxEdenRewardAprLps) ? String(object.maxEdenRewardAprLps) : "",
      supportedRewardDenoms: Array.isArray(object?.supportedRewardDenoms) ? object.supportedRewardDenoms.map((e: any) => SupportedRewardDenom.fromJSON(e)) : [],
      protocolRevenueAddress: isSet(object.protocolRevenueAddress) ? String(object.protocolRevenueAddress) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.lpIncentives !== undefined && (obj.lpIncentives = message.lpIncentives ? IncentiveInfo.toJSON(message.lpIncentives) : undefined);
    message.rewardPortionForLps !== undefined && (obj.rewardPortionForLps = message.rewardPortionForLps);
    message.rewardPortionForStakers !== undefined && (obj.rewardPortionForStakers = message.rewardPortionForStakers);
    message.maxEdenRewardAprLps !== undefined && (obj.maxEdenRewardAprLps = message.maxEdenRewardAprLps);
    if (message.supportedRewardDenoms) {
      obj.supportedRewardDenoms = message.supportedRewardDenoms.map(e => e ? SupportedRewardDenom.toJSON(e) : undefined);
    } else {
      obj.supportedRewardDenoms = [];
    }
    message.protocolRevenueAddress !== undefined && (obj.protocolRevenueAddress = message.protocolRevenueAddress);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.lpIncentives = object.lpIncentives !== undefined && object.lpIncentives !== null ? IncentiveInfo.fromPartial(object.lpIncentives) : undefined;
    message.rewardPortionForLps = object.rewardPortionForLps ?? "";
    message.rewardPortionForStakers = object.rewardPortionForStakers ?? "";
    message.maxEdenRewardAprLps = object.maxEdenRewardAprLps ?? "";
    message.supportedRewardDenoms = object.supportedRewardDenoms?.map(e => SupportedRewardDenom.fromPartial(e)) || [];
    message.protocolRevenueAddress = object.protocolRevenueAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.lp_incentives !== undefined && object.lp_incentives !== null) {
      message.lpIncentives = IncentiveInfo.fromAmino(object.lp_incentives);
    }
    if (object.reward_portion_for_lps !== undefined && object.reward_portion_for_lps !== null) {
      message.rewardPortionForLps = object.reward_portion_for_lps;
    }
    if (object.reward_portion_for_stakers !== undefined && object.reward_portion_for_stakers !== null) {
      message.rewardPortionForStakers = object.reward_portion_for_stakers;
    }
    if (object.max_eden_reward_apr_lps !== undefined && object.max_eden_reward_apr_lps !== null) {
      message.maxEdenRewardAprLps = object.max_eden_reward_apr_lps;
    }
    message.supportedRewardDenoms = object.supported_reward_denoms?.map(e => SupportedRewardDenom.fromAmino(e)) || [];
    if (object.protocol_revenue_address !== undefined && object.protocol_revenue_address !== null) {
      message.protocolRevenueAddress = object.protocol_revenue_address;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.lp_incentives = message.lpIncentives ? IncentiveInfo.toAmino(message.lpIncentives) : undefined;
    obj.reward_portion_for_lps = message.rewardPortionForLps === "" ? undefined : message.rewardPortionForLps;
    obj.reward_portion_for_stakers = message.rewardPortionForStakers === "" ? undefined : message.rewardPortionForStakers;
    obj.max_eden_reward_apr_lps = message.maxEdenRewardAprLps === "" ? undefined : message.maxEdenRewardAprLps;
    if (message.supportedRewardDenoms) {
      obj.supported_reward_denoms = message.supportedRewardDenoms.map(e => e ? SupportedRewardDenom.toAmino(e) : undefined);
    } else {
      obj.supported_reward_denoms = message.supportedRewardDenoms;
    }
    obj.protocol_revenue_address = message.protocolRevenueAddress === "" ? undefined : message.protocolRevenueAddress;
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
      typeUrl: "/elys.masterchef.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseSupportedRewardDenom(): SupportedRewardDenom {
  return {
    denom: "",
    minAmount: ""
  };
}
export const SupportedRewardDenom = {
  typeUrl: "/elys.masterchef.SupportedRewardDenom",
  is(o: any): o is SupportedRewardDenom {
    return o && (o.$typeUrl === SupportedRewardDenom.typeUrl || typeof o.denom === "string" && typeof o.minAmount === "string");
  },
  isSDK(o: any): o is SupportedRewardDenomSDKType {
    return o && (o.$typeUrl === SupportedRewardDenom.typeUrl || typeof o.denom === "string" && typeof o.min_amount === "string");
  },
  isAmino(o: any): o is SupportedRewardDenomAmino {
    return o && (o.$typeUrl === SupportedRewardDenom.typeUrl || typeof o.denom === "string" && typeof o.min_amount === "string");
  },
  encode(message: SupportedRewardDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.minAmount !== "") {
      writer.uint32(18).string(message.minAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SupportedRewardDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupportedRewardDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.minAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SupportedRewardDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      minAmount: isSet(object.minAmount) ? String(object.minAmount) : ""
    };
  },
  toJSON(message: SupportedRewardDenom): JsonSafe<SupportedRewardDenom> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.minAmount !== undefined && (obj.minAmount = message.minAmount);
    return obj;
  },
  fromPartial(object: Partial<SupportedRewardDenom>): SupportedRewardDenom {
    const message = createBaseSupportedRewardDenom();
    message.denom = object.denom ?? "";
    message.minAmount = object.minAmount ?? "";
    return message;
  },
  fromAmino(object: SupportedRewardDenomAmino): SupportedRewardDenom {
    const message = createBaseSupportedRewardDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.min_amount !== undefined && object.min_amount !== null) {
      message.minAmount = object.min_amount;
    }
    return message;
  },
  toAmino(message: SupportedRewardDenom): SupportedRewardDenomAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.min_amount = message.minAmount === "" ? undefined : message.minAmount;
    return obj;
  },
  fromAminoMsg(object: SupportedRewardDenomAminoMsg): SupportedRewardDenom {
    return SupportedRewardDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: SupportedRewardDenomProtoMsg): SupportedRewardDenom {
    return SupportedRewardDenom.decode(message.value);
  },
  toProto(message: SupportedRewardDenom): Uint8Array {
    return SupportedRewardDenom.encode(message).finish();
  },
  toProtoMsg(message: SupportedRewardDenom): SupportedRewardDenomProtoMsg {
    return {
      typeUrl: "/elys.masterchef.SupportedRewardDenom",
      value: SupportedRewardDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SupportedRewardDenom.typeUrl, SupportedRewardDenom);