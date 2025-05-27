//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSpotOrder, MsgUpdateSpotOrder, MsgCancelSpotOrder, MsgCancelSpotOrders, MsgCreatePerpetualOpenOrder, MsgCreatePerpetualCloseOrder, MsgUpdatePerpetualOrder, MsgCancelPerpetualOrder, MsgCancelPerpetualOrders, MsgUpdateParams, MsgExecuteOrders } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.tradeshield.MsgCreateSpotOrder", MsgCreateSpotOrder], ["/elys.tradeshield.MsgUpdateSpotOrder", MsgUpdateSpotOrder], ["/elys.tradeshield.MsgCancelSpotOrder", MsgCancelSpotOrder], ["/elys.tradeshield.MsgCancelSpotOrders", MsgCancelSpotOrders], ["/elys.tradeshield.MsgCreatePerpetualOpenOrder", MsgCreatePerpetualOpenOrder], ["/elys.tradeshield.MsgCreatePerpetualCloseOrder", MsgCreatePerpetualCloseOrder], ["/elys.tradeshield.MsgUpdatePerpetualOrder", MsgUpdatePerpetualOrder], ["/elys.tradeshield.MsgCancelPerpetualOrder", MsgCancelPerpetualOrder], ["/elys.tradeshield.MsgCancelPerpetualOrders", MsgCancelPerpetualOrders], ["/elys.tradeshield.MsgUpdateParams", MsgUpdateParams], ["/elys.tradeshield.MsgExecuteOrders", MsgExecuteOrders]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createSpotOrder(value: MsgCreateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
        value: MsgCreateSpotOrder.encode(value).finish()
      };
    },
    updateSpotOrder(value: MsgUpdateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
        value: MsgUpdateSpotOrder.encode(value).finish()
      };
    },
    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
        value: MsgCancelSpotOrder.encode(value).finish()
      };
    },
    cancelSpotOrders(value: MsgCancelSpotOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
        value: MsgCancelSpotOrders.encode(value).finish()
      };
    },
    createPerpetualOpenOrder(value: MsgCreatePerpetualOpenOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
        value: MsgCreatePerpetualOpenOrder.encode(value).finish()
      };
    },
    createPerpetualCloseOrder(value: MsgCreatePerpetualCloseOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
        value: MsgCreatePerpetualCloseOrder.encode(value).finish()
      };
    },
    updatePerpetualOrder(value: MsgUpdatePerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
        value: MsgUpdatePerpetualOrder.encode(value).finish()
      };
    },
    cancelPerpetualOrder(value: MsgCancelPerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
        value: MsgCancelPerpetualOrder.encode(value).finish()
      };
    },
    cancelPerpetualOrders(value: MsgCancelPerpetualOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
        value: MsgCancelPerpetualOrders.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    executeOrders(value: MsgExecuteOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgExecuteOrders",
        value: MsgExecuteOrders.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createSpotOrder(value: MsgCreateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
        value
      };
    },
    updateSpotOrder(value: MsgUpdateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
        value
      };
    },
    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
        value
      };
    },
    cancelSpotOrders(value: MsgCancelSpotOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
        value
      };
    },
    createPerpetualOpenOrder(value: MsgCreatePerpetualOpenOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
        value
      };
    },
    createPerpetualCloseOrder(value: MsgCreatePerpetualCloseOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
        value
      };
    },
    updatePerpetualOrder(value: MsgUpdatePerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
        value
      };
    },
    cancelPerpetualOrder(value: MsgCancelPerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
        value
      };
    },
    cancelPerpetualOrders(value: MsgCancelPerpetualOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateParams",
        value
      };
    },
    executeOrders(value: MsgExecuteOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgExecuteOrders",
        value
      };
    }
  },
  toJSON: {
    createSpotOrder(value: MsgCreateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
        value: MsgCreateSpotOrder.toJSON(value)
      };
    },
    updateSpotOrder(value: MsgUpdateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
        value: MsgUpdateSpotOrder.toJSON(value)
      };
    },
    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
        value: MsgCancelSpotOrder.toJSON(value)
      };
    },
    cancelSpotOrders(value: MsgCancelSpotOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
        value: MsgCancelSpotOrders.toJSON(value)
      };
    },
    createPerpetualOpenOrder(value: MsgCreatePerpetualOpenOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
        value: MsgCreatePerpetualOpenOrder.toJSON(value)
      };
    },
    createPerpetualCloseOrder(value: MsgCreatePerpetualCloseOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
        value: MsgCreatePerpetualCloseOrder.toJSON(value)
      };
    },
    updatePerpetualOrder(value: MsgUpdatePerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
        value: MsgUpdatePerpetualOrder.toJSON(value)
      };
    },
    cancelPerpetualOrder(value: MsgCancelPerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
        value: MsgCancelPerpetualOrder.toJSON(value)
      };
    },
    cancelPerpetualOrders(value: MsgCancelPerpetualOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
        value: MsgCancelPerpetualOrders.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    executeOrders(value: MsgExecuteOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgExecuteOrders",
        value: MsgExecuteOrders.toJSON(value)
      };
    }
  },
  fromJSON: {
    createSpotOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
        value: MsgCreateSpotOrder.fromJSON(value)
      };
    },
    updateSpotOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
        value: MsgUpdateSpotOrder.fromJSON(value)
      };
    },
    cancelSpotOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
        value: MsgCancelSpotOrder.fromJSON(value)
      };
    },
    cancelSpotOrders(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
        value: MsgCancelSpotOrders.fromJSON(value)
      };
    },
    createPerpetualOpenOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
        value: MsgCreatePerpetualOpenOrder.fromJSON(value)
      };
    },
    createPerpetualCloseOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
        value: MsgCreatePerpetualCloseOrder.fromJSON(value)
      };
    },
    updatePerpetualOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
        value: MsgUpdatePerpetualOrder.fromJSON(value)
      };
    },
    cancelPerpetualOrder(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
        value: MsgCancelPerpetualOrder.fromJSON(value)
      };
    },
    cancelPerpetualOrders(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
        value: MsgCancelPerpetualOrders.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    executeOrders(value: any) {
      return {
        typeUrl: "/elys.tradeshield.MsgExecuteOrders",
        value: MsgExecuteOrders.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createSpotOrder(value: MsgCreateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
        value: MsgCreateSpotOrder.fromPartial(value)
      };
    },
    updateSpotOrder(value: MsgUpdateSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
        value: MsgUpdateSpotOrder.fromPartial(value)
      };
    },
    cancelSpotOrder(value: MsgCancelSpotOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
        value: MsgCancelSpotOrder.fromPartial(value)
      };
    },
    cancelSpotOrders(value: MsgCancelSpotOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
        value: MsgCancelSpotOrders.fromPartial(value)
      };
    },
    createPerpetualOpenOrder(value: MsgCreatePerpetualOpenOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
        value: MsgCreatePerpetualOpenOrder.fromPartial(value)
      };
    },
    createPerpetualCloseOrder(value: MsgCreatePerpetualCloseOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
        value: MsgCreatePerpetualCloseOrder.fromPartial(value)
      };
    },
    updatePerpetualOrder(value: MsgUpdatePerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
        value: MsgUpdatePerpetualOrder.fromPartial(value)
      };
    },
    cancelPerpetualOrder(value: MsgCancelPerpetualOrder) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
        value: MsgCancelPerpetualOrder.fromPartial(value)
      };
    },
    cancelPerpetualOrders(value: MsgCancelPerpetualOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
        value: MsgCancelPerpetualOrders.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.tradeshield.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    executeOrders(value: MsgExecuteOrders) {
      return {
        typeUrl: "/elys.tradeshield.MsgExecuteOrders",
        value: MsgExecuteOrders.fromPartial(value)
      };
    }
  }
};