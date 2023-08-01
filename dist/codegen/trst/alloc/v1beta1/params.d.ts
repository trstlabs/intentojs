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
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightedAddress;
    fromPartial(object: DeepPartial<WeightedAddress>): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistributionProportions;
    fromPartial(object: DeepPartial<DistributionProportions>): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
