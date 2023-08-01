import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export interface WeightedAddress {
  address: string;
  weight: string;
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
  encode(message: WeightedAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
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
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress {
    const message = createBaseWeightedAddress();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    return message;
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
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.staking !== "") {
      writer.uint32(10).string(message.staking);
    }
    if (message.trustlessContractIncentives !== "") {
      writer.uint32(18).string(message.trustlessContractIncentives);
    }
    if (message.relayerIncentives !== "") {
      writer.uint32(26).string(message.relayerIncentives);
    }
    if (message.contributorRewards !== "") {
      writer.uint32(34).string(message.contributorRewards);
    }
    if (message.communityPool !== "") {
      writer.uint32(42).string(message.communityPool);
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
          message.staking = reader.string();
          break;
        case 2:
          message.trustlessContractIncentives = reader.string();
          break;
        case 3:
          message.relayerIncentives = reader.string();
          break;
        case 4:
          message.contributorRewards = reader.string();
          break;
        case 5:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.staking = object.staking ?? "";
    message.trustlessContractIncentives = object.trustlessContractIncentives ?? "";
    message.relayerIncentives = object.relayerIncentives ?? "";
    message.contributorRewards = object.contributorRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedContributorRewardsReceivers: []
  };
}
export const Params = {
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedContributorRewardsReceivers = object.weightedContributorRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    return message;
  }
};