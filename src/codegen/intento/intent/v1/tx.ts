import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ExecutionConfiguration, ExecutionConfigurationAmino, ExecutionConfigurationSDKType, TrustlessAgentConfig, TrustlessAgentConfigAmino, TrustlessAgentConfigSDKType, ExecutionConditions, ExecutionConditionsAmino, ExecutionConditionsSDKType } from "./flow";
import { TrustlessAgentFeeConfig, TrustlessAgentFeeConfigAmino, TrustlessAgentFeeConfigSDKType } from "./trustless_agent";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccount";
  value: Uint8Array;
}
/**
 * MsgRegisterAccount registers an interchain account for the given owner over
 * the specified connection pair
 * @name MsgRegisterAccountAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgRegisterAccount
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccountResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterAccountResponse is the response type for Msg/RegisterAccount
 * @name MsgRegisterAccountResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgRegisterAccountResponse
 */
export interface MsgRegisterAccountResponseAmino {}
export interface MsgRegisterAccountResponseAminoMsg {
  type: "/intento.intent.v1.MsgRegisterAccountResponse";
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
  typeUrl: "/intento.intent.v1.MsgSubmitTx";
  value: Uint8Array;
}
/**
 * MsgSubmitTx creates and submits an arbitrary msg to be executed
 * locally or using an interchain account
 * @name MsgSubmitTxAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgSubmitTx
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
  typeUrl: "/intento.intent.v1.MsgSubmitTxResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitTxResponse defines the MsgSubmitTx response type
 * @name MsgSubmitTxResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgSubmitTxResponse
 */
export interface MsgSubmitTxResponseAmino {}
export interface MsgSubmitTxResponseAminoMsg {
  type: "/intento.intent.v1.MsgSubmitTxResponse";
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
  /** optional use of a trustless agent */
  trustlessAgent?: TrustlessAgentConfig;
  conditions?: ExecutionConditions;
}
export interface MsgSubmitFlowProtoMsg {
  typeUrl: "/intento.intent.v1.MsgSubmitFlow";
  value: Uint8Array;
}
export type MsgSubmitFlowEncoded = Omit<MsgSubmitFlow, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgSubmitFlow creates, submits and schedules msgs
 * to be executed locally or over IBC with conditions
 * @name MsgSubmitFlowAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgSubmitFlow
 */
export interface MsgSubmitFlowAmino {
  owner?: string;
  label?: string;
  msgs?: AnyAmino[];
  /**
   * duration defines the time that the code should run for
   */
  duration?: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  start_at?: string;
  /**
   * interval defines the interval between auto_msg calls
   */
  interval?: string;
  /**
   * optional fees to be used for flow execution limiting the amount of fees
   * incurred
   */
  fee_funds?: CoinAmino[];
  /**
   * optional configuration parameters
   */
  configuration?: ExecutionConfigurationAmino;
  /**
   * optional connection ID interchain account
   */
  connection_id?: string;
  /**
   * optional use of a trustless agent
   */
  trustless_agent?: TrustlessAgentConfigAmino;
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
  trustless_agent?: TrustlessAgentConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitFlowResponse {}
export interface MsgSubmitFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1.MsgSubmitFlowResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitTxResponse defines the MsgSubmitTx response type
 * @name MsgSubmitFlowResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgSubmitFlowResponse
 */
export interface MsgSubmitFlowResponseAmino {}
export interface MsgSubmitFlowResponseAminoMsg {
  type: "/intento.intent.v1.MsgSubmitFlowResponse";
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow";
  value: Uint8Array;
}
export type MsgRegisterAccountAndSubmitFlowEncoded = Omit<MsgRegisterAccountAndSubmitFlow, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgRegisterAccountAndSubmitFlow creates an interchain account, submits and
 * schedules an arbitrary msg to be executed by this interchain
 * account
 * @name MsgRegisterAccountAndSubmitFlowAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgRegisterAccountAndSubmitFlow
 */
export interface MsgRegisterAccountAndSubmitFlowAmino {
  owner?: string;
  connection_id?: string;
  label?: string;
  msgs?: AnyAmino[];
  /**
   * duration defines the time that the code should run for
   */
  duration?: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  start_at?: string;
  /**
   * interval defines the interval between auto_msg calls
   */
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlowResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterAccountAndSubmitFlowResponse defines the MsgSubmitTx response
 * type
 * @name MsgRegisterAccountAndSubmitFlowResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgRegisterAccountAndSubmitFlowResponse
 */
export interface MsgRegisterAccountAndSubmitFlowResponseAmino {}
export interface MsgRegisterAccountAndSubmitFlowResponseAminoMsg {
  type: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlowResponse";
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
  trustlessAgent?: TrustlessAgentConfig;
  conditions?: ExecutionConditions;
}
export interface MsgUpdateFlowProtoMsg {
  typeUrl: "/intento.intent.v1.MsgUpdateFlow";
  value: Uint8Array;
}
export type MsgUpdateFlowEncoded = Omit<MsgUpdateFlow, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgUpdateFlow updates an arbitrary msg to be executed locally
 * or using an interchain account
 * @name MsgUpdateFlowAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgUpdateFlow
 */
export interface MsgUpdateFlowAmino {
  owner?: string;
  id?: string;
  label?: string;
  msgs?: AnyAmino[];
  /**
   * end_time when set defines the time that the code should run for
   */
  end_time?: string;
  /**
   * start_at when set as a unix time after block inclusion, creates a custom
   * start time for execution
   */
  start_at?: string;
  /**
   * interval defines the interval between auto_msg calls
   */
  interval?: string;
  /**
   * add fees for flow execution, optional
   */
  fee_funds?: CoinAmino[];
  configuration?: ExecutionConfigurationAmino;
  connection_id?: string;
  trustless_agent?: TrustlessAgentConfigAmino;
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
  trustless_agent?: TrustlessAgentConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateFlowResponse {}
export interface MsgUpdateFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1.MsgUpdateFlowResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateTxResponse defines the MsgUpdateTx response type
 * @name MsgUpdateFlowResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgUpdateFlowResponse
 */
export interface MsgUpdateFlowResponseAmino {}
export interface MsgUpdateFlowResponseAminoMsg {
  type: "/intento.intent.v1.MsgUpdateFlowResponse";
  value: MsgUpdateFlowResponseAmino;
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateFlowResponseSDKType {}
export interface MsgCreateTrustlessAgent {
  creator: string;
  connectionId: string;
  hostConnectionId: string;
  version: string;
  feeCoinsSupported: Coin[];
}
export interface MsgCreateTrustlessAgentProtoMsg {
  typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent";
  value: Uint8Array;
}
/**
 * @name MsgCreateTrustlessAgentAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgCreateTrustlessAgent
 */
export interface MsgCreateTrustlessAgentAmino {
  creator?: string;
  connection_id?: string;
  host_connection_id?: string;
  version?: string;
  fee_coins_supported?: CoinAmino[];
}
export interface MsgCreateTrustlessAgentAminoMsg {
  type: "intent/MsgCreateTrustlessAgent";
  value: MsgCreateTrustlessAgentAmino;
}
export interface MsgCreateTrustlessAgentSDKType {
  creator: string;
  connection_id: string;
  host_connection_id: string;
  version: string;
  fee_coins_supported: CoinSDKType[];
}
export interface MsgCreateTrustlessAgentResponse {
  address: string;
}
export interface MsgCreateTrustlessAgentResponseProtoMsg {
  typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgentResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateTrustlessAgentResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgCreateTrustlessAgentResponse
 */
export interface MsgCreateTrustlessAgentResponseAmino {
  address?: string;
}
export interface MsgCreateTrustlessAgentResponseAminoMsg {
  type: "/intento.intent.v1.MsgCreateTrustlessAgentResponse";
  value: MsgCreateTrustlessAgentResponseAmino;
}
export interface MsgCreateTrustlessAgentResponseSDKType {
  address: string;
}
export interface MsgUpdateTrustlessAgentFeeConfig {
  feeAdmin: string;
  agentAddress: string;
  feeConfig?: TrustlessAgentFeeConfig;
}
export interface MsgUpdateTrustlessAgentFeeConfigProtoMsg {
  typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig";
  value: Uint8Array;
}
/**
 * @name MsgUpdateTrustlessAgentFeeConfigAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig
 */
export interface MsgUpdateTrustlessAgentFeeConfigAmino {
  fee_admin?: string;
  agent_address?: string;
  fee_config?: TrustlessAgentFeeConfigAmino;
}
export interface MsgUpdateTrustlessAgentFeeConfigAminoMsg {
  type: "intent/MsgUpdateTrustlessAgentFeeConfig";
  value: MsgUpdateTrustlessAgentFeeConfigAmino;
}
export interface MsgUpdateTrustlessAgentFeeConfigSDKType {
  fee_admin: string;
  agent_address: string;
  fee_config?: TrustlessAgentFeeConfigSDKType;
}
export interface MsgUpdateTrustlessAgentFeeConfigResponse {}
export interface MsgUpdateTrustlessAgentFeeConfigResponseProtoMsg {
  typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfigResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateTrustlessAgentFeeConfigResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgUpdateTrustlessAgentFeeConfigResponse
 */
export interface MsgUpdateTrustlessAgentFeeConfigResponseAmino {}
export interface MsgUpdateTrustlessAgentFeeConfigResponseAminoMsg {
  type: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfigResponse";
  value: MsgUpdateTrustlessAgentFeeConfigResponseAmino;
}
export interface MsgUpdateTrustlessAgentFeeConfigResponseSDKType {}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/intent parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/intento.intent.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority?: string;
  /**
   * params defines the x/intent parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "intent/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/intento.intent.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/intento.intent.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    owner: "",
    connectionId: "",
    version: ""
  };
}
export const MsgRegisterAccount = {
  typeUrl: "/intento.intent.v1.MsgRegisterAccount",
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
      typeUrl: "/intento.intent.v1.MsgRegisterAccount",
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccountResponse",
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
      typeUrl: "/intento.intent.v1.MsgRegisterAccountResponse",
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
  typeUrl: "/intento.intent.v1.MsgSubmitTx",
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
      typeUrl: "/intento.intent.v1.MsgSubmitTx",
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
  typeUrl: "/intento.intent.v1.MsgSubmitTxResponse",
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
      typeUrl: "/intento.intent.v1.MsgSubmitTxResponse",
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
    trustlessAgent: undefined,
    conditions: undefined
  };
}
export const MsgSubmitFlow = {
  typeUrl: "/intento.intent.v1.MsgSubmitFlow",
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
    if (message.trustlessAgent !== undefined) {
      TrustlessAgentConfig.encode(message.trustlessAgent, writer.uint32(82).fork()).ldelim();
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
          message.trustlessAgent = TrustlessAgentConfig.decode(reader, reader.uint32());
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
      trustlessAgent: isSet(object.trustlessAgent) ? TrustlessAgentConfig.fromJSON(object.trustlessAgent) : undefined,
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
    message.trustlessAgent !== undefined && (obj.trustlessAgent = message.trustlessAgent ? TrustlessAgentConfig.toJSON(message.trustlessAgent) : undefined);
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
    message.trustlessAgent = object.trustlessAgent !== undefined && object.trustlessAgent !== null ? TrustlessAgentConfig.fromPartial(object.trustlessAgent) : undefined;
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
    if (object.trustless_agent !== undefined && object.trustless_agent !== null) {
      message.trustlessAgent = TrustlessAgentConfig.fromAmino(object.trustless_agent);
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
    obj.trustless_agent = message.trustlessAgent ? TrustlessAgentConfig.toAmino(message.trustlessAgent) : undefined;
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
      typeUrl: "/intento.intent.v1.MsgSubmitFlow",
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
  typeUrl: "/intento.intent.v1.MsgSubmitFlowResponse",
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
      typeUrl: "/intento.intent.v1.MsgSubmitFlowResponse",
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
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
      typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
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
  typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlowResponse",
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
      typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlowResponse",
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
    trustlessAgent: undefined,
    conditions: undefined
  };
}
export const MsgUpdateFlow = {
  typeUrl: "/intento.intent.v1.MsgUpdateFlow",
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
    if (message.trustlessAgent !== undefined) {
      TrustlessAgentConfig.encode(message.trustlessAgent, writer.uint32(90).fork()).ldelim();
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
          message.trustlessAgent = TrustlessAgentConfig.decode(reader, reader.uint32());
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
      trustlessAgent: isSet(object.trustlessAgent) ? TrustlessAgentConfig.fromJSON(object.trustlessAgent) : undefined,
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
    message.trustlessAgent !== undefined && (obj.trustlessAgent = message.trustlessAgent ? TrustlessAgentConfig.toJSON(message.trustlessAgent) : undefined);
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
    message.trustlessAgent = object.trustlessAgent !== undefined && object.trustlessAgent !== null ? TrustlessAgentConfig.fromPartial(object.trustlessAgent) : undefined;
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
    if (object.trustless_agent !== undefined && object.trustless_agent !== null) {
      message.trustlessAgent = TrustlessAgentConfig.fromAmino(object.trustless_agent);
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
    obj.trustless_agent = message.trustlessAgent ? TrustlessAgentConfig.toAmino(message.trustlessAgent) : undefined;
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
      typeUrl: "/intento.intent.v1.MsgUpdateFlow",
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
  typeUrl: "/intento.intent.v1.MsgUpdateFlowResponse",
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
      typeUrl: "/intento.intent.v1.MsgUpdateFlowResponse",
      value: MsgUpdateFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateFlowResponse.typeUrl, MsgUpdateFlowResponse);
function createBaseMsgCreateTrustlessAgent(): MsgCreateTrustlessAgent {
  return {
    creator: "",
    connectionId: "",
    hostConnectionId: "",
    version: "",
    feeCoinsSupported: []
  };
}
export const MsgCreateTrustlessAgent = {
  typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
  aminoType: "intent/MsgCreateTrustlessAgent",
  is(o: any): o is MsgCreateTrustlessAgent {
    return o && (o.$typeUrl === MsgCreateTrustlessAgent.typeUrl || typeof o.creator === "string" && typeof o.connectionId === "string" && typeof o.hostConnectionId === "string" && typeof o.version === "string" && Array.isArray(o.feeCoinsSupported) && (!o.feeCoinsSupported.length || Coin.is(o.feeCoinsSupported[0])));
  },
  isSDK(o: any): o is MsgCreateTrustlessAgentSDKType {
    return o && (o.$typeUrl === MsgCreateTrustlessAgent.typeUrl || typeof o.creator === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string" && typeof o.version === "string" && Array.isArray(o.fee_coins_supported) && (!o.fee_coins_supported.length || Coin.isSDK(o.fee_coins_supported[0])));
  },
  isAmino(o: any): o is MsgCreateTrustlessAgentAmino {
    return o && (o.$typeUrl === MsgCreateTrustlessAgent.typeUrl || typeof o.creator === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string" && typeof o.version === "string" && Array.isArray(o.fee_coins_supported) && (!o.fee_coins_supported.length || Coin.isAmino(o.fee_coins_supported[0])));
  },
  encode(message: MsgCreateTrustlessAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    for (const v of message.feeCoinsSupported) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTrustlessAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrustlessAgent();
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
          message.feeCoinsSupported.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateTrustlessAgent {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : "",
      version: isSet(object.version) ? String(object.version) : "",
      feeCoinsSupported: Array.isArray(object?.feeCoinsSupported) ? object.feeCoinsSupported.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreateTrustlessAgent): JsonSafe<MsgCreateTrustlessAgent> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
    message.version !== undefined && (obj.version = message.version);
    if (message.feeCoinsSupported) {
      obj.feeCoinsSupported = message.feeCoinsSupported.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeCoinsSupported = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreateTrustlessAgent>): MsgCreateTrustlessAgent {
    const message = createBaseMsgCreateTrustlessAgent();
    message.creator = object.creator ?? "";
    message.connectionId = object.connectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    message.version = object.version ?? "";
    message.feeCoinsSupported = object.feeCoinsSupported?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateTrustlessAgentAmino): MsgCreateTrustlessAgent {
    const message = createBaseMsgCreateTrustlessAgent();
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
    message.feeCoinsSupported = object.fee_coins_supported?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateTrustlessAgent): MsgCreateTrustlessAgentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.host_connection_id = message.hostConnectionId === "" ? undefined : message.hostConnectionId;
    obj.version = message.version === "" ? undefined : message.version;
    if (message.feeCoinsSupported) {
      obj.fee_coins_supported = message.feeCoinsSupported.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_coins_supported = message.feeCoinsSupported;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateTrustlessAgentAminoMsg): MsgCreateTrustlessAgent {
    return MsgCreateTrustlessAgent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateTrustlessAgent): MsgCreateTrustlessAgentAminoMsg {
    return {
      type: "intent/MsgCreateTrustlessAgent",
      value: MsgCreateTrustlessAgent.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateTrustlessAgentProtoMsg): MsgCreateTrustlessAgent {
    return MsgCreateTrustlessAgent.decode(message.value);
  },
  toProto(message: MsgCreateTrustlessAgent): Uint8Array {
    return MsgCreateTrustlessAgent.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTrustlessAgent): MsgCreateTrustlessAgentProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
      value: MsgCreateTrustlessAgent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateTrustlessAgent.typeUrl, MsgCreateTrustlessAgent);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateTrustlessAgent.aminoType, MsgCreateTrustlessAgent.typeUrl);
function createBaseMsgCreateTrustlessAgentResponse(): MsgCreateTrustlessAgentResponse {
  return {
    address: ""
  };
}
export const MsgCreateTrustlessAgentResponse = {
  typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgentResponse",
  is(o: any): o is MsgCreateTrustlessAgentResponse {
    return o && (o.$typeUrl === MsgCreateTrustlessAgentResponse.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is MsgCreateTrustlessAgentResponseSDKType {
    return o && (o.$typeUrl === MsgCreateTrustlessAgentResponse.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is MsgCreateTrustlessAgentResponseAmino {
    return o && (o.$typeUrl === MsgCreateTrustlessAgentResponse.typeUrl || typeof o.address === "string");
  },
  encode(message: MsgCreateTrustlessAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTrustlessAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrustlessAgentResponse();
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
  fromJSON(object: any): MsgCreateTrustlessAgentResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgCreateTrustlessAgentResponse): JsonSafe<MsgCreateTrustlessAgentResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateTrustlessAgentResponse>): MsgCreateTrustlessAgentResponse {
    const message = createBaseMsgCreateTrustlessAgentResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTrustlessAgentResponseAmino): MsgCreateTrustlessAgentResponse {
    const message = createBaseMsgCreateTrustlessAgentResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgCreateTrustlessAgentResponse): MsgCreateTrustlessAgentResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTrustlessAgentResponseAminoMsg): MsgCreateTrustlessAgentResponse {
    return MsgCreateTrustlessAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTrustlessAgentResponseProtoMsg): MsgCreateTrustlessAgentResponse {
    return MsgCreateTrustlessAgentResponse.decode(message.value);
  },
  toProto(message: MsgCreateTrustlessAgentResponse): Uint8Array {
    return MsgCreateTrustlessAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTrustlessAgentResponse): MsgCreateTrustlessAgentResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgentResponse",
      value: MsgCreateTrustlessAgentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateTrustlessAgentResponse.typeUrl, MsgCreateTrustlessAgentResponse);
function createBaseMsgUpdateTrustlessAgentFeeConfig(): MsgUpdateTrustlessAgentFeeConfig {
  return {
    feeAdmin: "",
    agentAddress: "",
    feeConfig: undefined
  };
}
export const MsgUpdateTrustlessAgentFeeConfig = {
  typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
  aminoType: "intent/MsgUpdateTrustlessAgentFeeConfig",
  is(o: any): o is MsgUpdateTrustlessAgentFeeConfig {
    return o && (o.$typeUrl === MsgUpdateTrustlessAgentFeeConfig.typeUrl || typeof o.feeAdmin === "string" && typeof o.agentAddress === "string");
  },
  isSDK(o: any): o is MsgUpdateTrustlessAgentFeeConfigSDKType {
    return o && (o.$typeUrl === MsgUpdateTrustlessAgentFeeConfig.typeUrl || typeof o.fee_admin === "string" && typeof o.agent_address === "string");
  },
  isAmino(o: any): o is MsgUpdateTrustlessAgentFeeConfigAmino {
    return o && (o.$typeUrl === MsgUpdateTrustlessAgentFeeConfig.typeUrl || typeof o.fee_admin === "string" && typeof o.agent_address === "string");
  },
  encode(message: MsgUpdateTrustlessAgentFeeConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeAdmin !== "") {
      writer.uint32(10).string(message.feeAdmin);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    if (message.feeConfig !== undefined) {
      TrustlessAgentFeeConfig.encode(message.feeConfig, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTrustlessAgentFeeConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTrustlessAgentFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeAdmin = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        case 4:
          message.feeConfig = TrustlessAgentFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateTrustlessAgentFeeConfig {
    return {
      feeAdmin: isSet(object.feeAdmin) ? String(object.feeAdmin) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      feeConfig: isSet(object.feeConfig) ? TrustlessAgentFeeConfig.fromJSON(object.feeConfig) : undefined
    };
  },
  toJSON(message: MsgUpdateTrustlessAgentFeeConfig): JsonSafe<MsgUpdateTrustlessAgentFeeConfig> {
    const obj: any = {};
    message.feeAdmin !== undefined && (obj.feeAdmin = message.feeAdmin);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.feeConfig !== undefined && (obj.feeConfig = message.feeConfig ? TrustlessAgentFeeConfig.toJSON(message.feeConfig) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateTrustlessAgentFeeConfig>): MsgUpdateTrustlessAgentFeeConfig {
    const message = createBaseMsgUpdateTrustlessAgentFeeConfig();
    message.feeAdmin = object.feeAdmin ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.feeConfig = object.feeConfig !== undefined && object.feeConfig !== null ? TrustlessAgentFeeConfig.fromPartial(object.feeConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateTrustlessAgentFeeConfigAmino): MsgUpdateTrustlessAgentFeeConfig {
    const message = createBaseMsgUpdateTrustlessAgentFeeConfig();
    if (object.fee_admin !== undefined && object.fee_admin !== null) {
      message.feeAdmin = object.fee_admin;
    }
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    if (object.fee_config !== undefined && object.fee_config !== null) {
      message.feeConfig = TrustlessAgentFeeConfig.fromAmino(object.fee_config);
    }
    return message;
  },
  toAmino(message: MsgUpdateTrustlessAgentFeeConfig): MsgUpdateTrustlessAgentFeeConfigAmino {
    const obj: any = {};
    obj.fee_admin = message.feeAdmin === "" ? undefined : message.feeAdmin;
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    obj.fee_config = message.feeConfig ? TrustlessAgentFeeConfig.toAmino(message.feeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTrustlessAgentFeeConfigAminoMsg): MsgUpdateTrustlessAgentFeeConfig {
    return MsgUpdateTrustlessAgentFeeConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateTrustlessAgentFeeConfig): MsgUpdateTrustlessAgentFeeConfigAminoMsg {
    return {
      type: "intent/MsgUpdateTrustlessAgentFeeConfig",
      value: MsgUpdateTrustlessAgentFeeConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateTrustlessAgentFeeConfigProtoMsg): MsgUpdateTrustlessAgentFeeConfig {
    return MsgUpdateTrustlessAgentFeeConfig.decode(message.value);
  },
  toProto(message: MsgUpdateTrustlessAgentFeeConfig): Uint8Array {
    return MsgUpdateTrustlessAgentFeeConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTrustlessAgentFeeConfig): MsgUpdateTrustlessAgentFeeConfigProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
      value: MsgUpdateTrustlessAgentFeeConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateTrustlessAgentFeeConfig.typeUrl, MsgUpdateTrustlessAgentFeeConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateTrustlessAgentFeeConfig.aminoType, MsgUpdateTrustlessAgentFeeConfig.typeUrl);
function createBaseMsgUpdateTrustlessAgentFeeConfigResponse(): MsgUpdateTrustlessAgentFeeConfigResponse {
  return {};
}
export const MsgUpdateTrustlessAgentFeeConfigResponse = {
  typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfigResponse",
  is(o: any): o is MsgUpdateTrustlessAgentFeeConfigResponse {
    return o && o.$typeUrl === MsgUpdateTrustlessAgentFeeConfigResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateTrustlessAgentFeeConfigResponseSDKType {
    return o && o.$typeUrl === MsgUpdateTrustlessAgentFeeConfigResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateTrustlessAgentFeeConfigResponseAmino {
    return o && o.$typeUrl === MsgUpdateTrustlessAgentFeeConfigResponse.typeUrl;
  },
  encode(_: MsgUpdateTrustlessAgentFeeConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTrustlessAgentFeeConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTrustlessAgentFeeConfigResponse();
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
  fromJSON(_: any): MsgUpdateTrustlessAgentFeeConfigResponse {
    return {};
  },
  toJSON(_: MsgUpdateTrustlessAgentFeeConfigResponse): JsonSafe<MsgUpdateTrustlessAgentFeeConfigResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateTrustlessAgentFeeConfigResponse>): MsgUpdateTrustlessAgentFeeConfigResponse {
    const message = createBaseMsgUpdateTrustlessAgentFeeConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTrustlessAgentFeeConfigResponseAmino): MsgUpdateTrustlessAgentFeeConfigResponse {
    const message = createBaseMsgUpdateTrustlessAgentFeeConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateTrustlessAgentFeeConfigResponse): MsgUpdateTrustlessAgentFeeConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTrustlessAgentFeeConfigResponseAminoMsg): MsgUpdateTrustlessAgentFeeConfigResponse {
    return MsgUpdateTrustlessAgentFeeConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTrustlessAgentFeeConfigResponseProtoMsg): MsgUpdateTrustlessAgentFeeConfigResponse {
    return MsgUpdateTrustlessAgentFeeConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTrustlessAgentFeeConfigResponse): Uint8Array {
    return MsgUpdateTrustlessAgentFeeConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTrustlessAgentFeeConfigResponse): MsgUpdateTrustlessAgentFeeConfigResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfigResponse",
      value: MsgUpdateTrustlessAgentFeeConfigResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateTrustlessAgentFeeConfigResponse.typeUrl, MsgUpdateTrustlessAgentFeeConfigResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/intento.intent.v1.MsgUpdateParams",
  aminoType: "intent/MsgUpdateParams",
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
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "intent/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/intento.intent.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/intento.intent.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);