import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * AutoTxInfo stores the info for the auto executing interchain accounts
 * transaction
 */
export interface AutoTxInfo {
  txId: Long;
  owner: string;
  label: string;
  feeAddress: string;
  msgs: Any[];
  interval: Duration;
  startTime: Date;
  execTime: Date;
  endTime: Date;
  autoTxHistory: AutoTxHistoryEntry[];
  portId: string;
  connectionId: string;
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  dependsOnTxIds: Long[];
  updateHistory: Date[];
}
export interface AutoTxInfoProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxInfo";
  value: Uint8Array;
}
/**
 * AutoTxInfo stores the info for the auto executing interchain accounts
 * transaction
 */
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
  /**
   * optional array of dependent txs that should be executed before execution is
   * allowed
   */
  depends_on_tx_ids: string[];
  update_history: Date[];
}
export interface AutoTxInfoAminoMsg {
  type: "/trst.autoibctx.v1beta1.AutoTxInfo";
  value: AutoTxInfoAmino;
}
/**
 * AutoTxInfo stores the info for the auto executing interchain accounts
 * transaction
 */
export interface AutoTxInfoSDKType {
  tx_id: Long;
  owner: string;
  label: string;
  fee_address: string;
  msgs: AnySDKType[];
  interval: DurationSDKType;
  start_time: Date;
  exec_time: Date;
  end_time: Date;
  auto_tx_history: AutoTxHistoryEntrySDKType[];
  port_id: string;
  connection_id: string;
  depends_on_tx_ids: Long[];
  update_history: Date[];
}
/** AutoTxHistoryEntry provides a the history of AutoTx interchain tx call */
export interface AutoTxHistoryEntry {
  scheduledExecTime: Date;
  actualExecTime: Date;
  execFee: Coin;
  executed: boolean;
  timedOut: boolean;
  error: string;
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
  executed: boolean;
  timed_out: boolean;
  error: string;
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
  error: string;
}
/** Params defines the params for activeness of AutoTxs on governance proposals. */
export interface Params {
  AutoTxFundsCommission: Long;
  AutoTxFlexFeeMul: Long;
  AutoTxConstantFee: Long;
  RecurringAutoTxConstantFee: Long;
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
  relayerRewards: Long[];
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
  /**
   * relayer rewards in utrst for each message type 0=SDK,1=Wasm, 2=Osmo.
   * Rewards are in utrst and topped up in the module account by alloc module.
   */
  relayer_rewards: string[];
}
export interface ParamsAminoMsg {
  type: "/trst.autoibctx.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the params for activeness of AutoTxs on governance proposals. */
export interface ParamsSDKType {
  AutoTxFundsCommission: Long;
  AutoTxFlexFeeMul: Long;
  AutoTxConstantFee: Long;
  RecurringAutoTxConstantFee: Long;
  MaxAutoTxDuration: DurationSDKType;
  MinAutoTxDuration: DurationSDKType;
  MinAutoTxInterval: DurationSDKType;
  relayer_rewards: Long[];
}
function createBaseAutoTxInfo(): AutoTxInfo {
  return {
    txId: Long.UZERO,
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
    dependsOnTxIds: [],
    updateHistory: []
  };
}
export const AutoTxInfo = {
  encode(message: AutoTxInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.txId.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): AutoTxInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoTxInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = (reader.uint64() as Long);
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
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.dependsOnTxIds.push((reader.uint64() as Long));
            }
          } else {
            message.dependsOnTxIds.push((reader.uint64() as Long));
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
    message.txId = object.txId !== undefined && object.txId !== null ? Long.fromValue(object.txId) : Long.UZERO;
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
    message.dependsOnTxIds = object.dependsOnTxIds?.map(e => Long.fromValue(e)) || [];
    message.updateHistory = object.updateHistory?.map(e => Timestamp.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AutoTxInfoAmino): AutoTxInfo {
    return {
      txId: Long.fromString(object.tx_id),
      owner: object.owner,
      label: object.label,
      feeAddress: object.fee_address,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromAmino(e)) : [],
      interval: object?.interval ? Duration.fromAmino(object.interval) : undefined,
      startTime: object.start_time,
      execTime: object.exec_time,
      endTime: object.end_time,
      autoTxHistory: Array.isArray(object?.auto_tx_history) ? object.auto_tx_history.map((e: any) => AutoTxHistoryEntry.fromAmino(e)) : [],
      portId: object.port_id,
      connectionId: object.connection_id,
      dependsOnTxIds: Array.isArray(object?.depends_on_tx_ids) ? object.depends_on_tx_ids.map((e: any) => e) : [],
      updateHistory: Array.isArray(object?.update_history) ? object.update_history.map((e: any) => Timestamp.fromAmino(e)) : []
    };
  },
  toAmino(message: AutoTxInfo): AutoTxInfoAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? message.txId.toString() : undefined;
    obj.owner = message.owner;
    obj.label = message.label;
    obj.fee_address = message.feeAddress;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
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
    if (message.dependsOnTxIds) {
      obj.depends_on_tx_ids = message.dependsOnTxIds.map(e => e);
    } else {
      obj.depends_on_tx_ids = [];
    }
    if (message.updateHistory) {
      obj.update_history = message.updateHistory.map(e => e ? Timestamp.toAmino(e) : undefined);
    } else {
      obj.update_history = [];
    }
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
function createBaseAutoTxHistoryEntry(): AutoTxHistoryEntry {
  return {
    scheduledExecTime: new Date(),
    actualExecTime: new Date(),
    execFee: Coin.fromPartial({}),
    executed: false,
    timedOut: false,
    error: ""
  };
}
export const AutoTxHistoryEntry = {
  encode(message: AutoTxHistoryEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.error !== "") {
      writer.uint32(50).string(message.error);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AutoTxHistoryEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    message.scheduledExecTime = object.scheduledExecTime ?? undefined;
    message.actualExecTime = object.actualExecTime ?? undefined;
    message.execFee = object.execFee !== undefined && object.execFee !== null ? Coin.fromPartial(object.execFee) : undefined;
    message.executed = object.executed ?? false;
    message.timedOut = object.timedOut ?? false;
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: AutoTxHistoryEntryAmino): AutoTxHistoryEntry {
    return {
      scheduledExecTime: object.scheduled_exec_time,
      actualExecTime: object.actual_exec_time,
      execFee: object?.exec_fee ? Coin.fromAmino(object.exec_fee) : undefined,
      executed: object.executed,
      timedOut: object.timed_out,
      error: object.error
    };
  },
  toAmino(message: AutoTxHistoryEntry): AutoTxHistoryEntryAmino {
    const obj: any = {};
    obj.scheduled_exec_time = message.scheduledExecTime;
    obj.actual_exec_time = message.actualExecTime;
    obj.exec_fee = message.execFee ? Coin.toAmino(message.execFee) : undefined;
    obj.executed = message.executed;
    obj.timed_out = message.timedOut;
    obj.error = message.error;
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
    AutoTxFundsCommission: Long.ZERO,
    AutoTxFlexFeeMul: Long.ZERO,
    AutoTxConstantFee: Long.ZERO,
    RecurringAutoTxConstantFee: Long.ZERO,
    MaxAutoTxDuration: Duration.fromPartial({}),
    MinAutoTxDuration: Duration.fromPartial({}),
    MinAutoTxInterval: Duration.fromPartial({}),
    relayerRewards: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.AutoTxFundsCommission.isZero()) {
      writer.uint32(8).int64(message.AutoTxFundsCommission);
    }
    if (!message.AutoTxFlexFeeMul.isZero()) {
      writer.uint32(16).int64(message.AutoTxFlexFeeMul);
    }
    if (!message.AutoTxConstantFee.isZero()) {
      writer.uint32(24).int64(message.AutoTxConstantFee);
    }
    if (!message.RecurringAutoTxConstantFee.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AutoTxFundsCommission = (reader.int64() as Long);
          break;
        case 2:
          message.AutoTxFlexFeeMul = (reader.int64() as Long);
          break;
        case 3:
          message.AutoTxConstantFee = (reader.int64() as Long);
          break;
        case 4:
          message.RecurringAutoTxConstantFee = (reader.int64() as Long);
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
              message.relayerRewards.push((reader.int64() as Long));
            }
          } else {
            message.relayerRewards.push((reader.int64() as Long));
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
    message.AutoTxFundsCommission = object.AutoTxFundsCommission !== undefined && object.AutoTxFundsCommission !== null ? Long.fromValue(object.AutoTxFundsCommission) : Long.ZERO;
    message.AutoTxFlexFeeMul = object.AutoTxFlexFeeMul !== undefined && object.AutoTxFlexFeeMul !== null ? Long.fromValue(object.AutoTxFlexFeeMul) : Long.ZERO;
    message.AutoTxConstantFee = object.AutoTxConstantFee !== undefined && object.AutoTxConstantFee !== null ? Long.fromValue(object.AutoTxConstantFee) : Long.ZERO;
    message.RecurringAutoTxConstantFee = object.RecurringAutoTxConstantFee !== undefined && object.RecurringAutoTxConstantFee !== null ? Long.fromValue(object.RecurringAutoTxConstantFee) : Long.ZERO;
    message.MaxAutoTxDuration = object.MaxAutoTxDuration !== undefined && object.MaxAutoTxDuration !== null ? Duration.fromPartial(object.MaxAutoTxDuration) : undefined;
    message.MinAutoTxDuration = object.MinAutoTxDuration !== undefined && object.MinAutoTxDuration !== null ? Duration.fromPartial(object.MinAutoTxDuration) : undefined;
    message.MinAutoTxInterval = object.MinAutoTxInterval !== undefined && object.MinAutoTxInterval !== null ? Duration.fromPartial(object.MinAutoTxInterval) : undefined;
    message.relayerRewards = object.relayerRewards?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      AutoTxFundsCommission: Long.fromString(object.AutoTxFundsCommission),
      AutoTxFlexFeeMul: Long.fromString(object.AutoTxFlexFeeMul),
      AutoTxConstantFee: Long.fromString(object.AutoTxConstantFee),
      RecurringAutoTxConstantFee: Long.fromString(object.RecurringAutoTxConstantFee),
      MaxAutoTxDuration: object?.MaxAutoTxDuration ? Duration.fromAmino(object.MaxAutoTxDuration) : undefined,
      MinAutoTxDuration: object?.MinAutoTxDuration ? Duration.fromAmino(object.MinAutoTxDuration) : undefined,
      MinAutoTxInterval: object?.MinAutoTxInterval ? Duration.fromAmino(object.MinAutoTxInterval) : undefined,
      relayerRewards: Array.isArray(object?.relayer_rewards) ? object.relayer_rewards.map((e: any) => e) : []
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
      obj.relayer_rewards = message.relayerRewards.map(e => e);
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