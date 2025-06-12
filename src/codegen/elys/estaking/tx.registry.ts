//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgWithdrawReward, MsgWithdrawElysStakingRewards, MsgWithdrawAllRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.estaking.MsgUpdateParams", MsgUpdateParams], ["/elys.estaking.MsgWithdrawReward", MsgWithdrawReward], ["/elys.estaking.MsgWithdrawElysStakingRewards", MsgWithdrawElysStakingRewards], ["/elys.estaking.MsgWithdrawAllRewards", MsgWithdrawAllRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.estaking.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawReward",
        value: MsgWithdrawReward.encode(value).finish()
      };
    },
    withdrawElysStakingRewards(value: MsgWithdrawElysStakingRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
        value: MsgWithdrawElysStakingRewards.encode(value).finish()
      };
    },
    withdrawAllRewards(value: MsgWithdrawAllRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
        value: MsgWithdrawAllRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.estaking.MsgUpdateParams",
        value
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawReward",
        value
      };
    },
    withdrawElysStakingRewards(value: MsgWithdrawElysStakingRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
        value
      };
    },
    withdrawAllRewards(value: MsgWithdrawAllRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.estaking.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawReward",
        value: MsgWithdrawReward.toJSON(value)
      };
    },
    withdrawElysStakingRewards(value: MsgWithdrawElysStakingRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
        value: .toJSON(value)
      };
    },
    withdrawAllRewards(value: MsgWithdrawAllRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
        value: MsgWithdrawAllRewards.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/elys.estaking.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    withdrawReward(value: any) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawReward",
        value: MsgWithdrawReward.fromJSON(value)
      };
    },
    withdrawElysStakingRewards(value: any) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
        value: MsgWithdrawElysStakingRewards.fromJSON(value)
      };
    },
    withdrawAllRewards(value: any) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
        value: MsgWithdrawAllRewards.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.estaking.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawReward",
        value: MsgWithdrawReward.fromPartial(value)
      };
    },
    withdrawElysStakingRewards(value: MsgWithdrawElysStakingRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawElysStakingRewards",
        value: MsgWithdrawElysStakingRewards.fromPartial(value)
      };
    },
    withdrawAllRewards(value: MsgWithdrawAllRewards) {
      return {
        typeUrl: "/elys.estaking.MsgWithdrawAllRewards",
        value: MsgWithdrawAllRewards.fromPartial(value)
      };
    }
  }
};