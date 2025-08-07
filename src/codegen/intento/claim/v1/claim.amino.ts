//@ts-nocheck
import { MsgClaimClaimable, MsgUpdateParams } from "./claim";
export const AminoConverter = {
  "/intento.claim.v1.MsgClaimClaimable": {
    aminoType: "claim/MsgClaimClaimable",
    toAmino: MsgClaimClaimable.toAmino,
    fromAmino: MsgClaimClaimable.fromAmino
  },
  "/intento.claim.v1.MsgUpdateParams": {
    aminoType: "/intento.claim.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};