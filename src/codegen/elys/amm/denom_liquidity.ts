import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface DenomLiquidity {
  denom: string;
  liquidity: string;
}
export interface DenomLiquidityProtoMsg {
  typeUrl: "/elys.amm.DenomLiquidity";
  value: Uint8Array;
}
export interface DenomLiquidityAmino {
  denom?: string;
  liquidity?: string;
}
export interface DenomLiquidityAminoMsg {
  type: "/elys.amm.DenomLiquidity";
  value: DenomLiquidityAmino;
}
export interface DenomLiquiditySDKType {
  denom: string;
  liquidity: string;
}
function createBaseDenomLiquidity(): DenomLiquidity {
  return {
    denom: "",
    liquidity: ""
  };
}
export const DenomLiquidity = {
  typeUrl: "/elys.amm.DenomLiquidity",
  is(o: any): o is DenomLiquidity {
    return o && (o.$typeUrl === DenomLiquidity.typeUrl || typeof o.denom === "string" && typeof o.liquidity === "string");
  },
  isSDK(o: any): o is DenomLiquiditySDKType {
    return o && (o.$typeUrl === DenomLiquidity.typeUrl || typeof o.denom === "string" && typeof o.liquidity === "string");
  },
  isAmino(o: any): o is DenomLiquidityAmino {
    return o && (o.$typeUrl === DenomLiquidity.typeUrl || typeof o.denom === "string" && typeof o.liquidity === "string");
  },
  encode(message: DenomLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.liquidity !== "") {
      writer.uint32(18).string(message.liquidity);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.liquidity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomLiquidity {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      liquidity: isSet(object.liquidity) ? String(object.liquidity) : ""
    };
  },
  toJSON(message: DenomLiquidity): JsonSafe<DenomLiquidity> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.liquidity !== undefined && (obj.liquidity = message.liquidity);
    return obj;
  },
  fromPartial(object: Partial<DenomLiquidity>): DenomLiquidity {
    const message = createBaseDenomLiquidity();
    message.denom = object.denom ?? "";
    message.liquidity = object.liquidity ?? "";
    return message;
  },
  fromAmino(object: DenomLiquidityAmino): DenomLiquidity {
    const message = createBaseDenomLiquidity();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = object.liquidity;
    }
    return message;
  },
  toAmino(message: DenomLiquidity): DenomLiquidityAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.liquidity = message.liquidity === "" ? undefined : message.liquidity;
    return obj;
  },
  fromAminoMsg(object: DenomLiquidityAminoMsg): DenomLiquidity {
    return DenomLiquidity.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomLiquidityProtoMsg): DenomLiquidity {
    return DenomLiquidity.decode(message.value);
  },
  toProto(message: DenomLiquidity): Uint8Array {
    return DenomLiquidity.encode(message).finish();
  },
  toProtoMsg(message: DenomLiquidity): DenomLiquidityProtoMsg {
    return {
      typeUrl: "/elys.amm.DenomLiquidity",
      value: DenomLiquidity.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DenomLiquidity.typeUrl, DenomLiquidity);