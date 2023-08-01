import { BinaryReader } from "../../../binary";
import { MsgClaimClaimable, MsgClaimClaimableResponse } from "./claim";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.claimClaimable = this.claimClaimable.bind(this);
    }
    claimClaimable(request) {
        const data = MsgClaimClaimable.encode(request).finish();
        const promise = this.rpc.request("trst.claim.v1beta1.Msg", "ClaimClaimable", data);
        return promise.then(data => MsgClaimClaimableResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=claim.rpc.msg.js.map