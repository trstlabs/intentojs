//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreatePool, MsgJoinPool, MsgExitPool, MsgUpFrontSwapExactAmountIn, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgSwapByDenom, MsgFeedMultipleExternalLiquidity, MsgUpdatePoolParams, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/elys.amm.MsgCreatePool", MsgCreatePool], ["/elys.amm.MsgJoinPool", MsgJoinPool], ["/elys.amm.MsgExitPool", MsgExitPool], ["/elys.amm.MsgUpFrontSwapExactAmountIn", MsgUpFrontSwapExactAmountIn], ["/elys.amm.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/elys.amm.MsgSwapExactAmountOut", MsgSwapExactAmountOut], ["/elys.amm.MsgSwapByDenom", MsgSwapByDenom], ["/elys.amm.MsgFeedMultipleExternalLiquidity", MsgFeedMultipleExternalLiquidity], ["/elys.amm.MsgUpdatePoolParams", MsgUpdatePoolParams], ["/elys.amm.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value: MsgJoinPool.encode(value).finish()
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value: MsgExitPool.encode(value).finish()
      };
    },
    upFrontSwapExactAmountIn(value: MsgUpFrontSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgUpFrontSwapExactAmountIn",
        value: MsgUpFrontSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.encode(value).finish()
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.encode(value).finish()
      };
    },
    swapByDenom(value: MsgSwapByDenom) {
      return {
        typeUrl: "/elys.amm.MsgSwapByDenom",
        value: MsgSwapByDenom.encode(value).finish()
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value: MsgFeedMultipleExternalLiquidity.encode(value).finish()
      };
    },
    updatePoolParams(value: MsgUpdatePoolParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdatePoolParams",
        value: MsgUpdatePoolParams.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value
      };
    },
    upFrontSwapExactAmountIn(value: MsgUpFrontSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgUpFrontSwapExactAmountIn",
        value
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value
      };
    },
    swapByDenom(value: MsgSwapByDenom) {
      return {
        typeUrl: "/elys.amm.MsgSwapByDenom",
        value
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value
      };
    },
    updatePoolParams(value: MsgUpdatePoolParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdatePoolParams",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value: MsgCreatePool.toJSON(value)
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value: MsgJoinPool.toJSON(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value: MsgExitPool.toJSON(value)
      };
    },
    upFrontSwapExactAmountIn(value: MsgUpFrontSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgUpFrontSwapExactAmountIn",
        value: MsgUpFrontSwapExactAmountIn.toJSON(value)
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.toJSON(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.toJSON(value)
      };
    },
    swapByDenom(value: MsgSwapByDenom) {
      return {
        typeUrl: "/elys.amm.MsgSwapByDenom",
        value: MsgSwapByDenom.toJSON(value)
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value: MsgFeedMultipleExternalLiquidity.toJSON(value)
      };
    },
    updatePoolParams(value: MsgUpdatePoolParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdatePoolParams",
        value: MsgUpdatePoolParams.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    createPool(value: any) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value: MsgCreatePool.fromJSON(value)
      };
    },
    joinPool(value: any) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value: MsgJoinPool.fromJSON(value)
      };
    },
    exitPool(value: any) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value: MsgExitPool.fromJSON(value)
      };
    },
    upFrontSwapExactAmountIn(value: any) {
      return {
        typeUrl: "/elys.amm.MsgUpFrontSwapExactAmountIn",
        value: MsgUpFrontSwapExactAmountIn.fromJSON(value)
      };
    },
    swapExactAmountIn(value: any) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromJSON(value)
      };
    },
    swapExactAmountOut(value: any) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromJSON(value)
      };
    },
    swapByDenom(value: any) {
      return {
        typeUrl: "/elys.amm.MsgSwapByDenom",
        value: MsgSwapByDenom.fromJSON(value)
      };
    },
    feedMultipleExternalLiquidity(value: any) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value: MsgFeedMultipleExternalLiquidity.fromJSON(value)
      };
    },
    updatePoolParams(value: any) {
      return {
        typeUrl: "/elys.amm.MsgUpdatePoolParams",
        value: MsgUpdatePoolParams.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/elys.amm.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/elys.amm.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    joinPool(value: MsgJoinPool) {
      return {
        typeUrl: "/elys.amm.MsgJoinPool",
        value: MsgJoinPool.fromPartial(value)
      };
    },
    exitPool(value: MsgExitPool) {
      return {
        typeUrl: "/elys.amm.MsgExitPool",
        value: MsgExitPool.fromPartial(value)
      };
    },
    upFrontSwapExactAmountIn(value: MsgUpFrontSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgUpFrontSwapExactAmountIn",
        value: MsgUpFrontSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountIn(value: MsgSwapExactAmountIn) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountIn",
        value: MsgSwapExactAmountIn.fromPartial(value)
      };
    },
    swapExactAmountOut(value: MsgSwapExactAmountOut) {
      return {
        typeUrl: "/elys.amm.MsgSwapExactAmountOut",
        value: MsgSwapExactAmountOut.fromPartial(value)
      };
    },
    swapByDenom(value: MsgSwapByDenom) {
      return {
        typeUrl: "/elys.amm.MsgSwapByDenom",
        value: MsgSwapByDenom.fromPartial(value)
      };
    },
    feedMultipleExternalLiquidity(value: MsgFeedMultipleExternalLiquidity) {
      return {
        typeUrl: "/elys.amm.MsgFeedMultipleExternalLiquidity",
        value: MsgFeedMultipleExternalLiquidity.fromPartial(value)
      };
    },
    updatePoolParams(value: MsgUpdatePoolParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdatePoolParams",
        value: MsgUpdatePoolParams.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/elys.amm.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};