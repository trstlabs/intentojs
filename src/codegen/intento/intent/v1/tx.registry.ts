//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitFlow, MsgRegisterAccountAndSubmitFlow, MsgUpdateFlow, MsgCreateTrustlessAgent, MsgUpdateTrustlessAgentFeeConfig, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.intent.v1.MsgRegisterAccount", MsgRegisterAccount], ["/intento.intent.v1.MsgSubmitTx", MsgSubmitTx], ["/intento.intent.v1.MsgSubmitFlow", MsgSubmitFlow], ["/intento.intent.v1.MsgRegisterAccountAndSubmitFlow", MsgRegisterAccountAndSubmitFlow], ["/intento.intent.v1.MsgUpdateFlow", MsgUpdateFlow], ["/intento.intent.v1.MsgCreateTrustlessAgent", MsgCreateTrustlessAgent], ["/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig", MsgUpdateTrustlessAgentFeeConfig], ["/intento.intent.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.encode(value).finish()
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitTx",
        value: MsgSubmitTx.encode(value).finish()
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitFlow",
        value: MsgSubmitFlow.encode(value).finish()
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.encode(value).finish()
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateFlow",
        value: MsgUpdateFlow.encode(value).finish()
      };
    },
    createTrustlessAgent(value: MsgCreateTrustlessAgent) {
      return {
        typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
        value: MsgCreateTrustlessAgent.encode(value).finish()
      };
    },
    updateTrustlessAgentFeeConfig(value: MsgUpdateTrustlessAgentFeeConfig) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
        value: MsgUpdateTrustlessAgentFeeConfig.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccount",
        value
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitTx",
        value
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitFlow",
        value
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
        value
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateFlow",
        value
      };
    },
    createTrustlessAgent(value: MsgCreateTrustlessAgent) {
      return {
        typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
        value
      };
    },
    updateTrustlessAgentFeeConfig(value: MsgUpdateTrustlessAgentFeeConfig) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.toJSON(value)
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitTx",
        value: MsgSubmitTx.toJSON(value)
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitFlow",
        value: MsgSubmitFlow.toJSON(value)
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.toJSON(value)
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateFlow",
        value: MsgUpdateFlow.toJSON(value)
      };
    },
    createTrustlessAgent(value: MsgCreateTrustlessAgent) {
      return {
        typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
        value: MsgCreateTrustlessAgent.toJSON(value)
      };
    },
    updateTrustlessAgentFeeConfig(value: MsgUpdateTrustlessAgentFeeConfig) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
        value: MsgUpdateTrustlessAgentFeeConfig.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerAccount(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromJSON(value)
      };
    },
    submitTx(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromJSON(value)
      };
    },
    submitFlow(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitFlow",
        value: MsgSubmitFlow.fromJSON(value)
      };
    },
    registerAccountAndSubmitFlow(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.fromJSON(value)
      };
    },
    updateFlow(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateFlow",
        value: MsgUpdateFlow.fromJSON(value)
      };
    },
    createTrustlessAgent(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
        value: MsgCreateTrustlessAgent.fromJSON(value)
      };
    },
    updateTrustlessAgentFeeConfig(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
        value: MsgUpdateTrustlessAgentFeeConfig.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromPartial(value)
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromPartial(value)
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgSubmitFlow",
        value: MsgSubmitFlow.fromPartial(value)
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.fromPartial(value)
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateFlow",
        value: MsgUpdateFlow.fromPartial(value)
      };
    },
    createTrustlessAgent(value: MsgCreateTrustlessAgent) {
      return {
        typeUrl: "/intento.intent.v1.MsgCreateTrustlessAgent",
        value: MsgCreateTrustlessAgent.fromPartial(value)
      };
    },
    updateTrustlessAgentFeeConfig(value: MsgUpdateTrustlessAgentFeeConfig) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateTrustlessAgentFeeConfig",
        value: MsgUpdateTrustlessAgentFeeConfig.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.intent.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};