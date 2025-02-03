import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Params defines the params for activeness of Flows on governance proposals. */
export interface Params {
  flowFundsCommission: bigint;
  flowFlexFeeMul: bigint;
  flowConstantFee: bigint;
  gasFeeCoins: Coin[];
  /** Maximum period for self-executing Flow */
  maxFlowDuration: Duration;
  /** Minimum period for self-executing Flow */
  minFlowDuration: Duration;
  /** Minimum period for self-executing Flow */
  minFlowInterval: Duration;
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
/** Params defines the params for activeness of Flows on governance proposals. */
export interface ParamsAmino {
  FlowFundsCommission?: string;
  FlowFlexFeeMul?: string;
  FlowConstantFee?: string;
  gas_fee_coins?: CoinAmino[];
  /** Maximum period for self-executing Flow */
  MaxFlowDuration?: DurationAmino;
  /** Minimum period for self-executing Flow */
  MinFlowDuration?: DurationAmino;
  /** Minimum period for self-executing Flow */
  MinFlowInterval?: DurationAmino;
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
/** Params defines the params for activeness of Flows on governance proposals. */
export interface ParamsSDKType {
  FlowFundsCommission: bigint;
  FlowFlexFeeMul: bigint;
  FlowConstantFee: bigint;
  gas_fee_coins: CoinSDKType[];
  MaxFlowDuration: DurationSDKType;
  MinFlowDuration: DurationSDKType;
  MinFlowInterval: DurationSDKType;
  relayer_rewards: bigint[];
}
function createBaseParams(): Params {
  return {
    flowFundsCommission: BigInt(0),
    flowFlexFeeMul: BigInt(0),
    flowConstantFee: BigInt(0),
    gasFeeCoins: [],
    maxFlowDuration: Duration.fromPartial({}),
    minFlowDuration: Duration.fromPartial({}),
    minFlowInterval: Duration.fromPartial({}),
    relayerRewards: []
  };
}
export const Params = {
  typeUrl: "/intento.intent.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.flowFundsCommission === "bigint" && typeof o.flowFlexFeeMul === "bigint" && typeof o.flowConstantFee === "bigint" && Array.isArray(o.gasFeeCoins) && (!o.gasFeeCoins.length || Coin.is(o.gasFeeCoins[0])) && Duration.is(o.maxFlowDuration) && Duration.is(o.minFlowDuration) && Duration.is(o.minFlowInterval) && Array.isArray(o.relayerRewards) && (!o.relayerRewards.length || typeof o.relayerRewards[0] === "bigint"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.FlowFundsCommission === "bigint" && typeof o.FlowFlexFeeMul === "bigint" && typeof o.FlowConstantFee === "bigint" && Array.isArray(o.gas_fee_coins) && (!o.gas_fee_coins.length || Coin.isSDK(o.gas_fee_coins[0])) && Duration.isSDK(o.MaxFlowDuration) && Duration.isSDK(o.MinFlowDuration) && Duration.isSDK(o.MinFlowInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.FlowFundsCommission === "bigint" && typeof o.FlowFlexFeeMul === "bigint" && typeof o.FlowConstantFee === "bigint" && Array.isArray(o.gas_fee_coins) && (!o.gas_fee_coins.length || Coin.isAmino(o.gas_fee_coins[0])) && Duration.isAmino(o.MaxFlowDuration) && Duration.isAmino(o.MinFlowDuration) && Duration.isAmino(o.MinFlowInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowFundsCommission !== BigInt(0)) {
      writer.uint32(8).int64(message.flowFundsCommission);
    }
    if (message.flowFlexFeeMul !== BigInt(0)) {
      writer.uint32(16).int64(message.flowFlexFeeMul);
    }
    if (message.flowConstantFee !== BigInt(0)) {
      writer.uint32(24).int64(message.flowConstantFee);
    }
    for (const v of message.gasFeeCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxFlowDuration !== undefined) {
      Duration.encode(message.maxFlowDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.minFlowDuration !== undefined) {
      Duration.encode(message.minFlowDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.minFlowInterval !== undefined) {
      Duration.encode(message.minFlowInterval, writer.uint32(66).fork()).ldelim();
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
          message.flowFundsCommission = reader.int64();
          break;
        case 2:
          message.flowFlexFeeMul = reader.int64();
          break;
        case 3:
          message.flowConstantFee = reader.int64();
          break;
        case 4:
          message.gasFeeCoins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.maxFlowDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.minFlowDuration = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.minFlowInterval = Duration.decode(reader, reader.uint32());
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
      flowFundsCommission: isSet(object.flowFundsCommission) ? BigInt(object.flowFundsCommission.toString()) : BigInt(0),
      flowFlexFeeMul: isSet(object.flowFlexFeeMul) ? BigInt(object.flowFlexFeeMul.toString()) : BigInt(0),
      flowConstantFee: isSet(object.flowConstantFee) ? BigInt(object.flowConstantFee.toString()) : BigInt(0),
      gasFeeCoins: Array.isArray(object?.gasFeeCoins) ? object.gasFeeCoins.map((e: any) => Coin.fromJSON(e)) : [],
      maxFlowDuration: isSet(object.maxFlowDuration) ? Duration.fromJSON(object.maxFlowDuration) : undefined,
      minFlowDuration: isSet(object.minFlowDuration) ? Duration.fromJSON(object.minFlowDuration) : undefined,
      minFlowInterval: isSet(object.minFlowInterval) ? Duration.fromJSON(object.minFlowInterval) : undefined,
      relayerRewards: Array.isArray(object?.relayerRewards) ? object.relayerRewards.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.flowFundsCommission !== undefined && (obj.flowFundsCommission = (message.flowFundsCommission || BigInt(0)).toString());
    message.flowFlexFeeMul !== undefined && (obj.flowFlexFeeMul = (message.flowFlexFeeMul || BigInt(0)).toString());
    message.flowConstantFee !== undefined && (obj.flowConstantFee = (message.flowConstantFee || BigInt(0)).toString());
    if (message.gasFeeCoins) {
      obj.gasFeeCoins = message.gasFeeCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.gasFeeCoins = [];
    }
    message.maxFlowDuration !== undefined && (obj.maxFlowDuration = message.maxFlowDuration ? Duration.toJSON(message.maxFlowDuration) : undefined);
    message.minFlowDuration !== undefined && (obj.minFlowDuration = message.minFlowDuration ? Duration.toJSON(message.minFlowDuration) : undefined);
    message.minFlowInterval !== undefined && (obj.minFlowInterval = message.minFlowInterval ? Duration.toJSON(message.minFlowInterval) : undefined);
    if (message.relayerRewards) {
      obj.relayerRewards = message.relayerRewards.map(e => (e || BigInt(0)).toString());
    } else {
      obj.relayerRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.flowFundsCommission = object.flowFundsCommission !== undefined && object.flowFundsCommission !== null ? BigInt(object.flowFundsCommission.toString()) : BigInt(0);
    message.flowFlexFeeMul = object.flowFlexFeeMul !== undefined && object.flowFlexFeeMul !== null ? BigInt(object.flowFlexFeeMul.toString()) : BigInt(0);
    message.flowConstantFee = object.flowConstantFee !== undefined && object.flowConstantFee !== null ? BigInt(object.flowConstantFee.toString()) : BigInt(0);
    message.gasFeeCoins = object.gasFeeCoins?.map(e => Coin.fromPartial(e)) || [];
    message.maxFlowDuration = object.maxFlowDuration !== undefined && object.maxFlowDuration !== null ? Duration.fromPartial(object.maxFlowDuration) : undefined;
    message.minFlowDuration = object.minFlowDuration !== undefined && object.minFlowDuration !== null ? Duration.fromPartial(object.minFlowDuration) : undefined;
    message.minFlowInterval = object.minFlowInterval !== undefined && object.minFlowInterval !== null ? Duration.fromPartial(object.minFlowInterval) : undefined;
    message.relayerRewards = object.relayerRewards?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.FlowFundsCommission !== undefined && object.FlowFundsCommission !== null) {
      message.flowFundsCommission = BigInt(object.FlowFundsCommission);
    }
    if (object.FlowFlexFeeMul !== undefined && object.FlowFlexFeeMul !== null) {
      message.flowFlexFeeMul = BigInt(object.FlowFlexFeeMul);
    }
    if (object.FlowConstantFee !== undefined && object.FlowConstantFee !== null) {
      message.flowConstantFee = BigInt(object.FlowConstantFee);
    }
    message.gasFeeCoins = object.gas_fee_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.MaxFlowDuration !== undefined && object.MaxFlowDuration !== null) {
      message.maxFlowDuration = Duration.fromAmino(object.MaxFlowDuration);
    }
    if (object.MinFlowDuration !== undefined && object.MinFlowDuration !== null) {
      message.minFlowDuration = Duration.fromAmino(object.MinFlowDuration);
    }
    if (object.MinFlowInterval !== undefined && object.MinFlowInterval !== null) {
      message.minFlowInterval = Duration.fromAmino(object.MinFlowInterval);
    }
    message.relayerRewards = object.relayer_rewards?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.FlowFundsCommission = message.flowFundsCommission !== BigInt(0) ? message.flowFundsCommission?.toString() : undefined;
    obj.FlowFlexFeeMul = message.flowFlexFeeMul !== BigInt(0) ? message.flowFlexFeeMul?.toString() : undefined;
    obj.FlowConstantFee = message.flowConstantFee !== BigInt(0) ? message.flowConstantFee?.toString() : undefined;
    if (message.gasFeeCoins) {
      obj.gas_fee_coins = message.gasFeeCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gas_fee_coins = message.gasFeeCoins;
    }
    obj.MaxFlowDuration = message.maxFlowDuration ? Duration.toAmino(message.maxFlowDuration) : undefined;
    obj.MinFlowDuration = message.minFlowDuration ? Duration.toAmino(message.minFlowDuration) : undefined;
    obj.MinFlowInterval = message.minFlowInterval ? Duration.toAmino(message.minFlowInterval) : undefined;
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