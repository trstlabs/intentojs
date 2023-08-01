//@ts-nocheck
import { MsgClaimClaimable } from "./claim";
export const AminoConverter = {
  "/trst.claim.v1beta1.MsgClaimClaimable": {
    aminoType: "/trst.claim.v1beta1.MsgClaimClaimable",
    toAmino: MsgClaimClaimable.toAmino,
    fromAmino: MsgClaimClaimable.fromAmino
  }
};