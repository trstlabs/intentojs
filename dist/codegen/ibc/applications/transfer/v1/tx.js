"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransferResponse = exports.MsgTransfer = void 0;
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
function createBaseMsgTransfer() {
    return {
        sourcePort: "",
        sourceChannel: "",
        token: coin_1.Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeoutHeight: client_1.Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
exports.MsgTransfer = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeoutHeight !== undefined) {
            client_1.Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(56).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourcePort = reader.string();
                    break;
                case 2:
                    message.sourceChannel = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeoutHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.sourcePort = object.sourcePort ?? "";
        message.sourceChannel = object.sourceChannel ?? "";
        message.token = object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? client_1.Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    }
};
function createBaseMsgTransferResponse() {
    return {};
}
exports.MsgTransferResponse = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
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
        const message = createBaseMsgTransferResponse();
        return message;
    }
};
//# sourceMappingURL=tx.js.map