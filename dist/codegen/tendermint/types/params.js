"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = void 0;
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
function createBaseConsensusParams() {
    return {
        block: exports.BlockParams.fromPartial({}),
        evidence: exports.EvidenceParams.fromPartial({}),
        validator: exports.ValidatorParams.fromPartial({}),
        version: exports.VersionParams.fromPartial({})
    };
}
exports.ConsensusParams = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? exports.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? exports.VersionParams.fromPartial(object.version) : undefined;
        return message;
    }
};
function createBaseBlockParams() {
    return {
        maxBytes: BigInt(0),
        maxGas: BigInt(0),
        timeIotaMs: BigInt(0)
    };
}
exports.BlockParams = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.maxGas);
        }
        if (message.timeIotaMs !== BigInt(0)) {
            writer.uint32(24).int64(message.timeIotaMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                case 3:
                    message.timeIotaMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
        message.timeIotaMs = object.timeIotaMs !== undefined && object.timeIotaMs !== null ? BigInt(object.timeIotaMs.toString()) : BigInt(0);
        return message;
    }
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: BigInt(0),
        maxAgeDuration: duration_1.Duration.fromPartial({}),
        maxBytes: BigInt(0)
    };
}
exports.EvidenceParams = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxAgeNumBlocks !== BigInt(0)) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            duration_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? duration_1.Duration.fromPartial(object.maxAgeDuration) : undefined;
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        return message;
    }
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
exports.ValidatorParams = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pubKeyTypes) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pubKeyTypes = object.pubKeyTypes?.map(e => e) || [];
        return message;
    }
};
function createBaseVersionParams() {
    return {
        appVersion: BigInt(0)
    };
}
exports.VersionParams = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.appVersion !== BigInt(0)) {
            writer.uint32(8).uint64(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appVersion = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
        return message;
    }
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: BigInt(0),
        blockMaxGas: BigInt(0)
    };
}
exports.HashedParams = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.blockMaxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
        return message;
    }
};
//# sourceMappingURL=params.js.map