import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
    protocol: bigint;
    software: string;
}
export interface AppProtoMsg {
    typeUrl: "/tendermint.version.App";
    value: Uint8Array;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppAmino {
    protocol?: string;
    software?: string;
}
export interface AppAminoMsg {
    type: "/tendermint.version.App";
    value: AppAmino;
}
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface AppSDKType {
    protocol: bigint;
    software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
    block: bigint;
    app: bigint;
}
export interface ConsensusProtoMsg {
    typeUrl: "/tendermint.version.Consensus";
    value: Uint8Array;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusAmino {
    block?: string;
    app?: string;
}
export interface ConsensusAminoMsg {
    type: "/tendermint.version.Consensus";
    value: ConsensusAmino;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface ConsensusSDKType {
    block: bigint;
    app: bigint;
}
export declare const App: {
    typeUrl: string;
    is(o: any): o is App;
    isSDK(o: any): o is AppSDKType;
    isAmino(o: any): o is AppAmino;
    encode(message: App, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): App;
    fromJSON(object: any): App;
    toJSON(message: App): JsonSafe<App>;
    fromPartial(object: Partial<App>): App;
    fromAmino(object: AppAmino): App;
    toAmino(message: App): AppAmino;
    fromAminoMsg(object: AppAminoMsg): App;
    fromProtoMsg(message: AppProtoMsg): App;
    toProto(message: App): Uint8Array;
    toProtoMsg(message: App): AppProtoMsg;
};
export declare const Consensus: {
    typeUrl: string;
    is(o: any): o is Consensus;
    isSDK(o: any): o is ConsensusSDKType;
    isAmino(o: any): o is ConsensusAmino;
    encode(message: Consensus, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Consensus;
    fromJSON(object: any): Consensus;
    toJSON(message: Consensus): JsonSafe<Consensus>;
    fromPartial(object: Partial<Consensus>): Consensus;
    fromAmino(object: ConsensusAmino): Consensus;
    toAmino(message: Consensus): ConsensusAmino;
    fromAminoMsg(object: ConsensusAminoMsg): Consensus;
    fromProtoMsg(message: ConsensusProtoMsg): Consensus;
    toProto(message: Consensus): Uint8Array;
    toProtoMsg(message: Consensus): ConsensusProtoMsg;
};
