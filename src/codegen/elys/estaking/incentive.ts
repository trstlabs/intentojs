import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface IncentiveInfo {
  /** reward amount in eden for 1 year */
  edenAmountPerYear: string;
  /** blocks distributed */
  blocksDistributed: bigint;
}
export interface IncentiveInfoProtoMsg {
  typeUrl: "/elys.estaking.IncentiveInfo";
  value: Uint8Array;
}
/**
 * @name IncentiveInfoAmino
 * @package elys.estaking
 * @see proto type: elys.estaking.IncentiveInfo
 */
export interface IncentiveInfoAmino {
  /**
   * reward amount in eden for 1 year
   */
  eden_amount_per_year?: string;
  /**
   * blocks distributed
   */
  blocks_distributed?: string;
}
export interface IncentiveInfoAminoMsg {
  type: "/elys.estaking.IncentiveInfo";
  value: IncentiveInfoAmino;
}
export interface IncentiveInfoSDKType {
  eden_amount_per_year: string;
  blocks_distributed: bigint;
}
function createBaseIncentiveInfo(): IncentiveInfo {
  return {
    edenAmountPerYear: "",
    blocksDistributed: BigInt(0)
  };
}
export const IncentiveInfo = {
  typeUrl: "/elys.estaking.IncentiveInfo",
  is(o: any): o is IncentiveInfo {
    return o && (o.$typeUrl === IncentiveInfo.typeUrl || typeof o.edenAmountPerYear === "string" && typeof o.blocksDistributed === "bigint");
  },
  isSDK(o: any): o is IncentiveInfoSDKType {
    return o && (o.$typeUrl === IncentiveInfo.typeUrl || typeof o.eden_amount_per_year === "string" && typeof o.blocks_distributed === "bigint");
  },
  isAmino(o: any): o is IncentiveInfoAmino {
    return o && (o.$typeUrl === IncentiveInfo.typeUrl || typeof o.eden_amount_per_year === "string" && typeof o.blocks_distributed === "bigint");
  },
  encode(message: IncentiveInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edenAmountPerYear !== "") {
      writer.uint32(10).string(message.edenAmountPerYear);
    }
    if (message.blocksDistributed !== BigInt(0)) {
      writer.uint32(16).int64(message.blocksDistributed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentiveInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentiveInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edenAmountPerYear = reader.string();
          break;
        case 2:
          message.blocksDistributed = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentiveInfo {
    return {
      edenAmountPerYear: isSet(object.edenAmountPerYear) ? String(object.edenAmountPerYear) : "",
      blocksDistributed: isSet(object.blocksDistributed) ? BigInt(object.blocksDistributed.toString()) : BigInt(0)
    };
  },
  toJSON(message: IncentiveInfo): JsonSafe<IncentiveInfo> {
    const obj: any = {};
    message.edenAmountPerYear !== undefined && (obj.edenAmountPerYear = message.edenAmountPerYear);
    message.blocksDistributed !== undefined && (obj.blocksDistributed = (message.blocksDistributed || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<IncentiveInfo>): IncentiveInfo {
    const message = createBaseIncentiveInfo();
    message.edenAmountPerYear = object.edenAmountPerYear ?? "";
    message.blocksDistributed = object.blocksDistributed !== undefined && object.blocksDistributed !== null ? BigInt(object.blocksDistributed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IncentiveInfoAmino): IncentiveInfo {
    const message = createBaseIncentiveInfo();
    if (object.eden_amount_per_year !== undefined && object.eden_amount_per_year !== null) {
      message.edenAmountPerYear = object.eden_amount_per_year;
    }
    if (object.blocks_distributed !== undefined && object.blocks_distributed !== null) {
      message.blocksDistributed = BigInt(object.blocks_distributed);
    }
    return message;
  },
  toAmino(message: IncentiveInfo): IncentiveInfoAmino {
    const obj: any = {};
    obj.eden_amount_per_year = message.edenAmountPerYear === "" ? undefined : message.edenAmountPerYear;
    obj.blocks_distributed = message.blocksDistributed !== BigInt(0) ? message.blocksDistributed?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentiveInfoAminoMsg): IncentiveInfo {
    return IncentiveInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: IncentiveInfoProtoMsg): IncentiveInfo {
    return IncentiveInfo.decode(message.value);
  },
  toProto(message: IncentiveInfo): Uint8Array {
    return IncentiveInfo.encode(message).finish();
  },
  toProtoMsg(message: IncentiveInfo): IncentiveInfoProtoMsg {
    return {
      typeUrl: "/elys.estaking.IncentiveInfo",
      value: IncentiveInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentiveInfo.typeUrl, IncentiveInfo);