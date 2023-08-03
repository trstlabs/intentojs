import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export enum Action {
  ActionAutoTxAuthz = 0,
  ActionAutoTxWasm = 1,
  ActionGovernanceVote = 2,
  ActionDelegateStake = 3,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionAutoTxAuthz":
      return Action.ActionAutoTxAuthz;
    case 1:
    case "ActionAutoTxWasm":
      return Action.ActionAutoTxWasm;
    case 2:
    case "ActionGovernanceVote":
      return Action.ActionGovernanceVote;
    case 3:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionAutoTxAuthz:
      return "ActionAutoTxAuthz";
    case Action.ActionAutoTxWasm:
      return "ActionAutoTxWasm";
    case Action.ActionGovernanceVote:
      return "ActionGovernanceVote";
    case Action.ActionDelegateStake:
      return "ActionDelegateStake";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** address of recipient */
  address: string;
  /** total initial claimable amount for the address */
  initialClaimableAmount: Coin[];
  /** index of status array refers to action enum # */
  status: Status[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/trst.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
  /** address of recipient */
  address: string;
  /** total initial claimable amount for the address */
  initial_claimable_amount: CoinAmino[];
  /** index of status array refers to action enum # */
  status: StatusAmino[];
}
export interface ClaimRecordAminoMsg {
  type: "/trst.claim.v1beta1.ClaimRecord";
  value: ClaimRecordAmino;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  address: string;
  initial_claimable_amount: CoinSDKType[];
  status: StatusSDKType[];
}
/** Status contains for an action if it is completed and claimed */
export interface Status {
  /** true if action is completed */
  actionCompleted: boolean;
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vestingPeriodCompleted: boolean[];
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vestingPeriodClaimed: boolean[];
}
export interface StatusProtoMsg {
  typeUrl: "/trst.claim.v1beta1.Status";
  value: Uint8Array;
}
/** Status contains for an action if it is completed and claimed */
export interface StatusAmino {
  /** true if action is completed */
  action_completed: boolean;
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vesting_period_completed: boolean[];
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vesting_period_claimed: boolean[];
}
export interface StatusAminoMsg {
  type: "/trst.claim.v1beta1.Status";
  value: StatusAmino;
}
/** Status contains for an action if it is completed and claimed */
export interface StatusSDKType {
  action_completed: boolean;
  vesting_period_completed: boolean[];
  vesting_period_claimed: boolean[];
}
export interface MsgClaimClaimable {
  sender: string;
}
export interface MsgClaimClaimableProtoMsg {
  typeUrl: "/trst.claim.v1beta1.MsgClaimClaimable";
  value: Uint8Array;
}
export interface MsgClaimClaimableAmino {
  sender: string;
}
export interface MsgClaimClaimableAminoMsg {
  type: "/trst.claim.v1beta1.MsgClaimClaimable";
  value: MsgClaimClaimableAmino;
}
export interface MsgClaimClaimableSDKType {
  sender: string;
}
export interface MsgClaimClaimableResponse {
  /** returned claimable amount for the address */
  claimedAmount: Coin[];
}
export interface MsgClaimClaimableResponseProtoMsg {
  typeUrl: "/trst.claim.v1beta1.MsgClaimClaimableResponse";
  value: Uint8Array;
}
export interface MsgClaimClaimableResponseAmino {
  /** returned claimable amount for the address */
  claimed_amount: CoinAmino[];
}
export interface MsgClaimClaimableResponseAminoMsg {
  type: "/trst.claim.v1beta1.MsgClaimClaimableResponse";
  value: MsgClaimClaimableResponseAmino;
}
export interface MsgClaimClaimableResponseSDKType {
  claimed_amount: CoinSDKType[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initialClaimableAmount: [],
    status: []
  };
}
export const ClaimRecord = {
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.initialClaimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.status) {
      Status.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    return {
      address: object.address,
      initialClaimableAmount: Array.isArray(object?.initial_claimable_amount) ? object.initial_claimable_amount.map((e: any) => Coin.fromAmino(e)) : [],
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Status.fromAmino(e)) : []
    };
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.initialClaimableAmount) {
      obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_claimable_amount = [];
    }
    if (message.status) {
      obj.status = message.status.map(e => e ? Status.toAmino(e) : undefined);
    } else {
      obj.status = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClaimRecordAminoMsg): ClaimRecord {
    return ClaimRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
function createBaseStatus(): Status {
  return {
    actionCompleted: false,
    vestingPeriodCompleted: [],
    vestingPeriodClaimed: []
  };
}
export const Status = {
  encode(message: Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionCompleted === true) {
      writer.uint32(8).bool(message.actionCompleted);
    }
    writer.uint32(18).fork();
    for (const v of message.vestingPeriodCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.vestingPeriodClaimed) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Status {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionCompleted = reader.bool();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vestingPeriodCompleted.push(reader.bool());
            }
          } else {
            message.vestingPeriodCompleted.push(reader.bool());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vestingPeriodClaimed.push(reader.bool());
            }
          } else {
            message.vestingPeriodClaimed.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Status>): Status {
    const message = createBaseStatus();
    message.actionCompleted = object.actionCompleted ?? false;
    message.vestingPeriodCompleted = object.vestingPeriodCompleted?.map(e => e) || [];
    message.vestingPeriodClaimed = object.vestingPeriodClaimed?.map(e => e) || [];
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    return {
      actionCompleted: object.action_completed,
      vestingPeriodCompleted: Array.isArray(object?.vesting_period_completed) ? object.vesting_period_completed.map((e: any) => e) : [],
      vestingPeriodClaimed: Array.isArray(object?.vesting_period_claimed) ? object.vesting_period_claimed.map((e: any) => e) : []
    };
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    obj.action_completed = message.actionCompleted;
    if (message.vestingPeriodCompleted) {
      obj.vesting_period_completed = message.vestingPeriodCompleted.map(e => e);
    } else {
      obj.vesting_period_completed = [];
    }
    if (message.vestingPeriodClaimed) {
      obj.vesting_period_claimed = message.vestingPeriodClaimed.map(e => e);
    } else {
      obj.vesting_period_claimed = [];
    }
    return obj;
  },
  fromAminoMsg(object: StatusAminoMsg): Status {
    return Status.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusProtoMsg): Status {
    return Status.decode(message.value);
  },
  toProto(message: Status): Uint8Array {
    return Status.encode(message).finish();
  },
  toProtoMsg(message: Status): StatusProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.Status",
      value: Status.encode(message).finish()
    };
  }
};
function createBaseMsgClaimClaimable(): MsgClaimClaimable {
  return {
    sender: ""
  };
}
export const MsgClaimClaimable = {
  encode(message: MsgClaimClaimable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimClaimable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimClaimable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimClaimable>): MsgClaimClaimable {
    const message = createBaseMsgClaimClaimable();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgClaimClaimableAmino): MsgClaimClaimable {
    return {
      sender: object.sender
    };
  },
  toAmino(message: MsgClaimClaimable): MsgClaimClaimableAmino {
    const obj: any = {};
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgClaimClaimableAminoMsg): MsgClaimClaimable {
    return MsgClaimClaimable.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimClaimableProtoMsg): MsgClaimClaimable {
    return MsgClaimClaimable.decode(message.value);
  },
  toProto(message: MsgClaimClaimable): Uint8Array {
    return MsgClaimClaimable.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimClaimable): MsgClaimClaimableProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.MsgClaimClaimable",
      value: MsgClaimClaimable.encode(message).finish()
    };
  }
};
function createBaseMsgClaimClaimableResponse(): MsgClaimClaimableResponse {
  return {
    claimedAmount: []
  };
}
export const MsgClaimClaimableResponse = {
  encode(message: MsgClaimClaimableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.claimedAmount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimClaimableResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimClaimableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgClaimClaimableResponse>): MsgClaimClaimableResponse {
    const message = createBaseMsgClaimClaimableResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimClaimableResponseAmino): MsgClaimClaimableResponse {
    return {
      claimedAmount: Array.isArray(object?.claimed_amount) ? object.claimed_amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimClaimableResponse): MsgClaimClaimableResponseAmino {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimClaimableResponseAminoMsg): MsgClaimClaimableResponse {
    return MsgClaimClaimableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimClaimableResponseProtoMsg): MsgClaimClaimableResponse {
    return MsgClaimClaimableResponse.decode(message.value);
  },
  toProto(message: MsgClaimClaimableResponse): Uint8Array {
    return MsgClaimClaimableResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimClaimableResponse): MsgClaimClaimableResponseProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.MsgClaimClaimableResponse",
      value: MsgClaimClaimableResponse.encode(message).finish()
    };
  }
};