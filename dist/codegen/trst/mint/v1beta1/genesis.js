"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const mint_1 = require("./mint");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        minter: mint_1.Minter.fromPartial({}),
        params: mint_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minter !== undefined) {
            mint_1.Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            mint_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minter = mint_1.Minter.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = mint_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.minter = object.minter !== undefined && object.minter !== null ? mint_1.Minter.fromPartial(object.minter) : undefined;
        message.params = object.params !== undefined && object.params !== null ? mint_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
//# sourceMappingURL=genesis.js.map