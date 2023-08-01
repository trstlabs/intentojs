import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgRegisterAccount() {
    return {
        owner: "",
        connectionId: "",
        version: ""
    };
}
export const MsgRegisterAccount = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterAccount();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.version = object.version ?? "";
        return message;
    }
};
function createBaseMsgRegisterAccountResponse() {
    return {};
}
export const MsgRegisterAccountResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccountResponse();
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
        const message = createBaseMsgRegisterAccountResponse();
        return message;
    }
};
function createBaseMsgSubmitTx() {
    return {
        owner: "",
        connectionId: "",
        msg: Any.fromPartial({})
    };
}
export const MsgSubmitTx = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.msg !== undefined) {
            Any.encode(message.msg, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.msg = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.msg = object.msg !== undefined && object.msg !== null ? Any.fromPartial(object.msg) : undefined;
        return message;
    }
};
function createBaseMsgSubmitTxResponse() {
    return {};
}
export const MsgSubmitTxResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTxResponse();
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
        const message = createBaseMsgSubmitTxResponse();
        return message;
    }
};
function createBaseMsgSubmitAutoTx() {
    return {
        owner: "",
        connectionId: "",
        label: "",
        msgs: [],
        duration: "",
        startAt: BigInt(0),
        interval: "",
        feeFunds: [],
        dependsOnTxIds: []
    };
}
export const MsgSubmitAutoTx = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.label !== "") {
            writer.uint32(26).string(message.label);
        }
        for (const v of message.msgs) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.duration !== "") {
            writer.uint32(42).string(message.duration);
        }
        if (message.startAt !== BigInt(0)) {
            writer.uint32(48).uint64(message.startAt);
        }
        if (message.interval !== "") {
            writer.uint32(58).string(message.interval);
        }
        for (const v of message.feeFunds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        writer.uint32(74).fork();
        for (const v of message.dependsOnTxIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitAutoTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.label = reader.string();
                    break;
                case 4:
                    message.msgs.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.duration = reader.string();
                    break;
                case 6:
                    message.startAt = reader.uint64();
                    break;
                case 7:
                    message.interval = reader.string();
                    break;
                case 8:
                    message.feeFunds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.dependsOnTxIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.dependsOnTxIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitAutoTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.label = object.label ?? "";
        message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
        message.duration = object.duration ?? "";
        message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
        message.interval = object.interval ?? "";
        message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
        message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
        return message;
    }
};
function createBaseMsgSubmitAutoTxResponse() {
    return {};
}
export const MsgSubmitAutoTxResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitAutoTxResponse();
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
        const message = createBaseMsgSubmitAutoTxResponse();
        return message;
    }
};
function createBaseMsgRegisterAccountAndSubmitAutoTx() {
    return {
        owner: "",
        connectionId: "",
        label: "",
        msgs: [],
        duration: "",
        startAt: BigInt(0),
        interval: "",
        feeFunds: [],
        dependsOnTxIds: [],
        version: ""
    };
}
export const MsgRegisterAccountAndSubmitAutoTx = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.label !== "") {
            writer.uint32(26).string(message.label);
        }
        for (const v of message.msgs) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.duration !== "") {
            writer.uint32(42).string(message.duration);
        }
        if (message.startAt !== BigInt(0)) {
            writer.uint32(48).uint64(message.startAt);
        }
        if (message.interval !== "") {
            writer.uint32(58).string(message.interval);
        }
        for (const v of message.feeFunds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        writer.uint32(74).fork();
        for (const v of message.dependsOnTxIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.version !== "") {
            writer.uint32(82).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccountAndSubmitAutoTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.label = reader.string();
                    break;
                case 4:
                    message.msgs.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.duration = reader.string();
                    break;
                case 6:
                    message.startAt = reader.uint64();
                    break;
                case 7:
                    message.interval = reader.string();
                    break;
                case 8:
                    message.feeFunds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.dependsOnTxIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.dependsOnTxIds.push(reader.uint64());
                    }
                    break;
                case 10:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterAccountAndSubmitAutoTx();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        message.label = object.label ?? "";
        message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
        message.duration = object.duration ?? "";
        message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
        message.interval = object.interval ?? "";
        message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
        message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
        message.version = object.version ?? "";
        return message;
    }
};
function createBaseMsgRegisterAccountAndSubmitAutoTxResponse() {
    return {};
}
export const MsgRegisterAccountAndSubmitAutoTxResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccountAndSubmitAutoTxResponse();
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
        const message = createBaseMsgRegisterAccountAndSubmitAutoTxResponse();
        return message;
    }
};
function createBaseMsgUpdateAutoTx() {
    return {
        owner: "",
        txId: BigInt(0),
        connectionId: "",
        label: "",
        msgs: [],
        endTime: BigInt(0),
        startAt: BigInt(0),
        interval: "",
        feeFunds: [],
        dependsOnTxIds: []
    };
}
export const MsgUpdateAutoTx = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.txId !== BigInt(0)) {
            writer.uint32(16).uint64(message.txId);
        }
        if (message.connectionId !== "") {
            writer.uint32(26).string(message.connectionId);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        for (const v of message.msgs) {
            Any.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.endTime !== BigInt(0)) {
            writer.uint32(48).uint64(message.endTime);
        }
        if (message.startAt !== BigInt(0)) {
            writer.uint32(56).uint64(message.startAt);
        }
        if (message.interval !== "") {
            writer.uint32(66).string(message.interval);
        }
        for (const v of message.feeFunds) {
            Coin.encode(v, writer.uint32(74).fork()).ldelim();
        }
        writer.uint32(82).fork();
        for (const v of message.dependsOnTxIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAutoTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.txId = reader.uint64();
                    break;
                case 3:
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.msgs.push(Any.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endTime = reader.uint64();
                    break;
                case 7:
                    message.startAt = reader.uint64();
                    break;
                case 8:
                    message.interval = reader.string();
                    break;
                case 9:
                    message.feeFunds.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.dependsOnTxIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.dependsOnTxIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateAutoTx();
        message.owner = object.owner ?? "";
        message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
        message.connectionId = object.connectionId ?? "";
        message.label = object.label ?? "";
        message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
        message.startAt = object.startAt !== undefined && object.startAt !== null ? BigInt(object.startAt.toString()) : BigInt(0);
        message.interval = object.interval ?? "";
        message.feeFunds = object.feeFunds?.map(e => Coin.fromPartial(e)) || [];
        message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
        return message;
    }
};
function createBaseMsgUpdateAutoTxResponse() {
    return {};
}
export const MsgUpdateAutoTxResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAutoTxResponse();
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
        const message = createBaseMsgUpdateAutoTxResponse();
        return message;
    }
};
//# sourceMappingURL=tx.js.map