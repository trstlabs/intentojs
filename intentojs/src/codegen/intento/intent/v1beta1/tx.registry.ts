//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAccount, MsgSubmitTx, MsgSubmitAction, MsgRegisterAccountAndSubmitAction, MsgUpdateAction } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.intent.v1beta1.MsgRegisterAccount", MsgRegisterAccount], ["/intento.intent.v1beta1.MsgSubmitTx", MsgSubmitTx], ["/intento.intent.v1beta1.MsgSubmitAction", MsgSubmitAction], ["/intento.intent.v1beta1.MsgRegisterAccountAndSubmitAction", MsgRegisterAccountAndSubmitAction], ["/intento.intent.v1beta1.MsgUpdateAction", MsgUpdateAction]];
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
    }
  }
};