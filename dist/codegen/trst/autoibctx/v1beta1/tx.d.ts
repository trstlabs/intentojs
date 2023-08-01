import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgRegisterAccount registers an interchain account for the given owner over
 * the specified connection pair
 */
export interface MsgRegisterAccount {
    owner: string;
    connectionId: string;
    version: string;
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
export interface MsgRegisterAccountResponse {
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseSDKType {
}
/**
 * MsgSubmitTx creates and submits an arbitrary transaction msg to be executed
 * locally or using an interchain account
 */
export interface MsgSubmitTx {
    owner: string;
    connectionId: string;
    msg: Any;
}
/**
 * MsgSubmitTx creates and submits an arbitrary transaction msg to be executed
 * locally or using an interchain account
 */
export interface MsgSubmitTxSDKType {
    owner: string;
    connection_id: string;
    msg: AnySDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponse {
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseSDKType {
}
/**
 * MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg
 * to be executed locally or using an interchain account
 */
export interface MsgSubmitAutoTx {
    owner: string;
    connectionId: string;
    label: string;
    msgs: Any[];
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
     * optional fees to be used for auto tx execution limiting the amount of fees
     * incurred
     */
    feeFunds: Coin[];
    /**
     * optional array of dependent txs that should be executed before execution is
     * allowed
     */
    dependsOnTxIds: bigint[];
}
/**
 * MsgSubmitAutoTx creates, submits and schedules an arbitrary transaction msg
 * to be executed locally or using an interchain account
 */
export interface MsgSubmitAutoTxSDKType {
    owner: string;
    connection_id: string;
    label: string;
    msgs: AnySDKType[];
    duration: string;
    start_at: bigint;
    interval: string;
    fee_funds: CoinSDKType[];
    depends_on_tx_ids: bigint[];
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponse {
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitAutoTxResponseSDKType {
}
/**
 * MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and
 * schedules an arbitrary transaction msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitAutoTx {
    owner: string;
    connectionId: string;
    label: string;
    msgs: Any[];
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
     * optional fees to be used for auto tx execution limiting the amount of fees
     * incurred
     */
    feeFunds: Coin[];
    /**
     * optional array of dependent txs that should be executed before execution is
     * allowed
     */
    dependsOnTxIds: bigint[];
    version: string;
}
/**
 * MsgRegisterAccountAndSubmitAutoTx creates an interchain account, submits and
 * schedules an arbitrary transaction msg to be executed by this interchain
 * account
 */
export interface MsgRegisterAccountAndSubmitAutoTxSDKType {
    owner: string;
    connection_id: string;
    label: string;
    msgs: AnySDKType[];
    duration: string;
    start_at: bigint;
    interval: string;
    fee_funds: CoinSDKType[];
    depends_on_tx_ids: bigint[];
    version: string;
}
/**
 * MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitAutoTxResponse {
}
/**
 * MsgRegisterAccountAndSubmitAutoTxResponse defines the MsgSubmitTx response
 * type
 */
export interface MsgRegisterAccountAndSubmitAutoTxResponseSDKType {
}
/**
 * MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateAutoTx {
    owner: string;
    txId: bigint;
    connectionId: string;
    label: string;
    msgs: Any[];
    /** end_time when set defines the time that the code should run for */
    endTime: bigint;
    /**
     * start_at when set as a unix time after block inclusion, creates a custom
     * start time for execution
     */
    startAt: bigint;
    /** interval defines the interval between auto_msg calls */
    interval: string;
    /**
     * optional fees to be used for auto tx execution limiting the amount of fees
     * incurred
     */
    feeFunds: Coin[];
    /**
     * optional array of dependent txs that should be executed before execution is
     * allowed
     */
    dependsOnTxIds: bigint[];
}
/**
 * MsgUpdateAutoTx updates an arbitrary transaction msg to be executed locally
 * or using an interchain account
 */
export interface MsgUpdateAutoTxSDKType {
    owner: string;
    tx_id: bigint;
    connection_id: string;
    label: string;
    msgs: AnySDKType[];
    end_time: bigint;
    start_at: bigint;
    interval: string;
    fee_funds: CoinSDKType[];
    depends_on_tx_ids: bigint[];
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateAutoTxResponse {
}
/** MsgUpdateTxResponse defines the MsgUpdateTx response type */
export interface MsgUpdateAutoTxResponseSDKType {
}
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccount;
    fromPartial(object: DeepPartial<MsgRegisterAccount>): MsgRegisterAccount;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountResponse;
    fromPartial(_: DeepPartial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTx;
    fromPartial(object: DeepPartial<MsgSubmitTx>): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTxResponse;
    fromPartial(_: DeepPartial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
};
export declare const MsgSubmitAutoTx: {
    encode(message: MsgSubmitAutoTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAutoTx;
    fromPartial(object: DeepPartial<MsgSubmitAutoTx>): MsgSubmitAutoTx;
};
export declare const MsgSubmitAutoTxResponse: {
    encode(_: MsgSubmitAutoTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitAutoTxResponse;
    fromPartial(_: DeepPartial<MsgSubmitAutoTxResponse>): MsgSubmitAutoTxResponse;
};
export declare const MsgRegisterAccountAndSubmitAutoTx: {
    encode(message: MsgRegisterAccountAndSubmitAutoTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitAutoTx;
    fromPartial(object: DeepPartial<MsgRegisterAccountAndSubmitAutoTx>): MsgRegisterAccountAndSubmitAutoTx;
};
export declare const MsgRegisterAccountAndSubmitAutoTxResponse: {
    encode(_: MsgRegisterAccountAndSubmitAutoTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAccountAndSubmitAutoTxResponse;
    fromPartial(_: DeepPartial<MsgRegisterAccountAndSubmitAutoTxResponse>): MsgRegisterAccountAndSubmitAutoTxResponse;
};
export declare const MsgUpdateAutoTx: {
    encode(message: MsgUpdateAutoTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAutoTx;
    fromPartial(object: DeepPartial<MsgUpdateAutoTx>): MsgUpdateAutoTx;
};
export declare const MsgUpdateAutoTxResponse: {
    encode(_: MsgUpdateAutoTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAutoTxResponse;
    fromPartial(_: DeepPartial<MsgUpdateAutoTxResponse>): MsgUpdateAutoTxResponse;
};
