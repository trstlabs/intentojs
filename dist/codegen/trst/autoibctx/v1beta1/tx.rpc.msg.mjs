import { BinaryReader } from "../../../binary";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgSubmitTx, MsgSubmitTxResponse, MsgSubmitAutoTx, MsgSubmitAutoTxResponse, MsgRegisterAccountAndSubmitAutoTx, MsgRegisterAccountAndSubmitAutoTxResponse, MsgUpdateAutoTx, MsgUpdateAutoTxResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerAccount = this.registerAccount.bind(this);
        this.submitTx = this.submitTx.bind(this);
        this.submitAutoTx = this.submitAutoTx.bind(this);
        this.registerAccountAndSubmitAutoTx = this.registerAccountAndSubmitAutoTx.bind(this);
        this.updateAutoTx = this.updateAutoTx.bind(this);
    }
    registerAccount(request) {
        const data = MsgRegisterAccount.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "RegisterAccount", data);
        return promise.then(data => MsgRegisterAccountResponse.decode(new BinaryReader(data)));
    }
    submitTx(request) {
        const data = MsgSubmitTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "SubmitTx", data);
        return promise.then(data => MsgSubmitTxResponse.decode(new BinaryReader(data)));
    }
    submitAutoTx(request) {
        const data = MsgSubmitAutoTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "SubmitAutoTx", data);
        return promise.then(data => MsgSubmitAutoTxResponse.decode(new BinaryReader(data)));
    }
    registerAccountAndSubmitAutoTx(request) {
        const data = MsgRegisterAccountAndSubmitAutoTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "RegisterAccountAndSubmitAutoTx", data);
        return promise.then(data => MsgRegisterAccountAndSubmitAutoTxResponse.decode(new BinaryReader(data)));
    }
    updateAutoTx(request) {
        const data = MsgUpdateAutoTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "UpdateAutoTx", data);
        return promise.then(data => MsgUpdateAutoTxResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map