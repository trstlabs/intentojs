import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** Incentive Info */
export interface LegacyIncentiveInfo {
  /** reward amount in eden for 1 year */
  edenAmountPerYear: string;
  /** starting block height of the distribution */
  distributionStartBlock: string;
  /** distribution duration - block number per year */
  totalBlocksPerYear: string;
  /** blocks distributed */
  blocksDistributed: string;
}
export interface LegacyIncentiveInfoProtoMsg {
  typeUrl: "/elys.masterchef.LegacyIncentiveInfo";
  value: Uint8Array;
}
/**
 * Incentive Info
 * @name LegacyIncentiveInfoAmino
 * @package elys.masterchef
 * @see proto type: elys.masterchef.LegacyIncentiveInfo
 */
export interface LegacyIncentiveInfoAmino {
  /**
   * reward amount in eden for 1 year
   */
  eden_amount_per_year?: string;
  /**
   * starting block height of the distribution
   */
  distribution_start_block?: string;
  /**
   * distribution duration - block number per year
   */
  total_blocks_per_year?: string;
  /**
   * blocks distributed
   */
  blocks_distributed?: string;
}
export interface LegacyIncentiveInfoAminoMsg {
  type: "/elys.masterchef.LegacyIncentiveInfo";
  value: LegacyIncentiveInfoAmino;
}
/** Incentive Info */
export interface LegacyIncentiveInfoSDKType {
  eden_amount_per_year: string;
  distribution_start_block: string;
  total_blocks_per_year: string;
  blocks_distributed: string;
}
export interface IncentiveInfo {
  /** reward amount in eden for 1 year */
  edenAmountPerYear: string;
  /** blocks distributed */
  blocksDistributed: bigint;
}
export interface IncentiveInfoProtoMsg {
  typeUrl: "/elys.masterchef.IncentiveInfo";
  value: Uint8Array;
}
/**
 * @name IncentiveInfoAmino
 * @package elys.masterchef
 * @see proto type: elys.masterchef.IncentiveInfo
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
  type: "/elys.masterchef.IncentiveInfo";
  value: IncentiveInfoAmino;
}
export interface IncentiveInfoSDKType {
  eden_amount_per_year: string;
  blocks_distributed: bigint;
}
function createBaseLegacyIncentiveInfo(): LegacyIncentiveInfo {
  return {
    edenAmountPerYear: "",
    distributionStartBlock: "",
    totalBlocksPerYear: "",
    blocksDistributed: ""
  };
}
export const LegacyIncentiveInfo = {
  typeUrl: "/elys.masterchef.LegacyIncentiveInfo",
  is(o: any): o is LegacyIncentiveInfo {
    return o && (o.$typeUrl === LegacyIncentiveInfo.typeUrl || typeof o.edenAmountPerYear === "string" && typeof o.distributionStartBlock === "string" && typeof o.totalBlocksPerYear === "string" && typeof o.blocksDistributed === "string");
  },
  isSDK(o: any): o is LegacyIncentiveInfoSDKType {
    return o && (o.$typeUrl === LegacyIncentiveInfo.typeUrl || typeof o.eden_amount_per_year === "string" && typeof o.distribution_start_block === "string" && typeof o.total_blocks_per_year === "string" && typeof o.blocks_distributed === "string");
  },
  isAmino(o: any): o is LegacyIncentiveInfoAmino {
    return o && (o.$typeUrl === LegacyIncentiveInfo.typeUrl || typeof o.eden_amount_per_year === "string" && typeof o.distribution_start_block === "string" && typeof o.total_blocks_per_year === "string" && typeof o.blocks_distributed === "string");
  },
  encode(message: LegacyIncentiveInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edenAmountPerYear !== "") {
      writer.uint32(10).string(message.edenAmountPerYear);
    }
    if (message.distributionStartBlock !== "") {
      writer.uint32(18).string(message.distributionStartBlock);
    }
    if (message.totalBlocksPerYear !== "") {
      writer.uint32(26).string(message.totalBlocksPerYear);
    }
    if (message.blocksDistributed !== "") {
      writer.uint32(34).string(message.blocksDistributed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyIncentiveInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyIncentiveInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edenAmountPerYear = reader.string();
          break;
        case 2:
          message.distributionStartBlock = reader.string();
          break;
        case 3:
          message.totalBlocksPerYear = reader.string();
          break;
        case 4:
          message.blocksDistributed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LegacyIncentiveInfo {
    return {
      edenAmountPerYear: isSet(object.edenAmountPerYear) ? String(object.edenAmountPerYear) : "",
      distributionStartBlock: isSet(object.distributionStartBlock) ? String(object.distributionStartBlock) : "",
      totalBlocksPerYear: isSet(object.totalBlocksPerYear) ? String(object.totalBlocksPerYear) : "",
      blocksDistributed: isSet(object.blocksDistributed) ? String(object.blocksDistributed) : ""
    };
  },
  toJSON(message: LegacyIncentiveInfo): JsonSafe<LegacyIncentiveInfo> {
    const obj: any = {};
    message.edenAmountPerYear !== undefined && (obj.edenAmountPerYear = message.edenAmountPerYear);
    message.distributionStartBlock !== undefined && (obj.distributionStartBlock = message.distributionStartBlock);
    message.totalBlocksPerYear !== undefined && (obj.totalBlocksPerYear = message.totalBlocksPerYear);
    message.blocksDistributed !== undefined && (obj.blocksDistributed = message.blocksDistributed);
    return obj;
  },
  fromPartial(object: Partial<LegacyIncentiveInfo>): LegacyIncentiveInfo {
    const message = createBaseLegacyIncentiveInfo();
    message.edenAmountPerYear = object.edenAmountPerYear ?? "";
    message.distributionStartBlock = object.distributionStartBlock ?? "";
    message.totalBlocksPerYear = object.totalBlocksPerYear ?? "";
    message.blocksDistributed = object.blocksDistributed ?? "";
    return message;
  },
  fromAmino(object: LegacyIncentiveInfoAmino): LegacyIncentiveInfo {
    const message = createBaseLegacyIncentiveInfo();
    if (object.eden_amount_per_year !== undefined && object.eden_amount_per_year !== null) {
      message.edenAmountPerYear = object.eden_amount_per_year;
    }
    if (object.distribution_start_block !== undefined && object.distribution_start_block !== null) {
      message.distributionStartBlock = object.distribution_start_block;
    }
    if (object.total_blocks_per_year !== undefined && object.total_blocks_per_year !== null) {
      message.totalBlocksPerYear = object.total_blocks_per_year;
    }
    if (object.blocks_distributed !== undefined && object.blocks_distributed !== null) {
      message.blocksDistributed = object.blocks_distributed;
    }
    return message;
  },
  toAmino(message: LegacyIncentiveInfo): LegacyIncentiveInfoAmino {
    const obj: any = {};
    obj.eden_amount_per_year = message.edenAmountPerYear === "" ? undefined : message.edenAmountPerYear;
    obj.distribution_start_block = message.distributionStartBlock === "" ? undefined : message.distributionStartBlock;
    obj.total_blocks_per_year = message.totalBlocksPerYear === "" ? undefined : message.totalBlocksPerYear;
    obj.blocks_distributed = message.blocksDistributed === "" ? undefined : message.blocksDistributed;
    return obj;
  },
  fromAminoMsg(object: LegacyIncentiveInfoAminoMsg): LegacyIncentiveInfo {
    return LegacyIncentiveInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyIncentiveInfoProtoMsg): LegacyIncentiveInfo {
    return LegacyIncentiveInfo.decode(message.value);
  },
  toProto(message: LegacyIncentiveInfo): Uint8Array {
    return LegacyIncentiveInfo.encode(message).finish();
  },
  toProtoMsg(message: LegacyIncentiveInfo): LegacyIncentiveInfoProtoMsg {
    return {
      typeUrl: "/elys.masterchef.LegacyIncentiveInfo",
      value: LegacyIncentiveInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LegacyIncentiveInfo.typeUrl, LegacyIncentiveInfo);
function createBaseIncentiveInfo(): IncentiveInfo {
  return {
    edenAmountPerYear: "",
    blocksDistributed: BigInt(0)
  };
}
export const IncentiveInfo = {
  typeUrl: "/elys.masterchef.IncentiveInfo",
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
      typeUrl: "/elys.masterchef.IncentiveInfo",
      value: IncentiveInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IncentiveInfo.typeUrl, IncentiveInfo);