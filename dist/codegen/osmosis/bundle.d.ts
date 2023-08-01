import * as _86 from "./gamm/v1beta1/gamm";
import * as _87 from "./poolmanager/v1beta1/swap_route";
export declare namespace osmosis {
    namespace gamm {
        const v1beta1: {
            MsgJoinPool: {
                encode(message: _86.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgJoinPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    shareOutAmount?: string;
                    tokenInMaxs?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _86.MsgJoinPool;
            };
            MsgJoinPoolResponse: {
                encode(message: _86.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgJoinPoolResponse;
                fromPartial(object: {
                    shareOutAmount?: string;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _86.MsgJoinPoolResponse;
            };
            MsgExitPool: {
                encode(message: _86.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgExitPool;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    shareInAmount?: string;
                    tokenOutMins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _86.MsgExitPool;
            };
            MsgExitPoolResponse: {
                encode(message: _86.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgExitPoolResponse;
                fromPartial(object: {
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _86.MsgExitPoolResponse;
            };
            MsgSwapExactAmountIn: {
                encode(message: _86.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgSwapExactAmountIn;
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
                }): _86.MsgSwapExactAmountIn;
            };
            MsgSwapExactAmountInResponse: {
                encode(message: _86.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgSwapExactAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _86.MsgSwapExactAmountInResponse;
            };
            MsgSwapExactAmountOut: {
                encode(message: _86.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgSwapExactAmountOut;
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
                }): _86.MsgSwapExactAmountOut;
            };
            MsgSwapExactAmountOutResponse: {
                encode(message: _86.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgSwapExactAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _86.MsgSwapExactAmountOutResponse;
            };
            MsgJoinSwapExternAmountIn: {
                encode(message: _86.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgJoinSwapExternAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenIn?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareOutMinAmount?: string;
                }): _86.MsgJoinSwapExternAmountIn;
            };
            MsgJoinSwapExternAmountInResponse: {
                encode(message: _86.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: {
                    shareOutAmount?: string;
                }): _86.MsgJoinSwapExternAmountInResponse;
            };
            MsgJoinSwapShareAmountOut: {
                encode(message: _86.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgJoinSwapShareAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenInDenom?: string;
                    shareOutAmount?: string;
                    tokenInMaxAmount?: string;
                }): _86.MsgJoinSwapShareAmountOut;
            };
            MsgJoinSwapShareAmountOutResponse: {
                encode(message: _86.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: {
                    tokenInAmount?: string;
                }): _86.MsgJoinSwapShareAmountOutResponse;
            };
            MsgExitSwapShareAmountIn: {
                encode(message: _86.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgExitSwapShareAmountIn;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenOutDenom?: string;
                    shareInAmount?: string;
                    tokenOutMinAmount?: string;
                }): _86.MsgExitSwapShareAmountIn;
            };
            MsgExitSwapShareAmountInResponse: {
                encode(message: _86.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgExitSwapShareAmountInResponse;
                fromPartial(object: {
                    tokenOutAmount?: string;
                }): _86.MsgExitSwapShareAmountInResponse;
            };
            MsgExitSwapExternAmountOut: {
                encode(message: _86.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgExitSwapExternAmountOut;
                fromPartial(object: {
                    sender?: string;
                    poolId?: bigint;
                    tokenOut?: {
                        denom?: string;
                        amount?: string;
                    };
                    shareInMaxAmount?: string;
                }): _86.MsgExitSwapExternAmountOut;
            };
            MsgExitSwapExternAmountOutResponse: {
                encode(message: _86.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: {
                    shareInAmount?: string;
                }): _86.MsgExitSwapExternAmountOutResponse;
            };
        };
    }
    namespace poolmanager {
        const v1beta1: {
            SwapAmountInRoute: {
                encode(message: _87.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SwapAmountInRoute;
                fromPartial(object: {
                    poolId?: bigint;
                    tokenOutDenom?: string;
                }): _87.SwapAmountInRoute;
            };
            SwapAmountOutRoute: {
                encode(message: _87.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.SwapAmountOutRoute;
                fromPartial(object: {
                    poolId?: bigint;
                    tokenInDenom?: string;
                }): _87.SwapAmountOutRoute;
            };
        };
    }
}
