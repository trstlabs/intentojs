import { GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
    authorization: GrantAuthorization[];
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateSDKType {
    authorization: GrantAuthorizationSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
