//@ts-nocheck
import { MsgClaimClaimable } from "./claim";
export const AminoConverter = {
  "/intento.claim.v1beta1.MsgClaimClaimable": {
    aminoType: "/intento.claim.v1beta1.MsgClaimClaimable",
    toAmino: MsgClaimClaimable.toAmino,
    fromAmino: MsgClaimClaimable.fromAmino
  }
};