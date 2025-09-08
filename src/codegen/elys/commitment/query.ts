import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Commitments, CommitmentsAmino, CommitmentsSDKType } from "./commitments";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/elys.commitment.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/elys.commitment.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryShowCommitmentsRequest {
  creator: string;
}
export interface QueryShowCommitmentsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryShowCommitmentsRequest";
  value: Uint8Array;
}
/**
 * @name QueryShowCommitmentsRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryShowCommitmentsRequest
 */
export interface QueryShowCommitmentsRequestAmino {
  creator?: string;
}
export interface QueryShowCommitmentsRequestAminoMsg {
  type: "/elys.commitment.QueryShowCommitmentsRequest";
  value: QueryShowCommitmentsRequestAmino;
}
export interface QueryShowCommitmentsRequestSDKType {
  creator: string;
}
export interface QueryShowCommitmentsResponse {
  commitments: Commitments;
}
export interface QueryShowCommitmentsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryShowCommitmentsResponse";
  value: Uint8Array;
}
/**
 * @name QueryShowCommitmentsResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryShowCommitmentsResponse
 */
export interface QueryShowCommitmentsResponseAmino {
  commitments: CommitmentsAmino;
}
export interface QueryShowCommitmentsResponseAminoMsg {
  type: "/elys.commitment.QueryShowCommitmentsResponse";
  value: QueryShowCommitmentsResponseAmino;
}
export interface QueryShowCommitmentsResponseSDKType {
  commitments: CommitmentsSDKType;
}
export interface QueryNumberOfCommitmentsRequest {}
export interface QueryNumberOfCommitmentsRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsRequest";
  value: Uint8Array;
}
/**
 * @name QueryNumberOfCommitmentsRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryNumberOfCommitmentsRequest
 */
export interface QueryNumberOfCommitmentsRequestAmino {}
export interface QueryNumberOfCommitmentsRequestAminoMsg {
  type: "/elys.commitment.QueryNumberOfCommitmentsRequest";
  value: QueryNumberOfCommitmentsRequestAmino;
}
export interface QueryNumberOfCommitmentsRequestSDKType {}
export interface QueryNumberOfCommitmentsResponse {
  number: bigint;
}
export interface QueryNumberOfCommitmentsResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsResponse";
  value: Uint8Array;
}
/**
 * @name QueryNumberOfCommitmentsResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryNumberOfCommitmentsResponse
 */
export interface QueryNumberOfCommitmentsResponseAmino {
  number?: string;
}
export interface QueryNumberOfCommitmentsResponseAminoMsg {
  type: "/elys.commitment.QueryNumberOfCommitmentsResponse";
  value: QueryNumberOfCommitmentsResponseAmino;
}
export interface QueryNumberOfCommitmentsResponseSDKType {
  number: bigint;
}
export interface QueryCommittedTokensLockedRequest {
  address: string;
}
export interface QueryCommittedTokensLockedRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedRequest";
  value: Uint8Array;
}
/**
 * @name QueryCommittedTokensLockedRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryCommittedTokensLockedRequest
 */
export interface QueryCommittedTokensLockedRequestAmino {
  address?: string;
}
export interface QueryCommittedTokensLockedRequestAminoMsg {
  type: "/elys.commitment.QueryCommittedTokensLockedRequest";
  value: QueryCommittedTokensLockedRequestAmino;
}
export interface QueryCommittedTokensLockedRequestSDKType {
  address: string;
}
export interface QueryCommittedTokensLockedResponse {
  address: string;
  lockedCommitted: Coin[];
  totalCommitted: Coin[];
}
export interface QueryCommittedTokensLockedResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedResponse";
  value: Uint8Array;
}
/**
 * @name QueryCommittedTokensLockedResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryCommittedTokensLockedResponse
 */
export interface QueryCommittedTokensLockedResponseAmino {
  address?: string;
  locked_committed?: CoinAmino[];
  total_committed?: CoinAmino[];
}
export interface QueryCommittedTokensLockedResponseAminoMsg {
  type: "/elys.commitment.QueryCommittedTokensLockedResponse";
  value: QueryCommittedTokensLockedResponseAmino;
}
export interface QueryCommittedTokensLockedResponseSDKType {
  address: string;
  locked_committed: CoinSDKType[];
  total_committed: CoinSDKType[];
}
export interface QueryCommitmentVestingInfoRequest {
  address: string;
}
export interface QueryCommitmentVestingInfoRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoRequest";
  value: Uint8Array;
}
/**
 * @name QueryCommitmentVestingInfoRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryCommitmentVestingInfoRequest
 */
export interface QueryCommitmentVestingInfoRequestAmino {
  address?: string;
}
export interface QueryCommitmentVestingInfoRequestAminoMsg {
  type: "/elys.commitment.QueryCommitmentVestingInfoRequest";
  value: QueryCommitmentVestingInfoRequestAmino;
}
export interface QueryCommitmentVestingInfoRequestSDKType {
  address: string;
}
export interface QueryCommitmentVestingInfoResponse {
  total: string;
  vestingDetails: VestingDetails[];
}
export interface QueryCommitmentVestingInfoResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoResponse";
  value: Uint8Array;
}
/**
 * @name QueryCommitmentVestingInfoResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryCommitmentVestingInfoResponse
 */
export interface QueryCommitmentVestingInfoResponseAmino {
  total?: string;
  vesting_details: VestingDetailsAmino[];
}
export interface QueryCommitmentVestingInfoResponseAminoMsg {
  type: "/elys.commitment.QueryCommitmentVestingInfoResponse";
  value: QueryCommitmentVestingInfoResponseAmino;
}
export interface QueryCommitmentVestingInfoResponseSDKType {
  total: string;
  vesting_details: VestingDetailsSDKType[];
}
export interface VestingDetails {
  id: string;
  totalVesting: string;
  claimed: string;
  vestedSoFar: string;
  remainingBlocks: bigint;
}
export interface VestingDetailsProtoMsg {
  typeUrl: "/elys.commitment.VestingDetails";
  value: Uint8Array;
}
/**
 * @name VestingDetailsAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.VestingDetails
 */
export interface VestingDetailsAmino {
  id?: string;
  total_vesting?: string;
  claimed?: string;
  vested_so_far?: string;
  remaining_blocks?: string;
}
export interface VestingDetailsAminoMsg {
  type: "/elys.commitment.VestingDetails";
  value: VestingDetailsAmino;
}
export interface VestingDetailsSDKType {
  id: string;
  total_vesting: string;
  claimed: string;
  vested_so_far: string;
  remaining_blocks: bigint;
}
export interface QueryAirDropRequest {
  address: string;
}
export interface QueryAirDropRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryAirDropRequest";
  value: Uint8Array;
}
/**
 * @name QueryAirDropRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryAirDropRequest
 */
export interface QueryAirDropRequestAmino {
  address?: string;
}
export interface QueryAirDropRequestAminoMsg {
  type: "/elys.commitment.QueryAirDropRequest";
  value: QueryAirDropRequestAmino;
}
export interface QueryAirDropRequestSDKType {
  address: string;
}
export interface QueryAirDropResponse {
  atomStaking: string;
  cadet: string;
  nftHolder: string;
  governor: string;
  claimed: boolean;
}
export interface QueryAirDropResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryAirDropResponse";
  value: Uint8Array;
}
/**
 * @name QueryAirDropResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryAirDropResponse
 */
export interface QueryAirDropResponseAmino {
  atom_staking?: string;
  cadet?: string;
  nft_holder?: string;
  governor?: string;
  claimed?: boolean;
}
export interface QueryAirDropResponseAminoMsg {
  type: "/elys.commitment.QueryAirDropResponse";
  value: QueryAirDropResponseAmino;
}
export interface QueryAirDropResponseSDKType {
  atom_staking: string;
  cadet: string;
  nft_holder: string;
  governor: string;
  claimed: boolean;
}
export interface QueryTotalAirDropClaimedRequest {}
export interface QueryTotalAirDropClaimedRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalAirDropClaimedRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryTotalAirDropClaimedRequest
 */
export interface QueryTotalAirDropClaimedRequestAmino {}
export interface QueryTotalAirDropClaimedRequestAminoMsg {
  type: "/elys.commitment.QueryTotalAirDropClaimedRequest";
  value: QueryTotalAirDropClaimedRequestAmino;
}
export interface QueryTotalAirDropClaimedRequestSDKType {}
export interface QueryTotalAirDropClaimedResponse {
  totalElysClaimed: string;
  totalEdenClaimed: string;
}
export interface QueryTotalAirDropClaimedResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalAirDropClaimedResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryTotalAirDropClaimedResponse
 */
export interface QueryTotalAirDropClaimedResponseAmino {
  total_elys_claimed?: string;
  total_eden_claimed?: string;
}
export interface QueryTotalAirDropClaimedResponseAminoMsg {
  type: "/elys.commitment.QueryTotalAirDropClaimedResponse";
  value: QueryTotalAirDropClaimedResponseAmino;
}
export interface QueryTotalAirDropClaimedResponseSDKType {
  total_elys_claimed: string;
  total_eden_claimed: string;
}
export interface QueryKolRequest {
  address: string;
}
export interface QueryKolRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryKolRequest";
  value: Uint8Array;
}
/**
 * @name QueryKolRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryKolRequest
 */
export interface QueryKolRequestAmino {
  address?: string;
}
export interface QueryKolRequestAminoMsg {
  type: "/elys.commitment.QueryKolRequest";
  value: QueryKolRequestAmino;
}
export interface QueryKolRequestSDKType {
  address: string;
}
export interface QueryKolResponse {
  elysAmount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface QueryKolResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryKolResponse";
  value: Uint8Array;
}
/**
 * @name QueryKolResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryKolResponse
 */
export interface QueryKolResponseAmino {
  elys_amount?: string;
  claimed?: boolean;
  refunded?: boolean;
}
export interface QueryKolResponseAminoMsg {
  type: "/elys.commitment.QueryKolResponse";
  value: QueryKolResponseAmino;
}
export interface QueryKolResponseSDKType {
  elys_amount: string;
  claimed: boolean;
  refunded: boolean;
}
export interface QueryTotalSupplyRequest {}
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalSupplyRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalSupplyRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryTotalSupplyRequest
 */
export interface QueryTotalSupplyRequestAmino {}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "/elys.commitment.QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
}
export interface QueryTotalSupplyRequestSDKType {}
export interface QueryTotalSupplyResponse {
  totalEden: string;
  totalEdenb: string;
  totalEdenVested: string;
}
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalSupplyResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalSupplyResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryTotalSupplyResponse
 */
export interface QueryTotalSupplyResponseAmino {
  total_eden?: string;
  total_edenb?: string;
  total_eden_vested?: string;
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "/elys.commitment.QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
}
export interface QueryTotalSupplyResponseSDKType {
  total_eden: string;
  total_edenb: string;
  total_eden_vested: string;
}
export interface QueryRewardProgramRequest {
  address: string;
}
export interface QueryRewardProgramRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryRewardProgramRequest";
  value: Uint8Array;
}
/**
 * @name QueryRewardProgramRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryRewardProgramRequest
 */
export interface QueryRewardProgramRequestAmino {
  address?: string;
}
export interface QueryRewardProgramRequestAminoMsg {
  type: "/elys.commitment.QueryRewardProgramRequest";
  value: QueryRewardProgramRequestAmino;
}
export interface QueryRewardProgramRequestSDKType {
  address: string;
}
export interface QueryRewardProgramResponse {
  amount: string;
  claimed: boolean;
}
export interface QueryRewardProgramResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryRewardProgramResponse";
  value: Uint8Array;
}
/**
 * @name QueryRewardProgramResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryRewardProgramResponse
 */
export interface QueryRewardProgramResponseAmino {
  amount?: string;
  claimed?: boolean;
}
export interface QueryRewardProgramResponseAminoMsg {
  type: "/elys.commitment.QueryRewardProgramResponse";
  value: QueryRewardProgramResponseAmino;
}
export interface QueryRewardProgramResponseSDKType {
  amount: string;
  claimed: boolean;
}
export interface QueryTotalRewardProgramClaimedRequest {}
export interface QueryTotalRewardProgramClaimedRequestProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalRewardProgramClaimedRequest";
  value: Uint8Array;
}
/**
 * @name QueryTotalRewardProgramClaimedRequestAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryTotalRewardProgramClaimedRequest
 */
export interface QueryTotalRewardProgramClaimedRequestAmino {}
export interface QueryTotalRewardProgramClaimedRequestAminoMsg {
  type: "/elys.commitment.QueryTotalRewardProgramClaimedRequest";
  value: QueryTotalRewardProgramClaimedRequestAmino;
}
export interface QueryTotalRewardProgramClaimedRequestSDKType {}
export interface QueryTotalRewardProgramClaimedResponse {
  totalEdenClaimed: string;
}
export interface QueryTotalRewardProgramClaimedResponseProtoMsg {
  typeUrl: "/elys.commitment.QueryTotalRewardProgramClaimedResponse";
  value: Uint8Array;
}
/**
 * @name QueryTotalRewardProgramClaimedResponseAmino
 * @package elys.commitment
 * @see proto type: elys.commitment.QueryTotalRewardProgramClaimedResponse
 */
export interface QueryTotalRewardProgramClaimedResponseAmino {
  total_eden_claimed?: string;
}
export interface QueryTotalRewardProgramClaimedResponseAminoMsg {
  type: "/elys.commitment.QueryTotalRewardProgramClaimedResponse";
  value: QueryTotalRewardProgramClaimedResponseAmino;
}
export interface QueryTotalRewardProgramClaimedResponseSDKType {
  total_eden_claimed: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/elys.commitment.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/elys.commitment.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryShowCommitmentsRequest(): QueryShowCommitmentsRequest {
  return {
    creator: ""
  };
}
export const QueryShowCommitmentsRequest = {
  typeUrl: "/elys.commitment.QueryShowCommitmentsRequest",
  is(o: any): o is QueryShowCommitmentsRequest {
    return o && (o.$typeUrl === QueryShowCommitmentsRequest.typeUrl || typeof o.creator === "string");
  },
  isSDK(o: any): o is QueryShowCommitmentsRequestSDKType {
    return o && (o.$typeUrl === QueryShowCommitmentsRequest.typeUrl || typeof o.creator === "string");
  },
  isAmino(o: any): o is QueryShowCommitmentsRequestAmino {
    return o && (o.$typeUrl === QueryShowCommitmentsRequest.typeUrl || typeof o.creator === "string");
  },
  encode(message: QueryShowCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowCommitmentsRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },
  toJSON(message: QueryShowCommitmentsRequest): JsonSafe<QueryShowCommitmentsRequest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: Partial<QueryShowCommitmentsRequest>): QueryShowCommitmentsRequest {
    const message = createBaseQueryShowCommitmentsRequest();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryShowCommitmentsRequestAmino): QueryShowCommitmentsRequest {
    const message = createBaseQueryShowCommitmentsRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryShowCommitmentsRequest): QueryShowCommitmentsRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryShowCommitmentsRequestAminoMsg): QueryShowCommitmentsRequest {
    return QueryShowCommitmentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCommitmentsRequestProtoMsg): QueryShowCommitmentsRequest {
    return QueryShowCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryShowCommitmentsRequest): Uint8Array {
    return QueryShowCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCommitmentsRequest): QueryShowCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryShowCommitmentsRequest",
      value: QueryShowCommitmentsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryShowCommitmentsRequest.typeUrl, QueryShowCommitmentsRequest);
function createBaseQueryShowCommitmentsResponse(): QueryShowCommitmentsResponse {
  return {
    commitments: Commitments.fromPartial({})
  };
}
export const QueryShowCommitmentsResponse = {
  typeUrl: "/elys.commitment.QueryShowCommitmentsResponse",
  is(o: any): o is QueryShowCommitmentsResponse {
    return o && (o.$typeUrl === QueryShowCommitmentsResponse.typeUrl || Commitments.is(o.commitments));
  },
  isSDK(o: any): o is QueryShowCommitmentsResponseSDKType {
    return o && (o.$typeUrl === QueryShowCommitmentsResponse.typeUrl || Commitments.isSDK(o.commitments));
  },
  isAmino(o: any): o is QueryShowCommitmentsResponseAmino {
    return o && (o.$typeUrl === QueryShowCommitmentsResponse.typeUrl || Commitments.isAmino(o.commitments));
  },
  encode(message: QueryShowCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitments !== undefined) {
      Commitments.encode(message.commitments, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryShowCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments = Commitments.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryShowCommitmentsResponse {
    return {
      commitments: isSet(object.commitments) ? Commitments.fromJSON(object.commitments) : undefined
    };
  },
  toJSON(message: QueryShowCommitmentsResponse): JsonSafe<QueryShowCommitmentsResponse> {
    const obj: any = {};
    message.commitments !== undefined && (obj.commitments = message.commitments ? Commitments.toJSON(message.commitments) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryShowCommitmentsResponse>): QueryShowCommitmentsResponse {
    const message = createBaseQueryShowCommitmentsResponse();
    message.commitments = object.commitments !== undefined && object.commitments !== null ? Commitments.fromPartial(object.commitments) : undefined;
    return message;
  },
  fromAmino(object: QueryShowCommitmentsResponseAmino): QueryShowCommitmentsResponse {
    const message = createBaseQueryShowCommitmentsResponse();
    if (object.commitments !== undefined && object.commitments !== null) {
      message.commitments = Commitments.fromAmino(object.commitments);
    }
    return message;
  },
  toAmino(message: QueryShowCommitmentsResponse): QueryShowCommitmentsResponseAmino {
    const obj: any = {};
    obj.commitments = message.commitments ? Commitments.toAmino(message.commitments) : Commitments.toAmino(Commitments.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryShowCommitmentsResponseAminoMsg): QueryShowCommitmentsResponse {
    return QueryShowCommitmentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryShowCommitmentsResponseProtoMsg): QueryShowCommitmentsResponse {
    return QueryShowCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryShowCommitmentsResponse): Uint8Array {
    return QueryShowCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryShowCommitmentsResponse): QueryShowCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryShowCommitmentsResponse",
      value: QueryShowCommitmentsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryShowCommitmentsResponse.typeUrl, QueryShowCommitmentsResponse);
function createBaseQueryNumberOfCommitmentsRequest(): QueryNumberOfCommitmentsRequest {
  return {};
}
export const QueryNumberOfCommitmentsRequest = {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsRequest",
  is(o: any): o is QueryNumberOfCommitmentsRequest {
    return o && o.$typeUrl === QueryNumberOfCommitmentsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryNumberOfCommitmentsRequestSDKType {
    return o && o.$typeUrl === QueryNumberOfCommitmentsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNumberOfCommitmentsRequestAmino {
    return o && o.$typeUrl === QueryNumberOfCommitmentsRequest.typeUrl;
  },
  encode(_: QueryNumberOfCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumberOfCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumberOfCommitmentsRequest();
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
  fromJSON(_: any): QueryNumberOfCommitmentsRequest {
    return {};
  },
  toJSON(_: QueryNumberOfCommitmentsRequest): JsonSafe<QueryNumberOfCommitmentsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryNumberOfCommitmentsRequest>): QueryNumberOfCommitmentsRequest {
    const message = createBaseQueryNumberOfCommitmentsRequest();
    return message;
  },
  fromAmino(_: QueryNumberOfCommitmentsRequestAmino): QueryNumberOfCommitmentsRequest {
    const message = createBaseQueryNumberOfCommitmentsRequest();
    return message;
  },
  toAmino(_: QueryNumberOfCommitmentsRequest): QueryNumberOfCommitmentsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNumberOfCommitmentsRequestAminoMsg): QueryNumberOfCommitmentsRequest {
    return QueryNumberOfCommitmentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumberOfCommitmentsRequestProtoMsg): QueryNumberOfCommitmentsRequest {
    return QueryNumberOfCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryNumberOfCommitmentsRequest): Uint8Array {
    return QueryNumberOfCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumberOfCommitmentsRequest): QueryNumberOfCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryNumberOfCommitmentsRequest",
      value: QueryNumberOfCommitmentsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNumberOfCommitmentsRequest.typeUrl, QueryNumberOfCommitmentsRequest);
function createBaseQueryNumberOfCommitmentsResponse(): QueryNumberOfCommitmentsResponse {
  return {
    number: BigInt(0)
  };
}
export const QueryNumberOfCommitmentsResponse = {
  typeUrl: "/elys.commitment.QueryNumberOfCommitmentsResponse",
  is(o: any): o is QueryNumberOfCommitmentsResponse {
    return o && (o.$typeUrl === QueryNumberOfCommitmentsResponse.typeUrl || typeof o.number === "bigint");
  },
  isSDK(o: any): o is QueryNumberOfCommitmentsResponseSDKType {
    return o && (o.$typeUrl === QueryNumberOfCommitmentsResponse.typeUrl || typeof o.number === "bigint");
  },
  isAmino(o: any): o is QueryNumberOfCommitmentsResponseAmino {
    return o && (o.$typeUrl === QueryNumberOfCommitmentsResponse.typeUrl || typeof o.number === "bigint");
  },
  encode(message: QueryNumberOfCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.number !== BigInt(0)) {
      writer.uint32(8).int64(message.number);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumberOfCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumberOfCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNumberOfCommitmentsResponse {
    return {
      number: isSet(object.number) ? BigInt(object.number.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryNumberOfCommitmentsResponse): JsonSafe<QueryNumberOfCommitmentsResponse> {
    const obj: any = {};
    message.number !== undefined && (obj.number = (message.number || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryNumberOfCommitmentsResponse>): QueryNumberOfCommitmentsResponse {
    const message = createBaseQueryNumberOfCommitmentsResponse();
    message.number = object.number !== undefined && object.number !== null ? BigInt(object.number.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryNumberOfCommitmentsResponseAmino): QueryNumberOfCommitmentsResponse {
    const message = createBaseQueryNumberOfCommitmentsResponse();
    if (object.number !== undefined && object.number !== null) {
      message.number = BigInt(object.number);
    }
    return message;
  },
  toAmino(message: QueryNumberOfCommitmentsResponse): QueryNumberOfCommitmentsResponseAmino {
    const obj: any = {};
    obj.number = message.number !== BigInt(0) ? message.number?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNumberOfCommitmentsResponseAminoMsg): QueryNumberOfCommitmentsResponse {
    return QueryNumberOfCommitmentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNumberOfCommitmentsResponseProtoMsg): QueryNumberOfCommitmentsResponse {
    return QueryNumberOfCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryNumberOfCommitmentsResponse): Uint8Array {
    return QueryNumberOfCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumberOfCommitmentsResponse): QueryNumberOfCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryNumberOfCommitmentsResponse",
      value: QueryNumberOfCommitmentsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNumberOfCommitmentsResponse.typeUrl, QueryNumberOfCommitmentsResponse);
function createBaseQueryCommittedTokensLockedRequest(): QueryCommittedTokensLockedRequest {
  return {
    address: ""
  };
}
export const QueryCommittedTokensLockedRequest = {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedRequest",
  is(o: any): o is QueryCommittedTokensLockedRequest {
    return o && (o.$typeUrl === QueryCommittedTokensLockedRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryCommittedTokensLockedRequestSDKType {
    return o && (o.$typeUrl === QueryCommittedTokensLockedRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryCommittedTokensLockedRequestAmino {
    return o && (o.$typeUrl === QueryCommittedTokensLockedRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryCommittedTokensLockedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommittedTokensLockedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommittedTokensLockedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommittedTokensLockedRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryCommittedTokensLockedRequest): JsonSafe<QueryCommittedTokensLockedRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryCommittedTokensLockedRequest>): QueryCommittedTokensLockedRequest {
    const message = createBaseQueryCommittedTokensLockedRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCommittedTokensLockedRequestAmino): QueryCommittedTokensLockedRequest {
    const message = createBaseQueryCommittedTokensLockedRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCommittedTokensLockedRequest): QueryCommittedTokensLockedRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCommittedTokensLockedRequestAminoMsg): QueryCommittedTokensLockedRequest {
    return QueryCommittedTokensLockedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommittedTokensLockedRequestProtoMsg): QueryCommittedTokensLockedRequest {
    return QueryCommittedTokensLockedRequest.decode(message.value);
  },
  toProto(message: QueryCommittedTokensLockedRequest): Uint8Array {
    return QueryCommittedTokensLockedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommittedTokensLockedRequest): QueryCommittedTokensLockedRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommittedTokensLockedRequest",
      value: QueryCommittedTokensLockedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCommittedTokensLockedRequest.typeUrl, QueryCommittedTokensLockedRequest);
function createBaseQueryCommittedTokensLockedResponse(): QueryCommittedTokensLockedResponse {
  return {
    address: "",
    lockedCommitted: [],
    totalCommitted: []
  };
}
export const QueryCommittedTokensLockedResponse = {
  typeUrl: "/elys.commitment.QueryCommittedTokensLockedResponse",
  is(o: any): o is QueryCommittedTokensLockedResponse {
    return o && (o.$typeUrl === QueryCommittedTokensLockedResponse.typeUrl || typeof o.address === "string" && Array.isArray(o.lockedCommitted) && (!o.lockedCommitted.length || Coin.is(o.lockedCommitted[0])) && Array.isArray(o.totalCommitted) && (!o.totalCommitted.length || Coin.is(o.totalCommitted[0])));
  },
  isSDK(o: any): o is QueryCommittedTokensLockedResponseSDKType {
    return o && (o.$typeUrl === QueryCommittedTokensLockedResponse.typeUrl || typeof o.address === "string" && Array.isArray(o.locked_committed) && (!o.locked_committed.length || Coin.isSDK(o.locked_committed[0])) && Array.isArray(o.total_committed) && (!o.total_committed.length || Coin.isSDK(o.total_committed[0])));
  },
  isAmino(o: any): o is QueryCommittedTokensLockedResponseAmino {
    return o && (o.$typeUrl === QueryCommittedTokensLockedResponse.typeUrl || typeof o.address === "string" && Array.isArray(o.locked_committed) && (!o.locked_committed.length || Coin.isAmino(o.locked_committed[0])) && Array.isArray(o.total_committed) && (!o.total_committed.length || Coin.isAmino(o.total_committed[0])));
  },
  encode(message: QueryCommittedTokensLockedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.lockedCommitted) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.totalCommitted) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommittedTokensLockedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommittedTokensLockedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.lockedCommitted.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalCommitted.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommittedTokensLockedResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      lockedCommitted: Array.isArray(object?.lockedCommitted) ? object.lockedCommitted.map((e: any) => Coin.fromJSON(e)) : [],
      totalCommitted: Array.isArray(object?.totalCommitted) ? object.totalCommitted.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCommittedTokensLockedResponse): JsonSafe<QueryCommittedTokensLockedResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.lockedCommitted) {
      obj.lockedCommitted = message.lockedCommitted.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.lockedCommitted = [];
    }
    if (message.totalCommitted) {
      obj.totalCommitted = message.totalCommitted.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalCommitted = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCommittedTokensLockedResponse>): QueryCommittedTokensLockedResponse {
    const message = createBaseQueryCommittedTokensLockedResponse();
    message.address = object.address ?? "";
    message.lockedCommitted = object.lockedCommitted?.map(e => Coin.fromPartial(e)) || [];
    message.totalCommitted = object.totalCommitted?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommittedTokensLockedResponseAmino): QueryCommittedTokensLockedResponse {
    const message = createBaseQueryCommittedTokensLockedResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.lockedCommitted = object.locked_committed?.map(e => Coin.fromAmino(e)) || [];
    message.totalCommitted = object.total_committed?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommittedTokensLockedResponse): QueryCommittedTokensLockedResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.lockedCommitted) {
      obj.locked_committed = message.lockedCommitted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.locked_committed = message.lockedCommitted;
    }
    if (message.totalCommitted) {
      obj.total_committed = message.totalCommitted.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_committed = message.totalCommitted;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommittedTokensLockedResponseAminoMsg): QueryCommittedTokensLockedResponse {
    return QueryCommittedTokensLockedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommittedTokensLockedResponseProtoMsg): QueryCommittedTokensLockedResponse {
    return QueryCommittedTokensLockedResponse.decode(message.value);
  },
  toProto(message: QueryCommittedTokensLockedResponse): Uint8Array {
    return QueryCommittedTokensLockedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommittedTokensLockedResponse): QueryCommittedTokensLockedResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommittedTokensLockedResponse",
      value: QueryCommittedTokensLockedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCommittedTokensLockedResponse.typeUrl, QueryCommittedTokensLockedResponse);
function createBaseQueryCommitmentVestingInfoRequest(): QueryCommitmentVestingInfoRequest {
  return {
    address: ""
  };
}
export const QueryCommitmentVestingInfoRequest = {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoRequest",
  is(o: any): o is QueryCommitmentVestingInfoRequest {
    return o && (o.$typeUrl === QueryCommitmentVestingInfoRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryCommitmentVestingInfoRequestSDKType {
    return o && (o.$typeUrl === QueryCommitmentVestingInfoRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryCommitmentVestingInfoRequestAmino {
    return o && (o.$typeUrl === QueryCommitmentVestingInfoRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryCommitmentVestingInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommitmentVestingInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentVestingInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommitmentVestingInfoRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryCommitmentVestingInfoRequest): JsonSafe<QueryCommitmentVestingInfoRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryCommitmentVestingInfoRequest>): QueryCommitmentVestingInfoRequest {
    const message = createBaseQueryCommitmentVestingInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryCommitmentVestingInfoRequestAmino): QueryCommitmentVestingInfoRequest {
    const message = createBaseQueryCommitmentVestingInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryCommitmentVestingInfoRequest): QueryCommitmentVestingInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryCommitmentVestingInfoRequestAminoMsg): QueryCommitmentVestingInfoRequest {
    return QueryCommitmentVestingInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitmentVestingInfoRequestProtoMsg): QueryCommitmentVestingInfoRequest {
    return QueryCommitmentVestingInfoRequest.decode(message.value);
  },
  toProto(message: QueryCommitmentVestingInfoRequest): Uint8Array {
    return QueryCommitmentVestingInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitmentVestingInfoRequest): QueryCommitmentVestingInfoRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommitmentVestingInfoRequest",
      value: QueryCommitmentVestingInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCommitmentVestingInfoRequest.typeUrl, QueryCommitmentVestingInfoRequest);
function createBaseQueryCommitmentVestingInfoResponse(): QueryCommitmentVestingInfoResponse {
  return {
    total: "",
    vestingDetails: []
  };
}
export const QueryCommitmentVestingInfoResponse = {
  typeUrl: "/elys.commitment.QueryCommitmentVestingInfoResponse",
  is(o: any): o is QueryCommitmentVestingInfoResponse {
    return o && (o.$typeUrl === QueryCommitmentVestingInfoResponse.typeUrl || typeof o.total === "string" && Array.isArray(o.vestingDetails) && (!o.vestingDetails.length || VestingDetails.is(o.vestingDetails[0])));
  },
  isSDK(o: any): o is QueryCommitmentVestingInfoResponseSDKType {
    return o && (o.$typeUrl === QueryCommitmentVestingInfoResponse.typeUrl || typeof o.total === "string" && Array.isArray(o.vesting_details) && (!o.vesting_details.length || VestingDetails.isSDK(o.vesting_details[0])));
  },
  isAmino(o: any): o is QueryCommitmentVestingInfoResponseAmino {
    return o && (o.$typeUrl === QueryCommitmentVestingInfoResponse.typeUrl || typeof o.total === "string" && Array.isArray(o.vesting_details) && (!o.vesting_details.length || VestingDetails.isAmino(o.vesting_details[0])));
  },
  encode(message: QueryCommitmentVestingInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    for (const v of message.vestingDetails) {
      VestingDetails.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommitmentVestingInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommitmentVestingInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        case 2:
          message.vestingDetails.push(VestingDetails.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommitmentVestingInfoResponse {
    return {
      total: isSet(object.total) ? String(object.total) : "",
      vestingDetails: Array.isArray(object?.vestingDetails) ? object.vestingDetails.map((e: any) => VestingDetails.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCommitmentVestingInfoResponse): JsonSafe<QueryCommitmentVestingInfoResponse> {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    if (message.vestingDetails) {
      obj.vestingDetails = message.vestingDetails.map(e => e ? VestingDetails.toJSON(e) : undefined);
    } else {
      obj.vestingDetails = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCommitmentVestingInfoResponse>): QueryCommitmentVestingInfoResponse {
    const message = createBaseQueryCommitmentVestingInfoResponse();
    message.total = object.total ?? "";
    message.vestingDetails = object.vestingDetails?.map(e => VestingDetails.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommitmentVestingInfoResponseAmino): QueryCommitmentVestingInfoResponse {
    const message = createBaseQueryCommitmentVestingInfoResponse();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    message.vestingDetails = object.vesting_details?.map(e => VestingDetails.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommitmentVestingInfoResponse): QueryCommitmentVestingInfoResponseAmino {
    const obj: any = {};
    obj.total = message.total === "" ? undefined : message.total;
    if (message.vestingDetails) {
      obj.vesting_details = message.vestingDetails.map(e => e ? VestingDetails.toAmino(e) : undefined);
    } else {
      obj.vesting_details = message.vestingDetails;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommitmentVestingInfoResponseAminoMsg): QueryCommitmentVestingInfoResponse {
    return QueryCommitmentVestingInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCommitmentVestingInfoResponseProtoMsg): QueryCommitmentVestingInfoResponse {
    return QueryCommitmentVestingInfoResponse.decode(message.value);
  },
  toProto(message: QueryCommitmentVestingInfoResponse): Uint8Array {
    return QueryCommitmentVestingInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommitmentVestingInfoResponse): QueryCommitmentVestingInfoResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryCommitmentVestingInfoResponse",
      value: QueryCommitmentVestingInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCommitmentVestingInfoResponse.typeUrl, QueryCommitmentVestingInfoResponse);
function createBaseVestingDetails(): VestingDetails {
  return {
    id: "",
    totalVesting: "",
    claimed: "",
    vestedSoFar: "",
    remainingBlocks: BigInt(0)
  };
}
export const VestingDetails = {
  typeUrl: "/elys.commitment.VestingDetails",
  is(o: any): o is VestingDetails {
    return o && (o.$typeUrl === VestingDetails.typeUrl || typeof o.id === "string" && typeof o.totalVesting === "string" && typeof o.claimed === "string" && typeof o.vestedSoFar === "string" && typeof o.remainingBlocks === "bigint");
  },
  isSDK(o: any): o is VestingDetailsSDKType {
    return o && (o.$typeUrl === VestingDetails.typeUrl || typeof o.id === "string" && typeof o.total_vesting === "string" && typeof o.claimed === "string" && typeof o.vested_so_far === "string" && typeof o.remaining_blocks === "bigint");
  },
  isAmino(o: any): o is VestingDetailsAmino {
    return o && (o.$typeUrl === VestingDetails.typeUrl || typeof o.id === "string" && typeof o.total_vesting === "string" && typeof o.claimed === "string" && typeof o.vested_so_far === "string" && typeof o.remaining_blocks === "bigint");
  },
  encode(message: VestingDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.totalVesting !== "") {
      writer.uint32(18).string(message.totalVesting);
    }
    if (message.claimed !== "") {
      writer.uint32(26).string(message.claimed);
    }
    if (message.vestedSoFar !== "") {
      writer.uint32(34).string(message.vestedSoFar);
    }
    if (message.remainingBlocks !== BigInt(0)) {
      writer.uint32(40).int64(message.remainingBlocks);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VestingDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVestingDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.totalVesting = reader.string();
          break;
        case 3:
          message.claimed = reader.string();
          break;
        case 4:
          message.vestedSoFar = reader.string();
          break;
        case 5:
          message.remainingBlocks = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VestingDetails {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      totalVesting: isSet(object.totalVesting) ? String(object.totalVesting) : "",
      claimed: isSet(object.claimed) ? String(object.claimed) : "",
      vestedSoFar: isSet(object.vestedSoFar) ? String(object.vestedSoFar) : "",
      remainingBlocks: isSet(object.remainingBlocks) ? BigInt(object.remainingBlocks.toString()) : BigInt(0)
    };
  },
  toJSON(message: VestingDetails): JsonSafe<VestingDetails> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.totalVesting !== undefined && (obj.totalVesting = message.totalVesting);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    message.vestedSoFar !== undefined && (obj.vestedSoFar = message.vestedSoFar);
    message.remainingBlocks !== undefined && (obj.remainingBlocks = (message.remainingBlocks || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<VestingDetails>): VestingDetails {
    const message = createBaseVestingDetails();
    message.id = object.id ?? "";
    message.totalVesting = object.totalVesting ?? "";
    message.claimed = object.claimed ?? "";
    message.vestedSoFar = object.vestedSoFar ?? "";
    message.remainingBlocks = object.remainingBlocks !== undefined && object.remainingBlocks !== null ? BigInt(object.remainingBlocks.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VestingDetailsAmino): VestingDetails {
    const message = createBaseVestingDetails();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.total_vesting !== undefined && object.total_vesting !== null) {
      message.totalVesting = object.total_vesting;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.vested_so_far !== undefined && object.vested_so_far !== null) {
      message.vestedSoFar = object.vested_so_far;
    }
    if (object.remaining_blocks !== undefined && object.remaining_blocks !== null) {
      message.remainingBlocks = BigInt(object.remaining_blocks);
    }
    return message;
  },
  toAmino(message: VestingDetails): VestingDetailsAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.total_vesting = message.totalVesting === "" ? undefined : message.totalVesting;
    obj.claimed = message.claimed === "" ? undefined : message.claimed;
    obj.vested_so_far = message.vestedSoFar === "" ? undefined : message.vestedSoFar;
    obj.remaining_blocks = message.remainingBlocks !== BigInt(0) ? message.remainingBlocks?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VestingDetailsAminoMsg): VestingDetails {
    return VestingDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingDetailsProtoMsg): VestingDetails {
    return VestingDetails.decode(message.value);
  },
  toProto(message: VestingDetails): Uint8Array {
    return VestingDetails.encode(message).finish();
  },
  toProtoMsg(message: VestingDetails): VestingDetailsProtoMsg {
    return {
      typeUrl: "/elys.commitment.VestingDetails",
      value: VestingDetails.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VestingDetails.typeUrl, VestingDetails);
function createBaseQueryAirDropRequest(): QueryAirDropRequest {
  return {
    address: ""
  };
}
export const QueryAirDropRequest = {
  typeUrl: "/elys.commitment.QueryAirDropRequest",
  is(o: any): o is QueryAirDropRequest {
    return o && (o.$typeUrl === QueryAirDropRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryAirDropRequestSDKType {
    return o && (o.$typeUrl === QueryAirDropRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryAirDropRequestAmino {
    return o && (o.$typeUrl === QueryAirDropRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAirDropRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAirDropRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirDropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAirDropRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryAirDropRequest): JsonSafe<QueryAirDropRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAirDropRequest>): QueryAirDropRequest {
    const message = createBaseQueryAirDropRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAirDropRequestAmino): QueryAirDropRequest {
    const message = createBaseQueryAirDropRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAirDropRequest): QueryAirDropRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAirDropRequestAminoMsg): QueryAirDropRequest {
    return QueryAirDropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAirDropRequestProtoMsg): QueryAirDropRequest {
    return QueryAirDropRequest.decode(message.value);
  },
  toProto(message: QueryAirDropRequest): Uint8Array {
    return QueryAirDropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAirDropRequest): QueryAirDropRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryAirDropRequest",
      value: QueryAirDropRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAirDropRequest.typeUrl, QueryAirDropRequest);
function createBaseQueryAirDropResponse(): QueryAirDropResponse {
  return {
    atomStaking: "",
    cadet: "",
    nftHolder: "",
    governor: "",
    claimed: false
  };
}
export const QueryAirDropResponse = {
  typeUrl: "/elys.commitment.QueryAirDropResponse",
  is(o: any): o is QueryAirDropResponse {
    return o && (o.$typeUrl === QueryAirDropResponse.typeUrl || typeof o.atomStaking === "string" && typeof o.cadet === "string" && typeof o.nftHolder === "string" && typeof o.governor === "string" && typeof o.claimed === "boolean");
  },
  isSDK(o: any): o is QueryAirDropResponseSDKType {
    return o && (o.$typeUrl === QueryAirDropResponse.typeUrl || typeof o.atom_staking === "string" && typeof o.cadet === "string" && typeof o.nft_holder === "string" && typeof o.governor === "string" && typeof o.claimed === "boolean");
  },
  isAmino(o: any): o is QueryAirDropResponseAmino {
    return o && (o.$typeUrl === QueryAirDropResponse.typeUrl || typeof o.atom_staking === "string" && typeof o.cadet === "string" && typeof o.nft_holder === "string" && typeof o.governor === "string" && typeof o.claimed === "boolean");
  },
  encode(message: QueryAirDropResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atomStaking !== "") {
      writer.uint32(10).string(message.atomStaking);
    }
    if (message.cadet !== "") {
      writer.uint32(18).string(message.cadet);
    }
    if (message.nftHolder !== "") {
      writer.uint32(26).string(message.nftHolder);
    }
    if (message.governor !== "") {
      writer.uint32(34).string(message.governor);
    }
    if (message.claimed === true) {
      writer.uint32(40).bool(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAirDropResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAirDropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.atomStaking = reader.string();
          break;
        case 2:
          message.cadet = reader.string();
          break;
        case 3:
          message.nftHolder = reader.string();
          break;
        case 4:
          message.governor = reader.string();
          break;
        case 5:
          message.claimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAirDropResponse {
    return {
      atomStaking: isSet(object.atomStaking) ? String(object.atomStaking) : "",
      cadet: isSet(object.cadet) ? String(object.cadet) : "",
      nftHolder: isSet(object.nftHolder) ? String(object.nftHolder) : "",
      governor: isSet(object.governor) ? String(object.governor) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false
    };
  },
  toJSON(message: QueryAirDropResponse): JsonSafe<QueryAirDropResponse> {
    const obj: any = {};
    message.atomStaking !== undefined && (obj.atomStaking = message.atomStaking);
    message.cadet !== undefined && (obj.cadet = message.cadet);
    message.nftHolder !== undefined && (obj.nftHolder = message.nftHolder);
    message.governor !== undefined && (obj.governor = message.governor);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    return obj;
  },
  fromPartial(object: Partial<QueryAirDropResponse>): QueryAirDropResponse {
    const message = createBaseQueryAirDropResponse();
    message.atomStaking = object.atomStaking ?? "";
    message.cadet = object.cadet ?? "";
    message.nftHolder = object.nftHolder ?? "";
    message.governor = object.governor ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object: QueryAirDropResponseAmino): QueryAirDropResponse {
    const message = createBaseQueryAirDropResponse();
    if (object.atom_staking !== undefined && object.atom_staking !== null) {
      message.atomStaking = object.atom_staking;
    }
    if (object.cadet !== undefined && object.cadet !== null) {
      message.cadet = object.cadet;
    }
    if (object.nft_holder !== undefined && object.nft_holder !== null) {
      message.nftHolder = object.nft_holder;
    }
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = object.governor;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: QueryAirDropResponse): QueryAirDropResponseAmino {
    const obj: any = {};
    obj.atom_staking = message.atomStaking === "" ? undefined : message.atomStaking;
    obj.cadet = message.cadet === "" ? undefined : message.cadet;
    obj.nft_holder = message.nftHolder === "" ? undefined : message.nftHolder;
    obj.governor = message.governor === "" ? undefined : message.governor;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: QueryAirDropResponseAminoMsg): QueryAirDropResponse {
    return QueryAirDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAirDropResponseProtoMsg): QueryAirDropResponse {
    return QueryAirDropResponse.decode(message.value);
  },
  toProto(message: QueryAirDropResponse): Uint8Array {
    return QueryAirDropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAirDropResponse): QueryAirDropResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryAirDropResponse",
      value: QueryAirDropResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAirDropResponse.typeUrl, QueryAirDropResponse);
function createBaseQueryTotalAirDropClaimedRequest(): QueryTotalAirDropClaimedRequest {
  return {};
}
export const QueryTotalAirDropClaimedRequest = {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedRequest",
  is(o: any): o is QueryTotalAirDropClaimedRequest {
    return o && o.$typeUrl === QueryTotalAirDropClaimedRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalAirDropClaimedRequestSDKType {
    return o && o.$typeUrl === QueryTotalAirDropClaimedRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalAirDropClaimedRequestAmino {
    return o && o.$typeUrl === QueryTotalAirDropClaimedRequest.typeUrl;
  },
  encode(_: QueryTotalAirDropClaimedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAirDropClaimedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAirDropClaimedRequest();
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
  fromJSON(_: any): QueryTotalAirDropClaimedRequest {
    return {};
  },
  toJSON(_: QueryTotalAirDropClaimedRequest): JsonSafe<QueryTotalAirDropClaimedRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalAirDropClaimedRequest>): QueryTotalAirDropClaimedRequest {
    const message = createBaseQueryTotalAirDropClaimedRequest();
    return message;
  },
  fromAmino(_: QueryTotalAirDropClaimedRequestAmino): QueryTotalAirDropClaimedRequest {
    const message = createBaseQueryTotalAirDropClaimedRequest();
    return message;
  },
  toAmino(_: QueryTotalAirDropClaimedRequest): QueryTotalAirDropClaimedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalAirDropClaimedRequestAminoMsg): QueryTotalAirDropClaimedRequest {
    return QueryTotalAirDropClaimedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalAirDropClaimedRequestProtoMsg): QueryTotalAirDropClaimedRequest {
    return QueryTotalAirDropClaimedRequest.decode(message.value);
  },
  toProto(message: QueryTotalAirDropClaimedRequest): Uint8Array {
    return QueryTotalAirDropClaimedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAirDropClaimedRequest): QueryTotalAirDropClaimedRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalAirDropClaimedRequest",
      value: QueryTotalAirDropClaimedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalAirDropClaimedRequest.typeUrl, QueryTotalAirDropClaimedRequest);
function createBaseQueryTotalAirDropClaimedResponse(): QueryTotalAirDropClaimedResponse {
  return {
    totalElysClaimed: "",
    totalEdenClaimed: ""
  };
}
export const QueryTotalAirDropClaimedResponse = {
  typeUrl: "/elys.commitment.QueryTotalAirDropClaimedResponse",
  is(o: any): o is QueryTotalAirDropClaimedResponse {
    return o && (o.$typeUrl === QueryTotalAirDropClaimedResponse.typeUrl || typeof o.totalElysClaimed === "string" && typeof o.totalEdenClaimed === "string");
  },
  isSDK(o: any): o is QueryTotalAirDropClaimedResponseSDKType {
    return o && (o.$typeUrl === QueryTotalAirDropClaimedResponse.typeUrl || typeof o.total_elys_claimed === "string" && typeof o.total_eden_claimed === "string");
  },
  isAmino(o: any): o is QueryTotalAirDropClaimedResponseAmino {
    return o && (o.$typeUrl === QueryTotalAirDropClaimedResponse.typeUrl || typeof o.total_elys_claimed === "string" && typeof o.total_eden_claimed === "string");
  },
  encode(message: QueryTotalAirDropClaimedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalElysClaimed !== "") {
      writer.uint32(10).string(message.totalElysClaimed);
    }
    if (message.totalEdenClaimed !== "") {
      writer.uint32(18).string(message.totalEdenClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAirDropClaimedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAirDropClaimedResponse();
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
  fromJSON(object: any): QueryTotalAirDropClaimedResponse {
    return {
      totalElysClaimed: isSet(object.totalElysClaimed) ? String(object.totalElysClaimed) : "",
      totalEdenClaimed: isSet(object.totalEdenClaimed) ? String(object.totalEdenClaimed) : ""
    };
  },
  toJSON(message: QueryTotalAirDropClaimedResponse): JsonSafe<QueryTotalAirDropClaimedResponse> {
    const obj: any = {};
    message.totalElysClaimed !== undefined && (obj.totalElysClaimed = message.totalElysClaimed);
    message.totalEdenClaimed !== undefined && (obj.totalEdenClaimed = message.totalEdenClaimed);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalAirDropClaimedResponse>): QueryTotalAirDropClaimedResponse {
    const message = createBaseQueryTotalAirDropClaimedResponse();
    message.totalElysClaimed = object.totalElysClaimed ?? "";
    message.totalEdenClaimed = object.totalEdenClaimed ?? "";
    return message;
  },
  fromAmino(object: QueryTotalAirDropClaimedResponseAmino): QueryTotalAirDropClaimedResponse {
    const message = createBaseQueryTotalAirDropClaimedResponse();
    if (object.total_elys_claimed !== undefined && object.total_elys_claimed !== null) {
      message.totalElysClaimed = object.total_elys_claimed;
    }
    if (object.total_eden_claimed !== undefined && object.total_eden_claimed !== null) {
      message.totalEdenClaimed = object.total_eden_claimed;
    }
    return message;
  },
  toAmino(message: QueryTotalAirDropClaimedResponse): QueryTotalAirDropClaimedResponseAmino {
    const obj: any = {};
    obj.total_elys_claimed = message.totalElysClaimed === "" ? undefined : message.totalElysClaimed;
    obj.total_eden_claimed = message.totalEdenClaimed === "" ? undefined : message.totalEdenClaimed;
    return obj;
  },
  fromAminoMsg(object: QueryTotalAirDropClaimedResponseAminoMsg): QueryTotalAirDropClaimedResponse {
    return QueryTotalAirDropClaimedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalAirDropClaimedResponseProtoMsg): QueryTotalAirDropClaimedResponse {
    return QueryTotalAirDropClaimedResponse.decode(message.value);
  },
  toProto(message: QueryTotalAirDropClaimedResponse): Uint8Array {
    return QueryTotalAirDropClaimedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalAirDropClaimedResponse): QueryTotalAirDropClaimedResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalAirDropClaimedResponse",
      value: QueryTotalAirDropClaimedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalAirDropClaimedResponse.typeUrl, QueryTotalAirDropClaimedResponse);
function createBaseQueryKolRequest(): QueryKolRequest {
  return {
    address: ""
  };
}
export const QueryKolRequest = {
  typeUrl: "/elys.commitment.QueryKolRequest",
  is(o: any): o is QueryKolRequest {
    return o && (o.$typeUrl === QueryKolRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryKolRequestSDKType {
    return o && (o.$typeUrl === QueryKolRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryKolRequestAmino {
    return o && (o.$typeUrl === QueryKolRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryKolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryKolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryKolRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryKolRequest): JsonSafe<QueryKolRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryKolRequest>): QueryKolRequest {
    const message = createBaseQueryKolRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryKolRequestAmino): QueryKolRequest {
    const message = createBaseQueryKolRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryKolRequest): QueryKolRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryKolRequestAminoMsg): QueryKolRequest {
    return QueryKolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryKolRequestProtoMsg): QueryKolRequest {
    return QueryKolRequest.decode(message.value);
  },
  toProto(message: QueryKolRequest): Uint8Array {
    return QueryKolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryKolRequest): QueryKolRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryKolRequest",
      value: QueryKolRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryKolRequest.typeUrl, QueryKolRequest);
function createBaseQueryKolResponse(): QueryKolResponse {
  return {
    elysAmount: "",
    claimed: false,
    refunded: false
  };
}
export const QueryKolResponse = {
  typeUrl: "/elys.commitment.QueryKolResponse",
  is(o: any): o is QueryKolResponse {
    return o && (o.$typeUrl === QueryKolResponse.typeUrl || typeof o.elysAmount === "string" && typeof o.claimed === "boolean" && typeof o.refunded === "boolean");
  },
  isSDK(o: any): o is QueryKolResponseSDKType {
    return o && (o.$typeUrl === QueryKolResponse.typeUrl || typeof o.elys_amount === "string" && typeof o.claimed === "boolean" && typeof o.refunded === "boolean");
  },
  isAmino(o: any): o is QueryKolResponseAmino {
    return o && (o.$typeUrl === QueryKolResponse.typeUrl || typeof o.elys_amount === "string" && typeof o.claimed === "boolean" && typeof o.refunded === "boolean");
  },
  encode(message: QueryKolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.elysAmount !== "") {
      writer.uint32(10).string(message.elysAmount);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    if (message.refunded === true) {
      writer.uint32(24).bool(message.refunded);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryKolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryKolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elysAmount = reader.string();
          break;
        case 2:
          message.claimed = reader.bool();
          break;
        case 3:
          message.refunded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryKolResponse {
    return {
      elysAmount: isSet(object.elysAmount) ? String(object.elysAmount) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false,
      refunded: isSet(object.refunded) ? Boolean(object.refunded) : false
    };
  },
  toJSON(message: QueryKolResponse): JsonSafe<QueryKolResponse> {
    const obj: any = {};
    message.elysAmount !== undefined && (obj.elysAmount = message.elysAmount);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    message.refunded !== undefined && (obj.refunded = message.refunded);
    return obj;
  },
  fromPartial(object: Partial<QueryKolResponse>): QueryKolResponse {
    const message = createBaseQueryKolResponse();
    message.elysAmount = object.elysAmount ?? "";
    message.claimed = object.claimed ?? false;
    message.refunded = object.refunded ?? false;
    return message;
  },
  fromAmino(object: QueryKolResponseAmino): QueryKolResponse {
    const message = createBaseQueryKolResponse();
    if (object.elys_amount !== undefined && object.elys_amount !== null) {
      message.elysAmount = object.elys_amount;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    if (object.refunded !== undefined && object.refunded !== null) {
      message.refunded = object.refunded;
    }
    return message;
  },
  toAmino(message: QueryKolResponse): QueryKolResponseAmino {
    const obj: any = {};
    obj.elys_amount = message.elysAmount === "" ? undefined : message.elysAmount;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    obj.refunded = message.refunded === false ? undefined : message.refunded;
    return obj;
  },
  fromAminoMsg(object: QueryKolResponseAminoMsg): QueryKolResponse {
    return QueryKolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryKolResponseProtoMsg): QueryKolResponse {
    return QueryKolResponse.decode(message.value);
  },
  toProto(message: QueryKolResponse): Uint8Array {
    return QueryKolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryKolResponse): QueryKolResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryKolResponse",
      value: QueryKolResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryKolResponse.typeUrl, QueryKolResponse);
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/elys.commitment.QueryTotalSupplyRequest",
  is(o: any): o is QueryTotalSupplyRequest {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalSupplyRequestSDKType {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalSupplyRequestAmino {
    return o && o.$typeUrl === QueryTotalSupplyRequest.typeUrl;
  },
  encode(_: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyRequest();
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
  fromJSON(_: any): QueryTotalSupplyRequest {
    return {};
  },
  toJSON(_: QueryTotalSupplyRequest): JsonSafe<QueryTotalSupplyRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  fromAmino(_: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  toAmino(_: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSupplyRequest.typeUrl, QueryTotalSupplyRequest);
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    totalEden: "",
    totalEdenb: "",
    totalEdenVested: ""
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/elys.commitment.QueryTotalSupplyResponse",
  is(o: any): o is QueryTotalSupplyResponse {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || typeof o.totalEden === "string" && typeof o.totalEdenb === "string" && typeof o.totalEdenVested === "string");
  },
  isSDK(o: any): o is QueryTotalSupplyResponseSDKType {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || typeof o.total_eden === "string" && typeof o.total_edenb === "string" && typeof o.total_eden_vested === "string");
  },
  isAmino(o: any): o is QueryTotalSupplyResponseAmino {
    return o && (o.$typeUrl === QueryTotalSupplyResponse.typeUrl || typeof o.total_eden === "string" && typeof o.total_edenb === "string" && typeof o.total_eden_vested === "string");
  },
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalEden !== "") {
      writer.uint32(10).string(message.totalEden);
    }
    if (message.totalEdenb !== "") {
      writer.uint32(18).string(message.totalEdenb);
    }
    if (message.totalEdenVested !== "") {
      writer.uint32(26).string(message.totalEdenVested);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalEden = reader.string();
          break;
        case 2:
          message.totalEdenb = reader.string();
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
  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      totalEden: isSet(object.totalEden) ? String(object.totalEden) : "",
      totalEdenb: isSet(object.totalEdenb) ? String(object.totalEdenb) : "",
      totalEdenVested: isSet(object.totalEdenVested) ? String(object.totalEdenVested) : ""
    };
  },
  toJSON(message: QueryTotalSupplyResponse): JsonSafe<QueryTotalSupplyResponse> {
    const obj: any = {};
    message.totalEden !== undefined && (obj.totalEden = message.totalEden);
    message.totalEdenb !== undefined && (obj.totalEdenb = message.totalEdenb);
    message.totalEdenVested !== undefined && (obj.totalEdenVested = message.totalEdenVested);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.totalEden = object.totalEden ?? "";
    message.totalEdenb = object.totalEdenb ?? "";
    message.totalEdenVested = object.totalEdenVested ?? "";
    return message;
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    if (object.total_eden !== undefined && object.total_eden !== null) {
      message.totalEden = object.total_eden;
    }
    if (object.total_edenb !== undefined && object.total_edenb !== null) {
      message.totalEdenb = object.total_edenb;
    }
    if (object.total_eden_vested !== undefined && object.total_eden_vested !== null) {
      message.totalEdenVested = object.total_eden_vested;
    }
    return message;
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    obj.total_eden = message.totalEden === "" ? undefined : message.totalEden;
    obj.total_edenb = message.totalEdenb === "" ? undefined : message.totalEdenb;
    obj.total_eden_vested = message.totalEdenVested === "" ? undefined : message.totalEdenVested;
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalSupplyResponse.typeUrl, QueryTotalSupplyResponse);
function createBaseQueryRewardProgramRequest(): QueryRewardProgramRequest {
  return {
    address: ""
  };
}
export const QueryRewardProgramRequest = {
  typeUrl: "/elys.commitment.QueryRewardProgramRequest",
  is(o: any): o is QueryRewardProgramRequest {
    return o && (o.$typeUrl === QueryRewardProgramRequest.typeUrl || typeof o.address === "string");
  },
  isSDK(o: any): o is QueryRewardProgramRequestSDKType {
    return o && (o.$typeUrl === QueryRewardProgramRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryRewardProgramRequestAmino {
    return o && (o.$typeUrl === QueryRewardProgramRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryRewardProgramRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardProgramRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardProgramRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardProgramRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryRewardProgramRequest): JsonSafe<QueryRewardProgramRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardProgramRequest>): QueryRewardProgramRequest {
    const message = createBaseQueryRewardProgramRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryRewardProgramRequestAmino): QueryRewardProgramRequest {
    const message = createBaseQueryRewardProgramRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryRewardProgramRequest): QueryRewardProgramRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryRewardProgramRequestAminoMsg): QueryRewardProgramRequest {
    return QueryRewardProgramRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardProgramRequestProtoMsg): QueryRewardProgramRequest {
    return QueryRewardProgramRequest.decode(message.value);
  },
  toProto(message: QueryRewardProgramRequest): Uint8Array {
    return QueryRewardProgramRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardProgramRequest): QueryRewardProgramRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryRewardProgramRequest",
      value: QueryRewardProgramRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRewardProgramRequest.typeUrl, QueryRewardProgramRequest);
function createBaseQueryRewardProgramResponse(): QueryRewardProgramResponse {
  return {
    amount: "",
    claimed: false
  };
}
export const QueryRewardProgramResponse = {
  typeUrl: "/elys.commitment.QueryRewardProgramResponse",
  is(o: any): o is QueryRewardProgramResponse {
    return o && (o.$typeUrl === QueryRewardProgramResponse.typeUrl || typeof o.amount === "string" && typeof o.claimed === "boolean");
  },
  isSDK(o: any): o is QueryRewardProgramResponseSDKType {
    return o && (o.$typeUrl === QueryRewardProgramResponse.typeUrl || typeof o.amount === "string" && typeof o.claimed === "boolean");
  },
  isAmino(o: any): o is QueryRewardProgramResponseAmino {
    return o && (o.$typeUrl === QueryRewardProgramResponse.typeUrl || typeof o.amount === "string" && typeof o.claimed === "boolean");
  },
  encode(message: QueryRewardProgramResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.claimed === true) {
      writer.uint32(16).bool(message.claimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardProgramResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardProgramResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
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
  fromJSON(object: any): QueryRewardProgramResponse {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      claimed: isSet(object.claimed) ? Boolean(object.claimed) : false
    };
  },
  toJSON(message: QueryRewardProgramResponse): JsonSafe<QueryRewardProgramResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.claimed !== undefined && (obj.claimed = message.claimed);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardProgramResponse>): QueryRewardProgramResponse {
    const message = createBaseQueryRewardProgramResponse();
    message.amount = object.amount ?? "";
    message.claimed = object.claimed ?? false;
    return message;
  },
  fromAmino(object: QueryRewardProgramResponseAmino): QueryRewardProgramResponse {
    const message = createBaseQueryRewardProgramResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.claimed !== undefined && object.claimed !== null) {
      message.claimed = object.claimed;
    }
    return message;
  },
  toAmino(message: QueryRewardProgramResponse): QueryRewardProgramResponseAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.claimed = message.claimed === false ? undefined : message.claimed;
    return obj;
  },
  fromAminoMsg(object: QueryRewardProgramResponseAminoMsg): QueryRewardProgramResponse {
    return QueryRewardProgramResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardProgramResponseProtoMsg): QueryRewardProgramResponse {
    return QueryRewardProgramResponse.decode(message.value);
  },
  toProto(message: QueryRewardProgramResponse): Uint8Array {
    return QueryRewardProgramResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardProgramResponse): QueryRewardProgramResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryRewardProgramResponse",
      value: QueryRewardProgramResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryRewardProgramResponse.typeUrl, QueryRewardProgramResponse);
function createBaseQueryTotalRewardProgramClaimedRequest(): QueryTotalRewardProgramClaimedRequest {
  return {};
}
export const QueryTotalRewardProgramClaimedRequest = {
  typeUrl: "/elys.commitment.QueryTotalRewardProgramClaimedRequest",
  is(o: any): o is QueryTotalRewardProgramClaimedRequest {
    return o && o.$typeUrl === QueryTotalRewardProgramClaimedRequest.typeUrl;
  },
  isSDK(o: any): o is QueryTotalRewardProgramClaimedRequestSDKType {
    return o && o.$typeUrl === QueryTotalRewardProgramClaimedRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTotalRewardProgramClaimedRequestAmino {
    return o && o.$typeUrl === QueryTotalRewardProgramClaimedRequest.typeUrl;
  },
  encode(_: QueryTotalRewardProgramClaimedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRewardProgramClaimedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRewardProgramClaimedRequest();
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
  fromJSON(_: any): QueryTotalRewardProgramClaimedRequest {
    return {};
  },
  toJSON(_: QueryTotalRewardProgramClaimedRequest): JsonSafe<QueryTotalRewardProgramClaimedRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryTotalRewardProgramClaimedRequest>): QueryTotalRewardProgramClaimedRequest {
    const message = createBaseQueryTotalRewardProgramClaimedRequest();
    return message;
  },
  fromAmino(_: QueryTotalRewardProgramClaimedRequestAmino): QueryTotalRewardProgramClaimedRequest {
    const message = createBaseQueryTotalRewardProgramClaimedRequest();
    return message;
  },
  toAmino(_: QueryTotalRewardProgramClaimedRequest): QueryTotalRewardProgramClaimedRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalRewardProgramClaimedRequestAminoMsg): QueryTotalRewardProgramClaimedRequest {
    return QueryTotalRewardProgramClaimedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalRewardProgramClaimedRequestProtoMsg): QueryTotalRewardProgramClaimedRequest {
    return QueryTotalRewardProgramClaimedRequest.decode(message.value);
  },
  toProto(message: QueryTotalRewardProgramClaimedRequest): Uint8Array {
    return QueryTotalRewardProgramClaimedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRewardProgramClaimedRequest): QueryTotalRewardProgramClaimedRequestProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalRewardProgramClaimedRequest",
      value: QueryTotalRewardProgramClaimedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalRewardProgramClaimedRequest.typeUrl, QueryTotalRewardProgramClaimedRequest);
function createBaseQueryTotalRewardProgramClaimedResponse(): QueryTotalRewardProgramClaimedResponse {
  return {
    totalEdenClaimed: ""
  };
}
export const QueryTotalRewardProgramClaimedResponse = {
  typeUrl: "/elys.commitment.QueryTotalRewardProgramClaimedResponse",
  is(o: any): o is QueryTotalRewardProgramClaimedResponse {
    return o && (o.$typeUrl === QueryTotalRewardProgramClaimedResponse.typeUrl || typeof o.totalEdenClaimed === "string");
  },
  isSDK(o: any): o is QueryTotalRewardProgramClaimedResponseSDKType {
    return o && (o.$typeUrl === QueryTotalRewardProgramClaimedResponse.typeUrl || typeof o.total_eden_claimed === "string");
  },
  isAmino(o: any): o is QueryTotalRewardProgramClaimedResponseAmino {
    return o && (o.$typeUrl === QueryTotalRewardProgramClaimedResponse.typeUrl || typeof o.total_eden_claimed === "string");
  },
  encode(message: QueryTotalRewardProgramClaimedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalEdenClaimed !== "") {
      writer.uint32(10).string(message.totalEdenClaimed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRewardProgramClaimedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRewardProgramClaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalEdenClaimed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRewardProgramClaimedResponse {
    return {
      totalEdenClaimed: isSet(object.totalEdenClaimed) ? String(object.totalEdenClaimed) : ""
    };
  },
  toJSON(message: QueryTotalRewardProgramClaimedResponse): JsonSafe<QueryTotalRewardProgramClaimedResponse> {
    const obj: any = {};
    message.totalEdenClaimed !== undefined && (obj.totalEdenClaimed = message.totalEdenClaimed);
    return obj;
  },
  fromPartial(object: Partial<QueryTotalRewardProgramClaimedResponse>): QueryTotalRewardProgramClaimedResponse {
    const message = createBaseQueryTotalRewardProgramClaimedResponse();
    message.totalEdenClaimed = object.totalEdenClaimed ?? "";
    return message;
  },
  fromAmino(object: QueryTotalRewardProgramClaimedResponseAmino): QueryTotalRewardProgramClaimedResponse {
    const message = createBaseQueryTotalRewardProgramClaimedResponse();
    if (object.total_eden_claimed !== undefined && object.total_eden_claimed !== null) {
      message.totalEdenClaimed = object.total_eden_claimed;
    }
    return message;
  },
  toAmino(message: QueryTotalRewardProgramClaimedResponse): QueryTotalRewardProgramClaimedResponseAmino {
    const obj: any = {};
    obj.total_eden_claimed = message.totalEdenClaimed === "" ? undefined : message.totalEdenClaimed;
    return obj;
  },
  fromAminoMsg(object: QueryTotalRewardProgramClaimedResponseAminoMsg): QueryTotalRewardProgramClaimedResponse {
    return QueryTotalRewardProgramClaimedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalRewardProgramClaimedResponseProtoMsg): QueryTotalRewardProgramClaimedResponse {
    return QueryTotalRewardProgramClaimedResponse.decode(message.value);
  },
  toProto(message: QueryTotalRewardProgramClaimedResponse): Uint8Array {
    return QueryTotalRewardProgramClaimedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalRewardProgramClaimedResponse): QueryTotalRewardProgramClaimedResponseProtoMsg {
    return {
      typeUrl: "/elys.commitment.QueryTotalRewardProgramClaimedResponse",
      value: QueryTotalRewardProgramClaimedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTotalRewardProgramClaimedResponse.typeUrl, QueryTotalRewardProgramClaimedResponse);