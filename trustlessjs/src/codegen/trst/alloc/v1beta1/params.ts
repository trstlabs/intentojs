import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/trst.alloc.v1beta1.WeightedAddress";
  value: Uint8Array;
}
export interface WeightedAddressAmino {
  address?: string;
  weight?: string;
}
export interface WeightedAddressAminoMsg {
  type: "/trst.alloc.v1beta1.WeightedAddress";
  value: WeightedAddressAmino;
}
export interface WeightedAddressSDKType {
  address: string;
  weight: string;
}
export interface DistributionProportions {
  staking: string;
  trustlessContractIncentives: string;
  relayerIncentives: string;
  /**
   * string item_incentives = 3 [
   * (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
   * (gogoproto.moretags) = "yaml:\"item_incentives\"",
   * (gogoproto.nullable) = false
   * ];
   */
  contributorRewards: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is
   * to be allocated to the community pool.
   */
  communityPool: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/trst.alloc.v1beta1.DistributionProportions";
  value: Uint8Array;
}
export interface DistributionProportionsAmino {
  staking?: string;
  trustless_contract_incentives?: string;
  relayer_incentives?: string;
  /**
   * string item_incentives = 3 [
   * (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec",
   * (gogoproto.moretags) = "yaml:\"item_incentives\"",
   * (gogoproto.nullable) = false
   * ];
   */
  contributor_rewards?: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is
   * to be allocated to the community pool.
   */
  community_pool?: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/trst.alloc.v1beta1.DistributionProportions";
  value: DistributionProportionsAmino;
}
export interface DistributionProportionsSDKType {
  staking: string;
  trustless_contract_incentives: string;
  relayer_incentives: string;
  contributor_rewards: string;
  community_pool: string;
}
export interface Params {
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions: DistributionProportions;
  /** address to receive developer rewards */
  weightedContributorRewardsReceivers: WeightedAddress[];
}
export interface ParamsProtoMsg {
  typeUrl: "/trst.alloc.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions?: DistributionProportionsAmino;
  /** address to receive developer rewards */
  weighted_contributor_rewards_receivers?: WeightedAddressAmino[];
}
export interface ParamsAminoMsg {
  type: "/trst.alloc.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  distribution_proportions: DistributionProportionsSDKType;
  weighted_contributor_rewards_receivers: WeightedAddressSDKType[];
}
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  typeUrl: "/trst.alloc.v1beta1.WeightedAddress",
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedAddressAmino): WeightedAddress {
    const message = createBaseWeightedAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedAddress): WeightedAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress {
    return WeightedAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress {
    return WeightedAddress.decode(message.value);
  },
  toProto(message: WeightedAddress): Uint8Array {
    return WeightedAddress.encode(message).finish();
  },
  toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg {
    return {
      typeUrl: "/trst.alloc.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish()
    };
  }
};
function createBaseDistributionProportions(): DistributionProportions {
  return {
    staking: "",
    trustlessContractIncentives: "",
    relayerIncentives: "",
    contributorRewards: "",
    communityPool: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/trst.alloc.v1beta1.DistributionProportions",
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
    }
    if (message.trustlessContractIncentives !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.trustlessContractIncentives, 18).atomics);
    }
    if (message.relayerIncentives !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.relayerIncentives, 18).atomics);
    }
    if (message.contributorRewards !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.contributorRewards, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionProportions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.trustlessContractIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.relayerIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.contributorRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.trustlessContractIncentives = object.trustlessContractIncentives ?? "";
    message.relayerIncentives = object.relayerIncentives ?? "";
    message.contributorRewards = object.contributorRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.staking !== undefined && object.staking !== null) {
      message.staking = object.staking;
    }
    if (object.trustless_contract_incentives !== undefined && object.trustless_contract_incentives !== null) {
      message.trustlessContractIncentives = object.trustless_contract_incentives;
    }
    if (object.relayer_incentives !== undefined && object.relayer_incentives !== null) {
      message.relayerIncentives = object.relayer_incentives;
    }
    if (object.contributor_rewards !== undefined && object.contributor_rewards !== null) {
      message.contributorRewards = object.contributor_rewards;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.staking = message.staking;
    obj.trustless_contract_incentives = message.trustlessContractIncentives;
    obj.relayer_incentives = message.relayerIncentives;
    obj.contributor_rewards = message.contributorRewards;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAminoMsg(object: DistributionProportionsAminoMsg): DistributionProportions {
    return DistributionProportions.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProportionsProtoMsg): DistributionProportions {
    return DistributionProportions.decode(message.value);
  },
  toProto(message: DistributionProportions): Uint8Array {
    return DistributionProportions.encode(message).finish();
  },
  toProtoMsg(message: DistributionProportions): DistributionProportionsProtoMsg {
    return {
      typeUrl: "/trst.alloc.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedContributorRewardsReceivers: []
  };
}
export const Params = {
  typeUrl: "/trst.alloc.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.weightedContributorRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distributionProportions = DistributionProportions.decode(reader, reader.uint32());
          break;
        case 2:
          message.weightedContributorRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedContributorRewardsReceivers = object.weightedContributorRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    message.weightedContributorRewardsReceivers = object.weighted_contributor_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : undefined;
    if (message.weightedContributorRewardsReceivers) {
      obj.weighted_contributor_rewards_receivers = message.weightedContributorRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_contributor_rewards_receivers = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/trst.alloc.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};