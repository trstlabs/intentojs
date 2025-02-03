import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Params defines the params for activeness of Actions on governance proposals. */
export interface Params {
  actionFundsCommission: bigint;
  actionFlexFeeMul: bigint;
  actionConstantFee: bigint;
  gasFeeCoins: Coin[];
  /** Maximum period for self-executing Action */
  maxActionDuration: Duration;
  /** Minimum period for self-executing Action */
  minActionDuration: Duration;
  /** Minimum period for self-executing Action */
  minActionInterval: Duration;
  /**
   * relayer rewards in uinto for each message type 0=SDK,1=Wasm, 2=Osmo.
   * Rewards are in uinto and topped up in the module account by alloc module.
   */
  relayerRewards: bigint[];
}
export interface ParamsProtoMsg {
  typeUrl: "/intento.intent.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the params for activeness of Actions on governance proposals. */
export interface ParamsAmino {
  ActionFundsCommission?: string;
  ActionFlexFeeMul?: string;
  ActionConstantFee?: string;
  gas_fee_coins?: CoinAmino[];
  /** Maximum period for self-executing Action */
  MaxActionDuration?: DurationAmino;
  /** Minimum period for self-executing Action */
  MinActionDuration?: DurationAmino;
  /** Minimum period for self-executing Action */
  MinActionInterval?: DurationAmino;
  /**
   * relayer rewards in uinto for each message type 0=SDK,1=Wasm, 2=Osmo.
   * Rewards are in uinto and topped up in the module account by alloc module.
   */
  relayer_rewards?: string[];
}
export interface ParamsAminoMsg {
  type: "/intento.intent.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the params for activeness of Actions on governance proposals. */
export interface ParamsSDKType {
  ActionFundsCommission: bigint;
  ActionFlexFeeMul: bigint;
  ActionConstantFee: bigint;
  gas_fee_coins: CoinSDKType[];
  MaxActionDuration: DurationSDKType;
  MinActionDuration: DurationSDKType;
  MinActionInterval: DurationSDKType;
  relayer_rewards: bigint[];
}
function createBaseParams(): Params {
  return {
    actionFundsCommission: BigInt(0),
    actionFlexFeeMul: BigInt(0),
    actionConstantFee: BigInt(0),
    gasFeeCoins: [],
    maxActionDuration: Duration.fromPartial({}),
    minActionDuration: Duration.fromPartial({}),
    minActionInterval: Duration.fromPartial({}),
    relayerRewards: []
  };
}
export const Params = {
  typeUrl: "/intento.intent.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.actionFundsCommission === "bigint" && typeof o.actionFlexFeeMul === "bigint" && typeof o.actionConstantFee === "bigint" && Array.isArray(o.gasFeeCoins) && (!o.gasFeeCoins.length || Coin.is(o.gasFeeCoins[0])) && Duration.is(o.maxActionDuration) && Duration.is(o.minActionDuration) && Duration.is(o.minActionInterval) && Array.isArray(o.relayerRewards) && (!o.relayerRewards.length || typeof o.relayerRewards[0] === "bigint"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ActionFundsCommission === "bigint" && typeof o.ActionFlexFeeMul === "bigint" && typeof o.ActionConstantFee === "bigint" && Array.isArray(o.gas_fee_coins) && (!o.gas_fee_coins.length || Coin.isSDK(o.gas_fee_coins[0])) && Duration.isSDK(o.MaxActionDuration) && Duration.isSDK(o.MinActionDuration) && Duration.isSDK(o.MinActionInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ActionFundsCommission === "bigint" && typeof o.ActionFlexFeeMul === "bigint" && typeof o.ActionConstantFee === "bigint" && Array.isArray(o.gas_fee_coins) && (!o.gas_fee_coins.length || Coin.isAmino(o.gas_fee_coins[0])) && Duration.isAmino(o.MaxActionDuration) && Duration.isAmino(o.MinActionDuration) && Duration.isAmino(o.MinActionInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionFundsCommission !== BigInt(0)) {
      writer.uint32(8).int64(message.actionFundsCommission);
    }
    if (message.actionFlexFeeMul !== BigInt(0)) {
      writer.uint32(16).int64(message.actionFlexFeeMul);
    }
    if (message.actionConstantFee !== BigInt(0)) {
      writer.uint32(24).int64(message.actionConstantFee);
    }
    for (const v of message.gasFeeCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxActionDuration !== undefined) {
      Duration.encode(message.maxActionDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.minActionDuration !== undefined) {
      Duration.encode(message.minActionDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.minActionInterval !== undefined) {
      Duration.encode(message.minActionInterval, writer.uint32(66).fork()).ldelim();
    }
    writer.uint32(74).fork();
    for (const v of message.relayerRewards) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionFundsCommission = reader.int64();
          break;
        case 2:
          message.actionFlexFeeMul = reader.int64();
          break;
        case 3:
          message.actionConstantFee = reader.int64();
          break;
        case 4:
          message.gasFeeCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.maxActionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.minActionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.minActionInterval = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.relayerRewards.push(reader.int64());
            }
          } else {
            message.relayerRewards.push(reader.int64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      actionFundsCommission: isSet(object.actionFundsCommission) ? BigInt(object.actionFundsCommission.toString()) : BigInt(0),
      actionFlexFeeMul: isSet(object.actionFlexFeeMul) ? BigInt(object.actionFlexFeeMul.toString()) : BigInt(0),
      actionConstantFee: isSet(object.actionConstantFee) ? BigInt(object.actionConstantFee.toString()) : BigInt(0),
      gasFeeCoins: Array.isArray(object?.gasFeeCoins) ? object.gasFeeCoins.map((e: any) => Coin.fromJSON(e)) : [],
      maxActionDuration: isSet(object.maxActionDuration) ? Duration.fromJSON(object.maxActionDuration) : undefined,
      minActionDuration: isSet(object.minActionDuration) ? Duration.fromJSON(object.minActionDuration) : undefined,
      minActionInterval: isSet(object.minActionInterval) ? Duration.fromJSON(object.minActionInterval) : undefined,
      relayerRewards: Array.isArray(object?.relayerRewards) ? object.relayerRewards.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.actionFundsCommission !== undefined && (obj.actionFundsCommission = (message.actionFundsCommission || BigInt(0)).toString());
    message.actionFlexFeeMul !== undefined && (obj.actionFlexFeeMul = (message.actionFlexFeeMul || BigInt(0)).toString());
    message.actionConstantFee !== undefined && (obj.actionConstantFee = (message.actionConstantFee || BigInt(0)).toString());
    if (message.gasFeeCoins) {
      obj.gasFeeCoins = message.gasFeeCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.gasFeeCoins = [];
    }
    message.maxActionDuration !== undefined && (obj.maxActionDuration = message.maxActionDuration ? Duration.toJSON(message.maxActionDuration) : undefined);
    message.minActionDuration !== undefined && (obj.minActionDuration = message.minActionDuration ? Duration.toJSON(message.minActionDuration) : undefined);
    message.minActionInterval !== undefined && (obj.minActionInterval = message.minActionInterval ? Duration.toJSON(message.minActionInterval) : undefined);
    if (message.relayerRewards) {
      obj.relayerRewards = message.relayerRewards.map(e => (e || BigInt(0)).toString());
    } else {
      obj.relayerRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.actionFundsCommission = object.actionFundsCommission !== undefined && object.actionFundsCommission !== null ? BigInt(object.actionFundsCommission.toString()) : BigInt(0);
    message.actionFlexFeeMul = object.actionFlexFeeMul !== undefined && object.actionFlexFeeMul !== null ? BigInt(object.actionFlexFeeMul.toString()) : BigInt(0);
    message.actionConstantFee = object.actionConstantFee !== undefined && object.actionConstantFee !== null ? BigInt(object.actionConstantFee.toString()) : BigInt(0);
    message.gasFeeCoins = object.gasFeeCoins?.map(e => Coin.fromPartial(e)) || [];
    message.maxActionDuration = object.maxActionDuration !== undefined && object.maxActionDuration !== null ? Duration.fromPartial(object.maxActionDuration) : undefined;
    message.minActionDuration = object.minActionDuration !== undefined && object.minActionDuration !== null ? Duration.fromPartial(object.minActionDuration) : undefined;
    message.minActionInterval = object.minActionInterval !== undefined && object.minActionInterval !== null ? Duration.fromPartial(object.minActionInterval) : undefined;
    message.relayerRewards = object.relayerRewards?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.ActionFundsCommission !== undefined && object.ActionFundsCommission !== null) {
      message.actionFundsCommission = BigInt(object.ActionFundsCommission);
    }
    if (object.ActionFlexFeeMul !== undefined && object.ActionFlexFeeMul !== null) {
      message.actionFlexFeeMul = BigInt(object.ActionFlexFeeMul);
    }
    if (object.ActionConstantFee !== undefined && object.ActionConstantFee !== null) {
      message.actionConstantFee = BigInt(object.ActionConstantFee);
    }
    message.gasFeeCoins = object.gas_fee_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.MaxActionDuration !== undefined && object.MaxActionDuration !== null) {
      message.maxActionDuration = Duration.fromAmino(object.MaxActionDuration);
    }
    if (object.MinActionDuration !== undefined && object.MinActionDuration !== null) {
      message.minActionDuration = Duration.fromAmino(object.MinActionDuration);
    }
    if (object.MinActionInterval !== undefined && object.MinActionInterval !== null) {
      message.minActionInterval = Duration.fromAmino(object.MinActionInterval);
    }
    message.relayerRewards = object.relayer_rewards?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ActionFundsCommission = message.actionFundsCommission !== BigInt(0) ? message.actionFundsCommission?.toString() : undefined;
    obj.ActionFlexFeeMul = message.actionFlexFeeMul !== BigInt(0) ? message.actionFlexFeeMul?.toString() : undefined;
    obj.ActionConstantFee = message.actionConstantFee !== BigInt(0) ? message.actionConstantFee?.toString() : undefined;
    if (message.gasFeeCoins) {
      obj.gas_fee_coins = message.gasFeeCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gas_fee_coins = message.gasFeeCoins;
    }
    obj.MaxActionDuration = message.maxActionDuration ? Duration.toAmino(message.maxActionDuration) : undefined;
    obj.MinActionDuration = message.minActionDuration ? Duration.toAmino(message.minActionDuration) : undefined;
    obj.MinActionInterval = message.minActionInterval ? Duration.toAmino(message.minActionInterval) : undefined;
    if (message.relayerRewards) {
      obj.relayer_rewards = message.relayerRewards.map(e => e.toString());
    } else {
      obj.relayer_rewards = message.relayerRewards;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);