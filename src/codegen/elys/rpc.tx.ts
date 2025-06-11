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
  elys: {
    amm: new (await import("./amm/tx.rpc.msg")).MsgClientImpl(rpc),
    commitment: new (await import("./commitment/tx.rpc.msg")).MsgClientImpl(rpc),
    estaking: new (await import("./estaking/tx.rpc.msg")).MsgClientImpl(rpc),
    leveragelp: new (await import("./leveragelp/tx.rpc.msg")).MsgClientImpl(rpc),
    masterchef: new (await import("./masterchef/tx.rpc.msg")).MsgClientImpl(rpc),
    perpetual: new (await import("./perpetual/tx.rpc.msg")).MsgClientImpl(rpc),
    stablestake: new (await import("./stablestake/tx.rpc.msg")).MsgClientImpl(rpc),
    tradeshield: new (await import("./tradeshield/tx.rpc.msg")).MsgClientImpl(rpc)
  }
});