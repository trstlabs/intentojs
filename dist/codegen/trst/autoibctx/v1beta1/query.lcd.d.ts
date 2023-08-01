import { LCDClient } from "@cosmology/lcd";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponseSDKType, QueryAutoTxRequest, QueryAutoTxResponseSDKType, QueryAutoTxsRequest, QueryAutoTxsResponseSDKType, QueryAutoTxsForOwnerRequest, QueryAutoTxsForOwnerResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryAutoTxIbcUsageRequest, QueryAutoTxIbcUsageResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    interchainAccountFromAddress(params: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType>;
    autoTx(params: QueryAutoTxRequest): Promise<QueryAutoTxResponseSDKType>;
    autoTxs(params?: QueryAutoTxsRequest): Promise<QueryAutoTxsResponseSDKType>;
    autoTxsForOwner(params: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    autoTxIbcTxUsage(params?: QueryAutoTxIbcUsageRequest): Promise<QueryAutoTxIbcUsageResponseSDKType>;
}
