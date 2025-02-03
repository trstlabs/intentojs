import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FlowInfo, FlowInfoAmino, FlowInfoSDKType, FlowHistoryEntry, FlowHistoryEntryAmino, FlowHistoryEntrySDKType } from "./flow";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostedAccount, HostedAccountAmino, HostedAccountSDKType } from "./hostedaccount";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
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
  typeUrl: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressRequest";
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
  type: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressRequest";
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
  typeUrl: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressResponse";
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
  type: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressResponse";
  value: QueryInterchainAccountFromAddressResponseAmino;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryInterchainAccountFromAddressResponseSDKType {
  interchain_account_address: string;
}
/** QueryFlowRequest is the request type for the Query/FlowRequest RPC */
export interface QueryFlowRequest {
  id: string;
}
export interface QueryFlowRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowRequest";
  value: Uint8Array;
}
/** QueryFlowRequest is the request type for the Query/FlowRequest RPC */
export interface QueryFlowRequestAmino {
  id?: string;
}
export interface QueryFlowRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowRequest";
  value: QueryFlowRequestAmino;
}
/** QueryFlowRequest is the request type for the Query/FlowRequest RPC */
export interface QueryFlowRequestSDKType {
  id: string;
}
/** QueryFlowResponse the response type for the Query/FlowRequest RPC */
export interface QueryFlowResponse {
  flowInfo: FlowInfo;
}
export interface QueryFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowResponse";
  value: Uint8Array;
}
/** QueryFlowResponse the response type for the Query/FlowRequest RPC */
export interface QueryFlowResponseAmino {
  flow_info?: FlowInfoAmino;
}
export interface QueryFlowResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowResponse";
  value: QueryFlowResponseAmino;
}
/** QueryFlowResponse the response type for the Query/FlowRequest RPC */
export interface QueryFlowResponseSDKType {
  flow_info: FlowInfoSDKType;
}
/**
 * QueryFlowHistoryRequest is the request type for the
 * Query/QueryFlowHistoryRequest RPC
 */
export interface QueryFlowHistoryRequest {
  /** id of the flow */
  id: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryFlowHistoryRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryFlowHistoryRequest is the request type for the
 * Query/QueryFlowHistoryRequest RPC
 */
export interface QueryFlowHistoryRequestAmino {
  /** id of the flow */
  id?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryFlowHistoryRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowHistoryRequest";
  value: QueryFlowHistoryRequestAmino;
}
/**
 * QueryFlowHistoryRequest is the request type for the
 * Query/QueryFlowHistoryRequest RPC
 */
export interface QueryFlowHistoryRequestSDKType {
  id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryFlowHistoryResponse the response type for the
 * Query/QueryFlowHistoryResponse RPC
 */
export interface QueryFlowHistoryResponse {
  history: FlowHistoryEntry[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFlowHistoryResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryFlowHistoryResponse the response type for the
 * Query/QueryFlowHistoryResponse RPC
 */
export interface QueryFlowHistoryResponseAmino {
  history?: FlowHistoryEntryAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFlowHistoryResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowHistoryResponse";
  value: QueryFlowHistoryResponseAmino;
}
/**
 * QueryFlowHistoryResponse the response type for the
 * Query/QueryFlowHistoryResponse RPC
 */
export interface QueryFlowHistoryResponseSDKType {
  history: FlowHistoryEntrySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryFlowsRequest is the request type for the Query/FlowsRequest RPC */
export interface QueryFlowsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryFlowsRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsRequest";
  value: Uint8Array;
}
/** QueryFlowsRequest is the request type for the Query/FlowsRequest RPC */
export interface QueryFlowsRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryFlowsRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowsRequest";
  value: QueryFlowsRequestAmino;
}
/** QueryFlowsRequest is the request type for the Query/FlowsRequest RPC */
export interface QueryFlowsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryFlowsResponse the response type for the Query/FlowsRequest RPCπ */
export interface QueryFlowsResponse {
  flowInfos: FlowInfo[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFlowsResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsResponse";
  value: Uint8Array;
}
/** QueryFlowsResponse the response type for the Query/FlowsRequest RPCπ */
export interface QueryFlowsResponseAmino {
  flow_infos?: FlowInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFlowsResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowsResponse";
  value: QueryFlowsResponseAmino;
}
/** QueryFlowsResponse the response type for the Query/FlowsRequest RPCπ */
export interface QueryFlowsResponseSDKType {
  flow_infos: FlowInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryFlowsForOwnerRequest is the request type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerRequest {
  owner: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryFlowsForOwnerRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsForOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryFlowsForOwnerRequest is the request type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerRequestAmino {
  owner?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryFlowsForOwnerRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowsForOwnerRequest";
  value: QueryFlowsForOwnerRequestAmino;
}
/**
 * QueryFlowsForOwnerRequest is the request type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryFlowsForOwnerResponse the response type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerResponse {
  flowInfos: FlowInfo[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFlowsForOwnerResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsForOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryFlowsForOwnerResponse the response type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerResponseAmino {
  flow_infos?: FlowInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryFlowsForOwnerResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryFlowsForOwnerResponse";
  value: QueryFlowsForOwnerResponseAmino;
}
/**
 * QueryFlowsForOwnerResponse the response type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerResponseSDKType {
  flow_infos: FlowInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryParamsRequest";
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
  typeUrl: "/intento.intent.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryHostedAccount is the request type for the Query/Params RPC method. */
export interface QueryHostedAccountRequest {
  address: string;
}
export interface QueryHostedAccountRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountRequest";
  value: Uint8Array;
}
/** QueryHostedAccount is the request type for the Query/Params RPC method. */
export interface QueryHostedAccountRequestAmino {
  address?: string;
}
export interface QueryHostedAccountRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountRequest";
  value: QueryHostedAccountRequestAmino;
}
/** QueryHostedAccount is the request type for the Query/Params RPC method. */
export interface QueryHostedAccountRequestSDKType {
  address: string;
}
/**
 * QueryHostedAccountResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountResponse {
  /** HostedAccount */
  hostedAccount: HostedAccount;
}
export interface QueryHostedAccountResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountResponse";
  value: Uint8Array;
}
/**
 * QueryHostedAccountResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountResponseAmino {
  /** HostedAccount */
  hosted_account?: HostedAccountAmino;
}
export interface QueryHostedAccountResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountResponse";
  value: QueryHostedAccountResponseAmino;
}
/**
 * QueryHostedAccountResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountResponseSDKType {
  hosted_account: HostedAccountSDKType;
}
/**
 * QueryHostedAccounts is the request type for the Query/HostedAccount RPC
 * method.
 */
export interface QueryHostedAccountsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryHostedAccountsRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryHostedAccounts is the request type for the Query/HostedAccount RPC
 * method.
 */
export interface QueryHostedAccountsRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryHostedAccountsRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountsRequest";
  value: QueryHostedAccountsRequestAmino;
}
/**
 * QueryHostedAccounts is the request type for the Query/HostedAccount RPC
 * method.
 */
export interface QueryHostedAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryHostedAccountsResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountsResponse {
  /** HostedAccounts */
  hostedAccounts: HostedAccount[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryHostedAccountsResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryHostedAccountsResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountsResponseAmino {
  /** HostedAccounts */
  hosted_accounts?: HostedAccountAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryHostedAccountsResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountsResponse";
  value: QueryHostedAccountsResponseAmino;
}
/**
 * QueryHostedAccountsResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountsResponseSDKType {
  hosted_accounts: HostedAccountSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryHostedAccountsByAdminRequest */
export interface QueryHostedAccountsByAdminRequest {
  admin: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryHostedAccountsByAdminRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsByAdminRequest";
  value: Uint8Array;
}
/** QueryHostedAccountsByAdminRequest */
export interface QueryHostedAccountsByAdminRequestAmino {
  admin?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryHostedAccountsByAdminRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountsByAdminRequest";
  value: QueryHostedAccountsByAdminRequestAmino;
}
/** QueryHostedAccountsByAdminRequest */
export interface QueryHostedAccountsByAdminRequestSDKType {
  admin: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryHostedAccountResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountsByAdminResponse {
  /** HostedAccounts */
  hostedAccounts: HostedAccount[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryHostedAccountsByAdminResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsByAdminResponse";
  value: Uint8Array;
}
/**
 * QueryHostedAccountResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountsByAdminResponseAmino {
  /** HostedAccounts */
  hosted_accounts?: HostedAccountAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryHostedAccountsByAdminResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountsByAdminResponse";
  value: QueryHostedAccountsByAdminResponseAmino;
}
/**
 * QueryHostedAccountResponse is the response type for the Query/HostedAccount
 * RPC method.
 */
export interface QueryHostedAccountsByAdminResponseSDKType {
  hosted_accounts: HostedAccountSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountFromAddressRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressRequest",
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
  fromJSON(object: any): QueryInterchainAccountFromAddressRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  toJSON(message: QueryInterchainAccountFromAddressRequest): JsonSafe<QueryInterchainAccountFromAddressRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
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
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
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
      typeUrl: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressRequest",
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
  typeUrl: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressResponse",
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
  fromJSON(object: any): QueryInterchainAccountFromAddressResponse {
    return {
      interchainAccountAddress: isSet(object.interchainAccountAddress) ? String(object.interchainAccountAddress) : ""
    };
  },
  toJSON(message: QueryInterchainAccountFromAddressResponse): JsonSafe<QueryInterchainAccountFromAddressResponse> {
    const obj: any = {};
    message.interchainAccountAddress !== undefined && (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
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
    obj.interchain_account_address = message.interchainAccountAddress === "" ? undefined : message.interchainAccountAddress;
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
      typeUrl: "/intento.intent.v1beta1.QueryInterchainAccountFromAddressResponse",
      value: QueryInterchainAccountFromAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInterchainAccountFromAddressResponse.typeUrl, QueryInterchainAccountFromAddressResponse);
function createBaseQueryFlowRequest(): QueryFlowRequest {
  return {
    id: ""
  };
}
export const QueryFlowRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowRequest",
  is(o: any): o is QueryFlowRequest {
    return o && (o.$typeUrl === QueryFlowRequest.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is QueryFlowRequestSDKType {
    return o && (o.$typeUrl === QueryFlowRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryFlowRequestAmino {
    return o && (o.$typeUrl === QueryFlowRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryFlowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowRequest();
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
  fromJSON(object: any): QueryFlowRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: QueryFlowRequest): JsonSafe<QueryFlowRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowRequest>): QueryFlowRequest {
    const message = createBaseQueryFlowRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryFlowRequestAmino): QueryFlowRequest {
    const message = createBaseQueryFlowRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryFlowRequest): QueryFlowRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryFlowRequestAminoMsg): QueryFlowRequest {
    return QueryFlowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowRequestProtoMsg): QueryFlowRequest {
    return QueryFlowRequest.decode(message.value);
  },
  toProto(message: QueryFlowRequest): Uint8Array {
    return QueryFlowRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowRequest): QueryFlowRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowRequest",
      value: QueryFlowRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowRequest.typeUrl, QueryFlowRequest);
function createBaseQueryFlowResponse(): QueryFlowResponse {
  return {
    flowInfo: FlowInfo.fromPartial({})
  };
}
export const QueryFlowResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowResponse",
  is(o: any): o is QueryFlowResponse {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || FlowInfo.is(o.flowInfo));
  },
  isSDK(o: any): o is QueryFlowResponseSDKType {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || FlowInfo.isSDK(o.flow_info));
  },
  isAmino(o: any): o is QueryFlowResponseAmino {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || FlowInfo.isAmino(o.flow_info));
  },
  encode(message: QueryFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowInfo !== undefined) {
      FlowInfo.encode(message.flowInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowInfo = FlowInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlowResponse {
    return {
      flowInfo: isSet(object.flowInfo) ? FlowInfo.fromJSON(object.flowInfo) : undefined
    };
  },
  toJSON(message: QueryFlowResponse): JsonSafe<QueryFlowResponse> {
    const obj: any = {};
    message.flowInfo !== undefined && (obj.flowInfo = message.flowInfo ? FlowInfo.toJSON(message.flowInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowResponse>): QueryFlowResponse {
    const message = createBaseQueryFlowResponse();
    message.flowInfo = object.flowInfo !== undefined && object.flowInfo !== null ? FlowInfo.fromPartial(object.flowInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowResponseAmino): QueryFlowResponse {
    const message = createBaseQueryFlowResponse();
    if (object.flow_info !== undefined && object.flow_info !== null) {
      message.flowInfo = FlowInfo.fromAmino(object.flow_info);
    }
    return message;
  },
  toAmino(message: QueryFlowResponse): QueryFlowResponseAmino {
    const obj: any = {};
    obj.flow_info = message.flowInfo ? FlowInfo.toAmino(message.flowInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowResponseAminoMsg): QueryFlowResponse {
    return QueryFlowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowResponseProtoMsg): QueryFlowResponse {
    return QueryFlowResponse.decode(message.value);
  },
  toProto(message: QueryFlowResponse): Uint8Array {
    return QueryFlowResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowResponse): QueryFlowResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowResponse",
      value: QueryFlowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowResponse.typeUrl, QueryFlowResponse);
function createBaseQueryFlowHistoryRequest(): QueryFlowHistoryRequest {
  return {
    id: "",
    pagination: undefined
  };
}
export const QueryFlowHistoryRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowHistoryRequest",
  is(o: any): o is QueryFlowHistoryRequest {
    return o && (o.$typeUrl === QueryFlowHistoryRequest.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is QueryFlowHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryFlowHistoryRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryFlowHistoryRequestAmino {
    return o && (o.$typeUrl === QueryFlowHistoryRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryFlowHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowHistoryRequest();
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
  fromJSON(object: any): QueryFlowHistoryRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowHistoryRequest): JsonSafe<QueryFlowHistoryRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowHistoryRequest>): QueryFlowHistoryRequest {
    const message = createBaseQueryFlowHistoryRequest();
    message.id = object.id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowHistoryRequestAmino): QueryFlowHistoryRequest {
    const message = createBaseQueryFlowHistoryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowHistoryRequest): QueryFlowHistoryRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowHistoryRequestAminoMsg): QueryFlowHistoryRequest {
    return QueryFlowHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowHistoryRequestProtoMsg): QueryFlowHistoryRequest {
    return QueryFlowHistoryRequest.decode(message.value);
  },
  toProto(message: QueryFlowHistoryRequest): Uint8Array {
    return QueryFlowHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowHistoryRequest): QueryFlowHistoryRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowHistoryRequest",
      value: QueryFlowHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowHistoryRequest.typeUrl, QueryFlowHistoryRequest);
function createBaseQueryFlowHistoryResponse(): QueryFlowHistoryResponse {
  return {
    history: [],
    pagination: undefined
  };
}
export const QueryFlowHistoryResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowHistoryResponse",
  is(o: any): o is QueryFlowHistoryResponse {
    return o && (o.$typeUrl === QueryFlowHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || FlowHistoryEntry.is(o.history[0])));
  },
  isSDK(o: any): o is QueryFlowHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryFlowHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || FlowHistoryEntry.isSDK(o.history[0])));
  },
  isAmino(o: any): o is QueryFlowHistoryResponseAmino {
    return o && (o.$typeUrl === QueryFlowHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || FlowHistoryEntry.isAmino(o.history[0])));
  },
  encode(message: QueryFlowHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      FlowHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(FlowHistoryEntry.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryFlowHistoryResponse {
    return {
      history: Array.isArray(object?.history) ? object.history.map((e: any) => FlowHistoryEntry.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowHistoryResponse): JsonSafe<QueryFlowHistoryResponse> {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? FlowHistoryEntry.toJSON(e) : undefined);
    } else {
      obj.history = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowHistoryResponse>): QueryFlowHistoryResponse {
    const message = createBaseQueryFlowHistoryResponse();
    message.history = object.history?.map(e => FlowHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowHistoryResponseAmino): QueryFlowHistoryResponse {
    const message = createBaseQueryFlowHistoryResponse();
    message.history = object.history?.map(e => FlowHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowHistoryResponse): QueryFlowHistoryResponseAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? FlowHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.history = message.history;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowHistoryResponseAminoMsg): QueryFlowHistoryResponse {
    return QueryFlowHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowHistoryResponseProtoMsg): QueryFlowHistoryResponse {
    return QueryFlowHistoryResponse.decode(message.value);
  },
  toProto(message: QueryFlowHistoryResponse): Uint8Array {
    return QueryFlowHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowHistoryResponse): QueryFlowHistoryResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowHistoryResponse",
      value: QueryFlowHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowHistoryResponse.typeUrl, QueryFlowHistoryResponse);
function createBaseQueryFlowsRequest(): QueryFlowsRequest {
  return {
    pagination: undefined
  };
}
export const QueryFlowsRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsRequest",
  is(o: any): o is QueryFlowsRequest {
    return o && o.$typeUrl === QueryFlowsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryFlowsRequestSDKType {
    return o && o.$typeUrl === QueryFlowsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryFlowsRequestAmino {
    return o && o.$typeUrl === QueryFlowsRequest.typeUrl;
  },
  encode(message: QueryFlowsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowsRequest();
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
  fromJSON(object: any): QueryFlowsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowsRequest): JsonSafe<QueryFlowsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowsRequest>): QueryFlowsRequest {
    const message = createBaseQueryFlowsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowsRequestAmino): QueryFlowsRequest {
    const message = createBaseQueryFlowsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowsRequest): QueryFlowsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowsRequestAminoMsg): QueryFlowsRequest {
    return QueryFlowsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowsRequestProtoMsg): QueryFlowsRequest {
    return QueryFlowsRequest.decode(message.value);
  },
  toProto(message: QueryFlowsRequest): Uint8Array {
    return QueryFlowsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowsRequest): QueryFlowsRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowsRequest",
      value: QueryFlowsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsRequest.typeUrl, QueryFlowsRequest);
function createBaseQueryFlowsResponse(): QueryFlowsResponse {
  return {
    flowInfos: [],
    pagination: undefined
  };
}
export const QueryFlowsResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsResponse",
  is(o: any): o is QueryFlowsResponse {
    return o && (o.$typeUrl === QueryFlowsResponse.typeUrl || Array.isArray(o.flowInfos) && (!o.flowInfos.length || FlowInfo.is(o.flowInfos[0])));
  },
  isSDK(o: any): o is QueryFlowsResponseSDKType {
    return o && (o.$typeUrl === QueryFlowsResponse.typeUrl || Array.isArray(o.flow_infos) && (!o.flow_infos.length || FlowInfo.isSDK(o.flow_infos[0])));
  },
  isAmino(o: any): o is QueryFlowsResponseAmino {
    return o && (o.$typeUrl === QueryFlowsResponse.typeUrl || Array.isArray(o.flow_infos) && (!o.flow_infos.length || FlowInfo.isAmino(o.flow_infos[0])));
  },
  encode(message: QueryFlowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flowInfos) {
      FlowInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowInfos.push(FlowInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryFlowsResponse {
    return {
      flowInfos: Array.isArray(object?.flowInfos) ? object.flowInfos.map((e: any) => FlowInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowsResponse): JsonSafe<QueryFlowsResponse> {
    const obj: any = {};
    if (message.flowInfos) {
      obj.flowInfos = message.flowInfos.map(e => e ? FlowInfo.toJSON(e) : undefined);
    } else {
      obj.flowInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowsResponse>): QueryFlowsResponse {
    const message = createBaseQueryFlowsResponse();
    message.flowInfos = object.flowInfos?.map(e => FlowInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowsResponseAmino): QueryFlowsResponse {
    const message = createBaseQueryFlowsResponse();
    message.flowInfos = object.flow_infos?.map(e => FlowInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowsResponse): QueryFlowsResponseAmino {
    const obj: any = {};
    if (message.flowInfos) {
      obj.flow_infos = message.flowInfos.map(e => e ? FlowInfo.toAmino(e) : undefined);
    } else {
      obj.flow_infos = message.flowInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowsResponseAminoMsg): QueryFlowsResponse {
    return QueryFlowsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowsResponseProtoMsg): QueryFlowsResponse {
    return QueryFlowsResponse.decode(message.value);
  },
  toProto(message: QueryFlowsResponse): Uint8Array {
    return QueryFlowsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowsResponse): QueryFlowsResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowsResponse",
      value: QueryFlowsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsResponse.typeUrl, QueryFlowsResponse);
function createBaseQueryFlowsForOwnerRequest(): QueryFlowsForOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryFlowsForOwnerRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsForOwnerRequest",
  is(o: any): o is QueryFlowsForOwnerRequest {
    return o && (o.$typeUrl === QueryFlowsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryFlowsForOwnerRequestSDKType {
    return o && (o.$typeUrl === QueryFlowsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryFlowsForOwnerRequestAmino {
    return o && (o.$typeUrl === QueryFlowsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryFlowsForOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowsForOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowsForOwnerRequest();
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
  fromJSON(object: any): QueryFlowsForOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowsForOwnerRequest): JsonSafe<QueryFlowsForOwnerRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowsForOwnerRequest>): QueryFlowsForOwnerRequest {
    const message = createBaseQueryFlowsForOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowsForOwnerRequestAmino): QueryFlowsForOwnerRequest {
    const message = createBaseQueryFlowsForOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowsForOwnerRequest): QueryFlowsForOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowsForOwnerRequestAminoMsg): QueryFlowsForOwnerRequest {
    return QueryFlowsForOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowsForOwnerRequestProtoMsg): QueryFlowsForOwnerRequest {
    return QueryFlowsForOwnerRequest.decode(message.value);
  },
  toProto(message: QueryFlowsForOwnerRequest): Uint8Array {
    return QueryFlowsForOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowsForOwnerRequest): QueryFlowsForOwnerRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowsForOwnerRequest",
      value: QueryFlowsForOwnerRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsForOwnerRequest.typeUrl, QueryFlowsForOwnerRequest);
function createBaseQueryFlowsForOwnerResponse(): QueryFlowsForOwnerResponse {
  return {
    flowInfos: [],
    pagination: undefined
  };
}
export const QueryFlowsForOwnerResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryFlowsForOwnerResponse",
  is(o: any): o is QueryFlowsForOwnerResponse {
    return o && (o.$typeUrl === QueryFlowsForOwnerResponse.typeUrl || Array.isArray(o.flowInfos) && (!o.flowInfos.length || FlowInfo.is(o.flowInfos[0])));
  },
  isSDK(o: any): o is QueryFlowsForOwnerResponseSDKType {
    return o && (o.$typeUrl === QueryFlowsForOwnerResponse.typeUrl || Array.isArray(o.flow_infos) && (!o.flow_infos.length || FlowInfo.isSDK(o.flow_infos[0])));
  },
  isAmino(o: any): o is QueryFlowsForOwnerResponseAmino {
    return o && (o.$typeUrl === QueryFlowsForOwnerResponse.typeUrl || Array.isArray(o.flow_infos) && (!o.flow_infos.length || FlowInfo.isAmino(o.flow_infos[0])));
  },
  encode(message: QueryFlowsForOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flowInfos) {
      FlowInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlowsForOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlowsForOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flowInfos.push(FlowInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryFlowsForOwnerResponse {
    return {
      flowInfos: Array.isArray(object?.flowInfos) ? object.flowInfos.map((e: any) => FlowInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowsForOwnerResponse): JsonSafe<QueryFlowsForOwnerResponse> {
    const obj: any = {};
    if (message.flowInfos) {
      obj.flowInfos = message.flowInfos.map(e => e ? FlowInfo.toJSON(e) : undefined);
    } else {
      obj.flowInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowsForOwnerResponse>): QueryFlowsForOwnerResponse {
    const message = createBaseQueryFlowsForOwnerResponse();
    message.flowInfos = object.flowInfos?.map(e => FlowInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowsForOwnerResponseAmino): QueryFlowsForOwnerResponse {
    const message = createBaseQueryFlowsForOwnerResponse();
    message.flowInfos = object.flow_infos?.map(e => FlowInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowsForOwnerResponse): QueryFlowsForOwnerResponseAmino {
    const obj: any = {};
    if (message.flowInfos) {
      obj.flow_infos = message.flowInfos.map(e => e ? FlowInfo.toAmino(e) : undefined);
    } else {
      obj.flow_infos = message.flowInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlowsForOwnerResponseAminoMsg): QueryFlowsForOwnerResponse {
    return QueryFlowsForOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlowsForOwnerResponseProtoMsg): QueryFlowsForOwnerResponse {
    return QueryFlowsForOwnerResponse.decode(message.value);
  },
  toProto(message: QueryFlowsForOwnerResponse): Uint8Array {
    return QueryFlowsForOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlowsForOwnerResponse): QueryFlowsForOwnerResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryFlowsForOwnerResponse",
      value: QueryFlowsForOwnerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsForOwnerResponse.typeUrl, QueryFlowsForOwnerResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryParamsRequest",
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryParamsRequest",
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
  typeUrl: "/intento.intent.v1beta1.QueryParamsResponse",
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryHostedAccountRequest(): QueryHostedAccountRequest {
  return {
    address: ""
  };
}
export const QueryHostedAccountRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountRequest",
  is(o: any): o is QueryHostedAccountRequest {
    return o && (o.$typeUrl === QueryHostedAccountRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryHostedAccountRequestSDKType {
    return o && (o.$typeUrl === QueryHostedAccountRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryHostedAccountRequestAmino {
    return o && (o.$typeUrl === QueryHostedAccountRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryHostedAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostedAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostedAccountRequest();
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
  fromJSON(object: any): QueryHostedAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryHostedAccountRequest): JsonSafe<QueryHostedAccountRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryHostedAccountRequest>): QueryHostedAccountRequest {
    const message = createBaseQueryHostedAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryHostedAccountRequestAmino): QueryHostedAccountRequest {
    const message = createBaseQueryHostedAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryHostedAccountRequest): QueryHostedAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryHostedAccountRequestAminoMsg): QueryHostedAccountRequest {
    return QueryHostedAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostedAccountRequestProtoMsg): QueryHostedAccountRequest {
    return QueryHostedAccountRequest.decode(message.value);
  },
  toProto(message: QueryHostedAccountRequest): Uint8Array {
    return QueryHostedAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostedAccountRequest): QueryHostedAccountRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryHostedAccountRequest",
      value: QueryHostedAccountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostedAccountRequest.typeUrl, QueryHostedAccountRequest);
function createBaseQueryHostedAccountResponse(): QueryHostedAccountResponse {
  return {
    hostedAccount: HostedAccount.fromPartial({})
  };
}
export const QueryHostedAccountResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountResponse",
  is(o: any): o is QueryHostedAccountResponse {
    return o && (o.$typeUrl === QueryHostedAccountResponse.typeUrl || HostedAccount.is(o.hostedAccount));
  },
  isSDK(o: any): o is QueryHostedAccountResponseSDKType {
    return o && (o.$typeUrl === QueryHostedAccountResponse.typeUrl || HostedAccount.isSDK(o.hosted_account));
  },
  isAmino(o: any): o is QueryHostedAccountResponseAmino {
    return o && (o.$typeUrl === QueryHostedAccountResponse.typeUrl || HostedAccount.isAmino(o.hosted_account));
  },
  encode(message: QueryHostedAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostedAccount !== undefined) {
      HostedAccount.encode(message.hostedAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostedAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostedAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostedAccount = HostedAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryHostedAccountResponse {
    return {
      hostedAccount: isSet(object.hostedAccount) ? HostedAccount.fromJSON(object.hostedAccount) : undefined
    };
  },
  toJSON(message: QueryHostedAccountResponse): JsonSafe<QueryHostedAccountResponse> {
    const obj: any = {};
    message.hostedAccount !== undefined && (obj.hostedAccount = message.hostedAccount ? HostedAccount.toJSON(message.hostedAccount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostedAccountResponse>): QueryHostedAccountResponse {
    const message = createBaseQueryHostedAccountResponse();
    message.hostedAccount = object.hostedAccount !== undefined && object.hostedAccount !== null ? HostedAccount.fromPartial(object.hostedAccount) : undefined;
    return message;
  },
  fromAmino(object: QueryHostedAccountResponseAmino): QueryHostedAccountResponse {
    const message = createBaseQueryHostedAccountResponse();
    if (object.hosted_account !== undefined && object.hosted_account !== null) {
      message.hostedAccount = HostedAccount.fromAmino(object.hosted_account);
    }
    return message;
  },
  toAmino(message: QueryHostedAccountResponse): QueryHostedAccountResponseAmino {
    const obj: any = {};
    obj.hosted_account = message.hostedAccount ? HostedAccount.toAmino(message.hostedAccount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostedAccountResponseAminoMsg): QueryHostedAccountResponse {
    return QueryHostedAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostedAccountResponseProtoMsg): QueryHostedAccountResponse {
    return QueryHostedAccountResponse.decode(message.value);
  },
  toProto(message: QueryHostedAccountResponse): Uint8Array {
    return QueryHostedAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostedAccountResponse): QueryHostedAccountResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryHostedAccountResponse",
      value: QueryHostedAccountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostedAccountResponse.typeUrl, QueryHostedAccountResponse);
function createBaseQueryHostedAccountsRequest(): QueryHostedAccountsRequest {
  return {
    pagination: undefined
  };
}
export const QueryHostedAccountsRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsRequest",
  is(o: any): o is QueryHostedAccountsRequest {
    return o && o.$typeUrl === QueryHostedAccountsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryHostedAccountsRequestSDKType {
    return o && o.$typeUrl === QueryHostedAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryHostedAccountsRequestAmino {
    return o && o.$typeUrl === QueryHostedAccountsRequest.typeUrl;
  },
  encode(message: QueryHostedAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostedAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostedAccountsRequest();
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
  fromJSON(object: any): QueryHostedAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryHostedAccountsRequest): JsonSafe<QueryHostedAccountsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostedAccountsRequest>): QueryHostedAccountsRequest {
    const message = createBaseQueryHostedAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostedAccountsRequestAmino): QueryHostedAccountsRequest {
    const message = createBaseQueryHostedAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostedAccountsRequest): QueryHostedAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostedAccountsRequestAminoMsg): QueryHostedAccountsRequest {
    return QueryHostedAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostedAccountsRequestProtoMsg): QueryHostedAccountsRequest {
    return QueryHostedAccountsRequest.decode(message.value);
  },
  toProto(message: QueryHostedAccountsRequest): Uint8Array {
    return QueryHostedAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostedAccountsRequest): QueryHostedAccountsRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsRequest",
      value: QueryHostedAccountsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostedAccountsRequest.typeUrl, QueryHostedAccountsRequest);
function createBaseQueryHostedAccountsResponse(): QueryHostedAccountsResponse {
  return {
    hostedAccounts: [],
    pagination: undefined
  };
}
export const QueryHostedAccountsResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsResponse",
  is(o: any): o is QueryHostedAccountsResponse {
    return o && (o.$typeUrl === QueryHostedAccountsResponse.typeUrl || Array.isArray(o.hostedAccounts) && (!o.hostedAccounts.length || HostedAccount.is(o.hostedAccounts[0])));
  },
  isSDK(o: any): o is QueryHostedAccountsResponseSDKType {
    return o && (o.$typeUrl === QueryHostedAccountsResponse.typeUrl || Array.isArray(o.hosted_accounts) && (!o.hosted_accounts.length || HostedAccount.isSDK(o.hosted_accounts[0])));
  },
  isAmino(o: any): o is QueryHostedAccountsResponseAmino {
    return o && (o.$typeUrl === QueryHostedAccountsResponse.typeUrl || Array.isArray(o.hosted_accounts) && (!o.hosted_accounts.length || HostedAccount.isAmino(o.hosted_accounts[0])));
  },
  encode(message: QueryHostedAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostedAccounts) {
      HostedAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostedAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostedAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostedAccounts.push(HostedAccount.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryHostedAccountsResponse {
    return {
      hostedAccounts: Array.isArray(object?.hostedAccounts) ? object.hostedAccounts.map((e: any) => HostedAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryHostedAccountsResponse): JsonSafe<QueryHostedAccountsResponse> {
    const obj: any = {};
    if (message.hostedAccounts) {
      obj.hostedAccounts = message.hostedAccounts.map(e => e ? HostedAccount.toJSON(e) : undefined);
    } else {
      obj.hostedAccounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostedAccountsResponse>): QueryHostedAccountsResponse {
    const message = createBaseQueryHostedAccountsResponse();
    message.hostedAccounts = object.hostedAccounts?.map(e => HostedAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostedAccountsResponseAmino): QueryHostedAccountsResponse {
    const message = createBaseQueryHostedAccountsResponse();
    message.hostedAccounts = object.hosted_accounts?.map(e => HostedAccount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostedAccountsResponse): QueryHostedAccountsResponseAmino {
    const obj: any = {};
    if (message.hostedAccounts) {
      obj.hosted_accounts = message.hostedAccounts.map(e => e ? HostedAccount.toAmino(e) : undefined);
    } else {
      obj.hosted_accounts = message.hostedAccounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostedAccountsResponseAminoMsg): QueryHostedAccountsResponse {
    return QueryHostedAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostedAccountsResponseProtoMsg): QueryHostedAccountsResponse {
    return QueryHostedAccountsResponse.decode(message.value);
  },
  toProto(message: QueryHostedAccountsResponse): Uint8Array {
    return QueryHostedAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostedAccountsResponse): QueryHostedAccountsResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsResponse",
      value: QueryHostedAccountsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostedAccountsResponse.typeUrl, QueryHostedAccountsResponse);
function createBaseQueryHostedAccountsByAdminRequest(): QueryHostedAccountsByAdminRequest {
  return {
    admin: "",
    pagination: undefined
  };
}
export const QueryHostedAccountsByAdminRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsByAdminRequest",
  is(o: any): o is QueryHostedAccountsByAdminRequest {
    return o && (o.$typeUrl === QueryHostedAccountsByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isSDK(o: any): o is QueryHostedAccountsByAdminRequestSDKType {
    return o && (o.$typeUrl === QueryHostedAccountsByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  isAmino(o: any): o is QueryHostedAccountsByAdminRequestAmino {
    return o && (o.$typeUrl === QueryHostedAccountsByAdminRequest.typeUrl || typeof o.admin === "string");
  },
  encode(message: QueryHostedAccountsByAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostedAccountsByAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostedAccountsByAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
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
  fromJSON(object: any): QueryHostedAccountsByAdminRequest {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryHostedAccountsByAdminRequest): JsonSafe<QueryHostedAccountsByAdminRequest> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostedAccountsByAdminRequest>): QueryHostedAccountsByAdminRequest {
    const message = createBaseQueryHostedAccountsByAdminRequest();
    message.admin = object.admin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostedAccountsByAdminRequestAmino): QueryHostedAccountsByAdminRequest {
    const message = createBaseQueryHostedAccountsByAdminRequest();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostedAccountsByAdminRequest): QueryHostedAccountsByAdminRequestAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostedAccountsByAdminRequestAminoMsg): QueryHostedAccountsByAdminRequest {
    return QueryHostedAccountsByAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostedAccountsByAdminRequestProtoMsg): QueryHostedAccountsByAdminRequest {
    return QueryHostedAccountsByAdminRequest.decode(message.value);
  },
  toProto(message: QueryHostedAccountsByAdminRequest): Uint8Array {
    return QueryHostedAccountsByAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostedAccountsByAdminRequest): QueryHostedAccountsByAdminRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsByAdminRequest",
      value: QueryHostedAccountsByAdminRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostedAccountsByAdminRequest.typeUrl, QueryHostedAccountsByAdminRequest);
function createBaseQueryHostedAccountsByAdminResponse(): QueryHostedAccountsByAdminResponse {
  return {
    hostedAccounts: [],
    pagination: undefined
  };
}
export const QueryHostedAccountsByAdminResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsByAdminResponse",
  is(o: any): o is QueryHostedAccountsByAdminResponse {
    return o && (o.$typeUrl === QueryHostedAccountsByAdminResponse.typeUrl || Array.isArray(o.hostedAccounts) && (!o.hostedAccounts.length || HostedAccount.is(o.hostedAccounts[0])));
  },
  isSDK(o: any): o is QueryHostedAccountsByAdminResponseSDKType {
    return o && (o.$typeUrl === QueryHostedAccountsByAdminResponse.typeUrl || Array.isArray(o.hosted_accounts) && (!o.hosted_accounts.length || HostedAccount.isSDK(o.hosted_accounts[0])));
  },
  isAmino(o: any): o is QueryHostedAccountsByAdminResponseAmino {
    return o && (o.$typeUrl === QueryHostedAccountsByAdminResponse.typeUrl || Array.isArray(o.hosted_accounts) && (!o.hosted_accounts.length || HostedAccount.isAmino(o.hosted_accounts[0])));
  },
  encode(message: QueryHostedAccountsByAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hostedAccounts) {
      HostedAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostedAccountsByAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostedAccountsByAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostedAccounts.push(HostedAccount.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryHostedAccountsByAdminResponse {
    return {
      hostedAccounts: Array.isArray(object?.hostedAccounts) ? object.hostedAccounts.map((e: any) => HostedAccount.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryHostedAccountsByAdminResponse): JsonSafe<QueryHostedAccountsByAdminResponse> {
    const obj: any = {};
    if (message.hostedAccounts) {
      obj.hostedAccounts = message.hostedAccounts.map(e => e ? HostedAccount.toJSON(e) : undefined);
    } else {
      obj.hostedAccounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryHostedAccountsByAdminResponse>): QueryHostedAccountsByAdminResponse {
    const message = createBaseQueryHostedAccountsByAdminResponse();
    message.hostedAccounts = object.hostedAccounts?.map(e => HostedAccount.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostedAccountsByAdminResponseAmino): QueryHostedAccountsByAdminResponse {
    const message = createBaseQueryHostedAccountsByAdminResponse();
    message.hostedAccounts = object.hosted_accounts?.map(e => HostedAccount.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostedAccountsByAdminResponse): QueryHostedAccountsByAdminResponseAmino {
    const obj: any = {};
    if (message.hostedAccounts) {
      obj.hosted_accounts = message.hostedAccounts.map(e => e ? HostedAccount.toAmino(e) : undefined);
    } else {
      obj.hosted_accounts = message.hostedAccounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostedAccountsByAdminResponseAminoMsg): QueryHostedAccountsByAdminResponse {
    return QueryHostedAccountsByAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostedAccountsByAdminResponseProtoMsg): QueryHostedAccountsByAdminResponse {
    return QueryHostedAccountsByAdminResponse.decode(message.value);
  },
  toProto(message: QueryHostedAccountsByAdminResponse): Uint8Array {
    return QueryHostedAccountsByAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostedAccountsByAdminResponse): QueryHostedAccountsByAdminResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsByAdminResponse",
      value: QueryHostedAccountsByAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHostedAccountsByAdminResponse.typeUrl, QueryHostedAccountsByAdminResponse);