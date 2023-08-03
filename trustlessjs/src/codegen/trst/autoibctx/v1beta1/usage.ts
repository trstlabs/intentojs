import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface AutoTxIbcUsage {
  address: string;
  txs: AutoIbcTxAck[];
}
export interface AutoTxIbcUsageProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.AutoTxIbcUsage";
  value: Uint8Array;
}
export interface AutoTxIbcUsageAmino {
  address: string;
  txs: AutoIbcTxAckAmino[];
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
  connection_id: string;
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
    return {
      address: object.address,
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => AutoIbcTxAck.fromAmino(e)) : []
    };
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
function createBaseAutoIbcTxAck(): AutoIbcTxAck {
  return {
    coin: Coin.fromPartial({}),
    connectionId: ""
  };
}
export const AutoIbcTxAck = {
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
    return {
      coin: object?.coin ? Coin.fromAmino(object.coin) : undefined,
      connectionId: object.connection_id
    };
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