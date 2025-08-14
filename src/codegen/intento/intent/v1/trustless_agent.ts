import { ICAConfig, ICAConfigAmino, ICAConfigSDKType } from "./flow";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface TrustlessAgent {
  agentAddress: string;
  icaConfig?: ICAConfig;
  feeConfig?: TrustlessAgentFeeConfig;
}
export interface TrustlessAgentProtoMsg {
  typeUrl: "/intento.intent.v1.TrustlessAgent";
  value: Uint8Array;
}
export interface TrustlessAgentAmino {
  agent_address?: string;
  ica_config?: ICAConfigAmino;
  fee_config?: TrustlessAgentFeeConfigAmino;
}
export interface TrustlessAgentAminoMsg {
  type: "/intento.intent.v1.TrustlessAgent";
  value: TrustlessAgentAmino;
}
export interface TrustlessAgentSDKType {
  agent_address: string;
  ica_config?: ICAConfigSDKType;
  fee_config?: TrustlessAgentFeeConfigSDKType;
}
export interface TrustlessAgentFeeConfig {
  /** can set fee coins supported, which can be charged per message executed if a fee limit is set in the flow */
  feeAdmin: string;
  /** can be empty */
  feeCoinsSupported: Coin[];
}
export interface TrustlessAgentFeeConfigProtoMsg {
  typeUrl: "/intento.intent.v1.TrustlessAgentFeeConfig";
  value: Uint8Array;
}
export interface TrustlessAgentFeeConfigAmino {
  /** can set fee coins supported, which can be charged per message executed if a fee limit is set in the flow */
  fee_admin?: string;
  /** can be empty */
  fee_coins_supported?: CoinAmino[];
}
export interface TrustlessAgentFeeConfigAminoMsg {
  type: "/intento.intent.v1.TrustlessAgentFeeConfig";
  value: TrustlessAgentFeeConfigAmino;
}
export interface TrustlessAgentFeeConfigSDKType {
  fee_admin: string;
  fee_coins_supported: CoinSDKType[];
}
function createBaseTrustlessAgent(): TrustlessAgent {
  return {
    agentAddress: "",
    icaConfig: undefined,
    feeConfig: undefined
  };
}
export const TrustlessAgent = {
  typeUrl: "/intento.intent.v1.TrustlessAgent",
  is(o: any): o is TrustlessAgent {
    return o && (o.$typeUrl === TrustlessAgent.typeUrl || typeof o.agentAddress === "string");
  },
  isSDK(o: any): o is TrustlessAgentSDKType {
    return o && (o.$typeUrl === TrustlessAgent.typeUrl || typeof o.agent_address === "string");
  },
  isAmino(o: any): o is TrustlessAgentAmino {
    return o && (o.$typeUrl === TrustlessAgent.typeUrl || typeof o.agent_address === "string");
  },
  encode(message: TrustlessAgent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.agentAddress !== "") {
      writer.uint32(10).string(message.agentAddress);
    }
    if (message.icaConfig !== undefined) {
      ICAConfig.encode(message.icaConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeConfig !== undefined) {
      TrustlessAgentFeeConfig.encode(message.feeConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrustlessAgent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustlessAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.agentAddress = reader.string();
          break;
        case 2:
          message.icaConfig = ICAConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.feeConfig = TrustlessAgentFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrustlessAgent {
    return {
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      icaConfig: isSet(object.icaConfig) ? ICAConfig.fromJSON(object.icaConfig) : undefined,
      feeConfig: isSet(object.feeConfig) ? TrustlessAgentFeeConfig.fromJSON(object.feeConfig) : undefined
    };
  },
  toJSON(message: TrustlessAgent): JsonSafe<TrustlessAgent> {
    const obj: any = {};
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.icaConfig !== undefined && (obj.icaConfig = message.icaConfig ? ICAConfig.toJSON(message.icaConfig) : undefined);
    message.feeConfig !== undefined && (obj.feeConfig = message.feeConfig ? TrustlessAgentFeeConfig.toJSON(message.feeConfig) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TrustlessAgent>): TrustlessAgent {
    const message = createBaseTrustlessAgent();
    message.agentAddress = object.agentAddress ?? "";
    message.icaConfig = object.icaConfig !== undefined && object.icaConfig !== null ? ICAConfig.fromPartial(object.icaConfig) : undefined;
    message.feeConfig = object.feeConfig !== undefined && object.feeConfig !== null ? TrustlessAgentFeeConfig.fromPartial(object.feeConfig) : undefined;
    return message;
  },
  fromAmino(object: TrustlessAgentAmino): TrustlessAgent {
    const message = createBaseTrustlessAgent();
    if (object.agent_address !== undefined && object.agent_address !== null) {
      message.agentAddress = object.agent_address;
    }
    if (object.ica_config !== undefined && object.ica_config !== null) {
      message.icaConfig = ICAConfig.fromAmino(object.ica_config);
    }
    if (object.fee_config !== undefined && object.fee_config !== null) {
      message.feeConfig = TrustlessAgentFeeConfig.fromAmino(object.fee_config);
    }
    return message;
  },
  toAmino(message: TrustlessAgent): TrustlessAgentAmino {
    const obj: any = {};
    obj.agent_address = message.agentAddress === "" ? undefined : message.agentAddress;
    obj.ica_config = message.icaConfig ? ICAConfig.toAmino(message.icaConfig) : undefined;
    obj.fee_config = message.feeConfig ? TrustlessAgentFeeConfig.toAmino(message.feeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: TrustlessAgentAminoMsg): TrustlessAgent {
    return TrustlessAgent.fromAmino(object.value);
  },
  fromProtoMsg(message: TrustlessAgentProtoMsg): TrustlessAgent {
    return TrustlessAgent.decode(message.value);
  },
  toProto(message: TrustlessAgent): Uint8Array {
    return TrustlessAgent.encode(message).finish();
  },
  toProtoMsg(message: TrustlessAgent): TrustlessAgentProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.TrustlessAgent",
      value: TrustlessAgent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TrustlessAgent.typeUrl, TrustlessAgent);
function createBaseTrustlessAgentFeeConfig(): TrustlessAgentFeeConfig {
  return {
    feeAdmin: "",
    feeCoinsSupported: []
  };
}
export const TrustlessAgentFeeConfig = {
  typeUrl: "/intento.intent.v1.TrustlessAgentFeeConfig",
  is(o: any): o is TrustlessAgentFeeConfig {
    return o && (o.$typeUrl === TrustlessAgentFeeConfig.typeUrl || typeof o.feeAdmin === "string" && Array.isArray(o.feeCoinsSupported) && (!o.feeCoinsSupported.length || Coin.is(o.feeCoinsSupported[0])));
  },
  isSDK(o: any): o is TrustlessAgentFeeConfigSDKType {
    return o && (o.$typeUrl === TrustlessAgentFeeConfig.typeUrl || typeof o.fee_admin === "string" && Array.isArray(o.fee_coins_supported) && (!o.fee_coins_supported.length || Coin.isSDK(o.fee_coins_supported[0])));
  },
  isAmino(o: any): o is TrustlessAgentFeeConfigAmino {
    return o && (o.$typeUrl === TrustlessAgentFeeConfig.typeUrl || typeof o.fee_admin === "string" && Array.isArray(o.fee_coins_supported) && (!o.fee_coins_supported.length || Coin.isAmino(o.fee_coins_supported[0])));
  },
  encode(message: TrustlessAgentFeeConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeAdmin !== "") {
      writer.uint32(10).string(message.feeAdmin);
    }
    for (const v of message.feeCoinsSupported) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TrustlessAgentFeeConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrustlessAgentFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeAdmin = reader.string();
          break;
        case 2:
          message.feeCoinsSupported.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TrustlessAgentFeeConfig {
    return {
      feeAdmin: isSet(object.feeAdmin) ? String(object.feeAdmin) : "",
      feeCoinsSupported: Array.isArray(object?.feeCoinsSupported) ? object.feeCoinsSupported.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TrustlessAgentFeeConfig): JsonSafe<TrustlessAgentFeeConfig> {
    const obj: any = {};
    message.feeAdmin !== undefined && (obj.feeAdmin = message.feeAdmin);
    if (message.feeCoinsSupported) {
      obj.feeCoinsSupported = message.feeCoinsSupported.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeCoinsSupported = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TrustlessAgentFeeConfig>): TrustlessAgentFeeConfig {
    const message = createBaseTrustlessAgentFeeConfig();
    message.feeAdmin = object.feeAdmin ?? "";
    message.feeCoinsSupported = object.feeCoinsSupported?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TrustlessAgentFeeConfigAmino): TrustlessAgentFeeConfig {
    const message = createBaseTrustlessAgentFeeConfig();
    if (object.fee_admin !== undefined && object.fee_admin !== null) {
      message.feeAdmin = object.fee_admin;
    }
    message.feeCoinsSupported = object.fee_coins_supported?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TrustlessAgentFeeConfig): TrustlessAgentFeeConfigAmino {
    const obj: any = {};
    obj.fee_admin = message.feeAdmin === "" ? undefined : message.feeAdmin;
    if (message.feeCoinsSupported) {
      obj.fee_coins_supported = message.feeCoinsSupported.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_coins_supported = message.feeCoinsSupported;
    }
    return obj;
  },
  fromAminoMsg(object: TrustlessAgentFeeConfigAminoMsg): TrustlessAgentFeeConfig {
    return TrustlessAgentFeeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TrustlessAgentFeeConfigProtoMsg): TrustlessAgentFeeConfig {
    return TrustlessAgentFeeConfig.decode(message.value);
  },
  toProto(message: TrustlessAgentFeeConfig): Uint8Array {
    return TrustlessAgentFeeConfig.encode(message).finish();
  },
  toProtoMsg(message: TrustlessAgentFeeConfig): TrustlessAgentFeeConfigProtoMsg {
    return {
      typeUrl: "/intento.intent.v1.TrustlessAgentFeeConfig",
      value: TrustlessAgentFeeConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TrustlessAgentFeeConfig.typeUrl, TrustlessAgentFeeConfig);