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
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountFromAddressRequest = {
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
  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest {
    const message = createBaseQueryInterchainAccountFromAddressRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  }
};
function createBaseQueryInterchainAccountFromAddressResponse(): QueryInterchainAccountFromAddressResponse {
  return {
    interchainAccountAddress: ""
  };
}
export const QueryInterchainAccountFromAddressResponse = {
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
  fromPartial(object: DeepPartial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse {
    const message = createBaseQueryInterchainAccountFromAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  }
};
function createBaseQueryAutoTxRequest(): QueryAutoTxRequest {
  return {
    id: ""
  };
}
export const QueryAutoTxRequest = {
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
  fromPartial(object: DeepPartial<QueryAutoTxRequest>): QueryAutoTxRequest {
    const message = createBaseQueryAutoTxRequest();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseQueryAutoTxResponse(): QueryAutoTxResponse {
  return {
    autoTxInfo: AutoTxInfo.fromPartial({})
  };
}
export const QueryAutoTxResponse = {
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
  fromPartial(object: DeepPartial<QueryAutoTxResponse>): QueryAutoTxResponse {
    const message = createBaseQueryAutoTxResponse();
    message.autoTxInfo = object.autoTxInfo !== undefined && object.autoTxInfo !== null ? AutoTxInfo.fromPartial(object.autoTxInfo) : undefined;
    return message;
  }
};
function createBaseQueryAutoTxsRequest(): QueryAutoTxsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoTxsRequest = {
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
  fromPartial(object: DeepPartial<QueryAutoTxsRequest>): QueryAutoTxsRequest {
    const message = createBaseQueryAutoTxsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAutoTxsResponse(): QueryAutoTxsResponse {
  return {
    autoTxInfos: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoTxsResponse = {
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
  fromPartial(object: DeepPartial<QueryAutoTxsResponse>): QueryAutoTxsResponse {
    const message = createBaseQueryAutoTxsResponse();
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAutoTxsForOwnerRequest(): QueryAutoTxsForOwnerRequest {
  return {
    owner: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoTxsForOwnerRequest = {
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
  fromPartial(object: DeepPartial<QueryAutoTxsForOwnerRequest>): QueryAutoTxsForOwnerRequest {
    const message = createBaseQueryAutoTxsForOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAutoTxsForOwnerResponse(): QueryAutoTxsForOwnerResponse {
  return {
    autoTxInfos: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoTxsForOwnerResponse = {
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
  fromPartial(object: DeepPartial<QueryAutoTxsForOwnerResponse>): QueryAutoTxsForOwnerResponse {
    const message = createBaseQueryAutoTxsForOwnerResponse();
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
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
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryAutoTxIbcUsageRequest(): QueryAutoTxIbcUsageRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAutoTxIbcUsageRequest = {
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
  fromPartial(object: DeepPartial<QueryAutoTxIbcUsageRequest>): QueryAutoTxIbcUsageRequest {
    const message = createBaseQueryAutoTxIbcUsageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAutoTxIbcUsageResponse(): QueryAutoTxIbcUsageResponse {
  return {
    autoTxIbcUsage: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAutoTxIbcUsageResponse = {
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
  fromPartial(object: DeepPartial<QueryAutoTxIbcUsageResponse>): QueryAutoTxIbcUsageResponse {
    const message = createBaseQueryAutoTxIbcUsageResponse();
    message.autoTxIbcUsage = object.autoTxIbcUsage?.map(e => AutoTxIbcUsage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};