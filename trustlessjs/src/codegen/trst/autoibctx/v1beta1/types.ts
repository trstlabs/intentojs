import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** AutoTxInfo stores the info for the auto executing interchain accounts transaction */
export interface AutoTxInfo {
  txId: bigint;
  owner: string;
  label: string;
  feeAddress: string;
  msgs: (Any)[] | Any[];
  interval: Duration;
  startTime: Date;
  execTime: Date;
  endTime: Date;
  updateHistory: Date[];
  icaConfig?: ICAConfig;
  configuration?: ExecutionConfiguration;
}
export interface AutoTxInfoProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxInfo";
  value: Uint8Array;
}
export type AutoTxInfoEncoded = Omit<AutoTxInfo, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** AutoTxInfo stores the info for the auto executing interchain accounts transaction */
export interface AutoTxInfoAmino {
  tx_id?: string;
  owner?: string;
  label?: string;
  fee_address?: string;
  msgs?: AnyAmino[];
  interval?: DurationAmino;
  start_time?: string;
  exec_time?: string;
  end_time?: string;
  update_history?: string[];
  ica_config?: ICAConfigAmino;
  configuration?: ExecutionConfigurationAmino;
}
export interface AutoTxInfoAminoMsg {
  type: "/trst.autoibctx.v1beta1.AutoTxInfo";
  value: AutoTxInfoAmino;
}
/** AutoTxInfo stores the info for the auto executing interchain accounts transaction */
export interface AutoTxInfoSDKType {
  tx_id: bigint;
  owner: string;
  label: string;
  fee_address: string;
  msgs: (AnySDKType)[];
  interval: DurationSDKType;
  start_time: Date;
  exec_time: Date;
  end_time: Date;
  update_history: Date[];
  ica_config?: ICAConfigSDKType;
  configuration?: ExecutionConfigurationSDKType;
}
export interface ICAConfig {
  portId: string;
  connectionId: string;
  hostConnectionId: string;
}
export interface ICAConfigProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.ICAConfig";
  value: Uint8Array;
}
export interface ICAConfigAmino {
  port_id?: string;
  connection_id?: string;
  host_connection_id?: string;
}
export interface ICAConfigAminoMsg {
  type: "/trst.autoibctx.v1beta1.ICAConfig";
  value: ICAConfigAmino;
}
export interface ICAConfigSDKType {
  port_id: string;
  connection_id: string;
  host_connection_id: string;
}
/** ExecutionConfiguration provides the execution-related configuration of the AutoTx */
export interface ExecutionConfiguration {
  /** if true, the AutoTx outputs are saved and can be used in condition-based logic */
  saveMsgResponses: boolean;
  /** if true, the AutoTx is not updatable */
  updatingDisabled: boolean;
  /** If true, will execute until we get a successful AutoTx, if false/unset will always execute */
  stopOnSuccess: boolean;
  /** If true, will execute until successful AutoTx, if false/unset will always execute */
  stopOnFailure: boolean;
  /** If true, owner account balance is used when trigger account funds run out */
  fallbackToOwnerBalance: boolean;
  /** If true, allows the AutoTx to continue execution after an ibc channel times out (recommended) */
  reregisterIcaAfterTimeout: boolean;
}
export interface ExecutionConfigurationProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.ExecutionConfiguration";
  value: Uint8Array;
}
/** ExecutionConfiguration provides the execution-related configuration of the AutoTx */
export interface ExecutionConfigurationAmino {
  /** if true, the AutoTx outputs are saved and can be used in condition-based logic */
  save_msg_responses?: boolean;
  /** if true, the AutoTx is not updatable */
  updating_disabled?: boolean;
  /** If true, will execute until we get a successful AutoTx, if false/unset will always execute */
  stop_on_success?: boolean;
  /** If true, will execute until successful AutoTx, if false/unset will always execute */
  stop_on_failure?: boolean;
  /** If true, owner account balance is used when trigger account funds run out */
  fallback_to_owner_balance?: boolean;
  /** If true, allows the AutoTx to continue execution after an ibc channel times out (recommended) */
  reregister_ica_after_timeout?: boolean;
}
export interface ExecutionConfigurationAminoMsg {
  type: "/trst.autoibctx.v1beta1.ExecutionConfiguration";
  value: ExecutionConfigurationAmino;
}
/** ExecutionConfiguration provides the execution-related configuration of the AutoTx */
export interface ExecutionConfigurationSDKType {
  save_msg_responses: boolean;
  updating_disabled: boolean;
  stop_on_success: boolean;
  stop_on_failure: boolean;
  fallback_to_owner_balance: boolean;
  reregister_ica_after_timeout: boolean;
}
/** ExecutionConditions provides execution conditions for the AutoTx */
export interface ExecutionConditions {
  /** optional array of dependent AutoTxs that when executing succesfully, stops further execution */
  stopOnSuccessOf: bigint[];
  /** optional array of dependent AutoTxs that when not executing succesfully, stops further execution */
  stopOnFailureOf: bigint[];
  /** optional array of dependent AutoTxs that should be executed succesfully in their latest call before upcomming execution is allowed */
  skipOnFailureOf: bigint[];
  /** optional array of dependent autotxs that should fail their latest call before upcomming execution is allowed */
  skipOnSuccessOf: bigint[];
}
export interface ExecutionConditionsProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.ExecutionConditions";
  value: Uint8Array;
}
/** ExecutionConditions provides execution conditions for the AutoTx */
export interface ExecutionConditionsAmino {
  /** optional array of dependent AutoTxs that when executing succesfully, stops further execution */
  stop_on_success_of?: string[];
  /** optional array of dependent AutoTxs that when not executing succesfully, stops further execution */
  stop_on_failure_of?: string[];
  /** optional array of dependent AutoTxs that should be executed succesfully in their latest call before upcomming execution is allowed */
  skip_on_failure_of?: string[];
  /** optional array of dependent autotxs that should fail their latest call before upcomming execution is allowed */
  skip_on_success_of?: string[];
}
export interface ExecutionConditionsAminoMsg {
  type: "/trst.autoibctx.v1beta1.ExecutionConditions";
  value: ExecutionConditionsAmino;
}
/** ExecutionConditions provides execution conditions for the AutoTx */
export interface ExecutionConditionsSDKType {
  stop_on_success_of: bigint[];
  stop_on_failure_of: bigint[];
  skip_on_failure_of: bigint[];
  skip_on_success_of: bigint[];
}
/** AutoTxHistory execution history */
export interface AutoTxHistory {
  history: AutoTxHistoryEntry[];
}
export interface AutoTxHistoryProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxHistory";
  value: Uint8Array;
}
/** AutoTxHistory execution history */
export interface AutoTxHistoryAmino {
  history?: AutoTxHistoryEntryAmino[];
}
export interface AutoTxHistoryAminoMsg {
  type: "/trst.autoibctx.v1beta1.AutoTxHistory";
  value: AutoTxHistoryAmino;
}
/** AutoTxHistory execution history */
export interface AutoTxHistorySDKType {
  history: AutoTxHistoryEntrySDKType[];
}
/** AutoTxHistoryEntry provides a the history of AutoTx interchain tx call */
export interface AutoTxHistoryEntry {
  scheduledExecTime: Date;
  actualExecTime: Date;
  execFee: Coin;
  /** whether all messages are executed, independent of succesfull result */
  executed: boolean;
  /** timed out from execution over IBC */
  timedOut: boolean;
  /** errors from execution, if executed and no error the execution was succesfull */
  errors: string[];
  /** will be empty when save_msg_responses is false */
  msgResponses: Any[];
}
export interface AutoTxHistoryEntryProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxHistoryEntry";
  value: Uint8Array;
}
/** AutoTxHistoryEntry provides a the history of AutoTx interchain tx call */
export interface AutoTxHistoryEntryAmino {
  scheduled_exec_time?: string;
  actual_exec_time?: string;
  exec_fee?: CoinAmino;
  /** whether all messages are executed, independent of succesfull result */
  executed?: boolean;
  /** timed out from execution over IBC */
  timed_out?: boolean;
  /** errors from execution, if executed and no error the execution was succesfull */
  errors?: string[];
  /** will be empty when save_msg_responses is false */
  msg_responses?: AnyAmino[];
}
export interface AutoTxHistoryEntryAminoMsg {
  type: "/trst.autoibctx.v1beta1.AutoTxHistoryEntry";
  value: AutoTxHistoryEntryAmino;
}
/** AutoTxHistoryEntry provides a the history of AutoTx interchain tx call */
export interface AutoTxHistoryEntrySDKType {
  scheduled_exec_time: Date;
  actual_exec_time: Date;
  exec_fee: CoinSDKType;
  executed: boolean;
  timed_out: boolean;
  errors: string[];
  msg_responses: AnySDKType[];
}
/** Params defines the params for activeness of AutoTxs on governance proposals. */
export interface Params {
  AutoTxFundsCommission: bigint;
  AutoTxFlexFeeMul: bigint;
  AutoTxConstantFee: bigint;
  RecurringAutoTxConstantFee: bigint;
  /** Maximum period for self-executing AutoTx */
  MaxAutoTxDuration: Duration;
  /** Minimum period for self-executing AutoTx */
  MinAutoTxDuration: Duration;
  /** Minimum period for self-executing AutoTx */
  MinAutoTxInterval: Duration;
  /** relayer rewards in utrst for each message type 0=SDK,1=Wasm, 2=Osmo. Rewards are in utrst and topped up in the module account by alloc module. */
  relayerRewards: bigint[];
}
export interface ParamsProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the params for activeness of AutoTxs on governance proposals. */
export interface ParamsAmino {
  AutoTxFundsCommission?: string;
  AutoTxFlexFeeMul?: string;
  AutoTxConstantFee?: string;
  RecurringAutoTxConstantFee?: string;
  /** Maximum period for self-executing AutoTx */
  MaxAutoTxDuration?: DurationAmino;
  /** Minimum period for self-executing AutoTx */
  MinAutoTxDuration?: DurationAmino;
  /** Minimum period for self-executing AutoTx */
  MinAutoTxInterval?: DurationAmino;
  /** relayer rewards in utrst for each message type 0=SDK,1=Wasm, 2=Osmo. Rewards are in utrst and topped up in the module account by alloc module. */
  relayer_rewards?: string[];
}
export interface ParamsAminoMsg {
  type: "/trst.autoibctx.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the params for activeness of AutoTxs on governance proposals. */
export interface ParamsSDKType {
  AutoTxFundsCommission: bigint;
  AutoTxFlexFeeMul: bigint;
  AutoTxConstantFee: bigint;
  RecurringAutoTxConstantFee: bigint;
  MaxAutoTxDuration: DurationSDKType;
  MinAutoTxDuration: DurationSDKType;
  MinAutoTxInterval: DurationSDKType;
  relayer_rewards: bigint[];
}
function createBaseAutoTxInfo(): AutoTxInfo {
  return {
    txId: BigInt(0),
    owner: "",
    label: "",
    feeAddress: "",
    msgs: [],
    interval: Duration.fromPartial({}),
    startTime: new Date(),
    execTime: new Date(),
    endTime: new Date(),
    updateHistory: [],
    icaConfig: undefined,
    configuration: undefined
  };
}
export const AutoTxInfo = {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxInfo",
  is(o: any): o is AutoTxInfo {
    return o && (o.$typeUrl === AutoTxInfo.typeUrl || typeof o.txId === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.feeAddress === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && Duration.is(o.interval) && Timestamp.is(o.startTime) && Timestamp.is(o.execTime) && Timestamp.is(o.endTime) && Array.isArray(o.updateHistory) && (!o.updateHistory.length || Timestamp.is(o.updateHistory[0])));
  },
  isSDK(o: any): o is AutoTxInfoSDKType {
    return o && (o.$typeUrl === AutoTxInfo.typeUrl || typeof o.tx_id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.fee_address === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && Duration.isSDK(o.interval) && Timestamp.isSDK(o.start_time) && Timestamp.isSDK(o.exec_time) && Timestamp.isSDK(o.end_time) && Array.isArray(o.update_history) && (!o.update_history.length || Timestamp.isSDK(o.update_history[0])));
  },
  isAmino(o: any): o is AutoTxInfoAmino {
    return o && (o.$typeUrl === AutoTxInfo.typeUrl || typeof o.tx_id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.fee_address === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && Duration.isAmino(o.interval) && Timestamp.isAmino(o.start_time) && Timestamp.isAmino(o.exec_time) && Timestamp.isAmino(o.end_time) && Array.isArray(o.update_history) && (!o.update_history.length || Timestamp.isAmino(o.update_history[0])));
  },
  encode(message: AutoTxInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId !== BigInt(0)) {
      writer.uint32(8).uint64(message.txId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.feeAddress !== "") {
      writer.uint32(34).string(message.feeAddress);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(42).fork()).ldelim();
    }
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(50).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.execTime !== undefined) {
      Timestamp.encode(toTimestamp(message.execTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.updateHistory) {
      Timestamp.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.icaConfig !== undefined) {
      ICAConfig.encode(message.icaConfig, writer.uint32(90).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ExecutionConfiguration.encode(message.configuration, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutoTxInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoTxInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.feeAddress = reader.string();
          break;
        case 5:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        case 6:
          message.interval = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.execTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.updateHistory.push(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.icaConfig = ICAConfig.decode(reader, reader.uint32());
          break;
        case 12:
          message.configuration = ExecutionConfiguration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutoTxInfo>): AutoTxInfo {
    const message = createBaseAutoTxInfo();
    message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.label = object.label ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.msgs = object.msgs?.map(e => (GlobalDecoderRegistry.fromPartial(e) as any)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? Duration.fromPartial(object.interval) : undefined;
    message.startTime = object.startTime ?? undefined;
    message.execTime = object.execTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.updateHistory = object.updateHistory?.map(e => Timestamp.fromPartial(e)) || [];
    message.icaConfig = object.icaConfig !== undefined && object.icaConfig !== null ? ICAConfig.fromPartial(object.icaConfig) : undefined;
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: AutoTxInfoAmino): AutoTxInfo {
    const message = createBaseAutoTxInfo();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = BigInt(object.tx_id);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    if (object.fee_address !== undefined && object.fee_address !== null) {
      message.feeAddress = object.fee_address;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.interval !== undefined && object.interval !== null) {
      message.interval = Duration.fromAmino(object.interval);
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
    }
    if (object.exec_time !== undefined && object.exec_time !== null) {
      message.execTime = fromTimestamp(Timestamp.fromAmino(object.exec_time));
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
    }
    message.updateHistory = object.update_history?.map(e => Timestamp.fromAmino(e)) || [];
    if (object.ica_config !== undefined && object.ica_config !== null) {
      message.icaConfig = ICAConfig.fromAmino(object.ica_config);
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ExecutionConfiguration.fromAmino(object.configuration);
    }
    return message;
  },
  toAmino(message: AutoTxInfo): AutoTxInfoAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? message.txId.toString() : undefined;
    obj.owner = message.owner;
    obj.label = message.label;
    obj.fee_address = message.feeAddress;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.interval = message.interval ? Duration.toAmino(message.interval) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.exec_time = message.execTime ? Timestamp.toAmino(toTimestamp(message.execTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    if (message.updateHistory) {
      obj.update_history = message.updateHistory.map(e => e ? Timestamp.toAmino(e) : undefined);
    } else {
      obj.update_history = [];
    }
    obj.ica_config = message.icaConfig ? ICAConfig.toAmino(message.icaConfig) : undefined;
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: AutoTxInfoAminoMsg): AutoTxInfo {
    return AutoTxInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: AutoTxInfoProtoMsg): AutoTxInfo {
    return AutoTxInfo.decode(message.value);
  },
  toProto(message: AutoTxInfo): Uint8Array {
    return AutoTxInfo.encode(message).finish();
  },
  toProtoMsg(message: AutoTxInfo): AutoTxInfoProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.AutoTxInfo",
      value: AutoTxInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AutoTxInfo.typeUrl, AutoTxInfo);
function createBaseICAConfig(): ICAConfig {
  return {
    portId: "",
    connectionId: "",
    hostConnectionId: ""
  };
}
export const ICAConfig = {
  typeUrl: "/trst.autoibctx.v1beta1.ICAConfig",
  is(o: any): o is ICAConfig {
    return o && (o.$typeUrl === ICAConfig.typeUrl || typeof o.portId === "string" && typeof o.connectionId === "string" && typeof o.hostConnectionId === "string");
  },
  isSDK(o: any): o is ICAConfigSDKType {
    return o && (o.$typeUrl === ICAConfig.typeUrl || typeof o.port_id === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  isAmino(o: any): o is ICAConfigAmino {
    return o && (o.$typeUrl === ICAConfig.typeUrl || typeof o.port_id === "string" && typeof o.connection_id === "string" && typeof o.host_connection_id === "string");
  },
  encode(message: ICAConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.hostConnectionId !== "") {
      writer.uint32(26).string(message.hostConnectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICAConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICAConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.hostConnectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ICAConfig>): ICAConfig {
    const message = createBaseICAConfig();
    message.portId = object.portId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.hostConnectionId = object.hostConnectionId ?? "";
    return message;
  },
  fromAmino(object: ICAConfigAmino): ICAConfig {
    const message = createBaseICAConfig();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.host_connection_id !== undefined && object.host_connection_id !== null) {
      message.hostConnectionId = object.host_connection_id;
    }
    return message;
  },
  toAmino(message: ICAConfig): ICAConfigAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.connection_id = message.connectionId;
    obj.host_connection_id = message.hostConnectionId;
    return obj;
  },
  fromAminoMsg(object: ICAConfigAminoMsg): ICAConfig {
    return ICAConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ICAConfigProtoMsg): ICAConfig {
    return ICAConfig.decode(message.value);
  },
  toProto(message: ICAConfig): Uint8Array {
    return ICAConfig.encode(message).finish();
  },
  toProtoMsg(message: ICAConfig): ICAConfigProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.ICAConfig",
      value: ICAConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ICAConfig.typeUrl, ICAConfig);
function createBaseExecutionConfiguration(): ExecutionConfiguration {
  return {
    saveMsgResponses: false,
    updatingDisabled: false,
    stopOnSuccess: false,
    stopOnFailure: false,
    fallbackToOwnerBalance: false,
    reregisterIcaAfterTimeout: false
  };
}
export const ExecutionConfiguration = {
  typeUrl: "/trst.autoibctx.v1beta1.ExecutionConfiguration",
  is(o: any): o is ExecutionConfiguration {
    return o && (o.$typeUrl === ExecutionConfiguration.typeUrl || typeof o.saveMsgResponses === "boolean" && typeof o.updatingDisabled === "boolean" && typeof o.stopOnSuccess === "boolean" && typeof o.stopOnFailure === "boolean" && typeof o.fallbackToOwnerBalance === "boolean" && typeof o.reregisterIcaAfterTimeout === "boolean");
  },
  isSDK(o: any): o is ExecutionConfigurationSDKType {
    return o && (o.$typeUrl === ExecutionConfiguration.typeUrl || typeof o.save_msg_responses === "boolean" && typeof o.updating_disabled === "boolean" && typeof o.stop_on_success === "boolean" && typeof o.stop_on_failure === "boolean" && typeof o.fallback_to_owner_balance === "boolean" && typeof o.reregister_ica_after_timeout === "boolean");
  },
  isAmino(o: any): o is ExecutionConfigurationAmino {
    return o && (o.$typeUrl === ExecutionConfiguration.typeUrl || typeof o.save_msg_responses === "boolean" && typeof o.updating_disabled === "boolean" && typeof o.stop_on_success === "boolean" && typeof o.stop_on_failure === "boolean" && typeof o.fallback_to_owner_balance === "boolean" && typeof o.reregister_ica_after_timeout === "boolean");
  },
  encode(message: ExecutionConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.saveMsgResponses === true) {
      writer.uint32(8).bool(message.saveMsgResponses);
    }
    if (message.updatingDisabled === true) {
      writer.uint32(16).bool(message.updatingDisabled);
    }
    if (message.stopOnSuccess === true) {
      writer.uint32(24).bool(message.stopOnSuccess);
    }
    if (message.stopOnFailure === true) {
      writer.uint32(32).bool(message.stopOnFailure);
    }
    if (message.fallbackToOwnerBalance === true) {
      writer.uint32(40).bool(message.fallbackToOwnerBalance);
    }
    if (message.reregisterIcaAfterTimeout === true) {
      writer.uint32(48).bool(message.reregisterIcaAfterTimeout);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecutionConfiguration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saveMsgResponses = reader.bool();
          break;
        case 2:
          message.updatingDisabled = reader.bool();
          break;
        case 3:
          message.stopOnSuccess = reader.bool();
          break;
        case 4:
          message.stopOnFailure = reader.bool();
          break;
        case 5:
          message.fallbackToOwnerBalance = reader.bool();
          break;
        case 6:
          message.reregisterIcaAfterTimeout = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExecutionConfiguration>): ExecutionConfiguration {
    const message = createBaseExecutionConfiguration();
    message.saveMsgResponses = object.saveMsgResponses ?? false;
    message.updatingDisabled = object.updatingDisabled ?? false;
    message.stopOnSuccess = object.stopOnSuccess ?? false;
    message.stopOnFailure = object.stopOnFailure ?? false;
    message.fallbackToOwnerBalance = object.fallbackToOwnerBalance ?? false;
    message.reregisterIcaAfterTimeout = object.reregisterIcaAfterTimeout ?? false;
    return message;
  },
  fromAmino(object: ExecutionConfigurationAmino): ExecutionConfiguration {
    const message = createBaseExecutionConfiguration();
    if (object.save_msg_responses !== undefined && object.save_msg_responses !== null) {
      message.saveMsgResponses = object.save_msg_responses;
    }
    if (object.updating_disabled !== undefined && object.updating_disabled !== null) {
      message.updatingDisabled = object.updating_disabled;
    }
    if (object.stop_on_success !== undefined && object.stop_on_success !== null) {
      message.stopOnSuccess = object.stop_on_success;
    }
    if (object.stop_on_failure !== undefined && object.stop_on_failure !== null) {
      message.stopOnFailure = object.stop_on_failure;
    }
    if (object.fallback_to_owner_balance !== undefined && object.fallback_to_owner_balance !== null) {
      message.fallbackToOwnerBalance = object.fallback_to_owner_balance;
    }
    if (object.reregister_ica_after_timeout !== undefined && object.reregister_ica_after_timeout !== null) {
      message.reregisterIcaAfterTimeout = object.reregister_ica_after_timeout;
    }
    return message;
  },
  toAmino(message: ExecutionConfiguration): ExecutionConfigurationAmino {
    const obj: any = {};
    obj.save_msg_responses = message.saveMsgResponses;
    obj.updating_disabled = message.updatingDisabled;
    obj.stop_on_success = message.stopOnSuccess;
    obj.stop_on_failure = message.stopOnFailure;
    obj.fallback_to_owner_balance = message.fallbackToOwnerBalance;
    obj.reregister_ica_after_timeout = message.reregisterIcaAfterTimeout;
    return obj;
  },
  fromAminoMsg(object: ExecutionConfigurationAminoMsg): ExecutionConfiguration {
    return ExecutionConfiguration.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutionConfigurationProtoMsg): ExecutionConfiguration {
    return ExecutionConfiguration.decode(message.value);
  },
  toProto(message: ExecutionConfiguration): Uint8Array {
    return ExecutionConfiguration.encode(message).finish();
  },
  toProtoMsg(message: ExecutionConfiguration): ExecutionConfigurationProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.ExecutionConfiguration",
      value: ExecutionConfiguration.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecutionConfiguration.typeUrl, ExecutionConfiguration);
function createBaseExecutionConditions(): ExecutionConditions {
  return {
    stopOnSuccessOf: [],
    stopOnFailureOf: [],
    skipOnFailureOf: [],
    skipOnSuccessOf: []
  };
}
export const ExecutionConditions = {
  typeUrl: "/trst.autoibctx.v1beta1.ExecutionConditions",
  is(o: any): o is ExecutionConditions {
    return o && (o.$typeUrl === ExecutionConditions.typeUrl || Array.isArray(o.stopOnSuccessOf) && (!o.stopOnSuccessOf.length || typeof o.stopOnSuccessOf[0] === "bigint") && Array.isArray(o.stopOnFailureOf) && (!o.stopOnFailureOf.length || typeof o.stopOnFailureOf[0] === "bigint") && Array.isArray(o.skipOnFailureOf) && (!o.skipOnFailureOf.length || typeof o.skipOnFailureOf[0] === "bigint") && Array.isArray(o.skipOnSuccessOf) && (!o.skipOnSuccessOf.length || typeof o.skipOnSuccessOf[0] === "bigint"));
  },
  isSDK(o: any): o is ExecutionConditionsSDKType {
    return o && (o.$typeUrl === ExecutionConditions.typeUrl || Array.isArray(o.stop_on_success_of) && (!o.stop_on_success_of.length || typeof o.stop_on_success_of[0] === "bigint") && Array.isArray(o.stop_on_failure_of) && (!o.stop_on_failure_of.length || typeof o.stop_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_failure_of) && (!o.skip_on_failure_of.length || typeof o.skip_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_success_of) && (!o.skip_on_success_of.length || typeof o.skip_on_success_of[0] === "bigint"));
  },
  isAmino(o: any): o is ExecutionConditionsAmino {
    return o && (o.$typeUrl === ExecutionConditions.typeUrl || Array.isArray(o.stop_on_success_of) && (!o.stop_on_success_of.length || typeof o.stop_on_success_of[0] === "bigint") && Array.isArray(o.stop_on_failure_of) && (!o.stop_on_failure_of.length || typeof o.stop_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_failure_of) && (!o.skip_on_failure_of.length || typeof o.skip_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_success_of) && (!o.skip_on_success_of.length || typeof o.skip_on_success_of[0] === "bigint"));
  },
  encode(message: ExecutionConditions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(42).fork();
    for (const v of message.stopOnSuccessOf) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.stopOnFailureOf) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.skipOnFailureOf) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.skipOnSuccessOf) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecutionConditions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionConditions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stopOnSuccessOf.push(reader.int64());
            }
          } else {
            message.stopOnSuccessOf.push(reader.int64());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stopOnFailureOf.push(reader.int64());
            }
          } else {
            message.stopOnFailureOf.push(reader.int64());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.skipOnFailureOf.push(reader.int64());
            }
          } else {
            message.skipOnFailureOf.push(reader.int64());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.skipOnSuccessOf.push(reader.int64());
            }
          } else {
            message.skipOnSuccessOf.push(reader.int64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ExecutionConditions>): ExecutionConditions {
    const message = createBaseExecutionConditions();
    message.stopOnSuccessOf = object.stopOnSuccessOf?.map(e => BigInt(e.toString())) || [];
    message.stopOnFailureOf = object.stopOnFailureOf?.map(e => BigInt(e.toString())) || [];
    message.skipOnFailureOf = object.skipOnFailureOf?.map(e => BigInt(e.toString())) || [];
    message.skipOnSuccessOf = object.skipOnSuccessOf?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ExecutionConditionsAmino): ExecutionConditions {
    const message = createBaseExecutionConditions();
    message.stopOnSuccessOf = object.stop_on_success_of?.map(e => BigInt(e)) || [];
    message.stopOnFailureOf = object.stop_on_failure_of?.map(e => BigInt(e)) || [];
    message.skipOnFailureOf = object.skip_on_failure_of?.map(e => BigInt(e)) || [];
    message.skipOnSuccessOf = object.skip_on_success_of?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: ExecutionConditions): ExecutionConditionsAmino {
    const obj: any = {};
    if (message.stopOnSuccessOf) {
      obj.stop_on_success_of = message.stopOnSuccessOf.map(e => e.toString());
    } else {
      obj.stop_on_success_of = [];
    }
    if (message.stopOnFailureOf) {
      obj.stop_on_failure_of = message.stopOnFailureOf.map(e => e.toString());
    } else {
      obj.stop_on_failure_of = [];
    }
    if (message.skipOnFailureOf) {
      obj.skip_on_failure_of = message.skipOnFailureOf.map(e => e.toString());
    } else {
      obj.skip_on_failure_of = [];
    }
    if (message.skipOnSuccessOf) {
      obj.skip_on_success_of = message.skipOnSuccessOf.map(e => e.toString());
    } else {
      obj.skip_on_success_of = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExecutionConditionsAminoMsg): ExecutionConditions {
    return ExecutionConditions.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecutionConditionsProtoMsg): ExecutionConditions {
    return ExecutionConditions.decode(message.value);
  },
  toProto(message: ExecutionConditions): Uint8Array {
    return ExecutionConditions.encode(message).finish();
  },
  toProtoMsg(message: ExecutionConditions): ExecutionConditionsProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.ExecutionConditions",
      value: ExecutionConditions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecutionConditions.typeUrl, ExecutionConditions);
function createBaseAutoTxHistory(): AutoTxHistory {
  return {
    history: []
  };
}
export const AutoTxHistory = {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxHistory",
  is(o: any): o is AutoTxHistory {
    return o && (o.$typeUrl === AutoTxHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || AutoTxHistoryEntry.is(o.history[0])));
  },
  isSDK(o: any): o is AutoTxHistorySDKType {
    return o && (o.$typeUrl === AutoTxHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || AutoTxHistoryEntry.isSDK(o.history[0])));
  },
  isAmino(o: any): o is AutoTxHistoryAmino {
    return o && (o.$typeUrl === AutoTxHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || AutoTxHistoryEntry.isAmino(o.history[0])));
  },
  encode(message: AutoTxHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      AutoTxHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutoTxHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoTxHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(AutoTxHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutoTxHistory>): AutoTxHistory {
    const message = createBaseAutoTxHistory();
    message.history = object.history?.map(e => AutoTxHistoryEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AutoTxHistoryAmino): AutoTxHistory {
    const message = createBaseAutoTxHistory();
    message.history = object.history?.map(e => AutoTxHistoryEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AutoTxHistory): AutoTxHistoryAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? AutoTxHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.history = [];
    }
    return obj;
  },
  fromAminoMsg(object: AutoTxHistoryAminoMsg): AutoTxHistory {
    return AutoTxHistory.fromAmino(object.value);
  },
  fromProtoMsg(message: AutoTxHistoryProtoMsg): AutoTxHistory {
    return AutoTxHistory.decode(message.value);
  },
  toProto(message: AutoTxHistory): Uint8Array {
    return AutoTxHistory.encode(message).finish();
  },
  toProtoMsg(message: AutoTxHistory): AutoTxHistoryProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.AutoTxHistory",
      value: AutoTxHistory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AutoTxHistory.typeUrl, AutoTxHistory);
function createBaseAutoTxHistoryEntry(): AutoTxHistoryEntry {
  return {
    scheduledExecTime: new Date(),
    actualExecTime: new Date(),
    execFee: Coin.fromPartial({}),
    executed: false,
    timedOut: false,
    errors: [],
    msgResponses: []
  };
}
export const AutoTxHistoryEntry = {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxHistoryEntry",
  is(o: any): o is AutoTxHistoryEntry {
    return o && (o.$typeUrl === AutoTxHistoryEntry.typeUrl || Timestamp.is(o.scheduledExecTime) && Timestamp.is(o.actualExecTime) && Coin.is(o.execFee) && typeof o.executed === "boolean" && typeof o.timedOut === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msgResponses) && (!o.msgResponses.length || Any.is(o.msgResponses[0])));
  },
  isSDK(o: any): o is AutoTxHistoryEntrySDKType {
    return o && (o.$typeUrl === AutoTxHistoryEntry.typeUrl || Timestamp.isSDK(o.scheduled_exec_time) && Timestamp.isSDK(o.actual_exec_time) && Coin.isSDK(o.exec_fee) && typeof o.executed === "boolean" && typeof o.timed_out === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isSDK(o.msg_responses[0])));
  },
  isAmino(o: any): o is AutoTxHistoryEntryAmino {
    return o && (o.$typeUrl === AutoTxHistoryEntry.typeUrl || Timestamp.isAmino(o.scheduled_exec_time) && Timestamp.isAmino(o.actual_exec_time) && Coin.isAmino(o.exec_fee) && typeof o.executed === "boolean" && typeof o.timed_out === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isAmino(o.msg_responses[0])));
  },
  encode(message: AutoTxHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduledExecTime !== undefined) {
      Timestamp.encode(toTimestamp(message.scheduledExecTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.actualExecTime !== undefined) {
      Timestamp.encode(toTimestamp(message.actualExecTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.execFee !== undefined) {
      Coin.encode(message.execFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.executed === true) {
      writer.uint32(32).bool(message.executed);
    }
    if (message.timedOut === true) {
      writer.uint32(40).bool(message.timedOut);
    }
    for (const v of message.errors) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.msgResponses) {
      Any.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutoTxHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoTxHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduledExecTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.actualExecTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.execFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.executed = reader.bool();
          break;
        case 5:
          message.timedOut = reader.bool();
          break;
        case 6:
          message.errors.push(reader.string());
          break;
        case 7:
          message.msgResponses.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutoTxHistoryEntry>): AutoTxHistoryEntry {
    const message = createBaseAutoTxHistoryEntry();
    message.scheduledExecTime = object.scheduledExecTime ?? undefined;
    message.actualExecTime = object.actualExecTime ?? undefined;
    message.execFee = object.execFee !== undefined && object.execFee !== null ? Coin.fromPartial(object.execFee) : undefined;
    message.executed = object.executed ?? false;
    message.timedOut = object.timedOut ?? false;
    message.errors = object.errors?.map(e => e) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AutoTxHistoryEntryAmino): AutoTxHistoryEntry {
    const message = createBaseAutoTxHistoryEntry();
    if (object.scheduled_exec_time !== undefined && object.scheduled_exec_time !== null) {
      message.scheduledExecTime = fromTimestamp(Timestamp.fromAmino(object.scheduled_exec_time));
    }
    if (object.actual_exec_time !== undefined && object.actual_exec_time !== null) {
      message.actualExecTime = fromTimestamp(Timestamp.fromAmino(object.actual_exec_time));
    }
    if (object.exec_fee !== undefined && object.exec_fee !== null) {
      message.execFee = Coin.fromAmino(object.exec_fee);
    }
    if (object.executed !== undefined && object.executed !== null) {
      message.executed = object.executed;
    }
    if (object.timed_out !== undefined && object.timed_out !== null) {
      message.timedOut = object.timed_out;
    }
    message.errors = object.errors?.map(e => e) || [];
    message.msgResponses = object.msg_responses?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AutoTxHistoryEntry): AutoTxHistoryEntryAmino {
    const obj: any = {};
    obj.scheduled_exec_time = message.scheduledExecTime ? Timestamp.toAmino(toTimestamp(message.scheduledExecTime)) : undefined;
    obj.actual_exec_time = message.actualExecTime ? Timestamp.toAmino(toTimestamp(message.actualExecTime)) : undefined;
    obj.exec_fee = message.execFee ? Coin.toAmino(message.execFee) : undefined;
    obj.executed = message.executed;
    obj.timed_out = message.timedOut;
    if (message.errors) {
      obj.errors = message.errors.map(e => e);
    } else {
      obj.errors = [];
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msg_responses = [];
    }
    return obj;
  },
  fromAminoMsg(object: AutoTxHistoryEntryAminoMsg): AutoTxHistoryEntry {
    return AutoTxHistoryEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: AutoTxHistoryEntryProtoMsg): AutoTxHistoryEntry {
    return AutoTxHistoryEntry.decode(message.value);
  },
  toProto(message: AutoTxHistoryEntry): Uint8Array {
    return AutoTxHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message: AutoTxHistoryEntry): AutoTxHistoryEntryProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.AutoTxHistoryEntry",
      value: AutoTxHistoryEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AutoTxHistoryEntry.typeUrl, AutoTxHistoryEntry);
function createBaseParams(): Params {
  return {
    AutoTxFundsCommission: BigInt(0),
    AutoTxFlexFeeMul: BigInt(0),
    AutoTxConstantFee: BigInt(0),
    RecurringAutoTxConstantFee: BigInt(0),
    MaxAutoTxDuration: Duration.fromPartial({}),
    MinAutoTxDuration: Duration.fromPartial({}),
    MinAutoTxInterval: Duration.fromPartial({}),
    relayerRewards: []
  };
}
export const Params = {
  typeUrl: "/trst.autoibctx.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.AutoTxFundsCommission === "bigint" && typeof o.AutoTxFlexFeeMul === "bigint" && typeof o.AutoTxConstantFee === "bigint" && typeof o.RecurringAutoTxConstantFee === "bigint" && Duration.is(o.MaxAutoTxDuration) && Duration.is(o.MinAutoTxDuration) && Duration.is(o.MinAutoTxInterval) && Array.isArray(o.relayerRewards) && (!o.relayerRewards.length || typeof o.relayerRewards[0] === "bigint"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.AutoTxFundsCommission === "bigint" && typeof o.AutoTxFlexFeeMul === "bigint" && typeof o.AutoTxConstantFee === "bigint" && typeof o.RecurringAutoTxConstantFee === "bigint" && Duration.isSDK(o.MaxAutoTxDuration) && Duration.isSDK(o.MinAutoTxDuration) && Duration.isSDK(o.MinAutoTxInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.AutoTxFundsCommission === "bigint" && typeof o.AutoTxFlexFeeMul === "bigint" && typeof o.AutoTxConstantFee === "bigint" && typeof o.RecurringAutoTxConstantFee === "bigint" && Duration.isAmino(o.MaxAutoTxDuration) && Duration.isAmino(o.MinAutoTxDuration) && Duration.isAmino(o.MinAutoTxInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.AutoTxFundsCommission !== BigInt(0)) {
      writer.uint32(8).int64(message.AutoTxFundsCommission);
    }
    if (message.AutoTxFlexFeeMul !== BigInt(0)) {
      writer.uint32(16).int64(message.AutoTxFlexFeeMul);
    }
    if (message.AutoTxConstantFee !== BigInt(0)) {
      writer.uint32(24).int64(message.AutoTxConstantFee);
    }
    if (message.RecurringAutoTxConstantFee !== BigInt(0)) {
      writer.uint32(32).int64(message.RecurringAutoTxConstantFee);
    }
    if (message.MaxAutoTxDuration !== undefined) {
      Duration.encode(message.MaxAutoTxDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.MinAutoTxDuration !== undefined) {
      Duration.encode(message.MinAutoTxDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.MinAutoTxInterval !== undefined) {
      Duration.encode(message.MinAutoTxInterval, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).fork();
    for (const v of message.relayerRewards) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AutoTxFundsCommission = reader.int64();
          break;
        case 2:
          message.AutoTxFlexFeeMul = reader.int64();
          break;
        case 3:
          message.AutoTxConstantFee = reader.int64();
          break;
        case 4:
          message.RecurringAutoTxConstantFee = reader.int64();
          break;
        case 5:
          message.MaxAutoTxDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.MinAutoTxDuration = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.MinAutoTxInterval = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.relayerRewards.push(reader.int64());
            }
          } else {
            message.relayerRewards.push(reader.int64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.AutoTxFundsCommission = object.AutoTxFundsCommission !== undefined && object.AutoTxFundsCommission !== null ? BigInt(object.AutoTxFundsCommission.toString()) : BigInt(0);
    message.AutoTxFlexFeeMul = object.AutoTxFlexFeeMul !== undefined && object.AutoTxFlexFeeMul !== null ? BigInt(object.AutoTxFlexFeeMul.toString()) : BigInt(0);
    message.AutoTxConstantFee = object.AutoTxConstantFee !== undefined && object.AutoTxConstantFee !== null ? BigInt(object.AutoTxConstantFee.toString()) : BigInt(0);
    message.RecurringAutoTxConstantFee = object.RecurringAutoTxConstantFee !== undefined && object.RecurringAutoTxConstantFee !== null ? BigInt(object.RecurringAutoTxConstantFee.toString()) : BigInt(0);
    message.MaxAutoTxDuration = object.MaxAutoTxDuration !== undefined && object.MaxAutoTxDuration !== null ? Duration.fromPartial(object.MaxAutoTxDuration) : undefined;
    message.MinAutoTxDuration = object.MinAutoTxDuration !== undefined && object.MinAutoTxDuration !== null ? Duration.fromPartial(object.MinAutoTxDuration) : undefined;
    message.MinAutoTxInterval = object.MinAutoTxInterval !== undefined && object.MinAutoTxInterval !== null ? Duration.fromPartial(object.MinAutoTxInterval) : undefined;
    message.relayerRewards = object.relayerRewards?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.AutoTxFundsCommission !== undefined && object.AutoTxFundsCommission !== null) {
      message.AutoTxFundsCommission = BigInt(object.AutoTxFundsCommission);
    }
    if (object.AutoTxFlexFeeMul !== undefined && object.AutoTxFlexFeeMul !== null) {
      message.AutoTxFlexFeeMul = BigInt(object.AutoTxFlexFeeMul);
    }
    if (object.AutoTxConstantFee !== undefined && object.AutoTxConstantFee !== null) {
      message.AutoTxConstantFee = BigInt(object.AutoTxConstantFee);
    }
    if (object.RecurringAutoTxConstantFee !== undefined && object.RecurringAutoTxConstantFee !== null) {
      message.RecurringAutoTxConstantFee = BigInt(object.RecurringAutoTxConstantFee);
    }
    if (object.MaxAutoTxDuration !== undefined && object.MaxAutoTxDuration !== null) {
      message.MaxAutoTxDuration = Duration.fromAmino(object.MaxAutoTxDuration);
    }
    if (object.MinAutoTxDuration !== undefined && object.MinAutoTxDuration !== null) {
      message.MinAutoTxDuration = Duration.fromAmino(object.MinAutoTxDuration);
    }
    if (object.MinAutoTxInterval !== undefined && object.MinAutoTxInterval !== null) {
      message.MinAutoTxInterval = Duration.fromAmino(object.MinAutoTxInterval);
    }
    message.relayerRewards = object.relayer_rewards?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.AutoTxFundsCommission = message.AutoTxFundsCommission ? message.AutoTxFundsCommission.toString() : undefined;
    obj.AutoTxFlexFeeMul = message.AutoTxFlexFeeMul ? message.AutoTxFlexFeeMul.toString() : undefined;
    obj.AutoTxConstantFee = message.AutoTxConstantFee ? message.AutoTxConstantFee.toString() : undefined;
    obj.RecurringAutoTxConstantFee = message.RecurringAutoTxConstantFee ? message.RecurringAutoTxConstantFee.toString() : undefined;
    obj.MaxAutoTxDuration = message.MaxAutoTxDuration ? Duration.toAmino(message.MaxAutoTxDuration) : undefined;
    obj.MinAutoTxDuration = message.MinAutoTxDuration ? Duration.toAmino(message.MinAutoTxDuration) : undefined;
    obj.MinAutoTxInterval = message.MinAutoTxInterval ? Duration.toAmino(message.MinAutoTxInterval) : undefined;
    if (message.relayerRewards) {
      obj.relayer_rewards = message.relayerRewards.map(e => e.toString());
    } else {
      obj.relayer_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);