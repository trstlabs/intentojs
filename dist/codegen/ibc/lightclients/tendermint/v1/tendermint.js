"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = void 0;
const duration_1 = require("../../../../google/protobuf/duration");
const client_1 = require("../../../core/client/v1/client");
const proofs_1 = require("../../../../confio/proofs");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const commitment_1 = require("../../../core/commitment/v1/commitment");
const types_1 = require("../../../../tendermint/types/types");
const validator_1 = require("../../../../tendermint/types/validator");
const binary_1 = require("../../../../binary");
function createBaseClientState() {
    return {
        chainId: "",
        trustLevel: exports.Fraction.fromPartial({}),
        trustingPeriod: duration_1.Duration.fromPartial({}),
        unbondingPeriod: duration_1.Duration.fromPartial({}),
        maxClockDrift: duration_1.Duration.fromPartial({}),
        frozenHeight: client_1.Height.fromPartial({}),
        latestHeight: client_1.Height.fromPartial({}),
        proofSpecs: [],
        upgradePath: [],
        allowUpdateAfterExpiry: false,
        allowUpdateAfterMisbehaviour: false
    };
}
exports.ClientState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.trustLevel !== undefined) {
            exports.Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustingPeriod !== undefined) {
            duration_1.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbondingPeriod !== undefined) {
            duration_1.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxClockDrift !== undefined) {
            duration_1.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozenHeight !== undefined) {
            client_1.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.latestHeight !== undefined) {
            client_1.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proofSpecs) {
            proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.upgradePath) {
            writer.uint32(74).string(v);
        }
        if (message.allowUpdateAfterExpiry === true) {
            writer.uint32(80).bool(message.allowUpdateAfterExpiry);
        }
        if (message.allowUpdateAfterMisbehaviour === true) {
            writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.trustLevel = exports.Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbondingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxClockDrift = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozenHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latestHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proofSpecs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.upgradePath.push(reader.string());
                    break;
                case 10:
                    message.allowUpdateAfterExpiry = reader.bool();
                    break;
                case 11:
                    message.allowUpdateAfterMisbehaviour = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.chainId = object.chainId ?? "";
        message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? exports.Fraction.fromPartial(object.trustLevel) : undefined;
        message.trustingPeriod = object.trustingPeriod !== undefined && object.trustingPeriod !== null ? duration_1.Duration.fromPartial(object.trustingPeriod) : undefined;
        message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? duration_1.Duration.fromPartial(object.unbondingPeriod) : undefined;
        message.maxClockDrift = object.maxClockDrift !== undefined && object.maxClockDrift !== null ? duration_1.Duration.fromPartial(object.maxClockDrift) : undefined;
        message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? client_1.Height.fromPartial(object.frozenHeight) : undefined;
        message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? client_1.Height.fromPartial(object.latestHeight) : undefined;
        message.proofSpecs = object.proofSpecs?.map(e => proofs_1.ProofSpec.fromPartial(e)) || [];
        message.upgradePath = object.upgradePath?.map(e => e) || [];
        message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
        message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
        return message;
    }
};
function createBaseConsensusState() {
    return {
        timestamp: timestamp_1.Timestamp.fromPartial({}),
        root: commitment_1.MerkleRoot.fromPartial({}),
        nextValidatorsHash: new Uint8Array()
    };
}
exports.ConsensusState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(26).bytes(message.nextValidatorsHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? timestamp_1.Timestamp.fromPartial(object.timestamp) : undefined;
        message.root = object.root !== undefined && object.root !== null ? commitment_1.MerkleRoot.fromPartial(object.root) : undefined;
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        return message;
    }
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        header1: exports.Header.fromPartial({}),
        header2: exports.Header.fromPartial({})
    };
}
exports.Misbehaviour = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.header1 !== undefined) {
            exports.Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header2 !== undefined) {
            exports.Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.header1 = exports.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header2 = exports.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.header1 = object.header1 !== undefined && object.header1 !== null ? exports.Header.fromPartial(object.header1) : undefined;
        message.header2 = object.header2 !== undefined && object.header2 !== null ? exports.Header.fromPartial(object.header2) : undefined;
        return message;
    }
};
function createBaseHeader() {
    return {
        signedHeader: types_1.SignedHeader.fromPartial({}),
        validatorSet: validator_1.ValidatorSet.fromPartial({}),
        trustedHeight: client_1.Height.fromPartial({}),
        trustedValidators: validator_1.ValidatorSet.fromPartial({})
    };
}
exports.Header = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signedHeader !== undefined) {
            types_1.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            validator_1.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        if (message.trustedHeight !== undefined) {
            client_1.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.trustedValidators !== undefined) {
            validator_1.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = types_1.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trustedHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trustedValidators = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? types_1.SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? validator_1.ValidatorSet.fromPartial(object.validatorSet) : undefined;
        message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? client_1.Height.fromPartial(object.trustedHeight) : undefined;
        message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? validator_1.ValidatorSet.fromPartial(object.trustedValidators) : undefined;
        return message;
    }
};
function createBaseFraction() {
    return {
        numerator: BigInt(0),
        denominator: BigInt(0)
    };
}
exports.Fraction = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.numerator !== BigInt(0)) {
            writer.uint32(8).uint64(message.numerator);
        }
        if (message.denominator !== BigInt(0)) {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFraction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = reader.uint64();
                    break;
                case 2:
                    message.denominator = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFraction();
        message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
        message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
        return message;
    }
};
//# sourceMappingURL=tendermint.js.map