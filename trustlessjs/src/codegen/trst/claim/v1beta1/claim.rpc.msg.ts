import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    const promise = this.rpc.request("trst.claim.v1beta1.Msg", "ClaimClaimable", data);
    return promise.then(data => MsgClaimClaimableResponse.decode(new _m0.Reader(data)));
  }
}