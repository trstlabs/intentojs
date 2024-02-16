import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface AutoTxIbcUsage {
  address: string;
  txs: AutoIbcTxAck[];
}
export interface AutoTxIbcUsageProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxIbcUsage";
  value: Uint8Array;
}
export interface AutoTxIbcUsageAmino {
  address?: string;
  txs?: AutoIbcTxAckAmino[];
}
export interface AutoTxIbcUsageAminoMsg {
  type: "/trst.autoibctx.v1beta1.AutoTxIbcUsage";
  value: AutoTxIbcUsageAmino;
}
export interface AutoTxIbcUsageSDKType {
  address: string;
  txs: AutoIbcTxAckSDKType[];
}
export interface AutoIbcTxAck {
  coin: Coin;
  connectionId: string;
}
export interface AutoIbcTxAckProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoIbcTxAck";
  value: Uint8Array;
}
export interface AutoIbcTxAckAmino {
  coin?: CoinAmino;
  connection_id?: string;
}
export interface AutoIbcTxAckAminoMsg {
  type: "/trst.autoibctx.v1beta1.AutoIbcTxAck";
  value: AutoIbcTxAckAmino;
}
export interface AutoIbcTxAckSDKType {
  coin: CoinSDKType;
  connection_id: string;
}
function createBaseAutoTxIbcUsage(): AutoTxIbcUsage {
  return {
    address: "",
    txs: []
  };
}
export const AutoTxIbcUsage = {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxIbcUsage",
  is(o: any): o is AutoTxIbcUsage {
    return o && (o.$typeUrl === AutoTxIbcUsage.typeUrl || typeof o.address === "string" && Array.isArray(o.txs) && (!o.txs.length || AutoIbcTxAck.is(o.txs[0])));
  },
  isSDK(o: any): o is AutoTxIbcUsageSDKType {
    return o && (o.$typeUrl === AutoTxIbcUsage.typeUrl || typeof o.address === "string" && Array.isArray(o.txs) && (!o.txs.length || AutoIbcTxAck.isSDK(o.txs[0])));
  },
  isAmino(o: any): o is AutoTxIbcUsageAmino {
    return o && (o.$typeUrl === AutoTxIbcUsage.typeUrl || typeof o.address === "string" && Array.isArray(o.txs) && (!o.txs.length || AutoIbcTxAck.isAmino(o.txs[0])));
  },
  encode(message: AutoTxIbcUsage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.txs) {
      AutoIbcTxAck.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutoTxIbcUsage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoTxIbcUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.txs.push(AutoIbcTxAck.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutoTxIbcUsage>): AutoTxIbcUsage {
    const message = createBaseAutoTxIbcUsage();
    message.address = object.address ?? "";
    message.txs = object.txs?.map(e => AutoIbcTxAck.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AutoTxIbcUsageAmino): AutoTxIbcUsage {
    const message = createBaseAutoTxIbcUsage();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.txs = object.txs?.map(e => AutoIbcTxAck.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AutoTxIbcUsage): AutoTxIbcUsageAmino {
    const obj: any = {};
    obj.address = message.address;
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? AutoIbcTxAck.toAmino(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg(object: AutoTxIbcUsageAminoMsg): AutoTxIbcUsage {
    return AutoTxIbcUsage.fromAmino(object.value);
  },
  fromProtoMsg(message: AutoTxIbcUsageProtoMsg): AutoTxIbcUsage {
    return AutoTxIbcUsage.decode(message.value);
  },
  toProto(message: AutoTxIbcUsage): Uint8Array {
    return AutoTxIbcUsage.encode(message).finish();
  },
  toProtoMsg(message: AutoTxIbcUsage): AutoTxIbcUsageProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.AutoTxIbcUsage",
      value: AutoTxIbcUsage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AutoTxIbcUsage.typeUrl, AutoTxIbcUsage);
function createBaseAutoIbcTxAck(): AutoIbcTxAck {
  return {
    coin: Coin.fromPartial({}),
    connectionId: ""
  };
}
export const AutoIbcTxAck = {
  typeUrl: "/trst.autoibctx.v1beta1.AutoIbcTxAck",
  is(o: any): o is AutoIbcTxAck {
    return o && (o.$typeUrl === AutoIbcTxAck.typeUrl || Coin.is(o.coin) && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is AutoIbcTxAckSDKType {
    return o && (o.$typeUrl === AutoIbcTxAck.typeUrl || Coin.isSDK(o.coin) && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is AutoIbcTxAckAmino {
    return o && (o.$typeUrl === AutoIbcTxAck.typeUrl || Coin.isAmino(o.coin) && typeof o.connection_id === "string");
  },
  encode(message: AutoIbcTxAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AutoIbcTxAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAutoIbcTxAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AutoIbcTxAck>): AutoIbcTxAck {
    const message = createBaseAutoIbcTxAck();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: AutoIbcTxAckAmino): AutoIbcTxAck {
    const message = createBaseAutoIbcTxAck();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: AutoIbcTxAck): AutoIbcTxAckAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.connection_id = message.connectionId;
    return obj;
  },
  fromAminoMsg(object: AutoIbcTxAckAminoMsg): AutoIbcTxAck {
    return AutoIbcTxAck.fromAmino(object.value);
  },
  fromProtoMsg(message: AutoIbcTxAckProtoMsg): AutoIbcTxAck {
    return AutoIbcTxAck.decode(message.value);
  },
  toProto(message: AutoIbcTxAck): Uint8Array {
    return AutoIbcTxAck.encode(message).finish();
  },
  toProtoMsg(message: AutoIbcTxAck): AutoIbcTxAckProtoMsg {
    return {
      typeUrl: "/trst.autoibctx.v1beta1.AutoIbcTxAck",
      value: AutoIbcTxAck.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AutoIbcTxAck.typeUrl, AutoIbcTxAck);