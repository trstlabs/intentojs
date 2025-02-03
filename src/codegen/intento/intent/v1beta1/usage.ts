import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export interface ActionIbcUsage {
  address: string;
  txs: ActionAck[];
}
export interface ActionIbcUsageProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ActionIbcUsage";
  value: Uint8Array;
}
export interface ActionIbcUsageAmino {
  address?: string;
  txs?: ActionAckAmino[];
}
export interface ActionIbcUsageAminoMsg {
  type: "/intento.intent.v1beta1.ActionIbcUsage";
  value: ActionIbcUsageAmino;
}
export interface ActionIbcUsageSDKType {
  address: string;
  txs: ActionAckSDKType[];
}
export interface ActionAck {
  coin: Coin;
  connectionId: string;
}
export interface ActionAckProtoMsg {
  typeUrl: "/intento.intent.v1beta1.ActionAck";
  value: Uint8Array;
}
export interface ActionAckAmino {
  coin?: CoinAmino;
  connection_id?: string;
}
export interface ActionAckAminoMsg {
  type: "/intento.intent.v1beta1.ActionAck";
  value: ActionAckAmino;
}
export interface ActionAckSDKType {
  coin: CoinSDKType;
  connection_id: string;
}
function createBaseActionIbcUsage(): ActionIbcUsage {
  return {
    address: "",
    txs: []
  };
}
export const ActionIbcUsage = {
  typeUrl: "/intento.intent.v1beta1.ActionIbcUsage",
  is(o: any): o is ActionIbcUsage {
    return o && (o.$typeUrl === ActionIbcUsage.typeUrl || typeof o.address === "string" && Array.isArray(o.txs) && (!o.txs.length || ActionAck.is(o.txs[0])));
  },
  isSDK(o: any): o is ActionIbcUsageSDKType {
    return o && (o.$typeUrl === ActionIbcUsage.typeUrl || typeof o.address === "string" && Array.isArray(o.txs) && (!o.txs.length || ActionAck.isSDK(o.txs[0])));
  },
  isAmino(o: any): o is ActionIbcUsageAmino {
    return o && (o.$typeUrl === ActionIbcUsage.typeUrl || typeof o.address === "string" && Array.isArray(o.txs) && (!o.txs.length || ActionAck.isAmino(o.txs[0])));
  },
  encode(message: ActionIbcUsage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.txs) {
      ActionAck.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionIbcUsage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionIbcUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.txs.push(ActionAck.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActionIbcUsage {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => ActionAck.fromJSON(e)) : []
    };
  },
  toJSON(message: ActionIbcUsage): JsonSafe<ActionIbcUsage> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? ActionAck.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ActionIbcUsage>): ActionIbcUsage {
    const message = createBaseActionIbcUsage();
    message.address = object.address ?? "";
    message.txs = object.txs?.map(e => ActionAck.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ActionIbcUsageAmino): ActionIbcUsage {
    const message = createBaseActionIbcUsage();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.txs = object.txs?.map(e => ActionAck.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ActionIbcUsage): ActionIbcUsageAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? ActionAck.toAmino(e) : undefined);
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: ActionIbcUsageAminoMsg): ActionIbcUsage {
    return ActionIbcUsage.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionIbcUsageProtoMsg): ActionIbcUsage {
    return ActionIbcUsage.decode(message.value);
  },
  toProto(message: ActionIbcUsage): Uint8Array {
    return ActionIbcUsage.encode(message).finish();
  },
  toProtoMsg(message: ActionIbcUsage): ActionIbcUsageProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ActionIbcUsage",
      value: ActionIbcUsage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActionIbcUsage.typeUrl, ActionIbcUsage);
function createBaseActionAck(): ActionAck {
  return {
    coin: Coin.fromPartial({}),
    connectionId: ""
  };
}
export const ActionAck = {
  typeUrl: "/intento.intent.v1beta1.ActionAck",
  is(o: any): o is ActionAck {
    return o && (o.$typeUrl === ActionAck.typeUrl || Coin.is(o.coin) && typeof o.connectionId === "string");
  },
  isSDK(o: any): o is ActionAckSDKType {
    return o && (o.$typeUrl === ActionAck.typeUrl || Coin.isSDK(o.coin) && typeof o.connection_id === "string");
  },
  isAmino(o: any): o is ActionAckAmino {
    return o && (o.$typeUrl === ActionAck.typeUrl || Coin.isAmino(o.coin) && typeof o.connection_id === "string");
  },
  encode(message: ActionAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionAck();
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
  fromJSON(object: any): ActionAck {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  toJSON(message: ActionAck): JsonSafe<ActionAck> {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial(object: Partial<ActionAck>): ActionAck {
    const message = createBaseActionAck();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: ActionAckAmino): ActionAck {
    const message = createBaseActionAck();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: ActionAck): ActionAckAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    return obj;
  },
  fromAminoMsg(object: ActionAckAminoMsg): ActionAck {
    return ActionAck.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionAckProtoMsg): ActionAck {
    return ActionAck.decode(message.value);
  },
  toProto(message: ActionAck): Uint8Array {
    return ActionAck.encode(message).finish();
  },
  toProtoMsg(message: ActionAck): ActionAckProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.ActionAck",
      value: ActionAck.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActionAck.typeUrl, ActionAck);