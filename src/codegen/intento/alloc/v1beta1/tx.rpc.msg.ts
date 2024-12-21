import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgFundFairburnPool, MsgFundFairburnPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the alloc Msg service. */
export interface Msg {
  /**
   * FundFairburnPool defines a method to allow an account to directly
   * fund the fee collector module account.
   */
  fundFairburnPool(request: MsgFundFairburnPool): Promise<MsgFundFairburnPoolResponse>;
  /** UpdateParams updates the alloc module's parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.fundFairburnPool = this.fundFairburnPool.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  fundFairburnPool(request: MsgFundFairburnPool): Promise<MsgFundFairburnPoolResponse> {
    const data = MsgFundFairburnPool.encode(request).finish();
    const promise = this.rpc.request("intento.alloc.v1beta1.Msg", "FundFairburnPool", data);
    return promise.then(data => MsgFundFairburnPoolResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("intento.alloc.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}