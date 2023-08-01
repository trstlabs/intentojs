"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
        this.params = this.params.bind(this);
        this.claimRecord = this.claimRecord.bind(this);
        this.claimableForAction = this.claimableForAction.bind(this);
        this.totalClaimable = this.totalClaimable.bind(this);
    }
    /* ModuleAccountBalance */
    async moduleAccountBalance(_params = {}) {
        const endpoint = `trst/claim/v1beta1/module_account_balance`;
        return await this.req.get(endpoint);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `trst/claim/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* ClaimRecord */
    async claimRecord(params) {
        const endpoint = `trst/claim/v1beta1/claim_record/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* ClaimableForAction */
    async claimableForAction(params) {
        const endpoint = `trst/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
        return await this.req.get(endpoint);
    }
    /* TotalClaimable */
    async totalClaimable(params) {
        const endpoint = `trst/claim/v1beta1/total_claimable/${params.address}`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map