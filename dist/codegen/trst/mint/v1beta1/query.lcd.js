"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.annualProvisions = this.annualProvisions.bind(this);
    }
    /* Params returns the total set of minting parameters. */
    async params(_params = {}) {
        const endpoint = `mint/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* AnnualProvisions current minting annual provision value. */
    async annualProvisions(_params = {}) {
        const endpoint = `mint/v1beta1/annual_provisions`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map