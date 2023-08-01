import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export enum Action {
  ActionAutoTxAuthz = 0,
  ActionAutoTxWasm = 1,
  ActionGovernanceVote = 2,
  ActionDelegateStake = 3,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
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
/** Status contains for an action if it is completed and claimed */
export interface StatusSDKType {
  action_completed: boolean;
  vesting_period_completed: boolean[];
  vesting_period_claimed: boolean[];
}
export interface MsgClaimClaimable {
  sender: string;
}
export interface MsgClaimClaimableSDKType {
  sender: string;
}
export interface MsgClaimClaimableResponse {
  /** returned claimable amount for the address */
  claimedAmount: Coin[];
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
  fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status?.map(e => Status.fromPartial(e)) || [];
    return message;
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
  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.actionCompleted = object.actionCompleted ?? false;
    message.vestingPeriodCompleted = object.vestingPeriodCompleted?.map(e => e) || [];
    message.vestingPeriodClaimed = object.vestingPeriodClaimed?.map(e => e) || [];
    return message;
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
  fromPartial(object: DeepPartial<MsgClaimClaimable>): MsgClaimClaimable {
    const message = createBaseMsgClaimClaimable();
    message.sender = object.sender ?? "";
    return message;
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
  fromPartial(object: DeepPartial<MsgClaimClaimableResponse>): MsgClaimClaimableResponse {
    const message = createBaseMsgClaimClaimableResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};