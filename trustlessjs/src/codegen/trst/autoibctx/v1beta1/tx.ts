import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecutionConfiguration, ExecutionConfigurationAmino, ExecutionConfigurationSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccount {
  owner: string;
  connectionId: string;
  version: string;
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccount";
  value: Uint8Array;
}
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccountAmino {
  owner: string;
  connection_id: string;
  version: string;
}
export interface MsgRegisterAccountAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgRegisterAccount";
  value: MsgRegisterAccountAmino;
}
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccountSDKType {
  owner: string;
  connection_id: string;
  version: string;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {}
export interface MsgRegisterAccountResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseAmino {}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgRegisterAccountResponse";
  value: MsgRegisterAccountResponseAmino;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseSDKType {}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitTx {
  owner: string;
  connectionId: string;
  msg: Any;
}
export interface MsgSubmitTxProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx";
  value: Uint8Array;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitTxAmino {
  owner: string;
  connection_id: string;
  msg?: AnyAmino;
}
export interface MsgSubmitTxAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgSubmitTx";
  value: MsgSubmitTxAmino;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitTxSDKType {
  owner: string;
  connection_id: string;
  msg: AnySDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponse {}
export interface MsgSubmitTxResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTxResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseAmino {}
export interface MsgSubmitTxResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgSubmitTxResponse";
  value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseSDKType {}
/** MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitAutoTx {
  owner: string;
  connectionId: string;
  label: string;
  msgs: (Any)[] | Any[];
  /** duration defines the time that the code should run for */
  duration: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  feeFunds: Coin[];
  /** optional parameters for creating interdependent execution */
  configuration: ExecutionConfiguration;
}
export interface MsgSubmitAutoTxProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx";
  value: Uint8Array;
}
export type MsgSubmitAutoTxEncoded = Omit<MsgSubmitAutoTx, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitAutoTxAmino {
  owner: string;
  connection_id: string;
  label: string;
  msgs: AnyAmino[];
  /** duration defines the time that the code should run for */
  duration: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  start_at: string;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  fee_funds: CoinAmino[];
  /** optional parameters for creating interdependent execution */
  configuration?: ExecutionConfigurationAmino;
}
export interface MsgSubmitAutoTxAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx";
  value: MsgSubmitAutoTxAmino;
}
/** MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitAutoTxSDKType {
  owner: string;
  connection_id: string;
  label: string;
  msgs: (AnySDKType)[];
  duration: string;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration: ExecutionConfigurationSDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponse {}
export interface MsgSubmitAutoTxResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTxResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponseAmino {}
export interface MsgSubmitAutoTxResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgSubmitAutoTxResponse";
  value: MsgSubmitAutoTxResponseAmino;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponseSDKType {}
/** MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and schedules an arbitrary transaction msg to be executed by this interchain account */
export interface MsgRegisterAccountAndSubmitAutoTx {
  owner: string;
  connectionId: string;
  label: string;
  msgs: (Any)[] | Any[];
  /** duration defines the time that the code should run for */
  duration: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  feeFunds: Coin[];
  /** optional array of dependent txs that should be executed before execution is allowed */
  configuration: ExecutionConfiguration;
  version: string;
}
export interface MsgRegisterAccountAndSubmitAutoTxProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx";
  value: Uint8Array;
}
export type MsgRegisterAccountAndSubmitAutoTxEncoded = Omit<MsgRegisterAccountAndSubmitAutoTx, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and schedules an arbitrary transaction msg to be executed by this interchain account */
export interface MsgRegisterAccountAndSubmitAutoTxAmino {
  owner: string;
  connection_id: string;
  label: string;
  msgs: AnyAmino[];
  /** duration defines the time that the code should run for */
  duration: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  start_at: string;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  fee_funds: CoinAmino[];
  /** optional array of dependent txs that should be executed before execution is allowed */
  configuration?: ExecutionConfigurationAmino;
  version: string;
}
export interface MsgRegisterAccountAndSubmitAutoTxAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx";
  value: MsgRegisterAccountAndSubmitAutoTxAmino;
}
/** MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and schedules an arbitrary transaction msg to be executed by this interchain account */
export interface MsgRegisterAccountAndSubmitAutoTxSDKType {
  owner: string;
  connection_id: string;
  label: string;
  msgs: (AnySDKType)[];
  duration: string;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration: ExecutionConfigurationSDKType;
  version: string;
}
/** MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response type */
export interface MsgRegisterAccountAndSubmitAutoTxResponse {}
export interface MsgRegisterAccountAndSubmitAutoTxResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTxResponse";
  value: Uint8Array;
}
/** MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response type */
export interface MsgRegisterAccountAndSubmitAutoTxResponseAmino {}
export interface MsgRegisterAccountAndSubmitAutoTxResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTxResponse";
  value: MsgRegisterAccountAndSubmitAutoTxResponseAmino;
}
/** MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response type */
export interface MsgRegisterAccountAndSubmitAutoTxResponseSDKType {}
/** MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgUpdateAutoTx {
  owner: string;
  txId: bigint;
  connectionId: string;
  label: string;
  msgs: (Any)[] | Any[];
  /** end_time when set defines the time that the code should run for */
  endTime: bigint;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  feeFunds: Coin[];
  configuration: ExecutionConfiguration;
}
export interface MsgUpdateAutoTxProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx";
  value: Uint8Array;
}
export type MsgUpdateAutoTxEncoded = Omit<MsgUpdateAutoTx, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgUpdateAutoTxAmino {
  owner: string;
  tx_id: string;
  connection_id: string;
  label: string;
  msgs: AnyAmino[];
  /** end_time when set defines the time that the code should run for */
  end_time: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  start_at: string;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  fee_funds: CoinAmino[];
  configuration?: ExecutionConfigurationAmino;
}
export interface MsgUpdateAutoTxAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx";
  value: MsgUpdateAutoTxAmino;
}
/** MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgUpdateAutoTxSDKType {
  owner: string;
  tx_id: bigint;
  connection_id: string;
  label: string;
  msgs: (AnySDKType)[];
  end_time: bigint;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration: ExecutionConfigurationSDKType;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateAutoTxResponse {}
export interface MsgUpdateAutoTxResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTxResponse";
  value: Uint8Array;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateAutoTxResponseAmino {}
export interface MsgUpdateAutoTxResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgUpdateAutoTxResponse";
  value: MsgUpdateAutoTxResponseAmino;
}
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
  fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAccountAmino): MsgRegisterAccount {
    return {
      owner: object.owner,
      connectionId: object.connection_id,
      version: object.version
    };
  },
  toAmino(message: MsgRegisterAccount): MsgRegisterAccountAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAminoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountProtoMsg): MsgRegisterAccount {
    return MsgRegisterAccount.decode(message.value);
  },
  toProto(message: MsgRegisterAccount): Uint8Array {
    return MsgRegisterAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccount): MsgRegisterAccountProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccount",
      value: MsgRegisterAccount.encode(message).finish()
    };
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
  fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAccountResponseAmino): MsgRegisterAccountResponse {
    return {};
  },
  toAmino(_: MsgRegisterAccountResponse): MsgRegisterAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountResponseAminoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountResponseProtoMsg): MsgRegisterAccountResponse {
    return MsgRegisterAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountResponse): Uint8Array {
    return MsgRegisterAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountResponse): MsgRegisterAccountResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountResponse",
      value: MsgRegisterAccountResponse.encode(message).finish()
    };
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
  fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitTxAmino): MsgSubmitTx {
    return {
      owner: object.owner,
      connectionId: object.connection_id,
      msg: object?.msg ? Any.fromAmino(object.msg) : undefined
    };
  },
  toAmino(message: MsgSubmitTx): MsgSubmitTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    obj.msg = message.msg ? Any.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitTxAminoMsg): MsgSubmitTx {
    return MsgSubmitTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitTxProtoMsg): MsgSubmitTx {
    return MsgSubmitTx.decode(message.value);
  },
  toProto(message: MsgSubmitTx): Uint8Array {
    return MsgSubmitTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitTx): MsgSubmitTxProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx",
      value: MsgSubmitTx.encode(message).finish()
    };
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
  fromPartial(_: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    return message;
  },
  fromAmino(_: MsgSubmitTxResponseAmino): MsgSubmitTxResponse {
    return {};
  },
  toAmino(_: MsgSubmitTxResponse): MsgSubmitTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitTxResponseAminoMsg): MsgSubmitTxResponse {
    return MsgSubmitTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitTxResponseProtoMsg): MsgSubmitTxResponse {
    return MsgSubmitTxResponse.decode(message.value);
  },
  toProto(message: MsgSubmitTxResponse): Uint8Array {
    return MsgSubmitTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitTxResponse): MsgSubmitTxResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTxResponse",
      value: MsgSubmitTxResponse.encode(message).finish()
    };
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
    configuration: ExecutionConfiguration.fromPartial({})
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
      Any.encode((v! as Any), writer.uint32(34).fork()).ldelim();
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
    if (message.configuration !== undefined) {
      ExecutionConfiguration.encode(message.configuration, writer.uint32(74).fork()).ldelim();
    }
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
          message.msgs.push((Sdk_Msg_InterfaceDecoder(reader) as Any));
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
          message.configuration = ExecutionConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitAutoTx>): MsgSubmitAutoTx {
    const message = createBaseMsgSubmitAutoTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitAutoTxAmino): MsgSubmitAutoTx {
    return {
      owner: object.owner,
      connectionId: object.connection_id,
      label: object.label,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Sdk_Msg_FromAmino(e)) : [],
      duration: object.duration,
      startAt: BigInt(object.start_at),
      interval: object.interval,
      feeFunds: Array.isArray(object?.fee_funds) ? object.fee_funds.map((e: any) => Coin.fromAmino(e)) : [],
      configuration: object?.configuration ? ExecutionConfiguration.fromAmino(object.configuration) : undefined
    };
  },
  toAmino(message: MsgSubmitAutoTx): MsgSubmitAutoTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    obj.label = message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_Msg_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.duration = message.duration;
    obj.start_at = message.startAt ? message.startAt.toString() : undefined;
    obj.interval = message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = [];
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitAutoTxAminoMsg): MsgSubmitAutoTx {
    return MsgSubmitAutoTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitAutoTxProtoMsg): MsgSubmitAutoTx {
    return MsgSubmitAutoTx.decode(message.value);
  },
  toProto(message: MsgSubmitAutoTx): Uint8Array {
    return MsgSubmitAutoTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitAutoTx): MsgSubmitAutoTxProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx",
      value: MsgSubmitAutoTx.encode(message).finish()
    };
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
  fromPartial(_: Partial<MsgSubmitAutoTxResponse>): MsgSubmitAutoTxResponse {
    const message = createBaseMsgSubmitAutoTxResponse();
    return message;
  },
  fromAmino(_: MsgSubmitAutoTxResponseAmino): MsgSubmitAutoTxResponse {
    return {};
  },
  toAmino(_: MsgSubmitAutoTxResponse): MsgSubmitAutoTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitAutoTxResponseAminoMsg): MsgSubmitAutoTxResponse {
    return MsgSubmitAutoTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitAutoTxResponseProtoMsg): MsgSubmitAutoTxResponse {
    return MsgSubmitAutoTxResponse.decode(message.value);
  },
  toProto(message: MsgSubmitAutoTxResponse): Uint8Array {
    return MsgSubmitAutoTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitAutoTxResponse): MsgSubmitAutoTxResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTxResponse",
      value: MsgSubmitAutoTxResponse.encode(message).finish()
    };
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
    configuration: ExecutionConfiguration.fromPartial({}),
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
      Any.encode((v! as Any), writer.uint32(34).fork()).ldelim();
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
    if (message.configuration !== undefined) {
      ExecutionConfiguration.encode(message.configuration, writer.uint32(74).fork()).ldelim();
    }
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
          message.msgs.push((Sdk_Msg_InterfaceDecoder(reader) as Any));
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
          message.configuration = ExecutionConfiguration.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<MsgRegisterAccountAndSubmitAutoTx>): MsgRegisterAccountAndSubmitAutoTx {
    const message = createBaseMsgRegisterAccountAndSubmitAutoTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAccountAndSubmitAutoTxAmino): MsgRegisterAccountAndSubmitAutoTx {
    return {
      owner: object.owner,
      connectionId: object.connection_id,
      label: object.label,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Sdk_Msg_FromAmino(e)) : [],
      duration: object.duration,
      startAt: BigInt(object.start_at),
      interval: object.interval,
      feeFunds: Array.isArray(object?.fee_funds) ? object.fee_funds.map((e: any) => Coin.fromAmino(e)) : [],
      configuration: object?.configuration ? ExecutionConfiguration.fromAmino(object.configuration) : undefined,
      version: object.version
    };
  },
  toAmino(message: MsgRegisterAccountAndSubmitAutoTx): MsgRegisterAccountAndSubmitAutoTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    obj.label = message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_Msg_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.duration = message.duration;
    obj.start_at = message.startAt ? message.startAt.toString() : undefined;
    obj.interval = message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = [];
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAndSubmitAutoTxAminoMsg): MsgRegisterAccountAndSubmitAutoTx {
    return MsgRegisterAccountAndSubmitAutoTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountAndSubmitAutoTxProtoMsg): MsgRegisterAccountAndSubmitAutoTx {
    return MsgRegisterAccountAndSubmitAutoTx.decode(message.value);
  },
  toProto(message: MsgRegisterAccountAndSubmitAutoTx): Uint8Array {
    return MsgRegisterAccountAndSubmitAutoTx.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountAndSubmitAutoTx): MsgRegisterAccountAndSubmitAutoTxProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
      value: MsgRegisterAccountAndSubmitAutoTx.encode(message).finish()
    };
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
  fromPartial(_: Partial<MsgRegisterAccountAndSubmitAutoTxResponse>): MsgRegisterAccountAndSubmitAutoTxResponse {
    const message = createBaseMsgRegisterAccountAndSubmitAutoTxResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAccountAndSubmitAutoTxResponseAmino): MsgRegisterAccountAndSubmitAutoTxResponse {
    return {};
  },
  toAmino(_: MsgRegisterAccountAndSubmitAutoTxResponse): MsgRegisterAccountAndSubmitAutoTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAndSubmitAutoTxResponseAminoMsg): MsgRegisterAccountAndSubmitAutoTxResponse {
    return MsgRegisterAccountAndSubmitAutoTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountAndSubmitAutoTxResponseProtoMsg): MsgRegisterAccountAndSubmitAutoTxResponse {
    return MsgRegisterAccountAndSubmitAutoTxResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountAndSubmitAutoTxResponse): Uint8Array {
    return MsgRegisterAccountAndSubmitAutoTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountAndSubmitAutoTxResponse): MsgRegisterAccountAndSubmitAutoTxResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTxResponse",
      value: MsgRegisterAccountAndSubmitAutoTxResponse.encode(message).finish()
    };
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
    configuration: ExecutionConfiguration.fromPartial({})
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
      Any.encode((v! as Any), writer.uint32(42).fork()).ldelim();
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
    if (message.configuration !== undefined) {
      ExecutionConfiguration.encode(message.configuration, writer.uint32(82).fork()).ldelim();
    }
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
          message.msgs.push((Sdk_Msg_InterfaceDecoder(reader) as Any));
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
          message.configuration = ExecutionConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAutoTx>): MsgUpdateAutoTx {
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
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAutoTxAmino): MsgUpdateAutoTx {
    return {
      owner: object.owner,
      txId: BigInt(object.tx_id),
      connectionId: object.connection_id,
      label: object.label,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Sdk_Msg_FromAmino(e)) : [],
      endTime: BigInt(object.end_time),
      startAt: BigInt(object.start_at),
      interval: object.interval,
      feeFunds: Array.isArray(object?.fee_funds) ? object.fee_funds.map((e: any) => Coin.fromAmino(e)) : [],
      configuration: object?.configuration ? ExecutionConfiguration.fromAmino(object.configuration) : undefined
    };
  },
  toAmino(message: MsgUpdateAutoTx): MsgUpdateAutoTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.tx_id = message.txId ? message.txId.toString() : undefined;
    obj.connection_id = message.connectionId;
    obj.label = message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_Msg_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.end_time = message.endTime ? message.endTime.toString() : undefined;
    obj.start_at = message.startAt ? message.startAt.toString() : undefined;
    obj.interval = message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = [];
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAutoTxAminoMsg): MsgUpdateAutoTx {
    return MsgUpdateAutoTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAutoTxProtoMsg): MsgUpdateAutoTx {
    return MsgUpdateAutoTx.decode(message.value);
  },
  toProto(message: MsgUpdateAutoTx): Uint8Array {
    return MsgUpdateAutoTx.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAutoTx): MsgUpdateAutoTxProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx",
      value: MsgUpdateAutoTx.encode(message).finish()
    };
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
  fromPartial(_: Partial<MsgUpdateAutoTxResponse>): MsgUpdateAutoTxResponse {
    const message = createBaseMsgUpdateAutoTxResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAutoTxResponseAmino): MsgUpdateAutoTxResponse {
    return {};
  },
  toAmino(_: MsgUpdateAutoTxResponse): MsgUpdateAutoTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAutoTxResponseAminoMsg): MsgUpdateAutoTxResponse {
    return MsgUpdateAutoTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAutoTxResponseProtoMsg): MsgUpdateAutoTxResponse {
    return MsgUpdateAutoTxResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAutoTxResponse): Uint8Array {
    return MsgUpdateAutoTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAutoTxResponse): MsgUpdateAutoTxResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTxResponse",
      value: MsgUpdateAutoTxResponse.encode(message).finish()
    };
  }
};
export const Sdk_Msg_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Sdk_Msg_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Sdk_Msg_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};