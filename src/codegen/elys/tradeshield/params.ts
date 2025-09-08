import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
/** Params defines the parameters for the module. */
export interface Params {
  marketOrderEnabled: boolean;
  stakeEnabled: boolean;
  processOrdersEnabled: boolean;
  swapEnabled: boolean;
  perpetualEnabled: boolean;
  rewardEnabled: boolean;
  leverageEnabled: boolean;
  limitProcessOrder: bigint;
  /** For incentive system v2 */
  rewardPercentage: string;
  marginError: string;
  minimumDeposit: string;
  tolerance: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/elys.tradeshield.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.Params
 */
export interface ParamsAmino {
  market_order_enabled?: boolean;
  stake_enabled?: boolean;
  process_orders_enabled?: boolean;
  swap_enabled?: boolean;
  perpetual_enabled?: boolean;
  reward_enabled?: boolean;
  leverage_enabled?: boolean;
  limit_process_order?: string;
  /**
   * For incentive system v2
   */
  reward_percentage?: string;
  margin_error?: string;
  minimum_deposit?: string;
  tolerance?: string;
}
export interface ParamsAminoMsg {
  type: "/elys.tradeshield.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  market_order_enabled: boolean;
  stake_enabled: boolean;
  process_orders_enabled: boolean;
  swap_enabled: boolean;
  perpetual_enabled: boolean;
  reward_enabled: boolean;
  leverage_enabled: boolean;
  limit_process_order: bigint;
  reward_percentage: string;
  margin_error: string;
  minimum_deposit: string;
  tolerance: string;
}
function createBaseParams(): Params {
  return {
    marketOrderEnabled: false,
    stakeEnabled: false,
    processOrdersEnabled: false,
    swapEnabled: false,
    perpetualEnabled: false,
    rewardEnabled: false,
    leverageEnabled: false,
    limitProcessOrder: BigInt(0),
    rewardPercentage: "",
    marginError: "",
    minimumDeposit: "",
    tolerance: ""
  };
}
export const Params = {
  typeUrl: "/elys.tradeshield.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.marketOrderEnabled === "boolean" && typeof o.stakeEnabled === "boolean" && typeof o.processOrdersEnabled === "boolean" && typeof o.swapEnabled === "boolean" && typeof o.perpetualEnabled === "boolean" && typeof o.rewardEnabled === "boolean" && typeof o.leverageEnabled === "boolean" && typeof o.limitProcessOrder === "bigint" && typeof o.rewardPercentage === "string" && typeof o.marginError === "string" && typeof o.minimumDeposit === "string" && typeof o.tolerance === "string");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.market_order_enabled === "boolean" && typeof o.stake_enabled === "boolean" && typeof o.process_orders_enabled === "boolean" && typeof o.swap_enabled === "boolean" && typeof o.perpetual_enabled === "boolean" && typeof o.reward_enabled === "boolean" && typeof o.leverage_enabled === "boolean" && typeof o.limit_process_order === "bigint" && typeof o.reward_percentage === "string" && typeof o.margin_error === "string" && typeof o.minimum_deposit === "string" && typeof o.tolerance === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.market_order_enabled === "boolean" && typeof o.stake_enabled === "boolean" && typeof o.process_orders_enabled === "boolean" && typeof o.swap_enabled === "boolean" && typeof o.perpetual_enabled === "boolean" && typeof o.reward_enabled === "boolean" && typeof o.leverage_enabled === "boolean" && typeof o.limit_process_order === "bigint" && typeof o.reward_percentage === "string" && typeof o.margin_error === "string" && typeof o.minimum_deposit === "string" && typeof o.tolerance === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketOrderEnabled === true) {
      writer.uint32(8).bool(message.marketOrderEnabled);
    }
    if (message.stakeEnabled === true) {
      writer.uint32(16).bool(message.stakeEnabled);
    }
    if (message.processOrdersEnabled === true) {
      writer.uint32(24).bool(message.processOrdersEnabled);
    }
    if (message.swapEnabled === true) {
      writer.uint32(32).bool(message.swapEnabled);
    }
    if (message.perpetualEnabled === true) {
      writer.uint32(40).bool(message.perpetualEnabled);
    }
    if (message.rewardEnabled === true) {
      writer.uint32(48).bool(message.rewardEnabled);
    }
    if (message.leverageEnabled === true) {
      writer.uint32(56).bool(message.leverageEnabled);
    }
    if (message.limitProcessOrder !== BigInt(0)) {
      writer.uint32(64).uint64(message.limitProcessOrder);
    }
    if (message.rewardPercentage !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.rewardPercentage, 18).atomics);
    }
    if (message.marginError !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.marginError, 18).atomics);
    }
    if (message.minimumDeposit !== "") {
      writer.uint32(90).string(message.minimumDeposit);
    }
    if (message.tolerance !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.tolerance, 18).atomics);
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
          message.marketOrderEnabled = reader.bool();
          break;
        case 2:
          message.stakeEnabled = reader.bool();
          break;
        case 3:
          message.processOrdersEnabled = reader.bool();
          break;
        case 4:
          message.swapEnabled = reader.bool();
          break;
        case 5:
          message.perpetualEnabled = reader.bool();
          break;
        case 6:
          message.rewardEnabled = reader.bool();
          break;
        case 7:
          message.leverageEnabled = reader.bool();
          break;
        case 8:
          message.limitProcessOrder = reader.uint64();
          break;
        case 9:
          message.rewardPercentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.marginError = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.minimumDeposit = reader.string();
          break;
        case 12:
          message.tolerance = Decimal.fromAtomics(reader.string(), 18).toString();
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
      marketOrderEnabled: isSet(object.marketOrderEnabled) ? Boolean(object.marketOrderEnabled) : false,
      stakeEnabled: isSet(object.stakeEnabled) ? Boolean(object.stakeEnabled) : false,
      processOrdersEnabled: isSet(object.processOrdersEnabled) ? Boolean(object.processOrdersEnabled) : false,
      swapEnabled: isSet(object.swapEnabled) ? Boolean(object.swapEnabled) : false,
      perpetualEnabled: isSet(object.perpetualEnabled) ? Boolean(object.perpetualEnabled) : false,
      rewardEnabled: isSet(object.rewardEnabled) ? Boolean(object.rewardEnabled) : false,
      leverageEnabled: isSet(object.leverageEnabled) ? Boolean(object.leverageEnabled) : false,
      limitProcessOrder: isSet(object.limitProcessOrder) ? BigInt(object.limitProcessOrder.toString()) : BigInt(0),
      rewardPercentage: isSet(object.rewardPercentage) ? String(object.rewardPercentage) : "",
      marginError: isSet(object.marginError) ? String(object.marginError) : "",
      minimumDeposit: isSet(object.minimumDeposit) ? String(object.minimumDeposit) : "",
      tolerance: isSet(object.tolerance) ? String(object.tolerance) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.marketOrderEnabled !== undefined && (obj.marketOrderEnabled = message.marketOrderEnabled);
    message.stakeEnabled !== undefined && (obj.stakeEnabled = message.stakeEnabled);
    message.processOrdersEnabled !== undefined && (obj.processOrdersEnabled = message.processOrdersEnabled);
    message.swapEnabled !== undefined && (obj.swapEnabled = message.swapEnabled);
    message.perpetualEnabled !== undefined && (obj.perpetualEnabled = message.perpetualEnabled);
    message.rewardEnabled !== undefined && (obj.rewardEnabled = message.rewardEnabled);
    message.leverageEnabled !== undefined && (obj.leverageEnabled = message.leverageEnabled);
    message.limitProcessOrder !== undefined && (obj.limitProcessOrder = (message.limitProcessOrder || BigInt(0)).toString());
    message.rewardPercentage !== undefined && (obj.rewardPercentage = message.rewardPercentage);
    message.marginError !== undefined && (obj.marginError = message.marginError);
    message.minimumDeposit !== undefined && (obj.minimumDeposit = message.minimumDeposit);
    message.tolerance !== undefined && (obj.tolerance = message.tolerance);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.marketOrderEnabled = object.marketOrderEnabled ?? false;
    message.stakeEnabled = object.stakeEnabled ?? false;
    message.processOrdersEnabled = object.processOrdersEnabled ?? false;
    message.swapEnabled = object.swapEnabled ?? false;
    message.perpetualEnabled = object.perpetualEnabled ?? false;
    message.rewardEnabled = object.rewardEnabled ?? false;
    message.leverageEnabled = object.leverageEnabled ?? false;
    message.limitProcessOrder = object.limitProcessOrder !== undefined && object.limitProcessOrder !== null ? BigInt(object.limitProcessOrder.toString()) : BigInt(0);
    message.rewardPercentage = object.rewardPercentage ?? "";
    message.marginError = object.marginError ?? "";
    message.minimumDeposit = object.minimumDeposit ?? "";
    message.tolerance = object.tolerance ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.market_order_enabled !== undefined && object.market_order_enabled !== null) {
      message.marketOrderEnabled = object.market_order_enabled;
    }
    if (object.stake_enabled !== undefined && object.stake_enabled !== null) {
      message.stakeEnabled = object.stake_enabled;
    }
    if (object.process_orders_enabled !== undefined && object.process_orders_enabled !== null) {
      message.processOrdersEnabled = object.process_orders_enabled;
    }
    if (object.swap_enabled !== undefined && object.swap_enabled !== null) {
      message.swapEnabled = object.swap_enabled;
    }
    if (object.perpetual_enabled !== undefined && object.perpetual_enabled !== null) {
      message.perpetualEnabled = object.perpetual_enabled;
    }
    if (object.reward_enabled !== undefined && object.reward_enabled !== null) {
      message.rewardEnabled = object.reward_enabled;
    }
    if (object.leverage_enabled !== undefined && object.leverage_enabled !== null) {
      message.leverageEnabled = object.leverage_enabled;
    }
    if (object.limit_process_order !== undefined && object.limit_process_order !== null) {
      message.limitProcessOrder = BigInt(object.limit_process_order);
    }
    if (object.reward_percentage !== undefined && object.reward_percentage !== null) {
      message.rewardPercentage = object.reward_percentage;
    }
    if (object.margin_error !== undefined && object.margin_error !== null) {
      message.marginError = object.margin_error;
    }
    if (object.minimum_deposit !== undefined && object.minimum_deposit !== null) {
      message.minimumDeposit = object.minimum_deposit;
    }
    if (object.tolerance !== undefined && object.tolerance !== null) {
      message.tolerance = object.tolerance;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.market_order_enabled = message.marketOrderEnabled === false ? undefined : message.marketOrderEnabled;
    obj.stake_enabled = message.stakeEnabled === false ? undefined : message.stakeEnabled;
    obj.process_orders_enabled = message.processOrdersEnabled === false ? undefined : message.processOrdersEnabled;
    obj.swap_enabled = message.swapEnabled === false ? undefined : message.swapEnabled;
    obj.perpetual_enabled = message.perpetualEnabled === false ? undefined : message.perpetualEnabled;
    obj.reward_enabled = message.rewardEnabled === false ? undefined : message.rewardEnabled;
    obj.leverage_enabled = message.leverageEnabled === false ? undefined : message.leverageEnabled;
    obj.limit_process_order = message.limitProcessOrder !== BigInt(0) ? message.limitProcessOrder?.toString() : undefined;
    obj.reward_percentage = message.rewardPercentage === "" ? undefined : message.rewardPercentage;
    obj.margin_error = message.marginError === "" ? undefined : message.marginError;
    obj.minimum_deposit = message.minimumDeposit === "" ? undefined : message.minimumDeposit;
    obj.tolerance = message.tolerance === "" ? undefined : message.tolerance;
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
      typeUrl: "/elys.tradeshield.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);