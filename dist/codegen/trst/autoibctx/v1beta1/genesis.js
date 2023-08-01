"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequence = exports.GenesisState = void 0;
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        params: types_1.Params.fromPartial({}),
        interchainAccountAddresses: [],
        autoTxInfos: [],
        sequences: []
    };
}
exports.GenesisState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccountAddresses) {
            writer.uint32(18).string(v);
        }
        for (const v of message.autoTxInfos) {
            types_1.AutoTxInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.interchainAccountAddresses.push(reader.string());
                    break;
                case 3:
                    message.autoTxInfos.push(types_1.AutoTxInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        message.interchainAccountAddresses = object.interchainAccountAddresses?.map(e => e) || [];
        message.autoTxInfos = object.autoTxInfos?.map(e => types_1.AutoTxInfo.fromPartial(e)) || [];
        message.sequences = object.sequences?.map(e => exports.Sequence.fromPartial(e)) || [];
        return message;
    }
};
function createBaseSequence() {
    return {
        idKey: new Uint8Array(),
        value: BigInt(0)
    };
}
exports.Sequence = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSequence();
        message.idKey = object.idKey ?? new Uint8Array();
        message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
        return message;
    }
};
//# sourceMappingURL=genesis.js.map