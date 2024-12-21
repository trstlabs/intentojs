//@ts-nocheck
import { MsgSubmitQueryResponse } from "./messages";
export const AminoConverter = {
  "/stride.interchainquery.v1.MsgSubmitQueryResponse": {
    aminoType: "icq/MsgSubmitQueryResponse",
    toAmino: MsgSubmitQueryResponse.toAmino,
    fromAmino: MsgSubmitQueryResponse.fromAmino
  }
};