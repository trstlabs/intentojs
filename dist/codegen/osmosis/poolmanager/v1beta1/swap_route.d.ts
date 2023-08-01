import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface SwapAmountInRoute {
    poolId: bigint;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteSDKType {
    pool_id: bigint;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: bigint;
    tokenInDenom: string;
}
export interface SwapAmountOutRouteSDKType {
    pool_id: bigint;
    token_in_denom: string;
}
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute;
    fromPartial(object: DeepPartial<SwapAmountInRoute>): SwapAmountInRoute;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromPartial(object: DeepPartial<SwapAmountOutRoute>): SwapAmountOutRoute;
};
