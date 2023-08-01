import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse, MsgSubmitAutoTx, MsgSubmitAutoTxResponse, MsgRegisterAccountAndSubmitAutoTx, MsgRegisterAccountAndSubmitAutoTxResponse, MsgUpdateAutoTx, MsgUpdateAutoTxResponse } from "./tx";
/** Msg defines the ica-authentication Msg service. */
export interface Msg {
  /** Register defines a rpc handler for MsgRegisterAccount */
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
  submitAutoTx(request: MsgSubmitAutoTx): Promise<MsgSubmitAutoTxResponse>;
  registerAccountAndSubmitAutoTx(request: MsgRegisterAccountAndSubmitAutoTx): Promise<MsgRegisterAccountAndSubmitAutoTxResponse>;
  updateAutoTx(request: MsgUpdateAutoTx): Promise<MsgUpdateAutoTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAccount = this.registerAccount.bind(this);
    this.submitTx = this.submitTx.bind(this);
    this.submitAutoTx = this.submitAutoTx.bind(this);
    this.registerAccountAndSubmitAutoTx = this.registerAccountAndSubmitAutoTx.bind(this);
    this.updateAutoTx = this.updateAutoTx.bind(this);
  }
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "RegisterAccount", data);
    return promise.then(data => MsgRegisterAccountResponse.decode(new _m0.Reader(data)));
  }
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "SubmitTx", data);
    return promise.then(data => MsgSubmitTxResponse.decode(new _m0.Reader(data)));
  }
  submitAutoTx(request: MsgSubmitAutoTx): Promise<MsgSubmitAutoTxResponse> {
    const data = MsgSubmitAutoTx.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "SubmitAutoTx", data);
    return promise.then(data => MsgSubmitAutoTxResponse.decode(new _m0.Reader(data)));
  }
  registerAccountAndSubmitAutoTx(request: MsgRegisterAccountAndSubmitAutoTx): Promise<MsgRegisterAccountAndSubmitAutoTxResponse> {
    const data = MsgRegisterAccountAndSubmitAutoTx.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "RegisterAccountAndSubmitAutoTx", data);
    return promise.then(data => MsgRegisterAccountAndSubmitAutoTxResponse.decode(new _m0.Reader(data)));
  }
  updateAutoTx(request: MsgUpdateAutoTx): Promise<MsgUpdateAutoTxResponse> {
    const data = MsgUpdateAutoTx.encode(request).finish();
    const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "UpdateAutoTx", data);
    return promise.then(data => MsgUpdateAutoTxResponse.decode(new _m0.Reader(data)));
  }
}