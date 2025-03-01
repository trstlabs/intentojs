import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecutionConfiguration, ExecutionConfigurationAmino, ExecutionConfigurationSDKType, HostedICAConfig, HostedICAConfigAmino, HostedICAConfigSDKType, ExecutionConditions, ExecutionConditionsAmino, ExecutionConditionsSDKType } from "./flow";
import { HostFeeConfig, HostFeeConfigAmino, HostFeeConfigSDKType } from "./hostedaccount";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgRegisterAccount registers an interchain account for the given owner over
 * the specified connection pair
 */
export interface MsgRegisterAccount {
  owner: string;
  connectionId: string;
  version: string;
}
export interface MsgRegisterAccountProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount";
  value: Uint8Array;
}
/**
 * MsgRegisterAccount registers an interchain account for the given owner over
 * the specified connection pair
 */
export interface MsgRegisterAccountAmino {
  owner?: string;
  connection_id?: string;
  version?: string;
}
export interface MsgRegisterAccountAminoMsg {
  type: "intent/MsgRegisterAccount";
  value: MsgRegisterAccountAmino;
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
/**
 * MsgSubmitTx creates and submits an arbitrary msg to be executed
 * locally or using an interchain account
 */
export interface MsgSubmitTx {
  owner: string;
  connectionId: string;
  msg?: Any;
}
export interface MsgSubmitTxProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitTx";
  value: Uint8Array;
}
/**
 * MsgSubmitTx creates and submits an arbitrary msg to be executed
 * locally or using an interchain account
 */
export interface MsgSubmitTxAmino {
  owner?: string;
  connection_id?: string;
  msg?: AnyAmino;
}
export interface MsgSubmitTxAminoMsg {
  type: "intent/MsgRegisterAccount";
  value: MsgSubmitTxAmino;
}
/**
 * MsgSubmitTx creates and submits an arbitrary msg to be executed
 * locally or using an interchain account
 */
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
/**
 * MsgSubmitFlow creates, submits and schedules msgs
 * to be executed locally or over IBC with conditions
 */
export interface MsgSubmitFlow {
  owner: string;
  label: string;
  msgs: (Any)[] | Any[];
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
   * optional fees to be used for flow execution limiting the amount of fees
   * incurred
   */
  feeFunds: Coin[];
  /** optional configuration parameters */
  configuration?: ExecutionConfiguration;
  /** optional connection ID interchain account */
  connectionId: string;
  /** optional use of a hosted account */
  hostedIcaConfig?: HostedICAConfig;
  conditions?: ExecutionConditions;
}
export interface MsgSubmitFlowProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow";
  value: Uint8Array;
}
export type MsgSubmitFlowEncoded = Omit<MsgSubmitFlow, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgSubmitFlow creates, submits and schedules msgs
 * to be executed locally or over IBC with conditions
 */
export interface MsgSubmitFlowAmino {
  owner?: string;
  label?: string;
  msgs?: AnyAmino[];
  /** duration defines the time that the code should run for */
  duration?: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  start_at?: string;
  /** interval defines the interval between auto_msg calls */
  interval?: string;
  /**
   * optional fees to be used for flow execution limiting the amount of fees
   * incurred
   */
  fee_funds?: CoinAmino[];
  /** optional configuration parameters */
  configuration?: ExecutionConfigurationAmino;
  /** optional connection ID interchain account */
  connection_id?: string;
  /** optional use of a hosted account */
  hosted_ica_config?: HostedICAConfigAmino;
  conditions?: ExecutionConditionsAmino;
}
export interface MsgSubmitFlowAminoMsg {
  type: "intent/MsgSubmitFlow";
  value: MsgSubmitFlowAmino;
}
/**
 * MsgSubmitFlow creates, submits and schedules msgs
 * to be executed locally or over IBC with conditions
 */
export interface MsgSubmitFlowSDKType {
  owner: string;
  label: string;
  msgs: (AnySDKType)[];
  duration: string;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration?: ExecutionConfigurationSDKType;
  connection_id: string;
  hosted_ica_config?: HostedICAConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitFlowResponse {}
export interface MsgSubmitFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitFlowResponse";
  value: Uint8Array;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitFlowResponseAmino {}
export interface MsgSubmitFlowResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgSubmitFlowResponse";
  value: MsgSubmitFlowResponseAmino;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitFlowResponseSDKType {}
/**
 * MsgRegisterAccountAndSubmitFlow creates an interchain account, submits and
 * schedules an arbitrary msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitFlow {
  owner: string;
  connectionId: string;
  label: string;
  msgs: (Any)[] | Any[];
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
   * optional fees to be used for flow execution limiting the amount of fees
   * incurred
   */
  feeFunds: Coin[];
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  configuration?: ExecutionConfiguration;
  version: string;
  hostConnectionId: string;
  conditions?: ExecutionConditions;
}
export interface MsgRegisterAccountAndSubmitFlowProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow";
  value: Uint8Array;
}
export type MsgRegisterAccountAndSubmitFlowEncoded = Omit<MsgRegisterAccountAndSubmitFlow, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgRegisterAccountAndSubmitFlow creates an interchain account, submits and
 * schedules an arbitrary msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitFlowAmino {
  owner?: string;
  connection_id?: string;
  label?: string;
  msgs?: AnyAmino[];
  /** duration defines the time that the code should run for */
  duration?: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  start_at?: string;
  /** interval defines the interval between auto_msg calls */
  interval?: string;
  /**
   * optional fees to be used for flow execution limiting the amount of fees
   * incurred
   */
  fee_funds?: CoinAmino[];
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  configuration?: ExecutionConfigurationAmino;
  version?: string;
  host_connection_id?: string;
  conditions?: ExecutionConditionsAmino;
}
export interface MsgRegisterAccountAndSubmitFlowAminoMsg {
  type: "intent/MsgRegisterAccountAndSubmitFlow";
  value: MsgRegisterAccountAndSubmitFlowAmino;
}
/**
 * MsgRegisterAccountAndSubmitFlow creates an interchain account, submits and
 * schedules an arbitrary msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitFlowSDKType {
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
/**
 * MsgRegisterAccountAndSubmitFlowResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitFlowResponse {}
export interface MsgRegisterAccountAndSubmitFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlowResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterAccountAndSubmitFlowResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitFlowResponseAmino {}
export interface MsgRegisterAccountAndSubmitFlowResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlowResponse";
  value: MsgRegisterAccountAndSubmitFlowResponseAmino;
}
/**
 * MsgRegisterAccountAndSubmitFlowResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitFlowResponseSDKType {}
/**
 * MsgUpdateFlow updates an arbitrary msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateFlow {
  owner: string;
  id: bigint;
  label: string;
  msgs: (Any)[] | Any[];
  /** end_time when set defines the time that the code should run for */
  endTime: bigint;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  startAt: bigint;
  /** interval defines the interval between auto_msg calls */
  interval: string;
  /** add fees for flow execution, optional */
  feeFunds: Coin[];
  configuration?: ExecutionConfiguration;
  connectionId: string;
  hostedIcaConfig?: HostedICAConfig;
  conditions?: ExecutionConditions;
}
export interface MsgUpdateFlowProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow";
  value: Uint8Array;
}
export type MsgUpdateFlowEncoded = Omit<MsgUpdateFlow, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgUpdateFlow updates an arbitrary msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateFlowAmino {
  owner?: string;
  id?: string;
  label?: string;
  msgs?: AnyAmino[];
  /** end_time when set defines the time that the code should run for */
  end_time?: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  start_at?: string;
  /** interval defines the interval between auto_msg calls */
  interval?: string;
  /** add fees for flow execution, optional */
  fee_funds?: CoinAmino[];
  configuration?: ExecutionConfigurationAmino;
  connection_id?: string;
  hosted_ica_config?: HostedICAConfigAmino;
  conditions?: ExecutionConditionsAmino;
}
export interface MsgUpdateFlowAminoMsg {
  type: "intent/MsgUpdateFlow";
  value: MsgUpdateFlowAmino;
}
/**
 * MsgUpdateFlow updates an arbitrary msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateFlowSDKType {
  owner: string;
  id: bigint;
  label: string;
  msgs: (AnySDKType)[];
  end_time: bigint;
  start_at: bigint;
  interval: string;
  fee_funds: CoinSDKType[];
  configuration?: ExecutionConfigurationSDKType;
  connection_id: string;
  hosted_ica_config?: HostedICAConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateFlowResponse {}
export interface MsgUpdateFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateFlowResponse";
  value: Uint8Array;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateFlowResponseAmino {}
export interface MsgUpdateFlowResponseAminoMsg {
  type: "/intento.intent.v1beta1.MsgUpdateFlowResponse";
  value: MsgUpdateFlowResponseAmino;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateFlowResponseSDKType {}
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
  type: "intent/MsgCreateHostedAccount";
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
  /** string connection_id = 3 [(gogoproto.customname) = "ConnectionID"]; */
  hostFeeConfig?: HostFeeConfig;
}
export interface MsgUpdateHostedAccountProtoMsg {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount";
  value: Uint8Array;
}
export interface MsgUpdateHostedAccountAmino {
  admin?: string;
  hosted_address?: string;
  /** string connection_id = 3 [(gogoproto.customname) = "ConnectionID"]; */
  host_fee_config?: HostFeeConfigAmino;
}
export interface MsgUpdateHostedAccountAminoMsg {
  type: "intent/MsgUpdateHostedAccount";
  value: MsgUpdateHostedAccountAmino;
}
export interface MsgUpdateHostedAccountSDKType {
  admin: string;
  hosted_address: string;
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
  aminoType: "intent/MsgRegisterAccount",
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
  fromJSON(object: any): MsgRegisterAccount {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message: MsgRegisterAccount): JsonSafe<MsgRegisterAccount> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.version !== undefined && (obj.version = message.version);
    return obj;
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
  toAminoMsg(message: MsgRegisterAccount): MsgRegisterAccountAminoMsg {
    return {
      type: "intent/MsgRegisterAccount",
      value: MsgRegisterAccount.toAmino(message)
    };
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
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterAccount.aminoType, MsgRegisterAccount.typeUrl);
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
  fromJSON(_: any): MsgRegisterAccountResponse {
    return {};
  },
  toJSON(_: MsgRegisterAccountResponse): JsonSafe<MsgRegisterAccountResponse> {
    const obj: any = {};
    return obj;
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
  aminoType: "intent/MsgRegisterAccount",
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
  fromJSON(object: any): MsgSubmitTx {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msg: isSet(object.msg) ? Any.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: MsgSubmitTx): JsonSafe<MsgSubmitTx> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.msg !== undefined && (obj.msg = message.msg ? Any.toJSON(message.msg) : undefined);
    return obj;
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
  toAminoMsg(message: MsgSubmitTx): MsgSubmitTxAminoMsg {
    return {
      type: "intent/MsgRegisterAccount",
      value: MsgSubmitTx.toAmino(message)
    };
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
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitTx.aminoType, MsgSubmitTx.typeUrl);
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
  fromJSON(_: any): MsgSubmitTxResponse {
    return {};
  },
  toJSON(_: MsgSubmitTxResponse): JsonSafe<MsgSubmitTxResponse> {
    const obj: any = {};
    return obj;
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
function createBaseMsgSubmitFlow(): MsgSubmitFlow {
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
    hostedIcaConfig: undefined,
    conditions: undefined
  };
}
export const MsgSubmitFlow = {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
  aminoType: "intent/MsgSubmitFlow",
  is(o: any): o is MsgSubmitFlow {
    return o && (o.$typeUrl === MsgSubmitFlow.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.duration === "string" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is MsgSubmitFlowSDKType {
    return o && (o.$typeUrl === MsgSubmitFlow.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is MsgSubmitFlowAmino {
    return o && (o.$typeUrl === MsgSubmitFlow.typeUrl || typeof o.owner === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.connection_id === "string");
  },
  encode(message: MsgSubmitFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== "") {
      writer.uint32(34).string(message.duration);
    }
    if (message.startAt !== BigInt(0)) {
      writer.uint32(40).uint64(message.startAt);
    }
    if (message.interval !== "") {
      writer.uint32(50).string(message.interval);
    }
    for (const v of message.feeFunds) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ExecutionConfiguration.encode(message.configuration, writer.uint32(66).fork()).ldelim();
    }
    if (message.connectionId !== "") {
      writer.uint32(74).string(message.connectionId);
    }
    if (message.hostedIcaConfig !== undefined) {
      HostedICAConfig.encode(message.hostedIcaConfig, writer.uint32(82).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ExecutionConditions.encode(message.conditions, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitFlow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 4:
          message.duration = reader.string();
          break;
        case 5:
          message.startAt = reader.uint64();
          break;
        case 6:
          message.interval = reader.string();
          break;
        case 7:
          message.feeFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.configuration = ExecutionConfiguration.decode(reader, reader.uint32());
          break;
        case 9:
          message.connectionId = reader.string();
          break;
        case 10:
          message.hostedIcaConfig = HostedICAConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.conditions = ExecutionConditions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitFlow {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      duration: isSet(object.duration) ? String(object.duration) : "",
      startAt: isSet(object.startAt) ? BigInt(object.startAt.toString()) : BigInt(0),
      interval: isSet(object.interval) ? String(object.interval) : "",
      feeFunds: Array.isArray(object?.feeFunds) ? object.feeFunds.map((e: any) => Coin.fromJSON(e)) : [],
      configuration: isSet(object.configuration) ? ExecutionConfiguration.fromJSON(object.configuration) : undefined,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      hostedIcaConfig: isSet(object.hostedIcaConfig) ? HostedICAConfig.fromJSON(object.hostedIcaConfig) : undefined,
      conditions: isSet(object.conditions) ? ExecutionConditions.fromJSON(object.conditions) : undefined
    };
  },
  toJSON(message: MsgSubmitFlow): JsonSafe<MsgSubmitFlow> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.label !== undefined && (obj.label = message.label);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.duration !== undefined && (obj.duration = message.duration);
    message.startAt !== undefined && (obj.startAt = (message.startAt || BigInt(0)).toString());
    message.interval !== undefined && (obj.interval = message.interval);
    if (message.feeFunds) {
      obj.feeFunds = message.feeFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeFunds = [];
    }
    message.configuration !== undefined && (obj.configuration = message.configuration ? ExecutionConfiguration.toJSON(message.configuration) : undefined);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.hostedIcaConfig !== undefined && (obj.hostedIcaConfig = message.hostedIcaConfig ? HostedICAConfig.toJSON(message.hostedIcaConfig) : undefined);
    message.conditions !== undefined && (obj.conditions = message.conditions ? ExecutionConditions.toJSON(message.conditions) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitFlow>): MsgSubmitFlow {
    const message = createBaseMsgSubmitFlow();
    message.owner = object.owner ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.duration = object.duration ?? "";
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    message.connectionId = object.connectionId ?? "";
    message.hostedIcaConfig = object.hostedIcaConfig !== undefined && object.hostedIcaConfig !== null ? HostedICAConfig.fromPartial(object.hostedIcaConfig) : undefined;
    message.conditions = object.conditions !== undefined && object.conditions !== null ? ExecutionConditions.fromPartial(object.conditions) : undefined;
    return message;
  },
  fromAmino(object: MsgSubmitFlowAmino): MsgSubmitFlow {
    const message = createBaseMsgSubmitFlow();
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
    if (object.hosted_ica_config !== undefined && object.hosted_ica_config !== null) {
      message.hostedIcaConfig = HostedICAConfig.fromAmino(object.hosted_ica_config);
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      message.conditions = ExecutionConditions.fromAmino(object.conditions);
    }
    return message;
  },
  toAmino(message: MsgSubmitFlow): MsgSubmitFlowAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.label = message.label === "" ? undefined : message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.duration = message.duration === "" ? undefined : message.duration;
    obj.start_at = message.startAt !== BigInt(0) ? message.startAt?.toString() : undefined;
    obj.interval = message.interval === "" ? undefined : message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = message.feeFunds;
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.hosted_ica_config = message.hostedIcaConfig ? HostedICAConfig.toAmino(message.hostedIcaConfig) : undefined;
    obj.conditions = message.conditions ? ExecutionConditions.toAmino(message.conditions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitFlowAminoMsg): MsgSubmitFlow {
    return MsgSubmitFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitFlow): MsgSubmitFlowAminoMsg {
    return {
      type: "intent/MsgSubmitFlow",
      value: MsgSubmitFlow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitFlowProtoMsg): MsgSubmitFlow {
    return MsgSubmitFlow.decode(message.value);
  },
  toProto(message: MsgSubmitFlow): Uint8Array {
    return MsgSubmitFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitFlow): MsgSubmitFlowProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
      value: MsgSubmitFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitFlow.typeUrl, MsgSubmitFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitFlow.aminoType, MsgSubmitFlow.typeUrl);
function createBaseMsgSubmitFlowResponse(): MsgSubmitFlowResponse {
  return {};
}
export const MsgSubmitFlowResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgSubmitFlowResponse",
  is(o: any): o is MsgSubmitFlowResponse {
    return o && o.$typeUrl === MsgSubmitFlowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitFlowResponseSDKType {
    return o && o.$typeUrl === MsgSubmitFlowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitFlowResponseAmino {
    return o && o.$typeUrl === MsgSubmitFlowResponse.typeUrl;
  },
  encode(_: MsgSubmitFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitFlowResponse();
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
  fromJSON(_: any): MsgSubmitFlowResponse {
    return {};
  },
  toJSON(_: MsgSubmitFlowResponse): JsonSafe<MsgSubmitFlowResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSubmitFlowResponse>): MsgSubmitFlowResponse {
    const message = createBaseMsgSubmitFlowResponse();
    return message;
  },
  fromAmino(_: MsgSubmitFlowResponseAmino): MsgSubmitFlowResponse {
    const message = createBaseMsgSubmitFlowResponse();
    return message;
  },
  toAmino(_: MsgSubmitFlowResponse): MsgSubmitFlowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitFlowResponseAminoMsg): MsgSubmitFlowResponse {
    return MsgSubmitFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitFlowResponseProtoMsg): MsgSubmitFlowResponse {
    return MsgSubmitFlowResponse.decode(message.value);
  },
  toProto(message: MsgSubmitFlowResponse): Uint8Array {
    return MsgSubmitFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitFlowResponse): MsgSubmitFlowResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgSubmitFlowResponse",
      value: MsgSubmitFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitFlowResponse.typeUrl, MsgSubmitFlowResponse);
function createBaseMsgRegisterAccountAndSubmitFlow(): MsgRegisterAccountAndSubmitFlow {
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
export const MsgRegisterAccountAndSubmitFlow = {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
  aminoType: "intent/MsgRegisterAccountAndSubmitFlow",
  is(o: any): o is MsgRegisterAccountAndSubmitFlow {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitFlow.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.duration === "string" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.version === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is MsgRegisterAccountAndSubmitFlowSDKType {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitFlow.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.version === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is MsgRegisterAccountAndSubmitFlowAmino {
    return o && (o.$typeUrl === MsgRegisterAccountAndSubmitFlow.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.duration === "string" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.version === "string" && typeof o.host_connection_id === "string");
  },
  encode(message: MsgRegisterAccountAndSubmitFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountAndSubmitFlow();
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
  fromJSON(object: any): MsgRegisterAccountAndSubmitFlow {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      duration: isSet(object.duration) ? String(object.duration) : "",
      startAt: isSet(object.startAt) ? BigInt(object.startAt.toString()) : BigInt(0),
      interval: isSet(object.interval) ? String(object.interval) : "",
      feeFunds: Array.isArray(object?.feeFunds) ? object.feeFunds.map((e: any) => Coin.fromJSON(e)) : [],
      configuration: isSet(object.configuration) ? ExecutionConfiguration.fromJSON(object.configuration) : undefined,
      version: isSet(object.version) ? String(object.version) : "",
      hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : "",
      conditions: isSet(object.conditions) ? ExecutionConditions.fromJSON(object.conditions) : undefined
    };
  },
  toJSON(message: MsgRegisterAccountAndSubmitFlow): JsonSafe<MsgRegisterAccountAndSubmitFlow> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.label !== undefined && (obj.label = message.label);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.duration !== undefined && (obj.duration = message.duration);
    message.startAt !== undefined && (obj.startAt = (message.startAt || BigInt(0)).toString());
    message.interval !== undefined && (obj.interval = message.interval);
    if (message.feeFunds) {
      obj.feeFunds = message.feeFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeFunds = [];
    }
    message.configuration !== undefined && (obj.configuration = message.configuration ? ExecutionConfiguration.toJSON(message.configuration) : undefined);
    message.version !== undefined && (obj.version = message.version);
    message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
    message.conditions !== undefined && (obj.conditions = message.conditions ? ExecutionConditions.toJSON(message.conditions) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterAccountAndSubmitFlow>): MsgRegisterAccountAndSubmitFlow {
    const message = createBaseMsgRegisterAccountAndSubmitFlow();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
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
  fromAmino(object: MsgRegisterAccountAndSubmitFlowAmino): MsgRegisterAccountAndSubmitFlow {
    const message = createBaseMsgRegisterAccountAndSubmitFlow();
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
  toAmino(message: MsgRegisterAccountAndSubmitFlow): MsgRegisterAccountAndSubmitFlowAmino {
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
    obj.start_at = message.startAt !== BigInt(0) ? message.startAt?.toString() : undefined;
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
  fromAminoMsg(object: MsgRegisterAccountAndSubmitFlowAminoMsg): MsgRegisterAccountAndSubmitFlow {
    return MsgRegisterAccountAndSubmitFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterAccountAndSubmitFlow): MsgRegisterAccountAndSubmitFlowAminoMsg {
    return {
      type: "intent/MsgRegisterAccountAndSubmitFlow",
      value: MsgRegisterAccountAndSubmitFlow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterAccountAndSubmitFlowProtoMsg): MsgRegisterAccountAndSubmitFlow {
    return MsgRegisterAccountAndSubmitFlow.decode(message.value);
  },
  toProto(message: MsgRegisterAccountAndSubmitFlow): Uint8Array {
    return MsgRegisterAccountAndSubmitFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountAndSubmitFlow): MsgRegisterAccountAndSubmitFlowProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
      value: MsgRegisterAccountAndSubmitFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAccountAndSubmitFlow.typeUrl, MsgRegisterAccountAndSubmitFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRegisterAccountAndSubmitFlow.aminoType, MsgRegisterAccountAndSubmitFlow.typeUrl);
function createBaseMsgRegisterAccountAndSubmitFlowResponse(): MsgRegisterAccountAndSubmitFlowResponse {
  return {};
}
export const MsgRegisterAccountAndSubmitFlowResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlowResponse",
  is(o: any): o is MsgRegisterAccountAndSubmitFlowResponse {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitFlowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterAccountAndSubmitFlowResponseSDKType {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitFlowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterAccountAndSubmitFlowResponseAmino {
    return o && o.$typeUrl === MsgRegisterAccountAndSubmitFlowResponse.typeUrl;
  },
  encode(_: MsgRegisterAccountAndSubmitFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountAndSubmitFlowResponse();
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
  fromJSON(_: any): MsgRegisterAccountAndSubmitFlowResponse {
    return {};
  },
  toJSON(_: MsgRegisterAccountAndSubmitFlowResponse): JsonSafe<MsgRegisterAccountAndSubmitFlowResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterAccountAndSubmitFlowResponse>): MsgRegisterAccountAndSubmitFlowResponse {
    const message = createBaseMsgRegisterAccountAndSubmitFlowResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAccountAndSubmitFlowResponseAmino): MsgRegisterAccountAndSubmitFlowResponse {
    const message = createBaseMsgRegisterAccountAndSubmitFlowResponse();
    return message;
  },
  toAmino(_: MsgRegisterAccountAndSubmitFlowResponse): MsgRegisterAccountAndSubmitFlowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAccountAndSubmitFlowResponseAminoMsg): MsgRegisterAccountAndSubmitFlowResponse {
    return MsgRegisterAccountAndSubmitFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAccountAndSubmitFlowResponseProtoMsg): MsgRegisterAccountAndSubmitFlowResponse {
    return MsgRegisterAccountAndSubmitFlowResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAccountAndSubmitFlowResponse): Uint8Array {
    return MsgRegisterAccountAndSubmitFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAccountAndSubmitFlowResponse): MsgRegisterAccountAndSubmitFlowResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlowResponse",
      value: MsgRegisterAccountAndSubmitFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterAccountAndSubmitFlowResponse.typeUrl, MsgRegisterAccountAndSubmitFlowResponse);
function createBaseMsgUpdateFlow(): MsgUpdateFlow {
  return {
    owner: "",
    id: BigInt(0),
    label: "",
    msgs: [],
    endTime: BigInt(0),
    startAt: BigInt(0),
    interval: "",
    feeFunds: [],
    configuration: undefined,
    connectionId: "",
    hostedIcaConfig: undefined,
    conditions: undefined
  };
}
export const MsgUpdateFlow = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
  aminoType: "intent/MsgUpdateFlow",
  is(o: any): o is MsgUpdateFlow {
    return o && (o.$typeUrl === MsgUpdateFlow.typeUrl || typeof o.owner === "string" && typeof o.id === "bigint" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && typeof o.endTime === "bigint" && typeof o.startAt === "bigint" && typeof o.interval === "string" && Array.isArray(o.feeFunds) && (!o.feeFunds.length || Coin.is(o.feeFunds[0])) && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is MsgUpdateFlowSDKType {
    return o && (o.$typeUrl === MsgUpdateFlow.typeUrl || typeof o.owner === "string" && typeof o.id === "bigint" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && typeof o.end_time === "bigint" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isSDK(o.fee_funds[0])) && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is MsgUpdateFlowAmino {
    return o && (o.$typeUrl === MsgUpdateFlow.typeUrl || typeof o.owner === "string" && typeof o.id === "bigint" && typeof o.label === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && typeof o.end_time === "bigint" && typeof o.start_at === "bigint" && typeof o.interval === "string" && Array.isArray(o.fee_funds) && (!o.fee_funds.length || Coin.isAmino(o.fee_funds[0])) && typeof o.connection_id === "string");
  },
  encode(message: MsgUpdateFlow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(40).uint64(message.endTime);
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
    if (message.hostedIcaConfig !== undefined) {
      HostedICAConfig.encode(message.hostedIcaConfig, writer.uint32(90).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ExecutionConditions.encode(message.conditions, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFlow();
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
          message.label = reader.string();
          break;
        case 4:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 5:
          message.endTime = reader.uint64();
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
          message.hostedIcaConfig = HostedICAConfig.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgUpdateFlow {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      label: isSet(object.label) ? String(object.label) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0),
      startAt: isSet(object.startAt) ? BigInt(object.startAt.toString()) : BigInt(0),
      interval: isSet(object.interval) ? String(object.interval) : "",
      feeFunds: Array.isArray(object?.feeFunds) ? object.feeFunds.map((e: any) => Coin.fromJSON(e)) : [],
      configuration: isSet(object.configuration) ? ExecutionConfiguration.fromJSON(object.configuration) : undefined,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      hostedIcaConfig: isSet(object.hostedIcaConfig) ? HostedICAConfig.fromJSON(object.hostedIcaConfig) : undefined,
      conditions: isSet(object.conditions) ? ExecutionConditions.fromJSON(object.conditions) : undefined
    };
  },
  toJSON(message: MsgUpdateFlow): JsonSafe<MsgUpdateFlow> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.label !== undefined && (obj.label = message.label);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
    message.startAt !== undefined && (obj.startAt = (message.startAt || BigInt(0)).toString());
    message.interval !== undefined && (obj.interval = message.interval);
    if (message.feeFunds) {
      obj.feeFunds = message.feeFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeFunds = [];
    }
    message.configuration !== undefined && (obj.configuration = message.configuration ? ExecutionConfiguration.toJSON(message.configuration) : undefined);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.hostedIcaConfig !== undefined && (obj.hostedIcaConfig = message.hostedIcaConfig ? HostedICAConfig.toJSON(message.hostedIcaConfig) : undefined);
    message.conditions !== undefined && (obj.conditions = message.conditions ? ExecutionConditions.toJSON(message.conditions) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateFlow>): MsgUpdateFlow {
    const message = createBaseMsgUpdateFlow();
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.label = object.label ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
    message.interval = object.interval ?? "";
    message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    message.connectionId = object.connectionId ?? "";
    message.hostedIcaConfig = object.hostedIcaConfig !== undefined && object.hostedIcaConfig !== null ? HostedICAConfig.fromPartial(object.hostedIcaConfig) : undefined;
    message.conditions = object.conditions !== undefined && object.conditions !== null ? ExecutionConditions.fromPartial(object.conditions) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateFlowAmino): MsgUpdateFlow {
    const message = createBaseMsgUpdateFlow();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.hosted_ica_config !== undefined && object.hosted_ica_config !== null) {
      message.hostedIcaConfig = HostedICAConfig.fromAmino(object.hosted_ica_config);
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      message.conditions = ExecutionConditions.fromAmino(object.conditions);
    }
    return message;
  },
  toAmino(message: MsgUpdateFlow): MsgUpdateFlowAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.label = message.label === "" ? undefined : message.label;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime?.toString() : undefined;
    obj.start_at = message.startAt !== BigInt(0) ? message.startAt?.toString() : undefined;
    obj.interval = message.interval === "" ? undefined : message.interval;
    if (message.feeFunds) {
      obj.fee_funds = message.feeFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_funds = message.feeFunds;
    }
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.hosted_ica_config = message.hostedIcaConfig ? HostedICAConfig.toAmino(message.hostedIcaConfig) : undefined;
    obj.conditions = message.conditions ? ExecutionConditions.toAmino(message.conditions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFlowAminoMsg): MsgUpdateFlow {
    return MsgUpdateFlow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateFlow): MsgUpdateFlowAminoMsg {
    return {
      type: "intent/MsgUpdateFlow",
      value: MsgUpdateFlow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateFlowProtoMsg): MsgUpdateFlow {
    return MsgUpdateFlow.decode(message.value);
  },
  toProto(message: MsgUpdateFlow): Uint8Array {
    return MsgUpdateFlow.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFlow): MsgUpdateFlowProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
      value: MsgUpdateFlow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFlow.typeUrl, MsgUpdateFlow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateFlow.aminoType, MsgUpdateFlow.typeUrl);
function createBaseMsgUpdateFlowResponse(): MsgUpdateFlowResponse {
  return {};
}
export const MsgUpdateFlowResponse = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateFlowResponse",
  is(o: any): o is MsgUpdateFlowResponse {
    return o && o.$typeUrl === MsgUpdateFlowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateFlowResponseSDKType {
    return o && o.$typeUrl === MsgUpdateFlowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateFlowResponseAmino {
    return o && o.$typeUrl === MsgUpdateFlowResponse.typeUrl;
  },
  encode(_: MsgUpdateFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateFlowResponse();
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
  fromJSON(_: any): MsgUpdateFlowResponse {
    return {};
  },
  toJSON(_: MsgUpdateFlowResponse): JsonSafe<MsgUpdateFlowResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateFlowResponse>): MsgUpdateFlowResponse {
    const message = createBaseMsgUpdateFlowResponse();
    return message;
  },
  fromAmino(_: MsgUpdateFlowResponseAmino): MsgUpdateFlowResponse {
    const message = createBaseMsgUpdateFlowResponse();
    return message;
  },
  toAmino(_: MsgUpdateFlowResponse): MsgUpdateFlowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateFlowResponseAminoMsg): MsgUpdateFlowResponse {
    return MsgUpdateFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateFlowResponseProtoMsg): MsgUpdateFlowResponse {
    return MsgUpdateFlowResponse.decode(message.value);
  },
  toProto(message: MsgUpdateFlowResponse): Uint8Array {
    return MsgUpdateFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateFlowResponse): MsgUpdateFlowResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.MsgUpdateFlowResponse",
      value: MsgUpdateFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFlowResponse.typeUrl, MsgUpdateFlowResponse);
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
  aminoType: "intent/MsgCreateHostedAccount",
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
  fromJSON(object: any): MsgCreateHostedAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : "",
      version: isSet(object.version) ? String(object.version) : "",
      feeCoinsSuported: Array.isArray(object?.feeCoinsSuported) ? object.feeCoinsSuported.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreateHostedAccount): JsonSafe<MsgCreateHostedAccount> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
    message.version !== undefined && (obj.version = message.version);
    if (message.feeCoinsSuported) {
      obj.feeCoinsSuported = message.feeCoinsSuported.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeCoinsSuported = [];
    }
    return obj;
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
  toAminoMsg(message: MsgCreateHostedAccount): MsgCreateHostedAccountAminoMsg {
    return {
      type: "intent/MsgCreateHostedAccount",
      value: MsgCreateHostedAccount.toAmino(message)
    };
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
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateHostedAccount.aminoType, MsgCreateHostedAccount.typeUrl);
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
  fromJSON(object: any): MsgCreateHostedAccountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgCreateHostedAccountResponse): JsonSafe<MsgCreateHostedAccountResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
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
    hostFeeConfig: undefined
  };
}
export const MsgUpdateHostedAccount = {
  typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
  aminoType: "intent/MsgUpdateHostedAccount",
  is(o: any): o is MsgUpdateHostedAccount {
    return o && (o.$typeUrl === MsgUpdateHostedAccount.typeUrl || typeof o.admin === "string" && typeof o.hostedAddress === "string");
  },
  isSDK(o: any): o is MsgUpdateHostedAccountSDKType {
    return o && (o.$typeUrl === MsgUpdateHostedAccount.typeUrl || typeof o.admin === "string" && typeof o.hosted_address === "string");
  },
  isAmino(o: any): o is MsgUpdateHostedAccountAmino {
    return o && (o.$typeUrl === MsgUpdateHostedAccount.typeUrl || typeof o.admin === "string" && typeof o.hosted_address === "string");
  },
  encode(message: MsgUpdateHostedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.hostedAddress !== "") {
      writer.uint32(18).string(message.hostedAddress);
    }
    if (message.hostFeeConfig !== undefined) {
      HostFeeConfig.encode(message.hostFeeConfig, writer.uint32(34).fork()).ldelim();
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
        case 4:
          message.hostFeeConfig = HostFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateHostedAccount {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      hostedAddress: isSet(object.hostedAddress) ? String(object.hostedAddress) : "",
      hostFeeConfig: isSet(object.hostFeeConfig) ? HostFeeConfig.fromJSON(object.hostFeeConfig) : undefined
    };
  },
  toJSON(message: MsgUpdateHostedAccount): JsonSafe<MsgUpdateHostedAccount> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.hostedAddress !== undefined && (obj.hostedAddress = message.hostedAddress);
    message.hostFeeConfig !== undefined && (obj.hostFeeConfig = message.hostFeeConfig ? HostFeeConfig.toJSON(message.hostFeeConfig) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateHostedAccount>): MsgUpdateHostedAccount {
    const message = createBaseMsgUpdateHostedAccount();
    message.admin = object.admin ?? "";
    message.hostedAddress = object.hostedAddress ?? "";
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
    if (object.host_fee_config !== undefined && object.host_fee_config !== null) {
      message.hostFeeConfig = HostFeeConfig.fromAmino(object.host_fee_config);
    }
    return message;
  },
  toAmino(message: MsgUpdateHostedAccount): MsgUpdateHostedAccountAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.hosted_address = message.hostedAddress === "" ? undefined : message.hostedAddress;
    obj.host_fee_config = message.hostFeeConfig ? HostFeeConfig.toAmino(message.hostFeeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateHostedAccountAminoMsg): MsgUpdateHostedAccount {
    return MsgUpdateHostedAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateHostedAccount): MsgUpdateHostedAccountAminoMsg {
    return {
      type: "intent/MsgUpdateHostedAccount",
      value: MsgUpdateHostedAccount.toAmino(message)
    };
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
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateHostedAccount.aminoType, MsgUpdateHostedAccount.typeUrl);
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
  fromJSON(_: any): MsgUpdateHostedAccountResponse {
    return {};
  },
  toJSON(_: MsgUpdateHostedAccountResponse): JsonSafe<MsgUpdateHostedAccountResponse> {
    const obj: any = {};
    return obj;
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