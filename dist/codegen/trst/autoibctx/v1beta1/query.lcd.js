"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
        this.autoTx = this.autoTx.bind(this);
        this.autoTxs = this.autoTxs.bind(this);
        this.autoTxsForOwner = this.autoTxsForOwner.bind(this);
        this.params = this.params.bind(this);
        this.autoTxIbcTxUsage = this.autoTxIbcTxUsage.bind(this);
    }
    /* QueryInterchainAccountFromAddress returns the interchain account for given
     owner address on a given connection pair */
    async interchainAccountFromAddress(params) {
        const options = {
            params: {}
        };
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        if (typeof params?.connectionId !== "undefined") {
            options.params.connection_id = params.connectionId;
        }
        const endpoint = `auto-ibc-tx/v1beta1/address-to-ica`;
        return await this.req.get(endpoint, options);
    }
    /* AutoTx returns the auto-executing interchain account tx */
    async autoTx(params) {
        const endpoint = `auto-ibc-tx/v1beta1/auto-tx/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* AutoTxs returns the all auto-executing interchain account messages */
    async autoTxs(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `auto-ibc-tx/v1beta1/auto-txs`;
        return await this.req.get(endpoint, options);
    }
    /* AutoTxsForOwner returns the auto-executing interchain account messages for
     given owner */
    async autoTxsForOwner(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `auto-ibc-tx/v1beta1/auto-txs-for-owner/${params.owner}`;
        return await this.req.get(endpoint, options);
    }
    /* Params returns the total set of AutoIbcTx parameters. */
    async params(_params = {}) {
        const endpoint = `auto-ibc-tx/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* AutoTxIbcTxUsage returns statistics on usage of IBC transactions */
    async autoTxIbcTxUsage(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `auto-ibc-tx/v1beta1/auto-tx-ibc-usage`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map