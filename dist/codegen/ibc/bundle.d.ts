import * as _60 from "./applications/transfer/v1/genesis";
import * as _61 from "./applications/transfer/v1/query";
import * as _62 from "./applications/transfer/v1/transfer";
import * as _63 from "./applications/transfer/v1/tx";
import * as _64 from "./applications/transfer/v2/packet";
import * as _65 from "./core/channel/v1/channel";
import * as _66 from "./core/channel/v1/genesis";
import * as _67 from "./core/channel/v1/query";
import * as _68 from "./core/channel/v1/tx";
import * as _69 from "./core/client/v1/client";
import * as _70 from "./core/client/v1/genesis";
import * as _71 from "./core/client/v1/query";
import * as _72 from "./core/client/v1/tx";
import * as _73 from "./core/commitment/v1/commitment";
import * as _74 from "./core/connection/v1/connection";
import * as _75 from "./core/connection/v1/genesis";
import * as _76 from "./core/connection/v1/query";
import * as _77 from "./core/connection/v1/tx";
import * as _78 from "./lightclients/localhost/v1/localhost";
import * as _79 from "./lightclients/solomachine/v1/solomachine";
import * as _80 from "./lightclients/solomachine/v2/solomachine";
import * as _81 from "./lightclients/tendermint/v1/tendermint";
import * as _193 from "./applications/transfer/v1/query.rpc.Query";
import * as _194 from "./core/channel/v1/query.rpc.Query";
import * as _195 from "./core/client/v1/query.rpc.Query";
import * as _196 from "./core/connection/v1/query.rpc.Query";
import * as _197 from "./applications/transfer/v1/tx.rpc.msg";
import * as _198 from "./core/channel/v1/tx.rpc.msg";
import * as _199 from "./core/client/v1/tx.rpc.msg";
import * as _200 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _197.MsgClientImpl;
                QueryClientImpl: typeof _193.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _61.QueryDenomTraceRequest): Promise<_61.QueryDenomTraceResponse>;
                    denomTraces(request?: _61.QueryDenomTracesRequest): Promise<_61.QueryDenomTracesResponse>;
                    params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: _63.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _63.MsgTransfer): {
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
                            value: _63.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _63.MsgTransfer): {
                            typeUrl: string;
                            value: _63.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _63.MsgTransfer) => _63.MsgTransferAmino;
                        fromAmino: (object: _63.MsgTransferAmino) => _63.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.MsgTransfer;
                    isSDK(o: any): o is _63.MsgTransferSDKType;
                    isAmino(o: any): o is _63.MsgTransferAmino;
                    encode(message: _63.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgTransfer;
                    fromJSON(object: any): _63.MsgTransfer;
                    toJSON(message: _63.MsgTransfer): {
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
                    fromPartial(object: Partial<_63.MsgTransfer>): _63.MsgTransfer;
                    fromAmino(object: _63.MsgTransferAmino): _63.MsgTransfer;
                    toAmino(message: _63.MsgTransfer): _63.MsgTransferAmino;
                    fromAminoMsg(object: _63.MsgTransferAminoMsg): _63.MsgTransfer;
                    toAminoMsg(message: _63.MsgTransfer): _63.MsgTransferAminoMsg;
                    fromProtoMsg(message: _63.MsgTransferProtoMsg): _63.MsgTransfer;
                    toProto(message: _63.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _63.MsgTransfer): _63.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _63.MsgTransferResponse;
                    isSDK(o: any): o is _63.MsgTransferResponseSDKType;
                    isAmino(o: any): o is _63.MsgTransferResponseAmino;
                    encode(_: _63.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.MsgTransferResponse;
                    fromJSON(_: any): _63.MsgTransferResponse;
                    toJSON(_: _63.MsgTransferResponse): {};
                    fromPartial(_: Partial<_63.MsgTransferResponse>): _63.MsgTransferResponse;
                    fromAmino(_: _63.MsgTransferResponseAmino): _63.MsgTransferResponse;
                    toAmino(_: _63.MsgTransferResponse): _63.MsgTransferResponseAmino;
                    fromAminoMsg(object: _63.MsgTransferResponseAminoMsg): _63.MsgTransferResponse;
                    toAminoMsg(message: _63.MsgTransferResponse): _63.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _63.MsgTransferResponseProtoMsg): _63.MsgTransferResponse;
                    toProto(message: _63.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _63.MsgTransferResponse): _63.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.DenomTrace;
                    isSDK(o: any): o is _62.DenomTraceSDKType;
                    isAmino(o: any): o is _62.DenomTraceAmino;
                    encode(message: _62.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.DenomTrace;
                    fromJSON(object: any): _62.DenomTrace;
                    toJSON(message: _62.DenomTrace): {
                        path: string;
                        baseDenom: string;
                    };
                    fromPartial(object: Partial<_62.DenomTrace>): _62.DenomTrace;
                    fromAmino(object: _62.DenomTraceAmino): _62.DenomTrace;
                    toAmino(message: _62.DenomTrace): _62.DenomTraceAmino;
                    fromAminoMsg(object: _62.DenomTraceAminoMsg): _62.DenomTrace;
                    toAminoMsg(message: _62.DenomTrace): _62.DenomTraceAminoMsg;
                    fromProtoMsg(message: _62.DenomTraceProtoMsg): _62.DenomTrace;
                    toProto(message: _62.DenomTrace): Uint8Array;
                    toProtoMsg(message: _62.DenomTrace): _62.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _62.Params;
                    isSDK(o: any): o is _62.ParamsSDKType;
                    isAmino(o: any): o is _62.ParamsAmino;
                    encode(message: _62.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.Params;
                    fromJSON(object: any): _62.Params;
                    toJSON(message: _62.Params): {
                        sendEnabled: boolean;
                        receiveEnabled: boolean;
                    };
                    fromPartial(object: Partial<_62.Params>): _62.Params;
                    fromAmino(object: _62.ParamsAmino): _62.Params;
                    toAmino(message: _62.Params): _62.ParamsAmino;
                    fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                    toAminoMsg(message: _62.Params): _62.ParamsAminoMsg;
                    fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                    toProto(message: _62.Params): Uint8Array;
                    toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryDenomTraceRequest;
                    isSDK(o: any): o is _61.QueryDenomTraceRequestSDKType;
                    isAmino(o: any): o is _61.QueryDenomTraceRequestAmino;
                    encode(message: _61.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTraceRequest;
                    fromJSON(object: any): _61.QueryDenomTraceRequest;
                    toJSON(message: _61.QueryDenomTraceRequest): {
                        hash: string;
                    };
                    fromPartial(object: Partial<_61.QueryDenomTraceRequest>): _61.QueryDenomTraceRequest;
                    fromAmino(object: _61.QueryDenomTraceRequestAmino): _61.QueryDenomTraceRequest;
                    toAmino(message: _61.QueryDenomTraceRequest): _61.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _61.QueryDenomTraceRequestAminoMsg): _61.QueryDenomTraceRequest;
                    toAminoMsg(message: _61.QueryDenomTraceRequest): _61.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTraceRequestProtoMsg): _61.QueryDenomTraceRequest;
                    toProto(message: _61.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTraceRequest): _61.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryDenomTraceResponse;
                    isSDK(o: any): o is _61.QueryDenomTraceResponseSDKType;
                    isAmino(o: any): o is _61.QueryDenomTraceResponseAmino;
                    encode(message: _61.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTraceResponse;
                    fromJSON(object: any): _61.QueryDenomTraceResponse;
                    toJSON(message: _61.QueryDenomTraceResponse): {
                        denomTrace?: {
                            path: string;
                            baseDenom: string;
                        };
                    };
                    fromPartial(object: Partial<_61.QueryDenomTraceResponse>): _61.QueryDenomTraceResponse;
                    fromAmino(object: _61.QueryDenomTraceResponseAmino): _61.QueryDenomTraceResponse;
                    toAmino(message: _61.QueryDenomTraceResponse): _61.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _61.QueryDenomTraceResponseAminoMsg): _61.QueryDenomTraceResponse;
                    toAminoMsg(message: _61.QueryDenomTraceResponse): _61.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTraceResponseProtoMsg): _61.QueryDenomTraceResponse;
                    toProto(message: _61.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTraceResponse): _61.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryDenomTracesRequest;
                    isSDK(o: any): o is _61.QueryDenomTracesRequestSDKType;
                    isAmino(o: any): o is _61.QueryDenomTracesRequestAmino;
                    encode(message: _61.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTracesRequest;
                    fromJSON(object: any): _61.QueryDenomTracesRequest;
                    toJSON(message: _61.QueryDenomTracesRequest): {
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_61.QueryDenomTracesRequest>): _61.QueryDenomTracesRequest;
                    fromAmino(object: _61.QueryDenomTracesRequestAmino): _61.QueryDenomTracesRequest;
                    toAmino(message: _61.QueryDenomTracesRequest): _61.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _61.QueryDenomTracesRequestAminoMsg): _61.QueryDenomTracesRequest;
                    toAminoMsg(message: _61.QueryDenomTracesRequest): _61.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTracesRequestProtoMsg): _61.QueryDenomTracesRequest;
                    toProto(message: _61.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTracesRequest): _61.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryDenomTracesResponse;
                    isSDK(o: any): o is _61.QueryDenomTracesResponseSDKType;
                    isAmino(o: any): o is _61.QueryDenomTracesResponseAmino;
                    encode(message: _61.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryDenomTracesResponse;
                    fromJSON(object: any): _61.QueryDenomTracesResponse;
                    toJSON(message: _61.QueryDenomTracesResponse): {
                        denomTraces: {
                            path: string;
                            baseDenom: string;
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                    };
                    fromPartial(object: Partial<_61.QueryDenomTracesResponse>): _61.QueryDenomTracesResponse;
                    fromAmino(object: _61.QueryDenomTracesResponseAmino): _61.QueryDenomTracesResponse;
                    toAmino(message: _61.QueryDenomTracesResponse): _61.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _61.QueryDenomTracesResponseAminoMsg): _61.QueryDenomTracesResponse;
                    toAminoMsg(message: _61.QueryDenomTracesResponse): _61.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryDenomTracesResponseProtoMsg): _61.QueryDenomTracesResponse;
                    toProto(message: _61.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryDenomTracesResponse): _61.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryParamsRequest;
                    isSDK(o: any): o is _61.QueryParamsRequestSDKType;
                    isAmino(o: any): o is _61.QueryParamsRequestAmino;
                    encode(_: _61.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryParamsRequest;
                    fromJSON(_: any): _61.QueryParamsRequest;
                    toJSON(_: _61.QueryParamsRequest): {};
                    fromPartial(_: Partial<_61.QueryParamsRequest>): _61.QueryParamsRequest;
                    fromAmino(_: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                    toAmino(_: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                    fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                    toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                    toProto(message: _61.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _61.QueryParamsResponse;
                    isSDK(o: any): o is _61.QueryParamsResponseSDKType;
                    isAmino(o: any): o is _61.QueryParamsResponseAmino;
                    encode(message: _61.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.QueryParamsResponse;
                    fromJSON(object: any): _61.QueryParamsResponse;
                    toJSON(message: _61.QueryParamsResponse): {
                        params?: {
                            sendEnabled: boolean;
                            receiveEnabled: boolean;
                        };
                    };
                    fromPartial(object: Partial<_61.QueryParamsResponse>): _61.QueryParamsResponse;
                    fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                    toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                    fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                    toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                    toProto(message: _61.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _60.GenesisState;
                    isSDK(o: any): o is _60.GenesisStateSDKType;
                    isAmino(o: any): o is _60.GenesisStateAmino;
                    encode(message: _60.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.GenesisState;
                    fromJSON(object: any): _60.GenesisState;
                    toJSON(message: _60.GenesisState): {
                        portId: string;
                        denomTraces: {
                            path: string;
                            baseDenom: string;
                        }[];
                        params: {
                            sendEnabled: boolean;
                            receiveEnabled: boolean;
                        };
                    };
                    fromPartial(object: Partial<_60.GenesisState>): _60.GenesisState;
                    fromAmino(object: _60.GenesisStateAmino): _60.GenesisState;
                    toAmino(message: _60.GenesisState): _60.GenesisStateAmino;
                    fromAminoMsg(object: _60.GenesisStateAminoMsg): _60.GenesisState;
                    toAminoMsg(message: _60.GenesisState): _60.GenesisStateAminoMsg;
                    fromProtoMsg(message: _60.GenesisStateProtoMsg): _60.GenesisState;
                    toProto(message: _60.GenesisState): Uint8Array;
                    toProtoMsg(message: _60.GenesisState): _60.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _64.FungibleTokenPacketData;
                    isSDK(o: any): o is _64.FungibleTokenPacketDataSDKType;
                    isAmino(o: any): o is _64.FungibleTokenPacketDataAmino;
                    encode(message: _64.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.FungibleTokenPacketData;
                    fromJSON(object: any): _64.FungibleTokenPacketData;
                    toJSON(message: _64.FungibleTokenPacketData): {
                        denom: string;
                        amount: string;
                        sender: string;
                        receiver: string;
                    };
                    fromPartial(object: Partial<_64.FungibleTokenPacketData>): _64.FungibleTokenPacketData;
                    fromAmino(object: _64.FungibleTokenPacketDataAmino): _64.FungibleTokenPacketData;
                    toAmino(message: _64.FungibleTokenPacketData): _64.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _64.FungibleTokenPacketDataAminoMsg): _64.FungibleTokenPacketData;
                    toAminoMsg(message: _64.FungibleTokenPacketData): _64.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _64.FungibleTokenPacketDataProtoMsg): _64.FungibleTokenPacketData;
                    toProto(message: _64.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _64.FungibleTokenPacketData): _64.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _198.MsgClientImpl;
                QueryClientImpl: typeof _194.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _67.QueryChannelRequest): Promise<_67.QueryChannelResponse>;
                    channels(request?: _67.QueryChannelsRequest): Promise<_67.QueryChannelsResponse>;
                    connectionChannels(request: _67.QueryConnectionChannelsRequest): Promise<_67.QueryConnectionChannelsResponse>;
                    channelClientState(request: _67.QueryChannelClientStateRequest): Promise<_67.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _67.QueryChannelConsensusStateRequest): Promise<_67.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _67.QueryPacketCommitmentRequest): Promise<_67.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _67.QueryPacketCommitmentsRequest): Promise<_67.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _67.QueryPacketReceiptRequest): Promise<_67.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _67.QueryPacketAcknowledgementRequest): Promise<_67.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _67.QueryPacketAcknowledgementsRequest): Promise<_67.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _67.QueryUnreceivedPacketsRequest): Promise<_67.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _67.QueryUnreceivedAcksRequest): Promise<_67.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _67.QueryNextSequenceReceiveRequest): Promise<_67.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channel: {
                                    state: _65.State;
                                    ordering: _65.Order;
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
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                previousChannelId: string;
                                channel: {
                                    state: _65.State;
                                    ordering: _65.Order;
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
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
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
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
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
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: {
                                portId: string;
                                channelId: string;
                                signer: string;
                            };
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
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
                        recvPacket(value: _68.MsgRecvPacket): {
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
                        timeout(value: _68.MsgTimeout): {
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
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
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
                        acknowledgement(value: _68.MsgAcknowledgement): {
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
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _68.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _68.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _68.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _68.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _68.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _68.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _68.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _68.MsgRecvPacket): {
                            typeUrl: string;
                            value: _68.MsgRecvPacket;
                        };
                        timeout(value: _68.MsgTimeout): {
                            typeUrl: string;
                            value: _68.MsgTimeout;
                        };
                        timeoutOnClose(value: _68.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _68.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _68.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _68.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenInit) => _68.MsgChannelOpenInitAmino;
                        fromAmino: (object: _68.MsgChannelOpenInitAmino) => _68.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenTry) => _68.MsgChannelOpenTryAmino;
                        fromAmino: (object: _68.MsgChannelOpenTryAmino) => _68.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenAck) => _68.MsgChannelOpenAckAmino;
                        fromAmino: (object: _68.MsgChannelOpenAckAmino) => _68.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelOpenConfirm) => _68.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _68.MsgChannelOpenConfirmAmino) => _68.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelCloseInit) => _68.MsgChannelCloseInitAmino;
                        fromAmino: (object: _68.MsgChannelCloseInitAmino) => _68.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _68.MsgChannelCloseConfirm) => _68.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _68.MsgChannelCloseConfirmAmino) => _68.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _68.MsgRecvPacket) => _68.MsgRecvPacketAmino;
                        fromAmino: (object: _68.MsgRecvPacketAmino) => _68.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _68.MsgTimeout) => _68.MsgTimeoutAmino;
                        fromAmino: (object: _68.MsgTimeoutAmino) => _68.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _68.MsgTimeoutOnClose) => _68.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _68.MsgTimeoutOnCloseAmino) => _68.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _68.MsgAcknowledgement) => _68.MsgAcknowledgementAmino;
                        fromAmino: (object: _68.MsgAcknowledgementAmino) => _68.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenInit;
                    isSDK(o: any): o is _68.MsgChannelOpenInitSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenInitAmino;
                    encode(message: _68.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenInit;
                    fromJSON(object: any): _68.MsgChannelOpenInit;
                    toJSON(message: _68.MsgChannelOpenInit): {
                        portId: string;
                        channel: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_68.MsgChannelOpenInit>): _68.MsgChannelOpenInit;
                    fromAmino(object: _68.MsgChannelOpenInitAmino): _68.MsgChannelOpenInit;
                    toAmino(message: _68.MsgChannelOpenInit): _68.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenInitAminoMsg): _68.MsgChannelOpenInit;
                    toAminoMsg(message: _68.MsgChannelOpenInit): _68.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenInitProtoMsg): _68.MsgChannelOpenInit;
                    toProto(message: _68.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenInit): _68.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenInitResponse;
                    isSDK(o: any): o is _68.MsgChannelOpenInitResponseSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenInitResponseAmino;
                    encode(_: _68.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _68.MsgChannelOpenInitResponse;
                    toJSON(_: _68.MsgChannelOpenInitResponse): {};
                    fromPartial(_: Partial<_68.MsgChannelOpenInitResponse>): _68.MsgChannelOpenInitResponse;
                    fromAmino(_: _68.MsgChannelOpenInitResponseAmino): _68.MsgChannelOpenInitResponse;
                    toAmino(_: _68.MsgChannelOpenInitResponse): _68.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenInitResponseAminoMsg): _68.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _68.MsgChannelOpenInitResponse): _68.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenInitResponseProtoMsg): _68.MsgChannelOpenInitResponse;
                    toProto(message: _68.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenInitResponse): _68.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenTry;
                    isSDK(o: any): o is _68.MsgChannelOpenTrySDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenTryAmino;
                    encode(message: _68.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenTry;
                    fromJSON(object: any): _68.MsgChannelOpenTry;
                    toJSON(message: _68.MsgChannelOpenTry): {
                        portId: string;
                        previousChannelId: string;
                        channel: {
                            state: _65.State;
                            ordering: _65.Order;
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
                    fromPartial(object: Partial<_68.MsgChannelOpenTry>): _68.MsgChannelOpenTry;
                    fromAmino(object: _68.MsgChannelOpenTryAmino): _68.MsgChannelOpenTry;
                    toAmino(message: _68.MsgChannelOpenTry): _68.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenTryAminoMsg): _68.MsgChannelOpenTry;
                    toAminoMsg(message: _68.MsgChannelOpenTry): _68.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenTryProtoMsg): _68.MsgChannelOpenTry;
                    toProto(message: _68.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenTry): _68.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenTryResponse;
                    isSDK(o: any): o is _68.MsgChannelOpenTryResponseSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenTryResponseAmino;
                    encode(_: _68.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _68.MsgChannelOpenTryResponse;
                    toJSON(_: _68.MsgChannelOpenTryResponse): {};
                    fromPartial(_: Partial<_68.MsgChannelOpenTryResponse>): _68.MsgChannelOpenTryResponse;
                    fromAmino(_: _68.MsgChannelOpenTryResponseAmino): _68.MsgChannelOpenTryResponse;
                    toAmino(_: _68.MsgChannelOpenTryResponse): _68.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenTryResponseAminoMsg): _68.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _68.MsgChannelOpenTryResponse): _68.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenTryResponseProtoMsg): _68.MsgChannelOpenTryResponse;
                    toProto(message: _68.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenTryResponse): _68.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenAck;
                    isSDK(o: any): o is _68.MsgChannelOpenAckSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenAckAmino;
                    encode(message: _68.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenAck;
                    fromJSON(object: any): _68.MsgChannelOpenAck;
                    toJSON(message: _68.MsgChannelOpenAck): {
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
                    fromPartial(object: Partial<_68.MsgChannelOpenAck>): _68.MsgChannelOpenAck;
                    fromAmino(object: _68.MsgChannelOpenAckAmino): _68.MsgChannelOpenAck;
                    toAmino(message: _68.MsgChannelOpenAck): _68.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenAckAminoMsg): _68.MsgChannelOpenAck;
                    toAminoMsg(message: _68.MsgChannelOpenAck): _68.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenAckProtoMsg): _68.MsgChannelOpenAck;
                    toProto(message: _68.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenAck): _68.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenAckResponse;
                    isSDK(o: any): o is _68.MsgChannelOpenAckResponseSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenAckResponseAmino;
                    encode(_: _68.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _68.MsgChannelOpenAckResponse;
                    toJSON(_: _68.MsgChannelOpenAckResponse): {};
                    fromPartial(_: Partial<_68.MsgChannelOpenAckResponse>): _68.MsgChannelOpenAckResponse;
                    fromAmino(_: _68.MsgChannelOpenAckResponseAmino): _68.MsgChannelOpenAckResponse;
                    toAmino(_: _68.MsgChannelOpenAckResponse): _68.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenAckResponseAminoMsg): _68.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _68.MsgChannelOpenAckResponse): _68.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenAckResponseProtoMsg): _68.MsgChannelOpenAckResponse;
                    toProto(message: _68.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenAckResponse): _68.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenConfirm;
                    isSDK(o: any): o is _68.MsgChannelOpenConfirmSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenConfirmAmino;
                    encode(message: _68.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenConfirm;
                    fromJSON(object: any): _68.MsgChannelOpenConfirm;
                    toJSON(message: _68.MsgChannelOpenConfirm): {
                        portId: string;
                        channelId: string;
                        proofAck: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_68.MsgChannelOpenConfirm>): _68.MsgChannelOpenConfirm;
                    fromAmino(object: _68.MsgChannelOpenConfirmAmino): _68.MsgChannelOpenConfirm;
                    toAmino(message: _68.MsgChannelOpenConfirm): _68.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenConfirmAminoMsg): _68.MsgChannelOpenConfirm;
                    toAminoMsg(message: _68.MsgChannelOpenConfirm): _68.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenConfirmProtoMsg): _68.MsgChannelOpenConfirm;
                    toProto(message: _68.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenConfirm): _68.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelOpenConfirmResponse;
                    isSDK(o: any): o is _68.MsgChannelOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _68.MsgChannelOpenConfirmResponseAmino;
                    encode(_: _68.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _68.MsgChannelOpenConfirmResponse;
                    toJSON(_: _68.MsgChannelOpenConfirmResponse): {};
                    fromPartial(_: Partial<_68.MsgChannelOpenConfirmResponse>): _68.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _68.MsgChannelOpenConfirmResponseAmino): _68.MsgChannelOpenConfirmResponse;
                    toAmino(_: _68.MsgChannelOpenConfirmResponse): _68.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelOpenConfirmResponseAminoMsg): _68.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _68.MsgChannelOpenConfirmResponse): _68.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelOpenConfirmResponseProtoMsg): _68.MsgChannelOpenConfirmResponse;
                    toProto(message: _68.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelOpenConfirmResponse): _68.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelCloseInit;
                    isSDK(o: any): o is _68.MsgChannelCloseInitSDKType;
                    isAmino(o: any): o is _68.MsgChannelCloseInitAmino;
                    encode(message: _68.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseInit;
                    fromJSON(object: any): _68.MsgChannelCloseInit;
                    toJSON(message: _68.MsgChannelCloseInit): {
                        portId: string;
                        channelId: string;
                        signer: string;
                    };
                    fromPartial(object: Partial<_68.MsgChannelCloseInit>): _68.MsgChannelCloseInit;
                    fromAmino(object: _68.MsgChannelCloseInitAmino): _68.MsgChannelCloseInit;
                    toAmino(message: _68.MsgChannelCloseInit): _68.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseInitAminoMsg): _68.MsgChannelCloseInit;
                    toAminoMsg(message: _68.MsgChannelCloseInit): _68.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseInitProtoMsg): _68.MsgChannelCloseInit;
                    toProto(message: _68.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseInit): _68.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelCloseInitResponse;
                    isSDK(o: any): o is _68.MsgChannelCloseInitResponseSDKType;
                    isAmino(o: any): o is _68.MsgChannelCloseInitResponseAmino;
                    encode(_: _68.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _68.MsgChannelCloseInitResponse;
                    toJSON(_: _68.MsgChannelCloseInitResponse): {};
                    fromPartial(_: Partial<_68.MsgChannelCloseInitResponse>): _68.MsgChannelCloseInitResponse;
                    fromAmino(_: _68.MsgChannelCloseInitResponseAmino): _68.MsgChannelCloseInitResponse;
                    toAmino(_: _68.MsgChannelCloseInitResponse): _68.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseInitResponseAminoMsg): _68.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _68.MsgChannelCloseInitResponse): _68.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseInitResponseProtoMsg): _68.MsgChannelCloseInitResponse;
                    toProto(message: _68.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseInitResponse): _68.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelCloseConfirm;
                    isSDK(o: any): o is _68.MsgChannelCloseConfirmSDKType;
                    isAmino(o: any): o is _68.MsgChannelCloseConfirmAmino;
                    encode(message: _68.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseConfirm;
                    fromJSON(object: any): _68.MsgChannelCloseConfirm;
                    toJSON(message: _68.MsgChannelCloseConfirm): {
                        portId: string;
                        channelId: string;
                        proofInit: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_68.MsgChannelCloseConfirm>): _68.MsgChannelCloseConfirm;
                    fromAmino(object: _68.MsgChannelCloseConfirmAmino): _68.MsgChannelCloseConfirm;
                    toAmino(message: _68.MsgChannelCloseConfirm): _68.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseConfirmAminoMsg): _68.MsgChannelCloseConfirm;
                    toAminoMsg(message: _68.MsgChannelCloseConfirm): _68.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseConfirmProtoMsg): _68.MsgChannelCloseConfirm;
                    toProto(message: _68.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseConfirm): _68.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgChannelCloseConfirmResponse;
                    isSDK(o: any): o is _68.MsgChannelCloseConfirmResponseSDKType;
                    isAmino(o: any): o is _68.MsgChannelCloseConfirmResponseAmino;
                    encode(_: _68.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _68.MsgChannelCloseConfirmResponse;
                    toJSON(_: _68.MsgChannelCloseConfirmResponse): {};
                    fromPartial(_: Partial<_68.MsgChannelCloseConfirmResponse>): _68.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _68.MsgChannelCloseConfirmResponseAmino): _68.MsgChannelCloseConfirmResponse;
                    toAmino(_: _68.MsgChannelCloseConfirmResponse): _68.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _68.MsgChannelCloseConfirmResponseAminoMsg): _68.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _68.MsgChannelCloseConfirmResponse): _68.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgChannelCloseConfirmResponseProtoMsg): _68.MsgChannelCloseConfirmResponse;
                    toProto(message: _68.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgChannelCloseConfirmResponse): _68.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgRecvPacket;
                    isSDK(o: any): o is _68.MsgRecvPacketSDKType;
                    isAmino(o: any): o is _68.MsgRecvPacketAmino;
                    encode(message: _68.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgRecvPacket;
                    fromJSON(object: any): _68.MsgRecvPacket;
                    toJSON(message: _68.MsgRecvPacket): {
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
                    fromPartial(object: Partial<_68.MsgRecvPacket>): _68.MsgRecvPacket;
                    fromAmino(object: _68.MsgRecvPacketAmino): _68.MsgRecvPacket;
                    toAmino(message: _68.MsgRecvPacket): _68.MsgRecvPacketAmino;
                    fromAminoMsg(object: _68.MsgRecvPacketAminoMsg): _68.MsgRecvPacket;
                    toAminoMsg(message: _68.MsgRecvPacket): _68.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _68.MsgRecvPacketProtoMsg): _68.MsgRecvPacket;
                    toProto(message: _68.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _68.MsgRecvPacket): _68.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgRecvPacketResponse;
                    isSDK(o: any): o is _68.MsgRecvPacketResponseSDKType;
                    isAmino(o: any): o is _68.MsgRecvPacketResponseAmino;
                    encode(_: _68.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgRecvPacketResponse;
                    fromJSON(_: any): _68.MsgRecvPacketResponse;
                    toJSON(_: _68.MsgRecvPacketResponse): {};
                    fromPartial(_: Partial<_68.MsgRecvPacketResponse>): _68.MsgRecvPacketResponse;
                    fromAmino(_: _68.MsgRecvPacketResponseAmino): _68.MsgRecvPacketResponse;
                    toAmino(_: _68.MsgRecvPacketResponse): _68.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _68.MsgRecvPacketResponseAminoMsg): _68.MsgRecvPacketResponse;
                    toAminoMsg(message: _68.MsgRecvPacketResponse): _68.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgRecvPacketResponseProtoMsg): _68.MsgRecvPacketResponse;
                    toProto(message: _68.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgRecvPacketResponse): _68.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgTimeout;
                    isSDK(o: any): o is _68.MsgTimeoutSDKType;
                    isAmino(o: any): o is _68.MsgTimeoutAmino;
                    encode(message: _68.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeout;
                    fromJSON(object: any): _68.MsgTimeout;
                    toJSON(message: _68.MsgTimeout): {
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
                    fromPartial(object: Partial<_68.MsgTimeout>): _68.MsgTimeout;
                    fromAmino(object: _68.MsgTimeoutAmino): _68.MsgTimeout;
                    toAmino(message: _68.MsgTimeout): _68.MsgTimeoutAmino;
                    fromAminoMsg(object: _68.MsgTimeoutAminoMsg): _68.MsgTimeout;
                    toAminoMsg(message: _68.MsgTimeout): _68.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutProtoMsg): _68.MsgTimeout;
                    toProto(message: _68.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeout): _68.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgTimeoutResponse;
                    isSDK(o: any): o is _68.MsgTimeoutResponseSDKType;
                    isAmino(o: any): o is _68.MsgTimeoutResponseAmino;
                    encode(_: _68.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeoutResponse;
                    fromJSON(_: any): _68.MsgTimeoutResponse;
                    toJSON(_: _68.MsgTimeoutResponse): {};
                    fromPartial(_: Partial<_68.MsgTimeoutResponse>): _68.MsgTimeoutResponse;
                    fromAmino(_: _68.MsgTimeoutResponseAmino): _68.MsgTimeoutResponse;
                    toAmino(_: _68.MsgTimeoutResponse): _68.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _68.MsgTimeoutResponseAminoMsg): _68.MsgTimeoutResponse;
                    toAminoMsg(message: _68.MsgTimeoutResponse): _68.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutResponseProtoMsg): _68.MsgTimeoutResponse;
                    toProto(message: _68.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeoutResponse): _68.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgTimeoutOnClose;
                    isSDK(o: any): o is _68.MsgTimeoutOnCloseSDKType;
                    isAmino(o: any): o is _68.MsgTimeoutOnCloseAmino;
                    encode(message: _68.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeoutOnClose;
                    fromJSON(object: any): _68.MsgTimeoutOnClose;
                    toJSON(message: _68.MsgTimeoutOnClose): {
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
                    fromPartial(object: Partial<_68.MsgTimeoutOnClose>): _68.MsgTimeoutOnClose;
                    fromAmino(object: _68.MsgTimeoutOnCloseAmino): _68.MsgTimeoutOnClose;
                    toAmino(message: _68.MsgTimeoutOnClose): _68.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _68.MsgTimeoutOnCloseAminoMsg): _68.MsgTimeoutOnClose;
                    toAminoMsg(message: _68.MsgTimeoutOnClose): _68.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutOnCloseProtoMsg): _68.MsgTimeoutOnClose;
                    toProto(message: _68.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeoutOnClose): _68.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgTimeoutOnCloseResponse;
                    isSDK(o: any): o is _68.MsgTimeoutOnCloseResponseSDKType;
                    isAmino(o: any): o is _68.MsgTimeoutOnCloseResponseAmino;
                    encode(_: _68.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _68.MsgTimeoutOnCloseResponse;
                    toJSON(_: _68.MsgTimeoutOnCloseResponse): {};
                    fromPartial(_: Partial<_68.MsgTimeoutOnCloseResponse>): _68.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _68.MsgTimeoutOnCloseResponseAmino): _68.MsgTimeoutOnCloseResponse;
                    toAmino(_: _68.MsgTimeoutOnCloseResponse): _68.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _68.MsgTimeoutOnCloseResponseAminoMsg): _68.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _68.MsgTimeoutOnCloseResponse): _68.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgTimeoutOnCloseResponseProtoMsg): _68.MsgTimeoutOnCloseResponse;
                    toProto(message: _68.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgTimeoutOnCloseResponse): _68.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgAcknowledgement;
                    isSDK(o: any): o is _68.MsgAcknowledgementSDKType;
                    isAmino(o: any): o is _68.MsgAcknowledgementAmino;
                    encode(message: _68.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgAcknowledgement;
                    fromJSON(object: any): _68.MsgAcknowledgement;
                    toJSON(message: _68.MsgAcknowledgement): {
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
                    fromPartial(object: Partial<_68.MsgAcknowledgement>): _68.MsgAcknowledgement;
                    fromAmino(object: _68.MsgAcknowledgementAmino): _68.MsgAcknowledgement;
                    toAmino(message: _68.MsgAcknowledgement): _68.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _68.MsgAcknowledgementAminoMsg): _68.MsgAcknowledgement;
                    toAminoMsg(message: _68.MsgAcknowledgement): _68.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _68.MsgAcknowledgementProtoMsg): _68.MsgAcknowledgement;
                    toProto(message: _68.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _68.MsgAcknowledgement): _68.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _68.MsgAcknowledgementResponse;
                    isSDK(o: any): o is _68.MsgAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _68.MsgAcknowledgementResponseAmino;
                    encode(_: _68.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.MsgAcknowledgementResponse;
                    fromJSON(_: any): _68.MsgAcknowledgementResponse;
                    toJSON(_: _68.MsgAcknowledgementResponse): {};
                    fromPartial(_: Partial<_68.MsgAcknowledgementResponse>): _68.MsgAcknowledgementResponse;
                    fromAmino(_: _68.MsgAcknowledgementResponseAmino): _68.MsgAcknowledgementResponse;
                    toAmino(_: _68.MsgAcknowledgementResponse): _68.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _68.MsgAcknowledgementResponseAminoMsg): _68.MsgAcknowledgementResponse;
                    toAminoMsg(message: _68.MsgAcknowledgementResponse): _68.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _68.MsgAcknowledgementResponseProtoMsg): _68.MsgAcknowledgementResponse;
                    toProto(message: _68.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _68.MsgAcknowledgementResponse): _68.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelRequest;
                    isSDK(o: any): o is _67.QueryChannelRequestSDKType;
                    isAmino(o: any): o is _67.QueryChannelRequestAmino;
                    encode(message: _67.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelRequest;
                    fromJSON(object: any): _67.QueryChannelRequest;
                    toJSON(message: _67.QueryChannelRequest): {
                        portId: string;
                        channelId: string;
                    };
                    fromPartial(object: Partial<_67.QueryChannelRequest>): _67.QueryChannelRequest;
                    fromAmino(object: _67.QueryChannelRequestAmino): _67.QueryChannelRequest;
                    toAmino(message: _67.QueryChannelRequest): _67.QueryChannelRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelRequestAminoMsg): _67.QueryChannelRequest;
                    toAminoMsg(message: _67.QueryChannelRequest): _67.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelRequestProtoMsg): _67.QueryChannelRequest;
                    toProto(message: _67.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelRequest): _67.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelResponse;
                    isSDK(o: any): o is _67.QueryChannelResponseSDKType;
                    isAmino(o: any): o is _67.QueryChannelResponseAmino;
                    encode(message: _67.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelResponse;
                    fromJSON(object: any): _67.QueryChannelResponse;
                    toJSON(message: _67.QueryChannelResponse): {
                        channel?: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                        };
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryChannelResponse>): _67.QueryChannelResponse;
                    fromAmino(object: _67.QueryChannelResponseAmino): _67.QueryChannelResponse;
                    toAmino(message: _67.QueryChannelResponse): _67.QueryChannelResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelResponseAminoMsg): _67.QueryChannelResponse;
                    toAminoMsg(message: _67.QueryChannelResponse): _67.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelResponseProtoMsg): _67.QueryChannelResponse;
                    toProto(message: _67.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelResponse): _67.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelsRequest;
                    isSDK(o: any): o is _67.QueryChannelsRequestSDKType;
                    isAmino(o: any): o is _67.QueryChannelsRequestAmino;
                    encode(message: _67.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelsRequest;
                    fromJSON(object: any): _67.QueryChannelsRequest;
                    toJSON(message: _67.QueryChannelsRequest): {
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryChannelsRequest>): _67.QueryChannelsRequest;
                    fromAmino(object: _67.QueryChannelsRequestAmino): _67.QueryChannelsRequest;
                    toAmino(message: _67.QueryChannelsRequest): _67.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelsRequestAminoMsg): _67.QueryChannelsRequest;
                    toAminoMsg(message: _67.QueryChannelsRequest): _67.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelsRequestProtoMsg): _67.QueryChannelsRequest;
                    toProto(message: _67.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelsRequest): _67.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelsResponse;
                    isSDK(o: any): o is _67.QueryChannelsResponseSDKType;
                    isAmino(o: any): o is _67.QueryChannelsResponseAmino;
                    encode(message: _67.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelsResponse;
                    fromJSON(object: any): _67.QueryChannelsResponse;
                    toJSON(message: _67.QueryChannelsResponse): {
                        channels: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                            portId: string;
                            channelId: string;
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryChannelsResponse>): _67.QueryChannelsResponse;
                    fromAmino(object: _67.QueryChannelsResponseAmino): _67.QueryChannelsResponse;
                    toAmino(message: _67.QueryChannelsResponse): _67.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelsResponseAminoMsg): _67.QueryChannelsResponse;
                    toAminoMsg(message: _67.QueryChannelsResponse): _67.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelsResponseProtoMsg): _67.QueryChannelsResponse;
                    toProto(message: _67.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelsResponse): _67.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryConnectionChannelsRequest;
                    isSDK(o: any): o is _67.QueryConnectionChannelsRequestSDKType;
                    isAmino(o: any): o is _67.QueryConnectionChannelsRequestAmino;
                    encode(message: _67.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _67.QueryConnectionChannelsRequest;
                    toJSON(message: _67.QueryConnectionChannelsRequest): {
                        connection: string;
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryConnectionChannelsRequest>): _67.QueryConnectionChannelsRequest;
                    fromAmino(object: _67.QueryConnectionChannelsRequestAmino): _67.QueryConnectionChannelsRequest;
                    toAmino(message: _67.QueryConnectionChannelsRequest): _67.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _67.QueryConnectionChannelsRequestAminoMsg): _67.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _67.QueryConnectionChannelsRequest): _67.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryConnectionChannelsRequestProtoMsg): _67.QueryConnectionChannelsRequest;
                    toProto(message: _67.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryConnectionChannelsRequest): _67.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryConnectionChannelsResponse;
                    isSDK(o: any): o is _67.QueryConnectionChannelsResponseSDKType;
                    isAmino(o: any): o is _67.QueryConnectionChannelsResponseAmino;
                    encode(message: _67.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _67.QueryConnectionChannelsResponse;
                    toJSON(message: _67.QueryConnectionChannelsResponse): {
                        channels: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                            portId: string;
                            channelId: string;
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryConnectionChannelsResponse>): _67.QueryConnectionChannelsResponse;
                    fromAmino(object: _67.QueryConnectionChannelsResponseAmino): _67.QueryConnectionChannelsResponse;
                    toAmino(message: _67.QueryConnectionChannelsResponse): _67.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _67.QueryConnectionChannelsResponseAminoMsg): _67.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _67.QueryConnectionChannelsResponse): _67.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryConnectionChannelsResponseProtoMsg): _67.QueryConnectionChannelsResponse;
                    toProto(message: _67.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryConnectionChannelsResponse): _67.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelClientStateRequest;
                    isSDK(o: any): o is _67.QueryChannelClientStateRequestSDKType;
                    isAmino(o: any): o is _67.QueryChannelClientStateRequestAmino;
                    encode(message: _67.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelClientStateRequest;
                    fromJSON(object: any): _67.QueryChannelClientStateRequest;
                    toJSON(message: _67.QueryChannelClientStateRequest): {
                        portId: string;
                        channelId: string;
                    };
                    fromPartial(object: Partial<_67.QueryChannelClientStateRequest>): _67.QueryChannelClientStateRequest;
                    fromAmino(object: _67.QueryChannelClientStateRequestAmino): _67.QueryChannelClientStateRequest;
                    toAmino(message: _67.QueryChannelClientStateRequest): _67.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelClientStateRequestAminoMsg): _67.QueryChannelClientStateRequest;
                    toAminoMsg(message: _67.QueryChannelClientStateRequest): _67.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelClientStateRequestProtoMsg): _67.QueryChannelClientStateRequest;
                    toProto(message: _67.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelClientStateRequest): _67.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelClientStateResponse;
                    isSDK(o: any): o is _67.QueryChannelClientStateResponseSDKType;
                    isAmino(o: any): o is _67.QueryChannelClientStateResponseAmino;
                    encode(message: _67.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelClientStateResponse;
                    fromJSON(object: any): _67.QueryChannelClientStateResponse;
                    toJSON(message: _67.QueryChannelClientStateResponse): {
                        identifiedClientState?: {
                            clientId: string;
                            clientState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        };
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryChannelClientStateResponse>): _67.QueryChannelClientStateResponse;
                    fromAmino(object: _67.QueryChannelClientStateResponseAmino): _67.QueryChannelClientStateResponse;
                    toAmino(message: _67.QueryChannelClientStateResponse): _67.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelClientStateResponseAminoMsg): _67.QueryChannelClientStateResponse;
                    toAminoMsg(message: _67.QueryChannelClientStateResponse): _67.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelClientStateResponseProtoMsg): _67.QueryChannelClientStateResponse;
                    toProto(message: _67.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelClientStateResponse): _67.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelConsensusStateRequest;
                    isSDK(o: any): o is _67.QueryChannelConsensusStateRequestSDKType;
                    isAmino(o: any): o is _67.QueryChannelConsensusStateRequestAmino;
                    encode(message: _67.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _67.QueryChannelConsensusStateRequest;
                    toJSON(message: _67.QueryChannelConsensusStateRequest): {
                        portId: string;
                        channelId: string;
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    fromPartial(object: Partial<_67.QueryChannelConsensusStateRequest>): _67.QueryChannelConsensusStateRequest;
                    fromAmino(object: _67.QueryChannelConsensusStateRequestAmino): _67.QueryChannelConsensusStateRequest;
                    toAmino(message: _67.QueryChannelConsensusStateRequest): _67.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _67.QueryChannelConsensusStateRequestAminoMsg): _67.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _67.QueryChannelConsensusStateRequest): _67.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelConsensusStateRequestProtoMsg): _67.QueryChannelConsensusStateRequest;
                    toProto(message: _67.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelConsensusStateRequest): _67.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryChannelConsensusStateResponse;
                    isSDK(o: any): o is _67.QueryChannelConsensusStateResponseSDKType;
                    isAmino(o: any): o is _67.QueryChannelConsensusStateResponseAmino;
                    encode(message: _67.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _67.QueryChannelConsensusStateResponse;
                    toJSON(message: _67.QueryChannelConsensusStateResponse): {
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        clientId: string;
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryChannelConsensusStateResponse>): _67.QueryChannelConsensusStateResponse;
                    fromAmino(object: _67.QueryChannelConsensusStateResponseAmino): _67.QueryChannelConsensusStateResponse;
                    toAmino(message: _67.QueryChannelConsensusStateResponse): _67.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _67.QueryChannelConsensusStateResponseAminoMsg): _67.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _67.QueryChannelConsensusStateResponse): _67.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryChannelConsensusStateResponseProtoMsg): _67.QueryChannelConsensusStateResponse;
                    toProto(message: _67.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryChannelConsensusStateResponse): _67.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketCommitmentRequest;
                    isSDK(o: any): o is _67.QueryPacketCommitmentRequestSDKType;
                    isAmino(o: any): o is _67.QueryPacketCommitmentRequestAmino;
                    encode(message: _67.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _67.QueryPacketCommitmentRequest;
                    toJSON(message: _67.QueryPacketCommitmentRequest): {
                        portId: string;
                        channelId: string;
                        sequence: string;
                    };
                    fromPartial(object: Partial<_67.QueryPacketCommitmentRequest>): _67.QueryPacketCommitmentRequest;
                    fromAmino(object: _67.QueryPacketCommitmentRequestAmino): _67.QueryPacketCommitmentRequest;
                    toAmino(message: _67.QueryPacketCommitmentRequest): _67.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentRequestAminoMsg): _67.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _67.QueryPacketCommitmentRequest): _67.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentRequestProtoMsg): _67.QueryPacketCommitmentRequest;
                    toProto(message: _67.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentRequest): _67.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketCommitmentResponse;
                    isSDK(o: any): o is _67.QueryPacketCommitmentResponseSDKType;
                    isAmino(o: any): o is _67.QueryPacketCommitmentResponseAmino;
                    encode(message: _67.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _67.QueryPacketCommitmentResponse;
                    toJSON(message: _67.QueryPacketCommitmentResponse): {
                        commitment: string;
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryPacketCommitmentResponse>): _67.QueryPacketCommitmentResponse;
                    fromAmino(object: _67.QueryPacketCommitmentResponseAmino): _67.QueryPacketCommitmentResponse;
                    toAmino(message: _67.QueryPacketCommitmentResponse): _67.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentResponseAminoMsg): _67.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _67.QueryPacketCommitmentResponse): _67.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentResponseProtoMsg): _67.QueryPacketCommitmentResponse;
                    toProto(message: _67.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentResponse): _67.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketCommitmentsRequest;
                    isSDK(o: any): o is _67.QueryPacketCommitmentsRequestSDKType;
                    isAmino(o: any): o is _67.QueryPacketCommitmentsRequestAmino;
                    encode(message: _67.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _67.QueryPacketCommitmentsRequest;
                    toJSON(message: _67.QueryPacketCommitmentsRequest): {
                        portId: string;
                        channelId: string;
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryPacketCommitmentsRequest>): _67.QueryPacketCommitmentsRequest;
                    fromAmino(object: _67.QueryPacketCommitmentsRequestAmino): _67.QueryPacketCommitmentsRequest;
                    toAmino(message: _67.QueryPacketCommitmentsRequest): _67.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentsRequestAminoMsg): _67.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _67.QueryPacketCommitmentsRequest): _67.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentsRequestProtoMsg): _67.QueryPacketCommitmentsRequest;
                    toProto(message: _67.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentsRequest): _67.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketCommitmentsResponse;
                    isSDK(o: any): o is _67.QueryPacketCommitmentsResponseSDKType;
                    isAmino(o: any): o is _67.QueryPacketCommitmentsResponseAmino;
                    encode(message: _67.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _67.QueryPacketCommitmentsResponse;
                    toJSON(message: _67.QueryPacketCommitmentsResponse): {
                        commitments: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                            data: string;
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryPacketCommitmentsResponse>): _67.QueryPacketCommitmentsResponse;
                    fromAmino(object: _67.QueryPacketCommitmentsResponseAmino): _67.QueryPacketCommitmentsResponse;
                    toAmino(message: _67.QueryPacketCommitmentsResponse): _67.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketCommitmentsResponseAminoMsg): _67.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _67.QueryPacketCommitmentsResponse): _67.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketCommitmentsResponseProtoMsg): _67.QueryPacketCommitmentsResponse;
                    toProto(message: _67.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketCommitmentsResponse): _67.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketReceiptRequest;
                    isSDK(o: any): o is _67.QueryPacketReceiptRequestSDKType;
                    isAmino(o: any): o is _67.QueryPacketReceiptRequestAmino;
                    encode(message: _67.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketReceiptRequest;
                    fromJSON(object: any): _67.QueryPacketReceiptRequest;
                    toJSON(message: _67.QueryPacketReceiptRequest): {
                        portId: string;
                        channelId: string;
                        sequence: string;
                    };
                    fromPartial(object: Partial<_67.QueryPacketReceiptRequest>): _67.QueryPacketReceiptRequest;
                    fromAmino(object: _67.QueryPacketReceiptRequestAmino): _67.QueryPacketReceiptRequest;
                    toAmino(message: _67.QueryPacketReceiptRequest): _67.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketReceiptRequestAminoMsg): _67.QueryPacketReceiptRequest;
                    toAminoMsg(message: _67.QueryPacketReceiptRequest): _67.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketReceiptRequestProtoMsg): _67.QueryPacketReceiptRequest;
                    toProto(message: _67.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketReceiptRequest): _67.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketReceiptResponse;
                    isSDK(o: any): o is _67.QueryPacketReceiptResponseSDKType;
                    isAmino(o: any): o is _67.QueryPacketReceiptResponseAmino;
                    encode(message: _67.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketReceiptResponse;
                    fromJSON(object: any): _67.QueryPacketReceiptResponse;
                    toJSON(message: _67.QueryPacketReceiptResponse): {
                        received: boolean;
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryPacketReceiptResponse>): _67.QueryPacketReceiptResponse;
                    fromAmino(object: _67.QueryPacketReceiptResponseAmino): _67.QueryPacketReceiptResponse;
                    toAmino(message: _67.QueryPacketReceiptResponse): _67.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketReceiptResponseAminoMsg): _67.QueryPacketReceiptResponse;
                    toAminoMsg(message: _67.QueryPacketReceiptResponse): _67.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketReceiptResponseProtoMsg): _67.QueryPacketReceiptResponse;
                    toProto(message: _67.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketReceiptResponse): _67.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketAcknowledgementRequest;
                    isSDK(o: any): o is _67.QueryPacketAcknowledgementRequestSDKType;
                    isAmino(o: any): o is _67.QueryPacketAcknowledgementRequestAmino;
                    encode(message: _67.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _67.QueryPacketAcknowledgementRequest;
                    toJSON(message: _67.QueryPacketAcknowledgementRequest): {
                        portId: string;
                        channelId: string;
                        sequence: string;
                    };
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementRequest>): _67.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _67.QueryPacketAcknowledgementRequestAmino): _67.QueryPacketAcknowledgementRequest;
                    toAmino(message: _67.QueryPacketAcknowledgementRequest): _67.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementRequestAminoMsg): _67.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementRequest): _67.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementRequestProtoMsg): _67.QueryPacketAcknowledgementRequest;
                    toProto(message: _67.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementRequest): _67.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketAcknowledgementResponse;
                    isSDK(o: any): o is _67.QueryPacketAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _67.QueryPacketAcknowledgementResponseAmino;
                    encode(message: _67.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _67.QueryPacketAcknowledgementResponse;
                    toJSON(message: _67.QueryPacketAcknowledgementResponse): {
                        acknowledgement: string;
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementResponse>): _67.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _67.QueryPacketAcknowledgementResponseAmino): _67.QueryPacketAcknowledgementResponse;
                    toAmino(message: _67.QueryPacketAcknowledgementResponse): _67.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementResponseAminoMsg): _67.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementResponse): _67.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementResponseProtoMsg): _67.QueryPacketAcknowledgementResponse;
                    toProto(message: _67.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementResponse): _67.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketAcknowledgementsRequest;
                    isSDK(o: any): o is _67.QueryPacketAcknowledgementsRequestSDKType;
                    isAmino(o: any): o is _67.QueryPacketAcknowledgementsRequestAmino;
                    encode(message: _67.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _67.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _67.QueryPacketAcknowledgementsRequest): {
                        portId: string;
                        channelId: string;
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                        packetCommitmentSequences: string[];
                    };
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementsRequest>): _67.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _67.QueryPacketAcknowledgementsRequestAmino): _67.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _67.QueryPacketAcknowledgementsRequest): _67.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementsRequestAminoMsg): _67.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementsRequest): _67.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementsRequestProtoMsg): _67.QueryPacketAcknowledgementsRequest;
                    toProto(message: _67.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementsRequest): _67.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryPacketAcknowledgementsResponse;
                    isSDK(o: any): o is _67.QueryPacketAcknowledgementsResponseSDKType;
                    isAmino(o: any): o is _67.QueryPacketAcknowledgementsResponseAmino;
                    encode(message: _67.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _67.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _67.QueryPacketAcknowledgementsResponse): {
                        acknowledgements: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                            data: string;
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryPacketAcknowledgementsResponse>): _67.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _67.QueryPacketAcknowledgementsResponseAmino): _67.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _67.QueryPacketAcknowledgementsResponse): _67.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _67.QueryPacketAcknowledgementsResponseAminoMsg): _67.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _67.QueryPacketAcknowledgementsResponse): _67.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryPacketAcknowledgementsResponseProtoMsg): _67.QueryPacketAcknowledgementsResponse;
                    toProto(message: _67.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryPacketAcknowledgementsResponse): _67.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryUnreceivedPacketsRequest;
                    isSDK(o: any): o is _67.QueryUnreceivedPacketsRequestSDKType;
                    isAmino(o: any): o is _67.QueryUnreceivedPacketsRequestAmino;
                    encode(message: _67.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _67.QueryUnreceivedPacketsRequest;
                    toJSON(message: _67.QueryUnreceivedPacketsRequest): {
                        portId: string;
                        channelId: string;
                        packetCommitmentSequences: string[];
                    };
                    fromPartial(object: Partial<_67.QueryUnreceivedPacketsRequest>): _67.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _67.QueryUnreceivedPacketsRequestAmino): _67.QueryUnreceivedPacketsRequest;
                    toAmino(message: _67.QueryUnreceivedPacketsRequest): _67.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedPacketsRequestAminoMsg): _67.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _67.QueryUnreceivedPacketsRequest): _67.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedPacketsRequestProtoMsg): _67.QueryUnreceivedPacketsRequest;
                    toProto(message: _67.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedPacketsRequest): _67.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryUnreceivedPacketsResponse;
                    isSDK(o: any): o is _67.QueryUnreceivedPacketsResponseSDKType;
                    isAmino(o: any): o is _67.QueryUnreceivedPacketsResponseAmino;
                    encode(message: _67.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _67.QueryUnreceivedPacketsResponse;
                    toJSON(message: _67.QueryUnreceivedPacketsResponse): {
                        sequences: string[];
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryUnreceivedPacketsResponse>): _67.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _67.QueryUnreceivedPacketsResponseAmino): _67.QueryUnreceivedPacketsResponse;
                    toAmino(message: _67.QueryUnreceivedPacketsResponse): _67.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedPacketsResponseAminoMsg): _67.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _67.QueryUnreceivedPacketsResponse): _67.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedPacketsResponseProtoMsg): _67.QueryUnreceivedPacketsResponse;
                    toProto(message: _67.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedPacketsResponse): _67.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryUnreceivedAcksRequest;
                    isSDK(o: any): o is _67.QueryUnreceivedAcksRequestSDKType;
                    isAmino(o: any): o is _67.QueryUnreceivedAcksRequestAmino;
                    encode(message: _67.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _67.QueryUnreceivedAcksRequest;
                    toJSON(message: _67.QueryUnreceivedAcksRequest): {
                        portId: string;
                        channelId: string;
                        packetAckSequences: string[];
                    };
                    fromPartial(object: Partial<_67.QueryUnreceivedAcksRequest>): _67.QueryUnreceivedAcksRequest;
                    fromAmino(object: _67.QueryUnreceivedAcksRequestAmino): _67.QueryUnreceivedAcksRequest;
                    toAmino(message: _67.QueryUnreceivedAcksRequest): _67.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedAcksRequestAminoMsg): _67.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _67.QueryUnreceivedAcksRequest): _67.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedAcksRequestProtoMsg): _67.QueryUnreceivedAcksRequest;
                    toProto(message: _67.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedAcksRequest): _67.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryUnreceivedAcksResponse;
                    isSDK(o: any): o is _67.QueryUnreceivedAcksResponseSDKType;
                    isAmino(o: any): o is _67.QueryUnreceivedAcksResponseAmino;
                    encode(message: _67.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _67.QueryUnreceivedAcksResponse;
                    toJSON(message: _67.QueryUnreceivedAcksResponse): {
                        sequences: string[];
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryUnreceivedAcksResponse>): _67.QueryUnreceivedAcksResponse;
                    fromAmino(object: _67.QueryUnreceivedAcksResponseAmino): _67.QueryUnreceivedAcksResponse;
                    toAmino(message: _67.QueryUnreceivedAcksResponse): _67.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _67.QueryUnreceivedAcksResponseAminoMsg): _67.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _67.QueryUnreceivedAcksResponse): _67.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryUnreceivedAcksResponseProtoMsg): _67.QueryUnreceivedAcksResponse;
                    toProto(message: _67.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryUnreceivedAcksResponse): _67.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryNextSequenceReceiveRequest;
                    isSDK(o: any): o is _67.QueryNextSequenceReceiveRequestSDKType;
                    isAmino(o: any): o is _67.QueryNextSequenceReceiveRequestAmino;
                    encode(message: _67.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _67.QueryNextSequenceReceiveRequest;
                    toJSON(message: _67.QueryNextSequenceReceiveRequest): {
                        portId: string;
                        channelId: string;
                    };
                    fromPartial(object: Partial<_67.QueryNextSequenceReceiveRequest>): _67.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _67.QueryNextSequenceReceiveRequestAmino): _67.QueryNextSequenceReceiveRequest;
                    toAmino(message: _67.QueryNextSequenceReceiveRequest): _67.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _67.QueryNextSequenceReceiveRequestAminoMsg): _67.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _67.QueryNextSequenceReceiveRequest): _67.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _67.QueryNextSequenceReceiveRequestProtoMsg): _67.QueryNextSequenceReceiveRequest;
                    toProto(message: _67.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _67.QueryNextSequenceReceiveRequest): _67.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _67.QueryNextSequenceReceiveResponse;
                    isSDK(o: any): o is _67.QueryNextSequenceReceiveResponseSDKType;
                    isAmino(o: any): o is _67.QueryNextSequenceReceiveResponseAmino;
                    encode(message: _67.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _67.QueryNextSequenceReceiveResponse;
                    toJSON(message: _67.QueryNextSequenceReceiveResponse): {
                        nextSequenceReceive: string;
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_67.QueryNextSequenceReceiveResponse>): _67.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _67.QueryNextSequenceReceiveResponseAmino): _67.QueryNextSequenceReceiveResponse;
                    toAmino(message: _67.QueryNextSequenceReceiveResponse): _67.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _67.QueryNextSequenceReceiveResponseAminoMsg): _67.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _67.QueryNextSequenceReceiveResponse): _67.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _67.QueryNextSequenceReceiveResponseProtoMsg): _67.QueryNextSequenceReceiveResponse;
                    toProto(message: _67.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _67.QueryNextSequenceReceiveResponse): _67.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.GenesisState;
                    isSDK(o: any): o is _66.GenesisStateSDKType;
                    isAmino(o: any): o is _66.GenesisStateAmino;
                    encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.GenesisState;
                    fromJSON(object: any): _66.GenesisState;
                    toJSON(message: _66.GenesisState): {
                        channels: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                            portId: string;
                            channelId: string;
                        }[];
                        acknowledgements: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                            data: string;
                        }[];
                        commitments: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                            data: string;
                        }[];
                        receipts: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                            data: string;
                        }[];
                        sendSequences: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                        }[];
                        recvSequences: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                        }[];
                        ackSequences: {
                            portId: string;
                            channelId: string;
                            sequence: string;
                        }[];
                        nextChannelSequence: string;
                    };
                    fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                    fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                    toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                    fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                    toAminoMsg(message: _66.GenesisState): _66.GenesisStateAminoMsg;
                    fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                    toProto(message: _66.GenesisState): Uint8Array;
                    toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _66.PacketSequence;
                    isSDK(o: any): o is _66.PacketSequenceSDKType;
                    isAmino(o: any): o is _66.PacketSequenceAmino;
                    encode(message: _66.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.PacketSequence;
                    fromJSON(object: any): _66.PacketSequence;
                    toJSON(message: _66.PacketSequence): {
                        portId: string;
                        channelId: string;
                        sequence: string;
                    };
                    fromPartial(object: Partial<_66.PacketSequence>): _66.PacketSequence;
                    fromAmino(object: _66.PacketSequenceAmino): _66.PacketSequence;
                    toAmino(message: _66.PacketSequence): _66.PacketSequenceAmino;
                    fromAminoMsg(object: _66.PacketSequenceAminoMsg): _66.PacketSequence;
                    toAminoMsg(message: _66.PacketSequence): _66.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _66.PacketSequenceProtoMsg): _66.PacketSequence;
                    toProto(message: _66.PacketSequence): Uint8Array;
                    toProtoMsg(message: _66.PacketSequence): _66.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _65.State;
                stateToJSON(object: _65.State): string;
                orderFromJSON(object: any): _65.Order;
                orderToJSON(object: _65.Order): string;
                State: typeof _65.State;
                StateSDKType: typeof _65.State;
                StateAmino: typeof _65.State;
                Order: typeof _65.Order;
                OrderSDKType: typeof _65.Order;
                OrderAmino: typeof _65.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.Channel;
                    isSDK(o: any): o is _65.ChannelSDKType;
                    isAmino(o: any): o is _65.ChannelAmino;
                    encode(message: _65.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Channel;
                    fromJSON(object: any): _65.Channel;
                    toJSON(message: _65.Channel): {
                        state: _65.State;
                        ordering: _65.Order;
                        counterparty: {
                            portId: string;
                            channelId: string;
                        };
                        connectionHops: string[];
                        version: string;
                    };
                    fromPartial(object: Partial<_65.Channel>): _65.Channel;
                    fromAmino(object: _65.ChannelAmino): _65.Channel;
                    toAmino(message: _65.Channel): _65.ChannelAmino;
                    fromAminoMsg(object: _65.ChannelAminoMsg): _65.Channel;
                    toAminoMsg(message: _65.Channel): _65.ChannelAminoMsg;
                    fromProtoMsg(message: _65.ChannelProtoMsg): _65.Channel;
                    toProto(message: _65.Channel): Uint8Array;
                    toProtoMsg(message: _65.Channel): _65.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.IdentifiedChannel;
                    isSDK(o: any): o is _65.IdentifiedChannelSDKType;
                    isAmino(o: any): o is _65.IdentifiedChannelAmino;
                    encode(message: _65.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.IdentifiedChannel;
                    fromJSON(object: any): _65.IdentifiedChannel;
                    toJSON(message: _65.IdentifiedChannel): {
                        state: _65.State;
                        ordering: _65.Order;
                        counterparty: {
                            portId: string;
                            channelId: string;
                        };
                        connectionHops: string[];
                        version: string;
                        portId: string;
                        channelId: string;
                    };
                    fromPartial(object: Partial<_65.IdentifiedChannel>): _65.IdentifiedChannel;
                    fromAmino(object: _65.IdentifiedChannelAmino): _65.IdentifiedChannel;
                    toAmino(message: _65.IdentifiedChannel): _65.IdentifiedChannelAmino;
                    fromAminoMsg(object: _65.IdentifiedChannelAminoMsg): _65.IdentifiedChannel;
                    toAminoMsg(message: _65.IdentifiedChannel): _65.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _65.IdentifiedChannelProtoMsg): _65.IdentifiedChannel;
                    toProto(message: _65.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _65.IdentifiedChannel): _65.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.Counterparty;
                    isSDK(o: any): o is _65.CounterpartySDKType;
                    isAmino(o: any): o is _65.CounterpartyAmino;
                    encode(message: _65.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Counterparty;
                    fromJSON(object: any): _65.Counterparty;
                    toJSON(message: _65.Counterparty): {
                        portId: string;
                        channelId: string;
                    };
                    fromPartial(object: Partial<_65.Counterparty>): _65.Counterparty;
                    fromAmino(object: _65.CounterpartyAmino): _65.Counterparty;
                    toAmino(message: _65.Counterparty): _65.CounterpartyAmino;
                    fromAminoMsg(object: _65.CounterpartyAminoMsg): _65.Counterparty;
                    toAminoMsg(message: _65.Counterparty): _65.CounterpartyAminoMsg;
                    fromProtoMsg(message: _65.CounterpartyProtoMsg): _65.Counterparty;
                    toProto(message: _65.Counterparty): Uint8Array;
                    toProtoMsg(message: _65.Counterparty): _65.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.Packet;
                    isSDK(o: any): o is _65.PacketSDKType;
                    isAmino(o: any): o is _65.PacketAmino;
                    encode(message: _65.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Packet;
                    fromJSON(object: any): _65.Packet;
                    toJSON(message: _65.Packet): {
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
                    fromPartial(object: Partial<_65.Packet>): _65.Packet;
                    fromAmino(object: _65.PacketAmino): _65.Packet;
                    toAmino(message: _65.Packet): _65.PacketAmino;
                    fromAminoMsg(object: _65.PacketAminoMsg): _65.Packet;
                    toAminoMsg(message: _65.Packet): _65.PacketAminoMsg;
                    fromProtoMsg(message: _65.PacketProtoMsg): _65.Packet;
                    toProto(message: _65.Packet): Uint8Array;
                    toProtoMsg(message: _65.Packet): _65.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.PacketState;
                    isSDK(o: any): o is _65.PacketStateSDKType;
                    isAmino(o: any): o is _65.PacketStateAmino;
                    encode(message: _65.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.PacketState;
                    fromJSON(object: any): _65.PacketState;
                    toJSON(message: _65.PacketState): {
                        portId: string;
                        channelId: string;
                        sequence: string;
                        data: string;
                    };
                    fromPartial(object: Partial<_65.PacketState>): _65.PacketState;
                    fromAmino(object: _65.PacketStateAmino): _65.PacketState;
                    toAmino(message: _65.PacketState): _65.PacketStateAmino;
                    fromAminoMsg(object: _65.PacketStateAminoMsg): _65.PacketState;
                    toAminoMsg(message: _65.PacketState): _65.PacketStateAminoMsg;
                    fromProtoMsg(message: _65.PacketStateProtoMsg): _65.PacketState;
                    toProto(message: _65.PacketState): Uint8Array;
                    toProtoMsg(message: _65.PacketState): _65.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _65.Acknowledgement;
                    isSDK(o: any): o is _65.AcknowledgementSDKType;
                    isAmino(o: any): o is _65.AcknowledgementAmino;
                    encode(message: _65.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.Acknowledgement;
                    fromJSON(object: any): _65.Acknowledgement;
                    toJSON(message: _65.Acknowledgement): {
                        result?: string;
                        error?: string;
                    };
                    fromPartial(object: Partial<_65.Acknowledgement>): _65.Acknowledgement;
                    fromAmino(object: _65.AcknowledgementAmino): _65.Acknowledgement;
                    toAmino(message: _65.Acknowledgement): _65.AcknowledgementAmino;
                    fromAminoMsg(object: _65.AcknowledgementAminoMsg): _65.Acknowledgement;
                    toAminoMsg(message: _65.Acknowledgement): _65.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _65.AcknowledgementProtoMsg): _65.Acknowledgement;
                    toProto(message: _65.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _65.Acknowledgement): _65.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _199.MsgClientImpl;
                QueryClientImpl: typeof _195.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _71.QueryClientStateRequest): Promise<_71.QueryClientStateResponse>;
                    clientStates(request?: _71.QueryClientStatesRequest): Promise<_71.QueryClientStatesResponse>;
                    consensusState(request: _71.QueryConsensusStateRequest): Promise<_71.QueryConsensusStateResponse>;
                    consensusStates(request: _71.QueryConsensusStatesRequest): Promise<_71.QueryConsensusStatesResponse>;
                    clientStatus(request: _71.QueryClientStatusRequest): Promise<_71.QueryClientStatusResponse>;
                    clientParams(request?: _71.QueryClientParamsRequest): Promise<_71.QueryClientParamsResponse>;
                    upgradedClientState(request?: _71.QueryUpgradedClientStateRequest): Promise<_71.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: {
                                clientState?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                consensusState?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                signer: string;
                            };
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                header?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                signer: string;
                            };
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                clientState?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                consensusState?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                proofUpgradeClient: string;
                                proofUpgradeConsensusState: string;
                                signer: string;
                            };
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                misbehaviour?: {
                                    $typeUrl?: string;
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
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _72.MsgCreateClient): {
                            typeUrl: string;
                            value: _72.MsgCreateClient;
                        };
                        updateClient(value: _72.MsgUpdateClient): {
                            typeUrl: string;
                            value: _72.MsgUpdateClient;
                        };
                        upgradeClient(value: _72.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _72.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _72.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _72.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _72.MsgCreateClient) => _72.MsgCreateClientAmino;
                        fromAmino: (object: _72.MsgCreateClientAmino) => _72.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _72.MsgUpdateClient) => _72.MsgUpdateClientAmino;
                        fromAmino: (object: _72.MsgUpdateClientAmino) => _72.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _72.MsgUpgradeClient) => _72.MsgUpgradeClientAmino;
                        fromAmino: (object: _72.MsgUpgradeClientAmino) => _72.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _72.MsgSubmitMisbehaviour) => _72.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _72.MsgSubmitMisbehaviourAmino) => _72.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgCreateClient;
                    isSDK(o: any): o is _72.MsgCreateClientSDKType;
                    isAmino(o: any): o is _72.MsgCreateClientAmino;
                    encode(message: _72.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgCreateClient;
                    fromJSON(object: any): _72.MsgCreateClient;
                    toJSON(message: _72.MsgCreateClient): {
                        clientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_72.MsgCreateClient>): _72.MsgCreateClient;
                    fromAmino(object: _72.MsgCreateClientAmino): _72.MsgCreateClient;
                    toAmino(message: _72.MsgCreateClient): _72.MsgCreateClientAmino;
                    fromAminoMsg(object: _72.MsgCreateClientAminoMsg): _72.MsgCreateClient;
                    toAminoMsg(message: _72.MsgCreateClient): _72.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _72.MsgCreateClientProtoMsg): _72.MsgCreateClient;
                    toProto(message: _72.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _72.MsgCreateClient): _72.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgCreateClientResponse;
                    isSDK(o: any): o is _72.MsgCreateClientResponseSDKType;
                    isAmino(o: any): o is _72.MsgCreateClientResponseAmino;
                    encode(_: _72.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgCreateClientResponse;
                    fromJSON(_: any): _72.MsgCreateClientResponse;
                    toJSON(_: _72.MsgCreateClientResponse): {};
                    fromPartial(_: Partial<_72.MsgCreateClientResponse>): _72.MsgCreateClientResponse;
                    fromAmino(_: _72.MsgCreateClientResponseAmino): _72.MsgCreateClientResponse;
                    toAmino(_: _72.MsgCreateClientResponse): _72.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _72.MsgCreateClientResponseAminoMsg): _72.MsgCreateClientResponse;
                    toAminoMsg(message: _72.MsgCreateClientResponse): _72.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgCreateClientResponseProtoMsg): _72.MsgCreateClientResponse;
                    toProto(message: _72.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgCreateClientResponse): _72.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgUpdateClient;
                    isSDK(o: any): o is _72.MsgUpdateClientSDKType;
                    isAmino(o: any): o is _72.MsgUpdateClientAmino;
                    encode(message: _72.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpdateClient;
                    fromJSON(object: any): _72.MsgUpdateClient;
                    toJSON(message: _72.MsgUpdateClient): {
                        clientId: string;
                        header?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_72.MsgUpdateClient>): _72.MsgUpdateClient;
                    fromAmino(object: _72.MsgUpdateClientAmino): _72.MsgUpdateClient;
                    toAmino(message: _72.MsgUpdateClient): _72.MsgUpdateClientAmino;
                    fromAminoMsg(object: _72.MsgUpdateClientAminoMsg): _72.MsgUpdateClient;
                    toAminoMsg(message: _72.MsgUpdateClient): _72.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _72.MsgUpdateClientProtoMsg): _72.MsgUpdateClient;
                    toProto(message: _72.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _72.MsgUpdateClient): _72.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgUpdateClientResponse;
                    isSDK(o: any): o is _72.MsgUpdateClientResponseSDKType;
                    isAmino(o: any): o is _72.MsgUpdateClientResponseAmino;
                    encode(_: _72.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpdateClientResponse;
                    fromJSON(_: any): _72.MsgUpdateClientResponse;
                    toJSON(_: _72.MsgUpdateClientResponse): {};
                    fromPartial(_: Partial<_72.MsgUpdateClientResponse>): _72.MsgUpdateClientResponse;
                    fromAmino(_: _72.MsgUpdateClientResponseAmino): _72.MsgUpdateClientResponse;
                    toAmino(_: _72.MsgUpdateClientResponse): _72.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _72.MsgUpdateClientResponseAminoMsg): _72.MsgUpdateClientResponse;
                    toAminoMsg(message: _72.MsgUpdateClientResponse): _72.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgUpdateClientResponseProtoMsg): _72.MsgUpdateClientResponse;
                    toProto(message: _72.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgUpdateClientResponse): _72.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgUpgradeClient;
                    isSDK(o: any): o is _72.MsgUpgradeClientSDKType;
                    isAmino(o: any): o is _72.MsgUpgradeClientAmino;
                    encode(message: _72.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpgradeClient;
                    fromJSON(object: any): _72.MsgUpgradeClient;
                    toJSON(message: _72.MsgUpgradeClient): {
                        clientId: string;
                        clientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        proofUpgradeClient: string;
                        proofUpgradeConsensusState: string;
                        signer: string;
                    };
                    fromPartial(object: Partial<_72.MsgUpgradeClient>): _72.MsgUpgradeClient;
                    fromAmino(object: _72.MsgUpgradeClientAmino): _72.MsgUpgradeClient;
                    toAmino(message: _72.MsgUpgradeClient): _72.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _72.MsgUpgradeClientAminoMsg): _72.MsgUpgradeClient;
                    toAminoMsg(message: _72.MsgUpgradeClient): _72.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _72.MsgUpgradeClientProtoMsg): _72.MsgUpgradeClient;
                    toProto(message: _72.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _72.MsgUpgradeClient): _72.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgUpgradeClientResponse;
                    isSDK(o: any): o is _72.MsgUpgradeClientResponseSDKType;
                    isAmino(o: any): o is _72.MsgUpgradeClientResponseAmino;
                    encode(_: _72.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgUpgradeClientResponse;
                    fromJSON(_: any): _72.MsgUpgradeClientResponse;
                    toJSON(_: _72.MsgUpgradeClientResponse): {};
                    fromPartial(_: Partial<_72.MsgUpgradeClientResponse>): _72.MsgUpgradeClientResponse;
                    fromAmino(_: _72.MsgUpgradeClientResponseAmino): _72.MsgUpgradeClientResponse;
                    toAmino(_: _72.MsgUpgradeClientResponse): _72.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _72.MsgUpgradeClientResponseAminoMsg): _72.MsgUpgradeClientResponse;
                    toAminoMsg(message: _72.MsgUpgradeClientResponse): _72.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgUpgradeClientResponseProtoMsg): _72.MsgUpgradeClientResponse;
                    toProto(message: _72.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgUpgradeClientResponse): _72.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgSubmitMisbehaviour;
                    isSDK(o: any): o is _72.MsgSubmitMisbehaviourSDKType;
                    isAmino(o: any): o is _72.MsgSubmitMisbehaviourAmino;
                    encode(message: _72.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _72.MsgSubmitMisbehaviour;
                    toJSON(message: _72.MsgSubmitMisbehaviour): {
                        clientId: string;
                        misbehaviour?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_72.MsgSubmitMisbehaviour>): _72.MsgSubmitMisbehaviour;
                    fromAmino(object: _72.MsgSubmitMisbehaviourAmino): _72.MsgSubmitMisbehaviour;
                    toAmino(message: _72.MsgSubmitMisbehaviour): _72.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _72.MsgSubmitMisbehaviourAminoMsg): _72.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _72.MsgSubmitMisbehaviour): _72.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _72.MsgSubmitMisbehaviourProtoMsg): _72.MsgSubmitMisbehaviour;
                    toProto(message: _72.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _72.MsgSubmitMisbehaviour): _72.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _72.MsgSubmitMisbehaviourResponse;
                    isSDK(o: any): o is _72.MsgSubmitMisbehaviourResponseSDKType;
                    isAmino(o: any): o is _72.MsgSubmitMisbehaviourResponseAmino;
                    encode(_: _72.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _72.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _72.MsgSubmitMisbehaviourResponse): {};
                    fromPartial(_: Partial<_72.MsgSubmitMisbehaviourResponse>): _72.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _72.MsgSubmitMisbehaviourResponseAmino): _72.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _72.MsgSubmitMisbehaviourResponse): _72.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _72.MsgSubmitMisbehaviourResponseAminoMsg): _72.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _72.MsgSubmitMisbehaviourResponse): _72.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgSubmitMisbehaviourResponseProtoMsg): _72.MsgSubmitMisbehaviourResponse;
                    toProto(message: _72.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgSubmitMisbehaviourResponse): _72.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientStateRequest;
                    isSDK(o: any): o is _71.QueryClientStateRequestSDKType;
                    isAmino(o: any): o is _71.QueryClientStateRequestAmino;
                    encode(message: _71.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStateRequest;
                    fromJSON(object: any): _71.QueryClientStateRequest;
                    toJSON(message: _71.QueryClientStateRequest): {
                        clientId: string;
                    };
                    fromPartial(object: Partial<_71.QueryClientStateRequest>): _71.QueryClientStateRequest;
                    fromAmino(object: _71.QueryClientStateRequestAmino): _71.QueryClientStateRequest;
                    toAmino(message: _71.QueryClientStateRequest): _71.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _71.QueryClientStateRequestAminoMsg): _71.QueryClientStateRequest;
                    toAminoMsg(message: _71.QueryClientStateRequest): _71.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStateRequestProtoMsg): _71.QueryClientStateRequest;
                    toProto(message: _71.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStateRequest): _71.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientStateResponse;
                    isSDK(o: any): o is _71.QueryClientStateResponseSDKType;
                    isAmino(o: any): o is _71.QueryClientStateResponseAmino;
                    encode(message: _71.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStateResponse;
                    fromJSON(object: any): _71.QueryClientStateResponse;
                    toJSON(message: _71.QueryClientStateResponse): {
                        clientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryClientStateResponse>): _71.QueryClientStateResponse;
                    fromAmino(object: _71.QueryClientStateResponseAmino): _71.QueryClientStateResponse;
                    toAmino(message: _71.QueryClientStateResponse): _71.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _71.QueryClientStateResponseAminoMsg): _71.QueryClientStateResponse;
                    toAminoMsg(message: _71.QueryClientStateResponse): _71.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStateResponseProtoMsg): _71.QueryClientStateResponse;
                    toProto(message: _71.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStateResponse): _71.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientStatesRequest;
                    isSDK(o: any): o is _71.QueryClientStatesRequestSDKType;
                    isAmino(o: any): o is _71.QueryClientStatesRequestAmino;
                    encode(message: _71.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatesRequest;
                    fromJSON(object: any): _71.QueryClientStatesRequest;
                    toJSON(message: _71.QueryClientStatesRequest): {
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryClientStatesRequest>): _71.QueryClientStatesRequest;
                    fromAmino(object: _71.QueryClientStatesRequestAmino): _71.QueryClientStatesRequest;
                    toAmino(message: _71.QueryClientStatesRequest): _71.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _71.QueryClientStatesRequestAminoMsg): _71.QueryClientStatesRequest;
                    toAminoMsg(message: _71.QueryClientStatesRequest): _71.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatesRequestProtoMsg): _71.QueryClientStatesRequest;
                    toProto(message: _71.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatesRequest): _71.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientStatesResponse;
                    isSDK(o: any): o is _71.QueryClientStatesResponseSDKType;
                    isAmino(o: any): o is _71.QueryClientStatesResponseAmino;
                    encode(message: _71.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatesResponse;
                    fromJSON(object: any): _71.QueryClientStatesResponse;
                    toJSON(message: _71.QueryClientStatesResponse): {
                        clientStates: {
                            clientId: string;
                            clientState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryClientStatesResponse>): _71.QueryClientStatesResponse;
                    fromAmino(object: _71.QueryClientStatesResponseAmino): _71.QueryClientStatesResponse;
                    toAmino(message: _71.QueryClientStatesResponse): _71.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _71.QueryClientStatesResponseAminoMsg): _71.QueryClientStatesResponse;
                    toAminoMsg(message: _71.QueryClientStatesResponse): _71.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatesResponseProtoMsg): _71.QueryClientStatesResponse;
                    toProto(message: _71.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatesResponse): _71.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryConsensusStateRequest;
                    isSDK(o: any): o is _71.QueryConsensusStateRequestSDKType;
                    isAmino(o: any): o is _71.QueryConsensusStateRequestAmino;
                    encode(message: _71.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStateRequest;
                    fromJSON(object: any): _71.QueryConsensusStateRequest;
                    toJSON(message: _71.QueryConsensusStateRequest): {
                        clientId: string;
                        revisionNumber: string;
                        revisionHeight: string;
                        latestHeight: boolean;
                    };
                    fromPartial(object: Partial<_71.QueryConsensusStateRequest>): _71.QueryConsensusStateRequest;
                    fromAmino(object: _71.QueryConsensusStateRequestAmino): _71.QueryConsensusStateRequest;
                    toAmino(message: _71.QueryConsensusStateRequest): _71.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _71.QueryConsensusStateRequestAminoMsg): _71.QueryConsensusStateRequest;
                    toAminoMsg(message: _71.QueryConsensusStateRequest): _71.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStateRequestProtoMsg): _71.QueryConsensusStateRequest;
                    toProto(message: _71.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStateRequest): _71.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryConsensusStateResponse;
                    isSDK(o: any): o is _71.QueryConsensusStateResponseSDKType;
                    isAmino(o: any): o is _71.QueryConsensusStateResponseAmino;
                    encode(message: _71.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStateResponse;
                    fromJSON(object: any): _71.QueryConsensusStateResponse;
                    toJSON(message: _71.QueryConsensusStateResponse): {
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryConsensusStateResponse>): _71.QueryConsensusStateResponse;
                    fromAmino(object: _71.QueryConsensusStateResponseAmino): _71.QueryConsensusStateResponse;
                    toAmino(message: _71.QueryConsensusStateResponse): _71.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _71.QueryConsensusStateResponseAminoMsg): _71.QueryConsensusStateResponse;
                    toAminoMsg(message: _71.QueryConsensusStateResponse): _71.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStateResponseProtoMsg): _71.QueryConsensusStateResponse;
                    toProto(message: _71.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStateResponse): _71.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryConsensusStatesRequest;
                    isSDK(o: any): o is _71.QueryConsensusStatesRequestSDKType;
                    isAmino(o: any): o is _71.QueryConsensusStatesRequestAmino;
                    encode(message: _71.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStatesRequest;
                    fromJSON(object: any): _71.QueryConsensusStatesRequest;
                    toJSON(message: _71.QueryConsensusStatesRequest): {
                        clientId: string;
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryConsensusStatesRequest>): _71.QueryConsensusStatesRequest;
                    fromAmino(object: _71.QueryConsensusStatesRequestAmino): _71.QueryConsensusStatesRequest;
                    toAmino(message: _71.QueryConsensusStatesRequest): _71.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _71.QueryConsensusStatesRequestAminoMsg): _71.QueryConsensusStatesRequest;
                    toAminoMsg(message: _71.QueryConsensusStatesRequest): _71.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStatesRequestProtoMsg): _71.QueryConsensusStatesRequest;
                    toProto(message: _71.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStatesRequest): _71.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryConsensusStatesResponse;
                    isSDK(o: any): o is _71.QueryConsensusStatesResponseSDKType;
                    isAmino(o: any): o is _71.QueryConsensusStatesResponseAmino;
                    encode(message: _71.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryConsensusStatesResponse;
                    fromJSON(object: any): _71.QueryConsensusStatesResponse;
                    toJSON(message: _71.QueryConsensusStatesResponse): {
                        consensusStates: {
                            height: {
                                revisionNumber: string;
                                revisionHeight: string;
                            };
                            consensusState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryConsensusStatesResponse>): _71.QueryConsensusStatesResponse;
                    fromAmino(object: _71.QueryConsensusStatesResponseAmino): _71.QueryConsensusStatesResponse;
                    toAmino(message: _71.QueryConsensusStatesResponse): _71.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _71.QueryConsensusStatesResponseAminoMsg): _71.QueryConsensusStatesResponse;
                    toAminoMsg(message: _71.QueryConsensusStatesResponse): _71.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryConsensusStatesResponseProtoMsg): _71.QueryConsensusStatesResponse;
                    toProto(message: _71.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryConsensusStatesResponse): _71.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientStatusRequest;
                    isSDK(o: any): o is _71.QueryClientStatusRequestSDKType;
                    isAmino(o: any): o is _71.QueryClientStatusRequestAmino;
                    encode(message: _71.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatusRequest;
                    fromJSON(object: any): _71.QueryClientStatusRequest;
                    toJSON(message: _71.QueryClientStatusRequest): {
                        clientId: string;
                    };
                    fromPartial(object: Partial<_71.QueryClientStatusRequest>): _71.QueryClientStatusRequest;
                    fromAmino(object: _71.QueryClientStatusRequestAmino): _71.QueryClientStatusRequest;
                    toAmino(message: _71.QueryClientStatusRequest): _71.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _71.QueryClientStatusRequestAminoMsg): _71.QueryClientStatusRequest;
                    toAminoMsg(message: _71.QueryClientStatusRequest): _71.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatusRequestProtoMsg): _71.QueryClientStatusRequest;
                    toProto(message: _71.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatusRequest): _71.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientStatusResponse;
                    isSDK(o: any): o is _71.QueryClientStatusResponseSDKType;
                    isAmino(o: any): o is _71.QueryClientStatusResponseAmino;
                    encode(message: _71.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientStatusResponse;
                    fromJSON(object: any): _71.QueryClientStatusResponse;
                    toJSON(message: _71.QueryClientStatusResponse): {
                        status: string;
                    };
                    fromPartial(object: Partial<_71.QueryClientStatusResponse>): _71.QueryClientStatusResponse;
                    fromAmino(object: _71.QueryClientStatusResponseAmino): _71.QueryClientStatusResponse;
                    toAmino(message: _71.QueryClientStatusResponse): _71.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _71.QueryClientStatusResponseAminoMsg): _71.QueryClientStatusResponse;
                    toAminoMsg(message: _71.QueryClientStatusResponse): _71.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientStatusResponseProtoMsg): _71.QueryClientStatusResponse;
                    toProto(message: _71.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientStatusResponse): _71.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientParamsRequest;
                    isSDK(o: any): o is _71.QueryClientParamsRequestSDKType;
                    isAmino(o: any): o is _71.QueryClientParamsRequestAmino;
                    encode(_: _71.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientParamsRequest;
                    fromJSON(_: any): _71.QueryClientParamsRequest;
                    toJSON(_: _71.QueryClientParamsRequest): {};
                    fromPartial(_: Partial<_71.QueryClientParamsRequest>): _71.QueryClientParamsRequest;
                    fromAmino(_: _71.QueryClientParamsRequestAmino): _71.QueryClientParamsRequest;
                    toAmino(_: _71.QueryClientParamsRequest): _71.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _71.QueryClientParamsRequestAminoMsg): _71.QueryClientParamsRequest;
                    toAminoMsg(message: _71.QueryClientParamsRequest): _71.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryClientParamsRequestProtoMsg): _71.QueryClientParamsRequest;
                    toProto(message: _71.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryClientParamsRequest): _71.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryClientParamsResponse;
                    isSDK(o: any): o is _71.QueryClientParamsResponseSDKType;
                    isAmino(o: any): o is _71.QueryClientParamsResponseAmino;
                    encode(message: _71.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryClientParamsResponse;
                    fromJSON(object: any): _71.QueryClientParamsResponse;
                    toJSON(message: _71.QueryClientParamsResponse): {
                        params?: {
                            allowedClients: string[];
                        };
                    };
                    fromPartial(object: Partial<_71.QueryClientParamsResponse>): _71.QueryClientParamsResponse;
                    fromAmino(object: _71.QueryClientParamsResponseAmino): _71.QueryClientParamsResponse;
                    toAmino(message: _71.QueryClientParamsResponse): _71.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _71.QueryClientParamsResponseAminoMsg): _71.QueryClientParamsResponse;
                    toAminoMsg(message: _71.QueryClientParamsResponse): _71.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryClientParamsResponseProtoMsg): _71.QueryClientParamsResponse;
                    toProto(message: _71.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryClientParamsResponse): _71.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryUpgradedClientStateRequest;
                    isSDK(o: any): o is _71.QueryUpgradedClientStateRequestSDKType;
                    isAmino(o: any): o is _71.QueryUpgradedClientStateRequestAmino;
                    encode(_: _71.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _71.QueryUpgradedClientStateRequest;
                    toJSON(_: _71.QueryUpgradedClientStateRequest): {};
                    fromPartial(_: Partial<_71.QueryUpgradedClientStateRequest>): _71.QueryUpgradedClientStateRequest;
                    fromAmino(_: _71.QueryUpgradedClientStateRequestAmino): _71.QueryUpgradedClientStateRequest;
                    toAmino(_: _71.QueryUpgradedClientStateRequest): _71.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _71.QueryUpgradedClientStateRequestAminoMsg): _71.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _71.QueryUpgradedClientStateRequest): _71.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedClientStateRequestProtoMsg): _71.QueryUpgradedClientStateRequest;
                    toProto(message: _71.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedClientStateRequest): _71.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryUpgradedClientStateResponse;
                    isSDK(o: any): o is _71.QueryUpgradedClientStateResponseSDKType;
                    isAmino(o: any): o is _71.QueryUpgradedClientStateResponseAmino;
                    encode(message: _71.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _71.QueryUpgradedClientStateResponse;
                    toJSON(message: _71.QueryUpgradedClientStateResponse): {
                        upgradedClientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryUpgradedClientStateResponse>): _71.QueryUpgradedClientStateResponse;
                    fromAmino(object: _71.QueryUpgradedClientStateResponseAmino): _71.QueryUpgradedClientStateResponse;
                    toAmino(message: _71.QueryUpgradedClientStateResponse): _71.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _71.QueryUpgradedClientStateResponseAminoMsg): _71.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _71.QueryUpgradedClientStateResponse): _71.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedClientStateResponseProtoMsg): _71.QueryUpgradedClientStateResponse;
                    toProto(message: _71.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedClientStateResponse): _71.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryUpgradedConsensusStateRequest;
                    isSDK(o: any): o is _71.QueryUpgradedConsensusStateRequestSDKType;
                    isAmino(o: any): o is _71.QueryUpgradedConsensusStateRequestAmino;
                    encode(_: _71.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _71.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _71.QueryUpgradedConsensusStateRequest): {};
                    fromPartial(_: Partial<_71.QueryUpgradedConsensusStateRequest>): _71.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _71.QueryUpgradedConsensusStateRequestAmino): _71.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _71.QueryUpgradedConsensusStateRequestAminoMsg): _71.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedConsensusStateRequestProtoMsg): _71.QueryUpgradedConsensusStateRequest;
                    toProto(message: _71.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedConsensusStateRequest): _71.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _71.QueryUpgradedConsensusStateResponse;
                    isSDK(o: any): o is _71.QueryUpgradedConsensusStateResponseSDKType;
                    isAmino(o: any): o is _71.QueryUpgradedConsensusStateResponseAmino;
                    encode(message: _71.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _71.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _71.QueryUpgradedConsensusStateResponse): {
                        upgradedConsensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_71.QueryUpgradedConsensusStateResponse>): _71.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _71.QueryUpgradedConsensusStateResponseAmino): _71.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _71.QueryUpgradedConsensusStateResponseAminoMsg): _71.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _71.QueryUpgradedConsensusStateResponseProtoMsg): _71.QueryUpgradedConsensusStateResponse;
                    toProto(message: _71.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _71.QueryUpgradedConsensusStateResponse): _71.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.GenesisState;
                    isSDK(o: any): o is _70.GenesisStateSDKType;
                    isAmino(o: any): o is _70.GenesisStateAmino;
                    encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GenesisState;
                    fromJSON(object: any): _70.GenesisState;
                    toJSON(message: _70.GenesisState): {
                        clients: {
                            clientId: string;
                            clientState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        }[];
                        clientsConsensus: {
                            clientId: string;
                            consensusStates: {
                                height: {
                                    revisionNumber: string;
                                    revisionHeight: string;
                                };
                                consensusState?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                            }[];
                        }[];
                        clientsMetadata: {
                            clientId: string;
                            clientMetadata: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        params: {
                            allowedClients: string[];
                        };
                        createLocalhost: boolean;
                        nextClientSequence: string;
                    };
                    fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                    fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                    toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                    fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                    toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                    fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                    toProto(message: _70.GenesisState): Uint8Array;
                    toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.GenesisMetadata;
                    isSDK(o: any): o is _70.GenesisMetadataSDKType;
                    isAmino(o: any): o is _70.GenesisMetadataAmino;
                    encode(message: _70.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.GenesisMetadata;
                    fromJSON(object: any): _70.GenesisMetadata;
                    toJSON(message: _70.GenesisMetadata): {
                        key: string;
                        value: string;
                    };
                    fromPartial(object: Partial<_70.GenesisMetadata>): _70.GenesisMetadata;
                    fromAmino(object: _70.GenesisMetadataAmino): _70.GenesisMetadata;
                    toAmino(message: _70.GenesisMetadata): _70.GenesisMetadataAmino;
                    fromAminoMsg(object: _70.GenesisMetadataAminoMsg): _70.GenesisMetadata;
                    toAminoMsg(message: _70.GenesisMetadata): _70.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _70.GenesisMetadataProtoMsg): _70.GenesisMetadata;
                    toProto(message: _70.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _70.GenesisMetadata): _70.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _70.IdentifiedGenesisMetadata;
                    isSDK(o: any): o is _70.IdentifiedGenesisMetadataSDKType;
                    isAmino(o: any): o is _70.IdentifiedGenesisMetadataAmino;
                    encode(message: _70.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _70.IdentifiedGenesisMetadata;
                    toJSON(message: _70.IdentifiedGenesisMetadata): {
                        clientId: string;
                        clientMetadata: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromPartial(object: Partial<_70.IdentifiedGenesisMetadata>): _70.IdentifiedGenesisMetadata;
                    fromAmino(object: _70.IdentifiedGenesisMetadataAmino): _70.IdentifiedGenesisMetadata;
                    toAmino(message: _70.IdentifiedGenesisMetadata): _70.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _70.IdentifiedGenesisMetadataAminoMsg): _70.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _70.IdentifiedGenesisMetadata): _70.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _70.IdentifiedGenesisMetadataProtoMsg): _70.IdentifiedGenesisMetadata;
                    toProto(message: _70.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _70.IdentifiedGenesisMetadata): _70.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.IdentifiedClientState;
                    isSDK(o: any): o is _69.IdentifiedClientStateSDKType;
                    isAmino(o: any): o is _69.IdentifiedClientStateAmino;
                    encode(message: _69.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.IdentifiedClientState;
                    fromJSON(object: any): _69.IdentifiedClientState;
                    toJSON(message: _69.IdentifiedClientState): {
                        clientId: string;
                        clientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_69.IdentifiedClientState>): _69.IdentifiedClientState;
                    fromAmino(object: _69.IdentifiedClientStateAmino): _69.IdentifiedClientState;
                    toAmino(message: _69.IdentifiedClientState): _69.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _69.IdentifiedClientStateAminoMsg): _69.IdentifiedClientState;
                    toAminoMsg(message: _69.IdentifiedClientState): _69.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _69.IdentifiedClientStateProtoMsg): _69.IdentifiedClientState;
                    toProto(message: _69.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _69.IdentifiedClientState): _69.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.ConsensusStateWithHeight;
                    isSDK(o: any): o is _69.ConsensusStateWithHeightSDKType;
                    isAmino(o: any): o is _69.ConsensusStateWithHeightAmino;
                    encode(message: _69.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ConsensusStateWithHeight;
                    fromJSON(object: any): _69.ConsensusStateWithHeight;
                    toJSON(message: _69.ConsensusStateWithHeight): {
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_69.ConsensusStateWithHeight>): _69.ConsensusStateWithHeight;
                    fromAmino(object: _69.ConsensusStateWithHeightAmino): _69.ConsensusStateWithHeight;
                    toAmino(message: _69.ConsensusStateWithHeight): _69.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _69.ConsensusStateWithHeightAminoMsg): _69.ConsensusStateWithHeight;
                    toAminoMsg(message: _69.ConsensusStateWithHeight): _69.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _69.ConsensusStateWithHeightProtoMsg): _69.ConsensusStateWithHeight;
                    toProto(message: _69.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _69.ConsensusStateWithHeight): _69.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.ClientConsensusStates;
                    isSDK(o: any): o is _69.ClientConsensusStatesSDKType;
                    isAmino(o: any): o is _69.ClientConsensusStatesAmino;
                    encode(message: _69.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ClientConsensusStates;
                    fromJSON(object: any): _69.ClientConsensusStates;
                    toJSON(message: _69.ClientConsensusStates): {
                        clientId: string;
                        consensusStates: {
                            height: {
                                revisionNumber: string;
                                revisionHeight: string;
                            };
                            consensusState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        }[];
                    };
                    fromPartial(object: Partial<_69.ClientConsensusStates>): _69.ClientConsensusStates;
                    fromAmino(object: _69.ClientConsensusStatesAmino): _69.ClientConsensusStates;
                    toAmino(message: _69.ClientConsensusStates): _69.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _69.ClientConsensusStatesAminoMsg): _69.ClientConsensusStates;
                    toAminoMsg(message: _69.ClientConsensusStates): _69.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _69.ClientConsensusStatesProtoMsg): _69.ClientConsensusStates;
                    toProto(message: _69.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _69.ClientConsensusStates): _69.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.ClientUpdateProposal;
                    isSDK(o: any): o is _69.ClientUpdateProposalSDKType;
                    isAmino(o: any): o is _69.ClientUpdateProposalAmino;
                    encode(message: _69.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.ClientUpdateProposal;
                    fromJSON(object: any): _69.ClientUpdateProposal;
                    toJSON(message: _69.ClientUpdateProposal): {
                        $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                        title: string;
                        description: string;
                        subjectClientId: string;
                        substituteClientId: string;
                    };
                    fromPartial(object: Partial<_69.ClientUpdateProposal>): _69.ClientUpdateProposal;
                    fromAmino(object: _69.ClientUpdateProposalAmino): _69.ClientUpdateProposal;
                    toAmino(message: _69.ClientUpdateProposal): _69.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _69.ClientUpdateProposalAminoMsg): _69.ClientUpdateProposal;
                    toAminoMsg(message: _69.ClientUpdateProposal): _69.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _69.ClientUpdateProposalProtoMsg): _69.ClientUpdateProposal;
                    toProto(message: _69.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _69.ClientUpdateProposal): _69.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.UpgradeProposal;
                    isSDK(o: any): o is _69.UpgradeProposalSDKType;
                    isAmino(o: any): o is _69.UpgradeProposalAmino;
                    encode(message: _69.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.UpgradeProposal;
                    fromJSON(object: any): _69.UpgradeProposal;
                    toJSON(message: _69.UpgradeProposal): {
                        $typeUrl?: "/ibc.core.client.v1.UpgradeProposal";
                        title: string;
                        description: string;
                        plan: {
                            name: string;
                            time: string;
                            height: string;
                            info: string;
                            upgradedClientState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        };
                        upgradedClientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_69.UpgradeProposal>): _69.UpgradeProposal;
                    fromAmino(object: _69.UpgradeProposalAmino): _69.UpgradeProposal;
                    toAmino(message: _69.UpgradeProposal): _69.UpgradeProposalAmino;
                    fromAminoMsg(object: _69.UpgradeProposalAminoMsg): _69.UpgradeProposal;
                    toAminoMsg(message: _69.UpgradeProposal): _69.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _69.UpgradeProposalProtoMsg): _69.UpgradeProposal;
                    toProto(message: _69.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _69.UpgradeProposal): _69.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.Height;
                    isSDK(o: any): o is _69.HeightSDKType;
                    isAmino(o: any): o is _69.HeightAmino;
                    encode(message: _69.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Height;
                    fromJSON(object: any): _69.Height;
                    toJSON(message: _69.Height): {
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    fromPartial(object: Partial<_69.Height>): _69.Height;
                    fromAmino(object: _69.HeightAmino): _69.Height;
                    toAmino(message: _69.Height): _69.HeightAmino;
                    fromAminoMsg(object: _69.HeightAminoMsg): _69.Height;
                    toAminoMsg(message: _69.Height): _69.HeightAminoMsg;
                    fromProtoMsg(message: _69.HeightProtoMsg): _69.Height;
                    toProto(message: _69.Height): Uint8Array;
                    toProtoMsg(message: _69.Height): _69.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _69.Params;
                    isSDK(o: any): o is _69.ParamsSDKType;
                    isAmino(o: any): o is _69.ParamsAmino;
                    encode(message: _69.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.Params;
                    fromJSON(object: any): _69.Params;
                    toJSON(message: _69.Params): {
                        allowedClients: string[];
                    };
                    fromPartial(object: Partial<_69.Params>): _69.Params;
                    fromAmino(object: _69.ParamsAmino): _69.Params;
                    toAmino(message: _69.Params): _69.ParamsAmino;
                    fromAminoMsg(object: _69.ParamsAminoMsg): _69.Params;
                    toAminoMsg(message: _69.Params): _69.ParamsAminoMsg;
                    fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
                    toProto(message: _69.Params): Uint8Array;
                    toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.MerkleRoot;
                    isSDK(o: any): o is _73.MerkleRootSDKType;
                    isAmino(o: any): o is _73.MerkleRootAmino;
                    encode(message: _73.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerkleRoot;
                    fromJSON(object: any): _73.MerkleRoot;
                    toJSON(message: _73.MerkleRoot): {
                        hash: string;
                    };
                    fromPartial(object: Partial<_73.MerkleRoot>): _73.MerkleRoot;
                    fromAmino(object: _73.MerkleRootAmino): _73.MerkleRoot;
                    toAmino(message: _73.MerkleRoot): _73.MerkleRootAmino;
                    fromAminoMsg(object: _73.MerkleRootAminoMsg): _73.MerkleRoot;
                    toAminoMsg(message: _73.MerkleRoot): _73.MerkleRootAminoMsg;
                    fromProtoMsg(message: _73.MerkleRootProtoMsg): _73.MerkleRoot;
                    toProto(message: _73.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _73.MerkleRoot): _73.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.MerklePrefix;
                    isSDK(o: any): o is _73.MerklePrefixSDKType;
                    isAmino(o: any): o is _73.MerklePrefixAmino;
                    encode(message: _73.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerklePrefix;
                    fromJSON(object: any): _73.MerklePrefix;
                    toJSON(message: _73.MerklePrefix): {
                        keyPrefix: string;
                    };
                    fromPartial(object: Partial<_73.MerklePrefix>): _73.MerklePrefix;
                    fromAmino(object: _73.MerklePrefixAmino): _73.MerklePrefix;
                    toAmino(message: _73.MerklePrefix): _73.MerklePrefixAmino;
                    fromAminoMsg(object: _73.MerklePrefixAminoMsg): _73.MerklePrefix;
                    toAminoMsg(message: _73.MerklePrefix): _73.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _73.MerklePrefixProtoMsg): _73.MerklePrefix;
                    toProto(message: _73.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _73.MerklePrefix): _73.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.MerklePath;
                    isSDK(o: any): o is _73.MerklePathSDKType;
                    isAmino(o: any): o is _73.MerklePathAmino;
                    encode(message: _73.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerklePath;
                    fromJSON(object: any): _73.MerklePath;
                    toJSON(message: _73.MerklePath): {
                        keyPath: string[];
                    };
                    fromPartial(object: Partial<_73.MerklePath>): _73.MerklePath;
                    fromAmino(object: _73.MerklePathAmino): _73.MerklePath;
                    toAmino(message: _73.MerklePath): _73.MerklePathAmino;
                    fromAminoMsg(object: _73.MerklePathAminoMsg): _73.MerklePath;
                    toAminoMsg(message: _73.MerklePath): _73.MerklePathAminoMsg;
                    fromProtoMsg(message: _73.MerklePathProtoMsg): _73.MerklePath;
                    toProto(message: _73.MerklePath): Uint8Array;
                    toProtoMsg(message: _73.MerklePath): _73.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _73.MerkleProof;
                    isSDK(o: any): o is _73.MerkleProofSDKType;
                    isAmino(o: any): o is _73.MerkleProofAmino;
                    encode(message: _73.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.MerkleProof;
                    fromJSON(object: any): _73.MerkleProof;
                    toJSON(message: _73.MerkleProof): {
                        proofs: {
                            exist?: {
                                key: string;
                                value: string;
                                leaf?: {
                                    hash: import("../confio/proofs").HashOp;
                                    prehashKey: import("../confio/proofs").HashOp;
                                    prehashValue: import("../confio/proofs").HashOp;
                                    length: import("../confio/proofs").LengthOp;
                                    prefix: string;
                                };
                                path: {
                                    hash: import("../confio/proofs").HashOp;
                                    prefix: string;
                                    suffix: string;
                                }[];
                            };
                            nonexist?: {
                                key: string;
                                left?: {
                                    key: string;
                                    value: string;
                                    leaf?: {
                                        hash: import("../confio/proofs").HashOp;
                                        prehashKey: import("../confio/proofs").HashOp;
                                        prehashValue: import("../confio/proofs").HashOp;
                                        length: import("../confio/proofs").LengthOp;
                                        prefix: string;
                                    };
                                    path: {
                                        hash: import("../confio/proofs").HashOp;
                                        prefix: string;
                                        suffix: string;
                                    }[];
                                };
                                right?: {
                                    key: string;
                                    value: string;
                                    leaf?: {
                                        hash: import("../confio/proofs").HashOp;
                                        prehashKey: import("../confio/proofs").HashOp;
                                        prehashValue: import("../confio/proofs").HashOp;
                                        length: import("../confio/proofs").LengthOp;
                                        prefix: string;
                                    };
                                    path: {
                                        hash: import("../confio/proofs").HashOp;
                                        prefix: string;
                                        suffix: string;
                                    }[];
                                };
                            };
                            batch?: {
                                entries: {
                                    exist?: {
                                        key: string;
                                        value: string;
                                        leaf?: {
                                            hash: import("../confio/proofs").HashOp;
                                            prehashKey: import("../confio/proofs").HashOp;
                                            prehashValue: import("../confio/proofs").HashOp;
                                            length: import("../confio/proofs").LengthOp;
                                            prefix: string;
                                        };
                                        path: {
                                            hash: import("../confio/proofs").HashOp;
                                            prefix: string;
                                            suffix: string;
                                        }[];
                                    };
                                    nonexist?: {
                                        key: string;
                                        left?: {
                                            key: string;
                                            value: string;
                                            leaf?: {
                                                hash: import("../confio/proofs").HashOp;
                                                prehashKey: import("../confio/proofs").HashOp;
                                                prehashValue: import("../confio/proofs").HashOp;
                                                length: import("../confio/proofs").LengthOp;
                                                prefix: string;
                                            };
                                            path: {
                                                hash: import("../confio/proofs").HashOp;
                                                prefix: string;
                                                suffix: string;
                                            }[];
                                        };
                                        right?: {
                                            key: string;
                                            value: string;
                                            leaf?: {
                                                hash: import("../confio/proofs").HashOp;
                                                prehashKey: import("../confio/proofs").HashOp;
                                                prehashValue: import("../confio/proofs").HashOp;
                                                length: import("../confio/proofs").LengthOp;
                                                prefix: string;
                                            };
                                            path: {
                                                hash: import("../confio/proofs").HashOp;
                                                prefix: string;
                                                suffix: string;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries: {
                                    exist?: {
                                        key: string;
                                        value: string;
                                        leaf?: {
                                            hash: import("../confio/proofs").HashOp;
                                            prehashKey: import("../confio/proofs").HashOp;
                                            prehashValue: import("../confio/proofs").HashOp;
                                            length: import("../confio/proofs").LengthOp;
                                            prefix: string;
                                        };
                                        path: number[];
                                    };
                                    nonexist?: {
                                        key: string;
                                        left?: {
                                            key: string;
                                            value: string;
                                            leaf?: {
                                                hash: import("../confio/proofs").HashOp;
                                                prehashKey: import("../confio/proofs").HashOp;
                                                prehashValue: import("../confio/proofs").HashOp;
                                                length: import("../confio/proofs").LengthOp;
                                                prefix: string;
                                            };
                                            path: number[];
                                        };
                                        right?: {
                                            key: string;
                                            value: string;
                                            leaf?: {
                                                hash: import("../confio/proofs").HashOp;
                                                prehashKey: import("../confio/proofs").HashOp;
                                                prehashValue: import("../confio/proofs").HashOp;
                                                length: import("../confio/proofs").LengthOp;
                                                prefix: string;
                                            };
                                            path: number[];
                                        };
                                    };
                                }[];
                                lookupInners: {
                                    hash: import("../confio/proofs").HashOp;
                                    prefix: string;
                                    suffix: string;
                                }[];
                            };
                        }[];
                    };
                    fromPartial(object: Partial<_73.MerkleProof>): _73.MerkleProof;
                    fromAmino(object: _73.MerkleProofAmino): _73.MerkleProof;
                    toAmino(message: _73.MerkleProof): _73.MerkleProofAmino;
                    fromAminoMsg(object: _73.MerkleProofAminoMsg): _73.MerkleProof;
                    toAminoMsg(message: _73.MerkleProof): _73.MerkleProofAminoMsg;
                    fromProtoMsg(message: _73.MerkleProofProtoMsg): _73.MerkleProof;
                    toProto(message: _73.MerkleProof): Uint8Array;
                    toProtoMsg(message: _73.MerkleProof): _73.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _200.MsgClientImpl;
                QueryClientImpl: typeof _196.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _76.QueryConnectionRequest): Promise<_76.QueryConnectionResponse>;
                    connections(request?: _76.QueryConnectionsRequest): Promise<_76.QueryConnectionsResponse>;
                    clientConnections(request: _76.QueryClientConnectionsRequest): Promise<_76.QueryClientConnectionsResponse>;
                    connectionClientState(request: _76.QueryConnectionClientStateRequest): Promise<_76.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _76.QueryConnectionConsensusStateRequest): Promise<_76.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
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
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: {
                                clientId: string;
                                previousConnectionId: string;
                                clientState?: {
                                    $typeUrl?: string;
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
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: {
                                connectionId: string;
                                counterpartyConnectionId: string;
                                version?: {
                                    identifier: string;
                                    features: string[];
                                };
                                clientState?: {
                                    $typeUrl?: string;
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
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
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
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _77.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _77.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _77.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _77.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenInit) => _77.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _77.MsgConnectionOpenInitAmino) => _77.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenTry) => _77.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _77.MsgConnectionOpenTryAmino) => _77.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenAck) => _77.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _77.MsgConnectionOpenAckAmino) => _77.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _77.MsgConnectionOpenConfirm) => _77.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _77.MsgConnectionOpenConfirmAmino) => _77.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenInit;
                    isSDK(o: any): o is _77.MsgConnectionOpenInitSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenInitAmino;
                    encode(message: _77.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenInit;
                    fromJSON(object: any): _77.MsgConnectionOpenInit;
                    toJSON(message: _77.MsgConnectionOpenInit): {
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
                    fromPartial(object: Partial<_77.MsgConnectionOpenInit>): _77.MsgConnectionOpenInit;
                    fromAmino(object: _77.MsgConnectionOpenInitAmino): _77.MsgConnectionOpenInit;
                    toAmino(message: _77.MsgConnectionOpenInit): _77.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenInitAminoMsg): _77.MsgConnectionOpenInit;
                    toAminoMsg(message: _77.MsgConnectionOpenInit): _77.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenInitProtoMsg): _77.MsgConnectionOpenInit;
                    toProto(message: _77.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenInit): _77.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenInitResponse;
                    isSDK(o: any): o is _77.MsgConnectionOpenInitResponseSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenInitResponseAmino;
                    encode(_: _77.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _77.MsgConnectionOpenInitResponse;
                    toJSON(_: _77.MsgConnectionOpenInitResponse): {};
                    fromPartial(_: Partial<_77.MsgConnectionOpenInitResponse>): _77.MsgConnectionOpenInitResponse;
                    fromAmino(_: _77.MsgConnectionOpenInitResponseAmino): _77.MsgConnectionOpenInitResponse;
                    toAmino(_: _77.MsgConnectionOpenInitResponse): _77.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenInitResponseAminoMsg): _77.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenInitResponse): _77.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenInitResponseProtoMsg): _77.MsgConnectionOpenInitResponse;
                    toProto(message: _77.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenInitResponse): _77.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenTry;
                    isSDK(o: any): o is _77.MsgConnectionOpenTrySDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenTryAmino;
                    encode(message: _77.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenTry;
                    fromJSON(object: any): _77.MsgConnectionOpenTry;
                    toJSON(message: _77.MsgConnectionOpenTry): {
                        clientId: string;
                        previousConnectionId: string;
                        clientState?: {
                            $typeUrl?: string;
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
                    fromPartial(object: Partial<_77.MsgConnectionOpenTry>): _77.MsgConnectionOpenTry;
                    fromAmino(object: _77.MsgConnectionOpenTryAmino): _77.MsgConnectionOpenTry;
                    toAmino(message: _77.MsgConnectionOpenTry): _77.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenTryAminoMsg): _77.MsgConnectionOpenTry;
                    toAminoMsg(message: _77.MsgConnectionOpenTry): _77.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenTryProtoMsg): _77.MsgConnectionOpenTry;
                    toProto(message: _77.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenTry): _77.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenTryResponse;
                    isSDK(o: any): o is _77.MsgConnectionOpenTryResponseSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenTryResponseAmino;
                    encode(_: _77.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _77.MsgConnectionOpenTryResponse;
                    toJSON(_: _77.MsgConnectionOpenTryResponse): {};
                    fromPartial(_: Partial<_77.MsgConnectionOpenTryResponse>): _77.MsgConnectionOpenTryResponse;
                    fromAmino(_: _77.MsgConnectionOpenTryResponseAmino): _77.MsgConnectionOpenTryResponse;
                    toAmino(_: _77.MsgConnectionOpenTryResponse): _77.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenTryResponseAminoMsg): _77.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenTryResponse): _77.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenTryResponseProtoMsg): _77.MsgConnectionOpenTryResponse;
                    toProto(message: _77.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenTryResponse): _77.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenAck;
                    isSDK(o: any): o is _77.MsgConnectionOpenAckSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenAckAmino;
                    encode(message: _77.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenAck;
                    fromJSON(object: any): _77.MsgConnectionOpenAck;
                    toJSON(message: _77.MsgConnectionOpenAck): {
                        connectionId: string;
                        counterpartyConnectionId: string;
                        version?: {
                            identifier: string;
                            features: string[];
                        };
                        clientState?: {
                            $typeUrl?: string;
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
                    fromPartial(object: Partial<_77.MsgConnectionOpenAck>): _77.MsgConnectionOpenAck;
                    fromAmino(object: _77.MsgConnectionOpenAckAmino): _77.MsgConnectionOpenAck;
                    toAmino(message: _77.MsgConnectionOpenAck): _77.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenAckAminoMsg): _77.MsgConnectionOpenAck;
                    toAminoMsg(message: _77.MsgConnectionOpenAck): _77.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenAckProtoMsg): _77.MsgConnectionOpenAck;
                    toProto(message: _77.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenAck): _77.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenAckResponse;
                    isSDK(o: any): o is _77.MsgConnectionOpenAckResponseSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenAckResponseAmino;
                    encode(_: _77.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _77.MsgConnectionOpenAckResponse;
                    toJSON(_: _77.MsgConnectionOpenAckResponse): {};
                    fromPartial(_: Partial<_77.MsgConnectionOpenAckResponse>): _77.MsgConnectionOpenAckResponse;
                    fromAmino(_: _77.MsgConnectionOpenAckResponseAmino): _77.MsgConnectionOpenAckResponse;
                    toAmino(_: _77.MsgConnectionOpenAckResponse): _77.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenAckResponseAminoMsg): _77.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenAckResponse): _77.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenAckResponseProtoMsg): _77.MsgConnectionOpenAckResponse;
                    toProto(message: _77.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenAckResponse): _77.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenConfirm;
                    isSDK(o: any): o is _77.MsgConnectionOpenConfirmSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenConfirmAmino;
                    encode(message: _77.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _77.MsgConnectionOpenConfirm;
                    toJSON(message: _77.MsgConnectionOpenConfirm): {
                        connectionId: string;
                        proofAck: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        signer: string;
                    };
                    fromPartial(object: Partial<_77.MsgConnectionOpenConfirm>): _77.MsgConnectionOpenConfirm;
                    fromAmino(object: _77.MsgConnectionOpenConfirmAmino): _77.MsgConnectionOpenConfirm;
                    toAmino(message: _77.MsgConnectionOpenConfirm): _77.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenConfirmAminoMsg): _77.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _77.MsgConnectionOpenConfirm): _77.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenConfirmProtoMsg): _77.MsgConnectionOpenConfirm;
                    toProto(message: _77.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenConfirm): _77.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _77.MsgConnectionOpenConfirmResponse;
                    isSDK(o: any): o is _77.MsgConnectionOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _77.MsgConnectionOpenConfirmResponseAmino;
                    encode(_: _77.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _77.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _77.MsgConnectionOpenConfirmResponse): {};
                    fromPartial(_: Partial<_77.MsgConnectionOpenConfirmResponse>): _77.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _77.MsgConnectionOpenConfirmResponseAmino): _77.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _77.MsgConnectionOpenConfirmResponse): _77.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _77.MsgConnectionOpenConfirmResponseAminoMsg): _77.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _77.MsgConnectionOpenConfirmResponse): _77.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgConnectionOpenConfirmResponseProtoMsg): _77.MsgConnectionOpenConfirmResponse;
                    toProto(message: _77.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgConnectionOpenConfirmResponse): _77.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionRequest;
                    isSDK(o: any): o is _76.QueryConnectionRequestSDKType;
                    isAmino(o: any): o is _76.QueryConnectionRequestAmino;
                    encode(message: _76.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionRequest;
                    fromJSON(object: any): _76.QueryConnectionRequest;
                    toJSON(message: _76.QueryConnectionRequest): {
                        connectionId: string;
                    };
                    fromPartial(object: Partial<_76.QueryConnectionRequest>): _76.QueryConnectionRequest;
                    fromAmino(object: _76.QueryConnectionRequestAmino): _76.QueryConnectionRequest;
                    toAmino(message: _76.QueryConnectionRequest): _76.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionRequestAminoMsg): _76.QueryConnectionRequest;
                    toAminoMsg(message: _76.QueryConnectionRequest): _76.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionRequestProtoMsg): _76.QueryConnectionRequest;
                    toProto(message: _76.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionRequest): _76.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionResponse;
                    isSDK(o: any): o is _76.QueryConnectionResponseSDKType;
                    isAmino(o: any): o is _76.QueryConnectionResponseAmino;
                    encode(message: _76.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionResponse;
                    fromJSON(object: any): _76.QueryConnectionResponse;
                    toJSON(message: _76.QueryConnectionResponse): {
                        connection?: {
                            clientId: string;
                            versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            state: _74.State;
                            counterparty: {
                                clientId: string;
                                connectionId: string;
                                prefix: {
                                    keyPrefix: string;
                                };
                            };
                            delayPeriod: string;
                        };
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_76.QueryConnectionResponse>): _76.QueryConnectionResponse;
                    fromAmino(object: _76.QueryConnectionResponseAmino): _76.QueryConnectionResponse;
                    toAmino(message: _76.QueryConnectionResponse): _76.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionResponseAminoMsg): _76.QueryConnectionResponse;
                    toAminoMsg(message: _76.QueryConnectionResponse): _76.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionResponseProtoMsg): _76.QueryConnectionResponse;
                    toProto(message: _76.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionResponse): _76.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionsRequest;
                    isSDK(o: any): o is _76.QueryConnectionsRequestSDKType;
                    isAmino(o: any): o is _76.QueryConnectionsRequestAmino;
                    encode(message: _76.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionsRequest;
                    fromJSON(object: any): _76.QueryConnectionsRequest;
                    toJSON(message: _76.QueryConnectionsRequest): {
                        pagination?: {
                            key: string;
                            offset: string;
                            limit: string;
                            countTotal: boolean;
                            reverse: boolean;
                        };
                    };
                    fromPartial(object: Partial<_76.QueryConnectionsRequest>): _76.QueryConnectionsRequest;
                    fromAmino(object: _76.QueryConnectionsRequestAmino): _76.QueryConnectionsRequest;
                    toAmino(message: _76.QueryConnectionsRequest): _76.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionsRequestAminoMsg): _76.QueryConnectionsRequest;
                    toAminoMsg(message: _76.QueryConnectionsRequest): _76.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionsRequestProtoMsg): _76.QueryConnectionsRequest;
                    toProto(message: _76.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionsRequest): _76.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionsResponse;
                    isSDK(o: any): o is _76.QueryConnectionsResponseSDKType;
                    isAmino(o: any): o is _76.QueryConnectionsResponseAmino;
                    encode(message: _76.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionsResponse;
                    fromJSON(object: any): _76.QueryConnectionsResponse;
                    toJSON(message: _76.QueryConnectionsResponse): {
                        connections: {
                            id: string;
                            clientId: string;
                            versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            state: _74.State;
                            counterparty: {
                                clientId: string;
                                connectionId: string;
                                prefix: {
                                    keyPrefix: string;
                                };
                            };
                            delayPeriod: string;
                        }[];
                        pagination?: {
                            nextKey: string;
                            total: string;
                        };
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_76.QueryConnectionsResponse>): _76.QueryConnectionsResponse;
                    fromAmino(object: _76.QueryConnectionsResponseAmino): _76.QueryConnectionsResponse;
                    toAmino(message: _76.QueryConnectionsResponse): _76.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionsResponseAminoMsg): _76.QueryConnectionsResponse;
                    toAminoMsg(message: _76.QueryConnectionsResponse): _76.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionsResponseProtoMsg): _76.QueryConnectionsResponse;
                    toProto(message: _76.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionsResponse): _76.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryClientConnectionsRequest;
                    isSDK(o: any): o is _76.QueryClientConnectionsRequestSDKType;
                    isAmino(o: any): o is _76.QueryClientConnectionsRequestAmino;
                    encode(message: _76.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClientConnectionsRequest;
                    fromJSON(object: any): _76.QueryClientConnectionsRequest;
                    toJSON(message: _76.QueryClientConnectionsRequest): {
                        clientId: string;
                    };
                    fromPartial(object: Partial<_76.QueryClientConnectionsRequest>): _76.QueryClientConnectionsRequest;
                    fromAmino(object: _76.QueryClientConnectionsRequestAmino): _76.QueryClientConnectionsRequest;
                    toAmino(message: _76.QueryClientConnectionsRequest): _76.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _76.QueryClientConnectionsRequestAminoMsg): _76.QueryClientConnectionsRequest;
                    toAminoMsg(message: _76.QueryClientConnectionsRequest): _76.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryClientConnectionsRequestProtoMsg): _76.QueryClientConnectionsRequest;
                    toProto(message: _76.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryClientConnectionsRequest): _76.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryClientConnectionsResponse;
                    isSDK(o: any): o is _76.QueryClientConnectionsResponseSDKType;
                    isAmino(o: any): o is _76.QueryClientConnectionsResponseAmino;
                    encode(message: _76.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryClientConnectionsResponse;
                    fromJSON(object: any): _76.QueryClientConnectionsResponse;
                    toJSON(message: _76.QueryClientConnectionsResponse): {
                        connectionPaths: string[];
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_76.QueryClientConnectionsResponse>): _76.QueryClientConnectionsResponse;
                    fromAmino(object: _76.QueryClientConnectionsResponseAmino): _76.QueryClientConnectionsResponse;
                    toAmino(message: _76.QueryClientConnectionsResponse): _76.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _76.QueryClientConnectionsResponseAminoMsg): _76.QueryClientConnectionsResponse;
                    toAminoMsg(message: _76.QueryClientConnectionsResponse): _76.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryClientConnectionsResponseProtoMsg): _76.QueryClientConnectionsResponse;
                    toProto(message: _76.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryClientConnectionsResponse): _76.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionClientStateRequest;
                    isSDK(o: any): o is _76.QueryConnectionClientStateRequestSDKType;
                    isAmino(o: any): o is _76.QueryConnectionClientStateRequestAmino;
                    encode(message: _76.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _76.QueryConnectionClientStateRequest;
                    toJSON(message: _76.QueryConnectionClientStateRequest): {
                        connectionId: string;
                    };
                    fromPartial(object: Partial<_76.QueryConnectionClientStateRequest>): _76.QueryConnectionClientStateRequest;
                    fromAmino(object: _76.QueryConnectionClientStateRequestAmino): _76.QueryConnectionClientStateRequest;
                    toAmino(message: _76.QueryConnectionClientStateRequest): _76.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionClientStateRequestAminoMsg): _76.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _76.QueryConnectionClientStateRequest): _76.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionClientStateRequestProtoMsg): _76.QueryConnectionClientStateRequest;
                    toProto(message: _76.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionClientStateRequest): _76.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionClientStateResponse;
                    isSDK(o: any): o is _76.QueryConnectionClientStateResponseSDKType;
                    isAmino(o: any): o is _76.QueryConnectionClientStateResponseAmino;
                    encode(message: _76.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _76.QueryConnectionClientStateResponse;
                    toJSON(message: _76.QueryConnectionClientStateResponse): {
                        identifiedClientState?: {
                            clientId: string;
                            clientState?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                        };
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_76.QueryConnectionClientStateResponse>): _76.QueryConnectionClientStateResponse;
                    fromAmino(object: _76.QueryConnectionClientStateResponseAmino): _76.QueryConnectionClientStateResponse;
                    toAmino(message: _76.QueryConnectionClientStateResponse): _76.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionClientStateResponseAminoMsg): _76.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _76.QueryConnectionClientStateResponse): _76.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionClientStateResponseProtoMsg): _76.QueryConnectionClientStateResponse;
                    toProto(message: _76.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionClientStateResponse): _76.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionConsensusStateRequest;
                    isSDK(o: any): o is _76.QueryConnectionConsensusStateRequestSDKType;
                    isAmino(o: any): o is _76.QueryConnectionConsensusStateRequestAmino;
                    encode(message: _76.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _76.QueryConnectionConsensusStateRequest;
                    toJSON(message: _76.QueryConnectionConsensusStateRequest): {
                        connectionId: string;
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    fromPartial(object: Partial<_76.QueryConnectionConsensusStateRequest>): _76.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _76.QueryConnectionConsensusStateRequestAmino): _76.QueryConnectionConsensusStateRequest;
                    toAmino(message: _76.QueryConnectionConsensusStateRequest): _76.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionConsensusStateRequestAminoMsg): _76.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _76.QueryConnectionConsensusStateRequest): _76.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionConsensusStateRequestProtoMsg): _76.QueryConnectionConsensusStateRequest;
                    toProto(message: _76.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionConsensusStateRequest): _76.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _76.QueryConnectionConsensusStateResponse;
                    isSDK(o: any): o is _76.QueryConnectionConsensusStateResponseSDKType;
                    isAmino(o: any): o is _76.QueryConnectionConsensusStateResponseAmino;
                    encode(message: _76.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _76.QueryConnectionConsensusStateResponse;
                    toJSON(message: _76.QueryConnectionConsensusStateResponse): {
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        clientId: string;
                        proof: string;
                        proofHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_76.QueryConnectionConsensusStateResponse>): _76.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _76.QueryConnectionConsensusStateResponseAmino): _76.QueryConnectionConsensusStateResponse;
                    toAmino(message: _76.QueryConnectionConsensusStateResponse): _76.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionConsensusStateResponseAminoMsg): _76.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _76.QueryConnectionConsensusStateResponse): _76.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionConsensusStateResponseProtoMsg): _76.QueryConnectionConsensusStateResponse;
                    toProto(message: _76.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionConsensusStateResponse): _76.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _75.GenesisState;
                    isSDK(o: any): o is _75.GenesisStateSDKType;
                    isAmino(o: any): o is _75.GenesisStateAmino;
                    encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.GenesisState;
                    fromJSON(object: any): _75.GenesisState;
                    toJSON(message: _75.GenesisState): {
                        connections: {
                            id: string;
                            clientId: string;
                            versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            state: _74.State;
                            counterparty: {
                                clientId: string;
                                connectionId: string;
                                prefix: {
                                    keyPrefix: string;
                                };
                            };
                            delayPeriod: string;
                        }[];
                        clientConnectionPaths: {
                            clientId: string;
                            paths: string[];
                        }[];
                        nextConnectionSequence: string;
                        params: {
                            maxExpectedTimePerBlock: string;
                        };
                    };
                    fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                    fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                    toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                    fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                    toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                    fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                    toProto(message: _75.GenesisState): Uint8Array;
                    toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _74.State;
                stateToJSON(object: _74.State): string;
                State: typeof _74.State;
                StateSDKType: typeof _74.State;
                StateAmino: typeof _74.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ConnectionEnd;
                    isSDK(o: any): o is _74.ConnectionEndSDKType;
                    isAmino(o: any): o is _74.ConnectionEndAmino;
                    encode(message: _74.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ConnectionEnd;
                    fromJSON(object: any): _74.ConnectionEnd;
                    toJSON(message: _74.ConnectionEnd): {
                        clientId: string;
                        versions: {
                            identifier: string;
                            features: string[];
                        }[];
                        state: _74.State;
                        counterparty: {
                            clientId: string;
                            connectionId: string;
                            prefix: {
                                keyPrefix: string;
                            };
                        };
                        delayPeriod: string;
                    };
                    fromPartial(object: Partial<_74.ConnectionEnd>): _74.ConnectionEnd;
                    fromAmino(object: _74.ConnectionEndAmino): _74.ConnectionEnd;
                    toAmino(message: _74.ConnectionEnd): _74.ConnectionEndAmino;
                    fromAminoMsg(object: _74.ConnectionEndAminoMsg): _74.ConnectionEnd;
                    toAminoMsg(message: _74.ConnectionEnd): _74.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _74.ConnectionEndProtoMsg): _74.ConnectionEnd;
                    toProto(message: _74.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _74.ConnectionEnd): _74.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.IdentifiedConnection;
                    isSDK(o: any): o is _74.IdentifiedConnectionSDKType;
                    isAmino(o: any): o is _74.IdentifiedConnectionAmino;
                    encode(message: _74.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.IdentifiedConnection;
                    fromJSON(object: any): _74.IdentifiedConnection;
                    toJSON(message: _74.IdentifiedConnection): {
                        id: string;
                        clientId: string;
                        versions: {
                            identifier: string;
                            features: string[];
                        }[];
                        state: _74.State;
                        counterparty: {
                            clientId: string;
                            connectionId: string;
                            prefix: {
                                keyPrefix: string;
                            };
                        };
                        delayPeriod: string;
                    };
                    fromPartial(object: Partial<_74.IdentifiedConnection>): _74.IdentifiedConnection;
                    fromAmino(object: _74.IdentifiedConnectionAmino): _74.IdentifiedConnection;
                    toAmino(message: _74.IdentifiedConnection): _74.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _74.IdentifiedConnectionAminoMsg): _74.IdentifiedConnection;
                    toAminoMsg(message: _74.IdentifiedConnection): _74.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _74.IdentifiedConnectionProtoMsg): _74.IdentifiedConnection;
                    toProto(message: _74.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _74.IdentifiedConnection): _74.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.Counterparty;
                    isSDK(o: any): o is _74.CounterpartySDKType;
                    isAmino(o: any): o is _74.CounterpartyAmino;
                    encode(message: _74.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Counterparty;
                    fromJSON(object: any): _74.Counterparty;
                    toJSON(message: _74.Counterparty): {
                        clientId: string;
                        connectionId: string;
                        prefix: {
                            keyPrefix: string;
                        };
                    };
                    fromPartial(object: Partial<_74.Counterparty>): _74.Counterparty;
                    fromAmino(object: _74.CounterpartyAmino): _74.Counterparty;
                    toAmino(message: _74.Counterparty): _74.CounterpartyAmino;
                    fromAminoMsg(object: _74.CounterpartyAminoMsg): _74.Counterparty;
                    toAminoMsg(message: _74.Counterparty): _74.CounterpartyAminoMsg;
                    fromProtoMsg(message: _74.CounterpartyProtoMsg): _74.Counterparty;
                    toProto(message: _74.Counterparty): Uint8Array;
                    toProtoMsg(message: _74.Counterparty): _74.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ClientPaths;
                    isSDK(o: any): o is _74.ClientPathsSDKType;
                    isAmino(o: any): o is _74.ClientPathsAmino;
                    encode(message: _74.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ClientPaths;
                    fromJSON(object: any): _74.ClientPaths;
                    toJSON(message: _74.ClientPaths): {
                        paths: string[];
                    };
                    fromPartial(object: Partial<_74.ClientPaths>): _74.ClientPaths;
                    fromAmino(object: _74.ClientPathsAmino): _74.ClientPaths;
                    toAmino(message: _74.ClientPaths): _74.ClientPathsAmino;
                    fromAminoMsg(object: _74.ClientPathsAminoMsg): _74.ClientPaths;
                    toAminoMsg(message: _74.ClientPaths): _74.ClientPathsAminoMsg;
                    fromProtoMsg(message: _74.ClientPathsProtoMsg): _74.ClientPaths;
                    toProto(message: _74.ClientPaths): Uint8Array;
                    toProtoMsg(message: _74.ClientPaths): _74.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.ConnectionPaths;
                    isSDK(o: any): o is _74.ConnectionPathsSDKType;
                    isAmino(o: any): o is _74.ConnectionPathsAmino;
                    encode(message: _74.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ConnectionPaths;
                    fromJSON(object: any): _74.ConnectionPaths;
                    toJSON(message: _74.ConnectionPaths): {
                        clientId: string;
                        paths: string[];
                    };
                    fromPartial(object: Partial<_74.ConnectionPaths>): _74.ConnectionPaths;
                    fromAmino(object: _74.ConnectionPathsAmino): _74.ConnectionPaths;
                    toAmino(message: _74.ConnectionPaths): _74.ConnectionPathsAmino;
                    fromAminoMsg(object: _74.ConnectionPathsAminoMsg): _74.ConnectionPaths;
                    toAminoMsg(message: _74.ConnectionPaths): _74.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _74.ConnectionPathsProtoMsg): _74.ConnectionPaths;
                    toProto(message: _74.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _74.ConnectionPaths): _74.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.Version;
                    isSDK(o: any): o is _74.VersionSDKType;
                    isAmino(o: any): o is _74.VersionAmino;
                    encode(message: _74.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Version;
                    fromJSON(object: any): _74.Version;
                    toJSON(message: _74.Version): {
                        identifier: string;
                        features: string[];
                    };
                    fromPartial(object: Partial<_74.Version>): _74.Version;
                    fromAmino(object: _74.VersionAmino): _74.Version;
                    toAmino(message: _74.Version): _74.VersionAmino;
                    fromAminoMsg(object: _74.VersionAminoMsg): _74.Version;
                    toAminoMsg(message: _74.Version): _74.VersionAminoMsg;
                    fromProtoMsg(message: _74.VersionProtoMsg): _74.Version;
                    toProto(message: _74.Version): Uint8Array;
                    toProtoMsg(message: _74.Version): _74.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _74.Params;
                    isSDK(o: any): o is _74.ParamsSDKType;
                    isAmino(o: any): o is _74.ParamsAmino;
                    encode(message: _74.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Params;
                    fromJSON(object: any): _74.Params;
                    toJSON(message: _74.Params): {
                        maxExpectedTimePerBlock: string;
                    };
                    fromPartial(object: Partial<_74.Params>): _74.Params;
                    fromAmino(object: _74.ParamsAmino): _74.Params;
                    toAmino(message: _74.Params): _74.ParamsAmino;
                    fromAminoMsg(object: _74.ParamsAminoMsg): _74.Params;
                    toAminoMsg(message: _74.Params): _74.ParamsAminoMsg;
                    fromProtoMsg(message: _74.ParamsProtoMsg): _74.Params;
                    toProto(message: _74.Params): Uint8Array;
                    toProtoMsg(message: _74.Params): _74.ParamsProtoMsg;
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
                    is(o: any): o is _78.ClientState;
                    isSDK(o: any): o is _78.ClientStateSDKType;
                    isAmino(o: any): o is _78.ClientStateAmino;
                    encode(message: _78.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.ClientState;
                    fromJSON(object: any): _78.ClientState;
                    toJSON(message: _78.ClientState): {
                        chainId: string;
                        height: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                    };
                    fromPartial(object: Partial<_78.ClientState>): _78.ClientState;
                    fromAmino(object: _78.ClientStateAmino): _78.ClientState;
                    toAmino(message: _78.ClientState): _78.ClientStateAmino;
                    fromAminoMsg(object: _78.ClientStateAminoMsg): _78.ClientState;
                    toAminoMsg(message: _78.ClientState): _78.ClientStateAminoMsg;
                    fromProtoMsg(message: _78.ClientStateProtoMsg): _78.ClientState;
                    toProto(message: _78.ClientState): Uint8Array;
                    toProtoMsg(message: _78.ClientState): _78.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _79.DataType;
                dataTypeToJSON(object: _79.DataType): string;
                DataType: typeof _79.DataType;
                DataTypeSDKType: typeof _79.DataType;
                DataTypeAmino: typeof _79.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ClientState;
                    isSDK(o: any): o is _79.ClientStateSDKType;
                    isAmino(o: any): o is _79.ClientStateAmino;
                    encode(message: _79.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ClientState;
                    fromJSON(object: any): _79.ClientState;
                    toJSON(message: _79.ClientState): {
                        sequence: string;
                        frozenSequence: string;
                        consensusState?: {
                            publicKey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            diversifier: string;
                            timestamp: string;
                        };
                        allowUpdateAfterProposal: boolean;
                    };
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
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ConsensusState;
                    fromJSON(object: any): _79.ConsensusState;
                    toJSON(message: _79.ConsensusState): {
                        publicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        diversifier: string;
                        timestamp: string;
                    };
                    fromPartial(object: Partial<_79.ConsensusState>): _79.ConsensusState;
                    fromAmino(object: _79.ConsensusStateAmino): _79.ConsensusState;
                    toAmino(message: _79.ConsensusState): _79.ConsensusStateAmino;
                    fromAminoMsg(object: _79.ConsensusStateAminoMsg): _79.ConsensusState;
                    toAminoMsg(message: _79.ConsensusState): _79.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _79.ConsensusStateProtoMsg): _79.ConsensusState;
                    toProto(message: _79.ConsensusState): Uint8Array;
                    toProtoMsg(message: _79.ConsensusState): _79.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.Header;
                    isSDK(o: any): o is _79.HeaderSDKType;
                    isAmino(o: any): o is _79.HeaderAmino;
                    encode(message: _79.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Header;
                    fromJSON(object: any): _79.Header;
                    toJSON(message: _79.Header): {
                        sequence: string;
                        timestamp: string;
                        signature: string;
                        newPublicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        newDiversifier: string;
                    };
                    fromPartial(object: Partial<_79.Header>): _79.Header;
                    fromAmino(object: _79.HeaderAmino): _79.Header;
                    toAmino(message: _79.Header): _79.HeaderAmino;
                    fromAminoMsg(object: _79.HeaderAminoMsg): _79.Header;
                    toAminoMsg(message: _79.Header): _79.HeaderAminoMsg;
                    fromProtoMsg(message: _79.HeaderProtoMsg): _79.Header;
                    toProto(message: _79.Header): Uint8Array;
                    toProtoMsg(message: _79.Header): _79.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.Misbehaviour;
                    isSDK(o: any): o is _79.MisbehaviourSDKType;
                    isAmino(o: any): o is _79.MisbehaviourAmino;
                    encode(message: _79.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Misbehaviour;
                    fromJSON(object: any): _79.Misbehaviour;
                    toJSON(message: _79.Misbehaviour): {
                        clientId: string;
                        sequence: string;
                        signatureOne?: {
                            signature: string;
                            dataType: _79.DataType;
                            data: string;
                            timestamp: string;
                        };
                        signatureTwo?: {
                            signature: string;
                            dataType: _79.DataType;
                            data: string;
                            timestamp: string;
                        };
                    };
                    fromPartial(object: Partial<_79.Misbehaviour>): _79.Misbehaviour;
                    fromAmino(object: _79.MisbehaviourAmino): _79.Misbehaviour;
                    toAmino(message: _79.Misbehaviour): _79.MisbehaviourAmino;
                    fromAminoMsg(object: _79.MisbehaviourAminoMsg): _79.Misbehaviour;
                    toAminoMsg(message: _79.Misbehaviour): _79.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _79.MisbehaviourProtoMsg): _79.Misbehaviour;
                    toProto(message: _79.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _79.Misbehaviour): _79.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.SignatureAndData;
                    isSDK(o: any): o is _79.SignatureAndDataSDKType;
                    isAmino(o: any): o is _79.SignatureAndDataAmino;
                    encode(message: _79.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.SignatureAndData;
                    fromJSON(object: any): _79.SignatureAndData;
                    toJSON(message: _79.SignatureAndData): {
                        signature: string;
                        dataType: _79.DataType;
                        data: string;
                        timestamp: string;
                    };
                    fromPartial(object: Partial<_79.SignatureAndData>): _79.SignatureAndData;
                    fromAmino(object: _79.SignatureAndDataAmino): _79.SignatureAndData;
                    toAmino(message: _79.SignatureAndData): _79.SignatureAndDataAmino;
                    fromAminoMsg(object: _79.SignatureAndDataAminoMsg): _79.SignatureAndData;
                    toAminoMsg(message: _79.SignatureAndData): _79.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _79.SignatureAndDataProtoMsg): _79.SignatureAndData;
                    toProto(message: _79.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _79.SignatureAndData): _79.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.TimestampedSignatureData;
                    isSDK(o: any): o is _79.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _79.TimestampedSignatureDataAmino;
                    encode(message: _79.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.TimestampedSignatureData;
                    fromJSON(object: any): _79.TimestampedSignatureData;
                    toJSON(message: _79.TimestampedSignatureData): {
                        signatureData: string;
                        timestamp: string;
                    };
                    fromPartial(object: Partial<_79.TimestampedSignatureData>): _79.TimestampedSignatureData;
                    fromAmino(object: _79.TimestampedSignatureDataAmino): _79.TimestampedSignatureData;
                    toAmino(message: _79.TimestampedSignatureData): _79.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _79.TimestampedSignatureDataAminoMsg): _79.TimestampedSignatureData;
                    toAminoMsg(message: _79.TimestampedSignatureData): _79.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _79.TimestampedSignatureDataProtoMsg): _79.TimestampedSignatureData;
                    toProto(message: _79.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _79.TimestampedSignatureData): _79.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.SignBytes;
                    isSDK(o: any): o is _79.SignBytesSDKType;
                    isAmino(o: any): o is _79.SignBytesAmino;
                    encode(message: _79.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.SignBytes;
                    fromJSON(object: any): _79.SignBytes;
                    toJSON(message: _79.SignBytes): {
                        sequence: string;
                        timestamp: string;
                        diversifier: string;
                        dataType: _79.DataType;
                        data: string;
                    };
                    fromPartial(object: Partial<_79.SignBytes>): _79.SignBytes;
                    fromAmino(object: _79.SignBytesAmino): _79.SignBytes;
                    toAmino(message: _79.SignBytes): _79.SignBytesAmino;
                    fromAminoMsg(object: _79.SignBytesAminoMsg): _79.SignBytes;
                    toAminoMsg(message: _79.SignBytes): _79.SignBytesAminoMsg;
                    fromProtoMsg(message: _79.SignBytesProtoMsg): _79.SignBytes;
                    toProto(message: _79.SignBytes): Uint8Array;
                    toProtoMsg(message: _79.SignBytes): _79.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.HeaderData;
                    isSDK(o: any): o is _79.HeaderDataSDKType;
                    isAmino(o: any): o is _79.HeaderDataAmino;
                    encode(message: _79.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.HeaderData;
                    fromJSON(object: any): _79.HeaderData;
                    toJSON(message: _79.HeaderData): {
                        newPubKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        newDiversifier: string;
                    };
                    fromPartial(object: Partial<_79.HeaderData>): _79.HeaderData;
                    fromAmino(object: _79.HeaderDataAmino): _79.HeaderData;
                    toAmino(message: _79.HeaderData): _79.HeaderDataAmino;
                    fromAminoMsg(object: _79.HeaderDataAminoMsg): _79.HeaderData;
                    toAminoMsg(message: _79.HeaderData): _79.HeaderDataAminoMsg;
                    fromProtoMsg(message: _79.HeaderDataProtoMsg): _79.HeaderData;
                    toProto(message: _79.HeaderData): Uint8Array;
                    toProtoMsg(message: _79.HeaderData): _79.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ClientStateData;
                    isSDK(o: any): o is _79.ClientStateDataSDKType;
                    isAmino(o: any): o is _79.ClientStateDataAmino;
                    encode(message: _79.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ClientStateData;
                    fromJSON(object: any): _79.ClientStateData;
                    toJSON(message: _79.ClientStateData): {
                        path: string;
                        clientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_79.ClientStateData>): _79.ClientStateData;
                    fromAmino(object: _79.ClientStateDataAmino): _79.ClientStateData;
                    toAmino(message: _79.ClientStateData): _79.ClientStateDataAmino;
                    fromAminoMsg(object: _79.ClientStateDataAminoMsg): _79.ClientStateData;
                    toAminoMsg(message: _79.ClientStateData): _79.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _79.ClientStateDataProtoMsg): _79.ClientStateData;
                    toProto(message: _79.ClientStateData): Uint8Array;
                    toProtoMsg(message: _79.ClientStateData): _79.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ConsensusStateData;
                    isSDK(o: any): o is _79.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _79.ConsensusStateDataAmino;
                    encode(message: _79.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ConsensusStateData;
                    fromJSON(object: any): _79.ConsensusStateData;
                    toJSON(message: _79.ConsensusStateData): {
                        path: string;
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_79.ConsensusStateData>): _79.ConsensusStateData;
                    fromAmino(object: _79.ConsensusStateDataAmino): _79.ConsensusStateData;
                    toAmino(message: _79.ConsensusStateData): _79.ConsensusStateDataAmino;
                    fromAminoMsg(object: _79.ConsensusStateDataAminoMsg): _79.ConsensusStateData;
                    toAminoMsg(message: _79.ConsensusStateData): _79.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _79.ConsensusStateDataProtoMsg): _79.ConsensusStateData;
                    toProto(message: _79.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _79.ConsensusStateData): _79.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ConnectionStateData;
                    isSDK(o: any): o is _79.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _79.ConnectionStateDataAmino;
                    encode(message: _79.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ConnectionStateData;
                    fromJSON(object: any): _79.ConnectionStateData;
                    toJSON(message: _79.ConnectionStateData): {
                        path: string;
                        connection?: {
                            clientId: string;
                            versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            state: _74.State;
                            counterparty: {
                                clientId: string;
                                connectionId: string;
                                prefix: {
                                    keyPrefix: string;
                                };
                            };
                            delayPeriod: string;
                        };
                    };
                    fromPartial(object: Partial<_79.ConnectionStateData>): _79.ConnectionStateData;
                    fromAmino(object: _79.ConnectionStateDataAmino): _79.ConnectionStateData;
                    toAmino(message: _79.ConnectionStateData): _79.ConnectionStateDataAmino;
                    fromAminoMsg(object: _79.ConnectionStateDataAminoMsg): _79.ConnectionStateData;
                    toAminoMsg(message: _79.ConnectionStateData): _79.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _79.ConnectionStateDataProtoMsg): _79.ConnectionStateData;
                    toProto(message: _79.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _79.ConnectionStateData): _79.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.ChannelStateData;
                    isSDK(o: any): o is _79.ChannelStateDataSDKType;
                    isAmino(o: any): o is _79.ChannelStateDataAmino;
                    encode(message: _79.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.ChannelStateData;
                    fromJSON(object: any): _79.ChannelStateData;
                    toJSON(message: _79.ChannelStateData): {
                        path: string;
                        channel?: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                        };
                    };
                    fromPartial(object: Partial<_79.ChannelStateData>): _79.ChannelStateData;
                    fromAmino(object: _79.ChannelStateDataAmino): _79.ChannelStateData;
                    toAmino(message: _79.ChannelStateData): _79.ChannelStateDataAmino;
                    fromAminoMsg(object: _79.ChannelStateDataAminoMsg): _79.ChannelStateData;
                    toAminoMsg(message: _79.ChannelStateData): _79.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _79.ChannelStateDataProtoMsg): _79.ChannelStateData;
                    toProto(message: _79.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _79.ChannelStateData): _79.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.PacketCommitmentData;
                    isSDK(o: any): o is _79.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _79.PacketCommitmentDataAmino;
                    encode(message: _79.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.PacketCommitmentData;
                    fromJSON(object: any): _79.PacketCommitmentData;
                    toJSON(message: _79.PacketCommitmentData): {
                        path: string;
                        commitment: string;
                    };
                    fromPartial(object: Partial<_79.PacketCommitmentData>): _79.PacketCommitmentData;
                    fromAmino(object: _79.PacketCommitmentDataAmino): _79.PacketCommitmentData;
                    toAmino(message: _79.PacketCommitmentData): _79.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _79.PacketCommitmentDataAminoMsg): _79.PacketCommitmentData;
                    toAminoMsg(message: _79.PacketCommitmentData): _79.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _79.PacketCommitmentDataProtoMsg): _79.PacketCommitmentData;
                    toProto(message: _79.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _79.PacketCommitmentData): _79.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.PacketAcknowledgementData;
                    isSDK(o: any): o is _79.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _79.PacketAcknowledgementDataAmino;
                    encode(message: _79.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.PacketAcknowledgementData;
                    fromJSON(object: any): _79.PacketAcknowledgementData;
                    toJSON(message: _79.PacketAcknowledgementData): {
                        path: string;
                        acknowledgement: string;
                    };
                    fromPartial(object: Partial<_79.PacketAcknowledgementData>): _79.PacketAcknowledgementData;
                    fromAmino(object: _79.PacketAcknowledgementDataAmino): _79.PacketAcknowledgementData;
                    toAmino(message: _79.PacketAcknowledgementData): _79.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _79.PacketAcknowledgementDataAminoMsg): _79.PacketAcknowledgementData;
                    toAminoMsg(message: _79.PacketAcknowledgementData): _79.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _79.PacketAcknowledgementDataProtoMsg): _79.PacketAcknowledgementData;
                    toProto(message: _79.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _79.PacketAcknowledgementData): _79.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _79.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _79.PacketReceiptAbsenceDataAmino;
                    encode(message: _79.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.PacketReceiptAbsenceData;
                    fromJSON(object: any): _79.PacketReceiptAbsenceData;
                    toJSON(message: _79.PacketReceiptAbsenceData): {
                        path: string;
                    };
                    fromPartial(object: Partial<_79.PacketReceiptAbsenceData>): _79.PacketReceiptAbsenceData;
                    fromAmino(object: _79.PacketReceiptAbsenceDataAmino): _79.PacketReceiptAbsenceData;
                    toAmino(message: _79.PacketReceiptAbsenceData): _79.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _79.PacketReceiptAbsenceDataAminoMsg): _79.PacketReceiptAbsenceData;
                    toAminoMsg(message: _79.PacketReceiptAbsenceData): _79.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _79.PacketReceiptAbsenceDataProtoMsg): _79.PacketReceiptAbsenceData;
                    toProto(message: _79.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _79.PacketReceiptAbsenceData): _79.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _79.NextSequenceRecvData;
                    isSDK(o: any): o is _79.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _79.NextSequenceRecvDataAmino;
                    encode(message: _79.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.NextSequenceRecvData;
                    fromJSON(object: any): _79.NextSequenceRecvData;
                    toJSON(message: _79.NextSequenceRecvData): {
                        path: string;
                        nextSeqRecv: string;
                    };
                    fromPartial(object: Partial<_79.NextSequenceRecvData>): _79.NextSequenceRecvData;
                    fromAmino(object: _79.NextSequenceRecvDataAmino): _79.NextSequenceRecvData;
                    toAmino(message: _79.NextSequenceRecvData): _79.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _79.NextSequenceRecvDataAminoMsg): _79.NextSequenceRecvData;
                    toAminoMsg(message: _79.NextSequenceRecvData): _79.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _79.NextSequenceRecvDataProtoMsg): _79.NextSequenceRecvData;
                    toProto(message: _79.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _79.NextSequenceRecvData): _79.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _80.DataType;
                dataTypeToJSON(object: _80.DataType): string;
                DataType: typeof _80.DataType;
                DataTypeSDKType: typeof _80.DataType;
                DataTypeAmino: typeof _80.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.ClientState;
                    isSDK(o: any): o is _80.ClientStateSDKType;
                    isAmino(o: any): o is _80.ClientStateAmino;
                    encode(message: _80.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ClientState;
                    fromJSON(object: any): _80.ClientState;
                    toJSON(message: _80.ClientState): {
                        sequence: string;
                        isFrozen: boolean;
                        consensusState?: {
                            publicKey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            diversifier: string;
                            timestamp: string;
                        };
                        allowUpdateAfterProposal: boolean;
                    };
                    fromPartial(object: Partial<_80.ClientState>): _80.ClientState;
                    fromAmino(object: _80.ClientStateAmino): _80.ClientState;
                    toAmino(message: _80.ClientState): _80.ClientStateAmino;
                    fromAminoMsg(object: _80.ClientStateAminoMsg): _80.ClientState;
                    toAminoMsg(message: _80.ClientState): _80.ClientStateAminoMsg;
                    fromProtoMsg(message: _80.ClientStateProtoMsg): _80.ClientState;
                    toProto(message: _80.ClientState): Uint8Array;
                    toProtoMsg(message: _80.ClientState): _80.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.ConsensusState;
                    isSDK(o: any): o is _80.ConsensusStateSDKType;
                    isAmino(o: any): o is _80.ConsensusStateAmino;
                    encode(message: _80.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ConsensusState;
                    fromJSON(object: any): _80.ConsensusState;
                    toJSON(message: _80.ConsensusState): {
                        publicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        diversifier: string;
                        timestamp: string;
                    };
                    fromPartial(object: Partial<_80.ConsensusState>): _80.ConsensusState;
                    fromAmino(object: _80.ConsensusStateAmino): _80.ConsensusState;
                    toAmino(message: _80.ConsensusState): _80.ConsensusStateAmino;
                    fromAminoMsg(object: _80.ConsensusStateAminoMsg): _80.ConsensusState;
                    toAminoMsg(message: _80.ConsensusState): _80.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _80.ConsensusStateProtoMsg): _80.ConsensusState;
                    toProto(message: _80.ConsensusState): Uint8Array;
                    toProtoMsg(message: _80.ConsensusState): _80.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.Header;
                    isSDK(o: any): o is _80.HeaderSDKType;
                    isAmino(o: any): o is _80.HeaderAmino;
                    encode(message: _80.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Header;
                    fromJSON(object: any): _80.Header;
                    toJSON(message: _80.Header): {
                        sequence: string;
                        timestamp: string;
                        signature: string;
                        newPublicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        newDiversifier: string;
                    };
                    fromPartial(object: Partial<_80.Header>): _80.Header;
                    fromAmino(object: _80.HeaderAmino): _80.Header;
                    toAmino(message: _80.Header): _80.HeaderAmino;
                    fromAminoMsg(object: _80.HeaderAminoMsg): _80.Header;
                    toAminoMsg(message: _80.Header): _80.HeaderAminoMsg;
                    fromProtoMsg(message: _80.HeaderProtoMsg): _80.Header;
                    toProto(message: _80.Header): Uint8Array;
                    toProtoMsg(message: _80.Header): _80.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.Misbehaviour;
                    isSDK(o: any): o is _80.MisbehaviourSDKType;
                    isAmino(o: any): o is _80.MisbehaviourAmino;
                    encode(message: _80.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Misbehaviour;
                    fromJSON(object: any): _80.Misbehaviour;
                    toJSON(message: _80.Misbehaviour): {
                        clientId: string;
                        sequence: string;
                        signatureOne?: {
                            signature: string;
                            dataType: _80.DataType;
                            data: string;
                            timestamp: string;
                        };
                        signatureTwo?: {
                            signature: string;
                            dataType: _80.DataType;
                            data: string;
                            timestamp: string;
                        };
                    };
                    fromPartial(object: Partial<_80.Misbehaviour>): _80.Misbehaviour;
                    fromAmino(object: _80.MisbehaviourAmino): _80.Misbehaviour;
                    toAmino(message: _80.Misbehaviour): _80.MisbehaviourAmino;
                    fromAminoMsg(object: _80.MisbehaviourAminoMsg): _80.Misbehaviour;
                    toAminoMsg(message: _80.Misbehaviour): _80.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _80.MisbehaviourProtoMsg): _80.Misbehaviour;
                    toProto(message: _80.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _80.Misbehaviour): _80.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.SignatureAndData;
                    isSDK(o: any): o is _80.SignatureAndDataSDKType;
                    isAmino(o: any): o is _80.SignatureAndDataAmino;
                    encode(message: _80.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.SignatureAndData;
                    fromJSON(object: any): _80.SignatureAndData;
                    toJSON(message: _80.SignatureAndData): {
                        signature: string;
                        dataType: _80.DataType;
                        data: string;
                        timestamp: string;
                    };
                    fromPartial(object: Partial<_80.SignatureAndData>): _80.SignatureAndData;
                    fromAmino(object: _80.SignatureAndDataAmino): _80.SignatureAndData;
                    toAmino(message: _80.SignatureAndData): _80.SignatureAndDataAmino;
                    fromAminoMsg(object: _80.SignatureAndDataAminoMsg): _80.SignatureAndData;
                    toAminoMsg(message: _80.SignatureAndData): _80.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _80.SignatureAndDataProtoMsg): _80.SignatureAndData;
                    toProto(message: _80.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _80.SignatureAndData): _80.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.TimestampedSignatureData;
                    isSDK(o: any): o is _80.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _80.TimestampedSignatureDataAmino;
                    encode(message: _80.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.TimestampedSignatureData;
                    fromJSON(object: any): _80.TimestampedSignatureData;
                    toJSON(message: _80.TimestampedSignatureData): {
                        signatureData: string;
                        timestamp: string;
                    };
                    fromPartial(object: Partial<_80.TimestampedSignatureData>): _80.TimestampedSignatureData;
                    fromAmino(object: _80.TimestampedSignatureDataAmino): _80.TimestampedSignatureData;
                    toAmino(message: _80.TimestampedSignatureData): _80.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _80.TimestampedSignatureDataAminoMsg): _80.TimestampedSignatureData;
                    toAminoMsg(message: _80.TimestampedSignatureData): _80.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _80.TimestampedSignatureDataProtoMsg): _80.TimestampedSignatureData;
                    toProto(message: _80.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _80.TimestampedSignatureData): _80.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.SignBytes;
                    isSDK(o: any): o is _80.SignBytesSDKType;
                    isAmino(o: any): o is _80.SignBytesAmino;
                    encode(message: _80.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.SignBytes;
                    fromJSON(object: any): _80.SignBytes;
                    toJSON(message: _80.SignBytes): {
                        sequence: string;
                        timestamp: string;
                        diversifier: string;
                        dataType: _80.DataType;
                        data: string;
                    };
                    fromPartial(object: Partial<_80.SignBytes>): _80.SignBytes;
                    fromAmino(object: _80.SignBytesAmino): _80.SignBytes;
                    toAmino(message: _80.SignBytes): _80.SignBytesAmino;
                    fromAminoMsg(object: _80.SignBytesAminoMsg): _80.SignBytes;
                    toAminoMsg(message: _80.SignBytes): _80.SignBytesAminoMsg;
                    fromProtoMsg(message: _80.SignBytesProtoMsg): _80.SignBytes;
                    toProto(message: _80.SignBytes): Uint8Array;
                    toProtoMsg(message: _80.SignBytes): _80.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.HeaderData;
                    isSDK(o: any): o is _80.HeaderDataSDKType;
                    isAmino(o: any): o is _80.HeaderDataAmino;
                    encode(message: _80.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.HeaderData;
                    fromJSON(object: any): _80.HeaderData;
                    toJSON(message: _80.HeaderData): {
                        newPubKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        newDiversifier: string;
                    };
                    fromPartial(object: Partial<_80.HeaderData>): _80.HeaderData;
                    fromAmino(object: _80.HeaderDataAmino): _80.HeaderData;
                    toAmino(message: _80.HeaderData): _80.HeaderDataAmino;
                    fromAminoMsg(object: _80.HeaderDataAminoMsg): _80.HeaderData;
                    toAminoMsg(message: _80.HeaderData): _80.HeaderDataAminoMsg;
                    fromProtoMsg(message: _80.HeaderDataProtoMsg): _80.HeaderData;
                    toProto(message: _80.HeaderData): Uint8Array;
                    toProtoMsg(message: _80.HeaderData): _80.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.ClientStateData;
                    isSDK(o: any): o is _80.ClientStateDataSDKType;
                    isAmino(o: any): o is _80.ClientStateDataAmino;
                    encode(message: _80.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ClientStateData;
                    fromJSON(object: any): _80.ClientStateData;
                    toJSON(message: _80.ClientStateData): {
                        path: string;
                        clientState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_80.ClientStateData>): _80.ClientStateData;
                    fromAmino(object: _80.ClientStateDataAmino): _80.ClientStateData;
                    toAmino(message: _80.ClientStateData): _80.ClientStateDataAmino;
                    fromAminoMsg(object: _80.ClientStateDataAminoMsg): _80.ClientStateData;
                    toAminoMsg(message: _80.ClientStateData): _80.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _80.ClientStateDataProtoMsg): _80.ClientStateData;
                    toProto(message: _80.ClientStateData): Uint8Array;
                    toProtoMsg(message: _80.ClientStateData): _80.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.ConsensusStateData;
                    isSDK(o: any): o is _80.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _80.ConsensusStateDataAmino;
                    encode(message: _80.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ConsensusStateData;
                    fromJSON(object: any): _80.ConsensusStateData;
                    toJSON(message: _80.ConsensusStateData): {
                        path: string;
                        consensusState?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                    };
                    fromPartial(object: Partial<_80.ConsensusStateData>): _80.ConsensusStateData;
                    fromAmino(object: _80.ConsensusStateDataAmino): _80.ConsensusStateData;
                    toAmino(message: _80.ConsensusStateData): _80.ConsensusStateDataAmino;
                    fromAminoMsg(object: _80.ConsensusStateDataAminoMsg): _80.ConsensusStateData;
                    toAminoMsg(message: _80.ConsensusStateData): _80.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _80.ConsensusStateDataProtoMsg): _80.ConsensusStateData;
                    toProto(message: _80.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _80.ConsensusStateData): _80.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.ConnectionStateData;
                    isSDK(o: any): o is _80.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _80.ConnectionStateDataAmino;
                    encode(message: _80.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ConnectionStateData;
                    fromJSON(object: any): _80.ConnectionStateData;
                    toJSON(message: _80.ConnectionStateData): {
                        path: string;
                        connection?: {
                            clientId: string;
                            versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            state: _74.State;
                            counterparty: {
                                clientId: string;
                                connectionId: string;
                                prefix: {
                                    keyPrefix: string;
                                };
                            };
                            delayPeriod: string;
                        };
                    };
                    fromPartial(object: Partial<_80.ConnectionStateData>): _80.ConnectionStateData;
                    fromAmino(object: _80.ConnectionStateDataAmino): _80.ConnectionStateData;
                    toAmino(message: _80.ConnectionStateData): _80.ConnectionStateDataAmino;
                    fromAminoMsg(object: _80.ConnectionStateDataAminoMsg): _80.ConnectionStateData;
                    toAminoMsg(message: _80.ConnectionStateData): _80.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _80.ConnectionStateDataProtoMsg): _80.ConnectionStateData;
                    toProto(message: _80.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _80.ConnectionStateData): _80.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.ChannelStateData;
                    isSDK(o: any): o is _80.ChannelStateDataSDKType;
                    isAmino(o: any): o is _80.ChannelStateDataAmino;
                    encode(message: _80.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.ChannelStateData;
                    fromJSON(object: any): _80.ChannelStateData;
                    toJSON(message: _80.ChannelStateData): {
                        path: string;
                        channel?: {
                            state: _65.State;
                            ordering: _65.Order;
                            counterparty: {
                                portId: string;
                                channelId: string;
                            };
                            connectionHops: string[];
                            version: string;
                        };
                    };
                    fromPartial(object: Partial<_80.ChannelStateData>): _80.ChannelStateData;
                    fromAmino(object: _80.ChannelStateDataAmino): _80.ChannelStateData;
                    toAmino(message: _80.ChannelStateData): _80.ChannelStateDataAmino;
                    fromAminoMsg(object: _80.ChannelStateDataAminoMsg): _80.ChannelStateData;
                    toAminoMsg(message: _80.ChannelStateData): _80.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _80.ChannelStateDataProtoMsg): _80.ChannelStateData;
                    toProto(message: _80.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _80.ChannelStateData): _80.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.PacketCommitmentData;
                    isSDK(o: any): o is _80.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _80.PacketCommitmentDataAmino;
                    encode(message: _80.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.PacketCommitmentData;
                    fromJSON(object: any): _80.PacketCommitmentData;
                    toJSON(message: _80.PacketCommitmentData): {
                        path: string;
                        commitment: string;
                    };
                    fromPartial(object: Partial<_80.PacketCommitmentData>): _80.PacketCommitmentData;
                    fromAmino(object: _80.PacketCommitmentDataAmino): _80.PacketCommitmentData;
                    toAmino(message: _80.PacketCommitmentData): _80.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _80.PacketCommitmentDataAminoMsg): _80.PacketCommitmentData;
                    toAminoMsg(message: _80.PacketCommitmentData): _80.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _80.PacketCommitmentDataProtoMsg): _80.PacketCommitmentData;
                    toProto(message: _80.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _80.PacketCommitmentData): _80.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.PacketAcknowledgementData;
                    isSDK(o: any): o is _80.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _80.PacketAcknowledgementDataAmino;
                    encode(message: _80.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.PacketAcknowledgementData;
                    fromJSON(object: any): _80.PacketAcknowledgementData;
                    toJSON(message: _80.PacketAcknowledgementData): {
                        path: string;
                        acknowledgement: string;
                    };
                    fromPartial(object: Partial<_80.PacketAcknowledgementData>): _80.PacketAcknowledgementData;
                    fromAmino(object: _80.PacketAcknowledgementDataAmino): _80.PacketAcknowledgementData;
                    toAmino(message: _80.PacketAcknowledgementData): _80.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _80.PacketAcknowledgementDataAminoMsg): _80.PacketAcknowledgementData;
                    toAminoMsg(message: _80.PacketAcknowledgementData): _80.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _80.PacketAcknowledgementDataProtoMsg): _80.PacketAcknowledgementData;
                    toProto(message: _80.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _80.PacketAcknowledgementData): _80.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _80.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _80.PacketReceiptAbsenceDataAmino;
                    encode(message: _80.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.PacketReceiptAbsenceData;
                    fromJSON(object: any): _80.PacketReceiptAbsenceData;
                    toJSON(message: _80.PacketReceiptAbsenceData): {
                        path: string;
                    };
                    fromPartial(object: Partial<_80.PacketReceiptAbsenceData>): _80.PacketReceiptAbsenceData;
                    fromAmino(object: _80.PacketReceiptAbsenceDataAmino): _80.PacketReceiptAbsenceData;
                    toAmino(message: _80.PacketReceiptAbsenceData): _80.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _80.PacketReceiptAbsenceDataAminoMsg): _80.PacketReceiptAbsenceData;
                    toAminoMsg(message: _80.PacketReceiptAbsenceData): _80.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _80.PacketReceiptAbsenceDataProtoMsg): _80.PacketReceiptAbsenceData;
                    toProto(message: _80.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _80.PacketReceiptAbsenceData): _80.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _80.NextSequenceRecvData;
                    isSDK(o: any): o is _80.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _80.NextSequenceRecvDataAmino;
                    encode(message: _80.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.NextSequenceRecvData;
                    fromJSON(object: any): _80.NextSequenceRecvData;
                    toJSON(message: _80.NextSequenceRecvData): {
                        path: string;
                        nextSeqRecv: string;
                    };
                    fromPartial(object: Partial<_80.NextSequenceRecvData>): _80.NextSequenceRecvData;
                    fromAmino(object: _80.NextSequenceRecvDataAmino): _80.NextSequenceRecvData;
                    toAmino(message: _80.NextSequenceRecvData): _80.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _80.NextSequenceRecvDataAminoMsg): _80.NextSequenceRecvData;
                    toAminoMsg(message: _80.NextSequenceRecvData): _80.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _80.NextSequenceRecvDataProtoMsg): _80.NextSequenceRecvData;
                    toProto(message: _80.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _80.NextSequenceRecvData): _80.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.ClientState;
                    isSDK(o: any): o is _81.ClientStateSDKType;
                    isAmino(o: any): o is _81.ClientStateAmino;
                    encode(message: _81.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ClientState;
                    fromJSON(object: any): _81.ClientState;
                    toJSON(message: _81.ClientState): {
                        chainId: string;
                        trustLevel: {
                            numerator: string;
                            denominator: string;
                        };
                        trustingPeriod: {
                            seconds: string;
                            nanos: number;
                        };
                        unbondingPeriod: {
                            seconds: string;
                            nanos: number;
                        };
                        maxClockDrift: {
                            seconds: string;
                            nanos: number;
                        };
                        frozenHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        latestHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        proofSpecs: {
                            leafSpec?: {
                                hash: import("../confio/proofs").HashOp;
                                prehashKey: import("../confio/proofs").HashOp;
                                prehashValue: import("../confio/proofs").HashOp;
                                length: import("../confio/proofs").LengthOp;
                                prefix: string;
                            };
                            innerSpec?: {
                                childOrder: number[];
                                childSize: number;
                                minPrefixLength: number;
                                maxPrefixLength: number;
                                emptyChild: string;
                                hash: import("../confio/proofs").HashOp;
                            };
                            maxDepth: number;
                            minDepth: number;
                        }[];
                        upgradePath: string[];
                        allowUpdateAfterExpiry: boolean;
                        allowUpdateAfterMisbehaviour: boolean;
                    };
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
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ConsensusState;
                    fromJSON(object: any): _81.ConsensusState;
                    toJSON(message: _81.ConsensusState): {
                        timestamp: string;
                        root: {
                            hash: string;
                        };
                        nextValidatorsHash: string;
                    };
                    fromPartial(object: Partial<_81.ConsensusState>): _81.ConsensusState;
                    fromAmino(object: _81.ConsensusStateAmino): _81.ConsensusState;
                    toAmino(message: _81.ConsensusState): _81.ConsensusStateAmino;
                    fromAminoMsg(object: _81.ConsensusStateAminoMsg): _81.ConsensusState;
                    toAminoMsg(message: _81.ConsensusState): _81.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _81.ConsensusStateProtoMsg): _81.ConsensusState;
                    toProto(message: _81.ConsensusState): Uint8Array;
                    toProtoMsg(message: _81.ConsensusState): _81.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.Misbehaviour;
                    isSDK(o: any): o is _81.MisbehaviourSDKType;
                    isAmino(o: any): o is _81.MisbehaviourAmino;
                    encode(message: _81.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Misbehaviour;
                    fromJSON(object: any): _81.Misbehaviour;
                    toJSON(message: _81.Misbehaviour): {
                        clientId: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version: {
                                        block: string;
                                        app: string;
                                    };
                                    chainId: string;
                                    height: string;
                                    time: string;
                                    lastBlockId: {
                                        hash: string;
                                        partSetHeader: {
                                            total: number;
                                            hash: string;
                                        };
                                    };
                                    lastCommitHash: string;
                                    dataHash: string;
                                    validatorsHash: string;
                                    nextValidatorsHash: string;
                                    consensusHash: string;
                                    appHash: string;
                                    lastResultsHash: string;
                                    evidenceHash: string;
                                    proposerAddress: string;
                                };
                                commit?: {
                                    height: string;
                                    round: number;
                                    blockId: {
                                        hash: string;
                                        partSetHeader: {
                                            total: number;
                                            hash: string;
                                        };
                                    };
                                    signatures: {
                                        blockIdFlag: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress: string;
                                        timestamp: string;
                                        signature: string;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                }[];
                                proposer?: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                };
                                totalVotingPower: string;
                            };
                            trustedHeight: {
                                revisionNumber: string;
                                revisionHeight: string;
                            };
                            trustedValidators?: {
                                validators: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                }[];
                                proposer?: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                };
                                totalVotingPower: string;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version: {
                                        block: string;
                                        app: string;
                                    };
                                    chainId: string;
                                    height: string;
                                    time: string;
                                    lastBlockId: {
                                        hash: string;
                                        partSetHeader: {
                                            total: number;
                                            hash: string;
                                        };
                                    };
                                    lastCommitHash: string;
                                    dataHash: string;
                                    validatorsHash: string;
                                    nextValidatorsHash: string;
                                    consensusHash: string;
                                    appHash: string;
                                    lastResultsHash: string;
                                    evidenceHash: string;
                                    proposerAddress: string;
                                };
                                commit?: {
                                    height: string;
                                    round: number;
                                    blockId: {
                                        hash: string;
                                        partSetHeader: {
                                            total: number;
                                            hash: string;
                                        };
                                    };
                                    signatures: {
                                        blockIdFlag: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress: string;
                                        timestamp: string;
                                        signature: string;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                }[];
                                proposer?: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                };
                                totalVotingPower: string;
                            };
                            trustedHeight: {
                                revisionNumber: string;
                                revisionHeight: string;
                            };
                            trustedValidators?: {
                                validators: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                }[];
                                proposer?: {
                                    address: string;
                                    pubKey: {
                                        ed25519?: string;
                                        secp256k1?: string;
                                    };
                                    votingPower: string;
                                    proposerPriority: string;
                                };
                                totalVotingPower: string;
                            };
                        };
                    };
                    fromPartial(object: Partial<_81.Misbehaviour>): _81.Misbehaviour;
                    fromAmino(object: _81.MisbehaviourAmino): _81.Misbehaviour;
                    toAmino(message: _81.Misbehaviour): _81.MisbehaviourAmino;
                    fromAminoMsg(object: _81.MisbehaviourAminoMsg): _81.Misbehaviour;
                    toAminoMsg(message: _81.Misbehaviour): _81.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _81.MisbehaviourProtoMsg): _81.Misbehaviour;
                    toProto(message: _81.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _81.Misbehaviour): _81.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.Header;
                    isSDK(o: any): o is _81.HeaderSDKType;
                    isAmino(o: any): o is _81.HeaderAmino;
                    encode(message: _81.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Header;
                    fromJSON(object: any): _81.Header;
                    toJSON(message: _81.Header): {
                        signedHeader?: {
                            header?: {
                                version: {
                                    block: string;
                                    app: string;
                                };
                                chainId: string;
                                height: string;
                                time: string;
                                lastBlockId: {
                                    hash: string;
                                    partSetHeader: {
                                        total: number;
                                        hash: string;
                                    };
                                };
                                lastCommitHash: string;
                                dataHash: string;
                                validatorsHash: string;
                                nextValidatorsHash: string;
                                consensusHash: string;
                                appHash: string;
                                lastResultsHash: string;
                                evidenceHash: string;
                                proposerAddress: string;
                            };
                            commit?: {
                                height: string;
                                round: number;
                                blockId: {
                                    hash: string;
                                    partSetHeader: {
                                        total: number;
                                        hash: string;
                                    };
                                };
                                signatures: {
                                    blockIdFlag: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress: string;
                                    timestamp: string;
                                    signature: string;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators: {
                                address: string;
                                pubKey: {
                                    ed25519?: string;
                                    secp256k1?: string;
                                };
                                votingPower: string;
                                proposerPriority: string;
                            }[];
                            proposer?: {
                                address: string;
                                pubKey: {
                                    ed25519?: string;
                                    secp256k1?: string;
                                };
                                votingPower: string;
                                proposerPriority: string;
                            };
                            totalVotingPower: string;
                        };
                        trustedHeight: {
                            revisionNumber: string;
                            revisionHeight: string;
                        };
                        trustedValidators?: {
                            validators: {
                                address: string;
                                pubKey: {
                                    ed25519?: string;
                                    secp256k1?: string;
                                };
                                votingPower: string;
                                proposerPriority: string;
                            }[];
                            proposer?: {
                                address: string;
                                pubKey: {
                                    ed25519?: string;
                                    secp256k1?: string;
                                };
                                votingPower: string;
                                proposerPriority: string;
                            };
                            totalVotingPower: string;
                        };
                    };
                    fromPartial(object: Partial<_81.Header>): _81.Header;
                    fromAmino(object: _81.HeaderAmino): _81.Header;
                    toAmino(message: _81.Header): _81.HeaderAmino;
                    fromAminoMsg(object: _81.HeaderAminoMsg): _81.Header;
                    toAminoMsg(message: _81.Header): _81.HeaderAminoMsg;
                    fromProtoMsg(message: _81.HeaderProtoMsg): _81.Header;
                    toProto(message: _81.Header): Uint8Array;
                    toProtoMsg(message: _81.Header): _81.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _81.Fraction;
                    isSDK(o: any): o is _81.FractionSDKType;
                    isAmino(o: any): o is _81.FractionAmino;
                    encode(message: _81.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.Fraction;
                    fromJSON(object: any): _81.Fraction;
                    toJSON(message: _81.Fraction): {
                        numerator: string;
                        denominator: string;
                    };
                    fromPartial(object: Partial<_81.Fraction>): _81.Fraction;
                    fromAmino(object: _81.FractionAmino): _81.Fraction;
                    toAmino(message: _81.Fraction): _81.FractionAmino;
                    fromAminoMsg(object: _81.FractionAminoMsg): _81.Fraction;
                    toAminoMsg(message: _81.Fraction): _81.FractionAminoMsg;
                    fromProtoMsg(message: _81.FractionProtoMsg): _81.Fraction;
                    toProto(message: _81.Fraction): Uint8Array;
                    toProtoMsg(message: _81.Fraction): _81.FractionProtoMsg;
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
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _197.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _198.MsgClientImpl;
                    };
                    client: {
                        v1: _199.MsgClientImpl;
                    };
                    connection: {
                        v1: _200.MsgClientImpl;
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
                            denomTrace(request: _61.QueryDenomTraceRequest): Promise<_61.QueryDenomTraceResponse>;
                            denomTraces(request?: _61.QueryDenomTracesRequest): Promise<_61.QueryDenomTracesResponse>;
                            params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _67.QueryChannelRequest): Promise<_67.QueryChannelResponse>;
                            channels(request?: _67.QueryChannelsRequest): Promise<_67.QueryChannelsResponse>;
                            connectionChannels(request: _67.QueryConnectionChannelsRequest): Promise<_67.QueryConnectionChannelsResponse>;
                            channelClientState(request: _67.QueryChannelClientStateRequest): Promise<_67.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _67.QueryChannelConsensusStateRequest): Promise<_67.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _67.QueryPacketCommitmentRequest): Promise<_67.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _67.QueryPacketCommitmentsRequest): Promise<_67.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _67.QueryPacketReceiptRequest): Promise<_67.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _67.QueryPacketAcknowledgementRequest): Promise<_67.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _67.QueryPacketAcknowledgementsRequest): Promise<_67.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _67.QueryUnreceivedPacketsRequest): Promise<_67.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _67.QueryUnreceivedAcksRequest): Promise<_67.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _67.QueryNextSequenceReceiveRequest): Promise<_67.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _71.QueryClientStateRequest): Promise<_71.QueryClientStateResponse>;
                            clientStates(request?: _71.QueryClientStatesRequest): Promise<_71.QueryClientStatesResponse>;
                            consensusState(request: _71.QueryConsensusStateRequest): Promise<_71.QueryConsensusStateResponse>;
                            consensusStates(request: _71.QueryConsensusStatesRequest): Promise<_71.QueryConsensusStatesResponse>;
                            clientStatus(request: _71.QueryClientStatusRequest): Promise<_71.QueryClientStatusResponse>;
                            clientParams(request?: _71.QueryClientParamsRequest): Promise<_71.QueryClientParamsResponse>;
                            upgradedClientState(request?: _71.QueryUpgradedClientStateRequest): Promise<_71.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _71.QueryUpgradedConsensusStateRequest): Promise<_71.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _76.QueryConnectionRequest): Promise<_76.QueryConnectionResponse>;
                            connections(request?: _76.QueryConnectionsRequest): Promise<_76.QueryConnectionsResponse>;
                            clientConnections(request: _76.QueryClientConnectionsRequest): Promise<_76.QueryClientConnectionsResponse>;
                            connectionClientState(request: _76.QueryConnectionClientStateRequest): Promise<_76.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _76.QueryConnectionConsensusStateRequest): Promise<_76.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
