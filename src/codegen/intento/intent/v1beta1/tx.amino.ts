//@ts-nocheck
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitAction, MsgRegisterAccountAndSubmitAction, MsgUpdateAction } from "./tx";
export const AminoConverter = {
  "/intento.intent.v1beta1.MsgRegisterAccount": {
    aminoType: "/intento.intent.v1beta1.MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/intento.intent.v1beta1.MsgSubmitTx": {
    aminoType: "/intento.intent.v1beta1.MsgSubmitTx",
    toAmino: MsgSubmitTx.toAmino,
    fromAmino: MsgSubmitTx.fromAmino
  },
  "/intento.intent.v1beta1.MsgSubmitAction": {
    aminoType: "/intento.intent.v1beta1.MsgSubmitAction",
    toAmino: MsgSubmitAction.toAmino,
    fromAmino: MsgSubmitAction.fromAmino
  },
  "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction": {
    aminoType: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
    toAmino: MsgRegisterAccountAndSubmitAction.toAmino,
    fromAmino: MsgRegisterAccountAndSubmitAction.fromAmino
  },
  "/intento.intent.v1beta1.MsgUpdateAction": {
    aminoType: "/intento.intent.v1beta1.MsgUpdateAction",
    toAmino: MsgUpdateAction.toAmino,
    fromAmino: MsgUpdateAction.fromAmino
  }
};