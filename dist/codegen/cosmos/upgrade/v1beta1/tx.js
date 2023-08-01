"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCancelUpgradeResponse = exports.MsgCancelUpgrade = exports.MsgSoftwareUpgradeResponse = exports.MsgSoftwareUpgrade = void 0;
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../binary");
function createBaseMsgSoftwareUpgrade() {
    return {
        authority: "",
        plan: upgrade_1.Plan.fromPartial({})
    };
}
exports.MsgSoftwareUpgrade = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSoftwareUpgrade();
        message.authority = object.authority ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    }
};
function createBaseMsgSoftwareUpgradeResponse() {
    return {};
}
exports.MsgSoftwareUpgradeResponse = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSoftwareUpgradeResponse();
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
        const message = createBaseMsgSoftwareUpgradeResponse();
        return message;
    }
};
function createBaseMsgCancelUpgrade() {
    return {
        authority: ""
    };
}
exports.MsgCancelUpgrade = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelUpgrade();
        message.authority = object.authority ?? "";
        return message;
    }
};
function createBaseMsgCancelUpgradeResponse() {
    return {};
}
exports.MsgCancelUpgradeResponse = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUpgradeResponse();
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
        const message = createBaseMsgCancelUpgradeResponse();
        return message;
    }
};
//# sourceMappingURL=tx.js.map