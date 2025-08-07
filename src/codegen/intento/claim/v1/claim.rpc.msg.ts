import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgClaimClaimable, MsgClaimClaimableResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./claim";
/** Msg defines the Msg service. */
export interface Msg {
  claimClaimable(request: MsgClaimClaimable): Promise<MsgClaimClaimableResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claimClaimable = this.claimClaimable.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  claimClaimable(request: MsgClaimClaimable): Promise<MsgClaimClaimableResponse> {
    const data = MsgClaimClaimable.encode(request).finish();
    const promise = this.rpc.request("intento.claim.v1.Msg", "ClaimClaimable", data);
    return promise.then(data => MsgClaimClaimableResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("intento.claim.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}