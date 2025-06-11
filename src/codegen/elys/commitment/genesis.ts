import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Commitments, CommitmentsAmino, CommitmentsSDKType } from "./commitments";
import { AtomStaker, AtomStakerAmino, AtomStakerSDKType, NftHolder, NftHolderAmino, NftHolderSDKType, Cadet, CadetAmino, CadetSDKType, Governor, GovernorAmino, GovernorSDKType, KolList, KolListAmino, KolListSDKType } from "./airdrop";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisState {
  params: Params;
  commitments: Commitments[];
  atomStakers: AtomStaker[];
  nftHolders: NftHolder[];
  cadets: Cadet[];
  governors: Governor[];
  kolList: KolList[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/elys.commitment.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  commitments?: CommitmentsAmino[];
  atom_stakers?: AtomStakerAmino[];
  nft_holders?: NftHolderAmino[];
  cadets?: CadetAmino[];
  governors?: GovernorAmino[];
  kol_list?: KolListAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/elys.commitment.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the commitment module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  commitments: CommitmentsSDKType[];
  atom_stakers: AtomStakerSDKType[];
  nft_holders: NftHolderSDKType[];
  cadets: CadetSDKType[];
  governors: GovernorSDKType[];
  kol_list: KolListSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    commitments: [],
    atomStakers: [],
    nftHolders: [],
    cadets: [],
    governors: [],
    kolList: []
  };
}
export const GenesisState = {
  typeUrl: "/elys.commitment.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.commitments) && (!o.commitments.length || Commitments.is(o.commitments[0])) && Array.isArray(o.atomStakers) && (!o.atomStakers.length || AtomStaker.is(o.atomStakers[0])) && Array.isArray(o.nftHolders) && (!o.nftHolders.length || NftHolder.is(o.nftHolders[0])) && Array.isArray(o.cadets) && (!o.cadets.length || Cadet.is(o.cadets[0])) && Array.isArray(o.governors) && (!o.governors.length || Governor.is(o.governors[0])) && Array.isArray(o.kolList) && (!o.kolList.length || KolList.is(o.kolList[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.commitments) && (!o.commitments.length || Commitments.isSDK(o.commitments[0])) && Array.isArray(o.atom_stakers) && (!o.atom_stakers.length || AtomStaker.isSDK(o.atom_stakers[0])) && Array.isArray(o.nft_holders) && (!o.nft_holders.length || NftHolder.isSDK(o.nft_holders[0])) && Array.isArray(o.cadets) && (!o.cadets.length || Cadet.isSDK(o.cadets[0])) && Array.isArray(o.governors) && (!o.governors.length || Governor.isSDK(o.governors[0])) && Array.isArray(o.kol_list) && (!o.kol_list.length || KolList.isSDK(o.kol_list[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.commitments) && (!o.commitments.length || Commitments.isAmino(o.commitments[0])) && Array.isArray(o.atom_stakers) && (!o.atom_stakers.length || AtomStaker.isAmino(o.atom_stakers[0])) && Array.isArray(o.nft_holders) && (!o.nft_holders.length || NftHolder.isAmino(o.nft_holders[0])) && Array.isArray(o.cadets) && (!o.cadets.length || Cadet.isAmino(o.cadets[0])) && Array.isArray(o.governors) && (!o.governors.length || Governor.isAmino(o.governors[0])) && Array.isArray(o.kol_list) && (!o.kol_list.length || KolList.isAmino(o.kol_list[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commitments) {
      Commitments.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.atomStakers) {
      AtomStaker.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.nftHolders) {
      NftHolder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cadets) {
      Cadet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.governors) {
      Governor.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.kolList) {
      KolList.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.commitments.push(Commitments.decode(reader, reader.uint32()));
          break;
        case 3:
          message.atomStakers.push(AtomStaker.decode(reader, reader.uint32()));
          break;
        case 4:
          message.nftHolders.push(NftHolder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.cadets.push(Cadet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.governors.push(Governor.decode(reader, reader.uint32()));
          break;
        case 7:
          message.kolList.push(KolList.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => Commitments.fromJSON(e)) : [],
      atomStakers: Array.isArray(object?.atomStakers) ? object.atomStakers.map((e: any) => AtomStaker.fromJSON(e)) : [],
      nftHolders: Array.isArray(object?.nftHolders) ? object.nftHolders.map((e: any) => NftHolder.fromJSON(e)) : [],
      cadets: Array.isArray(object?.cadets) ? object.cadets.map((e: any) => Cadet.fromJSON(e)) : [],
      governors: Array.isArray(object?.governors) ? object.governors.map((e: any) => Governor.fromJSON(e)) : [],
      kolList: Array.isArray(object?.kolList) ? object.kolList.map((e: any) => KolList.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? Commitments.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.atomStakers) {
      obj.atomStakers = message.atomStakers.map(e => e ? AtomStaker.toJSON(e) : undefined);
    } else {
      obj.atomStakers = [];
    }
    if (message.nftHolders) {
      obj.nftHolders = message.nftHolders.map(e => e ? NftHolder.toJSON(e) : undefined);
    } else {
      obj.nftHolders = [];
    }
    if (message.cadets) {
      obj.cadets = message.cadets.map(e => e ? Cadet.toJSON(e) : undefined);
    } else {
      obj.cadets = [];
    }
    if (message.governors) {
      obj.governors = message.governors.map(e => e ? Governor.toJSON(e) : undefined);
    } else {
      obj.governors = [];
    }
    if (message.kolList) {
      obj.kolList = message.kolList.map(e => e ? KolList.toJSON(e) : undefined);
    } else {
      obj.kolList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.commitments = object.commitments?.map(e => Commitments.fromPartial(e)) || [];
    message.atomStakers = object.atomStakers?.map(e => AtomStaker.fromPartial(e)) || [];
    message.nftHolders = object.nftHolders?.map(e => NftHolder.fromPartial(e)) || [];
    message.cadets = object.cadets?.map(e => Cadet.fromPartial(e)) || [];
    message.governors = object.governors?.map(e => Governor.fromPartial(e)) || [];
    message.kolList = object.kolList?.map(e => KolList.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.commitments = object.commitments?.map(e => Commitments.fromAmino(e)) || [];
    message.atomStakers = object.atom_stakers?.map(e => AtomStaker.fromAmino(e)) || [];
    message.nftHolders = object.nft_holders?.map(e => NftHolder.fromAmino(e)) || [];
    message.cadets = object.cadets?.map(e => Cadet.fromAmino(e)) || [];
    message.governors = object.governors?.map(e => Governor.fromAmino(e)) || [];
    message.kolList = object.kol_list?.map(e => KolList.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? Commitments.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.atomStakers) {
      obj.atom_stakers = message.atomStakers.map(e => e ? AtomStaker.toAmino(e) : undefined);
    } else {
      obj.atom_stakers = message.atomStakers;
    }
    if (message.nftHolders) {
      obj.nft_holders = message.nftHolders.map(e => e ? NftHolder.toAmino(e) : undefined);
    } else {
      obj.nft_holders = message.nftHolders;
    }
    if (message.cadets) {
      obj.cadets = message.cadets.map(e => e ? Cadet.toAmino(e) : undefined);
    } else {
      obj.cadets = message.cadets;
    }
    if (message.governors) {
      obj.governors = message.governors.map(e => e ? Governor.toAmino(e) : undefined);
    } else {
      obj.governors = message.governors;
    }
    if (message.kolList) {
      obj.kol_list = message.kolList.map(e => e ? KolList.toAmino(e) : undefined);
    } else {
      obj.kol_list = message.kolList;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/elys.commitment.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);