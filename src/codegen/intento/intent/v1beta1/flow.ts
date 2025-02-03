import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TimeoutPolicy, timeoutPolicyFromJSON, timeoutPolicyToJSON } from "../../../stride/interchainquery/v1/genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
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
/** FlowInfo stores the info for the flow */
export interface FlowInfo {
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
export interface FlowInfoProtoMsg {
  typeUrl: "/intento.intent.v1beta1.FlowInfo";
  value: Uint8Array;
}
export type FlowInfoEncoded = Omit<FlowInfo, "msgs"> & {
  msgs: (AnyProtoMsg)[];
};
/** FlowInfo stores the info for the flow */
export interface FlowInfoAmino {
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
export interface FlowInfoAminoMsg {
  type: "/intento.intent.v1beta1.FlowInfo";
  value: FlowInfoAmino;
}
/** FlowInfo stores the info for the flow */
export interface FlowInfoSDKType {
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
/** config for self-hosted ICA */
export interface ICAConfig {
  portId: string;
  connectionId: string;
  hostConnectionId: string;
}
export interface ICAConfigProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ICAConfig";
  value: Uint8Array;
}
/** config for self-hosted ICA */
export interface ICAConfigAmino {
  port_id?: string;
  connection_id?: string;
  host_connection_id?: string;
}
export interface ICAConfigAminoMsg {
  type: "/intento.intent.v1beta1.ICAConfig";
  value: ICAConfigAmino;
}
/** config for self-hosted ICA */
export interface ICAConfigSDKType {
  port_id: string;
  connection_id: string;
  host_connection_id: string;
}
/** config for hosted account */
export interface HostedConfig {
  hostedAddress: string;
  feeCoinLimit: Coin;
}
export interface HostedConfigProtoMsg {
  typeUrl: "/intento.intent.v1beta1.HostedConfig";
  value: Uint8Array;
}
/** config for hosted account */
export interface HostedConfigAmino {
  hosted_address?: string;
  fee_coin_limit?: CoinAmino;
}
export interface HostedConfigAminoMsg {
  type: "/intento.intent.v1beta1.HostedConfig";
  value: HostedConfigAmino;
}
/** config for hosted account */
export interface HostedConfigSDKType {
  hosted_address: string;
  fee_coin_limit: CoinSDKType;
}
/**
 * ExecutionConfiguration provides the execution-related configuration of the
 * flow
 */
export interface ExecutionConfiguration {
  /** if true, the flow response outputs are saved and can be used in logic */
  saveResponses: boolean;
  /** if true, the flow is not updatable */
  updatingDisabled: boolean;
  /**
   * If true, will execute until we get a successful Flow, if false/unset will
   * always execute
   */
  stopOnSuccess: boolean;
  /**
   * If true, will execute until successful Flow, if false/unset will always
   * execute
   */
  stopOnFailure: boolean;
  /** If true, owner account balance is used when trigger account funds run out */
  fallbackToOwnerBalance: boolean;
  /** If true, allows the flow to continue execution after an ibc channel times out (recommended) */
  reregisterIcaAfterTimeout: boolean;
}
export interface ExecutionConfigurationProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ExecutionConfiguration";
  value: Uint8Array;
}
/**
 * ExecutionConfiguration provides the execution-related configuration of the
 * flow
 */
export interface ExecutionConfigurationAmino {
  /** if true, the flow response outputs are saved and can be used in logic */
  save_responses?: boolean;
  /** if true, the flow is not updatable */
  updating_disabled?: boolean;
  /**
   * If true, will execute until we get a successful Flow, if false/unset will
   * always execute
   */
  stop_on_success?: boolean;
  /**
   * If true, will execute until successful Flow, if false/unset will always
   * execute
   */
  stop_on_failure?: boolean;
  /** If true, owner account balance is used when trigger account funds run out */
  fallback_to_owner_balance?: boolean;
  /** If true, allows the flow to continue execution after an ibc channel times out (recommended) */
  reregister_ica_after_timeout?: boolean;
}
export interface ExecutionConfigurationAminoMsg {
  type: "/intento.intent.v1beta1.ExecutionConfiguration";
  value: ExecutionConfigurationAmino;
}
/**
 * ExecutionConfiguration provides the execution-related configuration of the
 * flow
 */
export interface ExecutionConfigurationSDKType {
  save_responses: boolean;
  updating_disabled: boolean;
  stop_on_success: boolean;
  stop_on_failure: boolean;
  fallback_to_owner_balance: boolean;
  reregister_ica_after_timeout: boolean;
}
/** FlowHistory execution history */
export interface FlowHistory {
  history: FlowHistoryEntry[];
}
export interface FlowHistoryProtoMsg {
  typeUrl: "/intento.intent.v1beta1.FlowHistory";
  value: Uint8Array;
}
/** FlowHistory execution history */
export interface FlowHistoryAmino {
  history?: FlowHistoryEntryAmino[];
}
export interface FlowHistoryAminoMsg {
  type: "/intento.intent.v1beta1.FlowHistory";
  value: FlowHistoryAmino;
}
/** FlowHistory execution history */
export interface FlowHistorySDKType {
  history: FlowHistoryEntrySDKType[];
}
/** FlowHistoryEntry provides a the history of flow interchain tx call */
export interface FlowHistoryEntry {
  scheduledExecTime: Date;
  actualExecTime: Date;
  execFee: Coin;
  /** whether all messages are executed, independent of succesfull result */
  executed: boolean;
  /** timed out from execution over IBC */
  timedOut: boolean;
  /**
   * errors from execution, if executed and no error the execution was
   * succesfull
   */
  errors: string[];
  /** will be empty when save_responses is false */
  msgResponses: Any[];
  /** will be empty when save_responses is false */
  queryResponses: string[];
}
export interface FlowHistoryEntryProtoMsg {
  typeUrl: "/intento.intent.v1beta1.FlowHistoryEntry";
  value: Uint8Array;
}
/** FlowHistoryEntry provides a the history of flow interchain tx call */
export interface FlowHistoryEntryAmino {
  scheduled_exec_time?: string;
  actual_exec_time?: string;
  exec_fee?: CoinAmino;
  /** whether all messages are executed, independent of succesfull result */
  executed?: boolean;
  /** timed out from execution over IBC */
  timed_out?: boolean;
  /**
   * errors from execution, if executed and no error the execution was
   * succesfull
   */
  errors?: string[];
  /** will be empty when save_responses is false */
  msg_responses?: AnyAmino[];
  /** will be empty when save_responses is false */
  query_responses?: string[];
}
export interface FlowHistoryEntryAminoMsg {
  type: "/intento.intent.v1beta1.FlowHistoryEntry";
  value: FlowHistoryEntryAmino;
}
/** FlowHistoryEntry provides a the history of flow interchain tx call */
export interface FlowHistoryEntrySDKType {
  scheduled_exec_time: Date;
  actual_exec_time: Date;
  exec_fee: CoinSDKType;
  executed: boolean;
  timed_out: boolean;
  errors: string[];
  msg_responses: AnySDKType[];
  query_responses: string[];
}
/** ExecutionConditions provides execution conditions for the flow */
export interface ExecutionConditions {
  /**
   * Replace value with value from message or response from another flow’s
   * latest output
   */
  feedbackLoops: FeedbackLoop[];
  /** Comparison with response response value */
  comparisons: Comparison[];
  /**
   * optional array of dependent intents that when executing succesfully, stops
   * execution
   */
  stopOnSuccessOf: bigint[];
  /**
   * optional array of dependent intents that when not executing succesfully,
   * stops execution
   */
  stopOnFailureOf: bigint[];
  /**
   * optional array of dependent intents that should be executed succesfully
   * after their latest call before execution is allowed
   */
  skipOnFailureOf: bigint[];
  /**
   * optional array of dependent intents that should fail after their latest
   * call before execution is allowed
   */
  skipOnSuccessOf: bigint[];
  /** True: Use AND for combining comparisons. False: Use OR for combining comparisons. */
  useAndForComparisons: boolean;
}
export interface ExecutionConditionsProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ExecutionConditions";
  value: Uint8Array;
}
/** ExecutionConditions provides execution conditions for the flow */
export interface ExecutionConditionsAmino {
  /**
   * Replace value with value from message or response from another flow’s
   * latest output
   */
  feedback_loops?: FeedbackLoopAmino[];
  /** Comparison with response response value */
  comparisons?: ComparisonAmino[];
  /**
   * optional array of dependent intents that when executing succesfully, stops
   * execution
   */
  stop_on_success_of?: string[];
  /**
   * optional array of dependent intents that when not executing succesfully,
   * stops execution
   */
  stop_on_failure_of?: string[];
  /**
   * optional array of dependent intents that should be executed succesfully
   * after their latest call before execution is allowed
   */
  skip_on_failure_of?: string[];
  /**
   * optional array of dependent intents that should fail after their latest
   * call before execution is allowed
   */
  skip_on_success_of?: string[];
  /** True: Use AND for combining comparisons. False: Use OR for combining comparisons. */
  use_and_for_comparisons?: boolean;
}
export interface ExecutionConditionsAminoMsg {
  type: "/intento.intent.v1beta1.ExecutionConditions";
  value: ExecutionConditionsAmino;
}
/** ExecutionConditions provides execution conditions for the flow */
export interface ExecutionConditionsSDKType {
  feedback_loops: FeedbackLoopSDKType[];
  comparisons: ComparisonSDKType[];
  stop_on_success_of: bigint[];
  stop_on_failure_of: bigint[];
  skip_on_failure_of: bigint[];
  skip_on_success_of: bigint[];
  use_and_for_comparisons: boolean;
}
/**
 * Replace value with value from message or response from another flow’s
 * latest output before execution
 */
export interface FeedbackLoop {
  /** flow to get the latest response value from, optional */
  flowId: bigint;
  /** index of the responses */
  responseIndex: number;
  /** for example "Amount" */
  responseKey: string;
  /** index of the msg to replace */
  msgsIndex: number;
  /** key of the message to replace (e.g. Amount[0].Amount, FromAddress) */
  msgKey: string;
  /** can be anything from sdk.Int, sdk.Coin, sdk.Coins, string, []string, []sdk.Int */
  valueType: string;
  /** bool calculate_difference = 7; //True: calculate the difference with the previous value instead of using the value directly. */
  icqConfig?: ICQConfig;
}
export interface FeedbackLoopProtoMsg {
  typeUrl: "/intento.intent.v1beta1.FeedbackLoop";
  value: Uint8Array;
}
/**
 * Replace value with value from message or response from another flow’s
 * latest output before execution
 */
export interface FeedbackLoopAmino {
  /** flow to get the latest response value from, optional */
  flow_id?: string;
  /** index of the responses */
  response_index?: number;
  /** for example "Amount" */
  response_key?: string;
  /** index of the msg to replace */
  msgs_index?: number;
  /** key of the message to replace (e.g. Amount[0].Amount, FromAddress) */
  msg_key?: string;
  /** can be anything from sdk.Int, sdk.Coin, sdk.Coins, string, []string, []sdk.Int */
  value_type?: string;
  /** bool calculate_difference = 7; //True: calculate the difference with the previous value instead of using the value directly. */
  icq_config?: ICQConfigAmino;
}
export interface FeedbackLoopAminoMsg {
  type: "/intento.intent.v1beta1.FeedbackLoop";
  value: FeedbackLoopAmino;
}
/**
 * Replace value with value from message or response from another flow’s
 * latest output before execution
 */
export interface FeedbackLoopSDKType {
  flow_id: bigint;
  response_index: number;
  response_key: string;
  msgs_index: number;
  msg_key: string;
  value_type: string;
  icq_config?: ICQConfigSDKType;
}
/**
 * Comparison is checked on the response in JSON before execution of
 * flow and outputs true or false
 */
export interface Comparison {
  /** get the latest response value from other flow, optional */
  flowId: bigint;
  /** index of the message response, optional */
  responseIndex: number;
  /** e.g. Amount[0].Amount, FromAddress, optional */
  responseKey: string;
  /** can be anything from sdk.Int, sdk.Coin, sdk.Coins, string, []string, []sdk.Int */
  valueType: string;
  operator: ComparisonOperator;
  operand: string;
  /** bool calculate_difference = 7; //True: Calculate the difference with the previous value. */
  icqConfig?: ICQConfig;
}
export interface ComparisonProtoMsg {
  typeUrl: "/intento.intent.v1beta1.Comparison";
  value: Uint8Array;
}
/**
 * Comparison is checked on the response in JSON before execution of
 * flow and outputs true or false
 */
export interface ComparisonAmino {
  /** get the latest response value from other flow, optional */
  flow_id?: string;
  /** index of the message response, optional */
  response_index?: number;
  /** e.g. Amount[0].Amount, FromAddress, optional */
  response_key?: string;
  /** can be anything from sdk.Int, sdk.Coin, sdk.Coins, string, []string, []sdk.Int */
  value_type?: string;
  operator?: ComparisonOperator;
  operand?: string;
  /** bool calculate_difference = 7; //True: Calculate the difference with the previous value. */
  icq_config?: ICQConfigAmino;
}
export interface ComparisonAminoMsg {
  type: "/intento.intent.v1beta1.Comparison";
  value: ComparisonAmino;
}
/**
 * Comparison is checked on the response in JSON before execution of
 * flow and outputs true or false
 */
export interface ComparisonSDKType {
  flow_id: bigint;
  response_index: number;
  response_key: string;
  value_type: string;
  operator: ComparisonOperator;
  operand: string;
  icq_config?: ICQConfigSDKType;
}
/** config for using interchain queries */
export interface ICQConfig {
  connectionId: string;
  chainId: string;
  timeoutPolicy: TimeoutPolicy;
  timeoutDuration: Duration;
  /** e.g. store/bank/key store/staking/key */
  queryType: string;
  /** key in the store that stores the query e.g. stakingtypes.GetValidatorKey(validatorAddressBz) */
  queryKey: string;
  /** should be reset after execution */
  response: Uint8Array;
}
export interface ICQConfigProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ICQConfig";
  value: Uint8Array;
}
/** config for using interchain queries */
export interface ICQConfigAmino {
  connection_id?: string;
  chain_id?: string;
  timeout_policy?: TimeoutPolicy;
  timeout_duration?: DurationAmino;
  /** e.g. store/bank/key store/staking/key */
  query_type?: string;
  /** key in the store that stores the query e.g. stakingtypes.GetValidatorKey(validatorAddressBz) */
  query_key?: string;
  /** should be reset after execution */
  response?: string;
}
export interface ICQConfigAminoMsg {
  type: "/intento.intent.v1beta1.ICQConfig";
  value: ICQConfigAmino;
}
/** config for using interchain queries */
export interface ICQConfigSDKType {
  connection_id: string;
  chain_id: string;
  timeout_policy: TimeoutPolicy;
  timeout_duration: DurationSDKType;
  query_type: string;
  query_key: string;
  response: Uint8Array;
}
function createBaseFlowInfo(): FlowInfo {
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
export const FlowInfo = {
  typeUrl: "/intento.intent.v1beta1.FlowInfo",
  is(o: any): o is FlowInfo {
    return o && (o.$typeUrl === FlowInfo.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.feeAddress === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])) && Duration.is(o.interval) && Timestamp.is(o.startTime) && Timestamp.is(o.execTime) && Timestamp.is(o.endTime) && Array.isArray(o.updateHistory) && (!o.updateHistory.length || Timestamp.is(o.updateHistory[0])));
  },
  isSDK(o: any): o is FlowInfoSDKType {
    return o && (o.$typeUrl === FlowInfo.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.fee_address === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isSDK(o.msgs[0])) && Duration.isSDK(o.interval) && Timestamp.isSDK(o.start_time) && Timestamp.isSDK(o.exec_time) && Timestamp.isSDK(o.end_time) && Array.isArray(o.update_history) && (!o.update_history.length || Timestamp.isSDK(o.update_history[0])));
  },
  isAmino(o: any): o is FlowInfoAmino {
    return o && (o.$typeUrl === FlowInfo.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.label === "string" && typeof o.fee_address === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])) && Duration.isAmino(o.interval) && Timestamp.isAmino(o.start_time) && Timestamp.isAmino(o.exec_time) && Timestamp.isAmino(o.end_time) && Array.isArray(o.update_history) && (!o.update_history.length || Timestamp.isAmino(o.update_history[0])));
  },
  encode(message: FlowInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): FlowInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowInfo();
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
  fromJSON(object: any): FlowInfo {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      label: isSet(object.label) ? String(object.label) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => GlobalDecoderRegistry.fromJSON(e)) : [],
      interval: isSet(object.interval) ? Duration.fromJSON(object.interval) : undefined,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      execTime: isSet(object.execTime) ? fromJsonTimestamp(object.execTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      updateHistory: Array.isArray(object?.updateHistory) ? object.updateHistory.map((e: any) => Timestamp.fromJSON(e)) : [],
      icaConfig: isSet(object.icaConfig) ? ICAConfig.fromJSON(object.icaConfig) : undefined,
      configuration: isSet(object.configuration) ? ExecutionConfiguration.fromJSON(object.configuration) : undefined,
      hostedConfig: isSet(object.hostedConfig) ? HostedConfig.fromJSON(object.hostedConfig) : undefined,
      conditions: isSet(object.conditions) ? ExecutionConditions.fromJSON(object.conditions) : undefined
    };
  },
  toJSON(message: FlowInfo): JsonSafe<FlowInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.label !== undefined && (obj.label = message.label);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.interval !== undefined && (obj.interval = message.interval ? Duration.toJSON(message.interval) : undefined);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.execTime !== undefined && (obj.execTime = message.execTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    if (message.updateHistory) {
      obj.updateHistory = message.updateHistory.map(e => e ? Timestamp.toJSON(e) : undefined);
    } else {
      obj.updateHistory = [];
    }
    message.icaConfig !== undefined && (obj.icaConfig = message.icaConfig ? ICAConfig.toJSON(message.icaConfig) : undefined);
    message.configuration !== undefined && (obj.configuration = message.configuration ? ExecutionConfiguration.toJSON(message.configuration) : undefined);
    message.hostedConfig !== undefined && (obj.hostedConfig = message.hostedConfig ? HostedConfig.toJSON(message.hostedConfig) : undefined);
    message.conditions !== undefined && (obj.conditions = message.conditions ? ExecutionConditions.toJSON(message.conditions) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FlowInfo>): FlowInfo {
    const message = createBaseFlowInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.label = object.label ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
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
  fromAmino(object: FlowInfoAmino): FlowInfo {
    const message = createBaseFlowInfo();
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
  toAmino(message: FlowInfo): FlowInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
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
  fromAminoMsg(object: FlowInfoAminoMsg): FlowInfo {
    return FlowInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowInfoProtoMsg): FlowInfo {
    return FlowInfo.decode(message.value);
  },
  toProto(message: FlowInfo): Uint8Array {
    return FlowInfo.encode(message).finish();
  },
  toProtoMsg(message: FlowInfo): FlowInfoProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.FlowInfo",
      value: FlowInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowInfo.typeUrl, FlowInfo);
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
  fromJSON(object: any): ICAConfig {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      hostConnectionId: isSet(object.hostConnectionId) ? String(object.hostConnectionId) : ""
    };
  },
  toJSON(message: ICAConfig): JsonSafe<ICAConfig> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
    return obj;
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
  fromJSON(object: any): HostedConfig {
    return {
      hostedAddress: isSet(object.hostedAddress) ? String(object.hostedAddress) : "",
      feeCoinLimit: isSet(object.feeCoinLimit) ? Coin.fromJSON(object.feeCoinLimit) : undefined
    };
  },
  toJSON(message: HostedConfig): JsonSafe<HostedConfig> {
    const obj: any = {};
    message.hostedAddress !== undefined && (obj.hostedAddress = message.hostedAddress);
    message.feeCoinLimit !== undefined && (obj.feeCoinLimit = message.feeCoinLimit ? Coin.toJSON(message.feeCoinLimit) : undefined);
    return obj;
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
    saveResponses: false,
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
    return o && (o.$typeUrl === ExecutionConfiguration.typeUrl || typeof o.saveResponses === "boolean" && typeof o.updatingDisabled === "boolean" && typeof o.stopOnSuccess === "boolean" && typeof o.stopOnFailure === "boolean" && typeof o.fallbackToOwnerBalance === "boolean" && typeof o.reregisterIcaAfterTimeout === "boolean");
  },
  isSDK(o: any): o is ExecutionConfigurationSDKType {
    return o && (o.$typeUrl === ExecutionConfiguration.typeUrl || typeof o.save_responses === "boolean" && typeof o.updating_disabled === "boolean" && typeof o.stop_on_success === "boolean" && typeof o.stop_on_failure === "boolean" && typeof o.fallback_to_owner_balance === "boolean" && typeof o.reregister_ica_after_timeout === "boolean");
  },
  isAmino(o: any): o is ExecutionConfigurationAmino {
    return o && (o.$typeUrl === ExecutionConfiguration.typeUrl || typeof o.save_responses === "boolean" && typeof o.updating_disabled === "boolean" && typeof o.stop_on_success === "boolean" && typeof o.stop_on_failure === "boolean" && typeof o.fallback_to_owner_balance === "boolean" && typeof o.reregister_ica_after_timeout === "boolean");
  },
  encode(message: ExecutionConfiguration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.saveResponses === true) {
      writer.uint32(8).bool(message.saveResponses);
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
          message.saveResponses = reader.bool();
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
  fromJSON(object: any): ExecutionConfiguration {
    return {
      saveResponses: isSet(object.saveResponses) ? Boolean(object.saveResponses) : false,
      updatingDisabled: isSet(object.updatingDisabled) ? Boolean(object.updatingDisabled) : false,
      stopOnSuccess: isSet(object.stopOnSuccess) ? Boolean(object.stopOnSuccess) : false,
      stopOnFailure: isSet(object.stopOnFailure) ? Boolean(object.stopOnFailure) : false,
      fallbackToOwnerBalance: isSet(object.fallbackToOwnerBalance) ? Boolean(object.fallbackToOwnerBalance) : false,
      reregisterIcaAfterTimeout: isSet(object.reregisterIcaAfterTimeout) ? Boolean(object.reregisterIcaAfterTimeout) : false
    };
  },
  toJSON(message: ExecutionConfiguration): JsonSafe<ExecutionConfiguration> {
    const obj: any = {};
    message.saveResponses !== undefined && (obj.saveResponses = message.saveResponses);
    message.updatingDisabled !== undefined && (obj.updatingDisabled = message.updatingDisabled);
    message.stopOnSuccess !== undefined && (obj.stopOnSuccess = message.stopOnSuccess);
    message.stopOnFailure !== undefined && (obj.stopOnFailure = message.stopOnFailure);
    message.fallbackToOwnerBalance !== undefined && (obj.fallbackToOwnerBalance = message.fallbackToOwnerBalance);
    message.reregisterIcaAfterTimeout !== undefined && (obj.reregisterIcaAfterTimeout = message.reregisterIcaAfterTimeout);
    return obj;
  },
  fromPartial(object: Partial<ExecutionConfiguration>): ExecutionConfiguration {
    const message = createBaseExecutionConfiguration();
    message.saveResponses = object.saveResponses ?? false;
    message.updatingDisabled = object.updatingDisabled ?? false;
    message.stopOnSuccess = object.stopOnSuccess ?? false;
    message.stopOnFailure = object.stopOnFailure ?? false;
    message.fallbackToOwnerBalance = object.fallbackToOwnerBalance ?? false;
    message.reregisterIcaAfterTimeout = object.reregisterIcaAfterTimeout ?? false;
    return message;
  },
  fromAmino(object: ExecutionConfigurationAmino): ExecutionConfiguration {
    const message = createBaseExecutionConfiguration();
    if (object.save_responses !== undefined && object.save_responses !== null) {
      message.saveResponses = object.save_responses;
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
    obj.save_responses = message.saveResponses === false ? undefined : message.saveResponses;
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
function createBaseFlowHistory(): FlowHistory {
  return {
    history: []
  };
}
export const FlowHistory = {
  typeUrl: "/intento.intent.v1beta1.FlowHistory",
  is(o: any): o is FlowHistory {
    return o && (o.$typeUrl === FlowHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || FlowHistoryEntry.is(o.history[0])));
  },
  isSDK(o: any): o is FlowHistorySDKType {
    return o && (o.$typeUrl === FlowHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || FlowHistoryEntry.isSDK(o.history[0])));
  },
  isAmino(o: any): o is FlowHistoryAmino {
    return o && (o.$typeUrl === FlowHistory.typeUrl || Array.isArray(o.history) && (!o.history.length || FlowHistoryEntry.isAmino(o.history[0])));
  },
  encode(message: FlowHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      FlowHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlowHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(FlowHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowHistory {
    return {
      history: Array.isArray(object?.history) ? object.history.map((e: any) => FlowHistoryEntry.fromJSON(e)) : []
    };
  },
  toJSON(message: FlowHistory): JsonSafe<FlowHistory> {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? FlowHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.history = [];
    }
    return obj;
  },
  fromPartial(object: Partial<FlowHistory>): FlowHistory {
    const message = createBaseFlowHistory();
    message.history = object.history?.map(e => FlowHistoryEntry.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: FlowHistoryAmino): FlowHistory {
    const message = createBaseFlowHistory();
    message.history = object.history?.map(e => FlowHistoryEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: FlowHistory): FlowHistoryAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? FlowHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.history = message.history;
    }
    return obj;
  },
  fromAminoMsg(object: FlowHistoryAminoMsg): FlowHistory {
    return FlowHistory.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowHistoryProtoMsg): FlowHistory {
    return FlowHistory.decode(message.value);
  },
  toProto(message: FlowHistory): Uint8Array {
    return FlowHistory.encode(message).finish();
  },
  toProtoMsg(message: FlowHistory): FlowHistoryProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.FlowHistory",
      value: FlowHistory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowHistory.typeUrl, FlowHistory);
function createBaseFlowHistoryEntry(): FlowHistoryEntry {
  return {
    scheduledExecTime: new Date(),
    actualExecTime: new Date(),
    execFee: Coin.fromPartial({}),
    executed: false,
    timedOut: false,
    errors: [],
    msgResponses: [],
    queryResponses: []
  };
}
export const FlowHistoryEntry = {
  typeUrl: "/intento.intent.v1beta1.FlowHistoryEntry",
  is(o: any): o is FlowHistoryEntry {
    return o && (o.$typeUrl === FlowHistoryEntry.typeUrl || Timestamp.is(o.scheduledExecTime) && Timestamp.is(o.actualExecTime) && Coin.is(o.execFee) && typeof o.executed === "boolean" && typeof o.timedOut === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msgResponses) && (!o.msgResponses.length || Any.is(o.msgResponses[0])) && Array.isArray(o.queryResponses) && (!o.queryResponses.length || typeof o.queryResponses[0] === "string"));
  },
  isSDK(o: any): o is FlowHistoryEntrySDKType {
    return o && (o.$typeUrl === FlowHistoryEntry.typeUrl || Timestamp.isSDK(o.scheduled_exec_time) && Timestamp.isSDK(o.actual_exec_time) && Coin.isSDK(o.exec_fee) && typeof o.executed === "boolean" && typeof o.timed_out === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isSDK(o.msg_responses[0])) && Array.isArray(o.query_responses) && (!o.query_responses.length || typeof o.query_responses[0] === "string"));
  },
  isAmino(o: any): o is FlowHistoryEntryAmino {
    return o && (o.$typeUrl === FlowHistoryEntry.typeUrl || Timestamp.isAmino(o.scheduled_exec_time) && Timestamp.isAmino(o.actual_exec_time) && Coin.isAmino(o.exec_fee) && typeof o.executed === "boolean" && typeof o.timed_out === "boolean" && Array.isArray(o.errors) && (!o.errors.length || typeof o.errors[0] === "string") && Array.isArray(o.msg_responses) && (!o.msg_responses.length || Any.isAmino(o.msg_responses[0])) && Array.isArray(o.query_responses) && (!o.query_responses.length || typeof o.query_responses[0] === "string"));
  },
  encode(message: FlowHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    for (const v of message.queryResponses) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlowHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlowHistoryEntry();
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
        case 8:
          message.queryResponses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlowHistoryEntry {
    return {
      scheduledExecTime: isSet(object.scheduledExecTime) ? fromJsonTimestamp(object.scheduledExecTime) : undefined,
      actualExecTime: isSet(object.actualExecTime) ? fromJsonTimestamp(object.actualExecTime) : undefined,
      execFee: isSet(object.execFee) ? Coin.fromJSON(object.execFee) : undefined,
      executed: isSet(object.executed) ? Boolean(object.executed) : false,
      timedOut: isSet(object.timedOut) ? Boolean(object.timedOut) : false,
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => String(e)) : [],
      msgResponses: Array.isArray(object?.msgResponses) ? object.msgResponses.map((e: any) => Any.fromJSON(e)) : [],
      queryResponses: Array.isArray(object?.queryResponses) ? object.queryResponses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: FlowHistoryEntry): JsonSafe<FlowHistoryEntry> {
    const obj: any = {};
    message.scheduledExecTime !== undefined && (obj.scheduledExecTime = message.scheduledExecTime.toISOString());
    message.actualExecTime !== undefined && (obj.actualExecTime = message.actualExecTime.toISOString());
    message.execFee !== undefined && (obj.execFee = message.execFee ? Coin.toJSON(message.execFee) : undefined);
    message.executed !== undefined && (obj.executed = message.executed);
    message.timedOut !== undefined && (obj.timedOut = message.timedOut);
    if (message.errors) {
      obj.errors = message.errors.map(e => e);
    } else {
      obj.errors = [];
    }
    if (message.msgResponses) {
      obj.msgResponses = message.msgResponses.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgResponses = [];
    }
    if (message.queryResponses) {
      obj.queryResponses = message.queryResponses.map(e => e);
    } else {
      obj.queryResponses = [];
    }
    return obj;
  },
  fromPartial(object: Partial<FlowHistoryEntry>): FlowHistoryEntry {
    const message = createBaseFlowHistoryEntry();
    message.scheduledExecTime = object.scheduledExecTime ?? undefined;
    message.actualExecTime = object.actualExecTime ?? undefined;
    message.execFee = object.execFee !== undefined && object.execFee !== null ? Coin.fromPartial(object.execFee) : undefined;
    message.executed = object.executed ?? false;
    message.timedOut = object.timedOut ?? false;
    message.errors = object.errors?.map(e => e) || [];
    message.msgResponses = object.msgResponses?.map(e => Any.fromPartial(e)) || [];
    message.queryResponses = object.queryResponses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: FlowHistoryEntryAmino): FlowHistoryEntry {
    const message = createBaseFlowHistoryEntry();
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
    message.queryResponses = object.query_responses?.map(e => e) || [];
    return message;
  },
  toAmino(message: FlowHistoryEntry): FlowHistoryEntryAmino {
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
    if (message.queryResponses) {
      obj.query_responses = message.queryResponses.map(e => e);
    } else {
      obj.query_responses = message.queryResponses;
    }
    return obj;
  },
  fromAminoMsg(object: FlowHistoryEntryAminoMsg): FlowHistoryEntry {
    return FlowHistoryEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: FlowHistoryEntryProtoMsg): FlowHistoryEntry {
    return FlowHistoryEntry.decode(message.value);
  },
  toProto(message: FlowHistoryEntry): Uint8Array {
    return FlowHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message: FlowHistoryEntry): FlowHistoryEntryProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.FlowHistoryEntry",
      value: FlowHistoryEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FlowHistoryEntry.typeUrl, FlowHistoryEntry);
function createBaseExecutionConditions(): ExecutionConditions {
  return {
    feedbackLoops: [],
    comparisons: [],
    stopOnSuccessOf: [],
    stopOnFailureOf: [],
    skipOnFailureOf: [],
    skipOnSuccessOf: [],
    useAndForComparisons: false
  };
}
export const ExecutionConditions = {
  typeUrl: "/intento.intent.v1beta1.ExecutionConditions",
  is(o: any): o is ExecutionConditions {
    return o && (o.$typeUrl === ExecutionConditions.typeUrl || Array.isArray(o.feedbackLoops) && (!o.feedbackLoops.length || FeedbackLoop.is(o.feedbackLoops[0])) && Array.isArray(o.comparisons) && (!o.comparisons.length || Comparison.is(o.comparisons[0])) && Array.isArray(o.stopOnSuccessOf) && (!o.stopOnSuccessOf.length || typeof o.stopOnSuccessOf[0] === "bigint") && Array.isArray(o.stopOnFailureOf) && (!o.stopOnFailureOf.length || typeof o.stopOnFailureOf[0] === "bigint") && Array.isArray(o.skipOnFailureOf) && (!o.skipOnFailureOf.length || typeof o.skipOnFailureOf[0] === "bigint") && Array.isArray(o.skipOnSuccessOf) && (!o.skipOnSuccessOf.length || typeof o.skipOnSuccessOf[0] === "bigint") && typeof o.useAndForComparisons === "boolean");
  },
  isSDK(o: any): o is ExecutionConditionsSDKType {
    return o && (o.$typeUrl === ExecutionConditions.typeUrl || Array.isArray(o.feedback_loops) && (!o.feedback_loops.length || FeedbackLoop.isSDK(o.feedback_loops[0])) && Array.isArray(o.comparisons) && (!o.comparisons.length || Comparison.isSDK(o.comparisons[0])) && Array.isArray(o.stop_on_success_of) && (!o.stop_on_success_of.length || typeof o.stop_on_success_of[0] === "bigint") && Array.isArray(o.stop_on_failure_of) && (!o.stop_on_failure_of.length || typeof o.stop_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_failure_of) && (!o.skip_on_failure_of.length || typeof o.skip_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_success_of) && (!o.skip_on_success_of.length || typeof o.skip_on_success_of[0] === "bigint") && typeof o.use_and_for_comparisons === "boolean");
  },
  isAmino(o: any): o is ExecutionConditionsAmino {
    return o && (o.$typeUrl === ExecutionConditions.typeUrl || Array.isArray(o.feedback_loops) && (!o.feedback_loops.length || FeedbackLoop.isAmino(o.feedback_loops[0])) && Array.isArray(o.comparisons) && (!o.comparisons.length || Comparison.isAmino(o.comparisons[0])) && Array.isArray(o.stop_on_success_of) && (!o.stop_on_success_of.length || typeof o.stop_on_success_of[0] === "bigint") && Array.isArray(o.stop_on_failure_of) && (!o.stop_on_failure_of.length || typeof o.stop_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_failure_of) && (!o.skip_on_failure_of.length || typeof o.skip_on_failure_of[0] === "bigint") && Array.isArray(o.skip_on_success_of) && (!o.skip_on_success_of.length || typeof o.skip_on_success_of[0] === "bigint") && typeof o.use_and_for_comparisons === "boolean");
  },
  encode(message: ExecutionConditions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.feedbackLoops) {
      FeedbackLoop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.comparisons) {
      Comparison.encode(v!, writer.uint32(10).fork()).ldelim();
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
    if (message.useAndForComparisons === true) {
      writer.uint32(72).bool(message.useAndForComparisons);
    }
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
          message.feedbackLoops.push(FeedbackLoop.decode(reader, reader.uint32()));
          break;
        case 1:
          message.comparisons.push(Comparison.decode(reader, reader.uint32()));
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
        case 9:
          message.useAndForComparisons = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExecutionConditions {
    return {
      feedbackLoops: Array.isArray(object?.feedbackLoops) ? object.feedbackLoops.map((e: any) => FeedbackLoop.fromJSON(e)) : [],
      comparisons: Array.isArray(object?.comparisons) ? object.comparisons.map((e: any) => Comparison.fromJSON(e)) : [],
      stopOnSuccessOf: Array.isArray(object?.stopOnSuccessOf) ? object.stopOnSuccessOf.map((e: any) => BigInt(e.toString())) : [],
      stopOnFailureOf: Array.isArray(object?.stopOnFailureOf) ? object.stopOnFailureOf.map((e: any) => BigInt(e.toString())) : [],
      skipOnFailureOf: Array.isArray(object?.skipOnFailureOf) ? object.skipOnFailureOf.map((e: any) => BigInt(e.toString())) : [],
      skipOnSuccessOf: Array.isArray(object?.skipOnSuccessOf) ? object.skipOnSuccessOf.map((e: any) => BigInt(e.toString())) : [],
      useAndForComparisons: isSet(object.useAndForComparisons) ? Boolean(object.useAndForComparisons) : false
    };
  },
  toJSON(message: ExecutionConditions): JsonSafe<ExecutionConditions> {
    const obj: any = {};
    if (message.feedbackLoops) {
      obj.feedbackLoops = message.feedbackLoops.map(e => e ? FeedbackLoop.toJSON(e) : undefined);
    } else {
      obj.feedbackLoops = [];
    }
    if (message.comparisons) {
      obj.comparisons = message.comparisons.map(e => e ? Comparison.toJSON(e) : undefined);
    } else {
      obj.comparisons = [];
    }
    if (message.stopOnSuccessOf) {
      obj.stopOnSuccessOf = message.stopOnSuccessOf.map(e => (e || BigInt(0)).toString());
    } else {
      obj.stopOnSuccessOf = [];
    }
    if (message.stopOnFailureOf) {
      obj.stopOnFailureOf = message.stopOnFailureOf.map(e => (e || BigInt(0)).toString());
    } else {
      obj.stopOnFailureOf = [];
    }
    if (message.skipOnFailureOf) {
      obj.skipOnFailureOf = message.skipOnFailureOf.map(e => (e || BigInt(0)).toString());
    } else {
      obj.skipOnFailureOf = [];
    }
    if (message.skipOnSuccessOf) {
      obj.skipOnSuccessOf = message.skipOnSuccessOf.map(e => (e || BigInt(0)).toString());
    } else {
      obj.skipOnSuccessOf = [];
    }
    message.useAndForComparisons !== undefined && (obj.useAndForComparisons = message.useAndForComparisons);
    return obj;
  },
  fromPartial(object: Partial<ExecutionConditions>): ExecutionConditions {
    const message = createBaseExecutionConditions();
    message.feedbackLoops = object.feedbackLoops?.map(e => FeedbackLoop.fromPartial(e)) || [];
    message.comparisons = object.comparisons?.map(e => Comparison.fromPartial(e)) || [];
    message.stopOnSuccessOf = object.stopOnSuccessOf?.map(e => BigInt(e.toString())) || [];
    message.stopOnFailureOf = object.stopOnFailureOf?.map(e => BigInt(e.toString())) || [];
    message.skipOnFailureOf = object.skipOnFailureOf?.map(e => BigInt(e.toString())) || [];
    message.skipOnSuccessOf = object.skipOnSuccessOf?.map(e => BigInt(e.toString())) || [];
    message.useAndForComparisons = object.useAndForComparisons ?? false;
    return message;
  },
  fromAmino(object: ExecutionConditionsAmino): ExecutionConditions {
    const message = createBaseExecutionConditions();
    message.feedbackLoops = object.feedback_loops?.map(e => FeedbackLoop.fromAmino(e)) || [];
    message.comparisons = object.comparisons?.map(e => Comparison.fromAmino(e)) || [];
    message.stopOnSuccessOf = object.stop_on_success_of?.map(e => BigInt(e)) || [];
    message.stopOnFailureOf = object.stop_on_failure_of?.map(e => BigInt(e)) || [];
    message.skipOnFailureOf = object.skip_on_failure_of?.map(e => BigInt(e)) || [];
    message.skipOnSuccessOf = object.skip_on_success_of?.map(e => BigInt(e)) || [];
    if (object.use_and_for_comparisons !== undefined && object.use_and_for_comparisons !== null) {
      message.useAndForComparisons = object.use_and_for_comparisons;
    }
    return message;
  },
  toAmino(message: ExecutionConditions): ExecutionConditionsAmino {
    const obj: any = {};
    if (message.feedbackLoops) {
      obj.feedback_loops = message.feedbackLoops.map(e => e ? FeedbackLoop.toAmino(e) : undefined);
    } else {
      obj.feedback_loops = message.feedbackLoops;
    }
    if (message.comparisons) {
      obj.comparisons = message.comparisons.map(e => e ? Comparison.toAmino(e) : undefined);
    } else {
      obj.comparisons = message.comparisons;
    }
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
    obj.use_and_for_comparisons = message.useAndForComparisons === false ? undefined : message.useAndForComparisons;
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
function createBaseFeedbackLoop(): FeedbackLoop {
  return {
    flowId: BigInt(0),
    responseIndex: 0,
    responseKey: "",
    msgsIndex: 0,
    msgKey: "",
    valueType: "",
    icqConfig: undefined
  };
}
export const FeedbackLoop = {
  typeUrl: "/intento.intent.v1beta1.FeedbackLoop",
  is(o: any): o is FeedbackLoop {
    return o && (o.$typeUrl === FeedbackLoop.typeUrl || typeof o.flowId === "bigint" && typeof o.responseIndex === "number" && typeof o.responseKey === "string" && typeof o.msgsIndex === "number" && typeof o.msgKey === "string" && typeof o.valueType === "string");
  },
  isSDK(o: any): o is FeedbackLoopSDKType {
    return o && (o.$typeUrl === FeedbackLoop.typeUrl || typeof o.flow_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.msgs_index === "number" && typeof o.msg_key === "string" && typeof o.value_type === "string");
  },
  isAmino(o: any): o is FeedbackLoopAmino {
    return o && (o.$typeUrl === FeedbackLoop.typeUrl || typeof o.flow_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.msgs_index === "number" && typeof o.msg_key === "string" && typeof o.value_type === "string");
  },
  encode(message: FeedbackLoop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
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
    if (message.icqConfig !== undefined) {
      ICQConfig.encode(message.icqConfig, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeedbackLoop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedbackLoop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
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
        case 8:
          message.icqConfig = ICQConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeedbackLoop {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      responseIndex: isSet(object.responseIndex) ? Number(object.responseIndex) : 0,
      responseKey: isSet(object.responseKey) ? String(object.responseKey) : "",
      msgsIndex: isSet(object.msgsIndex) ? Number(object.msgsIndex) : 0,
      msgKey: isSet(object.msgKey) ? String(object.msgKey) : "",
      valueType: isSet(object.valueType) ? String(object.valueType) : "",
      icqConfig: isSet(object.icqConfig) ? ICQConfig.fromJSON(object.icqConfig) : undefined
    };
  },
  toJSON(message: FeedbackLoop): JsonSafe<FeedbackLoop> {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.responseIndex !== undefined && (obj.responseIndex = Math.round(message.responseIndex));
    message.responseKey !== undefined && (obj.responseKey = message.responseKey);
    message.msgsIndex !== undefined && (obj.msgsIndex = Math.round(message.msgsIndex));
    message.msgKey !== undefined && (obj.msgKey = message.msgKey);
    message.valueType !== undefined && (obj.valueType = message.valueType);
    message.icqConfig !== undefined && (obj.icqConfig = message.icqConfig ? ICQConfig.toJSON(message.icqConfig) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FeedbackLoop>): FeedbackLoop {
    const message = createBaseFeedbackLoop();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.responseIndex = object.responseIndex ?? 0;
    message.responseKey = object.responseKey ?? "";
    message.msgsIndex = object.msgsIndex ?? 0;
    message.msgKey = object.msgKey ?? "";
    message.valueType = object.valueType ?? "";
    message.icqConfig = object.icqConfig !== undefined && object.icqConfig !== null ? ICQConfig.fromPartial(object.icqConfig) : undefined;
    return message;
  },
  fromAmino(object: FeedbackLoopAmino): FeedbackLoop {
    const message = createBaseFeedbackLoop();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
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
    if (object.icq_config !== undefined && object.icq_config !== null) {
      message.icqConfig = ICQConfig.fromAmino(object.icq_config);
    }
    return message;
  },
  toAmino(message: FeedbackLoop): FeedbackLoopAmino {
    const obj: any = {};
    obj.flow_id = message.flowId !== BigInt(0) ? message.flowId?.toString() : undefined;
    obj.response_index = message.responseIndex === 0 ? undefined : message.responseIndex;
    obj.response_key = message.responseKey === "" ? undefined : message.responseKey;
    obj.msgs_index = message.msgsIndex === 0 ? undefined : message.msgsIndex;
    obj.msg_key = message.msgKey === "" ? undefined : message.msgKey;
    obj.value_type = message.valueType === "" ? undefined : message.valueType;
    obj.icq_config = message.icqConfig ? ICQConfig.toAmino(message.icqConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeedbackLoopAminoMsg): FeedbackLoop {
    return FeedbackLoop.fromAmino(object.value);
  },
  fromProtoMsg(message: FeedbackLoopProtoMsg): FeedbackLoop {
    return FeedbackLoop.decode(message.value);
  },
  toProto(message: FeedbackLoop): Uint8Array {
    return FeedbackLoop.encode(message).finish();
  },
  toProtoMsg(message: FeedbackLoop): FeedbackLoopProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.FeedbackLoop",
      value: FeedbackLoop.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(FeedbackLoop.typeUrl, FeedbackLoop);
function createBaseComparison(): Comparison {
  return {
    flowId: BigInt(0),
    responseIndex: 0,
    responseKey: "",
    valueType: "",
    operator: 0,
    operand: "",
    icqConfig: undefined
  };
}
export const Comparison = {
  typeUrl: "/intento.intent.v1beta1.Comparison",
  is(o: any): o is Comparison {
    return o && (o.$typeUrl === Comparison.typeUrl || typeof o.flowId === "bigint" && typeof o.responseIndex === "number" && typeof o.responseKey === "string" && typeof o.valueType === "string" && isSet(o.operator) && typeof o.operand === "string");
  },
  isSDK(o: any): o is ComparisonSDKType {
    return o && (o.$typeUrl === Comparison.typeUrl || typeof o.flow_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.value_type === "string" && isSet(o.operator) && typeof o.operand === "string");
  },
  isAmino(o: any): o is ComparisonAmino {
    return o && (o.$typeUrl === Comparison.typeUrl || typeof o.flow_id === "bigint" && typeof o.response_index === "number" && typeof o.response_key === "string" && typeof o.value_type === "string" && isSet(o.operator) && typeof o.operand === "string");
  },
  encode(message: Comparison, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowId !== BigInt(0)) {
      writer.uint32(8).uint64(message.flowId);
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
    if (message.operator !== 0) {
      writer.uint32(40).int32(message.operator);
    }
    if (message.operand !== "") {
      writer.uint32(50).string(message.operand);
    }
    if (message.icqConfig !== undefined) {
      ICQConfig.encode(message.icqConfig, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Comparison {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComparison();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowId = reader.uint64();
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
          message.operator = reader.int32() as any;
          break;
        case 6:
          message.operand = reader.string();
          break;
        case 8:
          message.icqConfig = ICQConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Comparison {
    return {
      flowId: isSet(object.flowId) ? BigInt(object.flowId.toString()) : BigInt(0),
      responseIndex: isSet(object.responseIndex) ? Number(object.responseIndex) : 0,
      responseKey: isSet(object.responseKey) ? String(object.responseKey) : "",
      valueType: isSet(object.valueType) ? String(object.valueType) : "",
      operator: isSet(object.operator) ? comparisonOperatorFromJSON(object.operator) : -1,
      operand: isSet(object.operand) ? String(object.operand) : "",
      icqConfig: isSet(object.icqConfig) ? ICQConfig.fromJSON(object.icqConfig) : undefined
    };
  },
  toJSON(message: Comparison): JsonSafe<Comparison> {
    const obj: any = {};
    message.flowId !== undefined && (obj.flowId = (message.flowId || BigInt(0)).toString());
    message.responseIndex !== undefined && (obj.responseIndex = Math.round(message.responseIndex));
    message.responseKey !== undefined && (obj.responseKey = message.responseKey);
    message.valueType !== undefined && (obj.valueType = message.valueType);
    message.operator !== undefined && (obj.operator = comparisonOperatorToJSON(message.operator));
    message.operand !== undefined && (obj.operand = message.operand);
    message.icqConfig !== undefined && (obj.icqConfig = message.icqConfig ? ICQConfig.toJSON(message.icqConfig) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Comparison>): Comparison {
    const message = createBaseComparison();
    message.flowId = object.flowId !== undefined && object.flowId !== null ? BigInt(object.flowId.toString()) : BigInt(0);
    message.responseIndex = object.responseIndex ?? 0;
    message.responseKey = object.responseKey ?? "";
    message.valueType = object.valueType ?? "";
    message.operator = object.operator ?? 0;
    message.operand = object.operand ?? "";
    message.icqConfig = object.icqConfig !== undefined && object.icqConfig !== null ? ICQConfig.fromPartial(object.icqConfig) : undefined;
    return message;
  },
  fromAmino(object: ComparisonAmino): Comparison {
    const message = createBaseComparison();
    if (object.flow_id !== undefined && object.flow_id !== null) {
      message.flowId = BigInt(object.flow_id);
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
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.operand !== undefined && object.operand !== null) {
      message.operand = object.operand;
    }
    if (object.icq_config !== undefined && object.icq_config !== null) {
      message.icqConfig = ICQConfig.fromAmino(object.icq_config);
    }
    return message;
  },
  toAmino(message: Comparison): ComparisonAmino {
    const obj: any = {};
    obj.flow_id = message.flowId !== BigInt(0) ? message.flowId?.toString() : undefined;
    obj.response_index = message.responseIndex === 0 ? undefined : message.responseIndex;
    obj.response_key = message.responseKey === "" ? undefined : message.responseKey;
    obj.value_type = message.valueType === "" ? undefined : message.valueType;
    obj.operator = message.operator === 0 ? undefined : message.operator;
    obj.operand = message.operand === "" ? undefined : message.operand;
    obj.icq_config = message.icqConfig ? ICQConfig.toAmino(message.icqConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: ComparisonAminoMsg): Comparison {
    return Comparison.fromAmino(object.value);
  },
  fromProtoMsg(message: ComparisonProtoMsg): Comparison {
    return Comparison.decode(message.value);
  },
  toProto(message: Comparison): Uint8Array {
    return Comparison.encode(message).finish();
  },
  toProtoMsg(message: Comparison): ComparisonProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.Comparison",
      value: Comparison.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Comparison.typeUrl, Comparison);
function createBaseICQConfig(): ICQConfig {
  return {
    connectionId: "",
    chainId: "",
    timeoutPolicy: 0,
    timeoutDuration: Duration.fromPartial({}),
    queryType: "",
    queryKey: "",
    response: new Uint8Array()
  };
}
export const ICQConfig = {
  typeUrl: "/intento.intent.v1beta1.ICQConfig",
  is(o: any): o is ICQConfig {
    return o && (o.$typeUrl === ICQConfig.typeUrl || typeof o.connectionId === "string" && typeof o.chainId === "string" && isSet(o.timeoutPolicy) && Duration.is(o.timeoutDuration) && typeof o.queryType === "string" && typeof o.queryKey === "string" && (o.response instanceof Uint8Array || typeof o.response === "string"));
  },
  isSDK(o: any): o is ICQConfigSDKType {
    return o && (o.$typeUrl === ICQConfig.typeUrl || typeof o.connection_id === "string" && typeof o.chain_id === "string" && isSet(o.timeout_policy) && Duration.isSDK(o.timeout_duration) && typeof o.query_type === "string" && typeof o.query_key === "string" && (o.response instanceof Uint8Array || typeof o.response === "string"));
  },
  isAmino(o: any): o is ICQConfigAmino {
    return o && (o.$typeUrl === ICQConfig.typeUrl || typeof o.connection_id === "string" && typeof o.chain_id === "string" && isSet(o.timeout_policy) && Duration.isAmino(o.timeout_duration) && typeof o.query_type === "string" && typeof o.query_key === "string" && (o.response instanceof Uint8Array || typeof o.response === "string"));
  },
  encode(message: ICQConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.timeoutPolicy !== 0) {
      writer.uint32(24).int32(message.timeoutPolicy);
    }
    if (message.timeoutDuration !== undefined) {
      Duration.encode(message.timeoutDuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryType !== "") {
      writer.uint32(42).string(message.queryType);
    }
    if (message.queryKey !== "") {
      writer.uint32(50).string(message.queryKey);
    }
    if (message.response.length !== 0) {
      writer.uint32(58).bytes(message.response);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICQConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICQConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.timeoutPolicy = reader.int32() as any;
          break;
        case 4:
          message.timeoutDuration = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.queryType = reader.string();
          break;
        case 6:
          message.queryKey = reader.string();
          break;
        case 7:
          message.response = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ICQConfig {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      timeoutPolicy: isSet(object.timeoutPolicy) ? timeoutPolicyFromJSON(object.timeoutPolicy) : -1,
      timeoutDuration: isSet(object.timeoutDuration) ? Duration.fromJSON(object.timeoutDuration) : undefined,
      queryType: isSet(object.queryType) ? String(object.queryType) : "",
      queryKey: isSet(object.queryKey) ? String(object.queryKey) : "",
      response: isSet(object.response) ? bytesFromBase64(object.response) : new Uint8Array()
    };
  },
  toJSON(message: ICQConfig): JsonSafe<ICQConfig> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.timeoutPolicy !== undefined && (obj.timeoutPolicy = timeoutPolicyToJSON(message.timeoutPolicy));
    message.timeoutDuration !== undefined && (obj.timeoutDuration = message.timeoutDuration ? Duration.toJSON(message.timeoutDuration) : undefined);
    message.queryType !== undefined && (obj.queryType = message.queryType);
    message.queryKey !== undefined && (obj.queryKey = message.queryKey);
    message.response !== undefined && (obj.response = base64FromBytes(message.response !== undefined ? message.response : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ICQConfig>): ICQConfig {
    const message = createBaseICQConfig();
    message.connectionId = object.connectionId ?? "";
    message.chainId = object.chainId ?? "";
    message.timeoutPolicy = object.timeoutPolicy ?? 0;
    message.timeoutDuration = object.timeoutDuration !== undefined && object.timeoutDuration !== null ? Duration.fromPartial(object.timeoutDuration) : undefined;
    message.queryType = object.queryType ?? "";
    message.queryKey = object.queryKey ?? "";
    message.response = object.response ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ICQConfigAmino): ICQConfig {
    const message = createBaseICQConfig();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.timeout_policy !== undefined && object.timeout_policy !== null) {
      message.timeoutPolicy = object.timeout_policy;
    }
    if (object.timeout_duration !== undefined && object.timeout_duration !== null) {
      message.timeoutDuration = Duration.fromAmino(object.timeout_duration);
    }
    if (object.query_type !== undefined && object.query_type !== null) {
      message.queryType = object.query_type;
    }
    if (object.query_key !== undefined && object.query_key !== null) {
      message.queryKey = object.query_key;
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = bytesFromBase64(object.response);
    }
    return message;
  },
  toAmino(message: ICQConfig): ICQConfigAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.timeout_policy = message.timeoutPolicy === 0 ? undefined : message.timeoutPolicy;
    obj.timeout_duration = message.timeoutDuration ? Duration.toAmino(message.timeoutDuration) : undefined;
    obj.query_type = message.queryType === "" ? undefined : message.queryType;
    obj.query_key = message.queryKey === "" ? undefined : message.queryKey;
    obj.response = message.response ? base64FromBytes(message.response) : undefined;
    return obj;
  },
  fromAminoMsg(object: ICQConfigAminoMsg): ICQConfig {
    return ICQConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ICQConfigProtoMsg): ICQConfig {
    return ICQConfig.decode(message.value);
  },
  toProto(message: ICQConfig): Uint8Array {
    return ICQConfig.encode(message).finish();
  },
  toProtoMsg(message: ICQConfig): ICQConfigProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ICQConfig",
      value: ICQConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ICQConfig.typeUrl, ICQConfig);