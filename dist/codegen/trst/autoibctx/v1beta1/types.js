"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.AutoTxHistoryEntry = exports.AutoTxInfo = void 0;
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseAutoTxInfo() {
    return {
        txId: BigInt(0),
        owner: "",
        label: "",
        feeAddress: "",
        msgs: [],
        interval: duration_1.Duration.fromPartial({}),
        startTime: timestamp_1.Timestamp.fromPartial({}),
        execTime: timestamp_1.Timestamp.fromPartial({}),
        endTime: timestamp_1.Timestamp.fromPartial({}),
        autoTxHistory: [],
        portId: "",
        connectionId: "",
        dependsOnTxIds: [],
        updateHistory: []
    };
}
exports.AutoTxInfo = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.txId !== BigInt(0)) {
            writer.uint32(8).uint64(message.txId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.label !== "") {
            writer.uint32(26).string(message.label);
        }
        if (message.feeAddress !== "") {
            writer.uint32(34).string(message.feeAddress);
        }
        for (const v of message.msgs) {
            any_1.Any.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.interval !== undefined) {
            duration_1.Duration.encode(message.interval, writer.uint32(50).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(message.startTime, writer.uint32(58).fork()).ldelim();
        }
        if (message.execTime !== undefined) {
            timestamp_1.Timestamp.encode(message.execTime, writer.uint32(66).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(message.endTime, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.autoTxHistory) {
            exports.AutoTxHistoryEntry.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(90).string(message.portId);
        }
        if (message.connectionId !== "") {
            writer.uint32(98).string(message.connectionId);
        }
        writer.uint32(114).fork();
        for (const v of message.dependsOnTxIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.updateHistory) {
            timestamp_1.Timestamp.encode(v, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAutoTxInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.label = reader.string();
                    break;
                case 4:
                    message.feeAddress = reader.string();
                    break;
                case 5:
                    message.msgs.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.startTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.execTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.endTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.autoTxHistory.push(exports.AutoTxHistoryEntry.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.portId = reader.string();
                    break;
                case 12:
                    message.connectionId = reader.string();
                    break;
                case 14:
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
                case 15:
                    message.updateHistory.push(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAutoTxInfo();
        message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.label = object.label ?? "";
        message.feeAddress = object.feeAddress ?? "";
        message.msgs = object.msgs?.map(e => any_1.Any.fromPartial(e)) || [];
        message.interval = object.interval !== undefined && object.interval !== null ? duration_1.Duration.fromPartial(object.interval) : undefined;
        message.startTime = object.startTime !== undefined && object.startTime !== null ? timestamp_1.Timestamp.fromPartial(object.startTime) : undefined;
        message.execTime = object.execTime !== undefined && object.execTime !== null ? timestamp_1.Timestamp.fromPartial(object.execTime) : undefined;
        message.endTime = object.endTime !== undefined && object.endTime !== null ? timestamp_1.Timestamp.fromPartial(object.endTime) : undefined;
        message.autoTxHistory = object.autoTxHistory?.map(e => exports.AutoTxHistoryEntry.fromPartial(e)) || [];
        message.portId = object.portId ?? "";
        message.connectionId = object.connectionId ?? "";
        message.dependsOnTxIds = object.dependsOnTxIds?.map(e => BigInt(e.toString())) || [];
        message.updateHistory = object.updateHistory?.map(e => timestamp_1.Timestamp.fromPartial(e)) || [];
        return message;
    }
};
function createBaseAutoTxHistoryEntry() {
    return {
        scheduledExecTime: timestamp_1.Timestamp.fromPartial({}),
        actualExecTime: timestamp_1.Timestamp.fromPartial({}),
        execFee: coin_1.Coin.fromPartial({}),
        executed: false,
        timedOut: false,
        error: ""
    };
}
exports.AutoTxHistoryEntry = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.scheduledExecTime !== undefined) {
            timestamp_1.Timestamp.encode(message.scheduledExecTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.actualExecTime !== undefined) {
            timestamp_1.Timestamp.encode(message.actualExecTime, writer.uint32(18).fork()).ldelim();
        }
        if (message.execFee !== undefined) {
            coin_1.Coin.encode(message.execFee, writer.uint32(26).fork()).ldelim();
        }
        if (message.executed === true) {
            writer.uint32(32).bool(message.executed);
        }
        if (message.timedOut === true) {
            writer.uint32(40).bool(message.timedOut);
        }
        if (message.error !== "") {
            writer.uint32(50).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAutoTxHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scheduledExecTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.actualExecTime = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.execFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.executed = reader.bool();
                    break;
                case 5:
                    message.timedOut = reader.bool();
                    break;
                case 6:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAutoTxHistoryEntry();
        message.scheduledExecTime = object.scheduledExecTime !== undefined && object.scheduledExecTime !== null ? timestamp_1.Timestamp.fromPartial(object.scheduledExecTime) : undefined;
        message.actualExecTime = object.actualExecTime !== undefined && object.actualExecTime !== null ? timestamp_1.Timestamp.fromPartial(object.actualExecTime) : undefined;
        message.execFee = object.execFee !== undefined && object.execFee !== null ? coin_1.Coin.fromPartial(object.execFee) : undefined;
        message.executed = object.executed ?? false;
        message.timedOut = object.timedOut ?? false;
        message.error = object.error ?? "";
        return message;
    }
};
function createBaseParams() {
    return {
        AutoTxFundsCommission: BigInt(0),
        AutoTxFlexFeeMul: BigInt(0),
        AutoTxConstantFee: BigInt(0),
        RecurringAutoTxConstantFee: BigInt(0),
        MaxAutoTxDuration: duration_1.Duration.fromPartial({}),
        MinAutoTxDuration: duration_1.Duration.fromPartial({}),
        MinAutoTxInterval: duration_1.Duration.fromPartial({}),
        relayerRewards: []
    };
}
exports.Params = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.AutoTxFundsCommission !== BigInt(0)) {
            writer.uint32(8).int64(message.AutoTxFundsCommission);
        }
        if (message.AutoTxFlexFeeMul !== BigInt(0)) {
            writer.uint32(16).int64(message.AutoTxFlexFeeMul);
        }
        if (message.AutoTxConstantFee !== BigInt(0)) {
            writer.uint32(24).int64(message.AutoTxConstantFee);
        }
        if (message.RecurringAutoTxConstantFee !== BigInt(0)) {
            writer.uint32(32).int64(message.RecurringAutoTxConstantFee);
        }
        if (message.MaxAutoTxDuration !== undefined) {
            duration_1.Duration.encode(message.MaxAutoTxDuration, writer.uint32(42).fork()).ldelim();
        }
        if (message.MinAutoTxDuration !== undefined) {
            duration_1.Duration.encode(message.MinAutoTxDuration, writer.uint32(50).fork()).ldelim();
        }
        if (message.MinAutoTxInterval !== undefined) {
            duration_1.Duration.encode(message.MinAutoTxInterval, writer.uint32(66).fork()).ldelim();
        }
        writer.uint32(74).fork();
        for (const v of message.relayerRewards) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AutoTxFundsCommission = reader.int64();
                    break;
                case 2:
                    message.AutoTxFlexFeeMul = reader.int64();
                    break;
                case 3:
                    message.AutoTxConstantFee = reader.int64();
                    break;
                case 4:
                    message.RecurringAutoTxConstantFee = reader.int64();
                    break;
                case 5:
                    message.MaxAutoTxDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.MinAutoTxDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.MinAutoTxInterval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.relayerRewards.push(reader.int64());
                        }
                    }
                    else {
                        message.relayerRewards.push(reader.int64());
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
        const message = createBaseParams();
        message.AutoTxFundsCommission = object.AutoTxFundsCommission !== undefined && object.AutoTxFundsCommission !== null ? BigInt(object.AutoTxFundsCommission.toString()) : BigInt(0);
        message.AutoTxFlexFeeMul = object.AutoTxFlexFeeMul !== undefined && object.AutoTxFlexFeeMul !== null ? BigInt(object.AutoTxFlexFeeMul.toString()) : BigInt(0);
        message.AutoTxConstantFee = object.AutoTxConstantFee !== undefined && object.AutoTxConstantFee !== null ? BigInt(object.AutoTxConstantFee.toString()) : BigInt(0);
        message.RecurringAutoTxConstantFee = object.RecurringAutoTxConstantFee !== undefined && object.RecurringAutoTxConstantFee !== null ? BigInt(object.RecurringAutoTxConstantFee.toString()) : BigInt(0);
        message.MaxAutoTxDuration = object.MaxAutoTxDuration !== undefined && object.MaxAutoTxDuration !== null ? duration_1.Duration.fromPartial(object.MaxAutoTxDuration) : undefined;
        message.MinAutoTxDuration = object.MinAutoTxDuration !== undefined && object.MinAutoTxDuration !== null ? duration_1.Duration.fromPartial(object.MinAutoTxDuration) : undefined;
        message.MinAutoTxInterval = object.MinAutoTxInterval !== undefined && object.MinAutoTxInterval !== null ? duration_1.Duration.fromPartial(object.MinAutoTxInterval) : undefined;
        message.relayerRewards = object.relayerRewards?.map(e => BigInt(e.toString())) || [];
        return message;
    }
};
//# sourceMappingURL=types.js.map