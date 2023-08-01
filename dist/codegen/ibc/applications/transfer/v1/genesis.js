"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const transfer_1 = require("./transfer");
const binary_1 = require("../../../../binary");
function createBaseGenesisState() {
    return {
        portId: "",
        denomTraces: [],
        params: transfer_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        for (const v of message.denomTraces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.portId = reader.string();
                    break;
                case 2:
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
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
        message.portId = object.portId ?? "";
        message.denomTraces = object.denomTraces?.map(e => transfer_1.DenomTrace.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? transfer_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
//# sourceMappingURL=genesis.js.map