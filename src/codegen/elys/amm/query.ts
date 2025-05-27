import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType, PoolExtraInfo, PoolExtraInfoAmino, PoolExtraInfoSDKType, OraclePoolSlippageTrack, OraclePoolSlippageTrackAmino, OraclePoolSlippageTrackSDKType } from "./pool";
import { DenomLiquidity, DenomLiquidityAmino, DenomLiquiditySDKType } from "./denom_liquidity";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.amm.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.amm.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/elys.amm.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.amm.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetPoolRequest {
  poolId: bigint;
  days: bigint;
}
export interface QueryGetPoolRequestProtoMsg {
  typeUrl: "/elys.amm.QueryGetPoolRequest";
  value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
  pool_id?: string;
  days?: string;
}
export interface QueryGetPoolRequestAminoMsg {
  type: "/elys.amm.QueryGetPoolRequest";
  value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
  pool_id: bigint;
  days: bigint;
}
export interface QueryGetPoolResponse {
  pool: Pool;
  extraInfo: PoolExtraInfo;
}
export interface QueryGetPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryGetPoolResponse";
  value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
  pool?: PoolAmino;
  extra_info?: PoolExtraInfoAmino;
}
export interface QueryGetPoolResponseAminoMsg {
  type: "/elys.amm.QueryGetPoolResponse";
  value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
  pool: PoolSDKType;
  extra_info: PoolExtraInfoSDKType;
}
export interface QueryAllPoolRequest {
  days: bigint;
  pagination?: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
  typeUrl: "/elys.amm.QueryAllPoolRequest";
  value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
  days?: string;
  pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
  type: "/elys.amm.QueryAllPoolRequest";
  value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
  days: bigint;
  pagination?: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
  pool: Pool[];
  extraInfos: PoolExtraInfo[];
  pagination?: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
  typeUrl: "/elys.amm.QueryAllPoolResponse";
  value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
  pool?: PoolAmino[];
  extra_infos?: PoolExtraInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
  type: "/elys.amm.QueryAllPoolResponse";
  value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
  pool: PoolSDKType[];
  extra_infos: PoolExtraInfoSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetDenomLiquidityRequest {
  denom: string;
}
export interface QueryGetDenomLiquidityRequestProtoMsg {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityRequest";
  value: Uint8Array;
}
export interface QueryGetDenomLiquidityRequestAmino {
  denom?: string;
}
export interface QueryGetDenomLiquidityRequestAminoMsg {
  type: "/elys.amm.QueryGetDenomLiquidityRequest";
  value: QueryGetDenomLiquidityRequestAmino;
}
export interface QueryGetDenomLiquidityRequestSDKType {
  denom: string;
}
export interface QueryGetDenomLiquidityResponse {
  denomLiquidity: DenomLiquidity;
}
export interface QueryGetDenomLiquidityResponseProtoMsg {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityResponse";
  value: Uint8Array;
}
export interface QueryGetDenomLiquidityResponseAmino {
  denom_liquidity?: DenomLiquidityAmino;
}
export interface QueryGetDenomLiquidityResponseAminoMsg {
  type: "/elys.amm.QueryGetDenomLiquidityResponse";
  value: QueryGetDenomLiquidityResponseAmino;
}
export interface QueryGetDenomLiquidityResponseSDKType {
  denom_liquidity: DenomLiquiditySDKType;
}
export interface QueryAllDenomLiquidityRequest {
  pagination?: PageRequest;
}
export interface QueryAllDenomLiquidityRequestProtoMsg {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityRequest";
  value: Uint8Array;
}
export interface QueryAllDenomLiquidityRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryAllDenomLiquidityRequestAminoMsg {
  type: "/elys.amm.QueryAllDenomLiquidityRequest";
  value: QueryAllDenomLiquidityRequestAmino;
}
export interface QueryAllDenomLiquidityRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryAllDenomLiquidityResponse {
  denomLiquidity: DenomLiquidity[];
  pagination?: PageResponse;
}
export interface QueryAllDenomLiquidityResponseProtoMsg {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityResponse";
  value: Uint8Array;
}
export interface QueryAllDenomLiquidityResponseAmino {
  denom_liquidity?: DenomLiquidityAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllDenomLiquidityResponseAminoMsg {
  type: "/elys.amm.QueryAllDenomLiquidityResponse";
  value: QueryAllDenomLiquidityResponseAmino;
}
export interface QueryAllDenomLiquidityResponseSDKType {
  denom_liquidity: DenomLiquiditySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QuerySwapEstimationRequest {
  routes: SwapAmountInRoute[];
  tokenIn: Coin;
  discount: string;
}
export interface QuerySwapEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationRequestAmino {
  routes?: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  discount?: string;
}
export interface QuerySwapEstimationRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationRequest";
  value: QuerySwapEstimationRequestAmino;
}
export interface QuerySwapEstimationRequestSDKType {
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  discount: string;
}
export interface QuerySwapEstimationExactAmountOutRequest {
  routes: SwapAmountOutRoute[];
  tokenOut: Coin;
  discount: string;
}
export interface QuerySwapEstimationExactAmountOutRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationExactAmountOutRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationExactAmountOutRequestAmino {
  routes?: SwapAmountOutRouteAmino[];
  token_out?: CoinAmino;
  discount?: string;
}
export interface QuerySwapEstimationExactAmountOutRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationExactAmountOutRequest";
  value: QuerySwapEstimationExactAmountOutRequestAmino;
}
export interface QuerySwapEstimationExactAmountOutRequestSDKType {
  routes: SwapAmountOutRouteSDKType[];
  token_out: CoinSDKType;
  discount: string;
}
export interface QueryJoinPoolEstimationRequest {
  poolId: bigint;
  amountsIn: Coin[];
}
export interface QueryJoinPoolEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationRequest";
  value: Uint8Array;
}
export interface QueryJoinPoolEstimationRequestAmino {
  pool_id?: string;
  amounts_in?: CoinAmino[];
}
export interface QueryJoinPoolEstimationRequestAminoMsg {
  type: "/elys.amm.QueryJoinPoolEstimationRequest";
  value: QueryJoinPoolEstimationRequestAmino;
}
export interface QueryJoinPoolEstimationRequestSDKType {
  pool_id: bigint;
  amounts_in: CoinSDKType[];
}
export interface QueryJoinPoolEstimationResponse {
  shareAmountOut: Coin;
  amountsIn: Coin[];
  slippage: string;
  weightBalanceRatio: string;
  swapFee: string;
  takerFee: string;
  weightBalanceRewardAmount: Coin;
}
export interface QueryJoinPoolEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationResponse";
  value: Uint8Array;
}
export interface QueryJoinPoolEstimationResponseAmino {
  share_amount_out?: CoinAmino;
  amounts_in?: CoinAmino[];
  slippage?: string;
  weight_balance_ratio?: string;
  swap_fee?: string;
  taker_fee?: string;
  weight_balance_reward_amount?: CoinAmino;
}
export interface QueryJoinPoolEstimationResponseAminoMsg {
  type: "/elys.amm.QueryJoinPoolEstimationResponse";
  value: QueryJoinPoolEstimationResponseAmino;
}
export interface QueryJoinPoolEstimationResponseSDKType {
  share_amount_out: CoinSDKType;
  amounts_in: CoinSDKType[];
  slippage: string;
  weight_balance_ratio: string;
  swap_fee: string;
  taker_fee: string;
  weight_balance_reward_amount: CoinSDKType;
}
export interface QueryExitPoolEstimationRequest {
  poolId: bigint;
  shareAmountIn: string;
  tokenOutDenom: string;
}
export interface QueryExitPoolEstimationRequestProtoMsg {
  typeUrl: "/elys.amm.QueryExitPoolEstimationRequest";
  value: Uint8Array;
}
export interface QueryExitPoolEstimationRequestAmino {
  pool_id?: string;
  share_amount_in?: string;
  token_out_denom?: string;
}
export interface QueryExitPoolEstimationRequestAminoMsg {
  type: "/elys.amm.QueryExitPoolEstimationRequest";
  value: QueryExitPoolEstimationRequestAmino;
}
export interface QueryExitPoolEstimationRequestSDKType {
  pool_id: bigint;
  share_amount_in: string;
  token_out_denom: string;
}
export interface QueryExitPoolEstimationResponse {
  amountsOut: Coin[];
  weightBalanceRatio: string;
  slippage: string;
  swapFee: string;
  takerFee: string;
  weightBalanceRewardAmount: Coin;
}
export interface QueryExitPoolEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QueryExitPoolEstimationResponse";
  value: Uint8Array;
}
export interface QueryExitPoolEstimationResponseAmino {
  amounts_out?: CoinAmino[];
  weight_balance_ratio?: string;
  slippage?: string;
  swap_fee?: string;
  taker_fee?: string;
  weight_balance_reward_amount?: CoinAmino;
}
export interface QueryExitPoolEstimationResponseAminoMsg {
  type: "/elys.amm.QueryExitPoolEstimationResponse";
  value: QueryExitPoolEstimationResponseAmino;
}
export interface QueryExitPoolEstimationResponseSDKType {
  amounts_out: CoinSDKType[];
  weight_balance_ratio: string;
  slippage: string;
  swap_fee: string;
  taker_fee: string;
  weight_balance_reward_amount: CoinSDKType;
}
export interface QuerySwapEstimationResponse {
  spotPrice: string;
  tokenOut: Coin;
  swapFee: string;
  discount: string;
  availableLiquidity: Coin;
  slippage: string;
  weightBalanceRatio: string;
}
export interface QuerySwapEstimationResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationResponseAmino {
  spot_price?: string;
  token_out?: CoinAmino;
  swap_fee?: string;
  discount?: string;
  available_liquidity?: CoinAmino;
  slippage?: string;
  weight_balance_ratio?: string;
}
export interface QuerySwapEstimationResponseAminoMsg {
  type: "/elys.amm.QuerySwapEstimationResponse";
  value: QuerySwapEstimationResponseAmino;
}
export interface QuerySwapEstimationResponseSDKType {
  spot_price: string;
  token_out: CoinSDKType;
  swap_fee: string;
  discount: string;
  available_liquidity: CoinSDKType;
  slippage: string;
  weight_balance_ratio: string;
}
export interface QuerySwapEstimationExactAmountOutResponse {
  spotPrice: string;
  tokenIn: Coin;
  swapFee: string;
  discount: string;
  availableLiquidity: Coin;
  slippage: string;
  weightBalanceRatio: string;
}
export interface QuerySwapEstimationExactAmountOutResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationExactAmountOutResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationExactAmountOutResponseAmino {
  spot_price?: string;
  token_in?: CoinAmino;
  swap_fee?: string;
  discount?: string;
  available_liquidity?: CoinAmino;
  slippage?: string;
  weight_balance_ratio?: string;
}
export interface QuerySwapEstimationExactAmountOutResponseAminoMsg {
  type: "/elys.amm.QuerySwapEstimationExactAmountOutResponse";
  value: QuerySwapEstimationExactAmountOutResponseAmino;
}
export interface QuerySwapEstimationExactAmountOutResponseSDKType {
  spot_price: string;
  token_in: CoinSDKType;
  swap_fee: string;
  discount: string;
  available_liquidity: CoinSDKType;
  slippage: string;
  weight_balance_ratio: string;
}
export interface QuerySlippageTrackRequest {
  poolId: bigint;
}
export interface QuerySlippageTrackRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackRequest";
  value: Uint8Array;
}
export interface QuerySlippageTrackRequestAmino {
  pool_id?: string;
}
export interface QuerySlippageTrackRequestAminoMsg {
  type: "/elys.amm.QuerySlippageTrackRequest";
  value: QuerySlippageTrackRequestAmino;
}
export interface QuerySlippageTrackRequestSDKType {
  pool_id: bigint;
}
export interface QuerySlippageTrackResponse {
  track: OraclePoolSlippageTrack;
}
export interface QuerySlippageTrackResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackResponse";
  value: Uint8Array;
}
export interface QuerySlippageTrackResponseAmino {
  track?: OraclePoolSlippageTrackAmino;
}
export interface QuerySlippageTrackResponseAminoMsg {
  type: "/elys.amm.QuerySlippageTrackResponse";
  value: QuerySlippageTrackResponseAmino;
}
export interface QuerySlippageTrackResponseSDKType {
  track: OraclePoolSlippageTrackSDKType;
}
export interface QuerySlippageTrackAllRequest {}
export interface QuerySlippageTrackAllRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackAllRequest";
  value: Uint8Array;
}
export interface QuerySlippageTrackAllRequestAmino {}
export interface QuerySlippageTrackAllRequestAminoMsg {
  type: "/elys.amm.QuerySlippageTrackAllRequest";
  value: QuerySlippageTrackAllRequestAmino;
}
export interface QuerySlippageTrackAllRequestSDKType {}
export interface QuerySlippageTrackAllResponse {
  tracks: OraclePoolSlippageTrack[];
}
export interface QuerySlippageTrackAllResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySlippageTrackAllResponse";
  value: Uint8Array;
}
export interface QuerySlippageTrackAllResponseAmino {
  tracks?: OraclePoolSlippageTrackAmino[];
}
export interface QuerySlippageTrackAllResponseAminoMsg {
  type: "/elys.amm.QuerySlippageTrackAllResponse";
  value: QuerySlippageTrackAllResponseAmino;
}
export interface QuerySlippageTrackAllResponseSDKType {
  tracks: OraclePoolSlippageTrackSDKType[];
}
export interface QueryBalanceRequest {
  address: string;
  denom: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/elys.amm.QueryBalanceRequest";
  value: Uint8Array;
}
export interface QueryBalanceRequestAmino {
  address?: string;
  denom?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "/elys.amm.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
export interface QueryBalanceRequestSDKType {
  address: string;
  denom: string;
}
export interface QueryBalanceResponse {
  balance: Coin;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/elys.amm.QueryBalanceResponse";
  value: Uint8Array;
}
export interface QueryBalanceResponseAmino {
  balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
  type: "/elys.amm.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
export interface QueryBalanceResponseSDKType {
  balance: CoinSDKType;
}
export interface QueryInRouteByDenomRequest {
  denomIn: string;
  denomOut: string;
}
export interface QueryInRouteByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QueryInRouteByDenomRequest";
  value: Uint8Array;
}
export interface QueryInRouteByDenomRequestAmino {
  denom_in?: string;
  denom_out?: string;
}
export interface QueryInRouteByDenomRequestAminoMsg {
  type: "/elys.amm.QueryInRouteByDenomRequest";
  value: QueryInRouteByDenomRequestAmino;
}
export interface QueryInRouteByDenomRequestSDKType {
  denom_in: string;
  denom_out: string;
}
export interface QueryInRouteByDenomResponse {
  inRoute: SwapAmountInRoute[];
}
export interface QueryInRouteByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QueryInRouteByDenomResponse";
  value: Uint8Array;
}
export interface QueryInRouteByDenomResponseAmino {
  in_route?: SwapAmountInRouteAmino[];
}
export interface QueryInRouteByDenomResponseAminoMsg {
  type: "/elys.amm.QueryInRouteByDenomResponse";
  value: QueryInRouteByDenomResponseAmino;
}
export interface QueryInRouteByDenomResponseSDKType {
  in_route: SwapAmountInRouteSDKType[];
}
export interface QueryOutRouteByDenomRequest {
  denomOut: string;
  denomIn: string;
}
export interface QueryOutRouteByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QueryOutRouteByDenomRequest";
  value: Uint8Array;
}
export interface QueryOutRouteByDenomRequestAmino {
  denom_out?: string;
  denom_in?: string;
}
export interface QueryOutRouteByDenomRequestAminoMsg {
  type: "/elys.amm.QueryOutRouteByDenomRequest";
  value: QueryOutRouteByDenomRequestAmino;
}
export interface QueryOutRouteByDenomRequestSDKType {
  denom_out: string;
  denom_in: string;
}
export interface QueryOutRouteByDenomResponse {
  outRoute: SwapAmountOutRoute[];
}
export interface QueryOutRouteByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QueryOutRouteByDenomResponse";
  value: Uint8Array;
}
export interface QueryOutRouteByDenomResponseAmino {
  out_route?: SwapAmountOutRouteAmino[];
}
export interface QueryOutRouteByDenomResponseAminoMsg {
  type: "/elys.amm.QueryOutRouteByDenomResponse";
  value: QueryOutRouteByDenomResponseAmino;
}
export interface QueryOutRouteByDenomResponseSDKType {
  out_route: SwapAmountOutRouteSDKType[];
}
export interface QuerySwapEstimationByDenomRequest {
  amount: Coin;
  denomIn: string;
  denomOut: string;
  address: string;
}
export interface QuerySwapEstimationByDenomRequestProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest";
  value: Uint8Array;
}
export interface QuerySwapEstimationByDenomRequestAmino {
  amount?: CoinAmino;
  denom_in?: string;
  denom_out?: string;
  address?: string;
}
export interface QuerySwapEstimationByDenomRequestAminoMsg {
  type: "/elys.amm.QuerySwapEstimationByDenomRequest";
  value: QuerySwapEstimationByDenomRequestAmino;
}
export interface QuerySwapEstimationByDenomRequestSDKType {
  amount: CoinSDKType;
  denom_in: string;
  denom_out: string;
  address: string;
}
export interface QuerySwapEstimationByDenomResponse {
  inRoute: SwapAmountInRoute[];
  outRoute: SwapAmountOutRoute[];
  spotPrice: string;
  amount: Coin;
  swapFee: string;
  discount: string;
  availableLiquidity: Coin;
  weightBalanceRatio: string;
  slippage: string;
  priceImpact: string;
  weightBalanceRewardAmount: Coin;
}
export interface QuerySwapEstimationByDenomResponseProtoMsg {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse";
  value: Uint8Array;
}
export interface QuerySwapEstimationByDenomResponseAmino {
  in_route?: SwapAmountInRouteAmino[];
  out_route?: SwapAmountOutRouteAmino[];
  spot_price?: string;
  amount?: CoinAmino;
  swap_fee?: string;
  discount?: string;
  available_liquidity?: CoinAmino;
  weight_balance_ratio?: string;
  slippage?: string;
  price_impact?: string;
  weight_balance_reward_amount?: CoinAmino;
}
export interface QuerySwapEstimationByDenomResponseAminoMsg {
  type: "/elys.amm.QuerySwapEstimationByDenomResponse";
  value: QuerySwapEstimationByDenomResponseAmino;
}
export interface QuerySwapEstimationByDenomResponseSDKType {
  in_route: SwapAmountInRouteSDKType[];
  out_route: SwapAmountOutRouteSDKType[];
  spot_price: string;
  amount: CoinSDKType;
  swap_fee: string;
  discount: string;
  available_liquidity: CoinSDKType;
  weight_balance_ratio: string;
  slippage: string;
  price_impact: string;
  weight_balance_reward_amount: CoinSDKType;
}
export interface QueryAMMPriceRequest {
  tokenIn: Coin;
  discount: string;
}
export interface QueryAMMPriceRequestProtoMsg {
  typeUrl: "/elys.amm.QueryAMMPriceRequest";
  value: Uint8Array;
}
export interface QueryAMMPriceRequestAmino {
  token_in?: CoinAmino;
  discount?: string;
}
export interface QueryAMMPriceRequestAminoMsg {
  type: "/elys.amm.QueryAMMPriceRequest";
  value: QueryAMMPriceRequestAmino;
}
export interface QueryAMMPriceRequestSDKType {
  token_in: CoinSDKType;
  discount: string;
}
export interface QueryWeightAndSlippageFeeRequest {
  poolId: bigint;
  date: string;
}
export interface QueryWeightAndSlippageFeeRequestProtoMsg {
  typeUrl: "/elys.amm.QueryWeightAndSlippageFeeRequest";
  value: Uint8Array;
}
export interface QueryWeightAndSlippageFeeRequestAmino {
  pool_id?: string;
  date?: string;
}
export interface QueryWeightAndSlippageFeeRequestAminoMsg {
  type: "/elys.amm.QueryWeightAndSlippageFeeRequest";
  value: QueryWeightAndSlippageFeeRequestAmino;
}
export interface QueryWeightAndSlippageFeeRequestSDKType {
  pool_id: bigint;
  date: string;
}
export interface QueryWeightAndSlippageFeeResponse {
  value: string;
}
export interface QueryWeightAndSlippageFeeResponseProtoMsg {
  typeUrl: "/elys.amm.QueryWeightAndSlippageFeeResponse";
  value: Uint8Array;
}
export interface QueryWeightAndSlippageFeeResponseAmino {
  value?: string;
}
export interface QueryWeightAndSlippageFeeResponseAminoMsg {
  type: "/elys.amm.QueryWeightAndSlippageFeeResponse";
  value: QueryWeightAndSlippageFeeResponseAmino;
}
export interface QueryWeightAndSlippageFeeResponseSDKType {
  value: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.amm.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/elys.amm.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    poolId: BigInt(0),
    days: BigInt(0)
  };
}
export const QueryGetPoolRequest = {
  typeUrl: "/elys.amm.QueryGetPoolRequest",
  is(o: any): o is QueryGetPoolRequest {
    return o && (o.$typeUrl === QueryGetPoolRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.days === "bigint");
  },
  isSDK(o: any): o is QueryGetPoolRequestSDKType {
    return o && (o.$typeUrl === QueryGetPoolRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.days === "bigint");
  },
  isAmino(o: any): o is QueryGetPoolRequestAmino {
    return o && (o.$typeUrl === QueryGetPoolRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.days === "bigint");
  },
  encode(message: QueryGetPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.days !== BigInt(0)) {
      writer.uint32(16).uint64(message.days);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.days = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      days: isSet(object.days) ? BigInt(object.days.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryGetPoolRequest): JsonSafe<QueryGetPoolRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.days !== undefined && (obj.days = (message.days || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.days = object.days !== undefined && object.days !== null ? BigInt(object.days.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.days !== undefined && object.days !== null) {
      message.days = BigInt(object.days);
    }
    return message;
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.days = message.days !== BigInt(0) ? message.days?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolRequest.typeUrl, QueryGetPoolRequest);
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({}),
    extraInfo: PoolExtraInfo.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  typeUrl: "/elys.amm.QueryGetPoolResponse",
  is(o: any): o is QueryGetPoolResponse {
    return o && (o.$typeUrl === QueryGetPoolResponse.typeUrl || Pool.is(o.pool) && PoolExtraInfo.is(o.extraInfo));
  },
  isSDK(o: any): o is QueryGetPoolResponseSDKType {
    return o && (o.$typeUrl === QueryGetPoolResponse.typeUrl || Pool.isSDK(o.pool) && PoolExtraInfo.isSDK(o.extra_info));
  },
  isAmino(o: any): o is QueryGetPoolResponseAmino {
    return o && (o.$typeUrl === QueryGetPoolResponse.typeUrl || Pool.isAmino(o.pool) && PoolExtraInfo.isAmino(o.extra_info));
  },
  encode(message: QueryGetPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    if (message.extraInfo !== undefined) {
      PoolExtraInfo.encode(message.extraInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 2:
          message.extraInfo = PoolExtraInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      extraInfo: isSet(object.extraInfo) ? PoolExtraInfo.fromJSON(object.extraInfo) : undefined
    };
  },
  toJSON(message: QueryGetPoolResponse): JsonSafe<QueryGetPoolResponse> {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo ? PoolExtraInfo.toJSON(message.extraInfo) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.extraInfo = object.extraInfo !== undefined && object.extraInfo !== null ? PoolExtraInfo.fromPartial(object.extraInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromAmino(object.pool);
    }
    if (object.extra_info !== undefined && object.extra_info !== null) {
      message.extraInfo = PoolExtraInfo.fromAmino(object.extra_info);
    }
    return message;
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    obj.extra_info = message.extraInfo ? PoolExtraInfo.toAmino(message.extraInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetPoolResponse.typeUrl, QueryGetPoolResponse);
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    days: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllPoolRequest = {
  typeUrl: "/elys.amm.QueryAllPoolRequest",
  is(o: any): o is QueryAllPoolRequest {
    return o && (o.$typeUrl === QueryAllPoolRequest.typeUrl || typeof o.days === "bigint");
  },
  isSDK(o: any): o is QueryAllPoolRequestSDKType {
    return o && (o.$typeUrl === QueryAllPoolRequest.typeUrl || typeof o.days === "bigint");
  },
  isAmino(o: any): o is QueryAllPoolRequestAmino {
    return o && (o.$typeUrl === QueryAllPoolRequest.typeUrl || typeof o.days === "bigint");
  },
  encode(message: QueryAllPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.days !== BigInt(0)) {
      writer.uint32(8).uint64(message.days);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.days = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolRequest {
    return {
      days: isSet(object.days) ? BigInt(object.days.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolRequest): JsonSafe<QueryAllPoolRequest> {
    const obj: any = {};
    message.days !== undefined && (obj.days = (message.days || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.days = object.days !== undefined && object.days !== null ? BigInt(object.days.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    if (object.days !== undefined && object.days !== null) {
      message.days = BigInt(object.days);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.days = message.days !== BigInt(0) ? message.days?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolRequest.typeUrl, QueryAllPoolRequest);
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    extraInfos: [],
    pagination: undefined
  };
}
export const QueryAllPoolResponse = {
  typeUrl: "/elys.amm.QueryAllPoolResponse",
  is(o: any): o is QueryAllPoolResponse {
    return o && (o.$typeUrl === QueryAllPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Pool.is(o.pool[0])) && Array.isArray(o.extraInfos) && (!o.extraInfos.length || PoolExtraInfo.is(o.extraInfos[0])));
  },
  isSDK(o: any): o is QueryAllPoolResponseSDKType {
    return o && (o.$typeUrl === QueryAllPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Pool.isSDK(o.pool[0])) && Array.isArray(o.extra_infos) && (!o.extra_infos.length || PoolExtraInfo.isSDK(o.extra_infos[0])));
  },
  isAmino(o: any): o is QueryAllPoolResponseAmino {
    return o && (o.$typeUrl === QueryAllPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || Pool.isAmino(o.pool[0])) && Array.isArray(o.extra_infos) && (!o.extra_infos.length || PoolExtraInfo.isAmino(o.extra_infos[0])));
  },
  encode(message: QueryAllPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.extraInfos) {
      PoolExtraInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.extraInfos.push(PoolExtraInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      extraInfos: Array.isArray(object?.extraInfos) ? object.extraInfos.map((e: any) => PoolExtraInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllPoolResponse): JsonSafe<QueryAllPoolResponse> {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    if (message.extraInfos) {
      obj.extraInfos = message.extraInfos.map(e => e ? PoolExtraInfo.toJSON(e) : undefined);
    } else {
      obj.extraInfos = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.extraInfos = object.extraInfos?.map(e => PoolExtraInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromAmino(e)) || [];
    message.extraInfos = object.extra_infos?.map(e => PoolExtraInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = message.pool;
    }
    if (message.extraInfos) {
      obj.extra_infos = message.extraInfos.map(e => e ? PoolExtraInfo.toAmino(e) : undefined);
    } else {
      obj.extra_infos = message.extraInfos;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllPoolResponse.typeUrl, QueryAllPoolResponse);
function createBaseQueryGetDenomLiquidityRequest(): QueryGetDenomLiquidityRequest {
  return {
    denom: ""
  };
}
export const QueryGetDenomLiquidityRequest = {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityRequest",
  is(o: any): o is QueryGetDenomLiquidityRequest {
    return o && (o.$typeUrl === QueryGetDenomLiquidityRequest.typeUrl || typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryGetDenomLiquidityRequestSDKType {
    return o && (o.$typeUrl === QueryGetDenomLiquidityRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryGetDenomLiquidityRequestAmino {
    return o && (o.$typeUrl === QueryGetDenomLiquidityRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryGetDenomLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetDenomLiquidityRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryGetDenomLiquidityRequest): JsonSafe<QueryGetDenomLiquidityRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryGetDenomLiquidityRequest>): QueryGetDenomLiquidityRequest {
    const message = createBaseQueryGetDenomLiquidityRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetDenomLiquidityRequestAmino): QueryGetDenomLiquidityRequest {
    const message = createBaseQueryGetDenomLiquidityRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryGetDenomLiquidityRequest): QueryGetDenomLiquidityRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetDenomLiquidityRequestAminoMsg): QueryGetDenomLiquidityRequest {
    return QueryGetDenomLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDenomLiquidityRequestProtoMsg): QueryGetDenomLiquidityRequest {
    return QueryGetDenomLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryGetDenomLiquidityRequest): Uint8Array {
    return QueryGetDenomLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDenomLiquidityRequest): QueryGetDenomLiquidityRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetDenomLiquidityRequest",
      value: QueryGetDenomLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetDenomLiquidityRequest.typeUrl, QueryGetDenomLiquidityRequest);
function createBaseQueryGetDenomLiquidityResponse(): QueryGetDenomLiquidityResponse {
  return {
    denomLiquidity: DenomLiquidity.fromPartial({})
  };
}
export const QueryGetDenomLiquidityResponse = {
  typeUrl: "/elys.amm.QueryGetDenomLiquidityResponse",
  is(o: any): o is QueryGetDenomLiquidityResponse {
    return o && (o.$typeUrl === QueryGetDenomLiquidityResponse.typeUrl || DenomLiquidity.is(o.denomLiquidity));
  },
  isSDK(o: any): o is QueryGetDenomLiquidityResponseSDKType {
    return o && (o.$typeUrl === QueryGetDenomLiquidityResponse.typeUrl || DenomLiquidity.isSDK(o.denom_liquidity));
  },
  isAmino(o: any): o is QueryGetDenomLiquidityResponseAmino {
    return o && (o.$typeUrl === QueryGetDenomLiquidityResponse.typeUrl || DenomLiquidity.isAmino(o.denom_liquidity));
  },
  encode(message: QueryGetDenomLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomLiquidity !== undefined) {
      DenomLiquidity.encode(message.denomLiquidity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetDenomLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomLiquidity = DenomLiquidity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetDenomLiquidityResponse {
    return {
      denomLiquidity: isSet(object.denomLiquidity) ? DenomLiquidity.fromJSON(object.denomLiquidity) : undefined
    };
  },
  toJSON(message: QueryGetDenomLiquidityResponse): JsonSafe<QueryGetDenomLiquidityResponse> {
    const obj: any = {};
    message.denomLiquidity !== undefined && (obj.denomLiquidity = message.denomLiquidity ? DenomLiquidity.toJSON(message.denomLiquidity) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGetDenomLiquidityResponse>): QueryGetDenomLiquidityResponse {
    const message = createBaseQueryGetDenomLiquidityResponse();
    message.denomLiquidity = object.denomLiquidity !== undefined && object.denomLiquidity !== null ? DenomLiquidity.fromPartial(object.denomLiquidity) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDenomLiquidityResponseAmino): QueryGetDenomLiquidityResponse {
    const message = createBaseQueryGetDenomLiquidityResponse();
    if (object.denom_liquidity !== undefined && object.denom_liquidity !== null) {
      message.denomLiquidity = DenomLiquidity.fromAmino(object.denom_liquidity);
    }
    return message;
  },
  toAmino(message: QueryGetDenomLiquidityResponse): QueryGetDenomLiquidityResponseAmino {
    const obj: any = {};
    obj.denom_liquidity = message.denomLiquidity ? DenomLiquidity.toAmino(message.denomLiquidity) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDenomLiquidityResponseAminoMsg): QueryGetDenomLiquidityResponse {
    return QueryGetDenomLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDenomLiquidityResponseProtoMsg): QueryGetDenomLiquidityResponse {
    return QueryGetDenomLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryGetDenomLiquidityResponse): Uint8Array {
    return QueryGetDenomLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDenomLiquidityResponse): QueryGetDenomLiquidityResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryGetDenomLiquidityResponse",
      value: QueryGetDenomLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGetDenomLiquidityResponse.typeUrl, QueryGetDenomLiquidityResponse);
function createBaseQueryAllDenomLiquidityRequest(): QueryAllDenomLiquidityRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDenomLiquidityRequest = {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityRequest",
  is(o: any): o is QueryAllDenomLiquidityRequest {
    return o && o.$typeUrl === QueryAllDenomLiquidityRequest.typeUrl;
  },
  isSDK(o: any): o is QueryAllDenomLiquidityRequestSDKType {
    return o && o.$typeUrl === QueryAllDenomLiquidityRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllDenomLiquidityRequestAmino {
    return o && o.$typeUrl === QueryAllDenomLiquidityRequest.typeUrl;
  },
  encode(message: QueryAllDenomLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDenomLiquidityRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllDenomLiquidityRequest): JsonSafe<QueryAllDenomLiquidityRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllDenomLiquidityRequest>): QueryAllDenomLiquidityRequest {
    const message = createBaseQueryAllDenomLiquidityRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomLiquidityRequestAmino): QueryAllDenomLiquidityRequest {
    const message = createBaseQueryAllDenomLiquidityRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomLiquidityRequest): QueryAllDenomLiquidityRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomLiquidityRequestAminoMsg): QueryAllDenomLiquidityRequest {
    return QueryAllDenomLiquidityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomLiquidityRequestProtoMsg): QueryAllDenomLiquidityRequest {
    return QueryAllDenomLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryAllDenomLiquidityRequest): Uint8Array {
    return QueryAllDenomLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomLiquidityRequest): QueryAllDenomLiquidityRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllDenomLiquidityRequest",
      value: QueryAllDenomLiquidityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllDenomLiquidityRequest.typeUrl, QueryAllDenomLiquidityRequest);
function createBaseQueryAllDenomLiquidityResponse(): QueryAllDenomLiquidityResponse {
  return {
    denomLiquidity: [],
    pagination: undefined
  };
}
export const QueryAllDenomLiquidityResponse = {
  typeUrl: "/elys.amm.QueryAllDenomLiquidityResponse",
  is(o: any): o is QueryAllDenomLiquidityResponse {
    return o && (o.$typeUrl === QueryAllDenomLiquidityResponse.typeUrl || Array.isArray(o.denomLiquidity) && (!o.denomLiquidity.length || DenomLiquidity.is(o.denomLiquidity[0])));
  },
  isSDK(o: any): o is QueryAllDenomLiquidityResponseSDKType {
    return o && (o.$typeUrl === QueryAllDenomLiquidityResponse.typeUrl || Array.isArray(o.denom_liquidity) && (!o.denom_liquidity.length || DenomLiquidity.isSDK(o.denom_liquidity[0])));
  },
  isAmino(o: any): o is QueryAllDenomLiquidityResponseAmino {
    return o && (o.$typeUrl === QueryAllDenomLiquidityResponse.typeUrl || Array.isArray(o.denom_liquidity) && (!o.denom_liquidity.length || DenomLiquidity.isAmino(o.denom_liquidity[0])));
  },
  encode(message: QueryAllDenomLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomLiquidity) {
      DenomLiquidity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllDenomLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDenomLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomLiquidity.push(DenomLiquidity.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllDenomLiquidityResponse {
    return {
      denomLiquidity: Array.isArray(object?.denomLiquidity) ? object.denomLiquidity.map((e: any) => DenomLiquidity.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllDenomLiquidityResponse): JsonSafe<QueryAllDenomLiquidityResponse> {
    const obj: any = {};
    if (message.denomLiquidity) {
      obj.denomLiquidity = message.denomLiquidity.map(e => e ? DenomLiquidity.toJSON(e) : undefined);
    } else {
      obj.denomLiquidity = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllDenomLiquidityResponse>): QueryAllDenomLiquidityResponse {
    const message = createBaseQueryAllDenomLiquidityResponse();
    message.denomLiquidity = object.denomLiquidity?.map(e => DenomLiquidity.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDenomLiquidityResponseAmino): QueryAllDenomLiquidityResponse {
    const message = createBaseQueryAllDenomLiquidityResponse();
    message.denomLiquidity = object.denom_liquidity?.map(e => DenomLiquidity.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDenomLiquidityResponse): QueryAllDenomLiquidityResponseAmino {
    const obj: any = {};
    if (message.denomLiquidity) {
      obj.denom_liquidity = message.denomLiquidity.map(e => e ? DenomLiquidity.toAmino(e) : undefined);
    } else {
      obj.denom_liquidity = message.denomLiquidity;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDenomLiquidityResponseAminoMsg): QueryAllDenomLiquidityResponse {
    return QueryAllDenomLiquidityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDenomLiquidityResponseProtoMsg): QueryAllDenomLiquidityResponse {
    return QueryAllDenomLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryAllDenomLiquidityResponse): Uint8Array {
    return QueryAllDenomLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDenomLiquidityResponse): QueryAllDenomLiquidityResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAllDenomLiquidityResponse",
      value: QueryAllDenomLiquidityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllDenomLiquidityResponse.typeUrl, QueryAllDenomLiquidityResponse);
function createBaseQuerySwapEstimationRequest(): QuerySwapEstimationRequest {
  return {
    routes: [],
    tokenIn: Coin.fromPartial({}),
    discount: ""
  };
}
export const QuerySwapEstimationRequest = {
  typeUrl: "/elys.amm.QuerySwapEstimationRequest",
  is(o: any): o is QuerySwapEstimationRequest {
    return o && (o.$typeUrl === QuerySwapEstimationRequest.typeUrl || Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.is(o.routes[0])) && Coin.is(o.tokenIn) && typeof o.discount === "string");
  },
  isSDK(o: any): o is QuerySwapEstimationRequestSDKType {
    return o && (o.$typeUrl === QuerySwapEstimationRequest.typeUrl || Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isSDK(o.routes[0])) && Coin.isSDK(o.token_in) && typeof o.discount === "string");
  },
  isAmino(o: any): o is QuerySwapEstimationRequestAmino {
    return o && (o.$typeUrl === QuerySwapEstimationRequest.typeUrl || Array.isArray(o.routes) && (!o.routes.length || SwapAmountInRoute.isAmino(o.routes[0])) && Coin.isAmino(o.token_in) && typeof o.discount === "string");
  },
  encode(message: QuerySwapEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapEstimationRequest {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      discount: isSet(object.discount) ? String(object.discount) : ""
    };
  },
  toJSON(message: QuerySwapEstimationRequest): JsonSafe<QuerySwapEstimationRequest> {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.discount !== undefined && (obj.discount = message.discount);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapEstimationRequest>): QuerySwapEstimationRequest {
    const message = createBaseQuerySwapEstimationRequest();
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationRequestAmino): QuerySwapEstimationRequest {
    const message = createBaseQuerySwapEstimationRequest();
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationRequest): QuerySwapEstimationRequestAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.discount = message.discount === "" ? undefined : message.discount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationRequestAminoMsg): QuerySwapEstimationRequest {
    return QuerySwapEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationRequestProtoMsg): QuerySwapEstimationRequest {
    return QuerySwapEstimationRequest.decode(message.value);
  },
  toProto(message: QuerySwapEstimationRequest): Uint8Array {
    return QuerySwapEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationRequest): QuerySwapEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationRequest",
      value: QuerySwapEstimationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapEstimationRequest.typeUrl, QuerySwapEstimationRequest);
function createBaseQuerySwapEstimationExactAmountOutRequest(): QuerySwapEstimationExactAmountOutRequest {
  return {
    routes: [],
    tokenOut: Coin.fromPartial({}),
    discount: ""
  };
}
export const QuerySwapEstimationExactAmountOutRequest = {
  typeUrl: "/elys.amm.QuerySwapEstimationExactAmountOutRequest",
  is(o: any): o is QuerySwapEstimationExactAmountOutRequest {
    return o && (o.$typeUrl === QuerySwapEstimationExactAmountOutRequest.typeUrl || Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.is(o.routes[0])) && Coin.is(o.tokenOut) && typeof o.discount === "string");
  },
  isSDK(o: any): o is QuerySwapEstimationExactAmountOutRequestSDKType {
    return o && (o.$typeUrl === QuerySwapEstimationExactAmountOutRequest.typeUrl || Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isSDK(o.routes[0])) && Coin.isSDK(o.token_out) && typeof o.discount === "string");
  },
  isAmino(o: any): o is QuerySwapEstimationExactAmountOutRequestAmino {
    return o && (o.$typeUrl === QuerySwapEstimationExactAmountOutRequest.typeUrl || Array.isArray(o.routes) && (!o.routes.length || SwapAmountOutRoute.isAmino(o.routes[0])) && Coin.isAmino(o.token_out) && typeof o.discount === "string");
  },
  encode(message: QuerySwapEstimationExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapEstimationExactAmountOutRequest {
    return {
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      discount: isSet(object.discount) ? String(object.discount) : ""
    };
  },
  toJSON(message: QuerySwapEstimationExactAmountOutRequest): JsonSafe<QuerySwapEstimationExactAmountOutRequest> {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.discount !== undefined && (obj.discount = message.discount);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapEstimationExactAmountOutRequest>): QuerySwapEstimationExactAmountOutRequest {
    const message = createBaseQuerySwapEstimationExactAmountOutRequest();
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationExactAmountOutRequestAmino): QuerySwapEstimationExactAmountOutRequest {
    const message = createBaseQuerySwapEstimationExactAmountOutRequest();
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationExactAmountOutRequest): QuerySwapEstimationExactAmountOutRequestAmino {
    const obj: any = {};
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.discount = message.discount === "" ? undefined : message.discount;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationExactAmountOutRequestAminoMsg): QuerySwapEstimationExactAmountOutRequest {
    return QuerySwapEstimationExactAmountOutRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationExactAmountOutRequestProtoMsg): QuerySwapEstimationExactAmountOutRequest {
    return QuerySwapEstimationExactAmountOutRequest.decode(message.value);
  },
  toProto(message: QuerySwapEstimationExactAmountOutRequest): Uint8Array {
    return QuerySwapEstimationExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationExactAmountOutRequest): QuerySwapEstimationExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationExactAmountOutRequest",
      value: QuerySwapEstimationExactAmountOutRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapEstimationExactAmountOutRequest.typeUrl, QuerySwapEstimationExactAmountOutRequest);
function createBaseQueryJoinPoolEstimationRequest(): QueryJoinPoolEstimationRequest {
  return {
    poolId: BigInt(0),
    amountsIn: []
  };
}
export const QueryJoinPoolEstimationRequest = {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationRequest",
  is(o: any): o is QueryJoinPoolEstimationRequest {
    return o && (o.$typeUrl === QueryJoinPoolEstimationRequest.typeUrl || typeof o.poolId === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])));
  },
  isSDK(o: any): o is QueryJoinPoolEstimationRequestSDKType {
    return o && (o.$typeUrl === QueryJoinPoolEstimationRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])));
  },
  isAmino(o: any): o is QueryJoinPoolEstimationRequestAmino {
    return o && (o.$typeUrl === QueryJoinPoolEstimationRequest.typeUrl || typeof o.pool_id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])));
  },
  encode(message: QueryJoinPoolEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinPoolEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinPoolEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinPoolEstimationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryJoinPoolEstimationRequest): JsonSafe<QueryJoinPoolEstimationRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryJoinPoolEstimationRequest>): QueryJoinPoolEstimationRequest {
    const message = createBaseQueryJoinPoolEstimationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryJoinPoolEstimationRequestAmino): QueryJoinPoolEstimationRequest {
    const message = createBaseQueryJoinPoolEstimationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryJoinPoolEstimationRequest): QueryJoinPoolEstimationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    return obj;
  },
  fromAminoMsg(object: QueryJoinPoolEstimationRequestAminoMsg): QueryJoinPoolEstimationRequest {
    return QueryJoinPoolEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinPoolEstimationRequestProtoMsg): QueryJoinPoolEstimationRequest {
    return QueryJoinPoolEstimationRequest.decode(message.value);
  },
  toProto(message: QueryJoinPoolEstimationRequest): Uint8Array {
    return QueryJoinPoolEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinPoolEstimationRequest): QueryJoinPoolEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryJoinPoolEstimationRequest",
      value: QueryJoinPoolEstimationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinPoolEstimationRequest.typeUrl, QueryJoinPoolEstimationRequest);
function createBaseQueryJoinPoolEstimationResponse(): QueryJoinPoolEstimationResponse {
  return {
    shareAmountOut: Coin.fromPartial({}),
    amountsIn: [],
    slippage: "",
    weightBalanceRatio: "",
    swapFee: "",
    takerFee: "",
    weightBalanceRewardAmount: Coin.fromPartial({})
  };
}
export const QueryJoinPoolEstimationResponse = {
  typeUrl: "/elys.amm.QueryJoinPoolEstimationResponse",
  is(o: any): o is QueryJoinPoolEstimationResponse {
    return o && (o.$typeUrl === QueryJoinPoolEstimationResponse.typeUrl || Coin.is(o.shareAmountOut) && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && typeof o.slippage === "string" && typeof o.weightBalanceRatio === "string" && typeof o.swapFee === "string" && typeof o.takerFee === "string" && Coin.is(o.weightBalanceRewardAmount));
  },
  isSDK(o: any): o is QueryJoinPoolEstimationResponseSDKType {
    return o && (o.$typeUrl === QueryJoinPoolEstimationResponse.typeUrl || Coin.isSDK(o.share_amount_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && typeof o.slippage === "string" && typeof o.weight_balance_ratio === "string" && typeof o.swap_fee === "string" && typeof o.taker_fee === "string" && Coin.isSDK(o.weight_balance_reward_amount));
  },
  isAmino(o: any): o is QueryJoinPoolEstimationResponseAmino {
    return o && (o.$typeUrl === QueryJoinPoolEstimationResponse.typeUrl || Coin.isAmino(o.share_amount_out) && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && typeof o.slippage === "string" && typeof o.weight_balance_ratio === "string" && typeof o.swap_fee === "string" && typeof o.taker_fee === "string" && Coin.isAmino(o.weight_balance_reward_amount));
  },
  encode(message: QueryJoinPoolEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareAmountOut !== undefined) {
      Coin.encode(message.shareAmountOut, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.takerFee !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.takerFee, 18).atomics);
    }
    if (message.weightBalanceRewardAmount !== undefined) {
      Coin.encode(message.weightBalanceRewardAmount, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryJoinPoolEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryJoinPoolEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareAmountOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightBalanceRewardAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryJoinPoolEstimationResponse {
    return {
      shareAmountOut: isSet(object.shareAmountOut) ? Coin.fromJSON(object.shareAmountOut) : undefined,
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      slippage: isSet(object.slippage) ? String(object.slippage) : "",
      weightBalanceRatio: isSet(object.weightBalanceRatio) ? String(object.weightBalanceRatio) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      takerFee: isSet(object.takerFee) ? String(object.takerFee) : "",
      weightBalanceRewardAmount: isSet(object.weightBalanceRewardAmount) ? Coin.fromJSON(object.weightBalanceRewardAmount) : undefined
    };
  },
  toJSON(message: QueryJoinPoolEstimationResponse): JsonSafe<QueryJoinPoolEstimationResponse> {
    const obj: any = {};
    message.shareAmountOut !== undefined && (obj.shareAmountOut = message.shareAmountOut ? Coin.toJSON(message.shareAmountOut) : undefined);
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    message.slippage !== undefined && (obj.slippage = message.slippage);
    message.weightBalanceRatio !== undefined && (obj.weightBalanceRatio = message.weightBalanceRatio);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    message.weightBalanceRewardAmount !== undefined && (obj.weightBalanceRewardAmount = message.weightBalanceRewardAmount ? Coin.toJSON(message.weightBalanceRewardAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryJoinPoolEstimationResponse>): QueryJoinPoolEstimationResponse {
    const message = createBaseQueryJoinPoolEstimationResponse();
    message.shareAmountOut = object.shareAmountOut !== undefined && object.shareAmountOut !== null ? Coin.fromPartial(object.shareAmountOut) : undefined;
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.slippage = object.slippage ?? "";
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.swapFee = object.swapFee ?? "";
    message.takerFee = object.takerFee ?? "";
    message.weightBalanceRewardAmount = object.weightBalanceRewardAmount !== undefined && object.weightBalanceRewardAmount !== null ? Coin.fromPartial(object.weightBalanceRewardAmount) : undefined;
    return message;
  },
  fromAmino(object: QueryJoinPoolEstimationResponseAmino): QueryJoinPoolEstimationResponse {
    const message = createBaseQueryJoinPoolEstimationResponse();
    if (object.share_amount_out !== undefined && object.share_amount_out !== null) {
      message.shareAmountOut = Coin.fromAmino(object.share_amount_out);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = object.taker_fee;
    }
    if (object.weight_balance_reward_amount !== undefined && object.weight_balance_reward_amount !== null) {
      message.weightBalanceRewardAmount = Coin.fromAmino(object.weight_balance_reward_amount);
    }
    return message;
  },
  toAmino(message: QueryJoinPoolEstimationResponse): QueryJoinPoolEstimationResponseAmino {
    const obj: any = {};
    obj.share_amount_out = message.shareAmountOut ? Coin.toAmino(message.shareAmountOut) : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.taker_fee = message.takerFee === "" ? undefined : message.takerFee;
    obj.weight_balance_reward_amount = message.weightBalanceRewardAmount ? Coin.toAmino(message.weightBalanceRewardAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryJoinPoolEstimationResponseAminoMsg): QueryJoinPoolEstimationResponse {
    return QueryJoinPoolEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryJoinPoolEstimationResponseProtoMsg): QueryJoinPoolEstimationResponse {
    return QueryJoinPoolEstimationResponse.decode(message.value);
  },
  toProto(message: QueryJoinPoolEstimationResponse): Uint8Array {
    return QueryJoinPoolEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryJoinPoolEstimationResponse): QueryJoinPoolEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryJoinPoolEstimationResponse",
      value: QueryJoinPoolEstimationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryJoinPoolEstimationResponse.typeUrl, QueryJoinPoolEstimationResponse);
function createBaseQueryExitPoolEstimationRequest(): QueryExitPoolEstimationRequest {
  return {
    poolId: BigInt(0),
    shareAmountIn: "",
    tokenOutDenom: ""
  };
}
export const QueryExitPoolEstimationRequest = {
  typeUrl: "/elys.amm.QueryExitPoolEstimationRequest",
  is(o: any): o is QueryExitPoolEstimationRequest {
    return o && (o.$typeUrl === QueryExitPoolEstimationRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.shareAmountIn === "string" && typeof o.tokenOutDenom === "string");
  },
  isSDK(o: any): o is QueryExitPoolEstimationRequestSDKType {
    return o && (o.$typeUrl === QueryExitPoolEstimationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.share_amount_in === "string" && typeof o.token_out_denom === "string");
  },
  isAmino(o: any): o is QueryExitPoolEstimationRequestAmino {
    return o && (o.$typeUrl === QueryExitPoolEstimationRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.share_amount_in === "string" && typeof o.token_out_denom === "string");
  },
  encode(message: QueryExitPoolEstimationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareAmountIn !== "") {
      writer.uint32(18).string(message.shareAmountIn);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(26).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitPoolEstimationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitPoolEstimationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.shareAmountIn = reader.string();
          break;
        case 3:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExitPoolEstimationRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      shareAmountIn: isSet(object.shareAmountIn) ? String(object.shareAmountIn) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  toJSON(message: QueryExitPoolEstimationRequest): JsonSafe<QueryExitPoolEstimationRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.shareAmountIn !== undefined && (obj.shareAmountIn = message.shareAmountIn);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial(object: Partial<QueryExitPoolEstimationRequest>): QueryExitPoolEstimationRequest {
    const message = createBaseQueryExitPoolEstimationRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.shareAmountIn = object.shareAmountIn ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: QueryExitPoolEstimationRequestAmino): QueryExitPoolEstimationRequest {
    const message = createBaseQueryExitPoolEstimationRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.share_amount_in !== undefined && object.share_amount_in !== null) {
      message.shareAmountIn = object.share_amount_in;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: QueryExitPoolEstimationRequest): QueryExitPoolEstimationRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.share_amount_in = message.shareAmountIn === "" ? undefined : message.shareAmountIn;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: QueryExitPoolEstimationRequestAminoMsg): QueryExitPoolEstimationRequest {
    return QueryExitPoolEstimationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitPoolEstimationRequestProtoMsg): QueryExitPoolEstimationRequest {
    return QueryExitPoolEstimationRequest.decode(message.value);
  },
  toProto(message: QueryExitPoolEstimationRequest): Uint8Array {
    return QueryExitPoolEstimationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExitPoolEstimationRequest): QueryExitPoolEstimationRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryExitPoolEstimationRequest",
      value: QueryExitPoolEstimationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExitPoolEstimationRequest.typeUrl, QueryExitPoolEstimationRequest);
function createBaseQueryExitPoolEstimationResponse(): QueryExitPoolEstimationResponse {
  return {
    amountsOut: [],
    weightBalanceRatio: "",
    slippage: "",
    swapFee: "",
    takerFee: "",
    weightBalanceRewardAmount: Coin.fromPartial({})
  };
}
export const QueryExitPoolEstimationResponse = {
  typeUrl: "/elys.amm.QueryExitPoolEstimationResponse",
  is(o: any): o is QueryExitPoolEstimationResponse {
    return o && (o.$typeUrl === QueryExitPoolEstimationResponse.typeUrl || Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && typeof o.weightBalanceRatio === "string" && typeof o.slippage === "string" && typeof o.swapFee === "string" && typeof o.takerFee === "string" && Coin.is(o.weightBalanceRewardAmount));
  },
  isSDK(o: any): o is QueryExitPoolEstimationResponseSDKType {
    return o && (o.$typeUrl === QueryExitPoolEstimationResponse.typeUrl || Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && typeof o.weight_balance_ratio === "string" && typeof o.slippage === "string" && typeof o.swap_fee === "string" && typeof o.taker_fee === "string" && Coin.isSDK(o.weight_balance_reward_amount));
  },
  isAmino(o: any): o is QueryExitPoolEstimationResponseAmino {
    return o && (o.$typeUrl === QueryExitPoolEstimationResponse.typeUrl || Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && typeof o.weight_balance_ratio === "string" && typeof o.slippage === "string" && typeof o.swap_fee === "string" && typeof o.taker_fee === "string" && Coin.isAmino(o.weight_balance_reward_amount));
  },
  encode(message: QueryExitPoolEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.slippage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.swapFee !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.takerFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.takerFee, 18).atomics);
    }
    if (message.weightBalanceRewardAmount !== undefined) {
      Coin.encode(message.weightBalanceRewardAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExitPoolEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExitPoolEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountsOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.takerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.weightBalanceRewardAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExitPoolEstimationResponse {
    return {
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      weightBalanceRatio: isSet(object.weightBalanceRatio) ? String(object.weightBalanceRatio) : "",
      slippage: isSet(object.slippage) ? String(object.slippage) : "",
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      takerFee: isSet(object.takerFee) ? String(object.takerFee) : "",
      weightBalanceRewardAmount: isSet(object.weightBalanceRewardAmount) ? Coin.fromJSON(object.weightBalanceRewardAmount) : undefined
    };
  },
  toJSON(message: QueryExitPoolEstimationResponse): JsonSafe<QueryExitPoolEstimationResponse> {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.weightBalanceRatio !== undefined && (obj.weightBalanceRatio = message.weightBalanceRatio);
    message.slippage !== undefined && (obj.slippage = message.slippage);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.takerFee !== undefined && (obj.takerFee = message.takerFee);
    message.weightBalanceRewardAmount !== undefined && (obj.weightBalanceRewardAmount = message.weightBalanceRewardAmount ? Coin.toJSON(message.weightBalanceRewardAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryExitPoolEstimationResponse>): QueryExitPoolEstimationResponse {
    const message = createBaseQueryExitPoolEstimationResponse();
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.slippage = object.slippage ?? "";
    message.swapFee = object.swapFee ?? "";
    message.takerFee = object.takerFee ?? "";
    message.weightBalanceRewardAmount = object.weightBalanceRewardAmount !== undefined && object.weightBalanceRewardAmount !== null ? Coin.fromPartial(object.weightBalanceRewardAmount) : undefined;
    return message;
  },
  fromAmino(object: QueryExitPoolEstimationResponseAmino): QueryExitPoolEstimationResponse {
    const message = createBaseQueryExitPoolEstimationResponse();
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.taker_fee !== undefined && object.taker_fee !== null) {
      message.takerFee = object.taker_fee;
    }
    if (object.weight_balance_reward_amount !== undefined && object.weight_balance_reward_amount !== null) {
      message.weightBalanceRewardAmount = Coin.fromAmino(object.weight_balance_reward_amount);
    }
    return message;
  },
  toAmino(message: QueryExitPoolEstimationResponse): QueryExitPoolEstimationResponseAmino {
    const obj: any = {};
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.taker_fee = message.takerFee === "" ? undefined : message.takerFee;
    obj.weight_balance_reward_amount = message.weightBalanceRewardAmount ? Coin.toAmino(message.weightBalanceRewardAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExitPoolEstimationResponseAminoMsg): QueryExitPoolEstimationResponse {
    return QueryExitPoolEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExitPoolEstimationResponseProtoMsg): QueryExitPoolEstimationResponse {
    return QueryExitPoolEstimationResponse.decode(message.value);
  },
  toProto(message: QueryExitPoolEstimationResponse): Uint8Array {
    return QueryExitPoolEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExitPoolEstimationResponse): QueryExitPoolEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryExitPoolEstimationResponse",
      value: QueryExitPoolEstimationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryExitPoolEstimationResponse.typeUrl, QueryExitPoolEstimationResponse);
function createBaseQuerySwapEstimationResponse(): QuerySwapEstimationResponse {
  return {
    spotPrice: "",
    tokenOut: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    availableLiquidity: Coin.fromPartial({}),
    slippage: "",
    weightBalanceRatio: ""
  };
}
export const QuerySwapEstimationResponse = {
  typeUrl: "/elys.amm.QuerySwapEstimationResponse",
  is(o: any): o is QuerySwapEstimationResponse {
    return o && (o.$typeUrl === QuerySwapEstimationResponse.typeUrl || typeof o.spotPrice === "string" && Coin.is(o.tokenOut) && typeof o.swapFee === "string" && typeof o.discount === "string" && Coin.is(o.availableLiquidity) && typeof o.slippage === "string" && typeof o.weightBalanceRatio === "string");
  },
  isSDK(o: any): o is QuerySwapEstimationResponseSDKType {
    return o && (o.$typeUrl === QuerySwapEstimationResponse.typeUrl || typeof o.spot_price === "string" && Coin.isSDK(o.token_out) && typeof o.swap_fee === "string" && typeof o.discount === "string" && Coin.isSDK(o.available_liquidity) && typeof o.slippage === "string" && typeof o.weight_balance_ratio === "string");
  },
  isAmino(o: any): o is QuerySwapEstimationResponseAmino {
    return o && (o.$typeUrl === QuerySwapEstimationResponse.typeUrl || typeof o.spot_price === "string" && Coin.isAmino(o.token_out) && typeof o.swap_fee === "string" && typeof o.discount === "string" && Coin.isAmino(o.available_liquidity) && typeof o.slippage === "string" && typeof o.weight_balance_ratio === "string");
  },
  encode(message: QuerySwapEstimationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(42).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tokenOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapEstimationResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "",
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      discount: isSet(object.discount) ? String(object.discount) : "",
      availableLiquidity: isSet(object.availableLiquidity) ? Coin.fromJSON(object.availableLiquidity) : undefined,
      slippage: isSet(object.slippage) ? String(object.slippage) : "",
      weightBalanceRatio: isSet(object.weightBalanceRatio) ? String(object.weightBalanceRatio) : ""
    };
  },
  toJSON(message: QuerySwapEstimationResponse): JsonSafe<QuerySwapEstimationResponse> {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut ? Coin.toJSON(message.tokenOut) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.discount !== undefined && (obj.discount = message.discount);
    message.availableLiquidity !== undefined && (obj.availableLiquidity = message.availableLiquidity ? Coin.toJSON(message.availableLiquidity) : undefined);
    message.slippage !== undefined && (obj.slippage = message.slippage);
    message.weightBalanceRatio !== undefined && (obj.weightBalanceRatio = message.weightBalanceRatio);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapEstimationResponse>): QuerySwapEstimationResponse {
    const message = createBaseQuerySwapEstimationResponse();
    message.spotPrice = object.spotPrice ?? "";
    message.tokenOut = object.tokenOut !== undefined && object.tokenOut !== null ? Coin.fromPartial(object.tokenOut) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.slippage = object.slippage ?? "";
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationResponseAmino): QuerySwapEstimationResponse {
    const message = createBaseQuerySwapEstimationResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = Coin.fromAmino(object.token_out);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.available_liquidity !== undefined && object.available_liquidity !== null) {
      message.availableLiquidity = Coin.fromAmino(object.available_liquidity);
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationResponse): QuerySwapEstimationResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.token_out = message.tokenOut ? Coin.toAmino(message.tokenOut) : undefined;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationResponseAminoMsg): QuerySwapEstimationResponse {
    return QuerySwapEstimationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationResponseProtoMsg): QuerySwapEstimationResponse {
    return QuerySwapEstimationResponse.decode(message.value);
  },
  toProto(message: QuerySwapEstimationResponse): Uint8Array {
    return QuerySwapEstimationResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationResponse): QuerySwapEstimationResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationResponse",
      value: QuerySwapEstimationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapEstimationResponse.typeUrl, QuerySwapEstimationResponse);
function createBaseQuerySwapEstimationExactAmountOutResponse(): QuerySwapEstimationExactAmountOutResponse {
  return {
    spotPrice: "",
    tokenIn: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    availableLiquidity: Coin.fromPartial({}),
    slippage: "",
    weightBalanceRatio: ""
  };
}
export const QuerySwapEstimationExactAmountOutResponse = {
  typeUrl: "/elys.amm.QuerySwapEstimationExactAmountOutResponse",
  is(o: any): o is QuerySwapEstimationExactAmountOutResponse {
    return o && (o.$typeUrl === QuerySwapEstimationExactAmountOutResponse.typeUrl || typeof o.spotPrice === "string" && Coin.is(o.tokenIn) && typeof o.swapFee === "string" && typeof o.discount === "string" && Coin.is(o.availableLiquidity) && typeof o.slippage === "string" && typeof o.weightBalanceRatio === "string");
  },
  isSDK(o: any): o is QuerySwapEstimationExactAmountOutResponseSDKType {
    return o && (o.$typeUrl === QuerySwapEstimationExactAmountOutResponse.typeUrl || typeof o.spot_price === "string" && Coin.isSDK(o.token_in) && typeof o.swap_fee === "string" && typeof o.discount === "string" && Coin.isSDK(o.available_liquidity) && typeof o.slippage === "string" && typeof o.weight_balance_ratio === "string");
  },
  isAmino(o: any): o is QuerySwapEstimationExactAmountOutResponseAmino {
    return o && (o.$typeUrl === QuerySwapEstimationExactAmountOutResponse.typeUrl || typeof o.spot_price === "string" && Coin.isAmino(o.token_in) && typeof o.swap_fee === "string" && typeof o.discount === "string" && Coin.isAmino(o.available_liquidity) && typeof o.slippage === "string" && typeof o.weight_balance_ratio === "string");
  },
  encode(message: QuerySwapEstimationExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(42).fork()).ldelim();
    }
    if (message.slippage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapEstimationExactAmountOutResponse {
    return {
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "",
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      discount: isSet(object.discount) ? String(object.discount) : "",
      availableLiquidity: isSet(object.availableLiquidity) ? Coin.fromJSON(object.availableLiquidity) : undefined,
      slippage: isSet(object.slippage) ? String(object.slippage) : "",
      weightBalanceRatio: isSet(object.weightBalanceRatio) ? String(object.weightBalanceRatio) : ""
    };
  },
  toJSON(message: QuerySwapEstimationExactAmountOutResponse): JsonSafe<QuerySwapEstimationExactAmountOutResponse> {
    const obj: any = {};
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.discount !== undefined && (obj.discount = message.discount);
    message.availableLiquidity !== undefined && (obj.availableLiquidity = message.availableLiquidity ? Coin.toJSON(message.availableLiquidity) : undefined);
    message.slippage !== undefined && (obj.slippage = message.slippage);
    message.weightBalanceRatio !== undefined && (obj.weightBalanceRatio = message.weightBalanceRatio);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapEstimationExactAmountOutResponse>): QuerySwapEstimationExactAmountOutResponse {
    const message = createBaseQuerySwapEstimationExactAmountOutResponse();
    message.spotPrice = object.spotPrice ?? "";
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.slippage = object.slippage ?? "";
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationExactAmountOutResponseAmino): QuerySwapEstimationExactAmountOutResponse {
    const message = createBaseQuerySwapEstimationExactAmountOutResponse();
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.available_liquidity !== undefined && object.available_liquidity !== null) {
      message.availableLiquidity = Coin.fromAmino(object.available_liquidity);
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationExactAmountOutResponse): QuerySwapEstimationExactAmountOutResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationExactAmountOutResponseAminoMsg): QuerySwapEstimationExactAmountOutResponse {
    return QuerySwapEstimationExactAmountOutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationExactAmountOutResponseProtoMsg): QuerySwapEstimationExactAmountOutResponse {
    return QuerySwapEstimationExactAmountOutResponse.decode(message.value);
  },
  toProto(message: QuerySwapEstimationExactAmountOutResponse): Uint8Array {
    return QuerySwapEstimationExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationExactAmountOutResponse): QuerySwapEstimationExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationExactAmountOutResponse",
      value: QuerySwapEstimationExactAmountOutResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapEstimationExactAmountOutResponse.typeUrl, QuerySwapEstimationExactAmountOutResponse);
function createBaseQuerySlippageTrackRequest(): QuerySlippageTrackRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QuerySlippageTrackRequest = {
  typeUrl: "/elys.amm.QuerySlippageTrackRequest",
  is(o: any): o is QuerySlippageTrackRequest {
    return o && (o.$typeUrl === QuerySlippageTrackRequest.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is QuerySlippageTrackRequestSDKType {
    return o && (o.$typeUrl === QuerySlippageTrackRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is QuerySlippageTrackRequestAmino {
    return o && (o.$typeUrl === QuerySlippageTrackRequest.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: QuerySlippageTrackRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlippageTrackRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: QuerySlippageTrackRequest): JsonSafe<QuerySlippageTrackRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QuerySlippageTrackRequest>): QuerySlippageTrackRequest {
    const message = createBaseQuerySlippageTrackRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySlippageTrackRequestAmino): QuerySlippageTrackRequest {
    const message = createBaseQuerySlippageTrackRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: QuerySlippageTrackRequest): QuerySlippageTrackRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackRequestAminoMsg): QuerySlippageTrackRequest {
    return QuerySlippageTrackRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackRequestProtoMsg): QuerySlippageTrackRequest {
    return QuerySlippageTrackRequest.decode(message.value);
  },
  toProto(message: QuerySlippageTrackRequest): Uint8Array {
    return QuerySlippageTrackRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackRequest): QuerySlippageTrackRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackRequest",
      value: QuerySlippageTrackRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlippageTrackRequest.typeUrl, QuerySlippageTrackRequest);
function createBaseQuerySlippageTrackResponse(): QuerySlippageTrackResponse {
  return {
    track: OraclePoolSlippageTrack.fromPartial({})
  };
}
export const QuerySlippageTrackResponse = {
  typeUrl: "/elys.amm.QuerySlippageTrackResponse",
  is(o: any): o is QuerySlippageTrackResponse {
    return o && (o.$typeUrl === QuerySlippageTrackResponse.typeUrl || OraclePoolSlippageTrack.is(o.track));
  },
  isSDK(o: any): o is QuerySlippageTrackResponseSDKType {
    return o && (o.$typeUrl === QuerySlippageTrackResponse.typeUrl || OraclePoolSlippageTrack.isSDK(o.track));
  },
  isAmino(o: any): o is QuerySlippageTrackResponseAmino {
    return o && (o.$typeUrl === QuerySlippageTrackResponse.typeUrl || OraclePoolSlippageTrack.isAmino(o.track));
  },
  encode(message: QuerySlippageTrackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.track !== undefined) {
      OraclePoolSlippageTrack.encode(message.track, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = OraclePoolSlippageTrack.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlippageTrackResponse {
    return {
      track: isSet(object.track) ? OraclePoolSlippageTrack.fromJSON(object.track) : undefined
    };
  },
  toJSON(message: QuerySlippageTrackResponse): JsonSafe<QuerySlippageTrackResponse> {
    const obj: any = {};
    message.track !== undefined && (obj.track = message.track ? OraclePoolSlippageTrack.toJSON(message.track) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySlippageTrackResponse>): QuerySlippageTrackResponse {
    const message = createBaseQuerySlippageTrackResponse();
    message.track = object.track !== undefined && object.track !== null ? OraclePoolSlippageTrack.fromPartial(object.track) : undefined;
    return message;
  },
  fromAmino(object: QuerySlippageTrackResponseAmino): QuerySlippageTrackResponse {
    const message = createBaseQuerySlippageTrackResponse();
    if (object.track !== undefined && object.track !== null) {
      message.track = OraclePoolSlippageTrack.fromAmino(object.track);
    }
    return message;
  },
  toAmino(message: QuerySlippageTrackResponse): QuerySlippageTrackResponseAmino {
    const obj: any = {};
    obj.track = message.track ? OraclePoolSlippageTrack.toAmino(message.track) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackResponseAminoMsg): QuerySlippageTrackResponse {
    return QuerySlippageTrackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackResponseProtoMsg): QuerySlippageTrackResponse {
    return QuerySlippageTrackResponse.decode(message.value);
  },
  toProto(message: QuerySlippageTrackResponse): Uint8Array {
    return QuerySlippageTrackResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackResponse): QuerySlippageTrackResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackResponse",
      value: QuerySlippageTrackResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlippageTrackResponse.typeUrl, QuerySlippageTrackResponse);
function createBaseQuerySlippageTrackAllRequest(): QuerySlippageTrackAllRequest {
  return {};
}
export const QuerySlippageTrackAllRequest = {
  typeUrl: "/elys.amm.QuerySlippageTrackAllRequest",
  is(o: any): o is QuerySlippageTrackAllRequest {
    return o && o.$typeUrl === QuerySlippageTrackAllRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySlippageTrackAllRequestSDKType {
    return o && o.$typeUrl === QuerySlippageTrackAllRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySlippageTrackAllRequestAmino {
    return o && o.$typeUrl === QuerySlippageTrackAllRequest.typeUrl;
  },
  encode(_: QuerySlippageTrackAllRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackAllRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackAllRequest();
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
  fromJSON(_: any): QuerySlippageTrackAllRequest {
    return {};
  },
  toJSON(_: QuerySlippageTrackAllRequest): JsonSafe<QuerySlippageTrackAllRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QuerySlippageTrackAllRequest>): QuerySlippageTrackAllRequest {
    const message = createBaseQuerySlippageTrackAllRequest();
    return message;
  },
  fromAmino(_: QuerySlippageTrackAllRequestAmino): QuerySlippageTrackAllRequest {
    const message = createBaseQuerySlippageTrackAllRequest();
    return message;
  },
  toAmino(_: QuerySlippageTrackAllRequest): QuerySlippageTrackAllRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackAllRequestAminoMsg): QuerySlippageTrackAllRequest {
    return QuerySlippageTrackAllRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackAllRequestProtoMsg): QuerySlippageTrackAllRequest {
    return QuerySlippageTrackAllRequest.decode(message.value);
  },
  toProto(message: QuerySlippageTrackAllRequest): Uint8Array {
    return QuerySlippageTrackAllRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackAllRequest): QuerySlippageTrackAllRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackAllRequest",
      value: QuerySlippageTrackAllRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlippageTrackAllRequest.typeUrl, QuerySlippageTrackAllRequest);
function createBaseQuerySlippageTrackAllResponse(): QuerySlippageTrackAllResponse {
  return {
    tracks: []
  };
}
export const QuerySlippageTrackAllResponse = {
  typeUrl: "/elys.amm.QuerySlippageTrackAllResponse",
  is(o: any): o is QuerySlippageTrackAllResponse {
    return o && (o.$typeUrl === QuerySlippageTrackAllResponse.typeUrl || Array.isArray(o.tracks) && (!o.tracks.length || OraclePoolSlippageTrack.is(o.tracks[0])));
  },
  isSDK(o: any): o is QuerySlippageTrackAllResponseSDKType {
    return o && (o.$typeUrl === QuerySlippageTrackAllResponse.typeUrl || Array.isArray(o.tracks) && (!o.tracks.length || OraclePoolSlippageTrack.isSDK(o.tracks[0])));
  },
  isAmino(o: any): o is QuerySlippageTrackAllResponseAmino {
    return o && (o.$typeUrl === QuerySlippageTrackAllResponse.typeUrl || Array.isArray(o.tracks) && (!o.tracks.length || OraclePoolSlippageTrack.isAmino(o.tracks[0])));
  },
  encode(message: QuerySlippageTrackAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tracks) {
      OraclePoolSlippageTrack.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlippageTrackAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlippageTrackAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracks.push(OraclePoolSlippageTrack.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySlippageTrackAllResponse {
    return {
      tracks: Array.isArray(object?.tracks) ? object.tracks.map((e: any) => OraclePoolSlippageTrack.fromJSON(e)) : []
    };
  },
  toJSON(message: QuerySlippageTrackAllResponse): JsonSafe<QuerySlippageTrackAllResponse> {
    const obj: any = {};
    if (message.tracks) {
      obj.tracks = message.tracks.map(e => e ? OraclePoolSlippageTrack.toJSON(e) : undefined);
    } else {
      obj.tracks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QuerySlippageTrackAllResponse>): QuerySlippageTrackAllResponse {
    const message = createBaseQuerySlippageTrackAllResponse();
    message.tracks = object.tracks?.map(e => OraclePoolSlippageTrack.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySlippageTrackAllResponseAmino): QuerySlippageTrackAllResponse {
    const message = createBaseQuerySlippageTrackAllResponse();
    message.tracks = object.tracks?.map(e => OraclePoolSlippageTrack.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySlippageTrackAllResponse): QuerySlippageTrackAllResponseAmino {
    const obj: any = {};
    if (message.tracks) {
      obj.tracks = message.tracks.map(e => e ? OraclePoolSlippageTrack.toAmino(e) : undefined);
    } else {
      obj.tracks = message.tracks;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySlippageTrackAllResponseAminoMsg): QuerySlippageTrackAllResponse {
    return QuerySlippageTrackAllResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlippageTrackAllResponseProtoMsg): QuerySlippageTrackAllResponse {
    return QuerySlippageTrackAllResponse.decode(message.value);
  },
  toProto(message: QuerySlippageTrackAllResponse): Uint8Array {
    return QuerySlippageTrackAllResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlippageTrackAllResponse): QuerySlippageTrackAllResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySlippageTrackAllResponse",
      value: QuerySlippageTrackAllResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySlippageTrackAllResponse.typeUrl, QuerySlippageTrackAllResponse);
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    address: "",
    denom: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/elys.amm.QueryBalanceRequest",
  is(o: any): o is QueryBalanceRequest {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is QueryBalanceRequestSDKType {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryBalanceRequestAmino {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.address === "string" && typeof o.denom === "string");
  },
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryBalanceRequest): JsonSafe<QueryBalanceRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBalanceRequest.typeUrl, QueryBalanceRequest);
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: Coin.fromPartial({})
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/elys.amm.QueryBalanceResponse",
  is(o: any): o is QueryBalanceResponse {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || Coin.is(o.balance));
  },
  isSDK(o: any): o is QueryBalanceResponseSDKType {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || Coin.isSDK(o.balance));
  },
  isAmino(o: any): o is QueryBalanceResponseAmino {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || Coin.isAmino(o.balance));
  },
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: QueryBalanceResponse): JsonSafe<QueryBalanceResponse> {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromAmino(object.balance);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBalanceResponse.typeUrl, QueryBalanceResponse);
function createBaseQueryInRouteByDenomRequest(): QueryInRouteByDenomRequest {
  return {
    denomIn: "",
    denomOut: ""
  };
}
export const QueryInRouteByDenomRequest = {
  typeUrl: "/elys.amm.QueryInRouteByDenomRequest",
  is(o: any): o is QueryInRouteByDenomRequest {
    return o && (o.$typeUrl === QueryInRouteByDenomRequest.typeUrl || typeof o.denomIn === "string" && typeof o.denomOut === "string");
  },
  isSDK(o: any): o is QueryInRouteByDenomRequestSDKType {
    return o && (o.$typeUrl === QueryInRouteByDenomRequest.typeUrl || typeof o.denom_in === "string" && typeof o.denom_out === "string");
  },
  isAmino(o: any): o is QueryInRouteByDenomRequestAmino {
    return o && (o.$typeUrl === QueryInRouteByDenomRequest.typeUrl || typeof o.denom_in === "string" && typeof o.denom_out === "string");
  },
  encode(message: QueryInRouteByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomIn !== "") {
      writer.uint32(10).string(message.denomIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(18).string(message.denomOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInRouteByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInRouteByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomIn = reader.string();
          break;
        case 2:
          message.denomOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInRouteByDenomRequest {
    return {
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : ""
    };
  },
  toJSON(message: QueryInRouteByDenomRequest): JsonSafe<QueryInRouteByDenomRequest> {
    const obj: any = {};
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    return obj;
  },
  fromPartial(object: Partial<QueryInRouteByDenomRequest>): QueryInRouteByDenomRequest {
    const message = createBaseQueryInRouteByDenomRequest();
    message.denomIn = object.denomIn ?? "";
    message.denomOut = object.denomOut ?? "";
    return message;
  },
  fromAmino(object: QueryInRouteByDenomRequestAmino): QueryInRouteByDenomRequest {
    const message = createBaseQueryInRouteByDenomRequest();
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    return message;
  },
  toAmino(message: QueryInRouteByDenomRequest): QueryInRouteByDenomRequestAmino {
    const obj: any = {};
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    return obj;
  },
  fromAminoMsg(object: QueryInRouteByDenomRequestAminoMsg): QueryInRouteByDenomRequest {
    return QueryInRouteByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInRouteByDenomRequestProtoMsg): QueryInRouteByDenomRequest {
    return QueryInRouteByDenomRequest.decode(message.value);
  },
  toProto(message: QueryInRouteByDenomRequest): Uint8Array {
    return QueryInRouteByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInRouteByDenomRequest): QueryInRouteByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryInRouteByDenomRequest",
      value: QueryInRouteByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInRouteByDenomRequest.typeUrl, QueryInRouteByDenomRequest);
function createBaseQueryInRouteByDenomResponse(): QueryInRouteByDenomResponse {
  return {
    inRoute: []
  };
}
export const QueryInRouteByDenomResponse = {
  typeUrl: "/elys.amm.QueryInRouteByDenomResponse",
  is(o: any): o is QueryInRouteByDenomResponse {
    return o && (o.$typeUrl === QueryInRouteByDenomResponse.typeUrl || Array.isArray(o.inRoute) && (!o.inRoute.length || SwapAmountInRoute.is(o.inRoute[0])));
  },
  isSDK(o: any): o is QueryInRouteByDenomResponseSDKType {
    return o && (o.$typeUrl === QueryInRouteByDenomResponse.typeUrl || Array.isArray(o.in_route) && (!o.in_route.length || SwapAmountInRoute.isSDK(o.in_route[0])));
  },
  isAmino(o: any): o is QueryInRouteByDenomResponseAmino {
    return o && (o.$typeUrl === QueryInRouteByDenomResponse.typeUrl || Array.isArray(o.in_route) && (!o.in_route.length || SwapAmountInRoute.isAmino(o.in_route[0])));
  },
  encode(message: QueryInRouteByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inRoute) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInRouteByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInRouteByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inRoute.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInRouteByDenomResponse {
    return {
      inRoute: Array.isArray(object?.inRoute) ? object.inRoute.map((e: any) => SwapAmountInRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryInRouteByDenomResponse): JsonSafe<QueryInRouteByDenomResponse> {
    const obj: any = {};
    if (message.inRoute) {
      obj.inRoute = message.inRoute.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.inRoute = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryInRouteByDenomResponse>): QueryInRouteByDenomResponse {
    const message = createBaseQueryInRouteByDenomResponse();
    message.inRoute = object.inRoute?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryInRouteByDenomResponseAmino): QueryInRouteByDenomResponse {
    const message = createBaseQueryInRouteByDenomResponse();
    message.inRoute = object.in_route?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryInRouteByDenomResponse): QueryInRouteByDenomResponseAmino {
    const obj: any = {};
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = message.inRoute;
    }
    return obj;
  },
  fromAminoMsg(object: QueryInRouteByDenomResponseAminoMsg): QueryInRouteByDenomResponse {
    return QueryInRouteByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryInRouteByDenomResponseProtoMsg): QueryInRouteByDenomResponse {
    return QueryInRouteByDenomResponse.decode(message.value);
  },
  toProto(message: QueryInRouteByDenomResponse): Uint8Array {
    return QueryInRouteByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInRouteByDenomResponse): QueryInRouteByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryInRouteByDenomResponse",
      value: QueryInRouteByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryInRouteByDenomResponse.typeUrl, QueryInRouteByDenomResponse);
function createBaseQueryOutRouteByDenomRequest(): QueryOutRouteByDenomRequest {
  return {
    denomOut: "",
    denomIn: ""
  };
}
export const QueryOutRouteByDenomRequest = {
  typeUrl: "/elys.amm.QueryOutRouteByDenomRequest",
  is(o: any): o is QueryOutRouteByDenomRequest {
    return o && (o.$typeUrl === QueryOutRouteByDenomRequest.typeUrl || typeof o.denomOut === "string" && typeof o.denomIn === "string");
  },
  isSDK(o: any): o is QueryOutRouteByDenomRequestSDKType {
    return o && (o.$typeUrl === QueryOutRouteByDenomRequest.typeUrl || typeof o.denom_out === "string" && typeof o.denom_in === "string");
  },
  isAmino(o: any): o is QueryOutRouteByDenomRequestAmino {
    return o && (o.$typeUrl === QueryOutRouteByDenomRequest.typeUrl || typeof o.denom_out === "string" && typeof o.denom_in === "string");
  },
  encode(message: QueryOutRouteByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denomOut !== "") {
      writer.uint32(10).string(message.denomOut);
    }
    if (message.denomIn !== "") {
      writer.uint32(18).string(message.denomIn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutRouteByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutRouteByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOut = reader.string();
          break;
        case 2:
          message.denomIn = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutRouteByDenomRequest {
    return {
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : ""
    };
  },
  toJSON(message: QueryOutRouteByDenomRequest): JsonSafe<QueryOutRouteByDenomRequest> {
    const obj: any = {};
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    return obj;
  },
  fromPartial(object: Partial<QueryOutRouteByDenomRequest>): QueryOutRouteByDenomRequest {
    const message = createBaseQueryOutRouteByDenomRequest();
    message.denomOut = object.denomOut ?? "";
    message.denomIn = object.denomIn ?? "";
    return message;
  },
  fromAmino(object: QueryOutRouteByDenomRequestAmino): QueryOutRouteByDenomRequest {
    const message = createBaseQueryOutRouteByDenomRequest();
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    return message;
  },
  toAmino(message: QueryOutRouteByDenomRequest): QueryOutRouteByDenomRequestAmino {
    const obj: any = {};
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    return obj;
  },
  fromAminoMsg(object: QueryOutRouteByDenomRequestAminoMsg): QueryOutRouteByDenomRequest {
    return QueryOutRouteByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutRouteByDenomRequestProtoMsg): QueryOutRouteByDenomRequest {
    return QueryOutRouteByDenomRequest.decode(message.value);
  },
  toProto(message: QueryOutRouteByDenomRequest): Uint8Array {
    return QueryOutRouteByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutRouteByDenomRequest): QueryOutRouteByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryOutRouteByDenomRequest",
      value: QueryOutRouteByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOutRouteByDenomRequest.typeUrl, QueryOutRouteByDenomRequest);
function createBaseQueryOutRouteByDenomResponse(): QueryOutRouteByDenomResponse {
  return {
    outRoute: []
  };
}
export const QueryOutRouteByDenomResponse = {
  typeUrl: "/elys.amm.QueryOutRouteByDenomResponse",
  is(o: any): o is QueryOutRouteByDenomResponse {
    return o && (o.$typeUrl === QueryOutRouteByDenomResponse.typeUrl || Array.isArray(o.outRoute) && (!o.outRoute.length || SwapAmountOutRoute.is(o.outRoute[0])));
  },
  isSDK(o: any): o is QueryOutRouteByDenomResponseSDKType {
    return o && (o.$typeUrl === QueryOutRouteByDenomResponse.typeUrl || Array.isArray(o.out_route) && (!o.out_route.length || SwapAmountOutRoute.isSDK(o.out_route[0])));
  },
  isAmino(o: any): o is QueryOutRouteByDenomResponseAmino {
    return o && (o.$typeUrl === QueryOutRouteByDenomResponse.typeUrl || Array.isArray(o.out_route) && (!o.out_route.length || SwapAmountOutRoute.isAmino(o.out_route[0])));
  },
  encode(message: QueryOutRouteByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.outRoute) {
      SwapAmountOutRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutRouteByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutRouteByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.outRoute.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutRouteByDenomResponse {
    return {
      outRoute: Array.isArray(object?.outRoute) ? object.outRoute.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryOutRouteByDenomResponse): JsonSafe<QueryOutRouteByDenomResponse> {
    const obj: any = {};
    if (message.outRoute) {
      obj.outRoute = message.outRoute.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.outRoute = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryOutRouteByDenomResponse>): QueryOutRouteByDenomResponse {
    const message = createBaseQueryOutRouteByDenomResponse();
    message.outRoute = object.outRoute?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOutRouteByDenomResponseAmino): QueryOutRouteByDenomResponse {
    const message = createBaseQueryOutRouteByDenomResponse();
    message.outRoute = object.out_route?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOutRouteByDenomResponse): QueryOutRouteByDenomResponseAmino {
    const obj: any = {};
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = message.outRoute;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutRouteByDenomResponseAminoMsg): QueryOutRouteByDenomResponse {
    return QueryOutRouteByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutRouteByDenomResponseProtoMsg): QueryOutRouteByDenomResponse {
    return QueryOutRouteByDenomResponse.decode(message.value);
  },
  toProto(message: QueryOutRouteByDenomResponse): Uint8Array {
    return QueryOutRouteByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutRouteByDenomResponse): QueryOutRouteByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryOutRouteByDenomResponse",
      value: QueryOutRouteByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOutRouteByDenomResponse.typeUrl, QueryOutRouteByDenomResponse);
function createBaseQuerySwapEstimationByDenomRequest(): QuerySwapEstimationByDenomRequest {
  return {
    amount: Coin.fromPartial({}),
    denomIn: "",
    denomOut: "",
    address: ""
  };
}
export const QuerySwapEstimationByDenomRequest = {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest",
  is(o: any): o is QuerySwapEstimationByDenomRequest {
    return o && (o.$typeUrl === QuerySwapEstimationByDenomRequest.typeUrl || Coin.is(o.amount) && typeof o.denomIn === "string" && typeof o.denomOut === "string" && typeof o.address === "string");
  },
  isSDK(o: any): o is QuerySwapEstimationByDenomRequestSDKType {
    return o && (o.$typeUrl === QuerySwapEstimationByDenomRequest.typeUrl || Coin.isSDK(o.amount) && typeof o.denom_in === "string" && typeof o.denom_out === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is QuerySwapEstimationByDenomRequestAmino {
    return o && (o.$typeUrl === QuerySwapEstimationByDenomRequest.typeUrl || Coin.isAmino(o.amount) && typeof o.denom_in === "string" && typeof o.denom_out === "string" && typeof o.address === "string");
  },
  encode(message: QuerySwapEstimationByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomIn !== "") {
      writer.uint32(18).string(message.denomIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(26).string(message.denomOut);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.denomIn = reader.string();
          break;
        case 3:
          message.denomOut = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapEstimationByDenomRequest {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      denomIn: isSet(object.denomIn) ? String(object.denomIn) : "",
      denomOut: isSet(object.denomOut) ? String(object.denomOut) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QuerySwapEstimationByDenomRequest): JsonSafe<QuerySwapEstimationByDenomRequest> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.denomIn !== undefined && (obj.denomIn = message.denomIn);
    message.denomOut !== undefined && (obj.denomOut = message.denomOut);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapEstimationByDenomRequest>): QuerySwapEstimationByDenomRequest {
    const message = createBaseQuerySwapEstimationByDenomRequest();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.denomIn = object.denomIn ?? "";
    message.denomOut = object.denomOut ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QuerySwapEstimationByDenomRequestAmino): QuerySwapEstimationByDenomRequest {
    const message = createBaseQuerySwapEstimationByDenomRequest();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.denom_in !== undefined && object.denom_in !== null) {
      message.denomIn = object.denom_in;
    }
    if (object.denom_out !== undefined && object.denom_out !== null) {
      message.denomOut = object.denom_out;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationByDenomRequest): QuerySwapEstimationByDenomRequestAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.denom_in = message.denomIn === "" ? undefined : message.denomIn;
    obj.denom_out = message.denomOut === "" ? undefined : message.denomOut;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationByDenomRequestAminoMsg): QuerySwapEstimationByDenomRequest {
    return QuerySwapEstimationByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationByDenomRequestProtoMsg): QuerySwapEstimationByDenomRequest {
    return QuerySwapEstimationByDenomRequest.decode(message.value);
  },
  toProto(message: QuerySwapEstimationByDenomRequest): Uint8Array {
    return QuerySwapEstimationByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationByDenomRequest): QuerySwapEstimationByDenomRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationByDenomRequest",
      value: QuerySwapEstimationByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapEstimationByDenomRequest.typeUrl, QuerySwapEstimationByDenomRequest);
function createBaseQuerySwapEstimationByDenomResponse(): QuerySwapEstimationByDenomResponse {
  return {
    inRoute: [],
    outRoute: [],
    spotPrice: "",
    amount: Coin.fromPartial({}),
    swapFee: "",
    discount: "",
    availableLiquidity: Coin.fromPartial({}),
    weightBalanceRatio: "",
    slippage: "",
    priceImpact: "",
    weightBalanceRewardAmount: Coin.fromPartial({})
  };
}
export const QuerySwapEstimationByDenomResponse = {
  typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse",
  is(o: any): o is QuerySwapEstimationByDenomResponse {
    return o && (o.$typeUrl === QuerySwapEstimationByDenomResponse.typeUrl || Array.isArray(o.inRoute) && (!o.inRoute.length || SwapAmountInRoute.is(o.inRoute[0])) && Array.isArray(o.outRoute) && (!o.outRoute.length || SwapAmountOutRoute.is(o.outRoute[0])) && typeof o.spotPrice === "string" && Coin.is(o.amount) && typeof o.swapFee === "string" && typeof o.discount === "string" && Coin.is(o.availableLiquidity) && typeof o.weightBalanceRatio === "string" && typeof o.slippage === "string" && typeof o.priceImpact === "string" && Coin.is(o.weightBalanceRewardAmount));
  },
  isSDK(o: any): o is QuerySwapEstimationByDenomResponseSDKType {
    return o && (o.$typeUrl === QuerySwapEstimationByDenomResponse.typeUrl || Array.isArray(o.in_route) && (!o.in_route.length || SwapAmountInRoute.isSDK(o.in_route[0])) && Array.isArray(o.out_route) && (!o.out_route.length || SwapAmountOutRoute.isSDK(o.out_route[0])) && typeof o.spot_price === "string" && Coin.isSDK(o.amount) && typeof o.swap_fee === "string" && typeof o.discount === "string" && Coin.isSDK(o.available_liquidity) && typeof o.weight_balance_ratio === "string" && typeof o.slippage === "string" && typeof o.price_impact === "string" && Coin.isSDK(o.weight_balance_reward_amount));
  },
  isAmino(o: any): o is QuerySwapEstimationByDenomResponseAmino {
    return o && (o.$typeUrl === QuerySwapEstimationByDenomResponse.typeUrl || Array.isArray(o.in_route) && (!o.in_route.length || SwapAmountInRoute.isAmino(o.in_route[0])) && Array.isArray(o.out_route) && (!o.out_route.length || SwapAmountOutRoute.isAmino(o.out_route[0])) && typeof o.spot_price === "string" && Coin.isAmino(o.amount) && typeof o.swap_fee === "string" && typeof o.discount === "string" && Coin.isAmino(o.available_liquidity) && typeof o.weight_balance_ratio === "string" && typeof o.slippage === "string" && typeof o.price_impact === "string" && Coin.isAmino(o.weight_balance_reward_amount));
  },
  encode(message: QuerySwapEstimationByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inRoute) {
      SwapAmountInRoute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outRoute) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.spotPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.spotPrice, 18).atomics);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.swapFee !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.swapFee, 18).atomics);
    }
    if (message.discount !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    if (message.availableLiquidity !== undefined) {
      Coin.encode(message.availableLiquidity, writer.uint32(58).fork()).ldelim();
    }
    if (message.weightBalanceRatio !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.weightBalanceRatio, 18).atomics);
    }
    if (message.slippage !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.slippage, 18).atomics);
    }
    if (message.priceImpact !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.priceImpact, 18).atomics);
    }
    if (message.weightBalanceRewardAmount !== undefined) {
      Coin.encode(message.weightBalanceRewardAmount, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapEstimationByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapEstimationByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inRoute.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outRoute.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.spotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.swapFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.availableLiquidity = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.weightBalanceRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.slippage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.priceImpact = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.weightBalanceRewardAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySwapEstimationByDenomResponse {
    return {
      inRoute: Array.isArray(object?.inRoute) ? object.inRoute.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      outRoute: Array.isArray(object?.outRoute) ? object.outRoute.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      spotPrice: isSet(object.spotPrice) ? String(object.spotPrice) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      swapFee: isSet(object.swapFee) ? String(object.swapFee) : "",
      discount: isSet(object.discount) ? String(object.discount) : "",
      availableLiquidity: isSet(object.availableLiquidity) ? Coin.fromJSON(object.availableLiquidity) : undefined,
      weightBalanceRatio: isSet(object.weightBalanceRatio) ? String(object.weightBalanceRatio) : "",
      slippage: isSet(object.slippage) ? String(object.slippage) : "",
      priceImpact: isSet(object.priceImpact) ? String(object.priceImpact) : "",
      weightBalanceRewardAmount: isSet(object.weightBalanceRewardAmount) ? Coin.fromJSON(object.weightBalanceRewardAmount) : undefined
    };
  },
  toJSON(message: QuerySwapEstimationByDenomResponse): JsonSafe<QuerySwapEstimationByDenomResponse> {
    const obj: any = {};
    if (message.inRoute) {
      obj.inRoute = message.inRoute.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.inRoute = [];
    }
    if (message.outRoute) {
      obj.outRoute = message.outRoute.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.outRoute = [];
    }
    message.spotPrice !== undefined && (obj.spotPrice = message.spotPrice);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee);
    message.discount !== undefined && (obj.discount = message.discount);
    message.availableLiquidity !== undefined && (obj.availableLiquidity = message.availableLiquidity ? Coin.toJSON(message.availableLiquidity) : undefined);
    message.weightBalanceRatio !== undefined && (obj.weightBalanceRatio = message.weightBalanceRatio);
    message.slippage !== undefined && (obj.slippage = message.slippage);
    message.priceImpact !== undefined && (obj.priceImpact = message.priceImpact);
    message.weightBalanceRewardAmount !== undefined && (obj.weightBalanceRewardAmount = message.weightBalanceRewardAmount ? Coin.toJSON(message.weightBalanceRewardAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySwapEstimationByDenomResponse>): QuerySwapEstimationByDenomResponse {
    const message = createBaseQuerySwapEstimationByDenomResponse();
    message.inRoute = object.inRoute?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.outRoute = object.outRoute?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.spotPrice = object.spotPrice ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.swapFee = object.swapFee ?? "";
    message.discount = object.discount ?? "";
    message.availableLiquidity = object.availableLiquidity !== undefined && object.availableLiquidity !== null ? Coin.fromPartial(object.availableLiquidity) : undefined;
    message.weightBalanceRatio = object.weightBalanceRatio ?? "";
    message.slippage = object.slippage ?? "";
    message.priceImpact = object.priceImpact ?? "";
    message.weightBalanceRewardAmount = object.weightBalanceRewardAmount !== undefined && object.weightBalanceRewardAmount !== null ? Coin.fromPartial(object.weightBalanceRewardAmount) : undefined;
    return message;
  },
  fromAmino(object: QuerySwapEstimationByDenomResponseAmino): QuerySwapEstimationByDenomResponse {
    const message = createBaseQuerySwapEstimationByDenomResponse();
    message.inRoute = object.in_route?.map(e => SwapAmountInRoute.fromAmino(e)) || [];
    message.outRoute = object.out_route?.map(e => SwapAmountOutRoute.fromAmino(e)) || [];
    if (object.spot_price !== undefined && object.spot_price !== null) {
      message.spotPrice = object.spot_price;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.swap_fee !== undefined && object.swap_fee !== null) {
      message.swapFee = object.swap_fee;
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    if (object.available_liquidity !== undefined && object.available_liquidity !== null) {
      message.availableLiquidity = Coin.fromAmino(object.available_liquidity);
    }
    if (object.weight_balance_ratio !== undefined && object.weight_balance_ratio !== null) {
      message.weightBalanceRatio = object.weight_balance_ratio;
    }
    if (object.slippage !== undefined && object.slippage !== null) {
      message.slippage = object.slippage;
    }
    if (object.price_impact !== undefined && object.price_impact !== null) {
      message.priceImpact = object.price_impact;
    }
    if (object.weight_balance_reward_amount !== undefined && object.weight_balance_reward_amount !== null) {
      message.weightBalanceRewardAmount = Coin.fromAmino(object.weight_balance_reward_amount);
    }
    return message;
  },
  toAmino(message: QuerySwapEstimationByDenomResponse): QuerySwapEstimationByDenomResponseAmino {
    const obj: any = {};
    if (message.inRoute) {
      obj.in_route = message.inRoute.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.in_route = message.inRoute;
    }
    if (message.outRoute) {
      obj.out_route = message.outRoute.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.out_route = message.outRoute;
    }
    obj.spot_price = message.spotPrice === "" ? undefined : message.spotPrice;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.swap_fee = message.swapFee === "" ? undefined : message.swapFee;
    obj.discount = message.discount === "" ? undefined : message.discount;
    obj.available_liquidity = message.availableLiquidity ? Coin.toAmino(message.availableLiquidity) : undefined;
    obj.weight_balance_ratio = message.weightBalanceRatio === "" ? undefined : message.weightBalanceRatio;
    obj.slippage = message.slippage === "" ? undefined : message.slippage;
    obj.price_impact = message.priceImpact === "" ? undefined : message.priceImpact;
    obj.weight_balance_reward_amount = message.weightBalanceRewardAmount ? Coin.toAmino(message.weightBalanceRewardAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySwapEstimationByDenomResponseAminoMsg): QuerySwapEstimationByDenomResponse {
    return QuerySwapEstimationByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySwapEstimationByDenomResponseProtoMsg): QuerySwapEstimationByDenomResponse {
    return QuerySwapEstimationByDenomResponse.decode(message.value);
  },
  toProto(message: QuerySwapEstimationByDenomResponse): Uint8Array {
    return QuerySwapEstimationByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapEstimationByDenomResponse): QuerySwapEstimationByDenomResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QuerySwapEstimationByDenomResponse",
      value: QuerySwapEstimationByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySwapEstimationByDenomResponse.typeUrl, QuerySwapEstimationByDenomResponse);
function createBaseQueryAMMPriceRequest(): QueryAMMPriceRequest {
  return {
    tokenIn: Coin.fromPartial({}),
    discount: ""
  };
}
export const QueryAMMPriceRequest = {
  typeUrl: "/elys.amm.QueryAMMPriceRequest",
  is(o: any): o is QueryAMMPriceRequest {
    return o && (o.$typeUrl === QueryAMMPriceRequest.typeUrl || Coin.is(o.tokenIn) && typeof o.discount === "string");
  },
  isSDK(o: any): o is QueryAMMPriceRequestSDKType {
    return o && (o.$typeUrl === QueryAMMPriceRequest.typeUrl || Coin.isSDK(o.token_in) && typeof o.discount === "string");
  },
  isAmino(o: any): o is QueryAMMPriceRequestAmino {
    return o && (o.$typeUrl === QueryAMMPriceRequest.typeUrl || Coin.isAmino(o.token_in) && typeof o.discount === "string");
  },
  encode(message: QueryAMMPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.discount !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.discount, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAMMPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAMMPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.discount = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAMMPriceRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      discount: isSet(object.discount) ? String(object.discount) : ""
    };
  },
  toJSON(message: QueryAMMPriceRequest): JsonSafe<QueryAMMPriceRequest> {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn ? Coin.toJSON(message.tokenIn) : undefined);
    message.discount !== undefined && (obj.discount = message.discount);
    return obj;
  },
  fromPartial(object: Partial<QueryAMMPriceRequest>): QueryAMMPriceRequest {
    const message = createBaseQueryAMMPriceRequest();
    message.tokenIn = object.tokenIn !== undefined && object.tokenIn !== null ? Coin.fromPartial(object.tokenIn) : undefined;
    message.discount = object.discount ?? "";
    return message;
  },
  fromAmino(object: QueryAMMPriceRequestAmino): QueryAMMPriceRequest {
    const message = createBaseQueryAMMPriceRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = Coin.fromAmino(object.token_in);
    }
    if (object.discount !== undefined && object.discount !== null) {
      message.discount = object.discount;
    }
    return message;
  },
  toAmino(message: QueryAMMPriceRequest): QueryAMMPriceRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn ? Coin.toAmino(message.tokenIn) : undefined;
    obj.discount = message.discount === "" ? undefined : message.discount;
    return obj;
  },
  fromAminoMsg(object: QueryAMMPriceRequestAminoMsg): QueryAMMPriceRequest {
    return QueryAMMPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAMMPriceRequestProtoMsg): QueryAMMPriceRequest {
    return QueryAMMPriceRequest.decode(message.value);
  },
  toProto(message: QueryAMMPriceRequest): Uint8Array {
    return QueryAMMPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAMMPriceRequest): QueryAMMPriceRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryAMMPriceRequest",
      value: QueryAMMPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAMMPriceRequest.typeUrl, QueryAMMPriceRequest);
function createBaseQueryWeightAndSlippageFeeRequest(): QueryWeightAndSlippageFeeRequest {
  return {
    poolId: BigInt(0),
    date: ""
  };
}
export const QueryWeightAndSlippageFeeRequest = {
  typeUrl: "/elys.amm.QueryWeightAndSlippageFeeRequest",
  is(o: any): o is QueryWeightAndSlippageFeeRequest {
    return o && (o.$typeUrl === QueryWeightAndSlippageFeeRequest.typeUrl || typeof o.poolId === "bigint" && typeof o.date === "string");
  },
  isSDK(o: any): o is QueryWeightAndSlippageFeeRequestSDKType {
    return o && (o.$typeUrl === QueryWeightAndSlippageFeeRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.date === "string");
  },
  isAmino(o: any): o is QueryWeightAndSlippageFeeRequestAmino {
    return o && (o.$typeUrl === QueryWeightAndSlippageFeeRequest.typeUrl || typeof o.pool_id === "bigint" && typeof o.date === "string");
  },
  encode(message: QueryWeightAndSlippageFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.date !== "") {
      writer.uint32(18).string(message.date);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWeightAndSlippageFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWeightAndSlippageFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.date = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWeightAndSlippageFeeRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      date: isSet(object.date) ? String(object.date) : ""
    };
  },
  toJSON(message: QueryWeightAndSlippageFeeRequest): JsonSafe<QueryWeightAndSlippageFeeRequest> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },
  fromPartial(object: Partial<QueryWeightAndSlippageFeeRequest>): QueryWeightAndSlippageFeeRequest {
    const message = createBaseQueryWeightAndSlippageFeeRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.date = object.date ?? "";
    return message;
  },
  fromAmino(object: QueryWeightAndSlippageFeeRequestAmino): QueryWeightAndSlippageFeeRequest {
    const message = createBaseQueryWeightAndSlippageFeeRequest();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    }
    return message;
  },
  toAmino(message: QueryWeightAndSlippageFeeRequest): QueryWeightAndSlippageFeeRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.date = message.date === "" ? undefined : message.date;
    return obj;
  },
  fromAminoMsg(object: QueryWeightAndSlippageFeeRequestAminoMsg): QueryWeightAndSlippageFeeRequest {
    return QueryWeightAndSlippageFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWeightAndSlippageFeeRequestProtoMsg): QueryWeightAndSlippageFeeRequest {
    return QueryWeightAndSlippageFeeRequest.decode(message.value);
  },
  toProto(message: QueryWeightAndSlippageFeeRequest): Uint8Array {
    return QueryWeightAndSlippageFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWeightAndSlippageFeeRequest): QueryWeightAndSlippageFeeRequestProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryWeightAndSlippageFeeRequest",
      value: QueryWeightAndSlippageFeeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWeightAndSlippageFeeRequest.typeUrl, QueryWeightAndSlippageFeeRequest);
function createBaseQueryWeightAndSlippageFeeResponse(): QueryWeightAndSlippageFeeResponse {
  return {
    value: ""
  };
}
export const QueryWeightAndSlippageFeeResponse = {
  typeUrl: "/elys.amm.QueryWeightAndSlippageFeeResponse",
  is(o: any): o is QueryWeightAndSlippageFeeResponse {
    return o && (o.$typeUrl === QueryWeightAndSlippageFeeResponse.typeUrl || typeof o.value === "string");
  },
  isSDK(o: any): o is QueryWeightAndSlippageFeeResponseSDKType {
    return o && (o.$typeUrl === QueryWeightAndSlippageFeeResponse.typeUrl || typeof o.value === "string");
  },
  isAmino(o: any): o is QueryWeightAndSlippageFeeResponseAmino {
    return o && (o.$typeUrl === QueryWeightAndSlippageFeeResponse.typeUrl || typeof o.value === "string");
  },
  encode(message: QueryWeightAndSlippageFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.value, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWeightAndSlippageFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWeightAndSlippageFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWeightAndSlippageFeeResponse {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: QueryWeightAndSlippageFeeResponse): JsonSafe<QueryWeightAndSlippageFeeResponse> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<QueryWeightAndSlippageFeeResponse>): QueryWeightAndSlippageFeeResponse {
    const message = createBaseQueryWeightAndSlippageFeeResponse();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryWeightAndSlippageFeeResponseAmino): QueryWeightAndSlippageFeeResponse {
    const message = createBaseQueryWeightAndSlippageFeeResponse();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: QueryWeightAndSlippageFeeResponse): QueryWeightAndSlippageFeeResponseAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: QueryWeightAndSlippageFeeResponseAminoMsg): QueryWeightAndSlippageFeeResponse {
    return QueryWeightAndSlippageFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWeightAndSlippageFeeResponseProtoMsg): QueryWeightAndSlippageFeeResponse {
    return QueryWeightAndSlippageFeeResponse.decode(message.value);
  },
  toProto(message: QueryWeightAndSlippageFeeResponse): Uint8Array {
    return QueryWeightAndSlippageFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWeightAndSlippageFeeResponse): QueryWeightAndSlippageFeeResponseProtoMsg {
    return {
      typeUrl: "/elys.amm.QueryWeightAndSlippageFeeResponse",
      value: QueryWeightAndSlippageFeeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWeightAndSlippageFeeResponse.typeUrl, QueryWeightAndSlippageFeeResponse);