"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactBitArray = exports.MultiSignature = void 0;
const binary_1 = require("../../../../binary");
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
exports.MultiSignature = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    }
};
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
exports.CompactBitArray = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extraBitsStored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extraBitsStored = object.extraBitsStored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    }
};
//# sourceMappingURL=multisig.js.map