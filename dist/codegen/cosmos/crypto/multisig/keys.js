"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAminoPubKey = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        publicKeys: []
    };
}
exports.LegacyAminoPubKey = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.publicKeys) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.publicKeys.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.publicKeys = object.publicKeys?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=keys.js.map