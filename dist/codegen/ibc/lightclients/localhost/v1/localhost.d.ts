import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
    /** self chain ID */
    chainId: string;
    /** self latest block height */
    height: Height;
}
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientStateSDKType {
    chain_id: string;
    height: HeightSDKType;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientState;
    fromPartial(object: DeepPartial<ClientState>): ClientState;
};
