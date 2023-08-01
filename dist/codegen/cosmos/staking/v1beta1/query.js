"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = void 0;
const pagination_1 = require("../../base/query/v1beta1/pagination");
const staking_1 = require("./staking");
const binary_1 = require("../../../binary");
function createBaseQueryValidatorsRequest() {
    return {
        status: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryValidatorsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
        const message = createBaseQueryValidatorsRequest();
        message.status = object.status ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryValidatorsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
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
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => staking_1.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorRequest() {
    return {
        validatorAddr: ""
    };
}
exports.QueryValidatorRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    }
};
function createBaseQueryValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryValidatorResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? staking_1.Validator.fromPartial(object.validator) : undefined;
        return message;
    }
};
function createBaseQueryValidatorDelegationsRequest() {
    return {
        validatorAddr: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryValidatorDelegationsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
        const message = createBaseQueryValidatorDelegationsRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorDelegationsResponse() {
    return {
        delegationResponses: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryValidatorDelegationsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.delegationResponses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
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
        const message = createBaseQueryValidatorDelegationsResponse();
        message.delegationResponses = object.delegationResponses?.map(e => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return {
        validatorAddr: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
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
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validatorAddr = object.validatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return {
        unbondingResponses: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unbondingResponses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbondingResponses = object.unbondingResponses?.map(e => staking_1.UnbondingDelegation.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
exports.QueryDelegationRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    }
};
function createBaseQueryDelegationResponse() {
    return {
        delegationResponse: staking_1.DelegationResponse.fromPartial({})
    };
}
exports.QueryDelegationResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegationResponse !== undefined) {
            staking_1.DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponse = staking_1.DelegationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationResponse();
        message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? staking_1.DelegationResponse.fromPartial(object.delegationResponse) : undefined;
        return message;
    }
};
function createBaseQueryUnbondingDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
exports.QueryUnbondingDelegationRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    }
};
function createBaseQueryUnbondingDelegationResponse() {
    return {
        unbond: staking_1.UnbondingDelegation.fromPartial({})
    };
}
exports.QueryUnbondingDelegationResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.unbond !== undefined) {
            staking_1.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = staking_1.UnbondingDelegation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationResponse();
        message.unbond = object.unbond !== undefined && object.unbond !== null ? staking_1.UnbondingDelegation.fromPartial(object.unbond) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDelegatorDelegationsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
        const message = createBaseQueryDelegatorDelegationsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorDelegationsResponse() {
    return {
        delegationResponses: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDelegatorDelegationsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.delegationResponses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDelegatorDelegationsResponse();
        message.delegationResponses = object.delegationResponses?.map(e => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return {
        unbondingResponses: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unbondingResponses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbondingResponses = object.unbondingResponses?.map(e => staking_1.UnbondingDelegation.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryRedelegationsRequest() {
    return {
        delegatorAddr: "",
        srcValidatorAddr: "",
        dstValidatorAddr: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryRedelegationsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.srcValidatorAddr !== "") {
            writer.uint32(18).string(message.srcValidatorAddr);
        }
        if (message.dstValidatorAddr !== "") {
            writer.uint32(26).string(message.dstValidatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.srcValidatorAddr = reader.string();
                    break;
                case 3:
                    message.dstValidatorAddr = reader.string();
                    break;
                case 4:
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
        const message = createBaseQueryRedelegationsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.srcValidatorAddr = object.srcValidatorAddr ?? "";
        message.dstValidatorAddr = object.dstValidatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryRedelegationsResponse() {
    return {
        redelegationResponses: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryRedelegationsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.redelegationResponses) {
            staking_1.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationResponses.push(staking_1.RedelegationResponse.decode(reader, reader.uint32()));
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
        const message = createBaseQueryRedelegationsResponse();
        message.redelegationResponses = object.redelegationResponses?.map(e => staking_1.RedelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegatorAddr: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDelegatorValidatorsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
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
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDelegatorValidatorsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => staking_1.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorValidatorRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
exports.QueryDelegatorValidatorRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorRequest();
        message.delegatorAddr = object.delegatorAddr ?? "";
        message.validatorAddr = object.validatorAddr ?? "";
        return message;
    }
};
function createBaseQueryDelegatorValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryDelegatorValidatorResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? staking_1.Validator.fromPartial(object.validator) : undefined;
        return message;
    }
};
function createBaseQueryHistoricalInfoRequest() {
    return {
        height: BigInt(0)
    };
}
exports.QueryHistoricalInfoRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoRequest();
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
        const message = createBaseQueryHistoricalInfoRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryHistoricalInfoResponse() {
    return {
        hist: staking_1.HistoricalInfo.fromPartial({})
    };
}
exports.QueryHistoricalInfoResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hist !== undefined) {
            staking_1.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = staking_1.HistoricalInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoResponse();
        message.hist = object.hist !== undefined && object.hist !== null ? staking_1.HistoricalInfo.fromPartial(object.hist) : undefined;
        return message;
    }
};
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
        return message;
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: staking_1.Pool.fromPartial({})
    };
}
exports.QueryPoolResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            staking_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = staking_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? staking_1.Pool.fromPartial(object.pool) : undefined;
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
        params: staking_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
//# sourceMappingURL=query.js.map