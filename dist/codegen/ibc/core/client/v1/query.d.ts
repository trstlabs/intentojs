import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightAmino, ConsensusStateWithHeightSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    clientId: string;
}
export interface QueryClientStateRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest";
    value: Uint8Array;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestAmino {
    /** client state unique identifier */
    client_id?: string;
}
export interface QueryClientStateRequestAminoMsg {
    type: "cosmos-sdk/QueryClientStateRequest";
    value: QueryClientStateRequestAmino;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestSDKType {
    client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    clientState?: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
export interface QueryClientStateResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse";
    value: Uint8Array;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseAmino {
    /** client state associated with the request identifier */
    client_state?: AnyAmino;
    /** merkle proof of existence */
    proof?: string;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryClientStateResponseAminoMsg {
    type: "cosmos-sdk/QueryClientStateResponse";
    value: QueryClientStateResponseAmino;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseSDKType {
    client_state?: AnySDKType;
    proof: Uint8Array;
    proof_height: HeightSDKType;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination?: PageRequest;
}
export interface QueryClientStatesRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest";
    value: Uint8Array;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestAmino {
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryClientStatesRequestAminoMsg {
    type: "cosmos-sdk/QueryClientStatesRequest";
    value: QueryClientStatesRequestAmino;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    clientStates: IdentifiedClientState[];
    /** pagination response */
    pagination?: PageResponse;
}
export interface QueryClientStatesResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse";
    value: Uint8Array;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseAmino {
    /** list of stored ClientStates of the chain. */
    client_states?: IdentifiedClientStateAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
}
export interface QueryClientStatesResponseAminoMsg {
    type: "cosmos-sdk/QueryClientStatesResponse";
    value: QueryClientStatesResponseAmino;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseSDKType {
    client_states: IdentifiedClientStateSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    clientId: string;
    /** consensus state revision number */
    revisionNumber: bigint;
    /** consensus state revision height */
    revisionHeight: bigint;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latestHeight: boolean;
}
export interface QueryConsensusStateRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestAmino {
    /** client identifier */
    client_id?: string;
    /** consensus state revision number */
    revision_number?: string;
    /** consensus state revision height */
    revision_height?: string;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latest_height?: boolean;
}
export interface QueryConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryConsensusStateRequest";
    value: QueryConsensusStateRequestAmino;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestSDKType {
    client_id: string;
    revision_number: bigint;
    revision_height: bigint;
    latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensusState?: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight: Height;
}
export interface QueryConsensusStateResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseAmino {
    /** consensus state associated with the client identifier at the given height */
    consensus_state?: AnyAmino;
    /** merkle proof of existence */
    proof?: string;
    /** height at which the proof was retrieved */
    proof_height?: HeightAmino;
}
export interface QueryConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryConsensusStateResponse";
    value: QueryConsensusStateResponseAmino;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseSDKType {
    consensus_state?: AnySDKType;
    proof: Uint8Array;
    proof_height: HeightSDKType;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination?: PageRequest;
}
export interface QueryConsensusStatesRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest";
    value: Uint8Array;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestAmino {
    /** client identifier */
    client_id?: string;
    /** pagination request */
    pagination?: PageRequestAmino;
}
export interface QueryConsensusStatesRequestAminoMsg {
    type: "cosmos-sdk/QueryConsensusStatesRequest";
    value: QueryConsensusStatesRequestAmino;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestSDKType {
    client_id: string;
    pagination?: PageRequestSDKType;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensusStates: ConsensusStateWithHeight[];
    /** pagination response */
    pagination?: PageResponse;
}
export interface QueryConsensusStatesResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse";
    value: Uint8Array;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseAmino {
    /** consensus states associated with the identifier */
    consensus_states?: ConsensusStateWithHeightAmino[];
    /** pagination response */
    pagination?: PageResponseAmino;
}
export interface QueryConsensusStatesResponseAminoMsg {
    type: "cosmos-sdk/QueryConsensusStatesResponse";
    value: QueryConsensusStatesResponseAmino;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseSDKType {
    consensus_states: ConsensusStateWithHeightSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
    /** client unique identifier */
    clientId: string;
}
export interface QueryClientStatusRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest";
    value: Uint8Array;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequestAmino {
    /** client unique identifier */
    client_id?: string;
}
export interface QueryClientStatusRequestAminoMsg {
    type: "cosmos-sdk/QueryClientStatusRequest";
    value: QueryClientStatusRequestAmino;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequestSDKType {
    client_id: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
    status: string;
}
export interface QueryClientStatusResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse";
    value: Uint8Array;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponseAmino {
    status?: string;
}
export interface QueryClientStatusResponseAminoMsg {
    type: "cosmos-sdk/QueryClientStatusResponse";
    value: QueryClientStatusResponseAmino;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponseSDKType {
    status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
}
export interface QueryClientParamsRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest";
    value: Uint8Array;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequestAmino {
}
export interface QueryClientParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryClientParamsRequest";
    value: QueryClientParamsRequestAmino;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequestSDKType {
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export interface QueryClientParamsResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse";
    value: Uint8Array;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryClientParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryClientParamsResponse";
    value: QueryClientParamsResponseAmino;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponseSDKType {
    params?: ParamsSDKType;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
}
export interface QueryUpgradedClientStateRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest";
    value: Uint8Array;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequestAmino {
}
export interface QueryUpgradedClientStateRequestAminoMsg {
    type: "cosmos-sdk/QueryUpgradedClientStateRequest";
    value: QueryUpgradedClientStateRequestAmino;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequestSDKType {
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
    /** client state associated with the request identifier */
    upgradedClientState?: Any;
}
export interface QueryUpgradedClientStateResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse";
    value: Uint8Array;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponseAmino {
    /** client state associated with the request identifier */
    upgraded_client_state?: AnyAmino;
}
export interface QueryUpgradedClientStateResponseAminoMsg {
    type: "cosmos-sdk/QueryUpgradedClientStateResponse";
    value: QueryUpgradedClientStateResponseAmino;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponseSDKType {
    upgraded_client_state?: AnySDKType;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
}
export interface QueryUpgradedConsensusStateRequestProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequestAmino {
}
export interface QueryUpgradedConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryUpgradedConsensusStateRequest";
    value: QueryUpgradedConsensusStateRequestAmino;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequestSDKType {
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Consensus state associated with the request identifier */
    upgradedConsensusState?: Any;
}
export interface QueryUpgradedConsensusStateResponseProtoMsg {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponseAmino {
    /** Consensus state associated with the request identifier */
    upgraded_consensus_state?: AnyAmino;
}
export interface QueryUpgradedConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryUpgradedConsensusStateResponse";
    value: QueryUpgradedConsensusStateResponseAmino;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponseSDKType {
    upgraded_consensus_state?: AnySDKType;
}
export declare const QueryClientStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientStateRequest;
    isSDK(o: any): o is QueryClientStateRequestSDKType;
    isAmino(o: any): o is QueryClientStateRequestAmino;
    encode(message: QueryClientStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStateRequest;
    fromJSON(object: any): QueryClientStateRequest;
    toJSON(message: QueryClientStateRequest): JsonSafe<QueryClientStateRequest>;
    fromPartial(object: Partial<QueryClientStateRequest>): QueryClientStateRequest;
    fromAmino(object: QueryClientStateRequestAmino): QueryClientStateRequest;
    toAmino(message: QueryClientStateRequest): QueryClientStateRequestAmino;
    fromAminoMsg(object: QueryClientStateRequestAminoMsg): QueryClientStateRequest;
    toAminoMsg(message: QueryClientStateRequest): QueryClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryClientStateRequestProtoMsg): QueryClientStateRequest;
    toProto(message: QueryClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryClientStateRequest): QueryClientStateRequestProtoMsg;
};
export declare const QueryClientStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientStateResponse;
    isSDK(o: any): o is QueryClientStateResponseSDKType;
    isAmino(o: any): o is QueryClientStateResponseAmino;
    encode(message: QueryClientStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStateResponse;
    fromJSON(object: any): QueryClientStateResponse;
    toJSON(message: QueryClientStateResponse): JsonSafe<QueryClientStateResponse>;
    fromPartial(object: Partial<QueryClientStateResponse>): QueryClientStateResponse;
    fromAmino(object: QueryClientStateResponseAmino): QueryClientStateResponse;
    toAmino(message: QueryClientStateResponse): QueryClientStateResponseAmino;
    fromAminoMsg(object: QueryClientStateResponseAminoMsg): QueryClientStateResponse;
    toAminoMsg(message: QueryClientStateResponse): QueryClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryClientStateResponseProtoMsg): QueryClientStateResponse;
    toProto(message: QueryClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryClientStateResponse): QueryClientStateResponseProtoMsg;
};
export declare const QueryClientStatesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientStatesRequest;
    isSDK(o: any): o is QueryClientStatesRequestSDKType;
    isAmino(o: any): o is QueryClientStatesRequestAmino;
    encode(message: QueryClientStatesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatesRequest;
    fromJSON(object: any): QueryClientStatesRequest;
    toJSON(message: QueryClientStatesRequest): JsonSafe<QueryClientStatesRequest>;
    fromPartial(object: Partial<QueryClientStatesRequest>): QueryClientStatesRequest;
    fromAmino(object: QueryClientStatesRequestAmino): QueryClientStatesRequest;
    toAmino(message: QueryClientStatesRequest): QueryClientStatesRequestAmino;
    fromAminoMsg(object: QueryClientStatesRequestAminoMsg): QueryClientStatesRequest;
    toAminoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestAminoMsg;
    fromProtoMsg(message: QueryClientStatesRequestProtoMsg): QueryClientStatesRequest;
    toProto(message: QueryClientStatesRequest): Uint8Array;
    toProtoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestProtoMsg;
};
export declare const QueryClientStatesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientStatesResponse;
    isSDK(o: any): o is QueryClientStatesResponseSDKType;
    isAmino(o: any): o is QueryClientStatesResponseAmino;
    encode(message: QueryClientStatesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatesResponse;
    fromJSON(object: any): QueryClientStatesResponse;
    toJSON(message: QueryClientStatesResponse): JsonSafe<QueryClientStatesResponse>;
    fromPartial(object: Partial<QueryClientStatesResponse>): QueryClientStatesResponse;
    fromAmino(object: QueryClientStatesResponseAmino): QueryClientStatesResponse;
    toAmino(message: QueryClientStatesResponse): QueryClientStatesResponseAmino;
    fromAminoMsg(object: QueryClientStatesResponseAminoMsg): QueryClientStatesResponse;
    toAminoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseAminoMsg;
    fromProtoMsg(message: QueryClientStatesResponseProtoMsg): QueryClientStatesResponse;
    toProto(message: QueryClientStatesResponse): Uint8Array;
    toProtoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseProtoMsg;
};
export declare const QueryConsensusStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConsensusStateRequest;
    isSDK(o: any): o is QueryConsensusStateRequestSDKType;
    isAmino(o: any): o is QueryConsensusStateRequestAmino;
    encode(message: QueryConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): JsonSafe<QueryConsensusStateRequest>;
    fromPartial(object: Partial<QueryConsensusStateRequest>): QueryConsensusStateRequest;
    fromAmino(object: QueryConsensusStateRequestAmino): QueryConsensusStateRequest;
    toAmino(message: QueryConsensusStateRequest): QueryConsensusStateRequestAmino;
    fromAminoMsg(object: QueryConsensusStateRequestAminoMsg): QueryConsensusStateRequest;
    toAminoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryConsensusStateRequestProtoMsg): QueryConsensusStateRequest;
    toProto(message: QueryConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestProtoMsg;
};
export declare const QueryConsensusStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConsensusStateResponse;
    isSDK(o: any): o is QueryConsensusStateResponseSDKType;
    isAmino(o: any): o is QueryConsensusStateResponseAmino;
    encode(message: QueryConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): JsonSafe<QueryConsensusStateResponse>;
    fromPartial(object: Partial<QueryConsensusStateResponse>): QueryConsensusStateResponse;
    fromAmino(object: QueryConsensusStateResponseAmino): QueryConsensusStateResponse;
    toAmino(message: QueryConsensusStateResponse): QueryConsensusStateResponseAmino;
    fromAminoMsg(object: QueryConsensusStateResponseAminoMsg): QueryConsensusStateResponse;
    toAminoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryConsensusStateResponseProtoMsg): QueryConsensusStateResponse;
    toProto(message: QueryConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseProtoMsg;
};
export declare const QueryConsensusStatesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConsensusStatesRequest;
    isSDK(o: any): o is QueryConsensusStatesRequestSDKType;
    isAmino(o: any): o is QueryConsensusStatesRequestAmino;
    encode(message: QueryConsensusStatesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStatesRequest;
    fromJSON(object: any): QueryConsensusStatesRequest;
    toJSON(message: QueryConsensusStatesRequest): JsonSafe<QueryConsensusStatesRequest>;
    fromPartial(object: Partial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest;
    fromAmino(object: QueryConsensusStatesRequestAmino): QueryConsensusStatesRequest;
    toAmino(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAmino;
    fromAminoMsg(object: QueryConsensusStatesRequestAminoMsg): QueryConsensusStatesRequest;
    toAminoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAminoMsg;
    fromProtoMsg(message: QueryConsensusStatesRequestProtoMsg): QueryConsensusStatesRequest;
    toProto(message: QueryConsensusStatesRequest): Uint8Array;
    toProtoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestProtoMsg;
};
export declare const QueryConsensusStatesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConsensusStatesResponse;
    isSDK(o: any): o is QueryConsensusStatesResponseSDKType;
    isAmino(o: any): o is QueryConsensusStatesResponseAmino;
    encode(message: QueryConsensusStatesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStatesResponse;
    fromJSON(object: any): QueryConsensusStatesResponse;
    toJSON(message: QueryConsensusStatesResponse): JsonSafe<QueryConsensusStatesResponse>;
    fromPartial(object: Partial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse;
    fromAmino(object: QueryConsensusStatesResponseAmino): QueryConsensusStatesResponse;
    toAmino(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAmino;
    fromAminoMsg(object: QueryConsensusStatesResponseAminoMsg): QueryConsensusStatesResponse;
    toAminoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAminoMsg;
    fromProtoMsg(message: QueryConsensusStatesResponseProtoMsg): QueryConsensusStatesResponse;
    toProto(message: QueryConsensusStatesResponse): Uint8Array;
    toProtoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseProtoMsg;
};
export declare const QueryClientStatusRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientStatusRequest;
    isSDK(o: any): o is QueryClientStatusRequestSDKType;
    isAmino(o: any): o is QueryClientStatusRequestAmino;
    encode(message: QueryClientStatusRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatusRequest;
    fromJSON(object: any): QueryClientStatusRequest;
    toJSON(message: QueryClientStatusRequest): JsonSafe<QueryClientStatusRequest>;
    fromPartial(object: Partial<QueryClientStatusRequest>): QueryClientStatusRequest;
    fromAmino(object: QueryClientStatusRequestAmino): QueryClientStatusRequest;
    toAmino(message: QueryClientStatusRequest): QueryClientStatusRequestAmino;
    fromAminoMsg(object: QueryClientStatusRequestAminoMsg): QueryClientStatusRequest;
    toAminoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestAminoMsg;
    fromProtoMsg(message: QueryClientStatusRequestProtoMsg): QueryClientStatusRequest;
    toProto(message: QueryClientStatusRequest): Uint8Array;
    toProtoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestProtoMsg;
};
export declare const QueryClientStatusResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientStatusResponse;
    isSDK(o: any): o is QueryClientStatusResponseSDKType;
    isAmino(o: any): o is QueryClientStatusResponseAmino;
    encode(message: QueryClientStatusResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatusResponse;
    fromJSON(object: any): QueryClientStatusResponse;
    toJSON(message: QueryClientStatusResponse): JsonSafe<QueryClientStatusResponse>;
    fromPartial(object: Partial<QueryClientStatusResponse>): QueryClientStatusResponse;
    fromAmino(object: QueryClientStatusResponseAmino): QueryClientStatusResponse;
    toAmino(message: QueryClientStatusResponse): QueryClientStatusResponseAmino;
    fromAminoMsg(object: QueryClientStatusResponseAminoMsg): QueryClientStatusResponse;
    toAminoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseAminoMsg;
    fromProtoMsg(message: QueryClientStatusResponseProtoMsg): QueryClientStatusResponse;
    toProto(message: QueryClientStatusResponse): Uint8Array;
    toProtoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseProtoMsg;
};
export declare const QueryClientParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientParamsRequest;
    isSDK(o: any): o is QueryClientParamsRequestSDKType;
    isAmino(o: any): o is QueryClientParamsRequestAmino;
    encode(_: QueryClientParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientParamsRequest;
    fromJSON(_: any): QueryClientParamsRequest;
    toJSON(_: QueryClientParamsRequest): JsonSafe<QueryClientParamsRequest>;
    fromPartial(_: Partial<QueryClientParamsRequest>): QueryClientParamsRequest;
    fromAmino(_: QueryClientParamsRequestAmino): QueryClientParamsRequest;
    toAmino(_: QueryClientParamsRequest): QueryClientParamsRequestAmino;
    fromAminoMsg(object: QueryClientParamsRequestAminoMsg): QueryClientParamsRequest;
    toAminoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestAminoMsg;
    fromProtoMsg(message: QueryClientParamsRequestProtoMsg): QueryClientParamsRequest;
    toProto(message: QueryClientParamsRequest): Uint8Array;
    toProtoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestProtoMsg;
};
export declare const QueryClientParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryClientParamsResponse;
    isSDK(o: any): o is QueryClientParamsResponseSDKType;
    isAmino(o: any): o is QueryClientParamsResponseAmino;
    encode(message: QueryClientParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryClientParamsResponse;
    fromJSON(object: any): QueryClientParamsResponse;
    toJSON(message: QueryClientParamsResponse): JsonSafe<QueryClientParamsResponse>;
    fromPartial(object: Partial<QueryClientParamsResponse>): QueryClientParamsResponse;
    fromAmino(object: QueryClientParamsResponseAmino): QueryClientParamsResponse;
    toAmino(message: QueryClientParamsResponse): QueryClientParamsResponseAmino;
    fromAminoMsg(object: QueryClientParamsResponseAminoMsg): QueryClientParamsResponse;
    toAminoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseAminoMsg;
    fromProtoMsg(message: QueryClientParamsResponseProtoMsg): QueryClientParamsResponse;
    toProto(message: QueryClientParamsResponse): Uint8Array;
    toProtoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseProtoMsg;
};
export declare const QueryUpgradedClientStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUpgradedClientStateRequest;
    isSDK(o: any): o is QueryUpgradedClientStateRequestSDKType;
    isAmino(o: any): o is QueryUpgradedClientStateRequestAmino;
    encode(_: QueryUpgradedClientStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedClientStateRequest;
    fromJSON(_: any): QueryUpgradedClientStateRequest;
    toJSON(_: QueryUpgradedClientStateRequest): JsonSafe<QueryUpgradedClientStateRequest>;
    fromPartial(_: Partial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest;
    fromAmino(_: QueryUpgradedClientStateRequestAmino): QueryUpgradedClientStateRequest;
    toAmino(_: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestAmino;
    fromAminoMsg(object: QueryUpgradedClientStateRequestAminoMsg): QueryUpgradedClientStateRequest;
    toAminoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryUpgradedClientStateRequestProtoMsg): QueryUpgradedClientStateRequest;
    toProto(message: QueryUpgradedClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestProtoMsg;
};
export declare const QueryUpgradedClientStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUpgradedClientStateResponse;
    isSDK(o: any): o is QueryUpgradedClientStateResponseSDKType;
    isAmino(o: any): o is QueryUpgradedClientStateResponseAmino;
    encode(message: QueryUpgradedClientStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedClientStateResponse;
    fromJSON(object: any): QueryUpgradedClientStateResponse;
    toJSON(message: QueryUpgradedClientStateResponse): JsonSafe<QueryUpgradedClientStateResponse>;
    fromPartial(object: Partial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse;
    fromAmino(object: QueryUpgradedClientStateResponseAmino): QueryUpgradedClientStateResponse;
    toAmino(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseAmino;
    fromAminoMsg(object: QueryUpgradedClientStateResponseAminoMsg): QueryUpgradedClientStateResponse;
    toAminoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryUpgradedClientStateResponseProtoMsg): QueryUpgradedClientStateResponse;
    toProto(message: QueryUpgradedClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseProtoMsg;
};
export declare const QueryUpgradedConsensusStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUpgradedConsensusStateRequest;
    isSDK(o: any): o is QueryUpgradedConsensusStateRequestSDKType;
    isAmino(o: any): o is QueryUpgradedConsensusStateRequestAmino;
    encode(_: QueryUpgradedConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(_: any): QueryUpgradedConsensusStateRequest;
    toJSON(_: QueryUpgradedConsensusStateRequest): JsonSafe<QueryUpgradedConsensusStateRequest>;
    fromPartial(_: Partial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest;
    fromAmino(_: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest;
    toAmino(_: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino;
    fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest;
    toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg): QueryUpgradedConsensusStateRequest;
    toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg;
};
export declare const QueryUpgradedConsensusStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUpgradedConsensusStateResponse;
    isSDK(o: any): o is QueryUpgradedConsensusStateResponseSDKType;
    isAmino(o: any): o is QueryUpgradedConsensusStateResponseAmino;
    encode(message: QueryUpgradedConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): JsonSafe<QueryUpgradedConsensusStateResponse>;
    fromPartial(object: Partial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse;
    fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse;
    toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino;
    fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse;
    toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg): QueryUpgradedConsensusStateResponse;
    toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg;
};
