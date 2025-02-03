import { ICAConfig, ICAConfigAmino, ICAConfigSDKType } from "./action";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export interface HostedAccount {
  hostedAddress: string;
  icaConfig?: ICAConfig;
  hostFeeConfig?: HostFeeConfig;
}
export interface HostedAccountProtoMsg {
  typeUrl: "/intento.intent.v1beta1.HostedAccount";
  value: Uint8Array;
}
export interface HostedAccountAmino {
  hosted_address?: string;
  ica_config?: ICAConfigAmino;
  host_fee_config?: HostFeeConfigAmino;
}
export interface HostedAccountAminoMsg {
  type: "/intento.intent.v1beta1.HostedAccount";
  value: HostedAccountAmino;
}
export interface HostedAccountSDKType {
  hosted_address: string;
  ica_config?: ICAConfigSDKType;
  host_fee_config?: HostFeeConfigSDKType;
}
export interface HostFeeConfig {
  admin: string;
  feeCoinsSuported: Coin[];
}
export interface HostFeeConfigProtoMsg {
  typeUrl: "/intento.intent.v1beta1.HostFeeConfig";
  value: Uint8Array;
}
export interface HostFeeConfigAmino {
  admin?: string;
  fee_coins_suported?: CoinAmino[];
}
export interface HostFeeConfigAminoMsg {
  type: "/intento.intent.v1beta1.HostFeeConfig";
  value: HostFeeConfigAmino;
}
export interface HostFeeConfigSDKType {
  admin: string;
  fee_coins_suported: CoinSDKType[];
}
function createBaseHostedAccount(): HostedAccount {
  return {
    hostedAddress: "",
    icaConfig: undefined,
    hostFeeConfig: undefined
  };
}
export const HostedAccount = {
  typeUrl: "/intento.intent.v1beta1.HostedAccount",
  is(o: any): o is HostedAccount {
    return o && (o.$typeUrl === HostedAccount.typeUrl || typeof o.hostedAddress === "string");
  },
  isSDK(o: any): o is HostedAccountSDKType {
    return o && (o.$typeUrl === HostedAccount.typeUrl || typeof o.hosted_address === "string");
  },
  isAmino(o: any): o is HostedAccountAmino {
    return o && (o.$typeUrl === HostedAccount.typeUrl || typeof o.hosted_address === "string");
  },
  encode(message: HostedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostedAddress !== "") {
      writer.uint32(10).string(message.hostedAddress);
    }
    if (message.icaConfig !== undefined) {
      ICAConfig.encode(message.icaConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.hostFeeConfig !== undefined) {
      HostFeeConfig.encode(message.hostFeeConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hostedAddress = reader.string();
          break;
        case 2:
          message.icaConfig = ICAConfig.decode(reader, reader.uint32());
          break;
        case 3:
          message.hostFeeConfig = HostFeeConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostedAccount {
    return {
      hostedAddress: isSet(object.hostedAddress) ? String(object.hostedAddress) : "",
      icaConfig: isSet(object.icaConfig) ? ICAConfig.fromJSON(object.icaConfig) : undefined,
      hostFeeConfig: isSet(object.hostFeeConfig) ? HostFeeConfig.fromJSON(object.hostFeeConfig) : undefined
    };
  },
  toJSON(message: HostedAccount): JsonSafe<HostedAccount> {
    const obj: any = {};
    message.hostedAddress !== undefined && (obj.hostedAddress = message.hostedAddress);
    message.icaConfig !== undefined && (obj.icaConfig = message.icaConfig ? ICAConfig.toJSON(message.icaConfig) : undefined);
    message.hostFeeConfig !== undefined && (obj.hostFeeConfig = message.hostFeeConfig ? HostFeeConfig.toJSON(message.hostFeeConfig) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HostedAccount>): HostedAccount {
    const message = createBaseHostedAccount();
    message.hostedAddress = object.hostedAddress ?? "";
    message.icaConfig = object.icaConfig !== undefined && object.icaConfig !== null ? ICAConfig.fromPartial(object.icaConfig) : undefined;
    message.hostFeeConfig = object.hostFeeConfig !== undefined && object.hostFeeConfig !== null ? HostFeeConfig.fromPartial(object.hostFeeConfig) : undefined;
    return message;
  },
  fromAmino(object: HostedAccountAmino): HostedAccount {
    const message = createBaseHostedAccount();
    if (object.hosted_address !== undefined && object.hosted_address !== null) {
      message.hostedAddress = object.hosted_address;
    }
    if (object.ica_config !== undefined && object.ica_config !== null) {
      message.icaConfig = ICAConfig.fromAmino(object.ica_config);
    }
    if (object.host_fee_config !== undefined && object.host_fee_config !== null) {
      message.hostFeeConfig = HostFeeConfig.fromAmino(object.host_fee_config);
    }
    return message;
  },
  toAmino(message: HostedAccount): HostedAccountAmino {
    const obj: any = {};
    obj.hosted_address = message.hostedAddress === "" ? undefined : message.hostedAddress;
    obj.ica_config = message.icaConfig ? ICAConfig.toAmino(message.icaConfig) : undefined;
    obj.host_fee_config = message.hostFeeConfig ? HostFeeConfig.toAmino(message.hostFeeConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostedAccountAminoMsg): HostedAccount {
    return HostedAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: HostedAccountProtoMsg): HostedAccount {
    return HostedAccount.decode(message.value);
  },
  toProto(message: HostedAccount): Uint8Array {
    return HostedAccount.encode(message).finish();
  },
  toProtoMsg(message: HostedAccount): HostedAccountProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.HostedAccount",
      value: HostedAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostedAccount.typeUrl, HostedAccount);
function createBaseHostFeeConfig(): HostFeeConfig {
  return {
    admin: "",
    feeCoinsSuported: []
  };
}
export const HostFeeConfig = {
  typeUrl: "/intento.intent.v1beta1.HostFeeConfig",
  is(o: any): o is HostFeeConfig {
    return o && (o.$typeUrl === HostFeeConfig.typeUrl || typeof o.admin === "string" && Array.isArray(o.feeCoinsSuported) && (!o.feeCoinsSuported.length || Coin.is(o.feeCoinsSuported[0])));
  },
  isSDK(o: any): o is HostFeeConfigSDKType {
    return o && (o.$typeUrl === HostFeeConfig.typeUrl || typeof o.admin === "string" && Array.isArray(o.fee_coins_suported) && (!o.fee_coins_suported.length || Coin.isSDK(o.fee_coins_suported[0])));
  },
  isAmino(o: any): o is HostFeeConfigAmino {
    return o && (o.$typeUrl === HostFeeConfig.typeUrl || typeof o.admin === "string" && Array.isArray(o.fee_coins_suported) && (!o.fee_coins_suported.length || Coin.isAmino(o.fee_coins_suported[0])));
  },
  encode(message: HostFeeConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.feeCoinsSuported) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostFeeConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostFeeConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 9:
          message.feeCoinsSuported.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostFeeConfig {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      feeCoinsSuported: Array.isArray(object?.feeCoinsSuported) ? object.feeCoinsSuported.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: HostFeeConfig): JsonSafe<HostFeeConfig> {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.feeCoinsSuported) {
      obj.feeCoinsSuported = message.feeCoinsSuported.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeCoinsSuported = [];
    }
    return obj;
  },
  fromPartial(object: Partial<HostFeeConfig>): HostFeeConfig {
    const message = createBaseHostFeeConfig();
    message.admin = object.admin ?? "";
    message.feeCoinsSuported = object.feeCoinsSuported?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: HostFeeConfigAmino): HostFeeConfig {
    const message = createBaseHostFeeConfig();
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    message.feeCoinsSuported = object.fee_coins_suported?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: HostFeeConfig): HostFeeConfigAmino {
    const obj: any = {};
    obj.admin = message.admin === "" ? undefined : message.admin;
    if (message.feeCoinsSuported) {
      obj.fee_coins_suported = message.feeCoinsSuported.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_coins_suported = message.feeCoinsSuported;
    }
    return obj;
  },
  fromAminoMsg(object: HostFeeConfigAminoMsg): HostFeeConfig {
    return HostFeeConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: HostFeeConfigProtoMsg): HostFeeConfig {
    return HostFeeConfig.decode(message.value);
  },
  toProto(message: HostFeeConfig): Uint8Array {
    return HostFeeConfig.encode(message).finish();
  },
  toProtoMsg(message: HostFeeConfig): HostFeeConfigProtoMsg {
    return {
      typeUrl: "/intento.intent.v1beta1.HostFeeConfig",
      value: HostFeeConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostFeeConfig.typeUrl, HostFeeConfig);