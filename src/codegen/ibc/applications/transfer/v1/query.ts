import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
export interface QueryDenomTraceRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest";
  value: Uint8Array;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestAmino {
  /** hash (in hex format) of the denomination trace information. */
  hash?: string;
}
export interface QueryDenomTraceRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomTraceRequest";
  value: QueryDenomTraceRequestAmino;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestSDKType {
  hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
  /** denom_trace returns the requested denomination trace information. */
  denomTrace?: DenomTrace;
}
export interface QueryDenomTraceResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse";
  value: Uint8Array;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseAmino {
  /** denom_trace returns the requested denomination trace information. */
  denom_trace?: DenomTraceAmino;
}
export interface QueryDenomTraceResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomTraceResponse";
  value: QueryDenomTraceResponseAmino;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseSDKType {
  denom_trace?: DenomTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryDenomTracesRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDenomTracesRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomTracesRequest";
  value: QueryDenomTracesRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
  /** denom_traces returns all denominations trace information. */
  denomTraces: DenomTrace[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryDenomTracesResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseAmino {
  /** denom_traces returns all denominations trace information. */
  denom_traces?: DenomTraceAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDenomTracesResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomTracesResponse";
  value: QueryDenomTracesResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseSDKType {
  denom_traces: DenomTraceSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryDenomTraceRequest(): QueryDenomTraceRequest {
  return {
    hash: ""
  };
}
export const QueryDenomTraceRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
  aminoType: "cosmos-sdk/QueryDenomTraceRequest",
  is(o: any): o is QueryDenomTraceRequest {
    return o && (o.$typeUrl === QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
  },
  isSDK(o: any): o is QueryDenomTraceRequestSDKType {
    return o && (o.$typeUrl === QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryDenomTraceRequestAmino {
    return o && (o.$typeUrl === QueryDenomTraceRequest.typeUrl || typeof o.hash === "string");
  },
  encode(message: QueryDenomTraceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTraceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceRequest {
    return {
      hash: isSet(object.hash) ? String(object.hash) : ""
    };
  },
  toJSON(message: QueryDenomTraceRequest): JsonSafe<QueryDenomTraceRequest> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTraceRequest>): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryDenomTraceRequestAmino): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryDenomTraceRequest): QueryDenomTraceRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTraceRequestAminoMsg): QueryDenomTraceRequest {
    return QueryDenomTraceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTraceRequestProtoMsg): QueryDenomTraceRequest {
    return QueryDenomTraceRequest.decode(message.value);
  },
  toProto(message: QueryDenomTraceRequest): Uint8Array {
    return QueryDenomTraceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
      value: QueryDenomTraceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomTraceRequest.typeUrl, QueryDenomTraceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomTraceRequest.aminoType, QueryDenomTraceRequest.typeUrl);
function createBaseQueryDenomTraceResponse(): QueryDenomTraceResponse {
  return {
    denomTrace: undefined
  };
}
export const QueryDenomTraceResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
  aminoType: "cosmos-sdk/QueryDenomTraceResponse",
  is(o: any): o is QueryDenomTraceResponse {
    return o && o.$typeUrl === QueryDenomTraceResponse.typeUrl;
  },
  isSDK(o: any): o is QueryDenomTraceResponseSDKType {
    return o && o.$typeUrl === QueryDenomTraceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDenomTraceResponseAmino {
    return o && o.$typeUrl === QueryDenomTraceResponse.typeUrl;
  },
  encode(message: QueryDenomTraceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTraceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomTraceResponse {
    return {
      denomTrace: isSet(object.denomTrace) ? DenomTrace.fromJSON(object.denomTrace) : undefined
    };
  },
  toJSON(message: QueryDenomTraceResponse): JsonSafe<QueryDenomTraceResponse> {
    const obj: any = {};
    message.denomTrace !== undefined && (obj.denomTrace = message.denomTrace ? DenomTrace.toJSON(message.denomTrace) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTraceResponse>): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    message.denomTrace = object.denomTrace !== undefined && object.denomTrace !== null ? DenomTrace.fromPartial(object.denomTrace) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomTraceResponseAmino): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    if (object.denom_trace !== undefined && object.denom_trace !== null) {
      message.denomTrace = DenomTrace.fromAmino(object.denom_trace);
    }
    return message;
  },
  toAmino(message: QueryDenomTraceResponse): QueryDenomTraceResponseAmino {
    const obj: any = {};
    obj.denom_trace = message.denomTrace ? DenomTrace.toAmino(message.denomTrace) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTraceResponseAminoMsg): QueryDenomTraceResponse {
    return QueryDenomTraceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTraceResponseProtoMsg): QueryDenomTraceResponse {
    return QueryDenomTraceResponse.decode(message.value);
  },
  toProto(message: QueryDenomTraceResponse): Uint8Array {
    return QueryDenomTraceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
      value: QueryDenomTraceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomTraceResponse.typeUrl, QueryDenomTraceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomTraceResponse.aminoType, QueryDenomTraceResponse.typeUrl);
function createBaseQueryDenomTracesRequest(): QueryDenomTracesRequest {
  return {
    pagination: undefined
  };
}
export const QueryDenomTracesRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
  aminoType: "cosmos-sdk/QueryDenomTracesRequest",
  is(o: any): o is QueryDenomTracesRequest {
    return o && o.$typeUrl === QueryDenomTracesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryDenomTracesRequestSDKType {
    return o && o.$typeUrl === QueryDenomTracesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryDenomTracesRequestAmino {
    return o && o.$typeUrl === QueryDenomTracesRequest.typeUrl;
  },
  encode(message: QueryDenomTracesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTracesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
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
  fromJSON(object: any): QueryDenomTracesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDenomTracesRequest): JsonSafe<QueryDenomTracesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTracesRequest>): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomTracesRequestAmino): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomTracesRequest): QueryDenomTracesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTracesRequestAminoMsg): QueryDenomTracesRequest {
    return QueryDenomTracesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTracesRequestProtoMsg): QueryDenomTracesRequest {
    return QueryDenomTracesRequest.decode(message.value);
  },
  toProto(message: QueryDenomTracesRequest): Uint8Array {
    return QueryDenomTracesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
      value: QueryDenomTracesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomTracesRequest.typeUrl, QueryDenomTracesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomTracesRequest.aminoType, QueryDenomTracesRequest.typeUrl);
function createBaseQueryDenomTracesResponse(): QueryDenomTracesResponse {
  return {
    denomTraces: [],
    pagination: undefined
  };
}
export const QueryDenomTracesResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
  aminoType: "cosmos-sdk/QueryDenomTracesResponse",
  is(o: any): o is QueryDenomTracesResponse {
    return o && (o.$typeUrl === QueryDenomTracesResponse.typeUrl || Array.isArray(o.denomTraces) && (!o.denomTraces.length || DenomTrace.is(o.denomTraces[0])));
  },
  isSDK(o: any): o is QueryDenomTracesResponseSDKType {
    return o && (o.$typeUrl === QueryDenomTracesResponse.typeUrl || Array.isArray(o.denom_traces) && (!o.denom_traces.length || DenomTrace.isSDK(o.denom_traces[0])));
  },
  isAmino(o: any): o is QueryDenomTracesResponseAmino {
    return o && (o.$typeUrl === QueryDenomTracesResponse.typeUrl || Array.isArray(o.denom_traces) && (!o.denom_traces.length || DenomTrace.isAmino(o.denom_traces[0])));
  },
  encode(message: QueryDenomTracesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTracesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDenomTracesResponse {
    return {
      denomTraces: Array.isArray(object?.denomTraces) ? object.denomTraces.map((e: any) => DenomTrace.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDenomTracesResponse): JsonSafe<QueryDenomTracesResponse> {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map(e => e ? DenomTrace.toJSON(e) : undefined);
    } else {
      obj.denomTraces = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomTracesResponse>): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDenomTracesResponseAmino): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces = object.denom_traces?.map(e => DenomTrace.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDenomTracesResponse): QueryDenomTracesResponseAmino {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denom_traces = message.denomTraces.map(e => e ? DenomTrace.toAmino(e) : undefined);
    } else {
      obj.denom_traces = message.denomTraces;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDenomTracesResponseAminoMsg): QueryDenomTracesResponse {
    return QueryDenomTracesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomTracesResponseProtoMsg): QueryDenomTracesResponse {
    return QueryDenomTracesResponse.decode(message.value);
  },
  toProto(message: QueryDenomTracesResponse): Uint8Array {
    return QueryDenomTracesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
      value: QueryDenomTracesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDenomTracesResponse.typeUrl, QueryDenomTracesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryDenomTracesResponse.aminoType, QueryDenomTracesResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
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
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
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
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);