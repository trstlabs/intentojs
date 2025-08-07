import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse, MsgSubmitFlow, MsgSubmitFlowResponse, MsgRegisterAccountAndSubmitFlow, MsgRegisterAccountAndSubmitFlowResponse, MsgUpdateFlow, MsgUpdateFlowResponse, MsgCreateTrustlessAgent, MsgCreateTrustlessAgentResponse, MsgUpdateTrustlessAgentFeeConfig, MsgUpdateTrustlessAgentFeeConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the ica-authentication Msg service. */
export interface Msg {
  /** Register defines a rpc handler for MsgRegisterAccount */
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
  submitFlow(request: MsgSubmitFlow): Promise<MsgSubmitFlowResponse>;
  registerAccountAndSubmitFlow(request: MsgRegisterAccountAndSubmitFlow): Promise<MsgRegisterAccountAndSubmitFlowResponse>;
  updateFlow(request: MsgUpdateFlow): Promise<MsgUpdateFlowResponse>;
  createTrustlessAgent(request: MsgCreateTrustlessAgent): Promise<MsgCreateTrustlessAgentResponse>;
  updateTrustlessAgentFeeConfig(request: MsgUpdateTrustlessAgentFeeConfig): Promise<MsgUpdateTrustlessAgentFeeConfigResponse>;
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
    this.createTrustlessAgent = this.createTrustlessAgent.bind(this);
    this.updateTrustlessAgentFeeConfig = this.updateTrustlessAgentFeeConfig.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "RegisterAccount", data);
    return promise.then(data => MsgRegisterAccountResponse.decode(new BinaryReader(data)));
  }
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "SubmitTx", data);
    return promise.then(data => MsgSubmitTxResponse.decode(new BinaryReader(data)));
  }
  submitFlow(request: MsgSubmitFlow): Promise<MsgSubmitFlowResponse> {
    const data = MsgSubmitFlow.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "SubmitFlow", data);
    return promise.then(data => MsgSubmitFlowResponse.decode(new BinaryReader(data)));
  }
  registerAccountAndSubmitFlow(request: MsgRegisterAccountAndSubmitFlow): Promise<MsgRegisterAccountAndSubmitFlowResponse> {
    const data = MsgRegisterAccountAndSubmitFlow.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "RegisterAccountAndSubmitFlow", data);
    return promise.then(data => MsgRegisterAccountAndSubmitFlowResponse.decode(new BinaryReader(data)));
  }
  updateFlow(request: MsgUpdateFlow): Promise<MsgUpdateFlowResponse> {
    const data = MsgUpdateFlow.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "UpdateFlow", data);
    return promise.then(data => MsgUpdateFlowResponse.decode(new BinaryReader(data)));
  }
  createTrustlessAgent(request: MsgCreateTrustlessAgent): Promise<MsgCreateTrustlessAgentResponse> {
    const data = MsgCreateTrustlessAgent.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "CreateTrustlessAgent", data);
    return promise.then(data => MsgCreateTrustlessAgentResponse.decode(new BinaryReader(data)));
  }
  updateTrustlessAgentFeeConfig(request: MsgUpdateTrustlessAgentFeeConfig): Promise<MsgUpdateTrustlessAgentFeeConfigResponse> {
    const data = MsgUpdateTrustlessAgentFeeConfig.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "UpdateTrustlessAgentFeeConfig", data);
    return promise.then(data => MsgUpdateTrustlessAgentFeeConfigResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("intento.intent.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}