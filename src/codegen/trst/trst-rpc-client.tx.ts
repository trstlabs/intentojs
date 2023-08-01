import { Rpc } from "../helpers";
export const trstCreateRPCTxClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  trst: {
    autoibctx: {
      v1beta1: new (await import("./autoibctx/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    claim: {
      v1beta1: new (await import("./claim/v1beta1/claim.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});