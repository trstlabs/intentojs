"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empty = void 0;
const binary_1 = require("../../binary");
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmpty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    }
};
//# sourceMappingURL=empty.js.map