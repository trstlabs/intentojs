import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the params for activeness of Actions on governance proposals. */
export interface Params {
  ActionFundsCommission: bigint;
  ActionFlexFeeMul: bigint;
  ActionConstantFee: bigint;
  RecurringActionConstantFee: bigint;
  /** Maximum period for self-executing Action */
  MaxActionDuration: Duration;
  /** Minimum period for self-executing Action */
  MinActionDuration: Duration;
  /** Minimum period for self-executing Action */
  MinActionInterval: Duration;
  /** relayer rewards in uinto for each message type 0=SDK,1=Wasm, 2=Osmo. Rewards are in uinto and topped up in the module account by alloc module. */
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
  RecurringActionConstantFee?: string;
  /** Maximum period for self-executing Action */
  MaxActionDuration?: DurationAmino;
  /** Minimum period for self-executing Action */
  MinActionDuration?: DurationAmino;
  /** Minimum period for self-executing Action */
  MinActionInterval?: DurationAmino;
  /** relayer rewards in uinto for each message type 0=SDK,1=Wasm, 2=Osmo. Rewards are in uinto and topped up in the module account by alloc module. */
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
  RecurringActionConstantFee: bigint;
  MaxActionDuration: DurationSDKType;
  MinActionDuration: DurationSDKType;
  MinActionInterval: DurationSDKType;
  relayer_rewards: bigint[];
}
function createBaseParams(): Params {
  return {
    ActionFundsCommission: BigInt(0),
    ActionFlexFeeMul: BigInt(0),
    ActionConstantFee: BigInt(0),
    RecurringActionConstantFee: BigInt(0),
    MaxActionDuration: Duration.fromPartial({}),
    MinActionDuration: Duration.fromPartial({}),
    MinActionInterval: Duration.fromPartial({}),
    relayerRewards: []
  };
}
export const Params = {
  typeUrl: "/intento.intent.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ActionFundsCommission === "bigint" && typeof o.ActionFlexFeeMul === "bigint" && typeof o.ActionConstantFee === "bigint" && typeof o.RecurringActionConstantFee === "bigint" && Duration.is(o.MaxActionDuration) && Duration.is(o.MinActionDuration) && Duration.is(o.MinActionInterval) && Array.isArray(o.relayerRewards) && (!o.relayerRewards.length || typeof o.relayerRewards[0] === "bigint"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ActionFundsCommission === "bigint" && typeof o.ActionFlexFeeMul === "bigint" && typeof o.ActionConstantFee === "bigint" && typeof o.RecurringActionConstantFee === "bigint" && Duration.isSDK(o.MaxActionDuration) && Duration.isSDK(o.MinActionDuration) && Duration.isSDK(o.MinActionInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.ActionFundsCommission === "bigint" && typeof o.ActionFlexFeeMul === "bigint" && typeof o.ActionConstantFee === "bigint" && typeof o.RecurringActionConstantFee === "bigint" && Duration.isAmino(o.MaxActionDuration) && Duration.isAmino(o.MinActionDuration) && Duration.isAmino(o.MinActionInterval) && Array.isArray(o.relayer_rewards) && (!o.relayer_rewards.length || typeof o.relayer_rewards[0] === "bigint"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ActionFundsCommission !== BigInt(0)) {
      writer.uint32(8).int64(message.ActionFundsCommission);
    }
    if (message.ActionFlexFeeMul !== BigInt(0)) {
      writer.uint32(16).int64(message.ActionFlexFeeMul);
    }
    if (message.ActionConstantFee !== BigInt(0)) {
      writer.uint32(24).int64(message.ActionConstantFee);
    }
    if (message.RecurringActionConstantFee !== BigInt(0)) {
      writer.uint32(32).int64(message.RecurringActionConstantFee);
    }
    if (message.MaxActionDuration !== undefined) {
      Duration.encode(message.MaxActionDuration, writer.uint32(42).fork()).ldelim();
    }
    if (message.MinActionDuration !== undefined) {
      Duration.encode(message.MinActionDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.MinActionInterval !== undefined) {
      Duration.encode(message.MinActionInterval, writer.uint32(66).fork()).ldelim();
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
          message.ActionFundsCommission = reader.int64();
          break;
        case 2:
          message.ActionFlexFeeMul = reader.int64();
          break;
        case 3:
          message.ActionConstantFee = reader.int64();
          break;
        case 4:
          message.RecurringActionConstantFee = reader.int64();
          break;
        case 5:
          message.MaxActionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.MinActionDuration = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.MinActionInterval = Duration.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.ActionFundsCommission = object.ActionFundsCommission !== undefined && object.ActionFundsCommission !== null ? BigInt(object.ActionFundsCommission.toString()) : BigInt(0);
    message.ActionFlexFeeMul = object.ActionFlexFeeMul !== undefined && object.ActionFlexFeeMul !== null ? BigInt(object.ActionFlexFeeMul.toString()) : BigInt(0);
    message.ActionConstantFee = object.ActionConstantFee !== undefined && object.ActionConstantFee !== null ? BigInt(object.ActionConstantFee.toString()) : BigInt(0);
    message.RecurringActionConstantFee = object.RecurringActionConstantFee !== undefined && object.RecurringActionConstantFee !== null ? BigInt(object.RecurringActionConstantFee.toString()) : BigInt(0);
    message.MaxActionDuration = object.MaxActionDuration !== undefined && object.MaxActionDuration !== null ? Duration.fromPartial(object.MaxActionDuration) : undefined;
    message.MinActionDuration = object.MinActionDuration !== undefined && object.MinActionDuration !== null ? Duration.fromPartial(object.MinActionDuration) : undefined;
    message.MinActionInterval = object.MinActionInterval !== undefined && object.MinActionInterval !== null ? Duration.fromPartial(object.MinActionInterval) : undefined;
    message.relayerRewards = object.relayerRewards?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.ActionFundsCommission !== undefined && object.ActionFundsCommission !== null) {
      message.ActionFundsCommission = BigInt(object.ActionFundsCommission);
    }
    if (object.ActionFlexFeeMul !== undefined && object.ActionFlexFeeMul !== null) {
      message.ActionFlexFeeMul = BigInt(object.ActionFlexFeeMul);
    }
    if (object.ActionConstantFee !== undefined && object.ActionConstantFee !== null) {
      message.ActionConstantFee = BigInt(object.ActionConstantFee);
    }
    if (object.RecurringActionConstantFee !== undefined && object.RecurringActionConstantFee !== null) {
      message.RecurringActionConstantFee = BigInt(object.RecurringActionConstantFee);
    }
    if (object.MaxActionDuration !== undefined && object.MaxActionDuration !== null) {
      message.MaxActionDuration = Duration.fromAmino(object.MaxActionDuration);
    }
    if (object.MinActionDuration !== undefined && object.MinActionDuration !== null) {
      message.MinActionDuration = Duration.fromAmino(object.MinActionDuration);
    }
    if (object.MinActionInterval !== undefined && object.MinActionInterval !== null) {
      message.MinActionInterval = Duration.fromAmino(object.MinActionInterval);
    }
    message.relayerRewards = object.relayer_rewards?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.ActionFundsCommission = message.ActionFundsCommission !== BigInt(0) ? message.ActionFundsCommission.toString() : undefined;
    obj.ActionFlexFeeMul = message.ActionFlexFeeMul !== BigInt(0) ? message.ActionFlexFeeMul.toString() : undefined;
    obj.ActionConstantFee = message.ActionConstantFee !== BigInt(0) ? message.ActionConstantFee.toString() : undefined;
    obj.RecurringActionConstantFee = message.RecurringActionConstantFee !== BigInt(0) ? message.RecurringActionConstantFee.toString() : undefined;
    obj.MaxActionDuration = message.MaxActionDuration ? Duration.toAmino(message.MaxActionDuration) : undefined;
    obj.MinActionDuration = message.MinActionDuration ? Duration.toAmino(message.MinActionDuration) : undefined;
    obj.MinActionInterval = message.MinActionInterval ? Duration.toAmino(message.MinActionInterval) : undefined;
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