import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export enum Action {
  ACTION_ACTION_LOCAL = 0,
  ACTION_ACTION_ICA = 1,
  ACTION_GOVERNANCE_VOTE = 2,
  ACTION_DELEGATE_STAKE = 3,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ACTION_ACTION_LOCAL":
      return Action.ACTION_ACTION_LOCAL;
    case 1:
    case "ACTION_ACTION_ICA":
      return Action.ACTION_ACTION_ICA;
    case 2:
    case "ACTION_GOVERNANCE_VOTE":
      return Action.ACTION_GOVERNANCE_VOTE;
    case 3:
    case "ACTION_DELEGATE_STAKE":
      return Action.ACTION_DELEGATE_STAKE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ACTION_ACTION_LOCAL:
      return "ACTION_ACTION_LOCAL";
    case Action.ACTION_ACTION_ICA:
      return "ACTION_ACTION_ICA";
    case Action.ACTION_GOVERNANCE_VOTE:
      return "ACTION_GOVERNANCE_VOTE";
    case Action.ACTION_DELEGATE_STAKE:
      return "ACTION_DELEGATE_STAKE";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** address of recipient */
  address: string;
  /** maximum claimable amount for the address */
  maximumClaimableAmount: Coin;
  /** index of status array refers to action enum # */
  status: Status[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/intento.claim.v1.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordAmino {
  /** address of recipient */
  address?: string;
  /** maximum claimable amount for the address */
  maximum_claimable_amount?: CoinAmino;
  /** index of status array refers to action enum # */
  status?: StatusAmino[];
}
export interface ClaimRecordAminoMsg {
  type: "/intento.claim.v1.ClaimRecord";
  value: ClaimRecordAmino;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  address: string;
  maximum_claimable_amount: CoinSDKType;
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
  vestingPeriodsCompleted: boolean[];
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vestingPeriodsClaimed: boolean[];
}
export interface StatusProtoMsg {
  typeUrl: "/intento.claim.v1.Status";
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
  vesting_periods_completed?: boolean[];
  /**
   * true if action is completed
   * index refers to the 4 vesting periods for the given action
   */
  vesting_periods_claimed?: boolean[];
}
export interface StatusAminoMsg {
  type: "/intento.claim.v1.Status";
  value: StatusAmino;
}
/** Status contains for an action if it is completed and claimed */
export interface StatusSDKType {
  action_completed: boolean;
  vesting_periods_completed: boolean[];
  vesting_periods_claimed: boolean[];
}
export interface MsgClaimClaimable {
  sender: string;
}
export interface MsgClaimClaimableProtoMsg {
  typeUrl: "/intento.claim.v1.MsgClaimClaimable";
  value: Uint8Array;
}
export interface MsgClaimClaimableAmino {
  sender?: string;
}
export interface MsgClaimClaimableAminoMsg {
  type: "claim/MsgClaimClaimable";
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
  typeUrl: "/intento.claim.v1.MsgClaimClaimableResponse";
  value: Uint8Array;
}
export interface MsgClaimClaimableResponseAmino {
  /** returned claimable amount for the address */
  claimed_amount?: CoinAmino[];
}
export interface MsgClaimClaimableResponseAminoMsg {
  type: "/intento.claim.v1.MsgClaimClaimableResponse";
  value: MsgClaimClaimableResponseAmino;
}
export interface MsgClaimClaimableResponseSDKType {
  claimed_amount: CoinSDKType[];
}
/** MsgUpdateParams is the request type for updating claim module's params. */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/intento.claim.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the request type for updating claim module's params. */
export interface MsgUpdateParamsAmino {
  authority?: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/intento.claim.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the request type for updating claim module's params. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgUpdateParamsResponse is the response type for executing MsgUpdateParams. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/intento.claim.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the response type for executing MsgUpdateParams. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/intento.claim.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse is the response type for executing MsgUpdateParams. */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    maximumClaimableAmount: Coin.fromPartial({}),
    status: []
  };
}
export const ClaimRecord = {
  typeUrl: "/intento.claim.v1.ClaimRecord",
  is(o: any): o is ClaimRecord {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Coin.is(o.maximumClaimableAmount) && Array.isArray(o.status) && (!o.status.length || Status.is(o.status[0])));
  },
  isSDK(o: any): o is ClaimRecordSDKType {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Coin.isSDK(o.maximum_claimable_amount) && Array.isArray(o.status) && (!o.status.length || Status.isSDK(o.status[0])));
  },
  isAmino(o: any): o is ClaimRecordAmino {
    return o && (o.$typeUrl === ClaimRecord.typeUrl || typeof o.address === "string" && Coin.isAmino(o.maximum_claimable_amount) && Array.isArray(o.status) && (!o.status.length || Status.isAmino(o.status[0])));
  },
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.maximumClaimableAmount !== undefined) {
      Coin.encode(message.maximumClaimableAmount, writer.uint32(18).fork()).ldelim();
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
          message.maximumClaimableAmount = Coin.decode(reader, reader.uint32());
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
      maximumClaimableAmount: isSet(object.maximumClaimableAmount) ? Coin.fromJSON(object.maximumClaimableAmount) : undefined,
      status: Array.isArray(object?.status) ? object.status.map((e: any) => Status.fromJSON(e)) : []
    };
  },
  toJSON(message: ClaimRecord): JsonSafe<ClaimRecord> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.maximumClaimableAmount !== undefined && (obj.maximumClaimableAmount = message.maximumClaimableAmount ? Coin.toJSON(message.maximumClaimableAmount) : undefined);
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
    message.maximumClaimableAmount = object.maximumClaimableAmount !== undefined && object.maximumClaimableAmount !== null ? Coin.fromPartial(object.maximumClaimableAmount) : undefined;
    message.status = object.status?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClaimRecordAmino): ClaimRecord {
    const message = createBaseClaimRecord();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.maximum_claimable_amount !== undefined && object.maximum_claimable_amount !== null) {
      message.maximumClaimableAmount = Coin.fromAmino(object.maximum_claimable_amount);
    }
    message.status = object.status?.map(e => Status.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClaimRecord): ClaimRecordAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.maximum_claimable_amount = message.maximumClaimableAmount ? Coin.toAmino(message.maximumClaimableAmount) : undefined;
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
      typeUrl: "/intento.claim.v1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClaimRecord.typeUrl, ClaimRecord);
function createBaseStatus(): Status {
  return {
    actionCompleted: false,
    vestingPeriodsCompleted: [],
    vestingPeriodsClaimed: []
  };
}
export const Status = {
  typeUrl: "/intento.claim.v1.Status",
  is(o: any): o is Status {
    return o && (o.$typeUrl === Status.typeUrl || typeof o.actionCompleted === "boolean" && Array.isArray(o.vestingPeriodsCompleted) && (!o.vestingPeriodsCompleted.length || typeof o.vestingPeriodsCompleted[0] === "boolean") && Array.isArray(o.vestingPeriodsClaimed) && (!o.vestingPeriodsClaimed.length || typeof o.vestingPeriodsClaimed[0] === "boolean"));
  },
  isSDK(o: any): o is StatusSDKType {
    return o && (o.$typeUrl === Status.typeUrl || typeof o.action_completed === "boolean" && Array.isArray(o.vesting_periods_completed) && (!o.vesting_periods_completed.length || typeof o.vesting_periods_completed[0] === "boolean") && Array.isArray(o.vesting_periods_claimed) && (!o.vesting_periods_claimed.length || typeof o.vesting_periods_claimed[0] === "boolean"));
  },
  isAmino(o: any): o is StatusAmino {
    return o && (o.$typeUrl === Status.typeUrl || typeof o.action_completed === "boolean" && Array.isArray(o.vesting_periods_completed) && (!o.vesting_periods_completed.length || typeof o.vesting_periods_completed[0] === "boolean") && Array.isArray(o.vesting_periods_claimed) && (!o.vesting_periods_claimed.length || typeof o.vesting_periods_claimed[0] === "boolean"));
  },
  encode(message: Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionCompleted === true) {
      writer.uint32(8).bool(message.actionCompleted);
    }
    writer.uint32(18).fork();
    for (const v of message.vestingPeriodsCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.vestingPeriodsClaimed) {
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
              message.vestingPeriodsCompleted.push(reader.bool());
            }
          } else {
            message.vestingPeriodsCompleted.push(reader.bool());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vestingPeriodsClaimed.push(reader.bool());
            }
          } else {
            message.vestingPeriodsClaimed.push(reader.bool());
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
      vestingPeriodsCompleted: Array.isArray(object?.vestingPeriodsCompleted) ? object.vestingPeriodsCompleted.map((e: any) => Boolean(e)) : [],
      vestingPeriodsClaimed: Array.isArray(object?.vestingPeriodsClaimed) ? object.vestingPeriodsClaimed.map((e: any) => Boolean(e)) : []
    };
  },
  toJSON(message: Status): JsonSafe<Status> {
    const obj: any = {};
    message.actionCompleted !== undefined && (obj.actionCompleted = message.actionCompleted);
    if (message.vestingPeriodsCompleted) {
      obj.vestingPeriodsCompleted = message.vestingPeriodsCompleted.map(e => e);
    } else {
      obj.vestingPeriodsCompleted = [];
    }
    if (message.vestingPeriodsClaimed) {
      obj.vestingPeriodsClaimed = message.vestingPeriodsClaimed.map(e => e);
    } else {
      obj.vestingPeriodsClaimed = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Status>): Status {
    const message = createBaseStatus();
    message.actionCompleted = object.actionCompleted ?? false;
    message.vestingPeriodsCompleted = object.vestingPeriodsCompleted?.map(e => e) || [];
    message.vestingPeriodsClaimed = object.vestingPeriodsClaimed?.map(e => e) || [];
    return message;
  },
  fromAmino(object: StatusAmino): Status {
    const message = createBaseStatus();
    if (object.action_completed !== undefined && object.action_completed !== null) {
      message.actionCompleted = object.action_completed;
    }
    message.vestingPeriodsCompleted = object.vesting_periods_completed?.map(e => e) || [];
    message.vestingPeriodsClaimed = object.vesting_periods_claimed?.map(e => e) || [];
    return message;
  },
  toAmino(message: Status): StatusAmino {
    const obj: any = {};
    obj.action_completed = message.actionCompleted === false ? undefined : message.actionCompleted;
    if (message.vestingPeriodsCompleted) {
      obj.vesting_periods_completed = message.vestingPeriodsCompleted.map(e => e);
    } else {
      obj.vesting_periods_completed = message.vestingPeriodsCompleted;
    }
    if (message.vestingPeriodsClaimed) {
      obj.vesting_periods_claimed = message.vestingPeriodsClaimed.map(e => e);
    } else {
      obj.vesting_periods_claimed = message.vestingPeriodsClaimed;
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
      typeUrl: "/intento.claim.v1.Status",
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
  typeUrl: "/intento.claim.v1.MsgClaimClaimable",
  aminoType: "claim/MsgClaimClaimable",
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
  toJSON(message: MsgClaimClaimable): JsonSafe<MsgClaimClaimable> {
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
  toAminoMsg(message: MsgClaimClaimable): MsgClaimClaimableAminoMsg {
    return {
      type: "claim/MsgClaimClaimable",
      value: MsgClaimClaimable.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimClaimableProtoMsg): MsgClaimClaimable {
    return MsgClaimClaimable.decode(message.value);
  },
  toProto(message: MsgClaimClaimable): Uint8Array {
    return MsgClaimClaimable.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimClaimable): MsgClaimClaimableProtoMsg {
    return {
      typeUrl: "/intento.claim.v1.MsgClaimClaimable",
      value: MsgClaimClaimable.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimClaimable.typeUrl, MsgClaimClaimable);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimClaimable.aminoType, MsgClaimClaimable.typeUrl);
function createBaseMsgClaimClaimableResponse(): MsgClaimClaimableResponse {
  return {
    claimedAmount: []
  };
}
export const MsgClaimClaimableResponse = {
  typeUrl: "/intento.claim.v1.MsgClaimClaimableResponse",
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
  toJSON(message: MsgClaimClaimableResponse): JsonSafe<MsgClaimClaimableResponse> {
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
      typeUrl: "/intento.claim.v1.MsgClaimClaimableResponse",
      value: MsgClaimClaimableResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimClaimableResponse.typeUrl, MsgClaimClaimableResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/intento.claim.v1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/intento.claim.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/intento.claim.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/intento.claim.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);