import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMinter() {
    return {
        annualProvisions: ""
    };
}
export const Minter = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.annualProvisions !== "") {
            writer.uint32(10).string(message.annualProvisions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annualProvisions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.annualProvisions = object.annualProvisions ?? "";
        return message;
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        startTime: Timestamp.fromPartial({}),
        initialAnnualProvisions: "",
        reductionFactor: "",
        blocksPerYear: BigInt(0)
    };
}
export const Params = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.initialAnnualProvisions !== "") {
            writer.uint32(26).string(message.initialAnnualProvisions);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(34).string(message.reductionFactor);
        }
        if (message.blocksPerYear !== BigInt(0)) {
            writer.uint32(40).uint64(message.blocksPerYear);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.startTime = Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initialAnnualProvisions = reader.string();
                    break;
                case 4:
                    message.reductionFactor = reader.string();
                    break;
                case 5:
                    message.blocksPerYear = reader.uint64();
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
        message.mintDenom = object.mintDenom ?? "";
        message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
        message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
        message.reductionFactor = object.reductionFactor ?? "";
        message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
        return message;
    }
};
//# sourceMappingURL=mint.js.map