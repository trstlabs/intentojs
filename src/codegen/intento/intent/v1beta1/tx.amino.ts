//@ts-nocheck
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitFlow, MsgRegisterAccountAndSubmitFlow, MsgUpdateFlow, MsgCreateHostedAccount, MsgUpdateHostedAccount } from "./tx";
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
  "/intento.intent.v1beta1.MsgSubmitFlow": {
    aminoType: "intent/MsgSubmitFlow",
    toAmino: MsgSubmitFlow.toAmino,
    fromAmino: MsgSubmitFlow.fromAmino
  },
  "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow": {
    aminoType: "intent/MsgRegisterAccountAndSubmitFlow",
    toAmino: MsgRegisterAccountAndSubmitFlow.toAmino,
    fromAmino: MsgRegisterAccountAndSubmitFlow.fromAmino
  },
  "/intento.intent.v1beta1.MsgUpdateFlow": {
    aminoType: "intent/MsgUpdateFlow",
    toAmino: MsgUpdateFlow.toAmino,
    fromAmino: MsgUpdateFlow.fromAmino
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