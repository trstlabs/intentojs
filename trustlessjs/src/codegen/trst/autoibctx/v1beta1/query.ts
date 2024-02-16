import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { AutoTxInfo, AutoTxInfoAmino, AutoTxInfoSDKType, AutoTxHistoryEntry, AutoTxHistoryEntryAmino, AutoTxHistoryEntrySDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { AutoTxIbcUsage, AutoTxIbcUsageAmino, AutoTxIbcUsageSDKType } from "./usage";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequest {
  owner: string;
  connectionId: string;
}
export interface QueryInterchainAccountFromAddressRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressRequest";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressRequestAmino {
  owner?: string;
  connection_id?: string;
}
export interface QueryInterchainAccountFromAddressRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressRequest";
  value: QueryInterchainAccountFromAddressRequestAmino;
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
export interface QueryInterchainAccountFromAddressResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressResponse";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponseAmino {
  interchain_account_address?: string;
}
export interface QueryInterchainAccountFromAddressResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressResponse";
  value: QueryInterchainAccountFromAddressResponseAmino;
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
export interface QueryAutoTxRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxRequest";
  value: Uint8Array;
}
/** QueryAutoTxRequest is the request type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxRequestAmino {
  /** QueryAutoTxRequest is the request type for the Query/AutoTxRequest RPC */
  id?: string;
}
export interface QueryAutoTxRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxRequest";
  value: QueryAutoTxRequestAmino;
}
/** QueryAutoTxRequest is the request type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxRequestSDKType {
  id: string;
}
/** QueryAutoTxResponse the response type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxResponse {
  autoTxInfo: AutoTxInfo;
}
export interface QueryAutoTxResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxResponse";
  value: Uint8Array;
}
/** QueryAutoTxResponse the response type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxResponseAmino {
  auto_tx_info?: AutoTxInfoAmino;
}
export interface QueryAutoTxResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxResponse";
  value: QueryAutoTxResponseAmino;
}
/** QueryAutoTxResponse the response type for the Query/AutoTxRequest RPC */
export interface QueryAutoTxResponseSDKType {
  auto_tx_info: AutoTxInfoSDKType;
}
/** QueryAutoTxHistoryRequest is the request type for the Query/QueryAutoTxHistoryRequest RPC */
export interface QueryAutoTxHistoryRequest {
  /** id of the auto-tx */
  id: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAutoTxHistoryRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryRequest";
  value: Uint8Array;
}
/** QueryAutoTxHistoryRequest is the request type for the Query/QueryAutoTxHistoryRequest RPC */
export interface QueryAutoTxHistoryRequestAmino {
  /** id of the auto-tx */
  id?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAutoTxHistoryRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryRequest";
  value: QueryAutoTxHistoryRequestAmino;
}
/** QueryAutoTxHistoryRequest is the request type for the Query/QueryAutoTxHistoryRequest RPC */
export interface QueryAutoTxHistoryRequestSDKType {
  id: string;
  pagination?: PageRequestSDKType;
}
/** QueryAutoTxHistoryResponse the response type for the Query/QueryAutoTxHistoryResponse RPC */
export interface QueryAutoTxHistoryResponse {
  history: AutoTxHistoryEntry[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAutoTxHistoryResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryResponse";
  value: Uint8Array;
}
/** QueryAutoTxHistoryResponse the response type for the Query/QueryAutoTxHistoryResponse RPC */
export interface QueryAutoTxHistoryResponseAmino {
  history?: AutoTxHistoryEntryAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAutoTxHistoryResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryResponse";
  value: QueryAutoTxHistoryResponseAmino;
}
/** QueryAutoTxHistoryResponse the response type for the Query/QueryAutoTxHistoryResponse RPC */
export interface QueryAutoTxHistoryResponseSDKType {
  history: AutoTxHistoryEntrySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAutoTxsRequest is the request type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAutoTxsRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsRequest";
  value: Uint8Array;
}
/** QueryAutoTxsRequest is the request type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAutoTxsRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxsRequest";
  value: QueryAutoTxsRequestAmino;
}
/** QueryAutoTxsRequest is the request type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPCπ */
export interface QueryAutoTxsResponse {
  autoTxInfos: AutoTxInfo[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAutoTxsResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsResponse";
  value: Uint8Array;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPCπ */
export interface QueryAutoTxsResponseAmino {
  auto_tx_infos?: AutoTxInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAutoTxsResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxsResponse";
  value: QueryAutoTxsResponseAmino;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPCπ */
export interface QueryAutoTxsResponseSDKType {
  auto_tx_infos: AutoTxInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAutoTxsForOwnerRequest is the request type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerRequest {
  owner: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAutoTxsForOwnerRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryAutoTxsForOwnerRequest is the request type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerRequestAmino {
  owner?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAutoTxsForOwnerRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerRequest";
  value: QueryAutoTxsForOwnerRequestAmino;
}
/**
 * QueryAutoTxsForOwnerRequest is the request type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryAutoTxsForOwnerResponse the response type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerResponse {
  autoTxInfos: AutoTxInfo[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAutoTxsForOwnerResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryAutoTxsForOwnerResponse the response type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerResponseAmino {
  auto_tx_infos?: AutoTxInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAutoTxsForOwnerResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerResponse";
  value: QueryAutoTxsForOwnerResponseAmino;
}
/**
 * QueryAutoTxsForOwnerResponse the response type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerResponseSDKType {
  auto_tx_infos: AutoTxInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
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
  pagination?: PageRequest;
}
export interface QueryAutoTxIbcUsageRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageRequest";
  value: Uint8Array;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryAutoTxIbcUsageRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAutoTxIbcUsageRequestAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageRequest";
  value: QueryAutoTxIbcUsageRequestAmino;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryAutoTxIbcUsageRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryAutoTxIbcUsageResponse {
  autoTxIbcUsage: AutoTxIbcUsage[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAutoTxIbcUsageResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageResponse";
  value: Uint8Array;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryAutoTxIbcUsageResponseAmino {
  auto_tx_ibc_usage?: AutoTxIbcUsageAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAutoTxIbcUsageResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageResponse";
  value: QueryAutoTxIbcUsageResponseAmino;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryAutoTxIbcUsageResponseSDKType {
  auto_tx_ibc_usage: AutoTxIbcUsageSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountFromAddressRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressRequest",
  is(o: any): o is QueryInterchainAccountFromAddressRequest {
    return o && (o.$typeUrl === QueryInterchainAccountFromAddressRequest.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is QueryInterchainAccountFromAddressRequestSDKType {
    return o && (o.$typeUrl === QueryInterchainAccountFromAddressRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is QueryInterchainAccountFromAddressRequestAmino {
    return o && (o.$typeUrl === QueryInterchainAccountFromAddressRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
  encode(message: QueryInterchainAccountFromAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountFromAddressRequestAmino): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountFromAddressRequest): QueryInterchainAccountFromAddressRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountFromAddressRequestAminoMsg): QueryInterchainAccountFromAddressRequest {
    return QueryInterchainAccountFromAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountFromAddressRequestProtoMsg): QueryInterchainAccountFromAddressRequest {
    return QueryInterchainAccountFromAddressRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountFromAddressRequest): Uint8Array {
    return QueryInterchainAccountFromAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountFromAddressRequest): QueryInterchainAccountFromAddressRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressRequest",
      value: QueryInterchainAccountFromAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountFromAddressRequest.typeUrl, QueryInterchainAccountFromAddressRequest);
function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountFromAddressResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressResponse",
  is(o: any): o is QueryInterchainAccountFromAddressResponse {
    return o && (o.$typeUrl === QueryInterchainAccountFromAddressResponse.typeUrl || typeof o.interchainAccountAddress === "string");
  },
  isSDK(o: any): o is QueryInterchainAccountFromAddressResponseSDKType {
    return o && (o.$typeUrl === QueryInterchainAccountFromAddressResponse.typeUrl || typeof o.interchain_account_address === "string");
  },
  isAmino(o: any): o is QueryInterchainAccountFromAddressResponseAmino {
    return o && (o.$typeUrl === QueryInterchainAccountFromAddressResponse.typeUrl || typeof o.interchain_account_address === "string");
  },
  encode(message: QueryInterchainAccountFromAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountFromAddressResponseAmino): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    if (object.interchain_account_address !== undefined && object.interchain_account_address !== null) {
      message.interchainAccountAddress = object.interchain_account_address;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountFromAddressResponse): QueryInterchainAccountFromAddressResponseAmino {
    const obj: any = {};
    obj.interchain_account_address = message.interchainAccountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountFromAddressResponseAminoMsg): QueryInterchainAccountFromAddressResponse {
    return QueryInterchainAccountFromAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInterchainAccountFromAddressResponseProtoMsg): QueryInterchainAccountFromAddressResponse {
    return QueryInterchainAccountFromAddressResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountFromAddressResponse): Uint8Array {
    return QueryInterchainAccountFromAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountFromAddressResponse): QueryInterchainAccountFromAddressResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryInterchainAccountFromAddressResponse",
      value: QueryInterchainAccountFromAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountFromAddressResponse.typeUrl, QueryInterchainAccountFromAddressResponse);
function createBaseQueryAutoTxRequest(): QueryAutoTxRequest {
  return {
    id: ""
  };
}
export const QueryAutoTxRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxRequest",
  is(o: any): o is QueryAutoTxRequest {
    return o && (o.$typeUrl === QueryAutoTxRequest.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is QueryAutoTxRequestSDKType {
    return o && (o.$typeUrl === QueryAutoTxRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryAutoTxRequestAmino {
    return o && (o.$typeUrl === QueryAutoTxRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryAutoTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxRequest>): QueryAutoTxRequest {
    const message = createBaseQueryAutoTxRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryAutoTxRequestAmino): QueryAutoTxRequest {
    const message = createBaseQueryAutoTxRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryAutoTxRequest): QueryAutoTxRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxRequestAminoMsg): QueryAutoTxRequest {
    return QueryAutoTxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxRequestProtoMsg): QueryAutoTxRequest {
    return QueryAutoTxRequest.decode(message.value);
  },
  toProto(message: QueryAutoTxRequest): Uint8Array {
    return QueryAutoTxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxRequest): QueryAutoTxRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxRequest",
      value: QueryAutoTxRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxRequest.typeUrl, QueryAutoTxRequest);
function createBaseQueryAutoTxResponse(): QueryAutoTxResponse {
  return {
    autoTxInfo: AutoTxInfo.fromPartial({})
  };
}
export const QueryAutoTxResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxResponse",
  is(o: any): o is QueryAutoTxResponse {
    return o && (o.$typeUrl === QueryAutoTxResponse.typeUrl || AutoTxInfo.is(o.autoTxInfo));
  },
  isSDK(o: any): o is QueryAutoTxResponseSDKType {
    return o && (o.$typeUrl === QueryAutoTxResponse.typeUrl || AutoTxInfo.isSDK(o.auto_tx_info));
  },
  isAmino(o: any): o is QueryAutoTxResponseAmino {
    return o && (o.$typeUrl === QueryAutoTxResponse.typeUrl || AutoTxInfo.isAmino(o.auto_tx_info));
  },
  encode(message: QueryAutoTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.autoTxInfo !== undefined) {
      AutoTxInfo.encode(message.autoTxInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoTxInfo = AutoTxInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxResponse>): QueryAutoTxResponse {
    const message = createBaseQueryAutoTxResponse();
    message.autoTxInfo = object.autoTxInfo !== undefined && object.autoTxInfo !== null ? AutoTxInfo.fromPartial(object.autoTxInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxResponseAmino): QueryAutoTxResponse {
    const message = createBaseQueryAutoTxResponse();
    if (object.auto_tx_info !== undefined && object.auto_tx_info !== null) {
      message.autoTxInfo = AutoTxInfo.fromAmino(object.auto_tx_info);
    }
    return message;
  },
  toAmino(message: QueryAutoTxResponse): QueryAutoTxResponseAmino {
    const obj: any = {};
    obj.auto_tx_info = message.autoTxInfo ? AutoTxInfo.toAmino(message.autoTxInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxResponseAminoMsg): QueryAutoTxResponse {
    return QueryAutoTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxResponseProtoMsg): QueryAutoTxResponse {
    return QueryAutoTxResponse.decode(message.value);
  },
  toProto(message: QueryAutoTxResponse): Uint8Array {
    return QueryAutoTxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxResponse): QueryAutoTxResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxResponse",
      value: QueryAutoTxResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxResponse.typeUrl, QueryAutoTxResponse);
function createBaseQueryAutoTxHistoryRequest(): QueryAutoTxHistoryRequest {
  return {
    id: "",
    pagination: undefined
  };
}
export const QueryAutoTxHistoryRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryRequest",
  is(o: any): o is QueryAutoTxHistoryRequest {
    return o && (o.$typeUrl === QueryAutoTxHistoryRequest.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is QueryAutoTxHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryAutoTxHistoryRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryAutoTxHistoryRequestAmino {
    return o && (o.$typeUrl === QueryAutoTxHistoryRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryAutoTxHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxHistoryRequest>): QueryAutoTxHistoryRequest {
    const message = createBaseQueryAutoTxHistoryRequest();
    message.id = object.id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxHistoryRequestAmino): QueryAutoTxHistoryRequest {
    const message = createBaseQueryAutoTxHistoryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxHistoryRequest): QueryAutoTxHistoryRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxHistoryRequestAminoMsg): QueryAutoTxHistoryRequest {
    return QueryAutoTxHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxHistoryRequestProtoMsg): QueryAutoTxHistoryRequest {
    return QueryAutoTxHistoryRequest.decode(message.value);
  },
  toProto(message: QueryAutoTxHistoryRequest): Uint8Array {
    return QueryAutoTxHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxHistoryRequest): QueryAutoTxHistoryRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryRequest",
      value: QueryAutoTxHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxHistoryRequest.typeUrl, QueryAutoTxHistoryRequest);
function createBaseQueryAutoTxHistoryResponse(): QueryAutoTxHistoryResponse {
  return {
    history: [],
    pagination: undefined
  };
}
export const QueryAutoTxHistoryResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryResponse",
  is(o: any): o is QueryAutoTxHistoryResponse {
    return o && (o.$typeUrl === QueryAutoTxHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || AutoTxHistoryEntry.is(o.history[0])));
  },
  isSDK(o: any): o is QueryAutoTxHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryAutoTxHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || AutoTxHistoryEntry.isSDK(o.history[0])));
  },
  isAmino(o: any): o is QueryAutoTxHistoryResponseAmino {
    return o && (o.$typeUrl === QueryAutoTxHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || AutoTxHistoryEntry.isAmino(o.history[0])));
  },
  encode(message: QueryAutoTxHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      AutoTxHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(AutoTxHistoryEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxHistoryResponse>): QueryAutoTxHistoryResponse {
    const message = createBaseQueryAutoTxHistoryResponse();
    message.history = object.history?.map(e => AutoTxHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxHistoryResponseAmino): QueryAutoTxHistoryResponse {
    const message = createBaseQueryAutoTxHistoryResponse();
    message.history = object.history?.map(e => AutoTxHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxHistoryResponse): QueryAutoTxHistoryResponseAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? AutoTxHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.history = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxHistoryResponseAminoMsg): QueryAutoTxHistoryResponse {
    return QueryAutoTxHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxHistoryResponseProtoMsg): QueryAutoTxHistoryResponse {
    return QueryAutoTxHistoryResponse.decode(message.value);
  },
  toProto(message: QueryAutoTxHistoryResponse): Uint8Array {
    return QueryAutoTxHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxHistoryResponse): QueryAutoTxHistoryResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxHistoryResponse",
      value: QueryAutoTxHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxHistoryResponse.typeUrl, QueryAutoTxHistoryResponse);
function createBaseQueryAutoTxsRequest(): QueryAutoTxsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAutoTxsRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsRequest",
  is(o: any): o is QueryAutoTxsRequest {
    return o && o.$typeUrl === QueryAutoTxsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAutoTxsRequestSDKType {
    return o && o.$typeUrl === QueryAutoTxsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAutoTxsRequestAmino {
    return o && o.$typeUrl === QueryAutoTxsRequest.typeUrl;
  },
  encode(message: QueryAutoTxsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxsRequest>): QueryAutoTxsRequest {
    const message = createBaseQueryAutoTxsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsRequestAmino): QueryAutoTxsRequest {
    const message = createBaseQueryAutoTxsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxsRequest): QueryAutoTxsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxsRequestAminoMsg): QueryAutoTxsRequest {
    return QueryAutoTxsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxsRequestProtoMsg): QueryAutoTxsRequest {
    return QueryAutoTxsRequest.decode(message.value);
  },
  toProto(message: QueryAutoTxsRequest): Uint8Array {
    return QueryAutoTxsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxsRequest): QueryAutoTxsRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsRequest",
      value: QueryAutoTxsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxsRequest.typeUrl, QueryAutoTxsRequest);
function createBaseQueryAutoTxsResponse(): QueryAutoTxsResponse {
  return {
    autoTxInfos: [],
    pagination: undefined
  };
}
export const QueryAutoTxsResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsResponse",
  is(o: any): o is QueryAutoTxsResponse {
    return o && (o.$typeUrl === QueryAutoTxsResponse.typeUrl || Array.isArray(o.autoTxInfos) && (!o.autoTxInfos.length || AutoTxInfo.is(o.autoTxInfos[0])));
  },
  isSDK(o: any): o is QueryAutoTxsResponseSDKType {
    return o && (o.$typeUrl === QueryAutoTxsResponse.typeUrl || Array.isArray(o.auto_tx_infos) && (!o.auto_tx_infos.length || AutoTxInfo.isSDK(o.auto_tx_infos[0])));
  },
  isAmino(o: any): o is QueryAutoTxsResponseAmino {
    return o && (o.$typeUrl === QueryAutoTxsResponse.typeUrl || Array.isArray(o.auto_tx_infos) && (!o.auto_tx_infos.length || AutoTxInfo.isAmino(o.auto_tx_infos[0])));
  },
  encode(message: QueryAutoTxsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.autoTxInfos) {
      AutoTxInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoTxInfos.push(AutoTxInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxsResponse>): QueryAutoTxsResponse {
    const message = createBaseQueryAutoTxsResponse();
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsResponseAmino): QueryAutoTxsResponse {
    const message = createBaseQueryAutoTxsResponse();
    message.autoTxInfos = object.auto_tx_infos?.map(e => AutoTxInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxsResponse): QueryAutoTxsResponseAmino {
    const obj: any = {};
    if (message.autoTxInfos) {
      obj.auto_tx_infos = message.autoTxInfos.map(e => e ? AutoTxInfo.toAmino(e) : undefined);
    } else {
      obj.auto_tx_infos = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxsResponseAminoMsg): QueryAutoTxsResponse {
    return QueryAutoTxsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxsResponseProtoMsg): QueryAutoTxsResponse {
    return QueryAutoTxsResponse.decode(message.value);
  },
  toProto(message: QueryAutoTxsResponse): Uint8Array {
    return QueryAutoTxsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxsResponse): QueryAutoTxsResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsResponse",
      value: QueryAutoTxsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxsResponse.typeUrl, QueryAutoTxsResponse);
function createBaseQueryAutoTxsForOwnerRequest(): QueryAutoTxsForOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryAutoTxsForOwnerRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerRequest",
  is(o: any): o is QueryAutoTxsForOwnerRequest {
    return o && (o.$typeUrl === QueryAutoTxsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryAutoTxsForOwnerRequestSDKType {
    return o && (o.$typeUrl === QueryAutoTxsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryAutoTxsForOwnerRequestAmino {
    return o && (o.$typeUrl === QueryAutoTxsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryAutoTxsForOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsForOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxsForOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxsForOwnerRequest>): QueryAutoTxsForOwnerRequest {
    const message = createBaseQueryAutoTxsForOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsForOwnerRequestAmino): QueryAutoTxsForOwnerRequest {
    const message = createBaseQueryAutoTxsForOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxsForOwnerRequest): QueryAutoTxsForOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxsForOwnerRequestAminoMsg): QueryAutoTxsForOwnerRequest {
    return QueryAutoTxsForOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxsForOwnerRequestProtoMsg): QueryAutoTxsForOwnerRequest {
    return QueryAutoTxsForOwnerRequest.decode(message.value);
  },
  toProto(message: QueryAutoTxsForOwnerRequest): Uint8Array {
    return QueryAutoTxsForOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxsForOwnerRequest): QueryAutoTxsForOwnerRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerRequest",
      value: QueryAutoTxsForOwnerRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxsForOwnerRequest.typeUrl, QueryAutoTxsForOwnerRequest);
function createBaseQueryAutoTxsForOwnerResponse(): QueryAutoTxsForOwnerResponse {
  return {
    autoTxInfos: [],
    pagination: undefined
  };
}
export const QueryAutoTxsForOwnerResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerResponse",
  is(o: any): o is QueryAutoTxsForOwnerResponse {
    return o && (o.$typeUrl === QueryAutoTxsForOwnerResponse.typeUrl || Array.isArray(o.autoTxInfos) && (!o.autoTxInfos.length || AutoTxInfo.is(o.autoTxInfos[0])));
  },
  isSDK(o: any): o is QueryAutoTxsForOwnerResponseSDKType {
    return o && (o.$typeUrl === QueryAutoTxsForOwnerResponse.typeUrl || Array.isArray(o.auto_tx_infos) && (!o.auto_tx_infos.length || AutoTxInfo.isSDK(o.auto_tx_infos[0])));
  },
  isAmino(o: any): o is QueryAutoTxsForOwnerResponseAmino {
    return o && (o.$typeUrl === QueryAutoTxsForOwnerResponse.typeUrl || Array.isArray(o.auto_tx_infos) && (!o.auto_tx_infos.length || AutoTxInfo.isAmino(o.auto_tx_infos[0])));
  },
  encode(message: QueryAutoTxsForOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.autoTxInfos) {
      AutoTxInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxsForOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxsForOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoTxInfos.push(AutoTxInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxsForOwnerResponse>): QueryAutoTxsForOwnerResponse {
    const message = createBaseQueryAutoTxsForOwnerResponse();
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsForOwnerResponseAmino): QueryAutoTxsForOwnerResponse {
    const message = createBaseQueryAutoTxsForOwnerResponse();
    message.autoTxInfos = object.auto_tx_infos?.map(e => AutoTxInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxsForOwnerResponse): QueryAutoTxsForOwnerResponseAmino {
    const obj: any = {};
    if (message.autoTxInfos) {
      obj.auto_tx_infos = message.autoTxInfos.map(e => e ? AutoTxInfo.toAmino(e) : undefined);
    } else {
      obj.auto_tx_infos = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxsForOwnerResponseAminoMsg): QueryAutoTxsForOwnerResponse {
    return QueryAutoTxsForOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxsForOwnerResponseProtoMsg): QueryAutoTxsForOwnerResponse {
    return QueryAutoTxsForOwnerResponse.decode(message.value);
  },
  toProto(message: QueryAutoTxsForOwnerResponse): Uint8Array {
    return QueryAutoTxsForOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxsForOwnerResponse): QueryAutoTxsForOwnerResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerResponse",
      value: QueryAutoTxsForOwnerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxsForOwnerResponse.typeUrl, QueryAutoTxsForOwnerResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryAutoTxIbcUsageRequest(): QueryAutoTxIbcUsageRequest {
  return {
    pagination: undefined
  };
}
export const QueryAutoTxIbcUsageRequest = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageRequest",
  is(o: any): o is QueryAutoTxIbcUsageRequest {
    return o && o.$typeUrl === QueryAutoTxIbcUsageRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAutoTxIbcUsageRequestSDKType {
    return o && o.$typeUrl === QueryAutoTxIbcUsageRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAutoTxIbcUsageRequestAmino {
    return o && o.$typeUrl === QueryAutoTxIbcUsageRequest.typeUrl;
  },
  encode(message: QueryAutoTxIbcUsageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxIbcUsageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxIbcUsageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxIbcUsageRequest>): QueryAutoTxIbcUsageRequest {
    const message = createBaseQueryAutoTxIbcUsageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxIbcUsageRequestAmino): QueryAutoTxIbcUsageRequest {
    const message = createBaseQueryAutoTxIbcUsageRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxIbcUsageRequest): QueryAutoTxIbcUsageRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxIbcUsageRequestAminoMsg): QueryAutoTxIbcUsageRequest {
    return QueryAutoTxIbcUsageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxIbcUsageRequestProtoMsg): QueryAutoTxIbcUsageRequest {
    return QueryAutoTxIbcUsageRequest.decode(message.value);
  },
  toProto(message: QueryAutoTxIbcUsageRequest): Uint8Array {
    return QueryAutoTxIbcUsageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxIbcUsageRequest): QueryAutoTxIbcUsageRequestProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageRequest",
      value: QueryAutoTxIbcUsageRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxIbcUsageRequest.typeUrl, QueryAutoTxIbcUsageRequest);
function createBaseQueryAutoTxIbcUsageResponse(): QueryAutoTxIbcUsageResponse {
  return {
    autoTxIbcUsage: [],
    pagination: undefined
  };
}
export const QueryAutoTxIbcUsageResponse = {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageResponse",
  is(o: any): o is QueryAutoTxIbcUsageResponse {
    return o && (o.$typeUrl === QueryAutoTxIbcUsageResponse.typeUrl || Array.isArray(o.autoTxIbcUsage) && (!o.autoTxIbcUsage.length || AutoTxIbcUsage.is(o.autoTxIbcUsage[0])));
  },
  isSDK(o: any): o is QueryAutoTxIbcUsageResponseSDKType {
    return o && (o.$typeUrl === QueryAutoTxIbcUsageResponse.typeUrl || Array.isArray(o.auto_tx_ibc_usage) && (!o.auto_tx_ibc_usage.length || AutoTxIbcUsage.isSDK(o.auto_tx_ibc_usage[0])));
  },
  isAmino(o: any): o is QueryAutoTxIbcUsageResponseAmino {
    return o && (o.$typeUrl === QueryAutoTxIbcUsageResponse.typeUrl || Array.isArray(o.auto_tx_ibc_usage) && (!o.auto_tx_ibc_usage.length || AutoTxIbcUsage.isAmino(o.auto_tx_ibc_usage[0])));
  },
  encode(message: QueryAutoTxIbcUsageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.autoTxIbcUsage) {
      AutoTxIbcUsage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAutoTxIbcUsageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAutoTxIbcUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoTxIbcUsage.push(AutoTxIbcUsage.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAutoTxIbcUsageResponse>): QueryAutoTxIbcUsageResponse {
    const message = createBaseQueryAutoTxIbcUsageResponse();
    message.autoTxIbcUsage = object.autoTxIbcUsage?.map(e => AutoTxIbcUsage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxIbcUsageResponseAmino): QueryAutoTxIbcUsageResponse {
    const message = createBaseQueryAutoTxIbcUsageResponse();
    message.autoTxIbcUsage = object.auto_tx_ibc_usage?.map(e => AutoTxIbcUsage.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAutoTxIbcUsageResponse): QueryAutoTxIbcUsageResponseAmino {
    const obj: any = {};
    if (message.autoTxIbcUsage) {
      obj.auto_tx_ibc_usage = message.autoTxIbcUsage.map(e => e ? AutoTxIbcUsage.toAmino(e) : undefined);
    } else {
      obj.auto_tx_ibc_usage = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAutoTxIbcUsageResponseAminoMsg): QueryAutoTxIbcUsageResponse {
    return QueryAutoTxIbcUsageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAutoTxIbcUsageResponseProtoMsg): QueryAutoTxIbcUsageResponse {
    return QueryAutoTxIbcUsageResponse.decode(message.value);
  },
  toProto(message: QueryAutoTxIbcUsageResponse): Uint8Array {
    return QueryAutoTxIbcUsageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAutoTxIbcUsageResponse): QueryAutoTxIbcUsageResponseProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageResponse",
      value: QueryAutoTxIbcUsageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAutoTxIbcUsageResponse.typeUrl, QueryAutoTxIbcUsageResponse);