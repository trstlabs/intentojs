import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseMsgTransfer() {
    return {
        sourcePort: "",
        sourceChannel: "",
        token: Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeoutHeight: Height.fromPartial({}),
        timeoutTimestamp: BigInt(0)
    };
}
export const MsgTransfer = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.sourcePort !== "") {
            writer.uint32(10).string(message.sourcePort);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(18).string(message.sourceChannel);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeoutHeight !== undefined) {
            Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeoutTimestamp !== BigInt(0)) {
            writer.uint32(56).uint64(message.timeoutTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.token = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeoutHeight = Height.decode(reader, reader.uint32());
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
        message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
        message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
        return message;
    }
};
function createBaseMsgTransferResponse() {
    return {};
}
export const MsgTransferResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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