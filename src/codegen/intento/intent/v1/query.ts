import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Flow, FlowAmino, FlowSDKType, FlowHistoryEntry, FlowHistoryEntryAmino, FlowHistoryEntrySDKType } from "./flow";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TrustlessAgent, TrustlessAgentAmino, TrustlessAgentSDKType } from "./trustless_agent";
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
  typeUrl: "/intento.intent.v1.QueryInterchainAccountFromAddressRequest";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountFromAddressRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 * @name QueryInterchainAccountFromAddressRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryInterchainAccountFromAddressRequest
 */
export interface QueryInterchainAccountFromAddressRequestAmino {
  owner?: string;
  connection_id?: string;
}
export interface QueryInterchainAccountFromAddressRequestAminoMsg {
  type: "/intento.intent.v1.QueryInterchainAccountFromAddressRequest";
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
  typeUrl: "/intento.intent.v1.QueryInterchainAccountFromAddressResponse";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountFromAddressResponse the response type for the
 * Query/InterchainAccountAddress RPC
 * @name QueryInterchainAccountFromAddressResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryInterchainAccountFromAddressResponse
 */
export interface QueryInterchainAccountFromAddressResponseAmino {
  interchain_account_address?: string;
}
export interface QueryInterchainAccountFromAddressResponseAminoMsg {
  type: "/intento.intent.v1.QueryInterchainAccountFromAddressResponse";
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
  typeUrl: "/intento.intent.v1.QueryFlowRequest";
  value: Uint8Array;
}
/**
 * QueryFlowRequest is the request type for the Query/FlowRequest RPC
 * @name QueryFlowRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowRequest
 */
export interface QueryFlowRequestAmino {
  id?: string;
}
export interface QueryFlowRequestAminoMsg {
  type: "/intento.intent.v1.QueryFlowRequest";
  value: QueryFlowRequestAmino;
}
/** QueryFlowRequest is the request type for the Query/FlowRequest RPC */
export interface QueryFlowRequestSDKType {
  id: string;
}
/** QueryFlowResponse the response type for the Query/FlowRequest RPC */
export interface QueryFlowResponse {
  flow: Flow;
}
export interface QueryFlowResponseProtoMsg {
  typeUrl: "/intento.intent.v1.QueryFlowResponse";
  value: Uint8Array;
}
/**
 * QueryFlowResponse the response type for the Query/FlowRequest RPC
 * @name QueryFlowResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowResponse
 */
export interface QueryFlowResponseAmino {
  flow?: FlowAmino;
}
export interface QueryFlowResponseAminoMsg {
  type: "/intento.intent.v1.QueryFlowResponse";
  value: QueryFlowResponseAmino;
}
/** QueryFlowResponse the response type for the Query/FlowRequest RPC */
export interface QueryFlowResponseSDKType {
  flow: FlowSDKType;
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
  typeUrl: "/intento.intent.v1.QueryFlowHistoryRequest";
  value: Uint8Array;
}
/**
 * QueryFlowHistoryRequest is the request type for the
 * Query/QueryFlowHistoryRequest RPC
 * @name QueryFlowHistoryRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowHistoryRequest
 */
export interface QueryFlowHistoryRequestAmino {
  /**
   * id of the flow
   */
  id?: string;
  /**
   * Pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryFlowHistoryRequestAminoMsg {
  type: "/intento.intent.v1.QueryFlowHistoryRequest";
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
  typeUrl: "/intento.intent.v1.QueryFlowHistoryResponse";
  value: Uint8Array;
}
/**
 * QueryFlowHistoryResponse the response type for the
 * Query/QueryFlowHistoryResponse RPC
 * @name QueryFlowHistoryResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowHistoryResponse
 */
export interface QueryFlowHistoryResponseAmino {
  history?: FlowHistoryEntryAmino[];
  /**
   * Pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryFlowHistoryResponseAminoMsg {
  type: "/intento.intent.v1.QueryFlowHistoryResponse";
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
  typeUrl: "/intento.intent.v1.QueryFlowsRequest";
  value: Uint8Array;
}
/**
 * QueryFlowsRequest is the request type for the Query/FlowsRequest RPC
 * @name QueryFlowsRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowsRequest
 */
export interface QueryFlowsRequestAmino {
  /**
   * Pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryFlowsRequestAminoMsg {
  type: "/intento.intent.v1.QueryFlowsRequest";
  value: QueryFlowsRequestAmino;
}
/** QueryFlowsRequest is the request type for the Query/FlowsRequest RPC */
export interface QueryFlowsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryFlowsResponse the response type for the Query/FlowsRequest RPCπ */
export interface QueryFlowsResponse {
  flows: Flow[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFlowsResponseProtoMsg {
  typeUrl: "/intento.intent.v1.QueryFlowsResponse";
  value: Uint8Array;
}
/**
 * QueryFlowsResponse the response type for the Query/FlowsRequest RPCπ
 * @name QueryFlowsResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowsResponse
 */
export interface QueryFlowsResponseAmino {
  flows?: FlowAmino[];
  /**
   * Pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryFlowsResponseAminoMsg {
  type: "/intento.intent.v1.QueryFlowsResponse";
  value: QueryFlowsResponseAmino;
}
/** QueryFlowsResponse the response type for the Query/FlowsRequest RPCπ */
export interface QueryFlowsResponseSDKType {
  flows: FlowSDKType[];
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
  typeUrl: "/intento.intent.v1.QueryFlowsForOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryFlowsForOwnerRequest is the request type for the
 * Query/FlowsForOwnerRequest RPC
 * @name QueryFlowsForOwnerRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowsForOwnerRequest
 */
export interface QueryFlowsForOwnerRequestAmino {
  owner?: string;
  /**
   * Pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryFlowsForOwnerRequestAminoMsg {
  type: "/intento.intent.v1.QueryFlowsForOwnerRequest";
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
  flows: Flow[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryFlowsForOwnerResponseProtoMsg {
  typeUrl: "/intento.intent.v1.QueryFlowsForOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryFlowsForOwnerResponse the response type for the
 * Query/FlowsForOwnerRequest RPC
 * @name QueryFlowsForOwnerResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryFlowsForOwnerResponse
 */
export interface QueryFlowsForOwnerResponseAmino {
  flows?: FlowAmino[];
  /**
   * Pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryFlowsForOwnerResponseAminoMsg {
  type: "/intento.intent.v1.QueryFlowsForOwnerResponse";
  value: QueryFlowsForOwnerResponseAmino;
}
/**
 * QueryFlowsForOwnerResponse the response type for the
 * Query/FlowsForOwnerRequest RPC
 */
export interface QueryFlowsForOwnerResponseSDKType {
  flows: FlowSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/intento.intent.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/intento.intent.v1.QueryParamsRequest";
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
  typeUrl: "/intento.intent.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/intento.intent.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryTrustlessAgent is the request type for the Query/Params RPC method. */
export interface QueryTrustlessAgentRequest {
  agentAddress: string;
}
export interface QueryTrustlessAgentRequestProtoMsg {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentRequest";
  value: Uint8Array;
}
/**
 * QueryTrustlessAgent is the request type for the Query/Params RPC method.
 * @name QueryTrustlessAgentRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryTrustlessAgentRequest
 */
export interface QueryTrustlessAgentRequestAmino {
  agent_address?: string;
}
export interface QueryTrustlessAgentRequestAminoMsg {
  type: "/intento.intent.v1.QueryTrustlessAgentRequest";
  value: QueryTrustlessAgentRequestAmino;
}
/** QueryTrustlessAgent is the request type for the Query/Params RPC method. */
export interface QueryTrustlessAgentRequestSDKType {
  agent_address: string;
}
/**
 * QueryTrustlessAgentResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 */
export interface QueryTrustlessAgentResponse {
  /** TrustlessAgent */
  trustlessAgent: TrustlessAgent;
}
export interface QueryTrustlessAgentResponseProtoMsg {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentResponse";
  value: Uint8Array;
}
/**
 * QueryTrustlessAgentResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 * @name QueryTrustlessAgentResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryTrustlessAgentResponse
 */
export interface QueryTrustlessAgentResponseAmino {
  /**
   * TrustlessAgent
   */
  trustless_agent?: TrustlessAgentAmino;
}
export interface QueryTrustlessAgentResponseAminoMsg {
  type: "/intento.intent.v1.QueryTrustlessAgentResponse";
  value: QueryTrustlessAgentResponseAmino;
}
/**
 * QueryTrustlessAgentResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 */
export interface QueryTrustlessAgentResponseSDKType {
  trustless_agent: TrustlessAgentSDKType;
}
/**
 * QueryTrustlessAgents is the request type for the Query/TrustlessAgent RPC
 * method.
 */
export interface QueryTrustlessAgentsRequest {
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTrustlessAgentsRequestProtoMsg {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsRequest";
  value: Uint8Array;
}
/**
 * QueryTrustlessAgents is the request type for the Query/TrustlessAgent RPC
 * method.
 * @name QueryTrustlessAgentsRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryTrustlessAgentsRequest
 */
export interface QueryTrustlessAgentsRequestAmino {
  /**
   * Pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryTrustlessAgentsRequestAminoMsg {
  type: "/intento.intent.v1.QueryTrustlessAgentsRequest";
  value: QueryTrustlessAgentsRequestAmino;
}
/**
 * QueryTrustlessAgents is the request type for the Query/TrustlessAgent RPC
 * method.
 */
export interface QueryTrustlessAgentsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryTrustlessAgentsResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 */
export interface QueryTrustlessAgentsResponse {
  /** TrustlessAgents */
  trustlessAgents: TrustlessAgent[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryTrustlessAgentsResponseProtoMsg {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsResponse";
  value: Uint8Array;
}
/**
 * QueryTrustlessAgentsResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 * @name QueryTrustlessAgentsResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryTrustlessAgentsResponse
 */
export interface QueryTrustlessAgentsResponseAmino {
  /**
   * TrustlessAgents
   */
  trustless_agents?: TrustlessAgentAmino[];
  /**
   * Pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryTrustlessAgentsResponseAminoMsg {
  type: "/intento.intent.v1.QueryTrustlessAgentsResponse";
  value: QueryTrustlessAgentsResponseAmino;
}
/**
 * QueryTrustlessAgentsResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 */
export interface QueryTrustlessAgentsResponseSDKType {
  trustless_agents: TrustlessAgentSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryTrustlessAgentsByFeeAdminRequest */
export interface QueryTrustlessAgentsByFeeAdminRequest {
  feeAdmin: string;
  /** Pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryTrustlessAgentsByFeeAdminRequestProtoMsg {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminRequest";
  value: Uint8Array;
}
/**
 * QueryTrustlessAgentsByFeeAdminRequest
 * @name QueryTrustlessAgentsByFeeAdminRequestAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryTrustlessAgentsByFeeAdminRequest
 */
export interface QueryTrustlessAgentsByFeeAdminRequestAmino {
  fee_admin?: string;
  /**
   * Pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryTrustlessAgentsByFeeAdminRequestAminoMsg {
  type: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminRequest";
  value: QueryTrustlessAgentsByFeeAdminRequestAmino;
}
/** QueryTrustlessAgentsByFeeAdminRequest */
export interface QueryTrustlessAgentsByFeeAdminRequestSDKType {
  fee_admin: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryTrustlessAgentResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 */
export interface QueryTrustlessAgentsByFeeAdminResponse {
  /** TrustlessAgents */
  trustlessAgents: TrustlessAgent[];
  /** Pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryTrustlessAgentsByFeeAdminResponseProtoMsg {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminResponse";
  value: Uint8Array;
}
/**
 * QueryTrustlessAgentResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 * @name QueryTrustlessAgentsByFeeAdminResponseAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.QueryTrustlessAgentsByFeeAdminResponse
 */
export interface QueryTrustlessAgentsByFeeAdminResponseAmino {
  /**
   * TrustlessAgents
   */
  trustless_agents?: TrustlessAgentAmino[];
  /**
   * Pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryTrustlessAgentsByFeeAdminResponseAminoMsg {
  type: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminResponse";
  value: QueryTrustlessAgentsByFeeAdminResponseAmino;
}
/**
 * QueryTrustlessAgentResponse is the response type for the Query/TrustlessAgent
 * RPC method.
 */
export interface QueryTrustlessAgentsByFeeAdminResponseSDKType {
  trustless_agents: TrustlessAgentSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryInterchainAccountFromAddressRequest(): QueryInterchainAccountFromAddressRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
export const QueryInterchainAccountFromAddressRequest = {
  typeUrl: "/intento.intent.v1.QueryInterchainAccountFromAddressRequest",
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
      typeUrl: "/intento.intent.v1.QueryInterchainAccountFromAddressRequest",
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
  typeUrl: "/intento.intent.v1.QueryInterchainAccountFromAddressResponse",
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
      typeUrl: "/intento.intent.v1.QueryInterchainAccountFromAddressResponse",
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
  typeUrl: "/intento.intent.v1.QueryFlowRequest",
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
      typeUrl: "/intento.intent.v1.QueryFlowRequest",
      value: QueryFlowRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowRequest.typeUrl, QueryFlowRequest);
function createBaseQueryFlowResponse(): QueryFlowResponse {
  return {
    flow: Flow.fromPartial({})
  };
}
export const QueryFlowResponse = {
  typeUrl: "/intento.intent.v1.QueryFlowResponse",
  is(o: any): o is QueryFlowResponse {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || Flow.is(o.flow));
  },
  isSDK(o: any): o is QueryFlowResponseSDKType {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || Flow.isSDK(o.flow));
  },
  isAmino(o: any): o is QueryFlowResponseAmino {
    return o && (o.$typeUrl === QueryFlowResponse.typeUrl || Flow.isAmino(o.flow));
  },
  encode(message: QueryFlowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flow !== undefined) {
      Flow.encode(message.flow, writer.uint32(10).fork()).ldelim();
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
          message.flow = Flow.decode(reader, reader.uint32());
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
      flow: isSet(object.flow) ? Flow.fromJSON(object.flow) : undefined
    };
  },
  toJSON(message: QueryFlowResponse): JsonSafe<QueryFlowResponse> {
    const obj: any = {};
    message.flow !== undefined && (obj.flow = message.flow ? Flow.toJSON(message.flow) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowResponse>): QueryFlowResponse {
    const message = createBaseQueryFlowResponse();
    message.flow = object.flow !== undefined && object.flow !== null ? Flow.fromPartial(object.flow) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowResponseAmino): QueryFlowResponse {
    const message = createBaseQueryFlowResponse();
    if (object.flow !== undefined && object.flow !== null) {
      message.flow = Flow.fromAmino(object.flow);
    }
    return message;
  },
  toAmino(message: QueryFlowResponse): QueryFlowResponseAmino {
    const obj: any = {};
    obj.flow = message.flow ? Flow.toAmino(message.flow) : undefined;
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
      typeUrl: "/intento.intent.v1.QueryFlowResponse",
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
  typeUrl: "/intento.intent.v1.QueryFlowHistoryRequest",
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
      typeUrl: "/intento.intent.v1.QueryFlowHistoryRequest",
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
  typeUrl: "/intento.intent.v1.QueryFlowHistoryResponse",
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
      typeUrl: "/intento.intent.v1.QueryFlowHistoryResponse",
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
  typeUrl: "/intento.intent.v1.QueryFlowsRequest",
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
      typeUrl: "/intento.intent.v1.QueryFlowsRequest",
      value: QueryFlowsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsRequest.typeUrl, QueryFlowsRequest);
function createBaseQueryFlowsResponse(): QueryFlowsResponse {
  return {
    flows: [],
    pagination: undefined
  };
}
export const QueryFlowsResponse = {
  typeUrl: "/intento.intent.v1.QueryFlowsResponse",
  is(o: any): o is QueryFlowsResponse {
    return o && (o.$typeUrl === QueryFlowsResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || Flow.is(o.flows[0])));
  },
  isSDK(o: any): o is QueryFlowsResponseSDKType {
    return o && (o.$typeUrl === QueryFlowsResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || Flow.isSDK(o.flows[0])));
  },
  isAmino(o: any): o is QueryFlowsResponseAmino {
    return o && (o.$typeUrl === QueryFlowsResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || Flow.isAmino(o.flows[0])));
  },
  encode(message: QueryFlowsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flows) {
      Flow.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.flows.push(Flow.decode(reader, reader.uint32()));
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
      flows: Array.isArray(object?.flows) ? object.flows.map((e: any) => Flow.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowsResponse): JsonSafe<QueryFlowsResponse> {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? Flow.toJSON(e) : undefined);
    } else {
      obj.flows = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowsResponse>): QueryFlowsResponse {
    const message = createBaseQueryFlowsResponse();
    message.flows = object.flows?.map(e => Flow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowsResponseAmino): QueryFlowsResponse {
    const message = createBaseQueryFlowsResponse();
    message.flows = object.flows?.map(e => Flow.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowsResponse): QueryFlowsResponseAmino {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? Flow.toAmino(e) : undefined);
    } else {
      obj.flows = message.flows;
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
      typeUrl: "/intento.intent.v1.QueryFlowsResponse",
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
  typeUrl: "/intento.intent.v1.QueryFlowsForOwnerRequest",
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
      typeUrl: "/intento.intent.v1.QueryFlowsForOwnerRequest",
      value: QueryFlowsForOwnerRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsForOwnerRequest.typeUrl, QueryFlowsForOwnerRequest);
function createBaseQueryFlowsForOwnerResponse(): QueryFlowsForOwnerResponse {
  return {
    flows: [],
    pagination: undefined
  };
}
export const QueryFlowsForOwnerResponse = {
  typeUrl: "/intento.intent.v1.QueryFlowsForOwnerResponse",
  is(o: any): o is QueryFlowsForOwnerResponse {
    return o && (o.$typeUrl === QueryFlowsForOwnerResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || Flow.is(o.flows[0])));
  },
  isSDK(o: any): o is QueryFlowsForOwnerResponseSDKType {
    return o && (o.$typeUrl === QueryFlowsForOwnerResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || Flow.isSDK(o.flows[0])));
  },
  isAmino(o: any): o is QueryFlowsForOwnerResponseAmino {
    return o && (o.$typeUrl === QueryFlowsForOwnerResponse.typeUrl || Array.isArray(o.flows) && (!o.flows.length || Flow.isAmino(o.flows[0])));
  },
  encode(message: QueryFlowsForOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.flows) {
      Flow.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.flows.push(Flow.decode(reader, reader.uint32()));
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
      flows: Array.isArray(object?.flows) ? object.flows.map((e: any) => Flow.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryFlowsForOwnerResponse): JsonSafe<QueryFlowsForOwnerResponse> {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? Flow.toJSON(e) : undefined);
    } else {
      obj.flows = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlowsForOwnerResponse>): QueryFlowsForOwnerResponse {
    const message = createBaseQueryFlowsForOwnerResponse();
    message.flows = object.flows?.map(e => Flow.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFlowsForOwnerResponseAmino): QueryFlowsForOwnerResponse {
    const message = createBaseQueryFlowsForOwnerResponse();
    message.flows = object.flows?.map(e => Flow.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFlowsForOwnerResponse): QueryFlowsForOwnerResponseAmino {
    const obj: any = {};
    if (message.flows) {
      obj.flows = message.flows.map(e => e ? Flow.toAmino(e) : undefined);
    } else {
      obj.flows = message.flows;
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
      typeUrl: "/intento.intent.v1.QueryFlowsForOwnerResponse",
      value: QueryFlowsForOwnerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFlowsForOwnerResponse.typeUrl, QueryFlowsForOwnerResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/intento.intent.v1.QueryParamsRequest",
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
      typeUrl: "/intento.intent.v1.QueryParamsRequest",
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
  typeUrl: "/intento.intent.v1.QueryParamsResponse",
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
      typeUrl: "/intento.intent.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryTrustlessAgentRequest(): QueryTrustlessAgentRequest {
  return {
    agentAddress: ""
  };
}
export const QueryTrustlessAgentRequest = {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentRequest",
  is(o: any): o is QueryTrustlessAgentRequest {
    return o && (o.$typeUrl === QueryTrustlessAgentRequest.typeUrl || typeof o.agentAddress === "string");
  },
  isSDK(o: any): o is QueryTrustlessAgentRequestSDKType {
    return o && (o.$typeUrl === QueryTrustlessAgentRequest.typeUrl || typeof o.agent_address === "string");
  },
  isAmino(o: any): o is QueryTrustlessAgentRequestAmino {
    return o && (o.$typeUrl === QueryTrustlessAgentRequest.typeUrl || typeof o.agent_address === "string");
  },
  encode(message: QueryTrustlessAgentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agentAddress !== "") {
      writer.uint32(10).string(message.agentAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrustlessAgentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrustlessAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTrustlessAgentRequest {
    return {
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : ""
    };
  },
  toJSON(message: QueryTrustlessAgentRequest): JsonSafe<QueryTrustlessAgentRequest> {
    const obj: any = {};
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryTrustlessAgentRequest>): QueryTrustlessAgentRequest {
    const message = createBaseQueryTrustlessAgentRequest();
    message.agentAddress = object.agentAddress ?? "";
    return message;
  },
  fromAmino(object: QueryTrustlessAgentRequestAmino): QueryTrustlessAgentRequest {
    const message = createBaseQueryTrustlessAgentRequest();
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    return message;
  },
  toAmino(message: QueryTrustlessAgentRequest): QueryTrustlessAgentRequestAmino {
    const obj: any = {};
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    return obj;
  },
  fromAminoMsg(object: QueryTrustlessAgentRequestAminoMsg): QueryTrustlessAgentRequest {
    return QueryTrustlessAgentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrustlessAgentRequestProtoMsg): QueryTrustlessAgentRequest {
    return QueryTrustlessAgentRequest.decode(message.value);
  },
  toProto(message: QueryTrustlessAgentRequest): Uint8Array {
    return QueryTrustlessAgentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTrustlessAgentRequest): QueryTrustlessAgentRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.QueryTrustlessAgentRequest",
      value: QueryTrustlessAgentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTrustlessAgentRequest.typeUrl, QueryTrustlessAgentRequest);
function createBaseQueryTrustlessAgentResponse(): QueryTrustlessAgentResponse {
  return {
    trustlessAgent: TrustlessAgent.fromPartial({})
  };
}
export const QueryTrustlessAgentResponse = {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentResponse",
  is(o: any): o is QueryTrustlessAgentResponse {
    return o && (o.$typeUrl === QueryTrustlessAgentResponse.typeUrl || TrustlessAgent.is(o.trustlessAgent));
  },
  isSDK(o: any): o is QueryTrustlessAgentResponseSDKType {
    return o && (o.$typeUrl === QueryTrustlessAgentResponse.typeUrl || TrustlessAgent.isSDK(o.trustless_agent));
  },
  isAmino(o: any): o is QueryTrustlessAgentResponseAmino {
    return o && (o.$typeUrl === QueryTrustlessAgentResponse.typeUrl || TrustlessAgent.isAmino(o.trustless_agent));
  },
  encode(message: QueryTrustlessAgentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trustlessAgent !== undefined) {
      TrustlessAgent.encode(message.trustlessAgent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrustlessAgentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrustlessAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trustlessAgent = TrustlessAgent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTrustlessAgentResponse {
    return {
      trustlessAgent: isSet(object.trustlessAgent) ? TrustlessAgent.fromJSON(object.trustlessAgent) : undefined
    };
  },
  toJSON(message: QueryTrustlessAgentResponse): JsonSafe<QueryTrustlessAgentResponse> {
    const obj: any = {};
    message.trustlessAgent !== undefined && (obj.trustlessAgent = message.trustlessAgent ? TrustlessAgent.toJSON(message.trustlessAgent) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTrustlessAgentResponse>): QueryTrustlessAgentResponse {
    const message = createBaseQueryTrustlessAgentResponse();
    message.trustlessAgent = object.trustlessAgent !== undefined && object.trustlessAgent !== null ? TrustlessAgent.fromPartial(object.trustlessAgent) : undefined;
    return message;
  },
  fromAmino(object: QueryTrustlessAgentResponseAmino): QueryTrustlessAgentResponse {
    const message = createBaseQueryTrustlessAgentResponse();
    if (object.trustless_agent !== undefined && object.trustless_agent !== null) {
      message.trustlessAgent = TrustlessAgent.fromAmino(object.trustless_agent);
    }
    return message;
  },
  toAmino(message: QueryTrustlessAgentResponse): QueryTrustlessAgentResponseAmino {
    const obj: any = {};
    obj.trustless_agent = message.trustlessAgent ? TrustlessAgent.toAmino(message.trustlessAgent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrustlessAgentResponseAminoMsg): QueryTrustlessAgentResponse {
    return QueryTrustlessAgentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrustlessAgentResponseProtoMsg): QueryTrustlessAgentResponse {
    return QueryTrustlessAgentResponse.decode(message.value);
  },
  toProto(message: QueryTrustlessAgentResponse): Uint8Array {
    return QueryTrustlessAgentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTrustlessAgentResponse): QueryTrustlessAgentResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.QueryTrustlessAgentResponse",
      value: QueryTrustlessAgentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTrustlessAgentResponse.typeUrl, QueryTrustlessAgentResponse);
function createBaseQueryTrustlessAgentsRequest(): QueryTrustlessAgentsRequest {
  return {
    pagination: undefined
  };
}
export const QueryTrustlessAgentsRequest = {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsRequest",
  is(o: any): o is QueryTrustlessAgentsRequest {
    return o && o.$typeUrl === QueryTrustlessAgentsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTrustlessAgentsRequestSDKType {
    return o && o.$typeUrl === QueryTrustlessAgentsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTrustlessAgentsRequestAmino {
    return o && o.$typeUrl === QueryTrustlessAgentsRequest.typeUrl;
  },
  encode(message: QueryTrustlessAgentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrustlessAgentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrustlessAgentsRequest();
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
  fromJSON(object: any): QueryTrustlessAgentsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTrustlessAgentsRequest): JsonSafe<QueryTrustlessAgentsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTrustlessAgentsRequest>): QueryTrustlessAgentsRequest {
    const message = createBaseQueryTrustlessAgentsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTrustlessAgentsRequestAmino): QueryTrustlessAgentsRequest {
    const message = createBaseQueryTrustlessAgentsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTrustlessAgentsRequest): QueryTrustlessAgentsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrustlessAgentsRequestAminoMsg): QueryTrustlessAgentsRequest {
    return QueryTrustlessAgentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrustlessAgentsRequestProtoMsg): QueryTrustlessAgentsRequest {
    return QueryTrustlessAgentsRequest.decode(message.value);
  },
  toProto(message: QueryTrustlessAgentsRequest): Uint8Array {
    return QueryTrustlessAgentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTrustlessAgentsRequest): QueryTrustlessAgentsRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.QueryTrustlessAgentsRequest",
      value: QueryTrustlessAgentsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTrustlessAgentsRequest.typeUrl, QueryTrustlessAgentsRequest);
function createBaseQueryTrustlessAgentsResponse(): QueryTrustlessAgentsResponse {
  return {
    trustlessAgents: [],
    pagination: undefined
  };
}
export const QueryTrustlessAgentsResponse = {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsResponse",
  is(o: any): o is QueryTrustlessAgentsResponse {
    return o && (o.$typeUrl === QueryTrustlessAgentsResponse.typeUrl || Array.isArray(o.trustlessAgents) && (!o.trustlessAgents.length || TrustlessAgent.is(o.trustlessAgents[0])));
  },
  isSDK(o: any): o is QueryTrustlessAgentsResponseSDKType {
    return o && (o.$typeUrl === QueryTrustlessAgentsResponse.typeUrl || Array.isArray(o.trustless_agents) && (!o.trustless_agents.length || TrustlessAgent.isSDK(o.trustless_agents[0])));
  },
  isAmino(o: any): o is QueryTrustlessAgentsResponseAmino {
    return o && (o.$typeUrl === QueryTrustlessAgentsResponse.typeUrl || Array.isArray(o.trustless_agents) && (!o.trustless_agents.length || TrustlessAgent.isAmino(o.trustless_agents[0])));
  },
  encode(message: QueryTrustlessAgentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.trustlessAgents) {
      TrustlessAgent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrustlessAgentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrustlessAgentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trustlessAgents.push(TrustlessAgent.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryTrustlessAgentsResponse {
    return {
      trustlessAgents: Array.isArray(object?.trustlessAgents) ? object.trustlessAgents.map((e: any) => TrustlessAgent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTrustlessAgentsResponse): JsonSafe<QueryTrustlessAgentsResponse> {
    const obj: any = {};
    if (message.trustlessAgents) {
      obj.trustlessAgents = message.trustlessAgents.map(e => e ? TrustlessAgent.toJSON(e) : undefined);
    } else {
      obj.trustlessAgents = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTrustlessAgentsResponse>): QueryTrustlessAgentsResponse {
    const message = createBaseQueryTrustlessAgentsResponse();
    message.trustlessAgents = object.trustlessAgents?.map(e => TrustlessAgent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTrustlessAgentsResponseAmino): QueryTrustlessAgentsResponse {
    const message = createBaseQueryTrustlessAgentsResponse();
    message.trustlessAgents = object.trustless_agents?.map(e => TrustlessAgent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTrustlessAgentsResponse): QueryTrustlessAgentsResponseAmino {
    const obj: any = {};
    if (message.trustlessAgents) {
      obj.trustless_agents = message.trustlessAgents.map(e => e ? TrustlessAgent.toAmino(e) : undefined);
    } else {
      obj.trustless_agents = message.trustlessAgents;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrustlessAgentsResponseAminoMsg): QueryTrustlessAgentsResponse {
    return QueryTrustlessAgentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrustlessAgentsResponseProtoMsg): QueryTrustlessAgentsResponse {
    return QueryTrustlessAgentsResponse.decode(message.value);
  },
  toProto(message: QueryTrustlessAgentsResponse): Uint8Array {
    return QueryTrustlessAgentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTrustlessAgentsResponse): QueryTrustlessAgentsResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.QueryTrustlessAgentsResponse",
      value: QueryTrustlessAgentsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTrustlessAgentsResponse.typeUrl, QueryTrustlessAgentsResponse);
function createBaseQueryTrustlessAgentsByFeeAdminRequest(): QueryTrustlessAgentsByFeeAdminRequest {
  return {
    feeAdmin: "",
    pagination: undefined
  };
}
export const QueryTrustlessAgentsByFeeAdminRequest = {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminRequest",
  is(o: any): o is QueryTrustlessAgentsByFeeAdminRequest {
    return o && (o.$typeUrl === QueryTrustlessAgentsByFeeAdminRequest.typeUrl || typeof o.feeAdmin === "string");
  },
  isSDK(o: any): o is QueryTrustlessAgentsByFeeAdminRequestSDKType {
    return o && (o.$typeUrl === QueryTrustlessAgentsByFeeAdminRequest.typeUrl || typeof o.fee_admin === "string");
  },
  isAmino(o: any): o is QueryTrustlessAgentsByFeeAdminRequestAmino {
    return o && (o.$typeUrl === QueryTrustlessAgentsByFeeAdminRequest.typeUrl || typeof o.fee_admin === "string");
  },
  encode(message: QueryTrustlessAgentsByFeeAdminRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeAdmin !== "") {
      writer.uint32(10).string(message.feeAdmin);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrustlessAgentsByFeeAdminRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrustlessAgentsByFeeAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeAdmin = reader.string();
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
  fromJSON(object: any): QueryTrustlessAgentsByFeeAdminRequest {
    return {
      feeAdmin: isSet(object.feeAdmin) ? String(object.feeAdmin) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTrustlessAgentsByFeeAdminRequest): JsonSafe<QueryTrustlessAgentsByFeeAdminRequest> {
    const obj: any = {};
    message.feeAdmin !== undefined && (obj.feeAdmin = message.feeAdmin);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTrustlessAgentsByFeeAdminRequest>): QueryTrustlessAgentsByFeeAdminRequest {
    const message = createBaseQueryTrustlessAgentsByFeeAdminRequest();
    message.feeAdmin = object.feeAdmin ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTrustlessAgentsByFeeAdminRequestAmino): QueryTrustlessAgentsByFeeAdminRequest {
    const message = createBaseQueryTrustlessAgentsByFeeAdminRequest();
    if (object.fee_admin !== undefined && object.fee_admin !== null) {
      message.feeAdmin = object.fee_admin;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTrustlessAgentsByFeeAdminRequest): QueryTrustlessAgentsByFeeAdminRequestAmino {
    const obj: any = {};
    obj.fee_admin = message.feeAdmin === "" ? undefined : message.feeAdmin;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrustlessAgentsByFeeAdminRequestAminoMsg): QueryTrustlessAgentsByFeeAdminRequest {
    return QueryTrustlessAgentsByFeeAdminRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrustlessAgentsByFeeAdminRequestProtoMsg): QueryTrustlessAgentsByFeeAdminRequest {
    return QueryTrustlessAgentsByFeeAdminRequest.decode(message.value);
  },
  toProto(message: QueryTrustlessAgentsByFeeAdminRequest): Uint8Array {
    return QueryTrustlessAgentsByFeeAdminRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTrustlessAgentsByFeeAdminRequest): QueryTrustlessAgentsByFeeAdminRequestProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminRequest",
      value: QueryTrustlessAgentsByFeeAdminRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTrustlessAgentsByFeeAdminRequest.typeUrl, QueryTrustlessAgentsByFeeAdminRequest);
function createBaseQueryTrustlessAgentsByFeeAdminResponse(): QueryTrustlessAgentsByFeeAdminResponse {
  return {
    trustlessAgents: [],
    pagination: undefined
  };
}
export const QueryTrustlessAgentsByFeeAdminResponse = {
  typeUrl: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminResponse",
  is(o: any): o is QueryTrustlessAgentsByFeeAdminResponse {
    return o && (o.$typeUrl === QueryTrustlessAgentsByFeeAdminResponse.typeUrl || Array.isArray(o.trustlessAgents) && (!o.trustlessAgents.length || TrustlessAgent.is(o.trustlessAgents[0])));
  },
  isSDK(o: any): o is QueryTrustlessAgentsByFeeAdminResponseSDKType {
    return o && (o.$typeUrl === QueryTrustlessAgentsByFeeAdminResponse.typeUrl || Array.isArray(o.trustless_agents) && (!o.trustless_agents.length || TrustlessAgent.isSDK(o.trustless_agents[0])));
  },
  isAmino(o: any): o is QueryTrustlessAgentsByFeeAdminResponseAmino {
    return o && (o.$typeUrl === QueryTrustlessAgentsByFeeAdminResponse.typeUrl || Array.isArray(o.trustless_agents) && (!o.trustless_agents.length || TrustlessAgent.isAmino(o.trustless_agents[0])));
  },
  encode(message: QueryTrustlessAgentsByFeeAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.trustlessAgents) {
      TrustlessAgent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTrustlessAgentsByFeeAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTrustlessAgentsByFeeAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trustlessAgents.push(TrustlessAgent.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryTrustlessAgentsByFeeAdminResponse {
    return {
      trustlessAgents: Array.isArray(object?.trustlessAgents) ? object.trustlessAgents.map((e: any) => TrustlessAgent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryTrustlessAgentsByFeeAdminResponse): JsonSafe<QueryTrustlessAgentsByFeeAdminResponse> {
    const obj: any = {};
    if (message.trustlessAgents) {
      obj.trustlessAgents = message.trustlessAgents.map(e => e ? TrustlessAgent.toJSON(e) : undefined);
    } else {
      obj.trustlessAgents = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTrustlessAgentsByFeeAdminResponse>): QueryTrustlessAgentsByFeeAdminResponse {
    const message = createBaseQueryTrustlessAgentsByFeeAdminResponse();
    message.trustlessAgents = object.trustlessAgents?.map(e => TrustlessAgent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTrustlessAgentsByFeeAdminResponseAmino): QueryTrustlessAgentsByFeeAdminResponse {
    const message = createBaseQueryTrustlessAgentsByFeeAdminResponse();
    message.trustlessAgents = object.trustless_agents?.map(e => TrustlessAgent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTrustlessAgentsByFeeAdminResponse): QueryTrustlessAgentsByFeeAdminResponseAmino {
    const obj: any = {};
    if (message.trustlessAgents) {
      obj.trustless_agents = message.trustlessAgents.map(e => e ? TrustlessAgent.toAmino(e) : undefined);
    } else {
      obj.trustless_agents = message.trustlessAgents;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTrustlessAgentsByFeeAdminResponseAminoMsg): QueryTrustlessAgentsByFeeAdminResponse {
    return QueryTrustlessAgentsByFeeAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTrustlessAgentsByFeeAdminResponseProtoMsg): QueryTrustlessAgentsByFeeAdminResponse {
    return QueryTrustlessAgentsByFeeAdminResponse.decode(message.value);
  },
  toProto(message: QueryTrustlessAgentsByFeeAdminResponse): Uint8Array {
    return QueryTrustlessAgentsByFeeAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTrustlessAgentsByFeeAdminResponse): QueryTrustlessAgentsByFeeAdminResponseProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.QueryTrustlessAgentsByFeeAdminResponse",
      value: QueryTrustlessAgentsByFeeAdminResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTrustlessAgentsByFeeAdminResponse.typeUrl, QueryTrustlessAgentsByFeeAdminResponse);