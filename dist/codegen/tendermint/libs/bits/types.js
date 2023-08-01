"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitArray = void 0;
const binary_1 = require("../../../binary");
function createBaseBitArray() {
    return {
        bits: BigInt(0),
        elems: []
    };
}
exports.BitArray = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bits !== BigInt(0)) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? BigInt(object.bits.toString()) : BigInt(0);
        message.elems = object.elems?.map(e => BigInt(e.toString())) || [];
        return message;
    }
};
//# sourceMappingURL=types.js.map