"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.QueryInterchainAccountFromAddressRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "InterchainAccountFromAddress", data);
        return promise.then(data => query_1.QueryInterchainAccountFromAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    autoTx(request) {
        const data = query_1.QueryAutoTxRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTx", data);
        return promise.then(data => query_1.QueryAutoTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    autoTxs(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAutoTxsRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxs", data);
        return promise.then(data => query_1.QueryAutoTxsResponse.decode(new binary_1.BinaryReader(data)));
    }
    autoTxsForOwner(request) {
        const data = query_1.QueryAutoTxsForOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxsForOwner", data);
        return promise.then(data => query_1.QueryAutoTxsForOwnerResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    autoTxIbcTxUsage(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAutoTxIbcUsageRequest.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Query", "AutoTxIbcTxUsage", data);
        return promise.then(data => query_1.QueryAutoTxIbcUsageResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map