import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse, MsgSubmitFlow, MsgSubmitFlowResponse, MsgRegisterAccountAndSubmitFlow, MsgRegisterAccountAndSubmitFlowResponse, MsgUpdateFlow, MsgUpdateFlowResponse, MsgCreateHostedAccount, MsgCreateHostedAccountResponse, MsgUpdateHostedAccount, MsgUpdateHostedAccountResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the ica-authentication Msg service. */
export interface Msg {
  /** Register defines a rpc handler for MsgRegisterAccount */
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
  submitFlow(request: MsgSubmitFlow): Promise<MsgSubmitFlowResponse>;
  registerAccountAndSubmitFlow(request: MsgRegisterAccountAndSubmitFlow): Promise<MsgRegisterAccountAndSubmitFlowResponse>;
  updateFlow(request: MsgUpdateFlow): Promise<MsgUpdateFlowResponse>;
  createHostedAccount(request: MsgCreateHostedAccount): Promise<MsgCreateHostedAccountResponse>;
  updateHostedAccount(request: MsgUpdateHostedAccount): Promise<MsgUpdateHostedAccountResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/intent module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAccount = this.registerAccount.bind(this);
    this.submitTx = this.submitTx.bind(this);
    this.submitFlow = this.submitFlow.bind(this);
    this.registerAccountAndSubmitFlow = this.registerAccountAndSubmitFlow.bind(this);
    this.updateFlow = this.updateFlow.bind(this);
    this.createHostedAccount = this.createHostedAccount.bind(this);
    this.updateHostedAccount = this.updateHostedAccount.bind(this);
    this.updateParams = this.updateParams.bind(this);
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
  submitFlow(request: MsgSubmitFlow): Promise<MsgSubmitFlowResponse> {
    const data = MsgSubmitFlow.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "SubmitFlow", data);
    return promise.then(data => MsgSubmitFlowResponse.decode(new BinaryReader(data)));
  }
  registerAccountAndSubmitFlow(request: MsgRegisterAccountAndSubmitFlow): Promise<MsgRegisterAccountAndSubmitFlowResponse> {
    const data = MsgRegisterAccountAndSubmitFlow.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "RegisterAccountAndSubmitFlow", data);
    return promise.then(data => MsgRegisterAccountAndSubmitFlowResponse.decode(new BinaryReader(data)));
  }
  updateFlow(request: MsgUpdateFlow): Promise<MsgUpdateFlowResponse> {
    const data = MsgUpdateFlow.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "UpdateFlow", data);
    return promise.then(data => MsgUpdateFlowResponse.decode(new BinaryReader(data)));
  }
  createHostedAccount(request: MsgCreateHostedAccount): Promise<MsgCreateHostedAccountResponse> {
    const data = MsgCreateHostedAccount.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "CreateHostedAccount", data);
    return promise.then(data => MsgCreateHostedAccountResponse.decode(new BinaryReader(data)));
  }
  updateHostedAccount(request: MsgUpdateHostedAccount): Promise<MsgUpdateHostedAccountResponse> {
    const data = MsgUpdateHostedAccount.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "UpdateHostedAccount", data);
    return promise.then(data => MsgUpdateHostedAccountResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}