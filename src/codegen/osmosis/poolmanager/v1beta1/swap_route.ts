import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface SwapAmountInRoute {
  poolId: bigint;
  tokenOutDenom: string;
}
export interface SwapAmountInRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute";
  value: Uint8Array;
}
export interface SwapAmountInRouteAmino {
  pool_id?: string;
  token_out_denom?: string;
}
export interface SwapAmountInRouteAminoMsg {
  type: "osmosis/poolmanager/swap-amount-in-route";
  value: SwapAmountInRouteAmino;
}
export interface SwapAmountInRouteSDKType {
  pool_id: bigint;
  token_out_denom: string;
}
export interface SwapAmountOutRoute {
  poolId: bigint;
  tokenInDenom: string;
}
export interface SwapAmountOutRouteProtoMsg {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute";
  value: Uint8Array;
}
export interface SwapAmountOutRouteAmino {
  pool_id?: string;
  token_in_denom?: string;
}
export interface SwapAmountOutRouteAminoMsg {
  type: "osmosis/poolmanager/swap-amount-out-route";
  value: SwapAmountOutRouteAmino;
}
export interface SwapAmountOutRouteSDKType {
  pool_id: bigint;
  token_in_denom: string;
}
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    poolId: BigInt(0),
    tokenOutDenom: ""
  };
}
export const SwapAmountInRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute",
  aminoType: "osmosis/poolmanager/swap-amount-in-route",
  is(o: any): o is SwapAmountInRoute {
    return o && (o.$typeUrl === SwapAmountInRoute.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenOutDenom === "string");
  },
  isSDK(o: any): o is SwapAmountInRouteSDKType {
    return o && (o.$typeUrl === SwapAmountInRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_out_denom === "string");
  },
  isAmino(o: any): o is SwapAmountInRouteAmino {
    return o && (o.$typeUrl === SwapAmountInRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_out_denom === "string");
  },
  encode(message: SwapAmountInRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(18).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInRoute {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  toJSON(message: SwapAmountInRoute): JsonSafe<SwapAmountInRoute> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg {
    return {
      type: "osmosis/poolmanager/swap-amount-in-route",
      value: SwapAmountInRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.decode(message.value);
  },
  toProto(message: SwapAmountInRoute): Uint8Array {
    return SwapAmountInRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountInRoute",
      value: SwapAmountInRoute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SwapAmountInRoute.typeUrl, SwapAmountInRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapAmountInRoute.aminoType, SwapAmountInRoute.typeUrl);
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    poolId: BigInt(0),
    tokenInDenom: ""
  };
}
export const SwapAmountOutRoute = {
  typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute",
  aminoType: "osmosis/poolmanager/swap-amount-out-route",
  is(o: any): o is SwapAmountOutRoute {
    return o && (o.$typeUrl === SwapAmountOutRoute.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenInDenom === "string");
  },
  isSDK(o: any): o is SwapAmountOutRouteSDKType {
    return o && (o.$typeUrl === SwapAmountOutRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string");
  },
  isAmino(o: any): o is SwapAmountOutRouteAmino {
    return o && (o.$typeUrl === SwapAmountOutRoute.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in_denom === "string");
  },
  encode(message: SwapAmountOutRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(18).string(message.tokenInDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenInDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : ""
    };
  },
  toJSON(message: SwapAmountOutRoute): JsonSafe<SwapAmountOutRoute> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    return obj;
  },
  fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenInDenom = object.tokenInDenom ?? "";
    return message;
  },
  fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    return message;
  },
  toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg {
    return {
      type: "osmosis/poolmanager/swap-amount-out-route",
      value: SwapAmountOutRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.decode(message.value);
  },
  toProto(message: SwapAmountOutRoute): Uint8Array {
    return SwapAmountOutRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg {
    return {
      typeUrl: "/osmosis.poolmanager.v1beta1.SwapAmountOutRoute",
      value: SwapAmountOutRoute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SwapAmountOutRoute.typeUrl, SwapAmountOutRoute);
GlobalDecoderRegistry.registerAminoProtoMapping(SwapAmountOutRoute.aminoType, SwapAmountOutRoute.typeUrl);