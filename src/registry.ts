// @ts-nocheck
import { GeneratedType } from "@cosmjs/proto-signing";
import {
  MsgInstantiateContract,
  MsgInstantiateContract2,
  MsgExecuteContract,
} from "./codegen/cosmwasm/wasm/v1/tx";
import * as osmo from "./codegen/osmosis/gamm/v1beta1/gamm";

import { MsgWithdrawElysStakingRewards } from "./codegen/elys/estaking/tx";
import { MsgStake } from "./codegen/elys/commitment/tx";
import { MsgBond } from "./codegen/elys/stablestake/tx";
import { MsgEthereumTx } from "./codegen/cosmos/evm/vm/v1/tx";
import {
  MsgSwapExactAmountIn,
  MsgSwapExactAmountOut,
} from "./codegen/elys/amm/tx";
import { GenericAuthorization } from "./codegen/cosmos/authz/v1beta1/authz";

export const customMsgRegistry: ReadonlyArray<
  [string, TelescopeGeneratedCodec]
> = [
  ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
  ["/cosmwasm.wasm.v1.MsgInstantiateContract2", MsgInstantiateContract2],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
  ["/osmosis.gamm.v1beta1.MsgJoinPool", osmo.MsgJoinPool],
  ["/osmosis.gamm.v1beta1.MsgExitPool", osmo.MsgExitPool],
  [
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    osmo.MsgExitSwapShareAmountIn,
  ],
  [
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    osmo.MsgJoinSwapExternAmountIn,
  ],
  ["/osmosis.gamm.v1beta1.MsgSwapExactAmountIn", osmo.MsgSwapExactAmountIn],
  ["/osmosis.gamm.v1beta1.MsgSwapExactAmountOut", osmo.MsgSwapExactAmountOut],
  ["/cosmos.evm.vm.v1.MsgEthereumTx", MsgEthereumTx],
  [
    "/elys.estaking.MsgWithdrawElysStakingRewards",
    MsgWithdrawElysStakingRewards,
  ],
  ["/elys.commitment.MsgStake", MsgStake],
  ["/elys.stablestake.MsgBond", MsgBond],
  ["/elys.amm.MsgSwapExactAmountIn", MsgSwapExactAmountIn],
  ["/elys.amm.MsgSwapExactAmountOut", MsgSwapExactAmountOut],
  ["/cosmos.authz.v1beta1.GenericAuthorization", GenericAuthorization],
];
