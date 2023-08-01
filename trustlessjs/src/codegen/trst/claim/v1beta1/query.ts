import { Action, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType, actionFromJSON } from "./claim";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {}
export interface QueryModuleAccountBalanceRequestProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryModuleAccountBalanceRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestAmino {}
export interface QueryModuleAccountBalanceRequestAminoMsg {
  type: "/trst.claim.v1beta1.QueryModuleAccountBalanceRequest";
  value: QueryModuleAccountBalanceRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
  /** params defines the parameters of the module. */
  moduleAccountBalance: Coin[];
}
export interface QueryModuleAccountBalanceResponseProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryModuleAccountBalanceResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseAmino {
  /** params defines the parameters of the module. */
  moduleAccountBalance: CoinAmino[];
}
export interface QueryModuleAccountBalanceResponseAminoMsg {
  type: "/trst.claim.v1beta1.QueryModuleAccountBalanceResponse";
  value: QueryModuleAccountBalanceResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponseSDKType {
  moduleAccountBalance: CoinSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/trst.claim.v1beta1.QueryParamsRequest";
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
  typeUrl: "/trst.claim.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/trst.claim.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryClaimRecordRequest {
  address: string;
}
export interface QueryClaimRecordRequestProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryClaimRecordRequest";
  value: Uint8Array;
}
export interface QueryClaimRecordRequestAmino {
  address: string;
}
export interface QueryClaimRecordRequestAminoMsg {
  type: "/trst.claim.v1beta1.QueryClaimRecordRequest";
  value: QueryClaimRecordRequestAmino;
}
export interface QueryClaimRecordRequestSDKType {
  address: string;
}
export interface QueryClaimRecordResponse {
  claimRecord: ClaimRecord;
}
export interface QueryClaimRecordResponseProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryClaimRecordResponse";
  value: Uint8Array;
}
export interface QueryClaimRecordResponseAmino {
  claim_record?: ClaimRecordAmino;
}
export interface QueryClaimRecordResponseAminoMsg {
  type: "/trst.claim.v1beta1.QueryClaimRecordResponse";
  value: QueryClaimRecordResponseAmino;
}
export interface QueryClaimRecordResponseSDKType {
  claim_record: ClaimRecordSDKType;
}
export interface QueryClaimableForActionRequest {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryClaimableForActionRequest";
  value: Uint8Array;
}
export interface QueryClaimableForActionRequestAmino {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionRequestAminoMsg {
  type: "/trst.claim.v1beta1.QueryClaimableForActionRequest";
  value: QueryClaimableForActionRequestAmino;
}
export interface QueryClaimableForActionRequestSDKType {
  address: string;
  action: Action;
}
export interface QueryClaimableForActionResponse {
  coins: Coin[];
}
export interface QueryClaimableForActionResponseProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryClaimableForActionResponse";
  value: Uint8Array;
}
export interface QueryClaimableForActionResponseAmino {
  coins: CoinAmino[];
}
export interface QueryClaimableForActionResponseAminoMsg {
  type: "/trst.claim.v1beta1.QueryClaimableForActionResponse";
  value: QueryClaimableForActionResponseAmino;
}
export interface QueryClaimableForActionResponseSDKType {
  coins: CoinSDKType[];
}
export interface QueryTotalClaimableRequest {
  address: string;
}
export interface QueryTotalClaimableRequestProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryTotalClaimableRequest";
  value: Uint8Array;
}
export interface QueryTotalClaimableRequestAmino {
  address: string;
}
export interface QueryTotalClaimableRequestAminoMsg {
  type: "/trst.claim.v1beta1.QueryTotalClaimableRequest";
  value: QueryTotalClaimableRequestAmino;
}
export interface QueryTotalClaimableRequestSDKType {
  address: string;
}
export interface QueryTotalClaimableResponse {
  coins: Coin[];
}
export interface QueryTotalClaimableResponseProtoMsg {
  typeUrl: "/trst.claim.v1beta1.QueryTotalClaimableResponse";
  value: Uint8Array;
}
export interface QueryTotalClaimableResponseAmino {
  coins: CoinAmino[];
}
export interface QueryTotalClaimableResponseAminoMsg {
  type: "/trst.claim.v1beta1.QueryTotalClaimableResponse";
  value: QueryTotalClaimableResponseAmino;
}
export interface QueryTotalClaimableResponseSDKType {
  coins: CoinSDKType[];
}
function createBaseQueryModuleAccountBalanceRequest(): QueryModuleAccountBalanceRequest {
  return {};
}
export const QueryModuleAccountBalanceRequest = {
  encode(_: QueryModuleAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceRequest();
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
  fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest {
    const message = createBaseQueryModuleAccountBalanceRequest();
    return message;
  },
  fromAmino(_: QueryModuleAccountBalanceRequestAmino): QueryModuleAccountBalanceRequest {
    return {};
  },
  toAmino(_: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountBalanceRequestAminoMsg): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountBalanceRequestProtoMsg): QueryModuleAccountBalanceRequest {
    return QueryModuleAccountBalanceRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountBalanceRequest): Uint8Array {
    return QueryModuleAccountBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceRequest): QueryModuleAccountBalanceRequestProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryModuleAccountBalanceRequest",
      value: QueryModuleAccountBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountBalanceResponse(): QueryModuleAccountBalanceResponse {
  return {
    moduleAccountBalance: []
  };
}
export const QueryModuleAccountBalanceResponse = {
  encode(message: QueryModuleAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleAccountBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse {
    const message = createBaseQueryModuleAccountBalanceResponse();
    message.moduleAccountBalance = object.moduleAccountBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryModuleAccountBalanceResponseAmino): QueryModuleAccountBalanceResponse {
    return {
      moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseAmino {
    const obj: any = {};
    if (message.moduleAccountBalance) {
      obj.moduleAccountBalance = message.moduleAccountBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.moduleAccountBalance = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountBalanceResponseAminoMsg): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleAccountBalanceResponseProtoMsg): QueryModuleAccountBalanceResponse {
    return QueryModuleAccountBalanceResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountBalanceResponse): Uint8Array {
    return QueryModuleAccountBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountBalanceResponse): QueryModuleAccountBalanceResponseProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryModuleAccountBalanceResponse",
      value: QueryModuleAccountBalanceResponse.encode(message).finish()
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
      typeUrl: "/trst.claim.v1beta1.QueryParamsRequest",
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
      typeUrl: "/trst.claim.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordRequest(): QueryClaimRecordRequest {
  return {
    address: ""
  };
}
export const QueryClaimRecordRequest = {
  encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
    const message = createBaseQueryClaimRecordRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryClaimRecordRequestAmino): QueryClaimRecordRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryClaimRecordRequest): QueryClaimRecordRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordRequestAminoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordRequestProtoMsg): QueryClaimRecordRequest {
    return QueryClaimRecordRequest.decode(message.value);
  },
  toProto(message: QueryClaimRecordRequest): Uint8Array {
    return QueryClaimRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordRequest): QueryClaimRecordRequestProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryClaimRecordRequest",
      value: QueryClaimRecordRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimRecordResponse(): QueryClaimRecordResponse {
  return {
    claimRecord: ClaimRecord.fromPartial({})
  };
}
export const QueryClaimRecordResponse = {
  encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claimRecord !== undefined) {
      ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
    const message = createBaseQueryClaimRecordResponse();
    message.claimRecord = object.claimRecord !== undefined && object.claimRecord !== null ? ClaimRecord.fromPartial(object.claimRecord) : undefined;
    return message;
  },
  fromAmino(object: QueryClaimRecordResponseAmino): QueryClaimRecordResponse {
    return {
      claimRecord: object?.claim_record ? ClaimRecord.fromAmino(object.claim_record) : undefined
    };
  },
  toAmino(message: QueryClaimRecordResponse): QueryClaimRecordResponseAmino {
    const obj: any = {};
    obj.claim_record = message.claimRecord ? ClaimRecord.toAmino(message.claimRecord) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClaimRecordResponseAminoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimRecordResponseProtoMsg): QueryClaimRecordResponse {
    return QueryClaimRecordResponse.decode(message.value);
  },
  toProto(message: QueryClaimRecordResponse): Uint8Array {
    return QueryClaimRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimRecordResponse): QueryClaimRecordResponseProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryClaimRecordResponse",
      value: QueryClaimRecordResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionRequest(): QueryClaimableForActionRequest {
  return {
    address: "",
    action: 0
  };
}
export const QueryClaimableForActionRequest = {
  encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.action = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
    const message = createBaseQueryClaimableForActionRequest();
    message.address = object.address ?? "";
    message.action = object.action ?? 0;
    return message;
  },
  fromAmino(object: QueryClaimableForActionRequestAmino): QueryClaimableForActionRequest {
    return {
      address: object.address,
      action: isSet(object.action) ? actionFromJSON(object.action) : -1
    };
  },
  toAmino(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.action = message.action;
    return obj;
  },
  fromAminoMsg(object: QueryClaimableForActionRequestAminoMsg): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimableForActionRequestProtoMsg): QueryClaimableForActionRequest {
    return QueryClaimableForActionRequest.decode(message.value);
  },
  toProto(message: QueryClaimableForActionRequest): Uint8Array {
    return QueryClaimableForActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionRequest): QueryClaimableForActionRequestProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryClaimableForActionRequest",
      value: QueryClaimableForActionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClaimableForActionResponse(): QueryClaimableForActionResponse {
  return {
    coins: []
  };
}
export const QueryClaimableForActionResponse = {
  encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimableForActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
    const message = createBaseQueryClaimableForActionResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryClaimableForActionResponseAmino): QueryClaimableForActionResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryClaimableForActionResponseAminoMsg): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryClaimableForActionResponseProtoMsg): QueryClaimableForActionResponse {
    return QueryClaimableForActionResponse.decode(message.value);
  },
  toProto(message: QueryClaimableForActionResponse): Uint8Array {
    return QueryClaimableForActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClaimableForActionResponse): QueryClaimableForActionResponseProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryClaimableForActionResponse",
      value: QueryClaimableForActionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableRequest(): QueryTotalClaimableRequest {
  return {
    address: ""
  };
}
export const QueryTotalClaimableRequest = {
  encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
    const message = createBaseQueryTotalClaimableRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTotalClaimableRequestAmino): QueryTotalClaimableRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTotalClaimableRequestAminoMsg): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalClaimableRequestProtoMsg): QueryTotalClaimableRequest {
    return QueryTotalClaimableRequest.decode(message.value);
  },
  toProto(message: QueryTotalClaimableRequest): Uint8Array {
    return QueryTotalClaimableRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableRequest): QueryTotalClaimableRequestProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryTotalClaimableRequest",
      value: QueryTotalClaimableRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalClaimableResponse(): QueryTotalClaimableResponse {
  return {
    coins: []
  };
}
export const QueryTotalClaimableResponse = {
  encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalClaimableResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
    const message = createBaseQueryTotalClaimableResponse();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalClaimableResponseAmino): QueryTotalClaimableResponse {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalClaimableResponseAminoMsg): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalClaimableResponseProtoMsg): QueryTotalClaimableResponse {
    return QueryTotalClaimableResponse.decode(message.value);
  },
  toProto(message: QueryTotalClaimableResponse): Uint8Array {
    return QueryTotalClaimableResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalClaimableResponse): QueryTotalClaimableResponseProtoMsg {
    return {
      typeUrl: "/trst.claim.v1beta1.QueryTotalClaimableResponse",
      value: QueryTotalClaimableResponse.encode(message).finish()
    };
  }
};