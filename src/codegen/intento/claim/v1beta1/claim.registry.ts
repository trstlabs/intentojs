//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimClaimable } from "./claim";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/intento.claim.v1beta1.MsgClaimClaimable", MsgClaimClaimable]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1beta1.MsgClaimClaimable",
        value: MsgClaimClaimable.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1beta1.MsgClaimClaimable",
        value
      };
    }
  },
  fromPartial: {
    claimClaimable(value: MsgClaimClaimable) {
      return {
        typeUrl: "/intento.claim.v1beta1.MsgClaimClaimable",
        value: MsgClaimClaimable.fromPartial(value)
      };
    }
  }
};