//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitFlow, MsgRegisterAccountAndSubmitFlow, MsgUpdateFlow, MsgCreateHostedAccount, MsgUpdateHostedAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.intent.v1beta1.MsgRegisterAccount", MsgRegisterAccount], ["/intento.intent.v1beta1.MsgSubmitTx", MsgSubmitTx], ["/intento.intent.v1beta1.MsgSubmitFlow", MsgSubmitFlow], ["/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow", MsgRegisterAccountAndSubmitFlow], ["/intento.intent.v1beta1.MsgUpdateFlow", MsgUpdateFlow], ["/intento.intent.v1beta1.MsgCreateHostedAccount", MsgCreateHostedAccount], ["/intento.intent.v1beta1.MsgUpdateHostedAccount", MsgUpdateHostedAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.encode(value).finish()
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
        value: MsgSubmitTx.encode(value).finish()
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
        value: MsgSubmitFlow.encode(value).finish()
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.encode(value).finish()
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
        value: MsgUpdateFlow.encode(value).finish()
      };
    },
    createHostedAccount(value: MsgCreateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
        value: MsgCreateHostedAccount.encode(value).finish()
      };
    },
    updateHostedAccount(value: MsgUpdateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
        value: MsgUpdateHostedAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
        value
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
        value
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
        value
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
        value
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
        value
      };
    },
    createHostedAccount(value: MsgCreateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
        value
      };
    },
    updateHostedAccount(value: MsgUpdateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
        value
      };
    }
  },
  toJSON: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.toJSON(value)
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
        value: MsgSubmitTx.toJSON(value)
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
        value: MsgSubmitFlow.toJSON(value)
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.toJSON(value)
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
        value: MsgUpdateFlow.toJSON(value)
      };
    },
    createHostedAccount(value: MsgCreateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
        value: MsgCreateHostedAccount.toJSON(value)
      };
    },
    updateHostedAccount(value: MsgUpdateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
        value: MsgUpdateHostedAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerAccount(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromJSON(value)
      };
    },
    submitTx(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
        value: MsgSubmitTx.fromJSON(value)
      };
    },
    submitFlow(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
        value: MsgSubmitFlow.fromJSON(value)
      };
    },
    registerAccountAndSubmitFlow(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.fromJSON(value)
      };
    },
    updateFlow(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
        value: MsgUpdateFlow.fromJSON(value)
      };
    },
    createHostedAccount(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
        value: MsgCreateHostedAccount.fromJSON(value)
      };
    },
    updateHostedAccount(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
        value: MsgUpdateHostedAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromPartial(value)
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitTx",
        value: MsgSubmitTx.fromPartial(value)
      };
    },
    submitFlow(value: MsgSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitFlow",
        value: MsgSubmitFlow.fromPartial(value)
      };
    },
    registerAccountAndSubmitFlow(value: MsgRegisterAccountAndSubmitFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitFlow",
        value: MsgRegisterAccountAndSubmitFlow.fromPartial(value)
      };
    },
    updateFlow(value: MsgUpdateFlow) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateFlow",
        value: MsgUpdateFlow.fromPartial(value)
      };
    },
    createHostedAccount(value: MsgCreateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgCreateHostedAccount",
        value: MsgCreateHostedAccount.fromPartial(value)
      };
    },
    updateHostedAccount(value: MsgUpdateHostedAccount) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateHostedAccount",
        value: MsgUpdateHostedAccount.fromPartial(value)
      };
    }
  }
};