//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddExternalRewardDenom, MsgAddExternalIncentive, MsgUpdateParams, MsgUpdatePoolMultipliers, MsgClaimRewards, MsgTogglePoolEdenRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.masterchef.MsgAddExternalRewardDenom", MsgAddExternalRewardDenom], ["/elys.masterchef.MsgAddExternalIncentive", MsgAddExternalIncentive], ["/elys.masterchef.MsgUpdateParams", MsgUpdateParams], ["/elys.masterchef.MsgUpdatePoolMultipliers", MsgUpdatePoolMultipliers], ["/elys.masterchef.MsgClaimRewards", MsgClaimRewards], ["/elys.masterchef.MsgTogglePoolEdenRewards", MsgTogglePoolEdenRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addExternalRewardDenom(value: MsgAddExternalRewardDenom) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalRewardDenom",
        value: MsgAddExternalRewardDenom.encode(value).finish()
      };
    },
    addExternalIncentive(value: MsgAddExternalIncentive) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalIncentive",
        value: MsgAddExternalIncentive.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdatePoolMultipliers",
        value: MsgUpdatePoolMultipliers.encode(value).finish()
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgClaimRewards",
        value: MsgClaimRewards.encode(value).finish()
      };
    },
    togglePoolEdenRewards(value: MsgTogglePoolEdenRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgTogglePoolEdenRewards",
        value: MsgTogglePoolEdenRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addExternalRewardDenom(value: MsgAddExternalRewardDenom) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalRewardDenom",
        value
      };
    },
    addExternalIncentive(value: MsgAddExternalIncentive) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalIncentive",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdateParams",
        value
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdatePoolMultipliers",
        value
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgClaimRewards",
        value
      };
    },
    togglePoolEdenRewards(value: MsgTogglePoolEdenRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgTogglePoolEdenRewards",
        value
      };
    }
  },
  toJSON: {
    addExternalRewardDenom(value: MsgAddExternalRewardDenom) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalRewardDenom",
        value: MsgAddExternalRewardDenom.toJSON(value)
      };
    },
    addExternalIncentive(value: MsgAddExternalIncentive) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalIncentive",
        value: MsgAddExternalIncentive.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdatePoolMultipliers",
        value: MsgUpdatePoolMultipliers.toJSON(value)
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgClaimRewards",
        value: MsgClaimRewards.toJSON(value)
      };
    },
    togglePoolEdenRewards(value: MsgTogglePoolEdenRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgTogglePoolEdenRewards",
        value: MsgTogglePoolEdenRewards.toJSON(value)
      };
    }
  },
  fromJSON: {
    addExternalRewardDenom(value: any) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalRewardDenom",
        value: MsgAddExternalRewardDenom.fromJSON(value)
      };
    },
    addExternalIncentive(value: any) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalIncentive",
        value: MsgAddExternalIncentive.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    updatePoolMultipliers(value: any) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdatePoolMultipliers",
        value: MsgUpdatePoolMultipliers.fromJSON(value)
      };
    },
    claimRewards(value: any) {
      return {
        typeUrl: "/elys.masterchef.MsgClaimRewards",
        value: MsgClaimRewards.fromJSON(value)
      };
    },
    togglePoolEdenRewards(value: any) {
      return {
        typeUrl: "/elys.masterchef.MsgTogglePoolEdenRewards",
        value: MsgTogglePoolEdenRewards.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addExternalRewardDenom(value: MsgAddExternalRewardDenom) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalRewardDenom",
        value: MsgAddExternalRewardDenom.fromPartial(value)
      };
    },
    addExternalIncentive(value: MsgAddExternalIncentive) {
      return {
        typeUrl: "/elys.masterchef.MsgAddExternalIncentive",
        value: MsgAddExternalIncentive.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updatePoolMultipliers(value: MsgUpdatePoolMultipliers) {
      return {
        typeUrl: "/elys.masterchef.MsgUpdatePoolMultipliers",
        value: MsgUpdatePoolMultipliers.fromPartial(value)
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgClaimRewards",
        value: MsgClaimRewards.fromPartial(value)
      };
    },
    togglePoolEdenRewards(value: MsgTogglePoolEdenRewards) {
      return {
        typeUrl: "/elys.masterchef.MsgTogglePoolEdenRewards",
        value: MsgTogglePoolEdenRewards.fromPartial(value)
      };
    }
  }
};