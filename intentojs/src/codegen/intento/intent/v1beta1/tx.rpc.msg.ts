import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse, MsgSubmitAction, MsgSubmitActionResponse, MsgRegisterAccountAndSubmitAction, MsgRegisterAccountAndSubmitActionResponse, MsgUpdateAction, MsgUpdateActionResponse } from "./tx";
/** Msg defines the ica-authentication Msg service. */
export interface Msg {
  /** Register defines a rpc handler for MsgRegisterAccount */
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
  submitAction(request: MsgSubmitAction): Promise<MsgSubmitActionResponse>;
  registerAccountAndSubmitAction(request: MsgRegisterAccountAndSubmitAction): Promise<MsgRegisterAccountAndSubmitActionResponse>;
  updateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAccount = this.registerAccount.bind(this);
    this.submitTx = this.submitTx.bind(this);
    this.submitAction = this.submitAction.bind(this);
    this.registerAccountAndSubmitAction = this.registerAccountAndSubmitAction.bind(this);
    this.updateAction = this.updateAction.bind(this);
  }
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "RegisterAccount", data);
    return promise.then(data => MsgRegisterAccountResponse.decode(new BinaryReader(data)));
  }
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "SubmitTx", data);
    return promise.then(data => MsgSubmitTxResponse.decode(new BinaryReader(data)));
  }
  submitAction(request: MsgSubmitAction): Promise<MsgSubmitActionResponse> {
    const data = MsgSubmitAction.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "SubmitAction", data);
    return promise.then(data => MsgSubmitActionResponse.decode(new BinaryReader(data)));
  }
  registerAccountAndSubmitAction(request: MsgRegisterAccountAndSubmitAction): Promise<MsgRegisterAccountAndSubmitActionResponse> {
    const data = MsgRegisterAccountAndSubmitAction.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "RegisterAccountAndSubmitAction", data);
    return promise.then(data => MsgRegisterAccountAndSubmitActionResponse.decode(new BinaryReader(data)));
  }
  updateAction(request: MsgUpdateAction): Promise<MsgUpdateActionResponse> {
    const data = MsgUpdateAction.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "UpdateAction", data);
    return promise.then(data => MsgUpdateActionResponse.decode(new BinaryReader(data)));
  }
}