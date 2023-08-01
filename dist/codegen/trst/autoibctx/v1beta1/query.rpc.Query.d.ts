import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    autoTx(request: QueryAutoTxRequest): Promise<QueryAutoTxResponse>;
    autoTxs(request?: QueryAutoTxsRequest): Promise<QueryAutoTxsResponse>;
    autoTxsForOwner(request: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    autoTxIbcTxUsage(request?: QueryAutoTxIbcUsageRequest): Promise<QueryAutoTxIbcUsageResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    interchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
    autoTx(request: QueryAutoTxRequest): Promise<QueryAutoTxResponse>;
    autoTxs(request?: QueryAutoTxsRequest): Promise<QueryAutoTxsResponse>;
    autoTxsForOwner(request: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    autoTxIbcTxUsage(request?: QueryAutoTxIbcUsageRequest): Promise<QueryAutoTxIbcUsageResponse>;
};
