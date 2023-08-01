"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const claim_1 = require("./claim");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.claimClaimable = this.claimClaimable.bind(this);
    }
    claimClaimable(request) {
        const data = claim_1.MsgClaimClaimable.encode(request).finish();
        const promise = this.rpc.request("trst.claim.v1beta1.Msg", "ClaimClaimable", data);
        return promise.then(data => claim_1.MsgClaimClaimableResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=claim.rpc.msg.js.map