import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgExecuteContract,
} from "./codegen/cosmwasm/wasm/v1/cosmwasm";
import * as osmo from "./codegen/osmosis/gamm/v1beta1/gamm";

export const customMsgRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
  ["/cosmwasm.wasm.v1.MsgInstantiateContract2", MsgInstantiateContract2],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
  ["osmosis.gamm.v1beta1.MsgJoinPool", osmo.MsgJoinPool],
  ["osmosis.gamm.v1beta1.MsgExitPool", osmo.MsgExitPool],
  [
    "osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    osmo.MsgExitSwapShareAmountIn,
  ],
  [
    "osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    osmo.MsgJoinSwapExternAmountIn,
  ],
  ["osmosis.gamm.v1beta1.MsgSwapExactAmountIn", osmo.MsgSwapExactAmountIn],
  ["osmosis.gamm.v1beta1.MsgSwapExactAmountOut", osmo.MsgSwapExactAmountOut],
];
