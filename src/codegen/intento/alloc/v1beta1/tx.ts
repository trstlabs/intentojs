import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPool {
  sender: string;
  amount: Coin[];
}
export interface MsgFundFairburnPoolProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.MsgFundFairburnPool";
  value: Uint8Array;
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPoolAmino {
  sender?: string;
  amount: CoinAmino[];
}
export interface MsgFundFairburnPoolAminoMsg {
  type: "alloc/MsgFundFairburnPool";
  value: MsgFundFairburnPoolAmino;
}
/**
 * MsgFundFairburnPool allows an account to directly
 * fund the fee collector pool.
 */
export interface MsgFundFairburnPoolSDKType {
  sender: string;
  amount: CoinSDKType[];
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponse {}
export interface MsgFundFairburnPoolResponseProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.MsgFundFairburnPoolResponse";
  value: Uint8Array;
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponseAmino {}
export interface MsgFundFairburnPoolResponseAminoMsg {
  type: "/intento.alloc.v1beta1.MsgFundFairburnPoolResponse";
  value: MsgFundFairburnPoolResponseAmino;
}
/**
 * MsgFundFairburnPoolResponse defines the Msg/MsgFundFairburnPool response
 * type.
 */
export interface MsgFundFairburnPoolResponseSDKType {}
/**
 * MsgUpdateParams is the request type for updating module's params.
 * 
 * Since: v14
 */
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the request type for updating module's params.
 * 
 * Since: v14
 */
export interface MsgUpdateParamsAmino {
  /** Authority is the address of the governance account. */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "alloc/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the request type for updating module's params.
 * 
 * Since: v14
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse is the response type for executing
 * an update.
 * Since: v14
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse is the response type for executing
 * an update.
 * Since: v14
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/intento.alloc.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse is the response type for executing
 * an update.
 * Since: v14
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgFundFairburnPool(): MsgFundFairburnPool {
  return {
    sender: "",
    amount: []
  };
}
export const MsgFundFairburnPool = {
  typeUrl: "/intento.alloc.v1beta1.MsgFundFairburnPool",
  aminoType: "alloc/MsgFundFairburnPool",
  is(o: any): o is MsgFundFairburnPool {
    return o && (o.$typeUrl === MsgFundFairburnPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isSDK(o: any): o is MsgFundFairburnPoolSDKType {
    return o && (o.$typeUrl === MsgFundFairburnPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])));
  },
  isAmino(o: any): o is MsgFundFairburnPoolAmino {
    return o && (o.$typeUrl === MsgFundFairburnPool.typeUrl || typeof o.sender === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgFundFairburnPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFairburnPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFairburnPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundFairburnPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgFundFairburnPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgFundFairburnPool>): MsgFundFairburnPool {
    const message = createBaseMsgFundFairburnPool();
    message.sender = object.sender ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFundFairburnPoolAmino): MsgFundFairburnPool {
    const message = createBaseMsgFundFairburnPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFundFairburnPool): MsgFundFairburnPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFundFairburnPoolAminoMsg): MsgFundFairburnPool {
    return MsgFundFairburnPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundFairburnPool): MsgFundFairburnPoolAminoMsg {
    return {
      type: "alloc/MsgFundFairburnPool",
      value: MsgFundFairburnPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundFairburnPoolProtoMsg): MsgFundFairburnPool {
    return MsgFundFairburnPool.decode(message.value);
  },
  toProto(message: MsgFundFairburnPool): Uint8Array {
    return MsgFundFairburnPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFairburnPool): MsgFundFairburnPoolProtoMsg {
    return {
      typeUrl: "/intento.alloc.v1beta1.MsgFundFairburnPool",
      value: MsgFundFairburnPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFundFairburnPool.typeUrl, MsgFundFairburnPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgFundFairburnPool.aminoType, MsgFundFairburnPool.typeUrl);
function createBaseMsgFundFairburnPoolResponse(): MsgFundFairburnPoolResponse {
  return {};
}
export const MsgFundFairburnPoolResponse = {
  typeUrl: "/intento.alloc.v1beta1.MsgFundFairburnPoolResponse",
  is(o: any): o is MsgFundFairburnPoolResponse {
    return o && o.$typeUrl === MsgFundFairburnPoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgFundFairburnPoolResponseSDKType {
    return o && o.$typeUrl === MsgFundFairburnPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundFairburnPoolResponseAmino {
    return o && o.$typeUrl === MsgFundFairburnPoolResponse.typeUrl;
  },
  encode(_: MsgFundFairburnPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundFairburnPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundFairburnPoolResponse();
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
  fromJSON(_: any): MsgFundFairburnPoolResponse {
    return {};
  },
  toJSON(_: MsgFundFairburnPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgFundFairburnPoolResponse>): MsgFundFairburnPoolResponse {
    const message = createBaseMsgFundFairburnPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundFairburnPoolResponseAmino): MsgFundFairburnPoolResponse {
    const message = createBaseMsgFundFairburnPoolResponse();
    return message;
  },
  toAmino(_: MsgFundFairburnPoolResponse): MsgFundFairburnPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundFairburnPoolResponseAminoMsg): MsgFundFairburnPoolResponse {
    return MsgFundFairburnPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundFairburnPoolResponseProtoMsg): MsgFundFairburnPoolResponse {
    return MsgFundFairburnPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundFairburnPoolResponse): Uint8Array {
    return MsgFundFairburnPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundFairburnPoolResponse): MsgFundFairburnPoolResponseProtoMsg {
    return {
      typeUrl: "/intento.alloc.v1beta1.MsgFundFairburnPoolResponse",
      value: MsgFundFairburnPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgFundFairburnPoolResponse.typeUrl, MsgFundFairburnPoolResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/intento.alloc.v1beta1.MsgUpdateParams",
  aminoType: "alloc/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "alloc/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/intento.alloc.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/intento.alloc.v1beta1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/intento.alloc.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);