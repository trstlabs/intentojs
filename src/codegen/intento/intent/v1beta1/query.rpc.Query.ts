import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryActionRequest, QueryActionResponse, QueryActionHistoryRequest, QueryActionHistoryResponse, QueryActionsRequest, QueryActionsResponse, QueryActionsForOwnerRequest, QueryActionsForOwnerResponse, QueryHostedAccountRequest, QueryHostedAccountResponse, QueryHostedAccountsRequest, QueryHostedAccountsResponse, QueryHostedAccountsByAdminRequest, QueryHostedAccountsByAdminResponse, QueryParamsRequest, QueryParamsResponse, QueryActionIbcUsageRequest, QueryActionIbcUsageResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * QueryInterchainAccountFromAddress returns the interchain account for given
   * owner address on a given connection pair
   */
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
  /** Action returns the auto-executing interchain account tx */
  action(request: QueryActionRequest): Promise<QueryActionResponse>;
  /** ActionHistory returns the auto tx history */
  actionHistory(request: QueryActionHistoryRequest): Promise<QueryActionHistoryResponse>;
  /** Actions returns the all auto-executing interchain account messages */
  actions(request?: QueryActionsRequest): Promise<QueryActionsResponse>;
  /**
   * ActionsForOwner returns the auto-executing interchain account messages for
   * given owner
   */
  actionsForOwner(request: QueryActionsForOwnerRequest): Promise<QueryActionsForOwnerResponse>;
  hostedAccount(request: QueryHostedAccountRequest): Promise<QueryHostedAccountResponse>;
  hostedAccounts(request?: QueryHostedAccountsRequest): Promise<QueryHostedAccountsResponse>;
  hostedAccountsByAdmin(request: QueryHostedAccountsByAdminRequest): Promise<QueryHostedAccountsByAdminResponse>;
  /** Params returns the total set of Intent parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ActionIbcTxUsage returns statistics on usage of IBC transactions */
  actionIbcTxUsage(request?: QueryActionIbcUsageRequest): Promise<QueryActionIbcUsageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.action = this.action.bind(this);
    this.actionHistory = this.actionHistory.bind(this);
    this.actions = this.actions.bind(this);
    this.actionsForOwner = this.actionsForOwner.bind(this);
    this.hostedAccount = this.hostedAccount.bind(this);
    this.hostedAccounts = this.hostedAccounts.bind(this);
    this.hostedAccountsByAdmin = this.hostedAccountsByAdmin.bind(this);
    this.params = this.params.bind(this);
    this.actionIbcTxUsage = this.actionIbcTxUsage.bind(this);
  }
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new BinaryReader(data)));
  }
  action(request: QueryActionRequest): Promise<QueryActionResponse> {
    const data = QueryActionRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "Action", data);
    return promise.then(data => QueryActionResponse.decode(new BinaryReader(data)));
  }
  actionHistory(request: QueryActionHistoryRequest): Promise<QueryActionHistoryResponse> {
    const data = QueryActionHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "ActionHistory", data);
    return promise.then(data => QueryActionHistoryResponse.decode(new BinaryReader(data)));
  }
  actions(request: QueryActionsRequest = {
    pagination: undefined
  }): Promise<QueryActionsResponse> {
    const data = QueryActionsRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "Actions", data);
    return promise.then(data => QueryActionsResponse.decode(new BinaryReader(data)));
  }
  actionsForOwner(request: QueryActionsForOwnerRequest): Promise<QueryActionsForOwnerResponse> {
    const data = QueryActionsForOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "ActionsForOwner", data);
    return promise.then(data => QueryActionsForOwnerResponse.decode(new BinaryReader(data)));
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
  actionIbcTxUsage(request: QueryActionIbcUsageRequest = {
    pagination: undefined
  }): Promise<QueryActionIbcUsageResponse> {
    const data = QueryActionIbcUsageRequest.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Query", "ActionIbcTxUsage", data);
    return promise.then(data => QueryActionIbcUsageResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
      return queryService.interchainAccountFromAddress(request);
    },
    action(request: QueryActionRequest): Promise<QueryActionResponse> {
      return queryService.action(request);
    },
    actionHistory(request: QueryActionHistoryRequest): Promise<QueryActionHistoryResponse> {
      return queryService.actionHistory(request);
    },
    actions(request?: QueryActionsRequest): Promise<QueryActionsResponse> {
      return queryService.actions(request);
    },
    actionsForOwner(request: QueryActionsForOwnerRequest): Promise<QueryActionsForOwnerResponse> {
      return queryService.actionsForOwner(request);
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
    },
    actionIbcTxUsage(request?: QueryActionIbcUsageRequest): Promise<QueryActionIbcUsageResponse> {
      return queryService.actionIbcTxUsage(request);
    }
  };
};