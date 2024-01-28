import { Params, ParamsAmino, ParamsSDKType, AutoTxInfo, AutoTxInfoAmino, AutoTxInfoSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
/** GenesisState - genesis state of x/auto-ibc-tx */
export interface GenesisState {
  params: Params;
  interchainAccountAddresses: string[];
  autoTxInfos: AutoTxInfo[];
  sequences: Sequence[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - genesis state of x/auto-ibc-tx */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  interchain_account_addresses?: string[];
  auto_tx_infos?: AutoTxInfoAmino[];
  sequences?: SequenceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/trst.autoibctx.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/auto-ibc-tx */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  interchain_account_addresses: string[];
  auto_tx_infos: AutoTxInfoSDKType[];
  sequences: SequenceSDKType[];
}
/** Sequence id and value of a counter */
export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
export interface SequenceProtoMsg {
  typeUrl: "/trst.autoibctx.v1beta1.Sequence";
  value: Uint8Array;
}
/** Sequence id and value of a counter */
export interface SequenceAmino {
  id_key?: string;
  value?: string;
}
export interface SequenceAminoMsg {
  type: "/trst.autoibctx.v1beta1.Sequence";
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
    autoTxInfos: [],
    sequences: []
  };
}
export const GenesisState = {
  typeUrl: "/trst.autoibctx.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchainAccountAddresses) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.autoTxInfos) {
      AutoTxInfo.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.autoTxInfos.push(AutoTxInfo.decode(reader, reader.uint32()));
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
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.interchainAccountAddresses = object.interchainAccountAddresses?.map(e => e) || [];
    message.autoTxInfos = object.autoTxInfos?.map(e => AutoTxInfo.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.interchainAccountAddresses = object.interchain_account_addresses?.map(e => e) || [];
    message.autoTxInfos = object.auto_tx_infos?.map(e => AutoTxInfo.fromAmino(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.interchainAccountAddresses) {
      obj.interchain_account_addresses = message.interchainAccountAddresses.map(e => e);
    } else {
      obj.interchain_account_addresses = [];
    }
    if (message.autoTxInfos) {
      obj.auto_tx_infos = message.autoTxInfos.map(e => e ? AutoTxInfo.toAmino(e) : undefined);
    } else {
      obj.auto_tx_infos = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e ? Sequence.toAmino(e) : undefined);
    } else {
      obj.sequences = [];
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
      typeUrl: "/trst.autoibctx.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0)
  };
}
export const Sequence = {
  typeUrl: "/trst.autoibctx.v1beta1.Sequence",
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
    obj.value = message.value ? message.value.toString() : undefined;
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
      typeUrl: "/trst.autoibctx.v1beta1.Sequence",
      value: Sequence.encode(message).finish()
    };
  }
};