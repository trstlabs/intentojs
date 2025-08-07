//@ts-nocheck
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitFlow, MsgRegisterAccountAndSubmitFlow, MsgUpdateFlow, MsgCreateTrustlessAgent, MsgUpdateTrustlessAgentFeeConfig, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/intento.intent.v1.MsgRegisterAccount": {
    aminoType: "intent/MsgRegisterAccount",
    toAmino: MsgRegisterAccount.toAmino,
    fromAmino: MsgRegisterAccount.fromAmino
  },
  "/intento.intent.v1.MsgSubmitTx": {
    aminoType: "intent/MsgRegisterAccount",
    toAmino: MsgSubmitTx.toAmino,
    fromAmino: MsgSubmitTx.fromAmino
  },
  "/intento.intent.v1.MsgSubmitFlow": {
    aminoType: "intent/MsgSubmitFlow",
    toAmino: MsgSubmitFlow.toAmino,
    fromAmino: MsgSubmitFlow.fromAmino
  },
  "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow": {
    aminoType: "intent/MsgRegisterAccountAndSubmitFlow",
    toAmino: MsgRegisterAccountAndSubmitFlow.toAmino,
    fromAmino: MsgRegisterAccountAndSubmitFlow.fromAmino
  },
  "/intento.intent.v1.MsgUpdateFlow": {
    aminoType: "intent/MsgUpdateFlow",
    toAmino: MsgUpdateFlow.toAmino,
    fromAmino: MsgUpdateFlow.fromAmino
  },
  "/intento.intent.v1.MsgCreateTrustlessAgent": {
    aminoType: "intent/MsgCreateTrustlessAgent",
    toAmino: MsgCreateTrustlessAgent.toAmino,
    fromAmino: MsgCreateTrustlessAgent.fromAmino
  },
  "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig": {
    aminoType: "intent/MsgUpdateTrustlessAgentFeeConfig",
    toAmino: MsgUpdateTrustlessAgentFeeConfig.toAmino,
    fromAmino: MsgUpdateTrustlessAgentFeeConfig.fromAmino
  },
  "/intento.intent.v1.MsgUpdateParams": {
    aminoType: "intent/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};