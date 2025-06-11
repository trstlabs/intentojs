import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface MsgCommitClaimedRewards {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitClaimedRewardsProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewards";
  value: Uint8Array;
}
export interface MsgCommitClaimedRewardsAmino {
  creator?: string;
  amount?: string;
  denom?: string;
}
export interface MsgCommitClaimedRewardsAminoMsg {
  type: "commitment/MsgCommitClaimedRewards";
  value: MsgCommitClaimedRewardsAmino;
}
export interface MsgCommitClaimedRewardsSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCommitClaimedRewardsResponse {}
export interface MsgCommitClaimedRewardsResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewardsResponse";
  value: Uint8Array;
}
export interface MsgCommitClaimedRewardsResponseAmino {}
export interface MsgCommitClaimedRewardsResponseAminoMsg {
  type: "/elys.commitment.MsgCommitClaimedRewardsResponse";
  value: MsgCommitClaimedRewardsResponseAmino;
}
export interface MsgCommitClaimedRewardsResponseSDKType {}
export interface MsgUncommitTokens {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgUncommitTokensProtoMsg {
  typeUrl: "/elys.commitment.MsgUncommitTokens";
  value: Uint8Array;
}
export interface MsgUncommitTokensAmino {
  creator?: string;
  amount?: string;
  denom?: string;
}
export interface MsgUncommitTokensAminoMsg {
  type: "commitment/MsgUncommitTokens";
  value: MsgUncommitTokensAmino;
}
export interface MsgUncommitTokensSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgUncommitTokensResponse {}
export interface MsgUncommitTokensResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUncommitTokensResponse";
  value: Uint8Array;
}
export interface MsgUncommitTokensResponseAmino {}
export interface MsgUncommitTokensResponseAminoMsg {
  type: "/elys.commitment.MsgUncommitTokensResponse";
  value: MsgUncommitTokensResponseAmino;
}
export interface MsgUncommitTokensResponseSDKType {}
export interface MsgVest {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestProtoMsg {
  typeUrl: "/elys.commitment.MsgVest";
  value: Uint8Array;
}
export interface MsgVestAmino {
  creator?: string;
  amount?: string;
  denom?: string;
}
export interface MsgVestAminoMsg {
  type: "commitment/MsgVest";
  value: MsgVestAmino;
}
export interface MsgVestSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestResponse {}
export interface MsgVestResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgVestResponse";
  value: Uint8Array;
}
export interface MsgVestResponseAmino {}
export interface MsgVestResponseAminoMsg {
  type: "/elys.commitment.MsgVestResponse";
  value: MsgVestResponseAmino;
}
export interface MsgVestResponseSDKType {}
export interface MsgCancelVest {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCancelVestProtoMsg {
  typeUrl: "/elys.commitment.MsgCancelVest";
  value: Uint8Array;
}
export interface MsgCancelVestAmino {
  creator?: string;
  amount?: string;
  denom?: string;
}
export interface MsgCancelVestAminoMsg {
  type: "commitment/MsgCancelVest";
  value: MsgCancelVestAmino;
}
export interface MsgCancelVestSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgCancelVestResponse {}
export interface MsgCancelVestResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgCancelVestResponse";
  value: Uint8Array;
}
export interface MsgCancelVestResponseAmino {}
export interface MsgCancelVestResponseAminoMsg {
  type: "/elys.commitment.MsgCancelVestResponse";
  value: MsgCancelVestResponseAmino;
}
export interface MsgCancelVestResponseSDKType {}
export interface MsgClaimVesting {
  sender: string;
}
export interface MsgClaimVestingProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimVesting";
  value: Uint8Array;
}
export interface MsgClaimVestingAmino {
  sender?: string;
}
export interface MsgClaimVestingAminoMsg {
  type: "commitment/MsgClaimVesting";
  value: MsgClaimVestingAmino;
}
export interface MsgClaimVestingSDKType {
  sender: string;
}
export interface MsgClaimVestingResponse {}
export interface MsgClaimVestingResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimVestingResponse";
  value: Uint8Array;
}
export interface MsgClaimVestingResponseAmino {}
export interface MsgClaimVestingResponseAminoMsg {
  type: "/elys.commitment.MsgClaimVestingResponse";
  value: MsgClaimVestingResponseAmino;
}
export interface MsgClaimVestingResponseSDKType {}
export interface MsgVestNow {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestNowProtoMsg {
  typeUrl: "/elys.commitment.MsgVestNow";
  value: Uint8Array;
}
export interface MsgVestNowAmino {
  creator?: string;
  amount?: string;
  denom?: string;
}
export interface MsgVestNowAminoMsg {
  type: "commitment/MsgVestNow";
  value: MsgVestNowAmino;
}
export interface MsgVestNowSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestNowResponse {}
export interface MsgVestNowResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgVestNowResponse";
  value: Uint8Array;
}
export interface MsgVestNowResponseAmino {}
export interface MsgVestNowResponseAminoMsg {
  type: "/elys.commitment.MsgVestNowResponse";
  value: MsgVestNowResponseAmino;
}
export interface MsgVestNowResponseSDKType {}
export interface MsgUpdateVestingInfo {
  authority: string;
  baseDenom: string;
  vestingDenom: string;
  numBlocks: bigint;
  vestNowFactor: bigint;
  numMaxVestings: bigint;
}
export interface MsgUpdateVestingInfoProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfo";
  value: Uint8Array;
}
export interface MsgUpdateVestingInfoAmino {
  authority?: string;
  base_denom?: string;
  vesting_denom?: string;
  num_blocks?: string;
  vest_now_factor?: string;
  num_max_vestings?: string;
}
export interface MsgUpdateVestingInfoAminoMsg {
  type: "commitment/MsgUpdateVestingInfo";
  value: MsgUpdateVestingInfoAmino;
}
export interface MsgUpdateVestingInfoSDKType {
  authority: string;
  base_denom: string;
  vesting_denom: string;
  num_blocks: bigint;
  vest_now_factor: bigint;
  num_max_vestings: bigint;
}
export interface MsgUpdateVestingInfoResponse {}
export interface MsgUpdateVestingInfoResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfoResponse";
  value: Uint8Array;
}
export interface MsgUpdateVestingInfoResponseAmino {}
export interface MsgUpdateVestingInfoResponseAminoMsg {
  type: "/elys.commitment.MsgUpdateVestingInfoResponse";
  value: MsgUpdateVestingInfoResponseAmino;
}
export interface MsgUpdateVestingInfoResponseSDKType {}
export interface MsgUpdateEnableVestNow {
  authority: string;
  enableVestNow: boolean;
}
export interface MsgUpdateEnableVestNowProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateEnableVestNow";
  value: Uint8Array;
}
export interface MsgUpdateEnableVestNowAmino {
  authority?: string;
  enable_vest_now?: boolean;
}
export interface MsgUpdateEnableVestNowAminoMsg {
  type: "commitment/MsgUpdateEnableVestNow";
  value: MsgUpdateEnableVestNowAmino;
}
export interface MsgUpdateEnableVestNowSDKType {
  authority: string;
  enable_vest_now: boolean;
}
export interface MsgUpdateEnableVestNowResponse {}
export interface MsgUpdateEnableVestNowResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateEnableVestNowResponse";
  value: Uint8Array;
}
export interface MsgUpdateEnableVestNowResponseAmino {}
export interface MsgUpdateEnableVestNowResponseAminoMsg {
  type: "/elys.commitment.MsgUpdateEnableVestNowResponse";
  value: MsgUpdateEnableVestNowResponseAmino;
}
export interface MsgUpdateEnableVestNowResponseSDKType {}
export interface MsgVestLiquid {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestLiquidProtoMsg {
  typeUrl: "/elys.commitment.MsgVestLiquid";
  value: Uint8Array;
}
export interface MsgVestLiquidAmino {
  creator?: string;
  amount?: string;
  denom?: string;
}
export interface MsgVestLiquidAminoMsg {
  type: "commitment/MsgVestLiquid";
  value: MsgVestLiquidAmino;
}
export interface MsgVestLiquidSDKType {
  creator: string;
  amount: string;
  denom: string;
}
export interface MsgVestLiquidResponse {}
export interface MsgVestLiquidResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgVestLiquidResponse";
  value: Uint8Array;
}
export interface MsgVestLiquidResponseAmino {}
export interface MsgVestLiquidResponseAminoMsg {
  type: "/elys.commitment.MsgVestLiquidResponse";
  value: MsgVestLiquidResponseAmino;
}
export interface MsgVestLiquidResponseSDKType {}
export interface MsgStake {
  creator: string;
  amount: string;
  asset: string;
  validatorAddress: string;
}
export interface MsgStakeProtoMsg {
  typeUrl: "/elys.commitment.MsgStake";
  value: Uint8Array;
}
export interface MsgStakeAmino {
  creator?: string;
  amount?: string;
  asset?: string;
  validator_address?: string;
}
export interface MsgStakeAminoMsg {
  type: "commitment/MsgStake";
  value: MsgStakeAmino;
}
export interface MsgStakeSDKType {
  creator: string;
  amount: string;
  asset: string;
  validator_address: string;
}
export interface MsgStakeResponse {
  code: bigint;
  result: string;
}
export interface MsgStakeResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgStakeResponse";
  value: Uint8Array;
}
export interface MsgStakeResponseAmino {
  code?: string;
  result?: string;
}
export interface MsgStakeResponseAminoMsg {
  type: "/elys.commitment.MsgStakeResponse";
  value: MsgStakeResponseAmino;
}
export interface MsgStakeResponseSDKType {
  code: bigint;
  result: string;
}
export interface MsgUnstake {
  creator: string;
  amount: string;
  asset: string;
  validatorAddress: string;
}
export interface MsgUnstakeProtoMsg {
  typeUrl: "/elys.commitment.MsgUnstake";
  value: Uint8Array;
}
export interface MsgUnstakeAmino {
  creator?: string;
  amount?: string;
  asset?: string;
  validator_address?: string;
}
export interface MsgUnstakeAminoMsg {
  type: "commitment/MsgUnstake";
  value: MsgUnstakeAmino;
}
export interface MsgUnstakeSDKType {
  creator: string;
  amount: string;
  asset: string;
  validator_address: string;
}
export interface MsgUnstakeResponse {
  code: bigint;
  result: string;
}
export interface MsgUnstakeResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUnstakeResponse";
  value: Uint8Array;
}
export interface MsgUnstakeResponseAmino {
  code?: string;
  result?: string;
}
export interface MsgUnstakeResponseAminoMsg {
  type: "/elys.commitment.MsgUnstakeResponse";
  value: MsgUnstakeResponseAmino;
}
export interface MsgUnstakeResponseSDKType {
  code: bigint;
  result: string;
}
export interface MsgClaimAirdrop {
  claimAddress: string;
}
export interface MsgClaimAirdropProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimAirdrop";
  value: Uint8Array;
}
export interface MsgClaimAirdropAmino {
  claim_address?: string;
}
export interface MsgClaimAirdropAminoMsg {
  type: "commitment/MsgClaimAirdrop";
  value: MsgClaimAirdropAmino;
}
export interface MsgClaimAirdropSDKType {
  claim_address: string;
}
export interface MsgClaimAirdropResponse {
  elysAmount: string;
  edenAmount: string;
}
export interface MsgClaimAirdropResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimAirdropResponse";
  value: Uint8Array;
}
export interface MsgClaimAirdropResponseAmino {
  elys_amount?: string;
  eden_amount?: string;
}
export interface MsgClaimAirdropResponseAminoMsg {
  type: "/elys.commitment.MsgClaimAirdropResponse";
  value: MsgClaimAirdropResponseAmino;
}
export interface MsgClaimAirdropResponseSDKType {
  elys_amount: string;
  eden_amount: string;
}
export interface MsgClaimKol {
  claimAddress: string;
  refund: boolean;
}
export interface MsgClaimKolProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimKol";
  value: Uint8Array;
}
export interface MsgClaimKolAmino {
  claim_address?: string;
  refund?: boolean;
}
export interface MsgClaimKolAminoMsg {
  type: "commitment/MsgClaimKol";
  value: MsgClaimKolAmino;
}
export interface MsgClaimKolSDKType {
  claim_address: string;
  refund: boolean;
}
export interface MsgClaimKolResponse {
  elysAmount: string;
  vestedElysAmount: string;
}
export interface MsgClaimKolResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimKolResponse";
  value: Uint8Array;
}
export interface MsgClaimKolResponseAmino {
  elys_amount?: string;
  vested_elys_amount?: string;
}
export interface MsgClaimKolResponseAminoMsg {
  type: "/elys.commitment.MsgClaimKolResponse";
  value: MsgClaimKolResponseAmino;
}
export interface MsgClaimKolResponseSDKType {
  elys_amount: string;
  vested_elys_amount: string;
}
export interface MsgUpdateAirdropParams {
  authority: string;
  enableClaim: boolean;
  startAirdropClaimHeight: bigint;
  endAirdropClaimHeight: bigint;
  startKolClaimHeight: bigint;
  endKolClaimHeight: bigint;
  startRewardProgramClaimHeight: bigint;
  endRewardProgramClaimHeight: bigint;
}
export interface MsgUpdateAirdropParamsProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateAirdropParams";
  value: Uint8Array;
}
export interface MsgUpdateAirdropParamsAmino {
  authority?: string;
  enable_claim?: boolean;
  start_airdrop_claim_height?: string;
  end_airdrop_claim_height?: string;
  start_kol_claim_height?: string;
  end_kol_claim_height?: string;
  start_reward_program_claim_height?: string;
  end_reward_program_claim_height?: string;
}
export interface MsgUpdateAirdropParamsAminoMsg {
  type: "commitment/MsgUpdateAirdropParams";
  value: MsgUpdateAirdropParamsAmino;
}
export interface MsgUpdateAirdropParamsSDKType {
  authority: string;
  enable_claim: boolean;
  start_airdrop_claim_height: bigint;
  end_airdrop_claim_height: bigint;
  start_kol_claim_height: bigint;
  end_kol_claim_height: bigint;
  start_reward_program_claim_height: bigint;
  end_reward_program_claim_height: bigint;
}
export interface MsgUpdateAirdropParamsResponse {}
export interface MsgUpdateAirdropParamsResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgUpdateAirdropParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateAirdropParamsResponseAmino {}
export interface MsgUpdateAirdropParamsResponseAminoMsg {
  type: "/elys.commitment.MsgUpdateAirdropParamsResponse";
  value: MsgUpdateAirdropParamsResponseAmino;
}
export interface MsgUpdateAirdropParamsResponseSDKType {}
export interface MsgClaimRewardProgram {
  claimAddress: string;
}
export interface MsgClaimRewardProgramProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimRewardProgram";
  value: Uint8Array;
}
export interface MsgClaimRewardProgramAmino {
  claim_address?: string;
}
export interface MsgClaimRewardProgramAminoMsg {
  type: "commitment/MsgClaimRewardProgram";
  value: MsgClaimRewardProgramAmino;
}
export interface MsgClaimRewardProgramSDKType {
  claim_address: string;
}
export interface MsgClaimRewardProgramResponse {
  edenAmount: string;
}
export interface MsgClaimRewardProgramResponseProtoMsg {
  typeUrl: "/elys.commitment.MsgClaimRewardProgramResponse";
  value: Uint8Array;
}
export interface MsgClaimRewardProgramResponseAmino {
  eden_amount?: string;
}
export interface MsgClaimRewardProgramResponseAminoMsg {
  type: "/elys.commitment.MsgClaimRewardProgramResponse";
  value: MsgClaimRewardProgramResponseAmino;
}
export interface MsgClaimRewardProgramResponseSDKType {
  eden_amount: string;
}
function createBaseMsgCommitClaimedRewards(): MsgCommitClaimedRewards {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgCommitClaimedRewards = {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
  aminoType: "commitment/MsgCommitClaimedRewards",
  is(o: any): o is MsgCommitClaimedRewards {
    return o && (o.$typeUrl === MsgCommitClaimedRewards.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgCommitClaimedRewardsSDKType {
    return o && (o.$typeUrl === MsgCommitClaimedRewards.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgCommitClaimedRewardsAmino {
    return o && (o.$typeUrl === MsgCommitClaimedRewards.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: MsgCommitClaimedRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitClaimedRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitClaimedRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCommitClaimedRewards {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgCommitClaimedRewards): JsonSafe<MsgCommitClaimedRewards> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgCommitClaimedRewards>): MsgCommitClaimedRewards {
    const message = createBaseMsgCommitClaimedRewards();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCommitClaimedRewardsAmino): MsgCommitClaimedRewards {
    const message = createBaseMsgCommitClaimedRewards();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgCommitClaimedRewards): MsgCommitClaimedRewardsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCommitClaimedRewardsAminoMsg): MsgCommitClaimedRewards {
    return MsgCommitClaimedRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCommitClaimedRewards): MsgCommitClaimedRewardsAminoMsg {
    return {
      type: "commitment/MsgCommitClaimedRewards",
      value: MsgCommitClaimedRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCommitClaimedRewardsProtoMsg): MsgCommitClaimedRewards {
    return MsgCommitClaimedRewards.decode(message.value);
  },
  toProto(message: MsgCommitClaimedRewards): Uint8Array {
    return MsgCommitClaimedRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitClaimedRewards): MsgCommitClaimedRewardsProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitClaimedRewards",
      value: MsgCommitClaimedRewards.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCommitClaimedRewards.typeUrl, MsgCommitClaimedRewards);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCommitClaimedRewards.aminoType, MsgCommitClaimedRewards.typeUrl);
function createBaseMsgCommitClaimedRewardsResponse(): MsgCommitClaimedRewardsResponse {
  return {};
}
export const MsgCommitClaimedRewardsResponse = {
  typeUrl: "/elys.commitment.MsgCommitClaimedRewardsResponse",
  is(o: any): o is MsgCommitClaimedRewardsResponse {
    return o && o.$typeUrl === MsgCommitClaimedRewardsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCommitClaimedRewardsResponseSDKType {
    return o && o.$typeUrl === MsgCommitClaimedRewardsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCommitClaimedRewardsResponseAmino {
    return o && o.$typeUrl === MsgCommitClaimedRewardsResponse.typeUrl;
  },
  encode(_: MsgCommitClaimedRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommitClaimedRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommitClaimedRewardsResponse();
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
  fromJSON(_: any): MsgCommitClaimedRewardsResponse {
    return {};
  },
  toJSON(_: MsgCommitClaimedRewardsResponse): JsonSafe<MsgCommitClaimedRewardsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCommitClaimedRewardsResponse>): MsgCommitClaimedRewardsResponse {
    const message = createBaseMsgCommitClaimedRewardsResponse();
    return message;
  },
  fromAmino(_: MsgCommitClaimedRewardsResponseAmino): MsgCommitClaimedRewardsResponse {
    const message = createBaseMsgCommitClaimedRewardsResponse();
    return message;
  },
  toAmino(_: MsgCommitClaimedRewardsResponse): MsgCommitClaimedRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCommitClaimedRewardsResponseAminoMsg): MsgCommitClaimedRewardsResponse {
    return MsgCommitClaimedRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCommitClaimedRewardsResponseProtoMsg): MsgCommitClaimedRewardsResponse {
    return MsgCommitClaimedRewardsResponse.decode(message.value);
  },
  toProto(message: MsgCommitClaimedRewardsResponse): Uint8Array {
    return MsgCommitClaimedRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCommitClaimedRewardsResponse): MsgCommitClaimedRewardsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCommitClaimedRewardsResponse",
      value: MsgCommitClaimedRewardsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCommitClaimedRewardsResponse.typeUrl, MsgCommitClaimedRewardsResponse);
function createBaseMsgUncommitTokens(): MsgUncommitTokens {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgUncommitTokens = {
  typeUrl: "/elys.commitment.MsgUncommitTokens",
  aminoType: "commitment/MsgUncommitTokens",
  is(o: any): o is MsgUncommitTokens {
    return o && (o.$typeUrl === MsgUncommitTokens.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgUncommitTokensSDKType {
    return o && (o.$typeUrl === MsgUncommitTokens.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgUncommitTokensAmino {
    return o && (o.$typeUrl === MsgUncommitTokens.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: MsgUncommitTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUncommitTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUncommitTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUncommitTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgUncommitTokens): JsonSafe<MsgUncommitTokens> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgUncommitTokens>): MsgUncommitTokens {
    const message = createBaseMsgUncommitTokens();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgUncommitTokensAmino): MsgUncommitTokens {
    const message = createBaseMsgUncommitTokens();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgUncommitTokens): MsgUncommitTokensAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgUncommitTokensAminoMsg): MsgUncommitTokens {
    return MsgUncommitTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUncommitTokens): MsgUncommitTokensAminoMsg {
    return {
      type: "commitment/MsgUncommitTokens",
      value: MsgUncommitTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUncommitTokensProtoMsg): MsgUncommitTokens {
    return MsgUncommitTokens.decode(message.value);
  },
  toProto(message: MsgUncommitTokens): Uint8Array {
    return MsgUncommitTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgUncommitTokens): MsgUncommitTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUncommitTokens",
      value: MsgUncommitTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUncommitTokens.typeUrl, MsgUncommitTokens);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUncommitTokens.aminoType, MsgUncommitTokens.typeUrl);
function createBaseMsgUncommitTokensResponse(): MsgUncommitTokensResponse {
  return {};
}
export const MsgUncommitTokensResponse = {
  typeUrl: "/elys.commitment.MsgUncommitTokensResponse",
  is(o: any): o is MsgUncommitTokensResponse {
    return o && o.$typeUrl === MsgUncommitTokensResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUncommitTokensResponseSDKType {
    return o && o.$typeUrl === MsgUncommitTokensResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUncommitTokensResponseAmino {
    return o && o.$typeUrl === MsgUncommitTokensResponse.typeUrl;
  },
  encode(_: MsgUncommitTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUncommitTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUncommitTokensResponse();
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
  fromJSON(_: any): MsgUncommitTokensResponse {
    return {};
  },
  toJSON(_: MsgUncommitTokensResponse): JsonSafe<MsgUncommitTokensResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUncommitTokensResponse>): MsgUncommitTokensResponse {
    const message = createBaseMsgUncommitTokensResponse();
    return message;
  },
  fromAmino(_: MsgUncommitTokensResponseAmino): MsgUncommitTokensResponse {
    const message = createBaseMsgUncommitTokensResponse();
    return message;
  },
  toAmino(_: MsgUncommitTokensResponse): MsgUncommitTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUncommitTokensResponseAminoMsg): MsgUncommitTokensResponse {
    return MsgUncommitTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUncommitTokensResponseProtoMsg): MsgUncommitTokensResponse {
    return MsgUncommitTokensResponse.decode(message.value);
  },
  toProto(message: MsgUncommitTokensResponse): Uint8Array {
    return MsgUncommitTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUncommitTokensResponse): MsgUncommitTokensResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUncommitTokensResponse",
      value: MsgUncommitTokensResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUncommitTokensResponse.typeUrl, MsgUncommitTokensResponse);
function createBaseMsgVest(): MsgVest {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgVest = {
  typeUrl: "/elys.commitment.MsgVest",
  aminoType: "commitment/MsgVest",
  is(o: any): o is MsgVest {
    return o && (o.$typeUrl === MsgVest.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgVestSDKType {
    return o && (o.$typeUrl === MsgVest.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgVestAmino {
    return o && (o.$typeUrl === MsgVest.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: MsgVest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgVest): JsonSafe<MsgVest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgVest>): MsgVest {
    const message = createBaseMsgVest();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgVestAmino): MsgVest {
    const message = createBaseMsgVest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgVest): MsgVestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgVestAminoMsg): MsgVest {
    return MsgVest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVest): MsgVestAminoMsg {
    return {
      type: "commitment/MsgVest",
      value: MsgVest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVestProtoMsg): MsgVest {
    return MsgVest.decode(message.value);
  },
  toProto(message: MsgVest): Uint8Array {
    return MsgVest.encode(message).finish();
  },
  toProtoMsg(message: MsgVest): MsgVestProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVest",
      value: MsgVest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVest.typeUrl, MsgVest);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVest.aminoType, MsgVest.typeUrl);
function createBaseMsgVestResponse(): MsgVestResponse {
  return {};
}
export const MsgVestResponse = {
  typeUrl: "/elys.commitment.MsgVestResponse",
  is(o: any): o is MsgVestResponse {
    return o && o.$typeUrl === MsgVestResponse.typeUrl;
  },
  isSDK(o: any): o is MsgVestResponseSDKType {
    return o && o.$typeUrl === MsgVestResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVestResponseAmino {
    return o && o.$typeUrl === MsgVestResponse.typeUrl;
  },
  encode(_: MsgVestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestResponse();
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
  fromJSON(_: any): MsgVestResponse {
    return {};
  },
  toJSON(_: MsgVestResponse): JsonSafe<MsgVestResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVestResponse>): MsgVestResponse {
    const message = createBaseMsgVestResponse();
    return message;
  },
  fromAmino(_: MsgVestResponseAmino): MsgVestResponse {
    const message = createBaseMsgVestResponse();
    return message;
  },
  toAmino(_: MsgVestResponse): MsgVestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVestResponseAminoMsg): MsgVestResponse {
    return MsgVestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestResponseProtoMsg): MsgVestResponse {
    return MsgVestResponse.decode(message.value);
  },
  toProto(message: MsgVestResponse): Uint8Array {
    return MsgVestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVestResponse): MsgVestResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestResponse",
      value: MsgVestResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVestResponse.typeUrl, MsgVestResponse);
function createBaseMsgCancelVest(): MsgCancelVest {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgCancelVest = {
  typeUrl: "/elys.commitment.MsgCancelVest",
  aminoType: "commitment/MsgCancelVest",
  is(o: any): o is MsgCancelVest {
    return o && (o.$typeUrl === MsgCancelVest.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgCancelVestSDKType {
    return o && (o.$typeUrl === MsgCancelVest.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgCancelVestAmino {
    return o && (o.$typeUrl === MsgCancelVest.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: MsgCancelVest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelVest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelVest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelVest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgCancelVest): JsonSafe<MsgCancelVest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelVest>): MsgCancelVest {
    const message = createBaseMsgCancelVest();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCancelVestAmino): MsgCancelVest {
    const message = createBaseMsgCancelVest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgCancelVest): MsgCancelVestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCancelVestAminoMsg): MsgCancelVest {
    return MsgCancelVest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelVest): MsgCancelVestAminoMsg {
    return {
      type: "commitment/MsgCancelVest",
      value: MsgCancelVest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelVestProtoMsg): MsgCancelVest {
    return MsgCancelVest.decode(message.value);
  },
  toProto(message: MsgCancelVest): Uint8Array {
    return MsgCancelVest.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelVest): MsgCancelVestProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCancelVest",
      value: MsgCancelVest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelVest.typeUrl, MsgCancelVest);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelVest.aminoType, MsgCancelVest.typeUrl);
function createBaseMsgCancelVestResponse(): MsgCancelVestResponse {
  return {};
}
export const MsgCancelVestResponse = {
  typeUrl: "/elys.commitment.MsgCancelVestResponse",
  is(o: any): o is MsgCancelVestResponse {
    return o && o.$typeUrl === MsgCancelVestResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelVestResponseSDKType {
    return o && o.$typeUrl === MsgCancelVestResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelVestResponseAmino {
    return o && o.$typeUrl === MsgCancelVestResponse.typeUrl;
  },
  encode(_: MsgCancelVestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelVestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelVestResponse();
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
  fromJSON(_: any): MsgCancelVestResponse {
    return {};
  },
  toJSON(_: MsgCancelVestResponse): JsonSafe<MsgCancelVestResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelVestResponse>): MsgCancelVestResponse {
    const message = createBaseMsgCancelVestResponse();
    return message;
  },
  fromAmino(_: MsgCancelVestResponseAmino): MsgCancelVestResponse {
    const message = createBaseMsgCancelVestResponse();
    return message;
  },
  toAmino(_: MsgCancelVestResponse): MsgCancelVestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelVestResponseAminoMsg): MsgCancelVestResponse {
    return MsgCancelVestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelVestResponseProtoMsg): MsgCancelVestResponse {
    return MsgCancelVestResponse.decode(message.value);
  },
  toProto(message: MsgCancelVestResponse): Uint8Array {
    return MsgCancelVestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelVestResponse): MsgCancelVestResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgCancelVestResponse",
      value: MsgCancelVestResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelVestResponse.typeUrl, MsgCancelVestResponse);
function createBaseMsgClaimVesting(): MsgClaimVesting {
  return {
    sender: ""
  };
}
export const MsgClaimVesting = {
  typeUrl: "/elys.commitment.MsgClaimVesting",
  aminoType: "commitment/MsgClaimVesting",
  is(o: any): o is MsgClaimVesting {
    return o && (o.$typeUrl === MsgClaimVesting.typeUrl || typeof o.sender === "string");
  },
  isSDK(o: any): o is MsgClaimVestingSDKType {
    return o && (o.$typeUrl === MsgClaimVesting.typeUrl || typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgClaimVestingAmino {
    return o && (o.$typeUrl === MsgClaimVesting.typeUrl || typeof o.sender === "string");
  },
  encode(message: MsgClaimVesting, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimVesting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimVesting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimVesting {
    return {
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  toJSON(message: MsgClaimVesting): JsonSafe<MsgClaimVesting> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimVesting>): MsgClaimVesting {
    const message = createBaseMsgClaimVesting();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgClaimVestingAmino): MsgClaimVesting {
    const message = createBaseMsgClaimVesting();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgClaimVesting): MsgClaimVestingAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgClaimVestingAminoMsg): MsgClaimVesting {
    return MsgClaimVesting.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimVesting): MsgClaimVestingAminoMsg {
    return {
      type: "commitment/MsgClaimVesting",
      value: MsgClaimVesting.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimVestingProtoMsg): MsgClaimVesting {
    return MsgClaimVesting.decode(message.value);
  },
  toProto(message: MsgClaimVesting): Uint8Array {
    return MsgClaimVesting.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimVesting): MsgClaimVestingProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimVesting",
      value: MsgClaimVesting.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimVesting.typeUrl, MsgClaimVesting);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimVesting.aminoType, MsgClaimVesting.typeUrl);
function createBaseMsgClaimVestingResponse(): MsgClaimVestingResponse {
  return {};
}
export const MsgClaimVestingResponse = {
  typeUrl: "/elys.commitment.MsgClaimVestingResponse",
  is(o: any): o is MsgClaimVestingResponse {
    return o && o.$typeUrl === MsgClaimVestingResponse.typeUrl;
  },
  isSDK(o: any): o is MsgClaimVestingResponseSDKType {
    return o && o.$typeUrl === MsgClaimVestingResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimVestingResponseAmino {
    return o && o.$typeUrl === MsgClaimVestingResponse.typeUrl;
  },
  encode(_: MsgClaimVestingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimVestingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimVestingResponse();
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
  fromJSON(_: any): MsgClaimVestingResponse {
    return {};
  },
  toJSON(_: MsgClaimVestingResponse): JsonSafe<MsgClaimVestingResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgClaimVestingResponse>): MsgClaimVestingResponse {
    const message = createBaseMsgClaimVestingResponse();
    return message;
  },
  fromAmino(_: MsgClaimVestingResponseAmino): MsgClaimVestingResponse {
    const message = createBaseMsgClaimVestingResponse();
    return message;
  },
  toAmino(_: MsgClaimVestingResponse): MsgClaimVestingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimVestingResponseAminoMsg): MsgClaimVestingResponse {
    return MsgClaimVestingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimVestingResponseProtoMsg): MsgClaimVestingResponse {
    return MsgClaimVestingResponse.decode(message.value);
  },
  toProto(message: MsgClaimVestingResponse): Uint8Array {
    return MsgClaimVestingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimVestingResponse): MsgClaimVestingResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimVestingResponse",
      value: MsgClaimVestingResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimVestingResponse.typeUrl, MsgClaimVestingResponse);
function createBaseMsgVestNow(): MsgVestNow {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgVestNow = {
  typeUrl: "/elys.commitment.MsgVestNow",
  aminoType: "commitment/MsgVestNow",
  is(o: any): o is MsgVestNow {
    return o && (o.$typeUrl === MsgVestNow.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgVestNowSDKType {
    return o && (o.$typeUrl === MsgVestNow.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgVestNowAmino {
    return o && (o.$typeUrl === MsgVestNow.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: MsgVestNow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestNow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestNow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVestNow {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgVestNow): JsonSafe<MsgVestNow> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgVestNow>): MsgVestNow {
    const message = createBaseMsgVestNow();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgVestNowAmino): MsgVestNow {
    const message = createBaseMsgVestNow();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgVestNow): MsgVestNowAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgVestNowAminoMsg): MsgVestNow {
    return MsgVestNow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVestNow): MsgVestNowAminoMsg {
    return {
      type: "commitment/MsgVestNow",
      value: MsgVestNow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVestNowProtoMsg): MsgVestNow {
    return MsgVestNow.decode(message.value);
  },
  toProto(message: MsgVestNow): Uint8Array {
    return MsgVestNow.encode(message).finish();
  },
  toProtoMsg(message: MsgVestNow): MsgVestNowProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestNow",
      value: MsgVestNow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVestNow.typeUrl, MsgVestNow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVestNow.aminoType, MsgVestNow.typeUrl);
function createBaseMsgVestNowResponse(): MsgVestNowResponse {
  return {};
}
export const MsgVestNowResponse = {
  typeUrl: "/elys.commitment.MsgVestNowResponse",
  is(o: any): o is MsgVestNowResponse {
    return o && o.$typeUrl === MsgVestNowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgVestNowResponseSDKType {
    return o && o.$typeUrl === MsgVestNowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVestNowResponseAmino {
    return o && o.$typeUrl === MsgVestNowResponse.typeUrl;
  },
  encode(_: MsgVestNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestNowResponse();
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
  fromJSON(_: any): MsgVestNowResponse {
    return {};
  },
  toJSON(_: MsgVestNowResponse): JsonSafe<MsgVestNowResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVestNowResponse>): MsgVestNowResponse {
    const message = createBaseMsgVestNowResponse();
    return message;
  },
  fromAmino(_: MsgVestNowResponseAmino): MsgVestNowResponse {
    const message = createBaseMsgVestNowResponse();
    return message;
  },
  toAmino(_: MsgVestNowResponse): MsgVestNowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVestNowResponseAminoMsg): MsgVestNowResponse {
    return MsgVestNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestNowResponseProtoMsg): MsgVestNowResponse {
    return MsgVestNowResponse.decode(message.value);
  },
  toProto(message: MsgVestNowResponse): Uint8Array {
    return MsgVestNowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVestNowResponse): MsgVestNowResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestNowResponse",
      value: MsgVestNowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVestNowResponse.typeUrl, MsgVestNowResponse);
function createBaseMsgUpdateVestingInfo(): MsgUpdateVestingInfo {
  return {
    authority: "",
    baseDenom: "",
    vestingDenom: "",
    numBlocks: BigInt(0),
    vestNowFactor: BigInt(0),
    numMaxVestings: BigInt(0)
  };
}
export const MsgUpdateVestingInfo = {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
  aminoType: "commitment/MsgUpdateVestingInfo",
  is(o: any): o is MsgUpdateVestingInfo {
    return o && (o.$typeUrl === MsgUpdateVestingInfo.typeUrl || typeof o.authority === "string" && typeof o.baseDenom === "string" && typeof o.vestingDenom === "string" && typeof o.numBlocks === "bigint" && typeof o.vestNowFactor === "bigint" && typeof o.numMaxVestings === "bigint");
  },
  isSDK(o: any): o is MsgUpdateVestingInfoSDKType {
    return o && (o.$typeUrl === MsgUpdateVestingInfo.typeUrl || typeof o.authority === "string" && typeof o.base_denom === "string" && typeof o.vesting_denom === "string" && typeof o.num_blocks === "bigint" && typeof o.vest_now_factor === "bigint" && typeof o.num_max_vestings === "bigint");
  },
  isAmino(o: any): o is MsgUpdateVestingInfoAmino {
    return o && (o.$typeUrl === MsgUpdateVestingInfo.typeUrl || typeof o.authority === "string" && typeof o.base_denom === "string" && typeof o.vesting_denom === "string" && typeof o.num_blocks === "bigint" && typeof o.vest_now_factor === "bigint" && typeof o.num_max_vestings === "bigint");
  },
  encode(message: MsgUpdateVestingInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.baseDenom !== "") {
      writer.uint32(18).string(message.baseDenom);
    }
    if (message.vestingDenom !== "") {
      writer.uint32(26).string(message.vestingDenom);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(32).int64(message.numBlocks);
    }
    if (message.vestNowFactor !== BigInt(0)) {
      writer.uint32(40).int64(message.vestNowFactor);
    }
    if (message.numMaxVestings !== BigInt(0)) {
      writer.uint32(48).int64(message.numMaxVestings);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVestingInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVestingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.baseDenom = reader.string();
          break;
        case 3:
          message.vestingDenom = reader.string();
          break;
        case 4:
          message.numBlocks = reader.int64();
          break;
        case 5:
          message.vestNowFactor = reader.int64();
          break;
        case 6:
          message.numMaxVestings = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateVestingInfo {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      vestingDenom: isSet(object.vestingDenom) ? String(object.vestingDenom) : "",
      numBlocks: isSet(object.numBlocks) ? BigInt(object.numBlocks.toString()) : BigInt(0),
      vestNowFactor: isSet(object.vestNowFactor) ? BigInt(object.vestNowFactor.toString()) : BigInt(0),
      numMaxVestings: isSet(object.numMaxVestings) ? BigInt(object.numMaxVestings.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUpdateVestingInfo): JsonSafe<MsgUpdateVestingInfo> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.vestingDenom !== undefined && (obj.vestingDenom = message.vestingDenom);
    message.numBlocks !== undefined && (obj.numBlocks = (message.numBlocks || BigInt(0)).toString());
    message.vestNowFactor !== undefined && (obj.vestNowFactor = (message.vestNowFactor || BigInt(0)).toString());
    message.numMaxVestings !== undefined && (obj.numMaxVestings = (message.numMaxVestings || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateVestingInfo>): MsgUpdateVestingInfo {
    const message = createBaseMsgUpdateVestingInfo();
    message.authority = object.authority ?? "";
    message.baseDenom = object.baseDenom ?? "";
    message.vestingDenom = object.vestingDenom ?? "";
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.vestNowFactor = object.vestNowFactor !== undefined && object.vestNowFactor !== null ? BigInt(object.vestNowFactor.toString()) : BigInt(0);
    message.numMaxVestings = object.numMaxVestings !== undefined && object.numMaxVestings !== null ? BigInt(object.numMaxVestings.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateVestingInfoAmino): MsgUpdateVestingInfo {
    const message = createBaseMsgUpdateVestingInfo();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    if (object.vesting_denom !== undefined && object.vesting_denom !== null) {
      message.vestingDenom = object.vesting_denom;
    }
    if (object.num_blocks !== undefined && object.num_blocks !== null) {
      message.numBlocks = BigInt(object.num_blocks);
    }
    if (object.vest_now_factor !== undefined && object.vest_now_factor !== null) {
      message.vestNowFactor = BigInt(object.vest_now_factor);
    }
    if (object.num_max_vestings !== undefined && object.num_max_vestings !== null) {
      message.numMaxVestings = BigInt(object.num_max_vestings);
    }
    return message;
  },
  toAmino(message: MsgUpdateVestingInfo): MsgUpdateVestingInfoAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    obj.vesting_denom = message.vestingDenom === "" ? undefined : message.vestingDenom;
    obj.num_blocks = message.numBlocks !== BigInt(0) ? message.numBlocks?.toString() : undefined;
    obj.vest_now_factor = message.vestNowFactor !== BigInt(0) ? message.vestNowFactor?.toString() : undefined;
    obj.num_max_vestings = message.numMaxVestings !== BigInt(0) ? message.numMaxVestings?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVestingInfoAminoMsg): MsgUpdateVestingInfo {
    return MsgUpdateVestingInfo.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateVestingInfo): MsgUpdateVestingInfoAminoMsg {
    return {
      type: "commitment/MsgUpdateVestingInfo",
      value: MsgUpdateVestingInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateVestingInfoProtoMsg): MsgUpdateVestingInfo {
    return MsgUpdateVestingInfo.decode(message.value);
  },
  toProto(message: MsgUpdateVestingInfo): Uint8Array {
    return MsgUpdateVestingInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVestingInfo): MsgUpdateVestingInfoProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateVestingInfo",
      value: MsgUpdateVestingInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateVestingInfo.typeUrl, MsgUpdateVestingInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateVestingInfo.aminoType, MsgUpdateVestingInfo.typeUrl);
function createBaseMsgUpdateVestingInfoResponse(): MsgUpdateVestingInfoResponse {
  return {};
}
export const MsgUpdateVestingInfoResponse = {
  typeUrl: "/elys.commitment.MsgUpdateVestingInfoResponse",
  is(o: any): o is MsgUpdateVestingInfoResponse {
    return o && o.$typeUrl === MsgUpdateVestingInfoResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateVestingInfoResponseSDKType {
    return o && o.$typeUrl === MsgUpdateVestingInfoResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateVestingInfoResponseAmino {
    return o && o.$typeUrl === MsgUpdateVestingInfoResponse.typeUrl;
  },
  encode(_: MsgUpdateVestingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateVestingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateVestingInfoResponse();
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
  fromJSON(_: any): MsgUpdateVestingInfoResponse {
    return {};
  },
  toJSON(_: MsgUpdateVestingInfoResponse): JsonSafe<MsgUpdateVestingInfoResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateVestingInfoResponse>): MsgUpdateVestingInfoResponse {
    const message = createBaseMsgUpdateVestingInfoResponse();
    return message;
  },
  fromAmino(_: MsgUpdateVestingInfoResponseAmino): MsgUpdateVestingInfoResponse {
    const message = createBaseMsgUpdateVestingInfoResponse();
    return message;
  },
  toAmino(_: MsgUpdateVestingInfoResponse): MsgUpdateVestingInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateVestingInfoResponseAminoMsg): MsgUpdateVestingInfoResponse {
    return MsgUpdateVestingInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateVestingInfoResponseProtoMsg): MsgUpdateVestingInfoResponse {
    return MsgUpdateVestingInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateVestingInfoResponse): Uint8Array {
    return MsgUpdateVestingInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateVestingInfoResponse): MsgUpdateVestingInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateVestingInfoResponse",
      value: MsgUpdateVestingInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateVestingInfoResponse.typeUrl, MsgUpdateVestingInfoResponse);
function createBaseMsgUpdateEnableVestNow(): MsgUpdateEnableVestNow {
  return {
    authority: "",
    enableVestNow: false
  };
}
export const MsgUpdateEnableVestNow = {
  typeUrl: "/elys.commitment.MsgUpdateEnableVestNow",
  aminoType: "commitment/MsgUpdateEnableVestNow",
  is(o: any): o is MsgUpdateEnableVestNow {
    return o && (o.$typeUrl === MsgUpdateEnableVestNow.typeUrl || typeof o.authority === "string" && typeof o.enableVestNow === "boolean");
  },
  isSDK(o: any): o is MsgUpdateEnableVestNowSDKType {
    return o && (o.$typeUrl === MsgUpdateEnableVestNow.typeUrl || typeof o.authority === "string" && typeof o.enable_vest_now === "boolean");
  },
  isAmino(o: any): o is MsgUpdateEnableVestNowAmino {
    return o && (o.$typeUrl === MsgUpdateEnableVestNow.typeUrl || typeof o.authority === "string" && typeof o.enable_vest_now === "boolean");
  },
  encode(message: MsgUpdateEnableVestNow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.enableVestNow === true) {
      writer.uint32(16).bool(message.enableVestNow);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEnableVestNow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEnableVestNow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.enableVestNow = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateEnableVestNow {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      enableVestNow: isSet(object.enableVestNow) ? Boolean(object.enableVestNow) : false
    };
  },
  toJSON(message: MsgUpdateEnableVestNow): JsonSafe<MsgUpdateEnableVestNow> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.enableVestNow !== undefined && (obj.enableVestNow = message.enableVestNow);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateEnableVestNow>): MsgUpdateEnableVestNow {
    const message = createBaseMsgUpdateEnableVestNow();
    message.authority = object.authority ?? "";
    message.enableVestNow = object.enableVestNow ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateEnableVestNowAmino): MsgUpdateEnableVestNow {
    const message = createBaseMsgUpdateEnableVestNow();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.enable_vest_now !== undefined && object.enable_vest_now !== null) {
      message.enableVestNow = object.enable_vest_now;
    }
    return message;
  },
  toAmino(message: MsgUpdateEnableVestNow): MsgUpdateEnableVestNowAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.enable_vest_now = message.enableVestNow === false ? undefined : message.enableVestNow;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEnableVestNowAminoMsg): MsgUpdateEnableVestNow {
    return MsgUpdateEnableVestNow.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateEnableVestNow): MsgUpdateEnableVestNowAminoMsg {
    return {
      type: "commitment/MsgUpdateEnableVestNow",
      value: MsgUpdateEnableVestNow.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateEnableVestNowProtoMsg): MsgUpdateEnableVestNow {
    return MsgUpdateEnableVestNow.decode(message.value);
  },
  toProto(message: MsgUpdateEnableVestNow): Uint8Array {
    return MsgUpdateEnableVestNow.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEnableVestNow): MsgUpdateEnableVestNowProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateEnableVestNow",
      value: MsgUpdateEnableVestNow.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateEnableVestNow.typeUrl, MsgUpdateEnableVestNow);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateEnableVestNow.aminoType, MsgUpdateEnableVestNow.typeUrl);
function createBaseMsgUpdateEnableVestNowResponse(): MsgUpdateEnableVestNowResponse {
  return {};
}
export const MsgUpdateEnableVestNowResponse = {
  typeUrl: "/elys.commitment.MsgUpdateEnableVestNowResponse",
  is(o: any): o is MsgUpdateEnableVestNowResponse {
    return o && o.$typeUrl === MsgUpdateEnableVestNowResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateEnableVestNowResponseSDKType {
    return o && o.$typeUrl === MsgUpdateEnableVestNowResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateEnableVestNowResponseAmino {
    return o && o.$typeUrl === MsgUpdateEnableVestNowResponse.typeUrl;
  },
  encode(_: MsgUpdateEnableVestNowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateEnableVestNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateEnableVestNowResponse();
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
  fromJSON(_: any): MsgUpdateEnableVestNowResponse {
    return {};
  },
  toJSON(_: MsgUpdateEnableVestNowResponse): JsonSafe<MsgUpdateEnableVestNowResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateEnableVestNowResponse>): MsgUpdateEnableVestNowResponse {
    const message = createBaseMsgUpdateEnableVestNowResponse();
    return message;
  },
  fromAmino(_: MsgUpdateEnableVestNowResponseAmino): MsgUpdateEnableVestNowResponse {
    const message = createBaseMsgUpdateEnableVestNowResponse();
    return message;
  },
  toAmino(_: MsgUpdateEnableVestNowResponse): MsgUpdateEnableVestNowResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateEnableVestNowResponseAminoMsg): MsgUpdateEnableVestNowResponse {
    return MsgUpdateEnableVestNowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateEnableVestNowResponseProtoMsg): MsgUpdateEnableVestNowResponse {
    return MsgUpdateEnableVestNowResponse.decode(message.value);
  },
  toProto(message: MsgUpdateEnableVestNowResponse): Uint8Array {
    return MsgUpdateEnableVestNowResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateEnableVestNowResponse): MsgUpdateEnableVestNowResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateEnableVestNowResponse",
      value: MsgUpdateEnableVestNowResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateEnableVestNowResponse.typeUrl, MsgUpdateEnableVestNowResponse);
function createBaseMsgVestLiquid(): MsgVestLiquid {
  return {
    creator: "",
    amount: "",
    denom: ""
  };
}
export const MsgVestLiquid = {
  typeUrl: "/elys.commitment.MsgVestLiquid",
  aminoType: "commitment/MsgVestLiquid",
  is(o: any): o is MsgVestLiquid {
    return o && (o.$typeUrl === MsgVestLiquid.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isSDK(o: any): o is MsgVestLiquidSDKType {
    return o && (o.$typeUrl === MsgVestLiquid.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgVestLiquidAmino {
    return o && (o.$typeUrl === MsgVestLiquid.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.denom === "string");
  },
  encode(message: MsgVestLiquid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestLiquid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestLiquid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVestLiquid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: MsgVestLiquid): JsonSafe<MsgVestLiquid> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<MsgVestLiquid>): MsgVestLiquid {
    const message = createBaseMsgVestLiquid();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgVestLiquidAmino): MsgVestLiquid {
    const message = createBaseMsgVestLiquid();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgVestLiquid): MsgVestLiquidAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgVestLiquidAminoMsg): MsgVestLiquid {
    return MsgVestLiquid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVestLiquid): MsgVestLiquidAminoMsg {
    return {
      type: "commitment/MsgVestLiquid",
      value: MsgVestLiquid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVestLiquidProtoMsg): MsgVestLiquid {
    return MsgVestLiquid.decode(message.value);
  },
  toProto(message: MsgVestLiquid): Uint8Array {
    return MsgVestLiquid.encode(message).finish();
  },
  toProtoMsg(message: MsgVestLiquid): MsgVestLiquidProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestLiquid",
      value: MsgVestLiquid.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVestLiquid.typeUrl, MsgVestLiquid);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVestLiquid.aminoType, MsgVestLiquid.typeUrl);
function createBaseMsgVestLiquidResponse(): MsgVestLiquidResponse {
  return {};
}
export const MsgVestLiquidResponse = {
  typeUrl: "/elys.commitment.MsgVestLiquidResponse",
  is(o: any): o is MsgVestLiquidResponse {
    return o && o.$typeUrl === MsgVestLiquidResponse.typeUrl;
  },
  isSDK(o: any): o is MsgVestLiquidResponseSDKType {
    return o && o.$typeUrl === MsgVestLiquidResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVestLiquidResponseAmino {
    return o && o.$typeUrl === MsgVestLiquidResponse.typeUrl;
  },
  encode(_: MsgVestLiquidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVestLiquidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVestLiquidResponse();
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
  fromJSON(_: any): MsgVestLiquidResponse {
    return {};
  },
  toJSON(_: MsgVestLiquidResponse): JsonSafe<MsgVestLiquidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVestLiquidResponse>): MsgVestLiquidResponse {
    const message = createBaseMsgVestLiquidResponse();
    return message;
  },
  fromAmino(_: MsgVestLiquidResponseAmino): MsgVestLiquidResponse {
    const message = createBaseMsgVestLiquidResponse();
    return message;
  },
  toAmino(_: MsgVestLiquidResponse): MsgVestLiquidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVestLiquidResponseAminoMsg): MsgVestLiquidResponse {
    return MsgVestLiquidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVestLiquidResponseProtoMsg): MsgVestLiquidResponse {
    return MsgVestLiquidResponse.decode(message.value);
  },
  toProto(message: MsgVestLiquidResponse): Uint8Array {
    return MsgVestLiquidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVestLiquidResponse): MsgVestLiquidResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgVestLiquidResponse",
      value: MsgVestLiquidResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgVestLiquidResponse.typeUrl, MsgVestLiquidResponse);
function createBaseMsgStake(): MsgStake {
  return {
    creator: "",
    amount: "",
    asset: "",
    validatorAddress: ""
  };
}
export const MsgStake = {
  typeUrl: "/elys.commitment.MsgStake",
  aminoType: "commitment/MsgStake",
  is(o: any): o is MsgStake {
    return o && (o.$typeUrl === MsgStake.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.asset === "string" && typeof o.validatorAddress === "string");
  },
  isSDK(o: any): o is MsgStakeSDKType {
    return o && (o.$typeUrl === MsgStake.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.asset === "string" && typeof o.validator_address === "string");
  },
  isAmino(o: any): o is MsgStakeAmino {
    return o && (o.$typeUrl === MsgStake.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.asset === "string" && typeof o.validator_address === "string");
  },
  encode(message: MsgStake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgStake): JsonSafe<MsgStake> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.asset !== undefined && (obj.asset = message.asset);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgStake>): MsgStake {
    const message = createBaseMsgStake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgStakeAmino): MsgStake {
    const message = createBaseMsgStake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgStake): MsgStakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgStakeAminoMsg): MsgStake {
    return MsgStake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStake): MsgStakeAminoMsg {
    return {
      type: "commitment/MsgStake",
      value: MsgStake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgStakeProtoMsg): MsgStake {
    return MsgStake.decode(message.value);
  },
  toProto(message: MsgStake): Uint8Array {
    return MsgStake.encode(message).finish();
  },
  toProtoMsg(message: MsgStake): MsgStakeProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgStake",
      value: MsgStake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStake.typeUrl, MsgStake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgStake.aminoType, MsgStake.typeUrl);
function createBaseMsgStakeResponse(): MsgStakeResponse {
  return {
    code: BigInt(0),
    result: ""
  };
}
export const MsgStakeResponse = {
  typeUrl: "/elys.commitment.MsgStakeResponse",
  is(o: any): o is MsgStakeResponse {
    return o && (o.$typeUrl === MsgStakeResponse.typeUrl || typeof o.code === "bigint" && typeof o.result === "string");
  },
  isSDK(o: any): o is MsgStakeResponseSDKType {
    return o && (o.$typeUrl === MsgStakeResponse.typeUrl || typeof o.code === "bigint" && typeof o.result === "string");
  },
  isAmino(o: any): o is MsgStakeResponseAmino {
    return o && (o.$typeUrl === MsgStakeResponse.typeUrl || typeof o.code === "bigint" && typeof o.result === "string");
  },
  encode(message: MsgStakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== BigInt(0)) {
      writer.uint32(8).uint64(message.code);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint64();
          break;
        case 2:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStakeResponse {
    return {
      code: isSet(object.code) ? BigInt(object.code.toString()) : BigInt(0),
      result: isSet(object.result) ? String(object.result) : ""
    };
  },
  toJSON(message: MsgStakeResponse): JsonSafe<MsgStakeResponse> {
    const obj: any = {};
    message.code !== undefined && (obj.code = (message.code || BigInt(0)).toString());
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
  fromPartial(object: Partial<MsgStakeResponse>): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    message.code = object.code !== undefined && object.code !== null ? BigInt(object.code.toString()) : BigInt(0);
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: MsgStakeResponseAmino): MsgStakeResponse {
    const message = createBaseMsgStakeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = BigInt(object.code);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgStakeResponse): MsgStakeResponseAmino {
    const obj: any = {};
    obj.code = message.code !== BigInt(0) ? message.code?.toString() : undefined;
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgStakeResponseAminoMsg): MsgStakeResponse {
    return MsgStakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgStakeResponseProtoMsg): MsgStakeResponse {
    return MsgStakeResponse.decode(message.value);
  },
  toProto(message: MsgStakeResponse): Uint8Array {
    return MsgStakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgStakeResponse): MsgStakeResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgStakeResponse",
      value: MsgStakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgStakeResponse.typeUrl, MsgStakeResponse);
function createBaseMsgUnstake(): MsgUnstake {
  return {
    creator: "",
    amount: "",
    asset: "",
    validatorAddress: ""
  };
}
export const MsgUnstake = {
  typeUrl: "/elys.commitment.MsgUnstake",
  aminoType: "commitment/MsgUnstake",
  is(o: any): o is MsgUnstake {
    return o && (o.$typeUrl === MsgUnstake.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.asset === "string" && typeof o.validatorAddress === "string");
  },
  isSDK(o: any): o is MsgUnstakeSDKType {
    return o && (o.$typeUrl === MsgUnstake.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.asset === "string" && typeof o.validator_address === "string");
  },
  isAmino(o: any): o is MsgUnstakeAmino {
    return o && (o.$typeUrl === MsgUnstake.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.asset === "string" && typeof o.validator_address === "string");
  },
  encode(message: MsgUnstake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(34).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstake {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgUnstake): JsonSafe<MsgUnstake> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.asset !== undefined && (obj.asset = message.asset);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstake>): MsgUnstake {
    const message = createBaseMsgUnstake();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeAmino): MsgUnstake {
    const message = createBaseMsgUnstake();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgUnstake): MsgUnstakeAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.asset = message.asset === "" ? undefined : message.asset;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeAminoMsg): MsgUnstake {
    return MsgUnstake.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnstake): MsgUnstakeAminoMsg {
    return {
      type: "commitment/MsgUnstake",
      value: MsgUnstake.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnstakeProtoMsg): MsgUnstake {
    return MsgUnstake.decode(message.value);
  },
  toProto(message: MsgUnstake): Uint8Array {
    return MsgUnstake.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstake): MsgUnstakeProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUnstake",
      value: MsgUnstake.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstake.typeUrl, MsgUnstake);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnstake.aminoType, MsgUnstake.typeUrl);
function createBaseMsgUnstakeResponse(): MsgUnstakeResponse {
  return {
    code: BigInt(0),
    result: ""
  };
}
export const MsgUnstakeResponse = {
  typeUrl: "/elys.commitment.MsgUnstakeResponse",
  is(o: any): o is MsgUnstakeResponse {
    return o && (o.$typeUrl === MsgUnstakeResponse.typeUrl || typeof o.code === "bigint" && typeof o.result === "string");
  },
  isSDK(o: any): o is MsgUnstakeResponseSDKType {
    return o && (o.$typeUrl === MsgUnstakeResponse.typeUrl || typeof o.code === "bigint" && typeof o.result === "string");
  },
  isAmino(o: any): o is MsgUnstakeResponseAmino {
    return o && (o.$typeUrl === MsgUnstakeResponse.typeUrl || typeof o.code === "bigint" && typeof o.result === "string");
  },
  encode(message: MsgUnstakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== BigInt(0)) {
      writer.uint32(8).uint64(message.code);
    }
    if (message.result !== "") {
      writer.uint32(18).string(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnstakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint64();
          break;
        case 2:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnstakeResponse {
    return {
      code: isSet(object.code) ? BigInt(object.code.toString()) : BigInt(0),
      result: isSet(object.result) ? String(object.result) : ""
    };
  },
  toJSON(message: MsgUnstakeResponse): JsonSafe<MsgUnstakeResponse> {
    const obj: any = {};
    message.code !== undefined && (obj.code = (message.code || BigInt(0)).toString());
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },
  fromPartial(object: Partial<MsgUnstakeResponse>): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    message.code = object.code !== undefined && object.code !== null ? BigInt(object.code.toString()) : BigInt(0);
    message.result = object.result ?? "";
    return message;
  },
  fromAmino(object: MsgUnstakeResponseAmino): MsgUnstakeResponse {
    const message = createBaseMsgUnstakeResponse();
    if (object.code !== undefined && object.code !== null) {
      message.code = BigInt(object.code);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgUnstakeResponse): MsgUnstakeResponseAmino {
    const obj: any = {};
    obj.code = message.code !== BigInt(0) ? message.code?.toString() : undefined;
    obj.result = message.result === "" ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgUnstakeResponseAminoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnstakeResponseProtoMsg): MsgUnstakeResponse {
    return MsgUnstakeResponse.decode(message.value);
  },
  toProto(message: MsgUnstakeResponse): Uint8Array {
    return MsgUnstakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnstakeResponse): MsgUnstakeResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUnstakeResponse",
      value: MsgUnstakeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnstakeResponse.typeUrl, MsgUnstakeResponse);
function createBaseMsgClaimAirdrop(): MsgClaimAirdrop {
  return {
    claimAddress: ""
  };
}
export const MsgClaimAirdrop = {
  typeUrl: "/elys.commitment.MsgClaimAirdrop",
  aminoType: "commitment/MsgClaimAirdrop",
  is(o: any): o is MsgClaimAirdrop {
    return o && (o.$typeUrl === MsgClaimAirdrop.typeUrl || typeof o.claimAddress === "string");
  },
  isSDK(o: any): o is MsgClaimAirdropSDKType {
    return o && (o.$typeUrl === MsgClaimAirdrop.typeUrl || typeof o.claim_address === "string");
  },
  isAmino(o: any): o is MsgClaimAirdropAmino {
    return o && (o.$typeUrl === MsgClaimAirdrop.typeUrl || typeof o.claim_address === "string");
  },
  encode(message: MsgClaimAirdrop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimAddress !== "") {
      writer.uint32(10).string(message.claimAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimAirdrop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAirdrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimAirdrop {
    return {
      claimAddress: isSet(object.claimAddress) ? String(object.claimAddress) : ""
    };
  },
  toJSON(message: MsgClaimAirdrop): JsonSafe<MsgClaimAirdrop> {
    const obj: any = {};
    message.claimAddress !== undefined && (obj.claimAddress = message.claimAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimAirdrop>): MsgClaimAirdrop {
    const message = createBaseMsgClaimAirdrop();
    message.claimAddress = object.claimAddress ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAirdropAmino): MsgClaimAirdrop {
    const message = createBaseMsgClaimAirdrop();
    if (object.claim_address !== undefined && object.claim_address !== null) {
      message.claimAddress = object.claim_address;
    }
    return message;
  },
  toAmino(message: MsgClaimAirdrop): MsgClaimAirdropAmino {
    const obj: any = {};
    obj.claim_address = message.claimAddress === "" ? undefined : message.claimAddress;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAirdropAminoMsg): MsgClaimAirdrop {
    return MsgClaimAirdrop.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimAirdrop): MsgClaimAirdropAminoMsg {
    return {
      type: "commitment/MsgClaimAirdrop",
      value: MsgClaimAirdrop.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimAirdropProtoMsg): MsgClaimAirdrop {
    return MsgClaimAirdrop.decode(message.value);
  },
  toProto(message: MsgClaimAirdrop): Uint8Array {
    return MsgClaimAirdrop.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAirdrop): MsgClaimAirdropProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimAirdrop",
      value: MsgClaimAirdrop.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimAirdrop.typeUrl, MsgClaimAirdrop);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimAirdrop.aminoType, MsgClaimAirdrop.typeUrl);
function createBaseMsgClaimAirdropResponse(): MsgClaimAirdropResponse {
  return {
    elysAmount: "",
    edenAmount: ""
  };
}
export const MsgClaimAirdropResponse = {
  typeUrl: "/elys.commitment.MsgClaimAirdropResponse",
  is(o: any): o is MsgClaimAirdropResponse {
    return o && (o.$typeUrl === MsgClaimAirdropResponse.typeUrl || typeof o.elysAmount === "string" && typeof o.edenAmount === "string");
  },
  isSDK(o: any): o is MsgClaimAirdropResponseSDKType {
    return o && (o.$typeUrl === MsgClaimAirdropResponse.typeUrl || typeof o.elys_amount === "string" && typeof o.eden_amount === "string");
  },
  isAmino(o: any): o is MsgClaimAirdropResponseAmino {
    return o && (o.$typeUrl === MsgClaimAirdropResponse.typeUrl || typeof o.elys_amount === "string" && typeof o.eden_amount === "string");
  },
  encode(message: MsgClaimAirdropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.elysAmount !== "") {
      writer.uint32(10).string(message.elysAmount);
    }
    if (message.edenAmount !== "") {
      writer.uint32(18).string(message.edenAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimAirdropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimAirdropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elysAmount = reader.string();
          break;
        case 2:
          message.edenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimAirdropResponse {
    return {
      elysAmount: isSet(object.elysAmount) ? String(object.elysAmount) : "",
      edenAmount: isSet(object.edenAmount) ? String(object.edenAmount) : ""
    };
  },
  toJSON(message: MsgClaimAirdropResponse): JsonSafe<MsgClaimAirdropResponse> {
    const obj: any = {};
    message.elysAmount !== undefined && (obj.elysAmount = message.elysAmount);
    message.edenAmount !== undefined && (obj.edenAmount = message.edenAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimAirdropResponse>): MsgClaimAirdropResponse {
    const message = createBaseMsgClaimAirdropResponse();
    message.elysAmount = object.elysAmount ?? "";
    message.edenAmount = object.edenAmount ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAirdropResponseAmino): MsgClaimAirdropResponse {
    const message = createBaseMsgClaimAirdropResponse();
    if (object.elys_amount !== undefined && object.elys_amount !== null) {
      message.elysAmount = object.elys_amount;
    }
    if (object.eden_amount !== undefined && object.eden_amount !== null) {
      message.edenAmount = object.eden_amount;
    }
    return message;
  },
  toAmino(message: MsgClaimAirdropResponse): MsgClaimAirdropResponseAmino {
    const obj: any = {};
    obj.elys_amount = message.elysAmount === "" ? undefined : message.elysAmount;
    obj.eden_amount = message.edenAmount === "" ? undefined : message.edenAmount;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAirdropResponseAminoMsg): MsgClaimAirdropResponse {
    return MsgClaimAirdropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimAirdropResponseProtoMsg): MsgClaimAirdropResponse {
    return MsgClaimAirdropResponse.decode(message.value);
  },
  toProto(message: MsgClaimAirdropResponse): Uint8Array {
    return MsgClaimAirdropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimAirdropResponse): MsgClaimAirdropResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimAirdropResponse",
      value: MsgClaimAirdropResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimAirdropResponse.typeUrl, MsgClaimAirdropResponse);
function createBaseMsgClaimKol(): MsgClaimKol {
  return {
    claimAddress: "",
    refund: false
  };
}
export const MsgClaimKol = {
  typeUrl: "/elys.commitment.MsgClaimKol",
  aminoType: "commitment/MsgClaimKol",
  is(o: any): o is MsgClaimKol {
    return o && (o.$typeUrl === MsgClaimKol.typeUrl || typeof o.claimAddress === "string" && typeof o.refund === "boolean");
  },
  isSDK(o: any): o is MsgClaimKolSDKType {
    return o && (o.$typeUrl === MsgClaimKol.typeUrl || typeof o.claim_address === "string" && typeof o.refund === "boolean");
  },
  isAmino(o: any): o is MsgClaimKolAmino {
    return o && (o.$typeUrl === MsgClaimKol.typeUrl || typeof o.claim_address === "string" && typeof o.refund === "boolean");
  },
  encode(message: MsgClaimKol, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimAddress !== "") {
      writer.uint32(10).string(message.claimAddress);
    }
    if (message.refund === true) {
      writer.uint32(16).bool(message.refund);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimKol {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimKol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimAddress = reader.string();
          break;
        case 2:
          message.refund = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimKol {
    return {
      claimAddress: isSet(object.claimAddress) ? String(object.claimAddress) : "",
      refund: isSet(object.refund) ? Boolean(object.refund) : false
    };
  },
  toJSON(message: MsgClaimKol): JsonSafe<MsgClaimKol> {
    const obj: any = {};
    message.claimAddress !== undefined && (obj.claimAddress = message.claimAddress);
    message.refund !== undefined && (obj.refund = message.refund);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimKol>): MsgClaimKol {
    const message = createBaseMsgClaimKol();
    message.claimAddress = object.claimAddress ?? "";
    message.refund = object.refund ?? false;
    return message;
  },
  fromAmino(object: MsgClaimKolAmino): MsgClaimKol {
    const message = createBaseMsgClaimKol();
    if (object.claim_address !== undefined && object.claim_address !== null) {
      message.claimAddress = object.claim_address;
    }
    if (object.refund !== undefined && object.refund !== null) {
      message.refund = object.refund;
    }
    return message;
  },
  toAmino(message: MsgClaimKol): MsgClaimKolAmino {
    const obj: any = {};
    obj.claim_address = message.claimAddress === "" ? undefined : message.claimAddress;
    obj.refund = message.refund === false ? undefined : message.refund;
    return obj;
  },
  fromAminoMsg(object: MsgClaimKolAminoMsg): MsgClaimKol {
    return MsgClaimKol.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimKol): MsgClaimKolAminoMsg {
    return {
      type: "commitment/MsgClaimKol",
      value: MsgClaimKol.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimKolProtoMsg): MsgClaimKol {
    return MsgClaimKol.decode(message.value);
  },
  toProto(message: MsgClaimKol): Uint8Array {
    return MsgClaimKol.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimKol): MsgClaimKolProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimKol",
      value: MsgClaimKol.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimKol.typeUrl, MsgClaimKol);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimKol.aminoType, MsgClaimKol.typeUrl);
function createBaseMsgClaimKolResponse(): MsgClaimKolResponse {
  return {
    elysAmount: "",
    vestedElysAmount: ""
  };
}
export const MsgClaimKolResponse = {
  typeUrl: "/elys.commitment.MsgClaimKolResponse",
  is(o: any): o is MsgClaimKolResponse {
    return o && (o.$typeUrl === MsgClaimKolResponse.typeUrl || typeof o.elysAmount === "string" && typeof o.vestedElysAmount === "string");
  },
  isSDK(o: any): o is MsgClaimKolResponseSDKType {
    return o && (o.$typeUrl === MsgClaimKolResponse.typeUrl || typeof o.elys_amount === "string" && typeof o.vested_elys_amount === "string");
  },
  isAmino(o: any): o is MsgClaimKolResponseAmino {
    return o && (o.$typeUrl === MsgClaimKolResponse.typeUrl || typeof o.elys_amount === "string" && typeof o.vested_elys_amount === "string");
  },
  encode(message: MsgClaimKolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.elysAmount !== "") {
      writer.uint32(10).string(message.elysAmount);
    }
    if (message.vestedElysAmount !== "") {
      writer.uint32(18).string(message.vestedElysAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimKolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimKolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elysAmount = reader.string();
          break;
        case 2:
          message.vestedElysAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimKolResponse {
    return {
      elysAmount: isSet(object.elysAmount) ? String(object.elysAmount) : "",
      vestedElysAmount: isSet(object.vestedElysAmount) ? String(object.vestedElysAmount) : ""
    };
  },
  toJSON(message: MsgClaimKolResponse): JsonSafe<MsgClaimKolResponse> {
    const obj: any = {};
    message.elysAmount !== undefined && (obj.elysAmount = message.elysAmount);
    message.vestedElysAmount !== undefined && (obj.vestedElysAmount = message.vestedElysAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimKolResponse>): MsgClaimKolResponse {
    const message = createBaseMsgClaimKolResponse();
    message.elysAmount = object.elysAmount ?? "";
    message.vestedElysAmount = object.vestedElysAmount ?? "";
    return message;
  },
  fromAmino(object: MsgClaimKolResponseAmino): MsgClaimKolResponse {
    const message = createBaseMsgClaimKolResponse();
    if (object.elys_amount !== undefined && object.elys_amount !== null) {
      message.elysAmount = object.elys_amount;
    }
    if (object.vested_elys_amount !== undefined && object.vested_elys_amount !== null) {
      message.vestedElysAmount = object.vested_elys_amount;
    }
    return message;
  },
  toAmino(message: MsgClaimKolResponse): MsgClaimKolResponseAmino {
    const obj: any = {};
    obj.elys_amount = message.elysAmount === "" ? undefined : message.elysAmount;
    obj.vested_elys_amount = message.vestedElysAmount === "" ? undefined : message.vestedElysAmount;
    return obj;
  },
  fromAminoMsg(object: MsgClaimKolResponseAminoMsg): MsgClaimKolResponse {
    return MsgClaimKolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimKolResponseProtoMsg): MsgClaimKolResponse {
    return MsgClaimKolResponse.decode(message.value);
  },
  toProto(message: MsgClaimKolResponse): Uint8Array {
    return MsgClaimKolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimKolResponse): MsgClaimKolResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimKolResponse",
      value: MsgClaimKolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimKolResponse.typeUrl, MsgClaimKolResponse);
function createBaseMsgUpdateAirdropParams(): MsgUpdateAirdropParams {
  return {
    authority: "",
    enableClaim: false,
    startAirdropClaimHeight: BigInt(0),
    endAirdropClaimHeight: BigInt(0),
    startKolClaimHeight: BigInt(0),
    endKolClaimHeight: BigInt(0),
    startRewardProgramClaimHeight: BigInt(0),
    endRewardProgramClaimHeight: BigInt(0)
  };
}
export const MsgUpdateAirdropParams = {
  typeUrl: "/elys.commitment.MsgUpdateAirdropParams",
  aminoType: "commitment/MsgUpdateAirdropParams",
  is(o: any): o is MsgUpdateAirdropParams {
    return o && (o.$typeUrl === MsgUpdateAirdropParams.typeUrl || typeof o.authority === "string" && typeof o.enableClaim === "boolean" && typeof o.startAirdropClaimHeight === "bigint" && typeof o.endAirdropClaimHeight === "bigint" && typeof o.startKolClaimHeight === "bigint" && typeof o.endKolClaimHeight === "bigint" && typeof o.startRewardProgramClaimHeight === "bigint" && typeof o.endRewardProgramClaimHeight === "bigint");
  },
  isSDK(o: any): o is MsgUpdateAirdropParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateAirdropParams.typeUrl || typeof o.authority === "string" && typeof o.enable_claim === "boolean" && typeof o.start_airdrop_claim_height === "bigint" && typeof o.end_airdrop_claim_height === "bigint" && typeof o.start_kol_claim_height === "bigint" && typeof o.end_kol_claim_height === "bigint" && typeof o.start_reward_program_claim_height === "bigint" && typeof o.end_reward_program_claim_height === "bigint");
  },
  isAmino(o: any): o is MsgUpdateAirdropParamsAmino {
    return o && (o.$typeUrl === MsgUpdateAirdropParams.typeUrl || typeof o.authority === "string" && typeof o.enable_claim === "boolean" && typeof o.start_airdrop_claim_height === "bigint" && typeof o.end_airdrop_claim_height === "bigint" && typeof o.start_kol_claim_height === "bigint" && typeof o.end_kol_claim_height === "bigint" && typeof o.start_reward_program_claim_height === "bigint" && typeof o.end_reward_program_claim_height === "bigint");
  },
  encode(message: MsgUpdateAirdropParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.enableClaim === true) {
      writer.uint32(16).bool(message.enableClaim);
    }
    if (message.startAirdropClaimHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.startAirdropClaimHeight);
    }
    if (message.endAirdropClaimHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.endAirdropClaimHeight);
    }
    if (message.startKolClaimHeight !== BigInt(0)) {
      writer.uint32(40).uint64(message.startKolClaimHeight);
    }
    if (message.endKolClaimHeight !== BigInt(0)) {
      writer.uint32(48).uint64(message.endKolClaimHeight);
    }
    if (message.startRewardProgramClaimHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.startRewardProgramClaimHeight);
    }
    if (message.endRewardProgramClaimHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.endRewardProgramClaimHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdropParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdropParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.enableClaim = reader.bool();
          break;
        case 3:
          message.startAirdropClaimHeight = reader.uint64();
          break;
        case 4:
          message.endAirdropClaimHeight = reader.uint64();
          break;
        case 5:
          message.startKolClaimHeight = reader.uint64();
          break;
        case 6:
          message.endKolClaimHeight = reader.uint64();
          break;
        case 7:
          message.startRewardProgramClaimHeight = reader.uint64();
          break;
        case 8:
          message.endRewardProgramClaimHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateAirdropParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      enableClaim: isSet(object.enableClaim) ? Boolean(object.enableClaim) : false,
      startAirdropClaimHeight: isSet(object.startAirdropClaimHeight) ? BigInt(object.startAirdropClaimHeight.toString()) : BigInt(0),
      endAirdropClaimHeight: isSet(object.endAirdropClaimHeight) ? BigInt(object.endAirdropClaimHeight.toString()) : BigInt(0),
      startKolClaimHeight: isSet(object.startKolClaimHeight) ? BigInt(object.startKolClaimHeight.toString()) : BigInt(0),
      endKolClaimHeight: isSet(object.endKolClaimHeight) ? BigInt(object.endKolClaimHeight.toString()) : BigInt(0),
      startRewardProgramClaimHeight: isSet(object.startRewardProgramClaimHeight) ? BigInt(object.startRewardProgramClaimHeight.toString()) : BigInt(0),
      endRewardProgramClaimHeight: isSet(object.endRewardProgramClaimHeight) ? BigInt(object.endRewardProgramClaimHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUpdateAirdropParams): JsonSafe<MsgUpdateAirdropParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.enableClaim !== undefined && (obj.enableClaim = message.enableClaim);
    message.startAirdropClaimHeight !== undefined && (obj.startAirdropClaimHeight = (message.startAirdropClaimHeight || BigInt(0)).toString());
    message.endAirdropClaimHeight !== undefined && (obj.endAirdropClaimHeight = (message.endAirdropClaimHeight || BigInt(0)).toString());
    message.startKolClaimHeight !== undefined && (obj.startKolClaimHeight = (message.startKolClaimHeight || BigInt(0)).toString());
    message.endKolClaimHeight !== undefined && (obj.endKolClaimHeight = (message.endKolClaimHeight || BigInt(0)).toString());
    message.startRewardProgramClaimHeight !== undefined && (obj.startRewardProgramClaimHeight = (message.startRewardProgramClaimHeight || BigInt(0)).toString());
    message.endRewardProgramClaimHeight !== undefined && (obj.endRewardProgramClaimHeight = (message.endRewardProgramClaimHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateAirdropParams>): MsgUpdateAirdropParams {
    const message = createBaseMsgUpdateAirdropParams();
    message.authority = object.authority ?? "";
    message.enableClaim = object.enableClaim ?? false;
    message.startAirdropClaimHeight = object.startAirdropClaimHeight !== undefined && object.startAirdropClaimHeight !== null ? BigInt(object.startAirdropClaimHeight.toString()) : BigInt(0);
    message.endAirdropClaimHeight = object.endAirdropClaimHeight !== undefined && object.endAirdropClaimHeight !== null ? BigInt(object.endAirdropClaimHeight.toString()) : BigInt(0);
    message.startKolClaimHeight = object.startKolClaimHeight !== undefined && object.startKolClaimHeight !== null ? BigInt(object.startKolClaimHeight.toString()) : BigInt(0);
    message.endKolClaimHeight = object.endKolClaimHeight !== undefined && object.endKolClaimHeight !== null ? BigInt(object.endKolClaimHeight.toString()) : BigInt(0);
    message.startRewardProgramClaimHeight = object.startRewardProgramClaimHeight !== undefined && object.startRewardProgramClaimHeight !== null ? BigInt(object.startRewardProgramClaimHeight.toString()) : BigInt(0);
    message.endRewardProgramClaimHeight = object.endRewardProgramClaimHeight !== undefined && object.endRewardProgramClaimHeight !== null ? BigInt(object.endRewardProgramClaimHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateAirdropParamsAmino): MsgUpdateAirdropParams {
    const message = createBaseMsgUpdateAirdropParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.enable_claim !== undefined && object.enable_claim !== null) {
      message.enableClaim = object.enable_claim;
    }
    if (object.start_airdrop_claim_height !== undefined && object.start_airdrop_claim_height !== null) {
      message.startAirdropClaimHeight = BigInt(object.start_airdrop_claim_height);
    }
    if (object.end_airdrop_claim_height !== undefined && object.end_airdrop_claim_height !== null) {
      message.endAirdropClaimHeight = BigInt(object.end_airdrop_claim_height);
    }
    if (object.start_kol_claim_height !== undefined && object.start_kol_claim_height !== null) {
      message.startKolClaimHeight = BigInt(object.start_kol_claim_height);
    }
    if (object.end_kol_claim_height !== undefined && object.end_kol_claim_height !== null) {
      message.endKolClaimHeight = BigInt(object.end_kol_claim_height);
    }
    if (object.start_reward_program_claim_height !== undefined && object.start_reward_program_claim_height !== null) {
      message.startRewardProgramClaimHeight = BigInt(object.start_reward_program_claim_height);
    }
    if (object.end_reward_program_claim_height !== undefined && object.end_reward_program_claim_height !== null) {
      message.endRewardProgramClaimHeight = BigInt(object.end_reward_program_claim_height);
    }
    return message;
  },
  toAmino(message: MsgUpdateAirdropParams): MsgUpdateAirdropParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.enable_claim = message.enableClaim === false ? undefined : message.enableClaim;
    obj.start_airdrop_claim_height = message.startAirdropClaimHeight !== BigInt(0) ? message.startAirdropClaimHeight?.toString() : undefined;
    obj.end_airdrop_claim_height = message.endAirdropClaimHeight !== BigInt(0) ? message.endAirdropClaimHeight?.toString() : undefined;
    obj.start_kol_claim_height = message.startKolClaimHeight !== BigInt(0) ? message.startKolClaimHeight?.toString() : undefined;
    obj.end_kol_claim_height = message.endKolClaimHeight !== BigInt(0) ? message.endKolClaimHeight?.toString() : undefined;
    obj.start_reward_program_claim_height = message.startRewardProgramClaimHeight !== BigInt(0) ? message.startRewardProgramClaimHeight?.toString() : undefined;
    obj.end_reward_program_claim_height = message.endRewardProgramClaimHeight !== BigInt(0) ? message.endRewardProgramClaimHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAirdropParamsAminoMsg): MsgUpdateAirdropParams {
    return MsgUpdateAirdropParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateAirdropParams): MsgUpdateAirdropParamsAminoMsg {
    return {
      type: "commitment/MsgUpdateAirdropParams",
      value: MsgUpdateAirdropParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateAirdropParamsProtoMsg): MsgUpdateAirdropParams {
    return MsgUpdateAirdropParams.decode(message.value);
  },
  toProto(message: MsgUpdateAirdropParams): Uint8Array {
    return MsgUpdateAirdropParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAirdropParams): MsgUpdateAirdropParamsProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateAirdropParams",
      value: MsgUpdateAirdropParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAirdropParams.typeUrl, MsgUpdateAirdropParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateAirdropParams.aminoType, MsgUpdateAirdropParams.typeUrl);
function createBaseMsgUpdateAirdropParamsResponse(): MsgUpdateAirdropParamsResponse {
  return {};
}
export const MsgUpdateAirdropParamsResponse = {
  typeUrl: "/elys.commitment.MsgUpdateAirdropParamsResponse",
  is(o: any): o is MsgUpdateAirdropParamsResponse {
    return o && o.$typeUrl === MsgUpdateAirdropParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateAirdropParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateAirdropParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateAirdropParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateAirdropParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateAirdropParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAirdropParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAirdropParamsResponse();
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
  fromJSON(_: any): MsgUpdateAirdropParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateAirdropParamsResponse): JsonSafe<MsgUpdateAirdropParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateAirdropParamsResponse>): MsgUpdateAirdropParamsResponse {
    const message = createBaseMsgUpdateAirdropParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateAirdropParamsResponseAmino): MsgUpdateAirdropParamsResponse {
    const message = createBaseMsgUpdateAirdropParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateAirdropParamsResponse): MsgUpdateAirdropParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateAirdropParamsResponseAminoMsg): MsgUpdateAirdropParamsResponse {
    return MsgUpdateAirdropParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateAirdropParamsResponseProtoMsg): MsgUpdateAirdropParamsResponse {
    return MsgUpdateAirdropParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateAirdropParamsResponse): Uint8Array {
    return MsgUpdateAirdropParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateAirdropParamsResponse): MsgUpdateAirdropParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgUpdateAirdropParamsResponse",
      value: MsgUpdateAirdropParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateAirdropParamsResponse.typeUrl, MsgUpdateAirdropParamsResponse);
function createBaseMsgClaimRewardProgram(): MsgClaimRewardProgram {
  return {
    claimAddress: ""
  };
}
export const MsgClaimRewardProgram = {
  typeUrl: "/elys.commitment.MsgClaimRewardProgram",
  aminoType: "commitment/MsgClaimRewardProgram",
  is(o: any): o is MsgClaimRewardProgram {
    return o && (o.$typeUrl === MsgClaimRewardProgram.typeUrl || typeof o.claimAddress === "string");
  },
  isSDK(o: any): o is MsgClaimRewardProgramSDKType {
    return o && (o.$typeUrl === MsgClaimRewardProgram.typeUrl || typeof o.claim_address === "string");
  },
  isAmino(o: any): o is MsgClaimRewardProgramAmino {
    return o && (o.$typeUrl === MsgClaimRewardProgram.typeUrl || typeof o.claim_address === "string");
  },
  encode(message: MsgClaimRewardProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimAddress !== "") {
      writer.uint32(10).string(message.claimAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewardProgram {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardProgram();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimRewardProgram {
    return {
      claimAddress: isSet(object.claimAddress) ? String(object.claimAddress) : ""
    };
  },
  toJSON(message: MsgClaimRewardProgram): JsonSafe<MsgClaimRewardProgram> {
    const obj: any = {};
    message.claimAddress !== undefined && (obj.claimAddress = message.claimAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimRewardProgram>): MsgClaimRewardProgram {
    const message = createBaseMsgClaimRewardProgram();
    message.claimAddress = object.claimAddress ?? "";
    return message;
  },
  fromAmino(object: MsgClaimRewardProgramAmino): MsgClaimRewardProgram {
    const message = createBaseMsgClaimRewardProgram();
    if (object.claim_address !== undefined && object.claim_address !== null) {
      message.claimAddress = object.claim_address;
    }
    return message;
  },
  toAmino(message: MsgClaimRewardProgram): MsgClaimRewardProgramAmino {
    const obj: any = {};
    obj.claim_address = message.claimAddress === "" ? undefined : message.claimAddress;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardProgramAminoMsg): MsgClaimRewardProgram {
    return MsgClaimRewardProgram.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimRewardProgram): MsgClaimRewardProgramAminoMsg {
    return {
      type: "commitment/MsgClaimRewardProgram",
      value: MsgClaimRewardProgram.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimRewardProgramProtoMsg): MsgClaimRewardProgram {
    return MsgClaimRewardProgram.decode(message.value);
  },
  toProto(message: MsgClaimRewardProgram): Uint8Array {
    return MsgClaimRewardProgram.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewardProgram): MsgClaimRewardProgramProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimRewardProgram",
      value: MsgClaimRewardProgram.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimRewardProgram.typeUrl, MsgClaimRewardProgram);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimRewardProgram.aminoType, MsgClaimRewardProgram.typeUrl);
function createBaseMsgClaimRewardProgramResponse(): MsgClaimRewardProgramResponse {
  return {
    edenAmount: ""
  };
}
export const MsgClaimRewardProgramResponse = {
  typeUrl: "/elys.commitment.MsgClaimRewardProgramResponse",
  is(o: any): o is MsgClaimRewardProgramResponse {
    return o && (o.$typeUrl === MsgClaimRewardProgramResponse.typeUrl || typeof o.edenAmount === "string");
  },
  isSDK(o: any): o is MsgClaimRewardProgramResponseSDKType {
    return o && (o.$typeUrl === MsgClaimRewardProgramResponse.typeUrl || typeof o.eden_amount === "string");
  },
  isAmino(o: any): o is MsgClaimRewardProgramResponseAmino {
    return o && (o.$typeUrl === MsgClaimRewardProgramResponse.typeUrl || typeof o.eden_amount === "string");
  },
  encode(message: MsgClaimRewardProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.edenAmount !== "") {
      writer.uint32(10).string(message.edenAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimRewardProgramResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimRewardProgramResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.edenAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClaimRewardProgramResponse {
    return {
      edenAmount: isSet(object.edenAmount) ? String(object.edenAmount) : ""
    };
  },
  toJSON(message: MsgClaimRewardProgramResponse): JsonSafe<MsgClaimRewardProgramResponse> {
    const obj: any = {};
    message.edenAmount !== undefined && (obj.edenAmount = message.edenAmount);
    return obj;
  },
  fromPartial(object: Partial<MsgClaimRewardProgramResponse>): MsgClaimRewardProgramResponse {
    const message = createBaseMsgClaimRewardProgramResponse();
    message.edenAmount = object.edenAmount ?? "";
    return message;
  },
  fromAmino(object: MsgClaimRewardProgramResponseAmino): MsgClaimRewardProgramResponse {
    const message = createBaseMsgClaimRewardProgramResponse();
    if (object.eden_amount !== undefined && object.eden_amount !== null) {
      message.edenAmount = object.eden_amount;
    }
    return message;
  },
  toAmino(message: MsgClaimRewardProgramResponse): MsgClaimRewardProgramResponseAmino {
    const obj: any = {};
    obj.eden_amount = message.edenAmount === "" ? undefined : message.edenAmount;
    return obj;
  },
  fromAminoMsg(object: MsgClaimRewardProgramResponseAminoMsg): MsgClaimRewardProgramResponse {
    return MsgClaimRewardProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimRewardProgramResponseProtoMsg): MsgClaimRewardProgramResponse {
    return MsgClaimRewardProgramResponse.decode(message.value);
  },
  toProto(message: MsgClaimRewardProgramResponse): Uint8Array {
    return MsgClaimRewardProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimRewardProgramResponse): MsgClaimRewardProgramResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.MsgClaimRewardProgramResponse",
      value: MsgClaimRewardProgramResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimRewardProgramResponse.typeUrl, MsgClaimRewardProgramResponse);