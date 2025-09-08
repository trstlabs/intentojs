import { Query, QueryAmino, QuerySDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPendingQueriesRequest {}
export interface QueryPendingQueriesRequestProtoMsg {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
  value: Uint8Array;
}
/**
 * @name QueryPendingQueriesRequestAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.QueryPendingQueriesRequest
 */
export interface QueryPendingQueriesRequestAmino {}
export interface QueryPendingQueriesRequestAminoMsg {
  type: "/stride.interchainquery.v1.QueryPendingQueriesRequest";
  value: QueryPendingQueriesRequestAmino;
}
export interface QueryPendingQueriesRequestSDKType {}
export interface QueryPendingQueriesResponse {
  pendingQueries: Query[];
}
export interface QueryPendingQueriesResponseProtoMsg {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
  value: Uint8Array;
}
/**
 * @name QueryPendingQueriesResponseAmino
 * @package stride.interchainquery.v1
 * @see proto type: stride.interchainquery.v1.QueryPendingQueriesResponse
 */
export interface QueryPendingQueriesResponseAmino {
  pending_queries?: QueryAmino[];
}
export interface QueryPendingQueriesResponseAminoMsg {
  type: "/stride.interchainquery.v1.QueryPendingQueriesResponse";
  value: QueryPendingQueriesResponseAmino;
}
export interface QueryPendingQueriesResponseSDKType {
  pending_queries: QuerySDKType[];
}
function createBaseQueryPendingQueriesRequest(): QueryPendingQueriesRequest {
  return {};
}
export const QueryPendingQueriesRequest = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
  is(o: any): o is QueryPendingQueriesRequest {
    return o && o.$typeUrl === QueryPendingQueriesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPendingQueriesRequestSDKType {
    return o && o.$typeUrl === QueryPendingQueriesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPendingQueriesRequestAmino {
    return o && o.$typeUrl === QueryPendingQueriesRequest.typeUrl;
  },
  encode(_: QueryPendingQueriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingQueriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesRequest();
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
  fromJSON(_: any): QueryPendingQueriesRequest {
    return {};
  },
  toJSON(_: QueryPendingQueriesRequest): JsonSafe<QueryPendingQueriesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryPendingQueriesRequest>): QueryPendingQueriesRequest {
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  },
  fromAmino(_: QueryPendingQueriesRequestAmino): QueryPendingQueriesRequest {
    const message = createBaseQueryPendingQueriesRequest();
    return message;
  },
  toAmino(_: QueryPendingQueriesRequest): QueryPendingQueriesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPendingQueriesRequestAminoMsg): QueryPendingQueriesRequest {
    return QueryPendingQueriesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingQueriesRequestProtoMsg): QueryPendingQueriesRequest {
    return QueryPendingQueriesRequest.decode(message.value);
  },
  toProto(message: QueryPendingQueriesRequest): Uint8Array {
    return QueryPendingQueriesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingQueriesRequest): QueryPendingQueriesRequestProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesRequest",
      value: QueryPendingQueriesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPendingQueriesRequest.typeUrl, QueryPendingQueriesRequest);
function createBaseQueryPendingQueriesResponse(): QueryPendingQueriesResponse {
  return {
    pendingQueries: []
  };
}
export const QueryPendingQueriesResponse = {
  typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
  is(o: any): o is QueryPendingQueriesResponse {
    return o && (o.$typeUrl === QueryPendingQueriesResponse.typeUrl || Array.isArray(o.pendingQueries) && (!o.pendingQueries.length || Query.is(o.pendingQueries[0])));
  },
  isSDK(o: any): o is QueryPendingQueriesResponseSDKType {
    return o && (o.$typeUrl === QueryPendingQueriesResponse.typeUrl || Array.isArray(o.pending_queries) && (!o.pending_queries.length || Query.isSDK(o.pending_queries[0])));
  },
  isAmino(o: any): o is QueryPendingQueriesResponseAmino {
    return o && (o.$typeUrl === QueryPendingQueriesResponse.typeUrl || Array.isArray(o.pending_queries) && (!o.pending_queries.length || Query.isAmino(o.pending_queries[0])));
  },
  encode(message: QueryPendingQueriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pendingQueries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPendingQueriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingQueries.push(Query.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingQueriesResponse {
    return {
      pendingQueries: Array.isArray(object?.pendingQueries) ? object.pendingQueries.map((e: any) => Query.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPendingQueriesResponse): JsonSafe<QueryPendingQueriesResponse> {
    const obj: any = {};
    if (message.pendingQueries) {
      obj.pendingQueries = message.pendingQueries.map(e => e ? Query.toJSON(e) : undefined);
    } else {
      obj.pendingQueries = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPendingQueriesResponse>): QueryPendingQueriesResponse {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pendingQueries?.map(e => Query.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingQueriesResponseAmino): QueryPendingQueriesResponse {
    const message = createBaseQueryPendingQueriesResponse();
    message.pendingQueries = object.pending_queries?.map(e => Query.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseAmino {
    const obj: any = {};
    if (message.pendingQueries) {
      obj.pending_queries = message.pendingQueries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.pending_queries = message.pendingQueries;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingQueriesResponseAminoMsg): QueryPendingQueriesResponse {
    return QueryPendingQueriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingQueriesResponseProtoMsg): QueryPendingQueriesResponse {
    return QueryPendingQueriesResponse.decode(message.value);
  },
  toProto(message: QueryPendingQueriesResponse): Uint8Array {
    return QueryPendingQueriesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingQueriesResponse): QueryPendingQueriesResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.QueryPendingQueriesResponse",
      value: QueryPendingQueriesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPendingQueriesResponse.typeUrl, QueryPendingQueriesResponse);