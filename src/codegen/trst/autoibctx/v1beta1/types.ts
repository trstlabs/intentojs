import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * AutoTxInfo stores the info for the auto executing interchain accounts
 * transaction
 */
export interface AutoTxInfo {
  txId: bigint;
  owner: string;
  label: string;
  feeAddress: string;
  msgs: Any[];
  interval: Duration;
  startTime: Timestamp;
  execTime: Timestamp;
  endTime: Timestamp;
  autoTxHistory: AutoTxHistoryEntry[];
  portId: string;
  connectionId: string;
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  dependsOnTxIds: bigint[];
  updateHistory: Timestamp[];
}
/**
 * AutoTxInfo stores the info for the auto executing interchain accounts
 * transaction
 */
export interface AutoTxInfoSDKType {
  tx_id: bigint;
  owner: string;
  label: string;
  fee_address: string;
  msgs: AnySDKType[];
  interval: DurationSDKType;
  start_time: TimestampSDKType;
  exec_time: TimestampSDKType;
  end_time: TimestampSDKType;
  auto_tx_history: AutoTxHistoryEntrySDKType[];
  port_id: string;
  connection_id: string;
  depends_on_tx_ids: bigint[];
  update_history: TimestampSDKType[];
}
/** AutoTxHistoryEntry provides a the history of AutoTx interchain tx call */
export interface AutoTxHistoryEntry {
  scheduledExecTime: Timestamp;
  actualExecTime: Timestamp;
  execFee: Coin;
  executed: boolean;
  timedOut: boolean;
  error: string;
}
/** AutoTxHistoryEntry provides a the history of AutoTx interchain tx call */
export interface AutoTxHistoryEntrySDKType {
  scheduled_exec_time: TimestampSDKType;
  actual_exec_time: TimestampSDKType;
  exec_fee: CoinSDKType;
  executed: boolean;
  timed_out: boolean;
  error: string;
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
  /**
   * relayer rewards in utrst for each message type 0=SDK,1=Wasm, 2=Osmo.
   * Rewards are in utrst and topped up in the module account by alloc module.
   */
  relayerRewards: bigint[];
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
    startTime: Timestamp.fromPartial({}),
    execTime: Timestamp.fromPartial({}),
    endTime: Timestamp.fromPartial({}),
    autoTxHistory: [],
    portId: "",
    connectionId: "",
    dependsOnTxIds: [],
    updateHistory: []
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
      Any.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.interval !== undefined) {
      Duration.encode(message.interval, writer.uint32(50).fork()).ldelim();
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.execTime !== undefined) {
      Timestamp.encode(message.execTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(message.endTime, writer.uint32(74).fork()).ldelim();
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
    writer.uint32(114).fork();
    for (const v of message.dependsOnTxIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.updateHistory) {
      Timestamp.encode(v!, writer.uint32(122).fork()).ldelim();
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
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 6:
          message.interval = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.execTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.endTime = Timestamp.decode(reader, reader.uint32());
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
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dependsOnTxIds.push(reader.uint64());
            }
          } else {
            message.dependsOnTxIds.push(reader.uint64());
          }
          break;
        case 15:
          message.updateHistory.push(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AutoTxInfo>): AutoTxInfo {
    const message = createBaseAutoTxInfo();
    message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.label = object.label ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.interval = object.interval !== undefined && object.interval !== null ? Duration.fromPartial(object.interval) : undefined;
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.execTime = object.execTime !== undefined && object.execTime !== null ? Timestamp.fromPartial(object.execTime) : undefined;
    message.endTime = object.endTime !== undefined && object.endTime !== null ? Timestamp.fromPartial(object.endTime) : undefined;
    message.autoTxHistory = object.autoTxHistory?.map(e => AutoTxHistoryEntry.fromPartial(e)) || [];
    message.portId = object.portId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
    message.updateHistory = object.updateHistory?.map(e => Timestamp.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAutoTxHistoryEntry(): AutoTxHistoryEntry {
  return {
    scheduledExecTime: Timestamp.fromPartial({}),
    actualExecTime: Timestamp.fromPartial({}),
    execFee: Coin.fromPartial({}),
    executed: false,
    timedOut: false,
    error: ""
  };
}
export const AutoTxHistoryEntry = {
  encode(message: AutoTxHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scheduledExecTime !== undefined) {
      Timestamp.encode(message.scheduledExecTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.actualExecTime !== undefined) {
      Timestamp.encode(message.actualExecTime, writer.uint32(18).fork()).ldelim();
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
    if (message.error !== "") {
      writer.uint32(50).string(message.error);
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
          message.scheduledExecTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.actualExecTime = Timestamp.decode(reader, reader.uint32());
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
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AutoTxHistoryEntry>): AutoTxHistoryEntry {
    const message = createBaseAutoTxHistoryEntry();
    message.scheduledExecTime = object.scheduledExecTime !== undefined && object.scheduledExecTime !== null ? Timestamp.fromPartial(object.scheduledExecTime) : undefined;
    message.actualExecTime = object.actualExecTime !== undefined && object.actualExecTime !== null ? Timestamp.fromPartial(object.actualExecTime) : undefined;
    message.execFee = object.execFee !== undefined && object.execFee !== null ? Coin.fromPartial(object.execFee) : undefined;
    message.executed = object.executed ?? false;
    message.timedOut = object.timedOut ?? false;
    message.error = object.error ?? "";
    return message;
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
  fromPartial(object: DeepPartial<Params>): Params {
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
  }
};