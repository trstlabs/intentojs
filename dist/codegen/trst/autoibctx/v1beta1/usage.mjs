import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseAutoTxIbcUsage() {
    return {
        address: "",
        txs: []
    };
}
export const AutoTxIbcUsage = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.txs) {
            AutoIbcTxAck.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAutoTxIbcUsage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.txs.push(AutoIbcTxAck.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAutoTxIbcUsage();
        message.address = object.address ?? "";
        message.txs = object.txs?.map(e => AutoIbcTxAck.fromPartial(e)) || [];
        return message;
    }
};
function createBaseAutoIbcTxAck() {
    return {
        coin: Coin.fromPartial({}),
        connectionId: ""
    };
}
export const AutoIbcTxAck = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.coin !== undefined) {
            Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAutoIbcTxAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAutoIbcTxAck();
        message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
        message.connectionId = object.connectionId ?? "";
        return message;
    }
};
//# sourceMappingURL=usage.js.map