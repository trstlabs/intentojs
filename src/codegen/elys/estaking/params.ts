import { IncentiveInfo, IncentiveInfoAmino, IncentiveInfoSDKType } from "./incentive";
import { DexRewardsTracker, DexRewardsTrackerAmino, DexRewardsTrackerSDKType } from "./dex_rewards_tracker";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export interface LegacyParams {
  stakeIncentives?: IncentiveInfo;
  edenCommitVal: string;
  edenbCommitVal: string;
  /** Maximum eden reward apr for stakers - [0 - 0.3] */
  maxEdenRewardAprStakers: string;
  edenBoostApr: string;
  /** Tracking dex rewards given to stakers */
  dexRewardsStakers: DexRewardsTracker;
}
export interface LegacyParamsProtoMsg {
  typeUrl: "/elys.estaking.LegacyParams";
  value: Uint8Array;
}
/**
 * @name LegacyParamsAmino
 * @package elys.estaking
 * @see proto type: elys.estaking.LegacyParams
 */
export interface LegacyParamsAmino {
  stake_incentives?: IncentiveInfoAmino;
  eden_commit_val?: string;
  edenb_commit_val?: string;
  /**
   * Maximum eden reward apr for stakers - [0 - 0.3]
   */
  max_eden_reward_apr_stakers?: string;
  eden_boost_apr?: string;
  /**
   * Tracking dex rewards given to stakers
   */
  dex_rewards_stakers?: DexRewardsTrackerAmino;
}
export interface LegacyParamsAminoMsg {
  type: "/elys.estaking.LegacyParams";
  value: LegacyParamsAmino;
}
export interface LegacyParamsSDKType {
  stake_incentives?: IncentiveInfoSDKType;
  eden_commit_val: string;
  edenb_commit_val: string;
  max_eden_reward_apr_stakers: string;
  eden_boost_apr: string;
  dex_rewards_stakers: DexRewardsTrackerSDKType;
}
/** Params defines the parameters for the module. */
export interface Params {
  stakeIncentives?: IncentiveInfo;
  edenCommitVal: string;
  edenbCommitVal: string;
  /** Maximum eden reward apr for stakers - [0 - 0.3] */
  maxEdenRewardAprStakers: string;
  edenBoostApr: string;
  providerVestingEpochIdentifier: string;
  providerStakingRewardsPortion: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.estaking.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package elys.estaking
 * @see proto type: elys.estaking.Params
 */
export interface ParamsAmino {
  stake_incentives?: IncentiveInfoAmino;
  eden_commit_val?: string;
  edenb_commit_val?: string;
  /**
   * Maximum eden reward apr for stakers - [0 - 0.3]
   */
  max_eden_reward_apr_stakers?: string;
  eden_boost_apr?: string;
  provider_vesting_epoch_identifier?: string;
  provider_staking_rewards_portion?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.estaking.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  stake_incentives?: IncentiveInfoSDKType;
  eden_commit_val: string;
  edenb_commit_val: string;
  max_eden_reward_apr_stakers: string;
  eden_boost_apr: string;
  provider_vesting_epoch_identifier: string;
  provider_staking_rewards_portion: string;
}
function createBaseLegacyParams(): LegacyParams {
  return {
    stakeIncentives: undefined,
    edenCommitVal: "",
    edenbCommitVal: "",
    maxEdenRewardAprStakers: "",
    edenBoostApr: "",
    dexRewardsStakers: DexRewardsTracker.fromPartial({})
  };
}
export const LegacyParams = {
  typeUrl: "/elys.estaking.LegacyParams",
  is(o: any): o is LegacyParams {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.edenCommitVal === "string" && typeof o.edenbCommitVal === "string" && typeof o.maxEdenRewardAprStakers === "string" && typeof o.edenBoostApr === "string" && DexRewardsTracker.is(o.dexRewardsStakers));
  },
  isSDK(o: any): o is LegacyParamsSDKType {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.eden_commit_val === "string" && typeof o.edenb_commit_val === "string" && typeof o.max_eden_reward_apr_stakers === "string" && typeof o.eden_boost_apr === "string" && DexRewardsTracker.isSDK(o.dex_rewards_stakers));
  },
  isAmino(o: any): o is LegacyParamsAmino {
    return o && (o.$typeUrl === LegacyParams.typeUrl || typeof o.eden_commit_val === "string" && typeof o.edenb_commit_val === "string" && typeof o.max_eden_reward_apr_stakers === "string" && typeof o.eden_boost_apr === "string" && DexRewardsTracker.isAmino(o.dex_rewards_stakers));
  },
  encode(message: LegacyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeIncentives !== undefined) {
      IncentiveInfo.encode(message.stakeIncentives, writer.uint32(10).fork()).ldelim();
    }
    if (message.edenCommitVal !== "") {
      writer.uint32(18).string(message.edenCommitVal);
    }
    if (message.edenbCommitVal !== "") {
      writer.uint32(26).string(message.edenbCommitVal);
    }
    if (message.maxEdenRewardAprStakers !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxEdenRewardAprStakers, 18).atomics);
    }
    if (message.edenBoostApr !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.edenBoostApr, 18).atomics);
    }
    if (message.dexRewardsStakers !== undefined) {
      DexRewardsTracker.encode(message.dexRewardsStakers, writer.uint32(50).fork()).ldelim();
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
          message.stakeIncentives = IncentiveInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.edenCommitVal = reader.string();
          break;
        case 3:
          message.edenbCommitVal = reader.string();
          break;
        case 4:
          message.maxEdenRewardAprStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.edenBoostApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.dexRewardsStakers = DexRewardsTracker.decode(reader, reader.uint32());
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
      stakeIncentives: isSet(object.stakeIncentives) ? IncentiveInfo.fromJSON(object.stakeIncentives) : undefined,
      edenCommitVal: isSet(object.edenCommitVal) ? String(object.edenCommitVal) : "",
      edenbCommitVal: isSet(object.edenbCommitVal) ? String(object.edenbCommitVal) : "",
      maxEdenRewardAprStakers: isSet(object.maxEdenRewardAprStakers) ? String(object.maxEdenRewardAprStakers) : "",
      edenBoostApr: isSet(object.edenBoostApr) ? String(object.edenBoostApr) : "",
      dexRewardsStakers: isSet(object.dexRewardsStakers) ? DexRewardsTracker.fromJSON(object.dexRewardsStakers) : undefined
    };
  },
  toJSON(message: LegacyParams): JsonSafe<LegacyParams> {
    const obj: any = {};
    message.stakeIncentives !== undefined && (obj.stakeIncentives = message.stakeIncentives ? IncentiveInfo.toJSON(message.stakeIncentives) : undefined);
    message.edenCommitVal !== undefined && (obj.edenCommitVal = message.edenCommitVal);
    message.edenbCommitVal !== undefined && (obj.edenbCommitVal = message.edenbCommitVal);
    message.maxEdenRewardAprStakers !== undefined && (obj.maxEdenRewardAprStakers = message.maxEdenRewardAprStakers);
    message.edenBoostApr !== undefined && (obj.edenBoostApr = message.edenBoostApr);
    message.dexRewardsStakers !== undefined && (obj.dexRewardsStakers = message.dexRewardsStakers ? DexRewardsTracker.toJSON(message.dexRewardsStakers) : undefined);
    return obj;
  },
  fromPartial(object: Partial<LegacyParams>): LegacyParams {
    const message = createBaseLegacyParams();
    message.stakeIncentives = object.stakeIncentives !== undefined && object.stakeIncentives !== null ? IncentiveInfo.fromPartial(object.stakeIncentives) : undefined;
    message.edenCommitVal = object.edenCommitVal ?? "";
    message.edenbCommitVal = object.edenbCommitVal ?? "";
    message.maxEdenRewardAprStakers = object.maxEdenRewardAprStakers ?? "";
    message.edenBoostApr = object.edenBoostApr ?? "";
    message.dexRewardsStakers = object.dexRewardsStakers !== undefined && object.dexRewardsStakers !== null ? DexRewardsTracker.fromPartial(object.dexRewardsStakers) : undefined;
    return message;
  },
  fromAmino(object: LegacyParamsAmino): LegacyParams {
    const message = createBaseLegacyParams();
    if (object.stake_incentives !== undefined && object.stake_incentives !== null) {
      message.stakeIncentives = IncentiveInfo.fromAmino(object.stake_incentives);
    }
    if (object.eden_commit_val !== undefined && object.eden_commit_val !== null) {
      message.edenCommitVal = object.eden_commit_val;
    }
    if (object.edenb_commit_val !== undefined && object.edenb_commit_val !== null) {
      message.edenbCommitVal = object.edenb_commit_val;
    }
    if (object.max_eden_reward_apr_stakers !== undefined && object.max_eden_reward_apr_stakers !== null) {
      message.maxEdenRewardAprStakers = object.max_eden_reward_apr_stakers;
    }
    if (object.eden_boost_apr !== undefined && object.eden_boost_apr !== null) {
      message.edenBoostApr = object.eden_boost_apr;
    }
    if (object.dex_rewards_stakers !== undefined && object.dex_rewards_stakers !== null) {
      message.dexRewardsStakers = DexRewardsTracker.fromAmino(object.dex_rewards_stakers);
    }
    return message;
  },
  toAmino(message: LegacyParams): LegacyParamsAmino {
    const obj: any = {};
    obj.stake_incentives = message.stakeIncentives ? IncentiveInfo.toAmino(message.stakeIncentives) : undefined;
    obj.eden_commit_val = message.edenCommitVal === "" ? undefined : message.edenCommitVal;
    obj.edenb_commit_val = message.edenbCommitVal === "" ? undefined : message.edenbCommitVal;
    obj.max_eden_reward_apr_stakers = message.maxEdenRewardAprStakers === "" ? undefined : message.maxEdenRewardAprStakers;
    obj.eden_boost_apr = message.edenBoostApr === "" ? undefined : message.edenBoostApr;
    obj.dex_rewards_stakers = message.dexRewardsStakers ? DexRewardsTracker.toAmino(message.dexRewardsStakers) : undefined;
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
      typeUrl: "/elys.estaking.LegacyParams",
      value: LegacyParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyParams.typeUrl, LegacyParams);
function createBaseParams(): Params {
  return {
    stakeIncentives: undefined,
    edenCommitVal: "",
    edenbCommitVal: "",
    maxEdenRewardAprStakers: "",
    edenBoostApr: "",
    providerVestingEpochIdentifier: "",
    providerStakingRewardsPortion: ""
  };
}
export const Params = {
  typeUrl: "/elys.estaking.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.edenCommitVal === "string" && typeof o.edenbCommitVal === "string" && typeof o.maxEdenRewardAprStakers === "string" && typeof o.edenBoostApr === "string" && typeof o.providerVestingEpochIdentifier === "string" && typeof o.providerStakingRewardsPortion === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.eden_commit_val === "string" && typeof o.edenb_commit_val === "string" && typeof o.max_eden_reward_apr_stakers === "string" && typeof o.eden_boost_apr === "string" && typeof o.provider_vesting_epoch_identifier === "string" && typeof o.provider_staking_rewards_portion === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.eden_commit_val === "string" && typeof o.edenb_commit_val === "string" && typeof o.max_eden_reward_apr_stakers === "string" && typeof o.eden_boost_apr === "string" && typeof o.provider_vesting_epoch_identifier === "string" && typeof o.provider_staking_rewards_portion === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakeIncentives !== undefined) {
      IncentiveInfo.encode(message.stakeIncentives, writer.uint32(10).fork()).ldelim();
    }
    if (message.edenCommitVal !== "") {
      writer.uint32(18).string(message.edenCommitVal);
    }
    if (message.edenbCommitVal !== "") {
      writer.uint32(26).string(message.edenbCommitVal);
    }
    if (message.maxEdenRewardAprStakers !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.maxEdenRewardAprStakers, 18).atomics);
    }
    if (message.edenBoostApr !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.edenBoostApr, 18).atomics);
    }
    if (message.providerVestingEpochIdentifier !== "") {
      writer.uint32(50).string(message.providerVestingEpochIdentifier);
    }
    if (message.providerStakingRewardsPortion !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.providerStakingRewardsPortion, 18).atomics);
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
          message.stakeIncentives = IncentiveInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.edenCommitVal = reader.string();
          break;
        case 3:
          message.edenbCommitVal = reader.string();
          break;
        case 4:
          message.maxEdenRewardAprStakers = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.edenBoostApr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.providerVestingEpochIdentifier = reader.string();
          break;
        case 7:
          message.providerStakingRewardsPortion = Decimal.fromAtomics(reader.string(), 18).toString();
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
      stakeIncentives: isSet(object.stakeIncentives) ? IncentiveInfo.fromJSON(object.stakeIncentives) : undefined,
      edenCommitVal: isSet(object.edenCommitVal) ? String(object.edenCommitVal) : "",
      edenbCommitVal: isSet(object.edenbCommitVal) ? String(object.edenbCommitVal) : "",
      maxEdenRewardAprStakers: isSet(object.maxEdenRewardAprStakers) ? String(object.maxEdenRewardAprStakers) : "",
      edenBoostApr: isSet(object.edenBoostApr) ? String(object.edenBoostApr) : "",
      providerVestingEpochIdentifier: isSet(object.providerVestingEpochIdentifier) ? String(object.providerVestingEpochIdentifier) : "",
      providerStakingRewardsPortion: isSet(object.providerStakingRewardsPortion) ? String(object.providerStakingRewardsPortion) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.stakeIncentives !== undefined && (obj.stakeIncentives = message.stakeIncentives ? IncentiveInfo.toJSON(message.stakeIncentives) : undefined);
    message.edenCommitVal !== undefined && (obj.edenCommitVal = message.edenCommitVal);
    message.edenbCommitVal !== undefined && (obj.edenbCommitVal = message.edenbCommitVal);
    message.maxEdenRewardAprStakers !== undefined && (obj.maxEdenRewardAprStakers = message.maxEdenRewardAprStakers);
    message.edenBoostApr !== undefined && (obj.edenBoostApr = message.edenBoostApr);
    message.providerVestingEpochIdentifier !== undefined && (obj.providerVestingEpochIdentifier = message.providerVestingEpochIdentifier);
    message.providerStakingRewardsPortion !== undefined && (obj.providerStakingRewardsPortion = message.providerStakingRewardsPortion);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.stakeIncentives = object.stakeIncentives !== undefined && object.stakeIncentives !== null ? IncentiveInfo.fromPartial(object.stakeIncentives) : undefined;
    message.edenCommitVal = object.edenCommitVal ?? "";
    message.edenbCommitVal = object.edenbCommitVal ?? "";
    message.maxEdenRewardAprStakers = object.maxEdenRewardAprStakers ?? "";
    message.edenBoostApr = object.edenBoostApr ?? "";
    message.providerVestingEpochIdentifier = object.providerVestingEpochIdentifier ?? "";
    message.providerStakingRewardsPortion = object.providerStakingRewardsPortion ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.stake_incentives !== undefined && object.stake_incentives !== null) {
      message.stakeIncentives = IncentiveInfo.fromAmino(object.stake_incentives);
    }
    if (object.eden_commit_val !== undefined && object.eden_commit_val !== null) {
      message.edenCommitVal = object.eden_commit_val;
    }
    if (object.edenb_commit_val !== undefined && object.edenb_commit_val !== null) {
      message.edenbCommitVal = object.edenb_commit_val;
    }
    if (object.max_eden_reward_apr_stakers !== undefined && object.max_eden_reward_apr_stakers !== null) {
      message.maxEdenRewardAprStakers = object.max_eden_reward_apr_stakers;
    }
    if (object.eden_boost_apr !== undefined && object.eden_boost_apr !== null) {
      message.edenBoostApr = object.eden_boost_apr;
    }
    if (object.provider_vesting_epoch_identifier !== undefined && object.provider_vesting_epoch_identifier !== null) {
      message.providerVestingEpochIdentifier = object.provider_vesting_epoch_identifier;
    }
    if (object.provider_staking_rewards_portion !== undefined && object.provider_staking_rewards_portion !== null) {
      message.providerStakingRewardsPortion = object.provider_staking_rewards_portion;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.stake_incentives = message.stakeIncentives ? IncentiveInfo.toAmino(message.stakeIncentives) : undefined;
    obj.eden_commit_val = message.edenCommitVal === "" ? undefined : message.edenCommitVal;
    obj.edenb_commit_val = message.edenbCommitVal === "" ? undefined : message.edenbCommitVal;
    obj.max_eden_reward_apr_stakers = message.maxEdenRewardAprStakers === "" ? undefined : message.maxEdenRewardAprStakers;
    obj.eden_boost_apr = message.edenBoostApr === "" ? undefined : message.edenBoostApr;
    obj.provider_vesting_epoch_identifier = message.providerVestingEpochIdentifier === "" ? undefined : message.providerVestingEpochIdentifier;
    obj.provider_staking_rewards_portion = message.providerStakingRewardsPortion === "" ? undefined : message.providerStakingRewardsPortion;
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
      typeUrl: "/elys.estaking.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);