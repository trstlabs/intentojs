//@ts-nocheck
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitAction, MsgRegisterAccountAndSubmitAction, MsgUpdateAction, MsgCreateHostedAccount, MsgUpdateHostedAccount } from "./tx";
export const AminoConverter = {
  "/intento.intent.v1beta1.MsgRegisterAccount": {
    aminoType: "intent/MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/intento.intent.v1beta1.MsgSubmitTx": {
    aminoType: "intent/MsgRegisterAccount",
    toAmino: MsgSubmitTx.toAmino,
    fromAmino: MsgSubmitTx.fromAmino
  },
  "/intento.intent.v1beta1.MsgSubmitAction": {
    aminoType: "intent/MsgSubmitAction",
    toAmino: MsgSubmitAction.toAmino,
    fromAmino: MsgSubmitAction.fromAmino
  },
  "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction": {
    aminoType: "intent/MsgRegisterAccountAndSubmitAction",
    toAmino: MsgRegisterAccountAndSubmitAction.toAmino,
    fromAmino: MsgRegisterAccountAndSubmitAction.fromAmino
  },
  "/intento.intent.v1beta1.MsgUpdateAction": {
    aminoType: "intent/MsgUpdateAction",
    toAmino: MsgUpdateAction.toAmino,
    fromAmino: MsgUpdateAction.fromAmino
  },
  "/intento.intent.v1beta1.MsgCreateHostedAccount": {
    aminoType: "intent/MsgCreateHostedAccount",
    toAmino: MsgCreateHostedAccount.toAmino,
    fromAmino: MsgCreateHostedAccount.fromAmino
  },
  "/intento.intent.v1beta1.MsgUpdateHostedAccount": {
    aminoType: "intent/MsgUpdateHostedAccount",
    toAmino: MsgUpdateHostedAccount.toAmino,
    fromAmino: MsgUpdateHostedAccount.fromAmino
  }
};