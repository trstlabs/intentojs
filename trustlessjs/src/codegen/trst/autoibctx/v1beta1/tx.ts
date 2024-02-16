import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecutionConfiguration, ExecutionConfigurationAmino, ExecutionConfigurationSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
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
  owner?: string;
  connection_id?: string;
  version?: string;
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
  msg?: Any;
}
export interface MsgSubmitTxProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx";
  value: Uint8Array;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitTxAmino {
  owner?: string;
  connection_id?: string;
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
  msg?: AnySDKType;
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
  /** optional configuration parameters */
  configuration?: ExecutionConfiguration;
  /** for ibc config */
  connectionId: string;
  hostConnectionId: string;
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
  owner?: string;
  label?: string;
  msgs?: AnyAmino[];
  /** duration defines the time that the code should run for */
  duration?: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  start_at?: string;
  /** interval defines the interval between auto_msg calls */
  interval?: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  fee_funds?: CoinAmino[];
  /** optional configuration parameters */
  configuration?: ExecutionConfigurationAmino;
  /** for ibc config */
  connection_id?: string;
  host_connection_id?: string;
}
export interface MsgSubmitAutoTxAminoMsg {
  type: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx";
  value: MsgSubmitAutoTxAmino;
}
/** MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitAutoTxSDKType {
  owner: string;
  label: string;
  msgs: (AnySDKType)[];
  duration: string;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration?: ExecutionConfigurationSDKType;
  connection_id: string;
  host_connection_id: string;
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
  configuration?: ExecutionConfiguration;
  version: string;
  hostConnectionId: string;
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
  owner?: string;
  connection_id?: string;
  label?: string;
  msgs?: AnyAmino[];
  /** duration defines the time that the code should run for */
  duration?: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  start_at?: string;
  /** interval defines the interval between auto_msg calls */
  interval?: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  fee_funds?: CoinAmino[];
  /** optional array of dependent txs that should be executed before execution is allowed */
  configuration?: ExecutionConfigurationAmino;
  version?: string;
  host_connection_id?: string;
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
  configuration?: ExecutionConfigurationSDKType;
  version: string;
  host_connection_id: string;
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
  configuration?: ExecutionConfiguration;
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
  owner?: string;
  tx_id?: string;
  connection_id?: string;
  label?: string;
  msgs?: AnyAmino[];
  /** end_time when set defines the time that the code should run for */
  end_time?: string;
  /** start_at when set as a unix time after block inclusion, creates a custom start time for execution */
  start_at?: string;
  /** interval defines the interval between auto_msg calls */
  interval?: string;
  /** optional fees to be used for auto tx execution limiting the amount of fees incurred */
  fee_funds?: CoinAmino[];
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
  configuration?: ExecutionConfigurationSDKType;
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
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccount",
  is(o: any): o is MsgRegisterAccount {
    return o && (o.$typeUrl === MsgRegisterAccount.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string" && typeof o.version === "string");
  },
  isSDK(o: any): o is MsgRegisterAccountSDKType {
    return o && (o.$typeUrl === MsgRegisterAccount.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.version === "string");
  },
  isAmino(o: any): o is MsgRegisterAccountAmino {
    return o && (o.$typeUrl === MsgRegisterAccount.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.version === "string");
  },
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
    const message = createBaseMsgRegisterAccount();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
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
GlobalDecoderRegistry.register(MsgRegisterAccount.typeUrl, MsgRegisterAccount);
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}
export const MsgRegisterAccountResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountResponse",
  is(o: any): o is MsgRegisterAccountResponse {
    return o && o.$typeUrl === MsgRegisterAccountResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterAccountResponseSDKType {
    return o && o.$typeUrl === MsgRegisterAccountResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterAccountResponseAmino {
    return o && o.$typeUrl === MsgRegisterAccountResponse.typeUrl;
  },
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
    const message = createBaseMsgRegisterAccountResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgRegisterAccountResponse.typeUrl, MsgRegisterAccountResponse);
function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    owner: "",
    connectionId: "",
    msg: undefined
  };
}
export const MsgSubmitTx = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx",
  is(o: any): o is MsgSubmitTx {
    return o && (o.$typeUrl === MsgSubmitTx.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is MsgSubmitTxSDKType {
    return o && (o.$typeUrl === MsgSubmitTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is MsgSubmitTxAmino {
    return o && (o.$typeUrl === MsgSubmitTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
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
    const message = createBaseMsgSubmitTx();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = Any.fromAmino(object.msg);
    }
    return message;
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
GlobalDecoderRegistry.register(MsgSubmitTx.typeUrl, MsgSubmitTx);
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {};
}
export const MsgSubmitTxResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTxResponse",
  is(o: any): o is MsgSubmitTxResponse {
    return o && o.$typeUrl === MsgSubmitTxResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitTxResponseSDKType {
    return o && o.$typeUrl === MsgSubmitTxResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitTxResponseAmino {
    return o && o.$typeUrl === MsgSubmitTxResponse.typeUrl;
  },
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
    const message = createBaseMsgSubmitTxResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgSubmitTxResponse.typeUrl, MsgSubmitTxResponse);
function createBaseMsgSubmitAutoTx(): MsgSubmitAutoTx {
  return {
    owner: "",
    label: "",
    msgs: [],
    duration: "",
    startAt: BigInt(0),
    interval: "",
    feeFunds: [],
    configuration: undefined,
    connectionId: "",
    hostConnectionId: ""
  };
}
export const MsgSubmitAutoTx = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx",
  is(o: any): o is MsgSubmitAutoTx {
    return o && (o.$typeUrl === MsgSubmitAutoTx.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.duration === "string" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.connectionId === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is MsgSubmitAutoTxSDKType {
    return o && (o.$typeUrl === MsgSubmitAutoTx.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is MsgSubmitAutoTxAmino {
    return o && (o.$typeUrl === MsgSubmitAutoTx.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  encode(message: MsgSubmitAutoTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(34).fork()).ldelim();
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
    if (message.connectionId !== "") {
      writer.uint32(82).string(message.connectionId);
    }
    if (message.hostConnectionId !== "") {
      writer.uint32(90).string(message.hostConnectionId);
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
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
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
          message.connectionId = reader.string();
          break;
        case 11:
          message.hostConnectionId = reader.string();
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
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    message.connectionId = object.connectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitAutoTxAmino): MsgSubmitAutoTx {
    const message = createBaseMsgSubmitAutoTx();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.start_at !== undefined && object.start_at !== null) {
      message.startAt = BigInt(object.start_at);
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    }
    message.feeFunds = object.fee_funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ExecutionConfiguration.fromAmino(object.configuration);
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.host_connection_id !== undefined && object.host_connection_id !== null) {
      message.hostConnectionId = object.host_connection_id;
    }
    return message;
  },
  toAmino(message: MsgSubmitAutoTx): MsgSubmitAutoTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.label = message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
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
    obj.connection_id = message.connectionId;
    obj.host_connection_id = message.hostConnectionId;
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
GlobalDecoderRegistry.register(MsgSubmitAutoTx.typeUrl, MsgSubmitAutoTx);
function createBaseMsgSubmitAutoTxResponse(): MsgSubmitAutoTxResponse {
  return {};
}
export const MsgSubmitAutoTxResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTxResponse",
  is(o: any): o is MsgSubmitAutoTxResponse {
    return o && o.$typeUrl === MsgSubmitAutoTxResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitAutoTxResponseSDKType {
    return o && o.$typeUrl === MsgSubmitAutoTxResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitAutoTxResponseAmino {
    return o && o.$typeUrl === MsgSubmitAutoTxResponse.typeUrl;
  },
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
    const message = createBaseMsgSubmitAutoTxResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgSubmitAutoTxResponse.typeUrl, MsgSubmitAutoTxResponse);
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
    configuration: undefined,
    version: "",
    hostConnectionId: ""
  };
}
export const MsgRegisterAccountAndSubmitAutoTx = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
  is(o: any): o is MsgRegisterAccountAndSubmitAutoTx {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitAutoTx.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.duration === "string" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.version === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is MsgRegisterAccountAndSubmitAutoTxSDKType {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitAutoTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.version === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is MsgRegisterAccountAndSubmitAutoTxAmino {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitAutoTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.version === "string" && typeof o.host_connection_id === "string");
  },
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
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(34).fork()).ldelim();
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
    if (message.hostConnectionId !== "") {
      writer.uint32(90).string(message.hostConnectionId);
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
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
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
        case 11:
          message.hostConnectionId = reader.string();
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
    message.msgs = object.msgs?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    message.version = object.version ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAccountAndSubmitAutoTxAmino): MsgRegisterAccountAndSubmitAutoTx {
    const message = createBaseMsgRegisterAccountAndSubmitAutoTx();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    }
    if (object.start_at !== undefined && object.start_at !== null) {
      message.startAt = BigInt(object.start_at);
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    }
    message.feeFunds = object.fee_funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ExecutionConfiguration.fromAmino(object.configuration);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.host_connection_id !== undefined && object.host_connection_id !== null) {
      message.hostConnectionId = object.host_connection_id;
    }
    return message;
  },
  toAmino(message: MsgRegisterAccountAndSubmitAutoTx): MsgRegisterAccountAndSubmitAutoTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    obj.label = message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
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
    obj.host_connection_id = message.hostConnectionId;
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
GlobalDecoderRegistry.register(MsgRegisterAccountAndSubmitAutoTx.typeUrl, MsgRegisterAccountAndSubmitAutoTx);
function createBaseMsgRegisterAccountAndSubmitAutoTxResponse(): MsgRegisterAccountAndSubmitAutoTxResponse {
  return {};
}
export const MsgRegisterAccountAndSubmitAutoTxResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTxResponse",
  is(o: any): o is MsgRegisterAccountAndSubmitAutoTxResponse {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitAutoTxResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterAccountAndSubmitAutoTxResponseSDKType {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitAutoTxResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterAccountAndSubmitAutoTxResponseAmino {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitAutoTxResponse.typeUrl;
  },
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
    const message = createBaseMsgRegisterAccountAndSubmitAutoTxResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgRegisterAccountAndSubmitAutoTxResponse.typeUrl, MsgRegisterAccountAndSubmitAutoTxResponse);
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
    configuration: undefined
  };
}
export const MsgUpdateAutoTx = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx",
  is(o: any): o is MsgUpdateAutoTx {
    return o && (o.$typeUrl === MsgUpdateAutoTx.typeUrl || typeof o.owner === "string" && typeof o.txId === "bigint" && typeof o.connectionId === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.endTime === "bigint" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])));
  },
  isSDK(o: any): o is MsgUpdateAutoTxSDKType {
    return o && (o.$typeUrl === MsgUpdateAutoTx.typeUrl || typeof o.owner === "string" && typeof o.tx_id === "bigint" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.end_time === "bigint" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])));
  },
  isAmino(o: any): o is MsgUpdateAutoTxAmino {
    return o && (o.$typeUrl === MsgUpdateAutoTx.typeUrl || typeof o.owner === "string" && typeof o.tx_id === "bigint" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.end_time === "bigint" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])));
  },
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
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(42).fork()).ldelim();
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
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
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
    message.msgs = object.msgs?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateAutoTxAmino): MsgUpdateAutoTx {
    const message = createBaseMsgUpdateAutoTx();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = BigInt(object.tx_id);
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    if (object.start_at !== undefined && object.start_at !== null) {
      message.startAt = BigInt(object.start_at);
    }
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = object.interval;
    }
    message.feeFunds = object.fee_funds?.map(e => Coin.fromAmino(e)) || [];
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ExecutionConfiguration.fromAmino(object.configuration);
    }
    return message;
  },
  toAmino(message: MsgUpdateAutoTx): MsgUpdateAutoTxAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.tx_id = message.txId ? message.txId.toString() : undefined;
    obj.connection_id = message.connectionId;
    obj.label = message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
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
GlobalDecoderRegistry.register(MsgUpdateAutoTx.typeUrl, MsgUpdateAutoTx);
function createBaseMsgUpdateAutoTxResponse(): MsgUpdateAutoTxResponse {
  return {};
}
export const MsgUpdateAutoTxResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTxResponse",
  is(o: any): o is MsgUpdateAutoTxResponse {
    return o && o.$typeUrl === MsgUpdateAutoTxResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateAutoTxResponseSDKType {
    return o && o.$typeUrl === MsgUpdateAutoTxResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateAutoTxResponseAmino {
    return o && o.$typeUrl === MsgUpdateAutoTxResponse.typeUrl;
  },
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
    const message = createBaseMsgUpdateAutoTxResponse();
    return message;
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
GlobalDecoderRegistry.register(MsgUpdateAutoTxResponse.typeUrl, MsgUpdateAutoTxResponse);