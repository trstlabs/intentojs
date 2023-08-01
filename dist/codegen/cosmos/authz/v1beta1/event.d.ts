import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
    msg_type_url: string;
    granter: string;
    grantee: string;
}
export declare const EventGrant: {
    encode(message: EventGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventGrant;
    fromPartial(object: DeepPartial<EventGrant>): EventGrant;
};
export declare const EventRevoke: {
    encode(message: EventRevoke, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventRevoke;
    fromPartial(object: DeepPartial<EventRevoke>): EventRevoke;
};
