import { SpotOrderType, LegacyOrderPriceV1, LegacyOrderPriceV1Amino, LegacyOrderPriceV1SDKType, LegacyTriggerPriceV1, LegacyTriggerPriceV1Amino, LegacyTriggerPriceV1SDKType, PerpetualPosition, spotOrderTypeFromJSON, spotOrderTypeToJSON, perpetualPositionFromJSON, perpetualPositionToJSON } from "./order";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { isSet } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
import { JsonSafe } from "../../json-safe";
export interface MsgCreateSpotOrder {
  orderType: SpotOrderType;
  legacyOrderPriceV1?: LegacyOrderPriceV1;
  orderPrice: string;
  orderAmount: Coin;
  ownerAddress: string;
  orderTargetDenom: string;
}
export interface MsgCreateSpotOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCreateSpotOrder";
  value: Uint8Array;
}
/**
 * @name MsgCreateSpotOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCreateSpotOrder
 */
export interface MsgCreateSpotOrderAmino {
  order_type?: SpotOrderType;
  legacy_order_price_v1?: LegacyOrderPriceV1Amino;
  order_price?: string;
  order_amount?: CoinAmino;
  owner_address?: string;
  order_target_denom?: string;
}
export interface MsgCreateSpotOrderAminoMsg {
  type: "tradeshield/MsgCreateSpotOrder";
  value: MsgCreateSpotOrderAmino;
}
export interface MsgCreateSpotOrderSDKType {
  order_type: SpotOrderType;
  legacy_order_price_v1?: LegacyOrderPriceV1SDKType;
  order_price: string;
  order_amount: CoinSDKType;
  owner_address: string;
  order_target_denom: string;
}
export interface MsgCreateSpotOrderResponse {
  orderId: bigint;
}
export interface MsgCreateSpotOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCreateSpotOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateSpotOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCreateSpotOrderResponse
 */
export interface MsgCreateSpotOrderResponseAmino {
  order_id?: string;
}
export interface MsgCreateSpotOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgCreateSpotOrderResponse";
  value: MsgCreateSpotOrderResponseAmino;
}
export interface MsgCreateSpotOrderResponseSDKType {
  order_id: bigint;
}
export interface MsgUpdateSpotOrder {
  ownerAddress: string;
  orderId: bigint;
  legacyOrderPriceV1: LegacyOrderPriceV1;
  orderPrice: string;
}
export interface MsgUpdateSpotOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder";
  value: Uint8Array;
}
/**
 * @name MsgUpdateSpotOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgUpdateSpotOrder
 */
export interface MsgUpdateSpotOrderAmino {
  owner_address?: string;
  order_id?: string;
  legacy_order_price_v1?: LegacyOrderPriceV1Amino;
  order_price?: string;
}
export interface MsgUpdateSpotOrderAminoMsg {
  type: "tradeshield/MsgUpdateSpotOrder";
  value: MsgUpdateSpotOrderAmino;
}
export interface MsgUpdateSpotOrderSDKType {
  owner_address: string;
  order_id: bigint;
  legacy_order_price_v1: LegacyOrderPriceV1SDKType;
  order_price: string;
}
export interface MsgUpdateSpotOrderResponse {}
export interface MsgUpdateSpotOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgUpdateSpotOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateSpotOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgUpdateSpotOrderResponse
 */
export interface MsgUpdateSpotOrderResponseAmino {}
export interface MsgUpdateSpotOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgUpdateSpotOrderResponse";
  value: MsgUpdateSpotOrderResponseAmino;
}
export interface MsgUpdateSpotOrderResponseSDKType {}
export interface MsgCancelSpotOrder {
  ownerAddress: string;
  orderId: bigint;
}
export interface MsgCancelSpotOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrder";
  value: Uint8Array;
}
/**
 * @name MsgCancelSpotOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelSpotOrder
 */
export interface MsgCancelSpotOrderAmino {
  owner_address?: string;
  order_id?: string;
}
export interface MsgCancelSpotOrderAminoMsg {
  type: "tradeshield/MsgCancelSpotOrder";
  value: MsgCancelSpotOrderAmino;
}
export interface MsgCancelSpotOrderSDKType {
  owner_address: string;
  order_id: bigint;
}
export interface MsgCancelSpotOrderResponse {
  orderId: bigint;
}
export interface MsgCancelSpotOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelSpotOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelSpotOrderResponse
 */
export interface MsgCancelSpotOrderResponseAmino {
  order_id?: string;
}
export interface MsgCancelSpotOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgCancelSpotOrderResponse";
  value: MsgCancelSpotOrderResponseAmino;
}
export interface MsgCancelSpotOrderResponseSDKType {
  order_id: bigint;
}
export interface MsgCancelSpotOrders {
  creator: string;
  spotOrderIds: bigint[];
}
export interface MsgCancelSpotOrdersProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrders";
  value: Uint8Array;
}
/**
 * @name MsgCancelSpotOrdersAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelSpotOrders
 */
export interface MsgCancelSpotOrdersAmino {
  creator?: string;
  spot_order_ids?: string[];
}
export interface MsgCancelSpotOrdersAminoMsg {
  type: "tradeshield/MsgCancelSpotOrders";
  value: MsgCancelSpotOrdersAmino;
}
export interface MsgCancelSpotOrdersSDKType {
  creator: string;
  spot_order_ids: bigint[];
}
export interface MsgCancelSpotOrdersResponse {}
export interface MsgCancelSpotOrdersResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrdersResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelSpotOrdersResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelSpotOrdersResponse
 */
export interface MsgCancelSpotOrdersResponseAmino {}
export interface MsgCancelSpotOrdersResponseAminoMsg {
  type: "/elys.tradeshield.MsgCancelSpotOrdersResponse";
  value: MsgCancelSpotOrdersResponseAmino;
}
export interface MsgCancelSpotOrdersResponseSDKType {}
export interface MsgCreatePerpetualOpenOrder {
  ownerAddress: string;
  legacyTriggerPriceV1: LegacyTriggerPriceV1;
  triggerPrice: string;
  collateral: Coin;
  tradingAsset: string;
  position: PerpetualPosition;
  leverage: string;
  takeProfitPrice: string;
  stopLossPrice: string;
  poolId: bigint;
}
export interface MsgCreatePerpetualOpenOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder";
  value: Uint8Array;
}
/**
 * @name MsgCreatePerpetualOpenOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCreatePerpetualOpenOrder
 */
export interface MsgCreatePerpetualOpenOrderAmino {
  owner_address?: string;
  legacy_trigger_price_v1?: LegacyTriggerPriceV1Amino;
  trigger_price?: string;
  collateral?: CoinAmino;
  trading_asset?: string;
  position?: PerpetualPosition;
  leverage?: string;
  take_profit_price?: string;
  stop_loss_price?: string;
  pool_id?: string;
}
export interface MsgCreatePerpetualOpenOrderAminoMsg {
  type: "tradeshield/MsgCreatePerpetualOpenOrder";
  value: MsgCreatePerpetualOpenOrderAmino;
}
export interface MsgCreatePerpetualOpenOrderSDKType {
  owner_address: string;
  legacy_trigger_price_v1: LegacyTriggerPriceV1SDKType;
  trigger_price: string;
  collateral: CoinSDKType;
  trading_asset: string;
  position: PerpetualPosition;
  leverage: string;
  take_profit_price: string;
  stop_loss_price: string;
  pool_id: bigint;
}
export interface MsgCreatePerpetualOpenOrderResponse {
  orderId: bigint;
}
export interface MsgCreatePerpetualOpenOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreatePerpetualOpenOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCreatePerpetualOpenOrderResponse
 */
export interface MsgCreatePerpetualOpenOrderResponseAmino {
  order_id?: string;
}
export interface MsgCreatePerpetualOpenOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgCreatePerpetualOpenOrderResponse";
  value: MsgCreatePerpetualOpenOrderResponseAmino;
}
export interface MsgCreatePerpetualOpenOrderResponseSDKType {
  order_id: bigint;
}
export interface MsgCreatePerpetualCloseOrder {
  ownerAddress: string;
  legacyTriggerPriceV1: LegacyTriggerPriceV1;
  triggerPrice: string;
  positionId: bigint;
}
export interface MsgCreatePerpetualCloseOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder";
  value: Uint8Array;
}
/**
 * @name MsgCreatePerpetualCloseOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCreatePerpetualCloseOrder
 */
export interface MsgCreatePerpetualCloseOrderAmino {
  owner_address?: string;
  legacy_trigger_price_v1?: LegacyTriggerPriceV1Amino;
  trigger_price?: string;
  position_id?: string;
}
export interface MsgCreatePerpetualCloseOrderAminoMsg {
  type: "tradeshield/CreatePerpetualCloseOrder";
  value: MsgCreatePerpetualCloseOrderAmino;
}
export interface MsgCreatePerpetualCloseOrderSDKType {
  owner_address: string;
  legacy_trigger_price_v1: LegacyTriggerPriceV1SDKType;
  trigger_price: string;
  position_id: bigint;
}
export interface MsgCreatePerpetualCloseOrderResponse {
  orderId: bigint;
}
export interface MsgCreatePerpetualCloseOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreatePerpetualCloseOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCreatePerpetualCloseOrderResponse
 */
export interface MsgCreatePerpetualCloseOrderResponseAmino {
  order_id?: string;
}
export interface MsgCreatePerpetualCloseOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgCreatePerpetualCloseOrderResponse";
  value: MsgCreatePerpetualCloseOrderResponseAmino;
}
export interface MsgCreatePerpetualCloseOrderResponseSDKType {
  order_id: bigint;
}
export interface MsgUpdatePerpetualOrder {
  ownerAddress: string;
  orderId: bigint;
  legacyTriggerPriceV1: LegacyTriggerPriceV1;
  triggerPrice: string;
}
export interface MsgUpdatePerpetualOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder";
  value: Uint8Array;
}
/**
 * @name MsgUpdatePerpetualOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgUpdatePerpetualOrder
 */
export interface MsgUpdatePerpetualOrderAmino {
  owner_address?: string;
  order_id?: string;
  legacy_trigger_price_v1?: LegacyTriggerPriceV1Amino;
  trigger_price?: string;
}
export interface MsgUpdatePerpetualOrderAminoMsg {
  type: "tradeshield/MsgUpdatePerpetualOrder";
  value: MsgUpdatePerpetualOrderAmino;
}
export interface MsgUpdatePerpetualOrderSDKType {
  owner_address: string;
  order_id: bigint;
  legacy_trigger_price_v1: LegacyTriggerPriceV1SDKType;
  trigger_price: string;
}
export interface MsgUpdatePerpetualOrderResponse {}
export interface MsgUpdatePerpetualOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdatePerpetualOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgUpdatePerpetualOrderResponse
 */
export interface MsgUpdatePerpetualOrderResponseAmino {}
export interface MsgUpdatePerpetualOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgUpdatePerpetualOrderResponse";
  value: MsgUpdatePerpetualOrderResponseAmino;
}
export interface MsgUpdatePerpetualOrderResponseSDKType {}
export interface MsgCancelPerpetualOrder {
  ownerAddress: string;
  orderId: bigint;
}
export interface MsgCancelPerpetualOrderProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder";
  value: Uint8Array;
}
/**
 * @name MsgCancelPerpetualOrderAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelPerpetualOrder
 */
export interface MsgCancelPerpetualOrderAmino {
  owner_address?: string;
  order_id?: string;
}
export interface MsgCancelPerpetualOrderAminoMsg {
  type: "tradeshield/MsgCancelPerpetualOrder";
  value: MsgCancelPerpetualOrderAmino;
}
export interface MsgCancelPerpetualOrderSDKType {
  owner_address: string;
  order_id: bigint;
}
export interface MsgCancelPerpetualOrderResponse {
  orderId: bigint;
}
export interface MsgCancelPerpetualOrderResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrderResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelPerpetualOrderResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelPerpetualOrderResponse
 */
export interface MsgCancelPerpetualOrderResponseAmino {
  order_id?: string;
}
export interface MsgCancelPerpetualOrderResponseAminoMsg {
  type: "/elys.tradeshield.MsgCancelPerpetualOrderResponse";
  value: MsgCancelPerpetualOrderResponseAmino;
}
export interface MsgCancelPerpetualOrderResponseSDKType {
  order_id: bigint;
}
export interface MsgCancelPerpetualOrders {
  ownerAddress: string;
  orderIds: bigint[];
}
export interface MsgCancelPerpetualOrdersProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders";
  value: Uint8Array;
}
/**
 * @name MsgCancelPerpetualOrdersAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelPerpetualOrders
 */
export interface MsgCancelPerpetualOrdersAmino {
  owner_address?: string;
  order_ids?: string[];
}
export interface MsgCancelPerpetualOrdersAminoMsg {
  type: "tradeshield/MsgCancelPerpetualOrders";
  value: MsgCancelPerpetualOrdersAmino;
}
export interface MsgCancelPerpetualOrdersSDKType {
  owner_address: string;
  order_ids: bigint[];
}
export interface MsgCancelPerpetualOrdersResponse {}
export interface MsgCancelPerpetualOrdersResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrdersResponse";
  value: Uint8Array;
}
/**
 * @name MsgCancelPerpetualOrdersResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgCancelPerpetualOrdersResponse
 */
export interface MsgCancelPerpetualOrdersResponseAmino {}
export interface MsgCancelPerpetualOrdersResponseAminoMsg {
  type: "/elys.tradeshield.MsgCancelPerpetualOrdersResponse";
  value: MsgCancelPerpetualOrdersResponseAmino;
}
export interface MsgCancelPerpetualOrdersResponseSDKType {}
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
  typeUrl: "/elys.tradeshield.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "tradeshield/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/elys.tradeshield.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgExecuteOrders {
  creator: string;
  spotOrderIds: bigint[];
  perpetualOrderIds: bigint[];
}
export interface MsgExecuteOrdersProtoMsg {
  typeUrl: "/elys.tradeshield.MsgExecuteOrders";
  value: Uint8Array;
}
/**
 * @name MsgExecuteOrdersAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgExecuteOrders
 */
export interface MsgExecuteOrdersAmino {
  creator?: string;
  spot_order_ids?: string[];
  perpetual_order_ids?: string[];
}
export interface MsgExecuteOrdersAminoMsg {
  type: "tradeshield/MsgExecuteOrders";
  value: MsgExecuteOrdersAmino;
}
export interface MsgExecuteOrdersSDKType {
  creator: string;
  spot_order_ids: bigint[];
  perpetual_order_ids: bigint[];
}
export interface MsgExecuteOrdersResponse {}
export interface MsgExecuteOrdersResponseProtoMsg {
  typeUrl: "/elys.tradeshield.MsgExecuteOrdersResponse";
  value: Uint8Array;
}
/**
 * @name MsgExecuteOrdersResponseAmino
 * @package elys.tradeshield
 * @see proto type: elys.tradeshield.MsgExecuteOrdersResponse
 */
export interface MsgExecuteOrdersResponseAmino {}
export interface MsgExecuteOrdersResponseAminoMsg {
  type: "/elys.tradeshield.MsgExecuteOrdersResponse";
  value: MsgExecuteOrdersResponseAmino;
}
export interface MsgExecuteOrdersResponseSDKType {}
function createBaseMsgCreateSpotOrder(): MsgCreateSpotOrder {
  return {
    orderType: 0,
    legacyOrderPriceV1: undefined,
    orderPrice: "",
    orderAmount: Coin.fromPartial({}),
    ownerAddress: "",
    orderTargetDenom: ""
  };
}
export const MsgCreateSpotOrder = {
  typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
  aminoType: "tradeshield/MsgCreateSpotOrder",
  is(o: any): o is MsgCreateSpotOrder {
    return o && (o.$typeUrl === MsgCreateSpotOrder.typeUrl || isSet(o.orderType) && typeof o.orderPrice === "string" && Coin.is(o.orderAmount) && typeof o.ownerAddress === "string" && typeof o.orderTargetDenom === "string");
  },
  isSDK(o: any): o is MsgCreateSpotOrderSDKType {
    return o && (o.$typeUrl === MsgCreateSpotOrder.typeUrl || isSet(o.order_type) && typeof o.order_price === "string" && Coin.isSDK(o.order_amount) && typeof o.owner_address === "string" && typeof o.order_target_denom === "string");
  },
  isAmino(o: any): o is MsgCreateSpotOrderAmino {
    return o && (o.$typeUrl === MsgCreateSpotOrder.typeUrl || isSet(o.order_type) && typeof o.order_price === "string" && Coin.isAmino(o.order_amount) && typeof o.owner_address === "string" && typeof o.order_target_denom === "string");
  },
  encode(message: MsgCreateSpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderType !== 0) {
      writer.uint32(8).int32(message.orderType);
    }
    if (message.legacyOrderPriceV1 !== undefined) {
      LegacyOrderPriceV1.encode(message.legacyOrderPriceV1, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderPrice !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
    }
    if (message.orderAmount !== undefined) {
      Coin.encode(message.orderAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.ownerAddress !== "") {
      writer.uint32(34).string(message.ownerAddress);
    }
    if (message.orderTargetDenom !== "") {
      writer.uint32(42).string(message.orderTargetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderType = reader.int32() as any;
          break;
        case 2:
          message.legacyOrderPriceV1 = LegacyOrderPriceV1.decode(reader, reader.uint32());
          break;
        case 6:
          message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.orderAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.ownerAddress = reader.string();
          break;
        case 5:
          message.orderTargetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateSpotOrder {
    return {
      orderType: isSet(object.orderType) ? spotOrderTypeFromJSON(object.orderType) : -1,
      legacyOrderPriceV1: isSet(object.legacyOrderPriceV1) ? LegacyOrderPriceV1.fromJSON(object.legacyOrderPriceV1) : undefined,
      orderPrice: isSet(object.orderPrice) ? String(object.orderPrice) : "",
      orderAmount: isSet(object.orderAmount) ? Coin.fromJSON(object.orderAmount) : undefined,
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      orderTargetDenom: isSet(object.orderTargetDenom) ? String(object.orderTargetDenom) : ""
    };
  },
  toJSON(message: MsgCreateSpotOrder): JsonSafe<MsgCreateSpotOrder> {
    const obj: any = {};
    message.orderType !== undefined && (obj.orderType = spotOrderTypeToJSON(message.orderType));
    message.legacyOrderPriceV1 !== undefined && (obj.legacyOrderPriceV1 = message.legacyOrderPriceV1 ? LegacyOrderPriceV1.toJSON(message.legacyOrderPriceV1) : undefined);
    message.orderPrice !== undefined && (obj.orderPrice = message.orderPrice);
    message.orderAmount !== undefined && (obj.orderAmount = message.orderAmount ? Coin.toJSON(message.orderAmount) : undefined);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.orderTargetDenom !== undefined && (obj.orderTargetDenom = message.orderTargetDenom);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateSpotOrder>): MsgCreateSpotOrder {
    const message = createBaseMsgCreateSpotOrder();
    message.orderType = object.orderType ?? 0;
    message.legacyOrderPriceV1 = object.legacyOrderPriceV1 !== undefined && object.legacyOrderPriceV1 !== null ? LegacyOrderPriceV1.fromPartial(object.legacyOrderPriceV1) : undefined;
    message.orderPrice = object.orderPrice ?? "";
    message.orderAmount = object.orderAmount !== undefined && object.orderAmount !== null ? Coin.fromPartial(object.orderAmount) : undefined;
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderTargetDenom = object.orderTargetDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateSpotOrderAmino): MsgCreateSpotOrder {
    const message = createBaseMsgCreateSpotOrder();
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    if (object.legacy_order_price_v1 !== undefined && object.legacy_order_price_v1 !== null) {
      message.legacyOrderPriceV1 = LegacyOrderPriceV1.fromAmino(object.legacy_order_price_v1);
    }
    if (object.order_price !== undefined && object.order_price !== null) {
      message.orderPrice = object.order_price;
    }
    if (object.order_amount !== undefined && object.order_amount !== null) {
      message.orderAmount = Coin.fromAmino(object.order_amount);
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.order_target_denom !== undefined && object.order_target_denom !== null) {
      message.orderTargetDenom = object.order_target_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateSpotOrder): MsgCreateSpotOrderAmino {
    const obj: any = {};
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    obj.legacy_order_price_v1 = message.legacyOrderPriceV1 ? LegacyOrderPriceV1.toAmino(message.legacyOrderPriceV1) : undefined;
    obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
    obj.order_amount = message.orderAmount ? Coin.toAmino(message.orderAmount) : undefined;
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.order_target_denom = message.orderTargetDenom === "" ? undefined : message.orderTargetDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSpotOrderAminoMsg): MsgCreateSpotOrder {
    return MsgCreateSpotOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateSpotOrder): MsgCreateSpotOrderAminoMsg {
    return {
      type: "tradeshield/MsgCreateSpotOrder",
      value: MsgCreateSpotOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateSpotOrderProtoMsg): MsgCreateSpotOrder {
    return MsgCreateSpotOrder.decode(message.value);
  },
  toProto(message: MsgCreateSpotOrder): Uint8Array {
    return MsgCreateSpotOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSpotOrder): MsgCreateSpotOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCreateSpotOrder",
      value: MsgCreateSpotOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateSpotOrder.typeUrl, MsgCreateSpotOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateSpotOrder.aminoType, MsgCreateSpotOrder.typeUrl);
function createBaseMsgCreateSpotOrderResponse(): MsgCreateSpotOrderResponse {
  return {
    orderId: BigInt(0)
  };
}
export const MsgCreateSpotOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgCreateSpotOrderResponse",
  is(o: any): o is MsgCreateSpotOrderResponse {
    return o && (o.$typeUrl === MsgCreateSpotOrderResponse.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCreateSpotOrderResponseSDKType {
    return o && (o.$typeUrl === MsgCreateSpotOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCreateSpotOrderResponseAmino {
    return o && (o.$typeUrl === MsgCreateSpotOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: MsgCreateSpotOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSpotOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSpotOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateSpotOrderResponse {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateSpotOrderResponse): JsonSafe<MsgCreateSpotOrderResponse> {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateSpotOrderResponse>): MsgCreateSpotOrderResponse {
    const message = createBaseMsgCreateSpotOrderResponse();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateSpotOrderResponseAmino): MsgCreateSpotOrderResponse {
    const message = createBaseMsgCreateSpotOrderResponse();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCreateSpotOrderResponse): MsgCreateSpotOrderResponseAmino {
    const obj: any = {};
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSpotOrderResponseAminoMsg): MsgCreateSpotOrderResponse {
    return MsgCreateSpotOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSpotOrderResponseProtoMsg): MsgCreateSpotOrderResponse {
    return MsgCreateSpotOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateSpotOrderResponse): Uint8Array {
    return MsgCreateSpotOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSpotOrderResponse): MsgCreateSpotOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCreateSpotOrderResponse",
      value: MsgCreateSpotOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateSpotOrderResponse.typeUrl, MsgCreateSpotOrderResponse);
function createBaseMsgUpdateSpotOrder(): MsgUpdateSpotOrder {
  return {
    ownerAddress: "",
    orderId: BigInt(0),
    legacyOrderPriceV1: LegacyOrderPriceV1.fromPartial({}),
    orderPrice: ""
  };
}
export const MsgUpdateSpotOrder = {
  typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
  aminoType: "tradeshield/MsgUpdateSpotOrder",
  is(o: any): o is MsgUpdateSpotOrder {
    return o && (o.$typeUrl === MsgUpdateSpotOrder.typeUrl || typeof o.ownerAddress === "string" && typeof o.orderId === "bigint" && LegacyOrderPriceV1.is(o.legacyOrderPriceV1) && typeof o.orderPrice === "string");
  },
  isSDK(o: any): o is MsgUpdateSpotOrderSDKType {
    return o && (o.$typeUrl === MsgUpdateSpotOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint" && LegacyOrderPriceV1.isSDK(o.legacy_order_price_v1) && typeof o.order_price === "string");
  },
  isAmino(o: any): o is MsgUpdateSpotOrderAmino {
    return o && (o.$typeUrl === MsgUpdateSpotOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint" && LegacyOrderPriceV1.isAmino(o.legacy_order_price_v1) && typeof o.order_price === "string");
  },
  encode(message: MsgUpdateSpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    if (message.legacyOrderPriceV1 !== undefined) {
      LegacyOrderPriceV1.encode(message.legacyOrderPriceV1, writer.uint32(26).fork()).ldelim();
    }
    if (message.orderPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.orderPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        case 3:
          message.legacyOrderPriceV1 = LegacyOrderPriceV1.decode(reader, reader.uint32());
          break;
        case 4:
          message.orderPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateSpotOrder {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      legacyOrderPriceV1: isSet(object.legacyOrderPriceV1) ? LegacyOrderPriceV1.fromJSON(object.legacyOrderPriceV1) : undefined,
      orderPrice: isSet(object.orderPrice) ? String(object.orderPrice) : ""
    };
  },
  toJSON(message: MsgUpdateSpotOrder): JsonSafe<MsgUpdateSpotOrder> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.legacyOrderPriceV1 !== undefined && (obj.legacyOrderPriceV1 = message.legacyOrderPriceV1 ? LegacyOrderPriceV1.toJSON(message.legacyOrderPriceV1) : undefined);
    message.orderPrice !== undefined && (obj.orderPrice = message.orderPrice);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateSpotOrder>): MsgUpdateSpotOrder {
    const message = createBaseMsgUpdateSpotOrder();
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.legacyOrderPriceV1 = object.legacyOrderPriceV1 !== undefined && object.legacyOrderPriceV1 !== null ? LegacyOrderPriceV1.fromPartial(object.legacyOrderPriceV1) : undefined;
    message.orderPrice = object.orderPrice ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateSpotOrderAmino): MsgUpdateSpotOrder {
    const message = createBaseMsgUpdateSpotOrder();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.legacy_order_price_v1 !== undefined && object.legacy_order_price_v1 !== null) {
      message.legacyOrderPriceV1 = LegacyOrderPriceV1.fromAmino(object.legacy_order_price_v1);
    }
    if (object.order_price !== undefined && object.order_price !== null) {
      message.orderPrice = object.order_price;
    }
    return message;
  },
  toAmino(message: MsgUpdateSpotOrder): MsgUpdateSpotOrderAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    obj.legacy_order_price_v1 = message.legacyOrderPriceV1 ? LegacyOrderPriceV1.toAmino(message.legacyOrderPriceV1) : undefined;
    obj.order_price = message.orderPrice === "" ? undefined : message.orderPrice;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSpotOrderAminoMsg): MsgUpdateSpotOrder {
    return MsgUpdateSpotOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateSpotOrder): MsgUpdateSpotOrderAminoMsg {
    return {
      type: "tradeshield/MsgUpdateSpotOrder",
      value: MsgUpdateSpotOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateSpotOrderProtoMsg): MsgUpdateSpotOrder {
    return MsgUpdateSpotOrder.decode(message.value);
  },
  toProto(message: MsgUpdateSpotOrder): Uint8Array {
    return MsgUpdateSpotOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSpotOrder): MsgUpdateSpotOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgUpdateSpotOrder",
      value: MsgUpdateSpotOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateSpotOrder.typeUrl, MsgUpdateSpotOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateSpotOrder.aminoType, MsgUpdateSpotOrder.typeUrl);
function createBaseMsgUpdateSpotOrderResponse(): MsgUpdateSpotOrderResponse {
  return {};
}
export const MsgUpdateSpotOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgUpdateSpotOrderResponse",
  is(o: any): o is MsgUpdateSpotOrderResponse {
    return o && o.$typeUrl === MsgUpdateSpotOrderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateSpotOrderResponseSDKType {
    return o && o.$typeUrl === MsgUpdateSpotOrderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateSpotOrderResponseAmino {
    return o && o.$typeUrl === MsgUpdateSpotOrderResponse.typeUrl;
  },
  encode(_: MsgUpdateSpotOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSpotOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSpotOrderResponse();
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
  fromJSON(_: any): MsgUpdateSpotOrderResponse {
    return {};
  },
  toJSON(_: MsgUpdateSpotOrderResponse): JsonSafe<MsgUpdateSpotOrderResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateSpotOrderResponse>): MsgUpdateSpotOrderResponse {
    const message = createBaseMsgUpdateSpotOrderResponse();
    return message;
  },
  fromAmino(_: MsgUpdateSpotOrderResponseAmino): MsgUpdateSpotOrderResponse {
    const message = createBaseMsgUpdateSpotOrderResponse();
    return message;
  },
  toAmino(_: MsgUpdateSpotOrderResponse): MsgUpdateSpotOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateSpotOrderResponseAminoMsg): MsgUpdateSpotOrderResponse {
    return MsgUpdateSpotOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateSpotOrderResponseProtoMsg): MsgUpdateSpotOrderResponse {
    return MsgUpdateSpotOrderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateSpotOrderResponse): Uint8Array {
    return MsgUpdateSpotOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateSpotOrderResponse): MsgUpdateSpotOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgUpdateSpotOrderResponse",
      value: MsgUpdateSpotOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateSpotOrderResponse.typeUrl, MsgUpdateSpotOrderResponse);
function createBaseMsgCancelSpotOrder(): MsgCancelSpotOrder {
  return {
    ownerAddress: "",
    orderId: BigInt(0)
  };
}
export const MsgCancelSpotOrder = {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
  aminoType: "tradeshield/MsgCancelSpotOrder",
  is(o: any): o is MsgCancelSpotOrder {
    return o && (o.$typeUrl === MsgCancelSpotOrder.typeUrl || typeof o.ownerAddress === "string" && typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCancelSpotOrderSDKType {
    return o && (o.$typeUrl === MsgCancelSpotOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCancelSpotOrderAmino {
    return o && (o.$typeUrl === MsgCancelSpotOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint");
  },
  encode(message: MsgCancelSpotOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSpotOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSpotOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSpotOrder {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelSpotOrder): JsonSafe<MsgCancelSpotOrder> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelSpotOrder>): MsgCancelSpotOrder {
    const message = createBaseMsgCancelSpotOrder();
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelSpotOrderAmino): MsgCancelSpotOrder {
    const message = createBaseMsgCancelSpotOrder();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCancelSpotOrder): MsgCancelSpotOrderAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSpotOrderAminoMsg): MsgCancelSpotOrder {
    return MsgCancelSpotOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelSpotOrder): MsgCancelSpotOrderAminoMsg {
    return {
      type: "tradeshield/MsgCancelSpotOrder",
      value: MsgCancelSpotOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelSpotOrderProtoMsg): MsgCancelSpotOrder {
    return MsgCancelSpotOrder.decode(message.value);
  },
  toProto(message: MsgCancelSpotOrder): Uint8Array {
    return MsgCancelSpotOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSpotOrder): MsgCancelSpotOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelSpotOrder",
      value: MsgCancelSpotOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelSpotOrder.typeUrl, MsgCancelSpotOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelSpotOrder.aminoType, MsgCancelSpotOrder.typeUrl);
function createBaseMsgCancelSpotOrderResponse(): MsgCancelSpotOrderResponse {
  return {
    orderId: BigInt(0)
  };
}
export const MsgCancelSpotOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrderResponse",
  is(o: any): o is MsgCancelSpotOrderResponse {
    return o && (o.$typeUrl === MsgCancelSpotOrderResponse.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCancelSpotOrderResponseSDKType {
    return o && (o.$typeUrl === MsgCancelSpotOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCancelSpotOrderResponseAmino {
    return o && (o.$typeUrl === MsgCancelSpotOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: MsgCancelSpotOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSpotOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSpotOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSpotOrderResponse {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelSpotOrderResponse): JsonSafe<MsgCancelSpotOrderResponse> {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelSpotOrderResponse>): MsgCancelSpotOrderResponse {
    const message = createBaseMsgCancelSpotOrderResponse();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelSpotOrderResponseAmino): MsgCancelSpotOrderResponse {
    const message = createBaseMsgCancelSpotOrderResponse();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponseAmino {
    const obj: any = {};
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSpotOrderResponseAminoMsg): MsgCancelSpotOrderResponse {
    return MsgCancelSpotOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSpotOrderResponseProtoMsg): MsgCancelSpotOrderResponse {
    return MsgCancelSpotOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelSpotOrderResponse): Uint8Array {
    return MsgCancelSpotOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSpotOrderResponse): MsgCancelSpotOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelSpotOrderResponse",
      value: MsgCancelSpotOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelSpotOrderResponse.typeUrl, MsgCancelSpotOrderResponse);
function createBaseMsgCancelSpotOrders(): MsgCancelSpotOrders {
  return {
    creator: "",
    spotOrderIds: []
  };
}
export const MsgCancelSpotOrders = {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
  aminoType: "tradeshield/MsgCancelSpotOrders",
  is(o: any): o is MsgCancelSpotOrders {
    return o && (o.$typeUrl === MsgCancelSpotOrders.typeUrl || typeof o.creator === "string" && Array.isArray(o.spotOrderIds) && (!o.spotOrderIds.length || typeof o.spotOrderIds[0] === "bigint"));
  },
  isSDK(o: any): o is MsgCancelSpotOrdersSDKType {
    return o && (o.$typeUrl === MsgCancelSpotOrders.typeUrl || typeof o.creator === "string" && Array.isArray(o.spot_order_ids) && (!o.spot_order_ids.length || typeof o.spot_order_ids[0] === "bigint"));
  },
  isAmino(o: any): o is MsgCancelSpotOrdersAmino {
    return o && (o.$typeUrl === MsgCancelSpotOrders.typeUrl || typeof o.creator === "string" && Array.isArray(o.spot_order_ids) && (!o.spot_order_ids.length || typeof o.spot_order_ids[0] === "bigint"));
  },
  encode(message: MsgCancelSpotOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.spotOrderIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSpotOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSpotOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.spotOrderIds.push(reader.uint64());
            }
          } else {
            message.spotOrderIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSpotOrders {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      spotOrderIds: Array.isArray(object?.spotOrderIds) ? object.spotOrderIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgCancelSpotOrders): JsonSafe<MsgCancelSpotOrders> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.spotOrderIds) {
      obj.spotOrderIds = message.spotOrderIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.spotOrderIds = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCancelSpotOrders>): MsgCancelSpotOrders {
    const message = createBaseMsgCancelSpotOrders();
    message.creator = object.creator ?? "";
    message.spotOrderIds = object.spotOrderIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgCancelSpotOrdersAmino): MsgCancelSpotOrders {
    const message = createBaseMsgCancelSpotOrders();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.spotOrderIds = object.spot_order_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgCancelSpotOrders): MsgCancelSpotOrdersAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.spotOrderIds) {
      obj.spot_order_ids = message.spotOrderIds.map(e => e.toString());
    } else {
      obj.spot_order_ids = message.spotOrderIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCancelSpotOrdersAminoMsg): MsgCancelSpotOrders {
    return MsgCancelSpotOrders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelSpotOrders): MsgCancelSpotOrdersAminoMsg {
    return {
      type: "tradeshield/MsgCancelSpotOrders",
      value: MsgCancelSpotOrders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelSpotOrdersProtoMsg): MsgCancelSpotOrders {
    return MsgCancelSpotOrders.decode(message.value);
  },
  toProto(message: MsgCancelSpotOrders): Uint8Array {
    return MsgCancelSpotOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSpotOrders): MsgCancelSpotOrdersProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelSpotOrders",
      value: MsgCancelSpotOrders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelSpotOrders.typeUrl, MsgCancelSpotOrders);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelSpotOrders.aminoType, MsgCancelSpotOrders.typeUrl);
function createBaseMsgCancelSpotOrdersResponse(): MsgCancelSpotOrdersResponse {
  return {};
}
export const MsgCancelSpotOrdersResponse = {
  typeUrl: "/elys.tradeshield.MsgCancelSpotOrdersResponse",
  is(o: any): o is MsgCancelSpotOrdersResponse {
    return o && o.$typeUrl === MsgCancelSpotOrdersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelSpotOrdersResponseSDKType {
    return o && o.$typeUrl === MsgCancelSpotOrdersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelSpotOrdersResponseAmino {
    return o && o.$typeUrl === MsgCancelSpotOrdersResponse.typeUrl;
  },
  encode(_: MsgCancelSpotOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSpotOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSpotOrdersResponse();
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
  fromJSON(_: any): MsgCancelSpotOrdersResponse {
    return {};
  },
  toJSON(_: MsgCancelSpotOrdersResponse): JsonSafe<MsgCancelSpotOrdersResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelSpotOrdersResponse>): MsgCancelSpotOrdersResponse {
    const message = createBaseMsgCancelSpotOrdersResponse();
    return message;
  },
  fromAmino(_: MsgCancelSpotOrdersResponseAmino): MsgCancelSpotOrdersResponse {
    const message = createBaseMsgCancelSpotOrdersResponse();
    return message;
  },
  toAmino(_: MsgCancelSpotOrdersResponse): MsgCancelSpotOrdersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSpotOrdersResponseAminoMsg): MsgCancelSpotOrdersResponse {
    return MsgCancelSpotOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSpotOrdersResponseProtoMsg): MsgCancelSpotOrdersResponse {
    return MsgCancelSpotOrdersResponse.decode(message.value);
  },
  toProto(message: MsgCancelSpotOrdersResponse): Uint8Array {
    return MsgCancelSpotOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSpotOrdersResponse): MsgCancelSpotOrdersResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelSpotOrdersResponse",
      value: MsgCancelSpotOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelSpotOrdersResponse.typeUrl, MsgCancelSpotOrdersResponse);
function createBaseMsgCreatePerpetualOpenOrder(): MsgCreatePerpetualOpenOrder {
  return {
    ownerAddress: "",
    legacyTriggerPriceV1: LegacyTriggerPriceV1.fromPartial({}),
    triggerPrice: "",
    collateral: Coin.fromPartial({}),
    tradingAsset: "",
    position: 0,
    leverage: "",
    takeProfitPrice: "",
    stopLossPrice: "",
    poolId: BigInt(0)
  };
}
export const MsgCreatePerpetualOpenOrder = {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
  aminoType: "tradeshield/MsgCreatePerpetualOpenOrder",
  is(o: any): o is MsgCreatePerpetualOpenOrder {
    return o && (o.$typeUrl === MsgCreatePerpetualOpenOrder.typeUrl || typeof o.ownerAddress === "string" && LegacyTriggerPriceV1.is(o.legacyTriggerPriceV1) && typeof o.triggerPrice === "string" && Coin.is(o.collateral) && typeof o.tradingAsset === "string" && isSet(o.position) && typeof o.leverage === "string" && typeof o.takeProfitPrice === "string" && typeof o.stopLossPrice === "string" && typeof o.poolId === "bigint");
  },
  isSDK(o: any): o is MsgCreatePerpetualOpenOrderSDKType {
    return o && (o.$typeUrl === MsgCreatePerpetualOpenOrder.typeUrl || typeof o.owner_address === "string" && LegacyTriggerPriceV1.isSDK(o.legacy_trigger_price_v1) && typeof o.trigger_price === "string" && Coin.isSDK(o.collateral) && typeof o.trading_asset === "string" && isSet(o.position) && typeof o.leverage === "string" && typeof o.take_profit_price === "string" && typeof o.stop_loss_price === "string" && typeof o.pool_id === "bigint");
  },
  isAmino(o: any): o is MsgCreatePerpetualOpenOrderAmino {
    return o && (o.$typeUrl === MsgCreatePerpetualOpenOrder.typeUrl || typeof o.owner_address === "string" && LegacyTriggerPriceV1.isAmino(o.legacy_trigger_price_v1) && typeof o.trigger_price === "string" && Coin.isAmino(o.collateral) && typeof o.trading_asset === "string" && isSet(o.position) && typeof o.leverage === "string" && typeof o.take_profit_price === "string" && typeof o.stop_loss_price === "string" && typeof o.pool_id === "bigint");
  },
  encode(message: MsgCreatePerpetualOpenOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.legacyTriggerPriceV1 !== undefined) {
      LegacyTriggerPriceV1.encode(message.legacyTriggerPriceV1, writer.uint32(18).fork()).ldelim();
    }
    if (message.triggerPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    if (message.tradingAsset !== "") {
      writer.uint32(34).string(message.tradingAsset);
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.leverage, 18).atomics);
    }
    if (message.takeProfitPrice !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.takeProfitPrice, 18).atomics);
    }
    if (message.stopLossPrice !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.stopLossPrice, 18).atomics);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(72).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePerpetualOpenOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpetualOpenOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.decode(reader, reader.uint32());
          break;
        case 10:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tradingAsset = reader.string();
          break;
        case 5:
          message.position = reader.int32() as any;
          break;
        case 6:
          message.leverage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.takeProfitPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.stopLossPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePerpetualOpenOrder {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      legacyTriggerPriceV1: isSet(object.legacyTriggerPriceV1) ? LegacyTriggerPriceV1.fromJSON(object.legacyTriggerPriceV1) : undefined,
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      tradingAsset: isSet(object.tradingAsset) ? String(object.tradingAsset) : "",
      position: isSet(object.position) ? perpetualPositionFromJSON(object.position) : -1,
      leverage: isSet(object.leverage) ? String(object.leverage) : "",
      takeProfitPrice: isSet(object.takeProfitPrice) ? String(object.takeProfitPrice) : "",
      stopLossPrice: isSet(object.stopLossPrice) ? String(object.stopLossPrice) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreatePerpetualOpenOrder): JsonSafe<MsgCreatePerpetualOpenOrder> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.legacyTriggerPriceV1 !== undefined && (obj.legacyTriggerPriceV1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toJSON(message.legacyTriggerPriceV1) : undefined);
    message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
    message.collateral !== undefined && (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.tradingAsset !== undefined && (obj.tradingAsset = message.tradingAsset);
    message.position !== undefined && (obj.position = perpetualPositionToJSON(message.position));
    message.leverage !== undefined && (obj.leverage = message.leverage);
    message.takeProfitPrice !== undefined && (obj.takeProfitPrice = message.takeProfitPrice);
    message.stopLossPrice !== undefined && (obj.stopLossPrice = message.stopLossPrice);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePerpetualOpenOrder>): MsgCreatePerpetualOpenOrder {
    const message = createBaseMsgCreatePerpetualOpenOrder();
    message.ownerAddress = object.ownerAddress ?? "";
    message.legacyTriggerPriceV1 = object.legacyTriggerPriceV1 !== undefined && object.legacyTriggerPriceV1 !== null ? LegacyTriggerPriceV1.fromPartial(object.legacyTriggerPriceV1) : undefined;
    message.triggerPrice = object.triggerPrice ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    message.tradingAsset = object.tradingAsset ?? "";
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    message.takeProfitPrice = object.takeProfitPrice ?? "";
    message.stopLossPrice = object.stopLossPrice ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePerpetualOpenOrderAmino): MsgCreatePerpetualOpenOrder {
    const message = createBaseMsgCreatePerpetualOpenOrder();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.legacy_trigger_price_v1 !== undefined && object.legacy_trigger_price_v1 !== null) {
      message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.fromAmino(object.legacy_trigger_price_v1);
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    if (object.trading_asset !== undefined && object.trading_asset !== null) {
      message.tradingAsset = object.trading_asset;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = object.position;
    }
    if (object.leverage !== undefined && object.leverage !== null) {
      message.leverage = object.leverage;
    }
    if (object.take_profit_price !== undefined && object.take_profit_price !== null) {
      message.takeProfitPrice = object.take_profit_price;
    }
    if (object.stop_loss_price !== undefined && object.stop_loss_price !== null) {
      message.stopLossPrice = object.stop_loss_price;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    return message;
  },
  toAmino(message: MsgCreatePerpetualOpenOrder): MsgCreatePerpetualOpenOrderAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.legacy_trigger_price_v1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toAmino(message.legacyTriggerPriceV1) : undefined;
    obj.trigger_price = message.triggerPrice === "" ? undefined : message.triggerPrice;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    obj.trading_asset = message.tradingAsset === "" ? undefined : message.tradingAsset;
    obj.position = message.position === 0 ? undefined : message.position;
    obj.leverage = message.leverage === "" ? undefined : message.leverage;
    obj.take_profit_price = message.takeProfitPrice === "" ? undefined : message.takeProfitPrice;
    obj.stop_loss_price = message.stopLossPrice === "" ? undefined : message.stopLossPrice;
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePerpetualOpenOrderAminoMsg): MsgCreatePerpetualOpenOrder {
    return MsgCreatePerpetualOpenOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePerpetualOpenOrder): MsgCreatePerpetualOpenOrderAminoMsg {
    return {
      type: "tradeshield/MsgCreatePerpetualOpenOrder",
      value: MsgCreatePerpetualOpenOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePerpetualOpenOrderProtoMsg): MsgCreatePerpetualOpenOrder {
    return MsgCreatePerpetualOpenOrder.decode(message.value);
  },
  toProto(message: MsgCreatePerpetualOpenOrder): Uint8Array {
    return MsgCreatePerpetualOpenOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePerpetualOpenOrder): MsgCreatePerpetualOpenOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrder",
      value: MsgCreatePerpetualOpenOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePerpetualOpenOrder.typeUrl, MsgCreatePerpetualOpenOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreatePerpetualOpenOrder.aminoType, MsgCreatePerpetualOpenOrder.typeUrl);
function createBaseMsgCreatePerpetualOpenOrderResponse(): MsgCreatePerpetualOpenOrderResponse {
  return {
    orderId: BigInt(0)
  };
}
export const MsgCreatePerpetualOpenOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrderResponse",
  is(o: any): o is MsgCreatePerpetualOpenOrderResponse {
    return o && (o.$typeUrl === MsgCreatePerpetualOpenOrderResponse.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCreatePerpetualOpenOrderResponseSDKType {
    return o && (o.$typeUrl === MsgCreatePerpetualOpenOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCreatePerpetualOpenOrderResponseAmino {
    return o && (o.$typeUrl === MsgCreatePerpetualOpenOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: MsgCreatePerpetualOpenOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePerpetualOpenOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpetualOpenOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePerpetualOpenOrderResponse {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreatePerpetualOpenOrderResponse): JsonSafe<MsgCreatePerpetualOpenOrderResponse> {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePerpetualOpenOrderResponse>): MsgCreatePerpetualOpenOrderResponse {
    const message = createBaseMsgCreatePerpetualOpenOrderResponse();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePerpetualOpenOrderResponseAmino): MsgCreatePerpetualOpenOrderResponse {
    const message = createBaseMsgCreatePerpetualOpenOrderResponse();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCreatePerpetualOpenOrderResponse): MsgCreatePerpetualOpenOrderResponseAmino {
    const obj: any = {};
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePerpetualOpenOrderResponseAminoMsg): MsgCreatePerpetualOpenOrderResponse {
    return MsgCreatePerpetualOpenOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePerpetualOpenOrderResponseProtoMsg): MsgCreatePerpetualOpenOrderResponse {
    return MsgCreatePerpetualOpenOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreatePerpetualOpenOrderResponse): Uint8Array {
    return MsgCreatePerpetualOpenOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePerpetualOpenOrderResponse): MsgCreatePerpetualOpenOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCreatePerpetualOpenOrderResponse",
      value: MsgCreatePerpetualOpenOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePerpetualOpenOrderResponse.typeUrl, MsgCreatePerpetualOpenOrderResponse);
function createBaseMsgCreatePerpetualCloseOrder(): MsgCreatePerpetualCloseOrder {
  return {
    ownerAddress: "",
    legacyTriggerPriceV1: LegacyTriggerPriceV1.fromPartial({}),
    triggerPrice: "",
    positionId: BigInt(0)
  };
}
export const MsgCreatePerpetualCloseOrder = {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
  aminoType: "tradeshield/CreatePerpetualCloseOrder",
  is(o: any): o is MsgCreatePerpetualCloseOrder {
    return o && (o.$typeUrl === MsgCreatePerpetualCloseOrder.typeUrl || typeof o.ownerAddress === "string" && LegacyTriggerPriceV1.is(o.legacyTriggerPriceV1) && typeof o.triggerPrice === "string" && typeof o.positionId === "bigint");
  },
  isSDK(o: any): o is MsgCreatePerpetualCloseOrderSDKType {
    return o && (o.$typeUrl === MsgCreatePerpetualCloseOrder.typeUrl || typeof o.owner_address === "string" && LegacyTriggerPriceV1.isSDK(o.legacy_trigger_price_v1) && typeof o.trigger_price === "string" && typeof o.position_id === "bigint");
  },
  isAmino(o: any): o is MsgCreatePerpetualCloseOrderAmino {
    return o && (o.$typeUrl === MsgCreatePerpetualCloseOrder.typeUrl || typeof o.owner_address === "string" && LegacyTriggerPriceV1.isAmino(o.legacy_trigger_price_v1) && typeof o.trigger_price === "string" && typeof o.position_id === "bigint");
  },
  encode(message: MsgCreatePerpetualCloseOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.legacyTriggerPriceV1 !== undefined) {
      LegacyTriggerPriceV1.encode(message.legacyTriggerPriceV1, writer.uint32(18).fork()).ldelim();
    }
    if (message.triggerPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    if (message.positionId !== BigInt(0)) {
      writer.uint32(24).uint64(message.positionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePerpetualCloseOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpetualCloseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.decode(reader, reader.uint32());
          break;
        case 4:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.positionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePerpetualCloseOrder {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      legacyTriggerPriceV1: isSet(object.legacyTriggerPriceV1) ? LegacyTriggerPriceV1.fromJSON(object.legacyTriggerPriceV1) : undefined,
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : "",
      positionId: isSet(object.positionId) ? BigInt(object.positionId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreatePerpetualCloseOrder): JsonSafe<MsgCreatePerpetualCloseOrder> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.legacyTriggerPriceV1 !== undefined && (obj.legacyTriggerPriceV1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toJSON(message.legacyTriggerPriceV1) : undefined);
    message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
    message.positionId !== undefined && (obj.positionId = (message.positionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePerpetualCloseOrder>): MsgCreatePerpetualCloseOrder {
    const message = createBaseMsgCreatePerpetualCloseOrder();
    message.ownerAddress = object.ownerAddress ?? "";
    message.legacyTriggerPriceV1 = object.legacyTriggerPriceV1 !== undefined && object.legacyTriggerPriceV1 !== null ? LegacyTriggerPriceV1.fromPartial(object.legacyTriggerPriceV1) : undefined;
    message.triggerPrice = object.triggerPrice ?? "";
    message.positionId = object.positionId !== undefined && object.positionId !== null ? BigInt(object.positionId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePerpetualCloseOrderAmino): MsgCreatePerpetualCloseOrder {
    const message = createBaseMsgCreatePerpetualCloseOrder();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.legacy_trigger_price_v1 !== undefined && object.legacy_trigger_price_v1 !== null) {
      message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.fromAmino(object.legacy_trigger_price_v1);
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    if (object.position_id !== undefined && object.position_id !== null) {
      message.positionId = BigInt(object.position_id);
    }
    return message;
  },
  toAmino(message: MsgCreatePerpetualCloseOrder): MsgCreatePerpetualCloseOrderAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.legacy_trigger_price_v1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toAmino(message.legacyTriggerPriceV1) : undefined;
    obj.trigger_price = message.triggerPrice === "" ? undefined : message.triggerPrice;
    obj.position_id = message.positionId !== BigInt(0) ? message.positionId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePerpetualCloseOrderAminoMsg): MsgCreatePerpetualCloseOrder {
    return MsgCreatePerpetualCloseOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePerpetualCloseOrder): MsgCreatePerpetualCloseOrderAminoMsg {
    return {
      type: "tradeshield/CreatePerpetualCloseOrder",
      value: MsgCreatePerpetualCloseOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePerpetualCloseOrderProtoMsg): MsgCreatePerpetualCloseOrder {
    return MsgCreatePerpetualCloseOrder.decode(message.value);
  },
  toProto(message: MsgCreatePerpetualCloseOrder): Uint8Array {
    return MsgCreatePerpetualCloseOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePerpetualCloseOrder): MsgCreatePerpetualCloseOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrder",
      value: MsgCreatePerpetualCloseOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePerpetualCloseOrder.typeUrl, MsgCreatePerpetualCloseOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreatePerpetualCloseOrder.aminoType, MsgCreatePerpetualCloseOrder.typeUrl);
function createBaseMsgCreatePerpetualCloseOrderResponse(): MsgCreatePerpetualCloseOrderResponse {
  return {
    orderId: BigInt(0)
  };
}
export const MsgCreatePerpetualCloseOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrderResponse",
  is(o: any): o is MsgCreatePerpetualCloseOrderResponse {
    return o && (o.$typeUrl === MsgCreatePerpetualCloseOrderResponse.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCreatePerpetualCloseOrderResponseSDKType {
    return o && (o.$typeUrl === MsgCreatePerpetualCloseOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCreatePerpetualCloseOrderResponseAmino {
    return o && (o.$typeUrl === MsgCreatePerpetualCloseOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: MsgCreatePerpetualCloseOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePerpetualCloseOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePerpetualCloseOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePerpetualCloseOrderResponse {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreatePerpetualCloseOrderResponse): JsonSafe<MsgCreatePerpetualCloseOrderResponse> {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePerpetualCloseOrderResponse>): MsgCreatePerpetualCloseOrderResponse {
    const message = createBaseMsgCreatePerpetualCloseOrderResponse();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePerpetualCloseOrderResponseAmino): MsgCreatePerpetualCloseOrderResponse {
    const message = createBaseMsgCreatePerpetualCloseOrderResponse();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCreatePerpetualCloseOrderResponse): MsgCreatePerpetualCloseOrderResponseAmino {
    const obj: any = {};
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePerpetualCloseOrderResponseAminoMsg): MsgCreatePerpetualCloseOrderResponse {
    return MsgCreatePerpetualCloseOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePerpetualCloseOrderResponseProtoMsg): MsgCreatePerpetualCloseOrderResponse {
    return MsgCreatePerpetualCloseOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreatePerpetualCloseOrderResponse): Uint8Array {
    return MsgCreatePerpetualCloseOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePerpetualCloseOrderResponse): MsgCreatePerpetualCloseOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCreatePerpetualCloseOrderResponse",
      value: MsgCreatePerpetualCloseOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreatePerpetualCloseOrderResponse.typeUrl, MsgCreatePerpetualCloseOrderResponse);
function createBaseMsgUpdatePerpetualOrder(): MsgUpdatePerpetualOrder {
  return {
    ownerAddress: "",
    orderId: BigInt(0),
    legacyTriggerPriceV1: LegacyTriggerPriceV1.fromPartial({}),
    triggerPrice: ""
  };
}
export const MsgUpdatePerpetualOrder = {
  typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
  aminoType: "tradeshield/MsgUpdatePerpetualOrder",
  is(o: any): o is MsgUpdatePerpetualOrder {
    return o && (o.$typeUrl === MsgUpdatePerpetualOrder.typeUrl || typeof o.ownerAddress === "string" && typeof o.orderId === "bigint" && LegacyTriggerPriceV1.is(o.legacyTriggerPriceV1) && typeof o.triggerPrice === "string");
  },
  isSDK(o: any): o is MsgUpdatePerpetualOrderSDKType {
    return o && (o.$typeUrl === MsgUpdatePerpetualOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint" && LegacyTriggerPriceV1.isSDK(o.legacy_trigger_price_v1) && typeof o.trigger_price === "string");
  },
  isAmino(o: any): o is MsgUpdatePerpetualOrderAmino {
    return o && (o.$typeUrl === MsgUpdatePerpetualOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint" && LegacyTriggerPriceV1.isAmino(o.legacy_trigger_price_v1) && typeof o.trigger_price === "string");
  },
  encode(message: MsgUpdatePerpetualOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    if (message.legacyTriggerPriceV1 !== undefined) {
      LegacyTriggerPriceV1.encode(message.legacyTriggerPriceV1, writer.uint32(26).fork()).ldelim();
    }
    if (message.triggerPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.triggerPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePerpetualOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePerpetualOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        case 3:
          message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.decode(reader, reader.uint32());
          break;
        case 4:
          message.triggerPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdatePerpetualOrder {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      legacyTriggerPriceV1: isSet(object.legacyTriggerPriceV1) ? LegacyTriggerPriceV1.fromJSON(object.legacyTriggerPriceV1) : undefined,
      triggerPrice: isSet(object.triggerPrice) ? String(object.triggerPrice) : ""
    };
  },
  toJSON(message: MsgUpdatePerpetualOrder): JsonSafe<MsgUpdatePerpetualOrder> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.legacyTriggerPriceV1 !== undefined && (obj.legacyTriggerPriceV1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toJSON(message.legacyTriggerPriceV1) : undefined);
    message.triggerPrice !== undefined && (obj.triggerPrice = message.triggerPrice);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdatePerpetualOrder>): MsgUpdatePerpetualOrder {
    const message = createBaseMsgUpdatePerpetualOrder();
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.legacyTriggerPriceV1 = object.legacyTriggerPriceV1 !== undefined && object.legacyTriggerPriceV1 !== null ? LegacyTriggerPriceV1.fromPartial(object.legacyTriggerPriceV1) : undefined;
    message.triggerPrice = object.triggerPrice ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePerpetualOrderAmino): MsgUpdatePerpetualOrder {
    const message = createBaseMsgUpdatePerpetualOrder();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.legacy_trigger_price_v1 !== undefined && object.legacy_trigger_price_v1 !== null) {
      message.legacyTriggerPriceV1 = LegacyTriggerPriceV1.fromAmino(object.legacy_trigger_price_v1);
    }
    if (object.trigger_price !== undefined && object.trigger_price !== null) {
      message.triggerPrice = object.trigger_price;
    }
    return message;
  },
  toAmino(message: MsgUpdatePerpetualOrder): MsgUpdatePerpetualOrderAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    obj.legacy_trigger_price_v1 = message.legacyTriggerPriceV1 ? LegacyTriggerPriceV1.toAmino(message.legacyTriggerPriceV1) : undefined;
    obj.trigger_price = message.triggerPrice === "" ? undefined : message.triggerPrice;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePerpetualOrderAminoMsg): MsgUpdatePerpetualOrder {
    return MsgUpdatePerpetualOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdatePerpetualOrder): MsgUpdatePerpetualOrderAminoMsg {
    return {
      type: "tradeshield/MsgUpdatePerpetualOrder",
      value: MsgUpdatePerpetualOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdatePerpetualOrderProtoMsg): MsgUpdatePerpetualOrder {
    return MsgUpdatePerpetualOrder.decode(message.value);
  },
  toProto(message: MsgUpdatePerpetualOrder): Uint8Array {
    return MsgUpdatePerpetualOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePerpetualOrder): MsgUpdatePerpetualOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrder",
      value: MsgUpdatePerpetualOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdatePerpetualOrder.typeUrl, MsgUpdatePerpetualOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdatePerpetualOrder.aminoType, MsgUpdatePerpetualOrder.typeUrl);
function createBaseMsgUpdatePerpetualOrderResponse(): MsgUpdatePerpetualOrderResponse {
  return {};
}
export const MsgUpdatePerpetualOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrderResponse",
  is(o: any): o is MsgUpdatePerpetualOrderResponse {
    return o && o.$typeUrl === MsgUpdatePerpetualOrderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdatePerpetualOrderResponseSDKType {
    return o && o.$typeUrl === MsgUpdatePerpetualOrderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdatePerpetualOrderResponseAmino {
    return o && o.$typeUrl === MsgUpdatePerpetualOrderResponse.typeUrl;
  },
  encode(_: MsgUpdatePerpetualOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePerpetualOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePerpetualOrderResponse();
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
  fromJSON(_: any): MsgUpdatePerpetualOrderResponse {
    return {};
  },
  toJSON(_: MsgUpdatePerpetualOrderResponse): JsonSafe<MsgUpdatePerpetualOrderResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdatePerpetualOrderResponse>): MsgUpdatePerpetualOrderResponse {
    const message = createBaseMsgUpdatePerpetualOrderResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePerpetualOrderResponseAmino): MsgUpdatePerpetualOrderResponse {
    const message = createBaseMsgUpdatePerpetualOrderResponse();
    return message;
  },
  toAmino(_: MsgUpdatePerpetualOrderResponse): MsgUpdatePerpetualOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePerpetualOrderResponseAminoMsg): MsgUpdatePerpetualOrderResponse {
    return MsgUpdatePerpetualOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePerpetualOrderResponseProtoMsg): MsgUpdatePerpetualOrderResponse {
    return MsgUpdatePerpetualOrderResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePerpetualOrderResponse): Uint8Array {
    return MsgUpdatePerpetualOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePerpetualOrderResponse): MsgUpdatePerpetualOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgUpdatePerpetualOrderResponse",
      value: MsgUpdatePerpetualOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdatePerpetualOrderResponse.typeUrl, MsgUpdatePerpetualOrderResponse);
function createBaseMsgCancelPerpetualOrder(): MsgCancelPerpetualOrder {
  return {
    ownerAddress: "",
    orderId: BigInt(0)
  };
}
export const MsgCancelPerpetualOrder = {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
  aminoType: "tradeshield/MsgCancelPerpetualOrder",
  is(o: any): o is MsgCancelPerpetualOrder {
    return o && (o.$typeUrl === MsgCancelPerpetualOrder.typeUrl || typeof o.ownerAddress === "string" && typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCancelPerpetualOrderSDKType {
    return o && (o.$typeUrl === MsgCancelPerpetualOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCancelPerpetualOrderAmino {
    return o && (o.$typeUrl === MsgCancelPerpetualOrder.typeUrl || typeof o.owner_address === "string" && typeof o.order_id === "bigint");
  },
  encode(message: MsgCancelPerpetualOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelPerpetualOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPerpetualOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelPerpetualOrder {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelPerpetualOrder): JsonSafe<MsgCancelPerpetualOrder> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelPerpetualOrder>): MsgCancelPerpetualOrder {
    const message = createBaseMsgCancelPerpetualOrder();
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelPerpetualOrderAmino): MsgCancelPerpetualOrder {
    const message = createBaseMsgCancelPerpetualOrder();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCancelPerpetualOrder): MsgCancelPerpetualOrderAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelPerpetualOrderAminoMsg): MsgCancelPerpetualOrder {
    return MsgCancelPerpetualOrder.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelPerpetualOrder): MsgCancelPerpetualOrderAminoMsg {
    return {
      type: "tradeshield/MsgCancelPerpetualOrder",
      value: MsgCancelPerpetualOrder.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelPerpetualOrderProtoMsg): MsgCancelPerpetualOrder {
    return MsgCancelPerpetualOrder.decode(message.value);
  },
  toProto(message: MsgCancelPerpetualOrder): Uint8Array {
    return MsgCancelPerpetualOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPerpetualOrder): MsgCancelPerpetualOrderProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrder",
      value: MsgCancelPerpetualOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelPerpetualOrder.typeUrl, MsgCancelPerpetualOrder);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelPerpetualOrder.aminoType, MsgCancelPerpetualOrder.typeUrl);
function createBaseMsgCancelPerpetualOrderResponse(): MsgCancelPerpetualOrderResponse {
  return {
    orderId: BigInt(0)
  };
}
export const MsgCancelPerpetualOrderResponse = {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrderResponse",
  is(o: any): o is MsgCancelPerpetualOrderResponse {
    return o && (o.$typeUrl === MsgCancelPerpetualOrderResponse.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is MsgCancelPerpetualOrderResponseSDKType {
    return o && (o.$typeUrl === MsgCancelPerpetualOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is MsgCancelPerpetualOrderResponseAmino {
    return o && (o.$typeUrl === MsgCancelPerpetualOrderResponse.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: MsgCancelPerpetualOrderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelPerpetualOrderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPerpetualOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelPerpetualOrderResponse {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelPerpetualOrderResponse): JsonSafe<MsgCancelPerpetualOrderResponse> {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelPerpetualOrderResponse>): MsgCancelPerpetualOrderResponse {
    const message = createBaseMsgCancelPerpetualOrderResponse();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelPerpetualOrderResponseAmino): MsgCancelPerpetualOrderResponse {
    const message = createBaseMsgCancelPerpetualOrderResponse();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    return message;
  },
  toAmino(message: MsgCancelPerpetualOrderResponse): MsgCancelPerpetualOrderResponseAmino {
    const obj: any = {};
    obj.order_id = message.orderId !== BigInt(0) ? message.orderId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelPerpetualOrderResponseAminoMsg): MsgCancelPerpetualOrderResponse {
    return MsgCancelPerpetualOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelPerpetualOrderResponseProtoMsg): MsgCancelPerpetualOrderResponse {
    return MsgCancelPerpetualOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelPerpetualOrderResponse): Uint8Array {
    return MsgCancelPerpetualOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPerpetualOrderResponse): MsgCancelPerpetualOrderResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrderResponse",
      value: MsgCancelPerpetualOrderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelPerpetualOrderResponse.typeUrl, MsgCancelPerpetualOrderResponse);
function createBaseMsgCancelPerpetualOrders(): MsgCancelPerpetualOrders {
  return {
    ownerAddress: "",
    orderIds: []
  };
}
export const MsgCancelPerpetualOrders = {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
  aminoType: "tradeshield/MsgCancelPerpetualOrders",
  is(o: any): o is MsgCancelPerpetualOrders {
    return o && (o.$typeUrl === MsgCancelPerpetualOrders.typeUrl || typeof o.ownerAddress === "string" && Array.isArray(o.orderIds) && (!o.orderIds.length || typeof o.orderIds[0] === "bigint"));
  },
  isSDK(o: any): o is MsgCancelPerpetualOrdersSDKType {
    return o && (o.$typeUrl === MsgCancelPerpetualOrders.typeUrl || typeof o.owner_address === "string" && Array.isArray(o.order_ids) && (!o.order_ids.length || typeof o.order_ids[0] === "bigint"));
  },
  isAmino(o: any): o is MsgCancelPerpetualOrdersAmino {
    return o && (o.$typeUrl === MsgCancelPerpetualOrders.typeUrl || typeof o.owner_address === "string" && Array.isArray(o.order_ids) && (!o.order_ids.length || typeof o.order_ids[0] === "bigint"));
  },
  encode(message: MsgCancelPerpetualOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    writer.uint32(18).fork();
    for (const v of message.orderIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelPerpetualOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPerpetualOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.orderIds.push(reader.uint64());
            }
          } else {
            message.orderIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelPerpetualOrders {
    return {
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      orderIds: Array.isArray(object?.orderIds) ? object.orderIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgCancelPerpetualOrders): JsonSafe<MsgCancelPerpetualOrders> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    if (message.orderIds) {
      obj.orderIds = message.orderIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.orderIds = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCancelPerpetualOrders>): MsgCancelPerpetualOrders {
    const message = createBaseMsgCancelPerpetualOrders();
    message.ownerAddress = object.ownerAddress ?? "";
    message.orderIds = object.orderIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgCancelPerpetualOrdersAmino): MsgCancelPerpetualOrders {
    const message = createBaseMsgCancelPerpetualOrders();
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    message.orderIds = object.order_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgCancelPerpetualOrders): MsgCancelPerpetualOrdersAmino {
    const obj: any = {};
    obj.owner_address = message.ownerAddress === "" ? undefined : message.ownerAddress;
    if (message.orderIds) {
      obj.order_ids = message.orderIds.map(e => e.toString());
    } else {
      obj.order_ids = message.orderIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCancelPerpetualOrdersAminoMsg): MsgCancelPerpetualOrders {
    return MsgCancelPerpetualOrders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelPerpetualOrders): MsgCancelPerpetualOrdersAminoMsg {
    return {
      type: "tradeshield/MsgCancelPerpetualOrders",
      value: MsgCancelPerpetualOrders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelPerpetualOrdersProtoMsg): MsgCancelPerpetualOrders {
    return MsgCancelPerpetualOrders.decode(message.value);
  },
  toProto(message: MsgCancelPerpetualOrders): Uint8Array {
    return MsgCancelPerpetualOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPerpetualOrders): MsgCancelPerpetualOrdersProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrders",
      value: MsgCancelPerpetualOrders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelPerpetualOrders.typeUrl, MsgCancelPerpetualOrders);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCancelPerpetualOrders.aminoType, MsgCancelPerpetualOrders.typeUrl);
function createBaseMsgCancelPerpetualOrdersResponse(): MsgCancelPerpetualOrdersResponse {
  return {};
}
export const MsgCancelPerpetualOrdersResponse = {
  typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrdersResponse",
  is(o: any): o is MsgCancelPerpetualOrdersResponse {
    return o && o.$typeUrl === MsgCancelPerpetualOrdersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCancelPerpetualOrdersResponseSDKType {
    return o && o.$typeUrl === MsgCancelPerpetualOrdersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelPerpetualOrdersResponseAmino {
    return o && o.$typeUrl === MsgCancelPerpetualOrdersResponse.typeUrl;
  },
  encode(_: MsgCancelPerpetualOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelPerpetualOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelPerpetualOrdersResponse();
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
  fromJSON(_: any): MsgCancelPerpetualOrdersResponse {
    return {};
  },
  toJSON(_: MsgCancelPerpetualOrdersResponse): JsonSafe<MsgCancelPerpetualOrdersResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelPerpetualOrdersResponse>): MsgCancelPerpetualOrdersResponse {
    const message = createBaseMsgCancelPerpetualOrdersResponse();
    return message;
  },
  fromAmino(_: MsgCancelPerpetualOrdersResponseAmino): MsgCancelPerpetualOrdersResponse {
    const message = createBaseMsgCancelPerpetualOrdersResponse();
    return message;
  },
  toAmino(_: MsgCancelPerpetualOrdersResponse): MsgCancelPerpetualOrdersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelPerpetualOrdersResponseAminoMsg): MsgCancelPerpetualOrdersResponse {
    return MsgCancelPerpetualOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelPerpetualOrdersResponseProtoMsg): MsgCancelPerpetualOrdersResponse {
    return MsgCancelPerpetualOrdersResponse.decode(message.value);
  },
  toProto(message: MsgCancelPerpetualOrdersResponse): Uint8Array {
    return MsgCancelPerpetualOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelPerpetualOrdersResponse): MsgCancelPerpetualOrdersResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgCancelPerpetualOrdersResponse",
      value: MsgCancelPerpetualOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCancelPerpetualOrdersResponse.typeUrl, MsgCancelPerpetualOrdersResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  typeUrl: "/elys.tradeshield.MsgUpdateParams",
  aminoType: "tradeshield/MsgUpdateParams",
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
      type: "tradeshield/MsgUpdateParams",
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
      typeUrl: "/elys.tradeshield.MsgUpdateParams",
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
  typeUrl: "/elys.tradeshield.MsgUpdateParamsResponse",
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
      typeUrl: "/elys.tradeshield.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgExecuteOrders(): MsgExecuteOrders {
  return {
    creator: "",
    spotOrderIds: [],
    perpetualOrderIds: []
  };
}
export const MsgExecuteOrders = {
  typeUrl: "/elys.tradeshield.MsgExecuteOrders",
  aminoType: "tradeshield/MsgExecuteOrders",
  is(o: any): o is MsgExecuteOrders {
    return o && (o.$typeUrl === MsgExecuteOrders.typeUrl || typeof o.creator === "string" && Array.isArray(o.spotOrderIds) && (!o.spotOrderIds.length || typeof o.spotOrderIds[0] === "bigint") && Array.isArray(o.perpetualOrderIds) && (!o.perpetualOrderIds.length || typeof o.perpetualOrderIds[0] === "bigint"));
  },
  isSDK(o: any): o is MsgExecuteOrdersSDKType {
    return o && (o.$typeUrl === MsgExecuteOrders.typeUrl || typeof o.creator === "string" && Array.isArray(o.spot_order_ids) && (!o.spot_order_ids.length || typeof o.spot_order_ids[0] === "bigint") && Array.isArray(o.perpetual_order_ids) && (!o.perpetual_order_ids.length || typeof o.perpetual_order_ids[0] === "bigint"));
  },
  isAmino(o: any): o is MsgExecuteOrdersAmino {
    return o && (o.$typeUrl === MsgExecuteOrders.typeUrl || typeof o.creator === "string" && Array.isArray(o.spot_order_ids) && (!o.spot_order_ids.length || typeof o.spot_order_ids[0] === "bigint") && Array.isArray(o.perpetual_order_ids) && (!o.perpetual_order_ids.length || typeof o.perpetual_order_ids[0] === "bigint"));
  },
  encode(message: MsgExecuteOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.spotOrderIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.perpetualOrderIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteOrders {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.spotOrderIds.push(reader.uint64());
            }
          } else {
            message.spotOrderIds.push(reader.uint64());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.perpetualOrderIds.push(reader.uint64());
            }
          } else {
            message.perpetualOrderIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteOrders {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      spotOrderIds: Array.isArray(object?.spotOrderIds) ? object.spotOrderIds.map((e: any) => BigInt(e.toString())) : [],
      perpetualOrderIds: Array.isArray(object?.perpetualOrderIds) ? object.perpetualOrderIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgExecuteOrders): JsonSafe<MsgExecuteOrders> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.spotOrderIds) {
      obj.spotOrderIds = message.spotOrderIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.spotOrderIds = [];
    }
    if (message.perpetualOrderIds) {
      obj.perpetualOrderIds = message.perpetualOrderIds.map(e => (e || BigInt(0)).toString());
    } else {
      obj.perpetualOrderIds = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExecuteOrders>): MsgExecuteOrders {
    const message = createBaseMsgExecuteOrders();
    message.creator = object.creator ?? "";
    message.spotOrderIds = object.spotOrderIds?.map(e => BigInt(e.toString())) || [];
    message.perpetualOrderIds = object.perpetualOrderIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgExecuteOrdersAmino): MsgExecuteOrders {
    const message = createBaseMsgExecuteOrders();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.spotOrderIds = object.spot_order_ids?.map(e => BigInt(e)) || [];
    message.perpetualOrderIds = object.perpetual_order_ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgExecuteOrders): MsgExecuteOrdersAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.spotOrderIds) {
      obj.spot_order_ids = message.spotOrderIds.map(e => e.toString());
    } else {
      obj.spot_order_ids = message.spotOrderIds;
    }
    if (message.perpetualOrderIds) {
      obj.perpetual_order_ids = message.perpetualOrderIds.map(e => e.toString());
    } else {
      obj.perpetual_order_ids = message.perpetualOrderIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecuteOrdersAminoMsg): MsgExecuteOrders {
    return MsgExecuteOrders.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteOrders): MsgExecuteOrdersAminoMsg {
    return {
      type: "tradeshield/MsgExecuteOrders",
      value: MsgExecuteOrders.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteOrdersProtoMsg): MsgExecuteOrders {
    return MsgExecuteOrders.decode(message.value);
  },
  toProto(message: MsgExecuteOrders): Uint8Array {
    return MsgExecuteOrders.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteOrders): MsgExecuteOrdersProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgExecuteOrders",
      value: MsgExecuteOrders.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecuteOrders.typeUrl, MsgExecuteOrders);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecuteOrders.aminoType, MsgExecuteOrders.typeUrl);
function createBaseMsgExecuteOrdersResponse(): MsgExecuteOrdersResponse {
  return {};
}
export const MsgExecuteOrdersResponse = {
  typeUrl: "/elys.tradeshield.MsgExecuteOrdersResponse",
  is(o: any): o is MsgExecuteOrdersResponse {
    return o && o.$typeUrl === MsgExecuteOrdersResponse.typeUrl;
  },
  isSDK(o: any): o is MsgExecuteOrdersResponseSDKType {
    return o && o.$typeUrl === MsgExecuteOrdersResponse.typeUrl;
  },
  isAmino(o: any): o is MsgExecuteOrdersResponseAmino {
    return o && o.$typeUrl === MsgExecuteOrdersResponse.typeUrl;
  },
  encode(_: MsgExecuteOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteOrdersResponse();
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
  fromJSON(_: any): MsgExecuteOrdersResponse {
    return {};
  },
  toJSON(_: MsgExecuteOrdersResponse): JsonSafe<MsgExecuteOrdersResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgExecuteOrdersResponse>): MsgExecuteOrdersResponse {
    const message = createBaseMsgExecuteOrdersResponse();
    return message;
  },
  fromAmino(_: MsgExecuteOrdersResponseAmino): MsgExecuteOrdersResponse {
    const message = createBaseMsgExecuteOrdersResponse();
    return message;
  },
  toAmino(_: MsgExecuteOrdersResponse): MsgExecuteOrdersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecuteOrdersResponseAminoMsg): MsgExecuteOrdersResponse {
    return MsgExecuteOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteOrdersResponseProtoMsg): MsgExecuteOrdersResponse {
    return MsgExecuteOrdersResponse.decode(message.value);
  },
  toProto(message: MsgExecuteOrdersResponse): Uint8Array {
    return MsgExecuteOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteOrdersResponse): MsgExecuteOrdersResponseProtoMsg {
    return {
      typeUrl: "/elys.tradeshield.MsgExecuteOrdersResponse",
      value: MsgExecuteOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecuteOrdersResponse.typeUrl, MsgExecuteOrdersResponse);