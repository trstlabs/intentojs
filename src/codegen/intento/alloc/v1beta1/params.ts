import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** WeightedAddress defines an address with a weight. */
export interface WeightedAddress {
  address: string;
  weight: string;
}
export interface WeightedAddressProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.WeightedAddress";
  value: Uint8Array;
}
/** WeightedAddress defines an address with a weight. */
export interface WeightedAddressAmino {
  address?: string;
  weight: string;
}
export interface WeightedAddressAminoMsg {
  type: "/intento.alloc.v1beta1.WeightedAddress";
  value: WeightedAddressAmino;
}
/** WeightedAddress defines an address with a weight. */
export interface WeightedAddressSDKType {
  address: string;
  weight: string;
}
/** DistributionProportions defines the proportion that each bucket  receives. */
export interface DistributionProportions {
  developerRewards: string;
  communityPool: string;
  relayerIncentives: string;
}
export interface DistributionProportionsProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.DistributionProportions";
  value: Uint8Array;
}
/** DistributionProportions defines the proportion that each bucket  receives. */
export interface DistributionProportionsAmino {
  developer_rewards: string;
  community_pool: string;
  relayer_incentives: string;
}
export interface DistributionProportionsAminoMsg {
  type: "/intento.alloc.v1beta1.DistributionProportions";
  value: DistributionProportionsAmino;
}
/** DistributionProportions defines the proportion that each bucket  receives. */
export interface DistributionProportionsSDKType {
  developer_rewards: string;
  community_pool: string;
  relayer_incentives: string;
}
/** Params defines the parameters for the alloc module. */
export interface Params {
  /** distribution_proportions defines the proportion of the minted denom */
  distributionProportions: DistributionProportions;
  /** addresses to receive developer rewards */
  weightedDeveloperRewardsReceivers: WeightedAddress[];
  /**
   * SupplementAmount is the amount to be supplemented from the pool on top of
   * newly minted coins.
   */
  supplementAmount: Coin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/intento.alloc.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the alloc module. */
export interface ParamsAmino {
  /** distribution_proportions defines the proportion of the minted denom */
  distribution_proportions: DistributionProportionsAmino;
  /** addresses to receive developer rewards */
  weighted_developer_rewards_receivers: WeightedAddressAmino[];
  /**
   * SupplementAmount is the amount to be supplemented from the pool on top of
   * newly minted coins.
   */
  supplement_amount: CoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/intento.alloc.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the alloc module. */
export interface ParamsSDKType {
  distribution_proportions: DistributionProportionsSDKType;
  weighted_developer_rewards_receivers: WeightedAddressSDKType[];
  supplement_amount: CoinSDKType[];
}
function createBaseWeightedAddress(): WeightedAddress {
  return {
    address: "",
    weight: ""
  };
}
export const WeightedAddress = {
  typeUrl: "/intento.alloc.v1beta1.WeightedAddress",
  is(o: any): o is WeightedAddress {
    return o && (o.$typeUrl === WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
  },
  isSDK(o: any): o is WeightedAddressSDKType {
    return o && (o.$typeUrl === WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
  },
  isAmino(o: any): o is WeightedAddressAmino {
    return o && (o.$typeUrl === WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
  },
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
  fromJSON(object: any): WeightedAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: WeightedAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
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
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight ?? "";
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
      typeUrl: "/intento.alloc.v1beta1.WeightedAddress",
      value: WeightedAddress.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(WeightedAddress.typeUrl, WeightedAddress);
function createBaseDistributionProportions(): DistributionProportions {
  return {
    developerRewards: "",
    communityPool: "",
    relayerIncentives: ""
  };
}
export const DistributionProportions = {
  typeUrl: "/intento.alloc.v1beta1.DistributionProportions",
  is(o: any): o is DistributionProportions {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.developerRewards === "string" && typeof o.communityPool === "string" && typeof o.relayerIncentives === "string");
  },
  isSDK(o: any): o is DistributionProportionsSDKType {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.developer_rewards === "string" && typeof o.community_pool === "string" && typeof o.relayer_incentives === "string");
  },
  isAmino(o: any): o is DistributionProportionsAmino {
    return o && (o.$typeUrl === DistributionProportions.typeUrl || typeof o.developer_rewards === "string" && typeof o.community_pool === "string" && typeof o.relayer_incentives === "string");
  },
  encode(message: DistributionProportions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.developerRewards !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.developerRewards, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    if (message.relayerIncentives !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.relayerIncentives, 18).atomics);
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
          message.developerRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.relayerIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionProportions {
    return {
      developerRewards: isSet(object.developerRewards) ? String(object.developerRewards) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : "",
      relayerIncentives: isSet(object.relayerIncentives) ? String(object.relayerIncentives) : ""
    };
  },
  toJSON(message: DistributionProportions): unknown {
    const obj: any = {};
    message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    message.relayerIncentives !== undefined && (obj.relayerIncentives = message.relayerIncentives);
    return obj;
  },
  fromPartial(object: Partial<DistributionProportions>): DistributionProportions {
    const message = createBaseDistributionProportions();
    message.developerRewards = object.developerRewards ?? "";
    message.communityPool = object.communityPool ?? "";
    message.relayerIncentives = object.relayerIncentives ?? "";
    return message;
  },
  fromAmino(object: DistributionProportionsAmino): DistributionProportions {
    const message = createBaseDistributionProportions();
    if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
      message.developerRewards = object.developer_rewards;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    if (object.relayer_incentives !== undefined && object.relayer_incentives !== null) {
      message.relayerIncentives = object.relayer_incentives;
    }
    return message;
  },
  toAmino(message: DistributionProportions): DistributionProportionsAmino {
    const obj: any = {};
    obj.developer_rewards = message.developerRewards ?? "";
    obj.community_pool = message.communityPool ?? "";
    obj.relayer_incentives = message.relayerIncentives ?? "";
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
      typeUrl: "/intento.alloc.v1beta1.DistributionProportions",
      value: DistributionProportions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DistributionProportions.typeUrl, DistributionProportions);
function createBaseParams(): Params {
  return {
    distributionProportions: DistributionProportions.fromPartial({}),
    weightedDeveloperRewardsReceivers: [],
    supplementAmount: []
  };
}
export const Params = {
  typeUrl: "/intento.alloc.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || DistributionProportions.is(o.distributionProportions) && Array.isArray(o.weightedDeveloperRewardsReceivers) && (!o.weightedDeveloperRewardsReceivers.length || WeightedAddress.is(o.weightedDeveloperRewardsReceivers[0])) && Array.isArray(o.supplementAmount) && (!o.supplementAmount.length || Coin.is(o.supplementAmount[0])));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || DistributionProportions.isSDK(o.distribution_proportions) && Array.isArray(o.weighted_developer_rewards_receivers) && (!o.weighted_developer_rewards_receivers.length || WeightedAddress.isSDK(o.weighted_developer_rewards_receivers[0])) && Array.isArray(o.supplement_amount) && (!o.supplement_amount.length || Coin.isSDK(o.supplement_amount[0])));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || DistributionProportions.isAmino(o.distribution_proportions) && Array.isArray(o.weighted_developer_rewards_receivers) && (!o.weighted_developer_rewards_receivers.length || WeightedAddress.isAmino(o.weighted_developer_rewards_receivers[0])) && Array.isArray(o.supplement_amount) && (!o.supplement_amount.length || Coin.isAmino(o.supplement_amount[0])));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distributionProportions !== undefined) {
      DistributionProportions.encode(message.distributionProportions, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.weightedDeveloperRewardsReceivers) {
      WeightedAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supplementAmount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.weightedDeveloperRewardsReceivers.push(WeightedAddress.decode(reader, reader.uint32()));
          break;
        case 4:
          message.supplementAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      distributionProportions: isSet(object.distributionProportions) ? DistributionProportions.fromJSON(object.distributionProportions) : undefined,
      weightedDeveloperRewardsReceivers: Array.isArray(object?.weightedDeveloperRewardsReceivers) ? object.weightedDeveloperRewardsReceivers.map((e: any) => WeightedAddress.fromJSON(e)) : [],
      supplementAmount: Array.isArray(object?.supplementAmount) ? object.supplementAmount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distributionProportions !== undefined && (obj.distributionProportions = message.distributionProportions ? DistributionProportions.toJSON(message.distributionProportions) : undefined);
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toJSON(e) : undefined);
    } else {
      obj.weightedDeveloperRewardsReceivers = [];
    }
    if (message.supplementAmount) {
      obj.supplementAmount = message.supplementAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.supplementAmount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? DistributionProportions.fromPartial(object.distributionProportions) : undefined;
    message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => WeightedAddress.fromPartial(e)) || [];
    message.supplementAmount = object.supplementAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
      message.distributionProportions = DistributionProportions.fromAmino(object.distribution_proportions);
    }
    message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => WeightedAddress.fromAmino(e)) || [];
    message.supplementAmount = object.supplement_amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distribution_proportions = message.distributionProportions ? DistributionProportions.toAmino(message.distributionProportions) : DistributionProportions.toAmino(DistributionProportions.fromPartial({}));
    if (message.weightedDeveloperRewardsReceivers) {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? WeightedAddress.toAmino(e) : undefined);
    } else {
      obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers;
    }
    if (message.supplementAmount) {
      obj.supplement_amount = message.supplementAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supplement_amount = message.supplementAmount;
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
      typeUrl: "/intento.alloc.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);