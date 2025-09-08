import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./pool_params";
import { PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "./pool_asset";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export interface ProposalCreateBalancerPool {
  title: string;
  description: string;
  poolParams?: PoolParams;
  poolAssets: PoolAsset[];
}
export interface ProposalCreateBalancerPoolProtoMsg {
  typeUrl: "/elys.amm.ProposalCreateBalancerPool";
  value: Uint8Array;
}
/**
 * @name ProposalCreateBalancerPoolAmino
 * @package elys.amm
 * @see proto type: elys.amm.ProposalCreateBalancerPool
 */
export interface ProposalCreateBalancerPoolAmino {
  title?: string;
  description?: string;
  pool_params?: PoolParamsAmino;
  pool_assets?: PoolAssetAmino[];
}
export interface ProposalCreateBalancerPoolAminoMsg {
  type: "/elys.amm.ProposalCreateBalancerPool";
  value: ProposalCreateBalancerPoolAmino;
}
export interface ProposalCreateBalancerPoolSDKType {
  title: string;
  description: string;
  pool_params?: PoolParamsSDKType;
  pool_assets: PoolAssetSDKType[];
}
export interface ProposalUpdatePoolParams {
  title: string;
  description: string;
  poolId: bigint;
  poolParams: PoolParams;
}
export interface ProposalUpdatePoolParamsProtoMsg {
  typeUrl: "/elys.amm.ProposalUpdatePoolParams";
  value: Uint8Array;
}
/**
 * @name ProposalUpdatePoolParamsAmino
 * @package elys.amm
 * @see proto type: elys.amm.ProposalUpdatePoolParams
 */
export interface ProposalUpdatePoolParamsAmino {
  title?: string;
  description?: string;
  pool_id?: string;
  pool_params?: PoolParamsAmino;
}
export interface ProposalUpdatePoolParamsAminoMsg {
  type: "/elys.amm.ProposalUpdatePoolParams";
  value: ProposalUpdatePoolParamsAmino;
}
export interface ProposalUpdatePoolParamsSDKType {
  title: string;
  description: string;
  pool_id: bigint;
  pool_params: PoolParamsSDKType;
}
function createBaseProposalCreateBalancerPool(): ProposalCreateBalancerPool {
  return {
    title: "",
    description: "",
    poolParams: undefined,
    poolAssets: []
  };
}
export const ProposalCreateBalancerPool = {
  typeUrl: "/elys.amm.ProposalCreateBalancerPool",
  is(o: any): o is ProposalCreateBalancerPool {
    return o && (o.$typeUrl === ProposalCreateBalancerPool.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.poolAssets) && (!o.poolAssets.length || PoolAsset.is(o.poolAssets[0])));
  },
  isSDK(o: any): o is ProposalCreateBalancerPoolSDKType {
    return o && (o.$typeUrl === ProposalCreateBalancerPool.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_assets) && (!o.pool_assets.length || PoolAsset.isSDK(o.pool_assets[0])));
  },
  isAmino(o: any): o is ProposalCreateBalancerPoolAmino {
    return o && (o.$typeUrl === ProposalCreateBalancerPool.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.pool_assets) && (!o.pool_assets.length || PoolAsset.isAmino(o.pool_assets[0])));
  },
  encode(message: ProposalCreateBalancerPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.poolAssets) {
      PoolAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalCreateBalancerPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalCreateBalancerPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolAssets.push(PoolAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProposalCreateBalancerPool {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined,
      poolAssets: Array.isArray(object?.poolAssets) ? object.poolAssets.map((e: any) => PoolAsset.fromJSON(e)) : []
    };
  },
  toJSON(message: ProposalCreateBalancerPool): JsonSafe<ProposalCreateBalancerPool> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    if (message.poolAssets) {
      obj.poolAssets = message.poolAssets.map(e => e ? PoolAsset.toJSON(e) : undefined);
    } else {
      obj.poolAssets = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ProposalCreateBalancerPool>): ProposalCreateBalancerPool {
    const message = createBaseProposalCreateBalancerPool();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    message.poolAssets = object.poolAssets?.map(e => PoolAsset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ProposalCreateBalancerPoolAmino): ProposalCreateBalancerPool {
    const message = createBaseProposalCreateBalancerPool();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    message.poolAssets = object.pool_assets?.map(e => PoolAsset.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProposalCreateBalancerPool): ProposalCreateBalancerPoolAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    if (message.poolAssets) {
      obj.pool_assets = message.poolAssets.map(e => e ? PoolAsset.toAmino(e) : undefined);
    } else {
      obj.pool_assets = message.poolAssets;
    }
    return obj;
  },
  fromAminoMsg(object: ProposalCreateBalancerPoolAminoMsg): ProposalCreateBalancerPool {
    return ProposalCreateBalancerPool.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalCreateBalancerPoolProtoMsg): ProposalCreateBalancerPool {
    return ProposalCreateBalancerPool.decode(message.value);
  },
  toProto(message: ProposalCreateBalancerPool): Uint8Array {
    return ProposalCreateBalancerPool.encode(message).finish();
  },
  toProtoMsg(message: ProposalCreateBalancerPool): ProposalCreateBalancerPoolProtoMsg {
    return {
      typeUrl: "/elys.amm.ProposalCreateBalancerPool",
      value: ProposalCreateBalancerPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProposalCreateBalancerPool.typeUrl, ProposalCreateBalancerPool);
function createBaseProposalUpdatePoolParams(): ProposalUpdatePoolParams {
  return {
    title: "",
    description: "",
    poolId: BigInt(0),
    poolParams: PoolParams.fromPartial({})
  };
}
export const ProposalUpdatePoolParams = {
  typeUrl: "/elys.amm.ProposalUpdatePoolParams",
  is(o: any): o is ProposalUpdatePoolParams {
    return o && (o.$typeUrl === ProposalUpdatePoolParams.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.poolId === "bigint" && PoolParams.is(o.poolParams));
  },
  isSDK(o: any): o is ProposalUpdatePoolParamsSDKType {
    return o && (o.$typeUrl === ProposalUpdatePoolParams.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.pool_id === "bigint" && PoolParams.isSDK(o.pool_params));
  },
  isAmino(o: any): o is ProposalUpdatePoolParamsAmino {
    return o && (o.$typeUrl === ProposalUpdatePoolParams.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.pool_id === "bigint" && PoolParams.isAmino(o.pool_params));
  },
  encode(message: ProposalUpdatePoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.poolParams !== undefined) {
      PoolParams.encode(message.poolParams, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalUpdatePoolParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalUpdatePoolParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.poolParams = PoolParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProposalUpdatePoolParams {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      poolParams: isSet(object.poolParams) ? PoolParams.fromJSON(object.poolParams) : undefined
    };
  },
  toJSON(message: ProposalUpdatePoolParams): JsonSafe<ProposalUpdatePoolParams> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.poolParams !== undefined && (obj.poolParams = message.poolParams ? PoolParams.toJSON(message.poolParams) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ProposalUpdatePoolParams>): ProposalUpdatePoolParams {
    const message = createBaseProposalUpdatePoolParams();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? PoolParams.fromPartial(object.poolParams) : undefined;
    return message;
  },
  fromAmino(object: ProposalUpdatePoolParamsAmino): ProposalUpdatePoolParams {
    const message = createBaseProposalUpdatePoolParams();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = PoolParams.fromAmino(object.pool_params);
    }
    return message;
  },
  toAmino(message: ProposalUpdatePoolParams): ProposalUpdatePoolParamsAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.pool_params = message.poolParams ? PoolParams.toAmino(message.poolParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalUpdatePoolParamsAminoMsg): ProposalUpdatePoolParams {
    return ProposalUpdatePoolParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalUpdatePoolParamsProtoMsg): ProposalUpdatePoolParams {
    return ProposalUpdatePoolParams.decode(message.value);
  },
  toProto(message: ProposalUpdatePoolParams): Uint8Array {
    return ProposalUpdatePoolParams.encode(message).finish();
  },
  toProtoMsg(message: ProposalUpdatePoolParams): ProposalUpdatePoolParamsProtoMsg {
    return {
      typeUrl: "/elys.amm.ProposalUpdatePoolParams",
      value: ProposalUpdatePoolParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProposalUpdatePoolParams.typeUrl, ProposalUpdatePoolParams);