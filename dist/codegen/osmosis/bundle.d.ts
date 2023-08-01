import * as _88 from "./gamm/v1beta1/gamm";
import * as _89 from "./poolmanager/v1beta1/swap_route";
export declare namespace osmosis {
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _88.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgJoinPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _88.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _88.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgJoinPoolResponse;
                fromPartial(object: {
                    shareOutAmount?: string;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _88.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _88.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgExitPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _88.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _88.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgExitPoolResponse;
                fromPartial(object: {
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _88.MsgExitPoolResponse;
            };
            MsgSwapExactAmountIn: {
                encode(message: _88.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgSwapExactAmountIn;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: bigint;
                        tokenOutDenom?: string;
                    }[];
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    tokenOutMinAmount?: string;
                }): _88.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _88.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgSwapExactAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _88.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _88.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgSwapExactAmountOut;
                fromPartial(object: {
                    sender?: string;
                    routes?: {
                        poolId?: bigint;
                        tokenInDenom?: string;
                    }[];
                    tokenInMaxAmount?: string;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _88.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _88.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgSwapExactAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _88.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _88.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgJoinSwapExternAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _88.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _88.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _88.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _88.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgJoinSwapShareAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _88.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _88.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _88.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _88.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgExitSwapShareAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _88.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _88.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgExitSwapShareAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _88.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _88.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgExitSwapExternAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _88.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _88.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _88.MsgExitSwapExternAmountOutResponse;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            SwapAmountInRoute: {
                encode(message: _89.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.SwapAmountInRoute;
                fromPartial(object: {
                    poolId?: bigint;
                    tokenOutDenom?: string;
                }): _89.SwapAmountInRoute;
            };
            SwapAmountOutRoute: {
                encode(message: _89.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.SwapAmountOutRoute;
                fromPartial(object: {
                    poolId?: bigint;
                    tokenInDenom?: string;
                }): _89.SwapAmountOutRoute;
            };
        };
    }
}
