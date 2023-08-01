import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface AutoTxIbcUsage {
    address: string;
    txs: AutoIbcTxAck[];
}
export interface AutoTxIbcUsageSDKType {
    address: string;
    txs: AutoIbcTxAckSDKType[];
}
export interface AutoIbcTxAck {
    coin: Coin;
    connectionId: string;
}
export interface AutoIbcTxAckSDKType {
    coin: CoinSDKType;
    connection_id: string;
}
export declare const AutoTxIbcUsage: {
    encode(message: AutoTxIbcUsage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AutoTxIbcUsage;
    fromPartial(object: DeepPartial<AutoTxIbcUsage>): AutoTxIbcUsage;
};
export declare const AutoIbcTxAck: {
    encode(message: AutoIbcTxAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AutoIbcTxAck;
    fromPartial(object: DeepPartial<AutoIbcTxAck>): AutoIbcTxAck;
};
