import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface AutoTxIbcUsage {
  address: string;
  txs: AutoIbcTxAck[];
}
export interface AutoTxIbcUsageSDKType {
  address: string;
  txs: AutoIbcTxAckSDKType[];
}
export interface AutoIbcTxAck {
  coin: Coin;
  connectionId: string;
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
  fromPartial(object: DeepPartial<AutoTxIbcUsage>): AutoTxIbcUsage {
    const message = createBaseAutoTxIbcUsage();
    message.address = object.address ?? "";
    message.txs = object.txs?.map(e => AutoIbcTxAck.fromPartial(e)) || [];
    return message;
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
  fromPartial(object: DeepPartial<AutoIbcTxAck>): AutoIbcTxAck {
    const message = createBaseAutoIbcTxAck();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.connectionId = object.connectionId ?? "";
    return message;
  }
};