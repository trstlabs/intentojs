"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAuthorityResponse = exports.QueryAuthorityRequest = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = void 0;
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../binary");
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    }
};
function createBaseQueryCurrentPlanResponse() {
    return {
        plan: upgrade_1.Plan.fromPartial({})
    };
}
exports.QueryCurrentPlanResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryCurrentPlanResponse();
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        return message;
    }
};
function createBaseQueryAppliedPlanRequest() {
    return {
        name: ""
    };
}
exports.QueryAppliedPlanRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? "";
        return message;
    }
};
function createBaseQueryAppliedPlanResponse() {
    return {
        height: BigInt(0)
    };
}
exports.QueryAppliedPlanResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {
        lastHeight: BigInt(0)
    };
}
exports.QueryUpgradedConsensusStateRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lastHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight = object.lastHeight !== undefined && object.lastHeight !== null ? BigInt(object.lastHeight.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: new Uint8Array()
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgradedConsensusState = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
        return message;
    }
};
function createBaseQueryModuleVersionsRequest() {
    return {
        moduleName: ""
    };
}
exports.QueryModuleVersionsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = object.moduleName ?? "";
        return message;
    }
};
function createBaseQueryModuleVersionsResponse() {
    return {
        moduleVersions: []
    };
}
exports.QueryModuleVersionsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.moduleVersions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleVersions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.moduleVersions?.map(e => upgrade_1.ModuleVersion.fromPartial(e)) || [];
        return message;
    }
};
function createBaseQueryAuthorityRequest() {
    return {};
}
exports.QueryAuthorityRequest = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityRequest();
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
        const message = createBaseQueryAuthorityRequest();
        return message;
    }
};
function createBaseQueryAuthorityResponse() {
    return {
        address: ""
    };
}
exports.QueryAuthorityResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAuthorityResponse();
        message.address = object.address ?? "";
        return message;
    }
};
//# sourceMappingURL=query.js.map