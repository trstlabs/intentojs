//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import {
  MsgRegisterAccount,
  MsgSubmitTx,
  MsgSubmitAutoTx,
  MsgRegisterAccountAndSubmitAutoTx,
  MsgUpdateAutoTx,
} from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/trst.autoibctx.v1beta1.MsgRegisterAccount", MsgRegisterAccount],
  ["/trst.autoibctx.v1beta1.MsgSubmitTx", MsgSubmitTx],
  ["/trst.autoibctx.v1beta1.MsgSubmitAutoTx", MsgSubmitAutoTx],
  [
    "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
    MsgRegisterAccountAndSubmitAutoTx,
  ],
  ["/trst.autoibctx.v1beta1.MsgUpdateAutoTx", MsgUpdateAutoTx],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.encode(value).finish(),
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx",
        value: MsgSubmitTx.encode(value).finish(),
      };
    },
    submitAutoTx(value: MsgSubmitAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx",
        value: MsgSubmitAutoTx.encode(value).finish(),
      };
    },
    registerAccountAndSubmitAutoTx(value: MsgRegisterAccountAndSubmitAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
        value: MsgRegisterAccountAndSubmitAutoTx.encode(value).finish(),
      };
    },
    updateAutoTx(value: MsgUpdateAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx",
        value: MsgUpdateAutoTx.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccount",
        value,
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx",
        value,
      };
    },
    submitAutoTx(value: MsgSubmitAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx",
        value,
      };
    },
    registerAccountAndSubmitAutoTx(value: MsgRegisterAccountAndSubmitAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
        value,
      };
    },
    updateAutoTx(value: MsgUpdateAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx",
        value,
      };
    },
  },
  fromPartial: {
    registerAccount(value: MsgRegisterAccount) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccount",
        value: MsgRegisterAccount.fromPartial(value),
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitTx",
        value: MsgSubmitTx.fromPartial(value),
      };
    },
    submitAutoTx(value: MsgSubmitAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgSubmitAutoTx",
        value: MsgSubmitAutoTx.fromPartial(value),
      };
    },
    registerAccountAndSubmitAutoTx(value: MsgRegisterAccountAndSubmitAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgRegisterAccountAndSubmitAutoTx",
        value: MsgRegisterAccountAndSubmitAutoTx.fromPartial(value),
      };
    },
    updateAutoTx(value: MsgUpdateAutoTx) {
      return {
        typeUrl: "/trst.autoibctx.v1beta1.MsgUpdateAutoTx",
        value: MsgUpdateAutoTx.fromPartial(value),
      };
    },
  },
};
