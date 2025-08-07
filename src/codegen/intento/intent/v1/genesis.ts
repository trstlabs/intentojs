import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FlowInfo, FlowInfoAmino, FlowInfoSDKType } from "./flow";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState - genesis state of x/intent */
export interface GenesisState {
  params: Params;
  interchainAccountAddresses: string[];
  flowInfos: FlowInfo[];
  sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/intento.intent.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/intent */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  interchain_account_addresses?: string[];
  flow_infos?: FlowInfoAmino[];
  sequences?: SequenceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/intento.intent.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/intent */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  interchain_account_addresses: string[];
  flow_infos: FlowInfoSDKType[];
  sequences: SequenceSDKType[];
}
/** Sequence id and value of a counter */
export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  typeUrl: "/intento.intent.v1.Sequence";
  value: Uint8Array;
}
/** Sequence id and value of a counter */
export interface SequenceAmino {
  id_key?: string;
  value?: string;
}
export interface SequenceAminoMsg {
  type: "/intento.intent.v1.Sequence";
  value: SequenceAmino;
}
/** Sequence id and value of a counter */
export interface SequenceSDKType {
  id_key: Uint8Array;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    interchainAccountAddresses: [],
    flowInfos: [],
    sequences: []
  };
}
export const GenesisState = {
  typeUrl: "/intento.intent.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.interchainAccountAddresses) && (!o.interchainAccountAddresses.length || typeof o.interchainAccountAddresses[0] === "string") && Array.isArray(o.flowInfos) && (!o.flowInfos.length || FlowInfo.is(o.flowInfos[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.is(o.sequences[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.interchain_account_addresses) && (!o.interchain_account_addresses.length || typeof o.interchain_account_addresses[0] === "string") && Array.isArray(o.flow_infos) && (!o.flow_infos.length || FlowInfo.isSDK(o.flow_infos[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isSDK(o.sequences[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.interchain_account_addresses) && (!o.interchain_account_addresses.length || typeof o.interchain_account_addresses[0] === "string") && Array.isArray(o.flow_infos) && (!o.flow_infos.length || FlowInfo.isAmino(o.flow_infos[0])) && Array.isArray(o.sequences) && (!o.sequences.length || Sequence.isAmino(o.sequences[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccountAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.flowInfos) {
      FlowInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.interchainAccountAddresses.push(reader.string());
          break;
        case 3:
          message.flowInfos.push(FlowInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
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
      interchainAccountAddresses: Array.isArray(object?.interchainAccountAddresses) ? object.interchainAccountAddresses.map((e: any) => String(e)) : [],
      flowInfos: Array.isArray(object?.flowInfos) ? object.flowInfos.map((e: any) => FlowInfo.fromJSON(e)) : [],
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => Sequence.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.interchainAccountAddresses) {
      obj.interchainAccountAddresses = message.interchainAccountAddresses.map(e => e);
    } else {
      obj.interchainAccountAddresses = [];
    }
    if (message.flowInfos) {
      obj.flowInfos = message.flowInfos.map(e => e ? FlowInfo.toJSON(e) : undefined);
    } else {
      obj.flowInfos = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toJSON(e) : undefined);
    } else {
      obj.sequences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.interchainAccountAddresses = object.interchainAccountAddresses?.map(e => e) || [];
    message.flowInfos = object.flowInfos?.map(e => FlowInfo.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.interchainAccountAddresses = object.interchain_account_addresses?.map(e => e) || [];
    message.flowInfos = object.flow_infos?.map(e => FlowInfo.fromAmino(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.interchainAccountAddresses) {
      obj.interchain_account_addresses = message.interchainAccountAddresses.map(e => e);
    } else {
      obj.interchain_account_addresses = message.interchainAccountAddresses;
    }
    if (message.flowInfos) {
      obj.flow_infos = message.flowInfos.map(e => e ? FlowInfo.toAmino(e) : undefined);
    } else {
      obj.flow_infos = message.flowInfos;
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
    } else {
      obj.sequences = message.sequences;
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
      typeUrl: "/intento.intent.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}
export const Sequence = {
  typeUrl: "/intento.intent.v1.Sequence",
  is(o: any): o is Sequence {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.idKey instanceof Uint8Array || typeof o.idKey === "string") && typeof o.value === "bigint");
  },
  isSDK(o: any): o is SequenceSDKType {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  isAmino(o: any): o is SequenceAmino {
    return o && (o.$typeUrl === Sequence.typeUrl || (o.id_key instanceof Uint8Array || typeof o.id_key === "string") && typeof o.value === "bigint");
  },
  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Sequence {
    return {
      idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
      value: isSet(object.value) ? BigInt(object.value.toString()) : BigInt(0)
    };
  },
  toJSON(message: Sequence): JsonSafe<Sequence> {
    const obj: any = {};
    message.idKey !== undefined && (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SequenceAmino): Sequence {
    const message = createBaseSequence();
    if (object.id_key !== undefined && object.id_key !== null) {
      message.idKey = bytesFromBase64(object.id_key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: Sequence): SequenceAmino {
    const obj: any = {};
    obj.id_key = message.idKey ? base64FromBytes(message.idKey) : undefined;
    obj.value = message.value !== BigInt(0) ? message.value?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SequenceAminoMsg): Sequence {
    return Sequence.fromAmino(object.value);
  },
  fromProtoMsg(message: SequenceProtoMsg): Sequence {
    return Sequence.decode(message.value);
  },
  toProto(message: Sequence): Uint8Array {
    return Sequence.encode(message).finish();
  },
  toProtoMsg(message: Sequence): SequenceProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Sequence.typeUrl, Sequence);