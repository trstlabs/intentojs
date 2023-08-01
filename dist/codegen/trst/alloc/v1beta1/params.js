"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DistributionProportions = exports.WeightedAddress = void 0;
const binary_1 = require("../../../binary");
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
exports.WeightedAddress = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    }
};
function createBaseDistributionProportions() {
    return {
        staking: "",
        trustlessContractIncentives: "",
        relayerIncentives: "",
        contributorRewards: "",
        communityPool: ""
    };
}
exports.DistributionProportions = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(message.staking);
        }
        if (message.trustlessContractIncentives !== "") {
            writer.uint32(18).string(message.trustlessContractIncentives);
        }
        if (message.relayerIncentives !== "") {
            writer.uint32(26).string(message.relayerIncentives);
        }
        if (message.contributorRewards !== "") {
            writer.uint32(34).string(message.contributorRewards);
        }
        if (message.communityPool !== "") {
            writer.uint32(42).string(message.communityPool);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staking = reader.string();
                    break;
                case 2:
                    message.trustlessContractIncentives = reader.string();
                    break;
                case 3:
                    message.relayerIncentives = reader.string();
                    break;
                case 4:
                    message.contributorRewards = reader.string();
                    break;
                case 5:
                    message.communityPool = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.staking = object.staking ?? "";
        message.trustlessContractIncentives = object.trustlessContractIncentives ?? "";
        message.relayerIncentives = object.relayerIncentives ?? "";
        message.contributorRewards = object.contributorRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    }
};
function createBaseParams() {
    return {
        distributionProportions: exports.DistributionProportions.fromPartial({}),
        weightedContributorRewardsReceivers: []
    };
}
exports.Params = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distributionProportions !== undefined) {
            exports.DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.weightedContributorRewardsReceivers) {
            exports.WeightedAddress.encode(v, writer.uint32(18).fork()).ldelim();
        }
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
                    message.distributionProportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weightedContributorRewardsReceivers.push(exports.WeightedAddress.decode(reader, reader.uint32()));
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
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? exports.DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.weightedContributorRewardsReceivers = object.weightedContributorRewardsReceivers?.map(e => exports.WeightedAddress.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=params.js.map