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
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
