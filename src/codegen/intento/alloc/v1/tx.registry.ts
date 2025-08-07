//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundFairburnPool, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.alloc.v1.MsgFundFairburnPool", MsgFundFairburnPool], ["/intento.alloc.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    fundFairburnPool(value: MsgFundFairburnPool) {
      return {
        typeUrl: "/intento.alloc.v1.MsgFundFairburnPool",
        value: MsgFundFairburnPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.alloc.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    fundFairburnPool(value: MsgFundFairburnPool) {
      return {
        typeUrl: "/intento.alloc.v1.MsgFundFairburnPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.alloc.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    fundFairburnPool(value: MsgFundFairburnPool) {
      return {
        typeUrl: "/intento.alloc.v1.MsgFundFairburnPool",
        value: MsgFundFairburnPool.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.alloc.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    fundFairburnPool(value: any) {
      return {
        typeUrl: "/intento.alloc.v1.MsgFundFairburnPool",
        value: MsgFundFairburnPool.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/intento.alloc.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    fundFairburnPool(value: MsgFundFairburnPool) {
      return {
        typeUrl: "/intento.alloc.v1.MsgFundFairburnPool",
        value: MsgFundFairburnPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.alloc.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};