import * as _62 from "./applications/transfer/v1/genesis";
import * as _63 from "./applications/transfer/v1/query";
import * as _64 from "./applications/transfer/v1/transfer";
import * as _65 from "./applications/transfer/v1/tx";
import * as _66 from "./applications/transfer/v2/packet";
import * as _67 from "./core/channel/v1/channel";
import * as _68 from "./core/channel/v1/genesis";
import * as _69 from "./core/channel/v1/query";
import * as _70 from "./core/channel/v1/tx";
import * as _71 from "./core/client/v1/client";
import * as _72 from "./core/client/v1/genesis";
import * as _73 from "./core/client/v1/query";
import * as _74 from "./core/client/v1/tx";
import * as _75 from "./core/commitment/v1/commitment";
import * as _76 from "./core/connection/v1/connection";
import * as _77 from "./core/connection/v1/genesis";
import * as _78 from "./core/connection/v1/query";
import * as _79 from "./core/connection/v1/tx";
import * as _80 from "./lightclients/localhost/v1/localhost";
import * as _81 from "./lightclients/solomachine/v1/solomachine";
import * as _82 from "./lightclients/solomachine/v2/solomachine";
import * as _83 from "./lightclients/tendermint/v1/tendermint";
import * as _204 from "./applications/transfer/v1/query.rpc.Query";
import * as _205 from "./core/channel/v1/query.rpc.Query";
import * as _206 from "./core/client/v1/query.rpc.Query";
import * as _207 from "./core/connection/v1/query.rpc.Query";
import * as _208 from "./applications/transfer/v1/tx.rpc.msg";
import * as _209 from "./core/channel/v1/tx.rpc.msg";
import * as _210 from "./core/client/v1/tx.rpc.msg";
import * as _211 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _208.MsgClientImpl;
                QueryClientImpl: typeof _204.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _63.QueryDenomTraceRequest): Promise<_63.QueryDenomTraceResponse>;
                    denomTraces(request?: _63.QueryDenomTracesRequest): Promise<_63.QueryDenomTracesResponse>;
                    params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _65.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _65.MsgTransfer): {
                            typeUrl: string;
                            value: _65.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _65.MsgTransfer): {
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
                            value: _65.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _65.MsgTransfer): {
                            typeUrl: string;
                            value: _65.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _65.MsgTransfer) => _65.MsgTransferAmino;
                        fromAmino: (object: _65.MsgTransferAmino) => _65.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.MsgTransfer;
                    isSDK(o: any): o is _65.MsgTransferSDKType;
                    isAmino(o: any): o is _65.MsgTransferAmino;
                    encode(message: _65.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgTransfer;
                    fromJSON(object: any): _65.MsgTransfer;
                    toJSON(message: _65.MsgTransfer): import("..").JsonSafe<_65.MsgTransfer>;
                    fromPartial(object: Partial<_65.MsgTransfer>): _65.MsgTransfer;
                    fromAmino(object: _65.MsgTransferAmino): _65.MsgTransfer;
                    toAmino(message: _65.MsgTransfer): _65.MsgTransferAmino;
                    fromAminoMsg(object: _65.MsgTransferAminoMsg): _65.MsgTransfer;
                    toAminoMsg(message: _65.MsgTransfer): _65.MsgTransferAminoMsg;
                    fromProtoMsg(message: _65.MsgTransferProtoMsg): _65.MsgTransfer;
                    toProto(message: _65.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _65.MsgTransfer): _65.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.MsgTransferResponse;
                    isSDK(o: any): o is _65.MsgTransferResponseSDKType;
                    isAmino(o: any): o is _65.MsgTransferResponseAmino;
                    encode(_: _65.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgTransferResponse;
                    fromJSON(_: any): _65.MsgTransferResponse;
                    toJSON(_: _65.MsgTransferResponse): import("..").JsonSafe<_65.MsgTransferResponse>;
                    fromPartial(_: Partial<_65.MsgTransferResponse>): _65.MsgTransferResponse;
                    fromAmino(_: _65.MsgTransferResponseAmino): _65.MsgTransferResponse;
                    toAmino(_: _65.MsgTransferResponse): _65.MsgTransferResponseAmino;
                    fromAminoMsg(object: _65.MsgTransferResponseAminoMsg): _65.MsgTransferResponse;
                    toAminoMsg(message: _65.MsgTransferResponse): _65.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _65.MsgTransferResponseProtoMsg): _65.MsgTransferResponse;
                    toProto(message: _65.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _65.MsgTransferResponse): _65.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.DenomTrace;
                    isSDK(o: any): o is _64.DenomTraceSDKType;
                    isAmino(o: any): o is _64.DenomTraceAmino;
                    encode(message: _64.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.DenomTrace;
                    fromJSON(object: any): _64.DenomTrace;
                    toJSON(message: _64.DenomTrace): import("..").JsonSafe<_64.DenomTrace>;
                    fromPartial(object: Partial<_64.DenomTrace>): _64.DenomTrace;
                    fromAmino(object: _64.DenomTraceAmino): _64.DenomTrace;
                    toAmino(message: _64.DenomTrace): _64.DenomTraceAmino;
                    fromAminoMsg(object: _64.DenomTraceAminoMsg): _64.DenomTrace;
                    toAminoMsg(message: _64.DenomTrace): _64.DenomTraceAminoMsg;
                    fromProtoMsg(message: _64.DenomTraceProtoMsg): _64.DenomTrace;
                    toProto(message: _64.DenomTrace): Uint8Array;
                    toProtoMsg(message: _64.DenomTrace): _64.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.Params;
                    isSDK(o: any): o is _64.ParamsSDKType;
                    isAmino(o: any): o is _64.ParamsAmino;
                    encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Params;
                    fromJSON(object: any): _64.Params;
                    toJSON(message: _64.Params): import("..").JsonSafe<_64.Params>;
                    fromPartial(object: Partial<_64.Params>): _64.Params;
                    fromAmino(object: _64.ParamsAmino): _64.Params;
                    toAmino(message: _64.Params): _64.ParamsAmino;
                    fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                    toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                    fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                    toProto(message: _64.Params): Uint8Array;
                    toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.QueryDenomTraceRequest;
                    isSDK(o: any): o is _63.QueryDenomTraceRequestSDKType;
                    isAmino(o: any): o is _63.QueryDenomTraceRequestAmino;
                    encode(message: _63.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.QueryDenomTraceRequest;
                    fromJSON(object: any): _63.QueryDenomTraceRequest;
                    toJSON(message: _63.QueryDenomTraceRequest): import("..").JsonSafe<_63.QueryDenomTraceRequest>;
                    fromPartial(object: Partial<_63.QueryDenomTraceRequest>): _63.QueryDenomTraceRequest;
                    fromAmino(object: _63.QueryDenomTraceRequestAmino): _63.QueryDenomTraceRequest;
                    toAmino(message: _63.QueryDenomTraceRequest): _63.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _63.QueryDenomTraceRequestAminoMsg): _63.QueryDenomTraceRequest;
                    toAminoMsg(message: _63.QueryDenomTraceRequest): _63.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryDenomTraceRequestProtoMsg): _63.QueryDenomTraceRequest;
                    toProto(message: _63.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryDenomTraceRequest): _63.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.QueryDenomTraceResponse;
                    isSDK(o: any): o is _63.QueryDenomTraceResponseSDKType;
                    isAmino(o: any): o is _63.QueryDenomTraceResponseAmino;
                    encode(message: _63.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.QueryDenomTraceResponse;
                    fromJSON(object: any): _63.QueryDenomTraceResponse;
                    toJSON(message: _63.QueryDenomTraceResponse): import("..").JsonSafe<_63.QueryDenomTraceResponse>;
                    fromPartial(object: Partial<_63.QueryDenomTraceResponse>): _63.QueryDenomTraceResponse;
                    fromAmino(object: _63.QueryDenomTraceResponseAmino): _63.QueryDenomTraceResponse;
                    toAmino(message: _63.QueryDenomTraceResponse): _63.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _63.QueryDenomTraceResponseAminoMsg): _63.QueryDenomTraceResponse;
                    toAminoMsg(message: _63.QueryDenomTraceResponse): _63.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryDenomTraceResponseProtoMsg): _63.QueryDenomTraceResponse;
                    toProto(message: _63.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryDenomTraceResponse): _63.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.QueryDenomTracesRequest;
                    isSDK(o: any): o is _63.QueryDenomTracesRequestSDKType;
                    isAmino(o: any): o is _63.QueryDenomTracesRequestAmino;
                    encode(message: _63.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.QueryDenomTracesRequest;
                    fromJSON(object: any): _63.QueryDenomTracesRequest;
                    toJSON(message: _63.QueryDenomTracesRequest): import("..").JsonSafe<_63.QueryDenomTracesRequest>;
                    fromPartial(object: Partial<_63.QueryDenomTracesRequest>): _63.QueryDenomTracesRequest;
                    fromAmino(object: _63.QueryDenomTracesRequestAmino): _63.QueryDenomTracesRequest;
                    toAmino(message: _63.QueryDenomTracesRequest): _63.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _63.QueryDenomTracesRequestAminoMsg): _63.QueryDenomTracesRequest;
                    toAminoMsg(message: _63.QueryDenomTracesRequest): _63.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryDenomTracesRequestProtoMsg): _63.QueryDenomTracesRequest;
                    toProto(message: _63.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryDenomTracesRequest): _63.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.QueryDenomTracesResponse;
                    isSDK(o: any): o is _63.QueryDenomTracesResponseSDKType;
                    isAmino(o: any): o is _63.QueryDenomTracesResponseAmino;
                    encode(message: _63.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.QueryDenomTracesResponse;
                    fromJSON(object: any): _63.QueryDenomTracesResponse;
                    toJSON(message: _63.QueryDenomTracesResponse): import("..").JsonSafe<_63.QueryDenomTracesResponse>;
                    fromPartial(object: Partial<_63.QueryDenomTracesResponse>): _63.QueryDenomTracesResponse;
                    fromAmino(object: _63.QueryDenomTracesResponseAmino): _63.QueryDenomTracesResponse;
                    toAmino(message: _63.QueryDenomTracesResponse): _63.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _63.QueryDenomTracesResponseAminoMsg): _63.QueryDenomTracesResponse;
                    toAminoMsg(message: _63.QueryDenomTracesResponse): _63.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryDenomTracesResponseProtoMsg): _63.QueryDenomTracesResponse;
                    toProto(message: _63.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryDenomTracesResponse): _63.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.QueryParamsRequest;
                    isSDK(o: any): o is _63.QueryParamsRequestSDKType;
                    isAmino(o: any): o is _63.QueryParamsRequestAmino;
                    encode(_: _63.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.QueryParamsRequest;
                    fromJSON(_: any): _63.QueryParamsRequest;
                    toJSON(_: _63.QueryParamsRequest): import("..").JsonSafe<_63.QueryParamsRequest>;
                    fromPartial(_: Partial<_63.QueryParamsRequest>): _63.QueryParamsRequest;
                    fromAmino(_: _63.QueryParamsRequestAmino): _63.QueryParamsRequest;
                    toAmino(_: _63.QueryParamsRequest): _63.QueryParamsRequestAmino;
                    fromAminoMsg(object: _63.QueryParamsRequestAminoMsg): _63.QueryParamsRequest;
                    toAminoMsg(message: _63.QueryParamsRequest): _63.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _63.QueryParamsRequestProtoMsg): _63.QueryParamsRequest;
                    toProto(message: _63.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _63.QueryParamsRequest): _63.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.QueryParamsResponse;
                    isSDK(o: any): o is _63.QueryParamsResponseSDKType;
                    isAmino(o: any): o is _63.QueryParamsResponseAmino;
                    encode(message: _63.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.QueryParamsResponse;
                    fromJSON(object: any): _63.QueryParamsResponse;
                    toJSON(message: _63.QueryParamsResponse): import("..").JsonSafe<_63.QueryParamsResponse>;
                    fromPartial(object: Partial<_63.QueryParamsResponse>): _63.QueryParamsResponse;
                    fromAmino(object: _63.QueryParamsResponseAmino): _63.QueryParamsResponse;
                    toAmino(message: _63.QueryParamsResponse): _63.QueryParamsResponseAmino;
                    fromAminoMsg(object: _63.QueryParamsResponseAminoMsg): _63.QueryParamsResponse;
                    toAminoMsg(message: _63.QueryParamsResponse): _63.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _63.QueryParamsResponseProtoMsg): _63.QueryParamsResponse;
                    toProto(message: _63.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _63.QueryParamsResponse): _63.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.GenesisState;
                    isSDK(o: any): o is _62.GenesisStateSDKType;
                    isAmino(o: any): o is _62.GenesisStateAmino;
                    encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.GenesisState;
                    fromJSON(object: any): _62.GenesisState;
                    toJSON(message: _62.GenesisState): import("..").JsonSafe<_62.GenesisState>;
                    fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                    fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                    toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                    fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                    toAminoMsg(message: _62.GenesisState): _62.GenesisStateAminoMsg;
                    fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                    toProto(message: _62.GenesisState): Uint8Array;
                    toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.FungibleTokenPacketData;
                    isSDK(o: any): o is _66.FungibleTokenPacketDataSDKType;
                    isAmino(o: any): o is _66.FungibleTokenPacketDataAmino;
                    encode(message: _66.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.FungibleTokenPacketData;
                    fromJSON(object: any): _66.FungibleTokenPacketData;
                    toJSON(message: _66.FungibleTokenPacketData): import("..").JsonSafe<_66.FungibleTokenPacketData>;
                    fromPartial(object: Partial<_66.FungibleTokenPacketData>): _66.FungibleTokenPacketData;
                    fromAmino(object: _66.FungibleTokenPacketDataAmino): _66.FungibleTokenPacketData;
                    toAmino(message: _66.FungibleTokenPacketData): _66.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _66.FungibleTokenPacketDataAminoMsg): _66.FungibleTokenPacketData;
                    toAminoMsg(message: _66.FungibleTokenPacketData): _66.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _66.FungibleTokenPacketDataProtoMsg): _66.FungibleTokenPacketData;
                    toProto(message: _66.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _66.FungibleTokenPacketData): _66.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _209.MsgClientImpl;
                QueryClientImpl: typeof _205.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _69.QueryChannelRequest): Promise<_69.QueryChannelResponse>;
                    channels(request?: _69.QueryChannelsRequest): Promise<_69.QueryChannelsResponse>;
                    connectionChannels(request: _69.QueryConnectionChannelsRequest): Promise<_69.QueryConnectionChannelsResponse>;
                    channelClientState(request: _69.QueryChannelClientStateRequest): Promise<_69.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _69.QueryChannelConsensusStateRequest): Promise<_69.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _69.QueryPacketCommitmentRequest): Promise<_69.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _69.QueryPacketCommitmentsRequest): Promise<_69.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _69.QueryPacketReceiptRequest): Promise<_69.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _69.QueryPacketAcknowledgementRequest): Promise<_69.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _69.QueryPacketAcknowledgementsRequest): Promise<_69.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _69.QueryUnreceivedPacketsRequest): Promise<_69.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _69.QueryUnreceivedAcksRequest): Promise<_69.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _69.QueryNextSequenceReceiveRequest): Promise<_69.QueryNextSequenceReceiveResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        recvPacket(value: _70.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeout(value: _70.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        acknowledgement(value: _70.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _70.MsgRecvPacket): {
                            typeUrl: string;
                            value: _70.MsgRecvPacket;
                        };
                        timeout(value: _70.MsgTimeout): {
                            typeUrl: string;
                            value: _70.MsgTimeout;
                        };
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _70.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _70.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _70.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channel: {
                                    state: _67.State;
                                    ordering: _67.Order;
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
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                previousChannelId: string;
                                channel: {
                                    state: _67.State;
                                    ordering: _67.Order;
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
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
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
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
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
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channelId: string;
                                signer: string;
                            };
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
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
                        recvPacket(value: _70.MsgRecvPacket): {
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
                        timeout(value: _70.MsgTimeout): {
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
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
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
                        acknowledgement(value: _70.MsgAcknowledgement): {
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
                            value: _70.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _70.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _70.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _70.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _70.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _70.MsgRecvPacket): {
                            typeUrl: string;
                            value: _70.MsgRecvPacket;
                        };
                        timeout(value: _70.MsgTimeout): {
                            typeUrl: string;
                            value: _70.MsgTimeout;
                        };
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _70.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _70.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _70.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _70.MsgChannelOpenInit) => _70.MsgChannelOpenInitAmino;
                        fromAmino: (object: _70.MsgChannelOpenInitAmino) => _70.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _70.MsgChannelOpenTry) => _70.MsgChannelOpenTryAmino;
                        fromAmino: (object: _70.MsgChannelOpenTryAmino) => _70.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _70.MsgChannelOpenAck) => _70.MsgChannelOpenAckAmino;
                        fromAmino: (object: _70.MsgChannelOpenAckAmino) => _70.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _70.MsgChannelOpenConfirm) => _70.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _70.MsgChannelOpenConfirmAmino) => _70.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _70.MsgChannelCloseInit) => _70.MsgChannelCloseInitAmino;
                        fromAmino: (object: _70.MsgChannelCloseInitAmino) => _70.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _70.MsgChannelCloseConfirm) => _70.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _70.MsgChannelCloseConfirmAmino) => _70.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _70.MsgRecvPacket) => _70.MsgRecvPacketAmino;
                        fromAmino: (object: _70.MsgRecvPacketAmino) => _70.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _70.MsgTimeout) => _70.MsgTimeoutAmino;
                        fromAmino: (object: _70.MsgTimeoutAmino) => _70.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _70.MsgTimeoutOnClose) => _70.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _70.MsgTimeoutOnCloseAmino) => _70.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _70.MsgAcknowledgement) => _70.MsgAcknowledgementAmino;
                        fromAmino: (object: _70.MsgAcknowledgementAmino) => _70.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenInit;
                    isSDK(o: any): o is _70.MsgChannelOpenInitSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenInitAmino;
                    encode(message: _70.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenInit;
                    fromJSON(object: any): _70.MsgChannelOpenInit;
                    toJSON(message: _70.MsgChannelOpenInit): import("..").JsonSafe<_70.MsgChannelOpenInit>;
                    fromPartial(object: Partial<_70.MsgChannelOpenInit>): _70.MsgChannelOpenInit;
                    fromAmino(object: _70.MsgChannelOpenInitAmino): _70.MsgChannelOpenInit;
                    toAmino(message: _70.MsgChannelOpenInit): _70.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenInitAminoMsg): _70.MsgChannelOpenInit;
                    toAminoMsg(message: _70.MsgChannelOpenInit): _70.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenInitProtoMsg): _70.MsgChannelOpenInit;
                    toProto(message: _70.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenInit): _70.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenInitResponse;
                    isSDK(o: any): o is _70.MsgChannelOpenInitResponseSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenInitResponseAmino;
                    encode(_: _70.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _70.MsgChannelOpenInitResponse;
                    toJSON(_: _70.MsgChannelOpenInitResponse): import("..").JsonSafe<_70.MsgChannelOpenInitResponse>;
                    fromPartial(_: Partial<_70.MsgChannelOpenInitResponse>): _70.MsgChannelOpenInitResponse;
                    fromAmino(_: _70.MsgChannelOpenInitResponseAmino): _70.MsgChannelOpenInitResponse;
                    toAmino(_: _70.MsgChannelOpenInitResponse): _70.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenInitResponseAminoMsg): _70.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _70.MsgChannelOpenInitResponse): _70.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenInitResponseProtoMsg): _70.MsgChannelOpenInitResponse;
                    toProto(message: _70.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenInitResponse): _70.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenTry;
                    isSDK(o: any): o is _70.MsgChannelOpenTrySDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenTryAmino;
                    encode(message: _70.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenTry;
                    fromJSON(object: any): _70.MsgChannelOpenTry;
                    toJSON(message: _70.MsgChannelOpenTry): import("..").JsonSafe<_70.MsgChannelOpenTry>;
                    fromPartial(object: Partial<_70.MsgChannelOpenTry>): _70.MsgChannelOpenTry;
                    fromAmino(object: _70.MsgChannelOpenTryAmino): _70.MsgChannelOpenTry;
                    toAmino(message: _70.MsgChannelOpenTry): _70.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenTryAminoMsg): _70.MsgChannelOpenTry;
                    toAminoMsg(message: _70.MsgChannelOpenTry): _70.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenTryProtoMsg): _70.MsgChannelOpenTry;
                    toProto(message: _70.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenTry): _70.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenTryResponse;
                    isSDK(o: any): o is _70.MsgChannelOpenTryResponseSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenTryResponseAmino;
                    encode(_: _70.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _70.MsgChannelOpenTryResponse;
                    toJSON(_: _70.MsgChannelOpenTryResponse): import("..").JsonSafe<_70.MsgChannelOpenTryResponse>;
                    fromPartial(_: Partial<_70.MsgChannelOpenTryResponse>): _70.MsgChannelOpenTryResponse;
                    fromAmino(_: _70.MsgChannelOpenTryResponseAmino): _70.MsgChannelOpenTryResponse;
                    toAmino(_: _70.MsgChannelOpenTryResponse): _70.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenTryResponseAminoMsg): _70.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _70.MsgChannelOpenTryResponse): _70.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenTryResponseProtoMsg): _70.MsgChannelOpenTryResponse;
                    toProto(message: _70.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenTryResponse): _70.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenAck;
                    isSDK(o: any): o is _70.MsgChannelOpenAckSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenAckAmino;
                    encode(message: _70.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenAck;
                    fromJSON(object: any): _70.MsgChannelOpenAck;
                    toJSON(message: _70.MsgChannelOpenAck): import("..").JsonSafe<_70.MsgChannelOpenAck>;
                    fromPartial(object: Partial<_70.MsgChannelOpenAck>): _70.MsgChannelOpenAck;
                    fromAmino(object: _70.MsgChannelOpenAckAmino): _70.MsgChannelOpenAck;
                    toAmino(message: _70.MsgChannelOpenAck): _70.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenAckAminoMsg): _70.MsgChannelOpenAck;
                    toAminoMsg(message: _70.MsgChannelOpenAck): _70.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenAckProtoMsg): _70.MsgChannelOpenAck;
                    toProto(message: _70.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenAck): _70.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenAckResponse;
                    isSDK(o: any): o is _70.MsgChannelOpenAckResponseSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenAckResponseAmino;
                    encode(_: _70.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _70.MsgChannelOpenAckResponse;
                    toJSON(_: _70.MsgChannelOpenAckResponse): import("..").JsonSafe<_70.MsgChannelOpenAckResponse>;
                    fromPartial(_: Partial<_70.MsgChannelOpenAckResponse>): _70.MsgChannelOpenAckResponse;
                    fromAmino(_: _70.MsgChannelOpenAckResponseAmino): _70.MsgChannelOpenAckResponse;
                    toAmino(_: _70.MsgChannelOpenAckResponse): _70.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenAckResponseAminoMsg): _70.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _70.MsgChannelOpenAckResponse): _70.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenAckResponseProtoMsg): _70.MsgChannelOpenAckResponse;
                    toProto(message: _70.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenAckResponse): _70.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenConfirm;
                    isSDK(o: any): o is _70.MsgChannelOpenConfirmSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenConfirmAmino;
                    encode(message: _70.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenConfirm;
                    fromJSON(object: any): _70.MsgChannelOpenConfirm;
                    toJSON(message: _70.MsgChannelOpenConfirm): import("..").JsonSafe<_70.MsgChannelOpenConfirm>;
                    fromPartial(object: Partial<_70.MsgChannelOpenConfirm>): _70.MsgChannelOpenConfirm;
                    fromAmino(object: _70.MsgChannelOpenConfirmAmino): _70.MsgChannelOpenConfirm;
                    toAmino(message: _70.MsgChannelOpenConfirm): _70.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenConfirmAminoMsg): _70.MsgChannelOpenConfirm;
                    toAminoMsg(message: _70.MsgChannelOpenConfirm): _70.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenConfirmProtoMsg): _70.MsgChannelOpenConfirm;
                    toProto(message: _70.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenConfirm): _70.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelOpenConfirmResponse;
                    isSDK(o: any): o is _70.MsgChannelOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _70.MsgChannelOpenConfirmResponseAmino;
                    encode(_: _70.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _70.MsgChannelOpenConfirmResponse;
                    toJSON(_: _70.MsgChannelOpenConfirmResponse): import("..").JsonSafe<_70.MsgChannelOpenConfirmResponse>;
                    fromPartial(_: Partial<_70.MsgChannelOpenConfirmResponse>): _70.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _70.MsgChannelOpenConfirmResponseAmino): _70.MsgChannelOpenConfirmResponse;
                    toAmino(_: _70.MsgChannelOpenConfirmResponse): _70.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _70.MsgChannelOpenConfirmResponseAminoMsg): _70.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _70.MsgChannelOpenConfirmResponse): _70.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelOpenConfirmResponseProtoMsg): _70.MsgChannelOpenConfirmResponse;
                    toProto(message: _70.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelOpenConfirmResponse): _70.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelCloseInit;
                    isSDK(o: any): o is _70.MsgChannelCloseInitSDKType;
                    isAmino(o: any): o is _70.MsgChannelCloseInitAmino;
                    encode(message: _70.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelCloseInit;
                    fromJSON(object: any): _70.MsgChannelCloseInit;
                    toJSON(message: _70.MsgChannelCloseInit): import("..").JsonSafe<_70.MsgChannelCloseInit>;
                    fromPartial(object: Partial<_70.MsgChannelCloseInit>): _70.MsgChannelCloseInit;
                    fromAmino(object: _70.MsgChannelCloseInitAmino): _70.MsgChannelCloseInit;
                    toAmino(message: _70.MsgChannelCloseInit): _70.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _70.MsgChannelCloseInitAminoMsg): _70.MsgChannelCloseInit;
                    toAminoMsg(message: _70.MsgChannelCloseInit): _70.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelCloseInitProtoMsg): _70.MsgChannelCloseInit;
                    toProto(message: _70.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelCloseInit): _70.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelCloseInitResponse;
                    isSDK(o: any): o is _70.MsgChannelCloseInitResponseSDKType;
                    isAmino(o: any): o is _70.MsgChannelCloseInitResponseAmino;
                    encode(_: _70.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _70.MsgChannelCloseInitResponse;
                    toJSON(_: _70.MsgChannelCloseInitResponse): import("..").JsonSafe<_70.MsgChannelCloseInitResponse>;
                    fromPartial(_: Partial<_70.MsgChannelCloseInitResponse>): _70.MsgChannelCloseInitResponse;
                    fromAmino(_: _70.MsgChannelCloseInitResponseAmino): _70.MsgChannelCloseInitResponse;
                    toAmino(_: _70.MsgChannelCloseInitResponse): _70.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _70.MsgChannelCloseInitResponseAminoMsg): _70.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _70.MsgChannelCloseInitResponse): _70.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelCloseInitResponseProtoMsg): _70.MsgChannelCloseInitResponse;
                    toProto(message: _70.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelCloseInitResponse): _70.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelCloseConfirm;
                    isSDK(o: any): o is _70.MsgChannelCloseConfirmSDKType;
                    isAmino(o: any): o is _70.MsgChannelCloseConfirmAmino;
                    encode(message: _70.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelCloseConfirm;
                    fromJSON(object: any): _70.MsgChannelCloseConfirm;
                    toJSON(message: _70.MsgChannelCloseConfirm): import("..").JsonSafe<_70.MsgChannelCloseConfirm>;
                    fromPartial(object: Partial<_70.MsgChannelCloseConfirm>): _70.MsgChannelCloseConfirm;
                    fromAmino(object: _70.MsgChannelCloseConfirmAmino): _70.MsgChannelCloseConfirm;
                    toAmino(message: _70.MsgChannelCloseConfirm): _70.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _70.MsgChannelCloseConfirmAminoMsg): _70.MsgChannelCloseConfirm;
                    toAminoMsg(message: _70.MsgChannelCloseConfirm): _70.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelCloseConfirmProtoMsg): _70.MsgChannelCloseConfirm;
                    toProto(message: _70.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelCloseConfirm): _70.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgChannelCloseConfirmResponse;
                    isSDK(o: any): o is _70.MsgChannelCloseConfirmResponseSDKType;
                    isAmino(o: any): o is _70.MsgChannelCloseConfirmResponseAmino;
                    encode(_: _70.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _70.MsgChannelCloseConfirmResponse;
                    toJSON(_: _70.MsgChannelCloseConfirmResponse): import("..").JsonSafe<_70.MsgChannelCloseConfirmResponse>;
                    fromPartial(_: Partial<_70.MsgChannelCloseConfirmResponse>): _70.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _70.MsgChannelCloseConfirmResponseAmino): _70.MsgChannelCloseConfirmResponse;
                    toAmino(_: _70.MsgChannelCloseConfirmResponse): _70.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _70.MsgChannelCloseConfirmResponseAminoMsg): _70.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _70.MsgChannelCloseConfirmResponse): _70.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgChannelCloseConfirmResponseProtoMsg): _70.MsgChannelCloseConfirmResponse;
                    toProto(message: _70.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgChannelCloseConfirmResponse): _70.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgRecvPacket;
                    isSDK(o: any): o is _70.MsgRecvPacketSDKType;
                    isAmino(o: any): o is _70.MsgRecvPacketAmino;
                    encode(message: _70.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgRecvPacket;
                    fromJSON(object: any): _70.MsgRecvPacket;
                    toJSON(message: _70.MsgRecvPacket): import("..").JsonSafe<_70.MsgRecvPacket>;
                    fromPartial(object: Partial<_70.MsgRecvPacket>): _70.MsgRecvPacket;
                    fromAmino(object: _70.MsgRecvPacketAmino): _70.MsgRecvPacket;
                    toAmino(message: _70.MsgRecvPacket): _70.MsgRecvPacketAmino;
                    fromAminoMsg(object: _70.MsgRecvPacketAminoMsg): _70.MsgRecvPacket;
                    toAminoMsg(message: _70.MsgRecvPacket): _70.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _70.MsgRecvPacketProtoMsg): _70.MsgRecvPacket;
                    toProto(message: _70.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _70.MsgRecvPacket): _70.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgRecvPacketResponse;
                    isSDK(o: any): o is _70.MsgRecvPacketResponseSDKType;
                    isAmino(o: any): o is _70.MsgRecvPacketResponseAmino;
                    encode(_: _70.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgRecvPacketResponse;
                    fromJSON(_: any): _70.MsgRecvPacketResponse;
                    toJSON(_: _70.MsgRecvPacketResponse): import("..").JsonSafe<_70.MsgRecvPacketResponse>;
                    fromPartial(_: Partial<_70.MsgRecvPacketResponse>): _70.MsgRecvPacketResponse;
                    fromAmino(_: _70.MsgRecvPacketResponseAmino): _70.MsgRecvPacketResponse;
                    toAmino(_: _70.MsgRecvPacketResponse): _70.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _70.MsgRecvPacketResponseAminoMsg): _70.MsgRecvPacketResponse;
                    toAminoMsg(message: _70.MsgRecvPacketResponse): _70.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgRecvPacketResponseProtoMsg): _70.MsgRecvPacketResponse;
                    toProto(message: _70.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgRecvPacketResponse): _70.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgTimeout;
                    isSDK(o: any): o is _70.MsgTimeoutSDKType;
                    isAmino(o: any): o is _70.MsgTimeoutAmino;
                    encode(message: _70.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgTimeout;
                    fromJSON(object: any): _70.MsgTimeout;
                    toJSON(message: _70.MsgTimeout): import("..").JsonSafe<_70.MsgTimeout>;
                    fromPartial(object: Partial<_70.MsgTimeout>): _70.MsgTimeout;
                    fromAmino(object: _70.MsgTimeoutAmino): _70.MsgTimeout;
                    toAmino(message: _70.MsgTimeout): _70.MsgTimeoutAmino;
                    fromAminoMsg(object: _70.MsgTimeoutAminoMsg): _70.MsgTimeout;
                    toAminoMsg(message: _70.MsgTimeout): _70.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _70.MsgTimeoutProtoMsg): _70.MsgTimeout;
                    toProto(message: _70.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _70.MsgTimeout): _70.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgTimeoutResponse;
                    isSDK(o: any): o is _70.MsgTimeoutResponseSDKType;
                    isAmino(o: any): o is _70.MsgTimeoutResponseAmino;
                    encode(_: _70.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgTimeoutResponse;
                    fromJSON(_: any): _70.MsgTimeoutResponse;
                    toJSON(_: _70.MsgTimeoutResponse): import("..").JsonSafe<_70.MsgTimeoutResponse>;
                    fromPartial(_: Partial<_70.MsgTimeoutResponse>): _70.MsgTimeoutResponse;
                    fromAmino(_: _70.MsgTimeoutResponseAmino): _70.MsgTimeoutResponse;
                    toAmino(_: _70.MsgTimeoutResponse): _70.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _70.MsgTimeoutResponseAminoMsg): _70.MsgTimeoutResponse;
                    toAminoMsg(message: _70.MsgTimeoutResponse): _70.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgTimeoutResponseProtoMsg): _70.MsgTimeoutResponse;
                    toProto(message: _70.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgTimeoutResponse): _70.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgTimeoutOnClose;
                    isSDK(o: any): o is _70.MsgTimeoutOnCloseSDKType;
                    isAmino(o: any): o is _70.MsgTimeoutOnCloseAmino;
                    encode(message: _70.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgTimeoutOnClose;
                    fromJSON(object: any): _70.MsgTimeoutOnClose;
                    toJSON(message: _70.MsgTimeoutOnClose): import("..").JsonSafe<_70.MsgTimeoutOnClose>;
                    fromPartial(object: Partial<_70.MsgTimeoutOnClose>): _70.MsgTimeoutOnClose;
                    fromAmino(object: _70.MsgTimeoutOnCloseAmino): _70.MsgTimeoutOnClose;
                    toAmino(message: _70.MsgTimeoutOnClose): _70.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _70.MsgTimeoutOnCloseAminoMsg): _70.MsgTimeoutOnClose;
                    toAminoMsg(message: _70.MsgTimeoutOnClose): _70.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _70.MsgTimeoutOnCloseProtoMsg): _70.MsgTimeoutOnClose;
                    toProto(message: _70.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _70.MsgTimeoutOnClose): _70.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgTimeoutOnCloseResponse;
                    isSDK(o: any): o is _70.MsgTimeoutOnCloseResponseSDKType;
                    isAmino(o: any): o is _70.MsgTimeoutOnCloseResponseAmino;
                    encode(_: _70.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _70.MsgTimeoutOnCloseResponse;
                    toJSON(_: _70.MsgTimeoutOnCloseResponse): import("..").JsonSafe<_70.MsgTimeoutOnCloseResponse>;
                    fromPartial(_: Partial<_70.MsgTimeoutOnCloseResponse>): _70.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _70.MsgTimeoutOnCloseResponseAmino): _70.MsgTimeoutOnCloseResponse;
                    toAmino(_: _70.MsgTimeoutOnCloseResponse): _70.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _70.MsgTimeoutOnCloseResponseAminoMsg): _70.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _70.MsgTimeoutOnCloseResponse): _70.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgTimeoutOnCloseResponseProtoMsg): _70.MsgTimeoutOnCloseResponse;
                    toProto(message: _70.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgTimeoutOnCloseResponse): _70.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgAcknowledgement;
                    isSDK(o: any): o is _70.MsgAcknowledgementSDKType;
                    isAmino(o: any): o is _70.MsgAcknowledgementAmino;
                    encode(message: _70.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgAcknowledgement;
                    fromJSON(object: any): _70.MsgAcknowledgement;
                    toJSON(message: _70.MsgAcknowledgement): import("..").JsonSafe<_70.MsgAcknowledgement>;
                    fromPartial(object: Partial<_70.MsgAcknowledgement>): _70.MsgAcknowledgement;
                    fromAmino(object: _70.MsgAcknowledgementAmino): _70.MsgAcknowledgement;
                    toAmino(message: _70.MsgAcknowledgement): _70.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _70.MsgAcknowledgementAminoMsg): _70.MsgAcknowledgement;
                    toAminoMsg(message: _70.MsgAcknowledgement): _70.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _70.MsgAcknowledgementProtoMsg): _70.MsgAcknowledgement;
                    toProto(message: _70.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _70.MsgAcknowledgement): _70.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.MsgAcknowledgementResponse;
                    isSDK(o: any): o is _70.MsgAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _70.MsgAcknowledgementResponseAmino;
                    encode(_: _70.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.MsgAcknowledgementResponse;
                    fromJSON(_: any): _70.MsgAcknowledgementResponse;
                    toJSON(_: _70.MsgAcknowledgementResponse): import("..").JsonSafe<_70.MsgAcknowledgementResponse>;
                    fromPartial(_: Partial<_70.MsgAcknowledgementResponse>): _70.MsgAcknowledgementResponse;
                    fromAmino(_: _70.MsgAcknowledgementResponseAmino): _70.MsgAcknowledgementResponse;
                    toAmino(_: _70.MsgAcknowledgementResponse): _70.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _70.MsgAcknowledgementResponseAminoMsg): _70.MsgAcknowledgementResponse;
                    toAminoMsg(message: _70.MsgAcknowledgementResponse): _70.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _70.MsgAcknowledgementResponseProtoMsg): _70.MsgAcknowledgementResponse;
                    toProto(message: _70.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _70.MsgAcknowledgementResponse): _70.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelRequest;
                    isSDK(o: any): o is _69.QueryChannelRequestSDKType;
                    isAmino(o: any): o is _69.QueryChannelRequestAmino;
                    encode(message: _69.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelRequest;
                    fromJSON(object: any): _69.QueryChannelRequest;
                    toJSON(message: _69.QueryChannelRequest): import("..").JsonSafe<_69.QueryChannelRequest>;
                    fromPartial(object: Partial<_69.QueryChannelRequest>): _69.QueryChannelRequest;
                    fromAmino(object: _69.QueryChannelRequestAmino): _69.QueryChannelRequest;
                    toAmino(message: _69.QueryChannelRequest): _69.QueryChannelRequestAmino;
                    fromAminoMsg(object: _69.QueryChannelRequestAminoMsg): _69.QueryChannelRequest;
                    toAminoMsg(message: _69.QueryChannelRequest): _69.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelRequestProtoMsg): _69.QueryChannelRequest;
                    toProto(message: _69.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelRequest): _69.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelResponse;
                    isSDK(o: any): o is _69.QueryChannelResponseSDKType;
                    isAmino(o: any): o is _69.QueryChannelResponseAmino;
                    encode(message: _69.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelResponse;
                    fromJSON(object: any): _69.QueryChannelResponse;
                    toJSON(message: _69.QueryChannelResponse): import("..").JsonSafe<_69.QueryChannelResponse>;
                    fromPartial(object: Partial<_69.QueryChannelResponse>): _69.QueryChannelResponse;
                    fromAmino(object: _69.QueryChannelResponseAmino): _69.QueryChannelResponse;
                    toAmino(message: _69.QueryChannelResponse): _69.QueryChannelResponseAmino;
                    fromAminoMsg(object: _69.QueryChannelResponseAminoMsg): _69.QueryChannelResponse;
                    toAminoMsg(message: _69.QueryChannelResponse): _69.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelResponseProtoMsg): _69.QueryChannelResponse;
                    toProto(message: _69.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelResponse): _69.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelsRequest;
                    isSDK(o: any): o is _69.QueryChannelsRequestSDKType;
                    isAmino(o: any): o is _69.QueryChannelsRequestAmino;
                    encode(message: _69.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelsRequest;
                    fromJSON(object: any): _69.QueryChannelsRequest;
                    toJSON(message: _69.QueryChannelsRequest): import("..").JsonSafe<_69.QueryChannelsRequest>;
                    fromPartial(object: Partial<_69.QueryChannelsRequest>): _69.QueryChannelsRequest;
                    fromAmino(object: _69.QueryChannelsRequestAmino): _69.QueryChannelsRequest;
                    toAmino(message: _69.QueryChannelsRequest): _69.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _69.QueryChannelsRequestAminoMsg): _69.QueryChannelsRequest;
                    toAminoMsg(message: _69.QueryChannelsRequest): _69.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelsRequestProtoMsg): _69.QueryChannelsRequest;
                    toProto(message: _69.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelsRequest): _69.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelsResponse;
                    isSDK(o: any): o is _69.QueryChannelsResponseSDKType;
                    isAmino(o: any): o is _69.QueryChannelsResponseAmino;
                    encode(message: _69.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelsResponse;
                    fromJSON(object: any): _69.QueryChannelsResponse;
                    toJSON(message: _69.QueryChannelsResponse): import("..").JsonSafe<_69.QueryChannelsResponse>;
                    fromPartial(object: Partial<_69.QueryChannelsResponse>): _69.QueryChannelsResponse;
                    fromAmino(object: _69.QueryChannelsResponseAmino): _69.QueryChannelsResponse;
                    toAmino(message: _69.QueryChannelsResponse): _69.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _69.QueryChannelsResponseAminoMsg): _69.QueryChannelsResponse;
                    toAminoMsg(message: _69.QueryChannelsResponse): _69.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelsResponseProtoMsg): _69.QueryChannelsResponse;
                    toProto(message: _69.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelsResponse): _69.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryConnectionChannelsRequest;
                    isSDK(o: any): o is _69.QueryConnectionChannelsRequestSDKType;
                    isAmino(o: any): o is _69.QueryConnectionChannelsRequestAmino;
                    encode(message: _69.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _69.QueryConnectionChannelsRequest;
                    toJSON(message: _69.QueryConnectionChannelsRequest): import("..").JsonSafe<_69.QueryConnectionChannelsRequest>;
                    fromPartial(object: Partial<_69.QueryConnectionChannelsRequest>): _69.QueryConnectionChannelsRequest;
                    fromAmino(object: _69.QueryConnectionChannelsRequestAmino): _69.QueryConnectionChannelsRequest;
                    toAmino(message: _69.QueryConnectionChannelsRequest): _69.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _69.QueryConnectionChannelsRequestAminoMsg): _69.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _69.QueryConnectionChannelsRequest): _69.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionChannelsRequestProtoMsg): _69.QueryConnectionChannelsRequest;
                    toProto(message: _69.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionChannelsRequest): _69.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryConnectionChannelsResponse;
                    isSDK(o: any): o is _69.QueryConnectionChannelsResponseSDKType;
                    isAmino(o: any): o is _69.QueryConnectionChannelsResponseAmino;
                    encode(message: _69.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _69.QueryConnectionChannelsResponse;
                    toJSON(message: _69.QueryConnectionChannelsResponse): import("..").JsonSafe<_69.QueryConnectionChannelsResponse>;
                    fromPartial(object: Partial<_69.QueryConnectionChannelsResponse>): _69.QueryConnectionChannelsResponse;
                    fromAmino(object: _69.QueryConnectionChannelsResponseAmino): _69.QueryConnectionChannelsResponse;
                    toAmino(message: _69.QueryConnectionChannelsResponse): _69.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _69.QueryConnectionChannelsResponseAminoMsg): _69.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _69.QueryConnectionChannelsResponse): _69.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryConnectionChannelsResponseProtoMsg): _69.QueryConnectionChannelsResponse;
                    toProto(message: _69.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryConnectionChannelsResponse): _69.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelClientStateRequest;
                    isSDK(o: any): o is _69.QueryChannelClientStateRequestSDKType;
                    isAmino(o: any): o is _69.QueryChannelClientStateRequestAmino;
                    encode(message: _69.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelClientStateRequest;
                    fromJSON(object: any): _69.QueryChannelClientStateRequest;
                    toJSON(message: _69.QueryChannelClientStateRequest): import("..").JsonSafe<_69.QueryChannelClientStateRequest>;
                    fromPartial(object: Partial<_69.QueryChannelClientStateRequest>): _69.QueryChannelClientStateRequest;
                    fromAmino(object: _69.QueryChannelClientStateRequestAmino): _69.QueryChannelClientStateRequest;
                    toAmino(message: _69.QueryChannelClientStateRequest): _69.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _69.QueryChannelClientStateRequestAminoMsg): _69.QueryChannelClientStateRequest;
                    toAminoMsg(message: _69.QueryChannelClientStateRequest): _69.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelClientStateRequestProtoMsg): _69.QueryChannelClientStateRequest;
                    toProto(message: _69.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelClientStateRequest): _69.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelClientStateResponse;
                    isSDK(o: any): o is _69.QueryChannelClientStateResponseSDKType;
                    isAmino(o: any): o is _69.QueryChannelClientStateResponseAmino;
                    encode(message: _69.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelClientStateResponse;
                    fromJSON(object: any): _69.QueryChannelClientStateResponse;
                    toJSON(message: _69.QueryChannelClientStateResponse): import("..").JsonSafe<_69.QueryChannelClientStateResponse>;
                    fromPartial(object: Partial<_69.QueryChannelClientStateResponse>): _69.QueryChannelClientStateResponse;
                    fromAmino(object: _69.QueryChannelClientStateResponseAmino): _69.QueryChannelClientStateResponse;
                    toAmino(message: _69.QueryChannelClientStateResponse): _69.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _69.QueryChannelClientStateResponseAminoMsg): _69.QueryChannelClientStateResponse;
                    toAminoMsg(message: _69.QueryChannelClientStateResponse): _69.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelClientStateResponseProtoMsg): _69.QueryChannelClientStateResponse;
                    toProto(message: _69.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelClientStateResponse): _69.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelConsensusStateRequest;
                    isSDK(o: any): o is _69.QueryChannelConsensusStateRequestSDKType;
                    isAmino(o: any): o is _69.QueryChannelConsensusStateRequestAmino;
                    encode(message: _69.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _69.QueryChannelConsensusStateRequest;
                    toJSON(message: _69.QueryChannelConsensusStateRequest): import("..").JsonSafe<_69.QueryChannelConsensusStateRequest>;
                    fromPartial(object: Partial<_69.QueryChannelConsensusStateRequest>): _69.QueryChannelConsensusStateRequest;
                    fromAmino(object: _69.QueryChannelConsensusStateRequestAmino): _69.QueryChannelConsensusStateRequest;
                    toAmino(message: _69.QueryChannelConsensusStateRequest): _69.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _69.QueryChannelConsensusStateRequestAminoMsg): _69.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _69.QueryChannelConsensusStateRequest): _69.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelConsensusStateRequestProtoMsg): _69.QueryChannelConsensusStateRequest;
                    toProto(message: _69.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelConsensusStateRequest): _69.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryChannelConsensusStateResponse;
                    isSDK(o: any): o is _69.QueryChannelConsensusStateResponseSDKType;
                    isAmino(o: any): o is _69.QueryChannelConsensusStateResponseAmino;
                    encode(message: _69.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _69.QueryChannelConsensusStateResponse;
                    toJSON(message: _69.QueryChannelConsensusStateResponse): import("..").JsonSafe<_69.QueryChannelConsensusStateResponse>;
                    fromPartial(object: Partial<_69.QueryChannelConsensusStateResponse>): _69.QueryChannelConsensusStateResponse;
                    fromAmino(object: _69.QueryChannelConsensusStateResponseAmino): _69.QueryChannelConsensusStateResponse;
                    toAmino(message: _69.QueryChannelConsensusStateResponse): _69.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _69.QueryChannelConsensusStateResponseAminoMsg): _69.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _69.QueryChannelConsensusStateResponse): _69.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryChannelConsensusStateResponseProtoMsg): _69.QueryChannelConsensusStateResponse;
                    toProto(message: _69.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryChannelConsensusStateResponse): _69.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketCommitmentRequest;
                    isSDK(o: any): o is _69.QueryPacketCommitmentRequestSDKType;
                    isAmino(o: any): o is _69.QueryPacketCommitmentRequestAmino;
                    encode(message: _69.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _69.QueryPacketCommitmentRequest;
                    toJSON(message: _69.QueryPacketCommitmentRequest): import("..").JsonSafe<_69.QueryPacketCommitmentRequest>;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentRequest>): _69.QueryPacketCommitmentRequest;
                    fromAmino(object: _69.QueryPacketCommitmentRequestAmino): _69.QueryPacketCommitmentRequest;
                    toAmino(message: _69.QueryPacketCommitmentRequest): _69.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _69.QueryPacketCommitmentRequestAminoMsg): _69.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _69.QueryPacketCommitmentRequest): _69.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketCommitmentRequestProtoMsg): _69.QueryPacketCommitmentRequest;
                    toProto(message: _69.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketCommitmentRequest): _69.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketCommitmentResponse;
                    isSDK(o: any): o is _69.QueryPacketCommitmentResponseSDKType;
                    isAmino(o: any): o is _69.QueryPacketCommitmentResponseAmino;
                    encode(message: _69.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _69.QueryPacketCommitmentResponse;
                    toJSON(message: _69.QueryPacketCommitmentResponse): import("..").JsonSafe<_69.QueryPacketCommitmentResponse>;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentResponse>): _69.QueryPacketCommitmentResponse;
                    fromAmino(object: _69.QueryPacketCommitmentResponseAmino): _69.QueryPacketCommitmentResponse;
                    toAmino(message: _69.QueryPacketCommitmentResponse): _69.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _69.QueryPacketCommitmentResponseAminoMsg): _69.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _69.QueryPacketCommitmentResponse): _69.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketCommitmentResponseProtoMsg): _69.QueryPacketCommitmentResponse;
                    toProto(message: _69.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketCommitmentResponse): _69.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketCommitmentsRequest;
                    isSDK(o: any): o is _69.QueryPacketCommitmentsRequestSDKType;
                    isAmino(o: any): o is _69.QueryPacketCommitmentsRequestAmino;
                    encode(message: _69.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _69.QueryPacketCommitmentsRequest;
                    toJSON(message: _69.QueryPacketCommitmentsRequest): import("..").JsonSafe<_69.QueryPacketCommitmentsRequest>;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentsRequest>): _69.QueryPacketCommitmentsRequest;
                    fromAmino(object: _69.QueryPacketCommitmentsRequestAmino): _69.QueryPacketCommitmentsRequest;
                    toAmino(message: _69.QueryPacketCommitmentsRequest): _69.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _69.QueryPacketCommitmentsRequestAminoMsg): _69.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _69.QueryPacketCommitmentsRequest): _69.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketCommitmentsRequestProtoMsg): _69.QueryPacketCommitmentsRequest;
                    toProto(message: _69.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketCommitmentsRequest): _69.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketCommitmentsResponse;
                    isSDK(o: any): o is _69.QueryPacketCommitmentsResponseSDKType;
                    isAmino(o: any): o is _69.QueryPacketCommitmentsResponseAmino;
                    encode(message: _69.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _69.QueryPacketCommitmentsResponse;
                    toJSON(message: _69.QueryPacketCommitmentsResponse): import("..").JsonSafe<_69.QueryPacketCommitmentsResponse>;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentsResponse>): _69.QueryPacketCommitmentsResponse;
                    fromAmino(object: _69.QueryPacketCommitmentsResponseAmino): _69.QueryPacketCommitmentsResponse;
                    toAmino(message: _69.QueryPacketCommitmentsResponse): _69.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _69.QueryPacketCommitmentsResponseAminoMsg): _69.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _69.QueryPacketCommitmentsResponse): _69.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketCommitmentsResponseProtoMsg): _69.QueryPacketCommitmentsResponse;
                    toProto(message: _69.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketCommitmentsResponse): _69.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketReceiptRequest;
                    isSDK(o: any): o is _69.QueryPacketReceiptRequestSDKType;
                    isAmino(o: any): o is _69.QueryPacketReceiptRequestAmino;
                    encode(message: _69.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketReceiptRequest;
                    fromJSON(object: any): _69.QueryPacketReceiptRequest;
                    toJSON(message: _69.QueryPacketReceiptRequest): import("..").JsonSafe<_69.QueryPacketReceiptRequest>;
                    fromPartial(object: Partial<_69.QueryPacketReceiptRequest>): _69.QueryPacketReceiptRequest;
                    fromAmino(object: _69.QueryPacketReceiptRequestAmino): _69.QueryPacketReceiptRequest;
                    toAmino(message: _69.QueryPacketReceiptRequest): _69.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _69.QueryPacketReceiptRequestAminoMsg): _69.QueryPacketReceiptRequest;
                    toAminoMsg(message: _69.QueryPacketReceiptRequest): _69.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketReceiptRequestProtoMsg): _69.QueryPacketReceiptRequest;
                    toProto(message: _69.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketReceiptRequest): _69.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketReceiptResponse;
                    isSDK(o: any): o is _69.QueryPacketReceiptResponseSDKType;
                    isAmino(o: any): o is _69.QueryPacketReceiptResponseAmino;
                    encode(message: _69.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketReceiptResponse;
                    fromJSON(object: any): _69.QueryPacketReceiptResponse;
                    toJSON(message: _69.QueryPacketReceiptResponse): import("..").JsonSafe<_69.QueryPacketReceiptResponse>;
                    fromPartial(object: Partial<_69.QueryPacketReceiptResponse>): _69.QueryPacketReceiptResponse;
                    fromAmino(object: _69.QueryPacketReceiptResponseAmino): _69.QueryPacketReceiptResponse;
                    toAmino(message: _69.QueryPacketReceiptResponse): _69.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _69.QueryPacketReceiptResponseAminoMsg): _69.QueryPacketReceiptResponse;
                    toAminoMsg(message: _69.QueryPacketReceiptResponse): _69.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketReceiptResponseProtoMsg): _69.QueryPacketReceiptResponse;
                    toProto(message: _69.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketReceiptResponse): _69.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketAcknowledgementRequest;
                    isSDK(o: any): o is _69.QueryPacketAcknowledgementRequestSDKType;
                    isAmino(o: any): o is _69.QueryPacketAcknowledgementRequestAmino;
                    encode(message: _69.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _69.QueryPacketAcknowledgementRequest;
                    toJSON(message: _69.QueryPacketAcknowledgementRequest): import("..").JsonSafe<_69.QueryPacketAcknowledgementRequest>;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementRequest>): _69.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _69.QueryPacketAcknowledgementRequestAmino): _69.QueryPacketAcknowledgementRequest;
                    toAmino(message: _69.QueryPacketAcknowledgementRequest): _69.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _69.QueryPacketAcknowledgementRequestAminoMsg): _69.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _69.QueryPacketAcknowledgementRequest): _69.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketAcknowledgementRequestProtoMsg): _69.QueryPacketAcknowledgementRequest;
                    toProto(message: _69.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketAcknowledgementRequest): _69.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketAcknowledgementResponse;
                    isSDK(o: any): o is _69.QueryPacketAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _69.QueryPacketAcknowledgementResponseAmino;
                    encode(message: _69.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _69.QueryPacketAcknowledgementResponse;
                    toJSON(message: _69.QueryPacketAcknowledgementResponse): import("..").JsonSafe<_69.QueryPacketAcknowledgementResponse>;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementResponse>): _69.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _69.QueryPacketAcknowledgementResponseAmino): _69.QueryPacketAcknowledgementResponse;
                    toAmino(message: _69.QueryPacketAcknowledgementResponse): _69.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _69.QueryPacketAcknowledgementResponseAminoMsg): _69.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _69.QueryPacketAcknowledgementResponse): _69.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketAcknowledgementResponseProtoMsg): _69.QueryPacketAcknowledgementResponse;
                    toProto(message: _69.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketAcknowledgementResponse): _69.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketAcknowledgementsRequest;
                    isSDK(o: any): o is _69.QueryPacketAcknowledgementsRequestSDKType;
                    isAmino(o: any): o is _69.QueryPacketAcknowledgementsRequestAmino;
                    encode(message: _69.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _69.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _69.QueryPacketAcknowledgementsRequest): import("..").JsonSafe<_69.QueryPacketAcknowledgementsRequest>;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementsRequest>): _69.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _69.QueryPacketAcknowledgementsRequestAmino): _69.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _69.QueryPacketAcknowledgementsRequest): _69.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _69.QueryPacketAcknowledgementsRequestAminoMsg): _69.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _69.QueryPacketAcknowledgementsRequest): _69.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketAcknowledgementsRequestProtoMsg): _69.QueryPacketAcknowledgementsRequest;
                    toProto(message: _69.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketAcknowledgementsRequest): _69.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryPacketAcknowledgementsResponse;
                    isSDK(o: any): o is _69.QueryPacketAcknowledgementsResponseSDKType;
                    isAmino(o: any): o is _69.QueryPacketAcknowledgementsResponseAmino;
                    encode(message: _69.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _69.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _69.QueryPacketAcknowledgementsResponse): import("..").JsonSafe<_69.QueryPacketAcknowledgementsResponse>;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementsResponse>): _69.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _69.QueryPacketAcknowledgementsResponseAmino): _69.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _69.QueryPacketAcknowledgementsResponse): _69.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _69.QueryPacketAcknowledgementsResponseAminoMsg): _69.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _69.QueryPacketAcknowledgementsResponse): _69.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryPacketAcknowledgementsResponseProtoMsg): _69.QueryPacketAcknowledgementsResponse;
                    toProto(message: _69.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryPacketAcknowledgementsResponse): _69.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUnreceivedPacketsRequest;
                    isSDK(o: any): o is _69.QueryUnreceivedPacketsRequestSDKType;
                    isAmino(o: any): o is _69.QueryUnreceivedPacketsRequestAmino;
                    encode(message: _69.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _69.QueryUnreceivedPacketsRequest;
                    toJSON(message: _69.QueryUnreceivedPacketsRequest): import("..").JsonSafe<_69.QueryUnreceivedPacketsRequest>;
                    fromPartial(object: Partial<_69.QueryUnreceivedPacketsRequest>): _69.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _69.QueryUnreceivedPacketsRequestAmino): _69.QueryUnreceivedPacketsRequest;
                    toAmino(message: _69.QueryUnreceivedPacketsRequest): _69.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _69.QueryUnreceivedPacketsRequestAminoMsg): _69.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _69.QueryUnreceivedPacketsRequest): _69.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryUnreceivedPacketsRequestProtoMsg): _69.QueryUnreceivedPacketsRequest;
                    toProto(message: _69.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryUnreceivedPacketsRequest): _69.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUnreceivedPacketsResponse;
                    isSDK(o: any): o is _69.QueryUnreceivedPacketsResponseSDKType;
                    isAmino(o: any): o is _69.QueryUnreceivedPacketsResponseAmino;
                    encode(message: _69.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _69.QueryUnreceivedPacketsResponse;
                    toJSON(message: _69.QueryUnreceivedPacketsResponse): import("..").JsonSafe<_69.QueryUnreceivedPacketsResponse>;
                    fromPartial(object: Partial<_69.QueryUnreceivedPacketsResponse>): _69.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _69.QueryUnreceivedPacketsResponseAmino): _69.QueryUnreceivedPacketsResponse;
                    toAmino(message: _69.QueryUnreceivedPacketsResponse): _69.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _69.QueryUnreceivedPacketsResponseAminoMsg): _69.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _69.QueryUnreceivedPacketsResponse): _69.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryUnreceivedPacketsResponseProtoMsg): _69.QueryUnreceivedPacketsResponse;
                    toProto(message: _69.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryUnreceivedPacketsResponse): _69.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUnreceivedAcksRequest;
                    isSDK(o: any): o is _69.QueryUnreceivedAcksRequestSDKType;
                    isAmino(o: any): o is _69.QueryUnreceivedAcksRequestAmino;
                    encode(message: _69.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _69.QueryUnreceivedAcksRequest;
                    toJSON(message: _69.QueryUnreceivedAcksRequest): import("..").JsonSafe<_69.QueryUnreceivedAcksRequest>;
                    fromPartial(object: Partial<_69.QueryUnreceivedAcksRequest>): _69.QueryUnreceivedAcksRequest;
                    fromAmino(object: _69.QueryUnreceivedAcksRequestAmino): _69.QueryUnreceivedAcksRequest;
                    toAmino(message: _69.QueryUnreceivedAcksRequest): _69.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _69.QueryUnreceivedAcksRequestAminoMsg): _69.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _69.QueryUnreceivedAcksRequest): _69.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryUnreceivedAcksRequestProtoMsg): _69.QueryUnreceivedAcksRequest;
                    toProto(message: _69.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryUnreceivedAcksRequest): _69.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryUnreceivedAcksResponse;
                    isSDK(o: any): o is _69.QueryUnreceivedAcksResponseSDKType;
                    isAmino(o: any): o is _69.QueryUnreceivedAcksResponseAmino;
                    encode(message: _69.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _69.QueryUnreceivedAcksResponse;
                    toJSON(message: _69.QueryUnreceivedAcksResponse): import("..").JsonSafe<_69.QueryUnreceivedAcksResponse>;
                    fromPartial(object: Partial<_69.QueryUnreceivedAcksResponse>): _69.QueryUnreceivedAcksResponse;
                    fromAmino(object: _69.QueryUnreceivedAcksResponseAmino): _69.QueryUnreceivedAcksResponse;
                    toAmino(message: _69.QueryUnreceivedAcksResponse): _69.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _69.QueryUnreceivedAcksResponseAminoMsg): _69.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _69.QueryUnreceivedAcksResponse): _69.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryUnreceivedAcksResponseProtoMsg): _69.QueryUnreceivedAcksResponse;
                    toProto(message: _69.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryUnreceivedAcksResponse): _69.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryNextSequenceReceiveRequest;
                    isSDK(o: any): o is _69.QueryNextSequenceReceiveRequestSDKType;
                    isAmino(o: any): o is _69.QueryNextSequenceReceiveRequestAmino;
                    encode(message: _69.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _69.QueryNextSequenceReceiveRequest;
                    toJSON(message: _69.QueryNextSequenceReceiveRequest): import("..").JsonSafe<_69.QueryNextSequenceReceiveRequest>;
                    fromPartial(object: Partial<_69.QueryNextSequenceReceiveRequest>): _69.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _69.QueryNextSequenceReceiveRequestAmino): _69.QueryNextSequenceReceiveRequest;
                    toAmino(message: _69.QueryNextSequenceReceiveRequest): _69.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _69.QueryNextSequenceReceiveRequestAminoMsg): _69.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _69.QueryNextSequenceReceiveRequest): _69.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _69.QueryNextSequenceReceiveRequestProtoMsg): _69.QueryNextSequenceReceiveRequest;
                    toProto(message: _69.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _69.QueryNextSequenceReceiveRequest): _69.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.QueryNextSequenceReceiveResponse;
                    isSDK(o: any): o is _69.QueryNextSequenceReceiveResponseSDKType;
                    isAmino(o: any): o is _69.QueryNextSequenceReceiveResponseAmino;
                    encode(message: _69.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _69.QueryNextSequenceReceiveResponse;
                    toJSON(message: _69.QueryNextSequenceReceiveResponse): import("..").JsonSafe<_69.QueryNextSequenceReceiveResponse>;
                    fromPartial(object: Partial<_69.QueryNextSequenceReceiveResponse>): _69.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _69.QueryNextSequenceReceiveResponseAmino): _69.QueryNextSequenceReceiveResponse;
                    toAmino(message: _69.QueryNextSequenceReceiveResponse): _69.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _69.QueryNextSequenceReceiveResponseAminoMsg): _69.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _69.QueryNextSequenceReceiveResponse): _69.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _69.QueryNextSequenceReceiveResponseProtoMsg): _69.QueryNextSequenceReceiveResponse;
                    toProto(message: _69.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _69.QueryNextSequenceReceiveResponse): _69.QueryNextSequenceReceiveResponseProtoMsg;
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
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.PacketSequence;
                    isSDK(o: any): o is _68.PacketSequenceSDKType;
                    isAmino(o: any): o is _68.PacketSequenceAmino;
                    encode(message: _68.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.PacketSequence;
                    fromJSON(object: any): _68.PacketSequence;
                    toJSON(message: _68.PacketSequence): import("..").JsonSafe<_68.PacketSequence>;
                    fromPartial(object: Partial<_68.PacketSequence>): _68.PacketSequence;
                    fromAmino(object: _68.PacketSequenceAmino): _68.PacketSequence;
                    toAmino(message: _68.PacketSequence): _68.PacketSequenceAmino;
                    fromAminoMsg(object: _68.PacketSequenceAminoMsg): _68.PacketSequence;
                    toAminoMsg(message: _68.PacketSequence): _68.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _68.PacketSequenceProtoMsg): _68.PacketSequence;
                    toProto(message: _68.PacketSequence): Uint8Array;
                    toProtoMsg(message: _68.PacketSequence): _68.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _67.State;
                stateToJSON(object: _67.State): string;
                orderFromJSON(object: any): _67.Order;
                orderToJSON(object: _67.Order): string;
                State: typeof _67.State;
                StateSDKType: typeof _67.State;
                StateAmino: typeof _67.State;
                Order: typeof _67.Order;
                OrderSDKType: typeof _67.Order;
                OrderAmino: typeof _67.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.Channel;
                    isSDK(o: any): o is _67.ChannelSDKType;
                    isAmino(o: any): o is _67.ChannelAmino;
                    encode(message: _67.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Channel;
                    fromJSON(object: any): _67.Channel;
                    toJSON(message: _67.Channel): import("..").JsonSafe<_67.Channel>;
                    fromPartial(object: Partial<_67.Channel>): _67.Channel;
                    fromAmino(object: _67.ChannelAmino): _67.Channel;
                    toAmino(message: _67.Channel): _67.ChannelAmino;
                    fromAminoMsg(object: _67.ChannelAminoMsg): _67.Channel;
                    toAminoMsg(message: _67.Channel): _67.ChannelAminoMsg;
                    fromProtoMsg(message: _67.ChannelProtoMsg): _67.Channel;
                    toProto(message: _67.Channel): Uint8Array;
                    toProtoMsg(message: _67.Channel): _67.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.IdentifiedChannel;
                    isSDK(o: any): o is _67.IdentifiedChannelSDKType;
                    isAmino(o: any): o is _67.IdentifiedChannelAmino;
                    encode(message: _67.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.IdentifiedChannel;
                    fromJSON(object: any): _67.IdentifiedChannel;
                    toJSON(message: _67.IdentifiedChannel): import("..").JsonSafe<_67.IdentifiedChannel>;
                    fromPartial(object: Partial<_67.IdentifiedChannel>): _67.IdentifiedChannel;
                    fromAmino(object: _67.IdentifiedChannelAmino): _67.IdentifiedChannel;
                    toAmino(message: _67.IdentifiedChannel): _67.IdentifiedChannelAmino;
                    fromAminoMsg(object: _67.IdentifiedChannelAminoMsg): _67.IdentifiedChannel;
                    toAminoMsg(message: _67.IdentifiedChannel): _67.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _67.IdentifiedChannelProtoMsg): _67.IdentifiedChannel;
                    toProto(message: _67.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _67.IdentifiedChannel): _67.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.Counterparty;
                    isSDK(o: any): o is _67.CounterpartySDKType;
                    isAmino(o: any): o is _67.CounterpartyAmino;
                    encode(message: _67.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Counterparty;
                    fromJSON(object: any): _67.Counterparty;
                    toJSON(message: _67.Counterparty): import("..").JsonSafe<_67.Counterparty>;
                    fromPartial(object: Partial<_67.Counterparty>): _67.Counterparty;
                    fromAmino(object: _67.CounterpartyAmino): _67.Counterparty;
                    toAmino(message: _67.Counterparty): _67.CounterpartyAmino;
                    fromAminoMsg(object: _67.CounterpartyAminoMsg): _67.Counterparty;
                    toAminoMsg(message: _67.Counterparty): _67.CounterpartyAminoMsg;
                    fromProtoMsg(message: _67.CounterpartyProtoMsg): _67.Counterparty;
                    toProto(message: _67.Counterparty): Uint8Array;
                    toProtoMsg(message: _67.Counterparty): _67.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.Packet;
                    isSDK(o: any): o is _67.PacketSDKType;
                    isAmino(o: any): o is _67.PacketAmino;
                    encode(message: _67.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Packet;
                    fromJSON(object: any): _67.Packet;
                    toJSON(message: _67.Packet): import("..").JsonSafe<_67.Packet>;
                    fromPartial(object: Partial<_67.Packet>): _67.Packet;
                    fromAmino(object: _67.PacketAmino): _67.Packet;
                    toAmino(message: _67.Packet): _67.PacketAmino;
                    fromAminoMsg(object: _67.PacketAminoMsg): _67.Packet;
                    toAminoMsg(message: _67.Packet): _67.PacketAminoMsg;
                    fromProtoMsg(message: _67.PacketProtoMsg): _67.Packet;
                    toProto(message: _67.Packet): Uint8Array;
                    toProtoMsg(message: _67.Packet): _67.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.PacketState;
                    isSDK(o: any): o is _67.PacketStateSDKType;
                    isAmino(o: any): o is _67.PacketStateAmino;
                    encode(message: _67.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.PacketState;
                    fromJSON(object: any): _67.PacketState;
                    toJSON(message: _67.PacketState): import("..").JsonSafe<_67.PacketState>;
                    fromPartial(object: Partial<_67.PacketState>): _67.PacketState;
                    fromAmino(object: _67.PacketStateAmino): _67.PacketState;
                    toAmino(message: _67.PacketState): _67.PacketStateAmino;
                    fromAminoMsg(object: _67.PacketStateAminoMsg): _67.PacketState;
                    toAminoMsg(message: _67.PacketState): _67.PacketStateAminoMsg;
                    fromProtoMsg(message: _67.PacketStateProtoMsg): _67.PacketState;
                    toProto(message: _67.PacketState): Uint8Array;
                    toProtoMsg(message: _67.PacketState): _67.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.Acknowledgement;
                    isSDK(o: any): o is _67.AcknowledgementSDKType;
                    isAmino(o: any): o is _67.AcknowledgementAmino;
                    encode(message: _67.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Acknowledgement;
                    fromJSON(object: any): _67.Acknowledgement;
                    toJSON(message: _67.Acknowledgement): import("..").JsonSafe<_67.Acknowledgement>;
                    fromPartial(object: Partial<_67.Acknowledgement>): _67.Acknowledgement;
                    fromAmino(object: _67.AcknowledgementAmino): _67.Acknowledgement;
                    toAmino(message: _67.Acknowledgement): _67.AcknowledgementAmino;
                    fromAminoMsg(object: _67.AcknowledgementAminoMsg): _67.Acknowledgement;
                    toAminoMsg(message: _67.Acknowledgement): _67.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _67.AcknowledgementProtoMsg): _67.Acknowledgement;
                    toProto(message: _67.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _67.Acknowledgement): _67.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _210.MsgClientImpl;
                QueryClientImpl: typeof _206.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _73.QueryClientStateRequest): Promise<_73.QueryClientStateResponse>;
                    clientStates(request?: _73.QueryClientStatesRequest): Promise<_73.QueryClientStatesResponse>;
                    consensusState(request: _73.QueryConsensusStateRequest): Promise<_73.QueryConsensusStateResponse>;
                    consensusStates(request: _73.QueryConsensusStatesRequest): Promise<_73.QueryConsensusStatesResponse>;
                    clientStatus(request: _73.QueryClientStatusRequest): Promise<_73.QueryClientStatusResponse>;
                    clientParams(request?: _73.QueryClientParamsRequest): Promise<_73.QueryClientParamsResponse>;
                    upgradedClientState(request?: _73.QueryUpgradedClientStateRequest): Promise<_73.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _74.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        updateClient(value: _74.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        upgradeClient(value: _74.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _74.MsgCreateClient): {
                            typeUrl: string;
                            value: _74.MsgCreateClient;
                        };
                        updateClient(value: _74.MsgUpdateClient): {
                            typeUrl: string;
                            value: _74.MsgUpdateClient;
                        };
                        upgradeClient(value: _74.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _74.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _74.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _74.MsgCreateClient): {
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
                        updateClient(value: _74.MsgUpdateClient): {
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
                        upgradeClient(value: _74.MsgUpgradeClient): {
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
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
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
                            value: _74.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _74.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _74.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _74.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _74.MsgCreateClient): {
                            typeUrl: string;
                            value: _74.MsgCreateClient;
                        };
                        updateClient(value: _74.MsgUpdateClient): {
                            typeUrl: string;
                            value: _74.MsgUpdateClient;
                        };
                        upgradeClient(value: _74.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _74.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _74.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _74.MsgCreateClient) => _74.MsgCreateClientAmino;
                        fromAmino: (object: _74.MsgCreateClientAmino) => _74.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _74.MsgUpdateClient) => _74.MsgUpdateClientAmino;
                        fromAmino: (object: _74.MsgUpdateClientAmino) => _74.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _74.MsgUpgradeClient) => _74.MsgUpgradeClientAmino;
                        fromAmino: (object: _74.MsgUpgradeClientAmino) => _74.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _74.MsgSubmitMisbehaviour) => _74.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _74.MsgSubmitMisbehaviourAmino) => _74.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgCreateClient;
                    isSDK(o: any): o is _74.MsgCreateClientSDKType;
                    isAmino(o: any): o is _74.MsgCreateClientAmino;
                    encode(message: _74.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgCreateClient;
                    fromJSON(object: any): _74.MsgCreateClient;
                    toJSON(message: _74.MsgCreateClient): import("..").JsonSafe<_74.MsgCreateClient>;
                    fromPartial(object: Partial<_74.MsgCreateClient>): _74.MsgCreateClient;
                    fromAmino(object: _74.MsgCreateClientAmino): _74.MsgCreateClient;
                    toAmino(message: _74.MsgCreateClient): _74.MsgCreateClientAmino;
                    fromAminoMsg(object: _74.MsgCreateClientAminoMsg): _74.MsgCreateClient;
                    toAminoMsg(message: _74.MsgCreateClient): _74.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _74.MsgCreateClientProtoMsg): _74.MsgCreateClient;
                    toProto(message: _74.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _74.MsgCreateClient): _74.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgCreateClientResponse;
                    isSDK(o: any): o is _74.MsgCreateClientResponseSDKType;
                    isAmino(o: any): o is _74.MsgCreateClientResponseAmino;
                    encode(_: _74.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgCreateClientResponse;
                    fromJSON(_: any): _74.MsgCreateClientResponse;
                    toJSON(_: _74.MsgCreateClientResponse): import("..").JsonSafe<_74.MsgCreateClientResponse>;
                    fromPartial(_: Partial<_74.MsgCreateClientResponse>): _74.MsgCreateClientResponse;
                    fromAmino(_: _74.MsgCreateClientResponseAmino): _74.MsgCreateClientResponse;
                    toAmino(_: _74.MsgCreateClientResponse): _74.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _74.MsgCreateClientResponseAminoMsg): _74.MsgCreateClientResponse;
                    toAminoMsg(message: _74.MsgCreateClientResponse): _74.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgCreateClientResponseProtoMsg): _74.MsgCreateClientResponse;
                    toProto(message: _74.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgCreateClientResponse): _74.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgUpdateClient;
                    isSDK(o: any): o is _74.MsgUpdateClientSDKType;
                    isAmino(o: any): o is _74.MsgUpdateClientAmino;
                    encode(message: _74.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgUpdateClient;
                    fromJSON(object: any): _74.MsgUpdateClient;
                    toJSON(message: _74.MsgUpdateClient): import("..").JsonSafe<_74.MsgUpdateClient>;
                    fromPartial(object: Partial<_74.MsgUpdateClient>): _74.MsgUpdateClient;
                    fromAmino(object: _74.MsgUpdateClientAmino): _74.MsgUpdateClient;
                    toAmino(message: _74.MsgUpdateClient): _74.MsgUpdateClientAmino;
                    fromAminoMsg(object: _74.MsgUpdateClientAminoMsg): _74.MsgUpdateClient;
                    toAminoMsg(message: _74.MsgUpdateClient): _74.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _74.MsgUpdateClientProtoMsg): _74.MsgUpdateClient;
                    toProto(message: _74.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _74.MsgUpdateClient): _74.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgUpdateClientResponse;
                    isSDK(o: any): o is _74.MsgUpdateClientResponseSDKType;
                    isAmino(o: any): o is _74.MsgUpdateClientResponseAmino;
                    encode(_: _74.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgUpdateClientResponse;
                    fromJSON(_: any): _74.MsgUpdateClientResponse;
                    toJSON(_: _74.MsgUpdateClientResponse): import("..").JsonSafe<_74.MsgUpdateClientResponse>;
                    fromPartial(_: Partial<_74.MsgUpdateClientResponse>): _74.MsgUpdateClientResponse;
                    fromAmino(_: _74.MsgUpdateClientResponseAmino): _74.MsgUpdateClientResponse;
                    toAmino(_: _74.MsgUpdateClientResponse): _74.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _74.MsgUpdateClientResponseAminoMsg): _74.MsgUpdateClientResponse;
                    toAminoMsg(message: _74.MsgUpdateClientResponse): _74.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgUpdateClientResponseProtoMsg): _74.MsgUpdateClientResponse;
                    toProto(message: _74.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgUpdateClientResponse): _74.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgUpgradeClient;
                    isSDK(o: any): o is _74.MsgUpgradeClientSDKType;
                    isAmino(o: any): o is _74.MsgUpgradeClientAmino;
                    encode(message: _74.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgUpgradeClient;
                    fromJSON(object: any): _74.MsgUpgradeClient;
                    toJSON(message: _74.MsgUpgradeClient): import("..").JsonSafe<_74.MsgUpgradeClient>;
                    fromPartial(object: Partial<_74.MsgUpgradeClient>): _74.MsgUpgradeClient;
                    fromAmino(object: _74.MsgUpgradeClientAmino): _74.MsgUpgradeClient;
                    toAmino(message: _74.MsgUpgradeClient): _74.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _74.MsgUpgradeClientAminoMsg): _74.MsgUpgradeClient;
                    toAminoMsg(message: _74.MsgUpgradeClient): _74.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _74.MsgUpgradeClientProtoMsg): _74.MsgUpgradeClient;
                    toProto(message: _74.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _74.MsgUpgradeClient): _74.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgUpgradeClientResponse;
                    isSDK(o: any): o is _74.MsgUpgradeClientResponseSDKType;
                    isAmino(o: any): o is _74.MsgUpgradeClientResponseAmino;
                    encode(_: _74.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgUpgradeClientResponse;
                    fromJSON(_: any): _74.MsgUpgradeClientResponse;
                    toJSON(_: _74.MsgUpgradeClientResponse): import("..").JsonSafe<_74.MsgUpgradeClientResponse>;
                    fromPartial(_: Partial<_74.MsgUpgradeClientResponse>): _74.MsgUpgradeClientResponse;
                    fromAmino(_: _74.MsgUpgradeClientResponseAmino): _74.MsgUpgradeClientResponse;
                    toAmino(_: _74.MsgUpgradeClientResponse): _74.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _74.MsgUpgradeClientResponseAminoMsg): _74.MsgUpgradeClientResponse;
                    toAminoMsg(message: _74.MsgUpgradeClientResponse): _74.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgUpgradeClientResponseProtoMsg): _74.MsgUpgradeClientResponse;
                    toProto(message: _74.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgUpgradeClientResponse): _74.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgSubmitMisbehaviour;
                    isSDK(o: any): o is _74.MsgSubmitMisbehaviourSDKType;
                    isAmino(o: any): o is _74.MsgSubmitMisbehaviourAmino;
                    encode(message: _74.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _74.MsgSubmitMisbehaviour;
                    toJSON(message: _74.MsgSubmitMisbehaviour): import("..").JsonSafe<_74.MsgSubmitMisbehaviour>;
                    fromPartial(object: Partial<_74.MsgSubmitMisbehaviour>): _74.MsgSubmitMisbehaviour;
                    fromAmino(object: _74.MsgSubmitMisbehaviourAmino): _74.MsgSubmitMisbehaviour;
                    toAmino(message: _74.MsgSubmitMisbehaviour): _74.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _74.MsgSubmitMisbehaviourAminoMsg): _74.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _74.MsgSubmitMisbehaviour): _74.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _74.MsgSubmitMisbehaviourProtoMsg): _74.MsgSubmitMisbehaviour;
                    toProto(message: _74.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _74.MsgSubmitMisbehaviour): _74.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.MsgSubmitMisbehaviourResponse;
                    isSDK(o: any): o is _74.MsgSubmitMisbehaviourResponseSDKType;
                    isAmino(o: any): o is _74.MsgSubmitMisbehaviourResponseAmino;
                    encode(_: _74.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _74.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _74.MsgSubmitMisbehaviourResponse): import("..").JsonSafe<_74.MsgSubmitMisbehaviourResponse>;
                    fromPartial(_: Partial<_74.MsgSubmitMisbehaviourResponse>): _74.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _74.MsgSubmitMisbehaviourResponseAmino): _74.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _74.MsgSubmitMisbehaviourResponse): _74.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _74.MsgSubmitMisbehaviourResponseAminoMsg): _74.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _74.MsgSubmitMisbehaviourResponse): _74.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _74.MsgSubmitMisbehaviourResponseProtoMsg): _74.MsgSubmitMisbehaviourResponse;
                    toProto(message: _74.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _74.MsgSubmitMisbehaviourResponse): _74.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientStateRequest;
                    isSDK(o: any): o is _73.QueryClientStateRequestSDKType;
                    isAmino(o: any): o is _73.QueryClientStateRequestAmino;
                    encode(message: _73.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientStateRequest;
                    fromJSON(object: any): _73.QueryClientStateRequest;
                    toJSON(message: _73.QueryClientStateRequest): import("..").JsonSafe<_73.QueryClientStateRequest>;
                    fromPartial(object: Partial<_73.QueryClientStateRequest>): _73.QueryClientStateRequest;
                    fromAmino(object: _73.QueryClientStateRequestAmino): _73.QueryClientStateRequest;
                    toAmino(message: _73.QueryClientStateRequest): _73.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _73.QueryClientStateRequestAminoMsg): _73.QueryClientStateRequest;
                    toAminoMsg(message: _73.QueryClientStateRequest): _73.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryClientStateRequestProtoMsg): _73.QueryClientStateRequest;
                    toProto(message: _73.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryClientStateRequest): _73.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientStateResponse;
                    isSDK(o: any): o is _73.QueryClientStateResponseSDKType;
                    isAmino(o: any): o is _73.QueryClientStateResponseAmino;
                    encode(message: _73.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientStateResponse;
                    fromJSON(object: any): _73.QueryClientStateResponse;
                    toJSON(message: _73.QueryClientStateResponse): import("..").JsonSafe<_73.QueryClientStateResponse>;
                    fromPartial(object: Partial<_73.QueryClientStateResponse>): _73.QueryClientStateResponse;
                    fromAmino(object: _73.QueryClientStateResponseAmino): _73.QueryClientStateResponse;
                    toAmino(message: _73.QueryClientStateResponse): _73.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _73.QueryClientStateResponseAminoMsg): _73.QueryClientStateResponse;
                    toAminoMsg(message: _73.QueryClientStateResponse): _73.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryClientStateResponseProtoMsg): _73.QueryClientStateResponse;
                    toProto(message: _73.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryClientStateResponse): _73.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientStatesRequest;
                    isSDK(o: any): o is _73.QueryClientStatesRequestSDKType;
                    isAmino(o: any): o is _73.QueryClientStatesRequestAmino;
                    encode(message: _73.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientStatesRequest;
                    fromJSON(object: any): _73.QueryClientStatesRequest;
                    toJSON(message: _73.QueryClientStatesRequest): import("..").JsonSafe<_73.QueryClientStatesRequest>;
                    fromPartial(object: Partial<_73.QueryClientStatesRequest>): _73.QueryClientStatesRequest;
                    fromAmino(object: _73.QueryClientStatesRequestAmino): _73.QueryClientStatesRequest;
                    toAmino(message: _73.QueryClientStatesRequest): _73.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _73.QueryClientStatesRequestAminoMsg): _73.QueryClientStatesRequest;
                    toAminoMsg(message: _73.QueryClientStatesRequest): _73.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryClientStatesRequestProtoMsg): _73.QueryClientStatesRequest;
                    toProto(message: _73.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryClientStatesRequest): _73.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientStatesResponse;
                    isSDK(o: any): o is _73.QueryClientStatesResponseSDKType;
                    isAmino(o: any): o is _73.QueryClientStatesResponseAmino;
                    encode(message: _73.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientStatesResponse;
                    fromJSON(object: any): _73.QueryClientStatesResponse;
                    toJSON(message: _73.QueryClientStatesResponse): import("..").JsonSafe<_73.QueryClientStatesResponse>;
                    fromPartial(object: Partial<_73.QueryClientStatesResponse>): _73.QueryClientStatesResponse;
                    fromAmino(object: _73.QueryClientStatesResponseAmino): _73.QueryClientStatesResponse;
                    toAmino(message: _73.QueryClientStatesResponse): _73.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _73.QueryClientStatesResponseAminoMsg): _73.QueryClientStatesResponse;
                    toAminoMsg(message: _73.QueryClientStatesResponse): _73.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryClientStatesResponseProtoMsg): _73.QueryClientStatesResponse;
                    toProto(message: _73.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryClientStatesResponse): _73.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryConsensusStateRequest;
                    isSDK(o: any): o is _73.QueryConsensusStateRequestSDKType;
                    isAmino(o: any): o is _73.QueryConsensusStateRequestAmino;
                    encode(message: _73.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConsensusStateRequest;
                    fromJSON(object: any): _73.QueryConsensusStateRequest;
                    toJSON(message: _73.QueryConsensusStateRequest): import("..").JsonSafe<_73.QueryConsensusStateRequest>;
                    fromPartial(object: Partial<_73.QueryConsensusStateRequest>): _73.QueryConsensusStateRequest;
                    fromAmino(object: _73.QueryConsensusStateRequestAmino): _73.QueryConsensusStateRequest;
                    toAmino(message: _73.QueryConsensusStateRequest): _73.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _73.QueryConsensusStateRequestAminoMsg): _73.QueryConsensusStateRequest;
                    toAminoMsg(message: _73.QueryConsensusStateRequest): _73.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryConsensusStateRequestProtoMsg): _73.QueryConsensusStateRequest;
                    toProto(message: _73.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryConsensusStateRequest): _73.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryConsensusStateResponse;
                    isSDK(o: any): o is _73.QueryConsensusStateResponseSDKType;
                    isAmino(o: any): o is _73.QueryConsensusStateResponseAmino;
                    encode(message: _73.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConsensusStateResponse;
                    fromJSON(object: any): _73.QueryConsensusStateResponse;
                    toJSON(message: _73.QueryConsensusStateResponse): import("..").JsonSafe<_73.QueryConsensusStateResponse>;
                    fromPartial(object: Partial<_73.QueryConsensusStateResponse>): _73.QueryConsensusStateResponse;
                    fromAmino(object: _73.QueryConsensusStateResponseAmino): _73.QueryConsensusStateResponse;
                    toAmino(message: _73.QueryConsensusStateResponse): _73.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _73.QueryConsensusStateResponseAminoMsg): _73.QueryConsensusStateResponse;
                    toAminoMsg(message: _73.QueryConsensusStateResponse): _73.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryConsensusStateResponseProtoMsg): _73.QueryConsensusStateResponse;
                    toProto(message: _73.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryConsensusStateResponse): _73.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryConsensusStatesRequest;
                    isSDK(o: any): o is _73.QueryConsensusStatesRequestSDKType;
                    isAmino(o: any): o is _73.QueryConsensusStatesRequestAmino;
                    encode(message: _73.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConsensusStatesRequest;
                    fromJSON(object: any): _73.QueryConsensusStatesRequest;
                    toJSON(message: _73.QueryConsensusStatesRequest): import("..").JsonSafe<_73.QueryConsensusStatesRequest>;
                    fromPartial(object: Partial<_73.QueryConsensusStatesRequest>): _73.QueryConsensusStatesRequest;
                    fromAmino(object: _73.QueryConsensusStatesRequestAmino): _73.QueryConsensusStatesRequest;
                    toAmino(message: _73.QueryConsensusStatesRequest): _73.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _73.QueryConsensusStatesRequestAminoMsg): _73.QueryConsensusStatesRequest;
                    toAminoMsg(message: _73.QueryConsensusStatesRequest): _73.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryConsensusStatesRequestProtoMsg): _73.QueryConsensusStatesRequest;
                    toProto(message: _73.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryConsensusStatesRequest): _73.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryConsensusStatesResponse;
                    isSDK(o: any): o is _73.QueryConsensusStatesResponseSDKType;
                    isAmino(o: any): o is _73.QueryConsensusStatesResponseAmino;
                    encode(message: _73.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryConsensusStatesResponse;
                    fromJSON(object: any): _73.QueryConsensusStatesResponse;
                    toJSON(message: _73.QueryConsensusStatesResponse): import("..").JsonSafe<_73.QueryConsensusStatesResponse>;
                    fromPartial(object: Partial<_73.QueryConsensusStatesResponse>): _73.QueryConsensusStatesResponse;
                    fromAmino(object: _73.QueryConsensusStatesResponseAmino): _73.QueryConsensusStatesResponse;
                    toAmino(message: _73.QueryConsensusStatesResponse): _73.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _73.QueryConsensusStatesResponseAminoMsg): _73.QueryConsensusStatesResponse;
                    toAminoMsg(message: _73.QueryConsensusStatesResponse): _73.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryConsensusStatesResponseProtoMsg): _73.QueryConsensusStatesResponse;
                    toProto(message: _73.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryConsensusStatesResponse): _73.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientStatusRequest;
                    isSDK(o: any): o is _73.QueryClientStatusRequestSDKType;
                    isAmino(o: any): o is _73.QueryClientStatusRequestAmino;
                    encode(message: _73.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientStatusRequest;
                    fromJSON(object: any): _73.QueryClientStatusRequest;
                    toJSON(message: _73.QueryClientStatusRequest): import("..").JsonSafe<_73.QueryClientStatusRequest>;
                    fromPartial(object: Partial<_73.QueryClientStatusRequest>): _73.QueryClientStatusRequest;
                    fromAmino(object: _73.QueryClientStatusRequestAmino): _73.QueryClientStatusRequest;
                    toAmino(message: _73.QueryClientStatusRequest): _73.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _73.QueryClientStatusRequestAminoMsg): _73.QueryClientStatusRequest;
                    toAminoMsg(message: _73.QueryClientStatusRequest): _73.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryClientStatusRequestProtoMsg): _73.QueryClientStatusRequest;
                    toProto(message: _73.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryClientStatusRequest): _73.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientStatusResponse;
                    isSDK(o: any): o is _73.QueryClientStatusResponseSDKType;
                    isAmino(o: any): o is _73.QueryClientStatusResponseAmino;
                    encode(message: _73.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientStatusResponse;
                    fromJSON(object: any): _73.QueryClientStatusResponse;
                    toJSON(message: _73.QueryClientStatusResponse): import("..").JsonSafe<_73.QueryClientStatusResponse>;
                    fromPartial(object: Partial<_73.QueryClientStatusResponse>): _73.QueryClientStatusResponse;
                    fromAmino(object: _73.QueryClientStatusResponseAmino): _73.QueryClientStatusResponse;
                    toAmino(message: _73.QueryClientStatusResponse): _73.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _73.QueryClientStatusResponseAminoMsg): _73.QueryClientStatusResponse;
                    toAminoMsg(message: _73.QueryClientStatusResponse): _73.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryClientStatusResponseProtoMsg): _73.QueryClientStatusResponse;
                    toProto(message: _73.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryClientStatusResponse): _73.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientParamsRequest;
                    isSDK(o: any): o is _73.QueryClientParamsRequestSDKType;
                    isAmino(o: any): o is _73.QueryClientParamsRequestAmino;
                    encode(_: _73.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientParamsRequest;
                    fromJSON(_: any): _73.QueryClientParamsRequest;
                    toJSON(_: _73.QueryClientParamsRequest): import("..").JsonSafe<_73.QueryClientParamsRequest>;
                    fromPartial(_: Partial<_73.QueryClientParamsRequest>): _73.QueryClientParamsRequest;
                    fromAmino(_: _73.QueryClientParamsRequestAmino): _73.QueryClientParamsRequest;
                    toAmino(_: _73.QueryClientParamsRequest): _73.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _73.QueryClientParamsRequestAminoMsg): _73.QueryClientParamsRequest;
                    toAminoMsg(message: _73.QueryClientParamsRequest): _73.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryClientParamsRequestProtoMsg): _73.QueryClientParamsRequest;
                    toProto(message: _73.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryClientParamsRequest): _73.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryClientParamsResponse;
                    isSDK(o: any): o is _73.QueryClientParamsResponseSDKType;
                    isAmino(o: any): o is _73.QueryClientParamsResponseAmino;
                    encode(message: _73.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryClientParamsResponse;
                    fromJSON(object: any): _73.QueryClientParamsResponse;
                    toJSON(message: _73.QueryClientParamsResponse): import("..").JsonSafe<_73.QueryClientParamsResponse>;
                    fromPartial(object: Partial<_73.QueryClientParamsResponse>): _73.QueryClientParamsResponse;
                    fromAmino(object: _73.QueryClientParamsResponseAmino): _73.QueryClientParamsResponse;
                    toAmino(message: _73.QueryClientParamsResponse): _73.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _73.QueryClientParamsResponseAminoMsg): _73.QueryClientParamsResponse;
                    toAminoMsg(message: _73.QueryClientParamsResponse): _73.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryClientParamsResponseProtoMsg): _73.QueryClientParamsResponse;
                    toProto(message: _73.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryClientParamsResponse): _73.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryUpgradedClientStateRequest;
                    isSDK(o: any): o is _73.QueryUpgradedClientStateRequestSDKType;
                    isAmino(o: any): o is _73.QueryUpgradedClientStateRequestAmino;
                    encode(_: _73.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _73.QueryUpgradedClientStateRequest;
                    toJSON(_: _73.QueryUpgradedClientStateRequest): import("..").JsonSafe<_73.QueryUpgradedClientStateRequest>;
                    fromPartial(_: Partial<_73.QueryUpgradedClientStateRequest>): _73.QueryUpgradedClientStateRequest;
                    fromAmino(_: _73.QueryUpgradedClientStateRequestAmino): _73.QueryUpgradedClientStateRequest;
                    toAmino(_: _73.QueryUpgradedClientStateRequest): _73.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _73.QueryUpgradedClientStateRequestAminoMsg): _73.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _73.QueryUpgradedClientStateRequest): _73.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryUpgradedClientStateRequestProtoMsg): _73.QueryUpgradedClientStateRequest;
                    toProto(message: _73.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryUpgradedClientStateRequest): _73.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryUpgradedClientStateResponse;
                    isSDK(o: any): o is _73.QueryUpgradedClientStateResponseSDKType;
                    isAmino(o: any): o is _73.QueryUpgradedClientStateResponseAmino;
                    encode(message: _73.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _73.QueryUpgradedClientStateResponse;
                    toJSON(message: _73.QueryUpgradedClientStateResponse): import("..").JsonSafe<_73.QueryUpgradedClientStateResponse>;
                    fromPartial(object: Partial<_73.QueryUpgradedClientStateResponse>): _73.QueryUpgradedClientStateResponse;
                    fromAmino(object: _73.QueryUpgradedClientStateResponseAmino): _73.QueryUpgradedClientStateResponse;
                    toAmino(message: _73.QueryUpgradedClientStateResponse): _73.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _73.QueryUpgradedClientStateResponseAminoMsg): _73.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _73.QueryUpgradedClientStateResponse): _73.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryUpgradedClientStateResponseProtoMsg): _73.QueryUpgradedClientStateResponse;
                    toProto(message: _73.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryUpgradedClientStateResponse): _73.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryUpgradedConsensusStateRequest;
                    isSDK(o: any): o is _73.QueryUpgradedConsensusStateRequestSDKType;
                    isAmino(o: any): o is _73.QueryUpgradedConsensusStateRequestAmino;
                    encode(_: _73.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _73.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _73.QueryUpgradedConsensusStateRequest): import("..").JsonSafe<_73.QueryUpgradedConsensusStateRequest>;
                    fromPartial(_: Partial<_73.QueryUpgradedConsensusStateRequest>): _73.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _73.QueryUpgradedConsensusStateRequestAmino): _73.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _73.QueryUpgradedConsensusStateRequest): _73.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _73.QueryUpgradedConsensusStateRequestAminoMsg): _73.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _73.QueryUpgradedConsensusStateRequest): _73.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _73.QueryUpgradedConsensusStateRequestProtoMsg): _73.QueryUpgradedConsensusStateRequest;
                    toProto(message: _73.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _73.QueryUpgradedConsensusStateRequest): _73.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.QueryUpgradedConsensusStateResponse;
                    isSDK(o: any): o is _73.QueryUpgradedConsensusStateResponseSDKType;
                    isAmino(o: any): o is _73.QueryUpgradedConsensusStateResponseAmino;
                    encode(message: _73.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _73.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _73.QueryUpgradedConsensusStateResponse): import("..").JsonSafe<_73.QueryUpgradedConsensusStateResponse>;
                    fromPartial(object: Partial<_73.QueryUpgradedConsensusStateResponse>): _73.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _73.QueryUpgradedConsensusStateResponseAmino): _73.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _73.QueryUpgradedConsensusStateResponse): _73.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _73.QueryUpgradedConsensusStateResponseAminoMsg): _73.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _73.QueryUpgradedConsensusStateResponse): _73.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _73.QueryUpgradedConsensusStateResponseProtoMsg): _73.QueryUpgradedConsensusStateResponse;
                    toProto(message: _73.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _73.QueryUpgradedConsensusStateResponse): _73.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.GenesisState;
                    isSDK(o: any): o is _72.GenesisStateSDKType;
                    isAmino(o: any): o is _72.GenesisStateAmino;
                    encode(message: _72.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.GenesisState;
                    fromJSON(object: any): _72.GenesisState;
                    toJSON(message: _72.GenesisState): import("..").JsonSafe<_72.GenesisState>;
                    fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                    fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                    toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                    fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                    toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                    fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                    toProto(message: _72.GenesisState): Uint8Array;
                    toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.GenesisMetadata;
                    isSDK(o: any): o is _72.GenesisMetadataSDKType;
                    isAmino(o: any): o is _72.GenesisMetadataAmino;
                    encode(message: _72.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.GenesisMetadata;
                    fromJSON(object: any): _72.GenesisMetadata;
                    toJSON(message: _72.GenesisMetadata): import("..").JsonSafe<_72.GenesisMetadata>;
                    fromPartial(object: Partial<_72.GenesisMetadata>): _72.GenesisMetadata;
                    fromAmino(object: _72.GenesisMetadataAmino): _72.GenesisMetadata;
                    toAmino(message: _72.GenesisMetadata): _72.GenesisMetadataAmino;
                    fromAminoMsg(object: _72.GenesisMetadataAminoMsg): _72.GenesisMetadata;
                    toAminoMsg(message: _72.GenesisMetadata): _72.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _72.GenesisMetadataProtoMsg): _72.GenesisMetadata;
                    toProto(message: _72.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _72.GenesisMetadata): _72.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.IdentifiedGenesisMetadata;
                    isSDK(o: any): o is _72.IdentifiedGenesisMetadataSDKType;
                    isAmino(o: any): o is _72.IdentifiedGenesisMetadataAmino;
                    encode(message: _72.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _72.IdentifiedGenesisMetadata;
                    toJSON(message: _72.IdentifiedGenesisMetadata): import("..").JsonSafe<_72.IdentifiedGenesisMetadata>;
                    fromPartial(object: Partial<_72.IdentifiedGenesisMetadata>): _72.IdentifiedGenesisMetadata;
                    fromAmino(object: _72.IdentifiedGenesisMetadataAmino): _72.IdentifiedGenesisMetadata;
                    toAmino(message: _72.IdentifiedGenesisMetadata): _72.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _72.IdentifiedGenesisMetadataAminoMsg): _72.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _72.IdentifiedGenesisMetadata): _72.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _72.IdentifiedGenesisMetadataProtoMsg): _72.IdentifiedGenesisMetadata;
                    toProto(message: _72.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _72.IdentifiedGenesisMetadata): _72.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.IdentifiedClientState;
                    isSDK(o: any): o is _71.IdentifiedClientStateSDKType;
                    isAmino(o: any): o is _71.IdentifiedClientStateAmino;
                    encode(message: _71.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.IdentifiedClientState;
                    fromJSON(object: any): _71.IdentifiedClientState;
                    toJSON(message: _71.IdentifiedClientState): import("..").JsonSafe<_71.IdentifiedClientState>;
                    fromPartial(object: Partial<_71.IdentifiedClientState>): _71.IdentifiedClientState;
                    fromAmino(object: _71.IdentifiedClientStateAmino): _71.IdentifiedClientState;
                    toAmino(message: _71.IdentifiedClientState): _71.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _71.IdentifiedClientStateAminoMsg): _71.IdentifiedClientState;
                    toAminoMsg(message: _71.IdentifiedClientState): _71.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _71.IdentifiedClientStateProtoMsg): _71.IdentifiedClientState;
                    toProto(message: _71.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _71.IdentifiedClientState): _71.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.ConsensusStateWithHeight;
                    isSDK(o: any): o is _71.ConsensusStateWithHeightSDKType;
                    isAmino(o: any): o is _71.ConsensusStateWithHeightAmino;
                    encode(message: _71.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.ConsensusStateWithHeight;
                    fromJSON(object: any): _71.ConsensusStateWithHeight;
                    toJSON(message: _71.ConsensusStateWithHeight): import("..").JsonSafe<_71.ConsensusStateWithHeight>;
                    fromPartial(object: Partial<_71.ConsensusStateWithHeight>): _71.ConsensusStateWithHeight;
                    fromAmino(object: _71.ConsensusStateWithHeightAmino): _71.ConsensusStateWithHeight;
                    toAmino(message: _71.ConsensusStateWithHeight): _71.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _71.ConsensusStateWithHeightAminoMsg): _71.ConsensusStateWithHeight;
                    toAminoMsg(message: _71.ConsensusStateWithHeight): _71.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _71.ConsensusStateWithHeightProtoMsg): _71.ConsensusStateWithHeight;
                    toProto(message: _71.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _71.ConsensusStateWithHeight): _71.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.ClientConsensusStates;
                    isSDK(o: any): o is _71.ClientConsensusStatesSDKType;
                    isAmino(o: any): o is _71.ClientConsensusStatesAmino;
                    encode(message: _71.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.ClientConsensusStates;
                    fromJSON(object: any): _71.ClientConsensusStates;
                    toJSON(message: _71.ClientConsensusStates): import("..").JsonSafe<_71.ClientConsensusStates>;
                    fromPartial(object: Partial<_71.ClientConsensusStates>): _71.ClientConsensusStates;
                    fromAmino(object: _71.ClientConsensusStatesAmino): _71.ClientConsensusStates;
                    toAmino(message: _71.ClientConsensusStates): _71.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _71.ClientConsensusStatesAminoMsg): _71.ClientConsensusStates;
                    toAminoMsg(message: _71.ClientConsensusStates): _71.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _71.ClientConsensusStatesProtoMsg): _71.ClientConsensusStates;
                    toProto(message: _71.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _71.ClientConsensusStates): _71.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.ClientUpdateProposal;
                    isSDK(o: any): o is _71.ClientUpdateProposalSDKType;
                    isAmino(o: any): o is _71.ClientUpdateProposalAmino;
                    encode(message: _71.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.ClientUpdateProposal;
                    fromJSON(object: any): _71.ClientUpdateProposal;
                    toJSON(message: _71.ClientUpdateProposal): import("..").JsonSafe<_71.ClientUpdateProposal>;
                    fromPartial(object: Partial<_71.ClientUpdateProposal>): _71.ClientUpdateProposal;
                    fromAmino(object: _71.ClientUpdateProposalAmino): _71.ClientUpdateProposal;
                    toAmino(message: _71.ClientUpdateProposal): _71.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _71.ClientUpdateProposalAminoMsg): _71.ClientUpdateProposal;
                    toAminoMsg(message: _71.ClientUpdateProposal): _71.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _71.ClientUpdateProposalProtoMsg): _71.ClientUpdateProposal;
                    toProto(message: _71.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _71.ClientUpdateProposal): _71.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.UpgradeProposal;
                    isSDK(o: any): o is _71.UpgradeProposalSDKType;
                    isAmino(o: any): o is _71.UpgradeProposalAmino;
                    encode(message: _71.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.UpgradeProposal;
                    fromJSON(object: any): _71.UpgradeProposal;
                    toJSON(message: _71.UpgradeProposal): import("..").JsonSafe<_71.UpgradeProposal>;
                    fromPartial(object: Partial<_71.UpgradeProposal>): _71.UpgradeProposal;
                    fromAmino(object: _71.UpgradeProposalAmino): _71.UpgradeProposal;
                    toAmino(message: _71.UpgradeProposal): _71.UpgradeProposalAmino;
                    fromAminoMsg(object: _71.UpgradeProposalAminoMsg): _71.UpgradeProposal;
                    toAminoMsg(message: _71.UpgradeProposal): _71.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _71.UpgradeProposalProtoMsg): _71.UpgradeProposal;
                    toProto(message: _71.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _71.UpgradeProposal): _71.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.Height;
                    isSDK(o: any): o is _71.HeightSDKType;
                    isAmino(o: any): o is _71.HeightAmino;
                    encode(message: _71.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Height;
                    fromJSON(object: any): _71.Height;
                    toJSON(message: _71.Height): import("..").JsonSafe<_71.Height>;
                    fromPartial(object: Partial<_71.Height>): _71.Height;
                    fromAmino(object: _71.HeightAmino): _71.Height;
                    toAmino(message: _71.Height): _71.HeightAmino;
                    fromAminoMsg(object: _71.HeightAminoMsg): _71.Height;
                    toAminoMsg(message: _71.Height): _71.HeightAminoMsg;
                    fromProtoMsg(message: _71.HeightProtoMsg): _71.Height;
                    toProto(message: _71.Height): Uint8Array;
                    toProtoMsg(message: _71.Height): _71.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.Params;
                    isSDK(o: any): o is _71.ParamsSDKType;
                    isAmino(o: any): o is _71.ParamsAmino;
                    encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Params;
                    fromJSON(object: any): _71.Params;
                    toJSON(message: _71.Params): import("..").JsonSafe<_71.Params>;
                    fromPartial(object: Partial<_71.Params>): _71.Params;
                    fromAmino(object: _71.ParamsAmino): _71.Params;
                    toAmino(message: _71.Params): _71.ParamsAmino;
                    fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                    toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                    fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                    toProto(message: _71.Params): Uint8Array;
                    toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MerkleRoot;
                    isSDK(o: any): o is _75.MerkleRootSDKType;
                    isAmino(o: any): o is _75.MerkleRootAmino;
                    encode(message: _75.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MerkleRoot;
                    fromJSON(object: any): _75.MerkleRoot;
                    toJSON(message: _75.MerkleRoot): import("..").JsonSafe<_75.MerkleRoot>;
                    fromPartial(object: Partial<_75.MerkleRoot>): _75.MerkleRoot;
                    fromAmino(object: _75.MerkleRootAmino): _75.MerkleRoot;
                    toAmino(message: _75.MerkleRoot): _75.MerkleRootAmino;
                    fromAminoMsg(object: _75.MerkleRootAminoMsg): _75.MerkleRoot;
                    toAminoMsg(message: _75.MerkleRoot): _75.MerkleRootAminoMsg;
                    fromProtoMsg(message: _75.MerkleRootProtoMsg): _75.MerkleRoot;
                    toProto(message: _75.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _75.MerkleRoot): _75.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MerklePrefix;
                    isSDK(o: any): o is _75.MerklePrefixSDKType;
                    isAmino(o: any): o is _75.MerklePrefixAmino;
                    encode(message: _75.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MerklePrefix;
                    fromJSON(object: any): _75.MerklePrefix;
                    toJSON(message: _75.MerklePrefix): import("..").JsonSafe<_75.MerklePrefix>;
                    fromPartial(object: Partial<_75.MerklePrefix>): _75.MerklePrefix;
                    fromAmino(object: _75.MerklePrefixAmino): _75.MerklePrefix;
                    toAmino(message: _75.MerklePrefix): _75.MerklePrefixAmino;
                    fromAminoMsg(object: _75.MerklePrefixAminoMsg): _75.MerklePrefix;
                    toAminoMsg(message: _75.MerklePrefix): _75.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _75.MerklePrefixProtoMsg): _75.MerklePrefix;
                    toProto(message: _75.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _75.MerklePrefix): _75.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MerklePath;
                    isSDK(o: any): o is _75.MerklePathSDKType;
                    isAmino(o: any): o is _75.MerklePathAmino;
                    encode(message: _75.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MerklePath;
                    fromJSON(object: any): _75.MerklePath;
                    toJSON(message: _75.MerklePath): import("..").JsonSafe<_75.MerklePath>;
                    fromPartial(object: Partial<_75.MerklePath>): _75.MerklePath;
                    fromAmino(object: _75.MerklePathAmino): _75.MerklePath;
                    toAmino(message: _75.MerklePath): _75.MerklePathAmino;
                    fromAminoMsg(object: _75.MerklePathAminoMsg): _75.MerklePath;
                    toAminoMsg(message: _75.MerklePath): _75.MerklePathAminoMsg;
                    fromProtoMsg(message: _75.MerklePathProtoMsg): _75.MerklePath;
                    toProto(message: _75.MerklePath): Uint8Array;
                    toProtoMsg(message: _75.MerklePath): _75.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.MerkleProof;
                    isSDK(o: any): o is _75.MerkleProofSDKType;
                    isAmino(o: any): o is _75.MerkleProofAmino;
                    encode(message: _75.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MerkleProof;
                    fromJSON(object: any): _75.MerkleProof;
                    toJSON(message: _75.MerkleProof): import("..").JsonSafe<_75.MerkleProof>;
                    fromPartial(object: Partial<_75.MerkleProof>): _75.MerkleProof;
                    fromAmino(object: _75.MerkleProofAmino): _75.MerkleProof;
                    toAmino(message: _75.MerkleProof): _75.MerkleProofAmino;
                    fromAminoMsg(object: _75.MerkleProofAminoMsg): _75.MerkleProof;
                    toAminoMsg(message: _75.MerkleProof): _75.MerkleProofAminoMsg;
                    fromProtoMsg(message: _75.MerkleProofProtoMsg): _75.MerkleProof;
                    toProto(message: _75.MerkleProof): Uint8Array;
                    toProtoMsg(message: _75.MerkleProof): _75.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _211.MsgClientImpl;
                QueryClientImpl: typeof _207.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _78.QueryConnectionRequest): Promise<_78.QueryConnectionResponse>;
                    connections(request?: _78.QueryConnectionsRequest): Promise<_78.QueryConnectionsResponse>;
                    clientConnections(request: _78.QueryClientConnectionsRequest): Promise<_78.QueryClientConnectionsResponse>;
                    connectionClientState(request: _78.QueryConnectionClientStateRequest): Promise<_78.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _78.QueryConnectionConsensusStateRequest): Promise<_78.QueryConnectionConsensusStateResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
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
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
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
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
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
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
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
                            value: _79.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _79.MsgConnectionOpenInit) => _79.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _79.MsgConnectionOpenInitAmino) => _79.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _79.MsgConnectionOpenTry) => _79.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _79.MsgConnectionOpenTryAmino) => _79.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _79.MsgConnectionOpenAck) => _79.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _79.MsgConnectionOpenAckAmino) => _79.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _79.MsgConnectionOpenConfirm) => _79.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _79.MsgConnectionOpenConfirmAmino) => _79.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenInit;
                    isSDK(o: any): o is _79.MsgConnectionOpenInitSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenInitAmino;
                    encode(message: _79.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenInit;
                    fromJSON(object: any): _79.MsgConnectionOpenInit;
                    toJSON(message: _79.MsgConnectionOpenInit): import("..").JsonSafe<_79.MsgConnectionOpenInit>;
                    fromPartial(object: Partial<_79.MsgConnectionOpenInit>): _79.MsgConnectionOpenInit;
                    fromAmino(object: _79.MsgConnectionOpenInitAmino): _79.MsgConnectionOpenInit;
                    toAmino(message: _79.MsgConnectionOpenInit): _79.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenInitAminoMsg): _79.MsgConnectionOpenInit;
                    toAminoMsg(message: _79.MsgConnectionOpenInit): _79.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenInitProtoMsg): _79.MsgConnectionOpenInit;
                    toProto(message: _79.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenInit): _79.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenInitResponse;
                    isSDK(o: any): o is _79.MsgConnectionOpenInitResponseSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenInitResponseAmino;
                    encode(_: _79.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _79.MsgConnectionOpenInitResponse;
                    toJSON(_: _79.MsgConnectionOpenInitResponse): import("..").JsonSafe<_79.MsgConnectionOpenInitResponse>;
                    fromPartial(_: Partial<_79.MsgConnectionOpenInitResponse>): _79.MsgConnectionOpenInitResponse;
                    fromAmino(_: _79.MsgConnectionOpenInitResponseAmino): _79.MsgConnectionOpenInitResponse;
                    toAmino(_: _79.MsgConnectionOpenInitResponse): _79.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenInitResponseAminoMsg): _79.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _79.MsgConnectionOpenInitResponse): _79.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenInitResponseProtoMsg): _79.MsgConnectionOpenInitResponse;
                    toProto(message: _79.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenInitResponse): _79.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenTry;
                    isSDK(o: any): o is _79.MsgConnectionOpenTrySDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenTryAmino;
                    encode(message: _79.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenTry;
                    fromJSON(object: any): _79.MsgConnectionOpenTry;
                    toJSON(message: _79.MsgConnectionOpenTry): import("..").JsonSafe<_79.MsgConnectionOpenTry>;
                    fromPartial(object: Partial<_79.MsgConnectionOpenTry>): _79.MsgConnectionOpenTry;
                    fromAmino(object: _79.MsgConnectionOpenTryAmino): _79.MsgConnectionOpenTry;
                    toAmino(message: _79.MsgConnectionOpenTry): _79.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenTryAminoMsg): _79.MsgConnectionOpenTry;
                    toAminoMsg(message: _79.MsgConnectionOpenTry): _79.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenTryProtoMsg): _79.MsgConnectionOpenTry;
                    toProto(message: _79.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenTry): _79.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenTryResponse;
                    isSDK(o: any): o is _79.MsgConnectionOpenTryResponseSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenTryResponseAmino;
                    encode(_: _79.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _79.MsgConnectionOpenTryResponse;
                    toJSON(_: _79.MsgConnectionOpenTryResponse): import("..").JsonSafe<_79.MsgConnectionOpenTryResponse>;
                    fromPartial(_: Partial<_79.MsgConnectionOpenTryResponse>): _79.MsgConnectionOpenTryResponse;
                    fromAmino(_: _79.MsgConnectionOpenTryResponseAmino): _79.MsgConnectionOpenTryResponse;
                    toAmino(_: _79.MsgConnectionOpenTryResponse): _79.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenTryResponseAminoMsg): _79.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _79.MsgConnectionOpenTryResponse): _79.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenTryResponseProtoMsg): _79.MsgConnectionOpenTryResponse;
                    toProto(message: _79.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenTryResponse): _79.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenAck;
                    isSDK(o: any): o is _79.MsgConnectionOpenAckSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenAckAmino;
                    encode(message: _79.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenAck;
                    fromJSON(object: any): _79.MsgConnectionOpenAck;
                    toJSON(message: _79.MsgConnectionOpenAck): import("..").JsonSafe<_79.MsgConnectionOpenAck>;
                    fromPartial(object: Partial<_79.MsgConnectionOpenAck>): _79.MsgConnectionOpenAck;
                    fromAmino(object: _79.MsgConnectionOpenAckAmino): _79.MsgConnectionOpenAck;
                    toAmino(message: _79.MsgConnectionOpenAck): _79.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenAckAminoMsg): _79.MsgConnectionOpenAck;
                    toAminoMsg(message: _79.MsgConnectionOpenAck): _79.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenAckProtoMsg): _79.MsgConnectionOpenAck;
                    toProto(message: _79.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenAck): _79.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenAckResponse;
                    isSDK(o: any): o is _79.MsgConnectionOpenAckResponseSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenAckResponseAmino;
                    encode(_: _79.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _79.MsgConnectionOpenAckResponse;
                    toJSON(_: _79.MsgConnectionOpenAckResponse): import("..").JsonSafe<_79.MsgConnectionOpenAckResponse>;
                    fromPartial(_: Partial<_79.MsgConnectionOpenAckResponse>): _79.MsgConnectionOpenAckResponse;
                    fromAmino(_: _79.MsgConnectionOpenAckResponseAmino): _79.MsgConnectionOpenAckResponse;
                    toAmino(_: _79.MsgConnectionOpenAckResponse): _79.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenAckResponseAminoMsg): _79.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _79.MsgConnectionOpenAckResponse): _79.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenAckResponseProtoMsg): _79.MsgConnectionOpenAckResponse;
                    toProto(message: _79.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenAckResponse): _79.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenConfirm;
                    isSDK(o: any): o is _79.MsgConnectionOpenConfirmSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenConfirmAmino;
                    encode(message: _79.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _79.MsgConnectionOpenConfirm;
                    toJSON(message: _79.MsgConnectionOpenConfirm): import("..").JsonSafe<_79.MsgConnectionOpenConfirm>;
                    fromPartial(object: Partial<_79.MsgConnectionOpenConfirm>): _79.MsgConnectionOpenConfirm;
                    fromAmino(object: _79.MsgConnectionOpenConfirmAmino): _79.MsgConnectionOpenConfirm;
                    toAmino(message: _79.MsgConnectionOpenConfirm): _79.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenConfirmAminoMsg): _79.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _79.MsgConnectionOpenConfirm): _79.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenConfirmProtoMsg): _79.MsgConnectionOpenConfirm;
                    toProto(message: _79.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenConfirm): _79.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.MsgConnectionOpenConfirmResponse;
                    isSDK(o: any): o is _79.MsgConnectionOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _79.MsgConnectionOpenConfirmResponseAmino;
                    encode(_: _79.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _79.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _79.MsgConnectionOpenConfirmResponse): import("..").JsonSafe<_79.MsgConnectionOpenConfirmResponse>;
                    fromPartial(_: Partial<_79.MsgConnectionOpenConfirmResponse>): _79.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _79.MsgConnectionOpenConfirmResponseAmino): _79.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _79.MsgConnectionOpenConfirmResponse): _79.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _79.MsgConnectionOpenConfirmResponseAminoMsg): _79.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _79.MsgConnectionOpenConfirmResponse): _79.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _79.MsgConnectionOpenConfirmResponseProtoMsg): _79.MsgConnectionOpenConfirmResponse;
                    toProto(message: _79.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _79.MsgConnectionOpenConfirmResponse): _79.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionRequest;
                    isSDK(o: any): o is _78.QueryConnectionRequestSDKType;
                    isAmino(o: any): o is _78.QueryConnectionRequestAmino;
                    encode(message: _78.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionRequest;
                    fromJSON(object: any): _78.QueryConnectionRequest;
                    toJSON(message: _78.QueryConnectionRequest): import("..").JsonSafe<_78.QueryConnectionRequest>;
                    fromPartial(object: Partial<_78.QueryConnectionRequest>): _78.QueryConnectionRequest;
                    fromAmino(object: _78.QueryConnectionRequestAmino): _78.QueryConnectionRequest;
                    toAmino(message: _78.QueryConnectionRequest): _78.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _78.QueryConnectionRequestAminoMsg): _78.QueryConnectionRequest;
                    toAminoMsg(message: _78.QueryConnectionRequest): _78.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionRequestProtoMsg): _78.QueryConnectionRequest;
                    toProto(message: _78.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionRequest): _78.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionResponse;
                    isSDK(o: any): o is _78.QueryConnectionResponseSDKType;
                    isAmino(o: any): o is _78.QueryConnectionResponseAmino;
                    encode(message: _78.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionResponse;
                    fromJSON(object: any): _78.QueryConnectionResponse;
                    toJSON(message: _78.QueryConnectionResponse): import("..").JsonSafe<_78.QueryConnectionResponse>;
                    fromPartial(object: Partial<_78.QueryConnectionResponse>): _78.QueryConnectionResponse;
                    fromAmino(object: _78.QueryConnectionResponseAmino): _78.QueryConnectionResponse;
                    toAmino(message: _78.QueryConnectionResponse): _78.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _78.QueryConnectionResponseAminoMsg): _78.QueryConnectionResponse;
                    toAminoMsg(message: _78.QueryConnectionResponse): _78.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionResponseProtoMsg): _78.QueryConnectionResponse;
                    toProto(message: _78.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionResponse): _78.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionsRequest;
                    isSDK(o: any): o is _78.QueryConnectionsRequestSDKType;
                    isAmino(o: any): o is _78.QueryConnectionsRequestAmino;
                    encode(message: _78.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionsRequest;
                    fromJSON(object: any): _78.QueryConnectionsRequest;
                    toJSON(message: _78.QueryConnectionsRequest): import("..").JsonSafe<_78.QueryConnectionsRequest>;
                    fromPartial(object: Partial<_78.QueryConnectionsRequest>): _78.QueryConnectionsRequest;
                    fromAmino(object: _78.QueryConnectionsRequestAmino): _78.QueryConnectionsRequest;
                    toAmino(message: _78.QueryConnectionsRequest): _78.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _78.QueryConnectionsRequestAminoMsg): _78.QueryConnectionsRequest;
                    toAminoMsg(message: _78.QueryConnectionsRequest): _78.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionsRequestProtoMsg): _78.QueryConnectionsRequest;
                    toProto(message: _78.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionsRequest): _78.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionsResponse;
                    isSDK(o: any): o is _78.QueryConnectionsResponseSDKType;
                    isAmino(o: any): o is _78.QueryConnectionsResponseAmino;
                    encode(message: _78.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionsResponse;
                    fromJSON(object: any): _78.QueryConnectionsResponse;
                    toJSON(message: _78.QueryConnectionsResponse): import("..").JsonSafe<_78.QueryConnectionsResponse>;
                    fromPartial(object: Partial<_78.QueryConnectionsResponse>): _78.QueryConnectionsResponse;
                    fromAmino(object: _78.QueryConnectionsResponseAmino): _78.QueryConnectionsResponse;
                    toAmino(message: _78.QueryConnectionsResponse): _78.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _78.QueryConnectionsResponseAminoMsg): _78.QueryConnectionsResponse;
                    toAminoMsg(message: _78.QueryConnectionsResponse): _78.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionsResponseProtoMsg): _78.QueryConnectionsResponse;
                    toProto(message: _78.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionsResponse): _78.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryClientConnectionsRequest;
                    isSDK(o: any): o is _78.QueryClientConnectionsRequestSDKType;
                    isAmino(o: any): o is _78.QueryClientConnectionsRequestAmino;
                    encode(message: _78.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryClientConnectionsRequest;
                    fromJSON(object: any): _78.QueryClientConnectionsRequest;
                    toJSON(message: _78.QueryClientConnectionsRequest): import("..").JsonSafe<_78.QueryClientConnectionsRequest>;
                    fromPartial(object: Partial<_78.QueryClientConnectionsRequest>): _78.QueryClientConnectionsRequest;
                    fromAmino(object: _78.QueryClientConnectionsRequestAmino): _78.QueryClientConnectionsRequest;
                    toAmino(message: _78.QueryClientConnectionsRequest): _78.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _78.QueryClientConnectionsRequestAminoMsg): _78.QueryClientConnectionsRequest;
                    toAminoMsg(message: _78.QueryClientConnectionsRequest): _78.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _78.QueryClientConnectionsRequestProtoMsg): _78.QueryClientConnectionsRequest;
                    toProto(message: _78.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _78.QueryClientConnectionsRequest): _78.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryClientConnectionsResponse;
                    isSDK(o: any): o is _78.QueryClientConnectionsResponseSDKType;
                    isAmino(o: any): o is _78.QueryClientConnectionsResponseAmino;
                    encode(message: _78.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryClientConnectionsResponse;
                    fromJSON(object: any): _78.QueryClientConnectionsResponse;
                    toJSON(message: _78.QueryClientConnectionsResponse): import("..").JsonSafe<_78.QueryClientConnectionsResponse>;
                    fromPartial(object: Partial<_78.QueryClientConnectionsResponse>): _78.QueryClientConnectionsResponse;
                    fromAmino(object: _78.QueryClientConnectionsResponseAmino): _78.QueryClientConnectionsResponse;
                    toAmino(message: _78.QueryClientConnectionsResponse): _78.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _78.QueryClientConnectionsResponseAminoMsg): _78.QueryClientConnectionsResponse;
                    toAminoMsg(message: _78.QueryClientConnectionsResponse): _78.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _78.QueryClientConnectionsResponseProtoMsg): _78.QueryClientConnectionsResponse;
                    toProto(message: _78.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _78.QueryClientConnectionsResponse): _78.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionClientStateRequest;
                    isSDK(o: any): o is _78.QueryConnectionClientStateRequestSDKType;
                    isAmino(o: any): o is _78.QueryConnectionClientStateRequestAmino;
                    encode(message: _78.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _78.QueryConnectionClientStateRequest;
                    toJSON(message: _78.QueryConnectionClientStateRequest): import("..").JsonSafe<_78.QueryConnectionClientStateRequest>;
                    fromPartial(object: Partial<_78.QueryConnectionClientStateRequest>): _78.QueryConnectionClientStateRequest;
                    fromAmino(object: _78.QueryConnectionClientStateRequestAmino): _78.QueryConnectionClientStateRequest;
                    toAmino(message: _78.QueryConnectionClientStateRequest): _78.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _78.QueryConnectionClientStateRequestAminoMsg): _78.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _78.QueryConnectionClientStateRequest): _78.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionClientStateRequestProtoMsg): _78.QueryConnectionClientStateRequest;
                    toProto(message: _78.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionClientStateRequest): _78.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionClientStateResponse;
                    isSDK(o: any): o is _78.QueryConnectionClientStateResponseSDKType;
                    isAmino(o: any): o is _78.QueryConnectionClientStateResponseAmino;
                    encode(message: _78.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _78.QueryConnectionClientStateResponse;
                    toJSON(message: _78.QueryConnectionClientStateResponse): import("..").JsonSafe<_78.QueryConnectionClientStateResponse>;
                    fromPartial(object: Partial<_78.QueryConnectionClientStateResponse>): _78.QueryConnectionClientStateResponse;
                    fromAmino(object: _78.QueryConnectionClientStateResponseAmino): _78.QueryConnectionClientStateResponse;
                    toAmino(message: _78.QueryConnectionClientStateResponse): _78.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _78.QueryConnectionClientStateResponseAminoMsg): _78.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _78.QueryConnectionClientStateResponse): _78.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionClientStateResponseProtoMsg): _78.QueryConnectionClientStateResponse;
                    toProto(message: _78.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionClientStateResponse): _78.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionConsensusStateRequest;
                    isSDK(o: any): o is _78.QueryConnectionConsensusStateRequestSDKType;
                    isAmino(o: any): o is _78.QueryConnectionConsensusStateRequestAmino;
                    encode(message: _78.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _78.QueryConnectionConsensusStateRequest;
                    toJSON(message: _78.QueryConnectionConsensusStateRequest): import("..").JsonSafe<_78.QueryConnectionConsensusStateRequest>;
                    fromPartial(object: Partial<_78.QueryConnectionConsensusStateRequest>): _78.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _78.QueryConnectionConsensusStateRequestAmino): _78.QueryConnectionConsensusStateRequest;
                    toAmino(message: _78.QueryConnectionConsensusStateRequest): _78.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _78.QueryConnectionConsensusStateRequestAminoMsg): _78.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _78.QueryConnectionConsensusStateRequest): _78.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionConsensusStateRequestProtoMsg): _78.QueryConnectionConsensusStateRequest;
                    toProto(message: _78.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionConsensusStateRequest): _78.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _78.QueryConnectionConsensusStateResponse;
                    isSDK(o: any): o is _78.QueryConnectionConsensusStateResponseSDKType;
                    isAmino(o: any): o is _78.QueryConnectionConsensusStateResponseAmino;
                    encode(message: _78.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _78.QueryConnectionConsensusStateResponse;
                    toJSON(message: _78.QueryConnectionConsensusStateResponse): import("..").JsonSafe<_78.QueryConnectionConsensusStateResponse>;
                    fromPartial(object: Partial<_78.QueryConnectionConsensusStateResponse>): _78.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _78.QueryConnectionConsensusStateResponseAmino): _78.QueryConnectionConsensusStateResponse;
                    toAmino(message: _78.QueryConnectionConsensusStateResponse): _78.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _78.QueryConnectionConsensusStateResponseAminoMsg): _78.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _78.QueryConnectionConsensusStateResponse): _78.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _78.QueryConnectionConsensusStateResponseProtoMsg): _78.QueryConnectionConsensusStateResponse;
                    toProto(message: _78.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _78.QueryConnectionConsensusStateResponse): _78.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.GenesisState;
                    isSDK(o: any): o is _77.GenesisStateSDKType;
                    isAmino(o: any): o is _77.GenesisStateAmino;
                    encode(message: _77.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.GenesisState;
                    fromJSON(object: any): _77.GenesisState;
                    toJSON(message: _77.GenesisState): import("..").JsonSafe<_77.GenesisState>;
                    fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                    fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                    toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                    fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                    toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                    fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                    toProto(message: _77.GenesisState): Uint8Array;
                    toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _76.State;
                stateToJSON(object: _76.State): string;
                State: typeof _76.State;
                StateSDKType: typeof _76.State;
                StateAmino: typeof _76.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.ConnectionEnd;
                    isSDK(o: any): o is _76.ConnectionEndSDKType;
                    isAmino(o: any): o is _76.ConnectionEndAmino;
                    encode(message: _76.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ConnectionEnd;
                    fromJSON(object: any): _76.ConnectionEnd;
                    toJSON(message: _76.ConnectionEnd): import("..").JsonSafe<_76.ConnectionEnd>;
                    fromPartial(object: Partial<_76.ConnectionEnd>): _76.ConnectionEnd;
                    fromAmino(object: _76.ConnectionEndAmino): _76.ConnectionEnd;
                    toAmino(message: _76.ConnectionEnd): _76.ConnectionEndAmino;
                    fromAminoMsg(object: _76.ConnectionEndAminoMsg): _76.ConnectionEnd;
                    toAminoMsg(message: _76.ConnectionEnd): _76.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _76.ConnectionEndProtoMsg): _76.ConnectionEnd;
                    toProto(message: _76.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _76.ConnectionEnd): _76.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.IdentifiedConnection;
                    isSDK(o: any): o is _76.IdentifiedConnectionSDKType;
                    isAmino(o: any): o is _76.IdentifiedConnectionAmino;
                    encode(message: _76.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.IdentifiedConnection;
                    fromJSON(object: any): _76.IdentifiedConnection;
                    toJSON(message: _76.IdentifiedConnection): import("..").JsonSafe<_76.IdentifiedConnection>;
                    fromPartial(object: Partial<_76.IdentifiedConnection>): _76.IdentifiedConnection;
                    fromAmino(object: _76.IdentifiedConnectionAmino): _76.IdentifiedConnection;
                    toAmino(message: _76.IdentifiedConnection): _76.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _76.IdentifiedConnectionAminoMsg): _76.IdentifiedConnection;
                    toAminoMsg(message: _76.IdentifiedConnection): _76.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _76.IdentifiedConnectionProtoMsg): _76.IdentifiedConnection;
                    toProto(message: _76.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _76.IdentifiedConnection): _76.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.Counterparty;
                    isSDK(o: any): o is _76.CounterpartySDKType;
                    isAmino(o: any): o is _76.CounterpartyAmino;
                    encode(message: _76.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.Counterparty;
                    fromJSON(object: any): _76.Counterparty;
                    toJSON(message: _76.Counterparty): import("..").JsonSafe<_76.Counterparty>;
                    fromPartial(object: Partial<_76.Counterparty>): _76.Counterparty;
                    fromAmino(object: _76.CounterpartyAmino): _76.Counterparty;
                    toAmino(message: _76.Counterparty): _76.CounterpartyAmino;
                    fromAminoMsg(object: _76.CounterpartyAminoMsg): _76.Counterparty;
                    toAminoMsg(message: _76.Counterparty): _76.CounterpartyAminoMsg;
                    fromProtoMsg(message: _76.CounterpartyProtoMsg): _76.Counterparty;
                    toProto(message: _76.Counterparty): Uint8Array;
                    toProtoMsg(message: _76.Counterparty): _76.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.ClientPaths;
                    isSDK(o: any): o is _76.ClientPathsSDKType;
                    isAmino(o: any): o is _76.ClientPathsAmino;
                    encode(message: _76.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ClientPaths;
                    fromJSON(object: any): _76.ClientPaths;
                    toJSON(message: _76.ClientPaths): import("..").JsonSafe<_76.ClientPaths>;
                    fromPartial(object: Partial<_76.ClientPaths>): _76.ClientPaths;
                    fromAmino(object: _76.ClientPathsAmino): _76.ClientPaths;
                    toAmino(message: _76.ClientPaths): _76.ClientPathsAmino;
                    fromAminoMsg(object: _76.ClientPathsAminoMsg): _76.ClientPaths;
                    toAminoMsg(message: _76.ClientPaths): _76.ClientPathsAminoMsg;
                    fromProtoMsg(message: _76.ClientPathsProtoMsg): _76.ClientPaths;
                    toProto(message: _76.ClientPaths): Uint8Array;
                    toProtoMsg(message: _76.ClientPaths): _76.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.ConnectionPaths;
                    isSDK(o: any): o is _76.ConnectionPathsSDKType;
                    isAmino(o: any): o is _76.ConnectionPathsAmino;
                    encode(message: _76.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.ConnectionPaths;
                    fromJSON(object: any): _76.ConnectionPaths;
                    toJSON(message: _76.ConnectionPaths): import("..").JsonSafe<_76.ConnectionPaths>;
                    fromPartial(object: Partial<_76.ConnectionPaths>): _76.ConnectionPaths;
                    fromAmino(object: _76.ConnectionPathsAmino): _76.ConnectionPaths;
                    toAmino(message: _76.ConnectionPaths): _76.ConnectionPathsAmino;
                    fromAminoMsg(object: _76.ConnectionPathsAminoMsg): _76.ConnectionPaths;
                    toAminoMsg(message: _76.ConnectionPaths): _76.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _76.ConnectionPathsProtoMsg): _76.ConnectionPaths;
                    toProto(message: _76.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _76.ConnectionPaths): _76.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.Version;
                    isSDK(o: any): o is _76.VersionSDKType;
                    isAmino(o: any): o is _76.VersionAmino;
                    encode(message: _76.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.Version;
                    fromJSON(object: any): _76.Version;
                    toJSON(message: _76.Version): import("..").JsonSafe<_76.Version>;
                    fromPartial(object: Partial<_76.Version>): _76.Version;
                    fromAmino(object: _76.VersionAmino): _76.Version;
                    toAmino(message: _76.Version): _76.VersionAmino;
                    fromAminoMsg(object: _76.VersionAminoMsg): _76.Version;
                    toAminoMsg(message: _76.Version): _76.VersionAminoMsg;
                    fromProtoMsg(message: _76.VersionProtoMsg): _76.Version;
                    toProto(message: _76.Version): Uint8Array;
                    toProtoMsg(message: _76.Version): _76.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.Params;
                    isSDK(o: any): o is _76.ParamsSDKType;
                    isAmino(o: any): o is _76.ParamsAmino;
                    encode(message: _76.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.Params;
                    fromJSON(object: any): _76.Params;
                    toJSON(message: _76.Params): import("..").JsonSafe<_76.Params>;
                    fromPartial(object: Partial<_76.Params>): _76.Params;
                    fromAmino(object: _76.ParamsAmino): _76.Params;
                    toAmino(message: _76.Params): _76.ParamsAmino;
                    fromAminoMsg(object: _76.ParamsAminoMsg): _76.Params;
                    toAminoMsg(message: _76.Params): _76.ParamsAminoMsg;
                    fromProtoMsg(message: _76.ParamsProtoMsg): _76.Params;
                    toProto(message: _76.Params): Uint8Array;
                    toProtoMsg(message: _76.Params): _76.ParamsProtoMsg;
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
                    is(o: any): o is _80.ClientState;
                    isSDK(o: any): o is _80.ClientStateSDKType;
                    isAmino(o: any): o is _80.ClientStateAmino;
                    encode(message: _80.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.ClientState;
                    fromJSON(object: any): _80.ClientState;
                    toJSON(message: _80.ClientState): import("..").JsonSafe<_80.ClientState>;
                    fromPartial(object: Partial<_80.ClientState>): _80.ClientState;
                    fromAmino(object: _80.ClientStateAmino): _80.ClientState;
                    toAmino(message: _80.ClientState): _80.ClientStateAmino;
                    fromAminoMsg(object: _80.ClientStateAminoMsg): _80.ClientState;
                    toAminoMsg(message: _80.ClientState): _80.ClientStateAminoMsg;
                    fromProtoMsg(message: _80.ClientStateProtoMsg): _80.ClientState;
                    toProto(message: _80.ClientState): Uint8Array;
                    toProtoMsg(message: _80.ClientState): _80.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _81.DataType;
                dataTypeToJSON(object: _81.DataType): string;
                DataType: typeof _81.DataType;
                DataTypeSDKType: typeof _81.DataType;
                DataTypeAmino: typeof _81.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ClientState;
                    isSDK(o: any): o is _81.ClientStateSDKType;
                    isAmino(o: any): o is _81.ClientStateAmino;
                    encode(message: _81.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ClientState;
                    fromJSON(object: any): _81.ClientState;
                    toJSON(message: _81.ClientState): import("..").JsonSafe<_81.ClientState>;
                    fromPartial(object: Partial<_81.ClientState>): _81.ClientState;
                    fromAmino(object: _81.ClientStateAmino): _81.ClientState;
                    toAmino(message: _81.ClientState): _81.ClientStateAmino;
                    fromAminoMsg(object: _81.ClientStateAminoMsg): _81.ClientState;
                    toAminoMsg(message: _81.ClientState): _81.ClientStateAminoMsg;
                    fromProtoMsg(message: _81.ClientStateProtoMsg): _81.ClientState;
                    toProto(message: _81.ClientState): Uint8Array;
                    toProtoMsg(message: _81.ClientState): _81.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ConsensusState;
                    isSDK(o: any): o is _81.ConsensusStateSDKType;
                    isAmino(o: any): o is _81.ConsensusStateAmino;
                    encode(message: _81.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ConsensusState;
                    fromJSON(object: any): _81.ConsensusState;
                    toJSON(message: _81.ConsensusState): import("..").JsonSafe<_81.ConsensusState>;
                    fromPartial(object: Partial<_81.ConsensusState>): _81.ConsensusState;
                    fromAmino(object: _81.ConsensusStateAmino): _81.ConsensusState;
                    toAmino(message: _81.ConsensusState): _81.ConsensusStateAmino;
                    fromAminoMsg(object: _81.ConsensusStateAminoMsg): _81.ConsensusState;
                    toAminoMsg(message: _81.ConsensusState): _81.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _81.ConsensusStateProtoMsg): _81.ConsensusState;
                    toProto(message: _81.ConsensusState): Uint8Array;
                    toProtoMsg(message: _81.ConsensusState): _81.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.Header;
                    isSDK(o: any): o is _81.HeaderSDKType;
                    isAmino(o: any): o is _81.HeaderAmino;
                    encode(message: _81.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.Header;
                    fromJSON(object: any): _81.Header;
                    toJSON(message: _81.Header): import("..").JsonSafe<_81.Header>;
                    fromPartial(object: Partial<_81.Header>): _81.Header;
                    fromAmino(object: _81.HeaderAmino): _81.Header;
                    toAmino(message: _81.Header): _81.HeaderAmino;
                    fromAminoMsg(object: _81.HeaderAminoMsg): _81.Header;
                    toAminoMsg(message: _81.Header): _81.HeaderAminoMsg;
                    fromProtoMsg(message: _81.HeaderProtoMsg): _81.Header;
                    toProto(message: _81.Header): Uint8Array;
                    toProtoMsg(message: _81.Header): _81.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.Misbehaviour;
                    isSDK(o: any): o is _81.MisbehaviourSDKType;
                    isAmino(o: any): o is _81.MisbehaviourAmino;
                    encode(message: _81.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.Misbehaviour;
                    fromJSON(object: any): _81.Misbehaviour;
                    toJSON(message: _81.Misbehaviour): import("..").JsonSafe<_81.Misbehaviour>;
                    fromPartial(object: Partial<_81.Misbehaviour>): _81.Misbehaviour;
                    fromAmino(object: _81.MisbehaviourAmino): _81.Misbehaviour;
                    toAmino(message: _81.Misbehaviour): _81.MisbehaviourAmino;
                    fromAminoMsg(object: _81.MisbehaviourAminoMsg): _81.Misbehaviour;
                    toAminoMsg(message: _81.Misbehaviour): _81.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _81.MisbehaviourProtoMsg): _81.Misbehaviour;
                    toProto(message: _81.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _81.Misbehaviour): _81.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.SignatureAndData;
                    isSDK(o: any): o is _81.SignatureAndDataSDKType;
                    isAmino(o: any): o is _81.SignatureAndDataAmino;
                    encode(message: _81.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.SignatureAndData;
                    fromJSON(object: any): _81.SignatureAndData;
                    toJSON(message: _81.SignatureAndData): import("..").JsonSafe<_81.SignatureAndData>;
                    fromPartial(object: Partial<_81.SignatureAndData>): _81.SignatureAndData;
                    fromAmino(object: _81.SignatureAndDataAmino): _81.SignatureAndData;
                    toAmino(message: _81.SignatureAndData): _81.SignatureAndDataAmino;
                    fromAminoMsg(object: _81.SignatureAndDataAminoMsg): _81.SignatureAndData;
                    toAminoMsg(message: _81.SignatureAndData): _81.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _81.SignatureAndDataProtoMsg): _81.SignatureAndData;
                    toProto(message: _81.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _81.SignatureAndData): _81.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.TimestampedSignatureData;
                    isSDK(o: any): o is _81.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _81.TimestampedSignatureDataAmino;
                    encode(message: _81.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.TimestampedSignatureData;
                    fromJSON(object: any): _81.TimestampedSignatureData;
                    toJSON(message: _81.TimestampedSignatureData): import("..").JsonSafe<_81.TimestampedSignatureData>;
                    fromPartial(object: Partial<_81.TimestampedSignatureData>): _81.TimestampedSignatureData;
                    fromAmino(object: _81.TimestampedSignatureDataAmino): _81.TimestampedSignatureData;
                    toAmino(message: _81.TimestampedSignatureData): _81.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _81.TimestampedSignatureDataAminoMsg): _81.TimestampedSignatureData;
                    toAminoMsg(message: _81.TimestampedSignatureData): _81.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _81.TimestampedSignatureDataProtoMsg): _81.TimestampedSignatureData;
                    toProto(message: _81.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _81.TimestampedSignatureData): _81.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.SignBytes;
                    isSDK(o: any): o is _81.SignBytesSDKType;
                    isAmino(o: any): o is _81.SignBytesAmino;
                    encode(message: _81.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.SignBytes;
                    fromJSON(object: any): _81.SignBytes;
                    toJSON(message: _81.SignBytes): import("..").JsonSafe<_81.SignBytes>;
                    fromPartial(object: Partial<_81.SignBytes>): _81.SignBytes;
                    fromAmino(object: _81.SignBytesAmino): _81.SignBytes;
                    toAmino(message: _81.SignBytes): _81.SignBytesAmino;
                    fromAminoMsg(object: _81.SignBytesAminoMsg): _81.SignBytes;
                    toAminoMsg(message: _81.SignBytes): _81.SignBytesAminoMsg;
                    fromProtoMsg(message: _81.SignBytesProtoMsg): _81.SignBytes;
                    toProto(message: _81.SignBytes): Uint8Array;
                    toProtoMsg(message: _81.SignBytes): _81.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.HeaderData;
                    isSDK(o: any): o is _81.HeaderDataSDKType;
                    isAmino(o: any): o is _81.HeaderDataAmino;
                    encode(message: _81.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.HeaderData;
                    fromJSON(object: any): _81.HeaderData;
                    toJSON(message: _81.HeaderData): import("..").JsonSafe<_81.HeaderData>;
                    fromPartial(object: Partial<_81.HeaderData>): _81.HeaderData;
                    fromAmino(object: _81.HeaderDataAmino): _81.HeaderData;
                    toAmino(message: _81.HeaderData): _81.HeaderDataAmino;
                    fromAminoMsg(object: _81.HeaderDataAminoMsg): _81.HeaderData;
                    toAminoMsg(message: _81.HeaderData): _81.HeaderDataAminoMsg;
                    fromProtoMsg(message: _81.HeaderDataProtoMsg): _81.HeaderData;
                    toProto(message: _81.HeaderData): Uint8Array;
                    toProtoMsg(message: _81.HeaderData): _81.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ClientStateData;
                    isSDK(o: any): o is _81.ClientStateDataSDKType;
                    isAmino(o: any): o is _81.ClientStateDataAmino;
                    encode(message: _81.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ClientStateData;
                    fromJSON(object: any): _81.ClientStateData;
                    toJSON(message: _81.ClientStateData): import("..").JsonSafe<_81.ClientStateData>;
                    fromPartial(object: Partial<_81.ClientStateData>): _81.ClientStateData;
                    fromAmino(object: _81.ClientStateDataAmino): _81.ClientStateData;
                    toAmino(message: _81.ClientStateData): _81.ClientStateDataAmino;
                    fromAminoMsg(object: _81.ClientStateDataAminoMsg): _81.ClientStateData;
                    toAminoMsg(message: _81.ClientStateData): _81.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _81.ClientStateDataProtoMsg): _81.ClientStateData;
                    toProto(message: _81.ClientStateData): Uint8Array;
                    toProtoMsg(message: _81.ClientStateData): _81.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ConsensusStateData;
                    isSDK(o: any): o is _81.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _81.ConsensusStateDataAmino;
                    encode(message: _81.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ConsensusStateData;
                    fromJSON(object: any): _81.ConsensusStateData;
                    toJSON(message: _81.ConsensusStateData): import("..").JsonSafe<_81.ConsensusStateData>;
                    fromPartial(object: Partial<_81.ConsensusStateData>): _81.ConsensusStateData;
                    fromAmino(object: _81.ConsensusStateDataAmino): _81.ConsensusStateData;
                    toAmino(message: _81.ConsensusStateData): _81.ConsensusStateDataAmino;
                    fromAminoMsg(object: _81.ConsensusStateDataAminoMsg): _81.ConsensusStateData;
                    toAminoMsg(message: _81.ConsensusStateData): _81.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _81.ConsensusStateDataProtoMsg): _81.ConsensusStateData;
                    toProto(message: _81.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _81.ConsensusStateData): _81.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ConnectionStateData;
                    isSDK(o: any): o is _81.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _81.ConnectionStateDataAmino;
                    encode(message: _81.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ConnectionStateData;
                    fromJSON(object: any): _81.ConnectionStateData;
                    toJSON(message: _81.ConnectionStateData): import("..").JsonSafe<_81.ConnectionStateData>;
                    fromPartial(object: Partial<_81.ConnectionStateData>): _81.ConnectionStateData;
                    fromAmino(object: _81.ConnectionStateDataAmino): _81.ConnectionStateData;
                    toAmino(message: _81.ConnectionStateData): _81.ConnectionStateDataAmino;
                    fromAminoMsg(object: _81.ConnectionStateDataAminoMsg): _81.ConnectionStateData;
                    toAminoMsg(message: _81.ConnectionStateData): _81.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _81.ConnectionStateDataProtoMsg): _81.ConnectionStateData;
                    toProto(message: _81.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _81.ConnectionStateData): _81.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ChannelStateData;
                    isSDK(o: any): o is _81.ChannelStateDataSDKType;
                    isAmino(o: any): o is _81.ChannelStateDataAmino;
                    encode(message: _81.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.ChannelStateData;
                    fromJSON(object: any): _81.ChannelStateData;
                    toJSON(message: _81.ChannelStateData): import("..").JsonSafe<_81.ChannelStateData>;
                    fromPartial(object: Partial<_81.ChannelStateData>): _81.ChannelStateData;
                    fromAmino(object: _81.ChannelStateDataAmino): _81.ChannelStateData;
                    toAmino(message: _81.ChannelStateData): _81.ChannelStateDataAmino;
                    fromAminoMsg(object: _81.ChannelStateDataAminoMsg): _81.ChannelStateData;
                    toAminoMsg(message: _81.ChannelStateData): _81.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _81.ChannelStateDataProtoMsg): _81.ChannelStateData;
                    toProto(message: _81.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _81.ChannelStateData): _81.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.PacketCommitmentData;
                    isSDK(o: any): o is _81.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _81.PacketCommitmentDataAmino;
                    encode(message: _81.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.PacketCommitmentData;
                    fromJSON(object: any): _81.PacketCommitmentData;
                    toJSON(message: _81.PacketCommitmentData): import("..").JsonSafe<_81.PacketCommitmentData>;
                    fromPartial(object: Partial<_81.PacketCommitmentData>): _81.PacketCommitmentData;
                    fromAmino(object: _81.PacketCommitmentDataAmino): _81.PacketCommitmentData;
                    toAmino(message: _81.PacketCommitmentData): _81.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _81.PacketCommitmentDataAminoMsg): _81.PacketCommitmentData;
                    toAminoMsg(message: _81.PacketCommitmentData): _81.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _81.PacketCommitmentDataProtoMsg): _81.PacketCommitmentData;
                    toProto(message: _81.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _81.PacketCommitmentData): _81.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.PacketAcknowledgementData;
                    isSDK(o: any): o is _81.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _81.PacketAcknowledgementDataAmino;
                    encode(message: _81.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.PacketAcknowledgementData;
                    fromJSON(object: any): _81.PacketAcknowledgementData;
                    toJSON(message: _81.PacketAcknowledgementData): import("..").JsonSafe<_81.PacketAcknowledgementData>;
                    fromPartial(object: Partial<_81.PacketAcknowledgementData>): _81.PacketAcknowledgementData;
                    fromAmino(object: _81.PacketAcknowledgementDataAmino): _81.PacketAcknowledgementData;
                    toAmino(message: _81.PacketAcknowledgementData): _81.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _81.PacketAcknowledgementDataAminoMsg): _81.PacketAcknowledgementData;
                    toAminoMsg(message: _81.PacketAcknowledgementData): _81.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _81.PacketAcknowledgementDataProtoMsg): _81.PacketAcknowledgementData;
                    toProto(message: _81.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _81.PacketAcknowledgementData): _81.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _81.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _81.PacketReceiptAbsenceDataAmino;
                    encode(message: _81.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.PacketReceiptAbsenceData;
                    fromJSON(object: any): _81.PacketReceiptAbsenceData;
                    toJSON(message: _81.PacketReceiptAbsenceData): import("..").JsonSafe<_81.PacketReceiptAbsenceData>;
                    fromPartial(object: Partial<_81.PacketReceiptAbsenceData>): _81.PacketReceiptAbsenceData;
                    fromAmino(object: _81.PacketReceiptAbsenceDataAmino): _81.PacketReceiptAbsenceData;
                    toAmino(message: _81.PacketReceiptAbsenceData): _81.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _81.PacketReceiptAbsenceDataAminoMsg): _81.PacketReceiptAbsenceData;
                    toAminoMsg(message: _81.PacketReceiptAbsenceData): _81.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _81.PacketReceiptAbsenceDataProtoMsg): _81.PacketReceiptAbsenceData;
                    toProto(message: _81.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _81.PacketReceiptAbsenceData): _81.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.NextSequenceRecvData;
                    isSDK(o: any): o is _81.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _81.NextSequenceRecvDataAmino;
                    encode(message: _81.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.NextSequenceRecvData;
                    fromJSON(object: any): _81.NextSequenceRecvData;
                    toJSON(message: _81.NextSequenceRecvData): import("..").JsonSafe<_81.NextSequenceRecvData>;
                    fromPartial(object: Partial<_81.NextSequenceRecvData>): _81.NextSequenceRecvData;
                    fromAmino(object: _81.NextSequenceRecvDataAmino): _81.NextSequenceRecvData;
                    toAmino(message: _81.NextSequenceRecvData): _81.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _81.NextSequenceRecvDataAminoMsg): _81.NextSequenceRecvData;
                    toAminoMsg(message: _81.NextSequenceRecvData): _81.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _81.NextSequenceRecvDataProtoMsg): _81.NextSequenceRecvData;
                    toProto(message: _81.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _81.NextSequenceRecvData): _81.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _82.DataType;
                dataTypeToJSON(object: _82.DataType): string;
                DataType: typeof _82.DataType;
                DataTypeSDKType: typeof _82.DataType;
                DataTypeAmino: typeof _82.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.ClientState;
                    isSDK(o: any): o is _82.ClientStateSDKType;
                    isAmino(o: any): o is _82.ClientStateAmino;
                    encode(message: _82.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.ClientState;
                    fromJSON(object: any): _82.ClientState;
                    toJSON(message: _82.ClientState): import("..").JsonSafe<_82.ClientState>;
                    fromPartial(object: Partial<_82.ClientState>): _82.ClientState;
                    fromAmino(object: _82.ClientStateAmino): _82.ClientState;
                    toAmino(message: _82.ClientState): _82.ClientStateAmino;
                    fromAminoMsg(object: _82.ClientStateAminoMsg): _82.ClientState;
                    toAminoMsg(message: _82.ClientState): _82.ClientStateAminoMsg;
                    fromProtoMsg(message: _82.ClientStateProtoMsg): _82.ClientState;
                    toProto(message: _82.ClientState): Uint8Array;
                    toProtoMsg(message: _82.ClientState): _82.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.ConsensusState;
                    isSDK(o: any): o is _82.ConsensusStateSDKType;
                    isAmino(o: any): o is _82.ConsensusStateAmino;
                    encode(message: _82.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.ConsensusState;
                    fromJSON(object: any): _82.ConsensusState;
                    toJSON(message: _82.ConsensusState): import("..").JsonSafe<_82.ConsensusState>;
                    fromPartial(object: Partial<_82.ConsensusState>): _82.ConsensusState;
                    fromAmino(object: _82.ConsensusStateAmino): _82.ConsensusState;
                    toAmino(message: _82.ConsensusState): _82.ConsensusStateAmino;
                    fromAminoMsg(object: _82.ConsensusStateAminoMsg): _82.ConsensusState;
                    toAminoMsg(message: _82.ConsensusState): _82.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _82.ConsensusStateProtoMsg): _82.ConsensusState;
                    toProto(message: _82.ConsensusState): Uint8Array;
                    toProtoMsg(message: _82.ConsensusState): _82.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.Header;
                    isSDK(o: any): o is _82.HeaderSDKType;
                    isAmino(o: any): o is _82.HeaderAmino;
                    encode(message: _82.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.Header;
                    fromJSON(object: any): _82.Header;
                    toJSON(message: _82.Header): import("..").JsonSafe<_82.Header>;
                    fromPartial(object: Partial<_82.Header>): _82.Header;
                    fromAmino(object: _82.HeaderAmino): _82.Header;
                    toAmino(message: _82.Header): _82.HeaderAmino;
                    fromAminoMsg(object: _82.HeaderAminoMsg): _82.Header;
                    toAminoMsg(message: _82.Header): _82.HeaderAminoMsg;
                    fromProtoMsg(message: _82.HeaderProtoMsg): _82.Header;
                    toProto(message: _82.Header): Uint8Array;
                    toProtoMsg(message: _82.Header): _82.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.Misbehaviour;
                    isSDK(o: any): o is _82.MisbehaviourSDKType;
                    isAmino(o: any): o is _82.MisbehaviourAmino;
                    encode(message: _82.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.Misbehaviour;
                    fromJSON(object: any): _82.Misbehaviour;
                    toJSON(message: _82.Misbehaviour): import("..").JsonSafe<_82.Misbehaviour>;
                    fromPartial(object: Partial<_82.Misbehaviour>): _82.Misbehaviour;
                    fromAmino(object: _82.MisbehaviourAmino): _82.Misbehaviour;
                    toAmino(message: _82.Misbehaviour): _82.MisbehaviourAmino;
                    fromAminoMsg(object: _82.MisbehaviourAminoMsg): _82.Misbehaviour;
                    toAminoMsg(message: _82.Misbehaviour): _82.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _82.MisbehaviourProtoMsg): _82.Misbehaviour;
                    toProto(message: _82.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _82.Misbehaviour): _82.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.SignatureAndData;
                    isSDK(o: any): o is _82.SignatureAndDataSDKType;
                    isAmino(o: any): o is _82.SignatureAndDataAmino;
                    encode(message: _82.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.SignatureAndData;
                    fromJSON(object: any): _82.SignatureAndData;
                    toJSON(message: _82.SignatureAndData): import("..").JsonSafe<_82.SignatureAndData>;
                    fromPartial(object: Partial<_82.SignatureAndData>): _82.SignatureAndData;
                    fromAmino(object: _82.SignatureAndDataAmino): _82.SignatureAndData;
                    toAmino(message: _82.SignatureAndData): _82.SignatureAndDataAmino;
                    fromAminoMsg(object: _82.SignatureAndDataAminoMsg): _82.SignatureAndData;
                    toAminoMsg(message: _82.SignatureAndData): _82.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _82.SignatureAndDataProtoMsg): _82.SignatureAndData;
                    toProto(message: _82.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _82.SignatureAndData): _82.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.TimestampedSignatureData;
                    isSDK(o: any): o is _82.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _82.TimestampedSignatureDataAmino;
                    encode(message: _82.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.TimestampedSignatureData;
                    fromJSON(object: any): _82.TimestampedSignatureData;
                    toJSON(message: _82.TimestampedSignatureData): import("..").JsonSafe<_82.TimestampedSignatureData>;
                    fromPartial(object: Partial<_82.TimestampedSignatureData>): _82.TimestampedSignatureData;
                    fromAmino(object: _82.TimestampedSignatureDataAmino): _82.TimestampedSignatureData;
                    toAmino(message: _82.TimestampedSignatureData): _82.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _82.TimestampedSignatureDataAminoMsg): _82.TimestampedSignatureData;
                    toAminoMsg(message: _82.TimestampedSignatureData): _82.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _82.TimestampedSignatureDataProtoMsg): _82.TimestampedSignatureData;
                    toProto(message: _82.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _82.TimestampedSignatureData): _82.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.SignBytes;
                    isSDK(o: any): o is _82.SignBytesSDKType;
                    isAmino(o: any): o is _82.SignBytesAmino;
                    encode(message: _82.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.SignBytes;
                    fromJSON(object: any): _82.SignBytes;
                    toJSON(message: _82.SignBytes): import("..").JsonSafe<_82.SignBytes>;
                    fromPartial(object: Partial<_82.SignBytes>): _82.SignBytes;
                    fromAmino(object: _82.SignBytesAmino): _82.SignBytes;
                    toAmino(message: _82.SignBytes): _82.SignBytesAmino;
                    fromAminoMsg(object: _82.SignBytesAminoMsg): _82.SignBytes;
                    toAminoMsg(message: _82.SignBytes): _82.SignBytesAminoMsg;
                    fromProtoMsg(message: _82.SignBytesProtoMsg): _82.SignBytes;
                    toProto(message: _82.SignBytes): Uint8Array;
                    toProtoMsg(message: _82.SignBytes): _82.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.HeaderData;
                    isSDK(o: any): o is _82.HeaderDataSDKType;
                    isAmino(o: any): o is _82.HeaderDataAmino;
                    encode(message: _82.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.HeaderData;
                    fromJSON(object: any): _82.HeaderData;
                    toJSON(message: _82.HeaderData): import("..").JsonSafe<_82.HeaderData>;
                    fromPartial(object: Partial<_82.HeaderData>): _82.HeaderData;
                    fromAmino(object: _82.HeaderDataAmino): _82.HeaderData;
                    toAmino(message: _82.HeaderData): _82.HeaderDataAmino;
                    fromAminoMsg(object: _82.HeaderDataAminoMsg): _82.HeaderData;
                    toAminoMsg(message: _82.HeaderData): _82.HeaderDataAminoMsg;
                    fromProtoMsg(message: _82.HeaderDataProtoMsg): _82.HeaderData;
                    toProto(message: _82.HeaderData): Uint8Array;
                    toProtoMsg(message: _82.HeaderData): _82.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.ClientStateData;
                    isSDK(o: any): o is _82.ClientStateDataSDKType;
                    isAmino(o: any): o is _82.ClientStateDataAmino;
                    encode(message: _82.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.ClientStateData;
                    fromJSON(object: any): _82.ClientStateData;
                    toJSON(message: _82.ClientStateData): import("..").JsonSafe<_82.ClientStateData>;
                    fromPartial(object: Partial<_82.ClientStateData>): _82.ClientStateData;
                    fromAmino(object: _82.ClientStateDataAmino): _82.ClientStateData;
                    toAmino(message: _82.ClientStateData): _82.ClientStateDataAmino;
                    fromAminoMsg(object: _82.ClientStateDataAminoMsg): _82.ClientStateData;
                    toAminoMsg(message: _82.ClientStateData): _82.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _82.ClientStateDataProtoMsg): _82.ClientStateData;
                    toProto(message: _82.ClientStateData): Uint8Array;
                    toProtoMsg(message: _82.ClientStateData): _82.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.ConsensusStateData;
                    isSDK(o: any): o is _82.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _82.ConsensusStateDataAmino;
                    encode(message: _82.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.ConsensusStateData;
                    fromJSON(object: any): _82.ConsensusStateData;
                    toJSON(message: _82.ConsensusStateData): import("..").JsonSafe<_82.ConsensusStateData>;
                    fromPartial(object: Partial<_82.ConsensusStateData>): _82.ConsensusStateData;
                    fromAmino(object: _82.ConsensusStateDataAmino): _82.ConsensusStateData;
                    toAmino(message: _82.ConsensusStateData): _82.ConsensusStateDataAmino;
                    fromAminoMsg(object: _82.ConsensusStateDataAminoMsg): _82.ConsensusStateData;
                    toAminoMsg(message: _82.ConsensusStateData): _82.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _82.ConsensusStateDataProtoMsg): _82.ConsensusStateData;
                    toProto(message: _82.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _82.ConsensusStateData): _82.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.ConnectionStateData;
                    isSDK(o: any): o is _82.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _82.ConnectionStateDataAmino;
                    encode(message: _82.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.ConnectionStateData;
                    fromJSON(object: any): _82.ConnectionStateData;
                    toJSON(message: _82.ConnectionStateData): import("..").JsonSafe<_82.ConnectionStateData>;
                    fromPartial(object: Partial<_82.ConnectionStateData>): _82.ConnectionStateData;
                    fromAmino(object: _82.ConnectionStateDataAmino): _82.ConnectionStateData;
                    toAmino(message: _82.ConnectionStateData): _82.ConnectionStateDataAmino;
                    fromAminoMsg(object: _82.ConnectionStateDataAminoMsg): _82.ConnectionStateData;
                    toAminoMsg(message: _82.ConnectionStateData): _82.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _82.ConnectionStateDataProtoMsg): _82.ConnectionStateData;
                    toProto(message: _82.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _82.ConnectionStateData): _82.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.ChannelStateData;
                    isSDK(o: any): o is _82.ChannelStateDataSDKType;
                    isAmino(o: any): o is _82.ChannelStateDataAmino;
                    encode(message: _82.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.ChannelStateData;
                    fromJSON(object: any): _82.ChannelStateData;
                    toJSON(message: _82.ChannelStateData): import("..").JsonSafe<_82.ChannelStateData>;
                    fromPartial(object: Partial<_82.ChannelStateData>): _82.ChannelStateData;
                    fromAmino(object: _82.ChannelStateDataAmino): _82.ChannelStateData;
                    toAmino(message: _82.ChannelStateData): _82.ChannelStateDataAmino;
                    fromAminoMsg(object: _82.ChannelStateDataAminoMsg): _82.ChannelStateData;
                    toAminoMsg(message: _82.ChannelStateData): _82.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _82.ChannelStateDataProtoMsg): _82.ChannelStateData;
                    toProto(message: _82.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _82.ChannelStateData): _82.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.PacketCommitmentData;
                    isSDK(o: any): o is _82.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _82.PacketCommitmentDataAmino;
                    encode(message: _82.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.PacketCommitmentData;
                    fromJSON(object: any): _82.PacketCommitmentData;
                    toJSON(message: _82.PacketCommitmentData): import("..").JsonSafe<_82.PacketCommitmentData>;
                    fromPartial(object: Partial<_82.PacketCommitmentData>): _82.PacketCommitmentData;
                    fromAmino(object: _82.PacketCommitmentDataAmino): _82.PacketCommitmentData;
                    toAmino(message: _82.PacketCommitmentData): _82.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _82.PacketCommitmentDataAminoMsg): _82.PacketCommitmentData;
                    toAminoMsg(message: _82.PacketCommitmentData): _82.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _82.PacketCommitmentDataProtoMsg): _82.PacketCommitmentData;
                    toProto(message: _82.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _82.PacketCommitmentData): _82.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.PacketAcknowledgementData;
                    isSDK(o: any): o is _82.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _82.PacketAcknowledgementDataAmino;
                    encode(message: _82.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.PacketAcknowledgementData;
                    fromJSON(object: any): _82.PacketAcknowledgementData;
                    toJSON(message: _82.PacketAcknowledgementData): import("..").JsonSafe<_82.PacketAcknowledgementData>;
                    fromPartial(object: Partial<_82.PacketAcknowledgementData>): _82.PacketAcknowledgementData;
                    fromAmino(object: _82.PacketAcknowledgementDataAmino): _82.PacketAcknowledgementData;
                    toAmino(message: _82.PacketAcknowledgementData): _82.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _82.PacketAcknowledgementDataAminoMsg): _82.PacketAcknowledgementData;
                    toAminoMsg(message: _82.PacketAcknowledgementData): _82.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _82.PacketAcknowledgementDataProtoMsg): _82.PacketAcknowledgementData;
                    toProto(message: _82.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _82.PacketAcknowledgementData): _82.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _82.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _82.PacketReceiptAbsenceDataAmino;
                    encode(message: _82.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.PacketReceiptAbsenceData;
                    fromJSON(object: any): _82.PacketReceiptAbsenceData;
                    toJSON(message: _82.PacketReceiptAbsenceData): import("..").JsonSafe<_82.PacketReceiptAbsenceData>;
                    fromPartial(object: Partial<_82.PacketReceiptAbsenceData>): _82.PacketReceiptAbsenceData;
                    fromAmino(object: _82.PacketReceiptAbsenceDataAmino): _82.PacketReceiptAbsenceData;
                    toAmino(message: _82.PacketReceiptAbsenceData): _82.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _82.PacketReceiptAbsenceDataAminoMsg): _82.PacketReceiptAbsenceData;
                    toAminoMsg(message: _82.PacketReceiptAbsenceData): _82.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _82.PacketReceiptAbsenceDataProtoMsg): _82.PacketReceiptAbsenceData;
                    toProto(message: _82.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _82.PacketReceiptAbsenceData): _82.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _82.NextSequenceRecvData;
                    isSDK(o: any): o is _82.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _82.NextSequenceRecvDataAmino;
                    encode(message: _82.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.NextSequenceRecvData;
                    fromJSON(object: any): _82.NextSequenceRecvData;
                    toJSON(message: _82.NextSequenceRecvData): import("..").JsonSafe<_82.NextSequenceRecvData>;
                    fromPartial(object: Partial<_82.NextSequenceRecvData>): _82.NextSequenceRecvData;
                    fromAmino(object: _82.NextSequenceRecvDataAmino): _82.NextSequenceRecvData;
                    toAmino(message: _82.NextSequenceRecvData): _82.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _82.NextSequenceRecvDataAminoMsg): _82.NextSequenceRecvData;
                    toAminoMsg(message: _82.NextSequenceRecvData): _82.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _82.NextSequenceRecvDataProtoMsg): _82.NextSequenceRecvData;
                    toProto(message: _82.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _82.NextSequenceRecvData): _82.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _83.ClientState;
                    isSDK(o: any): o is _83.ClientStateSDKType;
                    isAmino(o: any): o is _83.ClientStateAmino;
                    encode(message: _83.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.ClientState;
                    fromJSON(object: any): _83.ClientState;
                    toJSON(message: _83.ClientState): import("..").JsonSafe<_83.ClientState>;
                    fromPartial(object: Partial<_83.ClientState>): _83.ClientState;
                    fromAmino(object: _83.ClientStateAmino): _83.ClientState;
                    toAmino(message: _83.ClientState): _83.ClientStateAmino;
                    fromAminoMsg(object: _83.ClientStateAminoMsg): _83.ClientState;
                    toAminoMsg(message: _83.ClientState): _83.ClientStateAminoMsg;
                    fromProtoMsg(message: _83.ClientStateProtoMsg): _83.ClientState;
                    toProto(message: _83.ClientState): Uint8Array;
                    toProtoMsg(message: _83.ClientState): _83.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _83.ConsensusState;
                    isSDK(o: any): o is _83.ConsensusStateSDKType;
                    isAmino(o: any): o is _83.ConsensusStateAmino;
                    encode(message: _83.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.ConsensusState;
                    fromJSON(object: any): _83.ConsensusState;
                    toJSON(message: _83.ConsensusState): import("..").JsonSafe<_83.ConsensusState>;
                    fromPartial(object: Partial<_83.ConsensusState>): _83.ConsensusState;
                    fromAmino(object: _83.ConsensusStateAmino): _83.ConsensusState;
                    toAmino(message: _83.ConsensusState): _83.ConsensusStateAmino;
                    fromAminoMsg(object: _83.ConsensusStateAminoMsg): _83.ConsensusState;
                    toAminoMsg(message: _83.ConsensusState): _83.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _83.ConsensusStateProtoMsg): _83.ConsensusState;
                    toProto(message: _83.ConsensusState): Uint8Array;
                    toProtoMsg(message: _83.ConsensusState): _83.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _83.Misbehaviour;
                    isSDK(o: any): o is _83.MisbehaviourSDKType;
                    isAmino(o: any): o is _83.MisbehaviourAmino;
                    encode(message: _83.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Misbehaviour;
                    fromJSON(object: any): _83.Misbehaviour;
                    toJSON(message: _83.Misbehaviour): import("..").JsonSafe<_83.Misbehaviour>;
                    fromPartial(object: Partial<_83.Misbehaviour>): _83.Misbehaviour;
                    fromAmino(object: _83.MisbehaviourAmino): _83.Misbehaviour;
                    toAmino(message: _83.Misbehaviour): _83.MisbehaviourAmino;
                    fromAminoMsg(object: _83.MisbehaviourAminoMsg): _83.Misbehaviour;
                    toAminoMsg(message: _83.Misbehaviour): _83.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _83.MisbehaviourProtoMsg): _83.Misbehaviour;
                    toProto(message: _83.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _83.Misbehaviour): _83.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _83.Header;
                    isSDK(o: any): o is _83.HeaderSDKType;
                    isAmino(o: any): o is _83.HeaderAmino;
                    encode(message: _83.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Header;
                    fromJSON(object: any): _83.Header;
                    toJSON(message: _83.Header): import("..").JsonSafe<_83.Header>;
                    fromPartial(object: Partial<_83.Header>): _83.Header;
                    fromAmino(object: _83.HeaderAmino): _83.Header;
                    toAmino(message: _83.Header): _83.HeaderAmino;
                    fromAminoMsg(object: _83.HeaderAminoMsg): _83.Header;
                    toAminoMsg(message: _83.Header): _83.HeaderAminoMsg;
                    fromProtoMsg(message: _83.HeaderProtoMsg): _83.Header;
                    toProto(message: _83.Header): Uint8Array;
                    toProtoMsg(message: _83.Header): _83.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _83.Fraction;
                    isSDK(o: any): o is _83.FractionSDKType;
                    isAmino(o: any): o is _83.FractionAmino;
                    encode(message: _83.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Fraction;
                    fromJSON(object: any): _83.Fraction;
                    toJSON(message: _83.Fraction): import("..").JsonSafe<_83.Fraction>;
                    fromPartial(object: Partial<_83.Fraction>): _83.Fraction;
                    fromAmino(object: _83.FractionAmino): _83.Fraction;
                    toAmino(message: _83.Fraction): _83.FractionAmino;
                    fromAminoMsg(object: _83.FractionAminoMsg): _83.Fraction;
                    toAminoMsg(message: _83.Fraction): _83.FractionAminoMsg;
                    fromProtoMsg(message: _83.FractionProtoMsg): _83.Fraction;
                    toProto(message: _83.Fraction): Uint8Array;
                    toProtoMsg(message: _83.Fraction): _83.FractionProtoMsg;
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
                        v1: _208.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _209.MsgClientImpl;
                    };
                    client: {
                        v1: _210.MsgClientImpl;
                    };
                    connection: {
                        v1: _211.MsgClientImpl;
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
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
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
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
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
                            denomTrace(request: _63.QueryDenomTraceRequest): Promise<_63.QueryDenomTraceResponse>;
                            denomTraces(request?: _63.QueryDenomTracesRequest): Promise<_63.QueryDenomTracesResponse>;
                            params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _69.QueryChannelRequest): Promise<_69.QueryChannelResponse>;
                            channels(request?: _69.QueryChannelsRequest): Promise<_69.QueryChannelsResponse>;
                            connectionChannels(request: _69.QueryConnectionChannelsRequest): Promise<_69.QueryConnectionChannelsResponse>;
                            channelClientState(request: _69.QueryChannelClientStateRequest): Promise<_69.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _69.QueryChannelConsensusStateRequest): Promise<_69.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _69.QueryPacketCommitmentRequest): Promise<_69.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _69.QueryPacketCommitmentsRequest): Promise<_69.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _69.QueryPacketReceiptRequest): Promise<_69.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _69.QueryPacketAcknowledgementRequest): Promise<_69.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _69.QueryPacketAcknowledgementsRequest): Promise<_69.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _69.QueryUnreceivedPacketsRequest): Promise<_69.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _69.QueryUnreceivedAcksRequest): Promise<_69.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _69.QueryNextSequenceReceiveRequest): Promise<_69.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _73.QueryClientStateRequest): Promise<_73.QueryClientStateResponse>;
                            clientStates(request?: _73.QueryClientStatesRequest): Promise<_73.QueryClientStatesResponse>;
                            consensusState(request: _73.QueryConsensusStateRequest): Promise<_73.QueryConsensusStateResponse>;
                            consensusStates(request: _73.QueryConsensusStatesRequest): Promise<_73.QueryConsensusStatesResponse>;
                            clientStatus(request: _73.QueryClientStatusRequest): Promise<_73.QueryClientStatusResponse>;
                            clientParams(request?: _73.QueryClientParamsRequest): Promise<_73.QueryClientParamsResponse>;
                            upgradedClientState(request?: _73.QueryUpgradedClientStateRequest): Promise<_73.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _78.QueryConnectionRequest): Promise<_78.QueryConnectionResponse>;
                            connections(request?: _78.QueryConnectionsRequest): Promise<_78.QueryConnectionsResponse>;
                            clientConnections(request: _78.QueryClientConnectionsRequest): Promise<_78.QueryClientConnectionsResponse>;
                            connectionClientState(request: _78.QueryConnectionClientStateRequest): Promise<_78.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _78.QueryConnectionConsensusStateRequest): Promise<_78.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
