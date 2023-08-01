import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { AutoTxInfo, AutoTxInfoSDKType, Params, ParamsSDKType } from "./types";
import { AutoTxIbcUsage, AutoTxIbcUsageSDKType } from "./usage";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connectionId: string;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequestSDKType {
    owner: string;
    connection_id: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponse {
    interchainAccountAddress: string;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponseSDKType {
    interchain_account_address: string;
}
/** QueryAutoTxRequest is the request type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxRequest {
    /** QueryAutoTxRequest is the request type for the Query/AutoTxRequest RPC */
    id: string;
}
/** QueryAutoTxRequest is the request type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxRequestSDKType {
    id: string;
}
/** QueryAutoTxResponse the response type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxResponse {
    autoTxInfo: AutoTxInfo;
}
/** QueryAutoTxResponse the response type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxResponseSDKType {
    auto_tx_info: AutoTxInfoSDKType;
}
/** QueryAutoTxsRequest is the request type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsRequest {
    /** Pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryAutoTxsRequest is the request type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsRequestSDKType {
    pagination: PageRequestSDKType;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsResponse {
    autoTxInfos: AutoTxInfo[];
    /** Pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsResponseSDKType {
    auto_tx_infos: AutoTxInfoSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QueryAutoTxsForOwnerRequest is the request type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerRequest {
    owner: string;
    /** Pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAutoTxsForOwnerRequest is the request type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerRequestSDKType {
    owner: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryAutoTxsForOwnerResponse the response type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerResponse {
    autoTxInfos: AutoTxInfo[];
    /** Pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryAutoTxsForOwnerResponse the response type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerResponseSDKType {
    auto_tx_infos: AutoTxInfoSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryAutoTxIbcUsageRequest {
    /** Pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryAutoTxIbcUsageRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryAutoTxIbcUsageResponse {
    autoTxIbcUsage: AutoTxIbcUsage[];
    /** Pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryAutoTxIbcUsageResponseSDKType {
    auto_tx_ibc_usage: AutoTxIbcUsageSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse;
    fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
};
export declare const QueryAutoTxRequest: {
    encode(message: QueryAutoTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxRequest;
    fromPartial(object: DeepPartial<QueryAutoTxRequest>): QueryAutoTxRequest;
};
export declare const QueryAutoTxResponse: {
    encode(message: QueryAutoTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxResponse;
    fromPartial(object: DeepPartial<QueryAutoTxResponse>): QueryAutoTxResponse;
};
export declare const QueryAutoTxsRequest: {
    encode(message: QueryAutoTxsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsRequest;
    fromPartial(object: DeepPartial<QueryAutoTxsRequest>): QueryAutoTxsRequest;
};
export declare const QueryAutoTxsResponse: {
    encode(message: QueryAutoTxsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsResponse;
    fromPartial(object: DeepPartial<QueryAutoTxsResponse>): QueryAutoTxsResponse;
};
export declare const QueryAutoTxsForOwnerRequest: {
    encode(message: QueryAutoTxsForOwnerRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsForOwnerRequest;
    fromPartial(object: DeepPartial<QueryAutoTxsForOwnerRequest>): QueryAutoTxsForOwnerRequest;
};
export declare const QueryAutoTxsForOwnerResponse: {
    encode(message: QueryAutoTxsForOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsForOwnerResponse;
    fromPartial(object: DeepPartial<QueryAutoTxsForOwnerResponse>): QueryAutoTxsForOwnerResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryAutoTxIbcUsageRequest: {
    encode(message: QueryAutoTxIbcUsageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxIbcUsageRequest;
    fromPartial(object: DeepPartial<QueryAutoTxIbcUsageRequest>): QueryAutoTxIbcUsageRequest;
};
export declare const QueryAutoTxIbcUsageResponse: {
    encode(message: QueryAutoTxIbcUsageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxIbcUsageResponse;
    fromPartial(object: DeepPartial<QueryAutoTxIbcUsageResponse>): QueryAutoTxIbcUsageResponse;
};
