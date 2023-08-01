import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the claim module's parameters. */
export interface Params {
  airdropStartTime: Timestamp;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;
  /** denom of claimable asset */
  claimDenom: string;
  durationVestingPeriods: Duration[];
}
/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_start_time: TimestampSDKType;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;
  claim_denom: string;
  duration_vesting_periods: DurationSDKType[];
}
function createBaseParams(): Params {
  return {
    airdropStartTime: Timestamp.fromPartial({}),
    durationUntilDecay: Duration.fromPartial({}),
    durationOfDecay: Duration.fromPartial({}),
    claimDenom: "",
    durationVestingPeriods: []
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(message.airdropStartTime, writer.uint32(10).fork()).ldelim();
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
          message.airdropStartTime = Timestamp.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? Timestamp.fromPartial(object.airdropStartTime) : undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    message.durationVestingPeriods = object.durationVestingPeriods?.map(e => Duration.fromPartial(e)) || [];
    return message;
  }
};