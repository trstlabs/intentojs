import { Params, ParamsSDKType, AutoTxInfo, AutoTxInfoSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState - genesis state of x/auto-ibc-tx */
export interface GenesisState {
    params: Params;
    interchainAccountAddresses: string[];
    autoTxInfos: AutoTxInfo[];
    sequences: Sequence[];
}
/** GenesisState - genesis state of x/auto-ibc-tx */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    interchain_account_addresses: string[];
    auto_tx_infos: AutoTxInfoSDKType[];
    sequences: SequenceSDKType[];
}
/** Sequence id and value of a counter */
export interface Sequence {
    idKey: Uint8Array;
    value: bigint;
}
/** Sequence id and value of a counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: bigint;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Sequence;
    fromPartial(object: DeepPartial<Sequence>): Sequence;
};
