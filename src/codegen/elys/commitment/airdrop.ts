import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
export interface AtomStaker {
  address: string;
  amount: string;
}
export interface AtomStakerProtoMsg {
  typeUrl: "/elys.commitment.AtomStaker";
  value: Uint8Array;
}
export interface AtomStakerAmino {
  address?: string;
  amount?: string;
}
export interface AtomStakerAminoMsg {
  type: "/elys.commitment.AtomStaker";
  value: AtomStakerAmino;
}
export interface AtomStakerSDKType {
  address: string;
  amount: string;
}
export interface NftHolder {
  address: string;
  amount: string;
}
export interface NftHolderProtoMsg {
  typeUrl: "/elys.commitment.NftHolder";
  value: Uint8Array;
}
export interface NftHolderAmino {
  address?: string;
  amount?: string;
}
export interface NftHolderAminoMsg {
  type: "/elys.commitment.NftHolder";
  value: NftHolderAmino;
}
export interface NftHolderSDKType {
  address: string;
  amount: string;
}
export interface Cadet {
  address: string;
  amount: string;
}
export interface CadetProtoMsg {
  typeUrl: "/elys.commitment.Cadet";
  value: Uint8Array;
}
export interface CadetAmino {
  address?: string;
  amount?: string;
}
export interface CadetAminoMsg {
  type: "/elys.commitment.Cadet";
  value: CadetAmino;
}
export interface CadetSDKType {
  address: string;
  amount: string;
}
export interface Governor {
  address: string;
  amount: string;
}
export interface GovernorProtoMsg {
  typeUrl: "/elys.commitment.Governor";
  value: Uint8Array;
}
export interface GovernorAmino {
  address?: string;
  amount?: string;
}
export interface GovernorAminoMsg {
  type: "/elys.commitment.Governor";
  value: GovernorAmino;
}
export interface GovernorSDKType {
  address: string;
  amount: string;
}
export interface AirdropClaimed {
  address: string;
  claimed: boolean;
}
export interface AirdropClaimedProtoMsg {
  typeUrl: "/elys.commitment.AirdropClaimed";
  value: Uint8Array;
}
export interface AirdropClaimedAmino {
  address?: string;
  claimed?: boolean;
}
export interface AirdropClaimedAminoMsg {
  type: "/elys.commitment.AirdropClaimed";
  value: AirdropClaimedAmino;
}
export interface AirdropClaimedSDKType {
  address: string;
  claimed: boolean;
}
export interface TotalClaimed {
  totalElysClaimed: string;
  totalEdenClaimed: string;
}
export interface TotalClaimedProtoMsg {
  typeUrl: "/elys.commitment.TotalClaimed";
  value: Uint8Array;
}
export interface TotalClaimedAmino {
  total_elys_claimed?: string;
  total_eden_claimed?: string;
}
export interface TotalClaimedAminoMsg {
  type: "/elys.commitment.TotalClaimed";
  value: TotalClaimedAmino;
}
export interface TotalClaimedSDKType {
  total_elys_claimed: string;
  total_eden_claimed: string;
}
export interface KolList {
  address: string;
  amount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface KolListProtoMsg {
  typeUrl: "/elys.commitment.KolList";
  value: Uint8Array;
}
export interface KolListAmino {
  address?: string;
  amount?: string;
  claimed?: boolean;
  refunded?: boolean;
}
export interface KolListAminoMsg {
  type: "/elys.commitment.KolList";
  value: KolListAmino;
}
export interface KolListSDKType {
  address: string;
  amount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface RewardProgram {
  address: string;
  amount: string;
  claimed: boolean;
}
export interface RewardProgramProtoMsg {
  typeUrl: "/elys.commitment.RewardProgram";
  value: Uint8Array;
}
export interface RewardProgramAmino {
  address?: string;
  amount?: string;
  claimed?: boolean;
}
export interface RewardProgramAminoMsg {
  type: "/elys.commitment.RewardProgram";
  value: RewardProgramAmino;
}
export interface RewardProgramSDKType {
  address: string;
  amount: string;
  claimed: boolean;
}
function createBaseAtomStaker(): AtomStaker {
  return {
    address: "",
    amount: ""
  };
}
export const AtomStaker = {
  typeUrl: "/elys.commitment.AtomStaker",
  is(o: any): o is AtomStaker {
    return o && (o.$typeUrl === AtomStaker.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is AtomStakerSDKType {
    return o && (o.$typeUrl === AtomStaker.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is AtomStakerAmino {
    return o && (o.$typeUrl === AtomStaker.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: AtomStaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AtomStaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAtomStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AtomStaker {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: AtomStaker): JsonSafe<AtomStaker> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<AtomStaker>): AtomStaker {
    const message = createBaseAtomStaker();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: AtomStakerAmino): AtomStaker {
    const message = createBaseAtomStaker();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: AtomStaker): AtomStakerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: AtomStakerAminoMsg): AtomStaker {
    return AtomStaker.fromAmino(object.value);
  },
  fromProtoMsg(message: AtomStakerProtoMsg): AtomStaker {
    return AtomStaker.decode(message.value);
  },
  toProto(message: AtomStaker): Uint8Array {
    return AtomStaker.encode(message).finish();
  },
  toProtoMsg(message: AtomStaker): AtomStakerProtoMsg {
    return {
      typeUrl: "/elys.commitment.AtomStaker",
      value: AtomStaker.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AtomStaker.typeUrl, AtomStaker);
function createBaseNftHolder(): NftHolder {
  return {
    address: "",
    amount: ""
  };
}
export const NftHolder = {
  typeUrl: "/elys.commitment.NftHolder",
  is(o: any): o is NftHolder {
    return o && (o.$typeUrl === NftHolder.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is NftHolderSDKType {
    return o && (o.$typeUrl === NftHolder.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is NftHolderAmino {
    return o && (o.$typeUrl === NftHolder.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: NftHolder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NftHolder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNftHolder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NftHolder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: NftHolder): JsonSafe<NftHolder> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<NftHolder>): NftHolder {
    const message = createBaseNftHolder();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: NftHolderAmino): NftHolder {
    const message = createBaseNftHolder();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: NftHolder): NftHolderAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: NftHolderAminoMsg): NftHolder {
    return NftHolder.fromAmino(object.value);
  },
  fromProtoMsg(message: NftHolderProtoMsg): NftHolder {
    return NftHolder.decode(message.value);
  },
  toProto(message: NftHolder): Uint8Array {
    return NftHolder.encode(message).finish();
  },
  toProtoMsg(message: NftHolder): NftHolderProtoMsg {
    return {
      typeUrl: "/elys.commitment.NftHolder",
      value: NftHolder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NftHolder.typeUrl, NftHolder);
function createBaseCadet(): Cadet {
  return {
    address: "",
    amount: ""
  };
}
export const Cadet = {
  typeUrl: "/elys.commitment.Cadet",
  is(o: any): o is Cadet {
    return o && (o.$typeUrl === Cadet.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is CadetSDKType {
    return o && (o.$typeUrl === Cadet.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is CadetAmino {
    return o && (o.$typeUrl === Cadet.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: Cadet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Cadet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCadet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Cadet {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: Cadet): JsonSafe<Cadet> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<Cadet>): Cadet {
    const message = createBaseCadet();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: CadetAmino): Cadet {
    const message = createBaseCadet();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Cadet): CadetAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: CadetAminoMsg): Cadet {
    return Cadet.fromAmino(object.value);
  },
  fromProtoMsg(message: CadetProtoMsg): Cadet {
    return Cadet.decode(message.value);
  },
  toProto(message: Cadet): Uint8Array {
    return Cadet.encode(message).finish();
  },
  toProtoMsg(message: Cadet): CadetProtoMsg {
    return {
      typeUrl: "/elys.commitment.Cadet",
      value: Cadet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Cadet.typeUrl, Cadet);
function createBaseGovernor(): Governor {
  return {
    address: "",
    amount: ""
  };
}
export const Governor = {
  typeUrl: "/elys.commitment.Governor",
  is(o: any): o is Governor {
    return o && (o.$typeUrl === Governor.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isSDK(o: any): o is GovernorSDKType {
    return o && (o.$typeUrl === Governor.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is GovernorAmino {
    return o && (o.$typeUrl === Governor.typeUrl || typeof o.address === "string" && typeof o.amount === "string");
  },
  encode(message: Governor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Governor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Governor {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: Governor): JsonSafe<Governor> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<Governor>): Governor {
    const message = createBaseGovernor();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: GovernorAmino): Governor {
    const message = createBaseGovernor();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Governor): GovernorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: GovernorAminoMsg): Governor {
    return Governor.fromAmino(object.value);
  },
  fromProtoMsg(message: GovernorProtoMsg): Governor {
    return Governor.decode(message.value);
  },
  toProto(message: Governor): Uint8Array {
    return Governor.encode(message).finish();
  },
  toProtoMsg(message: Governor): GovernorProtoMsg {
    return {
      typeUrl: "/elys.commitment.Governor",
      value: Governor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Governor.typeUrl, Governor);
function createBaseAirdropClaimed(): AirdropClaimed {
  return {
    address: "",
    claimed: false
  };
}
export const AirdropClaimed = {
  typeUrl: "/elys.commitment.AirdropClaimed",
  is(o: any): o is AirdropClaimed {
    return o && (o.$typeUrl === AirdropClaimed.typeUrl || typeof o.address === "string" && typeof o.claimed === "boolean");
  },
  isSDK(o: any): o is AirdropClaimedSDKType {
    return o && (o.$typeUrl === AirdropClaimed.typeUrl || typeof o.address === "string" && typeof o.claimed === "boolean");
  },
  isAmino(o: any): o is AirdropClaimedAmino {
    return o && (o.$typeUrl === AirdropClaimed.typeUrl || typeof o.address === "string" && typeof o.claimed === "boolean");
  },
  encode(message: AirdropClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AirdropClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdropClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.claimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AirdropClaimed {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false
    };
  },
  toJSON(message: AirdropClaimed): JsonSafe<AirdropClaimed> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    return obj;
  },
  fromPartial(object: Partial<AirdropClaimed>): AirdropClaimed {
    const message = createBaseAirdropClaimed();
    message.address = object.address ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object: AirdropClaimedAmino): AirdropClaimed {
    const message = createBaseAirdropClaimed();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: AirdropClaimed): AirdropClaimedAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: AirdropClaimedAminoMsg): AirdropClaimed {
    return AirdropClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: AirdropClaimedProtoMsg): AirdropClaimed {
    return AirdropClaimed.decode(message.value);
  },
  toProto(message: AirdropClaimed): Uint8Array {
    return AirdropClaimed.encode(message).finish();
  },
  toProtoMsg(message: AirdropClaimed): AirdropClaimedProtoMsg {
    return {
      typeUrl: "/elys.commitment.AirdropClaimed",
      value: AirdropClaimed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AirdropClaimed.typeUrl, AirdropClaimed);
function createBaseTotalClaimed(): TotalClaimed {
  return {
    totalElysClaimed: "",
    totalEdenClaimed: ""
  };
}
export const TotalClaimed = {
  typeUrl: "/elys.commitment.TotalClaimed",
  is(o: any): o is TotalClaimed {
    return o && (o.$typeUrl === TotalClaimed.typeUrl || typeof o.totalElysClaimed === "string" && typeof o.totalEdenClaimed === "string");
  },
  isSDK(o: any): o is TotalClaimedSDKType {
    return o && (o.$typeUrl === TotalClaimed.typeUrl || typeof o.total_elys_claimed === "string" && typeof o.total_eden_claimed === "string");
  },
  isAmino(o: any): o is TotalClaimedAmino {
    return o && (o.$typeUrl === TotalClaimed.typeUrl || typeof o.total_elys_claimed === "string" && typeof o.total_eden_claimed === "string");
  },
  encode(message: TotalClaimed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalElysClaimed !== "") {
      writer.uint32(10).string(message.totalElysClaimed);
    }
    if (message.totalEdenClaimed !== "") {
      writer.uint32(18).string(message.totalEdenClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalClaimed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalClaimed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalElysClaimed = reader.string();
          break;
        case 2:
          message.totalEdenClaimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalClaimed {
    return {
      totalElysClaimed: isSet(object.totalElysClaimed) ? String(object.totalElysClaimed) : "",
      totalEdenClaimed: isSet(object.totalEdenClaimed) ? String(object.totalEdenClaimed) : ""
    };
  },
  toJSON(message: TotalClaimed): JsonSafe<TotalClaimed> {
    const obj: any = {};
    message.totalElysClaimed !== undefined && (obj.totalElysClaimed = message.totalElysClaimed);
    message.totalEdenClaimed !== undefined && (obj.totalEdenClaimed = message.totalEdenClaimed);
    return obj;
  },
  fromPartial(object: Partial<TotalClaimed>): TotalClaimed {
    const message = createBaseTotalClaimed();
    message.totalElysClaimed = object.totalElysClaimed ?? "";
    message.totalEdenClaimed = object.totalEdenClaimed ?? "";
    return message;
  },
  fromAmino(object: TotalClaimedAmino): TotalClaimed {
    const message = createBaseTotalClaimed();
    if (object.total_elys_claimed !== undefined && object.total_elys_claimed !== null) {
      message.totalElysClaimed = object.total_elys_claimed;
    }
    if (object.total_eden_claimed !== undefined && object.total_eden_claimed !== null) {
      message.totalEdenClaimed = object.total_eden_claimed;
    }
    return message;
  },
  toAmino(message: TotalClaimed): TotalClaimedAmino {
    const obj: any = {};
    obj.total_elys_claimed = message.totalElysClaimed === "" ? undefined : message.totalElysClaimed;
    obj.total_eden_claimed = message.totalEdenClaimed === "" ? undefined : message.totalEdenClaimed;
    return obj;
  },
  fromAminoMsg(object: TotalClaimedAminoMsg): TotalClaimed {
    return TotalClaimed.fromAmino(object.value);
  },
  fromProtoMsg(message: TotalClaimedProtoMsg): TotalClaimed {
    return TotalClaimed.decode(message.value);
  },
  toProto(message: TotalClaimed): Uint8Array {
    return TotalClaimed.encode(message).finish();
  },
  toProtoMsg(message: TotalClaimed): TotalClaimedProtoMsg {
    return {
      typeUrl: "/elys.commitment.TotalClaimed",
      value: TotalClaimed.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TotalClaimed.typeUrl, TotalClaimed);
function createBaseKolList(): KolList {
  return {
    address: "",
    amount: "",
    claimed: false,
    refunded: false
  };
}
export const KolList = {
  typeUrl: "/elys.commitment.KolList",
  is(o: any): o is KolList {
    return o && (o.$typeUrl === KolList.typeUrl || typeof o.address === "string" && typeof o.amount === "string" && typeof o.claimed === "boolean" && typeof o.refunded === "boolean");
  },
  isSDK(o: any): o is KolListSDKType {
    return o && (o.$typeUrl === KolList.typeUrl || typeof o.address === "string" && typeof o.amount === "string" && typeof o.claimed === "boolean" && typeof o.refunded === "boolean");
  },
  isAmino(o: any): o is KolListAmino {
    return o && (o.$typeUrl === KolList.typeUrl || typeof o.address === "string" && typeof o.amount === "string" && typeof o.claimed === "boolean" && typeof o.refunded === "boolean");
  },
  encode(message: KolList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.claimed === true) {
      writer.uint32(24).bool(message.claimed);
    }
    if (message.refunded === true) {
      writer.uint32(32).bool(message.refunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): KolList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKolList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.claimed = reader.bool();
          break;
        case 4:
          message.refunded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): KolList {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false,
      refunded: isSet(object.refunded) ? Boolean(object.refunded) : false
    };
  },
  toJSON(message: KolList): JsonSafe<KolList> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    message.refunded !== undefined && (obj.refunded = message.refunded);
    return obj;
  },
  fromPartial(object: Partial<KolList>): KolList {
    const message = createBaseKolList();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.claimed = object.claimed ?? false;
    message.refunded = object.refunded ?? false;
    return message;
  },
  fromAmino(object: KolListAmino): KolList {
    const message = createBaseKolList();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    return message;
  },
  toAmino(message: KolList): KolListAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    obj.refunded = message.refunded === false ? undefined : message.refunded;
    return obj;
  },
  fromAminoMsg(object: KolListAminoMsg): KolList {
    return KolList.fromAmino(object.value);
  },
  fromProtoMsg(message: KolListProtoMsg): KolList {
    return KolList.decode(message.value);
  },
  toProto(message: KolList): Uint8Array {
    return KolList.encode(message).finish();
  },
  toProtoMsg(message: KolList): KolListProtoMsg {
    return {
      typeUrl: "/elys.commitment.KolList",
      value: KolList.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(KolList.typeUrl, KolList);
function createBaseRewardProgram(): RewardProgram {
  return {
    address: "",
    amount: "",
    claimed: false
  };
}
export const RewardProgram = {
  typeUrl: "/elys.commitment.RewardProgram",
  is(o: any): o is RewardProgram {
    return o && (o.$typeUrl === RewardProgram.typeUrl || typeof o.address === "string" && typeof o.amount === "string" && typeof o.claimed === "boolean");
  },
  isSDK(o: any): o is RewardProgramSDKType {
    return o && (o.$typeUrl === RewardProgram.typeUrl || typeof o.address === "string" && typeof o.amount === "string" && typeof o.claimed === "boolean");
  },
  isAmino(o: any): o is RewardProgramAmino {
    return o && (o.$typeUrl === RewardProgram.typeUrl || typeof o.address === "string" && typeof o.amount === "string" && typeof o.claimed === "boolean");
  },
  encode(message: RewardProgram, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.claimed === true) {
      writer.uint32(24).bool(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardProgram {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardProgram();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.claimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardProgram {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false
    };
  },
  toJSON(message: RewardProgram): JsonSafe<RewardProgram> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    return obj;
  },
  fromPartial(object: Partial<RewardProgram>): RewardProgram {
    const message = createBaseRewardProgram();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object: RewardProgramAmino): RewardProgram {
    const message = createBaseRewardProgram();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: RewardProgram): RewardProgramAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: RewardProgramAminoMsg): RewardProgram {
    return RewardProgram.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardProgramProtoMsg): RewardProgram {
    return RewardProgram.decode(message.value);
  },
  toProto(message: RewardProgram): Uint8Array {
    return RewardProgram.encode(message).finish();
  },
  toProtoMsg(message: RewardProgram): RewardProgramProtoMsg {
    return {
      typeUrl: "/elys.commitment.RewardProgram",
      value: RewardProgram.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RewardProgram.typeUrl, RewardProgram);