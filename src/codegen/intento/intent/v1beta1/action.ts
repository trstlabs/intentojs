import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Comparison operators that can be used for various types. */
export enum ComparisonOperator {
  /** EQUAL - Equality check (for all types) */
  EQUAL = 0,
  /** CONTAINS - Contains check (for strings, arrays, etc.) */
  CONTAINS = 1,
  /** NOT_CONTAINS - Not contains check (for strings, arrays, etc.) */
  NOT_CONTAINS = 2,
  /** SMALLER_THAN - Less than check (for numeric types) */
  SMALLER_THAN = 3,
  /** LARGER_THAN - Greater than check (for numeric types) */
  LARGER_THAN = 4,
  /** GREATER_EQUAL - Greater than or equal to check (for numeric types) */
  GREATER_EQUAL = 5,
  /** LESS_EQUAL - Less than or equal to check (for numeric types) */
  LESS_EQUAL = 6,
  /** STARTS_WITH - Starts with check (for strings) */
  STARTS_WITH = 7,
  /** ENDS_WITH - Ends with check (for strings) */
  ENDS_WITH = 8,
  /** NOT_EQUAL - Not equal check (for all types) */
  NOT_EQUAL = 9,
  UNRECOGNIZED = -1,
}
export const ComparisonOperatorSDKType = ComparisonOperator;
export const ComparisonOperatorAmino = ComparisonOperator;
export function comparisonOperatorFromJSON(object: any): ComparisonOperator {
  switch (object) {
    case 0:
    case "EQUAL":
      return ComparisonOperator.EQUAL;
    case 1:
    case "CONTAINS":
      return ComparisonOperator.CONTAINS;
    case 2:
    case "NOT_CONTAINS":
      return ComparisonOperator.NOT_CONTAINS;
    case 3:
    case "SMALLER_THAN":
      return ComparisonOperator.SMALLER_THAN;
    case 4:
    case "LARGER_THAN":
      return ComparisonOperator.LARGER_THAN;
    case 5:
    case "GREATER_EQUAL":
      return ComparisonOperator.GREATER_EQUAL;
    case 6:
    case "LESS_EQUAL":
      return ComparisonOperator.LESS_EQUAL;
    case 7:
    case "STARTS_WITH":
      return ComparisonOperator.STARTS_WITH;
    case 8:
    case "ENDS_WITH":
      return ComparisonOperator.ENDS_WITH;
    case 9:
    case "NOT_EQUAL":
      return ComparisonOperator.NOT_EQUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ComparisonOperator.UNRECOGNIZED;
  }
}
export function comparisonOperatorToJSON(object: ComparisonOperator): string {
  switch (object) {
    case ComparisonOperator.EQUAL:
      return "EQUAL";
    case ComparisonOperator.CONTAINS:
      return "CONTAINS";
    case ComparisonOperator.NOT_CONTAINS:
      return "NOT_CONTAINS";
    case ComparisonOperator.SMALLER_THAN:
      return "SMALLER_THAN";
    case ComparisonOperator.LARGER_THAN:
      return "LARGER_THAN";
    case ComparisonOperator.GREATER_EQUAL:
      return "GREATER_EQUAL";
    case ComparisonOperator.LESS_EQUAL:
      return "LESS_EQUAL";
    case ComparisonOperator.STARTS_WITH:
      return "STARTS_WITH";
    case ComparisonOperator.ENDS_WITH:
      return "ENDS_WITH";
    case ComparisonOperator.NOT_EQUAL:
      return "NOT_EQUAL";
    case ComparisonOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ActionInfo stores the info for the action */
export interface ActionInfo {
  id: bigint;
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
  hostedConfig?: HostedConfig;
  conditions?: ExecutionConditions;
}
export interface ActionInfoProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ActionInfo";
  value: Uint8Array;
}
export type ActionInfoEncoded = Omit<ActionInfo, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** ActionInfo stores the info for the action */
export interface ActionInfoAmino {
  id?: string;
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
  hosted_config?: HostedConfigAmino;
  conditions?: ExecutionConditionsAmino;
}
export interface ActionInfoAminoMsg {
  type: "/intento.intent.v1beta1.ActionInfo";
  value: ActionInfoAmino;
}
/** ActionInfo stores the info for the action */
export interface ActionInfoSDKType {
  id: bigint;
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
  hosted_config?: HostedConfigSDKType;
  conditions?: ExecutionConditionsSDKType;
}
export interface ICAConfig {
  portId: string;
  connectionId: string;
  hostConnectionId: string;
}
export interface ICAConfigProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ICAConfig";
  value: Uint8Array;
}
export interface ICAConfigAmino {
  port_id?: string;
  connection_id?: string;
  host_connection_id?: string;
}
export interface ICAConfigAminoMsg {
  type: "/intento.intent.v1beta1.ICAConfig";
  value: ICAConfigAmino;
}
export interface ICAConfigSDKType {
  port_id: string;
  connection_id: string;
  host_connection_id: string;
}
export interface HostedConfig {
  hostedAddress: string;
  feeCoinLimit: Coin;
}
export interface HostedConfigProtoMsg {
  typeUrl: "/intento.intent.v1beta1.HostedConfig";
  value: Uint8Array;
}
export interface HostedConfigAmino {
  hosted_address?: string;
  fee_coin_limit?: CoinAmino;
}
export interface HostedConfigAminoMsg {
  type: "/intento.intent.v1beta1.HostedConfig";
  value: HostedConfigAmino;
}
export interface HostedConfigSDKType {
  hosted_address: string;
  fee_coin_limit: CoinSDKType;
}
/** ExecutionConfiguration provides the execution-related configuration of the action */
export interface ExecutionConfiguration {
  /** if true, the action response outputs are saved and can be used in logic */
  saveMsgResponses: boolean;
  /** if true, the action is not updatable */
  updatingDisabled: boolean;
  /** If true, will execute until we get a successful Action, if false/unset will always execute */
  stopOnSuccess: boolean;
  /** If true, will execute until successful Action, if false/unset will always execute */
  stopOnFailure: boolean;
  /** If true, owner account balance is used when trigger account funds run out */
  fallbackToOwnerBalance: boolean;
  /** If true, allows the action to continue execution after an ibc channel times out (recommended) */
  reregisterIcaAfterTimeout: boolean;
}
export interface ExecutionConfigurationProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ExecutionConfiguration";
  value: Uint8Array;
}
/** ExecutionConfiguration provides the execution-related configuration of the action */
export interface ExecutionConfigurationAmino {
  /** if true, the action response outputs are saved and can be used in logic */
  save_msg_responses?: boolean;
  /** if true, the action is not updatable */
  updating_disabled?: boolean;
  /** If true, will execute until we get a successful Action, if false/unset will always execute */
  stop_on_success?: boolean;
  /** If true, will execute until successful Action, if false/unset will always execute */
  stop_on_failure?: boolean;
  /** If true, owner account balance is used when trigger account funds run out */
  fallback_to_owner_balance?: boolean;
  /** If true, allows the action to continue execution after an ibc channel times out (recommended) */
  reregister_ica_after_timeout?: boolean;
}
export interface ExecutionConfigurationAminoMsg {
  type: "/intento.intent.v1beta1.ExecutionConfiguration";
  value: ExecutionConfigurationAmino;
}
/** ExecutionConfiguration provides the execution-related configuration of the action */
export interface ExecutionConfigurationSDKType {
  save_msg_responses: boolean;
  updating_disabled: boolean;
  stop_on_success: boolean;
  stop_on_failure: boolean;
  fallback_to_owner_balance: boolean;
  reregister_ica_after_timeout: boolean;
}
/** ActionHistory execution history */
export interface ActionHistory {
  history: ActionHistoryEntry[];
}
export interface ActionHistoryProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ActionHistory";
  value: Uint8Array;
}
/** ActionHistory execution history */
export interface ActionHistoryAmino {
  history?: ActionHistoryEntryAmino[];
}
export interface ActionHistoryAminoMsg {
  type: "/intento.intent.v1beta1.ActionHistory";
  value: ActionHistoryAmino;
}
/** ActionHistory execution history */
export interface ActionHistorySDKType {
  history: ActionHistoryEntrySDKType[];
}
/** ActionHistoryEntry provides a the history of action interchain tx call */
export interface ActionHistoryEntry {
  scheduledExecTime: Date;
  actualExecTime: Date;
  execFee: Coin;
  /** whether all messages are executed, independent of succesfull result */
  executed: boolean;
  /** timed out from execution over IBC */
  timedOut: boolean;
  /** errors from execution, if executed and no error the execution was succesfull */
  errors: string[];
  /** will be empty when save_responses is false */
  msgResponses: Any[];
}
export interface ActionHistoryEntryProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ActionHistoryEntry";
  value: Uint8Array;
}
/** ActionHistoryEntry provides a the history of action interchain tx call */
export interface ActionHistoryEntryAmino {
  scheduled_exec_time?: string;
  actual_exec_time?: string;
  exec_fee?: CoinAmino;
  /** whether all messages are executed, independent of succesfull result */
  executed?: boolean;
  /** timed out from execution over IBC */
  timed_out?: boolean;
  /** errors from execution, if executed and no error the execution was succesfull */
  errors?: string[];
  /** will be empty when save_responses is false */
  msg_responses?: AnyAmino[];
}
export interface ActionHistoryEntryAminoMsg {
  type: "/intento.intent.v1beta1.ActionHistoryEntry";
  value: ActionHistoryEntryAmino;
}
/** ActionHistoryEntry provides a the history of action interchain tx call */
export interface ActionHistoryEntrySDKType {
  scheduled_exec_time: Date;
  actual_exec_time: Date;
  exec_fee: CoinSDKType;
  executed: boolean;
  timed_out: boolean;
  errors: string[];
  msg_responses: AnySDKType[];
}
/** ExecutionConditions provides execution conditions for the action */
export interface ExecutionConditions {
  /** Replace value with value from message or response from another action’s latest output */
  useResponseValue?: UseResponseValue;
  /** Comparison with response response value */
  responseComparison?: ResponseComparision;
  /** optional array of dependent intents that when executing succesfully, stops execution */
  stopOnSuccessOf: bigint[];
  /** optional array of dependent intents that when not executing succesfully, stops execution */
  stopOnFailureOf: bigint[];
  /** optional array of dependent intents that should be executed succesfully after their latest call before execution is allowed */
  skipOnFailureOf: bigint[];
  /** optional array of dependent intents that should fail after their latest call before execution is allowed */
  skipOnSuccessOf: bigint[];
}
export interface ExecutionConditionsProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ExecutionConditions";
  value: Uint8Array;
}
/** ExecutionConditions provides execution conditions for the action */
export interface ExecutionConditionsAmino {
  /** Replace value with value from message or response from another action’s latest output */
  use_response_value?: UseResponseValueAmino;
  /** Comparison with response response value */
  response_comparison?: ResponseComparisionAmino;
  /** optional array of dependent intents that when executing succesfully, stops execution */
  stop_on_success_of?: string[];
  /** optional array of dependent intents that when not executing succesfully, stops execution */
  stop_on_failure_of?: string[];
  /** optional array of dependent intents that should be executed succesfully after their latest call before execution is allowed */
  skip_on_failure_of?: string[];
  /** optional array of dependent intents that should fail after their latest call before execution is allowed */
  skip_on_success_of?: string[];
}
export interface ExecutionConditionsAminoMsg {
  type: "/intento.intent.v1beta1.ExecutionConditions";
  value: ExecutionConditionsAmino;
}
/** ExecutionConditions provides execution conditions for the action */
export interface ExecutionConditionsSDKType {
  use_response_value?: UseResponseValueSDKType;
  response_comparison?: ResponseComparisionSDKType;
  stop_on_success_of: bigint[];
  stop_on_failure_of: bigint[];
  skip_on_failure_of: bigint[];
  skip_on_success_of: bigint[];
}
/** Replace value with value from message or response from another action’s latest output before execution */
export interface UseResponseValue {
  /** action to get the latest response value from, optional */
  actionId: bigint;
  /** index of the responses */
  responseIndex: number;
  /** for example "amount" */
  responseKey: string;
  /** index of the msg to replace */
  msgsIndex: number;
  /** key of the message to replace (e.g. fromAddress) */
  msgKey: string;
  valueType: string;
}
export interface UseResponseValueProtoMsg {
  typeUrl: "/intento.intent.v1beta1.UseResponseValue";
  value: Uint8Array;
}
/** Replace value with value from message or response from another action’s latest output before execution */
export interface UseResponseValueAmino {
  /** action to get the latest response value from, optional */
  action_id?: string;
  /** index of the responses */
  response_index?: number;
  /** for example "amount" */
  response_key?: string;
  /** index of the msg to replace */
  msgs_index?: number;
  /** key of the message to replace (e.g. fromAddress) */
  msg_key?: string;
  value_type?: string;
}
export interface UseResponseValueAminoMsg {
  type: "/intento.intent.v1beta1.UseResponseValue";
  value: UseResponseValueAmino;
}
/** Replace value with value from message or response from another action’s latest output before execution */
export interface UseResponseValueSDKType {
  action_id: bigint;
  response_index: number;
  response_key: string;
  msgs_index: number;
  msg_key: string;
  value_type: string;
}
/** ResponseComparision is checked on the response in JSON before execution of action and outputs true or false */
export interface ResponseComparision {
  /** action to get the latest response value from, optional */
  actionId: bigint;
  /** index of the response */
  responseIndex: number;
  responseKey: string;
  valueType: string;
  comparisonOperator: ComparisonOperator;
  comparisonOperand: string;
}
export interface ResponseComparisionProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ResponseComparision";
  value: Uint8Array;
}
/** ResponseComparision is checked on the response in JSON before execution of action and outputs true or false */
export interface ResponseComparisionAmino {
  /** action to get the latest response value from, optional */
  action_id?: string;
  /** index of the response */
  response_index?: number;
  response_key?: string;
  value_type?: string;
  comparison_operator?: ComparisonOperator;
  comparison_operand?: string;
}
export interface ResponseComparisionAminoMsg {
  type: "/intento.intent.v1beta1.ResponseComparision";
  value: ResponseComparisionAmino;
}
/** ResponseComparision is checked on the response in JSON before execution of action and outputs true or false */
export interface ResponseComparisionSDKType {
  action_id: bigint;
  response_index: number;
  response_key: string;
  value_type: string;
  comparison_operator: ComparisonOperator;
  comparison_operand: string;
}
function createBaseActionInfo(): ActionInfo {
  return {
    id: BigInt(0),
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
    configuration: undefined,
    hostedConfig: undefined,
    conditions: undefined
  };
}
export const ActionInfo = {
  typeUrl: "/intento.intent.v1beta1.ActionInfo",
  is(o: any): o is ActionInfo {
    return o && (o.$typeUrl === ActionInfo.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.feeAddress === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && Duration.is(o.interval) && Timestamp.is(o.startTime) && Timestamp.is(o.execTime) && Timestamp.is(o.endTime) && Array.isArray(o.updateHistory) && (!o.updateHistory.length || Timestamp.is(o.updateHistory[0])));
  },
  isSDK(o: any): o is ActionInfoSDKType {
    return o && (o.$typeUrl === ActionInfo.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.fee_address === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && Duration.isSDK(o.interval) && Timestamp.isSDK(o.start_time) && Timestamp.isSDK(o.exec_time) && Timestamp.isSDK(o.end_time) && Array.isArray(o.update_history) && (!o.update_history.length || Timestamp.isSDK(o.update_history[0])));
  },
  isAmino(o: any): o is ActionInfoAmino {
    return o && (o.$typeUrl === ActionInfo.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.fee_address === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && Duration.isAmino(o.interval) && Timestamp.isAmino(o.start_time) && Timestamp.isAmino(o.exec_time) && Timestamp.isAmino(o.end_time) && Array.isArray(o.update_history) && (!o.update_history.length || Timestamp.isAmino(o.update_history[0])));
  },
  encode(message: ActionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
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
    if (message.hostedConfig !== undefined) {
      HostedConfig.encode(message.hostedConfig, writer.uint32(114).fork()).ldelim();
    }
    if (message.conditions !== undefined) {
      ExecutionConditions.encode(message.conditions, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
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
        case 14:
          message.hostedConfig = HostedConfig.decode(reader, reader.uint32());
          break;
        case 15:
          message.conditions = ExecutionConditions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionInfo>): ActionInfo {
    const message = createBaseActionInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
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
    message.hostedConfig = object.hostedConfig !== undefined && object.hostedConfig !== null ? HostedConfig.fromPartial(object.hostedConfig) : undefined;
    message.conditions = object.conditions !== undefined && object.conditions !== null ? ExecutionConditions.fromPartial(object.conditions) : undefined;
    return message;
  },
  fromAmino(object: ActionInfoAmino): ActionInfo {
    const message = createBaseActionInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
    if (object.hosted_config !== undefined && object.hosted_config !== null) {
      message.hostedConfig = HostedConfig.fromAmino(object.hosted_config);
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      message.conditions = ExecutionConditions.fromAmino(object.conditions);
    }
    return message;
  },
  toAmino(message: ActionInfo): ActionInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.label = message.label === "" ? undefined : message.label;
    obj.fee_address = message.feeAddress === "" ? undefined : message.feeAddress;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.interval = message.interval ? Duration.toAmino(message.interval) : undefined;
    obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
    obj.exec_time = message.execTime ? Timestamp.toAmino(toTimestamp(message.execTime)) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
    if (message.updateHistory) {
      obj.update_history = message.updateHistory.map(e => e ? Timestamp.toAmino(e) : undefined);
    } else {
      obj.update_history = message.updateHistory;
    }
    obj.ica_config = message.icaConfig ? ICAConfig.toAmino(message.icaConfig) : undefined;
    obj.configuration = message.configuration ? ExecutionConfiguration.toAmino(message.configuration) : undefined;
    obj.hosted_config = message.hostedConfig ? HostedConfig.toAmino(message.hostedConfig) : undefined;
    obj.conditions = message.conditions ? ExecutionConditions.toAmino(message.conditions) : undefined;
    return obj;
  },
  fromAminoMsg(object: ActionInfoAminoMsg): ActionInfo {
    return ActionInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionInfoProtoMsg): ActionInfo {
    return ActionInfo.decode(message.value);
  },
  toProto(message: ActionInfo): Uint8Array {
    return ActionInfo.encode(message).finish();
  },
  toProtoMsg(message: ActionInfo): ActionInfoProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ActionInfo",
      value: ActionInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActionInfo.typeUrl, ActionInfo);
function createBaseICAConfig(): ICAConfig {
  return {
    portId: "",
    connectionId: "",
    hostConnectionId: ""
  };
}
export const ICAConfig = {
  typeUrl: "/intento.intent.v1beta1.ICAConfig",
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
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.host_connection_id = message.hostConnectionId === "" ? undefined : message.hostConnectionId;
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
      typeUrl: "/intento.intent.v1beta1.ICAConfig",
      value: ICAConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ICAConfig.typeUrl, ICAConfig);
function createBaseHostedConfig(): HostedConfig {
  return {
    hostedAddress: "",
    feeCoinLimit: Coin.fromPartial({})
  };
}
export const HostedConfig = {
  typeUrl: "/intento.intent.v1beta1.HostedConfig",
  is(o: any): o is HostedConfig {
    return o && (o.$typeUrl === HostedConfig.typeUrl || typeof o.hostedAddress === "string" && Coin.is(o.feeCoinLimit));
  },
  isSDK(o: any): o is HostedConfigSDKType {
    return o && (o.$typeUrl === HostedConfig.typeUrl || typeof o.hosted_address === "string" && Coin.isSDK(o.fee_coin_limit));
  },
  isAmino(o: any): o is HostedConfigAmino {
    return o && (o.$typeUrl === HostedConfig.typeUrl || typeof o.hosted_address === "string" && Coin.isAmino(o.fee_coin_limit));
  },
  encode(message: HostedConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostedAddress !== "") {
      writer.uint32(10).string(message.hostedAddress);
    }
    if (message.feeCoinLimit !== undefined) {
      Coin.encode(message.feeCoinLimit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostedConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostedConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostedAddress = reader.string();
          break;
        case 3:
          message.feeCoinLimit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<HostedConfig>): HostedConfig {
    const message = createBaseHostedConfig();
    message.hostedAddress = object.hostedAddress ?? "";
    message.feeCoinLimit = object.feeCoinLimit !== undefined && object.feeCoinLimit !== null ? Coin.fromPartial(object.feeCoinLimit) : undefined;
    return message;
  },
  fromAmino(object: HostedConfigAmino): HostedConfig {
    const message = createBaseHostedConfig();
    if (object.hosted_address !== undefined && object.hosted_address !== null) {
      message.hostedAddress = object.hosted_address;
    }
    if (object.fee_coin_limit !== undefined && object.fee_coin_limit !== null) {
      message.feeCoinLimit = Coin.fromAmino(object.fee_coin_limit);
    }
    return message;
  },
  toAmino(message: HostedConfig): HostedConfigAmino {
    const obj: any = {};
    obj.hosted_address = message.hostedAddress === "" ? undefined : message.hostedAddress;
    obj.fee_coin_limit = message.feeCoinLimit ? Coin.toAmino(message.feeCoinLimit) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostedConfigAminoMsg): HostedConfig {
    return HostedConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: HostedConfigProtoMsg): HostedConfig {
    return HostedConfig.decode(message.value);
  },
  toProto(message: HostedConfig): Uint8Array {
    return HostedConfig.encode(message).finish();
  },
  toProtoMsg(message: HostedConfig): HostedConfigProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.HostedConfig",
      value: HostedConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostedConfig.typeUrl, HostedConfig);
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
  typeUrl: "/intento.intent.v1beta1.ExecutionConfiguration",
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
    obj.save_msg_responses = message.saveMsgResponses === false ? undefined : message.saveMsgResponses;
    obj.updating_disabled = message.updatingDisabled === false ? undefined : message.updatingDisabled;
    obj.stop_on_success = message.stopOnSuccess === false ? undefined : message.stopOnSuccess;
    obj.stop_on_failure = message.stopOnFailure === false ? undefined : message.stopOnFailure;
    obj.fallback_to_owner_balance = message.fallbackToOwnerBalance === false ? undefined : message.fallbackToOwnerBalance;
    obj.reregister_ica_after_timeout = message.reregisterIcaAfterTimeout === false ? undefined : message.reregisterIcaAfterTimeout;
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
      typeUrl: "/intento.intent.v1beta1.ExecutionConfiguration",
      value: ExecutionConfiguration.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecutionConfiguration.typeUrl, ExecutionConfiguration);
function createBaseActionHistory(): ActionHistory {
  return {
    history: []
  };
}
export const ActionHistory = {
  typeUrl: "/intento.intent.v1beta1.ActionHistory",
  is(o: any): o is ActionHistory {
    return o && (o.$typeUrl === ActionHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || ActionHistoryEntry.is(o.history[0])));
  },
  isSDK(o: any): o is ActionHistorySDKType {
    return o && (o.$typeUrl === ActionHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || ActionHistoryEntry.isSDK(o.history[0])));
  },
  isAmino(o: any): o is ActionHistoryAmino {
    return o && (o.$typeUrl === ActionHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || ActionHistoryEntry.isAmino(o.history[0])));
  },
  encode(message: ActionHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      ActionHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(ActionHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ActionHistory>): ActionHistory {
    const message = createBaseActionHistory();
    message.history = object.history?.map(e => ActionHistoryEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ActionHistoryAmino): ActionHistory {
    const message = createBaseActionHistory();
    message.history = object.history?.map(e => ActionHistoryEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ActionHistory): ActionHistoryAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? ActionHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.history = message.history;
    }
    return obj;
  },
  fromAminoMsg(object: ActionHistoryAminoMsg): ActionHistory {
    return ActionHistory.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionHistoryProtoMsg): ActionHistory {
    return ActionHistory.decode(message.value);
  },
  toProto(message: ActionHistory): Uint8Array {
    return ActionHistory.encode(message).finish();
  },
  toProtoMsg(message: ActionHistory): ActionHistoryProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ActionHistory",
      value: ActionHistory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActionHistory.typeUrl, ActionHistory);
function createBaseActionHistoryEntry(): ActionHistoryEntry {
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
export const ActionHistoryEntry = {
  typeUrl: "/intento.intent.v1beta1.ActionHistoryEntry",
  is(o: any): o is ActionHistoryEntry {
    return o && (o.$typeUrl === ActionHistoryEntry.typeUrl || Timestamp.is(o.scheduledExecTime) && Timestamp.is(o.actualExecTime) && Coin.is(o.execFee) && typeof o.executed === "boolean" && typeof o.timedOut === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msgResponses) && (!o.msgResponses.length || Any.is(o.msgResponses[0])));
  },
  isSDK(o: any): o is ActionHistoryEntrySDKType {
    return o && (o.$typeUrl === ActionHistoryEntry.typeUrl || Timestamp.isSDK(o.scheduled_exec_time) && Timestamp.isSDK(o.actual_exec_time) && Coin.isSDK(o.exec_fee) && typeof o.executed === "boolean" && typeof o.timed_out === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isSDK(o.msg_responses[0])));
  },
  isAmino(o: any): o is ActionHistoryEntryAmino {
    return o && (o.$typeUrl === ActionHistoryEntry.typeUrl || Timestamp.isAmino(o.scheduled_exec_time) && Timestamp.isAmino(o.actual_exec_time) && Coin.isAmino(o.exec_fee) && typeof o.executed === "boolean" && typeof o.timed_out === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isAmino(o.msg_responses[0])));
  },
  encode(message: ActionHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ActionHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionHistoryEntry();
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
  fromPartial(object: Partial<ActionHistoryEntry>): ActionHistoryEntry {
    const message = createBaseActionHistoryEntry();
    message.scheduledExecTime = object.scheduledExecTime ?? undefined;
    message.actualExecTime = object.actualExecTime ?? undefined;
    message.execFee = object.execFee !== undefined && object.execFee !== null ? Coin.fromPartial(object.execFee) : undefined;
    message.executed = object.executed ?? false;
    message.timedOut = object.timedOut ?? false;
    message.errors = object.errors?.map(e => e) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ActionHistoryEntryAmino): ActionHistoryEntry {
    const message = createBaseActionHistoryEntry();
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
  toAmino(message: ActionHistoryEntry): ActionHistoryEntryAmino {
    const obj: any = {};
    obj.scheduled_exec_time = message.scheduledExecTime ? Timestamp.toAmino(toTimestamp(message.scheduledExecTime)) : undefined;
    obj.actual_exec_time = message.actualExecTime ? Timestamp.toAmino(toTimestamp(message.actualExecTime)) : undefined;
    obj.exec_fee = message.execFee ? Coin.toAmino(message.execFee) : undefined;
    obj.executed = message.executed === false ? undefined : message.executed;
    obj.timed_out = message.timedOut === false ? undefined : message.timedOut;
    if (message.errors) {
      obj.errors = message.errors.map(e => e);
    } else {
      obj.errors = message.errors;
    }
    if (message.msgResponses) {
      obj.msg_responses = message.msgResponses.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msg_responses = message.msgResponses;
    }
    return obj;
  },
  fromAminoMsg(object: ActionHistoryEntryAminoMsg): ActionHistoryEntry {
    return ActionHistoryEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionHistoryEntryProtoMsg): ActionHistoryEntry {
    return ActionHistoryEntry.decode(message.value);
  },
  toProto(message: ActionHistoryEntry): Uint8Array {
    return ActionHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message: ActionHistoryEntry): ActionHistoryEntryProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ActionHistoryEntry",
      value: ActionHistoryEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActionHistoryEntry.typeUrl, ActionHistoryEntry);
function createBaseExecutionConditions(): ExecutionConditions {
  return {
    useResponseValue: undefined,
    responseComparison: undefined,
    stopOnSuccessOf: [],
    stopOnFailureOf: [],
    skipOnFailureOf: [],
    skipOnSuccessOf: []
  };
}
export const ExecutionConditions = {
  typeUrl: "/intento.intent.v1beta1.ExecutionConditions",
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
    if (message.useResponseValue !== undefined) {
      UseResponseValue.encode(message.useResponseValue, writer.uint32(18).fork()).ldelim();
    }
    if (message.responseComparison !== undefined) {
      ResponseComparision.encode(message.responseComparison, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.stopOnSuccessOf) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.stopOnFailureOf) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.skipOnFailureOf) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.skipOnSuccessOf) {
      writer.uint64(v);
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
        case 2:
          message.useResponseValue = UseResponseValue.decode(reader, reader.uint32());
          break;
        case 1:
          message.responseComparison = ResponseComparision.decode(reader, reader.uint32());
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stopOnSuccessOf.push(reader.uint64());
            }
          } else {
            message.stopOnSuccessOf.push(reader.uint64());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stopOnFailureOf.push(reader.uint64());
            }
          } else {
            message.stopOnFailureOf.push(reader.uint64());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.skipOnFailureOf.push(reader.uint64());
            }
          } else {
            message.skipOnFailureOf.push(reader.uint64());
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.skipOnSuccessOf.push(reader.uint64());
            }
          } else {
            message.skipOnSuccessOf.push(reader.uint64());
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
    message.useResponseValue = object.useResponseValue !== undefined && object.useResponseValue !== null ? UseResponseValue.fromPartial(object.useResponseValue) : undefined;
    message.responseComparison = object.responseComparison !== undefined && object.responseComparison !== null ? ResponseComparision.fromPartial(object.responseComparison) : undefined;
    message.stopOnSuccessOf = object.stopOnSuccessOf?.map(e => BigInt(e.toString())) || [];
    message.stopOnFailureOf = object.stopOnFailureOf?.map(e => BigInt(e.toString())) || [];
    message.skipOnFailureOf = object.skipOnFailureOf?.map(e => BigInt(e.toString())) || [];
    message.skipOnSuccessOf = object.skipOnSuccessOf?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ExecutionConditionsAmino): ExecutionConditions {
    const message = createBaseExecutionConditions();
    if (object.use_response_value !== undefined && object.use_response_value !== null) {
      message.useResponseValue = UseResponseValue.fromAmino(object.use_response_value);
    }
    if (object.response_comparison !== undefined && object.response_comparison !== null) {
      message.responseComparison = ResponseComparision.fromAmino(object.response_comparison);
    }
    message.stopOnSuccessOf = object.stop_on_success_of?.map(e => BigInt(e)) || [];
    message.stopOnFailureOf = object.stop_on_failure_of?.map(e => BigInt(e)) || [];
    message.skipOnFailureOf = object.skip_on_failure_of?.map(e => BigInt(e)) || [];
    message.skipOnSuccessOf = object.skip_on_success_of?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: ExecutionConditions): ExecutionConditionsAmino {
    const obj: any = {};
    obj.use_response_value = message.useResponseValue ? UseResponseValue.toAmino(message.useResponseValue) : undefined;
    obj.response_comparison = message.responseComparison ? ResponseComparision.toAmino(message.responseComparison) : undefined;
    if (message.stopOnSuccessOf) {
      obj.stop_on_success_of = message.stopOnSuccessOf.map(e => e.toString());
    } else {
      obj.stop_on_success_of = message.stopOnSuccessOf;
    }
    if (message.stopOnFailureOf) {
      obj.stop_on_failure_of = message.stopOnFailureOf.map(e => e.toString());
    } else {
      obj.stop_on_failure_of = message.stopOnFailureOf;
    }
    if (message.skipOnFailureOf) {
      obj.skip_on_failure_of = message.skipOnFailureOf.map(e => e.toString());
    } else {
      obj.skip_on_failure_of = message.skipOnFailureOf;
    }
    if (message.skipOnSuccessOf) {
      obj.skip_on_success_of = message.skipOnSuccessOf.map(e => e.toString());
    } else {
      obj.skip_on_success_of = message.skipOnSuccessOf;
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
      typeUrl: "/intento.intent.v1beta1.ExecutionConditions",
      value: ExecutionConditions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecutionConditions.typeUrl, ExecutionConditions);
function createBaseUseResponseValue(): UseResponseValue {
  return {
    actionId: BigInt(0),
    responseIndex: 0,
    responseKey: "",
    msgsIndex: 0,
    msgKey: "",
    valueType: ""
  };
}
export const UseResponseValue = {
  typeUrl: "/intento.intent.v1beta1.UseResponseValue",
  is(o: any): o is UseResponseValue {
    return o && (o.$typeUrl === UseResponseValue.typeUrl || typeof o.actionId === "bigint" && typeof o.responseIndex === "number" && typeof o.responseKey === "string" && typeof o.msgsIndex === "number" && typeof o.msgKey === "string" && typeof o.valueType === "string");
  },
  isSDK(o: any): o is UseResponseValueSDKType {
    return o && (o.$typeUrl === UseResponseValue.typeUrl || typeof o.action_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.msgs_index === "number" && typeof o.msg_key === "string" && typeof o.value_type === "string");
  },
  isAmino(o: any): o is UseResponseValueAmino {
    return o && (o.$typeUrl === UseResponseValue.typeUrl || typeof o.action_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.msgs_index === "number" && typeof o.msg_key === "string" && typeof o.value_type === "string");
  },
  encode(message: UseResponseValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.actionId);
    }
    if (message.responseIndex !== 0) {
      writer.uint32(24).uint32(message.responseIndex);
    }
    if (message.responseKey !== "") {
      writer.uint32(18).string(message.responseKey);
    }
    if (message.msgsIndex !== 0) {
      writer.uint32(32).uint32(message.msgsIndex);
    }
    if (message.msgKey !== "") {
      writer.uint32(42).string(message.msgKey);
    }
    if (message.valueType !== "") {
      writer.uint32(50).string(message.valueType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UseResponseValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUseResponseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionId = reader.uint64();
          break;
        case 3:
          message.responseIndex = reader.uint32();
          break;
        case 2:
          message.responseKey = reader.string();
          break;
        case 4:
          message.msgsIndex = reader.uint32();
          break;
        case 5:
          message.msgKey = reader.string();
          break;
        case 6:
          message.valueType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UseResponseValue>): UseResponseValue {
    const message = createBaseUseResponseValue();
    message.actionId = object.actionId !== undefined && object.actionId !== null ? BigInt(object.actionId.toString()) : BigInt(0);
    message.responseIndex = object.responseIndex ?? 0;
    message.responseKey = object.responseKey ?? "";
    message.msgsIndex = object.msgsIndex ?? 0;
    message.msgKey = object.msgKey ?? "";
    message.valueType = object.valueType ?? "";
    return message;
  },
  fromAmino(object: UseResponseValueAmino): UseResponseValue {
    const message = createBaseUseResponseValue();
    if (object.action_id !== undefined && object.action_id !== null) {
      message.actionId = BigInt(object.action_id);
    }
    if (object.response_index !== undefined && object.response_index !== null) {
      message.responseIndex = object.response_index;
    }
    if (object.response_key !== undefined && object.response_key !== null) {
      message.responseKey = object.response_key;
    }
    if (object.msgs_index !== undefined && object.msgs_index !== null) {
      message.msgsIndex = object.msgs_index;
    }
    if (object.msg_key !== undefined && object.msg_key !== null) {
      message.msgKey = object.msg_key;
    }
    if (object.value_type !== undefined && object.value_type !== null) {
      message.valueType = object.value_type;
    }
    return message;
  },
  toAmino(message: UseResponseValue): UseResponseValueAmino {
    const obj: any = {};
    obj.action_id = message.actionId !== BigInt(0) ? message.actionId.toString() : undefined;
    obj.response_index = message.responseIndex === 0 ? undefined : message.responseIndex;
    obj.response_key = message.responseKey === "" ? undefined : message.responseKey;
    obj.msgs_index = message.msgsIndex === 0 ? undefined : message.msgsIndex;
    obj.msg_key = message.msgKey === "" ? undefined : message.msgKey;
    obj.value_type = message.valueType === "" ? undefined : message.valueType;
    return obj;
  },
  fromAminoMsg(object: UseResponseValueAminoMsg): UseResponseValue {
    return UseResponseValue.fromAmino(object.value);
  },
  fromProtoMsg(message: UseResponseValueProtoMsg): UseResponseValue {
    return UseResponseValue.decode(message.value);
  },
  toProto(message: UseResponseValue): Uint8Array {
    return UseResponseValue.encode(message).finish();
  },
  toProtoMsg(message: UseResponseValue): UseResponseValueProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.UseResponseValue",
      value: UseResponseValue.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UseResponseValue.typeUrl, UseResponseValue);
function createBaseResponseComparision(): ResponseComparision {
  return {
    actionId: BigInt(0),
    responseIndex: 0,
    responseKey: "",
    valueType: "",
    comparisonOperator: 0,
    comparisonOperand: ""
  };
}
export const ResponseComparision = {
  typeUrl: "/intento.intent.v1beta1.ResponseComparision",
  is(o: any): o is ResponseComparision {
    return o && (o.$typeUrl === ResponseComparision.typeUrl || typeof o.actionId === "bigint" && typeof o.responseIndex === "number" && typeof o.responseKey === "string" && typeof o.valueType === "string" && isSet(o.comparisonOperator) && typeof o.comparisonOperand === "string");
  },
  isSDK(o: any): o is ResponseComparisionSDKType {
    return o && (o.$typeUrl === ResponseComparision.typeUrl || typeof o.action_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.value_type === "string" && isSet(o.comparison_operator) && typeof o.comparison_operand === "string");
  },
  isAmino(o: any): o is ResponseComparisionAmino {
    return o && (o.$typeUrl === ResponseComparision.typeUrl || typeof o.action_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.value_type === "string" && isSet(o.comparison_operator) && typeof o.comparison_operand === "string");
  },
  encode(message: ResponseComparision, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.actionId);
    }
    if (message.responseIndex !== 0) {
      writer.uint32(16).uint32(message.responseIndex);
    }
    if (message.responseKey !== "") {
      writer.uint32(26).string(message.responseKey);
    }
    if (message.valueType !== "") {
      writer.uint32(34).string(message.valueType);
    }
    if (message.comparisonOperator !== 0) {
      writer.uint32(40).int32(message.comparisonOperator);
    }
    if (message.comparisonOperand !== "") {
      writer.uint32(50).string(message.comparisonOperand);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseComparision {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseComparision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionId = reader.uint64();
          break;
        case 2:
          message.responseIndex = reader.uint32();
          break;
        case 3:
          message.responseKey = reader.string();
          break;
        case 4:
          message.valueType = reader.string();
          break;
        case 5:
          message.comparisonOperator = (reader.int32() as any);
          break;
        case 6:
          message.comparisonOperand = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResponseComparision>): ResponseComparision {
    const message = createBaseResponseComparision();
    message.actionId = object.actionId !== undefined && object.actionId !== null ? BigInt(object.actionId.toString()) : BigInt(0);
    message.responseIndex = object.responseIndex ?? 0;
    message.responseKey = object.responseKey ?? "";
    message.valueType = object.valueType ?? "";
    message.comparisonOperator = object.comparisonOperator ?? 0;
    message.comparisonOperand = object.comparisonOperand ?? "";
    return message;
  },
  fromAmino(object: ResponseComparisionAmino): ResponseComparision {
    const message = createBaseResponseComparision();
    if (object.action_id !== undefined && object.action_id !== null) {
      message.actionId = BigInt(object.action_id);
    }
    if (object.response_index !== undefined && object.response_index !== null) {
      message.responseIndex = object.response_index;
    }
    if (object.response_key !== undefined && object.response_key !== null) {
      message.responseKey = object.response_key;
    }
    if (object.value_type !== undefined && object.value_type !== null) {
      message.valueType = object.value_type;
    }
    if (object.comparison_operator !== undefined && object.comparison_operator !== null) {
      message.comparisonOperator = object.comparison_operator;
    }
    if (object.comparison_operand !== undefined && object.comparison_operand !== null) {
      message.comparisonOperand = object.comparison_operand;
    }
    return message;
  },
  toAmino(message: ResponseComparision): ResponseComparisionAmino {
    const obj: any = {};
    obj.action_id = message.actionId !== BigInt(0) ? message.actionId.toString() : undefined;
    obj.response_index = message.responseIndex === 0 ? undefined : message.responseIndex;
    obj.response_key = message.responseKey === "" ? undefined : message.responseKey;
    obj.value_type = message.valueType === "" ? undefined : message.valueType;
    obj.comparison_operator = message.comparisonOperator === 0 ? undefined : message.comparisonOperator;
    obj.comparison_operand = message.comparisonOperand === "" ? undefined : message.comparisonOperand;
    return obj;
  },
  fromAminoMsg(object: ResponseComparisionAminoMsg): ResponseComparision {
    return ResponseComparision.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseComparisionProtoMsg): ResponseComparision {
    return ResponseComparision.decode(message.value);
  },
  toProto(message: ResponseComparision): Uint8Array {
    return ResponseComparision.encode(message).finish();
  },
  toProtoMsg(message: ResponseComparision): ResponseComparisionProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ResponseComparision",
      value: ResponseComparision.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResponseComparision.typeUrl, ResponseComparision);