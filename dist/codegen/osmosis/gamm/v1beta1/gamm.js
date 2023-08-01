"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgExitSwapExternAmountOutResponse = exports.MsgExitSwapExternAmountOut = exports.MsgExitSwapShareAmountInResponse = exports.MsgExitSwapShareAmountIn = exports.MsgJoinSwapShareAmountOutResponse = exports.MsgJoinSwapShareAmountOut = exports.MsgJoinSwapExternAmountInResponse = exports.MsgJoinSwapExternAmountIn = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.MsgExitPoolResponse = exports.MsgExitPool = exports.MsgJoinPoolResponse = exports.MsgJoinPool = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const swap_route_1 = require("../../poolmanager/v1beta1/swap_route");
const binary_1 = require("../../../binary");
function createBaseMsgJoinPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareOutAmount: "",
        tokenInMaxs: []
    };
}
exports.MsgJoinPool = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(26).string(message.shareOutAmount);
        }
        for (const v of message.tokenInMaxs) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.shareOutAmount = reader.string();
                    break;
                case 4:
                    message.tokenInMaxs.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxs = object.tokenInMaxs?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    }
};
function createBaseMsgJoinPoolResponse() {
    return {
        shareOutAmount: "",
        tokenIn: []
    };
}
exports.MsgJoinPoolResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        for (const v of message.tokenIn) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                case 2:
                    message.tokenIn.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPoolResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenIn = object.tokenIn?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    }
};
function createBaseMsgExitPool() {
    return {
        sender: "",
        poolId: BigInt(0),
        shareInAmount: "",
        tokenOutMins: []
    };
}
exports.MsgExitPool = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(26).string(message.shareInAmount);
        }
        for (const v of message.tokenOutMins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.shareInAmount = reader.string();
                    break;
                case 4:
                    message.tokenOutMins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPool();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMins = object.tokenOutMins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    }
};
function createBaseMsgExitPoolResponse() {
    return {
        tokenOut: []
    };
}
exports.MsgExitPoolResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokenOut) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOut.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPoolResponse();
        message.tokenOut = object.tokenOut?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    }
};
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        tokenIn: coin_1.Coin.fromPartial({}),
        tokenOutMinAmount: ""
    };
}
exports.MsgSwapExactAmountIn = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(34).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    }
};
function createBaseMsgSwapExactAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.MsgSwapExactAmountInResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    }
};
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        tokenInMaxAmount: "",
        tokenOut: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSwapExactAmountOut = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(26).string(message.tokenInMaxAmount);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.tokenInMaxAmount = reader.string();
                    break;
                case 4:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        return message;
    }
};
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.MsgSwapExactAmountOutResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    }
};
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenIn: coin_1.Coin.fromPartial({}),
        shareOutMinAmount: ""
    };
}
exports.MsgJoinSwapExternAmountIn = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenIn !== undefined) {
            coin_1.Coin.encode(message.tokenIn, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareOutMinAmount !== "") {
            writer.uint32(34).string(message.shareOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? coin_1.Coin.fromPartial(object.tokenIn) : undefined;
        message.shareOutMinAmount = object.shareOutMinAmount ?? "";
        return message;
    }
};
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        shareOutAmount: ""
    };
}
exports.MsgJoinSwapExternAmountInResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareOutAmount !== "") {
            writer.uint32(10).string(message.shareOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        message.shareOutAmount = object.shareOutAmount ?? "";
        return message;
    }
};
function createBaseMsgJoinSwapShareAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenInDenom: "",
        shareOutAmount: "",
        tokenInMaxAmount: ""
    };
}
exports.MsgJoinSwapShareAmountOut = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenInDenom !== "") {
            writer.uint32(26).string(message.tokenInDenom);
        }
        if (message.shareOutAmount !== "") {
            writer.uint32(34).string(message.shareOutAmount);
        }
        if (message.tokenInMaxAmount !== "") {
            writer.uint32(42).string(message.tokenInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenInDenom = reader.string();
                    break;
                case 4:
                    message.shareOutAmount = reader.string();
                    break;
                case 5:
                    message.tokenInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenInDenom = object.tokenInDenom ?? "";
        message.shareOutAmount = object.shareOutAmount ?? "";
        message.tokenInMaxAmount = object.tokenInMaxAmount ?? "";
        return message;
    }
};
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        tokenInAmount: ""
    };
}
exports.MsgJoinSwapShareAmountOutResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenInAmount !== "") {
            writer.uint32(10).string(message.tokenInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
        message.tokenInAmount = object.tokenInAmount ?? "";
        return message;
    }
};
function createBaseMsgExitSwapShareAmountIn() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOutDenom: "",
        shareInAmount: "",
        tokenOutMinAmount: ""
    };
}
exports.MsgExitSwapShareAmountIn = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOutDenom !== "") {
            writer.uint32(26).string(message.tokenOutDenom);
        }
        if (message.shareInAmount !== "") {
            writer.uint32(34).string(message.shareInAmount);
        }
        if (message.tokenOutMinAmount !== "") {
            writer.uint32(42).string(message.tokenOutMinAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenOutDenom = reader.string();
                    break;
                case 4:
                    message.shareInAmount = reader.string();
                    break;
                case 5:
                    message.tokenOutMinAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapShareAmountIn();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOutDenom = object.tokenOutDenom ?? "";
        message.shareInAmount = object.shareInAmount ?? "";
        message.tokenOutMinAmount = object.tokenOutMinAmount ?? "";
        return message;
    }
};
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        tokenOutAmount: ""
    };
}
exports.MsgExitSwapShareAmountInResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tokenOutAmount !== "") {
            writer.uint32(10).string(message.tokenOutAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenOutAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapShareAmountInResponse();
        message.tokenOutAmount = object.tokenOutAmount ?? "";
        return message;
    }
};
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        poolId: BigInt(0),
        tokenOut: coin_1.Coin.fromPartial({}),
        shareInMaxAmount: ""
    };
}
exports.MsgExitSwapExternAmountOut = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.poolId !== BigInt(0)) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.tokenOut !== undefined) {
            coin_1.Coin.encode(message.tokenOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.shareInMaxAmount !== "") {
            writer.uint32(34).string(message.shareInMaxAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.tokenOut = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.shareInMaxAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        message.sender = object.sender ?? "";
        message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
        message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? coin_1.Coin.fromPartial(object.tokenOut) : undefined;
        message.shareInMaxAmount = object.shareInMaxAmount ?? "";
        return message;
    }
};
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        shareInAmount: ""
    };
}
exports.MsgExitSwapExternAmountOutResponse = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.shareInAmount !== "") {
            writer.uint32(10).string(message.shareInAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.shareInAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        message.shareInAmount = object.shareInAmount ?? "";
        return message;
    }
};
//# sourceMappingURL=gamm.js.map