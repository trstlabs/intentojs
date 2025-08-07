//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimClaimable, MsgUpdateParams } from "./claim";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.claim.v1.MsgClaimClaimable", MsgClaimClaimable], ["/intento.claim.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1.MsgClaimClaimable",
        value: MsgClaimClaimable.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.claim.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1.MsgClaimClaimable",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.claim.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1.MsgClaimClaimable",
        value: MsgClaimClaimable.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.claim.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    claimClaimable(value: any) {
      return {
        typeUrl: "/intento.claim.v1.MsgClaimClaimable",
        value: MsgClaimClaimable.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/intento.claim.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1.MsgClaimClaimable",
        value: MsgClaimClaimable.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/intento.claim.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};