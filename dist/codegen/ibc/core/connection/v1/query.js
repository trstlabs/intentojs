"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const connection_1 = require("./connection");
const client_1 = require("../../client/v1/client");
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
function createBaseQueryConnectionRequest() {
    return {
        connectionId: ""
    };
}
exports.QueryConnectionRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryConnectionRequest();
        message.connectionId = object.connectionId ?? "";
        return message;
    }
};
function createBaseQueryConnectionResponse() {
    return {
        connection: connection_1.ConnectionEnd.fromPartial({}),
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionResponse();
        message.connection = object.connection !== undefined && object.connection !== null ? connection_1.ConnectionEnd.fromPartial(object.connection) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    }
};
function createBaseQueryConnectionsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryConnectionsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
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
        const message = createBaseQueryConnectionsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryConnectionsResponse() {
    return {
        connections: [],
        pagination: pagination_1.PageResponse.fromPartial({}),
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    }
};
function createBaseQueryClientConnectionsRequest() {
    return {
        clientId: ""
    };
}
exports.QueryClientConnectionsRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsRequest();
        message.clientId = object.clientId ?? "";
        return message;
    }
};
function createBaseQueryClientConnectionsResponse() {
    return {
        connectionPaths: [],
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryClientConnectionsResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connectionPaths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionPaths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connectionPaths = object.connectionPaths?.map(e => e) || [];
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    }
};
function createBaseQueryConnectionClientStateRequest() {
    return {
        connectionId: ""
    };
}
exports.QueryConnectionClientStateRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryConnectionClientStateRequest();
        message.connectionId = object.connectionId ?? "";
        return message;
    }
};
function createBaseQueryConnectionClientStateResponse() {
    return {
        identifiedClientState: client_1.IdentifiedClientState.fromPartial({}),
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionClientStateResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifiedClientState !== undefined) {
            client_1.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifiedClientState = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? client_1.IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    }
};
function createBaseQueryConnectionConsensusStateRequest() {
    return {
        connectionId: "",
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0)
    };
}
exports.QueryConnectionConsensusStateRequest = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connectionId = object.connectionId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensusState: any_1.Any.fromPartial({}),
        clientId: "",
        proof: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionConsensusStateResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clientId = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        message.clientId = object.clientId ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        return message;
    }
};
//# sourceMappingURL=query.js.map