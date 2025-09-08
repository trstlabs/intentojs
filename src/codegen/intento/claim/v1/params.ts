import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { JsonSafe } from "../../../json-safe";
/** Params defines the claim module's parameters. */
export interface Params {
  airdropStartTime: Date;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  durationVestingPeriods: Duration[];
}
export interface ParamsProtoMsg {
  typeUrl: "/intento.claim.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the claim module's parameters.
 * @name ParamsAmino
 * @package intento.claim.v1
 * @see proto type: intento.claim.v1.Params
 */
export interface ParamsAmino {
  airdrop_start_time?: string;
  duration_until_decay?: DurationAmino;
  duration_of_decay?: DurationAmino;
  /**
   * denom of claimable asset
   */
  claim_denom?: string;
  duration_vesting_periods?: DurationAmino[];
}
export interface ParamsAminoMsg {
  type: "/intento.claim.v1.Params";
  value: ParamsAmino;
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_start_time: Date;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;
  claim_denom: string;
  duration_vesting_periods: DurationSDKType[];
}
function createBaseParams(): Params {
  return {
    airdropStartTime: new Date(),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: "",
    durationVestingPeriods: []
  };
}
export const Params = {
  typeUrl: "/intento.claim.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Timestamp.is(o.airdropStartTime) && Duration.is(o.durationUntilDecay) && Duration.is(o.durationOfDecay) && typeof o.claimDenom === "string" && Array.isArray(o.durationVestingPeriods) && (!o.durationVestingPeriods.length || Duration.is(o.durationVestingPeriods[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || Timestamp.isSDK(o.airdrop_start_time) && Duration.isSDK(o.duration_until_decay) && Duration.isSDK(o.duration_of_decay) && typeof o.claim_denom === "string" && Array.isArray(o.duration_vesting_periods) && (!o.duration_vesting_periods.length || Duration.isSDK(o.duration_vesting_periods[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Timestamp.isAmino(o.airdrop_start_time) && Duration.isAmino(o.duration_until_decay) && Duration.isAmino(o.duration_of_decay) && typeof o.claim_denom === "string" && Array.isArray(o.duration_vesting_periods) && (!o.duration_vesting_periods.length || Duration.isAmino(o.duration_vesting_periods[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
    }
    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
    }
    for (const v of message.durationVestingPeriods) {
      Duration.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.claimDenom = reader.string();
          break;
        case 5:
          message.durationVestingPeriods.push(Duration.decode(reader, reader.uint32()));
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
      airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : "",
      durationVestingPeriods: Array.isArray(object?.durationVestingPeriods) ? object.durationVestingPeriods.map((e: any) => Duration.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    if (message.durationVestingPeriods) {
      obj.durationVestingPeriods = message.durationVestingPeriods.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.durationVestingPeriods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.durationVestingPeriods = object.durationVestingPeriods?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.airdrop_start_time !== undefined && object.airdrop_start_time !== null) {
      message.airdropStartTime = fromTimestamp(Timestamp.fromAmino(object.airdrop_start_time));
    }
    if (object.duration_until_decay !== undefined && object.duration_until_decay !== null) {
      message.durationUntilDecay = Duration.fromAmino(object.duration_until_decay);
    }
    if (object.duration_of_decay !== undefined && object.duration_of_decay !== null) {
      message.durationOfDecay = Duration.fromAmino(object.duration_of_decay);
    }
    if (object.claim_denom !== undefined && object.claim_denom !== null) {
      message.claimDenom = object.claim_denom;
    }
    message.durationVestingPeriods = object.duration_vesting_periods?.map(e => Duration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toAmino(toTimestamp(message.airdropStartTime)) : undefined;
    obj.duration_until_decay = message.durationUntilDecay ? Duration.toAmino(message.durationUntilDecay) : undefined;
    obj.duration_of_decay = message.durationOfDecay ? Duration.toAmino(message.durationOfDecay) : undefined;
    obj.claim_denom = message.claimDenom === "" ? undefined : message.claimDenom;
    if (message.durationVestingPeriods) {
      obj.duration_vesting_periods = message.durationVestingPeriods.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.duration_vesting_periods = message.durationVestingPeriods;
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
      typeUrl: "/intento.claim.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);