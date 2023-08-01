"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const connection_1 = require("./connection");
const binary_1 = require("../../../../binary");
function createBaseGenesisState() {
    return {
        connections: [],
        clientConnectionPaths: [],
        nextConnectionSequence: BigInt(0),
        params: connection_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientConnectionPaths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextConnectionSequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientConnectionPaths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextConnectionSequence = reader.uint64();
                    break;
                case 4:
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.clientConnectionPaths = object.clientConnectionPaths?.map(e => connection_1.ConnectionPaths.fromPartial(e)) || [];
        message.nextConnectionSequence = object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null ? BigInt(object.nextConnectionSequence.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? connection_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
//# sourceMappingURL=genesis.js.map