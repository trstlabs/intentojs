import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorHistoricalRewards, ValidatorHistoricalRewardsAmino, ValidatorHistoricalRewardsSDKType, ValidatorCurrentRewards, ValidatorCurrentRewardsAmino, ValidatorCurrentRewardsSDKType, DelegatorStartingInfo, DelegatorStartingInfoAmino, DelegatorStartingInfoSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, Params, ParamsAmino, ParamsSDKType, FeePool, FeePoolAmino, FeePoolSDKType } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfo {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdrawAddress: string;
}
export interface DelegatorWithdrawInfoProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo";
  value: Uint8Array;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** withdraw_address is the address to withdraw the delegation rewards to. */
  withdraw_address: string;
}
export interface DelegatorWithdrawInfoAminoMsg {
  type: "cosmos-sdk/DelegatorWithdrawInfo";
  value: DelegatorWithdrawInfoAmino;
}
/**
 * DelegatorWithdrawInfo is the address for where distributions rewards are
 * withdrawn to by default this struct is only used at genesis to feed in
 * default withdraw addresses.
 */
export interface DelegatorWithdrawInfoSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstandingRewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord";
  value: Uint8Array;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** outstanding_rewards represents the oustanding rewards of a validator. */
  outstanding_rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewardsRecord";
  value: ValidatorOutstandingRewardsRecordAmino;
}
/** ValidatorOutstandingRewardsRecord is used for import/export via genesis json. */
export interface ValidatorOutstandingRewardsRecordSDKType {
  validator_address: string;
  outstanding_rewards: DecCoinSDKType[];
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated: ValidatorAccumulatedCommission;
}
export interface ValidatorAccumulatedCommissionRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** accumulated is the accumulated commission of a validator. */
  accumulated?: ValidatorAccumulatedCommissionAmino;
}
export interface ValidatorAccumulatedCommissionRecordAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord";
  value: ValidatorAccumulatedCommissionRecordAmino;
}
/**
 * ValidatorAccumulatedCommissionRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorAccumulatedCommissionRecordSDKType {
  validator_address: string;
  accumulated: ValidatorAccumulatedCommissionSDKType;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** period defines the period the historical rewards apply to. */
  period: bigint;
  /** rewards defines the historical rewards of a validator. */
  rewards: ValidatorHistoricalRewards;
}
export interface ValidatorHistoricalRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** period defines the period the historical rewards apply to. */
  period: string;
  /** rewards defines the historical rewards of a validator. */
  rewards?: ValidatorHistoricalRewardsAmino;
}
export interface ValidatorHistoricalRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewardsRecord";
  value: ValidatorHistoricalRewardsRecordAmino;
}
/**
 * ValidatorHistoricalRewardsRecord is used for import / export via genesis
 * json.
 */
export interface ValidatorHistoricalRewardsRecordSDKType {
  validator_address: string;
  period: bigint;
  rewards: ValidatorHistoricalRewardsSDKType;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** rewards defines the current rewards of a validator. */
  rewards: ValidatorCurrentRewards;
}
export interface ValidatorCurrentRewardsRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord";
  value: Uint8Array;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** rewards defines the current rewards of a validator. */
  rewards?: ValidatorCurrentRewardsAmino;
}
export interface ValidatorCurrentRewardsRecordAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewardsRecord";
  value: ValidatorCurrentRewardsRecordAmino;
}
/** ValidatorCurrentRewardsRecord is used for import / export via genesis json. */
export interface ValidatorCurrentRewardsRecordSDKType {
  validator_address: string;
  rewards: ValidatorCurrentRewardsSDKType;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecord {
  /** delegator_address is the address of the delegator. */
  delegatorAddress: string;
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** starting_info defines the starting info of a delegator. */
  startingInfo: DelegatorStartingInfo;
}
export interface DelegatorStartingInfoRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord";
  value: Uint8Array;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordAmino {
  /** delegator_address is the address of the delegator. */
  delegator_address: string;
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** starting_info defines the starting info of a delegator. */
  starting_info?: DelegatorStartingInfoAmino;
}
export interface DelegatorStartingInfoRecordAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfoRecord";
  value: DelegatorStartingInfoRecordAmino;
}
/** DelegatorStartingInfoRecord used for import / export via genesis json. */
export interface DelegatorStartingInfoRecordSDKType {
  delegator_address: string;
  validator_address: string;
  starting_info: DelegatorStartingInfoSDKType;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecord {
  /** validator_address is the address of the validator. */
  validatorAddress: string;
  /** height defines the block height at which the slash event occured. */
  height: bigint;
  /** period is the period of the slash event. */
  period: bigint;
  /** validator_slash_event describes the slash event. */
  validatorSlashEvent: ValidatorSlashEvent;
}
export interface ValidatorSlashEventRecordProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord";
  value: Uint8Array;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordAmino {
  /** validator_address is the address of the validator. */
  validator_address: string;
  /** height defines the block height at which the slash event occured. */
  height: string;
  /** period is the period of the slash event. */
  period: string;
  /** validator_slash_event describes the slash event. */
  validator_slash_event?: ValidatorSlashEventAmino;
}
export interface ValidatorSlashEventRecordAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEventRecord";
  value: ValidatorSlashEventRecordAmino;
}
/** ValidatorSlashEventRecord is used for import / export via genesis json. */
export interface ValidatorSlashEventRecordSDKType {
  validator_address: string;
  height: bigint;
  period: bigint;
  validator_slash_event: ValidatorSlashEventSDKType;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** fee_pool defines the fee pool at genesis. */
  feePool: FeePool;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegatorWithdrawInfos: DelegatorWithdrawInfo[];
  /** fee_pool defines the previous proposer at genesis. */
  previousProposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstandingRewards: ValidatorOutstandingRewardsRecord[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validatorAccumulatedCommissions: ValidatorAccumulatedCommissionRecord[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validatorHistoricalRewards: ValidatorHistoricalRewardsRecord[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validatorCurrentRewards: ValidatorCurrentRewardsRecord[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegatorStartingInfos: DelegatorStartingInfoRecord[];
  /** fee_pool defines the validator slash events at genesis. */
  validatorSlashEvents: ValidatorSlashEventRecord[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  /** fee_pool defines the fee pool at genesis. */
  fee_pool?: FeePoolAmino;
  /** fee_pool defines the delegator withdraw infos at genesis. */
  delegator_withdraw_infos: DelegatorWithdrawInfoAmino[];
  /** fee_pool defines the previous proposer at genesis. */
  previous_proposer: string;
  /** fee_pool defines the outstanding rewards of all validators at genesis. */
  outstanding_rewards: ValidatorOutstandingRewardsRecordAmino[];
  /** fee_pool defines the accumulated commisions of all validators at genesis. */
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordAmino[];
  /** fee_pool defines the historical rewards of all validators at genesis. */
  validator_historical_rewards: ValidatorHistoricalRewardsRecordAmino[];
  /** fee_pool defines the current rewards of all validators at genesis. */
  validator_current_rewards: ValidatorCurrentRewardsRecordAmino[];
  /** fee_pool defines the delegator starting infos at genesis. */
  delegator_starting_infos: DelegatorStartingInfoRecordAmino[];
  /** fee_pool defines the validator slash events at genesis. */
  validator_slash_events: ValidatorSlashEventRecordAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the distribution module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fee_pool: FeePoolSDKType;
  delegator_withdraw_infos: DelegatorWithdrawInfoSDKType[];
  previous_proposer: string;
  outstanding_rewards: ValidatorOutstandingRewardsRecordSDKType[];
  validator_accumulated_commissions: ValidatorAccumulatedCommissionRecordSDKType[];
  validator_historical_rewards: ValidatorHistoricalRewardsRecordSDKType[];
  validator_current_rewards: ValidatorCurrentRewardsRecordSDKType[];
  delegator_starting_infos: DelegatorStartingInfoRecordSDKType[];
  validator_slash_events: ValidatorSlashEventRecordSDKType[];
}
function createBaseDelegatorWithdrawInfo(): DelegatorWithdrawInfo {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const DelegatorWithdrawInfo = {
  encode(message: DelegatorWithdrawInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorWithdrawInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorWithdrawInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegatorWithdrawInfo>): DelegatorWithdrawInfo {
    const message = createBaseDelegatorWithdrawInfo();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: DelegatorWithdrawInfoAmino): DelegatorWithdrawInfo {
    return {
      delegatorAddress: object.delegator_address,
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: DelegatorWithdrawInfoAminoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorWithdrawInfoProtoMsg): DelegatorWithdrawInfo {
    return DelegatorWithdrawInfo.decode(message.value);
  },
  toProto(message: DelegatorWithdrawInfo): Uint8Array {
    return DelegatorWithdrawInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorWithdrawInfo): DelegatorWithdrawInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
      value: DelegatorWithdrawInfo.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewardsRecord(): ValidatorOutstandingRewardsRecord {
  return {
    validatorAddress: "",
    outstandingRewards: []
  };
}
export const ValidatorOutstandingRewardsRecord = {
  encode(message: ValidatorOutstandingRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.outstandingRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorOutstandingRewardsRecord>): ValidatorOutstandingRewardsRecord {
    const message = createBaseValidatorOutstandingRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorOutstandingRewardsRecordAmino): ValidatorOutstandingRewardsRecord {
    return {
      validatorAddress: object.validator_address,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsRecordAminoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsRecordProtoMsg): ValidatorOutstandingRewardsRecord {
    return ValidatorOutstandingRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewardsRecord): Uint8Array {
    return ValidatorOutstandingRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewardsRecord): ValidatorOutstandingRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
      value: ValidatorOutstandingRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommissionRecord(): ValidatorAccumulatedCommissionRecord {
  return {
    validatorAddress: "",
    accumulated: ValidatorAccumulatedCommission.fromPartial({})
  };
}
export const ValidatorAccumulatedCommissionRecord = {
  encode(message: ValidatorAccumulatedCommissionRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.accumulated !== undefined) {
      ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommissionRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommissionRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorAccumulatedCommissionRecord>): ValidatorAccumulatedCommissionRecord {
    const message = createBaseValidatorAccumulatedCommissionRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
    return message;
  },
  fromAmino(object: ValidatorAccumulatedCommissionRecordAmino): ValidatorAccumulatedCommissionRecord {
    return {
      validatorAddress: object.validator_address,
      accumulated: object?.accumulated ? ValidatorAccumulatedCommission.fromAmino(object.accumulated) : undefined
    };
  },
  toAmino(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toAmino(message.accumulated) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionRecordAminoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionRecordProtoMsg): ValidatorAccumulatedCommissionRecord {
    return ValidatorAccumulatedCommissionRecord.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommissionRecord): Uint8Array {
    return ValidatorAccumulatedCommissionRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommissionRecord): ValidatorAccumulatedCommissionRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
      value: ValidatorAccumulatedCommissionRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewardsRecord(): ValidatorHistoricalRewardsRecord {
  return {
    validatorAddress: "",
    period: BigInt(0),
    rewards: ValidatorHistoricalRewards.fromPartial({})
  };
}
export const ValidatorHistoricalRewardsRecord = {
  encode(message: ValidatorHistoricalRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.rewards !== undefined) {
      ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorHistoricalRewardsRecord>): ValidatorHistoricalRewardsRecord {
    const message = createBaseValidatorHistoricalRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: ValidatorHistoricalRewardsRecordAmino): ValidatorHistoricalRewardsRecord {
    return {
      validatorAddress: object.validator_address,
      period: BigInt(object.period),
      rewards: object?.rewards ? ValidatorHistoricalRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.rewards = message.rewards ? ValidatorHistoricalRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsRecordAminoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsRecordProtoMsg): ValidatorHistoricalRewardsRecord {
    return ValidatorHistoricalRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewardsRecord): Uint8Array {
    return ValidatorHistoricalRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewardsRecord): ValidatorHistoricalRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
      value: ValidatorHistoricalRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewardsRecord(): ValidatorCurrentRewardsRecord {
  return {
    validatorAddress: "",
    rewards: ValidatorCurrentRewards.fromPartial({})
  };
}
export const ValidatorCurrentRewardsRecord = {
  encode(message: ValidatorCurrentRewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.rewards !== undefined) {
      ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorCurrentRewardsRecord>): ValidatorCurrentRewardsRecord {
    const message = createBaseValidatorCurrentRewardsRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
    return message;
  },
  fromAmino(object: ValidatorCurrentRewardsRecordAmino): ValidatorCurrentRewardsRecord {
    return {
      validatorAddress: object.validator_address,
      rewards: object?.rewards ? ValidatorCurrentRewards.fromAmino(object.rewards) : undefined
    };
  },
  toAmino(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.rewards = message.rewards ? ValidatorCurrentRewards.toAmino(message.rewards) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsRecordAminoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsRecordProtoMsg): ValidatorCurrentRewardsRecord {
    return ValidatorCurrentRewardsRecord.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewardsRecord): Uint8Array {
    return ValidatorCurrentRewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewardsRecord): ValidatorCurrentRewardsRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
      value: ValidatorCurrentRewardsRecord.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfoRecord(): DelegatorStartingInfoRecord {
  return {
    delegatorAddress: "",
    validatorAddress: "",
    startingInfo: DelegatorStartingInfo.fromPartial({})
  };
}
export const DelegatorStartingInfoRecord = {
  encode(message: DelegatorStartingInfoRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.startingInfo !== undefined) {
      DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfoRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfoRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DelegatorStartingInfoRecord>): DelegatorStartingInfoRecord {
    const message = createBaseDelegatorStartingInfoRecord();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.startingInfo = object.startingInfo !== undefined && object.startingInfo !== null ? DelegatorStartingInfo.fromPartial(object.startingInfo) : undefined;
    return message;
  },
  fromAmino(object: DelegatorStartingInfoRecordAmino): DelegatorStartingInfoRecord {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address,
      startingInfo: object?.starting_info ? DelegatorStartingInfo.fromAmino(object.starting_info) : undefined
    };
  },
  toAmino(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    obj.starting_info = message.startingInfo ? DelegatorStartingInfo.toAmino(message.startingInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoRecordAminoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoRecordProtoMsg): DelegatorStartingInfoRecord {
    return DelegatorStartingInfoRecord.decode(message.value);
  },
  toProto(message: DelegatorStartingInfoRecord): Uint8Array {
    return DelegatorStartingInfoRecord.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfoRecord): DelegatorStartingInfoRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
      value: DelegatorStartingInfoRecord.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEventRecord(): ValidatorSlashEventRecord {
  return {
    validatorAddress: "",
    height: BigInt(0),
    period: BigInt(0),
    validatorSlashEvent: ValidatorSlashEvent.fromPartial({})
  };
}
export const ValidatorSlashEventRecord = {
  encode(message: ValidatorSlashEventRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    if (message.validatorSlashEvent !== undefined) {
      ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEventRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEventRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ValidatorSlashEventRecord>): ValidatorSlashEventRecord {
    const message = createBaseValidatorSlashEventRecord();
    message.validatorAddress = object.validatorAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
    message.validatorSlashEvent = object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null ? ValidatorSlashEvent.fromPartial(object.validatorSlashEvent) : undefined;
    return message;
  },
  fromAmino(object: ValidatorSlashEventRecordAmino): ValidatorSlashEventRecord {
    return {
      validatorAddress: object.validator_address,
      height: BigInt(object.height),
      period: BigInt(object.period),
      validatorSlashEvent: object?.validator_slash_event ? ValidatorSlashEvent.fromAmino(object.validator_slash_event) : undefined
    };
  },
  toAmino(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.period = message.period ? message.period.toString() : undefined;
    obj.validator_slash_event = message.validatorSlashEvent ? ValidatorSlashEvent.toAmino(message.validatorSlashEvent) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventRecordAminoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventRecordProtoMsg): ValidatorSlashEventRecord {
    return ValidatorSlashEventRecord.decode(message.value);
  },
  toProto(message: ValidatorSlashEventRecord): Uint8Array {
    return ValidatorSlashEventRecord.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEventRecord): ValidatorSlashEventRecordProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
      value: ValidatorSlashEventRecord.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feePool: FeePool.fromPartial({}),
    delegatorWithdrawInfos: [],
    previousProposer: "",
    outstandingRewards: [],
    validatorAccumulatedCommissions: [],
    validatorHistoricalRewards: [],
    validatorCurrentRewards: [],
    delegatorStartingInfos: [],
    validatorSlashEvents: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.feePool !== undefined) {
      FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.delegatorWithdrawInfos) {
      DelegatorWithdrawInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.previousProposer !== "") {
      writer.uint32(34).string(message.previousProposer);
    }
    for (const v of message.outstandingRewards) {
      ValidatorOutstandingRewardsRecord.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.validatorAccumulatedCommissions) {
      ValidatorAccumulatedCommissionRecord.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.validatorHistoricalRewards) {
      ValidatorHistoricalRewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.validatorCurrentRewards) {
      ValidatorCurrentRewardsRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.delegatorStartingInfos) {
      DelegatorStartingInfoRecord.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEventRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.feePool = FeePool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.previousProposer = reader.string();
          break;
        case 5:
          message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
          break;
        case 7:
          message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
          break;
        case 9:
          message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feePool = object.feePool !== undefined && object.feePool !== null ? FeePool.fromPartial(object.feePool) : undefined;
    message.delegatorWithdrawInfos = object.delegatorWithdrawInfos?.map(e => DelegatorWithdrawInfo.fromPartial(e)) || [];
    message.previousProposer = object.previousProposer ?? "";
    message.outstandingRewards = object.outstandingRewards?.map(e => ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
    message.validatorAccumulatedCommissions = object.validatorAccumulatedCommissions?.map(e => ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
    message.validatorHistoricalRewards = object.validatorHistoricalRewards?.map(e => ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
    message.validatorCurrentRewards = object.validatorCurrentRewards?.map(e => ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
    message.delegatorStartingInfos = object.delegatorStartingInfos?.map(e => DelegatorStartingInfoRecord.fromPartial(e)) || [];
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEventRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      feePool: object?.fee_pool ? FeePool.fromAmino(object.fee_pool) : undefined,
      delegatorWithdrawInfos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e: any) => DelegatorWithdrawInfo.fromAmino(e)) : [],
      previousProposer: object.previous_proposer,
      outstandingRewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e: any) => ValidatorOutstandingRewardsRecord.fromAmino(e)) : [],
      validatorAccumulatedCommissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e: any) => ValidatorAccumulatedCommissionRecord.fromAmino(e)) : [],
      validatorHistoricalRewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e: any) => ValidatorHistoricalRewardsRecord.fromAmino(e)) : [],
      validatorCurrentRewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e: any) => ValidatorCurrentRewardsRecord.fromAmino(e)) : [],
      delegatorStartingInfos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e: any) => DelegatorStartingInfoRecord.fromAmino(e)) : [],
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEventRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.fee_pool = message.feePool ? FeePool.toAmino(message.feePool) : undefined;
    if (message.delegatorWithdrawInfos) {
      obj.delegator_withdraw_infos = message.delegatorWithdrawInfos.map(e => e ? DelegatorWithdrawInfo.toAmino(e) : undefined);
    } else {
      obj.delegator_withdraw_infos = [];
    }
    obj.previous_proposer = message.previousProposer;
    if (message.outstandingRewards) {
      obj.outstanding_rewards = message.outstandingRewards.map(e => e ? ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.outstanding_rewards = [];
    }
    if (message.validatorAccumulatedCommissions) {
      obj.validator_accumulated_commissions = message.validatorAccumulatedCommissions.map(e => e ? ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
    } else {
      obj.validator_accumulated_commissions = [];
    }
    if (message.validatorHistoricalRewards) {
      obj.validator_historical_rewards = message.validatorHistoricalRewards.map(e => e ? ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_historical_rewards = [];
    }
    if (message.validatorCurrentRewards) {
      obj.validator_current_rewards = message.validatorCurrentRewards.map(e => e ? ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
    } else {
      obj.validator_current_rewards = [];
    }
    if (message.delegatorStartingInfos) {
      obj.delegator_starting_infos = message.delegatorStartingInfos.map(e => e ? DelegatorStartingInfoRecord.toAmino(e) : undefined);
    } else {
      obj.delegator_starting_infos = [];
    }
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEventRecord.toAmino(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};