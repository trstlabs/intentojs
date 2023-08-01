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
export declare const AutoTxInfo: {
    encode(message: AutoTxInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AutoTxInfo;
    fromPartial(object: DeepPartial<AutoTxInfo>): AutoTxInfo;
};
export declare const AutoTxHistoryEntry: {
    encode(message: AutoTxHistoryEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AutoTxHistoryEntry;
    fromPartial(object: DeepPartial<AutoTxHistoryEntry>): AutoTxHistoryEntry;
};
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
