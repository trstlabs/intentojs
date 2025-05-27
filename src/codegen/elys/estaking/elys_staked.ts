import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Elys staked amount is tracked because EdenBoost has to be burnt when unstake
 * ELYS event happens, and there's no way to track staked amount change from
 * staking hook and this struct is added.
 */
export interface ElysStaked {
  address: string;
  amount: string;
}
export interface ElysStakedProtoMsg {
  typeUrl: "/elys.estaking.ElysStaked";
  value: Uint8Array;
}
/**
 * Elys staked amount is tracked because EdenBoost has to be burnt when unstake
 * ELYS event happens, and there's no way to track staked amount change from
 * staking hook and this struct is added.
 */
export interface ElysStakedAmino {
  address?: string;
  amount?: string;
}
export interface ElysStakedAminoMsg {
  type: "/elys.estaking.ElysStaked";
  value: ElysStakedAmino;
}
/**
 * Elys staked amount is tracked because EdenBoost has to be burnt when unstake
 * ELYS event happens, and there's no way to track staked amount change from
 * staking hook and this struct is added.
 */
export interface ElysStakedSDKType {
  address: string;
  amount: string;
}
function createBaseElysStaked(): ElysStaked {
  return {
    address: "",
    amount: ""
  };
}
export const ElysStaked = {
  typeUrl: "/elys.estaking.ElysStaked",
  is(o: any): o is ElysStaked {
    return o && (o.$typeUrl === ElysStaked.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is ElysStakedSDKType {
    return o && (o.$typeUrl === ElysStaked.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is ElysStakedAmino {
    return o && (o.$typeUrl === ElysStaked.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: ElysStaked, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ElysStaked {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseElysStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ElysStaked {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: ElysStaked): JsonSafe<ElysStaked> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<ElysStaked>): ElysStaked {
    const message = createBaseElysStaked();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ElysStakedAmino): ElysStaked {
    const message = createBaseElysStaked();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: ElysStaked): ElysStakedAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: ElysStakedAminoMsg): ElysStaked {
    return ElysStaked.fromAmino(object.value);
  },
  fromProtoMsg(message: ElysStakedProtoMsg): ElysStaked {
    return ElysStaked.decode(message.value);
  },
  toProto(message: ElysStaked): Uint8Array {
    return ElysStaked.encode(message).finish();
  },
  toProtoMsg(message: ElysStaked): ElysStakedProtoMsg {
    return {
      typeUrl: "/elys.estaking.ElysStaked",
      value: ElysStaked.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ElysStaked.typeUrl, ElysStaked);