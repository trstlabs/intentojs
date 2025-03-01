import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryFlowRequest, QueryFlowResponse, QueryFlowHistoryRequest, QueryFlowHistoryResponse, QueryFlowsRequest, QueryFlowsResponse, QueryFlowsForOwnerRequest, QueryFlowsForOwnerResponse, QueryHostedAccountRequest, QueryHostedAccountResponse, QueryHostedAccountsRequest, QueryHostedAccountsResponse, QueryHostedAccountsByAdminRequest, QueryHostedAccountsByAdminResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
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
  /** Flows returns the all auto-executing interchain account messages */
  flows(request?: QueryFlowsRequest): Promise<QueryFlowsResponse>;
  /**
   * FlowsForOwner returns the auto-executing interchain account messages for
   * given owner
   */
  flowsForOwner(request: QueryFlowsForOwnerRequest): Promise<QueryFlowsForOwnerResponse>;
  hostedAccount(request: QueryHostedAccountRequest): Promise<QueryHostedAccountResponse>;
  hostedAccounts(request?: QueryHostedAccountsRequest): Promise<QueryHostedAccountsResponse>;
  hostedAccountsByAdmin(request: QueryHostedAccountsByAdminRequest): Promise<QueryHostedAccountsByAdminResponse>;
  /** Params returns the total set of Intent parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
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
    this.hostedAccount = this.hostedAccount.bind(this);
    this.hostedAccounts = this.hostedAccounts.bind(this);
    this.hostedAccountsByAdmin = this.hostedAccountsByAdmin.bind(this);
    this.params = this.params.bind(this);
  }
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new BinaryReader(data)));
  }
  flow(request: QueryFlowRequest): Promise<QueryFlowResponse> {
    const data = QueryFlowRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "Flow", data);
    return promise.then(data => QueryFlowResponse.decode(new BinaryReader(data)));
  }
  flowHistory(request: QueryFlowHistoryRequest): Promise<QueryFlowHistoryResponse> {
    const data = QueryFlowHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "FlowHistory", data);
    return promise.then(data => QueryFlowHistoryResponse.decode(new BinaryReader(data)));
  }
  flows(request: QueryFlowsRequest = {
    pagination: undefined
  }): Promise<QueryFlowsResponse> {
    const data = QueryFlowsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "Flows", data);
    return promise.then(data => QueryFlowsResponse.decode(new BinaryReader(data)));
  }
  flowsForOwner(request: QueryFlowsForOwnerRequest): Promise<QueryFlowsForOwnerResponse> {
    const data = QueryFlowsForOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "FlowsForOwner", data);
    return promise.then(data => QueryFlowsForOwnerResponse.decode(new BinaryReader(data)));
  }
  hostedAccount(request: QueryHostedAccountRequest): Promise<QueryHostedAccountResponse> {
    const data = QueryHostedAccountRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "HostedAccount", data);
    return promise.then(data => QueryHostedAccountResponse.decode(new BinaryReader(data)));
  }
  hostedAccounts(request: QueryHostedAccountsRequest = {
    pagination: undefined
  }): Promise<QueryHostedAccountsResponse> {
    const data = QueryHostedAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "HostedAccounts", data);
    return promise.then(data => QueryHostedAccountsResponse.decode(new BinaryReader(data)));
  }
  hostedAccountsByAdmin(request: QueryHostedAccountsByAdminRequest): Promise<QueryHostedAccountsByAdminResponse> {
    const data = QueryHostedAccountsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "HostedAccountsByAdmin", data);
    return promise.then(data => QueryHostedAccountsByAdminResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
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
    hostedAccount(request: QueryHostedAccountRequest): Promise<QueryHostedAccountResponse> {
      return queryService.hostedAccount(request);
    },
    hostedAccounts(request?: QueryHostedAccountsRequest): Promise<QueryHostedAccountsResponse> {
      return queryService.hostedAccounts(request);
    },
    hostedAccountsByAdmin(request: QueryHostedAccountsByAdminRequest): Promise<QueryHostedAccountsByAdminResponse> {
      return queryService.hostedAccountsByAdmin(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};