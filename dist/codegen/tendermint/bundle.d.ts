import * as _84 from "./abci/types";
import * as _85 from "./crypto/keys";
import * as _86 from "./crypto/proof";
import * as _87 from "./libs/bits/types";
import * as _88 from "./p2p/types";
import * as _89 from "./types/block";
import * as _90 from "./types/evidence";
import * as _91 from "./types/params";
import * as _92 from "./types/types";
import * as _93 from "./types/validator";
import * as _94 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _84.CheckTxType;
        checkTxTypeToJSON(object: _84.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _84.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _84.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _84.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _84.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _84.EvidenceType;
        evidenceTypeToJSON(object: _84.EvidenceType): string;
        CheckTxType: typeof _84.CheckTxType;
        CheckTxTypeSDKType: typeof _84.CheckTxType;
        CheckTxTypeAmino: typeof _84.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _84.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _84.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _84.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _84.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _84.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _84.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _84.EvidenceType;
        EvidenceTypeSDKType: typeof _84.EvidenceType;
        EvidenceTypeAmino: typeof _84.EvidenceType;
        Request: {
            typeUrl: string;
            is(o: any): o is _84.Request;
            isSDK(o: any): o is _84.RequestSDKType;
            isAmino(o: any): o is _84.RequestAmino;
            encode(message: _84.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Request;
            fromJSON(object: any): _84.Request;
            toJSON(message: _84.Request): {
                echo?: {
                    message: string;
                };
                flush?: {};
                info?: {
                    version: string;
                    blockVersion: string;
                    p2pVersion: string;
                };
                setOption?: {
                    key: string;
                    value: string;
                };
                initChain?: {
                    time: string;
                    chainId: string;
                    consensusParams?: {
                        block?: {
                            maxBytes: string;
                            maxGas: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks: string;
                            maxAgeDuration: {
                                seconds: string;
                                nanos: number;
                            };
                            maxBytes: string;
                        };
                        validator?: {
                            pubKeyTypes: string[];
                        };
                        version?: {
                            appVersion: string;
                        };
                    };
                    validators: {
                        pubKey: {
                            ed25519?: string;
                            secp256k1?: string;
                        };
                        power: string;
                    }[];
                    appStateBytes: string;
                    initialHeight: string;
                };
                query?: {
                    data: string;
                    path: string;
                    height: string;
                    prove: boolean;
                };
                beginBlock?: {
                    hash: string;
                    header: {
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
                    lastCommitInfo: {
                        round: number;
                        votes: {
                            validator: {
                                address: string;
                                power: string;
                            };
                            signedLastBlock: boolean;
                        }[];
                    };
                    byzantineValidators: {
                        type: _84.EvidenceType;
                        validator: {
                            address: string;
                            power: string;
                        };
                        height: string;
                        time: string;
                        totalVotingPower: string;
                    }[];
                };
                checkTx?: {
                    tx: string;
                    type: _84.CheckTxType;
                };
                deliverTx?: {
                    tx: string;
                };
                endBlock?: {
                    height: string;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height: string;
                        format: number;
                        chunks: number;
                        hash: string;
                        metadata: string;
                    };
                    appHash: string;
                };
                loadSnapshotChunk?: {
                    height: string;
                    format: number;
                    chunk: number;
                };
                applySnapshotChunk?: {
                    index: number;
                    chunk: string;
                    sender: string;
                };
            };
            fromPartial(object: Partial<_84.Request>): _84.Request;
            fromAmino(object: _84.RequestAmino): _84.Request;
            toAmino(message: _84.Request): _84.RequestAmino;
            fromAminoMsg(object: _84.RequestAminoMsg): _84.Request;
            fromProtoMsg(message: _84.RequestProtoMsg): _84.Request;
            toProto(message: _84.Request): Uint8Array;
            toProtoMsg(message: _84.Request): _84.RequestProtoMsg;
        };
        RequestEcho: {
            typeUrl: string;
            is(o: any): o is _84.RequestEcho;
            isSDK(o: any): o is _84.RequestEchoSDKType;
            isAmino(o: any): o is _84.RequestEchoAmino;
            encode(message: _84.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestEcho;
            fromJSON(object: any): _84.RequestEcho;
            toJSON(message: _84.RequestEcho): {
                message: string;
            };
            fromPartial(object: Partial<_84.RequestEcho>): _84.RequestEcho;
            fromAmino(object: _84.RequestEchoAmino): _84.RequestEcho;
            toAmino(message: _84.RequestEcho): _84.RequestEchoAmino;
            fromAminoMsg(object: _84.RequestEchoAminoMsg): _84.RequestEcho;
            fromProtoMsg(message: _84.RequestEchoProtoMsg): _84.RequestEcho;
            toProto(message: _84.RequestEcho): Uint8Array;
            toProtoMsg(message: _84.RequestEcho): _84.RequestEchoProtoMsg;
        };
        RequestFlush: {
            typeUrl: string;
            is(o: any): o is _84.RequestFlush;
            isSDK(o: any): o is _84.RequestFlushSDKType;
            isAmino(o: any): o is _84.RequestFlushAmino;
            encode(_: _84.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestFlush;
            fromJSON(_: any): _84.RequestFlush;
            toJSON(_: _84.RequestFlush): {};
            fromPartial(_: Partial<_84.RequestFlush>): _84.RequestFlush;
            fromAmino(_: _84.RequestFlushAmino): _84.RequestFlush;
            toAmino(_: _84.RequestFlush): _84.RequestFlushAmino;
            fromAminoMsg(object: _84.RequestFlushAminoMsg): _84.RequestFlush;
            fromProtoMsg(message: _84.RequestFlushProtoMsg): _84.RequestFlush;
            toProto(message: _84.RequestFlush): Uint8Array;
            toProtoMsg(message: _84.RequestFlush): _84.RequestFlushProtoMsg;
        };
        RequestInfo: {
            typeUrl: string;
            is(o: any): o is _84.RequestInfo;
            isSDK(o: any): o is _84.RequestInfoSDKType;
            isAmino(o: any): o is _84.RequestInfoAmino;
            encode(message: _84.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestInfo;
            fromJSON(object: any): _84.RequestInfo;
            toJSON(message: _84.RequestInfo): {
                version: string;
                blockVersion: string;
                p2pVersion: string;
            };
            fromPartial(object: Partial<_84.RequestInfo>): _84.RequestInfo;
            fromAmino(object: _84.RequestInfoAmino): _84.RequestInfo;
            toAmino(message: _84.RequestInfo): _84.RequestInfoAmino;
            fromAminoMsg(object: _84.RequestInfoAminoMsg): _84.RequestInfo;
            fromProtoMsg(message: _84.RequestInfoProtoMsg): _84.RequestInfo;
            toProto(message: _84.RequestInfo): Uint8Array;
            toProtoMsg(message: _84.RequestInfo): _84.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            typeUrl: string;
            is(o: any): o is _84.RequestSetOption;
            isSDK(o: any): o is _84.RequestSetOptionSDKType;
            isAmino(o: any): o is _84.RequestSetOptionAmino;
            encode(message: _84.RequestSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestSetOption;
            fromJSON(object: any): _84.RequestSetOption;
            toJSON(message: _84.RequestSetOption): {
                key: string;
                value: string;
            };
            fromPartial(object: Partial<_84.RequestSetOption>): _84.RequestSetOption;
            fromAmino(object: _84.RequestSetOptionAmino): _84.RequestSetOption;
            toAmino(message: _84.RequestSetOption): _84.RequestSetOptionAmino;
            fromAminoMsg(object: _84.RequestSetOptionAminoMsg): _84.RequestSetOption;
            fromProtoMsg(message: _84.RequestSetOptionProtoMsg): _84.RequestSetOption;
            toProto(message: _84.RequestSetOption): Uint8Array;
            toProtoMsg(message: _84.RequestSetOption): _84.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            typeUrl: string;
            is(o: any): o is _84.RequestInitChain;
            isSDK(o: any): o is _84.RequestInitChainSDKType;
            isAmino(o: any): o is _84.RequestInitChainAmino;
            encode(message: _84.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestInitChain;
            fromJSON(object: any): _84.RequestInitChain;
            toJSON(message: _84.RequestInitChain): {
                time: string;
                chainId: string;
                consensusParams?: {
                    block?: {
                        maxBytes: string;
                        maxGas: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks: string;
                        maxAgeDuration: {
                            seconds: string;
                            nanos: number;
                        };
                        maxBytes: string;
                    };
                    validator?: {
                        pubKeyTypes: string[];
                    };
                    version?: {
                        appVersion: string;
                    };
                };
                validators: {
                    pubKey: {
                        ed25519?: string;
                        secp256k1?: string;
                    };
                    power: string;
                }[];
                appStateBytes: string;
                initialHeight: string;
            };
            fromPartial(object: Partial<_84.RequestInitChain>): _84.RequestInitChain;
            fromAmino(object: _84.RequestInitChainAmino): _84.RequestInitChain;
            toAmino(message: _84.RequestInitChain): _84.RequestInitChainAmino;
            fromAminoMsg(object: _84.RequestInitChainAminoMsg): _84.RequestInitChain;
            fromProtoMsg(message: _84.RequestInitChainProtoMsg): _84.RequestInitChain;
            toProto(message: _84.RequestInitChain): Uint8Array;
            toProtoMsg(message: _84.RequestInitChain): _84.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            typeUrl: string;
            is(o: any): o is _84.RequestQuery;
            isSDK(o: any): o is _84.RequestQuerySDKType;
            isAmino(o: any): o is _84.RequestQueryAmino;
            encode(message: _84.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestQuery;
            fromJSON(object: any): _84.RequestQuery;
            toJSON(message: _84.RequestQuery): {
                data: string;
                path: string;
                height: string;
                prove: boolean;
            };
            fromPartial(object: Partial<_84.RequestQuery>): _84.RequestQuery;
            fromAmino(object: _84.RequestQueryAmino): _84.RequestQuery;
            toAmino(message: _84.RequestQuery): _84.RequestQueryAmino;
            fromAminoMsg(object: _84.RequestQueryAminoMsg): _84.RequestQuery;
            fromProtoMsg(message: _84.RequestQueryProtoMsg): _84.RequestQuery;
            toProto(message: _84.RequestQuery): Uint8Array;
            toProtoMsg(message: _84.RequestQuery): _84.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            typeUrl: string;
            is(o: any): o is _84.RequestBeginBlock;
            isSDK(o: any): o is _84.RequestBeginBlockSDKType;
            isAmino(o: any): o is _84.RequestBeginBlockAmino;
            encode(message: _84.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestBeginBlock;
            fromJSON(object: any): _84.RequestBeginBlock;
            toJSON(message: _84.RequestBeginBlock): {
                hash: string;
                header: {
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
                lastCommitInfo: {
                    round: number;
                    votes: {
                        validator: {
                            address: string;
                            power: string;
                        };
                        signedLastBlock: boolean;
                    }[];
                };
                byzantineValidators: {
                    type: _84.EvidenceType;
                    validator: {
                        address: string;
                        power: string;
                    };
                    height: string;
                    time: string;
                    totalVotingPower: string;
                }[];
            };
            fromPartial(object: Partial<_84.RequestBeginBlock>): _84.RequestBeginBlock;
            fromAmino(object: _84.RequestBeginBlockAmino): _84.RequestBeginBlock;
            toAmino(message: _84.RequestBeginBlock): _84.RequestBeginBlockAmino;
            fromAminoMsg(object: _84.RequestBeginBlockAminoMsg): _84.RequestBeginBlock;
            fromProtoMsg(message: _84.RequestBeginBlockProtoMsg): _84.RequestBeginBlock;
            toProto(message: _84.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _84.RequestBeginBlock): _84.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            typeUrl: string;
            is(o: any): o is _84.RequestCheckTx;
            isSDK(o: any): o is _84.RequestCheckTxSDKType;
            isAmino(o: any): o is _84.RequestCheckTxAmino;
            encode(message: _84.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestCheckTx;
            fromJSON(object: any): _84.RequestCheckTx;
            toJSON(message: _84.RequestCheckTx): {
                tx: string;
                type: _84.CheckTxType;
            };
            fromPartial(object: Partial<_84.RequestCheckTx>): _84.RequestCheckTx;
            fromAmino(object: _84.RequestCheckTxAmino): _84.RequestCheckTx;
            toAmino(message: _84.RequestCheckTx): _84.RequestCheckTxAmino;
            fromAminoMsg(object: _84.RequestCheckTxAminoMsg): _84.RequestCheckTx;
            fromProtoMsg(message: _84.RequestCheckTxProtoMsg): _84.RequestCheckTx;
            toProto(message: _84.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _84.RequestCheckTx): _84.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            typeUrl: string;
            is(o: any): o is _84.RequestDeliverTx;
            isSDK(o: any): o is _84.RequestDeliverTxSDKType;
            isAmino(o: any): o is _84.RequestDeliverTxAmino;
            encode(message: _84.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestDeliverTx;
            fromJSON(object: any): _84.RequestDeliverTx;
            toJSON(message: _84.RequestDeliverTx): {
                tx: string;
            };
            fromPartial(object: Partial<_84.RequestDeliverTx>): _84.RequestDeliverTx;
            fromAmino(object: _84.RequestDeliverTxAmino): _84.RequestDeliverTx;
            toAmino(message: _84.RequestDeliverTx): _84.RequestDeliverTxAmino;
            fromAminoMsg(object: _84.RequestDeliverTxAminoMsg): _84.RequestDeliverTx;
            fromProtoMsg(message: _84.RequestDeliverTxProtoMsg): _84.RequestDeliverTx;
            toProto(message: _84.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _84.RequestDeliverTx): _84.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            typeUrl: string;
            is(o: any): o is _84.RequestEndBlock;
            isSDK(o: any): o is _84.RequestEndBlockSDKType;
            isAmino(o: any): o is _84.RequestEndBlockAmino;
            encode(message: _84.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestEndBlock;
            fromJSON(object: any): _84.RequestEndBlock;
            toJSON(message: _84.RequestEndBlock): {
                height: string;
            };
            fromPartial(object: Partial<_84.RequestEndBlock>): _84.RequestEndBlock;
            fromAmino(object: _84.RequestEndBlockAmino): _84.RequestEndBlock;
            toAmino(message: _84.RequestEndBlock): _84.RequestEndBlockAmino;
            fromAminoMsg(object: _84.RequestEndBlockAminoMsg): _84.RequestEndBlock;
            fromProtoMsg(message: _84.RequestEndBlockProtoMsg): _84.RequestEndBlock;
            toProto(message: _84.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _84.RequestEndBlock): _84.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            typeUrl: string;
            is(o: any): o is _84.RequestCommit;
            isSDK(o: any): o is _84.RequestCommitSDKType;
            isAmino(o: any): o is _84.RequestCommitAmino;
            encode(_: _84.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestCommit;
            fromJSON(_: any): _84.RequestCommit;
            toJSON(_: _84.RequestCommit): {};
            fromPartial(_: Partial<_84.RequestCommit>): _84.RequestCommit;
            fromAmino(_: _84.RequestCommitAmino): _84.RequestCommit;
            toAmino(_: _84.RequestCommit): _84.RequestCommitAmino;
            fromAminoMsg(object: _84.RequestCommitAminoMsg): _84.RequestCommit;
            fromProtoMsg(message: _84.RequestCommitProtoMsg): _84.RequestCommit;
            toProto(message: _84.RequestCommit): Uint8Array;
            toProtoMsg(message: _84.RequestCommit): _84.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            typeUrl: string;
            is(o: any): o is _84.RequestListSnapshots;
            isSDK(o: any): o is _84.RequestListSnapshotsSDKType;
            isAmino(o: any): o is _84.RequestListSnapshotsAmino;
            encode(_: _84.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestListSnapshots;
            fromJSON(_: any): _84.RequestListSnapshots;
            toJSON(_: _84.RequestListSnapshots): {};
            fromPartial(_: Partial<_84.RequestListSnapshots>): _84.RequestListSnapshots;
            fromAmino(_: _84.RequestListSnapshotsAmino): _84.RequestListSnapshots;
            toAmino(_: _84.RequestListSnapshots): _84.RequestListSnapshotsAmino;
            fromAminoMsg(object: _84.RequestListSnapshotsAminoMsg): _84.RequestListSnapshots;
            fromProtoMsg(message: _84.RequestListSnapshotsProtoMsg): _84.RequestListSnapshots;
            toProto(message: _84.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _84.RequestListSnapshots): _84.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            typeUrl: string;
            is(o: any): o is _84.RequestOfferSnapshot;
            isSDK(o: any): o is _84.RequestOfferSnapshotSDKType;
            isAmino(o: any): o is _84.RequestOfferSnapshotAmino;
            encode(message: _84.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestOfferSnapshot;
            fromJSON(object: any): _84.RequestOfferSnapshot;
            toJSON(message: _84.RequestOfferSnapshot): {
                snapshot?: {
                    height: string;
                    format: number;
                    chunks: number;
                    hash: string;
                    metadata: string;
                };
                appHash: string;
            };
            fromPartial(object: Partial<_84.RequestOfferSnapshot>): _84.RequestOfferSnapshot;
            fromAmino(object: _84.RequestOfferSnapshotAmino): _84.RequestOfferSnapshot;
            toAmino(message: _84.RequestOfferSnapshot): _84.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _84.RequestOfferSnapshotAminoMsg): _84.RequestOfferSnapshot;
            fromProtoMsg(message: _84.RequestOfferSnapshotProtoMsg): _84.RequestOfferSnapshot;
            toProto(message: _84.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _84.RequestOfferSnapshot): _84.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _84.RequestLoadSnapshotChunk;
            isSDK(o: any): o is _84.RequestLoadSnapshotChunkSDKType;
            isAmino(o: any): o is _84.RequestLoadSnapshotChunkAmino;
            encode(message: _84.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestLoadSnapshotChunk;
            fromJSON(object: any): _84.RequestLoadSnapshotChunk;
            toJSON(message: _84.RequestLoadSnapshotChunk): {
                height: string;
                format: number;
                chunk: number;
            };
            fromPartial(object: Partial<_84.RequestLoadSnapshotChunk>): _84.RequestLoadSnapshotChunk;
            fromAmino(object: _84.RequestLoadSnapshotChunkAmino): _84.RequestLoadSnapshotChunk;
            toAmino(message: _84.RequestLoadSnapshotChunk): _84.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _84.RequestLoadSnapshotChunkAminoMsg): _84.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _84.RequestLoadSnapshotChunkProtoMsg): _84.RequestLoadSnapshotChunk;
            toProto(message: _84.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _84.RequestLoadSnapshotChunk): _84.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _84.RequestApplySnapshotChunk;
            isSDK(o: any): o is _84.RequestApplySnapshotChunkSDKType;
            isAmino(o: any): o is _84.RequestApplySnapshotChunkAmino;
            encode(message: _84.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.RequestApplySnapshotChunk;
            fromJSON(object: any): _84.RequestApplySnapshotChunk;
            toJSON(message: _84.RequestApplySnapshotChunk): {
                index: number;
                chunk: string;
                sender: string;
            };
            fromPartial(object: Partial<_84.RequestApplySnapshotChunk>): _84.RequestApplySnapshotChunk;
            fromAmino(object: _84.RequestApplySnapshotChunkAmino): _84.RequestApplySnapshotChunk;
            toAmino(message: _84.RequestApplySnapshotChunk): _84.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _84.RequestApplySnapshotChunkAminoMsg): _84.RequestApplySnapshotChunk;
            fromProtoMsg(message: _84.RequestApplySnapshotChunkProtoMsg): _84.RequestApplySnapshotChunk;
            toProto(message: _84.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _84.RequestApplySnapshotChunk): _84.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            typeUrl: string;
            is(o: any): o is _84.Response;
            isSDK(o: any): o is _84.ResponseSDKType;
            isAmino(o: any): o is _84.ResponseAmino;
            encode(message: _84.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Response;
            fromJSON(object: any): _84.Response;
            toJSON(message: _84.Response): {
                exception?: {
                    error: string;
                };
                echo?: {
                    message: string;
                };
                flush?: {};
                info?: {
                    data: string;
                    version: string;
                    appVersion: string;
                    lastBlockHeight: string;
                    lastBlockAppHash: string;
                };
                setOption?: {
                    code: number;
                    log: string;
                    info: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes: string;
                            maxGas: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks: string;
                            maxAgeDuration: {
                                seconds: string;
                                nanos: number;
                            };
                            maxBytes: string;
                        };
                        validator?: {
                            pubKeyTypes: string[];
                        };
                        version?: {
                            appVersion: string;
                        };
                    };
                    validators: {
                        pubKey: {
                            ed25519?: string;
                            secp256k1?: string;
                        };
                        power: string;
                    }[];
                    appHash: string;
                };
                query?: {
                    code: number;
                    log: string;
                    info: string;
                    index: string;
                    key: string;
                    value: string;
                    proofOps?: {
                        ops: {
                            type: string;
                            key: string;
                            data: string;
                        }[];
                    };
                    height: string;
                    codespace: string;
                };
                beginBlock?: {
                    events: {
                        type: string;
                        attributes: {
                            key: string;
                            value: string;
                            index: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code: number;
                    data: string;
                    log: string;
                    info: string;
                    gasWanted: string;
                    gasUsed: string;
                    events: {
                        type: string;
                        attributes: {
                            key: string;
                            value: string;
                            index: boolean;
                        }[];
                    }[];
                    codespace: string;
                };
                deliverTx?: {
                    code: number;
                    data: string;
                    log: string;
                    info: string;
                    gasWanted: string;
                    gasUsed: string;
                    events: {
                        type: string;
                        attributes: {
                            key: string;
                            value: string;
                            index: boolean;
                        }[];
                    }[];
                    codespace: string;
                };
                endBlock?: {
                    validatorUpdates: {
                        pubKey: {
                            ed25519?: string;
                            secp256k1?: string;
                        };
                        power: string;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes: string;
                            maxGas: string;
                        };
                        evidence?: {
                            maxAgeNumBlocks: string;
                            maxAgeDuration: {
                                seconds: string;
                                nanos: number;
                            };
                            maxBytes: string;
                        };
                        validator?: {
                            pubKeyTypes: string[];
                        };
                        version?: {
                            appVersion: string;
                        };
                    };
                    events: {
                        type: string;
                        attributes: {
                            key: string;
                            value: string;
                            index: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data: string;
                    retainHeight: string;
                };
                listSnapshots?: {
                    snapshots: {
                        height: string;
                        format: number;
                        chunks: number;
                        hash: string;
                        metadata: string;
                    }[];
                };
                offerSnapshot?: {
                    result: _84.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk: string;
                };
                applySnapshotChunk?: {
                    result: _84.ResponseApplySnapshotChunk_Result;
                    refetchChunks: number[];
                    rejectSenders: string[];
                };
            };
            fromPartial(object: Partial<_84.Response>): _84.Response;
            fromAmino(object: _84.ResponseAmino): _84.Response;
            toAmino(message: _84.Response): _84.ResponseAmino;
            fromAminoMsg(object: _84.ResponseAminoMsg): _84.Response;
            fromProtoMsg(message: _84.ResponseProtoMsg): _84.Response;
            toProto(message: _84.Response): Uint8Array;
            toProtoMsg(message: _84.Response): _84.ResponseProtoMsg;
        };
        ResponseException: {
            typeUrl: string;
            is(o: any): o is _84.ResponseException;
            isSDK(o: any): o is _84.ResponseExceptionSDKType;
            isAmino(o: any): o is _84.ResponseExceptionAmino;
            encode(message: _84.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseException;
            fromJSON(object: any): _84.ResponseException;
            toJSON(message: _84.ResponseException): {
                error: string;
            };
            fromPartial(object: Partial<_84.ResponseException>): _84.ResponseException;
            fromAmino(object: _84.ResponseExceptionAmino): _84.ResponseException;
            toAmino(message: _84.ResponseException): _84.ResponseExceptionAmino;
            fromAminoMsg(object: _84.ResponseExceptionAminoMsg): _84.ResponseException;
            fromProtoMsg(message: _84.ResponseExceptionProtoMsg): _84.ResponseException;
            toProto(message: _84.ResponseException): Uint8Array;
            toProtoMsg(message: _84.ResponseException): _84.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            typeUrl: string;
            is(o: any): o is _84.ResponseEcho;
            isSDK(o: any): o is _84.ResponseEchoSDKType;
            isAmino(o: any): o is _84.ResponseEchoAmino;
            encode(message: _84.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseEcho;
            fromJSON(object: any): _84.ResponseEcho;
            toJSON(message: _84.ResponseEcho): {
                message: string;
            };
            fromPartial(object: Partial<_84.ResponseEcho>): _84.ResponseEcho;
            fromAmino(object: _84.ResponseEchoAmino): _84.ResponseEcho;
            toAmino(message: _84.ResponseEcho): _84.ResponseEchoAmino;
            fromAminoMsg(object: _84.ResponseEchoAminoMsg): _84.ResponseEcho;
            fromProtoMsg(message: _84.ResponseEchoProtoMsg): _84.ResponseEcho;
            toProto(message: _84.ResponseEcho): Uint8Array;
            toProtoMsg(message: _84.ResponseEcho): _84.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            typeUrl: string;
            is(o: any): o is _84.ResponseFlush;
            isSDK(o: any): o is _84.ResponseFlushSDKType;
            isAmino(o: any): o is _84.ResponseFlushAmino;
            encode(_: _84.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseFlush;
            fromJSON(_: any): _84.ResponseFlush;
            toJSON(_: _84.ResponseFlush): {};
            fromPartial(_: Partial<_84.ResponseFlush>): _84.ResponseFlush;
            fromAmino(_: _84.ResponseFlushAmino): _84.ResponseFlush;
            toAmino(_: _84.ResponseFlush): _84.ResponseFlushAmino;
            fromAminoMsg(object: _84.ResponseFlushAminoMsg): _84.ResponseFlush;
            fromProtoMsg(message: _84.ResponseFlushProtoMsg): _84.ResponseFlush;
            toProto(message: _84.ResponseFlush): Uint8Array;
            toProtoMsg(message: _84.ResponseFlush): _84.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            typeUrl: string;
            is(o: any): o is _84.ResponseInfo;
            isSDK(o: any): o is _84.ResponseInfoSDKType;
            isAmino(o: any): o is _84.ResponseInfoAmino;
            encode(message: _84.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseInfo;
            fromJSON(object: any): _84.ResponseInfo;
            toJSON(message: _84.ResponseInfo): {
                data: string;
                version: string;
                appVersion: string;
                lastBlockHeight: string;
                lastBlockAppHash: string;
            };
            fromPartial(object: Partial<_84.ResponseInfo>): _84.ResponseInfo;
            fromAmino(object: _84.ResponseInfoAmino): _84.ResponseInfo;
            toAmino(message: _84.ResponseInfo): _84.ResponseInfoAmino;
            fromAminoMsg(object: _84.ResponseInfoAminoMsg): _84.ResponseInfo;
            fromProtoMsg(message: _84.ResponseInfoProtoMsg): _84.ResponseInfo;
            toProto(message: _84.ResponseInfo): Uint8Array;
            toProtoMsg(message: _84.ResponseInfo): _84.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            typeUrl: string;
            is(o: any): o is _84.ResponseSetOption;
            isSDK(o: any): o is _84.ResponseSetOptionSDKType;
            isAmino(o: any): o is _84.ResponseSetOptionAmino;
            encode(message: _84.ResponseSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseSetOption;
            fromJSON(object: any): _84.ResponseSetOption;
            toJSON(message: _84.ResponseSetOption): {
                code: number;
                log: string;
                info: string;
            };
            fromPartial(object: Partial<_84.ResponseSetOption>): _84.ResponseSetOption;
            fromAmino(object: _84.ResponseSetOptionAmino): _84.ResponseSetOption;
            toAmino(message: _84.ResponseSetOption): _84.ResponseSetOptionAmino;
            fromAminoMsg(object: _84.ResponseSetOptionAminoMsg): _84.ResponseSetOption;
            fromProtoMsg(message: _84.ResponseSetOptionProtoMsg): _84.ResponseSetOption;
            toProto(message: _84.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _84.ResponseSetOption): _84.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            typeUrl: string;
            is(o: any): o is _84.ResponseInitChain;
            isSDK(o: any): o is _84.ResponseInitChainSDKType;
            isAmino(o: any): o is _84.ResponseInitChainAmino;
            encode(message: _84.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseInitChain;
            fromJSON(object: any): _84.ResponseInitChain;
            toJSON(message: _84.ResponseInitChain): {
                consensusParams?: {
                    block?: {
                        maxBytes: string;
                        maxGas: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks: string;
                        maxAgeDuration: {
                            seconds: string;
                            nanos: number;
                        };
                        maxBytes: string;
                    };
                    validator?: {
                        pubKeyTypes: string[];
                    };
                    version?: {
                        appVersion: string;
                    };
                };
                validators: {
                    pubKey: {
                        ed25519?: string;
                        secp256k1?: string;
                    };
                    power: string;
                }[];
                appHash: string;
            };
            fromPartial(object: Partial<_84.ResponseInitChain>): _84.ResponseInitChain;
            fromAmino(object: _84.ResponseInitChainAmino): _84.ResponseInitChain;
            toAmino(message: _84.ResponseInitChain): _84.ResponseInitChainAmino;
            fromAminoMsg(object: _84.ResponseInitChainAminoMsg): _84.ResponseInitChain;
            fromProtoMsg(message: _84.ResponseInitChainProtoMsg): _84.ResponseInitChain;
            toProto(message: _84.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _84.ResponseInitChain): _84.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            typeUrl: string;
            is(o: any): o is _84.ResponseQuery;
            isSDK(o: any): o is _84.ResponseQuerySDKType;
            isAmino(o: any): o is _84.ResponseQueryAmino;
            encode(message: _84.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseQuery;
            fromJSON(object: any): _84.ResponseQuery;
            toJSON(message: _84.ResponseQuery): {
                code: number;
                log: string;
                info: string;
                index: string;
                key: string;
                value: string;
                proofOps?: {
                    ops: {
                        type: string;
                        key: string;
                        data: string;
                    }[];
                };
                height: string;
                codespace: string;
            };
            fromPartial(object: Partial<_84.ResponseQuery>): _84.ResponseQuery;
            fromAmino(object: _84.ResponseQueryAmino): _84.ResponseQuery;
            toAmino(message: _84.ResponseQuery): _84.ResponseQueryAmino;
            fromAminoMsg(object: _84.ResponseQueryAminoMsg): _84.ResponseQuery;
            fromProtoMsg(message: _84.ResponseQueryProtoMsg): _84.ResponseQuery;
            toProto(message: _84.ResponseQuery): Uint8Array;
            toProtoMsg(message: _84.ResponseQuery): _84.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            typeUrl: string;
            is(o: any): o is _84.ResponseBeginBlock;
            isSDK(o: any): o is _84.ResponseBeginBlockSDKType;
            isAmino(o: any): o is _84.ResponseBeginBlockAmino;
            encode(message: _84.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseBeginBlock;
            fromJSON(object: any): _84.ResponseBeginBlock;
            toJSON(message: _84.ResponseBeginBlock): {
                events: {
                    type: string;
                    attributes: {
                        key: string;
                        value: string;
                        index: boolean;
                    }[];
                }[];
            };
            fromPartial(object: Partial<_84.ResponseBeginBlock>): _84.ResponseBeginBlock;
            fromAmino(object: _84.ResponseBeginBlockAmino): _84.ResponseBeginBlock;
            toAmino(message: _84.ResponseBeginBlock): _84.ResponseBeginBlockAmino;
            fromAminoMsg(object: _84.ResponseBeginBlockAminoMsg): _84.ResponseBeginBlock;
            fromProtoMsg(message: _84.ResponseBeginBlockProtoMsg): _84.ResponseBeginBlock;
            toProto(message: _84.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _84.ResponseBeginBlock): _84.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            typeUrl: string;
            is(o: any): o is _84.ResponseCheckTx;
            isSDK(o: any): o is _84.ResponseCheckTxSDKType;
            isAmino(o: any): o is _84.ResponseCheckTxAmino;
            encode(message: _84.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseCheckTx;
            fromJSON(object: any): _84.ResponseCheckTx;
            toJSON(message: _84.ResponseCheckTx): {
                code: number;
                data: string;
                log: string;
                info: string;
                gasWanted: string;
                gasUsed: string;
                events: {
                    type: string;
                    attributes: {
                        key: string;
                        value: string;
                        index: boolean;
                    }[];
                }[];
                codespace: string;
            };
            fromPartial(object: Partial<_84.ResponseCheckTx>): _84.ResponseCheckTx;
            fromAmino(object: _84.ResponseCheckTxAmino): _84.ResponseCheckTx;
            toAmino(message: _84.ResponseCheckTx): _84.ResponseCheckTxAmino;
            fromAminoMsg(object: _84.ResponseCheckTxAminoMsg): _84.ResponseCheckTx;
            fromProtoMsg(message: _84.ResponseCheckTxProtoMsg): _84.ResponseCheckTx;
            toProto(message: _84.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _84.ResponseCheckTx): _84.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            typeUrl: string;
            is(o: any): o is _84.ResponseDeliverTx;
            isSDK(o: any): o is _84.ResponseDeliverTxSDKType;
            isAmino(o: any): o is _84.ResponseDeliverTxAmino;
            encode(message: _84.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseDeliverTx;
            fromJSON(object: any): _84.ResponseDeliverTx;
            toJSON(message: _84.ResponseDeliverTx): {
                code: number;
                data: string;
                log: string;
                info: string;
                gasWanted: string;
                gasUsed: string;
                events: {
                    type: string;
                    attributes: {
                        key: string;
                        value: string;
                        index: boolean;
                    }[];
                }[];
                codespace: string;
            };
            fromPartial(object: Partial<_84.ResponseDeliverTx>): _84.ResponseDeliverTx;
            fromAmino(object: _84.ResponseDeliverTxAmino): _84.ResponseDeliverTx;
            toAmino(message: _84.ResponseDeliverTx): _84.ResponseDeliverTxAmino;
            fromAminoMsg(object: _84.ResponseDeliverTxAminoMsg): _84.ResponseDeliverTx;
            fromProtoMsg(message: _84.ResponseDeliverTxProtoMsg): _84.ResponseDeliverTx;
            toProto(message: _84.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _84.ResponseDeliverTx): _84.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            typeUrl: string;
            is(o: any): o is _84.ResponseEndBlock;
            isSDK(o: any): o is _84.ResponseEndBlockSDKType;
            isAmino(o: any): o is _84.ResponseEndBlockAmino;
            encode(message: _84.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseEndBlock;
            fromJSON(object: any): _84.ResponseEndBlock;
            toJSON(message: _84.ResponseEndBlock): {
                validatorUpdates: {
                    pubKey: {
                        ed25519?: string;
                        secp256k1?: string;
                    };
                    power: string;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes: string;
                        maxGas: string;
                    };
                    evidence?: {
                        maxAgeNumBlocks: string;
                        maxAgeDuration: {
                            seconds: string;
                            nanos: number;
                        };
                        maxBytes: string;
                    };
                    validator?: {
                        pubKeyTypes: string[];
                    };
                    version?: {
                        appVersion: string;
                    };
                };
                events: {
                    type: string;
                    attributes: {
                        key: string;
                        value: string;
                        index: boolean;
                    }[];
                }[];
            };
            fromPartial(object: Partial<_84.ResponseEndBlock>): _84.ResponseEndBlock;
            fromAmino(object: _84.ResponseEndBlockAmino): _84.ResponseEndBlock;
            toAmino(message: _84.ResponseEndBlock): _84.ResponseEndBlockAmino;
            fromAminoMsg(object: _84.ResponseEndBlockAminoMsg): _84.ResponseEndBlock;
            fromProtoMsg(message: _84.ResponseEndBlockProtoMsg): _84.ResponseEndBlock;
            toProto(message: _84.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _84.ResponseEndBlock): _84.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            typeUrl: string;
            is(o: any): o is _84.ResponseCommit;
            isSDK(o: any): o is _84.ResponseCommitSDKType;
            isAmino(o: any): o is _84.ResponseCommitAmino;
            encode(message: _84.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseCommit;
            fromJSON(object: any): _84.ResponseCommit;
            toJSON(message: _84.ResponseCommit): {
                data: string;
                retainHeight: string;
            };
            fromPartial(object: Partial<_84.ResponseCommit>): _84.ResponseCommit;
            fromAmino(object: _84.ResponseCommitAmino): _84.ResponseCommit;
            toAmino(message: _84.ResponseCommit): _84.ResponseCommitAmino;
            fromAminoMsg(object: _84.ResponseCommitAminoMsg): _84.ResponseCommit;
            fromProtoMsg(message: _84.ResponseCommitProtoMsg): _84.ResponseCommit;
            toProto(message: _84.ResponseCommit): Uint8Array;
            toProtoMsg(message: _84.ResponseCommit): _84.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            typeUrl: string;
            is(o: any): o is _84.ResponseListSnapshots;
            isSDK(o: any): o is _84.ResponseListSnapshotsSDKType;
            isAmino(o: any): o is _84.ResponseListSnapshotsAmino;
            encode(message: _84.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseListSnapshots;
            fromJSON(object: any): _84.ResponseListSnapshots;
            toJSON(message: _84.ResponseListSnapshots): {
                snapshots: {
                    height: string;
                    format: number;
                    chunks: number;
                    hash: string;
                    metadata: string;
                }[];
            };
            fromPartial(object: Partial<_84.ResponseListSnapshots>): _84.ResponseListSnapshots;
            fromAmino(object: _84.ResponseListSnapshotsAmino): _84.ResponseListSnapshots;
            toAmino(message: _84.ResponseListSnapshots): _84.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _84.ResponseListSnapshotsAminoMsg): _84.ResponseListSnapshots;
            fromProtoMsg(message: _84.ResponseListSnapshotsProtoMsg): _84.ResponseListSnapshots;
            toProto(message: _84.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _84.ResponseListSnapshots): _84.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            typeUrl: string;
            is(o: any): o is _84.ResponseOfferSnapshot;
            isSDK(o: any): o is _84.ResponseOfferSnapshotSDKType;
            isAmino(o: any): o is _84.ResponseOfferSnapshotAmino;
            encode(message: _84.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseOfferSnapshot;
            fromJSON(object: any): _84.ResponseOfferSnapshot;
            toJSON(message: _84.ResponseOfferSnapshot): {
                result: _84.ResponseOfferSnapshot_Result;
            };
            fromPartial(object: Partial<_84.ResponseOfferSnapshot>): _84.ResponseOfferSnapshot;
            fromAmino(object: _84.ResponseOfferSnapshotAmino): _84.ResponseOfferSnapshot;
            toAmino(message: _84.ResponseOfferSnapshot): _84.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _84.ResponseOfferSnapshotAminoMsg): _84.ResponseOfferSnapshot;
            fromProtoMsg(message: _84.ResponseOfferSnapshotProtoMsg): _84.ResponseOfferSnapshot;
            toProto(message: _84.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _84.ResponseOfferSnapshot): _84.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _84.ResponseLoadSnapshotChunk;
            isSDK(o: any): o is _84.ResponseLoadSnapshotChunkSDKType;
            isAmino(o: any): o is _84.ResponseLoadSnapshotChunkAmino;
            encode(message: _84.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _84.ResponseLoadSnapshotChunk;
            toJSON(message: _84.ResponseLoadSnapshotChunk): {
                chunk: string;
            };
            fromPartial(object: Partial<_84.ResponseLoadSnapshotChunk>): _84.ResponseLoadSnapshotChunk;
            fromAmino(object: _84.ResponseLoadSnapshotChunkAmino): _84.ResponseLoadSnapshotChunk;
            toAmino(message: _84.ResponseLoadSnapshotChunk): _84.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _84.ResponseLoadSnapshotChunkAminoMsg): _84.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _84.ResponseLoadSnapshotChunkProtoMsg): _84.ResponseLoadSnapshotChunk;
            toProto(message: _84.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _84.ResponseLoadSnapshotChunk): _84.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _84.ResponseApplySnapshotChunk;
            isSDK(o: any): o is _84.ResponseApplySnapshotChunkSDKType;
            isAmino(o: any): o is _84.ResponseApplySnapshotChunkAmino;
            encode(message: _84.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ResponseApplySnapshotChunk;
            fromJSON(object: any): _84.ResponseApplySnapshotChunk;
            toJSON(message: _84.ResponseApplySnapshotChunk): {
                result: _84.ResponseApplySnapshotChunk_Result;
                refetchChunks: number[];
                rejectSenders: string[];
            };
            fromPartial(object: Partial<_84.ResponseApplySnapshotChunk>): _84.ResponseApplySnapshotChunk;
            fromAmino(object: _84.ResponseApplySnapshotChunkAmino): _84.ResponseApplySnapshotChunk;
            toAmino(message: _84.ResponseApplySnapshotChunk): _84.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _84.ResponseApplySnapshotChunkAminoMsg): _84.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _84.ResponseApplySnapshotChunkProtoMsg): _84.ResponseApplySnapshotChunk;
            toProto(message: _84.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _84.ResponseApplySnapshotChunk): _84.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            is(o: any): o is _84.ConsensusParams;
            isSDK(o: any): o is _84.ConsensusParamsSDKType;
            isAmino(o: any): o is _84.ConsensusParamsAmino;
            encode(message: _84.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ConsensusParams;
            fromJSON(object: any): _84.ConsensusParams;
            toJSON(message: _84.ConsensusParams): {
                block?: {
                    maxBytes: string;
                    maxGas: string;
                };
                evidence?: {
                    maxAgeNumBlocks: string;
                    maxAgeDuration: {
                        seconds: string;
                        nanos: number;
                    };
                    maxBytes: string;
                };
                validator?: {
                    pubKeyTypes: string[];
                };
                version?: {
                    appVersion: string;
                };
            };
            fromPartial(object: Partial<_84.ConsensusParams>): _84.ConsensusParams;
            fromAmino(object: _84.ConsensusParamsAmino): _84.ConsensusParams;
            toAmino(message: _84.ConsensusParams): _84.ConsensusParamsAmino;
            fromAminoMsg(object: _84.ConsensusParamsAminoMsg): _84.ConsensusParams;
            fromProtoMsg(message: _84.ConsensusParamsProtoMsg): _84.ConsensusParams;
            toProto(message: _84.ConsensusParams): Uint8Array;
            toProtoMsg(message: _84.ConsensusParams): _84.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            is(o: any): o is _84.BlockParams;
            isSDK(o: any): o is _84.BlockParamsSDKType;
            isAmino(o: any): o is _84.BlockParamsAmino;
            encode(message: _84.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.BlockParams;
            fromJSON(object: any): _84.BlockParams;
            toJSON(message: _84.BlockParams): {
                maxBytes: string;
                maxGas: string;
            };
            fromPartial(object: Partial<_84.BlockParams>): _84.BlockParams;
            fromAmino(object: _84.BlockParamsAmino): _84.BlockParams;
            toAmino(message: _84.BlockParams): _84.BlockParamsAmino;
            fromAminoMsg(object: _84.BlockParamsAminoMsg): _84.BlockParams;
            fromProtoMsg(message: _84.BlockParamsProtoMsg): _84.BlockParams;
            toProto(message: _84.BlockParams): Uint8Array;
            toProtoMsg(message: _84.BlockParams): _84.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            typeUrl: string;
            is(o: any): o is _84.LastCommitInfo;
            isSDK(o: any): o is _84.LastCommitInfoSDKType;
            isAmino(o: any): o is _84.LastCommitInfoAmino;
            encode(message: _84.LastCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.LastCommitInfo;
            fromJSON(object: any): _84.LastCommitInfo;
            toJSON(message: _84.LastCommitInfo): {
                round: number;
                votes: {
                    validator: {
                        address: string;
                        power: string;
                    };
                    signedLastBlock: boolean;
                }[];
            };
            fromPartial(object: Partial<_84.LastCommitInfo>): _84.LastCommitInfo;
            fromAmino(object: _84.LastCommitInfoAmino): _84.LastCommitInfo;
            toAmino(message: _84.LastCommitInfo): _84.LastCommitInfoAmino;
            fromAminoMsg(object: _84.LastCommitInfoAminoMsg): _84.LastCommitInfo;
            fromProtoMsg(message: _84.LastCommitInfoProtoMsg): _84.LastCommitInfo;
            toProto(message: _84.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _84.LastCommitInfo): _84.LastCommitInfoProtoMsg;
        };
        Event: {
            typeUrl: string;
            is(o: any): o is _84.Event;
            isSDK(o: any): o is _84.EventSDKType;
            isAmino(o: any): o is _84.EventAmino;
            encode(message: _84.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Event;
            fromJSON(object: any): _84.Event;
            toJSON(message: _84.Event): {
                type: string;
                attributes: {
                    key: string;
                    value: string;
                    index: boolean;
                }[];
            };
            fromPartial(object: Partial<_84.Event>): _84.Event;
            fromAmino(object: _84.EventAmino): _84.Event;
            toAmino(message: _84.Event): _84.EventAmino;
            fromAminoMsg(object: _84.EventAminoMsg): _84.Event;
            fromProtoMsg(message: _84.EventProtoMsg): _84.Event;
            toProto(message: _84.Event): Uint8Array;
            toProtoMsg(message: _84.Event): _84.EventProtoMsg;
        };
        EventAttribute: {
            typeUrl: string;
            is(o: any): o is _84.EventAttribute;
            isSDK(o: any): o is _84.EventAttributeSDKType;
            isAmino(o: any): o is _84.EventAttributeAmino;
            encode(message: _84.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.EventAttribute;
            fromJSON(object: any): _84.EventAttribute;
            toJSON(message: _84.EventAttribute): {
                key: string;
                value: string;
                index: boolean;
            };
            fromPartial(object: Partial<_84.EventAttribute>): _84.EventAttribute;
            fromAmino(object: _84.EventAttributeAmino): _84.EventAttribute;
            toAmino(message: _84.EventAttribute): _84.EventAttributeAmino;
            fromAminoMsg(object: _84.EventAttributeAminoMsg): _84.EventAttribute;
            fromProtoMsg(message: _84.EventAttributeProtoMsg): _84.EventAttribute;
            toProto(message: _84.EventAttribute): Uint8Array;
            toProtoMsg(message: _84.EventAttribute): _84.EventAttributeProtoMsg;
        };
        TxResult: {
            typeUrl: string;
            is(o: any): o is _84.TxResult;
            isSDK(o: any): o is _84.TxResultSDKType;
            isAmino(o: any): o is _84.TxResultAmino;
            encode(message: _84.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.TxResult;
            fromJSON(object: any): _84.TxResult;
            toJSON(message: _84.TxResult): {
                height: string;
                index: number;
                tx: string;
                result: {
                    code: number;
                    data: string;
                    log: string;
                    info: string;
                    gasWanted: string;
                    gasUsed: string;
                    events: {
                        type: string;
                        attributes: {
                            key: string;
                            value: string;
                            index: boolean;
                        }[];
                    }[];
                    codespace: string;
                };
            };
            fromPartial(object: Partial<_84.TxResult>): _84.TxResult;
            fromAmino(object: _84.TxResultAmino): _84.TxResult;
            toAmino(message: _84.TxResult): _84.TxResultAmino;
            fromAminoMsg(object: _84.TxResultAminoMsg): _84.TxResult;
            fromProtoMsg(message: _84.TxResultProtoMsg): _84.TxResult;
            toProto(message: _84.TxResult): Uint8Array;
            toProtoMsg(message: _84.TxResult): _84.TxResultProtoMsg;
        };
        Validator: {
            typeUrl: string;
            is(o: any): o is _84.Validator;
            isSDK(o: any): o is _84.ValidatorSDKType;
            isAmino(o: any): o is _84.ValidatorAmino;
            encode(message: _84.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Validator;
            fromJSON(object: any): _84.Validator;
            toJSON(message: _84.Validator): {
                address: string;
                power: string;
            };
            fromPartial(object: Partial<_84.Validator>): _84.Validator;
            fromAmino(object: _84.ValidatorAmino): _84.Validator;
            toAmino(message: _84.Validator): _84.ValidatorAmino;
            fromAminoMsg(object: _84.ValidatorAminoMsg): _84.Validator;
            fromProtoMsg(message: _84.ValidatorProtoMsg): _84.Validator;
            toProto(message: _84.Validator): Uint8Array;
            toProtoMsg(message: _84.Validator): _84.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            typeUrl: string;
            is(o: any): o is _84.ValidatorUpdate;
            isSDK(o: any): o is _84.ValidatorUpdateSDKType;
            isAmino(o: any): o is _84.ValidatorUpdateAmino;
            encode(message: _84.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ValidatorUpdate;
            fromJSON(object: any): _84.ValidatorUpdate;
            toJSON(message: _84.ValidatorUpdate): {
                pubKey: {
                    ed25519?: string;
                    secp256k1?: string;
                };
                power: string;
            };
            fromPartial(object: Partial<_84.ValidatorUpdate>): _84.ValidatorUpdate;
            fromAmino(object: _84.ValidatorUpdateAmino): _84.ValidatorUpdate;
            toAmino(message: _84.ValidatorUpdate): _84.ValidatorUpdateAmino;
            fromAminoMsg(object: _84.ValidatorUpdateAminoMsg): _84.ValidatorUpdate;
            fromProtoMsg(message: _84.ValidatorUpdateProtoMsg): _84.ValidatorUpdate;
            toProto(message: _84.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _84.ValidatorUpdate): _84.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            typeUrl: string;
            is(o: any): o is _84.VoteInfo;
            isSDK(o: any): o is _84.VoteInfoSDKType;
            isAmino(o: any): o is _84.VoteInfoAmino;
            encode(message: _84.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.VoteInfo;
            fromJSON(object: any): _84.VoteInfo;
            toJSON(message: _84.VoteInfo): {
                validator: {
                    address: string;
                    power: string;
                };
                signedLastBlock: boolean;
            };
            fromPartial(object: Partial<_84.VoteInfo>): _84.VoteInfo;
            fromAmino(object: _84.VoteInfoAmino): _84.VoteInfo;
            toAmino(message: _84.VoteInfo): _84.VoteInfoAmino;
            fromAminoMsg(object: _84.VoteInfoAminoMsg): _84.VoteInfo;
            fromProtoMsg(message: _84.VoteInfoProtoMsg): _84.VoteInfo;
            toProto(message: _84.VoteInfo): Uint8Array;
            toProtoMsg(message: _84.VoteInfo): _84.VoteInfoProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            is(o: any): o is _84.Evidence;
            isSDK(o: any): o is _84.EvidenceSDKType;
            isAmino(o: any): o is _84.EvidenceAmino;
            encode(message: _84.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Evidence;
            fromJSON(object: any): _84.Evidence;
            toJSON(message: _84.Evidence): {
                type: _84.EvidenceType;
                validator: {
                    address: string;
                    power: string;
                };
                height: string;
                time: string;
                totalVotingPower: string;
            };
            fromPartial(object: Partial<_84.Evidence>): _84.Evidence;
            fromAmino(object: _84.EvidenceAmino): _84.Evidence;
            toAmino(message: _84.Evidence): _84.EvidenceAmino;
            fromAminoMsg(object: _84.EvidenceAminoMsg): _84.Evidence;
            fromProtoMsg(message: _84.EvidenceProtoMsg): _84.Evidence;
            toProto(message: _84.Evidence): Uint8Array;
            toProtoMsg(message: _84.Evidence): _84.EvidenceProtoMsg;
        };
        Snapshot: {
            typeUrl: string;
            is(o: any): o is _84.Snapshot;
            isSDK(o: any): o is _84.SnapshotSDKType;
            isAmino(o: any): o is _84.SnapshotAmino;
            encode(message: _84.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Snapshot;
            fromJSON(object: any): _84.Snapshot;
            toJSON(message: _84.Snapshot): {
                height: string;
                format: number;
                chunks: number;
                hash: string;
                metadata: string;
            };
            fromPartial(object: Partial<_84.Snapshot>): _84.Snapshot;
            fromAmino(object: _84.SnapshotAmino): _84.Snapshot;
            toAmino(message: _84.Snapshot): _84.SnapshotAmino;
            fromAminoMsg(object: _84.SnapshotAminoMsg): _84.Snapshot;
            fromProtoMsg(message: _84.SnapshotProtoMsg): _84.Snapshot;
            toProto(message: _84.Snapshot): Uint8Array;
            toProtoMsg(message: _84.Snapshot): _84.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            typeUrl: string;
            is(o: any): o is _86.Proof;
            isSDK(o: any): o is _86.ProofSDKType;
            isAmino(o: any): o is _86.ProofAmino;
            encode(message: _86.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.Proof;
            fromJSON(object: any): _86.Proof;
            toJSON(message: _86.Proof): {
                total: string;
                index: string;
                leafHash: string;
                aunts: string[];
            };
            fromPartial(object: Partial<_86.Proof>): _86.Proof;
            fromAmino(object: _86.ProofAmino): _86.Proof;
            toAmino(message: _86.Proof): _86.ProofAmino;
            fromAminoMsg(object: _86.ProofAminoMsg): _86.Proof;
            fromProtoMsg(message: _86.ProofProtoMsg): _86.Proof;
            toProto(message: _86.Proof): Uint8Array;
            toProtoMsg(message: _86.Proof): _86.ProofProtoMsg;
        };
        ValueOp: {
            typeUrl: string;
            is(o: any): o is _86.ValueOp;
            isSDK(o: any): o is _86.ValueOpSDKType;
            isAmino(o: any): o is _86.ValueOpAmino;
            encode(message: _86.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.ValueOp;
            fromJSON(object: any): _86.ValueOp;
            toJSON(message: _86.ValueOp): {
                key: string;
                proof?: {
                    total: string;
                    index: string;
                    leafHash: string;
                    aunts: string[];
                };
            };
            fromPartial(object: Partial<_86.ValueOp>): _86.ValueOp;
            fromAmino(object: _86.ValueOpAmino): _86.ValueOp;
            toAmino(message: _86.ValueOp): _86.ValueOpAmino;
            fromAminoMsg(object: _86.ValueOpAminoMsg): _86.ValueOp;
            fromProtoMsg(message: _86.ValueOpProtoMsg): _86.ValueOp;
            toProto(message: _86.ValueOp): Uint8Array;
            toProtoMsg(message: _86.ValueOp): _86.ValueOpProtoMsg;
        };
        DominoOp: {
            typeUrl: string;
            is(o: any): o is _86.DominoOp;
            isSDK(o: any): o is _86.DominoOpSDKType;
            isAmino(o: any): o is _86.DominoOpAmino;
            encode(message: _86.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.DominoOp;
            fromJSON(object: any): _86.DominoOp;
            toJSON(message: _86.DominoOp): {
                key: string;
                input: string;
                output: string;
            };
            fromPartial(object: Partial<_86.DominoOp>): _86.DominoOp;
            fromAmino(object: _86.DominoOpAmino): _86.DominoOp;
            toAmino(message: _86.DominoOp): _86.DominoOpAmino;
            fromAminoMsg(object: _86.DominoOpAminoMsg): _86.DominoOp;
            fromProtoMsg(message: _86.DominoOpProtoMsg): _86.DominoOp;
            toProto(message: _86.DominoOp): Uint8Array;
            toProtoMsg(message: _86.DominoOp): _86.DominoOpProtoMsg;
        };
        ProofOp: {
            typeUrl: string;
            is(o: any): o is _86.ProofOp;
            isSDK(o: any): o is _86.ProofOpSDKType;
            isAmino(o: any): o is _86.ProofOpAmino;
            encode(message: _86.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.ProofOp;
            fromJSON(object: any): _86.ProofOp;
            toJSON(message: _86.ProofOp): {
                type: string;
                key: string;
                data: string;
            };
            fromPartial(object: Partial<_86.ProofOp>): _86.ProofOp;
            fromAmino(object: _86.ProofOpAmino): _86.ProofOp;
            toAmino(message: _86.ProofOp): _86.ProofOpAmino;
            fromAminoMsg(object: _86.ProofOpAminoMsg): _86.ProofOp;
            fromProtoMsg(message: _86.ProofOpProtoMsg): _86.ProofOp;
            toProto(message: _86.ProofOp): Uint8Array;
            toProtoMsg(message: _86.ProofOp): _86.ProofOpProtoMsg;
        };
        ProofOps: {
            typeUrl: string;
            is(o: any): o is _86.ProofOps;
            isSDK(o: any): o is _86.ProofOpsSDKType;
            isAmino(o: any): o is _86.ProofOpsAmino;
            encode(message: _86.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.ProofOps;
            fromJSON(object: any): _86.ProofOps;
            toJSON(message: _86.ProofOps): {
                ops: {
                    type: string;
                    key: string;
                    data: string;
                }[];
            };
            fromPartial(object: Partial<_86.ProofOps>): _86.ProofOps;
            fromAmino(object: _86.ProofOpsAmino): _86.ProofOps;
            toAmino(message: _86.ProofOps): _86.ProofOpsAmino;
            fromAminoMsg(object: _86.ProofOpsAminoMsg): _86.ProofOps;
            fromProtoMsg(message: _86.ProofOpsProtoMsg): _86.ProofOps;
            toProto(message: _86.ProofOps): Uint8Array;
            toProtoMsg(message: _86.ProofOps): _86.ProofOpsProtoMsg;
        };
        PublicKey: {
            typeUrl: string;
            is(o: any): o is _85.PublicKey;
            isSDK(o: any): o is _85.PublicKeySDKType;
            isAmino(o: any): o is _85.PublicKeyAmino;
            encode(message: _85.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.PublicKey;
            fromJSON(object: any): _85.PublicKey;
            toJSON(message: _85.PublicKey): {
                ed25519?: string;
                secp256k1?: string;
            };
            fromPartial(object: Partial<_85.PublicKey>): _85.PublicKey;
            fromAmino(object: _85.PublicKeyAmino): _85.PublicKey;
            toAmino(message: _85.PublicKey): _85.PublicKeyAmino;
            fromAminoMsg(object: _85.PublicKeyAminoMsg): _85.PublicKey;
            fromProtoMsg(message: _85.PublicKeyProtoMsg): _85.PublicKey;
            toProto(message: _85.PublicKey): Uint8Array;
            toProtoMsg(message: _85.PublicKey): _85.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                typeUrl: string;
                is(o: any): o is _87.BitArray;
                isSDK(o: any): o is _87.BitArraySDKType;
                isAmino(o: any): o is _87.BitArrayAmino;
                encode(message: _87.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.BitArray;
                fromJSON(object: any): _87.BitArray;
                toJSON(message: _87.BitArray): {
                    bits: string;
                    elems: string[];
                };
                fromPartial(object: Partial<_87.BitArray>): _87.BitArray;
                fromAmino(object: _87.BitArrayAmino): _87.BitArray;
                toAmino(message: _87.BitArray): _87.BitArrayAmino;
                fromAminoMsg(object: _87.BitArrayAminoMsg): _87.BitArray;
                fromProtoMsg(message: _87.BitArrayProtoMsg): _87.BitArray;
                toProto(message: _87.BitArray): Uint8Array;
                toProtoMsg(message: _87.BitArray): _87.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            typeUrl: string;
            is(o: any): o is _88.ProtocolVersion;
            isSDK(o: any): o is _88.ProtocolVersionSDKType;
            isAmino(o: any): o is _88.ProtocolVersionAmino;
            encode(message: _88.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.ProtocolVersion;
            fromJSON(object: any): _88.ProtocolVersion;
            toJSON(message: _88.ProtocolVersion): {
                p2p: string;
                block: string;
                app: string;
            };
            fromPartial(object: Partial<_88.ProtocolVersion>): _88.ProtocolVersion;
            fromAmino(object: _88.ProtocolVersionAmino): _88.ProtocolVersion;
            toAmino(message: _88.ProtocolVersion): _88.ProtocolVersionAmino;
            fromAminoMsg(object: _88.ProtocolVersionAminoMsg): _88.ProtocolVersion;
            fromProtoMsg(message: _88.ProtocolVersionProtoMsg): _88.ProtocolVersion;
            toProto(message: _88.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _88.ProtocolVersion): _88.ProtocolVersionProtoMsg;
        };
        NodeInfo: {
            typeUrl: string;
            is(o: any): o is _88.NodeInfo;
            isSDK(o: any): o is _88.NodeInfoSDKType;
            isAmino(o: any): o is _88.NodeInfoAmino;
            encode(message: _88.NodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.NodeInfo;
            fromJSON(object: any): _88.NodeInfo;
            toJSON(message: _88.NodeInfo): {
                protocolVersion: {
                    p2p: string;
                    block: string;
                    app: string;
                };
                nodeId: string;
                listenAddr: string;
                network: string;
                version: string;
                channels: string;
                moniker: string;
                other: {
                    txIndex: string;
                    rpcAddress: string;
                };
            };
            fromPartial(object: Partial<_88.NodeInfo>): _88.NodeInfo;
            fromAmino(object: _88.NodeInfoAmino): _88.NodeInfo;
            toAmino(message: _88.NodeInfo): _88.NodeInfoAmino;
            fromAminoMsg(object: _88.NodeInfoAminoMsg): _88.NodeInfo;
            fromProtoMsg(message: _88.NodeInfoProtoMsg): _88.NodeInfo;
            toProto(message: _88.NodeInfo): Uint8Array;
            toProtoMsg(message: _88.NodeInfo): _88.NodeInfoProtoMsg;
        };
        NodeInfoOther: {
            typeUrl: string;
            is(o: any): o is _88.NodeInfoOther;
            isSDK(o: any): o is _88.NodeInfoOtherSDKType;
            isAmino(o: any): o is _88.NodeInfoOtherAmino;
            encode(message: _88.NodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.NodeInfoOther;
            fromJSON(object: any): _88.NodeInfoOther;
            toJSON(message: _88.NodeInfoOther): {
                txIndex: string;
                rpcAddress: string;
            };
            fromPartial(object: Partial<_88.NodeInfoOther>): _88.NodeInfoOther;
            fromAmino(object: _88.NodeInfoOtherAmino): _88.NodeInfoOther;
            toAmino(message: _88.NodeInfoOther): _88.NodeInfoOtherAmino;
            fromAminoMsg(object: _88.NodeInfoOtherAminoMsg): _88.NodeInfoOther;
            fromProtoMsg(message: _88.NodeInfoOtherProtoMsg): _88.NodeInfoOther;
            toProto(message: _88.NodeInfoOther): Uint8Array;
            toProtoMsg(message: _88.NodeInfoOther): _88.NodeInfoOtherProtoMsg;
        };
        PeerInfo: {
            typeUrl: string;
            is(o: any): o is _88.PeerInfo;
            isSDK(o: any): o is _88.PeerInfoSDKType;
            isAmino(o: any): o is _88.PeerInfoAmino;
            encode(message: _88.PeerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.PeerInfo;
            fromJSON(object: any): _88.PeerInfo;
            toJSON(message: _88.PeerInfo): {
                id: string;
                addressInfo: {
                    address: string;
                    lastDialSuccess?: string;
                    lastDialFailure?: string;
                    dialFailures: number;
                }[];
                lastConnected?: string;
            };
            fromPartial(object: Partial<_88.PeerInfo>): _88.PeerInfo;
            fromAmino(object: _88.PeerInfoAmino): _88.PeerInfo;
            toAmino(message: _88.PeerInfo): _88.PeerInfoAmino;
            fromAminoMsg(object: _88.PeerInfoAminoMsg): _88.PeerInfo;
            fromProtoMsg(message: _88.PeerInfoProtoMsg): _88.PeerInfo;
            toProto(message: _88.PeerInfo): Uint8Array;
            toProtoMsg(message: _88.PeerInfo): _88.PeerInfoProtoMsg;
        };
        PeerAddressInfo: {
            typeUrl: string;
            is(o: any): o is _88.PeerAddressInfo;
            isSDK(o: any): o is _88.PeerAddressInfoSDKType;
            isAmino(o: any): o is _88.PeerAddressInfoAmino;
            encode(message: _88.PeerAddressInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.PeerAddressInfo;
            fromJSON(object: any): _88.PeerAddressInfo;
            toJSON(message: _88.PeerAddressInfo): {
                address: string;
                lastDialSuccess?: string;
                lastDialFailure?: string;
                dialFailures: number;
            };
            fromPartial(object: Partial<_88.PeerAddressInfo>): _88.PeerAddressInfo;
            fromAmino(object: _88.PeerAddressInfoAmino): _88.PeerAddressInfo;
            toAmino(message: _88.PeerAddressInfo): _88.PeerAddressInfoAmino;
            fromAminoMsg(object: _88.PeerAddressInfoAminoMsg): _88.PeerAddressInfo;
            fromProtoMsg(message: _88.PeerAddressInfoProtoMsg): _88.PeerAddressInfo;
            toProto(message: _88.PeerAddressInfo): Uint8Array;
            toProtoMsg(message: _88.PeerAddressInfo): _88.PeerAddressInfoProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            typeUrl: string;
            is(o: any): o is _93.ValidatorSet;
            isSDK(o: any): o is _93.ValidatorSetSDKType;
            isAmino(o: any): o is _93.ValidatorSetAmino;
            encode(message: _93.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.ValidatorSet;
            fromJSON(object: any): _93.ValidatorSet;
            toJSON(message: _93.ValidatorSet): {
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
            fromPartial(object: Partial<_93.ValidatorSet>): _93.ValidatorSet;
            fromAmino(object: _93.ValidatorSetAmino): _93.ValidatorSet;
            toAmino(message: _93.ValidatorSet): _93.ValidatorSetAmino;
            fromAminoMsg(object: _93.ValidatorSetAminoMsg): _93.ValidatorSet;
            fromProtoMsg(message: _93.ValidatorSetProtoMsg): _93.ValidatorSet;
            toProto(message: _93.ValidatorSet): Uint8Array;
            toProtoMsg(message: _93.ValidatorSet): _93.ValidatorSetProtoMsg;
        };
        Validator: {
            typeUrl: string;
            is(o: any): o is _93.Validator;
            isSDK(o: any): o is _93.ValidatorSDKType;
            isAmino(o: any): o is _93.ValidatorAmino;
            encode(message: _93.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.Validator;
            fromJSON(object: any): _93.Validator;
            toJSON(message: _93.Validator): {
                address: string;
                pubKey: {
                    ed25519?: string;
                    secp256k1?: string;
                };
                votingPower: string;
                proposerPriority: string;
            };
            fromPartial(object: Partial<_93.Validator>): _93.Validator;
            fromAmino(object: _93.ValidatorAmino): _93.Validator;
            toAmino(message: _93.Validator): _93.ValidatorAmino;
            fromAminoMsg(object: _93.ValidatorAminoMsg): _93.Validator;
            fromProtoMsg(message: _93.ValidatorProtoMsg): _93.Validator;
            toProto(message: _93.Validator): Uint8Array;
            toProtoMsg(message: _93.Validator): _93.ValidatorProtoMsg;
        };
        SimpleValidator: {
            typeUrl: string;
            is(o: any): o is _93.SimpleValidator;
            isSDK(o: any): o is _93.SimpleValidatorSDKType;
            isAmino(o: any): o is _93.SimpleValidatorAmino;
            encode(message: _93.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.SimpleValidator;
            fromJSON(object: any): _93.SimpleValidator;
            toJSON(message: _93.SimpleValidator): {
                pubKey?: {
                    ed25519?: string;
                    secp256k1?: string;
                };
                votingPower: string;
            };
            fromPartial(object: Partial<_93.SimpleValidator>): _93.SimpleValidator;
            fromAmino(object: _93.SimpleValidatorAmino): _93.SimpleValidator;
            toAmino(message: _93.SimpleValidator): _93.SimpleValidatorAmino;
            fromAminoMsg(object: _93.SimpleValidatorAminoMsg): _93.SimpleValidator;
            fromProtoMsg(message: _93.SimpleValidatorProtoMsg): _93.SimpleValidator;
            toProto(message: _93.SimpleValidator): Uint8Array;
            toProtoMsg(message: _93.SimpleValidator): _93.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _92.BlockIDFlag;
        blockIDFlagToJSON(object: _92.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _92.SignedMsgType;
        signedMsgTypeToJSON(object: _92.SignedMsgType): string;
        BlockIDFlag: typeof _92.BlockIDFlag;
        BlockIDFlagSDKType: typeof _92.BlockIDFlag;
        BlockIDFlagAmino: typeof _92.BlockIDFlag;
        SignedMsgType: typeof _92.SignedMsgType;
        SignedMsgTypeSDKType: typeof _92.SignedMsgType;
        SignedMsgTypeAmino: typeof _92.SignedMsgType;
        PartSetHeader: {
            typeUrl: string;
            is(o: any): o is _92.PartSetHeader;
            isSDK(o: any): o is _92.PartSetHeaderSDKType;
            isAmino(o: any): o is _92.PartSetHeaderAmino;
            encode(message: _92.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.PartSetHeader;
            fromJSON(object: any): _92.PartSetHeader;
            toJSON(message: _92.PartSetHeader): {
                total: number;
                hash: string;
            };
            fromPartial(object: Partial<_92.PartSetHeader>): _92.PartSetHeader;
            fromAmino(object: _92.PartSetHeaderAmino): _92.PartSetHeader;
            toAmino(message: _92.PartSetHeader): _92.PartSetHeaderAmino;
            fromAminoMsg(object: _92.PartSetHeaderAminoMsg): _92.PartSetHeader;
            fromProtoMsg(message: _92.PartSetHeaderProtoMsg): _92.PartSetHeader;
            toProto(message: _92.PartSetHeader): Uint8Array;
            toProtoMsg(message: _92.PartSetHeader): _92.PartSetHeaderProtoMsg;
        };
        Part: {
            typeUrl: string;
            is(o: any): o is _92.Part;
            isSDK(o: any): o is _92.PartSDKType;
            isAmino(o: any): o is _92.PartAmino;
            encode(message: _92.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Part;
            fromJSON(object: any): _92.Part;
            toJSON(message: _92.Part): {
                index: number;
                bytes: string;
                proof: {
                    total: string;
                    index: string;
                    leafHash: string;
                    aunts: string[];
                };
            };
            fromPartial(object: Partial<_92.Part>): _92.Part;
            fromAmino(object: _92.PartAmino): _92.Part;
            toAmino(message: _92.Part): _92.PartAmino;
            fromAminoMsg(object: _92.PartAminoMsg): _92.Part;
            fromProtoMsg(message: _92.PartProtoMsg): _92.Part;
            toProto(message: _92.Part): Uint8Array;
            toProtoMsg(message: _92.Part): _92.PartProtoMsg;
        };
        BlockID: {
            typeUrl: string;
            is(o: any): o is _92.BlockID;
            isSDK(o: any): o is _92.BlockIDSDKType;
            isAmino(o: any): o is _92.BlockIDAmino;
            encode(message: _92.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.BlockID;
            fromJSON(object: any): _92.BlockID;
            toJSON(message: _92.BlockID): {
                hash: string;
                partSetHeader: {
                    total: number;
                    hash: string;
                };
            };
            fromPartial(object: Partial<_92.BlockID>): _92.BlockID;
            fromAmino(object: _92.BlockIDAmino): _92.BlockID;
            toAmino(message: _92.BlockID): _92.BlockIDAmino;
            fromAminoMsg(object: _92.BlockIDAminoMsg): _92.BlockID;
            fromProtoMsg(message: _92.BlockIDProtoMsg): _92.BlockID;
            toProto(message: _92.BlockID): Uint8Array;
            toProtoMsg(message: _92.BlockID): _92.BlockIDProtoMsg;
        };
        Header: {
            typeUrl: string;
            is(o: any): o is _92.Header;
            isSDK(o: any): o is _92.HeaderSDKType;
            isAmino(o: any): o is _92.HeaderAmino;
            encode(message: _92.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Header;
            fromJSON(object: any): _92.Header;
            toJSON(message: _92.Header): {
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
            fromPartial(object: Partial<_92.Header>): _92.Header;
            fromAmino(object: _92.HeaderAmino): _92.Header;
            toAmino(message: _92.Header): _92.HeaderAmino;
            fromAminoMsg(object: _92.HeaderAminoMsg): _92.Header;
            fromProtoMsg(message: _92.HeaderProtoMsg): _92.Header;
            toProto(message: _92.Header): Uint8Array;
            toProtoMsg(message: _92.Header): _92.HeaderProtoMsg;
        };
        Data: {
            typeUrl: string;
            is(o: any): o is _92.Data;
            isSDK(o: any): o is _92.DataSDKType;
            isAmino(o: any): o is _92.DataAmino;
            encode(message: _92.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Data;
            fromJSON(object: any): _92.Data;
            toJSON(message: _92.Data): {
                txs: string[];
            };
            fromPartial(object: Partial<_92.Data>): _92.Data;
            fromAmino(object: _92.DataAmino): _92.Data;
            toAmino(message: _92.Data): _92.DataAmino;
            fromAminoMsg(object: _92.DataAminoMsg): _92.Data;
            fromProtoMsg(message: _92.DataProtoMsg): _92.Data;
            toProto(message: _92.Data): Uint8Array;
            toProtoMsg(message: _92.Data): _92.DataProtoMsg;
        };
        Vote: {
            typeUrl: string;
            is(o: any): o is _92.Vote;
            isSDK(o: any): o is _92.VoteSDKType;
            isAmino(o: any): o is _92.VoteAmino;
            encode(message: _92.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Vote;
            fromJSON(object: any): _92.Vote;
            toJSON(message: _92.Vote): {
                type: _92.SignedMsgType;
                height: string;
                round: number;
                blockId: {
                    hash: string;
                    partSetHeader: {
                        total: number;
                        hash: string;
                    };
                };
                timestamp: string;
                validatorAddress: string;
                validatorIndex: number;
                signature: string;
            };
            fromPartial(object: Partial<_92.Vote>): _92.Vote;
            fromAmino(object: _92.VoteAmino): _92.Vote;
            toAmino(message: _92.Vote): _92.VoteAmino;
            fromAminoMsg(object: _92.VoteAminoMsg): _92.Vote;
            fromProtoMsg(message: _92.VoteProtoMsg): _92.Vote;
            toProto(message: _92.Vote): Uint8Array;
            toProtoMsg(message: _92.Vote): _92.VoteProtoMsg;
        };
        Commit: {
            typeUrl: string;
            is(o: any): o is _92.Commit;
            isSDK(o: any): o is _92.CommitSDKType;
            isAmino(o: any): o is _92.CommitAmino;
            encode(message: _92.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Commit;
            fromJSON(object: any): _92.Commit;
            toJSON(message: _92.Commit): {
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
                    blockIdFlag: _92.BlockIDFlag;
                    validatorAddress: string;
                    timestamp: string;
                    signature: string;
                }[];
            };
            fromPartial(object: Partial<_92.Commit>): _92.Commit;
            fromAmino(object: _92.CommitAmino): _92.Commit;
            toAmino(message: _92.Commit): _92.CommitAmino;
            fromAminoMsg(object: _92.CommitAminoMsg): _92.Commit;
            fromProtoMsg(message: _92.CommitProtoMsg): _92.Commit;
            toProto(message: _92.Commit): Uint8Array;
            toProtoMsg(message: _92.Commit): _92.CommitProtoMsg;
        };
        CommitSig: {
            typeUrl: string;
            is(o: any): o is _92.CommitSig;
            isSDK(o: any): o is _92.CommitSigSDKType;
            isAmino(o: any): o is _92.CommitSigAmino;
            encode(message: _92.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.CommitSig;
            fromJSON(object: any): _92.CommitSig;
            toJSON(message: _92.CommitSig): {
                blockIdFlag: _92.BlockIDFlag;
                validatorAddress: string;
                timestamp: string;
                signature: string;
            };
            fromPartial(object: Partial<_92.CommitSig>): _92.CommitSig;
            fromAmino(object: _92.CommitSigAmino): _92.CommitSig;
            toAmino(message: _92.CommitSig): _92.CommitSigAmino;
            fromAminoMsg(object: _92.CommitSigAminoMsg): _92.CommitSig;
            fromProtoMsg(message: _92.CommitSigProtoMsg): _92.CommitSig;
            toProto(message: _92.CommitSig): Uint8Array;
            toProtoMsg(message: _92.CommitSig): _92.CommitSigProtoMsg;
        };
        Proposal: {
            typeUrl: string;
            is(o: any): o is _92.Proposal;
            isSDK(o: any): o is _92.ProposalSDKType;
            isAmino(o: any): o is _92.ProposalAmino;
            encode(message: _92.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Proposal;
            fromJSON(object: any): _92.Proposal;
            toJSON(message: _92.Proposal): {
                type: _92.SignedMsgType;
                height: string;
                round: number;
                polRound: number;
                blockId: {
                    hash: string;
                    partSetHeader: {
                        total: number;
                        hash: string;
                    };
                };
                timestamp: string;
                signature: string;
            };
            fromPartial(object: Partial<_92.Proposal>): _92.Proposal;
            fromAmino(object: _92.ProposalAmino): _92.Proposal;
            toAmino(message: _92.Proposal): _92.ProposalAmino;
            fromAminoMsg(object: _92.ProposalAminoMsg): _92.Proposal;
            fromProtoMsg(message: _92.ProposalProtoMsg): _92.Proposal;
            toProto(message: _92.Proposal): Uint8Array;
            toProtoMsg(message: _92.Proposal): _92.ProposalProtoMsg;
        };
        SignedHeader: {
            typeUrl: string;
            is(o: any): o is _92.SignedHeader;
            isSDK(o: any): o is _92.SignedHeaderSDKType;
            isAmino(o: any): o is _92.SignedHeaderAmino;
            encode(message: _92.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.SignedHeader;
            fromJSON(object: any): _92.SignedHeader;
            toJSON(message: _92.SignedHeader): {
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
                        blockIdFlag: _92.BlockIDFlag;
                        validatorAddress: string;
                        timestamp: string;
                        signature: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_92.SignedHeader>): _92.SignedHeader;
            fromAmino(object: _92.SignedHeaderAmino): _92.SignedHeader;
            toAmino(message: _92.SignedHeader): _92.SignedHeaderAmino;
            fromAminoMsg(object: _92.SignedHeaderAminoMsg): _92.SignedHeader;
            fromProtoMsg(message: _92.SignedHeaderProtoMsg): _92.SignedHeader;
            toProto(message: _92.SignedHeader): Uint8Array;
            toProtoMsg(message: _92.SignedHeader): _92.SignedHeaderProtoMsg;
        };
        LightBlock: {
            typeUrl: string;
            is(o: any): o is _92.LightBlock;
            isSDK(o: any): o is _92.LightBlockSDKType;
            isAmino(o: any): o is _92.LightBlockAmino;
            encode(message: _92.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.LightBlock;
            fromJSON(object: any): _92.LightBlock;
            toJSON(message: _92.LightBlock): {
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
                            blockIdFlag: _92.BlockIDFlag;
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
            };
            fromPartial(object: Partial<_92.LightBlock>): _92.LightBlock;
            fromAmino(object: _92.LightBlockAmino): _92.LightBlock;
            toAmino(message: _92.LightBlock): _92.LightBlockAmino;
            fromAminoMsg(object: _92.LightBlockAminoMsg): _92.LightBlock;
            fromProtoMsg(message: _92.LightBlockProtoMsg): _92.LightBlock;
            toProto(message: _92.LightBlock): Uint8Array;
            toProtoMsg(message: _92.LightBlock): _92.LightBlockProtoMsg;
        };
        BlockMeta: {
            typeUrl: string;
            is(o: any): o is _92.BlockMeta;
            isSDK(o: any): o is _92.BlockMetaSDKType;
            isAmino(o: any): o is _92.BlockMetaAmino;
            encode(message: _92.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.BlockMeta;
            fromJSON(object: any): _92.BlockMeta;
            toJSON(message: _92.BlockMeta): {
                blockId: {
                    hash: string;
                    partSetHeader: {
                        total: number;
                        hash: string;
                    };
                };
                blockSize: string;
                header: {
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
                numTxs: string;
            };
            fromPartial(object: Partial<_92.BlockMeta>): _92.BlockMeta;
            fromAmino(object: _92.BlockMetaAmino): _92.BlockMeta;
            toAmino(message: _92.BlockMeta): _92.BlockMetaAmino;
            fromAminoMsg(object: _92.BlockMetaAminoMsg): _92.BlockMeta;
            fromProtoMsg(message: _92.BlockMetaProtoMsg): _92.BlockMeta;
            toProto(message: _92.BlockMeta): Uint8Array;
            toProtoMsg(message: _92.BlockMeta): _92.BlockMetaProtoMsg;
        };
        TxProof: {
            typeUrl: string;
            is(o: any): o is _92.TxProof;
            isSDK(o: any): o is _92.TxProofSDKType;
            isAmino(o: any): o is _92.TxProofAmino;
            encode(message: _92.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.TxProof;
            fromJSON(object: any): _92.TxProof;
            toJSON(message: _92.TxProof): {
                rootHash: string;
                data: string;
                proof?: {
                    total: string;
                    index: string;
                    leafHash: string;
                    aunts: string[];
                };
            };
            fromPartial(object: Partial<_92.TxProof>): _92.TxProof;
            fromAmino(object: _92.TxProofAmino): _92.TxProof;
            toAmino(message: _92.TxProof): _92.TxProofAmino;
            fromAminoMsg(object: _92.TxProofAminoMsg): _92.TxProof;
            fromProtoMsg(message: _92.TxProofProtoMsg): _92.TxProof;
            toProto(message: _92.TxProof): Uint8Array;
            toProtoMsg(message: _92.TxProof): _92.TxProofProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            is(o: any): o is _91.ConsensusParams;
            isSDK(o: any): o is _91.ConsensusParamsSDKType;
            isAmino(o: any): o is _91.ConsensusParamsAmino;
            encode(message: _91.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.ConsensusParams;
            fromJSON(object: any): _91.ConsensusParams;
            toJSON(message: _91.ConsensusParams): {
                block: {
                    maxBytes: string;
                    maxGas: string;
                    timeIotaMs: string;
                };
                evidence: {
                    maxAgeNumBlocks: string;
                    maxAgeDuration: {
                        seconds: string;
                        nanos: number;
                    };
                    maxBytes: string;
                };
                validator: {
                    pubKeyTypes: string[];
                };
                version: {
                    appVersion: string;
                };
            };
            fromPartial(object: Partial<_91.ConsensusParams>): _91.ConsensusParams;
            fromAmino(object: _91.ConsensusParamsAmino): _91.ConsensusParams;
            toAmino(message: _91.ConsensusParams): _91.ConsensusParamsAmino;
            fromAminoMsg(object: _91.ConsensusParamsAminoMsg): _91.ConsensusParams;
            fromProtoMsg(message: _91.ConsensusParamsProtoMsg): _91.ConsensusParams;
            toProto(message: _91.ConsensusParams): Uint8Array;
            toProtoMsg(message: _91.ConsensusParams): _91.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            is(o: any): o is _91.BlockParams;
            isSDK(o: any): o is _91.BlockParamsSDKType;
            isAmino(o: any): o is _91.BlockParamsAmino;
            encode(message: _91.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.BlockParams;
            fromJSON(object: any): _91.BlockParams;
            toJSON(message: _91.BlockParams): {
                maxBytes: string;
                maxGas: string;
                timeIotaMs: string;
            };
            fromPartial(object: Partial<_91.BlockParams>): _91.BlockParams;
            fromAmino(object: _91.BlockParamsAmino): _91.BlockParams;
            toAmino(message: _91.BlockParams): _91.BlockParamsAmino;
            fromAminoMsg(object: _91.BlockParamsAminoMsg): _91.BlockParams;
            fromProtoMsg(message: _91.BlockParamsProtoMsg): _91.BlockParams;
            toProto(message: _91.BlockParams): Uint8Array;
            toProtoMsg(message: _91.BlockParams): _91.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            typeUrl: string;
            is(o: any): o is _91.EvidenceParams;
            isSDK(o: any): o is _91.EvidenceParamsSDKType;
            isAmino(o: any): o is _91.EvidenceParamsAmino;
            encode(message: _91.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.EvidenceParams;
            fromJSON(object: any): _91.EvidenceParams;
            toJSON(message: _91.EvidenceParams): {
                maxAgeNumBlocks: string;
                maxAgeDuration: {
                    seconds: string;
                    nanos: number;
                };
                maxBytes: string;
            };
            fromPartial(object: Partial<_91.EvidenceParams>): _91.EvidenceParams;
            fromAmino(object: _91.EvidenceParamsAmino): _91.EvidenceParams;
            toAmino(message: _91.EvidenceParams): _91.EvidenceParamsAmino;
            fromAminoMsg(object: _91.EvidenceParamsAminoMsg): _91.EvidenceParams;
            fromProtoMsg(message: _91.EvidenceParamsProtoMsg): _91.EvidenceParams;
            toProto(message: _91.EvidenceParams): Uint8Array;
            toProtoMsg(message: _91.EvidenceParams): _91.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            typeUrl: string;
            is(o: any): o is _91.ValidatorParams;
            isSDK(o: any): o is _91.ValidatorParamsSDKType;
            isAmino(o: any): o is _91.ValidatorParamsAmino;
            encode(message: _91.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.ValidatorParams;
            fromJSON(object: any): _91.ValidatorParams;
            toJSON(message: _91.ValidatorParams): {
                pubKeyTypes: string[];
            };
            fromPartial(object: Partial<_91.ValidatorParams>): _91.ValidatorParams;
            fromAmino(object: _91.ValidatorParamsAmino): _91.ValidatorParams;
            toAmino(message: _91.ValidatorParams): _91.ValidatorParamsAmino;
            fromAminoMsg(object: _91.ValidatorParamsAminoMsg): _91.ValidatorParams;
            fromProtoMsg(message: _91.ValidatorParamsProtoMsg): _91.ValidatorParams;
            toProto(message: _91.ValidatorParams): Uint8Array;
            toProtoMsg(message: _91.ValidatorParams): _91.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            typeUrl: string;
            is(o: any): o is _91.VersionParams;
            isSDK(o: any): o is _91.VersionParamsSDKType;
            isAmino(o: any): o is _91.VersionParamsAmino;
            encode(message: _91.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.VersionParams;
            fromJSON(object: any): _91.VersionParams;
            toJSON(message: _91.VersionParams): {
                appVersion: string;
            };
            fromPartial(object: Partial<_91.VersionParams>): _91.VersionParams;
            fromAmino(object: _91.VersionParamsAmino): _91.VersionParams;
            toAmino(message: _91.VersionParams): _91.VersionParamsAmino;
            fromAminoMsg(object: _91.VersionParamsAminoMsg): _91.VersionParams;
            fromProtoMsg(message: _91.VersionParamsProtoMsg): _91.VersionParams;
            toProto(message: _91.VersionParams): Uint8Array;
            toProtoMsg(message: _91.VersionParams): _91.VersionParamsProtoMsg;
        };
        HashedParams: {
            typeUrl: string;
            is(o: any): o is _91.HashedParams;
            isSDK(o: any): o is _91.HashedParamsSDKType;
            isAmino(o: any): o is _91.HashedParamsAmino;
            encode(message: _91.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.HashedParams;
            fromJSON(object: any): _91.HashedParams;
            toJSON(message: _91.HashedParams): {
                blockMaxBytes: string;
                blockMaxGas: string;
            };
            fromPartial(object: Partial<_91.HashedParams>): _91.HashedParams;
            fromAmino(object: _91.HashedParamsAmino): _91.HashedParams;
            toAmino(message: _91.HashedParams): _91.HashedParamsAmino;
            fromAminoMsg(object: _91.HashedParamsAminoMsg): _91.HashedParams;
            fromProtoMsg(message: _91.HashedParamsProtoMsg): _91.HashedParams;
            toProto(message: _91.HashedParams): Uint8Array;
            toProtoMsg(message: _91.HashedParams): _91.HashedParamsProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            is(o: any): o is _90.Evidence;
            isSDK(o: any): o is _90.EvidenceSDKType;
            isAmino(o: any): o is _90.EvidenceAmino;
            encode(message: _90.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Evidence;
            fromJSON(object: any): _90.Evidence;
            toJSON(message: _90.Evidence): {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type: _92.SignedMsgType;
                        height: string;
                        round: number;
                        blockId: {
                            hash: string;
                            partSetHeader: {
                                total: number;
                                hash: string;
                            };
                        };
                        timestamp: string;
                        validatorAddress: string;
                        validatorIndex: number;
                        signature: string;
                    };
                    voteB?: {
                        type: _92.SignedMsgType;
                        height: string;
                        round: number;
                        blockId: {
                            hash: string;
                            partSetHeader: {
                                total: number;
                                hash: string;
                            };
                        };
                        timestamp: string;
                        validatorAddress: string;
                        validatorIndex: number;
                        signature: string;
                    };
                    totalVotingPower: string;
                    validatorPower: string;
                    timestamp: string;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
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
                                    blockIdFlag: _92.BlockIDFlag;
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
                    };
                    commonHeight: string;
                    byzantineValidators: {
                        address: string;
                        pubKey: {
                            ed25519?: string;
                            secp256k1?: string;
                        };
                        votingPower: string;
                        proposerPriority: string;
                    }[];
                    totalVotingPower: string;
                    timestamp: string;
                };
            };
            fromPartial(object: Partial<_90.Evidence>): _90.Evidence;
            fromAmino(object: _90.EvidenceAmino): _90.Evidence;
            toAmino(message: _90.Evidence): _90.EvidenceAmino;
            fromAminoMsg(object: _90.EvidenceAminoMsg): _90.Evidence;
            fromProtoMsg(message: _90.EvidenceProtoMsg): _90.Evidence;
            toProto(message: _90.Evidence): Uint8Array;
            toProtoMsg(message: _90.Evidence): _90.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            typeUrl: string;
            is(o: any): o is _90.DuplicateVoteEvidence;
            isSDK(o: any): o is _90.DuplicateVoteEvidenceSDKType;
            isAmino(o: any): o is _90.DuplicateVoteEvidenceAmino;
            encode(message: _90.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.DuplicateVoteEvidence;
            fromJSON(object: any): _90.DuplicateVoteEvidence;
            toJSON(message: _90.DuplicateVoteEvidence): {
                voteA?: {
                    type: _92.SignedMsgType;
                    height: string;
                    round: number;
                    blockId: {
                        hash: string;
                        partSetHeader: {
                            total: number;
                            hash: string;
                        };
                    };
                    timestamp: string;
                    validatorAddress: string;
                    validatorIndex: number;
                    signature: string;
                };
                voteB?: {
                    type: _92.SignedMsgType;
                    height: string;
                    round: number;
                    blockId: {
                        hash: string;
                        partSetHeader: {
                            total: number;
                            hash: string;
                        };
                    };
                    timestamp: string;
                    validatorAddress: string;
                    validatorIndex: number;
                    signature: string;
                };
                totalVotingPower: string;
                validatorPower: string;
                timestamp: string;
            };
            fromPartial(object: Partial<_90.DuplicateVoteEvidence>): _90.DuplicateVoteEvidence;
            fromAmino(object: _90.DuplicateVoteEvidenceAmino): _90.DuplicateVoteEvidence;
            toAmino(message: _90.DuplicateVoteEvidence): _90.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _90.DuplicateVoteEvidenceAminoMsg): _90.DuplicateVoteEvidence;
            fromProtoMsg(message: _90.DuplicateVoteEvidenceProtoMsg): _90.DuplicateVoteEvidence;
            toProto(message: _90.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _90.DuplicateVoteEvidence): _90.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            typeUrl: string;
            is(o: any): o is _90.LightClientAttackEvidence;
            isSDK(o: any): o is _90.LightClientAttackEvidenceSDKType;
            isAmino(o: any): o is _90.LightClientAttackEvidenceAmino;
            encode(message: _90.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.LightClientAttackEvidence;
            fromJSON(object: any): _90.LightClientAttackEvidence;
            toJSON(message: _90.LightClientAttackEvidence): {
                conflictingBlock?: {
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
                                blockIdFlag: _92.BlockIDFlag;
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
                };
                commonHeight: string;
                byzantineValidators: {
                    address: string;
                    pubKey: {
                        ed25519?: string;
                        secp256k1?: string;
                    };
                    votingPower: string;
                    proposerPriority: string;
                }[];
                totalVotingPower: string;
                timestamp: string;
            };
            fromPartial(object: Partial<_90.LightClientAttackEvidence>): _90.LightClientAttackEvidence;
            fromAmino(object: _90.LightClientAttackEvidenceAmino): _90.LightClientAttackEvidence;
            toAmino(message: _90.LightClientAttackEvidence): _90.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _90.LightClientAttackEvidenceAminoMsg): _90.LightClientAttackEvidence;
            fromProtoMsg(message: _90.LightClientAttackEvidenceProtoMsg): _90.LightClientAttackEvidence;
            toProto(message: _90.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _90.LightClientAttackEvidence): _90.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            typeUrl: string;
            is(o: any): o is _90.EvidenceList;
            isSDK(o: any): o is _90.EvidenceListSDKType;
            isAmino(o: any): o is _90.EvidenceListAmino;
            encode(message: _90.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.EvidenceList;
            fromJSON(object: any): _90.EvidenceList;
            toJSON(message: _90.EvidenceList): {
                evidence: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type: _92.SignedMsgType;
                            height: string;
                            round: number;
                            blockId: {
                                hash: string;
                                partSetHeader: {
                                    total: number;
                                    hash: string;
                                };
                            };
                            timestamp: string;
                            validatorAddress: string;
                            validatorIndex: number;
                            signature: string;
                        };
                        voteB?: {
                            type: _92.SignedMsgType;
                            height: string;
                            round: number;
                            blockId: {
                                hash: string;
                                partSetHeader: {
                                    total: number;
                                    hash: string;
                                };
                            };
                            timestamp: string;
                            validatorAddress: string;
                            validatorIndex: number;
                            signature: string;
                        };
                        totalVotingPower: string;
                        validatorPower: string;
                        timestamp: string;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
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
                                        blockIdFlag: _92.BlockIDFlag;
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
                        };
                        commonHeight: string;
                        byzantineValidators: {
                            address: string;
                            pubKey: {
                                ed25519?: string;
                                secp256k1?: string;
                            };
                            votingPower: string;
                            proposerPriority: string;
                        }[];
                        totalVotingPower: string;
                        timestamp: string;
                    };
                }[];
            };
            fromPartial(object: Partial<_90.EvidenceList>): _90.EvidenceList;
            fromAmino(object: _90.EvidenceListAmino): _90.EvidenceList;
            toAmino(message: _90.EvidenceList): _90.EvidenceListAmino;
            fromAminoMsg(object: _90.EvidenceListAminoMsg): _90.EvidenceList;
            fromProtoMsg(message: _90.EvidenceListProtoMsg): _90.EvidenceList;
            toProto(message: _90.EvidenceList): Uint8Array;
            toProtoMsg(message: _90.EvidenceList): _90.EvidenceListProtoMsg;
        };
        Block: {
            typeUrl: string;
            is(o: any): o is _89.Block;
            isSDK(o: any): o is _89.BlockSDKType;
            isAmino(o: any): o is _89.BlockAmino;
            encode(message: _89.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Block;
            fromJSON(object: any): _89.Block;
            toJSON(message: _89.Block): {
                header: {
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
                data: {
                    txs: string[];
                };
                evidence: {
                    evidence: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type: _92.SignedMsgType;
                                height: string;
                                round: number;
                                blockId: {
                                    hash: string;
                                    partSetHeader: {
                                        total: number;
                                        hash: string;
                                    };
                                };
                                timestamp: string;
                                validatorAddress: string;
                                validatorIndex: number;
                                signature: string;
                            };
                            voteB?: {
                                type: _92.SignedMsgType;
                                height: string;
                                round: number;
                                blockId: {
                                    hash: string;
                                    partSetHeader: {
                                        total: number;
                                        hash: string;
                                    };
                                };
                                timestamp: string;
                                validatorAddress: string;
                                validatorIndex: number;
                                signature: string;
                            };
                            totalVotingPower: string;
                            validatorPower: string;
                            timestamp: string;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
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
                                            blockIdFlag: _92.BlockIDFlag;
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
                            };
                            commonHeight: string;
                            byzantineValidators: {
                                address: string;
                                pubKey: {
                                    ed25519?: string;
                                    secp256k1?: string;
                                };
                                votingPower: string;
                                proposerPriority: string;
                            }[];
                            totalVotingPower: string;
                            timestamp: string;
                        };
                    }[];
                };
                lastCommit?: {
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
                        blockIdFlag: _92.BlockIDFlag;
                        validatorAddress: string;
                        timestamp: string;
                        signature: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_89.Block>): _89.Block;
            fromAmino(object: _89.BlockAmino): _89.Block;
            toAmino(message: _89.Block): _89.BlockAmino;
            fromAminoMsg(object: _89.BlockAminoMsg): _89.Block;
            fromProtoMsg(message: _89.BlockProtoMsg): _89.Block;
            toProto(message: _89.Block): Uint8Array;
            toProtoMsg(message: _89.Block): _89.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            typeUrl: string;
            is(o: any): o is _94.App;
            isSDK(o: any): o is _94.AppSDKType;
            isAmino(o: any): o is _94.AppAmino;
            encode(message: _94.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.App;
            fromJSON(object: any): _94.App;
            toJSON(message: _94.App): {
                protocol: string;
                software: string;
            };
            fromPartial(object: Partial<_94.App>): _94.App;
            fromAmino(object: _94.AppAmino): _94.App;
            toAmino(message: _94.App): _94.AppAmino;
            fromAminoMsg(object: _94.AppAminoMsg): _94.App;
            fromProtoMsg(message: _94.AppProtoMsg): _94.App;
            toProto(message: _94.App): Uint8Array;
            toProtoMsg(message: _94.App): _94.AppProtoMsg;
        };
        Consensus: {
            typeUrl: string;
            is(o: any): o is _94.Consensus;
            isSDK(o: any): o is _94.ConsensusSDKType;
            isAmino(o: any): o is _94.ConsensusAmino;
            encode(message: _94.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Consensus;
            fromJSON(object: any): _94.Consensus;
            toJSON(message: _94.Consensus): {
                block: string;
                app: string;
            };
            fromPartial(object: Partial<_94.Consensus>): _94.Consensus;
            fromAmino(object: _94.ConsensusAmino): _94.Consensus;
            toAmino(message: _94.Consensus): _94.ConsensusAmino;
            fromAminoMsg(object: _94.ConsensusAminoMsg): _94.Consensus;
            fromProtoMsg(message: _94.ConsensusProtoMsg): _94.Consensus;
            toProto(message: _94.Consensus): Uint8Array;
            toProtoMsg(message: _94.Consensus): _94.ConsensusProtoMsg;
        };
    };
}
