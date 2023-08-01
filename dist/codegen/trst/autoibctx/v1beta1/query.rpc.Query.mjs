import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse, QueryAutoTxRequest, QueryAutoTxResponse, QueryAutoTxsRequest, QueryAutoTxsResponse, QueryAutoTxsForOwnerRequest, QueryAutoTxsForOwnerResponse, QueryParamsRequest, QueryParamsResponse, QueryAutoTxIbcUsageRequest, QueryAutoTxIbcUsageResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
        this.autoTx = this.autoTx.bind(this);
        this.autoTxs = this.autoTxs.bind(this);
        this.autoTxsForOwner = this.autoTxsForOwner.bind(this);
        this.params = this.params.bind(this);
        this.autoTxIbcTxUsage = this.autoTxIbcTxUsage.bind(this);
    }
    interchainAccountFromAddress(request) {
        const data = QueryInterchainAccountFromAddressRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "InterchainAccountFromAddress", data);
        return promise.then(data => QueryInterchainAccountFromAddressResponse.decode(new BinaryReader(data)));
    }
    autoTx(request) {
        const data = QueryAutoTxRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTx", data);
        return promise.then(data => QueryAutoTxResponse.decode(new BinaryReader(data)));
    }
    autoTxs(request = {
        pagination: undefined
    }) {
        const data = QueryAutoTxsRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxs", data);
        return promise.then(data => QueryAutoTxsResponse.decode(new BinaryReader(data)));
    }
    autoTxsForOwner(request) {
        const data = QueryAutoTxsForOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxsForOwner", data);
        return promise.then(data => QueryAutoTxsForOwnerResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    autoTxIbcTxUsage(request = {
        pagination: undefined
    }) {
        const data = QueryAutoTxIbcUsageRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxIbcTxUsage", data);
        return promise.then(data => QueryAutoTxIbcUsageResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        interchainAccountFromAddress(request) {
            return queryService.interchainAccountFromAddress(request);
        },
        autoTx(request) {
            return queryService.autoTx(request);
        },
        autoTxs(request) {
            return queryService.autoTxs(request);
        },
        autoTxsForOwner(request) {
            return queryService.autoTxsForOwner(request);
        },
        params(request) {
            return queryService.params(request);
        },
        autoTxIbcTxUsage(request) {
            return queryService.autoTxIbcTxUsage(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map