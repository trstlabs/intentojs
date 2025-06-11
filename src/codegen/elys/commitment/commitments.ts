import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** GenesisState defines the commitment module's genesis state. */
export interface Commitments {
  creator: string;
  committedTokens: CommittedTokens[];
  claimed: Coin[];
  vestingTokens: VestingTokens[];
}
export interface CommitmentsProtoMsg {
  typeUrl: "/elys.commitment.Commitments";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsAmino {
  creator?: string;
  committed_tokens?: CommittedTokensAmino[];
  claimed?: CoinAmino[];
  vesting_tokens?: VestingTokensAmino[];
}
export interface CommitmentsAminoMsg {
  type: "/elys.commitment.Commitments";
  value: CommitmentsAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface CommitmentsSDKType {
  creator: string;
  committed_tokens: CommittedTokensSDKType[];
  claimed: CoinSDKType[];
  vesting_tokens: VestingTokensSDKType[];
}
export interface Lockup {
  amount: string;
  unlockTimestamp: bigint;
}
export interface LockupProtoMsg {
  typeUrl: "/elys.commitment.Lockup";
  value: Uint8Array;
}
export interface LockupAmino {
  amount?: string;
  unlock_timestamp?: string;
}
export interface LockupAminoMsg {
  type: "/elys.commitment.Lockup";
  value: LockupAmino;
}
export interface LockupSDKType {
  amount: string;
  unlock_timestamp: bigint;
}
export interface CommittedTokens {
  denom: string;
  amount: string;
  lockups: Lockup[];
}
export interface CommittedTokensProtoMsg {
  typeUrl: "/elys.commitment.CommittedTokens";
  value: Uint8Array;
}
export interface CommittedTokensAmino {
  denom?: string;
  amount?: string;
  lockups?: LockupAmino[];
}
export interface CommittedTokensAminoMsg {
  type: "/elys.commitment.CommittedTokens";
  value: CommittedTokensAmino;
}
export interface CommittedTokensSDKType {
  denom: string;
  amount: string;
  lockups: LockupSDKType[];
}
export interface VestingTokens {
  denom: string;
  totalAmount: string;
  claimedAmount: string;
  numBlocks: bigint;
  startBlock: bigint;
  vestStartedTimestamp: bigint;
}
export interface VestingTokensProtoMsg {
  typeUrl: "/elys.commitment.VestingTokens";
  value: Uint8Array;
}
export interface VestingTokensAmino {
  denom?: string;
  total_amount?: string;
  claimed_amount?: string;
  num_blocks?: string;
  start_block?: string;
  vest_started_timestamp?: string;
}
export interface VestingTokensAminoMsg {
  type: "/elys.commitment.VestingTokens";
  value: VestingTokensAmino;
}
export interface VestingTokensSDKType {
  denom: string;
  total_amount: string;
  claimed_amount: string;
  num_blocks: bigint;
  start_block: bigint;
  vest_started_timestamp: bigint;
}
export interface TotalSupply {
  totalEdenSupply: string;
  totalEdenbSupply: string;
  totalEdenVested: string;
}
export interface TotalSupplyProtoMsg {
  typeUrl: "/elys.commitment.TotalSupply";
  value: Uint8Array;
}
export interface TotalSupplyAmino {
  total_eden_supply?: string;
  total_edenb_supply?: string;
  total_eden_vested?: string;
}
export interface TotalSupplyAminoMsg {
  type: "/elys.commitment.TotalSupply";
  value: TotalSupplyAmino;
}
export interface TotalSupplySDKType {
  total_eden_supply: string;
  total_edenb_supply: string;
  total_eden_vested: string;
}
function createBaseCommitments(): Commitments {
  return {
    creator: "",
    committedTokens: [],
    claimed: [],
    vestingTokens: []
  };
}
export const Commitments = {
  typeUrl: "/elys.commitment.Commitments",
  is(o: any): o is Commitments {
    return o && (o.$typeUrl === Commitments.typeUrl || typeof o.creator === "string" && Array.isArray(o.committedTokens) && (!o.committedTokens.length || CommittedTokens.is(o.committedTokens[0])) && Array.isArray(o.claimed) && (!o.claimed.length || Coin.is(o.claimed[0])) && Array.isArray(o.vestingTokens) && (!o.vestingTokens.length || VestingTokens.is(o.vestingTokens[0])));
  },
  isSDK(o: any): o is CommitmentsSDKType {
    return o && (o.$typeUrl === Commitments.typeUrl || typeof o.creator === "string" && Array.isArray(o.committed_tokens) && (!o.committed_tokens.length || CommittedTokens.isSDK(o.committed_tokens[0])) && Array.isArray(o.claimed) && (!o.claimed.length || Coin.isSDK(o.claimed[0])) && Array.isArray(o.vesting_tokens) && (!o.vesting_tokens.length || VestingTokens.isSDK(o.vesting_tokens[0])));
  },
  isAmino(o: any): o is CommitmentsAmino {
    return o && (o.$typeUrl === Commitments.typeUrl || typeof o.creator === "string" && Array.isArray(o.committed_tokens) && (!o.committed_tokens.length || CommittedTokens.isAmino(o.committed_tokens[0])) && Array.isArray(o.claimed) && (!o.claimed.length || Coin.isAmino(o.claimed[0])) && Array.isArray(o.vesting_tokens) && (!o.vesting_tokens.length || VestingTokens.isAmino(o.vesting_tokens[0])));
  },
  encode(message: Commitments, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.committedTokens) {
      CommittedTokens.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.claimed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.vestingTokens) {
      VestingTokens.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commitments {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.committedTokens.push(CommittedTokens.decode(reader, reader.uint32()));
          break;
        case 3:
          message.claimed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.vestingTokens.push(VestingTokens.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commitments {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      committedTokens: Array.isArray(object?.committedTokens) ? object.committedTokens.map((e: any) => CommittedTokens.fromJSON(e)) : [],
      claimed: Array.isArray(object?.claimed) ? object.claimed.map((e: any) => Coin.fromJSON(e)) : [],
      vestingTokens: Array.isArray(object?.vestingTokens) ? object.vestingTokens.map((e: any) => VestingTokens.fromJSON(e)) : []
    };
  },
  toJSON(message: Commitments): JsonSafe<Commitments> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.committedTokens) {
      obj.committedTokens = message.committedTokens.map(e => e ? CommittedTokens.toJSON(e) : undefined);
    } else {
      obj.committedTokens = [];
    }
    if (message.claimed) {
      obj.claimed = message.claimed.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.claimed = [];
    }
    if (message.vestingTokens) {
      obj.vestingTokens = message.vestingTokens.map(e => e ? VestingTokens.toJSON(e) : undefined);
    } else {
      obj.vestingTokens = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Commitments>): Commitments {
    const message = createBaseCommitments();
    message.creator = object.creator ?? "";
    message.committedTokens = object.committedTokens?.map(e => CommittedTokens.fromPartial(e)) || [];
    message.claimed = object.claimed?.map(e => Coin.fromPartial(e)) || [];
    message.vestingTokens = object.vestingTokens?.map(e => VestingTokens.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitmentsAmino): Commitments {
    const message = createBaseCommitments();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.committedTokens = object.committed_tokens?.map(e => CommittedTokens.fromAmino(e)) || [];
    message.claimed = object.claimed?.map(e => Coin.fromAmino(e)) || [];
    message.vestingTokens = object.vesting_tokens?.map(e => VestingTokens.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Commitments): CommitmentsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.committedTokens) {
      obj.committed_tokens = message.committedTokens.map(e => e ? CommittedTokens.toAmino(e) : undefined);
    } else {
      obj.committed_tokens = message.committedTokens;
    }
    if (message.claimed) {
      obj.claimed = message.claimed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimed = message.claimed;
    }
    if (message.vestingTokens) {
      obj.vesting_tokens = message.vestingTokens.map(e => e ? VestingTokens.toAmino(e) : undefined);
    } else {
      obj.vesting_tokens = message.vestingTokens;
    }
    return obj;
  },
  fromAminoMsg(object: CommitmentsAminoMsg): Commitments {
    return Commitments.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitmentsProtoMsg): Commitments {
    return Commitments.decode(message.value);
  },
  toProto(message: Commitments): Uint8Array {
    return Commitments.encode(message).finish();
  },
  toProtoMsg(message: Commitments): CommitmentsProtoMsg {
    return {
      typeUrl: "/elys.commitment.Commitments",
      value: Commitments.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Commitments.typeUrl, Commitments);
function createBaseLockup(): Lockup {
  return {
    amount: "",
    unlockTimestamp: BigInt(0)
  };
}
export const Lockup = {
  typeUrl: "/elys.commitment.Lockup",
  is(o: any): o is Lockup {
    return o && (o.$typeUrl === Lockup.typeUrl || typeof o.amount === "string" && typeof o.unlockTimestamp === "bigint");
  },
  isSDK(o: any): o is LockupSDKType {
    return o && (o.$typeUrl === Lockup.typeUrl || typeof o.amount === "string" && typeof o.unlock_timestamp === "bigint");
  },
  isAmino(o: any): o is LockupAmino {
    return o && (o.$typeUrl === Lockup.typeUrl || typeof o.amount === "string" && typeof o.unlock_timestamp === "bigint");
  },
  encode(message: Lockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.unlockTimestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.unlockTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Lockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.unlockTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Lockup {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      unlockTimestamp: isSet(object.unlockTimestamp) ? BigInt(object.unlockTimestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: Lockup): JsonSafe<Lockup> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.unlockTimestamp !== undefined && (obj.unlockTimestamp = (message.unlockTimestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Lockup>): Lockup {
    const message = createBaseLockup();
    message.amount = object.amount ?? "";
    message.unlockTimestamp = object.unlockTimestamp !== undefined && object.unlockTimestamp !== null ? BigInt(object.unlockTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LockupAmino): Lockup {
    const message = createBaseLockup();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.unlock_timestamp !== undefined && object.unlock_timestamp !== null) {
      message.unlockTimestamp = BigInt(object.unlock_timestamp);
    }
    return message;
  },
  toAmino(message: Lockup): LockupAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.unlock_timestamp = message.unlockTimestamp !== BigInt(0) ? message.unlockTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LockupAminoMsg): Lockup {
    return Lockup.fromAmino(object.value);
  },
  fromProtoMsg(message: LockupProtoMsg): Lockup {
    return Lockup.decode(message.value);
  },
  toProto(message: Lockup): Uint8Array {
    return Lockup.encode(message).finish();
  },
  toProtoMsg(message: Lockup): LockupProtoMsg {
    return {
      typeUrl: "/elys.commitment.Lockup",
      value: Lockup.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Lockup.typeUrl, Lockup);
function createBaseCommittedTokens(): CommittedTokens {
  return {
    denom: "",
    amount: "",
    lockups: []
  };
}
export const CommittedTokens = {
  typeUrl: "/elys.commitment.CommittedTokens",
  is(o: any): o is CommittedTokens {
    return o && (o.$typeUrl === CommittedTokens.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && Array.isArray(o.lockups) && (!o.lockups.length || Lockup.is(o.lockups[0])));
  },
  isSDK(o: any): o is CommittedTokensSDKType {
    return o && (o.$typeUrl === CommittedTokens.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && Array.isArray(o.lockups) && (!o.lockups.length || Lockup.isSDK(o.lockups[0])));
  },
  isAmino(o: any): o is CommittedTokensAmino {
    return o && (o.$typeUrl === CommittedTokens.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && Array.isArray(o.lockups) && (!o.lockups.length || Lockup.isAmino(o.lockups[0])));
  },
  encode(message: CommittedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    for (const v of message.lockups) {
      Lockup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommittedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommittedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.lockups.push(Lockup.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommittedTokens {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      lockups: Array.isArray(object?.lockups) ? object.lockups.map((e: any) => Lockup.fromJSON(e)) : []
    };
  },
  toJSON(message: CommittedTokens): JsonSafe<CommittedTokens> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.lockups) {
      obj.lockups = message.lockups.map(e => e ? Lockup.toJSON(e) : undefined);
    } else {
      obj.lockups = [];
    }
    return obj;
  },
  fromPartial(object: Partial<CommittedTokens>): CommittedTokens {
    const message = createBaseCommittedTokens();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.lockups = object.lockups?.map(e => Lockup.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommittedTokensAmino): CommittedTokens {
    const message = createBaseCommittedTokens();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    message.lockups = object.lockups?.map(e => Lockup.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommittedTokens): CommittedTokensAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    if (message.lockups) {
      obj.lockups = message.lockups.map(e => e ? Lockup.toAmino(e) : undefined);
    } else {
      obj.lockups = message.lockups;
    }
    return obj;
  },
  fromAminoMsg(object: CommittedTokensAminoMsg): CommittedTokens {
    return CommittedTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: CommittedTokensProtoMsg): CommittedTokens {
    return CommittedTokens.decode(message.value);
  },
  toProto(message: CommittedTokens): Uint8Array {
    return CommittedTokens.encode(message).finish();
  },
  toProtoMsg(message: CommittedTokens): CommittedTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.CommittedTokens",
      value: CommittedTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommittedTokens.typeUrl, CommittedTokens);
function createBaseVestingTokens(): VestingTokens {
  return {
    denom: "",
    totalAmount: "",
    claimedAmount: "",
    numBlocks: BigInt(0),
    startBlock: BigInt(0),
    vestStartedTimestamp: BigInt(0)
  };
}
export const VestingTokens = {
  typeUrl: "/elys.commitment.VestingTokens",
  is(o: any): o is VestingTokens {
    return o && (o.$typeUrl === VestingTokens.typeUrl || typeof o.denom === "string" && typeof o.totalAmount === "string" && typeof o.claimedAmount === "string" && typeof o.numBlocks === "bigint" && typeof o.startBlock === "bigint" && typeof o.vestStartedTimestamp === "bigint");
  },
  isSDK(o: any): o is VestingTokensSDKType {
    return o && (o.$typeUrl === VestingTokens.typeUrl || typeof o.denom === "string" && typeof o.total_amount === "string" && typeof o.claimed_amount === "string" && typeof o.num_blocks === "bigint" && typeof o.start_block === "bigint" && typeof o.vest_started_timestamp === "bigint");
  },
  isAmino(o: any): o is VestingTokensAmino {
    return o && (o.$typeUrl === VestingTokens.typeUrl || typeof o.denom === "string" && typeof o.total_amount === "string" && typeof o.claimed_amount === "string" && typeof o.num_blocks === "bigint" && typeof o.start_block === "bigint" && typeof o.vest_started_timestamp === "bigint");
  },
  encode(message: VestingTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.totalAmount !== "") {
      writer.uint32(18).string(message.totalAmount);
    }
    if (message.claimedAmount !== "") {
      writer.uint32(26).string(message.claimedAmount);
    }
    if (message.numBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.numBlocks);
    }
    if (message.startBlock !== BigInt(0)) {
      writer.uint32(48).int64(message.startBlock);
    }
    if (message.vestStartedTimestamp !== BigInt(0)) {
      writer.uint32(56).int64(message.vestStartedTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VestingTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.totalAmount = reader.string();
          break;
        case 3:
          message.claimedAmount = reader.string();
          break;
        case 5:
          message.numBlocks = reader.int64();
          break;
        case 6:
          message.startBlock = reader.int64();
          break;
        case 7:
          message.vestStartedTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VestingTokens {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      claimedAmount: isSet(object.claimedAmount) ? String(object.claimedAmount) : "",
      numBlocks: isSet(object.numBlocks) ? BigInt(object.numBlocks.toString()) : BigInt(0),
      startBlock: isSet(object.startBlock) ? BigInt(object.startBlock.toString()) : BigInt(0),
      vestStartedTimestamp: isSet(object.vestStartedTimestamp) ? BigInt(object.vestStartedTimestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: VestingTokens): JsonSafe<VestingTokens> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.claimedAmount !== undefined && (obj.claimedAmount = message.claimedAmount);
    message.numBlocks !== undefined && (obj.numBlocks = (message.numBlocks || BigInt(0)).toString());
    message.startBlock !== undefined && (obj.startBlock = (message.startBlock || BigInt(0)).toString());
    message.vestStartedTimestamp !== undefined && (obj.vestStartedTimestamp = (message.vestStartedTimestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<VestingTokens>): VestingTokens {
    const message = createBaseVestingTokens();
    message.denom = object.denom ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.claimedAmount = object.claimedAmount ?? "";
    message.numBlocks = object.numBlocks !== undefined && object.numBlocks !== null ? BigInt(object.numBlocks.toString()) : BigInt(0);
    message.startBlock = object.startBlock !== undefined && object.startBlock !== null ? BigInt(object.startBlock.toString()) : BigInt(0);
    message.vestStartedTimestamp = object.vestStartedTimestamp !== undefined && object.vestStartedTimestamp !== null ? BigInt(object.vestStartedTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingTokensAmino): VestingTokens {
    const message = createBaseVestingTokens();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = object.claimed_amount;
    }
    if (object.num_blocks !== undefined && object.num_blocks !== null) {
      message.numBlocks = BigInt(object.num_blocks);
    }
    if (object.start_block !== undefined && object.start_block !== null) {
      message.startBlock = BigInt(object.start_block);
    }
    if (object.vest_started_timestamp !== undefined && object.vest_started_timestamp !== null) {
      message.vestStartedTimestamp = BigInt(object.vest_started_timestamp);
    }
    return message;
  },
  toAmino(message: VestingTokens): VestingTokensAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.claimed_amount = message.claimedAmount === "" ? undefined : message.claimedAmount;
    obj.num_blocks = message.numBlocks !== BigInt(0) ? message.numBlocks?.toString() : undefined;
    obj.start_block = message.startBlock !== BigInt(0) ? message.startBlock?.toString() : undefined;
    obj.vest_started_timestamp = message.vestStartedTimestamp !== BigInt(0) ? message.vestStartedTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VestingTokensAminoMsg): VestingTokens {
    return VestingTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingTokensProtoMsg): VestingTokens {
    return VestingTokens.decode(message.value);
  },
  toProto(message: VestingTokens): Uint8Array {
    return VestingTokens.encode(message).finish();
  },
  toProtoMsg(message: VestingTokens): VestingTokensProtoMsg {
    return {
      typeUrl: "/elys.commitment.VestingTokens",
      value: VestingTokens.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VestingTokens.typeUrl, VestingTokens);
function createBaseTotalSupply(): TotalSupply {
  return {
    totalEdenSupply: "",
    totalEdenbSupply: "",
    totalEdenVested: ""
  };
}
export const TotalSupply = {
  typeUrl: "/elys.commitment.TotalSupply",
  is(o: any): o is TotalSupply {
    return o && (o.$typeUrl === TotalSupply.typeUrl || typeof o.totalEdenSupply === "string" && typeof o.totalEdenbSupply === "string" && typeof o.totalEdenVested === "string");
  },
  isSDK(o: any): o is TotalSupplySDKType {
    return o && (o.$typeUrl === TotalSupply.typeUrl || typeof o.total_eden_supply === "string" && typeof o.total_edenb_supply === "string" && typeof o.total_eden_vested === "string");
  },
  isAmino(o: any): o is TotalSupplyAmino {
    return o && (o.$typeUrl === TotalSupply.typeUrl || typeof o.total_eden_supply === "string" && typeof o.total_edenb_supply === "string" && typeof o.total_eden_vested === "string");
  },
  encode(message: TotalSupply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalEdenSupply !== "") {
      writer.uint32(10).string(message.totalEdenSupply);
    }
    if (message.totalEdenbSupply !== "") {
      writer.uint32(18).string(message.totalEdenbSupply);
    }
    if (message.totalEdenVested !== "") {
      writer.uint32(26).string(message.totalEdenVested);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalSupply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalEdenSupply = reader.string();
          break;
        case 2:
          message.totalEdenbSupply = reader.string();
          break;
        case 3:
          message.totalEdenVested = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalSupply {
    return {
      totalEdenSupply: isSet(object.totalEdenSupply) ? String(object.totalEdenSupply) : "",
      totalEdenbSupply: isSet(object.totalEdenbSupply) ? String(object.totalEdenbSupply) : "",
      totalEdenVested: isSet(object.totalEdenVested) ? String(object.totalEdenVested) : ""
    };
  },
  toJSON(message: TotalSupply): JsonSafe<TotalSupply> {
    const obj: any = {};
    message.totalEdenSupply !== undefined && (obj.totalEdenSupply = message.totalEdenSupply);
    message.totalEdenbSupply !== undefined && (obj.totalEdenbSupply = message.totalEdenbSupply);
    message.totalEdenVested !== undefined && (obj.totalEdenVested = message.totalEdenVested);
    return obj;
  },
  fromPartial(object: Partial<TotalSupply>): TotalSupply {
    const message = createBaseTotalSupply();
    message.totalEdenSupply = object.totalEdenSupply ?? "";
    message.totalEdenbSupply = object.totalEdenbSupply ?? "";
    message.totalEdenVested = object.totalEdenVested ?? "";
    return message;
  },
  fromAmino(object: TotalSupplyAmino): TotalSupply {
    const message = createBaseTotalSupply();
    if (object.total_eden_supply !== undefined && object.total_eden_supply !== null) {
      message.totalEdenSupply = object.total_eden_supply;
    }
    if (object.total_edenb_supply !== undefined && object.total_edenb_supply !== null) {
      message.totalEdenbSupply = object.total_edenb_supply;
    }
    if (object.total_eden_vested !== undefined && object.total_eden_vested !== null) {
      message.totalEdenVested = object.total_eden_vested;
    }
    return message;
  },
  toAmino(message: TotalSupply): TotalSupplyAmino {
    const obj: any = {};
    obj.total_eden_supply = message.totalEdenSupply === "" ? undefined : message.totalEdenSupply;
    obj.total_edenb_supply = message.totalEdenbSupply === "" ? undefined : message.totalEdenbSupply;
    obj.total_eden_vested = message.totalEdenVested === "" ? undefined : message.totalEdenVested;
    return obj;
  },
  fromAminoMsg(object: TotalSupplyAminoMsg): TotalSupply {
    return TotalSupply.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalSupplyProtoMsg): TotalSupply {
    return TotalSupply.decode(message.value);
  },
  toProto(message: TotalSupply): Uint8Array {
    return TotalSupply.encode(message).finish();
  },
  toProtoMsg(message: TotalSupply): TotalSupplyProtoMsg {
    return {
      typeUrl: "/elys.commitment.TotalSupply",
      value: TotalSupply.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalSupply.typeUrl, TotalSupply);