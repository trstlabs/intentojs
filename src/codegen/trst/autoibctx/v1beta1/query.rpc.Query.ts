import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryAutoTxRequest, QueryAutoTxResponse, QueryAutoTxsRequest, QueryAutoTxsResponse, QueryAutoTxsForOwnerRequest, QueryAutoTxsForOwnerResponse, QueryParamsRequest, QueryParamsResponse, QueryAutoTxIbcUsageRequest, QueryAutoTxIbcUsageResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * QueryInterchainAccountFromAddress returns the interchain account for given
   * owner address on a given connection pair
   */
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
  /** AutoTx returns the auto-executing interchain account tx */
  autoTx(request: QueryAutoTxRequest): Promise<QueryAutoTxResponse>;
  /** AutoTxs returns the all auto-executing interchain account messages */
  autoTxs(request?: QueryAutoTxsRequest): Promise<QueryAutoTxsResponse>;
  /**
   * AutoTxsForOwner returns the auto-executing interchain account messages for
   * given owner
   */
  autoTxsForOwner(request: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponse>;
  /** Params returns the total set of AutoIbcTx parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** AutoTxIbcTxUsage returns statistics on usage of IBC transactions */
  autoTxIbcTxUsage(request?: QueryAutoTxIbcUsageRequest): Promise<QueryAutoTxIbcUsageResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.autoTx = this.autoTx.bind(this);
    this.autoTxs = this.autoTxs.bind(this);
    this.autoTxsForOwner = this.autoTxsForOwner.bind(this);
    this.params = this.params.bind(this);
    this.autoTxIbcTxUsage = this.autoTxIbcTxUsage.bind(this);
  }
  interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
    const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "InterchainAccountFromAddress", data);
    return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new BinaryReader(data)));
  }
  autoTx(request: QueryAutoTxRequest): Promise<QueryAutoTxResponse> {
    const data = QueryAutoTxRequest.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTx", data);
    return promise.then(data => QueryAutoTxResponse.decode(new BinaryReader(data)));
  }
  autoTxs(request: QueryAutoTxsRequest = {
    pagination: undefined
  }): Promise<QueryAutoTxsResponse> {
    const data = QueryAutoTxsRequest.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxs", data);
    return promise.then(data => QueryAutoTxsResponse.decode(new BinaryReader(data)));
  }
  autoTxsForOwner(request: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponse> {
    const data = QueryAutoTxsForOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxsForOwner", data);
    return promise.then(data => QueryAutoTxsForOwnerResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  autoTxIbcTxUsage(request: QueryAutoTxIbcUsageRequest = {
    pagination: undefined
  }): Promise<QueryAutoTxIbcUsageResponse> {
    const data = QueryAutoTxIbcUsageRequest.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxIbcTxUsage", data);
    return promise.then(data => QueryAutoTxIbcUsageResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse> {
      return queryService.interchainAccountFromAddress(request);
    },
    autoTx(request: QueryAutoTxRequest): Promise<QueryAutoTxResponse> {
      return queryService.autoTx(request);
    },
    autoTxs(request?: QueryAutoTxsRequest): Promise<QueryAutoTxsResponse> {
      return queryService.autoTxs(request);
    },
    autoTxsForOwner(request: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponse> {
      return queryService.autoTxsForOwner(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    autoTxIbcTxUsage(request?: QueryAutoTxIbcUsageRequest): Promise<QueryAutoTxIbcUsageResponse> {
      return queryService.autoTxIbcTxUsage(request);
    }
  };
};