import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** ExternalIncentive defines the external incentives. */
export interface ExternalIncentive {
  id: bigint;
  rewardDenom: string;
  poolId: bigint;
  fromBlock: bigint;
  toBlock: bigint;
  amountPerBlock: string;
  apr: string;
}
export interface ExternalIncentiveProtoMsg {
  typeUrl: "/elys.masterchef.ExternalIncentive";
  value: Uint8Array;
}
/**
 * ExternalIncentive defines the external incentives.
 * @name ExternalIncentiveAmino
 * @package elys.masterchef
 * @see proto type: elys.masterchef.ExternalIncentive
 */
export interface ExternalIncentiveAmino {
  id?: string;
  reward_denom?: string;
  pool_id?: string;
  from_block?: string;
  to_block?: string;
  amount_per_block?: string;
  apr?: string;
}
export interface ExternalIncentiveAminoMsg {
  type: "/elys.masterchef.ExternalIncentive";
  value: ExternalIncentiveAmino;
}
/** ExternalIncentive defines the external incentives. */
export interface ExternalIncentiveSDKType {
  id: bigint;
  reward_denom: string;
  pool_id: bigint;
  from_block: bigint;
  to_block: bigint;
  amount_per_block: string;
  apr: string;
}
function createBaseExternalIncentive(): ExternalIncentive {
  return {
    id: BigInt(0),
    rewardDenom: "",
    poolId: BigInt(0),
    fromBlock: BigInt(0),
    toBlock: BigInt(0),
    amountPerBlock: "",
    apr: ""
  };
}
export const ExternalIncentive = {
  typeUrl: "/elys.masterchef.ExternalIncentive",
  is(o: any): o is ExternalIncentive {
    return o && (o.$typeUrl === ExternalIncentive.typeUrl || typeof o.id === "bigint" && typeof o.rewardDenom === "string" && typeof o.poolId === "bigint" && typeof o.fromBlock === "bigint" && typeof o.toBlock === "bigint" && typeof o.amountPerBlock === "string" && typeof o.apr === "string");
  },
  isSDK(o: any): o is ExternalIncentiveSDKType {
    return o && (o.$typeUrl === ExternalIncentive.typeUrl || typeof o.id === "bigint" && typeof o.reward_denom === "string" && typeof o.pool_id === "bigint" && typeof o.from_block === "bigint" && typeof o.to_block === "bigint" && typeof o.amount_per_block === "string" && typeof o.apr === "string");
  },
  isAmino(o: any): o is ExternalIncentiveAmino {
    return o && (o.$typeUrl === ExternalIncentive.typeUrl || typeof o.id === "bigint" && typeof o.reward_denom === "string" && typeof o.pool_id === "bigint" && typeof o.from_block === "bigint" && typeof o.to_block === "bigint" && typeof o.amount_per_block === "string" && typeof o.apr === "string");
  },
  encode(message: ExternalIncentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.fromBlock !== BigInt(0)) {
      writer.uint32(32).int64(message.fromBlock);
    }
    if (message.toBlock !== BigInt(0)) {
      writer.uint32(40).int64(message.toBlock);
    }
    if (message.amountPerBlock !== "") {
      writer.uint32(50).string(message.amountPerBlock);
    }
    if (message.apr !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.apr, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExternalIncentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExternalIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.fromBlock = reader.int64();
          break;
        case 5:
          message.toBlock = reader.int64();
          break;
        case 6:
          message.amountPerBlock = reader.string();
          break;
        case 7:
          message.apr = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExternalIncentive {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      rewardDenom: isSet(object.rewardDenom) ? String(object.rewardDenom) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      fromBlock: isSet(object.fromBlock) ? BigInt(object.fromBlock.toString()) : BigInt(0),
      toBlock: isSet(object.toBlock) ? BigInt(object.toBlock.toString()) : BigInt(0),
      amountPerBlock: isSet(object.amountPerBlock) ? String(object.amountPerBlock) : "",
      apr: isSet(object.apr) ? String(object.apr) : ""
    };
  },
  toJSON(message: ExternalIncentive): JsonSafe<ExternalIncentive> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.fromBlock !== undefined && (obj.fromBlock = (message.fromBlock || BigInt(0)).toString());
    message.toBlock !== undefined && (obj.toBlock = (message.toBlock || BigInt(0)).toString());
    message.amountPerBlock !== undefined && (obj.amountPerBlock = message.amountPerBlock);
    message.apr !== undefined && (obj.apr = message.apr);
    return obj;
  },
  fromPartial(object: Partial<ExternalIncentive>): ExternalIncentive {
    const message = createBaseExternalIncentive();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.rewardDenom = object.rewardDenom ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.fromBlock = object.fromBlock !== undefined && object.fromBlock !== null ? BigInt(object.fromBlock.toString()) : BigInt(0);
    message.toBlock = object.toBlock !== undefined && object.toBlock !== null ? BigInt(object.toBlock.toString()) : BigInt(0);
    message.amountPerBlock = object.amountPerBlock ?? "";
    message.apr = object.apr ?? "";
    return message;
  },
  fromAmino(object: ExternalIncentiveAmino): ExternalIncentive {
    const message = createBaseExternalIncentive();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.reward_denom !== undefined && object.reward_denom !== null) {
      message.rewardDenom = object.reward_denom;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.from_block !== undefined && object.from_block !== null) {
      message.fromBlock = BigInt(object.from_block);
    }
    if (object.to_block !== undefined && object.to_block !== null) {
      message.toBlock = BigInt(object.to_block);
    }
    if (object.amount_per_block !== undefined && object.amount_per_block !== null) {
      message.amountPerBlock = object.amount_per_block;
    }
    if (object.apr !== undefined && object.apr !== null) {
      message.apr = object.apr;
    }
    return message;
  },
  toAmino(message: ExternalIncentive): ExternalIncentiveAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.reward_denom = message.rewardDenom === "" ? undefined : message.rewardDenom;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.from_block = message.fromBlock !== BigInt(0) ? message.fromBlock?.toString() : undefined;
    obj.to_block = message.toBlock !== BigInt(0) ? message.toBlock?.toString() : undefined;
    obj.amount_per_block = message.amountPerBlock === "" ? undefined : message.amountPerBlock;
    obj.apr = message.apr === "" ? undefined : message.apr;
    return obj;
  },
  fromAminoMsg(object: ExternalIncentiveAminoMsg): ExternalIncentive {
    return ExternalIncentive.fromAmino(object.value);
  },
  fromProtoMsg(message: ExternalIncentiveProtoMsg): ExternalIncentive {
    return ExternalIncentive.decode(message.value);
  },
  toProto(message: ExternalIncentive): Uint8Array {
    return ExternalIncentive.encode(message).finish();
  },
  toProtoMsg(message: ExternalIncentive): ExternalIncentiveProtoMsg {
    return {
      typeUrl: "/elys.masterchef.ExternalIncentive",
      value: ExternalIncentive.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExternalIncentive.typeUrl, ExternalIncentive);