import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
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
  autoTxHistory: AutoTxHistoryEntry[];
  portId: string;
  connectionId: string;
  updateHistory: Date[];
  configuration: ExecutionConfiguration;
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
  tx_id: string;
  owner: string;
  label: string;
  fee_address: string;
  msgs: AnyAmino[];
  interval?: DurationAmino;
  start_time?: Date;
  exec_time?: Date;
  end_time?: Date;
  auto_tx_history: AutoTxHistoryEntryAmino[];
  port_id: string;
  connection_id: string;
  update_history: Date[];
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
  auto_tx_history: AutoTxHistoryEntrySDKType[];
  port_id: string;
  connection_id: string;
  update_history: Date[];
  configuration: ExecutionConfigurationSDKType;
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
}
export interface ExecutionConfigurationProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.ExecutionConfiguration";
  value: Uint8Array;
}
/** ExecutionConfiguration provides the execution-related configuration of the AutoTx */
export interface ExecutionConfigurationAmino {
  /** if true, the AutoTx outputs are saved and can be used in condition-based logic */
  save_msg_responses: boolean;
  /** if true, the AutoTx is not updatable */
  updating_disabled: boolean;
  /** If true, will execute until we get a successful AutoTx, if false/unset will always execute */
  stop_on_success: boolean;
  /** If true, will execute until successful AutoTx, if false/unset will always execute */
  stop_on_failure: boolean;
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
  stop_on_success_of: string[];
  /** optional array of dependent AutoTxs that when not executing succesfully, stops further execution */
  stop_on_failure_of: string[];
  /** optional array of dependent AutoTxs that should be executed succesfully in their latest call before upcomming execution is allowed */
  skip_on_failure_of: string[];
  /** optional array of dependent autotxs that should fail their latest call before upcomming execution is allowed */
  skip_on_success_of: string[];
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
  scheduled_exec_time?: Date;
  actual_exec_time?: Date;
  exec_fee?: CoinAmino;
  /** whether all messages are executed, independent of succesfull result */
  executed: boolean;
  /** timed out from execution over IBC */
  timed_out: boolean;
  /** errors from execution, if executed and no error the execution was succesfull */
  errors: string[];
  /** will be empty when save_msg_responses is false */
  msg_responses: AnyAmino[];
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
  AutoTxFundsCommission: string;
  AutoTxFlexFeeMul: string;
  AutoTxConstantFee: string;
  RecurringAutoTxConstantFee: string;
  /** Maximum period for self-executing AutoTx */
  MaxAutoTxDuration?: DurationAmino;
  /** Minimum period for self-executing AutoTx */
  MinAutoTxDuration?: DurationAmino;
  /** Minimum period for self-executing AutoTx */
  MinAutoTxInterval?: DurationAmino;
  /** relayer rewards in utrst for each message type 0=SDK,1=Wasm, 2=Osmo. Rewards are in utrst and topped up in the module account by alloc module. */
  relayer_rewards: string[];
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
    autoTxHistory: [],
    portId: "",
    connectionId: "",
    updateHistory: [],
    configuration: ExecutionConfiguration.fromPartial({})
  };
}
export const AutoTxInfo = {
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
      Any.encode((v! as Any), writer.uint32(42).fork()).ldelim();
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
    for (const v of message.autoTxHistory) {
      AutoTxHistoryEntry.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(90).string(message.portId);
    }
    if (message.connectionId !== "") {
      writer.uint32(98).string(message.connectionId);
    }
    for (const v of message.updateHistory) {
      Timestamp.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ExecutionConfiguration.encode(message.configuration, writer.uint32(114).fork()).ldelim();
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
          message.msgs.push((Sdk_Msg_InterfaceDecoder(reader) as Any));
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
          message.autoTxHistory.push(AutoTxHistoryEntry.decode(reader, reader.uint32()));
          break;
        case 11:
          message.portId = reader.string();
          break;
        case 12:
          message.connectionId = reader.string();
          break;
        case 13:
          message.updateHistory.push(Timestamp.decode(reader, reader.uint32()));
          break;
        case 14:
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
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? Duration.fromPartial(object.interval) : undefined;
    message.startTime = object.startTime ?? undefined;
    message.execTime = object.execTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.autoTxHistory = object.autoTxHistory?.map(e => AutoTxHistoryEntry.fromPartial(e)) || [];
    message.portId = object.portId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.updateHistory = object.updateHistory?.map(e => Timestamp.fromPartial(e)) || [];
    message.configuration = object.configuration !== undefined && object.configuration !== null ? ExecutionConfiguration.fromPartial(object.configuration) : undefined;
    return message;
  },
  fromAmino(object: AutoTxInfoAmino): AutoTxInfo {
    return {
      txId: BigInt(object.tx_id),
      owner: object.owner,
      label: object.label,
      feeAddress: object.fee_address,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Sdk_Msg_FromAmino(e)) : [],
      interval: object?.interval ? Duration.fromAmino(object.interval) : undefined,
      startTime: object.start_time,
      execTime: object.exec_time,
      endTime: object.end_time,
      autoTxHistory: Array.isArray(object?.auto_tx_history) ? object.auto_tx_history.map((e: any) => AutoTxHistoryEntry.fromAmino(e)) : [],
      portId: object.port_id,
      connectionId: object.connection_id,
      updateHistory: Array.isArray(object?.update_history) ? object.update_history.map((e: any) => Timestamp.fromAmino(e)) : [],
      configuration: object?.configuration ? ExecutionConfiguration.fromAmino(object.configuration) : undefined
    };
  },
  toAmino(message: AutoTxInfo): AutoTxInfoAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? message.txId.toString() : undefined;
    obj.owner = message.owner;
    obj.label = message.label;
    obj.fee_address = message.feeAddress;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Sdk_Msg_ToAmino((e as Any)) : undefined);
    } else {
      obj.msgs = [];
    }
    obj.interval = message.interval ? Duration.toAmino(message.interval) : undefined;
    obj.start_time = message.startTime;
    obj.exec_time = message.execTime;
    obj.end_time = message.endTime;
    if (message.autoTxHistory) {
      obj.auto_tx_history = message.autoTxHistory.map(e => e ? AutoTxHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.auto_tx_history = [];
    }
    obj.port_id = message.portId;
    obj.connection_id = message.connectionId;
    if (message.updateHistory) {
      obj.update_history = message.updateHistory.map(e => e ? Timestamp.toAmino(e) : undefined);
    } else {
      obj.update_history = [];
    }
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
function createBaseExecutionConfiguration(): ExecutionConfiguration {
  return {
    saveMsgResponses: false,
    updatingDisabled: false,
    stopOnSuccess: false,
    stopOnFailure: false
  };
}
export const ExecutionConfiguration = {
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
    return message;
  },
  fromAmino(object: ExecutionConfigurationAmino): ExecutionConfiguration {
    return {
      saveMsgResponses: object.save_msg_responses,
      updatingDisabled: object.updating_disabled,
      stopOnSuccess: object.stop_on_success,
      stopOnFailure: object.stop_on_failure
    };
  },
  toAmino(message: ExecutionConfiguration): ExecutionConfigurationAmino {
    const obj: any = {};
    obj.save_msg_responses = message.saveMsgResponses;
    obj.updating_disabled = message.updatingDisabled;
    obj.stop_on_success = message.stopOnSuccess;
    obj.stop_on_failure = message.stopOnFailure;
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
function createBaseExecutionConditions(): ExecutionConditions {
  return {
    stopOnSuccessOf: [],
    stopOnFailureOf: [],
    skipOnFailureOf: [],
    skipOnSuccessOf: []
  };
}
export const ExecutionConditions = {
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
    return {
      stopOnSuccessOf: Array.isArray(object?.stop_on_success_of) ? object.stop_on_success_of.map((e: any) => BigInt(e)) : [],
      stopOnFailureOf: Array.isArray(object?.stop_on_failure_of) ? object.stop_on_failure_of.map((e: any) => BigInt(e)) : [],
      skipOnFailureOf: Array.isArray(object?.skip_on_failure_of) ? object.skip_on_failure_of.map((e: any) => BigInt(e)) : [],
      skipOnSuccessOf: Array.isArray(object?.skip_on_success_of) ? object.skip_on_success_of.map((e: any) => BigInt(e)) : []
    };
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
    return {
      scheduledExecTime: object.scheduled_exec_time,
      actualExecTime: object.actual_exec_time,
      execFee: object?.exec_fee ? Coin.fromAmino(object.exec_fee) : undefined,
      executed: object.executed,
      timedOut: object.timed_out,
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => e) : [],
      msgResponses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: AutoTxHistoryEntry): AutoTxHistoryEntryAmino {
    const obj: any = {};
    obj.scheduled_exec_time = message.scheduledExecTime;
    obj.actual_exec_time = message.actualExecTime;
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
    return {
      AutoTxFundsCommission: BigInt(object.AutoTxFundsCommission),
      AutoTxFlexFeeMul: BigInt(object.AutoTxFlexFeeMul),
      AutoTxConstantFee: BigInt(object.AutoTxConstantFee),
      RecurringAutoTxConstantFee: BigInt(object.RecurringAutoTxConstantFee),
      MaxAutoTxDuration: object?.MaxAutoTxDuration ? Duration.fromAmino(object.MaxAutoTxDuration) : undefined,
      MinAutoTxDuration: object?.MinAutoTxDuration ? Duration.fromAmino(object.MinAutoTxDuration) : undefined,
      MinAutoTxInterval: object?.MinAutoTxInterval ? Duration.fromAmino(object.MinAutoTxInterval) : undefined,
      relayerRewards: Array.isArray(object?.relayer_rewards) ? object.relayer_rewards.map((e: any) => BigInt(e)) : []
    };
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