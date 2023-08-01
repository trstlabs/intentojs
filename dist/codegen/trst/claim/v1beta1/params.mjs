import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        airdropStartTime: Timestamp.fromPartial({}),
        durationUntilDecay: Duration.fromPartial({}),
        durationOfDecay: Duration.fromPartial({}),
        claimDenom: "",
        durationVestingPeriods: []
    };
}
export const Params = {
    encode(message, writer = BinaryWriter.create()) {
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
            Duration.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseParams();
        message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? Timestamp.fromPartial(object.airdropStartTime) : undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        message.durationVestingPeriods = object.durationVestingPeriods?.map(e => Duration.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=params.js.map