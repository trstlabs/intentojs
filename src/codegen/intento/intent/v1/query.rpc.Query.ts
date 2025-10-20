import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryFlowRequest, QueryFlowResponse, QueryFlowHistoryRequest, QueryFlowHistoryResponse, QueryFlowsRequest, QueryFlowsResponse, QueryFlowsForOwnerRequest, QueryFlowsForOwnerResponse, QueryTrustlessAgentRequest, QueryTrustlessAgentResponse, QueryTrustlessAgentsRequest, QueryTrustlessAgentsResponse, QueryTrustlessAgentsByFeeAdminRequest, QueryTrustlessAgentsByFeeAdminResponse, QueryParamsRequest, QueryParamsResponse, QueryTotalBurntRequest, QueryTotalBurntResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * QueryInterchainAccountFromAddress returns the interchain account for given
   * owner address on a given connection pair
   */
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
  /** Flow returns the auto-executing interchain account tx */
  flow(request: QueryFlowRequest): Promise<QueryFlowResponse>;
  /** FlowHistory returns the flow history */
  flowHistory(request: QueryFlowHistoryRequest): Promise<QueryFlowHistoryResponse>;
  /** Flows returns the all flows */
  flows(request?: QueryFlowsRequest): Promise<QueryFlowsResponse>;
  /** FlowsForOwner returns all flows for a given owner */
  flowsForOwner(request: QueryFlowsForOwnerRequest): Promise<QueryFlowsForOwnerResponse>;
  /** TrustlessAgent returns the trustless agent information for a given hosted address */
  trustlessAgent(request: QueryTrustlessAgentRequest): Promise<QueryTrustlessAgentResponse>;
  /** TrustlessAgents returns all trustless agents */
  trustlessAgents(request?: QueryTrustlessAgentsRequest): Promise<QueryTrustlessAgentsResponse>;
  /** TrustlessAgentsByFeeAdmin returns all trustless agents for a given fee admin address */
  trustlessAgentsByFeeAdmin(request: QueryTrustlessAgentsByFeeAdminRequest): Promise<QueryTrustlessAgentsByFeeAdminResponse>;
  /** Params returns the total set of Intent parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** TotalBurnt returns the total amount of coins that have been burnt */
  totalBurnt(request?: QueryTotalBurntRequest): Promise<QueryTotalBurntResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.flow = this.flow.bind(this);
    this.flowHistory = this.flowHistory.bind(this);
    this.flows = this.flows.bind(this);
    this.flowsForOwner = this.flowsForOwner.bind(this);
    this.trustlessAgent = this.trustlessAgent.bind(this);
    this.trustlessAgents = this.trustlessAgents.bind(this);
    this.trustlessAgentsByFeeAdmin = this.trustlessAgentsByFeeAdmin.bind(this);
    this.params = this.params.bind(this);
    this.totalBurnt = this.totalBurnt.bind(this);
  }
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new BinaryReader(data)));
  }
  flow(request: QueryFlowRequest): Promise<QueryFlowResponse> {
    const data = QueryFlowRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "Flow", data);
    return promise.then(data => QueryFlowResponse.decode(new BinaryReader(data)));
  }
  flowHistory(request: QueryFlowHistoryRequest): Promise<QueryFlowHistoryResponse> {
    const data = QueryFlowHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "FlowHistory", data);
    return promise.then(data => QueryFlowHistoryResponse.decode(new BinaryReader(data)));
  }
  flows(request: QueryFlowsRequest = {
    pagination: undefined
  }): Promise<QueryFlowsResponse> {
    const data = QueryFlowsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "Flows", data);
    return promise.then(data => QueryFlowsResponse.decode(new BinaryReader(data)));
  }
  flowsForOwner(request: QueryFlowsForOwnerRequest): Promise<QueryFlowsForOwnerResponse> {
    const data = QueryFlowsForOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "FlowsForOwner", data);
    return promise.then(data => QueryFlowsForOwnerResponse.decode(new BinaryReader(data)));
  }
  trustlessAgent(request: QueryTrustlessAgentRequest): Promise<QueryTrustlessAgentResponse> {
    const data = QueryTrustlessAgentRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "TrustlessAgent", data);
    return promise.then(data => QueryTrustlessAgentResponse.decode(new BinaryReader(data)));
  }
  trustlessAgents(request: QueryTrustlessAgentsRequest = {
    pagination: undefined
  }): Promise<QueryTrustlessAgentsResponse> {
    const data = QueryTrustlessAgentsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "TrustlessAgents", data);
    return promise.then(data => QueryTrustlessAgentsResponse.decode(new BinaryReader(data)));
  }
  trustlessAgentsByFeeAdmin(request: QueryTrustlessAgentsByFeeAdminRequest): Promise<QueryTrustlessAgentsByFeeAdminResponse> {
    const data = QueryTrustlessAgentsByFeeAdminRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "TrustlessAgentsByFeeAdmin", data);
    return promise.then(data => QueryTrustlessAgentsByFeeAdminResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  totalBurnt(request: QueryTotalBurntRequest = {}): Promise<QueryTotalBurntResponse> {
    const data = QueryTotalBurntRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Query", "TotalBurnt", data);
    return promise.then(data => QueryTotalBurntResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
      return queryService.interchainAccountFromAddress(request);
    },
    flow(request: QueryFlowRequest): Promise<QueryFlowResponse> {
      return queryService.flow(request);
    },
    flowHistory(request: QueryFlowHistoryRequest): Promise<QueryFlowHistoryResponse> {
      return queryService.flowHistory(request);
    },
    flows(request?: QueryFlowsRequest): Promise<QueryFlowsResponse> {
      return queryService.flows(request);
    },
    flowsForOwner(request: QueryFlowsForOwnerRequest): Promise<QueryFlowsForOwnerResponse> {
      return queryService.flowsForOwner(request);
    },
    trustlessAgent(request: QueryTrustlessAgentRequest): Promise<QueryTrustlessAgentResponse> {
      return queryService.trustlessAgent(request);
    },
    trustlessAgents(request?: QueryTrustlessAgentsRequest): Promise<QueryTrustlessAgentsResponse> {
      return queryService.trustlessAgents(request);
    },
    trustlessAgentsByFeeAdmin(request: QueryTrustlessAgentsByFeeAdminRequest): Promise<QueryTrustlessAgentsByFeeAdminResponse> {
      return queryService.trustlessAgentsByFeeAdmin(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    totalBurnt(request?: QueryTotalBurntRequest): Promise<QueryTotalBurntResponse> {
      return queryService.totalBurnt(request);
    }
  };
};