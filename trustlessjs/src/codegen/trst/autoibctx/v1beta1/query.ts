import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { AutoTxInfo, AutoTxInfoAmino, AutoTxInfoSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { AutoTxIbcUsage, AutoTxIbcUsageAmino, AutoTxIbcUsageSDKType } from "./usage";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
  owner: string;
  connection_id: string;
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
  interchain_account_address: string;
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
  id: string;
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
/** QueryAutoTxsRequest is the request type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination: PageRequest;
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
  pagination: PageRequestSDKType;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsResponse {
  autoTxInfos: AutoTxInfo[];
  /** Pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryAutoTxsResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsResponse";
  value: Uint8Array;
}
/** QueryAutoTxsResponse the response type for the Query/AutoTxsRequest RPC */
export interface QueryAutoTxsResponseAmino {
  auto_tx_infos: AutoTxInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAutoTxsResponseAminoMsg {
  type: "/trst.autoibctx.v1beta1.QueryAutoTxsResponse";
  value: QueryAutoTxsResponseAmino;
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
export interface QueryAutoTxsForOwnerRequestProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryAutoTxsForOwnerRequest is the request type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerRequestAmino {
  owner: string;
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
export interface QueryAutoTxsForOwnerResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxsForOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryAutoTxsForOwnerResponse the response type for the
 * Query/AutoTxsForOwnerRequest RPC
 */
export interface QueryAutoTxsForOwnerResponseAmino {
  auto_tx_infos: AutoTxInfoAmino[];
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
  pagination: PageResponseSDKType;
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
  pagination: PageRequest;
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
export interface QueryAutoTxIbcUsageResponseProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.QueryAutoTxIbcUsageResponse";
  value: Uint8Array;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryAutoTxIbcUsageResponseAmino {
  auto_tx_ibc_usage: AutoTxIbcUsageAmino[];
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
  pagination: PageResponseSDKType;
}
function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountFromAddressRequest = {
  encode(message: QueryInterchainAccountFromAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountFromAddressRequestAmino): QueryInterchainAccountFromAddressRequest {
    return {
      owner: object.owner,
      connectionId: object.connection_id
    };
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
function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountFromAddressResponse = {
  encode(message: QueryInterchainAccountFromAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryInterchainAccountFromAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountFromAddressResponseAmino): QueryInterchainAccountFromAddressResponse {
    return {
      interchainAccountAddress: object.interchain_account_address
    };
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
function createBaseQueryAutoTxRequest(): QueryAutoTxRequest {
  return {
    id: ""
  };
}
export const QueryAutoTxRequest = {
  encode(message: QueryAutoTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxRequest>): QueryAutoTxRequest {
    const message = createBaseQueryAutoTxRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryAutoTxRequestAmino): QueryAutoTxRequest {
    return {
      id: object.id
    };
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
function createBaseQueryAutoTxResponse(): QueryAutoTxResponse {
  return {
    autoTxInfo: AutoTxInfo.fromPartial({})
  };
}
export const QueryAutoTxResponse = {
  encode(message: QueryAutoTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.autoTxInfo !== undefined) {
      AutoTxInfo.encode(message.autoTxInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxResponse>): QueryAutoTxResponse {
    const message = createBaseQueryAutoTxResponse();
    message.autoTxInfo = object.autoTxInfo !== undefined && object.autoTxInfo !== null ? AutoTxInfo.fromPartial(object.autoTxInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxResponseAmino): QueryAutoTxResponse {
    return {
      autoTxInfo: object?.auto_tx_info ? AutoTxInfo.fromAmino(object.auto_tx_info) : undefined
    };
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
function createBaseQueryAutoTxsRequest(): QueryAutoTxsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoTxsRequest = {
  encode(message: QueryAutoTxsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxsRequest>): QueryAutoTxsRequest {
    const message = createBaseQueryAutoTxsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsRequestAmino): QueryAutoTxsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
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
function createBaseQueryAutoTxsResponse(): QueryAutoTxsResponse {
  return {
    autoTxInfos: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoTxsResponse = {
  encode(message: QueryAutoTxsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.autoTxInfos) {
      AutoTxInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxsResponse>): QueryAutoTxsResponse {
    const message = createBaseQueryAutoTxsResponse();
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsResponseAmino): QueryAutoTxsResponse {
    return {
      autoTxInfos: Array.isArray(object?.auto_tx_infos) ? object.auto_tx_infos.map((e: any) => AutoTxInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
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
function createBaseQueryAutoTxsForOwnerRequest(): QueryAutoTxsForOwnerRequest {
  return {
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoTxsForOwnerRequest = {
  encode(message: QueryAutoTxsForOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxsForOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxsForOwnerRequest>): QueryAutoTxsForOwnerRequest {
    const message = createBaseQueryAutoTxsForOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsForOwnerRequestAmino): QueryAutoTxsForOwnerRequest {
    return {
      owner: object.owner,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
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
function createBaseQueryAutoTxsForOwnerResponse(): QueryAutoTxsForOwnerResponse {
  return {
    autoTxInfos: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoTxsForOwnerResponse = {
  encode(message: QueryAutoTxsForOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.autoTxInfos) {
      AutoTxInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxsForOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxsForOwnerResponse>): QueryAutoTxsForOwnerResponse {
    const message = createBaseQueryAutoTxsForOwnerResponse();
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxsForOwnerResponseAmino): QueryAutoTxsForOwnerResponse {
    return {
      autoTxInfos: Array.isArray(object?.auto_tx_infos) ? object.auto_tx_infos.map((e: any) => AutoTxInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
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
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
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
function createBaseQueryAutoTxIbcUsageRequest(): QueryAutoTxIbcUsageRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoTxIbcUsageRequest = {
  encode(message: QueryAutoTxIbcUsageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxIbcUsageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxIbcUsageRequest>): QueryAutoTxIbcUsageRequest {
    const message = createBaseQueryAutoTxIbcUsageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxIbcUsageRequestAmino): QueryAutoTxIbcUsageRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
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
function createBaseQueryAutoTxIbcUsageResponse(): QueryAutoTxIbcUsageResponse {
  return {
    autoTxIbcUsage: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoTxIbcUsageResponse = {
  encode(message: QueryAutoTxIbcUsageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.autoTxIbcUsage) {
      AutoTxIbcUsage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAutoTxIbcUsageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<QueryAutoTxIbcUsageResponse>): QueryAutoTxIbcUsageResponse {
    const message = createBaseQueryAutoTxIbcUsageResponse();
    message.autoTxIbcUsage = object.autoTxIbcUsage?.map(e => AutoTxIbcUsage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAutoTxIbcUsageResponseAmino): QueryAutoTxIbcUsageResponse {
    return {
      autoTxIbcUsage: Array.isArray(object?.auto_tx_ibc_usage) ? object.auto_tx_ibc_usage.map((e: any) => AutoTxIbcUsage.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
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