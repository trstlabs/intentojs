//@ts-nocheck
import { MsgFundFairburnPool, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/intento.alloc.v1beta1.MsgFundFairburnPool": {
    aminoType: "alloc/MsgFundFairburnPool",
    toAmino: MsgFundFairburnPool.toAmino,
    fromAmino: MsgFundFairburnPool.fromAmino
  },
  "/intento.alloc.v1beta1.MsgUpdateParams": {
    aminoType: "alloc/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};