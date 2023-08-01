import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgRegisterAccount registers an interchain account for the given owner over
 * the specified connection pair
 */
export interface MsgRegisterAccount {
  owner: string;
  connectionId: string;
  version: string;
}
/**
 * MsgRegisterAccount registers an interchain account for the given owner over
 * the specified connection pair
 */
export interface MsgRegisterAccountSDKType {
  owner: string;
  connection_id: string;
  version: string;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseSDKType {}
/**
 * MsgSubmitTx creates and submits an arbitrary transaction msg to be executed
 * locally or using an interchain account
 */
export interface MsgSubmitTx {
  owner: string;
  connectionId: string;
  msg: Any;
}
/**
 * MsgSubmitTx creates and submits an arbitrary transaction msg to be executed
 * locally or using an interchain account
 */
export interface MsgSubmitTxSDKType {
  owner: string;
  connection_id: string;
  msg: AnySDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponse {}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseSDKType {}
/**
 * MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg
 * to be executed locally or using an interchain account
 */
export interface MsgSubmitAutoTx {
  owner: string;
  connectionId: string;
  label: string;
  msgs: Any[];
  /** duration defines the time that the code should run for */
  duration: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /**
   * optional fees to be used for auto tx execution limiting the amount of fees
   * incurred
   */
  feeFunds: Coin[];
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  dependsOnTxIds: bigint[];
}
/**
 * MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg
 * to be executed locally or using an interchain account
 */
export interface MsgSubmitAutoTxSDKType {
  owner: string;
  connection_id: string;
  label: string;
  msgs: AnySDKType[];
  duration: string;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  depends_on_tx_ids: bigint[];
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponse {}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponseSDKType {}
/**
 * MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and
 * schedules an arbitrary transaction msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitAutoTx {
  owner: string;
  connectionId: string;
  label: string;
  msgs: Any[];
  /** duration defines the time that the code should run for */
  duration: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /**
   * optional fees to be used for auto tx execution limiting the amount of fees
   * incurred
   */
  feeFunds: Coin[];
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  dependsOnTxIds: bigint[];
  version: string;
}
/**
 * MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and
 * schedules an arbitrary transaction msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitAutoTxSDKType {
  owner: string;
  connection_id: string;
  label: string;
  msgs: AnySDKType[];
  duration: string;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  depends_on_tx_ids: bigint[];
  version: string;
}
/**
 * MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitAutoTxResponse {}
/**
 * MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitAutoTxResponseSDKType {}
/**
 * MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateAutoTx {
  owner: string;
  txId: bigint;
  connectionId: string;
  label: string;
  msgs: Any[];
  /** end_time when set defines the time that the code should run for */
  endTime: bigint;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /**
   * optional fees to be used for auto tx execution limiting the amount of fees
   * incurred
   */
  feeFunds: Coin[];
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  dependsOnTxIds: bigint[];
}
/**
 * MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateAutoTxSDKType {
  owner: string;
  tx_id: bigint;
  connection_id: string;
  label: string;
  msgs: AnySDKType[];
  end_time: bigint;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  depends_on_tx_ids: bigint[];
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateAutoTxResponse {}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateAutoTxResponseSDKType {}
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}
export const MsgRegisterAccount = {
  encode(message: MsgRegisterAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.version = object.version ?? "";
    return message;
  }
};
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}
export const MsgRegisterAccountResponse = {
  encode(_: MsgRegisterAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  }
};
function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    owner: "",
    connectionId: "",
    msg: Any.fromPartial({})
  };
}
export const MsgSubmitTx = {
  encode(message: MsgSubmitTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.msg = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitTx>): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
    return message;
  }
};
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {};
}
export const MsgSubmitTxResponse = {
  encode(_: MsgSubmitTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTxResponse();
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
  fromPartial(_: DeepPartial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    return message;
  }
};
function createBaseMsgSubmitAutoTx(): MsgSubmitAutoTx {
  return {
    owner: "",
    connectionId: "",
    label: "",
    msgs: [],
    duration: "",
    startAt: BigInt(0),
    interval: "",
    feeFunds: [],
    dependsOnTxIds: []
  };
}
export const MsgSubmitAutoTx = {
  encode(message: MsgSubmitAutoTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }
    if (message.startAt !== BigInt(0)) {
      writer.uint32(48).uint64(message.startAt);
    }
    if (message.interval !== "") {
      writer.uint32(58).string(message.interval);
    }
    for (const v of message.feeFunds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).fork();
    for (const v of message.dependsOnTxIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAutoTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitAutoTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.duration = reader.string();
          break;
        case 6:
          message.startAt = reader.uint64();
          break;
        case 7:
          message.interval = reader.string();
          break;
        case 8:
          message.feeFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dependsOnTxIds.push(reader.uint64());
            }
          } else {
            message.dependsOnTxIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitAutoTx>): MsgSubmitAutoTx {
    const message = createBaseMsgSubmitAutoTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
    return message;
  }
};
function createBaseMsgSubmitAutoTxResponse(): MsgSubmitAutoTxResponse {
  return {};
}
export const MsgSubmitAutoTxResponse = {
  encode(_: MsgSubmitAutoTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAutoTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitAutoTxResponse();
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
  fromPartial(_: DeepPartial<MsgSubmitAutoTxResponse>): MsgSubmitAutoTxResponse {
    const message = createBaseMsgSubmitAutoTxResponse();
    return message;
  }
};
function createBaseMsgRegisterAccountAndSubmitAutoTx(): MsgRegisterAccountAndSubmitAutoTx {
  return {
    owner: "",
    connectionId: "",
    label: "",
    msgs: [],
    duration: "",
    startAt: BigInt(0),
    interval: "",
    feeFunds: [],
    dependsOnTxIds: [],
    version: ""
  };
}
export const MsgRegisterAccountAndSubmitAutoTx = {
  encode(message: MsgRegisterAccountAndSubmitAutoTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }
    if (message.startAt !== BigInt(0)) {
      writer.uint32(48).uint64(message.startAt);
    }
    if (message.interval !== "") {
      writer.uint32(58).string(message.interval);
    }
    for (const v of message.feeFunds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).fork();
    for (const v of message.dependsOnTxIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.version !== "") {
      writer.uint32(82).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitAutoTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountAndSubmitAutoTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.duration = reader.string();
          break;
        case 6:
          message.startAt = reader.uint64();
          break;
        case 7:
          message.interval = reader.string();
          break;
        case 8:
          message.feeFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dependsOnTxIds.push(reader.uint64());
            }
          } else {
            message.dependsOnTxIds.push(reader.uint64());
          }
          break;
        case 10:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterAccountAndSubmitAutoTx>): MsgRegisterAccountAndSubmitAutoTx {
    const message = createBaseMsgRegisterAccountAndSubmitAutoTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
    message.version = object.version ?? "";
    return message;
  }
};
function createBaseMsgRegisterAccountAndSubmitAutoTxResponse(): MsgRegisterAccountAndSubmitAutoTxResponse {
  return {};
}
export const MsgRegisterAccountAndSubmitAutoTxResponse = {
  encode(_: MsgRegisterAccountAndSubmitAutoTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitAutoTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountAndSubmitAutoTxResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterAccountAndSubmitAutoTxResponse>): MsgRegisterAccountAndSubmitAutoTxResponse {
    const message = createBaseMsgRegisterAccountAndSubmitAutoTxResponse();
    return message;
  }
};
function createBaseMsgUpdateAutoTx(): MsgUpdateAutoTx {
  return {
    owner: "",
    txId: BigInt(0),
    connectionId: "",
    label: "",
    msgs: [],
    endTime: BigInt(0),
    startAt: BigInt(0),
    interval: "",
    feeFunds: [],
    dependsOnTxIds: []
  };
}
export const MsgUpdateAutoTx = {
  encode(message: MsgUpdateAutoTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.txId !== BigInt(0)) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(48).uint64(message.endTime);
    }
    if (message.startAt !== BigInt(0)) {
      writer.uint32(56).uint64(message.startAt);
    }
    if (message.interval !== "") {
      writer.uint32(66).string(message.interval);
    }
    for (const v of message.feeFunds) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).fork();
    for (const v of message.dependsOnTxIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAutoTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAutoTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.txId = reader.uint64();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 6:
          message.endTime = reader.uint64();
          break;
        case 7:
          message.startAt = reader.uint64();
          break;
        case 8:
          message.interval = reader.string();
          break;
        case 9:
          message.feeFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dependsOnTxIds.push(reader.uint64());
            }
          } else {
            message.dependsOnTxIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateAutoTx>): MsgUpdateAutoTx {
    const message = createBaseMsgUpdateAutoTx();
    message.owner = object.owner ?? "";
    message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
    return message;
  }
};
function createBaseMsgUpdateAutoTxResponse(): MsgUpdateAutoTxResponse {
  return {};
}
export const MsgUpdateAutoTxResponse = {
  encode(_: MsgUpdateAutoTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAutoTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAutoTxResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateAutoTxResponse>): MsgUpdateAutoTxResponse {
    const message = createBaseMsgUpdateAutoTxResponse();
    return message;
  }
};