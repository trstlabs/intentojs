import * as _58 from "./applications/transfer/v1/genesis";
import * as _59 from "./applications/transfer/v1/query";
import * as _60 from "./applications/transfer/v1/transfer";
import * as _61 from "./applications/transfer/v1/tx";
import * as _62 from "./applications/transfer/v2/packet";
import * as _63 from "./core/channel/v1/channel";
import * as _64 from "./core/channel/v1/genesis";
import * as _65 from "./core/channel/v1/query";
import * as _66 from "./core/channel/v1/tx";
import * as _67 from "./core/client/v1/client";
import * as _68 from "./core/client/v1/genesis";
import * as _69 from "./core/client/v1/query";
import * as _70 from "./core/client/v1/tx";
import * as _71 from "./core/commitment/v1/commitment";
import * as _72 from "./core/connection/v1/connection";
import * as _73 from "./core/connection/v1/genesis";
import * as _74 from "./core/connection/v1/query";
import * as _75 from "./core/connection/v1/tx";
import * as _76 from "./lightclients/localhost/v1/localhost";
import * as _77 from "./lightclients/solomachine/v1/solomachine";
import * as _78 from "./lightclients/solomachine/v2/solomachine";
import * as _79 from "./lightclients/tendermint/v1/tendermint";
import * as _196 from "./applications/transfer/v1/query.rpc.Query";
import * as _197 from "./core/channel/v1/query.rpc.Query";
import * as _198 from "./core/client/v1/query.rpc.Query";
import * as _199 from "./core/connection/v1/query.rpc.Query";
import * as _200 from "./applications/transfer/v1/tx.rpc.msg";
import * as _201 from "./core/channel/v1/tx.rpc.msg";
import * as _202 from "./core/client/v1/tx.rpc.msg";
import * as _203 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _200.MsgClientImpl;
                QueryClientImpl: typeof _196.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _59.QueryDenomTraceRequest): Promise<_59.QueryDenomTraceResponse>;
                    denomTraces(request?: _59.QueryDenomTracesRequest): Promise<_59.QueryDenomTracesResponse>;
                    params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: _61.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: {
                                sourcePort: string;
                                sourceChannel: string;
                                token: {
                                    denom: string;
                                    amount: string;
                                };
                                sender: string;
                                receiver: string;
                                timeoutHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                timeoutTimestamp: string;
                            };
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _61.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _61.MsgTransfer): {
                            typeUrl: string;
                            value: _61.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _61.MsgTransfer) => _61.MsgTransferAmino;
                        fromAmino: (object: _61.MsgTransferAmino) => _61.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.MsgTransfer;
                    isSDK(o: any): o is _61.MsgTransferSDKType;
                    isAmino(o: any): o is _61.MsgTransferAmino;
                    encode(message: _61.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgTransfer;
                    fromJSON(object: any): _61.MsgTransfer;
                    toJSON(message: _61.MsgTransfer): import("..").JsonSafe<_61.MsgTransfer>;
                    fromPartial(object: Partial<_61.MsgTransfer>): _61.MsgTransfer;
                    fromAmino(object: _61.MsgTransferAmino): _61.MsgTransfer;
                    toAmino(message: _61.MsgTransfer): _61.MsgTransferAmino;
                    fromAminoMsg(object: _61.MsgTransferAminoMsg): _61.MsgTransfer;
                    toAminoMsg(message: _61.MsgTransfer): _61.MsgTransferAminoMsg;
                    fromProtoMsg(message: _61.MsgTransferProtoMsg): _61.MsgTransfer;
                    toProto(message: _61.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _61.MsgTransfer): _61.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.MsgTransferResponse;
                    isSDK(o: any): o is _61.MsgTransferResponseSDKType;
                    isAmino(o: any): o is _61.MsgTransferResponseAmino;
                    encode(_: _61.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgTransferResponse;
                    fromJSON(_: any): _61.MsgTransferResponse;
                    toJSON(_: _61.MsgTransferResponse): import("..").JsonSafe<_61.MsgTransferResponse>;
                    fromPartial(_: Partial<_61.MsgTransferResponse>): _61.MsgTransferResponse;
                    fromAmino(_: _61.MsgTransferResponseAmino): _61.MsgTransferResponse;
                    toAmino(_: _61.MsgTransferResponse): _61.MsgTransferResponseAmino;
                    fromAminoMsg(object: _61.MsgTransferResponseAminoMsg): _61.MsgTransferResponse;
                    toAminoMsg(message: _61.MsgTransferResponse): _61.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _61.MsgTransferResponseProtoMsg): _61.MsgTransferResponse;
                    toProto(message: _61.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _61.MsgTransferResponse): _61.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _60.DenomTrace;
                    isSDK(o: any): o is _60.DenomTraceSDKType;
                    isAmino(o: any): o is _60.DenomTraceAmino;
                    encode(message: _60.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.DenomTrace;
                    fromJSON(object: any): _60.DenomTrace;
                    toJSON(message: _60.DenomTrace): import("..").JsonSafe<_60.DenomTrace>;
                    fromPartial(object: Partial<_60.DenomTrace>): _60.DenomTrace;
                    fromAmino(object: _60.DenomTraceAmino): _60.DenomTrace;
                    toAmino(message: _60.DenomTrace): _60.DenomTraceAmino;
                    fromAminoMsg(object: _60.DenomTraceAminoMsg): _60.DenomTrace;
                    toAminoMsg(message: _60.DenomTrace): _60.DenomTraceAminoMsg;
                    fromProtoMsg(message: _60.DenomTraceProtoMsg): _60.DenomTrace;
                    toProto(message: _60.DenomTrace): Uint8Array;
                    toProtoMsg(message: _60.DenomTrace): _60.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _60.Params;
                    isSDK(o: any): o is _60.ParamsSDKType;
                    isAmino(o: any): o is _60.ParamsAmino;
                    encode(message: _60.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.Params;
                    fromJSON(object: any): _60.Params;
                    toJSON(message: _60.Params): import("..").JsonSafe<_60.Params>;
                    fromPartial(object: Partial<_60.Params>): _60.Params;
                    fromAmino(object: _60.ParamsAmino): _60.Params;
                    toAmino(message: _60.Params): _60.ParamsAmino;
                    fromAminoMsg(object: _60.ParamsAminoMsg): _60.Params;
                    toAminoMsg(message: _60.Params): _60.ParamsAminoMsg;
                    fromProtoMsg(message: _60.ParamsProtoMsg): _60.Params;
                    toProto(message: _60.Params): Uint8Array;
                    toProtoMsg(message: _60.Params): _60.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.QueryDenomTraceRequest;
                    isSDK(o: any): o is _59.QueryDenomTraceRequestSDKType;
                    isAmino(o: any): o is _59.QueryDenomTraceRequestAmino;
                    encode(message: _59.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.QueryDenomTraceRequest;
                    fromJSON(object: any): _59.QueryDenomTraceRequest;
                    toJSON(message: _59.QueryDenomTraceRequest): import("..").JsonSafe<_59.QueryDenomTraceRequest>;
                    fromPartial(object: Partial<_59.QueryDenomTraceRequest>): _59.QueryDenomTraceRequest;
                    fromAmino(object: _59.QueryDenomTraceRequestAmino): _59.QueryDenomTraceRequest;
                    toAmino(message: _59.QueryDenomTraceRequest): _59.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _59.QueryDenomTraceRequestAminoMsg): _59.QueryDenomTraceRequest;
                    toAminoMsg(message: _59.QueryDenomTraceRequest): _59.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _59.QueryDenomTraceRequestProtoMsg): _59.QueryDenomTraceRequest;
                    toProto(message: _59.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _59.QueryDenomTraceRequest): _59.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.QueryDenomTraceResponse;
                    isSDK(o: any): o is _59.QueryDenomTraceResponseSDKType;
                    isAmino(o: any): o is _59.QueryDenomTraceResponseAmino;
                    encode(message: _59.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.QueryDenomTraceResponse;
                    fromJSON(object: any): _59.QueryDenomTraceResponse;
                    toJSON(message: _59.QueryDenomTraceResponse): import("..").JsonSafe<_59.QueryDenomTraceResponse>;
                    fromPartial(object: Partial<_59.QueryDenomTraceResponse>): _59.QueryDenomTraceResponse;
                    fromAmino(object: _59.QueryDenomTraceResponseAmino): _59.QueryDenomTraceResponse;
                    toAmino(message: _59.QueryDenomTraceResponse): _59.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _59.QueryDenomTraceResponseAminoMsg): _59.QueryDenomTraceResponse;
                    toAminoMsg(message: _59.QueryDenomTraceResponse): _59.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _59.QueryDenomTraceResponseProtoMsg): _59.QueryDenomTraceResponse;
                    toProto(message: _59.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _59.QueryDenomTraceResponse): _59.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.QueryDenomTracesRequest;
                    isSDK(o: any): o is _59.QueryDenomTracesRequestSDKType;
                    isAmino(o: any): o is _59.QueryDenomTracesRequestAmino;
                    encode(message: _59.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.QueryDenomTracesRequest;
                    fromJSON(object: any): _59.QueryDenomTracesRequest;
                    toJSON(message: _59.QueryDenomTracesRequest): import("..").JsonSafe<_59.QueryDenomTracesRequest>;
                    fromPartial(object: Partial<_59.QueryDenomTracesRequest>): _59.QueryDenomTracesRequest;
                    fromAmino(object: _59.QueryDenomTracesRequestAmino): _59.QueryDenomTracesRequest;
                    toAmino(message: _59.QueryDenomTracesRequest): _59.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _59.QueryDenomTracesRequestAminoMsg): _59.QueryDenomTracesRequest;
                    toAminoMsg(message: _59.QueryDenomTracesRequest): _59.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _59.QueryDenomTracesRequestProtoMsg): _59.QueryDenomTracesRequest;
                    toProto(message: _59.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _59.QueryDenomTracesRequest): _59.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.QueryDenomTracesResponse;
                    isSDK(o: any): o is _59.QueryDenomTracesResponseSDKType;
                    isAmino(o: any): o is _59.QueryDenomTracesResponseAmino;
                    encode(message: _59.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.QueryDenomTracesResponse;
                    fromJSON(object: any): _59.QueryDenomTracesResponse;
                    toJSON(message: _59.QueryDenomTracesResponse): import("..").JsonSafe<_59.QueryDenomTracesResponse>;
                    fromPartial(object: Partial<_59.QueryDenomTracesResponse>): _59.QueryDenomTracesResponse;
                    fromAmino(object: _59.QueryDenomTracesResponseAmino): _59.QueryDenomTracesResponse;
                    toAmino(message: _59.QueryDenomTracesResponse): _59.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _59.QueryDenomTracesResponseAminoMsg): _59.QueryDenomTracesResponse;
                    toAminoMsg(message: _59.QueryDenomTracesResponse): _59.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _59.QueryDenomTracesResponseProtoMsg): _59.QueryDenomTracesResponse;
                    toProto(message: _59.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _59.QueryDenomTracesResponse): _59.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.QueryParamsRequest;
                    isSDK(o: any): o is _59.QueryParamsRequestSDKType;
                    isAmino(o: any): o is _59.QueryParamsRequestAmino;
                    encode(_: _59.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.QueryParamsRequest;
                    fromJSON(_: any): _59.QueryParamsRequest;
                    toJSON(_: _59.QueryParamsRequest): import("..").JsonSafe<_59.QueryParamsRequest>;
                    fromPartial(_: Partial<_59.QueryParamsRequest>): _59.QueryParamsRequest;
                    fromAmino(_: _59.QueryParamsRequestAmino): _59.QueryParamsRequest;
                    toAmino(_: _59.QueryParamsRequest): _59.QueryParamsRequestAmino;
                    fromAminoMsg(object: _59.QueryParamsRequestAminoMsg): _59.QueryParamsRequest;
                    toAminoMsg(message: _59.QueryParamsRequest): _59.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _59.QueryParamsRequestProtoMsg): _59.QueryParamsRequest;
                    toProto(message: _59.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _59.QueryParamsRequest): _59.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _59.QueryParamsResponse;
                    isSDK(o: any): o is _59.QueryParamsResponseSDKType;
                    isAmino(o: any): o is _59.QueryParamsResponseAmino;
                    encode(message: _59.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.QueryParamsResponse;
                    fromJSON(object: any): _59.QueryParamsResponse;
                    toJSON(message: _59.QueryParamsResponse): import("..").JsonSafe<_59.QueryParamsResponse>;
                    fromPartial(object: Partial<_59.QueryParamsResponse>): _59.QueryParamsResponse;
                    fromAmino(object: _59.QueryParamsResponseAmino): _59.QueryParamsResponse;
                    toAmino(message: _59.QueryParamsResponse): _59.QueryParamsResponseAmino;
                    fromAminoMsg(object: _59.QueryParamsResponseAminoMsg): _59.QueryParamsResponse;
                    toAminoMsg(message: _59.QueryParamsResponse): _59.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _59.QueryParamsResponseProtoMsg): _59.QueryParamsResponse;
                    toProto(message: _59.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _59.QueryParamsResponse): _59.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _58.GenesisState;
                    isSDK(o: any): o is _58.GenesisStateSDKType;
                    isAmino(o: any): o is _58.GenesisStateAmino;
                    encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.GenesisState;
                    fromJSON(object: any): _58.GenesisState;
                    toJSON(message: _58.GenesisState): import("..").JsonSafe<_58.GenesisState>;
                    fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                    fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                    toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                    fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                    toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                    fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                    toProto(message: _58.GenesisState): Uint8Array;
                    toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.FungibleTokenPacketData;
                    isSDK(o: any): o is _62.FungibleTokenPacketDataSDKType;
                    isAmino(o: any): o is _62.FungibleTokenPacketDataAmino;
                    encode(message: _62.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.FungibleTokenPacketData;
                    fromJSON(object: any): _62.FungibleTokenPacketData;
                    toJSON(message: _62.FungibleTokenPacketData): import("..").JsonSafe<_62.FungibleTokenPacketData>;
                    fromPartial(object: Partial<_62.FungibleTokenPacketData>): _62.FungibleTokenPacketData;
                    fromAmino(object: _62.FungibleTokenPacketDataAmino): _62.FungibleTokenPacketData;
                    toAmino(message: _62.FungibleTokenPacketData): _62.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _62.FungibleTokenPacketDataAminoMsg): _62.FungibleTokenPacketData;
                    toAminoMsg(message: _62.FungibleTokenPacketData): _62.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _62.FungibleTokenPacketDataProtoMsg): _62.FungibleTokenPacketData;
                    toProto(message: _62.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _62.FungibleTokenPacketData): _62.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _201.MsgClientImpl;
                QueryClientImpl: typeof _197.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _65.QueryChannelRequest): Promise<_65.QueryChannelResponse>;
                    channels(request?: _65.QueryChannelsRequest): Promise<_65.QueryChannelsResponse>;
                    connectionChannels(request: _65.QueryConnectionChannelsRequest): Promise<_65.QueryConnectionChannelsResponse>;
                    channelClientState(request: _65.QueryChannelClientStateRequest): Promise<_65.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _65.QueryChannelConsensusStateRequest): Promise<_65.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _65.QueryPacketCommitmentRequest): Promise<_65.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _65.QueryPacketCommitmentsRequest): Promise<_65.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _65.QueryPacketReceiptRequest): Promise<_65.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _65.QueryPacketAcknowledgementRequest): Promise<_65.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _65.QueryPacketAcknowledgementsRequest): Promise<_65.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _65.QueryUnreceivedPacketsRequest): Promise<_65.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _65.QueryUnreceivedAcksRequest): Promise<_65.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _65.QueryNextSequenceReceiveRequest): Promise<_65.QueryNextSequenceReceiveResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: _66.MsgRecvPacket;
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: _66.MsgTimeout;
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _66.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _66.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channel: {
                                    state: _63.State;
                                    ordering: _63.Order;
                                    counterparty: {
                                        portId: string;
                                        channelId: string;
                                    };
                                    connectionHops: string[];
                                    version: string;
                                };
                                signer: string;
                            };
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                previousChannelId: string;
                                channel: {
                                    state: _63.State;
                                    ordering: _63.Order;
                                    counterparty: {
                                        portId: string;
                                        channelId: string;
                                    };
                                    connectionHops: string[];
                                    version: string;
                                };
                                counterpartyVersion: string;
                                proofInit: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channelId: string;
                                counterpartyChannelId: string;
                                counterpartyVersion: string;
                                proofTry: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channelId: string;
                                proofAck: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channelId: string;
                                signer: string;
                            };
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channelId: string;
                                proofInit: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: {
                                packet: {
                                    sequence: string;
                                    sourcePort: string;
                                    sourceChannel: string;
                                    destinationPort: string;
                                    destinationChannel: string;
                                    data: string;
                                    timeoutHeight: {
                                        revisionNumber: string;
                                        revisionHeight: string;
                                    };
                                    timeoutTimestamp: string;
                                };
                                proofCommitment: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: {
                                packet: {
                                    sequence: string;
                                    sourcePort: string;
                                    sourceChannel: string;
                                    destinationPort: string;
                                    destinationChannel: string;
                                    data: string;
                                    timeoutHeight: {
                                        revisionNumber: string;
                                        revisionHeight: string;
                                    };
                                    timeoutTimestamp: string;
                                };
                                proofUnreceived: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                nextSequenceRecv: string;
                                signer: string;
                            };
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: {
                                packet: {
                                    sequence: string;
                                    sourcePort: string;
                                    sourceChannel: string;
                                    destinationPort: string;
                                    destinationChannel: string;
                                    data: string;
                                    timeoutHeight: {
                                        revisionNumber: string;
                                        revisionHeight: string;
                                    };
                                    timeoutTimestamp: string;
                                };
                                proofUnreceived: string;
                                proofClose: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                nextSequenceRecv: string;
                                signer: string;
                            };
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: {
                                packet: {
                                    sequence: string;
                                    sourcePort: string;
                                    sourceChannel: string;
                                    destinationPort: string;
                                    destinationChannel: string;
                                    data: string;
                                    timeoutHeight: {
                                        revisionNumber: string;
                                        revisionHeight: string;
                                    };
                                    timeoutTimestamp: string;
                                };
                                acknowledgement: string;
                                proofAcked: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _66.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _66.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _66.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _66.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _66.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _66.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _66.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _66.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _66.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _66.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _66.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _66.MsgRecvPacket): {
                            typeUrl: string;
                            value: _66.MsgRecvPacket;
                        };
                        timeout(value: _66.MsgTimeout): {
                            typeUrl: string;
                            value: _66.MsgTimeout;
                        };
                        timeoutOnClose(value: _66.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _66.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _66.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _66.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _66.MsgChannelOpenInit) => _66.MsgChannelOpenInitAmino;
                        fromAmino: (object: _66.MsgChannelOpenInitAmino) => _66.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _66.MsgChannelOpenTry) => _66.MsgChannelOpenTryAmino;
                        fromAmino: (object: _66.MsgChannelOpenTryAmino) => _66.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _66.MsgChannelOpenAck) => _66.MsgChannelOpenAckAmino;
                        fromAmino: (object: _66.MsgChannelOpenAckAmino) => _66.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _66.MsgChannelOpenConfirm) => _66.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _66.MsgChannelOpenConfirmAmino) => _66.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _66.MsgChannelCloseInit) => _66.MsgChannelCloseInitAmino;
                        fromAmino: (object: _66.MsgChannelCloseInitAmino) => _66.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _66.MsgChannelCloseConfirm) => _66.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _66.MsgChannelCloseConfirmAmino) => _66.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _66.MsgRecvPacket) => _66.MsgRecvPacketAmino;
                        fromAmino: (object: _66.MsgRecvPacketAmino) => _66.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _66.MsgTimeout) => _66.MsgTimeoutAmino;
                        fromAmino: (object: _66.MsgTimeoutAmino) => _66.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _66.MsgTimeoutOnClose) => _66.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _66.MsgTimeoutOnCloseAmino) => _66.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _66.MsgAcknowledgement) => _66.MsgAcknowledgementAmino;
                        fromAmino: (object: _66.MsgAcknowledgementAmino) => _66.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenInit;
                    isSDK(o: any): o is _66.MsgChannelOpenInitSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenInitAmino;
                    encode(message: _66.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenInit;
                    fromJSON(object: any): _66.MsgChannelOpenInit;
                    toJSON(message: _66.MsgChannelOpenInit): import("..").JsonSafe<_66.MsgChannelOpenInit>;
                    fromPartial(object: Partial<_66.MsgChannelOpenInit>): _66.MsgChannelOpenInit;
                    fromAmino(object: _66.MsgChannelOpenInitAmino): _66.MsgChannelOpenInit;
                    toAmino(message: _66.MsgChannelOpenInit): _66.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenInitAminoMsg): _66.MsgChannelOpenInit;
                    toAminoMsg(message: _66.MsgChannelOpenInit): _66.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenInitProtoMsg): _66.MsgChannelOpenInit;
                    toProto(message: _66.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenInit): _66.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenInitResponse;
                    isSDK(o: any): o is _66.MsgChannelOpenInitResponseSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenInitResponseAmino;
                    encode(_: _66.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _66.MsgChannelOpenInitResponse;
                    toJSON(_: _66.MsgChannelOpenInitResponse): import("..").JsonSafe<_66.MsgChannelOpenInitResponse>;
                    fromPartial(_: Partial<_66.MsgChannelOpenInitResponse>): _66.MsgChannelOpenInitResponse;
                    fromAmino(_: _66.MsgChannelOpenInitResponseAmino): _66.MsgChannelOpenInitResponse;
                    toAmino(_: _66.MsgChannelOpenInitResponse): _66.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenInitResponseAminoMsg): _66.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _66.MsgChannelOpenInitResponse): _66.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenInitResponseProtoMsg): _66.MsgChannelOpenInitResponse;
                    toProto(message: _66.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenInitResponse): _66.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenTry;
                    isSDK(o: any): o is _66.MsgChannelOpenTrySDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenTryAmino;
                    encode(message: _66.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenTry;
                    fromJSON(object: any): _66.MsgChannelOpenTry;
                    toJSON(message: _66.MsgChannelOpenTry): import("..").JsonSafe<_66.MsgChannelOpenTry>;
                    fromPartial(object: Partial<_66.MsgChannelOpenTry>): _66.MsgChannelOpenTry;
                    fromAmino(object: _66.MsgChannelOpenTryAmino): _66.MsgChannelOpenTry;
                    toAmino(message: _66.MsgChannelOpenTry): _66.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenTryAminoMsg): _66.MsgChannelOpenTry;
                    toAminoMsg(message: _66.MsgChannelOpenTry): _66.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenTryProtoMsg): _66.MsgChannelOpenTry;
                    toProto(message: _66.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenTry): _66.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenTryResponse;
                    isSDK(o: any): o is _66.MsgChannelOpenTryResponseSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenTryResponseAmino;
                    encode(_: _66.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _66.MsgChannelOpenTryResponse;
                    toJSON(_: _66.MsgChannelOpenTryResponse): import("..").JsonSafe<_66.MsgChannelOpenTryResponse>;
                    fromPartial(_: Partial<_66.MsgChannelOpenTryResponse>): _66.MsgChannelOpenTryResponse;
                    fromAmino(_: _66.MsgChannelOpenTryResponseAmino): _66.MsgChannelOpenTryResponse;
                    toAmino(_: _66.MsgChannelOpenTryResponse): _66.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenTryResponseAminoMsg): _66.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _66.MsgChannelOpenTryResponse): _66.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenTryResponseProtoMsg): _66.MsgChannelOpenTryResponse;
                    toProto(message: _66.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenTryResponse): _66.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenAck;
                    isSDK(o: any): o is _66.MsgChannelOpenAckSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenAckAmino;
                    encode(message: _66.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenAck;
                    fromJSON(object: any): _66.MsgChannelOpenAck;
                    toJSON(message: _66.MsgChannelOpenAck): import("..").JsonSafe<_66.MsgChannelOpenAck>;
                    fromPartial(object: Partial<_66.MsgChannelOpenAck>): _66.MsgChannelOpenAck;
                    fromAmino(object: _66.MsgChannelOpenAckAmino): _66.MsgChannelOpenAck;
                    toAmino(message: _66.MsgChannelOpenAck): _66.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenAckAminoMsg): _66.MsgChannelOpenAck;
                    toAminoMsg(message: _66.MsgChannelOpenAck): _66.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenAckProtoMsg): _66.MsgChannelOpenAck;
                    toProto(message: _66.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenAck): _66.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenAckResponse;
                    isSDK(o: any): o is _66.MsgChannelOpenAckResponseSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenAckResponseAmino;
                    encode(_: _66.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _66.MsgChannelOpenAckResponse;
                    toJSON(_: _66.MsgChannelOpenAckResponse): import("..").JsonSafe<_66.MsgChannelOpenAckResponse>;
                    fromPartial(_: Partial<_66.MsgChannelOpenAckResponse>): _66.MsgChannelOpenAckResponse;
                    fromAmino(_: _66.MsgChannelOpenAckResponseAmino): _66.MsgChannelOpenAckResponse;
                    toAmino(_: _66.MsgChannelOpenAckResponse): _66.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenAckResponseAminoMsg): _66.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _66.MsgChannelOpenAckResponse): _66.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenAckResponseProtoMsg): _66.MsgChannelOpenAckResponse;
                    toProto(message: _66.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenAckResponse): _66.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenConfirm;
                    isSDK(o: any): o is _66.MsgChannelOpenConfirmSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenConfirmAmino;
                    encode(message: _66.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenConfirm;
                    fromJSON(object: any): _66.MsgChannelOpenConfirm;
                    toJSON(message: _66.MsgChannelOpenConfirm): import("..").JsonSafe<_66.MsgChannelOpenConfirm>;
                    fromPartial(object: Partial<_66.MsgChannelOpenConfirm>): _66.MsgChannelOpenConfirm;
                    fromAmino(object: _66.MsgChannelOpenConfirmAmino): _66.MsgChannelOpenConfirm;
                    toAmino(message: _66.MsgChannelOpenConfirm): _66.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenConfirmAminoMsg): _66.MsgChannelOpenConfirm;
                    toAminoMsg(message: _66.MsgChannelOpenConfirm): _66.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenConfirmProtoMsg): _66.MsgChannelOpenConfirm;
                    toProto(message: _66.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenConfirm): _66.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelOpenConfirmResponse;
                    isSDK(o: any): o is _66.MsgChannelOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _66.MsgChannelOpenConfirmResponseAmino;
                    encode(_: _66.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _66.MsgChannelOpenConfirmResponse;
                    toJSON(_: _66.MsgChannelOpenConfirmResponse): import("..").JsonSafe<_66.MsgChannelOpenConfirmResponse>;
                    fromPartial(_: Partial<_66.MsgChannelOpenConfirmResponse>): _66.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _66.MsgChannelOpenConfirmResponseAmino): _66.MsgChannelOpenConfirmResponse;
                    toAmino(_: _66.MsgChannelOpenConfirmResponse): _66.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _66.MsgChannelOpenConfirmResponseAminoMsg): _66.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _66.MsgChannelOpenConfirmResponse): _66.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelOpenConfirmResponseProtoMsg): _66.MsgChannelOpenConfirmResponse;
                    toProto(message: _66.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelOpenConfirmResponse): _66.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelCloseInit;
                    isSDK(o: any): o is _66.MsgChannelCloseInitSDKType;
                    isAmino(o: any): o is _66.MsgChannelCloseInitAmino;
                    encode(message: _66.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelCloseInit;
                    fromJSON(object: any): _66.MsgChannelCloseInit;
                    toJSON(message: _66.MsgChannelCloseInit): import("..").JsonSafe<_66.MsgChannelCloseInit>;
                    fromPartial(object: Partial<_66.MsgChannelCloseInit>): _66.MsgChannelCloseInit;
                    fromAmino(object: _66.MsgChannelCloseInitAmino): _66.MsgChannelCloseInit;
                    toAmino(message: _66.MsgChannelCloseInit): _66.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _66.MsgChannelCloseInitAminoMsg): _66.MsgChannelCloseInit;
                    toAminoMsg(message: _66.MsgChannelCloseInit): _66.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelCloseInitProtoMsg): _66.MsgChannelCloseInit;
                    toProto(message: _66.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelCloseInit): _66.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelCloseInitResponse;
                    isSDK(o: any): o is _66.MsgChannelCloseInitResponseSDKType;
                    isAmino(o: any): o is _66.MsgChannelCloseInitResponseAmino;
                    encode(_: _66.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _66.MsgChannelCloseInitResponse;
                    toJSON(_: _66.MsgChannelCloseInitResponse): import("..").JsonSafe<_66.MsgChannelCloseInitResponse>;
                    fromPartial(_: Partial<_66.MsgChannelCloseInitResponse>): _66.MsgChannelCloseInitResponse;
                    fromAmino(_: _66.MsgChannelCloseInitResponseAmino): _66.MsgChannelCloseInitResponse;
                    toAmino(_: _66.MsgChannelCloseInitResponse): _66.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _66.MsgChannelCloseInitResponseAminoMsg): _66.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _66.MsgChannelCloseInitResponse): _66.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelCloseInitResponseProtoMsg): _66.MsgChannelCloseInitResponse;
                    toProto(message: _66.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelCloseInitResponse): _66.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelCloseConfirm;
                    isSDK(o: any): o is _66.MsgChannelCloseConfirmSDKType;
                    isAmino(o: any): o is _66.MsgChannelCloseConfirmAmino;
                    encode(message: _66.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelCloseConfirm;
                    fromJSON(object: any): _66.MsgChannelCloseConfirm;
                    toJSON(message: _66.MsgChannelCloseConfirm): import("..").JsonSafe<_66.MsgChannelCloseConfirm>;
                    fromPartial(object: Partial<_66.MsgChannelCloseConfirm>): _66.MsgChannelCloseConfirm;
                    fromAmino(object: _66.MsgChannelCloseConfirmAmino): _66.MsgChannelCloseConfirm;
                    toAmino(message: _66.MsgChannelCloseConfirm): _66.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _66.MsgChannelCloseConfirmAminoMsg): _66.MsgChannelCloseConfirm;
                    toAminoMsg(message: _66.MsgChannelCloseConfirm): _66.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelCloseConfirmProtoMsg): _66.MsgChannelCloseConfirm;
                    toProto(message: _66.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelCloseConfirm): _66.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgChannelCloseConfirmResponse;
                    isSDK(o: any): o is _66.MsgChannelCloseConfirmResponseSDKType;
                    isAmino(o: any): o is _66.MsgChannelCloseConfirmResponseAmino;
                    encode(_: _66.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _66.MsgChannelCloseConfirmResponse;
                    toJSON(_: _66.MsgChannelCloseConfirmResponse): import("..").JsonSafe<_66.MsgChannelCloseConfirmResponse>;
                    fromPartial(_: Partial<_66.MsgChannelCloseConfirmResponse>): _66.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _66.MsgChannelCloseConfirmResponseAmino): _66.MsgChannelCloseConfirmResponse;
                    toAmino(_: _66.MsgChannelCloseConfirmResponse): _66.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _66.MsgChannelCloseConfirmResponseAminoMsg): _66.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _66.MsgChannelCloseConfirmResponse): _66.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgChannelCloseConfirmResponseProtoMsg): _66.MsgChannelCloseConfirmResponse;
                    toProto(message: _66.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgChannelCloseConfirmResponse): _66.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgRecvPacket;
                    isSDK(o: any): o is _66.MsgRecvPacketSDKType;
                    isAmino(o: any): o is _66.MsgRecvPacketAmino;
                    encode(message: _66.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgRecvPacket;
                    fromJSON(object: any): _66.MsgRecvPacket;
                    toJSON(message: _66.MsgRecvPacket): import("..").JsonSafe<_66.MsgRecvPacket>;
                    fromPartial(object: Partial<_66.MsgRecvPacket>): _66.MsgRecvPacket;
                    fromAmino(object: _66.MsgRecvPacketAmino): _66.MsgRecvPacket;
                    toAmino(message: _66.MsgRecvPacket): _66.MsgRecvPacketAmino;
                    fromAminoMsg(object: _66.MsgRecvPacketAminoMsg): _66.MsgRecvPacket;
                    toAminoMsg(message: _66.MsgRecvPacket): _66.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _66.MsgRecvPacketProtoMsg): _66.MsgRecvPacket;
                    toProto(message: _66.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _66.MsgRecvPacket): _66.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgRecvPacketResponse;
                    isSDK(o: any): o is _66.MsgRecvPacketResponseSDKType;
                    isAmino(o: any): o is _66.MsgRecvPacketResponseAmino;
                    encode(_: _66.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgRecvPacketResponse;
                    fromJSON(_: any): _66.MsgRecvPacketResponse;
                    toJSON(_: _66.MsgRecvPacketResponse): import("..").JsonSafe<_66.MsgRecvPacketResponse>;
                    fromPartial(_: Partial<_66.MsgRecvPacketResponse>): _66.MsgRecvPacketResponse;
                    fromAmino(_: _66.MsgRecvPacketResponseAmino): _66.MsgRecvPacketResponse;
                    toAmino(_: _66.MsgRecvPacketResponse): _66.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _66.MsgRecvPacketResponseAminoMsg): _66.MsgRecvPacketResponse;
                    toAminoMsg(message: _66.MsgRecvPacketResponse): _66.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgRecvPacketResponseProtoMsg): _66.MsgRecvPacketResponse;
                    toProto(message: _66.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgRecvPacketResponse): _66.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgTimeout;
                    isSDK(o: any): o is _66.MsgTimeoutSDKType;
                    isAmino(o: any): o is _66.MsgTimeoutAmino;
                    encode(message: _66.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgTimeout;
                    fromJSON(object: any): _66.MsgTimeout;
                    toJSON(message: _66.MsgTimeout): import("..").JsonSafe<_66.MsgTimeout>;
                    fromPartial(object: Partial<_66.MsgTimeout>): _66.MsgTimeout;
                    fromAmino(object: _66.MsgTimeoutAmino): _66.MsgTimeout;
                    toAmino(message: _66.MsgTimeout): _66.MsgTimeoutAmino;
                    fromAminoMsg(object: _66.MsgTimeoutAminoMsg): _66.MsgTimeout;
                    toAminoMsg(message: _66.MsgTimeout): _66.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _66.MsgTimeoutProtoMsg): _66.MsgTimeout;
                    toProto(message: _66.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _66.MsgTimeout): _66.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgTimeoutResponse;
                    isSDK(o: any): o is _66.MsgTimeoutResponseSDKType;
                    isAmino(o: any): o is _66.MsgTimeoutResponseAmino;
                    encode(_: _66.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgTimeoutResponse;
                    fromJSON(_: any): _66.MsgTimeoutResponse;
                    toJSON(_: _66.MsgTimeoutResponse): import("..").JsonSafe<_66.MsgTimeoutResponse>;
                    fromPartial(_: Partial<_66.MsgTimeoutResponse>): _66.MsgTimeoutResponse;
                    fromAmino(_: _66.MsgTimeoutResponseAmino): _66.MsgTimeoutResponse;
                    toAmino(_: _66.MsgTimeoutResponse): _66.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _66.MsgTimeoutResponseAminoMsg): _66.MsgTimeoutResponse;
                    toAminoMsg(message: _66.MsgTimeoutResponse): _66.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgTimeoutResponseProtoMsg): _66.MsgTimeoutResponse;
                    toProto(message: _66.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgTimeoutResponse): _66.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgTimeoutOnClose;
                    isSDK(o: any): o is _66.MsgTimeoutOnCloseSDKType;
                    isAmino(o: any): o is _66.MsgTimeoutOnCloseAmino;
                    encode(message: _66.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgTimeoutOnClose;
                    fromJSON(object: any): _66.MsgTimeoutOnClose;
                    toJSON(message: _66.MsgTimeoutOnClose): import("..").JsonSafe<_66.MsgTimeoutOnClose>;
                    fromPartial(object: Partial<_66.MsgTimeoutOnClose>): _66.MsgTimeoutOnClose;
                    fromAmino(object: _66.MsgTimeoutOnCloseAmino): _66.MsgTimeoutOnClose;
                    toAmino(message: _66.MsgTimeoutOnClose): _66.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _66.MsgTimeoutOnCloseAminoMsg): _66.MsgTimeoutOnClose;
                    toAminoMsg(message: _66.MsgTimeoutOnClose): _66.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _66.MsgTimeoutOnCloseProtoMsg): _66.MsgTimeoutOnClose;
                    toProto(message: _66.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _66.MsgTimeoutOnClose): _66.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgTimeoutOnCloseResponse;
                    isSDK(o: any): o is _66.MsgTimeoutOnCloseResponseSDKType;
                    isAmino(o: any): o is _66.MsgTimeoutOnCloseResponseAmino;
                    encode(_: _66.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _66.MsgTimeoutOnCloseResponse;
                    toJSON(_: _66.MsgTimeoutOnCloseResponse): import("..").JsonSafe<_66.MsgTimeoutOnCloseResponse>;
                    fromPartial(_: Partial<_66.MsgTimeoutOnCloseResponse>): _66.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _66.MsgTimeoutOnCloseResponseAmino): _66.MsgTimeoutOnCloseResponse;
                    toAmino(_: _66.MsgTimeoutOnCloseResponse): _66.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _66.MsgTimeoutOnCloseResponseAminoMsg): _66.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _66.MsgTimeoutOnCloseResponse): _66.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgTimeoutOnCloseResponseProtoMsg): _66.MsgTimeoutOnCloseResponse;
                    toProto(message: _66.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgTimeoutOnCloseResponse): _66.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgAcknowledgement;
                    isSDK(o: any): o is _66.MsgAcknowledgementSDKType;
                    isAmino(o: any): o is _66.MsgAcknowledgementAmino;
                    encode(message: _66.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgAcknowledgement;
                    fromJSON(object: any): _66.MsgAcknowledgement;
                    toJSON(message: _66.MsgAcknowledgement): import("..").JsonSafe<_66.MsgAcknowledgement>;
                    fromPartial(object: Partial<_66.MsgAcknowledgement>): _66.MsgAcknowledgement;
                    fromAmino(object: _66.MsgAcknowledgementAmino): _66.MsgAcknowledgement;
                    toAmino(message: _66.MsgAcknowledgement): _66.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _66.MsgAcknowledgementAminoMsg): _66.MsgAcknowledgement;
                    toAminoMsg(message: _66.MsgAcknowledgement): _66.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _66.MsgAcknowledgementProtoMsg): _66.MsgAcknowledgement;
                    toProto(message: _66.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _66.MsgAcknowledgement): _66.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.MsgAcknowledgementResponse;
                    isSDK(o: any): o is _66.MsgAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _66.MsgAcknowledgementResponseAmino;
                    encode(_: _66.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.MsgAcknowledgementResponse;
                    fromJSON(_: any): _66.MsgAcknowledgementResponse;
                    toJSON(_: _66.MsgAcknowledgementResponse): import("..").JsonSafe<_66.MsgAcknowledgementResponse>;
                    fromPartial(_: Partial<_66.MsgAcknowledgementResponse>): _66.MsgAcknowledgementResponse;
                    fromAmino(_: _66.MsgAcknowledgementResponseAmino): _66.MsgAcknowledgementResponse;
                    toAmino(_: _66.MsgAcknowledgementResponse): _66.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _66.MsgAcknowledgementResponseAminoMsg): _66.MsgAcknowledgementResponse;
                    toAminoMsg(message: _66.MsgAcknowledgementResponse): _66.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _66.MsgAcknowledgementResponseProtoMsg): _66.MsgAcknowledgementResponse;
                    toProto(message: _66.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _66.MsgAcknowledgementResponse): _66.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelRequest;
                    isSDK(o: any): o is _65.QueryChannelRequestSDKType;
                    isAmino(o: any): o is _65.QueryChannelRequestAmino;
                    encode(message: _65.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelRequest;
                    fromJSON(object: any): _65.QueryChannelRequest;
                    toJSON(message: _65.QueryChannelRequest): import("..").JsonSafe<_65.QueryChannelRequest>;
                    fromPartial(object: Partial<_65.QueryChannelRequest>): _65.QueryChannelRequest;
                    fromAmino(object: _65.QueryChannelRequestAmino): _65.QueryChannelRequest;
                    toAmino(message: _65.QueryChannelRequest): _65.QueryChannelRequestAmino;
                    fromAminoMsg(object: _65.QueryChannelRequestAminoMsg): _65.QueryChannelRequest;
                    toAminoMsg(message: _65.QueryChannelRequest): _65.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelRequestProtoMsg): _65.QueryChannelRequest;
                    toProto(message: _65.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelRequest): _65.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelResponse;
                    isSDK(o: any): o is _65.QueryChannelResponseSDKType;
                    isAmino(o: any): o is _65.QueryChannelResponseAmino;
                    encode(message: _65.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelResponse;
                    fromJSON(object: any): _65.QueryChannelResponse;
                    toJSON(message: _65.QueryChannelResponse): import("..").JsonSafe<_65.QueryChannelResponse>;
                    fromPartial(object: Partial<_65.QueryChannelResponse>): _65.QueryChannelResponse;
                    fromAmino(object: _65.QueryChannelResponseAmino): _65.QueryChannelResponse;
                    toAmino(message: _65.QueryChannelResponse): _65.QueryChannelResponseAmino;
                    fromAminoMsg(object: _65.QueryChannelResponseAminoMsg): _65.QueryChannelResponse;
                    toAminoMsg(message: _65.QueryChannelResponse): _65.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelResponseProtoMsg): _65.QueryChannelResponse;
                    toProto(message: _65.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelResponse): _65.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelsRequest;
                    isSDK(o: any): o is _65.QueryChannelsRequestSDKType;
                    isAmino(o: any): o is _65.QueryChannelsRequestAmino;
                    encode(message: _65.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelsRequest;
                    fromJSON(object: any): _65.QueryChannelsRequest;
                    toJSON(message: _65.QueryChannelsRequest): import("..").JsonSafe<_65.QueryChannelsRequest>;
                    fromPartial(object: Partial<_65.QueryChannelsRequest>): _65.QueryChannelsRequest;
                    fromAmino(object: _65.QueryChannelsRequestAmino): _65.QueryChannelsRequest;
                    toAmino(message: _65.QueryChannelsRequest): _65.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _65.QueryChannelsRequestAminoMsg): _65.QueryChannelsRequest;
                    toAminoMsg(message: _65.QueryChannelsRequest): _65.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelsRequestProtoMsg): _65.QueryChannelsRequest;
                    toProto(message: _65.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelsRequest): _65.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelsResponse;
                    isSDK(o: any): o is _65.QueryChannelsResponseSDKType;
                    isAmino(o: any): o is _65.QueryChannelsResponseAmino;
                    encode(message: _65.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelsResponse;
                    fromJSON(object: any): _65.QueryChannelsResponse;
                    toJSON(message: _65.QueryChannelsResponse): import("..").JsonSafe<_65.QueryChannelsResponse>;
                    fromPartial(object: Partial<_65.QueryChannelsResponse>): _65.QueryChannelsResponse;
                    fromAmino(object: _65.QueryChannelsResponseAmino): _65.QueryChannelsResponse;
                    toAmino(message: _65.QueryChannelsResponse): _65.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _65.QueryChannelsResponseAminoMsg): _65.QueryChannelsResponse;
                    toAminoMsg(message: _65.QueryChannelsResponse): _65.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelsResponseProtoMsg): _65.QueryChannelsResponse;
                    toProto(message: _65.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelsResponse): _65.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryConnectionChannelsRequest;
                    isSDK(o: any): o is _65.QueryConnectionChannelsRequestSDKType;
                    isAmino(o: any): o is _65.QueryConnectionChannelsRequestAmino;
                    encode(message: _65.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _65.QueryConnectionChannelsRequest;
                    toJSON(message: _65.QueryConnectionChannelsRequest): import("..").JsonSafe<_65.QueryConnectionChannelsRequest>;
                    fromPartial(object: Partial<_65.QueryConnectionChannelsRequest>): _65.QueryConnectionChannelsRequest;
                    fromAmino(object: _65.QueryConnectionChannelsRequestAmino): _65.QueryConnectionChannelsRequest;
                    toAmino(message: _65.QueryConnectionChannelsRequest): _65.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _65.QueryConnectionChannelsRequestAminoMsg): _65.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _65.QueryConnectionChannelsRequest): _65.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryConnectionChannelsRequestProtoMsg): _65.QueryConnectionChannelsRequest;
                    toProto(message: _65.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryConnectionChannelsRequest): _65.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryConnectionChannelsResponse;
                    isSDK(o: any): o is _65.QueryConnectionChannelsResponseSDKType;
                    isAmino(o: any): o is _65.QueryConnectionChannelsResponseAmino;
                    encode(message: _65.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _65.QueryConnectionChannelsResponse;
                    toJSON(message: _65.QueryConnectionChannelsResponse): import("..").JsonSafe<_65.QueryConnectionChannelsResponse>;
                    fromPartial(object: Partial<_65.QueryConnectionChannelsResponse>): _65.QueryConnectionChannelsResponse;
                    fromAmino(object: _65.QueryConnectionChannelsResponseAmino): _65.QueryConnectionChannelsResponse;
                    toAmino(message: _65.QueryConnectionChannelsResponse): _65.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _65.QueryConnectionChannelsResponseAminoMsg): _65.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _65.QueryConnectionChannelsResponse): _65.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryConnectionChannelsResponseProtoMsg): _65.QueryConnectionChannelsResponse;
                    toProto(message: _65.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryConnectionChannelsResponse): _65.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelClientStateRequest;
                    isSDK(o: any): o is _65.QueryChannelClientStateRequestSDKType;
                    isAmino(o: any): o is _65.QueryChannelClientStateRequestAmino;
                    encode(message: _65.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelClientStateRequest;
                    fromJSON(object: any): _65.QueryChannelClientStateRequest;
                    toJSON(message: _65.QueryChannelClientStateRequest): import("..").JsonSafe<_65.QueryChannelClientStateRequest>;
                    fromPartial(object: Partial<_65.QueryChannelClientStateRequest>): _65.QueryChannelClientStateRequest;
                    fromAmino(object: _65.QueryChannelClientStateRequestAmino): _65.QueryChannelClientStateRequest;
                    toAmino(message: _65.QueryChannelClientStateRequest): _65.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _65.QueryChannelClientStateRequestAminoMsg): _65.QueryChannelClientStateRequest;
                    toAminoMsg(message: _65.QueryChannelClientStateRequest): _65.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelClientStateRequestProtoMsg): _65.QueryChannelClientStateRequest;
                    toProto(message: _65.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelClientStateRequest): _65.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelClientStateResponse;
                    isSDK(o: any): o is _65.QueryChannelClientStateResponseSDKType;
                    isAmino(o: any): o is _65.QueryChannelClientStateResponseAmino;
                    encode(message: _65.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelClientStateResponse;
                    fromJSON(object: any): _65.QueryChannelClientStateResponse;
                    toJSON(message: _65.QueryChannelClientStateResponse): import("..").JsonSafe<_65.QueryChannelClientStateResponse>;
                    fromPartial(object: Partial<_65.QueryChannelClientStateResponse>): _65.QueryChannelClientStateResponse;
                    fromAmino(object: _65.QueryChannelClientStateResponseAmino): _65.QueryChannelClientStateResponse;
                    toAmino(message: _65.QueryChannelClientStateResponse): _65.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _65.QueryChannelClientStateResponseAminoMsg): _65.QueryChannelClientStateResponse;
                    toAminoMsg(message: _65.QueryChannelClientStateResponse): _65.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelClientStateResponseProtoMsg): _65.QueryChannelClientStateResponse;
                    toProto(message: _65.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelClientStateResponse): _65.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelConsensusStateRequest;
                    isSDK(o: any): o is _65.QueryChannelConsensusStateRequestSDKType;
                    isAmino(o: any): o is _65.QueryChannelConsensusStateRequestAmino;
                    encode(message: _65.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _65.QueryChannelConsensusStateRequest;
                    toJSON(message: _65.QueryChannelConsensusStateRequest): import("..").JsonSafe<_65.QueryChannelConsensusStateRequest>;
                    fromPartial(object: Partial<_65.QueryChannelConsensusStateRequest>): _65.QueryChannelConsensusStateRequest;
                    fromAmino(object: _65.QueryChannelConsensusStateRequestAmino): _65.QueryChannelConsensusStateRequest;
                    toAmino(message: _65.QueryChannelConsensusStateRequest): _65.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _65.QueryChannelConsensusStateRequestAminoMsg): _65.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _65.QueryChannelConsensusStateRequest): _65.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelConsensusStateRequestProtoMsg): _65.QueryChannelConsensusStateRequest;
                    toProto(message: _65.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelConsensusStateRequest): _65.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryChannelConsensusStateResponse;
                    isSDK(o: any): o is _65.QueryChannelConsensusStateResponseSDKType;
                    isAmino(o: any): o is _65.QueryChannelConsensusStateResponseAmino;
                    encode(message: _65.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _65.QueryChannelConsensusStateResponse;
                    toJSON(message: _65.QueryChannelConsensusStateResponse): import("..").JsonSafe<_65.QueryChannelConsensusStateResponse>;
                    fromPartial(object: Partial<_65.QueryChannelConsensusStateResponse>): _65.QueryChannelConsensusStateResponse;
                    fromAmino(object: _65.QueryChannelConsensusStateResponseAmino): _65.QueryChannelConsensusStateResponse;
                    toAmino(message: _65.QueryChannelConsensusStateResponse): _65.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _65.QueryChannelConsensusStateResponseAminoMsg): _65.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _65.QueryChannelConsensusStateResponse): _65.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryChannelConsensusStateResponseProtoMsg): _65.QueryChannelConsensusStateResponse;
                    toProto(message: _65.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryChannelConsensusStateResponse): _65.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketCommitmentRequest;
                    isSDK(o: any): o is _65.QueryPacketCommitmentRequestSDKType;
                    isAmino(o: any): o is _65.QueryPacketCommitmentRequestAmino;
                    encode(message: _65.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _65.QueryPacketCommitmentRequest;
                    toJSON(message: _65.QueryPacketCommitmentRequest): import("..").JsonSafe<_65.QueryPacketCommitmentRequest>;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentRequest>): _65.QueryPacketCommitmentRequest;
                    fromAmino(object: _65.QueryPacketCommitmentRequestAmino): _65.QueryPacketCommitmentRequest;
                    toAmino(message: _65.QueryPacketCommitmentRequest): _65.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _65.QueryPacketCommitmentRequestAminoMsg): _65.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _65.QueryPacketCommitmentRequest): _65.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketCommitmentRequestProtoMsg): _65.QueryPacketCommitmentRequest;
                    toProto(message: _65.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketCommitmentRequest): _65.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketCommitmentResponse;
                    isSDK(o: any): o is _65.QueryPacketCommitmentResponseSDKType;
                    isAmino(o: any): o is _65.QueryPacketCommitmentResponseAmino;
                    encode(message: _65.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _65.QueryPacketCommitmentResponse;
                    toJSON(message: _65.QueryPacketCommitmentResponse): import("..").JsonSafe<_65.QueryPacketCommitmentResponse>;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentResponse>): _65.QueryPacketCommitmentResponse;
                    fromAmino(object: _65.QueryPacketCommitmentResponseAmino): _65.QueryPacketCommitmentResponse;
                    toAmino(message: _65.QueryPacketCommitmentResponse): _65.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _65.QueryPacketCommitmentResponseAminoMsg): _65.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _65.QueryPacketCommitmentResponse): _65.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketCommitmentResponseProtoMsg): _65.QueryPacketCommitmentResponse;
                    toProto(message: _65.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketCommitmentResponse): _65.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketCommitmentsRequest;
                    isSDK(o: any): o is _65.QueryPacketCommitmentsRequestSDKType;
                    isAmino(o: any): o is _65.QueryPacketCommitmentsRequestAmino;
                    encode(message: _65.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _65.QueryPacketCommitmentsRequest;
                    toJSON(message: _65.QueryPacketCommitmentsRequest): import("..").JsonSafe<_65.QueryPacketCommitmentsRequest>;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentsRequest>): _65.QueryPacketCommitmentsRequest;
                    fromAmino(object: _65.QueryPacketCommitmentsRequestAmino): _65.QueryPacketCommitmentsRequest;
                    toAmino(message: _65.QueryPacketCommitmentsRequest): _65.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _65.QueryPacketCommitmentsRequestAminoMsg): _65.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _65.QueryPacketCommitmentsRequest): _65.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketCommitmentsRequestProtoMsg): _65.QueryPacketCommitmentsRequest;
                    toProto(message: _65.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketCommitmentsRequest): _65.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketCommitmentsResponse;
                    isSDK(o: any): o is _65.QueryPacketCommitmentsResponseSDKType;
                    isAmino(o: any): o is _65.QueryPacketCommitmentsResponseAmino;
                    encode(message: _65.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _65.QueryPacketCommitmentsResponse;
                    toJSON(message: _65.QueryPacketCommitmentsResponse): import("..").JsonSafe<_65.QueryPacketCommitmentsResponse>;
                    fromPartial(object: Partial<_65.QueryPacketCommitmentsResponse>): _65.QueryPacketCommitmentsResponse;
                    fromAmino(object: _65.QueryPacketCommitmentsResponseAmino): _65.QueryPacketCommitmentsResponse;
                    toAmino(message: _65.QueryPacketCommitmentsResponse): _65.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _65.QueryPacketCommitmentsResponseAminoMsg): _65.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _65.QueryPacketCommitmentsResponse): _65.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketCommitmentsResponseProtoMsg): _65.QueryPacketCommitmentsResponse;
                    toProto(message: _65.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketCommitmentsResponse): _65.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketReceiptRequest;
                    isSDK(o: any): o is _65.QueryPacketReceiptRequestSDKType;
                    isAmino(o: any): o is _65.QueryPacketReceiptRequestAmino;
                    encode(message: _65.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketReceiptRequest;
                    fromJSON(object: any): _65.QueryPacketReceiptRequest;
                    toJSON(message: _65.QueryPacketReceiptRequest): import("..").JsonSafe<_65.QueryPacketReceiptRequest>;
                    fromPartial(object: Partial<_65.QueryPacketReceiptRequest>): _65.QueryPacketReceiptRequest;
                    fromAmino(object: _65.QueryPacketReceiptRequestAmino): _65.QueryPacketReceiptRequest;
                    toAmino(message: _65.QueryPacketReceiptRequest): _65.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _65.QueryPacketReceiptRequestAminoMsg): _65.QueryPacketReceiptRequest;
                    toAminoMsg(message: _65.QueryPacketReceiptRequest): _65.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketReceiptRequestProtoMsg): _65.QueryPacketReceiptRequest;
                    toProto(message: _65.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketReceiptRequest): _65.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketReceiptResponse;
                    isSDK(o: any): o is _65.QueryPacketReceiptResponseSDKType;
                    isAmino(o: any): o is _65.QueryPacketReceiptResponseAmino;
                    encode(message: _65.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketReceiptResponse;
                    fromJSON(object: any): _65.QueryPacketReceiptResponse;
                    toJSON(message: _65.QueryPacketReceiptResponse): import("..").JsonSafe<_65.QueryPacketReceiptResponse>;
                    fromPartial(object: Partial<_65.QueryPacketReceiptResponse>): _65.QueryPacketReceiptResponse;
                    fromAmino(object: _65.QueryPacketReceiptResponseAmino): _65.QueryPacketReceiptResponse;
                    toAmino(message: _65.QueryPacketReceiptResponse): _65.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _65.QueryPacketReceiptResponseAminoMsg): _65.QueryPacketReceiptResponse;
                    toAminoMsg(message: _65.QueryPacketReceiptResponse): _65.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketReceiptResponseProtoMsg): _65.QueryPacketReceiptResponse;
                    toProto(message: _65.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketReceiptResponse): _65.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketAcknowledgementRequest;
                    isSDK(o: any): o is _65.QueryPacketAcknowledgementRequestSDKType;
                    isAmino(o: any): o is _65.QueryPacketAcknowledgementRequestAmino;
                    encode(message: _65.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _65.QueryPacketAcknowledgementRequest;
                    toJSON(message: _65.QueryPacketAcknowledgementRequest): import("..").JsonSafe<_65.QueryPacketAcknowledgementRequest>;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementRequest>): _65.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _65.QueryPacketAcknowledgementRequestAmino): _65.QueryPacketAcknowledgementRequest;
                    toAmino(message: _65.QueryPacketAcknowledgementRequest): _65.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _65.QueryPacketAcknowledgementRequestAminoMsg): _65.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _65.QueryPacketAcknowledgementRequest): _65.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketAcknowledgementRequestProtoMsg): _65.QueryPacketAcknowledgementRequest;
                    toProto(message: _65.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketAcknowledgementRequest): _65.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketAcknowledgementResponse;
                    isSDK(o: any): o is _65.QueryPacketAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _65.QueryPacketAcknowledgementResponseAmino;
                    encode(message: _65.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _65.QueryPacketAcknowledgementResponse;
                    toJSON(message: _65.QueryPacketAcknowledgementResponse): import("..").JsonSafe<_65.QueryPacketAcknowledgementResponse>;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementResponse>): _65.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _65.QueryPacketAcknowledgementResponseAmino): _65.QueryPacketAcknowledgementResponse;
                    toAmino(message: _65.QueryPacketAcknowledgementResponse): _65.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _65.QueryPacketAcknowledgementResponseAminoMsg): _65.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _65.QueryPacketAcknowledgementResponse): _65.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketAcknowledgementResponseProtoMsg): _65.QueryPacketAcknowledgementResponse;
                    toProto(message: _65.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketAcknowledgementResponse): _65.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketAcknowledgementsRequest;
                    isSDK(o: any): o is _65.QueryPacketAcknowledgementsRequestSDKType;
                    isAmino(o: any): o is _65.QueryPacketAcknowledgementsRequestAmino;
                    encode(message: _65.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _65.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _65.QueryPacketAcknowledgementsRequest): import("..").JsonSafe<_65.QueryPacketAcknowledgementsRequest>;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementsRequest>): _65.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _65.QueryPacketAcknowledgementsRequestAmino): _65.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _65.QueryPacketAcknowledgementsRequest): _65.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _65.QueryPacketAcknowledgementsRequestAminoMsg): _65.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _65.QueryPacketAcknowledgementsRequest): _65.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketAcknowledgementsRequestProtoMsg): _65.QueryPacketAcknowledgementsRequest;
                    toProto(message: _65.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketAcknowledgementsRequest): _65.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryPacketAcknowledgementsResponse;
                    isSDK(o: any): o is _65.QueryPacketAcknowledgementsResponseSDKType;
                    isAmino(o: any): o is _65.QueryPacketAcknowledgementsResponseAmino;
                    encode(message: _65.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _65.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _65.QueryPacketAcknowledgementsResponse): import("..").JsonSafe<_65.QueryPacketAcknowledgementsResponse>;
                    fromPartial(object: Partial<_65.QueryPacketAcknowledgementsResponse>): _65.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _65.QueryPacketAcknowledgementsResponseAmino): _65.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _65.QueryPacketAcknowledgementsResponse): _65.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _65.QueryPacketAcknowledgementsResponseAminoMsg): _65.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _65.QueryPacketAcknowledgementsResponse): _65.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryPacketAcknowledgementsResponseProtoMsg): _65.QueryPacketAcknowledgementsResponse;
                    toProto(message: _65.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryPacketAcknowledgementsResponse): _65.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUnreceivedPacketsRequest;
                    isSDK(o: any): o is _65.QueryUnreceivedPacketsRequestSDKType;
                    isAmino(o: any): o is _65.QueryUnreceivedPacketsRequestAmino;
                    encode(message: _65.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _65.QueryUnreceivedPacketsRequest;
                    toJSON(message: _65.QueryUnreceivedPacketsRequest): import("..").JsonSafe<_65.QueryUnreceivedPacketsRequest>;
                    fromPartial(object: Partial<_65.QueryUnreceivedPacketsRequest>): _65.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _65.QueryUnreceivedPacketsRequestAmino): _65.QueryUnreceivedPacketsRequest;
                    toAmino(message: _65.QueryUnreceivedPacketsRequest): _65.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _65.QueryUnreceivedPacketsRequestAminoMsg): _65.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _65.QueryUnreceivedPacketsRequest): _65.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryUnreceivedPacketsRequestProtoMsg): _65.QueryUnreceivedPacketsRequest;
                    toProto(message: _65.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryUnreceivedPacketsRequest): _65.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUnreceivedPacketsResponse;
                    isSDK(o: any): o is _65.QueryUnreceivedPacketsResponseSDKType;
                    isAmino(o: any): o is _65.QueryUnreceivedPacketsResponseAmino;
                    encode(message: _65.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _65.QueryUnreceivedPacketsResponse;
                    toJSON(message: _65.QueryUnreceivedPacketsResponse): import("..").JsonSafe<_65.QueryUnreceivedPacketsResponse>;
                    fromPartial(object: Partial<_65.QueryUnreceivedPacketsResponse>): _65.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _65.QueryUnreceivedPacketsResponseAmino): _65.QueryUnreceivedPacketsResponse;
                    toAmino(message: _65.QueryUnreceivedPacketsResponse): _65.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _65.QueryUnreceivedPacketsResponseAminoMsg): _65.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _65.QueryUnreceivedPacketsResponse): _65.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryUnreceivedPacketsResponseProtoMsg): _65.QueryUnreceivedPacketsResponse;
                    toProto(message: _65.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryUnreceivedPacketsResponse): _65.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUnreceivedAcksRequest;
                    isSDK(o: any): o is _65.QueryUnreceivedAcksRequestSDKType;
                    isAmino(o: any): o is _65.QueryUnreceivedAcksRequestAmino;
                    encode(message: _65.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _65.QueryUnreceivedAcksRequest;
                    toJSON(message: _65.QueryUnreceivedAcksRequest): import("..").JsonSafe<_65.QueryUnreceivedAcksRequest>;
                    fromPartial(object: Partial<_65.QueryUnreceivedAcksRequest>): _65.QueryUnreceivedAcksRequest;
                    fromAmino(object: _65.QueryUnreceivedAcksRequestAmino): _65.QueryUnreceivedAcksRequest;
                    toAmino(message: _65.QueryUnreceivedAcksRequest): _65.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _65.QueryUnreceivedAcksRequestAminoMsg): _65.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _65.QueryUnreceivedAcksRequest): _65.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryUnreceivedAcksRequestProtoMsg): _65.QueryUnreceivedAcksRequest;
                    toProto(message: _65.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryUnreceivedAcksRequest): _65.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryUnreceivedAcksResponse;
                    isSDK(o: any): o is _65.QueryUnreceivedAcksResponseSDKType;
                    isAmino(o: any): o is _65.QueryUnreceivedAcksResponseAmino;
                    encode(message: _65.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _65.QueryUnreceivedAcksResponse;
                    toJSON(message: _65.QueryUnreceivedAcksResponse): import("..").JsonSafe<_65.QueryUnreceivedAcksResponse>;
                    fromPartial(object: Partial<_65.QueryUnreceivedAcksResponse>): _65.QueryUnreceivedAcksResponse;
                    fromAmino(object: _65.QueryUnreceivedAcksResponseAmino): _65.QueryUnreceivedAcksResponse;
                    toAmino(message: _65.QueryUnreceivedAcksResponse): _65.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _65.QueryUnreceivedAcksResponseAminoMsg): _65.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _65.QueryUnreceivedAcksResponse): _65.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryUnreceivedAcksResponseProtoMsg): _65.QueryUnreceivedAcksResponse;
                    toProto(message: _65.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryUnreceivedAcksResponse): _65.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryNextSequenceReceiveRequest;
                    isSDK(o: any): o is _65.QueryNextSequenceReceiveRequestSDKType;
                    isAmino(o: any): o is _65.QueryNextSequenceReceiveRequestAmino;
                    encode(message: _65.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _65.QueryNextSequenceReceiveRequest;
                    toJSON(message: _65.QueryNextSequenceReceiveRequest): import("..").JsonSafe<_65.QueryNextSequenceReceiveRequest>;
                    fromPartial(object: Partial<_65.QueryNextSequenceReceiveRequest>): _65.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _65.QueryNextSequenceReceiveRequestAmino): _65.QueryNextSequenceReceiveRequest;
                    toAmino(message: _65.QueryNextSequenceReceiveRequest): _65.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _65.QueryNextSequenceReceiveRequestAminoMsg): _65.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _65.QueryNextSequenceReceiveRequest): _65.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _65.QueryNextSequenceReceiveRequestProtoMsg): _65.QueryNextSequenceReceiveRequest;
                    toProto(message: _65.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _65.QueryNextSequenceReceiveRequest): _65.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.QueryNextSequenceReceiveResponse;
                    isSDK(o: any): o is _65.QueryNextSequenceReceiveResponseSDKType;
                    isAmino(o: any): o is _65.QueryNextSequenceReceiveResponseAmino;
                    encode(message: _65.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _65.QueryNextSequenceReceiveResponse;
                    toJSON(message: _65.QueryNextSequenceReceiveResponse): import("..").JsonSafe<_65.QueryNextSequenceReceiveResponse>;
                    fromPartial(object: Partial<_65.QueryNextSequenceReceiveResponse>): _65.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _65.QueryNextSequenceReceiveResponseAmino): _65.QueryNextSequenceReceiveResponse;
                    toAmino(message: _65.QueryNextSequenceReceiveResponse): _65.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _65.QueryNextSequenceReceiveResponseAminoMsg): _65.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _65.QueryNextSequenceReceiveResponse): _65.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _65.QueryNextSequenceReceiveResponseProtoMsg): _65.QueryNextSequenceReceiveResponse;
                    toProto(message: _65.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _65.QueryNextSequenceReceiveResponse): _65.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.GenesisState;
                    isSDK(o: any): o is _64.GenesisStateSDKType;
                    isAmino(o: any): o is _64.GenesisStateAmino;
                    encode(message: _64.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.GenesisState;
                    fromJSON(object: any): _64.GenesisState;
                    toJSON(message: _64.GenesisState): import("..").JsonSafe<_64.GenesisState>;
                    fromPartial(object: Partial<_64.GenesisState>): _64.GenesisState;
                    fromAmino(object: _64.GenesisStateAmino): _64.GenesisState;
                    toAmino(message: _64.GenesisState): _64.GenesisStateAmino;
                    fromAminoMsg(object: _64.GenesisStateAminoMsg): _64.GenesisState;
                    toAminoMsg(message: _64.GenesisState): _64.GenesisStateAminoMsg;
                    fromProtoMsg(message: _64.GenesisStateProtoMsg): _64.GenesisState;
                    toProto(message: _64.GenesisState): Uint8Array;
                    toProtoMsg(message: _64.GenesisState): _64.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.PacketSequence;
                    isSDK(o: any): o is _64.PacketSequenceSDKType;
                    isAmino(o: any): o is _64.PacketSequenceAmino;
                    encode(message: _64.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.PacketSequence;
                    fromJSON(object: any): _64.PacketSequence;
                    toJSON(message: _64.PacketSequence): import("..").JsonSafe<_64.PacketSequence>;
                    fromPartial(object: Partial<_64.PacketSequence>): _64.PacketSequence;
                    fromAmino(object: _64.PacketSequenceAmino): _64.PacketSequence;
                    toAmino(message: _64.PacketSequence): _64.PacketSequenceAmino;
                    fromAminoMsg(object: _64.PacketSequenceAminoMsg): _64.PacketSequence;
                    toAminoMsg(message: _64.PacketSequence): _64.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _64.PacketSequenceProtoMsg): _64.PacketSequence;
                    toProto(message: _64.PacketSequence): Uint8Array;
                    toProtoMsg(message: _64.PacketSequence): _64.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _63.State;
                stateToJSON(object: _63.State): string;
                orderFromJSON(object: any): _63.Order;
                orderToJSON(object: _63.Order): string;
                State: typeof _63.State;
                StateSDKType: typeof _63.State;
                StateAmino: typeof _63.State;
                Order: typeof _63.Order;
                OrderSDKType: typeof _63.Order;
                OrderAmino: typeof _63.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.Channel;
                    isSDK(o: any): o is _63.ChannelSDKType;
                    isAmino(o: any): o is _63.ChannelAmino;
                    encode(message: _63.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Channel;
                    fromJSON(object: any): _63.Channel;
                    toJSON(message: _63.Channel): import("..").JsonSafe<_63.Channel>;
                    fromPartial(object: Partial<_63.Channel>): _63.Channel;
                    fromAmino(object: _63.ChannelAmino): _63.Channel;
                    toAmino(message: _63.Channel): _63.ChannelAmino;
                    fromAminoMsg(object: _63.ChannelAminoMsg): _63.Channel;
                    toAminoMsg(message: _63.Channel): _63.ChannelAminoMsg;
                    fromProtoMsg(message: _63.ChannelProtoMsg): _63.Channel;
                    toProto(message: _63.Channel): Uint8Array;
                    toProtoMsg(message: _63.Channel): _63.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.IdentifiedChannel;
                    isSDK(o: any): o is _63.IdentifiedChannelSDKType;
                    isAmino(o: any): o is _63.IdentifiedChannelAmino;
                    encode(message: _63.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.IdentifiedChannel;
                    fromJSON(object: any): _63.IdentifiedChannel;
                    toJSON(message: _63.IdentifiedChannel): import("..").JsonSafe<_63.IdentifiedChannel>;
                    fromPartial(object: Partial<_63.IdentifiedChannel>): _63.IdentifiedChannel;
                    fromAmino(object: _63.IdentifiedChannelAmino): _63.IdentifiedChannel;
                    toAmino(message: _63.IdentifiedChannel): _63.IdentifiedChannelAmino;
                    fromAminoMsg(object: _63.IdentifiedChannelAminoMsg): _63.IdentifiedChannel;
                    toAminoMsg(message: _63.IdentifiedChannel): _63.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _63.IdentifiedChannelProtoMsg): _63.IdentifiedChannel;
                    toProto(message: _63.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _63.IdentifiedChannel): _63.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.Counterparty;
                    isSDK(o: any): o is _63.CounterpartySDKType;
                    isAmino(o: any): o is _63.CounterpartyAmino;
                    encode(message: _63.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Counterparty;
                    fromJSON(object: any): _63.Counterparty;
                    toJSON(message: _63.Counterparty): import("..").JsonSafe<_63.Counterparty>;
                    fromPartial(object: Partial<_63.Counterparty>): _63.Counterparty;
                    fromAmino(object: _63.CounterpartyAmino): _63.Counterparty;
                    toAmino(message: _63.Counterparty): _63.CounterpartyAmino;
                    fromAminoMsg(object: _63.CounterpartyAminoMsg): _63.Counterparty;
                    toAminoMsg(message: _63.Counterparty): _63.CounterpartyAminoMsg;
                    fromProtoMsg(message: _63.CounterpartyProtoMsg): _63.Counterparty;
                    toProto(message: _63.Counterparty): Uint8Array;
                    toProtoMsg(message: _63.Counterparty): _63.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.Packet;
                    isSDK(o: any): o is _63.PacketSDKType;
                    isAmino(o: any): o is _63.PacketAmino;
                    encode(message: _63.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Packet;
                    fromJSON(object: any): _63.Packet;
                    toJSON(message: _63.Packet): import("..").JsonSafe<_63.Packet>;
                    fromPartial(object: Partial<_63.Packet>): _63.Packet;
                    fromAmino(object: _63.PacketAmino): _63.Packet;
                    toAmino(message: _63.Packet): _63.PacketAmino;
                    fromAminoMsg(object: _63.PacketAminoMsg): _63.Packet;
                    toAminoMsg(message: _63.Packet): _63.PacketAminoMsg;
                    fromProtoMsg(message: _63.PacketProtoMsg): _63.Packet;
                    toProto(message: _63.Packet): Uint8Array;
                    toProtoMsg(message: _63.Packet): _63.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.PacketState;
                    isSDK(o: any): o is _63.PacketStateSDKType;
                    isAmino(o: any): o is _63.PacketStateAmino;
                    encode(message: _63.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.PacketState;
                    fromJSON(object: any): _63.PacketState;
                    toJSON(message: _63.PacketState): import("..").JsonSafe<_63.PacketState>;
                    fromPartial(object: Partial<_63.PacketState>): _63.PacketState;
                    fromAmino(object: _63.PacketStateAmino): _63.PacketState;
                    toAmino(message: _63.PacketState): _63.PacketStateAmino;
                    fromAminoMsg(object: _63.PacketStateAminoMsg): _63.PacketState;
                    toAminoMsg(message: _63.PacketState): _63.PacketStateAminoMsg;
                    fromProtoMsg(message: _63.PacketStateProtoMsg): _63.PacketState;
                    toProto(message: _63.PacketState): Uint8Array;
                    toProtoMsg(message: _63.PacketState): _63.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.Acknowledgement;
                    isSDK(o: any): o is _63.AcknowledgementSDKType;
                    isAmino(o: any): o is _63.AcknowledgementAmino;
                    encode(message: _63.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Acknowledgement;
                    fromJSON(object: any): _63.Acknowledgement;
                    toJSON(message: _63.Acknowledgement): import("..").JsonSafe<_63.Acknowledgement>;
                    fromPartial(object: Partial<_63.Acknowledgement>): _63.Acknowledgement;
                    fromAmino(object: _63.AcknowledgementAmino): _63.Acknowledgement;
                    toAmino(message: _63.Acknowledgement): _63.AcknowledgementAmino;
                    fromAminoMsg(object: _63.AcknowledgementAminoMsg): _63.Acknowledgement;
                    toAminoMsg(message: _63.Acknowledgement): _63.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _63.AcknowledgementProtoMsg): _63.Acknowledgement;
                    toProto(message: _63.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _63.Acknowledgement): _63.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _202.MsgClientImpl;
                QueryClientImpl: typeof _198.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _69.QueryClientStateRequest): Promise<_69.QueryClientStateResponse>;
                    clientStates(request?: _69.QueryClientStatesRequest): Promise<_69.QueryClientStatesResponse>;
                    consensusState(request: _69.QueryConsensusStateRequest): Promise<_69.QueryConsensusStateResponse>;
                    consensusStates(request: _69.QueryConsensusStatesRequest): Promise<_69.QueryConsensusStatesResponse>;
                    clientStatus(request: _69.QueryClientStatusRequest): Promise<_69.QueryClientStatusResponse>;
                    clientParams(request?: _69.QueryClientParamsRequest): Promise<_69.QueryClientParamsResponse>;
                    upgradedClientState(request?: _69.QueryUpgradedClientStateRequest): Promise<_69.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _69.QueryUpgradedConsensusStateRequest): Promise<_69.QueryUpgradedConsensusStateResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: _70.MsgCreateClient;
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: _70.MsgUpdateClient;
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _70.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _70.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: {
                                clientState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                consensusState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                signer: string;
                            };
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                header?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                signer: string;
                            };
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                clientState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                consensusState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                proofUpgradeClient: string;
                                proofUpgradeConsensusState: string;
                                signer: string;
                            };
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                misbehaviour?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                signer: string;
                            };
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _70.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _70.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _70.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _70.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _70.MsgCreateClient): {
                            typeUrl: string;
                            value: _70.MsgCreateClient;
                        };
                        updateClient(value: _70.MsgUpdateClient): {
                            typeUrl: string;
                            value: _70.MsgUpdateClient;
                        };
                        upgradeClient(value: _70.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _70.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _70.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _70.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _70.MsgCreateClient) => _70.MsgCreateClientAmino;
                        fromAmino: (object: _70.MsgCreateClientAmino) => _70.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _70.MsgUpdateClient) => _70.MsgUpdateClientAmino;
                        fromAmino: (object: _70.MsgUpdateClientAmino) => _70.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _70.MsgUpgradeClient) => _70.MsgUpgradeClientAmino;
                        fromAmino: (object: _70.MsgUpgradeClientAmino) => _70.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _70.MsgSubmitMisbehaviour) => _70.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _70.MsgSubmitMisbehaviourAmino) => _70.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgCreateClient;
                    isSDK(o: any): o is _70.MsgCreateClientSDKType;
                    isAmino(o: any): o is _70.MsgCreateClientAmino;
                    encode(message: _70.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgCreateClient;
                    fromJSON(object: any): _70.MsgCreateClient;
                    toJSON(message: _70.MsgCreateClient): import("..").JsonSafe<_70.MsgCreateClient>;
                    fromPartial(object: Partial<_70.MsgCreateClient>): _70.MsgCreateClient;
                    fromAmino(object: _70.MsgCreateClientAmino): _70.MsgCreateClient;
                    toAmino(message: _70.MsgCreateClient): _70.MsgCreateClientAmino;
                    fromAminoMsg(object: _70.MsgCreateClientAminoMsg): _70.MsgCreateClient;
                    toAminoMsg(message: _70.MsgCreateClient): _70.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _70.MsgCreateClientProtoMsg): _70.MsgCreateClient;
                    toProto(message: _70.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _70.MsgCreateClient): _70.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgCreateClientResponse;
                    isSDK(o: any): o is _70.MsgCreateClientResponseSDKType;
                    isAmino(o: any): o is _70.MsgCreateClientResponseAmino;
                    encode(_: _70.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgCreateClientResponse;
                    fromJSON(_: any): _70.MsgCreateClientResponse;
                    toJSON(_: _70.MsgCreateClientResponse): import("..").JsonSafe<_70.MsgCreateClientResponse>;
                    fromPartial(_: Partial<_70.MsgCreateClientResponse>): _70.MsgCreateClientResponse;
                    fromAmino(_: _70.MsgCreateClientResponseAmino): _70.MsgCreateClientResponse;
                    toAmino(_: _70.MsgCreateClientResponse): _70.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _70.MsgCreateClientResponseAminoMsg): _70.MsgCreateClientResponse;
                    toAminoMsg(message: _70.MsgCreateClientResponse): _70.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgCreateClientResponseProtoMsg): _70.MsgCreateClientResponse;
                    toProto(message: _70.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgCreateClientResponse): _70.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgUpdateClient;
                    isSDK(o: any): o is _70.MsgUpdateClientSDKType;
                    isAmino(o: any): o is _70.MsgUpdateClientAmino;
                    encode(message: _70.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgUpdateClient;
                    fromJSON(object: any): _70.MsgUpdateClient;
                    toJSON(message: _70.MsgUpdateClient): import("..").JsonSafe<_70.MsgUpdateClient>;
                    fromPartial(object: Partial<_70.MsgUpdateClient>): _70.MsgUpdateClient;
                    fromAmino(object: _70.MsgUpdateClientAmino): _70.MsgUpdateClient;
                    toAmino(message: _70.MsgUpdateClient): _70.MsgUpdateClientAmino;
                    fromAminoMsg(object: _70.MsgUpdateClientAminoMsg): _70.MsgUpdateClient;
                    toAminoMsg(message: _70.MsgUpdateClient): _70.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _70.MsgUpdateClientProtoMsg): _70.MsgUpdateClient;
                    toProto(message: _70.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _70.MsgUpdateClient): _70.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgUpdateClientResponse;
                    isSDK(o: any): o is _70.MsgUpdateClientResponseSDKType;
                    isAmino(o: any): o is _70.MsgUpdateClientResponseAmino;
                    encode(_: _70.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgUpdateClientResponse;
                    fromJSON(_: any): _70.MsgUpdateClientResponse;
                    toJSON(_: _70.MsgUpdateClientResponse): import("..").JsonSafe<_70.MsgUpdateClientResponse>;
                    fromPartial(_: Partial<_70.MsgUpdateClientResponse>): _70.MsgUpdateClientResponse;
                    fromAmino(_: _70.MsgUpdateClientResponseAmino): _70.MsgUpdateClientResponse;
                    toAmino(_: _70.MsgUpdateClientResponse): _70.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _70.MsgUpdateClientResponseAminoMsg): _70.MsgUpdateClientResponse;
                    toAminoMsg(message: _70.MsgUpdateClientResponse): _70.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgUpdateClientResponseProtoMsg): _70.MsgUpdateClientResponse;
                    toProto(message: _70.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgUpdateClientResponse): _70.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgUpgradeClient;
                    isSDK(o: any): o is _70.MsgUpgradeClientSDKType;
                    isAmino(o: any): o is _70.MsgUpgradeClientAmino;
                    encode(message: _70.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgUpgradeClient;
                    fromJSON(object: any): _70.MsgUpgradeClient;
                    toJSON(message: _70.MsgUpgradeClient): import("..").JsonSafe<_70.MsgUpgradeClient>;
                    fromPartial(object: Partial<_70.MsgUpgradeClient>): _70.MsgUpgradeClient;
                    fromAmino(object: _70.MsgUpgradeClientAmino): _70.MsgUpgradeClient;
                    toAmino(message: _70.MsgUpgradeClient): _70.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _70.MsgUpgradeClientAminoMsg): _70.MsgUpgradeClient;
                    toAminoMsg(message: _70.MsgUpgradeClient): _70.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _70.MsgUpgradeClientProtoMsg): _70.MsgUpgradeClient;
                    toProto(message: _70.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _70.MsgUpgradeClient): _70.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgUpgradeClientResponse;
                    isSDK(o: any): o is _70.MsgUpgradeClientResponseSDKType;
                    isAmino(o: any): o is _70.MsgUpgradeClientResponseAmino;
                    encode(_: _70.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgUpgradeClientResponse;
                    fromJSON(_: any): _70.MsgUpgradeClientResponse;
                    toJSON(_: _70.MsgUpgradeClientResponse): import("..").JsonSafe<_70.MsgUpgradeClientResponse>;
                    fromPartial(_: Partial<_70.MsgUpgradeClientResponse>): _70.MsgUpgradeClientResponse;
                    fromAmino(_: _70.MsgUpgradeClientResponseAmino): _70.MsgUpgradeClientResponse;
                    toAmino(_: _70.MsgUpgradeClientResponse): _70.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _70.MsgUpgradeClientResponseAminoMsg): _70.MsgUpgradeClientResponse;
                    toAminoMsg(message: _70.MsgUpgradeClientResponse): _70.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgUpgradeClientResponseProtoMsg): _70.MsgUpgradeClientResponse;
                    toProto(message: _70.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgUpgradeClientResponse): _70.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgSubmitMisbehaviour;
                    isSDK(o: any): o is _70.MsgSubmitMisbehaviourSDKType;
                    isAmino(o: any): o is _70.MsgSubmitMisbehaviourAmino;
                    encode(message: _70.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _70.MsgSubmitMisbehaviour;
                    toJSON(message: _70.MsgSubmitMisbehaviour): import("..").JsonSafe<_70.MsgSubmitMisbehaviour>;
                    fromPartial(object: Partial<_70.MsgSubmitMisbehaviour>): _70.MsgSubmitMisbehaviour;
                    fromAmino(object: _70.MsgSubmitMisbehaviourAmino): _70.MsgSubmitMisbehaviour;
                    toAmino(message: _70.MsgSubmitMisbehaviour): _70.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _70.MsgSubmitMisbehaviourAminoMsg): _70.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _70.MsgSubmitMisbehaviour): _70.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _70.MsgSubmitMisbehaviourProtoMsg): _70.MsgSubmitMisbehaviour;
                    toProto(message: _70.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _70.MsgSubmitMisbehaviour): _70.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgSubmitMisbehaviourResponse;
                    isSDK(o: any): o is _70.MsgSubmitMisbehaviourResponseSDKType;
                    isAmino(o: any): o is _70.MsgSubmitMisbehaviourResponseAmino;
                    encode(_: _70.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _70.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _70.MsgSubmitMisbehaviourResponse): import("..").JsonSafe<_70.MsgSubmitMisbehaviourResponse>;
                    fromPartial(_: Partial<_70.MsgSubmitMisbehaviourResponse>): _70.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _70.MsgSubmitMisbehaviourResponseAmino): _70.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _70.MsgSubmitMisbehaviourResponse): _70.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _70.MsgSubmitMisbehaviourResponseAminoMsg): _70.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _70.MsgSubmitMisbehaviourResponse): _70.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgSubmitMisbehaviourResponseProtoMsg): _70.MsgSubmitMisbehaviourResponse;
                    toProto(message: _70.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgSubmitMisbehaviourResponse): _70.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientStateRequest;
                    isSDK(o: any): o is _69.QueryClientStateRequestSDKType;
                    isAmino(o: any): o is _69.QueryClientStateRequestAmino;
                    encode(message: _69.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientStateRequest;
                    fromJSON(object: any): _69.QueryClientStateRequest;
                    toJSON(message: _69.QueryClientStateRequest): import("..").JsonSafe<_69.QueryClientStateRequest>;
                    fromPartial(object: Partial<_69.QueryClientStateRequest>): _69.QueryClientStateRequest;
                    fromAmino(object: _69.QueryClientStateRequestAmino): _69.QueryClientStateRequest;
                    toAmino(message: _69.QueryClientStateRequest): _69.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _69.QueryClientStateRequestAminoMsg): _69.QueryClientStateRequest;
                    toAminoMsg(message: _69.QueryClientStateRequest): _69.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryClientStateRequestProtoMsg): _69.QueryClientStateRequest;
                    toProto(message: _69.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryClientStateRequest): _69.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientStateResponse;
                    isSDK(o: any): o is _69.QueryClientStateResponseSDKType;
                    isAmino(o: any): o is _69.QueryClientStateResponseAmino;
                    encode(message: _69.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientStateResponse;
                    fromJSON(object: any): _69.QueryClientStateResponse;
                    toJSON(message: _69.QueryClientStateResponse): import("..").JsonSafe<_69.QueryClientStateResponse>;
                    fromPartial(object: Partial<_69.QueryClientStateResponse>): _69.QueryClientStateResponse;
                    fromAmino(object: _69.QueryClientStateResponseAmino): _69.QueryClientStateResponse;
                    toAmino(message: _69.QueryClientStateResponse): _69.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _69.QueryClientStateResponseAminoMsg): _69.QueryClientStateResponse;
                    toAminoMsg(message: _69.QueryClientStateResponse): _69.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryClientStateResponseProtoMsg): _69.QueryClientStateResponse;
                    toProto(message: _69.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryClientStateResponse): _69.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientStatesRequest;
                    isSDK(o: any): o is _69.QueryClientStatesRequestSDKType;
                    isAmino(o: any): o is _69.QueryClientStatesRequestAmino;
                    encode(message: _69.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientStatesRequest;
                    fromJSON(object: any): _69.QueryClientStatesRequest;
                    toJSON(message: _69.QueryClientStatesRequest): import("..").JsonSafe<_69.QueryClientStatesRequest>;
                    fromPartial(object: Partial<_69.QueryClientStatesRequest>): _69.QueryClientStatesRequest;
                    fromAmino(object: _69.QueryClientStatesRequestAmino): _69.QueryClientStatesRequest;
                    toAmino(message: _69.QueryClientStatesRequest): _69.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _69.QueryClientStatesRequestAminoMsg): _69.QueryClientStatesRequest;
                    toAminoMsg(message: _69.QueryClientStatesRequest): _69.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryClientStatesRequestProtoMsg): _69.QueryClientStatesRequest;
                    toProto(message: _69.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryClientStatesRequest): _69.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientStatesResponse;
                    isSDK(o: any): o is _69.QueryClientStatesResponseSDKType;
                    isAmino(o: any): o is _69.QueryClientStatesResponseAmino;
                    encode(message: _69.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientStatesResponse;
                    fromJSON(object: any): _69.QueryClientStatesResponse;
                    toJSON(message: _69.QueryClientStatesResponse): import("..").JsonSafe<_69.QueryClientStatesResponse>;
                    fromPartial(object: Partial<_69.QueryClientStatesResponse>): _69.QueryClientStatesResponse;
                    fromAmino(object: _69.QueryClientStatesResponseAmino): _69.QueryClientStatesResponse;
                    toAmino(message: _69.QueryClientStatesResponse): _69.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _69.QueryClientStatesResponseAminoMsg): _69.QueryClientStatesResponse;
                    toAminoMsg(message: _69.QueryClientStatesResponse): _69.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryClientStatesResponseProtoMsg): _69.QueryClientStatesResponse;
                    toProto(message: _69.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryClientStatesResponse): _69.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryConsensusStateRequest;
                    isSDK(o: any): o is _69.QueryConsensusStateRequestSDKType;
                    isAmino(o: any): o is _69.QueryConsensusStateRequestAmino;
                    encode(message: _69.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryConsensusStateRequest;
                    fromJSON(object: any): _69.QueryConsensusStateRequest;
                    toJSON(message: _69.QueryConsensusStateRequest): import("..").JsonSafe<_69.QueryConsensusStateRequest>;
                    fromPartial(object: Partial<_69.QueryConsensusStateRequest>): _69.QueryConsensusStateRequest;
                    fromAmino(object: _69.QueryConsensusStateRequestAmino): _69.QueryConsensusStateRequest;
                    toAmino(message: _69.QueryConsensusStateRequest): _69.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _69.QueryConsensusStateRequestAminoMsg): _69.QueryConsensusStateRequest;
                    toAminoMsg(message: _69.QueryConsensusStateRequest): _69.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConsensusStateRequestProtoMsg): _69.QueryConsensusStateRequest;
                    toProto(message: _69.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConsensusStateRequest): _69.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryConsensusStateResponse;
                    isSDK(o: any): o is _69.QueryConsensusStateResponseSDKType;
                    isAmino(o: any): o is _69.QueryConsensusStateResponseAmino;
                    encode(message: _69.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryConsensusStateResponse;
                    fromJSON(object: any): _69.QueryConsensusStateResponse;
                    toJSON(message: _69.QueryConsensusStateResponse): import("..").JsonSafe<_69.QueryConsensusStateResponse>;
                    fromPartial(object: Partial<_69.QueryConsensusStateResponse>): _69.QueryConsensusStateResponse;
                    fromAmino(object: _69.QueryConsensusStateResponseAmino): _69.QueryConsensusStateResponse;
                    toAmino(message: _69.QueryConsensusStateResponse): _69.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _69.QueryConsensusStateResponseAminoMsg): _69.QueryConsensusStateResponse;
                    toAminoMsg(message: _69.QueryConsensusStateResponse): _69.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConsensusStateResponseProtoMsg): _69.QueryConsensusStateResponse;
                    toProto(message: _69.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConsensusStateResponse): _69.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryConsensusStatesRequest;
                    isSDK(o: any): o is _69.QueryConsensusStatesRequestSDKType;
                    isAmino(o: any): o is _69.QueryConsensusStatesRequestAmino;
                    encode(message: _69.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryConsensusStatesRequest;
                    fromJSON(object: any): _69.QueryConsensusStatesRequest;
                    toJSON(message: _69.QueryConsensusStatesRequest): import("..").JsonSafe<_69.QueryConsensusStatesRequest>;
                    fromPartial(object: Partial<_69.QueryConsensusStatesRequest>): _69.QueryConsensusStatesRequest;
                    fromAmino(object: _69.QueryConsensusStatesRequestAmino): _69.QueryConsensusStatesRequest;
                    toAmino(message: _69.QueryConsensusStatesRequest): _69.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _69.QueryConsensusStatesRequestAminoMsg): _69.QueryConsensusStatesRequest;
                    toAminoMsg(message: _69.QueryConsensusStatesRequest): _69.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConsensusStatesRequestProtoMsg): _69.QueryConsensusStatesRequest;
                    toProto(message: _69.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConsensusStatesRequest): _69.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryConsensusStatesResponse;
                    isSDK(o: any): o is _69.QueryConsensusStatesResponseSDKType;
                    isAmino(o: any): o is _69.QueryConsensusStatesResponseAmino;
                    encode(message: _69.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryConsensusStatesResponse;
                    fromJSON(object: any): _69.QueryConsensusStatesResponse;
                    toJSON(message: _69.QueryConsensusStatesResponse): import("..").JsonSafe<_69.QueryConsensusStatesResponse>;
                    fromPartial(object: Partial<_69.QueryConsensusStatesResponse>): _69.QueryConsensusStatesResponse;
                    fromAmino(object: _69.QueryConsensusStatesResponseAmino): _69.QueryConsensusStatesResponse;
                    toAmino(message: _69.QueryConsensusStatesResponse): _69.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _69.QueryConsensusStatesResponseAminoMsg): _69.QueryConsensusStatesResponse;
                    toAminoMsg(message: _69.QueryConsensusStatesResponse): _69.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConsensusStatesResponseProtoMsg): _69.QueryConsensusStatesResponse;
                    toProto(message: _69.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConsensusStatesResponse): _69.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientStatusRequest;
                    isSDK(o: any): o is _69.QueryClientStatusRequestSDKType;
                    isAmino(o: any): o is _69.QueryClientStatusRequestAmino;
                    encode(message: _69.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientStatusRequest;
                    fromJSON(object: any): _69.QueryClientStatusRequest;
                    toJSON(message: _69.QueryClientStatusRequest): import("..").JsonSafe<_69.QueryClientStatusRequest>;
                    fromPartial(object: Partial<_69.QueryClientStatusRequest>): _69.QueryClientStatusRequest;
                    fromAmino(object: _69.QueryClientStatusRequestAmino): _69.QueryClientStatusRequest;
                    toAmino(message: _69.QueryClientStatusRequest): _69.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _69.QueryClientStatusRequestAminoMsg): _69.QueryClientStatusRequest;
                    toAminoMsg(message: _69.QueryClientStatusRequest): _69.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryClientStatusRequestProtoMsg): _69.QueryClientStatusRequest;
                    toProto(message: _69.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryClientStatusRequest): _69.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientStatusResponse;
                    isSDK(o: any): o is _69.QueryClientStatusResponseSDKType;
                    isAmino(o: any): o is _69.QueryClientStatusResponseAmino;
                    encode(message: _69.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientStatusResponse;
                    fromJSON(object: any): _69.QueryClientStatusResponse;
                    toJSON(message: _69.QueryClientStatusResponse): import("..").JsonSafe<_69.QueryClientStatusResponse>;
                    fromPartial(object: Partial<_69.QueryClientStatusResponse>): _69.QueryClientStatusResponse;
                    fromAmino(object: _69.QueryClientStatusResponseAmino): _69.QueryClientStatusResponse;
                    toAmino(message: _69.QueryClientStatusResponse): _69.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _69.QueryClientStatusResponseAminoMsg): _69.QueryClientStatusResponse;
                    toAminoMsg(message: _69.QueryClientStatusResponse): _69.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryClientStatusResponseProtoMsg): _69.QueryClientStatusResponse;
                    toProto(message: _69.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryClientStatusResponse): _69.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientParamsRequest;
                    isSDK(o: any): o is _69.QueryClientParamsRequestSDKType;
                    isAmino(o: any): o is _69.QueryClientParamsRequestAmino;
                    encode(_: _69.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientParamsRequest;
                    fromJSON(_: any): _69.QueryClientParamsRequest;
                    toJSON(_: _69.QueryClientParamsRequest): import("..").JsonSafe<_69.QueryClientParamsRequest>;
                    fromPartial(_: Partial<_69.QueryClientParamsRequest>): _69.QueryClientParamsRequest;
                    fromAmino(_: _69.QueryClientParamsRequestAmino): _69.QueryClientParamsRequest;
                    toAmino(_: _69.QueryClientParamsRequest): _69.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _69.QueryClientParamsRequestAminoMsg): _69.QueryClientParamsRequest;
                    toAminoMsg(message: _69.QueryClientParamsRequest): _69.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryClientParamsRequestProtoMsg): _69.QueryClientParamsRequest;
                    toProto(message: _69.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryClientParamsRequest): _69.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryClientParamsResponse;
                    isSDK(o: any): o is _69.QueryClientParamsResponseSDKType;
                    isAmino(o: any): o is _69.QueryClientParamsResponseAmino;
                    encode(message: _69.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryClientParamsResponse;
                    fromJSON(object: any): _69.QueryClientParamsResponse;
                    toJSON(message: _69.QueryClientParamsResponse): import("..").JsonSafe<_69.QueryClientParamsResponse>;
                    fromPartial(object: Partial<_69.QueryClientParamsResponse>): _69.QueryClientParamsResponse;
                    fromAmino(object: _69.QueryClientParamsResponseAmino): _69.QueryClientParamsResponse;
                    toAmino(message: _69.QueryClientParamsResponse): _69.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _69.QueryClientParamsResponseAminoMsg): _69.QueryClientParamsResponse;
                    toAminoMsg(message: _69.QueryClientParamsResponse): _69.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryClientParamsResponseProtoMsg): _69.QueryClientParamsResponse;
                    toProto(message: _69.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryClientParamsResponse): _69.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUpgradedClientStateRequest;
                    isSDK(o: any): o is _69.QueryUpgradedClientStateRequestSDKType;
                    isAmino(o: any): o is _69.QueryUpgradedClientStateRequestAmino;
                    encode(_: _69.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _69.QueryUpgradedClientStateRequest;
                    toJSON(_: _69.QueryUpgradedClientStateRequest): import("..").JsonSafe<_69.QueryUpgradedClientStateRequest>;
                    fromPartial(_: Partial<_69.QueryUpgradedClientStateRequest>): _69.QueryUpgradedClientStateRequest;
                    fromAmino(_: _69.QueryUpgradedClientStateRequestAmino): _69.QueryUpgradedClientStateRequest;
                    toAmino(_: _69.QueryUpgradedClientStateRequest): _69.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _69.QueryUpgradedClientStateRequestAminoMsg): _69.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _69.QueryUpgradedClientStateRequest): _69.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryUpgradedClientStateRequestProtoMsg): _69.QueryUpgradedClientStateRequest;
                    toProto(message: _69.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryUpgradedClientStateRequest): _69.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUpgradedClientStateResponse;
                    isSDK(o: any): o is _69.QueryUpgradedClientStateResponseSDKType;
                    isAmino(o: any): o is _69.QueryUpgradedClientStateResponseAmino;
                    encode(message: _69.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _69.QueryUpgradedClientStateResponse;
                    toJSON(message: _69.QueryUpgradedClientStateResponse): import("..").JsonSafe<_69.QueryUpgradedClientStateResponse>;
                    fromPartial(object: Partial<_69.QueryUpgradedClientStateResponse>): _69.QueryUpgradedClientStateResponse;
                    fromAmino(object: _69.QueryUpgradedClientStateResponseAmino): _69.QueryUpgradedClientStateResponse;
                    toAmino(message: _69.QueryUpgradedClientStateResponse): _69.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _69.QueryUpgradedClientStateResponseAminoMsg): _69.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _69.QueryUpgradedClientStateResponse): _69.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryUpgradedClientStateResponseProtoMsg): _69.QueryUpgradedClientStateResponse;
                    toProto(message: _69.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryUpgradedClientStateResponse): _69.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUpgradedConsensusStateRequest;
                    isSDK(o: any): o is _69.QueryUpgradedConsensusStateRequestSDKType;
                    isAmino(o: any): o is _69.QueryUpgradedConsensusStateRequestAmino;
                    encode(_: _69.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _69.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _69.QueryUpgradedConsensusStateRequest): import("..").JsonSafe<_69.QueryUpgradedConsensusStateRequest>;
                    fromPartial(_: Partial<_69.QueryUpgradedConsensusStateRequest>): _69.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _69.QueryUpgradedConsensusStateRequestAmino): _69.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _69.QueryUpgradedConsensusStateRequest): _69.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _69.QueryUpgradedConsensusStateRequestAminoMsg): _69.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _69.QueryUpgradedConsensusStateRequest): _69.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryUpgradedConsensusStateRequestProtoMsg): _69.QueryUpgradedConsensusStateRequest;
                    toProto(message: _69.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryUpgradedConsensusStateRequest): _69.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUpgradedConsensusStateResponse;
                    isSDK(o: any): o is _69.QueryUpgradedConsensusStateResponseSDKType;
                    isAmino(o: any): o is _69.QueryUpgradedConsensusStateResponseAmino;
                    encode(message: _69.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _69.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _69.QueryUpgradedConsensusStateResponse): import("..").JsonSafe<_69.QueryUpgradedConsensusStateResponse>;
                    fromPartial(object: Partial<_69.QueryUpgradedConsensusStateResponse>): _69.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _69.QueryUpgradedConsensusStateResponseAmino): _69.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _69.QueryUpgradedConsensusStateResponse): _69.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _69.QueryUpgradedConsensusStateResponseAminoMsg): _69.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _69.QueryUpgradedConsensusStateResponse): _69.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryUpgradedConsensusStateResponseProtoMsg): _69.QueryUpgradedConsensusStateResponse;
                    toProto(message: _69.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryUpgradedConsensusStateResponse): _69.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.GenesisState;
                    isSDK(o: any): o is _68.GenesisStateSDKType;
                    isAmino(o: any): o is _68.GenesisStateAmino;
                    encode(message: _68.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.GenesisState;
                    fromJSON(object: any): _68.GenesisState;
                    toJSON(message: _68.GenesisState): import("..").JsonSafe<_68.GenesisState>;
                    fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                    fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                    toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                    fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                    toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                    fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                    toProto(message: _68.GenesisState): Uint8Array;
                    toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.GenesisMetadata;
                    isSDK(o: any): o is _68.GenesisMetadataSDKType;
                    isAmino(o: any): o is _68.GenesisMetadataAmino;
                    encode(message: _68.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.GenesisMetadata;
                    fromJSON(object: any): _68.GenesisMetadata;
                    toJSON(message: _68.GenesisMetadata): import("..").JsonSafe<_68.GenesisMetadata>;
                    fromPartial(object: Partial<_68.GenesisMetadata>): _68.GenesisMetadata;
                    fromAmino(object: _68.GenesisMetadataAmino): _68.GenesisMetadata;
                    toAmino(message: _68.GenesisMetadata): _68.GenesisMetadataAmino;
                    fromAminoMsg(object: _68.GenesisMetadataAminoMsg): _68.GenesisMetadata;
                    toAminoMsg(message: _68.GenesisMetadata): _68.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _68.GenesisMetadataProtoMsg): _68.GenesisMetadata;
                    toProto(message: _68.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _68.GenesisMetadata): _68.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.IdentifiedGenesisMetadata;
                    isSDK(o: any): o is _68.IdentifiedGenesisMetadataSDKType;
                    isAmino(o: any): o is _68.IdentifiedGenesisMetadataAmino;
                    encode(message: _68.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _68.IdentifiedGenesisMetadata;
                    toJSON(message: _68.IdentifiedGenesisMetadata): import("..").JsonSafe<_68.IdentifiedGenesisMetadata>;
                    fromPartial(object: Partial<_68.IdentifiedGenesisMetadata>): _68.IdentifiedGenesisMetadata;
                    fromAmino(object: _68.IdentifiedGenesisMetadataAmino): _68.IdentifiedGenesisMetadata;
                    toAmino(message: _68.IdentifiedGenesisMetadata): _68.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _68.IdentifiedGenesisMetadataAminoMsg): _68.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _68.IdentifiedGenesisMetadata): _68.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _68.IdentifiedGenesisMetadataProtoMsg): _68.IdentifiedGenesisMetadata;
                    toProto(message: _68.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _68.IdentifiedGenesisMetadata): _68.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.IdentifiedClientState;
                    isSDK(o: any): o is _67.IdentifiedClientStateSDKType;
                    isAmino(o: any): o is _67.IdentifiedClientStateAmino;
                    encode(message: _67.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.IdentifiedClientState;
                    fromJSON(object: any): _67.IdentifiedClientState;
                    toJSON(message: _67.IdentifiedClientState): import("..").JsonSafe<_67.IdentifiedClientState>;
                    fromPartial(object: Partial<_67.IdentifiedClientState>): _67.IdentifiedClientState;
                    fromAmino(object: _67.IdentifiedClientStateAmino): _67.IdentifiedClientState;
                    toAmino(message: _67.IdentifiedClientState): _67.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _67.IdentifiedClientStateAminoMsg): _67.IdentifiedClientState;
                    toAminoMsg(message: _67.IdentifiedClientState): _67.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _67.IdentifiedClientStateProtoMsg): _67.IdentifiedClientState;
                    toProto(message: _67.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _67.IdentifiedClientState): _67.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.ConsensusStateWithHeight;
                    isSDK(o: any): o is _67.ConsensusStateWithHeightSDKType;
                    isAmino(o: any): o is _67.ConsensusStateWithHeightAmino;
                    encode(message: _67.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.ConsensusStateWithHeight;
                    fromJSON(object: any): _67.ConsensusStateWithHeight;
                    toJSON(message: _67.ConsensusStateWithHeight): import("..").JsonSafe<_67.ConsensusStateWithHeight>;
                    fromPartial(object: Partial<_67.ConsensusStateWithHeight>): _67.ConsensusStateWithHeight;
                    fromAmino(object: _67.ConsensusStateWithHeightAmino): _67.ConsensusStateWithHeight;
                    toAmino(message: _67.ConsensusStateWithHeight): _67.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _67.ConsensusStateWithHeightAminoMsg): _67.ConsensusStateWithHeight;
                    toAminoMsg(message: _67.ConsensusStateWithHeight): _67.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _67.ConsensusStateWithHeightProtoMsg): _67.ConsensusStateWithHeight;
                    toProto(message: _67.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _67.ConsensusStateWithHeight): _67.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.ClientConsensusStates;
                    isSDK(o: any): o is _67.ClientConsensusStatesSDKType;
                    isAmino(o: any): o is _67.ClientConsensusStatesAmino;
                    encode(message: _67.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.ClientConsensusStates;
                    fromJSON(object: any): _67.ClientConsensusStates;
                    toJSON(message: _67.ClientConsensusStates): import("..").JsonSafe<_67.ClientConsensusStates>;
                    fromPartial(object: Partial<_67.ClientConsensusStates>): _67.ClientConsensusStates;
                    fromAmino(object: _67.ClientConsensusStatesAmino): _67.ClientConsensusStates;
                    toAmino(message: _67.ClientConsensusStates): _67.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _67.ClientConsensusStatesAminoMsg): _67.ClientConsensusStates;
                    toAminoMsg(message: _67.ClientConsensusStates): _67.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _67.ClientConsensusStatesProtoMsg): _67.ClientConsensusStates;
                    toProto(message: _67.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _67.ClientConsensusStates): _67.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.ClientUpdateProposal;
                    isSDK(o: any): o is _67.ClientUpdateProposalSDKType;
                    isAmino(o: any): o is _67.ClientUpdateProposalAmino;
                    encode(message: _67.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.ClientUpdateProposal;
                    fromJSON(object: any): _67.ClientUpdateProposal;
                    toJSON(message: _67.ClientUpdateProposal): import("..").JsonSafe<_67.ClientUpdateProposal>;
                    fromPartial(object: Partial<_67.ClientUpdateProposal>): _67.ClientUpdateProposal;
                    fromAmino(object: _67.ClientUpdateProposalAmino): _67.ClientUpdateProposal;
                    toAmino(message: _67.ClientUpdateProposal): _67.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _67.ClientUpdateProposalAminoMsg): _67.ClientUpdateProposal;
                    toAminoMsg(message: _67.ClientUpdateProposal): _67.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _67.ClientUpdateProposalProtoMsg): _67.ClientUpdateProposal;
                    toProto(message: _67.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _67.ClientUpdateProposal): _67.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.UpgradeProposal;
                    isSDK(o: any): o is _67.UpgradeProposalSDKType;
                    isAmino(o: any): o is _67.UpgradeProposalAmino;
                    encode(message: _67.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.UpgradeProposal;
                    fromJSON(object: any): _67.UpgradeProposal;
                    toJSON(message: _67.UpgradeProposal): import("..").JsonSafe<_67.UpgradeProposal>;
                    fromPartial(object: Partial<_67.UpgradeProposal>): _67.UpgradeProposal;
                    fromAmino(object: _67.UpgradeProposalAmino): _67.UpgradeProposal;
                    toAmino(message: _67.UpgradeProposal): _67.UpgradeProposalAmino;
                    fromAminoMsg(object: _67.UpgradeProposalAminoMsg): _67.UpgradeProposal;
                    toAminoMsg(message: _67.UpgradeProposal): _67.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _67.UpgradeProposalProtoMsg): _67.UpgradeProposal;
                    toProto(message: _67.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _67.UpgradeProposal): _67.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.Height;
                    isSDK(o: any): o is _67.HeightSDKType;
                    isAmino(o: any): o is _67.HeightAmino;
                    encode(message: _67.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Height;
                    fromJSON(object: any): _67.Height;
                    toJSON(message: _67.Height): import("..").JsonSafe<_67.Height>;
                    fromPartial(object: Partial<_67.Height>): _67.Height;
                    fromAmino(object: _67.HeightAmino): _67.Height;
                    toAmino(message: _67.Height): _67.HeightAmino;
                    fromAminoMsg(object: _67.HeightAminoMsg): _67.Height;
                    toAminoMsg(message: _67.Height): _67.HeightAminoMsg;
                    fromProtoMsg(message: _67.HeightProtoMsg): _67.Height;
                    toProto(message: _67.Height): Uint8Array;
                    toProtoMsg(message: _67.Height): _67.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.Params;
                    isSDK(o: any): o is _67.ParamsSDKType;
                    isAmino(o: any): o is _67.ParamsAmino;
                    encode(message: _67.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Params;
                    fromJSON(object: any): _67.Params;
                    toJSON(message: _67.Params): import("..").JsonSafe<_67.Params>;
                    fromPartial(object: Partial<_67.Params>): _67.Params;
                    fromAmino(object: _67.ParamsAmino): _67.Params;
                    toAmino(message: _67.Params): _67.ParamsAmino;
                    fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                    toAminoMsg(message: _67.Params): _67.ParamsAminoMsg;
                    fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                    toProto(message: _67.Params): Uint8Array;
                    toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MerkleRoot;
                    isSDK(o: any): o is _71.MerkleRootSDKType;
                    isAmino(o: any): o is _71.MerkleRootAmino;
                    encode(message: _71.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MerkleRoot;
                    fromJSON(object: any): _71.MerkleRoot;
                    toJSON(message: _71.MerkleRoot): import("..").JsonSafe<_71.MerkleRoot>;
                    fromPartial(object: Partial<_71.MerkleRoot>): _71.MerkleRoot;
                    fromAmino(object: _71.MerkleRootAmino): _71.MerkleRoot;
                    toAmino(message: _71.MerkleRoot): _71.MerkleRootAmino;
                    fromAminoMsg(object: _71.MerkleRootAminoMsg): _71.MerkleRoot;
                    toAminoMsg(message: _71.MerkleRoot): _71.MerkleRootAminoMsg;
                    fromProtoMsg(message: _71.MerkleRootProtoMsg): _71.MerkleRoot;
                    toProto(message: _71.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _71.MerkleRoot): _71.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MerklePrefix;
                    isSDK(o: any): o is _71.MerklePrefixSDKType;
                    isAmino(o: any): o is _71.MerklePrefixAmino;
                    encode(message: _71.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MerklePrefix;
                    fromJSON(object: any): _71.MerklePrefix;
                    toJSON(message: _71.MerklePrefix): import("..").JsonSafe<_71.MerklePrefix>;
                    fromPartial(object: Partial<_71.MerklePrefix>): _71.MerklePrefix;
                    fromAmino(object: _71.MerklePrefixAmino): _71.MerklePrefix;
                    toAmino(message: _71.MerklePrefix): _71.MerklePrefixAmino;
                    fromAminoMsg(object: _71.MerklePrefixAminoMsg): _71.MerklePrefix;
                    toAminoMsg(message: _71.MerklePrefix): _71.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _71.MerklePrefixProtoMsg): _71.MerklePrefix;
                    toProto(message: _71.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _71.MerklePrefix): _71.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MerklePath;
                    isSDK(o: any): o is _71.MerklePathSDKType;
                    isAmino(o: any): o is _71.MerklePathAmino;
                    encode(message: _71.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MerklePath;
                    fromJSON(object: any): _71.MerklePath;
                    toJSON(message: _71.MerklePath): import("..").JsonSafe<_71.MerklePath>;
                    fromPartial(object: Partial<_71.MerklePath>): _71.MerklePath;
                    fromAmino(object: _71.MerklePathAmino): _71.MerklePath;
                    toAmino(message: _71.MerklePath): _71.MerklePathAmino;
                    fromAminoMsg(object: _71.MerklePathAminoMsg): _71.MerklePath;
                    toAminoMsg(message: _71.MerklePath): _71.MerklePathAminoMsg;
                    fromProtoMsg(message: _71.MerklePathProtoMsg): _71.MerklePath;
                    toProto(message: _71.MerklePath): Uint8Array;
                    toProtoMsg(message: _71.MerklePath): _71.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.MerkleProof;
                    isSDK(o: any): o is _71.MerkleProofSDKType;
                    isAmino(o: any): o is _71.MerkleProofAmino;
                    encode(message: _71.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MerkleProof;
                    fromJSON(object: any): _71.MerkleProof;
                    toJSON(message: _71.MerkleProof): import("..").JsonSafe<_71.MerkleProof>;
                    fromPartial(object: Partial<_71.MerkleProof>): _71.MerkleProof;
                    fromAmino(object: _71.MerkleProofAmino): _71.MerkleProof;
                    toAmino(message: _71.MerkleProof): _71.MerkleProofAmino;
                    fromAminoMsg(object: _71.MerkleProofAminoMsg): _71.MerkleProof;
                    toAminoMsg(message: _71.MerkleProof): _71.MerkleProofAminoMsg;
                    fromProtoMsg(message: _71.MerkleProofProtoMsg): _71.MerkleProof;
                    toProto(message: _71.MerkleProof): Uint8Array;
                    toProtoMsg(message: _71.MerkleProof): _71.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _203.MsgClientImpl;
                QueryClientImpl: typeof _199.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _74.QueryConnectionRequest): Promise<_74.QueryConnectionResponse>;
                    connections(request?: _74.QueryConnectionsRequest): Promise<_74.QueryConnectionsResponse>;
                    clientConnections(request: _74.QueryClientConnectionsRequest): Promise<_74.QueryClientConnectionsResponse>;
                    connectionClientState(request: _74.QueryConnectionClientStateRequest): Promise<_74.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _74.QueryConnectionConsensusStateRequest): Promise<_74.QueryConnectionConsensusStateResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                counterparty: {
                                    clientId: string;
                                    connectionId: string;
                                    prefix: {
                                        keyPrefix: string;
                                    };
                                };
                                version?: {
                                    identifier: string;
                                    features: string[];
                                };
                                delayPeriod: string;
                                signer: string;
                            };
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                previousConnectionId: string;
                                clientState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                counterparty: {
                                    clientId: string;
                                    connectionId: string;
                                    prefix: {
                                        keyPrefix: string;
                                    };
                                };
                                delayPeriod: string;
                                counterpartyVersions: {
                                    identifier: string;
                                    features: string[];
                                }[];
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                proofInit: string;
                                proofClient: string;
                                proofConsensus: string;
                                consensusHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: {
                                connectionId: string;
                                counterpartyConnectionId: string;
                                version?: {
                                    identifier: string;
                                    features: string[];
                                };
                                clientState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                proofTry: string;
                                proofClient: string;
                                proofConsensus: string;
                                consensusHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: {
                                connectionId: string;
                                proofAck: string;
                                proofHeight: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                signer: string;
                            };
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _75.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _75.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _75.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _75.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _75.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _75.MsgConnectionOpenInit) => _75.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _75.MsgConnectionOpenInitAmino) => _75.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _75.MsgConnectionOpenTry) => _75.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _75.MsgConnectionOpenTryAmino) => _75.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _75.MsgConnectionOpenAck) => _75.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _75.MsgConnectionOpenAckAmino) => _75.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _75.MsgConnectionOpenConfirm) => _75.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _75.MsgConnectionOpenConfirmAmino) => _75.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenInit;
                    isSDK(o: any): o is _75.MsgConnectionOpenInitSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenInitAmino;
                    encode(message: _75.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenInit;
                    fromJSON(object: any): _75.MsgConnectionOpenInit;
                    toJSON(message: _75.MsgConnectionOpenInit): import("..").JsonSafe<_75.MsgConnectionOpenInit>;
                    fromPartial(object: Partial<_75.MsgConnectionOpenInit>): _75.MsgConnectionOpenInit;
                    fromAmino(object: _75.MsgConnectionOpenInitAmino): _75.MsgConnectionOpenInit;
                    toAmino(message: _75.MsgConnectionOpenInit): _75.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenInitAminoMsg): _75.MsgConnectionOpenInit;
                    toAminoMsg(message: _75.MsgConnectionOpenInit): _75.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenInitProtoMsg): _75.MsgConnectionOpenInit;
                    toProto(message: _75.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenInit): _75.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenInitResponse;
                    isSDK(o: any): o is _75.MsgConnectionOpenInitResponseSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenInitResponseAmino;
                    encode(_: _75.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _75.MsgConnectionOpenInitResponse;
                    toJSON(_: _75.MsgConnectionOpenInitResponse): import("..").JsonSafe<_75.MsgConnectionOpenInitResponse>;
                    fromPartial(_: Partial<_75.MsgConnectionOpenInitResponse>): _75.MsgConnectionOpenInitResponse;
                    fromAmino(_: _75.MsgConnectionOpenInitResponseAmino): _75.MsgConnectionOpenInitResponse;
                    toAmino(_: _75.MsgConnectionOpenInitResponse): _75.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenInitResponseAminoMsg): _75.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _75.MsgConnectionOpenInitResponse): _75.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenInitResponseProtoMsg): _75.MsgConnectionOpenInitResponse;
                    toProto(message: _75.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenInitResponse): _75.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenTry;
                    isSDK(o: any): o is _75.MsgConnectionOpenTrySDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenTryAmino;
                    encode(message: _75.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenTry;
                    fromJSON(object: any): _75.MsgConnectionOpenTry;
                    toJSON(message: _75.MsgConnectionOpenTry): import("..").JsonSafe<_75.MsgConnectionOpenTry>;
                    fromPartial(object: Partial<_75.MsgConnectionOpenTry>): _75.MsgConnectionOpenTry;
                    fromAmino(object: _75.MsgConnectionOpenTryAmino): _75.MsgConnectionOpenTry;
                    toAmino(message: _75.MsgConnectionOpenTry): _75.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenTryAminoMsg): _75.MsgConnectionOpenTry;
                    toAminoMsg(message: _75.MsgConnectionOpenTry): _75.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenTryProtoMsg): _75.MsgConnectionOpenTry;
                    toProto(message: _75.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenTry): _75.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenTryResponse;
                    isSDK(o: any): o is _75.MsgConnectionOpenTryResponseSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenTryResponseAmino;
                    encode(_: _75.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _75.MsgConnectionOpenTryResponse;
                    toJSON(_: _75.MsgConnectionOpenTryResponse): import("..").JsonSafe<_75.MsgConnectionOpenTryResponse>;
                    fromPartial(_: Partial<_75.MsgConnectionOpenTryResponse>): _75.MsgConnectionOpenTryResponse;
                    fromAmino(_: _75.MsgConnectionOpenTryResponseAmino): _75.MsgConnectionOpenTryResponse;
                    toAmino(_: _75.MsgConnectionOpenTryResponse): _75.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenTryResponseAminoMsg): _75.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _75.MsgConnectionOpenTryResponse): _75.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenTryResponseProtoMsg): _75.MsgConnectionOpenTryResponse;
                    toProto(message: _75.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenTryResponse): _75.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenAck;
                    isSDK(o: any): o is _75.MsgConnectionOpenAckSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenAckAmino;
                    encode(message: _75.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenAck;
                    fromJSON(object: any): _75.MsgConnectionOpenAck;
                    toJSON(message: _75.MsgConnectionOpenAck): import("..").JsonSafe<_75.MsgConnectionOpenAck>;
                    fromPartial(object: Partial<_75.MsgConnectionOpenAck>): _75.MsgConnectionOpenAck;
                    fromAmino(object: _75.MsgConnectionOpenAckAmino): _75.MsgConnectionOpenAck;
                    toAmino(message: _75.MsgConnectionOpenAck): _75.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenAckAminoMsg): _75.MsgConnectionOpenAck;
                    toAminoMsg(message: _75.MsgConnectionOpenAck): _75.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenAckProtoMsg): _75.MsgConnectionOpenAck;
                    toProto(message: _75.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenAck): _75.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenAckResponse;
                    isSDK(o: any): o is _75.MsgConnectionOpenAckResponseSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenAckResponseAmino;
                    encode(_: _75.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _75.MsgConnectionOpenAckResponse;
                    toJSON(_: _75.MsgConnectionOpenAckResponse): import("..").JsonSafe<_75.MsgConnectionOpenAckResponse>;
                    fromPartial(_: Partial<_75.MsgConnectionOpenAckResponse>): _75.MsgConnectionOpenAckResponse;
                    fromAmino(_: _75.MsgConnectionOpenAckResponseAmino): _75.MsgConnectionOpenAckResponse;
                    toAmino(_: _75.MsgConnectionOpenAckResponse): _75.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenAckResponseAminoMsg): _75.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _75.MsgConnectionOpenAckResponse): _75.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenAckResponseProtoMsg): _75.MsgConnectionOpenAckResponse;
                    toProto(message: _75.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenAckResponse): _75.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenConfirm;
                    isSDK(o: any): o is _75.MsgConnectionOpenConfirmSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenConfirmAmino;
                    encode(message: _75.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _75.MsgConnectionOpenConfirm;
                    toJSON(message: _75.MsgConnectionOpenConfirm): import("..").JsonSafe<_75.MsgConnectionOpenConfirm>;
                    fromPartial(object: Partial<_75.MsgConnectionOpenConfirm>): _75.MsgConnectionOpenConfirm;
                    fromAmino(object: _75.MsgConnectionOpenConfirmAmino): _75.MsgConnectionOpenConfirm;
                    toAmino(message: _75.MsgConnectionOpenConfirm): _75.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenConfirmAminoMsg): _75.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _75.MsgConnectionOpenConfirm): _75.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenConfirmProtoMsg): _75.MsgConnectionOpenConfirm;
                    toProto(message: _75.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenConfirm): _75.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MsgConnectionOpenConfirmResponse;
                    isSDK(o: any): o is _75.MsgConnectionOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _75.MsgConnectionOpenConfirmResponseAmino;
                    encode(_: _75.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _75.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _75.MsgConnectionOpenConfirmResponse): import("..").JsonSafe<_75.MsgConnectionOpenConfirmResponse>;
                    fromPartial(_: Partial<_75.MsgConnectionOpenConfirmResponse>): _75.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _75.MsgConnectionOpenConfirmResponseAmino): _75.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _75.MsgConnectionOpenConfirmResponse): _75.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _75.MsgConnectionOpenConfirmResponseAminoMsg): _75.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _75.MsgConnectionOpenConfirmResponse): _75.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _75.MsgConnectionOpenConfirmResponseProtoMsg): _75.MsgConnectionOpenConfirmResponse;
                    toProto(message: _75.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _75.MsgConnectionOpenConfirmResponse): _75.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionRequest;
                    isSDK(o: any): o is _74.QueryConnectionRequestSDKType;
                    isAmino(o: any): o is _74.QueryConnectionRequestAmino;
                    encode(message: _74.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionRequest;
                    fromJSON(object: any): _74.QueryConnectionRequest;
                    toJSON(message: _74.QueryConnectionRequest): import("..").JsonSafe<_74.QueryConnectionRequest>;
                    fromPartial(object: Partial<_74.QueryConnectionRequest>): _74.QueryConnectionRequest;
                    fromAmino(object: _74.QueryConnectionRequestAmino): _74.QueryConnectionRequest;
                    toAmino(message: _74.QueryConnectionRequest): _74.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _74.QueryConnectionRequestAminoMsg): _74.QueryConnectionRequest;
                    toAminoMsg(message: _74.QueryConnectionRequest): _74.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionRequestProtoMsg): _74.QueryConnectionRequest;
                    toProto(message: _74.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionRequest): _74.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionResponse;
                    isSDK(o: any): o is _74.QueryConnectionResponseSDKType;
                    isAmino(o: any): o is _74.QueryConnectionResponseAmino;
                    encode(message: _74.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionResponse;
                    fromJSON(object: any): _74.QueryConnectionResponse;
                    toJSON(message: _74.QueryConnectionResponse): import("..").JsonSafe<_74.QueryConnectionResponse>;
                    fromPartial(object: Partial<_74.QueryConnectionResponse>): _74.QueryConnectionResponse;
                    fromAmino(object: _74.QueryConnectionResponseAmino): _74.QueryConnectionResponse;
                    toAmino(message: _74.QueryConnectionResponse): _74.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _74.QueryConnectionResponseAminoMsg): _74.QueryConnectionResponse;
                    toAminoMsg(message: _74.QueryConnectionResponse): _74.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionResponseProtoMsg): _74.QueryConnectionResponse;
                    toProto(message: _74.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionResponse): _74.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionsRequest;
                    isSDK(o: any): o is _74.QueryConnectionsRequestSDKType;
                    isAmino(o: any): o is _74.QueryConnectionsRequestAmino;
                    encode(message: _74.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionsRequest;
                    fromJSON(object: any): _74.QueryConnectionsRequest;
                    toJSON(message: _74.QueryConnectionsRequest): import("..").JsonSafe<_74.QueryConnectionsRequest>;
                    fromPartial(object: Partial<_74.QueryConnectionsRequest>): _74.QueryConnectionsRequest;
                    fromAmino(object: _74.QueryConnectionsRequestAmino): _74.QueryConnectionsRequest;
                    toAmino(message: _74.QueryConnectionsRequest): _74.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _74.QueryConnectionsRequestAminoMsg): _74.QueryConnectionsRequest;
                    toAminoMsg(message: _74.QueryConnectionsRequest): _74.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionsRequestProtoMsg): _74.QueryConnectionsRequest;
                    toProto(message: _74.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionsRequest): _74.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionsResponse;
                    isSDK(o: any): o is _74.QueryConnectionsResponseSDKType;
                    isAmino(o: any): o is _74.QueryConnectionsResponseAmino;
                    encode(message: _74.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionsResponse;
                    fromJSON(object: any): _74.QueryConnectionsResponse;
                    toJSON(message: _74.QueryConnectionsResponse): import("..").JsonSafe<_74.QueryConnectionsResponse>;
                    fromPartial(object: Partial<_74.QueryConnectionsResponse>): _74.QueryConnectionsResponse;
                    fromAmino(object: _74.QueryConnectionsResponseAmino): _74.QueryConnectionsResponse;
                    toAmino(message: _74.QueryConnectionsResponse): _74.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _74.QueryConnectionsResponseAminoMsg): _74.QueryConnectionsResponse;
                    toAminoMsg(message: _74.QueryConnectionsResponse): _74.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionsResponseProtoMsg): _74.QueryConnectionsResponse;
                    toProto(message: _74.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionsResponse): _74.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryClientConnectionsRequest;
                    isSDK(o: any): o is _74.QueryClientConnectionsRequestSDKType;
                    isAmino(o: any): o is _74.QueryClientConnectionsRequestAmino;
                    encode(message: _74.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryClientConnectionsRequest;
                    fromJSON(object: any): _74.QueryClientConnectionsRequest;
                    toJSON(message: _74.QueryClientConnectionsRequest): import("..").JsonSafe<_74.QueryClientConnectionsRequest>;
                    fromPartial(object: Partial<_74.QueryClientConnectionsRequest>): _74.QueryClientConnectionsRequest;
                    fromAmino(object: _74.QueryClientConnectionsRequestAmino): _74.QueryClientConnectionsRequest;
                    toAmino(message: _74.QueryClientConnectionsRequest): _74.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _74.QueryClientConnectionsRequestAminoMsg): _74.QueryClientConnectionsRequest;
                    toAminoMsg(message: _74.QueryClientConnectionsRequest): _74.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryClientConnectionsRequestProtoMsg): _74.QueryClientConnectionsRequest;
                    toProto(message: _74.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryClientConnectionsRequest): _74.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryClientConnectionsResponse;
                    isSDK(o: any): o is _74.QueryClientConnectionsResponseSDKType;
                    isAmino(o: any): o is _74.QueryClientConnectionsResponseAmino;
                    encode(message: _74.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryClientConnectionsResponse;
                    fromJSON(object: any): _74.QueryClientConnectionsResponse;
                    toJSON(message: _74.QueryClientConnectionsResponse): import("..").JsonSafe<_74.QueryClientConnectionsResponse>;
                    fromPartial(object: Partial<_74.QueryClientConnectionsResponse>): _74.QueryClientConnectionsResponse;
                    fromAmino(object: _74.QueryClientConnectionsResponseAmino): _74.QueryClientConnectionsResponse;
                    toAmino(message: _74.QueryClientConnectionsResponse): _74.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _74.QueryClientConnectionsResponseAminoMsg): _74.QueryClientConnectionsResponse;
                    toAminoMsg(message: _74.QueryClientConnectionsResponse): _74.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryClientConnectionsResponseProtoMsg): _74.QueryClientConnectionsResponse;
                    toProto(message: _74.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryClientConnectionsResponse): _74.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionClientStateRequest;
                    isSDK(o: any): o is _74.QueryConnectionClientStateRequestSDKType;
                    isAmino(o: any): o is _74.QueryConnectionClientStateRequestAmino;
                    encode(message: _74.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _74.QueryConnectionClientStateRequest;
                    toJSON(message: _74.QueryConnectionClientStateRequest): import("..").JsonSafe<_74.QueryConnectionClientStateRequest>;
                    fromPartial(object: Partial<_74.QueryConnectionClientStateRequest>): _74.QueryConnectionClientStateRequest;
                    fromAmino(object: _74.QueryConnectionClientStateRequestAmino): _74.QueryConnectionClientStateRequest;
                    toAmino(message: _74.QueryConnectionClientStateRequest): _74.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _74.QueryConnectionClientStateRequestAminoMsg): _74.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _74.QueryConnectionClientStateRequest): _74.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionClientStateRequestProtoMsg): _74.QueryConnectionClientStateRequest;
                    toProto(message: _74.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionClientStateRequest): _74.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionClientStateResponse;
                    isSDK(o: any): o is _74.QueryConnectionClientStateResponseSDKType;
                    isAmino(o: any): o is _74.QueryConnectionClientStateResponseAmino;
                    encode(message: _74.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _74.QueryConnectionClientStateResponse;
                    toJSON(message: _74.QueryConnectionClientStateResponse): import("..").JsonSafe<_74.QueryConnectionClientStateResponse>;
                    fromPartial(object: Partial<_74.QueryConnectionClientStateResponse>): _74.QueryConnectionClientStateResponse;
                    fromAmino(object: _74.QueryConnectionClientStateResponseAmino): _74.QueryConnectionClientStateResponse;
                    toAmino(message: _74.QueryConnectionClientStateResponse): _74.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _74.QueryConnectionClientStateResponseAminoMsg): _74.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _74.QueryConnectionClientStateResponse): _74.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionClientStateResponseProtoMsg): _74.QueryConnectionClientStateResponse;
                    toProto(message: _74.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionClientStateResponse): _74.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionConsensusStateRequest;
                    isSDK(o: any): o is _74.QueryConnectionConsensusStateRequestSDKType;
                    isAmino(o: any): o is _74.QueryConnectionConsensusStateRequestAmino;
                    encode(message: _74.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _74.QueryConnectionConsensusStateRequest;
                    toJSON(message: _74.QueryConnectionConsensusStateRequest): import("..").JsonSafe<_74.QueryConnectionConsensusStateRequest>;
                    fromPartial(object: Partial<_74.QueryConnectionConsensusStateRequest>): _74.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _74.QueryConnectionConsensusStateRequestAmino): _74.QueryConnectionConsensusStateRequest;
                    toAmino(message: _74.QueryConnectionConsensusStateRequest): _74.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _74.QueryConnectionConsensusStateRequestAminoMsg): _74.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _74.QueryConnectionConsensusStateRequest): _74.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionConsensusStateRequestProtoMsg): _74.QueryConnectionConsensusStateRequest;
                    toProto(message: _74.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionConsensusStateRequest): _74.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.QueryConnectionConsensusStateResponse;
                    isSDK(o: any): o is _74.QueryConnectionConsensusStateResponseSDKType;
                    isAmino(o: any): o is _74.QueryConnectionConsensusStateResponseAmino;
                    encode(message: _74.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _74.QueryConnectionConsensusStateResponse;
                    toJSON(message: _74.QueryConnectionConsensusStateResponse): import("..").JsonSafe<_74.QueryConnectionConsensusStateResponse>;
                    fromPartial(object: Partial<_74.QueryConnectionConsensusStateResponse>): _74.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _74.QueryConnectionConsensusStateResponseAmino): _74.QueryConnectionConsensusStateResponse;
                    toAmino(message: _74.QueryConnectionConsensusStateResponse): _74.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _74.QueryConnectionConsensusStateResponseAminoMsg): _74.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _74.QueryConnectionConsensusStateResponse): _74.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _74.QueryConnectionConsensusStateResponseProtoMsg): _74.QueryConnectionConsensusStateResponse;
                    toProto(message: _74.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _74.QueryConnectionConsensusStateResponse): _74.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.GenesisState;
                    isSDK(o: any): o is _73.GenesisStateSDKType;
                    isAmino(o: any): o is _73.GenesisStateAmino;
                    encode(message: _73.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.GenesisState;
                    fromJSON(object: any): _73.GenesisState;
                    toJSON(message: _73.GenesisState): import("..").JsonSafe<_73.GenesisState>;
                    fromPartial(object: Partial<_73.GenesisState>): _73.GenesisState;
                    fromAmino(object: _73.GenesisStateAmino): _73.GenesisState;
                    toAmino(message: _73.GenesisState): _73.GenesisStateAmino;
                    fromAminoMsg(object: _73.GenesisStateAminoMsg): _73.GenesisState;
                    toAminoMsg(message: _73.GenesisState): _73.GenesisStateAminoMsg;
                    fromProtoMsg(message: _73.GenesisStateProtoMsg): _73.GenesisState;
                    toProto(message: _73.GenesisState): Uint8Array;
                    toProtoMsg(message: _73.GenesisState): _73.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _72.State;
                stateToJSON(object: _72.State): string;
                State: typeof _72.State;
                StateSDKType: typeof _72.State;
                StateAmino: typeof _72.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.ConnectionEnd;
                    isSDK(o: any): o is _72.ConnectionEndSDKType;
                    isAmino(o: any): o is _72.ConnectionEndAmino;
                    encode(message: _72.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.ConnectionEnd;
                    fromJSON(object: any): _72.ConnectionEnd;
                    toJSON(message: _72.ConnectionEnd): import("..").JsonSafe<_72.ConnectionEnd>;
                    fromPartial(object: Partial<_72.ConnectionEnd>): _72.ConnectionEnd;
                    fromAmino(object: _72.ConnectionEndAmino): _72.ConnectionEnd;
                    toAmino(message: _72.ConnectionEnd): _72.ConnectionEndAmino;
                    fromAminoMsg(object: _72.ConnectionEndAminoMsg): _72.ConnectionEnd;
                    toAminoMsg(message: _72.ConnectionEnd): _72.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _72.ConnectionEndProtoMsg): _72.ConnectionEnd;
                    toProto(message: _72.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _72.ConnectionEnd): _72.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.IdentifiedConnection;
                    isSDK(o: any): o is _72.IdentifiedConnectionSDKType;
                    isAmino(o: any): o is _72.IdentifiedConnectionAmino;
                    encode(message: _72.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.IdentifiedConnection;
                    fromJSON(object: any): _72.IdentifiedConnection;
                    toJSON(message: _72.IdentifiedConnection): import("..").JsonSafe<_72.IdentifiedConnection>;
                    fromPartial(object: Partial<_72.IdentifiedConnection>): _72.IdentifiedConnection;
                    fromAmino(object: _72.IdentifiedConnectionAmino): _72.IdentifiedConnection;
                    toAmino(message: _72.IdentifiedConnection): _72.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _72.IdentifiedConnectionAminoMsg): _72.IdentifiedConnection;
                    toAminoMsg(message: _72.IdentifiedConnection): _72.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _72.IdentifiedConnectionProtoMsg): _72.IdentifiedConnection;
                    toProto(message: _72.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _72.IdentifiedConnection): _72.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.Counterparty;
                    isSDK(o: any): o is _72.CounterpartySDKType;
                    isAmino(o: any): o is _72.CounterpartyAmino;
                    encode(message: _72.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.Counterparty;
                    fromJSON(object: any): _72.Counterparty;
                    toJSON(message: _72.Counterparty): import("..").JsonSafe<_72.Counterparty>;
                    fromPartial(object: Partial<_72.Counterparty>): _72.Counterparty;
                    fromAmino(object: _72.CounterpartyAmino): _72.Counterparty;
                    toAmino(message: _72.Counterparty): _72.CounterpartyAmino;
                    fromAminoMsg(object: _72.CounterpartyAminoMsg): _72.Counterparty;
                    toAminoMsg(message: _72.Counterparty): _72.CounterpartyAminoMsg;
                    fromProtoMsg(message: _72.CounterpartyProtoMsg): _72.Counterparty;
                    toProto(message: _72.Counterparty): Uint8Array;
                    toProtoMsg(message: _72.Counterparty): _72.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.ClientPaths;
                    isSDK(o: any): o is _72.ClientPathsSDKType;
                    isAmino(o: any): o is _72.ClientPathsAmino;
                    encode(message: _72.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.ClientPaths;
                    fromJSON(object: any): _72.ClientPaths;
                    toJSON(message: _72.ClientPaths): import("..").JsonSafe<_72.ClientPaths>;
                    fromPartial(object: Partial<_72.ClientPaths>): _72.ClientPaths;
                    fromAmino(object: _72.ClientPathsAmino): _72.ClientPaths;
                    toAmino(message: _72.ClientPaths): _72.ClientPathsAmino;
                    fromAminoMsg(object: _72.ClientPathsAminoMsg): _72.ClientPaths;
                    toAminoMsg(message: _72.ClientPaths): _72.ClientPathsAminoMsg;
                    fromProtoMsg(message: _72.ClientPathsProtoMsg): _72.ClientPaths;
                    toProto(message: _72.ClientPaths): Uint8Array;
                    toProtoMsg(message: _72.ClientPaths): _72.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.ConnectionPaths;
                    isSDK(o: any): o is _72.ConnectionPathsSDKType;
                    isAmino(o: any): o is _72.ConnectionPathsAmino;
                    encode(message: _72.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.ConnectionPaths;
                    fromJSON(object: any): _72.ConnectionPaths;
                    toJSON(message: _72.ConnectionPaths): import("..").JsonSafe<_72.ConnectionPaths>;
                    fromPartial(object: Partial<_72.ConnectionPaths>): _72.ConnectionPaths;
                    fromAmino(object: _72.ConnectionPathsAmino): _72.ConnectionPaths;
                    toAmino(message: _72.ConnectionPaths): _72.ConnectionPathsAmino;
                    fromAminoMsg(object: _72.ConnectionPathsAminoMsg): _72.ConnectionPaths;
                    toAminoMsg(message: _72.ConnectionPaths): _72.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _72.ConnectionPathsProtoMsg): _72.ConnectionPaths;
                    toProto(message: _72.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _72.ConnectionPaths): _72.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.Version;
                    isSDK(o: any): o is _72.VersionSDKType;
                    isAmino(o: any): o is _72.VersionAmino;
                    encode(message: _72.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.Version;
                    fromJSON(object: any): _72.Version;
                    toJSON(message: _72.Version): import("..").JsonSafe<_72.Version>;
                    fromPartial(object: Partial<_72.Version>): _72.Version;
                    fromAmino(object: _72.VersionAmino): _72.Version;
                    toAmino(message: _72.Version): _72.VersionAmino;
                    fromAminoMsg(object: _72.VersionAminoMsg): _72.Version;
                    toAminoMsg(message: _72.Version): _72.VersionAminoMsg;
                    fromProtoMsg(message: _72.VersionProtoMsg): _72.Version;
                    toProto(message: _72.Version): Uint8Array;
                    toProtoMsg(message: _72.Version): _72.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.Params;
                    isSDK(o: any): o is _72.ParamsSDKType;
                    isAmino(o: any): o is _72.ParamsAmino;
                    encode(message: _72.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.Params;
                    fromJSON(object: any): _72.Params;
                    toJSON(message: _72.Params): import("..").JsonSafe<_72.Params>;
                    fromPartial(object: Partial<_72.Params>): _72.Params;
                    fromAmino(object: _72.ParamsAmino): _72.Params;
                    toAmino(message: _72.Params): _72.ParamsAmino;
                    fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                    toAminoMsg(message: _72.Params): _72.ParamsAminoMsg;
                    fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                    toProto(message: _72.Params): Uint8Array;
                    toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.ClientState;
                    isSDK(o: any): o is _76.ClientStateSDKType;
                    isAmino(o: any): o is _76.ClientStateAmino;
                    encode(message: _76.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ClientState;
                    fromJSON(object: any): _76.ClientState;
                    toJSON(message: _76.ClientState): import("..").JsonSafe<_76.ClientState>;
                    fromPartial(object: Partial<_76.ClientState>): _76.ClientState;
                    fromAmino(object: _76.ClientStateAmino): _76.ClientState;
                    toAmino(message: _76.ClientState): _76.ClientStateAmino;
                    fromAminoMsg(object: _76.ClientStateAminoMsg): _76.ClientState;
                    toAminoMsg(message: _76.ClientState): _76.ClientStateAminoMsg;
                    fromProtoMsg(message: _76.ClientStateProtoMsg): _76.ClientState;
                    toProto(message: _76.ClientState): Uint8Array;
                    toProtoMsg(message: _76.ClientState): _76.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _77.DataType;
                dataTypeToJSON(object: _77.DataType): string;
                DataType: typeof _77.DataType;
                DataTypeSDKType: typeof _77.DataType;
                DataTypeAmino: typeof _77.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.ClientState;
                    isSDK(o: any): o is _77.ClientStateSDKType;
                    isAmino(o: any): o is _77.ClientStateAmino;
                    encode(message: _77.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ClientState;
                    fromJSON(object: any): _77.ClientState;
                    toJSON(message: _77.ClientState): import("..").JsonSafe<_77.ClientState>;
                    fromPartial(object: Partial<_77.ClientState>): _77.ClientState;
                    fromAmino(object: _77.ClientStateAmino): _77.ClientState;
                    toAmino(message: _77.ClientState): _77.ClientStateAmino;
                    fromAminoMsg(object: _77.ClientStateAminoMsg): _77.ClientState;
                    toAminoMsg(message: _77.ClientState): _77.ClientStateAminoMsg;
                    fromProtoMsg(message: _77.ClientStateProtoMsg): _77.ClientState;
                    toProto(message: _77.ClientState): Uint8Array;
                    toProtoMsg(message: _77.ClientState): _77.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.ConsensusState;
                    isSDK(o: any): o is _77.ConsensusStateSDKType;
                    isAmino(o: any): o is _77.ConsensusStateAmino;
                    encode(message: _77.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ConsensusState;
                    fromJSON(object: any): _77.ConsensusState;
                    toJSON(message: _77.ConsensusState): import("..").JsonSafe<_77.ConsensusState>;
                    fromPartial(object: Partial<_77.ConsensusState>): _77.ConsensusState;
                    fromAmino(object: _77.ConsensusStateAmino): _77.ConsensusState;
                    toAmino(message: _77.ConsensusState): _77.ConsensusStateAmino;
                    fromAminoMsg(object: _77.ConsensusStateAminoMsg): _77.ConsensusState;
                    toAminoMsg(message: _77.ConsensusState): _77.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _77.ConsensusStateProtoMsg): _77.ConsensusState;
                    toProto(message: _77.ConsensusState): Uint8Array;
                    toProtoMsg(message: _77.ConsensusState): _77.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.Header;
                    isSDK(o: any): o is _77.HeaderSDKType;
                    isAmino(o: any): o is _77.HeaderAmino;
                    encode(message: _77.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Header;
                    fromJSON(object: any): _77.Header;
                    toJSON(message: _77.Header): import("..").JsonSafe<_77.Header>;
                    fromPartial(object: Partial<_77.Header>): _77.Header;
                    fromAmino(object: _77.HeaderAmino): _77.Header;
                    toAmino(message: _77.Header): _77.HeaderAmino;
                    fromAminoMsg(object: _77.HeaderAminoMsg): _77.Header;
                    toAminoMsg(message: _77.Header): _77.HeaderAminoMsg;
                    fromProtoMsg(message: _77.HeaderProtoMsg): _77.Header;
                    toProto(message: _77.Header): Uint8Array;
                    toProtoMsg(message: _77.Header): _77.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.Misbehaviour;
                    isSDK(o: any): o is _77.MisbehaviourSDKType;
                    isAmino(o: any): o is _77.MisbehaviourAmino;
                    encode(message: _77.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Misbehaviour;
                    fromJSON(object: any): _77.Misbehaviour;
                    toJSON(message: _77.Misbehaviour): import("..").JsonSafe<_77.Misbehaviour>;
                    fromPartial(object: Partial<_77.Misbehaviour>): _77.Misbehaviour;
                    fromAmino(object: _77.MisbehaviourAmino): _77.Misbehaviour;
                    toAmino(message: _77.Misbehaviour): _77.MisbehaviourAmino;
                    fromAminoMsg(object: _77.MisbehaviourAminoMsg): _77.Misbehaviour;
                    toAminoMsg(message: _77.Misbehaviour): _77.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _77.MisbehaviourProtoMsg): _77.Misbehaviour;
                    toProto(message: _77.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _77.Misbehaviour): _77.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.SignatureAndData;
                    isSDK(o: any): o is _77.SignatureAndDataSDKType;
                    isAmino(o: any): o is _77.SignatureAndDataAmino;
                    encode(message: _77.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.SignatureAndData;
                    fromJSON(object: any): _77.SignatureAndData;
                    toJSON(message: _77.SignatureAndData): import("..").JsonSafe<_77.SignatureAndData>;
                    fromPartial(object: Partial<_77.SignatureAndData>): _77.SignatureAndData;
                    fromAmino(object: _77.SignatureAndDataAmino): _77.SignatureAndData;
                    toAmino(message: _77.SignatureAndData): _77.SignatureAndDataAmino;
                    fromAminoMsg(object: _77.SignatureAndDataAminoMsg): _77.SignatureAndData;
                    toAminoMsg(message: _77.SignatureAndData): _77.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _77.SignatureAndDataProtoMsg): _77.SignatureAndData;
                    toProto(message: _77.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _77.SignatureAndData): _77.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.TimestampedSignatureData;
                    isSDK(o: any): o is _77.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _77.TimestampedSignatureDataAmino;
                    encode(message: _77.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.TimestampedSignatureData;
                    fromJSON(object: any): _77.TimestampedSignatureData;
                    toJSON(message: _77.TimestampedSignatureData): import("..").JsonSafe<_77.TimestampedSignatureData>;
                    fromPartial(object: Partial<_77.TimestampedSignatureData>): _77.TimestampedSignatureData;
                    fromAmino(object: _77.TimestampedSignatureDataAmino): _77.TimestampedSignatureData;
                    toAmino(message: _77.TimestampedSignatureData): _77.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _77.TimestampedSignatureDataAminoMsg): _77.TimestampedSignatureData;
                    toAminoMsg(message: _77.TimestampedSignatureData): _77.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _77.TimestampedSignatureDataProtoMsg): _77.TimestampedSignatureData;
                    toProto(message: _77.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _77.TimestampedSignatureData): _77.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.SignBytes;
                    isSDK(o: any): o is _77.SignBytesSDKType;
                    isAmino(o: any): o is _77.SignBytesAmino;
                    encode(message: _77.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.SignBytes;
                    fromJSON(object: any): _77.SignBytes;
                    toJSON(message: _77.SignBytes): import("..").JsonSafe<_77.SignBytes>;
                    fromPartial(object: Partial<_77.SignBytes>): _77.SignBytes;
                    fromAmino(object: _77.SignBytesAmino): _77.SignBytes;
                    toAmino(message: _77.SignBytes): _77.SignBytesAmino;
                    fromAminoMsg(object: _77.SignBytesAminoMsg): _77.SignBytes;
                    toAminoMsg(message: _77.SignBytes): _77.SignBytesAminoMsg;
                    fromProtoMsg(message: _77.SignBytesProtoMsg): _77.SignBytes;
                    toProto(message: _77.SignBytes): Uint8Array;
                    toProtoMsg(message: _77.SignBytes): _77.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.HeaderData;
                    isSDK(o: any): o is _77.HeaderDataSDKType;
                    isAmino(o: any): o is _77.HeaderDataAmino;
                    encode(message: _77.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.HeaderData;
                    fromJSON(object: any): _77.HeaderData;
                    toJSON(message: _77.HeaderData): import("..").JsonSafe<_77.HeaderData>;
                    fromPartial(object: Partial<_77.HeaderData>): _77.HeaderData;
                    fromAmino(object: _77.HeaderDataAmino): _77.HeaderData;
                    toAmino(message: _77.HeaderData): _77.HeaderDataAmino;
                    fromAminoMsg(object: _77.HeaderDataAminoMsg): _77.HeaderData;
                    toAminoMsg(message: _77.HeaderData): _77.HeaderDataAminoMsg;
                    fromProtoMsg(message: _77.HeaderDataProtoMsg): _77.HeaderData;
                    toProto(message: _77.HeaderData): Uint8Array;
                    toProtoMsg(message: _77.HeaderData): _77.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.ClientStateData;
                    isSDK(o: any): o is _77.ClientStateDataSDKType;
                    isAmino(o: any): o is _77.ClientStateDataAmino;
                    encode(message: _77.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ClientStateData;
                    fromJSON(object: any): _77.ClientStateData;
                    toJSON(message: _77.ClientStateData): import("..").JsonSafe<_77.ClientStateData>;
                    fromPartial(object: Partial<_77.ClientStateData>): _77.ClientStateData;
                    fromAmino(object: _77.ClientStateDataAmino): _77.ClientStateData;
                    toAmino(message: _77.ClientStateData): _77.ClientStateDataAmino;
                    fromAminoMsg(object: _77.ClientStateDataAminoMsg): _77.ClientStateData;
                    toAminoMsg(message: _77.ClientStateData): _77.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _77.ClientStateDataProtoMsg): _77.ClientStateData;
                    toProto(message: _77.ClientStateData): Uint8Array;
                    toProtoMsg(message: _77.ClientStateData): _77.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.ConsensusStateData;
                    isSDK(o: any): o is _77.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _77.ConsensusStateDataAmino;
                    encode(message: _77.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ConsensusStateData;
                    fromJSON(object: any): _77.ConsensusStateData;
                    toJSON(message: _77.ConsensusStateData): import("..").JsonSafe<_77.ConsensusStateData>;
                    fromPartial(object: Partial<_77.ConsensusStateData>): _77.ConsensusStateData;
                    fromAmino(object: _77.ConsensusStateDataAmino): _77.ConsensusStateData;
                    toAmino(message: _77.ConsensusStateData): _77.ConsensusStateDataAmino;
                    fromAminoMsg(object: _77.ConsensusStateDataAminoMsg): _77.ConsensusStateData;
                    toAminoMsg(message: _77.ConsensusStateData): _77.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _77.ConsensusStateDataProtoMsg): _77.ConsensusStateData;
                    toProto(message: _77.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _77.ConsensusStateData): _77.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.ConnectionStateData;
                    isSDK(o: any): o is _77.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _77.ConnectionStateDataAmino;
                    encode(message: _77.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ConnectionStateData;
                    fromJSON(object: any): _77.ConnectionStateData;
                    toJSON(message: _77.ConnectionStateData): import("..").JsonSafe<_77.ConnectionStateData>;
                    fromPartial(object: Partial<_77.ConnectionStateData>): _77.ConnectionStateData;
                    fromAmino(object: _77.ConnectionStateDataAmino): _77.ConnectionStateData;
                    toAmino(message: _77.ConnectionStateData): _77.ConnectionStateDataAmino;
                    fromAminoMsg(object: _77.ConnectionStateDataAminoMsg): _77.ConnectionStateData;
                    toAminoMsg(message: _77.ConnectionStateData): _77.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _77.ConnectionStateDataProtoMsg): _77.ConnectionStateData;
                    toProto(message: _77.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _77.ConnectionStateData): _77.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.ChannelStateData;
                    isSDK(o: any): o is _77.ChannelStateDataSDKType;
                    isAmino(o: any): o is _77.ChannelStateDataAmino;
                    encode(message: _77.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.ChannelStateData;
                    fromJSON(object: any): _77.ChannelStateData;
                    toJSON(message: _77.ChannelStateData): import("..").JsonSafe<_77.ChannelStateData>;
                    fromPartial(object: Partial<_77.ChannelStateData>): _77.ChannelStateData;
                    fromAmino(object: _77.ChannelStateDataAmino): _77.ChannelStateData;
                    toAmino(message: _77.ChannelStateData): _77.ChannelStateDataAmino;
                    fromAminoMsg(object: _77.ChannelStateDataAminoMsg): _77.ChannelStateData;
                    toAminoMsg(message: _77.ChannelStateData): _77.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _77.ChannelStateDataProtoMsg): _77.ChannelStateData;
                    toProto(message: _77.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _77.ChannelStateData): _77.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.PacketCommitmentData;
                    isSDK(o: any): o is _77.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _77.PacketCommitmentDataAmino;
                    encode(message: _77.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PacketCommitmentData;
                    fromJSON(object: any): _77.PacketCommitmentData;
                    toJSON(message: _77.PacketCommitmentData): import("..").JsonSafe<_77.PacketCommitmentData>;
                    fromPartial(object: Partial<_77.PacketCommitmentData>): _77.PacketCommitmentData;
                    fromAmino(object: _77.PacketCommitmentDataAmino): _77.PacketCommitmentData;
                    toAmino(message: _77.PacketCommitmentData): _77.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _77.PacketCommitmentDataAminoMsg): _77.PacketCommitmentData;
                    toAminoMsg(message: _77.PacketCommitmentData): _77.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _77.PacketCommitmentDataProtoMsg): _77.PacketCommitmentData;
                    toProto(message: _77.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _77.PacketCommitmentData): _77.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.PacketAcknowledgementData;
                    isSDK(o: any): o is _77.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _77.PacketAcknowledgementDataAmino;
                    encode(message: _77.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PacketAcknowledgementData;
                    fromJSON(object: any): _77.PacketAcknowledgementData;
                    toJSON(message: _77.PacketAcknowledgementData): import("..").JsonSafe<_77.PacketAcknowledgementData>;
                    fromPartial(object: Partial<_77.PacketAcknowledgementData>): _77.PacketAcknowledgementData;
                    fromAmino(object: _77.PacketAcknowledgementDataAmino): _77.PacketAcknowledgementData;
                    toAmino(message: _77.PacketAcknowledgementData): _77.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _77.PacketAcknowledgementDataAminoMsg): _77.PacketAcknowledgementData;
                    toAminoMsg(message: _77.PacketAcknowledgementData): _77.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _77.PacketAcknowledgementDataProtoMsg): _77.PacketAcknowledgementData;
                    toProto(message: _77.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _77.PacketAcknowledgementData): _77.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _77.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _77.PacketReceiptAbsenceDataAmino;
                    encode(message: _77.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PacketReceiptAbsenceData;
                    fromJSON(object: any): _77.PacketReceiptAbsenceData;
                    toJSON(message: _77.PacketReceiptAbsenceData): import("..").JsonSafe<_77.PacketReceiptAbsenceData>;
                    fromPartial(object: Partial<_77.PacketReceiptAbsenceData>): _77.PacketReceiptAbsenceData;
                    fromAmino(object: _77.PacketReceiptAbsenceDataAmino): _77.PacketReceiptAbsenceData;
                    toAmino(message: _77.PacketReceiptAbsenceData): _77.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _77.PacketReceiptAbsenceDataAminoMsg): _77.PacketReceiptAbsenceData;
                    toAminoMsg(message: _77.PacketReceiptAbsenceData): _77.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _77.PacketReceiptAbsenceDataProtoMsg): _77.PacketReceiptAbsenceData;
                    toProto(message: _77.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _77.PacketReceiptAbsenceData): _77.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.NextSequenceRecvData;
                    isSDK(o: any): o is _77.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _77.NextSequenceRecvDataAmino;
                    encode(message: _77.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.NextSequenceRecvData;
                    fromJSON(object: any): _77.NextSequenceRecvData;
                    toJSON(message: _77.NextSequenceRecvData): import("..").JsonSafe<_77.NextSequenceRecvData>;
                    fromPartial(object: Partial<_77.NextSequenceRecvData>): _77.NextSequenceRecvData;
                    fromAmino(object: _77.NextSequenceRecvDataAmino): _77.NextSequenceRecvData;
                    toAmino(message: _77.NextSequenceRecvData): _77.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _77.NextSequenceRecvDataAminoMsg): _77.NextSequenceRecvData;
                    toAminoMsg(message: _77.NextSequenceRecvData): _77.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _77.NextSequenceRecvDataProtoMsg): _77.NextSequenceRecvData;
                    toProto(message: _77.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _77.NextSequenceRecvData): _77.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _78.DataType;
                dataTypeToJSON(object: _78.DataType): string;
                DataType: typeof _78.DataType;
                DataTypeSDKType: typeof _78.DataType;
                DataTypeAmino: typeof _78.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.ClientState;
                    isSDK(o: any): o is _78.ClientStateSDKType;
                    isAmino(o: any): o is _78.ClientStateAmino;
                    encode(message: _78.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ClientState;
                    fromJSON(object: any): _78.ClientState;
                    toJSON(message: _78.ClientState): import("..").JsonSafe<_78.ClientState>;
                    fromPartial(object: Partial<_78.ClientState>): _78.ClientState;
                    fromAmino(object: _78.ClientStateAmino): _78.ClientState;
                    toAmino(message: _78.ClientState): _78.ClientStateAmino;
                    fromAminoMsg(object: _78.ClientStateAminoMsg): _78.ClientState;
                    toAminoMsg(message: _78.ClientState): _78.ClientStateAminoMsg;
                    fromProtoMsg(message: _78.ClientStateProtoMsg): _78.ClientState;
                    toProto(message: _78.ClientState): Uint8Array;
                    toProtoMsg(message: _78.ClientState): _78.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.ConsensusState;
                    isSDK(o: any): o is _78.ConsensusStateSDKType;
                    isAmino(o: any): o is _78.ConsensusStateAmino;
                    encode(message: _78.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ConsensusState;
                    fromJSON(object: any): _78.ConsensusState;
                    toJSON(message: _78.ConsensusState): import("..").JsonSafe<_78.ConsensusState>;
                    fromPartial(object: Partial<_78.ConsensusState>): _78.ConsensusState;
                    fromAmino(object: _78.ConsensusStateAmino): _78.ConsensusState;
                    toAmino(message: _78.ConsensusState): _78.ConsensusStateAmino;
                    fromAminoMsg(object: _78.ConsensusStateAminoMsg): _78.ConsensusState;
                    toAminoMsg(message: _78.ConsensusState): _78.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _78.ConsensusStateProtoMsg): _78.ConsensusState;
                    toProto(message: _78.ConsensusState): Uint8Array;
                    toProtoMsg(message: _78.ConsensusState): _78.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.Header;
                    isSDK(o: any): o is _78.HeaderSDKType;
                    isAmino(o: any): o is _78.HeaderAmino;
                    encode(message: _78.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Header;
                    fromJSON(object: any): _78.Header;
                    toJSON(message: _78.Header): import("..").JsonSafe<_78.Header>;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                    fromAmino(object: _78.HeaderAmino): _78.Header;
                    toAmino(message: _78.Header): _78.HeaderAmino;
                    fromAminoMsg(object: _78.HeaderAminoMsg): _78.Header;
                    toAminoMsg(message: _78.Header): _78.HeaderAminoMsg;
                    fromProtoMsg(message: _78.HeaderProtoMsg): _78.Header;
                    toProto(message: _78.Header): Uint8Array;
                    toProtoMsg(message: _78.Header): _78.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.Misbehaviour;
                    isSDK(o: any): o is _78.MisbehaviourSDKType;
                    isAmino(o: any): o is _78.MisbehaviourAmino;
                    encode(message: _78.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Misbehaviour;
                    fromJSON(object: any): _78.Misbehaviour;
                    toJSON(message: _78.Misbehaviour): import("..").JsonSafe<_78.Misbehaviour>;
                    fromPartial(object: Partial<_78.Misbehaviour>): _78.Misbehaviour;
                    fromAmino(object: _78.MisbehaviourAmino): _78.Misbehaviour;
                    toAmino(message: _78.Misbehaviour): _78.MisbehaviourAmino;
                    fromAminoMsg(object: _78.MisbehaviourAminoMsg): _78.Misbehaviour;
                    toAminoMsg(message: _78.Misbehaviour): _78.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _78.MisbehaviourProtoMsg): _78.Misbehaviour;
                    toProto(message: _78.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _78.Misbehaviour): _78.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.SignatureAndData;
                    isSDK(o: any): o is _78.SignatureAndDataSDKType;
                    isAmino(o: any): o is _78.SignatureAndDataAmino;
                    encode(message: _78.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.SignatureAndData;
                    fromJSON(object: any): _78.SignatureAndData;
                    toJSON(message: _78.SignatureAndData): import("..").JsonSafe<_78.SignatureAndData>;
                    fromPartial(object: Partial<_78.SignatureAndData>): _78.SignatureAndData;
                    fromAmino(object: _78.SignatureAndDataAmino): _78.SignatureAndData;
                    toAmino(message: _78.SignatureAndData): _78.SignatureAndDataAmino;
                    fromAminoMsg(object: _78.SignatureAndDataAminoMsg): _78.SignatureAndData;
                    toAminoMsg(message: _78.SignatureAndData): _78.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _78.SignatureAndDataProtoMsg): _78.SignatureAndData;
                    toProto(message: _78.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _78.SignatureAndData): _78.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.TimestampedSignatureData;
                    isSDK(o: any): o is _78.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _78.TimestampedSignatureDataAmino;
                    encode(message: _78.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.TimestampedSignatureData;
                    fromJSON(object: any): _78.TimestampedSignatureData;
                    toJSON(message: _78.TimestampedSignatureData): import("..").JsonSafe<_78.TimestampedSignatureData>;
                    fromPartial(object: Partial<_78.TimestampedSignatureData>): _78.TimestampedSignatureData;
                    fromAmino(object: _78.TimestampedSignatureDataAmino): _78.TimestampedSignatureData;
                    toAmino(message: _78.TimestampedSignatureData): _78.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _78.TimestampedSignatureDataAminoMsg): _78.TimestampedSignatureData;
                    toAminoMsg(message: _78.TimestampedSignatureData): _78.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _78.TimestampedSignatureDataProtoMsg): _78.TimestampedSignatureData;
                    toProto(message: _78.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _78.TimestampedSignatureData): _78.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.SignBytes;
                    isSDK(o: any): o is _78.SignBytesSDKType;
                    isAmino(o: any): o is _78.SignBytesAmino;
                    encode(message: _78.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.SignBytes;
                    fromJSON(object: any): _78.SignBytes;
                    toJSON(message: _78.SignBytes): import("..").JsonSafe<_78.SignBytes>;
                    fromPartial(object: Partial<_78.SignBytes>): _78.SignBytes;
                    fromAmino(object: _78.SignBytesAmino): _78.SignBytes;
                    toAmino(message: _78.SignBytes): _78.SignBytesAmino;
                    fromAminoMsg(object: _78.SignBytesAminoMsg): _78.SignBytes;
                    toAminoMsg(message: _78.SignBytes): _78.SignBytesAminoMsg;
                    fromProtoMsg(message: _78.SignBytesProtoMsg): _78.SignBytes;
                    toProto(message: _78.SignBytes): Uint8Array;
                    toProtoMsg(message: _78.SignBytes): _78.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.HeaderData;
                    isSDK(o: any): o is _78.HeaderDataSDKType;
                    isAmino(o: any): o is _78.HeaderDataAmino;
                    encode(message: _78.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.HeaderData;
                    fromJSON(object: any): _78.HeaderData;
                    toJSON(message: _78.HeaderData): import("..").JsonSafe<_78.HeaderData>;
                    fromPartial(object: Partial<_78.HeaderData>): _78.HeaderData;
                    fromAmino(object: _78.HeaderDataAmino): _78.HeaderData;
                    toAmino(message: _78.HeaderData): _78.HeaderDataAmino;
                    fromAminoMsg(object: _78.HeaderDataAminoMsg): _78.HeaderData;
                    toAminoMsg(message: _78.HeaderData): _78.HeaderDataAminoMsg;
                    fromProtoMsg(message: _78.HeaderDataProtoMsg): _78.HeaderData;
                    toProto(message: _78.HeaderData): Uint8Array;
                    toProtoMsg(message: _78.HeaderData): _78.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.ClientStateData;
                    isSDK(o: any): o is _78.ClientStateDataSDKType;
                    isAmino(o: any): o is _78.ClientStateDataAmino;
                    encode(message: _78.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ClientStateData;
                    fromJSON(object: any): _78.ClientStateData;
                    toJSON(message: _78.ClientStateData): import("..").JsonSafe<_78.ClientStateData>;
                    fromPartial(object: Partial<_78.ClientStateData>): _78.ClientStateData;
                    fromAmino(object: _78.ClientStateDataAmino): _78.ClientStateData;
                    toAmino(message: _78.ClientStateData): _78.ClientStateDataAmino;
                    fromAminoMsg(object: _78.ClientStateDataAminoMsg): _78.ClientStateData;
                    toAminoMsg(message: _78.ClientStateData): _78.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _78.ClientStateDataProtoMsg): _78.ClientStateData;
                    toProto(message: _78.ClientStateData): Uint8Array;
                    toProtoMsg(message: _78.ClientStateData): _78.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.ConsensusStateData;
                    isSDK(o: any): o is _78.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _78.ConsensusStateDataAmino;
                    encode(message: _78.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ConsensusStateData;
                    fromJSON(object: any): _78.ConsensusStateData;
                    toJSON(message: _78.ConsensusStateData): import("..").JsonSafe<_78.ConsensusStateData>;
                    fromPartial(object: Partial<_78.ConsensusStateData>): _78.ConsensusStateData;
                    fromAmino(object: _78.ConsensusStateDataAmino): _78.ConsensusStateData;
                    toAmino(message: _78.ConsensusStateData): _78.ConsensusStateDataAmino;
                    fromAminoMsg(object: _78.ConsensusStateDataAminoMsg): _78.ConsensusStateData;
                    toAminoMsg(message: _78.ConsensusStateData): _78.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _78.ConsensusStateDataProtoMsg): _78.ConsensusStateData;
                    toProto(message: _78.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _78.ConsensusStateData): _78.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.ConnectionStateData;
                    isSDK(o: any): o is _78.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _78.ConnectionStateDataAmino;
                    encode(message: _78.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ConnectionStateData;
                    fromJSON(object: any): _78.ConnectionStateData;
                    toJSON(message: _78.ConnectionStateData): import("..").JsonSafe<_78.ConnectionStateData>;
                    fromPartial(object: Partial<_78.ConnectionStateData>): _78.ConnectionStateData;
                    fromAmino(object: _78.ConnectionStateDataAmino): _78.ConnectionStateData;
                    toAmino(message: _78.ConnectionStateData): _78.ConnectionStateDataAmino;
                    fromAminoMsg(object: _78.ConnectionStateDataAminoMsg): _78.ConnectionStateData;
                    toAminoMsg(message: _78.ConnectionStateData): _78.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _78.ConnectionStateDataProtoMsg): _78.ConnectionStateData;
                    toProto(message: _78.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _78.ConnectionStateData): _78.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.ChannelStateData;
                    isSDK(o: any): o is _78.ChannelStateDataSDKType;
                    isAmino(o: any): o is _78.ChannelStateDataAmino;
                    encode(message: _78.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.ChannelStateData;
                    fromJSON(object: any): _78.ChannelStateData;
                    toJSON(message: _78.ChannelStateData): import("..").JsonSafe<_78.ChannelStateData>;
                    fromPartial(object: Partial<_78.ChannelStateData>): _78.ChannelStateData;
                    fromAmino(object: _78.ChannelStateDataAmino): _78.ChannelStateData;
                    toAmino(message: _78.ChannelStateData): _78.ChannelStateDataAmino;
                    fromAminoMsg(object: _78.ChannelStateDataAminoMsg): _78.ChannelStateData;
                    toAminoMsg(message: _78.ChannelStateData): _78.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _78.ChannelStateDataProtoMsg): _78.ChannelStateData;
                    toProto(message: _78.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _78.ChannelStateData): _78.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.PacketCommitmentData;
                    isSDK(o: any): o is _78.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _78.PacketCommitmentDataAmino;
                    encode(message: _78.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.PacketCommitmentData;
                    fromJSON(object: any): _78.PacketCommitmentData;
                    toJSON(message: _78.PacketCommitmentData): import("..").JsonSafe<_78.PacketCommitmentData>;
                    fromPartial(object: Partial<_78.PacketCommitmentData>): _78.PacketCommitmentData;
                    fromAmino(object: _78.PacketCommitmentDataAmino): _78.PacketCommitmentData;
                    toAmino(message: _78.PacketCommitmentData): _78.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _78.PacketCommitmentDataAminoMsg): _78.PacketCommitmentData;
                    toAminoMsg(message: _78.PacketCommitmentData): _78.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _78.PacketCommitmentDataProtoMsg): _78.PacketCommitmentData;
                    toProto(message: _78.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _78.PacketCommitmentData): _78.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.PacketAcknowledgementData;
                    isSDK(o: any): o is _78.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _78.PacketAcknowledgementDataAmino;
                    encode(message: _78.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.PacketAcknowledgementData;
                    fromJSON(object: any): _78.PacketAcknowledgementData;
                    toJSON(message: _78.PacketAcknowledgementData): import("..").JsonSafe<_78.PacketAcknowledgementData>;
                    fromPartial(object: Partial<_78.PacketAcknowledgementData>): _78.PacketAcknowledgementData;
                    fromAmino(object: _78.PacketAcknowledgementDataAmino): _78.PacketAcknowledgementData;
                    toAmino(message: _78.PacketAcknowledgementData): _78.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _78.PacketAcknowledgementDataAminoMsg): _78.PacketAcknowledgementData;
                    toAminoMsg(message: _78.PacketAcknowledgementData): _78.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _78.PacketAcknowledgementDataProtoMsg): _78.PacketAcknowledgementData;
                    toProto(message: _78.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _78.PacketAcknowledgementData): _78.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _78.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _78.PacketReceiptAbsenceDataAmino;
                    encode(message: _78.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.PacketReceiptAbsenceData;
                    fromJSON(object: any): _78.PacketReceiptAbsenceData;
                    toJSON(message: _78.PacketReceiptAbsenceData): import("..").JsonSafe<_78.PacketReceiptAbsenceData>;
                    fromPartial(object: Partial<_78.PacketReceiptAbsenceData>): _78.PacketReceiptAbsenceData;
                    fromAmino(object: _78.PacketReceiptAbsenceDataAmino): _78.PacketReceiptAbsenceData;
                    toAmino(message: _78.PacketReceiptAbsenceData): _78.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _78.PacketReceiptAbsenceDataAminoMsg): _78.PacketReceiptAbsenceData;
                    toAminoMsg(message: _78.PacketReceiptAbsenceData): _78.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _78.PacketReceiptAbsenceDataProtoMsg): _78.PacketReceiptAbsenceData;
                    toProto(message: _78.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _78.PacketReceiptAbsenceData): _78.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.NextSequenceRecvData;
                    isSDK(o: any): o is _78.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _78.NextSequenceRecvDataAmino;
                    encode(message: _78.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.NextSequenceRecvData;
                    fromJSON(object: any): _78.NextSequenceRecvData;
                    toJSON(message: _78.NextSequenceRecvData): import("..").JsonSafe<_78.NextSequenceRecvData>;
                    fromPartial(object: Partial<_78.NextSequenceRecvData>): _78.NextSequenceRecvData;
                    fromAmino(object: _78.NextSequenceRecvDataAmino): _78.NextSequenceRecvData;
                    toAmino(message: _78.NextSequenceRecvData): _78.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _78.NextSequenceRecvDataAminoMsg): _78.NextSequenceRecvData;
                    toAminoMsg(message: _78.NextSequenceRecvData): _78.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _78.NextSequenceRecvDataProtoMsg): _78.NextSequenceRecvData;
                    toProto(message: _78.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _78.NextSequenceRecvData): _78.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ClientState;
                    isSDK(o: any): o is _79.ClientStateSDKType;
                    isAmino(o: any): o is _79.ClientStateAmino;
                    encode(message: _79.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.ClientState;
                    fromJSON(object: any): _79.ClientState;
                    toJSON(message: _79.ClientState): import("..").JsonSafe<_79.ClientState>;
                    fromPartial(object: Partial<_79.ClientState>): _79.ClientState;
                    fromAmino(object: _79.ClientStateAmino): _79.ClientState;
                    toAmino(message: _79.ClientState): _79.ClientStateAmino;
                    fromAminoMsg(object: _79.ClientStateAminoMsg): _79.ClientState;
                    toAminoMsg(message: _79.ClientState): _79.ClientStateAminoMsg;
                    fromProtoMsg(message: _79.ClientStateProtoMsg): _79.ClientState;
                    toProto(message: _79.ClientState): Uint8Array;
                    toProtoMsg(message: _79.ClientState): _79.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ConsensusState;
                    isSDK(o: any): o is _79.ConsensusStateSDKType;
                    isAmino(o: any): o is _79.ConsensusStateAmino;
                    encode(message: _79.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.ConsensusState;
                    fromJSON(object: any): _79.ConsensusState;
                    toJSON(message: _79.ConsensusState): import("..").JsonSafe<_79.ConsensusState>;
                    fromPartial(object: Partial<_79.ConsensusState>): _79.ConsensusState;
                    fromAmino(object: _79.ConsensusStateAmino): _79.ConsensusState;
                    toAmino(message: _79.ConsensusState): _79.ConsensusStateAmino;
                    fromAminoMsg(object: _79.ConsensusStateAminoMsg): _79.ConsensusState;
                    toAminoMsg(message: _79.ConsensusState): _79.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _79.ConsensusStateProtoMsg): _79.ConsensusState;
                    toProto(message: _79.ConsensusState): Uint8Array;
                    toProtoMsg(message: _79.ConsensusState): _79.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.Misbehaviour;
                    isSDK(o: any): o is _79.MisbehaviourSDKType;
                    isAmino(o: any): o is _79.MisbehaviourAmino;
                    encode(message: _79.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Misbehaviour;
                    fromJSON(object: any): _79.Misbehaviour;
                    toJSON(message: _79.Misbehaviour): import("..").JsonSafe<_79.Misbehaviour>;
                    fromPartial(object: Partial<_79.Misbehaviour>): _79.Misbehaviour;
                    fromAmino(object: _79.MisbehaviourAmino): _79.Misbehaviour;
                    toAmino(message: _79.Misbehaviour): _79.MisbehaviourAmino;
                    fromAminoMsg(object: _79.MisbehaviourAminoMsg): _79.Misbehaviour;
                    toAminoMsg(message: _79.Misbehaviour): _79.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _79.MisbehaviourProtoMsg): _79.Misbehaviour;
                    toProto(message: _79.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _79.Misbehaviour): _79.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.Header;
                    isSDK(o: any): o is _79.HeaderSDKType;
                    isAmino(o: any): o is _79.HeaderAmino;
                    encode(message: _79.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Header;
                    fromJSON(object: any): _79.Header;
                    toJSON(message: _79.Header): import("..").JsonSafe<_79.Header>;
                    fromPartial(object: Partial<_79.Header>): _79.Header;
                    fromAmino(object: _79.HeaderAmino): _79.Header;
                    toAmino(message: _79.Header): _79.HeaderAmino;
                    fromAminoMsg(object: _79.HeaderAminoMsg): _79.Header;
                    toAminoMsg(message: _79.Header): _79.HeaderAminoMsg;
                    fromProtoMsg(message: _79.HeaderProtoMsg): _79.Header;
                    toProto(message: _79.Header): Uint8Array;
                    toProtoMsg(message: _79.Header): _79.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.Fraction;
                    isSDK(o: any): o is _79.FractionSDKType;
                    isAmino(o: any): o is _79.FractionAmino;
                    encode(message: _79.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Fraction;
                    fromJSON(object: any): _79.Fraction;
                    toJSON(message: _79.Fraction): import("..").JsonSafe<_79.Fraction>;
                    fromPartial(object: Partial<_79.Fraction>): _79.Fraction;
                    fromAmino(object: _79.FractionAmino): _79.Fraction;
                    toAmino(message: _79.Fraction): _79.FractionAmino;
                    fromAminoMsg(object: _79.FractionAminoMsg): _79.Fraction;
                    toAminoMsg(message: _79.Fraction): _79.FractionAminoMsg;
                    fromProtoMsg(message: _79.FractionProtoMsg): _79.Fraction;
                    toProto(message: _79.Fraction): Uint8Array;
                    toProtoMsg(message: _79.Fraction): _79.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evm: {
                    vm: {
                        v1: import("../cosmos/evm/vm/v1/tx.rpc.msg").MsgClientImpl;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _200.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _201.MsgClientImpl;
                    };
                    client: {
                        v1: _202.MsgClientImpl;
                    };
                    connection: {
                        v1: _203.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _59.QueryDenomTraceRequest): Promise<_59.QueryDenomTraceResponse>;
                            denomTraces(request?: _59.QueryDenomTracesRequest): Promise<_59.QueryDenomTracesResponse>;
                            params(request?: _59.QueryParamsRequest): Promise<_59.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _65.QueryChannelRequest): Promise<_65.QueryChannelResponse>;
                            channels(request?: _65.QueryChannelsRequest): Promise<_65.QueryChannelsResponse>;
                            connectionChannels(request: _65.QueryConnectionChannelsRequest): Promise<_65.QueryConnectionChannelsResponse>;
                            channelClientState(request: _65.QueryChannelClientStateRequest): Promise<_65.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _65.QueryChannelConsensusStateRequest): Promise<_65.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _65.QueryPacketCommitmentRequest): Promise<_65.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _65.QueryPacketCommitmentsRequest): Promise<_65.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _65.QueryPacketReceiptRequest): Promise<_65.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _65.QueryPacketAcknowledgementRequest): Promise<_65.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _65.QueryPacketAcknowledgementsRequest): Promise<_65.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _65.QueryUnreceivedPacketsRequest): Promise<_65.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _65.QueryUnreceivedAcksRequest): Promise<_65.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _65.QueryNextSequenceReceiveRequest): Promise<_65.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _69.QueryClientStateRequest): Promise<_69.QueryClientStateResponse>;
                            clientStates(request?: _69.QueryClientStatesRequest): Promise<_69.QueryClientStatesResponse>;
                            consensusState(request: _69.QueryConsensusStateRequest): Promise<_69.QueryConsensusStateResponse>;
                            consensusStates(request: _69.QueryConsensusStatesRequest): Promise<_69.QueryConsensusStatesResponse>;
                            clientStatus(request: _69.QueryClientStatusRequest): Promise<_69.QueryClientStatusResponse>;
                            clientParams(request?: _69.QueryClientParamsRequest): Promise<_69.QueryClientParamsResponse>;
                            upgradedClientState(request?: _69.QueryUpgradedClientStateRequest): Promise<_69.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _69.QueryUpgradedConsensusStateRequest): Promise<_69.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _74.QueryConnectionRequest): Promise<_74.QueryConnectionResponse>;
                            connections(request?: _74.QueryConnectionsRequest): Promise<_74.QueryConnectionsResponse>;
                            clientConnections(request: _74.QueryClientConnectionsRequest): Promise<_74.QueryClientConnectionsResponse>;
                            connectionClientState(request: _74.QueryConnectionClientStateRequest): Promise<_74.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _74.QueryConnectionConsensusStateRequest): Promise<_74.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
