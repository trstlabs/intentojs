//@ts-nocheck
import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/intento.mint.v1beta1.MsgUpdateParams": {
    aminoType: "mint/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};