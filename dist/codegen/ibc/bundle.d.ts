import * as _52 from "./applications/transfer/v1/genesis";
import * as _53 from "./applications/transfer/v1/query";
import * as _54 from "./applications/transfer/v1/transfer";
import * as _55 from "./applications/transfer/v1/tx";
import * as _56 from "./applications/transfer/v2/packet";
import * as _57 from "./core/channel/v1/channel";
import * as _58 from "./core/channel/v1/genesis";
import * as _59 from "./core/channel/v1/query";
import * as _60 from "./core/channel/v1/tx";
import * as _61 from "./core/client/v1/client";
import * as _62 from "./core/client/v1/genesis";
import * as _63 from "./core/client/v1/query";
import * as _64 from "./core/client/v1/tx";
import * as _65 from "./core/commitment/v1/commitment";
import * as _66 from "./core/connection/v1/connection";
import * as _67 from "./core/connection/v1/genesis";
import * as _68 from "./core/connection/v1/query";
import * as _69 from "./core/connection/v1/tx";
import * as _70 from "./lightclients/localhost/v1/localhost";
import * as _71 from "./lightclients/solomachine/v1/solomachine";
import * as _72 from "./lightclients/solomachine/v2/solomachine";
import * as _73 from "./lightclients/tendermint/v1/tendermint";
import * as _126 from "./applications/transfer/v1/query.lcd";
import * as _127 from "./core/channel/v1/query.lcd";
import * as _128 from "./core/client/v1/query.lcd";
import * as _129 from "./core/connection/v1/query.lcd";
import * as _130 from "./applications/transfer/v1/query.rpc.Query";
import * as _131 from "./core/channel/v1/query.rpc.Query";
import * as _132 from "./core/client/v1/query.rpc.Query";
import * as _133 from "./core/connection/v1/query.rpc.Query";
import * as _134 from "./applications/transfer/v1/tx.rpc.msg";
import * as _135 from "./core/channel/v1/tx.rpc.msg";
import * as _136 from "./core/client/v1/tx.rpc.msg";
import * as _137 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _134.MsgClientImpl;
                QueryClientImpl: typeof _130.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _53.QueryDenomTraceRequest): Promise<_53.QueryDenomTraceResponse>;
                    denomTraces(request?: _53.QueryDenomTracesRequest): Promise<_53.QueryDenomTracesResponse>;
                    params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                };
                LCDQueryClient: typeof _126.LCDQueryClient;
                MsgTransfer: {
                    encode(message: _55.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgTransfer;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timeoutTimestamp?: bigint;
                    }): _55.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _55.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.MsgTransferResponse;
                    fromPartial(_: {}): _55.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _54.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _54.DenomTrace;
                };
                Params: {
                    encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.Params;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _54.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _53.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _53.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _53.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDenomTraceResponse;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _53.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _53.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _53.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _53.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryDenomTracesResponse;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _53.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _53.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryParamsRequest;
                    fromPartial(_: {}): _53.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _53.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _53.QueryParamsResponse;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _53.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _52.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _52.GenesisState;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _52.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _56.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _56.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _135.MsgClientImpl;
                QueryClientImpl: typeof _131.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _59.QueryChannelRequest): Promise<_59.QueryChannelResponse>;
                    channels(request?: _59.QueryChannelsRequest): Promise<_59.QueryChannelsResponse>;
                    connectionChannels(request: _59.QueryConnectionChannelsRequest): Promise<_59.QueryConnectionChannelsResponse>;
                    channelClientState(request: _59.QueryChannelClientStateRequest): Promise<_59.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _59.QueryChannelConsensusStateRequest): Promise<_59.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _59.QueryPacketCommitmentRequest): Promise<_59.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _59.QueryPacketCommitmentsRequest): Promise<_59.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _59.QueryPacketReceiptRequest): Promise<_59.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _59.QueryPacketAcknowledgementRequest): Promise<_59.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _59.QueryPacketAcknowledgementsRequest): Promise<_59.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _59.QueryUnreceivedPacketsRequest): Promise<_59.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _59.QueryUnreceivedAcksRequest): Promise<_59.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _59.QueryNextSequenceReceiveRequest): Promise<_59.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _127.LCDQueryClient;
                MsgChannelOpenInit: {
                    encode(message: _60.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenInit;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _60.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _60.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenInitResponse;
                    fromPartial(_: {}): _60.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _60.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenTry;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _60.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _60.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenTryResponse;
                    fromPartial(_: {}): _60.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _60.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenAck;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _60.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _60.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenAckResponse;
                    fromPartial(_: {}): _60.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _60.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _60.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _60.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelOpenConfirmResponse;
                    fromPartial(_: {}): _60.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _60.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelCloseInit;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _60.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _60.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelCloseInitResponse;
                    fromPartial(_: {}): _60.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _60.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _60.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _60.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgChannelCloseConfirmResponse;
                    fromPartial(_: {}): _60.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _60.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _60.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _60.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgRecvPacketResponse;
                    fromPartial(_: {}): _60.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _60.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        nextSequenceRecv?: bigint;
                        signer?: string;
                    }): _60.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _60.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgTimeoutResponse;
                    fromPartial(_: {}): _60.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _60.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        nextSequenceRecv?: bigint;
                        signer?: string;
                    }): _60.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _60.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgTimeoutOnCloseResponse;
                    fromPartial(_: {}): _60.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _60.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _60.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _60.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.MsgAcknowledgementResponse;
                    fromPartial(_: {}): _60.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _59.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _59.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _59.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelResponse;
                    fromPartial(object: {
                        channel?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _59.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _59.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _59.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _59.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _59.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _59.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryConnectionChannelsResponse;
                    fromPartial(object: {
                        channels?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _59.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _59.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _59.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _59.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _59.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _59.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryChannelConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _59.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _59.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _59.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketCommitmentResponse;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _59.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _59.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _59.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketCommitmentsResponse;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _59.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _59.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _59.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketReceiptResponse;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _59.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _59.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _59.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketAcknowledgementResponse;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _59.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: bigint[];
                    }): _59.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _59.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _59.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: bigint[];
                    }): _59.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _59.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryUnreceivedPacketsResponse;
                    fromPartial(object: {
                        sequences?: bigint[];
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _59.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: bigint[];
                    }): _59.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _59.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryUnreceivedAcksResponse;
                    fromPartial(object: {
                        sequences?: bigint[];
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _59.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _59.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _59.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.QueryNextSequenceReceiveResponse;
                    fromPartial(object: {
                        nextSequenceReceive?: bigint;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _59.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _58.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        nextChannelSequence?: bigint;
                    }): _58.GenesisState;
                };
                PacketSequence: {
                    encode(message: _58.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.PacketSequence;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _58.PacketSequence;
                };
                stateFromJSON(object: any): _57.State;
                stateToJSON(object: _57.State): string;
                orderFromJSON(object: any): _57.Order;
                orderToJSON(object: _57.Order): string;
                State: typeof _57.State;
                StateSDKType: typeof _57.State;
                Order: typeof _57.Order;
                OrderSDKType: typeof _57.Order;
                Channel: {
                    encode(message: _57.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Channel;
                    fromPartial(object: {
                        state?: _57.State;
                        ordering?: _57.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _57.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _57.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _57.State;
                        ordering?: _57.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _57.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _57.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Counterparty;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _57.Counterparty;
                };
                Packet: {
                    encode(message: _57.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Packet;
                    fromPartial(object: {
                        sequence?: bigint;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timeoutTimestamp?: bigint;
                    }): _57.Packet;
                };
                PacketState: {
                    encode(message: _57.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.PacketState;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                        data?: Uint8Array;
                    }): _57.PacketState;
                };
                Acknowledgement: {
                    encode(message: _57.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _57.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _136.MsgClientImpl;
                QueryClientImpl: typeof _132.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _63.QueryClientStateRequest): Promise<_63.QueryClientStateResponse>;
                    clientStates(request?: _63.QueryClientStatesRequest): Promise<_63.QueryClientStatesResponse>;
                    consensusState(request: _63.QueryConsensusStateRequest): Promise<_63.QueryConsensusStateResponse>;
                    consensusStates(request: _63.QueryConsensusStatesRequest): Promise<_63.QueryConsensusStatesResponse>;
                    clientStatus(request: _63.QueryClientStatusRequest): Promise<_63.QueryClientStatusResponse>;
                    clientParams(request?: _63.QueryClientParamsRequest): Promise<_63.QueryClientParamsResponse>;
                    upgradedClientState(request?: _63.QueryUpgradedClientStateRequest): Promise<_63.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _63.QueryUpgradedConsensusStateRequest): Promise<_63.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _128.LCDQueryClient;
                MsgCreateClient: {
                    encode(message: _64.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgCreateClient;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _64.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _64.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgCreateClientResponse;
                    fromPartial(_: {}): _64.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _64.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgUpdateClient;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _64.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _64.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgUpdateClientResponse;
                    fromPartial(_: {}): _64.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _64.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgUpgradeClient;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _64.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _64.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgUpgradeClientResponse;
                    fromPartial(_: {}): _64.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _64.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _64.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _64.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _64.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: {}): _64.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _63.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _63.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _63.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientStateResponse;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _63.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _63.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _63.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _63.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientStatesResponse;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _63.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _63.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryConsensusStateRequest;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                        latestHeight?: boolean;
                    }): _63.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _63.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _63.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _63.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _63.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _63.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryConsensusStatesResponse;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _63.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _63.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientStatusRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _63.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _63.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientStatusResponse;
                    fromPartial(object: {
                        status?: string;
                    }): _63.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _63.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientParamsRequest;
                    fromPartial(_: {}): _63.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _63.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryClientParamsResponse;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _63.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _63.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _63.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _63.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryUpgradedClientStateResponse;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _63.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _63.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _63.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _63.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _63.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _63.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _62.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: bigint;
                                    revisionHeight?: bigint;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: bigint;
                    }): _62.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _62.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _62.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _62.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _62.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _62.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _61.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.IdentifiedClientState;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _61.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _61.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _61.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _61.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ClientConsensusStates;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _61.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _61.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _61.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _61.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            height?: bigint;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _61.UpgradeProposal;
                };
                Height: {
                    encode(message: _61.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Height;
                    fromPartial(object: {
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _61.Height;
                };
                Params: {
                    encode(message: _61.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Params;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _61.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _65.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _65.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _65.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MerklePrefix;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _65.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _65.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MerklePath;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _65.MerklePath;
                };
                MerkleProof: {
                    encode(message: _65.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _65.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _65.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _137.MsgClientImpl;
                QueryClientImpl: typeof _133.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _68.QueryConnectionRequest): Promise<_68.QueryConnectionResponse>;
                    connections(request?: _68.QueryConnectionsRequest): Promise<_68.QueryConnectionsResponse>;
                    clientConnections(request: _68.QueryClientConnectionsRequest): Promise<_68.QueryClientConnectionsResponse>;
                    connectionClientState(request: _68.QueryConnectionClientStateRequest): Promise<_68.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _68.QueryConnectionConsensusStateRequest): Promise<_68.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _129.LCDQueryClient;
                MsgConnectionOpenInit: {
                    encode(message: _69.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenInit;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: bigint;
                        signer?: string;
                    }): _69.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _69.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenInitResponse;
                    fromPartial(_: {}): _69.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _69.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenTry;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _69.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _69.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenTryResponse;
                    fromPartial(_: {}): _69.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _69.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _69.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _69.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenAckResponse;
                    fromPartial(_: {}): _69.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _69.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _69.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _69.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _69.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: {}): _69.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _68.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _68.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _68.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionResponse;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _66.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _68.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _68.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _68.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _68.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionsResponse;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _66.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _68.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _68.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        clientId?: string;
                    }): _68.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _68.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryClientConnectionsResponse;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _68.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _68.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _68.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _68.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionClientStateResponse;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _68.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _68.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _68.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _68.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _68.QueryConnectionConsensusStateResponse;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _68.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _67.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _66.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: bigint;
                        params?: {
                            maxExpectedTimePerBlock?: bigint;
                        };
                    }): _67.GenesisState;
                };
                stateFromJSON(object: any): _66.State;
                stateToJSON(object: _66.State): string;
                State: typeof _66.State;
                StateSDKType: typeof _66.State;
                ConnectionEnd: {
                    encode(message: _66.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.ConnectionEnd;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _66.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                    }): _66.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _66.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _66.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                    }): _66.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _66.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.Counterparty;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _66.Counterparty;
                };
                ClientPaths: {
                    encode(message: _66.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _66.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _66.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.ConnectionPaths;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _66.ConnectionPaths;
                };
                Version: {
                    encode(message: _66.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _66.Version;
                };
                Params: {
                    encode(message: _66.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _66.Params;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: bigint;
                    }): _66.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _70.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _70.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _70.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _71.DataType;
                dataTypeToJSON(object: _71.DataType): string;
                DataType: typeof _71.DataType;
                DataTypeSDKType: typeof _71.DataType;
                ClientState: {
                    encode(message: _71.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ClientState;
                    fromPartial(object: {
                        sequence?: bigint;
                        frozenSequence?: bigint;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: bigint;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _71.ClientState;
                };
                ConsensusState: {
                    encode(message: _71.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: bigint;
                    }): _71.ConsensusState;
                };
                Header: {
                    encode(message: _71.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Header;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _71.Header;
                };
                Misbehaviour: {
                    encode(message: _71.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: bigint;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _71.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _71.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                    }): _71.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _71.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _71.DataType;
                        data?: Uint8Array;
                        timestamp?: bigint;
                    }): _71.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _71.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: bigint;
                    }): _71.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _71.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.SignBytes;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        diversifier?: string;
                        dataType?: _71.DataType;
                        data?: Uint8Array;
                    }): _71.SignBytes;
                };
                HeaderData: {
                    encode(message: _71.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _71.HeaderData;
                };
                ClientStateData: {
                    encode(message: _71.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _71.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _71.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _71.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _71.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _66.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                    }): _71.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _71.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _71.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _71.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _71.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _71.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _71.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _71.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _71.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _71.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _71.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: bigint;
                    }): _71.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _72.DataType;
                dataTypeToJSON(object: _72.DataType): string;
                DataType: typeof _72.DataType;
                DataTypeSDKType: typeof _72.DataType;
                ClientState: {
                    encode(message: _72.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ClientState;
                    fromPartial(object: {
                        sequence?: bigint;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: bigint;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _72.ClientState;
                };
                ConsensusState: {
                    encode(message: _72.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ConsensusState;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: bigint;
                    }): _72.ConsensusState;
                };
                Header: {
                    encode(message: _72.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.Header;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _72.Header;
                };
                Misbehaviour: {
                    encode(message: _72.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: bigint;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _72.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _72.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                    }): _72.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _72.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _72.DataType;
                        data?: Uint8Array;
                        timestamp?: bigint;
                    }): _72.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _72.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.TimestampedSignatureData;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: bigint;
                    }): _72.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _72.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.SignBytes;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        diversifier?: string;
                        dataType?: _72.DataType;
                        data?: Uint8Array;
                    }): _72.SignBytes;
                };
                HeaderData: {
                    encode(message: _72.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.HeaderData;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _72.HeaderData;
                };
                ClientStateData: {
                    encode(message: _72.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _72.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _72.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _72.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _72.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _66.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                    }): _72.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _72.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _57.State;
                            ordering?: _57.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _72.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _72.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _72.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _72.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _72.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _72.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _72.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _72.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _72.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: bigint;
                    }): _72.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _73.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.ClientState;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: bigint;
                            denominator?: bigint;
                        };
                        trustingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        latestHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _73.ClientState;
                };
                ConsensusState: {
                    encode(message: _73.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.ConsensusState;
                    fromPartial(object: {
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _73.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _73.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.Misbehaviour;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: {
                                            seconds?: bigint;
                                            nanos?: number;
                                        };
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                            trustedHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: {
                                            seconds?: bigint;
                                            nanos?: number;
                                        };
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                            trustedHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                    }): _73.Misbehaviour;
                };
                Header: {
                    encode(message: _73.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.Header;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: bigint;
                                    app?: bigint;
                                };
                                chainId?: string;
                                height?: bigint;
                                time?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                        trustedHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                    }): _73.Header;
                };
                Fraction: {
                    encode(message: _73.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _73.Fraction;
                    fromPartial(object: {
                        numerator?: bigint;
                        denominator?: bigint;
                    }): _73.Fraction;
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
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
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
                        v1: _134.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _135.MsgClientImpl;
                    };
                    client: {
                        v1: _136.MsgClientImpl;
                    };
                    connection: {
                        v1: _137.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
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
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
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
                            denomTrace(request: _53.QueryDenomTraceRequest): Promise<_53.QueryDenomTraceResponse>;
                            denomTraces(request?: _53.QueryDenomTracesRequest): Promise<_53.QueryDenomTracesResponse>;
                            params(request?: _53.QueryParamsRequest): Promise<_53.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _59.QueryChannelRequest): Promise<_59.QueryChannelResponse>;
                            channels(request?: _59.QueryChannelsRequest): Promise<_59.QueryChannelsResponse>;
                            connectionChannels(request: _59.QueryConnectionChannelsRequest): Promise<_59.QueryConnectionChannelsResponse>;
                            channelClientState(request: _59.QueryChannelClientStateRequest): Promise<_59.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _59.QueryChannelConsensusStateRequest): Promise<_59.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _59.QueryPacketCommitmentRequest): Promise<_59.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _59.QueryPacketCommitmentsRequest): Promise<_59.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _59.QueryPacketReceiptRequest): Promise<_59.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _59.QueryPacketAcknowledgementRequest): Promise<_59.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _59.QueryPacketAcknowledgementsRequest): Promise<_59.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _59.QueryUnreceivedPacketsRequest): Promise<_59.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _59.QueryUnreceivedAcksRequest): Promise<_59.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _59.QueryNextSequenceReceiveRequest): Promise<_59.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _63.QueryClientStateRequest): Promise<_63.QueryClientStateResponse>;
                            clientStates(request?: _63.QueryClientStatesRequest): Promise<_63.QueryClientStatesResponse>;
                            consensusState(request: _63.QueryConsensusStateRequest): Promise<_63.QueryConsensusStateResponse>;
                            consensusStates(request: _63.QueryConsensusStatesRequest): Promise<_63.QueryConsensusStatesResponse>;
                            clientStatus(request: _63.QueryClientStatusRequest): Promise<_63.QueryClientStatusResponse>;
                            clientParams(request?: _63.QueryClientParamsRequest): Promise<_63.QueryClientParamsResponse>;
                            upgradedClientState(request?: _63.QueryUpgradedClientStateRequest): Promise<_63.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _63.QueryUpgradedConsensusStateRequest): Promise<_63.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _68.QueryConnectionRequest): Promise<_68.QueryConnectionResponse>;
                            connections(request?: _68.QueryConnectionsRequest): Promise<_68.QueryConnectionsResponse>;
                            clientConnections(request: _68.QueryClientConnectionsRequest): Promise<_68.QueryClientConnectionsResponse>;
                            connectionClientState(request: _68.QueryConnectionClientStateRequest): Promise<_68.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _68.QueryConnectionConsensusStateRequest): Promise<_68.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _126.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _127.LCDQueryClient;
                    };
                    client: {
                        v1: _128.LCDQueryClient;
                    };
                    connection: {
                        v1: _129.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
