import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ActionInfo, ActionInfoAmino, ActionInfoSDKType, ActionHistoryEntry, ActionHistoryEntryAmino, ActionHistoryEntrySDKType } from "./action";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { HostedAccount, HostedAccountAmino, HostedAccountSDKType } from "./hostedaccount";
import { ActionIbcUsage, ActionIbcUsageAmino, ActionIbcUsageSDKType } from "./usage";
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
/** QueryActionRequest is the request type for the Query/ActionRequest RPC */
export interface QueryActionRequest {
  /** QueryActionRequest is the request type for the Query/ActionRequest RPC */
  id: string;
}
export interface QueryActionRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionRequest";
  value: Uint8Array;
}
/** QueryActionRequest is the request type for the Query/ActionRequest RPC */
export interface QueryActionRequestAmino {
  /** QueryActionRequest is the request type for the Query/ActionRequest RPC */
  id?: string;
}
export interface QueryActionRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionRequest";
  value: QueryActionRequestAmino;
}
/** QueryActionRequest is the request type for the Query/ActionRequest RPC */
export interface QueryActionRequestSDKType {
  id: string;
}
/** QueryActionResponse the response type for the Query/ActionRequest RPC */
export interface QueryActionResponse {
  actionInfo: ActionInfo;
}
export interface QueryActionResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionResponse";
  value: Uint8Array;
}
/** QueryActionResponse the response type for the Query/ActionRequest RPC */
export interface QueryActionResponseAmino {
  action_info?: ActionInfoAmino;
}
export interface QueryActionResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionResponse";
  value: QueryActionResponseAmino;
}
/** QueryActionResponse the response type for the Query/ActionRequest RPC */
export interface QueryActionResponseSDKType {
  action_info: ActionInfoSDKType;
}
/** QueryActionHistoryRequest is the request type for the Query/QueryActionHistoryRequest RPC */
export interface QueryActionHistoryRequest {
  /** id of the action */
  id: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryActionHistoryRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionHistoryRequest";
  value: Uint8Array;
}
/** QueryActionHistoryRequest is the request type for the Query/QueryActionHistoryRequest RPC */
export interface QueryActionHistoryRequestAmino {
  /** id of the action */
  id?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryActionHistoryRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionHistoryRequest";
  value: QueryActionHistoryRequestAmino;
}
/** QueryActionHistoryRequest is the request type for the Query/QueryActionHistoryRequest RPC */
export interface QueryActionHistoryRequestSDKType {
  id: string;
  pagination?: PageRequestSDKType;
}
/** QueryActionHistoryResponse the response type for the Query/QueryActionHistoryResponse RPC */
export interface QueryActionHistoryResponse {
  history: ActionHistoryEntry[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryActionHistoryResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionHistoryResponse";
  value: Uint8Array;
}
/** QueryActionHistoryResponse the response type for the Query/QueryActionHistoryResponse RPC */
export interface QueryActionHistoryResponseAmino {
  history?: ActionHistoryEntryAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryActionHistoryResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionHistoryResponse";
  value: QueryActionHistoryResponseAmino;
}
/** QueryActionHistoryResponse the response type for the Query/QueryActionHistoryResponse RPC */
export interface QueryActionHistoryResponseSDKType {
  history: ActionHistoryEntrySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryActionsRequest is the request type for the Query/ActionsRequest RPC */
export interface QueryActionsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryActionsRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionsRequest";
  value: Uint8Array;
}
/** QueryActionsRequest is the request type for the Query/ActionsRequest RPC */
export interface QueryActionsRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryActionsRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionsRequest";
  value: QueryActionsRequestAmino;
}
/** QueryActionsRequest is the request type for the Query/ActionsRequest RPC */
export interface QueryActionsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryActionsResponse the response type for the Query/ActionsRequest RPCπ */
export interface QueryActionsResponse {
  actionInfos: ActionInfo[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryActionsResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionsResponse";
  value: Uint8Array;
}
/** QueryActionsResponse the response type for the Query/ActionsRequest RPCπ */
export interface QueryActionsResponseAmino {
  action_infos?: ActionInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryActionsResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionsResponse";
  value: QueryActionsResponseAmino;
}
/** QueryActionsResponse the response type for the Query/ActionsRequest RPCπ */
export interface QueryActionsResponseSDKType {
  action_infos: ActionInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryActionsForOwnerRequest is the request type for the
 * Query/ActionsForOwnerRequest RPC
 */
export interface QueryActionsForOwnerRequest {
  owner: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryActionsForOwnerRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionsForOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryActionsForOwnerRequest is the request type for the
 * Query/ActionsForOwnerRequest RPC
 */
export interface QueryActionsForOwnerRequestAmino {
  owner?: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryActionsForOwnerRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionsForOwnerRequest";
  value: QueryActionsForOwnerRequestAmino;
}
/**
 * QueryActionsForOwnerRequest is the request type for the
 * Query/ActionsForOwnerRequest RPC
 */
export interface QueryActionsForOwnerRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryActionsForOwnerResponse the response type for the
 * Query/ActionsForOwnerRequest RPC
 */
export interface QueryActionsForOwnerResponse {
  actionInfos: ActionInfo[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryActionsForOwnerResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionsForOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryActionsForOwnerResponse the response type for the
 * Query/ActionsForOwnerRequest RPC
 */
export interface QueryActionsForOwnerResponseAmino {
  action_infos?: ActionInfoAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryActionsForOwnerResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionsForOwnerResponse";
  value: QueryActionsForOwnerResponseAmino;
}
/**
 * QueryActionsForOwnerResponse the response type for the
 * Query/ActionsForOwnerRequest RPC
 */
export interface QueryActionsForOwnerResponseSDKType {
  action_infos: ActionInfoSDKType[];
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
/** QueryHostedAccountResponse is the response type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountResponse {
  /** HostedAccount */
  hostedAccount: HostedAccount;
}
export interface QueryHostedAccountResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountResponse";
  value: Uint8Array;
}
/** QueryHostedAccountResponse is the response type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountResponseAmino {
  /** HostedAccount */
  hosted_account?: HostedAccountAmino;
}
export interface QueryHostedAccountResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountResponse";
  value: QueryHostedAccountResponseAmino;
}
/** QueryHostedAccountResponse is the response type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountResponseSDKType {
  hosted_account: HostedAccountSDKType;
}
/** QueryHostedAccount is the request type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryHostedAccountsRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryHostedAccountsRequest";
  value: Uint8Array;
}
/** QueryHostedAccount is the request type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountsRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryHostedAccountsRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryHostedAccountsRequest";
  value: QueryHostedAccountsRequestAmino;
}
/** QueryHostedAccount is the request type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryHostedAccountResponse is the response type for the Query/HostedAccount RPC method. */
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
/** QueryHostedAccountResponse is the response type for the Query/HostedAccount RPC method. */
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
/** QueryHostedAccountResponse is the response type for the Query/HostedAccount RPC method. */
export interface QueryHostedAccountsResponseSDKType {
  hosted_accounts: HostedAccountSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryActionIbcUsageRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryActionIbcUsageRequestProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionIbcUsageRequest";
  value: Uint8Array;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryActionIbcUsageRequestAmino {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryActionIbcUsageRequestAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionIbcUsageRequest";
  value: QueryActionIbcUsageRequestAmino;
}
/**
 * QueryAutoIbcUsageRequest is the request type for the
 * Query/QueryAutoIbcUsageRequest RPC
 */
export interface QueryActionIbcUsageRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryActionIbcUsageResponse {
  actionIbcUsage: ActionIbcUsage[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryActionIbcUsageResponseProtoMsg {
  typeUrl: "/intento.intent.v1beta1.QueryActionIbcUsageResponse";
  value: Uint8Array;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryActionIbcUsageResponseAmino {
  action_ibc_usage?: ActionIbcUsageAmino[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryActionIbcUsageResponseAminoMsg {
  type: "/intento.intent.v1beta1.QueryActionIbcUsageResponse";
  value: QueryActionIbcUsageResponseAmino;
}
/**
 * QueryAutoIbcUsageResponse the response type for the
 * Query/QueryAutoIbcUsageResponse RPC
 */
export interface QueryActionIbcUsageResponseSDKType {
  action_ibc_usage: ActionIbcUsageSDKType[];
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
function createBaseQueryActionRequest(): QueryActionRequest {
  return {
    id: ""
  };
}
export const QueryActionRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryActionRequest",
  is(o: any): o is QueryActionRequest {
    return o && (o.$typeUrl === QueryActionRequest.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is QueryActionRequestSDKType {
    return o && (o.$typeUrl === QueryActionRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryActionRequestAmino {
    return o && (o.$typeUrl === QueryActionRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryActionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionRequest();
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
  fromPartial(object: Partial<QueryActionRequest>): QueryActionRequest {
    const message = createBaseQueryActionRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryActionRequestAmino): QueryActionRequest {
    const message = createBaseQueryActionRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryActionRequest): QueryActionRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryActionRequestAminoMsg): QueryActionRequest {
    return QueryActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionRequestProtoMsg): QueryActionRequest {
    return QueryActionRequest.decode(message.value);
  },
  toProto(message: QueryActionRequest): Uint8Array {
    return QueryActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActionRequest): QueryActionRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionRequest",
      value: QueryActionRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionRequest.typeUrl, QueryActionRequest);
function createBaseQueryActionResponse(): QueryActionResponse {
  return {
    actionInfo: ActionInfo.fromPartial({})
  };
}
export const QueryActionResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryActionResponse",
  is(o: any): o is QueryActionResponse {
    return o && (o.$typeUrl === QueryActionResponse.typeUrl || ActionInfo.is(o.actionInfo));
  },
  isSDK(o: any): o is QueryActionResponseSDKType {
    return o && (o.$typeUrl === QueryActionResponse.typeUrl || ActionInfo.isSDK(o.action_info));
  },
  isAmino(o: any): o is QueryActionResponseAmino {
    return o && (o.$typeUrl === QueryActionResponse.typeUrl || ActionInfo.isAmino(o.action_info));
  },
  encode(message: QueryActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionInfo !== undefined) {
      ActionInfo.encode(message.actionInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionInfo = ActionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryActionResponse>): QueryActionResponse {
    const message = createBaseQueryActionResponse();
    message.actionInfo = object.actionInfo !== undefined && object.actionInfo !== null ? ActionInfo.fromPartial(object.actionInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryActionResponseAmino): QueryActionResponse {
    const message = createBaseQueryActionResponse();
    if (object.action_info !== undefined && object.action_info !== null) {
      message.actionInfo = ActionInfo.fromAmino(object.action_info);
    }
    return message;
  },
  toAmino(message: QueryActionResponse): QueryActionResponseAmino {
    const obj: any = {};
    obj.action_info = message.actionInfo ? ActionInfo.toAmino(message.actionInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionResponseAminoMsg): QueryActionResponse {
    return QueryActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionResponseProtoMsg): QueryActionResponse {
    return QueryActionResponse.decode(message.value);
  },
  toProto(message: QueryActionResponse): Uint8Array {
    return QueryActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActionResponse): QueryActionResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionResponse",
      value: QueryActionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionResponse.typeUrl, QueryActionResponse);
function createBaseQueryActionHistoryRequest(): QueryActionHistoryRequest {
  return {
    id: "",
    pagination: undefined
  };
}
export const QueryActionHistoryRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryActionHistoryRequest",
  is(o: any): o is QueryActionHistoryRequest {
    return o && (o.$typeUrl === QueryActionHistoryRequest.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is QueryActionHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryActionHistoryRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryActionHistoryRequestAmino {
    return o && (o.$typeUrl === QueryActionHistoryRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryActionHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionHistoryRequest();
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
  fromPartial(object: Partial<QueryActionHistoryRequest>): QueryActionHistoryRequest {
    const message = createBaseQueryActionHistoryRequest();
    message.id = object.id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionHistoryRequestAmino): QueryActionHistoryRequest {
    const message = createBaseQueryActionHistoryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionHistoryRequest): QueryActionHistoryRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionHistoryRequestAminoMsg): QueryActionHistoryRequest {
    return QueryActionHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionHistoryRequestProtoMsg): QueryActionHistoryRequest {
    return QueryActionHistoryRequest.decode(message.value);
  },
  toProto(message: QueryActionHistoryRequest): Uint8Array {
    return QueryActionHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActionHistoryRequest): QueryActionHistoryRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionHistoryRequest",
      value: QueryActionHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionHistoryRequest.typeUrl, QueryActionHistoryRequest);
function createBaseQueryActionHistoryResponse(): QueryActionHistoryResponse {
  return {
    history: [],
    pagination: undefined
  };
}
export const QueryActionHistoryResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryActionHistoryResponse",
  is(o: any): o is QueryActionHistoryResponse {
    return o && (o.$typeUrl === QueryActionHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || ActionHistoryEntry.is(o.history[0])));
  },
  isSDK(o: any): o is QueryActionHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryActionHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || ActionHistoryEntry.isSDK(o.history[0])));
  },
  isAmino(o: any): o is QueryActionHistoryResponseAmino {
    return o && (o.$typeUrl === QueryActionHistoryResponse.typeUrl || Array.isArray(o.history) && (!o.history.length || ActionHistoryEntry.isAmino(o.history[0])));
  },
  encode(message: QueryActionHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.history) {
      ActionHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(ActionHistoryEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryActionHistoryResponse>): QueryActionHistoryResponse {
    const message = createBaseQueryActionHistoryResponse();
    message.history = object.history?.map(e => ActionHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionHistoryResponseAmino): QueryActionHistoryResponse {
    const message = createBaseQueryActionHistoryResponse();
    message.history = object.history?.map(e => ActionHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionHistoryResponse): QueryActionHistoryResponseAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? ActionHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.history = message.history;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionHistoryResponseAminoMsg): QueryActionHistoryResponse {
    return QueryActionHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionHistoryResponseProtoMsg): QueryActionHistoryResponse {
    return QueryActionHistoryResponse.decode(message.value);
  },
  toProto(message: QueryActionHistoryResponse): Uint8Array {
    return QueryActionHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActionHistoryResponse): QueryActionHistoryResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionHistoryResponse",
      value: QueryActionHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionHistoryResponse.typeUrl, QueryActionHistoryResponse);
function createBaseQueryActionsRequest(): QueryActionsRequest {
  return {
    pagination: undefined
  };
}
export const QueryActionsRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryActionsRequest",
  is(o: any): o is QueryActionsRequest {
    return o && o.$typeUrl === QueryActionsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryActionsRequestSDKType {
    return o && o.$typeUrl === QueryActionsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryActionsRequestAmino {
    return o && o.$typeUrl === QueryActionsRequest.typeUrl;
  },
  encode(message: QueryActionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionsRequest();
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
  fromPartial(object: Partial<QueryActionsRequest>): QueryActionsRequest {
    const message = createBaseQueryActionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionsRequestAmino): QueryActionsRequest {
    const message = createBaseQueryActionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionsRequest): QueryActionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionsRequestAminoMsg): QueryActionsRequest {
    return QueryActionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionsRequestProtoMsg): QueryActionsRequest {
    return QueryActionsRequest.decode(message.value);
  },
  toProto(message: QueryActionsRequest): Uint8Array {
    return QueryActionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActionsRequest): QueryActionsRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionsRequest",
      value: QueryActionsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionsRequest.typeUrl, QueryActionsRequest);
function createBaseQueryActionsResponse(): QueryActionsResponse {
  return {
    actionInfos: [],
    pagination: undefined
  };
}
export const QueryActionsResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryActionsResponse",
  is(o: any): o is QueryActionsResponse {
    return o && (o.$typeUrl === QueryActionsResponse.typeUrl || Array.isArray(o.actionInfos) && (!o.actionInfos.length || ActionInfo.is(o.actionInfos[0])));
  },
  isSDK(o: any): o is QueryActionsResponseSDKType {
    return o && (o.$typeUrl === QueryActionsResponse.typeUrl || Array.isArray(o.action_infos) && (!o.action_infos.length || ActionInfo.isSDK(o.action_infos[0])));
  },
  isAmino(o: any): o is QueryActionsResponseAmino {
    return o && (o.$typeUrl === QueryActionsResponse.typeUrl || Array.isArray(o.action_infos) && (!o.action_infos.length || ActionInfo.isAmino(o.action_infos[0])));
  },
  encode(message: QueryActionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actionInfos) {
      ActionInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionInfos.push(ActionInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryActionsResponse>): QueryActionsResponse {
    const message = createBaseQueryActionsResponse();
    message.actionInfos = object.actionInfos?.map(e => ActionInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionsResponseAmino): QueryActionsResponse {
    const message = createBaseQueryActionsResponse();
    message.actionInfos = object.action_infos?.map(e => ActionInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionsResponse): QueryActionsResponseAmino {
    const obj: any = {};
    if (message.actionInfos) {
      obj.action_infos = message.actionInfos.map(e => e ? ActionInfo.toAmino(e) : undefined);
    } else {
      obj.action_infos = message.actionInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionsResponseAminoMsg): QueryActionsResponse {
    return QueryActionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionsResponseProtoMsg): QueryActionsResponse {
    return QueryActionsResponse.decode(message.value);
  },
  toProto(message: QueryActionsResponse): Uint8Array {
    return QueryActionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActionsResponse): QueryActionsResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionsResponse",
      value: QueryActionsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionsResponse.typeUrl, QueryActionsResponse);
function createBaseQueryActionsForOwnerRequest(): QueryActionsForOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryActionsForOwnerRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryActionsForOwnerRequest",
  is(o: any): o is QueryActionsForOwnerRequest {
    return o && (o.$typeUrl === QueryActionsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryActionsForOwnerRequestSDKType {
    return o && (o.$typeUrl === QueryActionsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryActionsForOwnerRequestAmino {
    return o && (o.$typeUrl === QueryActionsForOwnerRequest.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryActionsForOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionsForOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionsForOwnerRequest();
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
  fromPartial(object: Partial<QueryActionsForOwnerRequest>): QueryActionsForOwnerRequest {
    const message = createBaseQueryActionsForOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionsForOwnerRequestAmino): QueryActionsForOwnerRequest {
    const message = createBaseQueryActionsForOwnerRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionsForOwnerRequest): QueryActionsForOwnerRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionsForOwnerRequestAminoMsg): QueryActionsForOwnerRequest {
    return QueryActionsForOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionsForOwnerRequestProtoMsg): QueryActionsForOwnerRequest {
    return QueryActionsForOwnerRequest.decode(message.value);
  },
  toProto(message: QueryActionsForOwnerRequest): Uint8Array {
    return QueryActionsForOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActionsForOwnerRequest): QueryActionsForOwnerRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionsForOwnerRequest",
      value: QueryActionsForOwnerRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionsForOwnerRequest.typeUrl, QueryActionsForOwnerRequest);
function createBaseQueryActionsForOwnerResponse(): QueryActionsForOwnerResponse {
  return {
    actionInfos: [],
    pagination: undefined
  };
}
export const QueryActionsForOwnerResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryActionsForOwnerResponse",
  is(o: any): o is QueryActionsForOwnerResponse {
    return o && (o.$typeUrl === QueryActionsForOwnerResponse.typeUrl || Array.isArray(o.actionInfos) && (!o.actionInfos.length || ActionInfo.is(o.actionInfos[0])));
  },
  isSDK(o: any): o is QueryActionsForOwnerResponseSDKType {
    return o && (o.$typeUrl === QueryActionsForOwnerResponse.typeUrl || Array.isArray(o.action_infos) && (!o.action_infos.length || ActionInfo.isSDK(o.action_infos[0])));
  },
  isAmino(o: any): o is QueryActionsForOwnerResponseAmino {
    return o && (o.$typeUrl === QueryActionsForOwnerResponse.typeUrl || Array.isArray(o.action_infos) && (!o.action_infos.length || ActionInfo.isAmino(o.action_infos[0])));
  },
  encode(message: QueryActionsForOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actionInfos) {
      ActionInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionsForOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionsForOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionInfos.push(ActionInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryActionsForOwnerResponse>): QueryActionsForOwnerResponse {
    const message = createBaseQueryActionsForOwnerResponse();
    message.actionInfos = object.actionInfos?.map(e => ActionInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionsForOwnerResponseAmino): QueryActionsForOwnerResponse {
    const message = createBaseQueryActionsForOwnerResponse();
    message.actionInfos = object.action_infos?.map(e => ActionInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionsForOwnerResponse): QueryActionsForOwnerResponseAmino {
    const obj: any = {};
    if (message.actionInfos) {
      obj.action_infos = message.actionInfos.map(e => e ? ActionInfo.toAmino(e) : undefined);
    } else {
      obj.action_infos = message.actionInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionsForOwnerResponseAminoMsg): QueryActionsForOwnerResponse {
    return QueryActionsForOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionsForOwnerResponseProtoMsg): QueryActionsForOwnerResponse {
    return QueryActionsForOwnerResponse.decode(message.value);
  },
  toProto(message: QueryActionsForOwnerResponse): Uint8Array {
    return QueryActionsForOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActionsForOwnerResponse): QueryActionsForOwnerResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionsForOwnerResponse",
      value: QueryActionsForOwnerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionsForOwnerResponse.typeUrl, QueryActionsForOwnerResponse);
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
function createBaseQueryActionIbcUsageRequest(): QueryActionIbcUsageRequest {
  return {
    pagination: undefined
  };
}
export const QueryActionIbcUsageRequest = {
  typeUrl: "/intento.intent.v1beta1.QueryActionIbcUsageRequest",
  is(o: any): o is QueryActionIbcUsageRequest {
    return o && o.$typeUrl === QueryActionIbcUsageRequest.typeUrl;
  },
  isSDK(o: any): o is QueryActionIbcUsageRequestSDKType {
    return o && o.$typeUrl === QueryActionIbcUsageRequest.typeUrl;
  },
  isAmino(o: any): o is QueryActionIbcUsageRequestAmino {
    return o && o.$typeUrl === QueryActionIbcUsageRequest.typeUrl;
  },
  encode(message: QueryActionIbcUsageRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionIbcUsageRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionIbcUsageRequest();
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
  fromPartial(object: Partial<QueryActionIbcUsageRequest>): QueryActionIbcUsageRequest {
    const message = createBaseQueryActionIbcUsageRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionIbcUsageRequestAmino): QueryActionIbcUsageRequest {
    const message = createBaseQueryActionIbcUsageRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionIbcUsageRequest): QueryActionIbcUsageRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionIbcUsageRequestAminoMsg): QueryActionIbcUsageRequest {
    return QueryActionIbcUsageRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionIbcUsageRequestProtoMsg): QueryActionIbcUsageRequest {
    return QueryActionIbcUsageRequest.decode(message.value);
  },
  toProto(message: QueryActionIbcUsageRequest): Uint8Array {
    return QueryActionIbcUsageRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActionIbcUsageRequest): QueryActionIbcUsageRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionIbcUsageRequest",
      value: QueryActionIbcUsageRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionIbcUsageRequest.typeUrl, QueryActionIbcUsageRequest);
function createBaseQueryActionIbcUsageResponse(): QueryActionIbcUsageResponse {
  return {
    actionIbcUsage: [],
    pagination: undefined
  };
}
export const QueryActionIbcUsageResponse = {
  typeUrl: "/intento.intent.v1beta1.QueryActionIbcUsageResponse",
  is(o: any): o is QueryActionIbcUsageResponse {
    return o && (o.$typeUrl === QueryActionIbcUsageResponse.typeUrl || Array.isArray(o.actionIbcUsage) && (!o.actionIbcUsage.length || ActionIbcUsage.is(o.actionIbcUsage[0])));
  },
  isSDK(o: any): o is QueryActionIbcUsageResponseSDKType {
    return o && (o.$typeUrl === QueryActionIbcUsageResponse.typeUrl || Array.isArray(o.action_ibc_usage) && (!o.action_ibc_usage.length || ActionIbcUsage.isSDK(o.action_ibc_usage[0])));
  },
  isAmino(o: any): o is QueryActionIbcUsageResponseAmino {
    return o && (o.$typeUrl === QueryActionIbcUsageResponse.typeUrl || Array.isArray(o.action_ibc_usage) && (!o.action_ibc_usage.length || ActionIbcUsage.isAmino(o.action_ibc_usage[0])));
  },
  encode(message: QueryActionIbcUsageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actionIbcUsage) {
      ActionIbcUsage.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActionIbcUsageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionIbcUsageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionIbcUsage.push(ActionIbcUsage.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<QueryActionIbcUsageResponse>): QueryActionIbcUsageResponse {
    const message = createBaseQueryActionIbcUsageResponse();
    message.actionIbcUsage = object.actionIbcUsage?.map(e => ActionIbcUsage.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryActionIbcUsageResponseAmino): QueryActionIbcUsageResponse {
    const message = createBaseQueryActionIbcUsageResponse();
    message.actionIbcUsage = object.action_ibc_usage?.map(e => ActionIbcUsage.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryActionIbcUsageResponse): QueryActionIbcUsageResponseAmino {
    const obj: any = {};
    if (message.actionIbcUsage) {
      obj.action_ibc_usage = message.actionIbcUsage.map(e => e ? ActionIbcUsage.toAmino(e) : undefined);
    } else {
      obj.action_ibc_usage = message.actionIbcUsage;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryActionIbcUsageResponseAminoMsg): QueryActionIbcUsageResponse {
    return QueryActionIbcUsageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActionIbcUsageResponseProtoMsg): QueryActionIbcUsageResponse {
    return QueryActionIbcUsageResponse.decode(message.value);
  },
  toProto(message: QueryActionIbcUsageResponse): Uint8Array {
    return QueryActionIbcUsageResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActionIbcUsageResponse): QueryActionIbcUsageResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.QueryActionIbcUsageResponse",
      value: QueryActionIbcUsageResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryActionIbcUsageResponse.typeUrl, QueryActionIbcUsageResponse);