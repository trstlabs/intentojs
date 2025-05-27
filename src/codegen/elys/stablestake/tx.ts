import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export interface MsgBond {
  creator: string;
  amount: string;
  poolId: bigint;
}
export interface MsgBondProtoMsg {
  typeUrl: "/elys.stablestake.MsgBond";
  value: Uint8Array;
}
export interface MsgBondAmino {
  creator?: string;
  amount?: string;
  pool_id?: string;
}
export interface MsgBondAminoMsg {
  type: "stablestake/MsgBond";
  value: MsgBondAmino;
}
export interface MsgBondSDKType {
  creator: string;
  amount: string;
  pool_id: bigint;
}
export interface MsgBondResponse {}
export interface MsgBondResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgBondResponse";
  value: Uint8Array;
}
export interface MsgBondResponseAmino {}
export interface MsgBondResponseAminoMsg {
  type: "/elys.stablestake.MsgBondResponse";
  value: MsgBondResponseAmino;
}
export interface MsgBondResponseSDKType {}
export interface MsgUnbond {
  creator: string;
  amount: string;
  poolId: bigint;
}
export interface MsgUnbondProtoMsg {
  typeUrl: "/elys.stablestake.MsgUnbond";
  value: Uint8Array;
}
export interface MsgUnbondAmino {
  creator?: string;
  amount?: string;
  pool_id?: string;
}
export interface MsgUnbondAminoMsg {
  type: "stablestake/MsgUnbond";
  value: MsgUnbondAmino;
}
export interface MsgUnbondSDKType {
  creator: string;
  amount: string;
  pool_id: bigint;
}
export interface MsgUnbondResponse {}
export interface MsgUnbondResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgUnbondResponse";
  value: Uint8Array;
}
export interface MsgUnbondResponseAmino {}
export interface MsgUnbondResponseAminoMsg {
  type: "/elys.stablestake.MsgUnbondResponse";
  value: MsgUnbondResponseAmino;
}
export interface MsgUnbondResponseSDKType {}
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/elys.stablestake.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "stablestake/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.stablestake.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgAddPool {
  sender: string;
  depositDenom: string;
  interestRate: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  maxLeverageRatio: string;
  maxWithdrawRatio: string;
}
export interface MsgAddPoolProtoMsg {
  typeUrl: "/elys.stablestake.MsgAddPool";
  value: Uint8Array;
}
export interface MsgAddPoolAmino {
  sender?: string;
  deposit_denom?: string;
  interest_rate?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  max_leverage_ratio?: string;
  max_withdraw_ratio?: string;
}
export interface MsgAddPoolAminoMsg {
  type: "stablestake/MsgAddPool";
  value: MsgAddPoolAmino;
}
export interface MsgAddPoolSDKType {
  sender: string;
  deposit_denom: string;
  interest_rate: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  max_leverage_ratio: string;
  max_withdraw_ratio: string;
}
export interface MsgAddPoolResponse {
  poolId: bigint;
}
export interface MsgAddPoolResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgAddPoolResponse";
  value: Uint8Array;
}
export interface MsgAddPoolResponseAmino {
  pool_id?: string;
}
export interface MsgAddPoolResponseAminoMsg {
  type: "/elys.stablestake.MsgAddPoolResponse";
  value: MsgAddPoolResponseAmino;
}
export interface MsgAddPoolResponseSDKType {
  pool_id: bigint;
}
export interface MsgUpdatePool {
  authority: string;
  interestRateMax: string;
  interestRateMin: string;
  interestRateIncrease: string;
  interestRateDecrease: string;
  healthGainFactor: string;
  maxLeverageRatio: string;
  poolId: bigint;
}
export interface MsgUpdatePoolProtoMsg {
  typeUrl: "/elys.stablestake.MsgUpdatePool";
  value: Uint8Array;
}
export interface MsgUpdatePoolAmino {
  authority?: string;
  interest_rate_max?: string;
  interest_rate_min?: string;
  interest_rate_increase?: string;
  interest_rate_decrease?: string;
  health_gain_factor?: string;
  max_leverage_ratio?: string;
  pool_id?: string;
}
export interface MsgUpdatePoolAminoMsg {
  type: "stablestake/MsgUpdatePool";
  value: MsgUpdatePoolAmino;
}
export interface MsgUpdatePoolSDKType {
  authority: string;
  interest_rate_max: string;
  interest_rate_min: string;
  interest_rate_increase: string;
  interest_rate_decrease: string;
  health_gain_factor: string;
  max_leverage_ratio: string;
  pool_id: bigint;
}
export interface MsgUpdatePoolResponse {}
export interface MsgUpdatePoolResponseProtoMsg {
  typeUrl: "/elys.stablestake.MsgUpdatePoolResponse";
  value: Uint8Array;
}
export interface MsgUpdatePoolResponseAmino {}
export interface MsgUpdatePoolResponseAminoMsg {
  type: "/elys.stablestake.MsgUpdatePoolResponse";
  value: MsgUpdatePoolResponseAmino;
}
export interface MsgUpdatePoolResponseSDKType {}
function createBaseMsgBond(): MsgBond {
  return {
    creator: "",
    amount: "",
    poolId: BigInt(0)
  };
}
export const MsgBond = {
  typeUrl: "/elys.stablestake.MsgBond",
  aminoType: "stablestake/MsgBond",
  is(o: any): o is MsgBond {
    return o && (o.$typeUrl === MsgBond.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgBondSDKType {
    return o && (o.$typeUrl === MsgBond.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgBondAmino {
    return o && (o.$typeUrl === MsgBond.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBond {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgBond): JsonSafe<MsgBond> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgBond>): MsgBond {
    const message = createBaseMsgBond();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgBondAmino): MsgBond {
    const message = createBaseMsgBond();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgBond): MsgBondAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBondAminoMsg): MsgBond {
    return MsgBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBond): MsgBondAminoMsg {
    return {
      type: "stablestake/MsgBond",
      value: MsgBond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBondProtoMsg): MsgBond {
    return MsgBond.decode(message.value);
  },
  toProto(message: MsgBond): Uint8Array {
    return MsgBond.encode(message).finish();
  },
  toProtoMsg(message: MsgBond): MsgBondProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgBond",
      value: MsgBond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBond.typeUrl, MsgBond);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgBond.aminoType, MsgBond.typeUrl);
function createBaseMsgBondResponse(): MsgBondResponse {
  return {};
}
export const MsgBondResponse = {
  typeUrl: "/elys.stablestake.MsgBondResponse",
  is(o: any): o is MsgBondResponse {
    return o && o.$typeUrl === MsgBondResponse.typeUrl;
  },
  isSDK(o: any): o is MsgBondResponseSDKType {
    return o && o.$typeUrl === MsgBondResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBondResponseAmino {
    return o && o.$typeUrl === MsgBondResponse.typeUrl;
  },
  encode(_: MsgBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBondResponse {
    return {};
  },
  toJSON(_: MsgBondResponse): JsonSafe<MsgBondResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    return message;
  },
  fromAmino(_: MsgBondResponseAmino): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    return message;
  },
  toAmino(_: MsgBondResponse): MsgBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBondResponseAminoMsg): MsgBondResponse {
    return MsgBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondResponseProtoMsg): MsgBondResponse {
    return MsgBondResponse.decode(message.value);
  },
  toProto(message: MsgBondResponse): Uint8Array {
    return MsgBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBondResponse): MsgBondResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgBondResponse",
      value: MsgBondResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgBondResponse.typeUrl, MsgBondResponse);
function createBaseMsgUnbond(): MsgUnbond {
  return {
    creator: "",
    amount: "",
    poolId: BigInt(0)
  };
}
export const MsgUnbond = {
  typeUrl: "/elys.stablestake.MsgUnbond",
  aminoType: "stablestake/MsgUnbond",
  is(o: any): o is MsgUnbond {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgUnbondSDKType {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgUnbondAmino {
    return o && (o.$typeUrl === MsgUnbond.typeUrl || typeof o.creator === "string" && typeof o.amount === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbond {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnbond {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUnbond): JsonSafe<MsgUnbond> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUnbond>): MsgUnbond {
    const message = createBaseMsgUnbond();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnbondAmino): MsgUnbond {
    const message = createBaseMsgUnbond();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgUnbond): MsgUnbondAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondAminoMsg): MsgUnbond {
    return MsgUnbond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbond): MsgUnbondAminoMsg {
    return {
      type: "stablestake/MsgUnbond",
      value: MsgUnbond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondProtoMsg): MsgUnbond {
    return MsgUnbond.decode(message.value);
  },
  toProto(message: MsgUnbond): Uint8Array {
    return MsgUnbond.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbond): MsgUnbondProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUnbond",
      value: MsgUnbond.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnbond.typeUrl, MsgUnbond);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUnbond.aminoType, MsgUnbond.typeUrl);
function createBaseMsgUnbondResponse(): MsgUnbondResponse {
  return {};
}
export const MsgUnbondResponse = {
  typeUrl: "/elys.stablestake.MsgUnbondResponse",
  is(o: any): o is MsgUnbondResponse {
    return o && o.$typeUrl === MsgUnbondResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnbondResponseSDKType {
    return o && o.$typeUrl === MsgUnbondResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnbondResponseAmino {
    return o && o.$typeUrl === MsgUnbondResponse.typeUrl;
  },
  encode(_: MsgUnbondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnbondResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUnbondResponse {
    return {};
  },
  toJSON(_: MsgUnbondResponse): JsonSafe<MsgUnbondResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUnbondResponse>): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    return message;
  },
  fromAmino(_: MsgUnbondResponseAmino): MsgUnbondResponse {
    const message = createBaseMsgUnbondResponse();
    return message;
  },
  toAmino(_: MsgUnbondResponse): MsgUnbondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondResponseAminoMsg): MsgUnbondResponse {
    return MsgUnbondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnbondResponseProtoMsg): MsgUnbondResponse {
    return MsgUnbondResponse.decode(message.value);
  },
  toProto(message: MsgUnbondResponse): Uint8Array {
    return MsgUnbondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondResponse): MsgUnbondResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUnbondResponse",
      value: MsgUnbondResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnbondResponse.typeUrl, MsgUnbondResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/elys.stablestake.MsgUpdateParams",
  aminoType: "stablestake/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string");
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string");
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "stablestake/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/elys.stablestake.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgAddPool(): MsgAddPool {
  return {
    sender: "",
    depositDenom: "",
    interestRate: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    maxLeverageRatio: "",
    maxWithdrawRatio: ""
  };
}
export const MsgAddPool = {
  typeUrl: "/elys.stablestake.MsgAddPool",
  aminoType: "stablestake/MsgAddPool",
  is(o: any): o is MsgAddPool {
    return o && (o.$typeUrl === MsgAddPool.typeUrl || typeof o.sender === "string" && typeof o.depositDenom === "string" && typeof o.interestRate === "string" && typeof o.interestRateMax === "string" && typeof o.interestRateMin === "string" && typeof o.interestRateIncrease === "string" && typeof o.interestRateDecrease === "string" && typeof o.healthGainFactor === "string" && typeof o.maxLeverageRatio === "string" && typeof o.maxWithdrawRatio === "string");
  },
  isSDK(o: any): o is MsgAddPoolSDKType {
    return o && (o.$typeUrl === MsgAddPool.typeUrl || typeof o.sender === "string" && typeof o.deposit_denom === "string" && typeof o.interest_rate === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.max_leverage_ratio === "string" && typeof o.max_withdraw_ratio === "string");
  },
  isAmino(o: any): o is MsgAddPoolAmino {
    return o && (o.$typeUrl === MsgAddPool.typeUrl || typeof o.sender === "string" && typeof o.deposit_denom === "string" && typeof o.interest_rate === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.max_leverage_ratio === "string" && typeof o.max_withdraw_ratio === "string");
  },
  encode(message: MsgAddPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.depositDenom !== "") {
      writer.uint32(18).string(message.depositDenom);
    }
    if (message.interestRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.interestRate, 18).atomics);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.interestRateMax, 18).atomics);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.interestRateMin, 18).atomics);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.interestRateIncrease, 18).atomics);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.interestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.maxLeverageRatio !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.maxLeverageRatio, 18).atomics);
    }
    if (message.maxWithdrawRatio !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.maxWithdrawRatio, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.depositDenom = reader.string();
          break;
        case 3:
          message.interestRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.interestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.interestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.interestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.interestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.maxLeverageRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.maxWithdrawRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      depositDenom: isSet(object.depositDenom) ? String(object.depositDenom) : "",
      interestRate: isSet(object.interestRate) ? String(object.interestRate) : "",
      interestRateMax: isSet(object.interestRateMax) ? String(object.interestRateMax) : "",
      interestRateMin: isSet(object.interestRateMin) ? String(object.interestRateMin) : "",
      interestRateIncrease: isSet(object.interestRateIncrease) ? String(object.interestRateIncrease) : "",
      interestRateDecrease: isSet(object.interestRateDecrease) ? String(object.interestRateDecrease) : "",
      healthGainFactor: isSet(object.healthGainFactor) ? String(object.healthGainFactor) : "",
      maxLeverageRatio: isSet(object.maxLeverageRatio) ? String(object.maxLeverageRatio) : "",
      maxWithdrawRatio: isSet(object.maxWithdrawRatio) ? String(object.maxWithdrawRatio) : ""
    };
  },
  toJSON(message: MsgAddPool): JsonSafe<MsgAddPool> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
    message.interestRate !== undefined && (obj.interestRate = message.interestRate);
    message.interestRateMax !== undefined && (obj.interestRateMax = message.interestRateMax);
    message.interestRateMin !== undefined && (obj.interestRateMin = message.interestRateMin);
    message.interestRateIncrease !== undefined && (obj.interestRateIncrease = message.interestRateIncrease);
    message.interestRateDecrease !== undefined && (obj.interestRateDecrease = message.interestRateDecrease);
    message.healthGainFactor !== undefined && (obj.healthGainFactor = message.healthGainFactor);
    message.maxLeverageRatio !== undefined && (obj.maxLeverageRatio = message.maxLeverageRatio);
    message.maxWithdrawRatio !== undefined && (obj.maxWithdrawRatio = message.maxWithdrawRatio);
    return obj;
  },
  fromPartial(object: Partial<MsgAddPool>): MsgAddPool {
    const message = createBaseMsgAddPool();
    message.sender = object.sender ?? "";
    message.depositDenom = object.depositDenom ?? "";
    message.interestRate = object.interestRate ?? "";
    message.interestRateMax = object.interestRateMax ?? "";
    message.interestRateMin = object.interestRateMin ?? "";
    message.interestRateIncrease = object.interestRateIncrease ?? "";
    message.interestRateDecrease = object.interestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.maxLeverageRatio = object.maxLeverageRatio ?? "";
    message.maxWithdrawRatio = object.maxWithdrawRatio ?? "";
    return message;
  },
  fromAmino(object: MsgAddPoolAmino): MsgAddPool {
    const message = createBaseMsgAddPool();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.interest_rate !== undefined && object.interest_rate !== null) {
      message.interestRate = object.interest_rate;
    }
    if (object.interest_rate_max !== undefined && object.interest_rate_max !== null) {
      message.interestRateMax = object.interest_rate_max;
    }
    if (object.interest_rate_min !== undefined && object.interest_rate_min !== null) {
      message.interestRateMin = object.interest_rate_min;
    }
    if (object.interest_rate_increase !== undefined && object.interest_rate_increase !== null) {
      message.interestRateIncrease = object.interest_rate_increase;
    }
    if (object.interest_rate_decrease !== undefined && object.interest_rate_decrease !== null) {
      message.interestRateDecrease = object.interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.max_leverage_ratio !== undefined && object.max_leverage_ratio !== null) {
      message.maxLeverageRatio = object.max_leverage_ratio;
    }
    if (object.max_withdraw_ratio !== undefined && object.max_withdraw_ratio !== null) {
      message.maxWithdrawRatio = object.max_withdraw_ratio;
    }
    return message;
  },
  toAmino(message: MsgAddPool): MsgAddPoolAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.interest_rate = message.interestRate === "" ? undefined : message.interestRate;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.max_leverage_ratio = message.maxLeverageRatio === "" ? undefined : message.maxLeverageRatio;
    obj.max_withdraw_ratio = message.maxWithdrawRatio === "" ? undefined : message.maxWithdrawRatio;
    return obj;
  },
  fromAminoMsg(object: MsgAddPoolAminoMsg): MsgAddPool {
    return MsgAddPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddPool): MsgAddPoolAminoMsg {
    return {
      type: "stablestake/MsgAddPool",
      value: MsgAddPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddPoolProtoMsg): MsgAddPool {
    return MsgAddPool.decode(message.value);
  },
  toProto(message: MsgAddPool): Uint8Array {
    return MsgAddPool.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPool): MsgAddPoolProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgAddPool",
      value: MsgAddPool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddPool.typeUrl, MsgAddPool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAddPool.aminoType, MsgAddPool.typeUrl);
function createBaseMsgAddPoolResponse(): MsgAddPoolResponse {
  return {
    poolId: BigInt(0)
  };
}
export const MsgAddPoolResponse = {
  typeUrl: "/elys.stablestake.MsgAddPoolResponse",
  is(o: any): o is MsgAddPoolResponse {
    return o && (o.$typeUrl === MsgAddPoolResponse.typeUrl || typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgAddPoolResponseSDKType {
    return o && (o.$typeUrl === MsgAddPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgAddPoolResponseAmino {
    return o && (o.$typeUrl === MsgAddPoolResponse.typeUrl || typeof o.pool_id === "bigint");
  },
  encode(message: MsgAddPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddPoolResponse {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgAddPoolResponse): JsonSafe<MsgAddPoolResponse> {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgAddPoolResponse>): MsgAddPoolResponse {
    const message = createBaseMsgAddPoolResponse();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgAddPoolResponseAmino): MsgAddPoolResponse {
    const message = createBaseMsgAddPoolResponse();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgAddPoolResponse): MsgAddPoolResponseAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddPoolResponseAminoMsg): MsgAddPoolResponse {
    return MsgAddPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPoolResponseProtoMsg): MsgAddPoolResponse {
    return MsgAddPoolResponse.decode(message.value);
  },
  toProto(message: MsgAddPoolResponse): Uint8Array {
    return MsgAddPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPoolResponse): MsgAddPoolResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgAddPoolResponse",
      value: MsgAddPoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgAddPoolResponse.typeUrl, MsgAddPoolResponse);
function createBaseMsgUpdatePool(): MsgUpdatePool {
  return {
    authority: "",
    interestRateMax: "",
    interestRateMin: "",
    interestRateIncrease: "",
    interestRateDecrease: "",
    healthGainFactor: "",
    maxLeverageRatio: "",
    poolId: BigInt(0)
  };
}
export const MsgUpdatePool = {
  typeUrl: "/elys.stablestake.MsgUpdatePool",
  aminoType: "stablestake/MsgUpdatePool",
  is(o: any): o is MsgUpdatePool {
    return o && (o.$typeUrl === MsgUpdatePool.typeUrl || typeof o.authority === "string" && typeof o.interestRateMax === "string" && typeof o.interestRateMin === "string" && typeof o.interestRateIncrease === "string" && typeof o.interestRateDecrease === "string" && typeof o.healthGainFactor === "string" && typeof o.maxLeverageRatio === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgUpdatePoolSDKType {
    return o && (o.$typeUrl === MsgUpdatePool.typeUrl || typeof o.authority === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.max_leverage_ratio === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgUpdatePoolAmino {
    return o && (o.$typeUrl === MsgUpdatePool.typeUrl || typeof o.authority === "string" && typeof o.interest_rate_max === "string" && typeof o.interest_rate_min === "string" && typeof o.interest_rate_increase === "string" && typeof o.interest_rate_decrease === "string" && typeof o.health_gain_factor === "string" && typeof o.max_leverage_ratio === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgUpdatePool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.interestRateMax !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.interestRateMax, 18).atomics);
    }
    if (message.interestRateMin !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.interestRateMin, 18).atomics);
    }
    if (message.interestRateIncrease !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.interestRateIncrease, 18).atomics);
    }
    if (message.interestRateDecrease !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.interestRateDecrease, 18).atomics);
    }
    if (message.healthGainFactor !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.healthGainFactor, 18).atomics);
    }
    if (message.maxLeverageRatio !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.maxLeverageRatio, 18).atomics);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(64).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.interestRateMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.interestRateMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.interestRateIncrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.interestRateDecrease = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.healthGainFactor = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.maxLeverageRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdatePool {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      interestRateMax: isSet(object.interestRateMax) ? String(object.interestRateMax) : "",
      interestRateMin: isSet(object.interestRateMin) ? String(object.interestRateMin) : "",
      interestRateIncrease: isSet(object.interestRateIncrease) ? String(object.interestRateIncrease) : "",
      interestRateDecrease: isSet(object.interestRateDecrease) ? String(object.interestRateDecrease) : "",
      healthGainFactor: isSet(object.healthGainFactor) ? String(object.healthGainFactor) : "",
      maxLeverageRatio: isSet(object.maxLeverageRatio) ? String(object.maxLeverageRatio) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgUpdatePool): JsonSafe<MsgUpdatePool> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.interestRateMax !== undefined && (obj.interestRateMax = message.interestRateMax);
    message.interestRateMin !== undefined && (obj.interestRateMin = message.interestRateMin);
    message.interestRateIncrease !== undefined && (obj.interestRateIncrease = message.interestRateIncrease);
    message.interestRateDecrease !== undefined && (obj.interestRateDecrease = message.interestRateDecrease);
    message.healthGainFactor !== undefined && (obj.healthGainFactor = message.healthGainFactor);
    message.maxLeverageRatio !== undefined && (obj.maxLeverageRatio = message.maxLeverageRatio);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgUpdatePool>): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    message.authority = object.authority ?? "";
    message.interestRateMax = object.interestRateMax ?? "";
    message.interestRateMin = object.interestRateMin ?? "";
    message.interestRateIncrease = object.interestRateIncrease ?? "";
    message.interestRateDecrease = object.interestRateDecrease ?? "";
    message.healthGainFactor = object.healthGainFactor ?? "";
    message.maxLeverageRatio = object.maxLeverageRatio ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdatePoolAmino): MsgUpdatePool {
    const message = createBaseMsgUpdatePool();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.interest_rate_max !== undefined && object.interest_rate_max !== null) {
      message.interestRateMax = object.interest_rate_max;
    }
    if (object.interest_rate_min !== undefined && object.interest_rate_min !== null) {
      message.interestRateMin = object.interest_rate_min;
    }
    if (object.interest_rate_increase !== undefined && object.interest_rate_increase !== null) {
      message.interestRateIncrease = object.interest_rate_increase;
    }
    if (object.interest_rate_decrease !== undefined && object.interest_rate_decrease !== null) {
      message.interestRateDecrease = object.interest_rate_decrease;
    }
    if (object.health_gain_factor !== undefined && object.health_gain_factor !== null) {
      message.healthGainFactor = object.health_gain_factor;
    }
    if (object.max_leverage_ratio !== undefined && object.max_leverage_ratio !== null) {
      message.maxLeverageRatio = object.max_leverage_ratio;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgUpdatePool): MsgUpdatePoolAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.interest_rate_max = message.interestRateMax === "" ? undefined : message.interestRateMax;
    obj.interest_rate_min = message.interestRateMin === "" ? undefined : message.interestRateMin;
    obj.interest_rate_increase = message.interestRateIncrease === "" ? undefined : message.interestRateIncrease;
    obj.interest_rate_decrease = message.interestRateDecrease === "" ? undefined : message.interestRateDecrease;
    obj.health_gain_factor = message.healthGainFactor === "" ? undefined : message.healthGainFactor;
    obj.max_leverage_ratio = message.maxLeverageRatio === "" ? undefined : message.maxLeverageRatio;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolAminoMsg): MsgUpdatePool {
    return MsgUpdatePool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdatePool): MsgUpdatePoolAminoMsg {
    return {
      type: "stablestake/MsgUpdatePool",
      value: MsgUpdatePool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdatePoolProtoMsg): MsgUpdatePool {
    return MsgUpdatePool.decode(message.value);
  },
  toProto(message: MsgUpdatePool): Uint8Array {
    return MsgUpdatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePool): MsgUpdatePoolProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUpdatePool",
      value: MsgUpdatePool.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdatePool.typeUrl, MsgUpdatePool);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdatePool.aminoType, MsgUpdatePool.typeUrl);
function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
  return {};
}
export const MsgUpdatePoolResponse = {
  typeUrl: "/elys.stablestake.MsgUpdatePoolResponse",
  is(o: any): o is MsgUpdatePoolResponse {
    return o && o.$typeUrl === MsgUpdatePoolResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdatePoolResponseSDKType {
    return o && o.$typeUrl === MsgUpdatePoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdatePoolResponseAmino {
    return o && o.$typeUrl === MsgUpdatePoolResponse.typeUrl;
  },
  encode(_: MsgUpdatePoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdatePoolResponse {
    return {};
  },
  toJSON(_: MsgUpdatePoolResponse): JsonSafe<MsgUpdatePoolResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePoolResponseAmino): MsgUpdatePoolResponse {
    const message = createBaseMsgUpdatePoolResponse();
    return message;
  },
  toAmino(_: MsgUpdatePoolResponse): MsgUpdatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePoolResponseAminoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePoolResponseProtoMsg): MsgUpdatePoolResponse {
    return MsgUpdatePoolResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePoolResponse): Uint8Array {
    return MsgUpdatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePoolResponse): MsgUpdatePoolResponseProtoMsg {
    return {
      typeUrl: "/elys.stablestake.MsgUpdatePoolResponse",
      value: MsgUpdatePoolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdatePoolResponse.typeUrl, MsgUpdatePoolResponse);