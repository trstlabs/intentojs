"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        airdropStartTime: timestamp_1.Timestamp.fromPartial({}),
        durationUntilDecay: duration_1.Duration.fromPartial({}),
        durationOfDecay: duration_1.Duration.fromPartial({}),
        claimDenom: "",
        durationVestingPeriods: []
    };
}
exports.Params = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.airdropStartTime !== undefined) {
            timestamp_1.Timestamp.encode(message.airdropStartTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            duration_1.Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            duration_1.Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.claimDenom !== "") {
            writer.uint32(34).string(message.claimDenom);
        }
        for (const v of message.durationVestingPeriods) {
            duration_1.Duration.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.airdropStartTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.durationUntilDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.durationOfDecay = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.claimDenom = reader.string();
                    break;
                case 5:
                    message.durationVestingPeriods.push(duration_1.Duration.decode(reader, reader.uint32()));
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
        message.airdropStartTime = object.airdropStartTime !== undefined && object.airdropStartTime !== null ? timestamp_1.Timestamp.fromPartial(object.airdropStartTime) : undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? duration_1.Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? duration_1.Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? "";
        message.durationVestingPeriods = object.durationVestingPeriods?.map(e => duration_1.Duration.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=params.js.map