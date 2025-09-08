import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Params defines the params for activeness of Flows on governance proposals. */
export interface Params {
  /** Commision rate percentage for returning remaining funds in flow fee account after final execution, e.g. 100 = 1X, 250 = 250 */
  flowFundsCommission: bigint;
  /** Multiplier to the flexible flow gas fee in promille, e.g. 1000 = 1X, 2500 = 2,5x */
  flowFlexFeeMul: bigint;
  /** Fixed burn fee per message execution to burn native denom */
  burnFeePerMsg: bigint;
  /** Array of denoms that can be used for fee payment together with an amount */
  gasFeeCoins: Coin[];
  /** Maximum period for a flow */
  maxFlowDuration: Duration;
  /** Minimum period for a flow */
  minFlowDuration: Duration;
  /** Minimum period for a flow */
  minFlowInterval: Duration;
  /**
   * relayer rewards in uinto for each message class 0=Low,1=Medium, 2=High, 3=AuthZExec
   * Rewards are in uinto and topped up in the module account by alloc module.
   */
  connectionRewards: ConnectionRelayerReward[];
}
export interface ParamsProtoMsg {
  typeUrl: "/intento.intent.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the params for activeness of Flows on governance proposals.
 * @name ParamsAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.Params
 */
export interface ParamsAmino {
  /**
   * Commision rate percentage for returning remaining funds in flow fee account after final execution, e.g. 100 = 1X, 250 = 250
   */
  flow_funds_commission?: string;
  /**
   * Multiplier to the flexible flow gas fee in promille, e.g. 1000 = 1X, 2500 = 2,5x
   */
  flow_flex_fee_mul?: string;
  /**
   * Fixed burn fee per message execution to burn native denom
   */
  burn_fee_per_msg?: string;
  /**
   * Array of denoms that can be used for fee payment together with an amount
   */
  gas_fee_coins?: CoinAmino[];
  /**
   * Maximum period for a flow
   */
  max_flow_duration?: DurationAmino;
  /**
   * Minimum period for a flow
   */
  min_flow_duration?: DurationAmino;
  /**
   * Minimum period for a flow
   */
  min_flow_interval?: DurationAmino;
  /**
   * relayer rewards in uinto for each message class 0=Low,1=Medium, 2=High, 3=AuthZExec
   * Rewards are in uinto and topped up in the module account by alloc module.
   */
  connection_rewards?: ConnectionRelayerRewardAmino[];
}
export interface ParamsAminoMsg {
  type: "/intento.intent.v1.Params";
  value: ParamsAmino;
}
/** Params defines the params for activeness of Flows on governance proposals. */
export interface ParamsSDKType {
  flow_funds_commission: bigint;
  flow_flex_fee_mul: bigint;
  burn_fee_per_msg: bigint;
  gas_fee_coins: CoinSDKType[];
  max_flow_duration: DurationSDKType;
  min_flow_duration: DurationSDKType;
  min_flow_interval: DurationSDKType;
  connection_rewards: ConnectionRelayerRewardSDKType[];
}
export interface ConnectionRelayerReward {
  /** e.g. "connection-12" */
  connectionId: string;
  /** same format: 0=Low, 1=Medium, 2=High */
  relayerRewards: bigint[];
}
export interface ConnectionRelayerRewardProtoMsg {
  typeUrl: "/intento.intent.v1.ConnectionRelayerReward";
  value: Uint8Array;
}
/**
 * @name ConnectionRelayerRewardAmino
 * @package intento.intent.v1
 * @see proto type: intento.intent.v1.ConnectionRelayerReward
 */
export interface ConnectionRelayerRewardAmino {
  /**
   * e.g. "connection-12"
   */
  connection_id?: string;
  /**
   * same format: 0=Low, 1=Medium, 2=High
   */
  relayer_rewards?: string[];
}
export interface ConnectionRelayerRewardAminoMsg {
  type: "/intento.intent.v1.ConnectionRelayerReward";
  value: ConnectionRelayerRewardAmino;
}
export interface ConnectionRelayerRewardSDKType {
  connection_id: string;
  relayer_rewards: bigint[];
}
function createBaseParams(): Params {
  return {
    flowFundsCommission: BigInt(0),
    flowFlexFeeMul: BigInt(0),
    burnFeePerMsg: BigInt(0),
    gasFeeCoins: [],
    maxFlowDuration: Duration.fromPartial({}),
    minFlowDuration: Duration.fromPartial({}),
    minFlowInterval: Duration.fromPartial({}),
    connectionRewards: []
  };
}
export const Params = {
  typeUrl: "/intento.intent.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.flowFundsCommission === "bigint" && typeof o.flowFlexFeeMul === "bigint" && typeof o.burnFeePerMsg === "bigint" && Array.isArray(o.gasFeeCoins) && (!o.gasFeeCoins.length || Coin.is(o.gasFeeCoins[0])) && Duration.is(o.maxFlowDuration) && Duration.is(o.minFlowDuration) && Duration.is(o.minFlowInterval) && Array.isArray(o.connectionRewards) && (!o.connectionRewards.length || ConnectionRelayerReward.is(o.connectionRewards[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.flow_funds_commission === "bigint" && typeof o.flow_flex_fee_mul === "bigint" && typeof o.burn_fee_per_msg === "bigint" && Array.isArray(o.gas_fee_coins) && (!o.gas_fee_coins.length || Coin.isSDK(o.gas_fee_coins[0])) && Duration.isSDK(o.max_flow_duration) && Duration.isSDK(o.min_flow_duration) && Duration.isSDK(o.min_flow_interval) && Array.isArray(o.connection_rewards) && (!o.connection_rewards.length || ConnectionRelayerReward.isSDK(o.connection_rewards[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.flow_funds_commission === "bigint" && typeof o.flow_flex_fee_mul === "bigint" && typeof o.burn_fee_per_msg === "bigint" && Array.isArray(o.gas_fee_coins) && (!o.gas_fee_coins.length || Coin.isAmino(o.gas_fee_coins[0])) && Duration.isAmino(o.max_flow_duration) && Duration.isAmino(o.min_flow_duration) && Duration.isAmino(o.min_flow_interval) && Array.isArray(o.connection_rewards) && (!o.connection_rewards.length || ConnectionRelayerReward.isAmino(o.connection_rewards[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flowFundsCommission !== BigInt(0)) {
      writer.uint32(8).int64(message.flowFundsCommission);
    }
    if (message.flowFlexFeeMul !== BigInt(0)) {
      writer.uint32(16).int64(message.flowFlexFeeMul);
    }
    if (message.burnFeePerMsg !== BigInt(0)) {
      writer.uint32(24).int64(message.burnFeePerMsg);
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
    for (const v of message.connectionRewards) {
      ConnectionRelayerReward.encode(v!, writer.uint32(74).fork()).ldelim();
    }
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
          message.burnFeePerMsg = reader.int64();
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
          message.connectionRewards.push(ConnectionRelayerReward.decode(reader, reader.uint32()));
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
      burnFeePerMsg: isSet(object.burnFeePerMsg) ? BigInt(object.burnFeePerMsg.toString()) : BigInt(0),
      gasFeeCoins: Array.isArray(object?.gasFeeCoins) ? object.gasFeeCoins.map((e: any) => Coin.fromJSON(e)) : [],
      maxFlowDuration: isSet(object.maxFlowDuration) ? Duration.fromJSON(object.maxFlowDuration) : undefined,
      minFlowDuration: isSet(object.minFlowDuration) ? Duration.fromJSON(object.minFlowDuration) : undefined,
      minFlowInterval: isSet(object.minFlowInterval) ? Duration.fromJSON(object.minFlowInterval) : undefined,
      connectionRewards: Array.isArray(object?.connectionRewards) ? object.connectionRewards.map((e: any) => ConnectionRelayerReward.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.flowFundsCommission !== undefined && (obj.flowFundsCommission = (message.flowFundsCommission || BigInt(0)).toString());
    message.flowFlexFeeMul !== undefined && (obj.flowFlexFeeMul = (message.flowFlexFeeMul || BigInt(0)).toString());
    message.burnFeePerMsg !== undefined && (obj.burnFeePerMsg = (message.burnFeePerMsg || BigInt(0)).toString());
    if (message.gasFeeCoins) {
      obj.gasFeeCoins = message.gasFeeCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.gasFeeCoins = [];
    }
    message.maxFlowDuration !== undefined && (obj.maxFlowDuration = message.maxFlowDuration ? Duration.toJSON(message.maxFlowDuration) : undefined);
    message.minFlowDuration !== undefined && (obj.minFlowDuration = message.minFlowDuration ? Duration.toJSON(message.minFlowDuration) : undefined);
    message.minFlowInterval !== undefined && (obj.minFlowInterval = message.minFlowInterval ? Duration.toJSON(message.minFlowInterval) : undefined);
    if (message.connectionRewards) {
      obj.connectionRewards = message.connectionRewards.map(e => e ? ConnectionRelayerReward.toJSON(e) : undefined);
    } else {
      obj.connectionRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.flowFundsCommission = object.flowFundsCommission !== undefined && object.flowFundsCommission !== null ? BigInt(object.flowFundsCommission.toString()) : BigInt(0);
    message.flowFlexFeeMul = object.flowFlexFeeMul !== undefined && object.flowFlexFeeMul !== null ? BigInt(object.flowFlexFeeMul.toString()) : BigInt(0);
    message.burnFeePerMsg = object.burnFeePerMsg !== undefined && object.burnFeePerMsg !== null ? BigInt(object.burnFeePerMsg.toString()) : BigInt(0);
    message.gasFeeCoins = object.gasFeeCoins?.map(e => Coin.fromPartial(e)) || [];
    message.maxFlowDuration = object.maxFlowDuration !== undefined && object.maxFlowDuration !== null ? Duration.fromPartial(object.maxFlowDuration) : undefined;
    message.minFlowDuration = object.minFlowDuration !== undefined && object.minFlowDuration !== null ? Duration.fromPartial(object.minFlowDuration) : undefined;
    message.minFlowInterval = object.minFlowInterval !== undefined && object.minFlowInterval !== null ? Duration.fromPartial(object.minFlowInterval) : undefined;
    message.connectionRewards = object.connectionRewards?.map(e => ConnectionRelayerReward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.flow_funds_commission !== undefined && object.flow_funds_commission !== null) {
      message.flowFundsCommission = BigInt(object.flow_funds_commission);
    }
    if (object.flow_flex_fee_mul !== undefined && object.flow_flex_fee_mul !== null) {
      message.flowFlexFeeMul = BigInt(object.flow_flex_fee_mul);
    }
    if (object.burn_fee_per_msg !== undefined && object.burn_fee_per_msg !== null) {
      message.burnFeePerMsg = BigInt(object.burn_fee_per_msg);
    }
    message.gasFeeCoins = object.gas_fee_coins?.map(e => Coin.fromAmino(e)) || [];
    if (object.max_flow_duration !== undefined && object.max_flow_duration !== null) {
      message.maxFlowDuration = Duration.fromAmino(object.max_flow_duration);
    }
    if (object.min_flow_duration !== undefined && object.min_flow_duration !== null) {
      message.minFlowDuration = Duration.fromAmino(object.min_flow_duration);
    }
    if (object.min_flow_interval !== undefined && object.min_flow_interval !== null) {
      message.minFlowInterval = Duration.fromAmino(object.min_flow_interval);
    }
    message.connectionRewards = object.connection_rewards?.map(e => ConnectionRelayerReward.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.flow_funds_commission = message.flowFundsCommission !== BigInt(0) ? message.flowFundsCommission?.toString() : undefined;
    obj.flow_flex_fee_mul = message.flowFlexFeeMul !== BigInt(0) ? message.flowFlexFeeMul?.toString() : undefined;
    obj.burn_fee_per_msg = message.burnFeePerMsg !== BigInt(0) ? message.burnFeePerMsg?.toString() : undefined;
    if (message.gasFeeCoins) {
      obj.gas_fee_coins = message.gasFeeCoins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gas_fee_coins = message.gasFeeCoins;
    }
    obj.max_flow_duration = message.maxFlowDuration ? Duration.toAmino(message.maxFlowDuration) : undefined;
    obj.min_flow_duration = message.minFlowDuration ? Duration.toAmino(message.minFlowDuration) : undefined;
    obj.min_flow_interval = message.minFlowInterval ? Duration.toAmino(message.minFlowInterval) : undefined;
    if (message.connectionRewards) {
      obj.connection_rewards = message.connectionRewards.map(e => e ? ConnectionRelayerReward.toAmino(e) : undefined);
    } else {
      obj.connection_rewards = message.connectionRewards;
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
      typeUrl: "/intento.intent.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
function createBaseConnectionRelayerReward(): ConnectionRelayerReward {
  return {
    connectionId: "",
    relayerRewards: []
  };
}
export const ConnectionRelayerReward = {
  typeUrl: "/intento.intent.v1.ConnectionRelayerReward",
  is(o: any): o is ConnectionRelayerReward {
    return o && (o.$typeUrl === ConnectionRelayerReward.typeUrl || typeof o.connectionId === "string" && Array.isArray(o.relayerRewards) && (!o.relayerRewards.length || typeof o.relayerRewards[0] === "bigint"));
  },
  isSDK(o: any): o is ConnectionRelayerRewardSDKType {
    return o && (o.$typeUrl === ConnectionRelayerReward.typeUrl || typeof o.connection_id === "string" && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  isAmino(o: any): o is ConnectionRelayerRewardAmino {
    return o && (o.$typeUrl === ConnectionRelayerReward.typeUrl || typeof o.connection_id === "string" && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  encode(message: ConnectionRelayerReward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    writer.uint32(18).fork();
    for (const v of message.relayerRewards) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectionRelayerReward {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionRelayerReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
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
  fromJSON(object: any): ConnectionRelayerReward {
    return {
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      relayerRewards: Array.isArray(object?.relayerRewards) ? object.relayerRewards.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: ConnectionRelayerReward): JsonSafe<ConnectionRelayerReward> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    if (message.relayerRewards) {
      obj.relayerRewards = message.relayerRewards.map(e => (e || BigInt(0)).toString());
    } else {
      obj.relayerRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ConnectionRelayerReward>): ConnectionRelayerReward {
    const message = createBaseConnectionRelayerReward();
    message.connectionId = object.connectionId ?? "";
    message.relayerRewards = object.relayerRewards?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ConnectionRelayerRewardAmino): ConnectionRelayerReward {
    const message = createBaseConnectionRelayerReward();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    message.relayerRewards = object.relayer_rewards?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: ConnectionRelayerReward): ConnectionRelayerRewardAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    if (message.relayerRewards) {
      obj.relayer_rewards = message.relayerRewards.map(e => e.toString());
    } else {
      obj.relayer_rewards = message.relayerRewards;
    }
    return obj;
  },
  fromAminoMsg(object: ConnectionRelayerRewardAminoMsg): ConnectionRelayerReward {
    return ConnectionRelayerReward.fromAmino(object.value);
  },
  fromProtoMsg(message: ConnectionRelayerRewardProtoMsg): ConnectionRelayerReward {
    return ConnectionRelayerReward.decode(message.value);
  },
  toProto(message: ConnectionRelayerReward): Uint8Array {
    return ConnectionRelayerReward.encode(message).finish();
  },
  toProtoMsg(message: ConnectionRelayerReward): ConnectionRelayerRewardProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.ConnectionRelayerReward",
      value: ConnectionRelayerReward.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConnectionRelayerReward.typeUrl, ConnectionRelayerReward);