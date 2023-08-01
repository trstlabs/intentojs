//@ts-nocheck
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitAutoTx, MsgRegisterAccountAndSubmitAutoTx, MsgUpdateAutoTx } from "./tx";
export const AminoConverter = {
  "/trst.autoibctx.v1beta1.MsgRegisterAccount": {
    aminoType: "/trst.autoibctx.v1beta1.MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/trst.autoibctx.v1beta1.MsgSubmitTx": {
    aminoType: "/trst.autoibctx.v1beta1.MsgSubmitTx",
    toAmino: MsgSubmitTx.toAmino,
    fromAmino: MsgSubmitTx.fromAmino
  },
  "/trst.autoibctx.v1beta1.MsgSubmitAutoTx": {
    aminoType: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx",
    toAmino: MsgSubmitAutoTx.toAmino,
    fromAmino: MsgSubmitAutoTx.fromAmino
  },
  "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx": {
    aminoType: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
    toAmino: MsgRegisterAccountAndSubmitAutoTx.toAmino,
    fromAmino: MsgRegisterAccountAndSubmitAutoTx.fromAmino
  },
  "/trst.autoibctx.v1beta1.MsgUpdateAutoTx": {
    aminoType: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx",
    toAmino: MsgUpdateAutoTx.toAmino,
    fromAmino: MsgUpdateAutoTx.fromAmino
  }
};