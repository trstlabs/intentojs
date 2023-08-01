"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgRegisterAccount.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "RegisterAccount", data);
        return promise.then(data => tx_1.MsgRegisterAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    submitTx(request) {
        const data = tx_1.MsgSubmitTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "SubmitTx", data);
        return promise.then(data => tx_1.MsgSubmitTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    submitAutoTx(request) {
        const data = tx_1.MsgSubmitAutoTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "SubmitAutoTx", data);
        return promise.then(data => tx_1.MsgSubmitAutoTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    registerAccountAndSubmitAutoTx(request) {
        const data = tx_1.MsgRegisterAccountAndSubmitAutoTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "RegisterAccountAndSubmitAutoTx", data);
        return promise.then(data => tx_1.MsgRegisterAccountAndSubmitAutoTxResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateAutoTx(request) {
        const data = tx_1.MsgUpdateAutoTx.encode(request).finish();
        const promise = this.rpc.request("trst.autoibctx.v1beta1.Msg", "UpdateAutoTx", data);
        return promise.then(data => tx_1.MsgUpdateAutoTxResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map