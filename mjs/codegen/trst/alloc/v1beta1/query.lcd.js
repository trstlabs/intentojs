export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
    }
    /* this line is used by starport scaffolding # 2 */
    async params(_params = {}) {
        const endpoint = `alloc/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map