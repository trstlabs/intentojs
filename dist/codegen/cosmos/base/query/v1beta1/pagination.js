"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponse = exports.PageRequest = void 0;
const binary_1 = require("../../../../binary");
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: BigInt(0),
        limit: BigInt(0),
        countTotal: false,
        reverse: false
    };
}
exports.PageRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.offset !== BigInt(0)) {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        message.offset = object.offset !== undefined && object.offset !== null ? BigInt(object.offset.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    }
};
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: BigInt(0)
    };
}
exports.PageResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array();
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    }
};
//# sourceMappingURL=pagination.js.map