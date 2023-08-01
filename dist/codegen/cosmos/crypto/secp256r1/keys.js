"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivKey = exports.PubKey = void 0;
const binary_1 = require("../../../binary");
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PubKey = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    }
};
function createBasePrivKey() {
    return {
        secret: new Uint8Array()
    };
}
exports.PrivKey = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.secret.length !== 0) {
            writer.uint32(10).bytes(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secret = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.secret = object.secret ?? new Uint8Array();
        return message;
    }
};
//# sourceMappingURL=keys.js.map