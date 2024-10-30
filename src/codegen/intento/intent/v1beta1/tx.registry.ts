//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitAction, MsgRegisterAccountAndSubmitAction, MsgUpdateAction, MsgCreateHostedAccount, MsgUpdateHostedAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.intent.v1beta1.MsgRegisterAccount", MsgRegisterAccount], ["/intento.intent.v1beta1.MsgSubmitTx", MsgSubmitTx], ["/intento.intent.v1beta1.MsgSubmitAction", MsgSubmitAction], ["/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction", MsgRegisterAccountAndSubmitAction], ["/intento.intent.v1beta1.MsgUpdateAction", MsgUpdateAction], ["/intento.intent.v1beta1.MsgCreateHostedAccount", MsgCreateHostedAccount], ["/intento.intent.v1beta1.MsgUpdateHostedAccount", MsgUpdateHostedAccount]];
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
    submitAction(value: MsgSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
        value: MsgSubmitAction.encode(value).finish()
      };
    },
    registerAccountAndSubmitAction(value: MsgRegisterAccountAndSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
        value: MsgRegisterAccountAndSubmitAction.encode(value).finish()
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
        value: MsgUpdateAction.encode(value).finish()
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
    submitAction(value: MsgSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
        value
      };
    },
    registerAccountAndSubmitAction(value: MsgRegisterAccountAndSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
        value
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
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
    submitAction(value: MsgSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
        value: MsgSubmitAction.toJSON(value)
      };
    },
    registerAccountAndSubmitAction(value: MsgRegisterAccountAndSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
        value: MsgRegisterAccountAndSubmitAction.toJSON(value)
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
        value: MsgUpdateAction.toJSON(value)
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
    submitAction(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
        value: MsgSubmitAction.fromJSON(value)
      };
    },
    registerAccountAndSubmitAction(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
        value: MsgRegisterAccountAndSubmitAction.fromJSON(value)
      };
    },
    updateAction(value: any) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
        value: MsgUpdateAction.fromJSON(value)
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
    submitAction(value: MsgSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgSubmitAction",
        value: MsgSubmitAction.fromPartial(value)
      };
    },
    registerAccountAndSubmitAction(value: MsgRegisterAccountAndSubmitAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction",
        value: MsgRegisterAccountAndSubmitAction.fromPartial(value)
      };
    },
    updateAction(value: MsgUpdateAction) {
      return {
        typeUrl: "/intento.intent.v1beta1.MsgUpdateAction",
        value: MsgUpdateAction.fromPartial(value)
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