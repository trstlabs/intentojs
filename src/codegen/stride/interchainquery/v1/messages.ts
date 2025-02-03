import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
  chainId: string;
  queryId: string;
  result: Uint8Array;
  proofOps?: ProofOps;
  height: bigint;
  fromAddress: string;
}
export interface MsgSubmitQueryResponseProtoMsg {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse";
  value: Uint8Array;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseAmino {
  chain_id?: string;
  query_id?: string;
  result?: string;
  proof_ops?: ProofOpsAmino;
  height?: string;
  from_address?: string;
}
export interface MsgSubmitQueryResponseAminoMsg {
  type: "icq/MsgSubmitQueryResponse";
  value: MsgSubmitQueryResponseAmino;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseSDKType {
  chain_id: string;
  query_id: string;
  result: Uint8Array;
  proof_ops?: ProofOpsSDKType;
  height: bigint;
  from_address: string;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {}
export interface MsgSubmitQueryResponseResponseProtoMsg {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseAmino {}
export interface MsgSubmitQueryResponseResponseAminoMsg {
  type: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse";
  value: MsgSubmitQueryResponseResponseAmino;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseSDKType {}
function createBaseMsgSubmitQueryResponse(): MsgSubmitQueryResponse {
  return {
    chainId: "",
    queryId: "",
    result: new Uint8Array(),
    proofOps: undefined,
    height: BigInt(0),
    fromAddress: ""
  };
}
export const MsgSubmitQueryResponse = {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
  aminoType: "icq/MsgSubmitQueryResponse",
  is(o: any): o is MsgSubmitQueryResponse {
    return o && (o.$typeUrl === MsgSubmitQueryResponse.typeUrl || typeof o.chainId === "string" && typeof o.queryId === "string" && (o.result instanceof Uint8Array || typeof o.result === "string") && typeof o.height === "bigint" && typeof o.fromAddress === "string");
  },
  isSDK(o: any): o is MsgSubmitQueryResponseSDKType {
    return o && (o.$typeUrl === MsgSubmitQueryResponse.typeUrl || typeof o.chain_id === "string" && typeof o.query_id === "string" && (o.result instanceof Uint8Array || typeof o.result === "string") && typeof o.height === "bigint" && typeof o.from_address === "string");
  },
  isAmino(o: any): o is MsgSubmitQueryResponseAmino {
    return o && (o.$typeUrl === MsgSubmitQueryResponse.typeUrl || typeof o.chain_id === "string" && typeof o.query_id === "string" && (o.result instanceof Uint8Array || typeof o.result === "string") && typeof o.height === "bigint" && typeof o.from_address === "string");
  },
  encode(message: MsgSubmitQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.queryId !== "") {
      writer.uint32(18).string(message.queryId);
    }
    if (message.result.length !== 0) {
      writer.uint32(26).bytes(message.result);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.fromAddress !== "") {
      writer.uint32(50).string(message.fromAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.queryId = reader.string();
          break;
        case 3:
          message.result = reader.bytes();
          break;
        case 4:
          message.proofOps = ProofOps.decode(reader, reader.uint32());
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.fromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitQueryResponse {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
    };
  },
  toJSON(message: MsgSubmitQueryResponse): JsonSafe<MsgSubmitQueryResponse> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.queryId !== undefined && (obj.queryId = message.queryId);
    message.result !== undefined && (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
    message.proofOps !== undefined && (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitQueryResponse>): MsgSubmitQueryResponse {
    const message = createBaseMsgSubmitQueryResponse();
    message.chainId = object.chainId ?? "";
    message.queryId = object.queryId ?? "";
    message.result = object.result ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitQueryResponseAmino): MsgSubmitQueryResponse {
    const message = createBaseMsgSubmitQueryResponse();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.query_id !== undefined && object.query_id !== null) {
      message.queryId = object.query_id;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proofOps = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    return message;
  },
  toAmino(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.query_id = message.queryId === "" ? undefined : message.queryId;
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitQueryResponseAminoMsg): MsgSubmitQueryResponse {
    return MsgSubmitQueryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseAminoMsg {
    return {
      type: "icq/MsgSubmitQueryResponse",
      value: MsgSubmitQueryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitQueryResponseProtoMsg): MsgSubmitQueryResponse {
    return MsgSubmitQueryResponse.decode(message.value);
  },
  toProto(message: MsgSubmitQueryResponse): Uint8Array {
    return MsgSubmitQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
      value: MsgSubmitQueryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitQueryResponse.typeUrl, MsgSubmitQueryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitQueryResponse.aminoType, MsgSubmitQueryResponse.typeUrl);
function createBaseMsgSubmitQueryResponseResponse(): MsgSubmitQueryResponseResponse {
  return {};
}
export const MsgSubmitQueryResponseResponse = {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse",
  is(o: any): o is MsgSubmitQueryResponseResponse {
    return o && o.$typeUrl === MsgSubmitQueryResponseResponse.typeUrl;
  },
  isSDK(o: any): o is MsgSubmitQueryResponseResponseSDKType {
    return o && o.$typeUrl === MsgSubmitQueryResponseResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitQueryResponseResponseAmino {
    return o && o.$typeUrl === MsgSubmitQueryResponseResponse.typeUrl;
  },
  encode(_: MsgSubmitQueryResponseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitQueryResponseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitQueryResponseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSubmitQueryResponseResponse {
    return {};
  },
  toJSON(_: MsgSubmitQueryResponseResponse): JsonSafe<MsgSubmitQueryResponseResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSubmitQueryResponseResponse>): MsgSubmitQueryResponseResponse {
    const message = createBaseMsgSubmitQueryResponseResponse();
    return message;
  },
  fromAmino(_: MsgSubmitQueryResponseResponseAmino): MsgSubmitQueryResponseResponse {
    const message = createBaseMsgSubmitQueryResponseResponse();
    return message;
  },
  toAmino(_: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitQueryResponseResponseAminoMsg): MsgSubmitQueryResponseResponse {
    return MsgSubmitQueryResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitQueryResponseResponseProtoMsg): MsgSubmitQueryResponseResponse {
    return MsgSubmitQueryResponseResponse.decode(message.value);
  },
  toProto(message: MsgSubmitQueryResponseResponse): Uint8Array {
    return MsgSubmitQueryResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse",
      value: MsgSubmitQueryResponseResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgSubmitQueryResponseResponse.typeUrl, MsgSubmitQueryResponseResponse);