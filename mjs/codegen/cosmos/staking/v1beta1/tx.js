import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgCreateValidator() {
    return {
        description: Description.fromPartial({}),
        commission: CommissionRates.fromPartial({}),
        minSelfDelegation: "",
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: Any.fromPartial({}),
        value: Coin.fromPartial({})
    };
}
export const MsgCreateValidator = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(26).string(message.minSelfDelegation);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(34).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minSelfDelegation = reader.string();
                    break;
                case 4:
                    message.delegatorAddress = reader.string();
                    break;
                case 5:
                    message.validatorAddress = reader.string();
                    break;
                case 6:
                    message.pubkey = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        return message;
    }
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
export const MsgCreateValidatorResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidatorResponse();
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
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    }
};
function createBaseMsgEditValidator() {
    return {
        description: Description.fromPartial({}),
        validatorAddress: "",
        commissionRate: "",
        minSelfDelegation: ""
    };
}
export const MsgEditValidator = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(34).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.commissionRate = reader.string();
                    break;
                case 4:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgEditValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.validatorAddress = object.validatorAddress ?? "";
        message.commissionRate = object.commissionRate ?? "";
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    }
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
export const MsgEditValidatorResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidatorResponse();
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
        const message = createBaseMsgEditValidatorResponse();
        return message;
    }
};
function createBaseMsgDelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgDelegate = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseMsgDelegateResponse() {
    return {};
}
export const MsgDelegateResponse = {
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateResponse();
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
        const message = createBaseMsgDelegateResponse();
        return message;
    }
};
function createBaseMsgBeginRedelegate() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgBeginRedelegate = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseMsgBeginRedelegateResponse() {
    return {
        completionTime: Timestamp.fromPartial({})
    };
}
export const MsgBeginRedelegateResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
        return message;
    }
};
function createBaseMsgUndelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgUndelegate = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseMsgUndelegateResponse() {
    return {
        completionTime: Timestamp.fromPartial({})
    };
}
export const MsgUndelegateResponse = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateResponse();
        message.completionTime = object.completionTime !== undefined && object.completionTime !== null ? Timestamp.fromPartial(object.completionTime) : undefined;
        return message;
    }
};
//# sourceMappingURL=tx.js.map