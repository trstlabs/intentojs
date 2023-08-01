import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface ProtocolVersion {
    p2p: bigint;
    block: bigint;
    app: bigint;
}
export interface ProtocolVersionSDKType {
    p2p: bigint;
    block: bigint;
    app: bigint;
}
export interface NodeInfo {
    protocolVersion: ProtocolVersion;
    nodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOther;
}
export interface NodeInfoSDKType {
    protocol_version: ProtocolVersionSDKType;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface NodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    addressInfo: PeerAddressInfo[];
    lastConnected: Timestamp;
}
export interface PeerInfoSDKType {
    id: string;
    address_info: PeerAddressInfoSDKType[];
    last_connected: TimestampSDKType;
}
export interface PeerAddressInfo {
    address: string;
    lastDialSuccess: Timestamp;
    lastDialFailure: Timestamp;
    dialFailures: number;
}
export interface PeerAddressInfoSDKType {
    address: string;
    last_dial_success: TimestampSDKType;
    last_dial_failure: TimestampSDKType;
    dial_failures: number;
}
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion;
    fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion;
};
export declare const NodeInfo: {
    encode(message: NodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo;
    fromPartial(object: DeepPartial<NodeInfo>): NodeInfo;
};
export declare const NodeInfoOther: {
    encode(message: NodeInfoOther, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther;
    fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther;
};
export declare const PeerInfo: {
    encode(message: PeerInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo;
    fromPartial(object: DeepPartial<PeerInfo>): PeerInfo;
};
export declare const PeerAddressInfo: {
    encode(message: PeerAddressInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo;
    fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo;
};
