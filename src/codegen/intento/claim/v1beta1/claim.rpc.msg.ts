import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgClaimClaimable, MsgClaimClaimableResponse } from "./claim";
/** Msg defines the Msg service. */
export interface Msg {
  claimClaimable(request: MsgClaimClaimable): Promise<MsgClaimClaimableResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claimClaimable = this.claimClaimable.bind(this);
  }
  claimClaimable(request: MsgClaimClaimable): Promise<MsgClaimClaimableResponse> {
    const data = MsgClaimClaimable.encode(request).finish();
    const promise = this.rpc.request("intento.claim.v1beta1.Msg", "ClaimClaimable", data);
    return promise.then(data => MsgClaimClaimableResponse.decode(new BinaryReader(data)));
  }
}