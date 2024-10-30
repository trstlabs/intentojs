import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum Action {
  ActionActionAuthz = 0,
  ActionActionWasm = 1,
  ActionGovernanceVote = 2,
  ActionDelegateStake = 3,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionActionAuthz":
      return Action.ActionActionAuthz;
    case 1:
    case "ActionActionWasm":
      return Action.ActionActionWasm;
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
    case Action.ActionActionAuthz:
      return "ActionActionAuthz";
    case Action.ActionActionWasm:
      return "ActionActionWasm";
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
  typeUrl: "/intento.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
  /** address of recipient */
  address?: string;
  /** total initial claimable amount for the address */
  initial_claimable_amount?: CoinAmino[];
  /** index of status array refers to action enum # */
  status?: StatusAmino[];
}
export interface ClaimRecordAminoMsg {
  type: "/intento.claim.v1beta1.ClaimRecord";
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
  typeUrl: "/intento.claim.v1beta1.Status";
  value: Uint8Array;
}
/** Status contains for an action if it is completed and claimed */
export interface StatusAmino {
  /** true if action is completed */
  action_completed?: boolean;
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vesting_period_completed?: boolean[];
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vesting_period_claimed?: boolean[];
}
export interface StatusAminoMsg {
  type: "/intento.claim.v1beta1.Status";
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
  typeUrl: "/intento.claim.v1beta1.MsgClaimClaimable";
  value: Uint8Array;
}
export interface MsgClaimClaimableAmino {
  sender?: string;
}
export interface MsgClaimClaimableAminoMsg {
  type: "/intento.claim.v1beta1.MsgClaimClaimable";
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
  typeUrl: "/intento.claim.v1beta1.MsgClaimClaimableResponse";
  value: Uint8Array;
}
export interface MsgClaimClaimableResponseAmino {
  /** returned claimable amount for the address */
  claimed_amount?: CoinAmino[];
}
export interface MsgClaimClaimableResponseAminoMsg {
  type: "/intento.claim.v1beta1.MsgClaimClaimableResponse";
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
  typeUrl: "/intento.claim.v1beta1.ClaimRecord",
  is(o: any): o is ClaimRecord {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initialClaimableAmount) && (!o.initialClaimableAmount.length || Coin.is(o.initialClaimableAmount[0])) && Array.isArray(o.status) && (!o.status.length || Status.is(o.status[0])));
  },
  isSDK(o: any): o is ClaimRecordSDKType {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initial_claimable_amount) && (!o.initial_claimable_amount.length || Coin.isSDK(o.initial_claimable_amount[0])) && Array.isArray(o.status) && (!o.status.length || Status.isSDK(o.status[0])));
  },
  isAmino(o: any): o is ClaimRecordAmino {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initial_claimable_amount) && (!o.initial_claimable_amount.length || Coin.isAmino(o.initial_claimable_amount[0])) && Array.isArray(o.status) && (!o.status.length || Status.isAmino(o.status[0])));
  },
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
  fromJSON(object: any): ClaimRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      initialClaimableAmount: Array.isArray(object?.initialClaimableAmount) ? object.initialClaimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Status.fromJSON(e)) : []
    };
  },
  toJSON(message: ClaimRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.initialClaimableAmount) {
      obj.initialClaimableAmount = message.initialClaimableAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialClaimableAmount = [];
    }
    if (message.status) {
      obj.status = message.status.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.status = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ClaimRecord>): ClaimRecord {
    const message = createBaseClaimRecord();
    message.address = object.address ?? "";
    message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
    message.status = object.status?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.initialClaimableAmount = object.initial_claimable_amount?.map(e => Coin.fromAmino(e)) || [];
    message.status = object.status?.map(e => Status.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.initialClaimableAmount) {
      obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_claimable_amount = message.initialClaimableAmount;
    }
    if (message.status) {
      obj.status = message.status.map(e => e ? Status.toAmino(e) : undefined);
    } else {
      obj.status = message.status;
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
      typeUrl: "/intento.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimRecord.typeUrl, ClaimRecord);
function createBaseStatus(): Status {
  return {
    actionCompleted: false,
    vestingPeriodCompleted: [],
    vestingPeriodClaimed: []
  };
}
export const Status = {
  typeUrl: "/intento.claim.v1beta1.Status",
  is(o: any): o is Status {
    return o && (o.$typeUrl === Status.typeUrl || typeof o.actionCompleted === "boolean" && Array.isArray(o.vestingPeriodCompleted) && (!o.vestingPeriodCompleted.length || typeof o.vestingPeriodCompleted[0] === "boolean") && Array.isArray(o.vestingPeriodClaimed) && (!o.vestingPeriodClaimed.length || typeof o.vestingPeriodClaimed[0] === "boolean"));
  },
  isSDK(o: any): o is StatusSDKType {
    return o && (o.$typeUrl === Status.typeUrl || typeof o.action_completed === "boolean" && Array.isArray(o.vesting_period_completed) && (!o.vesting_period_completed.length || typeof o.vesting_period_completed[0] === "boolean") && Array.isArray(o.vesting_period_claimed) && (!o.vesting_period_claimed.length || typeof o.vesting_period_claimed[0] === "boolean"));
  },
  isAmino(o: any): o is StatusAmino {
    return o && (o.$typeUrl === Status.typeUrl || typeof o.action_completed === "boolean" && Array.isArray(o.vesting_period_completed) && (!o.vesting_period_completed.length || typeof o.vesting_period_completed[0] === "boolean") && Array.isArray(o.vesting_period_claimed) && (!o.vesting_period_claimed.length || typeof o.vesting_period_claimed[0] === "boolean"));
  },
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
  fromJSON(object: any): Status {
    return {
      actionCompleted: isSet(object.actionCompleted) ? Boolean(object.actionCompleted) : false,
      vestingPeriodCompleted: Array.isArray(object?.vestingPeriodCompleted) ? object.vestingPeriodCompleted.map((e: any) => Boolean(e)) : [],
      vestingPeriodClaimed: Array.isArray(object?.vestingPeriodClaimed) ? object.vestingPeriodClaimed.map((e: any) => Boolean(e)) : []
    };
  },
  toJSON(message: Status): unknown {
    const obj: any = {};
    message.actionCompleted !== undefined && (obj.actionCompleted = message.actionCompleted);
    if (message.vestingPeriodCompleted) {
      obj.vestingPeriodCompleted = message.vestingPeriodCompleted.map(e => e);
    } else {
      obj.vestingPeriodCompleted = [];
    }
    if (message.vestingPeriodClaimed) {
      obj.vestingPeriodClaimed = message.vestingPeriodClaimed.map(e => e);
    } else {
      obj.vestingPeriodClaimed = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Status>): Status {
    const message = createBaseStatus();
    message.actionCompleted = object.actionCompleted ?? false;
    message.vestingPeriodCompleted = object.vestingPeriodCompleted?.map(e => e) || [];
    message.vestingPeriodClaimed = object.vestingPeriodClaimed?.map(e => e) || [];
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    const message = createBaseStatus();
    if (object.action_completed !== undefined && object.action_completed !== null) {
      message.actionCompleted = object.action_completed;
    }
    message.vestingPeriodCompleted = object.vesting_period_completed?.map(e => e) || [];
    message.vestingPeriodClaimed = object.vesting_period_claimed?.map(e => e) || [];
    return message;
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    obj.action_completed = message.actionCompleted === false ? undefined : message.actionCompleted;
    if (message.vestingPeriodCompleted) {
      obj.vesting_period_completed = message.vestingPeriodCompleted.map(e => e);
    } else {
      obj.vesting_period_completed = message.vestingPeriodCompleted;
    }
    if (message.vestingPeriodClaimed) {
      obj.vesting_period_claimed = message.vestingPeriodClaimed.map(e => e);
    } else {
      obj.vesting_period_claimed = message.vestingPeriodClaimed;
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
      typeUrl: "/intento.claim.v1beta1.Status",
      value: Status.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Status.typeUrl, Status);
function createBaseMsgClaimClaimable(): MsgClaimClaimable {
  return {
    sender: ""
  };
}
export const MsgClaimClaimable = {
  typeUrl: "/intento.claim.v1beta1.MsgClaimClaimable",
  is(o: any): o is MsgClaimClaimable {
    return o && (o.$typeUrl === MsgClaimClaimable.typeUrl || typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgClaimClaimableSDKType {
    return o && (o.$typeUrl === MsgClaimClaimable.typeUrl || typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgClaimClaimableAmino {
    return o && (o.$typeUrl === MsgClaimClaimable.typeUrl || typeof o.sender === "string");
  },
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
  fromJSON(object: any): MsgClaimClaimable {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgClaimClaimable): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimClaimable>): MsgClaimClaimable {
    const message = createBaseMsgClaimClaimable();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgClaimClaimableAmino): MsgClaimClaimable {
    const message = createBaseMsgClaimClaimable();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgClaimClaimable): MsgClaimClaimableAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
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
      typeUrl: "/intento.claim.v1beta1.MsgClaimClaimable",
      value: MsgClaimClaimable.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimClaimable.typeUrl, MsgClaimClaimable);
function createBaseMsgClaimClaimableResponse(): MsgClaimClaimableResponse {
  return {
    claimedAmount: []
  };
}
export const MsgClaimClaimableResponse = {
  typeUrl: "/intento.claim.v1beta1.MsgClaimClaimableResponse",
  is(o: any): o is MsgClaimClaimableResponse {
    return o && (o.$typeUrl === MsgClaimClaimableResponse.typeUrl || Array.isArray(o.claimedAmount) && (!o.claimedAmount.length || Coin.is(o.claimedAmount[0])));
  },
  isSDK(o: any): o is MsgClaimClaimableResponseSDKType {
    return o && (o.$typeUrl === MsgClaimClaimableResponse.typeUrl || Array.isArray(o.claimed_amount) && (!o.claimed_amount.length || Coin.isSDK(o.claimed_amount[0])));
  },
  isAmino(o: any): o is MsgClaimClaimableResponseAmino {
    return o && (o.$typeUrl === MsgClaimClaimableResponse.typeUrl || Array.isArray(o.claimed_amount) && (!o.claimed_amount.length || Coin.isAmino(o.claimed_amount[0])));
  },
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
  fromJSON(object: any): MsgClaimClaimableResponse {
    return {
      claimedAmount: Array.isArray(object?.claimedAmount) ? object.claimedAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgClaimClaimableResponse): unknown {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimedAmount = message.claimedAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimedAmount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgClaimClaimableResponse>): MsgClaimClaimableResponse {
    const message = createBaseMsgClaimClaimableResponse();
    message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimClaimableResponseAmino): MsgClaimClaimableResponse {
    const message = createBaseMsgClaimClaimableResponse();
    message.claimedAmount = object.claimed_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaimClaimableResponse): MsgClaimClaimableResponseAmino {
    const obj: any = {};
    if (message.claimedAmount) {
      obj.claimed_amount = message.claimedAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed_amount = message.claimedAmount;
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
      typeUrl: "/intento.claim.v1beta1.MsgClaimClaimableResponse",
      value: MsgClaimClaimableResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimClaimableResponse.typeUrl, MsgClaimClaimableResponse);