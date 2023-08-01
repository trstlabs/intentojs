"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAutoTxIbcUsageResponse = exports.QueryAutoTxIbcUsageRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryAutoTxsForOwnerResponse = exports.QueryAutoTxsForOwnerRequest = exports.QueryAutoTxsResponse = exports.QueryAutoTxsRequest = exports.QueryAutoTxResponse = exports.QueryAutoTxRequest = exports.QueryInterchainAccountFromAddressResponse = exports.QueryInterchainAccountFromAddressRequest = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const types_1 = require("./types");
const usage_1 = require("./usage");
const binary_1 = require("../../../binary");
function createBaseQueryInterchainAccountFromAddressRequest() {
    return {
        owner: "",
        connectionId: ""
    };
}
exports.QueryInterchainAccountFromAddressRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountFromAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        const message = createBaseQueryInterchainAccountFromAddressRequest();
        message.owner = object.owner ?? "";
        message.connectionId = object.connectionId ?? "";
        return message;
    }
};
function createBaseQueryInterchainAccountFromAddressResponse() {
    return {
        interchainAccountAddress: ""
    };
}
exports.QueryInterchainAccountFromAddressResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountFromAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchainAccountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountFromAddressResponse();
        message.interchainAccountAddress = object.interchainAccountAddress ?? "";
        return message;
    }
};
function createBaseQueryAutoTxRequest() {
    return {
        id: ""
    };
}
exports.QueryAutoTxRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxRequest();
        message.id = object.id ?? "";
        return message;
    }
};
function createBaseQueryAutoTxResponse() {
    return {
        autoTxInfo: types_1.AutoTxInfo.fromPartial({})
    };
}
exports.QueryAutoTxResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.autoTxInfo !== undefined) {
            types_1.AutoTxInfo.encode(message.autoTxInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoTxInfo = types_1.AutoTxInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxResponse();
        message.autoTxInfo = object.autoTxInfo !== undefined && object.autoTxInfo !== null ? types_1.AutoTxInfo.fromPartial(object.autoTxInfo) : undefined;
        return message;
    }
};
function createBaseQueryAutoTxsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAutoTxsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAutoTxsResponse() {
    return {
        autoTxInfos: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAutoTxsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.autoTxInfos) {
            types_1.AutoTxInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoTxInfos.push(types_1.AutoTxInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxsResponse();
        message.autoTxInfos = object.autoTxInfos?.map(e => types_1.AutoTxInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAutoTxsForOwnerRequest() {
    return {
        owner: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAutoTxsForOwnerRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxsForOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxsForOwnerRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAutoTxsForOwnerResponse() {
    return {
        autoTxInfos: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAutoTxsForOwnerResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.autoTxInfos) {
            types_1.AutoTxInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxsForOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoTxInfos.push(types_1.AutoTxInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxsForOwnerResponse();
        message.autoTxInfos = object.autoTxInfos?.map(e => types_1.AutoTxInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: types_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? types_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryAutoTxIbcUsageRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAutoTxIbcUsageRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxIbcUsageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxIbcUsageRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryAutoTxIbcUsageResponse() {
    return {
        autoTxIbcUsage: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAutoTxIbcUsageResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.autoTxIbcUsage) {
            usage_1.AutoTxIbcUsage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAutoTxIbcUsageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.autoTxIbcUsage.push(usage_1.AutoTxIbcUsage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAutoTxIbcUsageResponse();
        message.autoTxIbcUsage = object.autoTxIbcUsage?.map(e => usage_1.AutoTxIbcUsage.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
//# sourceMappingURL=query.js.map