//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgClaimRewards, MsgUpdateParams, MsgAddPool, MsgRemovePool, MsgWhitelist, MsgDewhitelist, MsgUpdateStopLoss, MsgClosePositions, MsgUpdatePool, MsgUpdateEnabledPools } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.leveragelp.MsgOpen", MsgOpen], ["/elys.leveragelp.MsgClose", MsgClose], ["/elys.leveragelp.MsgClaimRewards", MsgClaimRewards], ["/elys.leveragelp.MsgUpdateParams", MsgUpdateParams], ["/elys.leveragelp.MsgAddPool", MsgAddPool], ["/elys.leveragelp.MsgRemovePool", MsgRemovePool], ["/elys.leveragelp.MsgWhitelist", MsgWhitelist], ["/elys.leveragelp.MsgDewhitelist", MsgDewhitelist], ["/elys.leveragelp.MsgUpdateStopLoss", MsgUpdateStopLoss], ["/elys.leveragelp.MsgClosePositions", MsgClosePositions], ["/elys.leveragelp.MsgUpdatePool", MsgUpdatePool], ["/elys.leveragelp.MsgUpdateEnabledPools", MsgUpdateEnabledPools]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value: MsgOpen.encode(value).finish()
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value: MsgClose.encode(value).finish()
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value: MsgClaimRewards.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value: MsgAddPool.encode(value).finish()
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value: MsgRemovePool.encode(value).finish()
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value: MsgWhitelist.encode(value).finish()
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value: MsgDewhitelist.encode(value).finish()
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.encode(value).finish()
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value: MsgClosePositions.encode(value).finish()
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePool",
        value: MsgUpdatePool.encode(value).finish()
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateEnabledPools",
        value: MsgUpdateEnabledPools.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePool",
        value
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateEnabledPools",
        value
      };
    }
  },
  toJSON: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value: MsgOpen.toJSON(value)
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value: MsgClose.toJSON(value)
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value: MsgClaimRewards.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value: MsgAddPool.toJSON(value)
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value: MsgRemovePool.toJSON(value)
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value: MsgWhitelist.toJSON(value)
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value: MsgDewhitelist.toJSON(value)
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.toJSON(value)
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value: MsgClosePositions.toJSON(value)
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePool",
        value: MsgUpdatePool.toJSON(value)
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateEnabledPools",
        value: MsgUpdateEnabledPools.toJSON(value)
      };
    }
  },
  fromJSON: {
    open(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value: MsgOpen.fromJSON(value)
      };
    },
    close(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value: MsgClose.fromJSON(value)
      };
    },
    claimRewards(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value: MsgClaimRewards.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    addPool(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value: MsgAddPool.fromJSON(value)
      };
    },
    removePool(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value: MsgRemovePool.fromJSON(value)
      };
    },
    whitelist(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value: MsgWhitelist.fromJSON(value)
      };
    },
    dewhitelist(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value: MsgDewhitelist.fromJSON(value)
      };
    },
    updateStopLoss(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.fromJSON(value)
      };
    },
    closePositions(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value: MsgClosePositions.fromJSON(value)
      };
    },
    updatePool(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePool",
        value: MsgUpdatePool.fromJSON(value)
      };
    },
    updateEnabledPools(value: any) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateEnabledPools",
        value: MsgUpdateEnabledPools.fromJSON(value)
      };
    }
  },
  fromPartial: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/elys.leveragelp.MsgOpen",
        value: MsgOpen.fromPartial(value)
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/elys.leveragelp.MsgClose",
        value: MsgClose.fromPartial(value)
      };
    },
    claimRewards(value: MsgClaimRewards) {
      return {
        typeUrl: "/elys.leveragelp.MsgClaimRewards",
        value: MsgClaimRewards.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    addPool(value: MsgAddPool) {
      return {
        typeUrl: "/elys.leveragelp.MsgAddPool",
        value: MsgAddPool.fromPartial(value)
      };
    },
    removePool(value: MsgRemovePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgRemovePool",
        value: MsgRemovePool.fromPartial(value)
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgWhitelist",
        value: MsgWhitelist.fromPartial(value)
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/elys.leveragelp.MsgDewhitelist",
        value: MsgDewhitelist.fromPartial(value)
      };
    },
    updateStopLoss(value: MsgUpdateStopLoss) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateStopLoss",
        value: MsgUpdateStopLoss.fromPartial(value)
      };
    },
    closePositions(value: MsgClosePositions) {
      return {
        typeUrl: "/elys.leveragelp.MsgClosePositions",
        value: MsgClosePositions.fromPartial(value)
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdatePool",
        value: MsgUpdatePool.fromPartial(value)
      };
    },
    updateEnabledPools(value: MsgUpdateEnabledPools) {
      return {
        typeUrl: "/elys.leveragelp.MsgUpdateEnabledPools",
        value: MsgUpdateEnabledPools.fromPartial(value)
      };
    }
  }
};