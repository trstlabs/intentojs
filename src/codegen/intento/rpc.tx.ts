import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evm: {
      vm: {
        v1: new (await import("../cosmos/evm/vm/v1/tx.rpc.msg")).MsgClientImpl(rpc)
      }
    }
  },
  intento: {
    alloc: {
      v1beta1: new (await import("./alloc/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    claim: {
      v1beta1: new (await import("./claim/v1beta1/claim.rpc.msg")).MsgClientImpl(rpc)
    },
    intent: {
      v1beta1: new (await import("./intent/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    mint: {
      v1beta1: new (await import("./mint/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});