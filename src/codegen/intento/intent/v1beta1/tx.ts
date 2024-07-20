import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecutionConfiguration, ExecutionConfigurationAmino, ExecutionConfigurationSDKType, HostedConfig, HostedConfigAmino, HostedConfigSDKType, ExecutionConditions, ExecutionConditionsAmino, ExecutionConditionsSDKType } from "./action";
import { HostFeeConfig, HostFeeConfigAmino, HostFeeConfigSDKType } from "./hostedaccount";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccount {
  owner: string;
  connectionId: string;
  version: string;
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount";
  value: Uint8Array;
}
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccountAmino {
  owner?: string;
  connection_id?: string;
  version?: string;
}
export interface MsgRegisterAccountAminoMsg {
  type: "/intento.intent.v1beta1.MsgRegisterAccount";
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
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseAmino {}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgRegisterAccountResponse";
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
  typeUrl: "/intento.intent.v1beta1.MsgSubmitTx";
  value: Uint8Array;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitTxAmino {
  owner?: string;
  connection_id?: string;
  msg?: AnyAmino;
}
export interface MsgSubmitTxAminoMsg {
  type: "/intento.intent.v1beta1.MsgSubmitTx";
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
  typeUrl: "/intento.intent.v1beta1.MsgSubmitTxResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseAmino {}
export interface MsgSubmitTxResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgSubmitTxResponse";
  value: MsgSubmitTxResponseAmino;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseSDKType {}
/** MsgSubmitAction creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitAction {
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
  /** optional for interchain account */
  connectionId: string;
  hostConnectionId: string;
  /** optional use of a hosted account */
  hostedConfig?: HostedConfig;
  conditions?: ExecutionConditions;
}
export interface MsgSubmitActionProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitAction";
  value: Uint8Array;
}
export type MsgSubmitActionEncoded = Omit<MsgSubmitAction, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** MsgSubmitAction creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitActionAmino {
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
  /** optional for interchain account */
  connection_id?: string;
  host_connection_id?: string;
  /** optional use of a hosted account */
  hosted_config?: HostedConfigAmino;
  conditions?: ExecutionConditionsAmino;
}
export interface MsgSubmitActionAminoMsg {
  type: "/intento.intent.v1beta1.MsgSubmitAction";
  value: MsgSubmitActionAmino;
}
/** MsgSubmitAction creates, submits and schedules an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgSubmitActionSDKType {
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
  hosted_config?: HostedConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitActionResponse {}
export interface MsgSubmitActionResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitActionResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitActionResponseAmino {}
export interface MsgSubmitActionResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgSubmitActionResponse";
  value: MsgSubmitActionResponseAmino;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitActionResponseSDKType {}
/** MsgRegisterAccountAndSubmitAction creates an interchain account, submits and schedules an arbitrary transaction msg to be executed by this interchain account */
export interface MsgRegisterAccountAndSubmitAction {
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
  conditions?: ExecutionConditions;
}
export interface MsgRegisterAccountAndSubmitActionProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction";
  value: Uint8Array;
}
export type MsgRegisterAccountAndSubmitActionEncoded = Omit<MsgRegisterAccountAndSubmitAction, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** MsgRegisterAccountAndSubmitAction creates an interchain account, submits and schedules an arbitrary transaction msg to be executed by this interchain account */
export interface MsgRegisterAccountAndSubmitActionAmino {
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
  conditions?: ExecutionConditionsAmino;
}
export interface MsgRegisterAccountAndSubmitActionAminoMsg {
  type: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction";
  value: MsgRegisterAccountAndSubmitActionAmino;
}
/** MsgRegisterAccountAndSubmitAction creates an interchain account, submits and schedules an arbitrary transaction msg to be executed by this interchain account */
export interface MsgRegisterAccountAndSubmitActionSDKType {
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
  conditions?: ExecutionConditionsSDKType;
}
/** MsgRegisterAccountAndSubmitActionResponse defines the MsgSubmitTx response type */
export interface MsgRegisterAccountAndSubmitActionResponse {}
export interface MsgRegisterAccountAndSubmitActionResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitActionResponse";
  value: Uint8Array;
}
/** MsgRegisterAccountAndSubmitActionResponse defines the MsgSubmitTx response type */
export interface MsgRegisterAccountAndSubmitActionResponseAmino {}
export interface MsgRegisterAccountAndSubmitActionResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitActionResponse";
  value: MsgRegisterAccountAndSubmitActionResponseAmino;
}
/** MsgRegisterAccountAndSubmitActionResponse defines the MsgSubmitTx response type */
export interface MsgRegisterAccountAndSubmitActionResponseSDKType {}
/** MsgUpdateAction updates an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgUpdateAction {
  owner: string;
  id: bigint;
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
  hostedConfig?: HostedConfig;
  conditions?: ExecutionConditions;
}
export interface MsgUpdateActionProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateAction";
  value: Uint8Array;
}
export type MsgUpdateActionEncoded = Omit<MsgUpdateAction, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** MsgUpdateAction updates an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgUpdateActionAmino {
  owner?: string;
  id?: string;
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
  hosted_config?: HostedConfigAmino;
  conditions?: ExecutionConditionsAmino;
}
export interface MsgUpdateActionAminoMsg {
  type: "/intento.intent.v1beta1.MsgUpdateAction";
  value: MsgUpdateActionAmino;
}
/** MsgUpdateAction updates an arbitrary transaction msg to be executed locally or using an interchain account */
export interface MsgUpdateActionSDKType {
  owner: string;
  id: bigint;
  connection_id: string;
  label: string;
  msgs: (AnySDKType)[];
  end_time: bigint;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration?: ExecutionConfigurationSDKType;
  hosted_config?: HostedConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateActionResponse {}
export interface MsgUpdateActionResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateActionResponse";
  value: Uint8Array;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateActionResponseAmino {}
export interface MsgUpdateActionResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgUpdateActionResponse";
  value: MsgUpdateActionResponseAmino;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateActionResponseSDKType {}
export interface MsgCreateHostedAccount {
  creator: string;
  connectionId: string;
  hostConnectionId: string;
  version: string;
  feeCoinsSuported: Coin[];
}
export interface MsgCreateHostedAccountProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount";
  value: Uint8Array;
}
export interface MsgCreateHostedAccountAmino {
  creator?: string;
  connection_id?: string;
  host_connection_id?: string;
  version?: string;
  fee_coins_suported?: CoinAmino[];
}
export interface MsgCreateHostedAccountAminoMsg {
  type: "/intento.intent.v1beta1.MsgCreateHostedAccount";
  value: MsgCreateHostedAccountAmino;
}
export interface MsgCreateHostedAccountSDKType {
  creator: string;
  connection_id: string;
  host_connection_id: string;
  version: string;
  fee_coins_suported: CoinSDKType[];
}
export interface MsgCreateHostedAccountResponse {
  address: string;
}
export interface MsgCreateHostedAccountResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccountResponse";
  value: Uint8Array;
}
export interface MsgCreateHostedAccountResponseAmino {
  address?: string;
}
export interface MsgCreateHostedAccountResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgCreateHostedAccountResponse";
  value: MsgCreateHostedAccountResponseAmino;
}
export interface MsgCreateHostedAccountResponseSDKType {
  address: string;
}
export interface MsgUpdateHostedAccount {
  admin: string;
  hostedAddress: string;
  connectionId: string;
  hostConnectionId: string;
  hostFeeConfig?: HostFeeConfig;
}
export interface MsgUpdateHostedAccountProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount";
  value: Uint8Array;
}
export interface MsgUpdateHostedAccountAmino {
  admin?: string;
  hosted_address?: string;
  connection_id?: string;
  host_connection_id?: string;
  host_fee_config?: HostFeeConfigAmino;
}
export interface MsgUpdateHostedAccountAminoMsg {
  type: "/intento.intent.v1beta1.MsgUpdateHostedAccount";
  value: MsgUpdateHostedAccountAmino;
}
export interface MsgUpdateHostedAccountSDKType {
  admin: string;
  hosted_address: string;
  connection_id: string;
  host_connection_id: string;
  host_fee_config?: HostFeeConfigSDKType;
}
export interface MsgUpdateHostedAccountResponse {}
export interface MsgUpdateHostedAccountResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccountResponse";
  value: Uint8Array;
}
export interface MsgUpdateHostedAccountResponseAmino {}
export interface MsgUpdateHostedAccountResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgUpdateHostedAccountResponse";
  value: MsgUpdateHostedAccountResponseAmino;
}
export interface MsgUpdateHostedAccountResponseSDKType {}
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}
export const MsgRegisterAccount = {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
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
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.version = message.version === "" ? undefined : message.version;
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
      typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
      value: MsgRegisterAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAccount.typeUrl, MsgRegisterAccount);
function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return {};
}
export const MsgRegisterAccountResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountResponse",
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
      typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountResponse",
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
  typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
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
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
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
      typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
      value: MsgSubmitTx.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitTx.typeUrl, MsgSubmitTx);
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {};
}
export const MsgSubmitTxResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitTxResponse",
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
      typeUrl: "/intento.intent.v1beta1.MsgSubmitTxResponse",
      value: MsgSubmitTxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitTxResponse.typeUrl, MsgSubmitTxResponse);
function createBaseMsgSubmitAction(): MsgSubmitAction {
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
    hostConnectionId: "",
    hostedConfig: undefined,
    conditions: undefined
  };
}
export const MsgSubmitAction = {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
  is(o: any): o is MsgSubmitAction {
    return o && (o.$typeUrl === MsgSubmitAction.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.duration === "string" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.connectionId === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is MsgSubmitActionSDKType {
    return o && (o.$typeUrl === MsgSubmitAction.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is MsgSubmitActionAmino {
    return o && (o.$typeUrl === MsgSubmitAction.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  encode(message: MsgSubmitAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.hostedConfig !== undefined) {
      HostedConfig.encode(message.hostedConfig, writer.uint32(98).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ExecutionConditions.encode(message.conditions, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitAction();
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
        case 12:
          message.hostedConfig = HostedConfig.decode(reader, reader.uint32());
          break;
        case 14:
          message.conditions = ExecutionConditions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitAction>): MsgSubmitAction {
    const message = createBaseMsgSubmitAction();
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
    message.hostedConfig = object.hostedConfig !== undefined && object.hostedConfig !== null ? HostedConfig.fromPartial(object.hostedConfig) : undefined;
    message.conditions = object.conditions !== undefined && object.conditions !== null ? ExecutionConditions.fromPartial(object.conditions) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitActionAmino): MsgSubmitAction {
    const message = createBaseMsgSubmitAction();
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
    if (object.hosted_config !== undefined && object.hosted_config !== null) {
      message.hostedConfig = HostedConfig.fromAmino(object.hosted_config);
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      message.conditions = ExecutionConditions.fromAmino(object.conditions);
    }
    return message;
  },
  toAmino(message: MsgSubmitAction): MsgSubmitActionAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.label = message.label === "" ? undefined : message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.start_at = message.startAt !== BigInt(0) ? message.startAt.toString() : undefined;
    obj.interval = message.interval === "" ? undefined : message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = message.feeFunds;
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.host_connection_id = message.hostConnectionId === "" ? undefined : message.hostConnectionId;
    obj.hosted_config = message.hostedConfig ? HostedConfig.toAmino(message.hostedConfig) : undefined;
    obj.conditions = message.conditions ? ExecutionConditions.toAmino(message.conditions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitActionAminoMsg): MsgSubmitAction {
    return MsgSubmitAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitActionProtoMsg): MsgSubmitAction {
    return MsgSubmitAction.decode(message.value);
  },
  toProto(message: MsgSubmitAction): Uint8Array {
    return MsgSubmitAction.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitAction): MsgSubmitActionProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
      value: MsgSubmitAction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitAction.typeUrl, MsgSubmitAction);
function createBaseMsgSubmitActionResponse(): MsgSubmitActionResponse {
  return {};
}
export const MsgSubmitActionResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitActionResponse",
  is(o: any): o is MsgSubmitActionResponse {
    return o && o.$typeUrl === MsgSubmitActionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitActionResponseSDKType {
    return o && o.$typeUrl === MsgSubmitActionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitActionResponseAmino {
    return o && o.$typeUrl === MsgSubmitActionResponse.typeUrl;
  },
  encode(_: MsgSubmitActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitActionResponse();
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
  fromPartial(_: Partial<MsgSubmitActionResponse>): MsgSubmitActionResponse {
    const message = createBaseMsgSubmitActionResponse();
    return message;
  },
  fromAmino(_: MsgSubmitActionResponseAmino): MsgSubmitActionResponse {
    const message = createBaseMsgSubmitActionResponse();
    return message;
  },
  toAmino(_: MsgSubmitActionResponse): MsgSubmitActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitActionResponseAminoMsg): MsgSubmitActionResponse {
    return MsgSubmitActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitActionResponseProtoMsg): MsgSubmitActionResponse {
    return MsgSubmitActionResponse.decode(message.value);
  },
  toProto(message: MsgSubmitActionResponse): Uint8Array {
    return MsgSubmitActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitActionResponse): MsgSubmitActionResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgSubmitActionResponse",
      value: MsgSubmitActionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitActionResponse.typeUrl, MsgSubmitActionResponse);
function createBaseMsgRegisterAccountAndSubmitAction(): MsgRegisterAccountAndSubmitAction {
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
    hostConnectionId: "",
    conditions: undefined
  };
}
export const MsgRegisterAccountAndSubmitAction = {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
  is(o: any): o is MsgRegisterAccountAndSubmitAction {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitAction.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.duration === "string" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.version === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is MsgRegisterAccountAndSubmitActionSDKType {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitAction.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.version === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is MsgRegisterAccountAndSubmitActionAmino {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitAction.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.version === "string" && typeof o.host_connection_id === "string");
  },
  encode(message: MsgRegisterAccountAndSubmitAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.conditions !== undefined) {
      ExecutionConditions.encode(message.conditions, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountAndSubmitAction();
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
        case 12:
          message.conditions = ExecutionConditions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRegisterAccountAndSubmitAction>): MsgRegisterAccountAndSubmitAction {
    const message = createBaseMsgRegisterAccountAndSubmitAction();
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
    message.conditions = object.conditions !== undefined && object.conditions !== null ? ExecutionConditions.fromPartial(object.conditions) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterAccountAndSubmitActionAmino): MsgRegisterAccountAndSubmitAction {
    const message = createBaseMsgRegisterAccountAndSubmitAction();
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
    if (object.conditions !== undefined && object.conditions !== null) {
      message.conditions = ExecutionConditions.fromAmino(object.conditions);
    }
    return message;
  },
  toAmino(message: MsgRegisterAccountAndSubmitAction): MsgRegisterAccountAndSubmitActionAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.label = message.label === "" ? undefined : message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.start_at = message.startAt !== BigInt(0) ? message.startAt.toString() : undefined;
    obj.interval = message.interval === "" ? undefined : message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = message.feeFunds;
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.version = message.version === "" ? undefined : message.version;
    obj.host_connection_id = message.hostConnectionId === "" ? undefined : message.hostConnectionId;
    obj.conditions = message.conditions ? ExecutionConditions.toAmino(message.conditions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAndSubmitActionAminoMsg): MsgRegisterAccountAndSubmitAction {
    return MsgRegisterAccountAndSubmitAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountAndSubmitActionProtoMsg): MsgRegisterAccountAndSubmitAction {
    return MsgRegisterAccountAndSubmitAction.decode(message.value);
  },
  toProto(message: MsgRegisterAccountAndSubmitAction): Uint8Array {
    return MsgRegisterAccountAndSubmitAction.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountAndSubmitAction): MsgRegisterAccountAndSubmitActionProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
      value: MsgRegisterAccountAndSubmitAction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAccountAndSubmitAction.typeUrl, MsgRegisterAccountAndSubmitAction);
function createBaseMsgRegisterAccountAndSubmitActionResponse(): MsgRegisterAccountAndSubmitActionResponse {
  return {};
}
export const MsgRegisterAccountAndSubmitActionResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitActionResponse",
  is(o: any): o is MsgRegisterAccountAndSubmitActionResponse {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitActionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterAccountAndSubmitActionResponseSDKType {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitActionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterAccountAndSubmitActionResponseAmino {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitActionResponse.typeUrl;
  },
  encode(_: MsgRegisterAccountAndSubmitActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountAndSubmitActionResponse();
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
  fromPartial(_: Partial<MsgRegisterAccountAndSubmitActionResponse>): MsgRegisterAccountAndSubmitActionResponse {
    const message = createBaseMsgRegisterAccountAndSubmitActionResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAccountAndSubmitActionResponseAmino): MsgRegisterAccountAndSubmitActionResponse {
    const message = createBaseMsgRegisterAccountAndSubmitActionResponse();
    return message;
  },
  toAmino(_: MsgRegisterAccountAndSubmitActionResponse): MsgRegisterAccountAndSubmitActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAndSubmitActionResponseAminoMsg): MsgRegisterAccountAndSubmitActionResponse {
    return MsgRegisterAccountAndSubmitActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountAndSubmitActionResponseProtoMsg): MsgRegisterAccountAndSubmitActionResponse {
    return MsgRegisterAccountAndSubmitActionResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountAndSubmitActionResponse): Uint8Array {
    return MsgRegisterAccountAndSubmitActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountAndSubmitActionResponse): MsgRegisterAccountAndSubmitActionResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitActionResponse",
      value: MsgRegisterAccountAndSubmitActionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAccountAndSubmitActionResponse.typeUrl, MsgRegisterAccountAndSubmitActionResponse);
function createBaseMsgUpdateAction(): MsgUpdateAction {
  return {
    owner: "",
    id: BigInt(0),
    connectionId: "",
    label: "",
    msgs: [],
    endTime: BigInt(0),
    startAt: BigInt(0),
    interval: "",
    feeFunds: [],
    configuration: undefined,
    hostedConfig: undefined,
    conditions: undefined
  };
}
export const MsgUpdateAction = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
  is(o: any): o is MsgUpdateAction {
    return o && (o.$typeUrl === MsgUpdateAction.typeUrl || typeof o.owner === "string" && typeof o.id === "bigint" && typeof o.connectionId === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.endTime === "bigint" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])));
  },
  isSDK(o: any): o is MsgUpdateActionSDKType {
    return o && (o.$typeUrl === MsgUpdateAction.typeUrl || typeof o.owner === "string" && typeof o.id === "bigint" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.end_time === "bigint" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])));
  },
  isAmino(o: any): o is MsgUpdateActionAmino {
    return o && (o.$typeUrl === MsgUpdateAction.typeUrl || typeof o.owner === "string" && typeof o.id === "bigint" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.end_time === "bigint" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])));
  },
  encode(message: MsgUpdateAction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
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
    if (message.hostedConfig !== undefined) {
      HostedConfig.encode(message.hostedConfig, writer.uint32(90).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ExecutionConditions.encode(message.conditions, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
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
        case 11:
          message.hostedConfig = HostedConfig.decode(reader, reader.uint32());
          break;
        case 12:
          message.conditions = ExecutionConditions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateAction>): MsgUpdateAction {
    const message = createBaseMsgUpdateAction();
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    message.hostedConfig = object.hostedConfig !== undefined && object.hostedConfig !== null ? HostedConfig.fromPartial(object.hostedConfig) : undefined;
    message.conditions = object.conditions !== undefined && object.conditions !== null ? ExecutionConditions.fromPartial(object.conditions) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateActionAmino): MsgUpdateAction {
    const message = createBaseMsgUpdateAction();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
    if (object.hosted_config !== undefined && object.hosted_config !== null) {
      message.hostedConfig = HostedConfig.fromAmino(object.hosted_config);
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      message.conditions = ExecutionConditions.fromAmino(object.conditions);
    }
    return message;
  },
  toAmino(message: MsgUpdateAction): MsgUpdateActionAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.label = message.label === "" ? undefined : message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime.toString() : undefined;
    obj.start_at = message.startAt !== BigInt(0) ? message.startAt.toString() : undefined;
    obj.interval = message.interval === "" ? undefined : message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = message.feeFunds;
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.hosted_config = message.hostedConfig ? HostedConfig.toAmino(message.hostedConfig) : undefined;
    obj.conditions = message.conditions ? ExecutionConditions.toAmino(message.conditions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionAminoMsg): MsgUpdateAction {
    return MsgUpdateAction.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionProtoMsg): MsgUpdateAction {
    return MsgUpdateAction.decode(message.value);
  },
  toProto(message: MsgUpdateAction): Uint8Array {
    return MsgUpdateAction.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAction): MsgUpdateActionProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
      value: MsgUpdateAction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAction.typeUrl, MsgUpdateAction);
function createBaseMsgUpdateActionResponse(): MsgUpdateActionResponse {
  return {};
}
export const MsgUpdateActionResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateActionResponse",
  is(o: any): o is MsgUpdateActionResponse {
    return o && o.$typeUrl === MsgUpdateActionResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateActionResponseSDKType {
    return o && o.$typeUrl === MsgUpdateActionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateActionResponseAmino {
    return o && o.$typeUrl === MsgUpdateActionResponse.typeUrl;
  },
  encode(_: MsgUpdateActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActionResponse();
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
  fromPartial(_: Partial<MsgUpdateActionResponse>): MsgUpdateActionResponse {
    const message = createBaseMsgUpdateActionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateActionResponseAmino): MsgUpdateActionResponse {
    const message = createBaseMsgUpdateActionResponse();
    return message;
  },
  toAmino(_: MsgUpdateActionResponse): MsgUpdateActionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActionResponseAminoMsg): MsgUpdateActionResponse {
    return MsgUpdateActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActionResponseProtoMsg): MsgUpdateActionResponse {
    return MsgUpdateActionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateActionResponse): Uint8Array {
    return MsgUpdateActionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActionResponse): MsgUpdateActionResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgUpdateActionResponse",
      value: MsgUpdateActionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateActionResponse.typeUrl, MsgUpdateActionResponse);
function createBaseMsgCreateHostedAccount(): MsgCreateHostedAccount {
  return {
    creator: "",
    connectionId: "",
    hostConnectionId: "",
    version: "",
    feeCoinsSuported: []
  };
}
export const MsgCreateHostedAccount = {
  typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
  is(o: any): o is MsgCreateHostedAccount {
    return o && (o.$typeUrl === MsgCreateHostedAccount.typeUrl || typeof o.creator === "string" && typeof o.connectionId === "string" && typeof o.hostConnectionId === "string" && typeof o.version === "string" && Array.isArray(o.feeCoinsSuported) && (!o.feeCoinsSuported.length || Coin.is(o.feeCoinsSuported[0])));
  },
  isSDK(o: any): o is MsgCreateHostedAccountSDKType {
    return o && (o.$typeUrl === MsgCreateHostedAccount.typeUrl || typeof o.creator === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string" && typeof o.version === "string" && Array.isArray(o.fee_coins_suported) && (!o.fee_coins_suported.length || Coin.isSDK(o.fee_coins_suported[0])));
  },
  isAmino(o: any): o is MsgCreateHostedAccountAmino {
    return o && (o.$typeUrl === MsgCreateHostedAccount.typeUrl || typeof o.creator === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string" && typeof o.version === "string" && Array.isArray(o.fee_coins_suported) && (!o.fee_coins_suported.length || Coin.isAmino(o.fee_coins_suported[0])));
  },
  encode(message: MsgCreateHostedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.hostConnectionId !== "") {
      writer.uint32(26).string(message.hostConnectionId);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    for (const v of message.feeCoinsSuported) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateHostedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHostedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.hostConnectionId = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.feeCoinsSuported.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateHostedAccount>): MsgCreateHostedAccount {
    const message = createBaseMsgCreateHostedAccount();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    message.version = object.version ?? "";
    message.feeCoinsSuported = object.feeCoinsSuported?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateHostedAccountAmino): MsgCreateHostedAccount {
    const message = createBaseMsgCreateHostedAccount();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.host_connection_id !== undefined && object.host_connection_id !== null) {
      message.hostConnectionId = object.host_connection_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    message.feeCoinsSuported = object.fee_coins_suported?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateHostedAccount): MsgCreateHostedAccountAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.host_connection_id = message.hostConnectionId === "" ? undefined : message.hostConnectionId;
    obj.version = message.version === "" ? undefined : message.version;
    if (message.feeCoinsSuported) {
      obj.fee_coins_suported = message.feeCoinsSuported.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_coins_suported = message.feeCoinsSuported;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateHostedAccountAminoMsg): MsgCreateHostedAccount {
    return MsgCreateHostedAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateHostedAccountProtoMsg): MsgCreateHostedAccount {
    return MsgCreateHostedAccount.decode(message.value);
  },
  toProto(message: MsgCreateHostedAccount): Uint8Array {
    return MsgCreateHostedAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateHostedAccount): MsgCreateHostedAccountProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
      value: MsgCreateHostedAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateHostedAccount.typeUrl, MsgCreateHostedAccount);
function createBaseMsgCreateHostedAccountResponse(): MsgCreateHostedAccountResponse {
  return {
    address: ""
  };
}
export const MsgCreateHostedAccountResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccountResponse",
  is(o: any): o is MsgCreateHostedAccountResponse {
    return o && (o.$typeUrl === MsgCreateHostedAccountResponse.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is MsgCreateHostedAccountResponseSDKType {
    return o && (o.$typeUrl === MsgCreateHostedAccountResponse.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is MsgCreateHostedAccountResponseAmino {
    return o && (o.$typeUrl === MsgCreateHostedAccountResponse.typeUrl || typeof o.address === "string");
  },
  encode(message: MsgCreateHostedAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateHostedAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateHostedAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateHostedAccountResponse>): MsgCreateHostedAccountResponse {
    const message = createBaseMsgCreateHostedAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateHostedAccountResponseAmino): MsgCreateHostedAccountResponse {
    const message = createBaseMsgCreateHostedAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateHostedAccountResponse): MsgCreateHostedAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateHostedAccountResponseAminoMsg): MsgCreateHostedAccountResponse {
    return MsgCreateHostedAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateHostedAccountResponseProtoMsg): MsgCreateHostedAccountResponse {
    return MsgCreateHostedAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateHostedAccountResponse): Uint8Array {
    return MsgCreateHostedAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateHostedAccountResponse): MsgCreateHostedAccountResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccountResponse",
      value: MsgCreateHostedAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateHostedAccountResponse.typeUrl, MsgCreateHostedAccountResponse);
function createBaseMsgUpdateHostedAccount(): MsgUpdateHostedAccount {
  return {
    admin: "",
    hostedAddress: "",
    connectionId: "",
    hostConnectionId: "",
    hostFeeConfig: undefined
  };
}
export const MsgUpdateHostedAccount = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
  is(o: any): o is MsgUpdateHostedAccount {
    return o && (o.$typeUrl === MsgUpdateHostedAccount.typeUrl || typeof o.admin === "string" && typeof o.hostedAddress === "string" && typeof o.connectionId === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is MsgUpdateHostedAccountSDKType {
    return o && (o.$typeUrl === MsgUpdateHostedAccount.typeUrl || typeof o.admin === "string" && typeof o.hosted_address === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is MsgUpdateHostedAccountAmino {
    return o && (o.$typeUrl === MsgUpdateHostedAccount.typeUrl || typeof o.admin === "string" && typeof o.hosted_address === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  encode(message: MsgUpdateHostedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.hostedAddress !== "") {
      writer.uint32(18).string(message.hostedAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    if (message.hostConnectionId !== "") {
      writer.uint32(34).string(message.hostConnectionId);
    }
    if (message.hostFeeConfig !== undefined) {
      HostFeeConfig.encode(message.hostFeeConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.hostedAddress = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.hostConnectionId = reader.string();
          break;
        case 5:
          message.hostFeeConfig = HostFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateHostedAccount>): MsgUpdateHostedAccount {
    const message = createBaseMsgUpdateHostedAccount();
    message.admin = object.admin ?? "";
    message.hostedAddress = object.hostedAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    message.hostFeeConfig = object.hostFeeConfig !== undefined && object.hostFeeConfig !== null ? HostFeeConfig.fromPartial(object.hostFeeConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateHostedAccountAmino): MsgUpdateHostedAccount {
    const message = createBaseMsgUpdateHostedAccount();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.hosted_address !== undefined && object.hosted_address !== null) {
      message.hostedAddress = object.hosted_address;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.host_connection_id !== undefined && object.host_connection_id !== null) {
      message.hostConnectionId = object.host_connection_id;
    }
    if (object.host_fee_config !== undefined && object.host_fee_config !== null) {
      message.hostFeeConfig = HostFeeConfig.fromAmino(object.host_fee_config);
    }
    return message;
  },
  toAmino(message: MsgUpdateHostedAccount): MsgUpdateHostedAccountAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.hosted_address = message.hostedAddress === "" ? undefined : message.hostedAddress;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.host_connection_id = message.hostConnectionId === "" ? undefined : message.hostConnectionId;
    obj.host_fee_config = message.hostFeeConfig ? HostFeeConfig.toAmino(message.hostFeeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostedAccountAminoMsg): MsgUpdateHostedAccount {
    return MsgUpdateHostedAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHostedAccountProtoMsg): MsgUpdateHostedAccount {
    return MsgUpdateHostedAccount.decode(message.value);
  },
  toProto(message: MsgUpdateHostedAccount): Uint8Array {
    return MsgUpdateHostedAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostedAccount): MsgUpdateHostedAccountProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
      value: MsgUpdateHostedAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateHostedAccount.typeUrl, MsgUpdateHostedAccount);
function createBaseMsgUpdateHostedAccountResponse(): MsgUpdateHostedAccountResponse {
  return {};
}
export const MsgUpdateHostedAccountResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccountResponse",
  is(o: any): o is MsgUpdateHostedAccountResponse {
    return o && o.$typeUrl === MsgUpdateHostedAccountResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateHostedAccountResponseSDKType {
    return o && o.$typeUrl === MsgUpdateHostedAccountResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateHostedAccountResponseAmino {
    return o && o.$typeUrl === MsgUpdateHostedAccountResponse.typeUrl;
  },
  encode(_: MsgUpdateHostedAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateHostedAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateHostedAccountResponse();
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
  fromPartial(_: Partial<MsgUpdateHostedAccountResponse>): MsgUpdateHostedAccountResponse {
    const message = createBaseMsgUpdateHostedAccountResponse();
    return message;
  },
  fromAmino(_: MsgUpdateHostedAccountResponseAmino): MsgUpdateHostedAccountResponse {
    const message = createBaseMsgUpdateHostedAccountResponse();
    return message;
  },
  toAmino(_: MsgUpdateHostedAccountResponse): MsgUpdateHostedAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostedAccountResponseAminoMsg): MsgUpdateHostedAccountResponse {
    return MsgUpdateHostedAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateHostedAccountResponseProtoMsg): MsgUpdateHostedAccountResponse {
    return MsgUpdateHostedAccountResponse.decode(message.value);
  },
  toProto(message: MsgUpdateHostedAccountResponse): Uint8Array {
    return MsgUpdateHostedAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateHostedAccountResponse): MsgUpdateHostedAccountResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccountResponse",
      value: MsgUpdateHostedAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateHostedAccountResponse.typeUrl, MsgUpdateHostedAccountResponse);