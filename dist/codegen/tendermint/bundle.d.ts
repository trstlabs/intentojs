import * as _82 from "./abci/types";
import * as _83 from "./crypto/keys";
import * as _84 from "./crypto/proof";
import * as _85 from "./libs/bits/types";
import * as _86 from "./p2p/types";
import * as _87 from "./types/block";
import * as _88 from "./types/evidence";
import * as _89 from "./types/params";
import * as _90 from "./types/types";
import * as _91 from "./types/validator";
import * as _92 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _82.CheckTxType;
        checkTxTypeToJSON(object: _82.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _82.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _82.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _82.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _82.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _82.EvidenceType;
        evidenceTypeToJSON(object: _82.EvidenceType): string;
        CheckTxType: typeof _82.CheckTxType;
        CheckTxTypeSDKType: typeof _82.CheckTxType;
        CheckTxTypeAmino: typeof _82.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _82.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _82.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultAmino: typeof _82.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _82.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _82.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultAmino: typeof _82.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _82.EvidenceType;
        EvidenceTypeSDKType: typeof _82.EvidenceType;
        EvidenceTypeAmino: typeof _82.EvidenceType;
        Request: {
            typeUrl: string;
            is(o: any): o is _82.Request;
            isSDK(o: any): o is _82.RequestSDKType;
            isAmino(o: any): o is _82.RequestAmino;
            encode(message: _82.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Request;
            fromJSON(object: any): _82.Request;
            toJSON(message: _82.Request): {
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
                        type: _82.EvidenceType;
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
                    type: _82.CheckTxType;
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
            fromPartial(object: Partial<_82.Request>): _82.Request;
            fromAmino(object: _82.RequestAmino): _82.Request;
            toAmino(message: _82.Request): _82.RequestAmino;
            fromAminoMsg(object: _82.RequestAminoMsg): _82.Request;
            fromProtoMsg(message: _82.RequestProtoMsg): _82.Request;
            toProto(message: _82.Request): Uint8Array;
            toProtoMsg(message: _82.Request): _82.RequestProtoMsg;
        };
        RequestEcho: {
            typeUrl: string;
            is(o: any): o is _82.RequestEcho;
            isSDK(o: any): o is _82.RequestEchoSDKType;
            isAmino(o: any): o is _82.RequestEchoAmino;
            encode(message: _82.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestEcho;
            fromJSON(object: any): _82.RequestEcho;
            toJSON(message: _82.RequestEcho): {
                message: string;
            };
            fromPartial(object: Partial<_82.RequestEcho>): _82.RequestEcho;
            fromAmino(object: _82.RequestEchoAmino): _82.RequestEcho;
            toAmino(message: _82.RequestEcho): _82.RequestEchoAmino;
            fromAminoMsg(object: _82.RequestEchoAminoMsg): _82.RequestEcho;
            fromProtoMsg(message: _82.RequestEchoProtoMsg): _82.RequestEcho;
            toProto(message: _82.RequestEcho): Uint8Array;
            toProtoMsg(message: _82.RequestEcho): _82.RequestEchoProtoMsg;
        };
        RequestFlush: {
            typeUrl: string;
            is(o: any): o is _82.RequestFlush;
            isSDK(o: any): o is _82.RequestFlushSDKType;
            isAmino(o: any): o is _82.RequestFlushAmino;
            encode(_: _82.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestFlush;
            fromJSON(_: any): _82.RequestFlush;
            toJSON(_: _82.RequestFlush): {};
            fromPartial(_: Partial<_82.RequestFlush>): _82.RequestFlush;
            fromAmino(_: _82.RequestFlushAmino): _82.RequestFlush;
            toAmino(_: _82.RequestFlush): _82.RequestFlushAmino;
            fromAminoMsg(object: _82.RequestFlushAminoMsg): _82.RequestFlush;
            fromProtoMsg(message: _82.RequestFlushProtoMsg): _82.RequestFlush;
            toProto(message: _82.RequestFlush): Uint8Array;
            toProtoMsg(message: _82.RequestFlush): _82.RequestFlushProtoMsg;
        };
        RequestInfo: {
            typeUrl: string;
            is(o: any): o is _82.RequestInfo;
            isSDK(o: any): o is _82.RequestInfoSDKType;
            isAmino(o: any): o is _82.RequestInfoAmino;
            encode(message: _82.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestInfo;
            fromJSON(object: any): _82.RequestInfo;
            toJSON(message: _82.RequestInfo): {
                version: string;
                blockVersion: string;
                p2pVersion: string;
            };
            fromPartial(object: Partial<_82.RequestInfo>): _82.RequestInfo;
            fromAmino(object: _82.RequestInfoAmino): _82.RequestInfo;
            toAmino(message: _82.RequestInfo): _82.RequestInfoAmino;
            fromAminoMsg(object: _82.RequestInfoAminoMsg): _82.RequestInfo;
            fromProtoMsg(message: _82.RequestInfoProtoMsg): _82.RequestInfo;
            toProto(message: _82.RequestInfo): Uint8Array;
            toProtoMsg(message: _82.RequestInfo): _82.RequestInfoProtoMsg;
        };
        RequestSetOption: {
            typeUrl: string;
            is(o: any): o is _82.RequestSetOption;
            isSDK(o: any): o is _82.RequestSetOptionSDKType;
            isAmino(o: any): o is _82.RequestSetOptionAmino;
            encode(message: _82.RequestSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestSetOption;
            fromJSON(object: any): _82.RequestSetOption;
            toJSON(message: _82.RequestSetOption): {
                key: string;
                value: string;
            };
            fromPartial(object: Partial<_82.RequestSetOption>): _82.RequestSetOption;
            fromAmino(object: _82.RequestSetOptionAmino): _82.RequestSetOption;
            toAmino(message: _82.RequestSetOption): _82.RequestSetOptionAmino;
            fromAminoMsg(object: _82.RequestSetOptionAminoMsg): _82.RequestSetOption;
            fromProtoMsg(message: _82.RequestSetOptionProtoMsg): _82.RequestSetOption;
            toProto(message: _82.RequestSetOption): Uint8Array;
            toProtoMsg(message: _82.RequestSetOption): _82.RequestSetOptionProtoMsg;
        };
        RequestInitChain: {
            typeUrl: string;
            is(o: any): o is _82.RequestInitChain;
            isSDK(o: any): o is _82.RequestInitChainSDKType;
            isAmino(o: any): o is _82.RequestInitChainAmino;
            encode(message: _82.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestInitChain;
            fromJSON(object: any): _82.RequestInitChain;
            toJSON(message: _82.RequestInitChain): {
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
            fromPartial(object: Partial<_82.RequestInitChain>): _82.RequestInitChain;
            fromAmino(object: _82.RequestInitChainAmino): _82.RequestInitChain;
            toAmino(message: _82.RequestInitChain): _82.RequestInitChainAmino;
            fromAminoMsg(object: _82.RequestInitChainAminoMsg): _82.RequestInitChain;
            fromProtoMsg(message: _82.RequestInitChainProtoMsg): _82.RequestInitChain;
            toProto(message: _82.RequestInitChain): Uint8Array;
            toProtoMsg(message: _82.RequestInitChain): _82.RequestInitChainProtoMsg;
        };
        RequestQuery: {
            typeUrl: string;
            is(o: any): o is _82.RequestQuery;
            isSDK(o: any): o is _82.RequestQuerySDKType;
            isAmino(o: any): o is _82.RequestQueryAmino;
            encode(message: _82.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestQuery;
            fromJSON(object: any): _82.RequestQuery;
            toJSON(message: _82.RequestQuery): {
                data: string;
                path: string;
                height: string;
                prove: boolean;
            };
            fromPartial(object: Partial<_82.RequestQuery>): _82.RequestQuery;
            fromAmino(object: _82.RequestQueryAmino): _82.RequestQuery;
            toAmino(message: _82.RequestQuery): _82.RequestQueryAmino;
            fromAminoMsg(object: _82.RequestQueryAminoMsg): _82.RequestQuery;
            fromProtoMsg(message: _82.RequestQueryProtoMsg): _82.RequestQuery;
            toProto(message: _82.RequestQuery): Uint8Array;
            toProtoMsg(message: _82.RequestQuery): _82.RequestQueryProtoMsg;
        };
        RequestBeginBlock: {
            typeUrl: string;
            is(o: any): o is _82.RequestBeginBlock;
            isSDK(o: any): o is _82.RequestBeginBlockSDKType;
            isAmino(o: any): o is _82.RequestBeginBlockAmino;
            encode(message: _82.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestBeginBlock;
            fromJSON(object: any): _82.RequestBeginBlock;
            toJSON(message: _82.RequestBeginBlock): {
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
                    type: _82.EvidenceType;
                    validator: {
                        address: string;
                        power: string;
                    };
                    height: string;
                    time: string;
                    totalVotingPower: string;
                }[];
            };
            fromPartial(object: Partial<_82.RequestBeginBlock>): _82.RequestBeginBlock;
            fromAmino(object: _82.RequestBeginBlockAmino): _82.RequestBeginBlock;
            toAmino(message: _82.RequestBeginBlock): _82.RequestBeginBlockAmino;
            fromAminoMsg(object: _82.RequestBeginBlockAminoMsg): _82.RequestBeginBlock;
            fromProtoMsg(message: _82.RequestBeginBlockProtoMsg): _82.RequestBeginBlock;
            toProto(message: _82.RequestBeginBlock): Uint8Array;
            toProtoMsg(message: _82.RequestBeginBlock): _82.RequestBeginBlockProtoMsg;
        };
        RequestCheckTx: {
            typeUrl: string;
            is(o: any): o is _82.RequestCheckTx;
            isSDK(o: any): o is _82.RequestCheckTxSDKType;
            isAmino(o: any): o is _82.RequestCheckTxAmino;
            encode(message: _82.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestCheckTx;
            fromJSON(object: any): _82.RequestCheckTx;
            toJSON(message: _82.RequestCheckTx): {
                tx: string;
                type: _82.CheckTxType;
            };
            fromPartial(object: Partial<_82.RequestCheckTx>): _82.RequestCheckTx;
            fromAmino(object: _82.RequestCheckTxAmino): _82.RequestCheckTx;
            toAmino(message: _82.RequestCheckTx): _82.RequestCheckTxAmino;
            fromAminoMsg(object: _82.RequestCheckTxAminoMsg): _82.RequestCheckTx;
            fromProtoMsg(message: _82.RequestCheckTxProtoMsg): _82.RequestCheckTx;
            toProto(message: _82.RequestCheckTx): Uint8Array;
            toProtoMsg(message: _82.RequestCheckTx): _82.RequestCheckTxProtoMsg;
        };
        RequestDeliverTx: {
            typeUrl: string;
            is(o: any): o is _82.RequestDeliverTx;
            isSDK(o: any): o is _82.RequestDeliverTxSDKType;
            isAmino(o: any): o is _82.RequestDeliverTxAmino;
            encode(message: _82.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestDeliverTx;
            fromJSON(object: any): _82.RequestDeliverTx;
            toJSON(message: _82.RequestDeliverTx): {
                tx: string;
            };
            fromPartial(object: Partial<_82.RequestDeliverTx>): _82.RequestDeliverTx;
            fromAmino(object: _82.RequestDeliverTxAmino): _82.RequestDeliverTx;
            toAmino(message: _82.RequestDeliverTx): _82.RequestDeliverTxAmino;
            fromAminoMsg(object: _82.RequestDeliverTxAminoMsg): _82.RequestDeliverTx;
            fromProtoMsg(message: _82.RequestDeliverTxProtoMsg): _82.RequestDeliverTx;
            toProto(message: _82.RequestDeliverTx): Uint8Array;
            toProtoMsg(message: _82.RequestDeliverTx): _82.RequestDeliverTxProtoMsg;
        };
        RequestEndBlock: {
            typeUrl: string;
            is(o: any): o is _82.RequestEndBlock;
            isSDK(o: any): o is _82.RequestEndBlockSDKType;
            isAmino(o: any): o is _82.RequestEndBlockAmino;
            encode(message: _82.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestEndBlock;
            fromJSON(object: any): _82.RequestEndBlock;
            toJSON(message: _82.RequestEndBlock): {
                height: string;
            };
            fromPartial(object: Partial<_82.RequestEndBlock>): _82.RequestEndBlock;
            fromAmino(object: _82.RequestEndBlockAmino): _82.RequestEndBlock;
            toAmino(message: _82.RequestEndBlock): _82.RequestEndBlockAmino;
            fromAminoMsg(object: _82.RequestEndBlockAminoMsg): _82.RequestEndBlock;
            fromProtoMsg(message: _82.RequestEndBlockProtoMsg): _82.RequestEndBlock;
            toProto(message: _82.RequestEndBlock): Uint8Array;
            toProtoMsg(message: _82.RequestEndBlock): _82.RequestEndBlockProtoMsg;
        };
        RequestCommit: {
            typeUrl: string;
            is(o: any): o is _82.RequestCommit;
            isSDK(o: any): o is _82.RequestCommitSDKType;
            isAmino(o: any): o is _82.RequestCommitAmino;
            encode(_: _82.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestCommit;
            fromJSON(_: any): _82.RequestCommit;
            toJSON(_: _82.RequestCommit): {};
            fromPartial(_: Partial<_82.RequestCommit>): _82.RequestCommit;
            fromAmino(_: _82.RequestCommitAmino): _82.RequestCommit;
            toAmino(_: _82.RequestCommit): _82.RequestCommitAmino;
            fromAminoMsg(object: _82.RequestCommitAminoMsg): _82.RequestCommit;
            fromProtoMsg(message: _82.RequestCommitProtoMsg): _82.RequestCommit;
            toProto(message: _82.RequestCommit): Uint8Array;
            toProtoMsg(message: _82.RequestCommit): _82.RequestCommitProtoMsg;
        };
        RequestListSnapshots: {
            typeUrl: string;
            is(o: any): o is _82.RequestListSnapshots;
            isSDK(o: any): o is _82.RequestListSnapshotsSDKType;
            isAmino(o: any): o is _82.RequestListSnapshotsAmino;
            encode(_: _82.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestListSnapshots;
            fromJSON(_: any): _82.RequestListSnapshots;
            toJSON(_: _82.RequestListSnapshots): {};
            fromPartial(_: Partial<_82.RequestListSnapshots>): _82.RequestListSnapshots;
            fromAmino(_: _82.RequestListSnapshotsAmino): _82.RequestListSnapshots;
            toAmino(_: _82.RequestListSnapshots): _82.RequestListSnapshotsAmino;
            fromAminoMsg(object: _82.RequestListSnapshotsAminoMsg): _82.RequestListSnapshots;
            fromProtoMsg(message: _82.RequestListSnapshotsProtoMsg): _82.RequestListSnapshots;
            toProto(message: _82.RequestListSnapshots): Uint8Array;
            toProtoMsg(message: _82.RequestListSnapshots): _82.RequestListSnapshotsProtoMsg;
        };
        RequestOfferSnapshot: {
            typeUrl: string;
            is(o: any): o is _82.RequestOfferSnapshot;
            isSDK(o: any): o is _82.RequestOfferSnapshotSDKType;
            isAmino(o: any): o is _82.RequestOfferSnapshotAmino;
            encode(message: _82.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestOfferSnapshot;
            fromJSON(object: any): _82.RequestOfferSnapshot;
            toJSON(message: _82.RequestOfferSnapshot): {
                snapshot?: {
                    height: string;
                    format: number;
                    chunks: number;
                    hash: string;
                    metadata: string;
                };
                appHash: string;
            };
            fromPartial(object: Partial<_82.RequestOfferSnapshot>): _82.RequestOfferSnapshot;
            fromAmino(object: _82.RequestOfferSnapshotAmino): _82.RequestOfferSnapshot;
            toAmino(message: _82.RequestOfferSnapshot): _82.RequestOfferSnapshotAmino;
            fromAminoMsg(object: _82.RequestOfferSnapshotAminoMsg): _82.RequestOfferSnapshot;
            fromProtoMsg(message: _82.RequestOfferSnapshotProtoMsg): _82.RequestOfferSnapshot;
            toProto(message: _82.RequestOfferSnapshot): Uint8Array;
            toProtoMsg(message: _82.RequestOfferSnapshot): _82.RequestOfferSnapshotProtoMsg;
        };
        RequestLoadSnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _82.RequestLoadSnapshotChunk;
            isSDK(o: any): o is _82.RequestLoadSnapshotChunkSDKType;
            isAmino(o: any): o is _82.RequestLoadSnapshotChunkAmino;
            encode(message: _82.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestLoadSnapshotChunk;
            fromJSON(object: any): _82.RequestLoadSnapshotChunk;
            toJSON(message: _82.RequestLoadSnapshotChunk): {
                height: string;
                format: number;
                chunk: number;
            };
            fromPartial(object: Partial<_82.RequestLoadSnapshotChunk>): _82.RequestLoadSnapshotChunk;
            fromAmino(object: _82.RequestLoadSnapshotChunkAmino): _82.RequestLoadSnapshotChunk;
            toAmino(message: _82.RequestLoadSnapshotChunk): _82.RequestLoadSnapshotChunkAmino;
            fromAminoMsg(object: _82.RequestLoadSnapshotChunkAminoMsg): _82.RequestLoadSnapshotChunk;
            fromProtoMsg(message: _82.RequestLoadSnapshotChunkProtoMsg): _82.RequestLoadSnapshotChunk;
            toProto(message: _82.RequestLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _82.RequestLoadSnapshotChunk): _82.RequestLoadSnapshotChunkProtoMsg;
        };
        RequestApplySnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _82.RequestApplySnapshotChunk;
            isSDK(o: any): o is _82.RequestApplySnapshotChunkSDKType;
            isAmino(o: any): o is _82.RequestApplySnapshotChunkAmino;
            encode(message: _82.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.RequestApplySnapshotChunk;
            fromJSON(object: any): _82.RequestApplySnapshotChunk;
            toJSON(message: _82.RequestApplySnapshotChunk): {
                index: number;
                chunk: string;
                sender: string;
            };
            fromPartial(object: Partial<_82.RequestApplySnapshotChunk>): _82.RequestApplySnapshotChunk;
            fromAmino(object: _82.RequestApplySnapshotChunkAmino): _82.RequestApplySnapshotChunk;
            toAmino(message: _82.RequestApplySnapshotChunk): _82.RequestApplySnapshotChunkAmino;
            fromAminoMsg(object: _82.RequestApplySnapshotChunkAminoMsg): _82.RequestApplySnapshotChunk;
            fromProtoMsg(message: _82.RequestApplySnapshotChunkProtoMsg): _82.RequestApplySnapshotChunk;
            toProto(message: _82.RequestApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _82.RequestApplySnapshotChunk): _82.RequestApplySnapshotChunkProtoMsg;
        };
        Response: {
            typeUrl: string;
            is(o: any): o is _82.Response;
            isSDK(o: any): o is _82.ResponseSDKType;
            isAmino(o: any): o is _82.ResponseAmino;
            encode(message: _82.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Response;
            fromJSON(object: any): _82.Response;
            toJSON(message: _82.Response): {
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
                    result: _82.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk: string;
                };
                applySnapshotChunk?: {
                    result: _82.ResponseApplySnapshotChunk_Result;
                    refetchChunks: number[];
                    rejectSenders: string[];
                };
            };
            fromPartial(object: Partial<_82.Response>): _82.Response;
            fromAmino(object: _82.ResponseAmino): _82.Response;
            toAmino(message: _82.Response): _82.ResponseAmino;
            fromAminoMsg(object: _82.ResponseAminoMsg): _82.Response;
            fromProtoMsg(message: _82.ResponseProtoMsg): _82.Response;
            toProto(message: _82.Response): Uint8Array;
            toProtoMsg(message: _82.Response): _82.ResponseProtoMsg;
        };
        ResponseException: {
            typeUrl: string;
            is(o: any): o is _82.ResponseException;
            isSDK(o: any): o is _82.ResponseExceptionSDKType;
            isAmino(o: any): o is _82.ResponseExceptionAmino;
            encode(message: _82.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseException;
            fromJSON(object: any): _82.ResponseException;
            toJSON(message: _82.ResponseException): {
                error: string;
            };
            fromPartial(object: Partial<_82.ResponseException>): _82.ResponseException;
            fromAmino(object: _82.ResponseExceptionAmino): _82.ResponseException;
            toAmino(message: _82.ResponseException): _82.ResponseExceptionAmino;
            fromAminoMsg(object: _82.ResponseExceptionAminoMsg): _82.ResponseException;
            fromProtoMsg(message: _82.ResponseExceptionProtoMsg): _82.ResponseException;
            toProto(message: _82.ResponseException): Uint8Array;
            toProtoMsg(message: _82.ResponseException): _82.ResponseExceptionProtoMsg;
        };
        ResponseEcho: {
            typeUrl: string;
            is(o: any): o is _82.ResponseEcho;
            isSDK(o: any): o is _82.ResponseEchoSDKType;
            isAmino(o: any): o is _82.ResponseEchoAmino;
            encode(message: _82.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseEcho;
            fromJSON(object: any): _82.ResponseEcho;
            toJSON(message: _82.ResponseEcho): {
                message: string;
            };
            fromPartial(object: Partial<_82.ResponseEcho>): _82.ResponseEcho;
            fromAmino(object: _82.ResponseEchoAmino): _82.ResponseEcho;
            toAmino(message: _82.ResponseEcho): _82.ResponseEchoAmino;
            fromAminoMsg(object: _82.ResponseEchoAminoMsg): _82.ResponseEcho;
            fromProtoMsg(message: _82.ResponseEchoProtoMsg): _82.ResponseEcho;
            toProto(message: _82.ResponseEcho): Uint8Array;
            toProtoMsg(message: _82.ResponseEcho): _82.ResponseEchoProtoMsg;
        };
        ResponseFlush: {
            typeUrl: string;
            is(o: any): o is _82.ResponseFlush;
            isSDK(o: any): o is _82.ResponseFlushSDKType;
            isAmino(o: any): o is _82.ResponseFlushAmino;
            encode(_: _82.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseFlush;
            fromJSON(_: any): _82.ResponseFlush;
            toJSON(_: _82.ResponseFlush): {};
            fromPartial(_: Partial<_82.ResponseFlush>): _82.ResponseFlush;
            fromAmino(_: _82.ResponseFlushAmino): _82.ResponseFlush;
            toAmino(_: _82.ResponseFlush): _82.ResponseFlushAmino;
            fromAminoMsg(object: _82.ResponseFlushAminoMsg): _82.ResponseFlush;
            fromProtoMsg(message: _82.ResponseFlushProtoMsg): _82.ResponseFlush;
            toProto(message: _82.ResponseFlush): Uint8Array;
            toProtoMsg(message: _82.ResponseFlush): _82.ResponseFlushProtoMsg;
        };
        ResponseInfo: {
            typeUrl: string;
            is(o: any): o is _82.ResponseInfo;
            isSDK(o: any): o is _82.ResponseInfoSDKType;
            isAmino(o: any): o is _82.ResponseInfoAmino;
            encode(message: _82.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseInfo;
            fromJSON(object: any): _82.ResponseInfo;
            toJSON(message: _82.ResponseInfo): {
                data: string;
                version: string;
                appVersion: string;
                lastBlockHeight: string;
                lastBlockAppHash: string;
            };
            fromPartial(object: Partial<_82.ResponseInfo>): _82.ResponseInfo;
            fromAmino(object: _82.ResponseInfoAmino): _82.ResponseInfo;
            toAmino(message: _82.ResponseInfo): _82.ResponseInfoAmino;
            fromAminoMsg(object: _82.ResponseInfoAminoMsg): _82.ResponseInfo;
            fromProtoMsg(message: _82.ResponseInfoProtoMsg): _82.ResponseInfo;
            toProto(message: _82.ResponseInfo): Uint8Array;
            toProtoMsg(message: _82.ResponseInfo): _82.ResponseInfoProtoMsg;
        };
        ResponseSetOption: {
            typeUrl: string;
            is(o: any): o is _82.ResponseSetOption;
            isSDK(o: any): o is _82.ResponseSetOptionSDKType;
            isAmino(o: any): o is _82.ResponseSetOptionAmino;
            encode(message: _82.ResponseSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseSetOption;
            fromJSON(object: any): _82.ResponseSetOption;
            toJSON(message: _82.ResponseSetOption): {
                code: number;
                log: string;
                info: string;
            };
            fromPartial(object: Partial<_82.ResponseSetOption>): _82.ResponseSetOption;
            fromAmino(object: _82.ResponseSetOptionAmino): _82.ResponseSetOption;
            toAmino(message: _82.ResponseSetOption): _82.ResponseSetOptionAmino;
            fromAminoMsg(object: _82.ResponseSetOptionAminoMsg): _82.ResponseSetOption;
            fromProtoMsg(message: _82.ResponseSetOptionProtoMsg): _82.ResponseSetOption;
            toProto(message: _82.ResponseSetOption): Uint8Array;
            toProtoMsg(message: _82.ResponseSetOption): _82.ResponseSetOptionProtoMsg;
        };
        ResponseInitChain: {
            typeUrl: string;
            is(o: any): o is _82.ResponseInitChain;
            isSDK(o: any): o is _82.ResponseInitChainSDKType;
            isAmino(o: any): o is _82.ResponseInitChainAmino;
            encode(message: _82.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseInitChain;
            fromJSON(object: any): _82.ResponseInitChain;
            toJSON(message: _82.ResponseInitChain): {
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
            fromPartial(object: Partial<_82.ResponseInitChain>): _82.ResponseInitChain;
            fromAmino(object: _82.ResponseInitChainAmino): _82.ResponseInitChain;
            toAmino(message: _82.ResponseInitChain): _82.ResponseInitChainAmino;
            fromAminoMsg(object: _82.ResponseInitChainAminoMsg): _82.ResponseInitChain;
            fromProtoMsg(message: _82.ResponseInitChainProtoMsg): _82.ResponseInitChain;
            toProto(message: _82.ResponseInitChain): Uint8Array;
            toProtoMsg(message: _82.ResponseInitChain): _82.ResponseInitChainProtoMsg;
        };
        ResponseQuery: {
            typeUrl: string;
            is(o: any): o is _82.ResponseQuery;
            isSDK(o: any): o is _82.ResponseQuerySDKType;
            isAmino(o: any): o is _82.ResponseQueryAmino;
            encode(message: _82.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseQuery;
            fromJSON(object: any): _82.ResponseQuery;
            toJSON(message: _82.ResponseQuery): {
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
            fromPartial(object: Partial<_82.ResponseQuery>): _82.ResponseQuery;
            fromAmino(object: _82.ResponseQueryAmino): _82.ResponseQuery;
            toAmino(message: _82.ResponseQuery): _82.ResponseQueryAmino;
            fromAminoMsg(object: _82.ResponseQueryAminoMsg): _82.ResponseQuery;
            fromProtoMsg(message: _82.ResponseQueryProtoMsg): _82.ResponseQuery;
            toProto(message: _82.ResponseQuery): Uint8Array;
            toProtoMsg(message: _82.ResponseQuery): _82.ResponseQueryProtoMsg;
        };
        ResponseBeginBlock: {
            typeUrl: string;
            is(o: any): o is _82.ResponseBeginBlock;
            isSDK(o: any): o is _82.ResponseBeginBlockSDKType;
            isAmino(o: any): o is _82.ResponseBeginBlockAmino;
            encode(message: _82.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseBeginBlock;
            fromJSON(object: any): _82.ResponseBeginBlock;
            toJSON(message: _82.ResponseBeginBlock): {
                events: {
                    type: string;
                    attributes: {
                        key: string;
                        value: string;
                        index: boolean;
                    }[];
                }[];
            };
            fromPartial(object: Partial<_82.ResponseBeginBlock>): _82.ResponseBeginBlock;
            fromAmino(object: _82.ResponseBeginBlockAmino): _82.ResponseBeginBlock;
            toAmino(message: _82.ResponseBeginBlock): _82.ResponseBeginBlockAmino;
            fromAminoMsg(object: _82.ResponseBeginBlockAminoMsg): _82.ResponseBeginBlock;
            fromProtoMsg(message: _82.ResponseBeginBlockProtoMsg): _82.ResponseBeginBlock;
            toProto(message: _82.ResponseBeginBlock): Uint8Array;
            toProtoMsg(message: _82.ResponseBeginBlock): _82.ResponseBeginBlockProtoMsg;
        };
        ResponseCheckTx: {
            typeUrl: string;
            is(o: any): o is _82.ResponseCheckTx;
            isSDK(o: any): o is _82.ResponseCheckTxSDKType;
            isAmino(o: any): o is _82.ResponseCheckTxAmino;
            encode(message: _82.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseCheckTx;
            fromJSON(object: any): _82.ResponseCheckTx;
            toJSON(message: _82.ResponseCheckTx): {
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
            fromPartial(object: Partial<_82.ResponseCheckTx>): _82.ResponseCheckTx;
            fromAmino(object: _82.ResponseCheckTxAmino): _82.ResponseCheckTx;
            toAmino(message: _82.ResponseCheckTx): _82.ResponseCheckTxAmino;
            fromAminoMsg(object: _82.ResponseCheckTxAminoMsg): _82.ResponseCheckTx;
            fromProtoMsg(message: _82.ResponseCheckTxProtoMsg): _82.ResponseCheckTx;
            toProto(message: _82.ResponseCheckTx): Uint8Array;
            toProtoMsg(message: _82.ResponseCheckTx): _82.ResponseCheckTxProtoMsg;
        };
        ResponseDeliverTx: {
            typeUrl: string;
            is(o: any): o is _82.ResponseDeliverTx;
            isSDK(o: any): o is _82.ResponseDeliverTxSDKType;
            isAmino(o: any): o is _82.ResponseDeliverTxAmino;
            encode(message: _82.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseDeliverTx;
            fromJSON(object: any): _82.ResponseDeliverTx;
            toJSON(message: _82.ResponseDeliverTx): {
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
            fromPartial(object: Partial<_82.ResponseDeliverTx>): _82.ResponseDeliverTx;
            fromAmino(object: _82.ResponseDeliverTxAmino): _82.ResponseDeliverTx;
            toAmino(message: _82.ResponseDeliverTx): _82.ResponseDeliverTxAmino;
            fromAminoMsg(object: _82.ResponseDeliverTxAminoMsg): _82.ResponseDeliverTx;
            fromProtoMsg(message: _82.ResponseDeliverTxProtoMsg): _82.ResponseDeliverTx;
            toProto(message: _82.ResponseDeliverTx): Uint8Array;
            toProtoMsg(message: _82.ResponseDeliverTx): _82.ResponseDeliverTxProtoMsg;
        };
        ResponseEndBlock: {
            typeUrl: string;
            is(o: any): o is _82.ResponseEndBlock;
            isSDK(o: any): o is _82.ResponseEndBlockSDKType;
            isAmino(o: any): o is _82.ResponseEndBlockAmino;
            encode(message: _82.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseEndBlock;
            fromJSON(object: any): _82.ResponseEndBlock;
            toJSON(message: _82.ResponseEndBlock): {
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
            fromPartial(object: Partial<_82.ResponseEndBlock>): _82.ResponseEndBlock;
            fromAmino(object: _82.ResponseEndBlockAmino): _82.ResponseEndBlock;
            toAmino(message: _82.ResponseEndBlock): _82.ResponseEndBlockAmino;
            fromAminoMsg(object: _82.ResponseEndBlockAminoMsg): _82.ResponseEndBlock;
            fromProtoMsg(message: _82.ResponseEndBlockProtoMsg): _82.ResponseEndBlock;
            toProto(message: _82.ResponseEndBlock): Uint8Array;
            toProtoMsg(message: _82.ResponseEndBlock): _82.ResponseEndBlockProtoMsg;
        };
        ResponseCommit: {
            typeUrl: string;
            is(o: any): o is _82.ResponseCommit;
            isSDK(o: any): o is _82.ResponseCommitSDKType;
            isAmino(o: any): o is _82.ResponseCommitAmino;
            encode(message: _82.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseCommit;
            fromJSON(object: any): _82.ResponseCommit;
            toJSON(message: _82.ResponseCommit): {
                data: string;
                retainHeight: string;
            };
            fromPartial(object: Partial<_82.ResponseCommit>): _82.ResponseCommit;
            fromAmino(object: _82.ResponseCommitAmino): _82.ResponseCommit;
            toAmino(message: _82.ResponseCommit): _82.ResponseCommitAmino;
            fromAminoMsg(object: _82.ResponseCommitAminoMsg): _82.ResponseCommit;
            fromProtoMsg(message: _82.ResponseCommitProtoMsg): _82.ResponseCommit;
            toProto(message: _82.ResponseCommit): Uint8Array;
            toProtoMsg(message: _82.ResponseCommit): _82.ResponseCommitProtoMsg;
        };
        ResponseListSnapshots: {
            typeUrl: string;
            is(o: any): o is _82.ResponseListSnapshots;
            isSDK(o: any): o is _82.ResponseListSnapshotsSDKType;
            isAmino(o: any): o is _82.ResponseListSnapshotsAmino;
            encode(message: _82.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseListSnapshots;
            fromJSON(object: any): _82.ResponseListSnapshots;
            toJSON(message: _82.ResponseListSnapshots): {
                snapshots: {
                    height: string;
                    format: number;
                    chunks: number;
                    hash: string;
                    metadata: string;
                }[];
            };
            fromPartial(object: Partial<_82.ResponseListSnapshots>): _82.ResponseListSnapshots;
            fromAmino(object: _82.ResponseListSnapshotsAmino): _82.ResponseListSnapshots;
            toAmino(message: _82.ResponseListSnapshots): _82.ResponseListSnapshotsAmino;
            fromAminoMsg(object: _82.ResponseListSnapshotsAminoMsg): _82.ResponseListSnapshots;
            fromProtoMsg(message: _82.ResponseListSnapshotsProtoMsg): _82.ResponseListSnapshots;
            toProto(message: _82.ResponseListSnapshots): Uint8Array;
            toProtoMsg(message: _82.ResponseListSnapshots): _82.ResponseListSnapshotsProtoMsg;
        };
        ResponseOfferSnapshot: {
            typeUrl: string;
            is(o: any): o is _82.ResponseOfferSnapshot;
            isSDK(o: any): o is _82.ResponseOfferSnapshotSDKType;
            isAmino(o: any): o is _82.ResponseOfferSnapshotAmino;
            encode(message: _82.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseOfferSnapshot;
            fromJSON(object: any): _82.ResponseOfferSnapshot;
            toJSON(message: _82.ResponseOfferSnapshot): {
                result: _82.ResponseOfferSnapshot_Result;
            };
            fromPartial(object: Partial<_82.ResponseOfferSnapshot>): _82.ResponseOfferSnapshot;
            fromAmino(object: _82.ResponseOfferSnapshotAmino): _82.ResponseOfferSnapshot;
            toAmino(message: _82.ResponseOfferSnapshot): _82.ResponseOfferSnapshotAmino;
            fromAminoMsg(object: _82.ResponseOfferSnapshotAminoMsg): _82.ResponseOfferSnapshot;
            fromProtoMsg(message: _82.ResponseOfferSnapshotProtoMsg): _82.ResponseOfferSnapshot;
            toProto(message: _82.ResponseOfferSnapshot): Uint8Array;
            toProtoMsg(message: _82.ResponseOfferSnapshot): _82.ResponseOfferSnapshotProtoMsg;
        };
        ResponseLoadSnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _82.ResponseLoadSnapshotChunk;
            isSDK(o: any): o is _82.ResponseLoadSnapshotChunkSDKType;
            isAmino(o: any): o is _82.ResponseLoadSnapshotChunkAmino;
            encode(message: _82.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _82.ResponseLoadSnapshotChunk;
            toJSON(message: _82.ResponseLoadSnapshotChunk): {
                chunk: string;
            };
            fromPartial(object: Partial<_82.ResponseLoadSnapshotChunk>): _82.ResponseLoadSnapshotChunk;
            fromAmino(object: _82.ResponseLoadSnapshotChunkAmino): _82.ResponseLoadSnapshotChunk;
            toAmino(message: _82.ResponseLoadSnapshotChunk): _82.ResponseLoadSnapshotChunkAmino;
            fromAminoMsg(object: _82.ResponseLoadSnapshotChunkAminoMsg): _82.ResponseLoadSnapshotChunk;
            fromProtoMsg(message: _82.ResponseLoadSnapshotChunkProtoMsg): _82.ResponseLoadSnapshotChunk;
            toProto(message: _82.ResponseLoadSnapshotChunk): Uint8Array;
            toProtoMsg(message: _82.ResponseLoadSnapshotChunk): _82.ResponseLoadSnapshotChunkProtoMsg;
        };
        ResponseApplySnapshotChunk: {
            typeUrl: string;
            is(o: any): o is _82.ResponseApplySnapshotChunk;
            isSDK(o: any): o is _82.ResponseApplySnapshotChunkSDKType;
            isAmino(o: any): o is _82.ResponseApplySnapshotChunkAmino;
            encode(message: _82.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ResponseApplySnapshotChunk;
            fromJSON(object: any): _82.ResponseApplySnapshotChunk;
            toJSON(message: _82.ResponseApplySnapshotChunk): {
                result: _82.ResponseApplySnapshotChunk_Result;
                refetchChunks: number[];
                rejectSenders: string[];
            };
            fromPartial(object: Partial<_82.ResponseApplySnapshotChunk>): _82.ResponseApplySnapshotChunk;
            fromAmino(object: _82.ResponseApplySnapshotChunkAmino): _82.ResponseApplySnapshotChunk;
            toAmino(message: _82.ResponseApplySnapshotChunk): _82.ResponseApplySnapshotChunkAmino;
            fromAminoMsg(object: _82.ResponseApplySnapshotChunkAminoMsg): _82.ResponseApplySnapshotChunk;
            fromProtoMsg(message: _82.ResponseApplySnapshotChunkProtoMsg): _82.ResponseApplySnapshotChunk;
            toProto(message: _82.ResponseApplySnapshotChunk): Uint8Array;
            toProtoMsg(message: _82.ResponseApplySnapshotChunk): _82.ResponseApplySnapshotChunkProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            is(o: any): o is _82.ConsensusParams;
            isSDK(o: any): o is _82.ConsensusParamsSDKType;
            isAmino(o: any): o is _82.ConsensusParamsAmino;
            encode(message: _82.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ConsensusParams;
            fromJSON(object: any): _82.ConsensusParams;
            toJSON(message: _82.ConsensusParams): {
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
            fromPartial(object: Partial<_82.ConsensusParams>): _82.ConsensusParams;
            fromAmino(object: _82.ConsensusParamsAmino): _82.ConsensusParams;
            toAmino(message: _82.ConsensusParams): _82.ConsensusParamsAmino;
            fromAminoMsg(object: _82.ConsensusParamsAminoMsg): _82.ConsensusParams;
            fromProtoMsg(message: _82.ConsensusParamsProtoMsg): _82.ConsensusParams;
            toProto(message: _82.ConsensusParams): Uint8Array;
            toProtoMsg(message: _82.ConsensusParams): _82.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            is(o: any): o is _82.BlockParams;
            isSDK(o: any): o is _82.BlockParamsSDKType;
            isAmino(o: any): o is _82.BlockParamsAmino;
            encode(message: _82.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.BlockParams;
            fromJSON(object: any): _82.BlockParams;
            toJSON(message: _82.BlockParams): {
                maxBytes: string;
                maxGas: string;
            };
            fromPartial(object: Partial<_82.BlockParams>): _82.BlockParams;
            fromAmino(object: _82.BlockParamsAmino): _82.BlockParams;
            toAmino(message: _82.BlockParams): _82.BlockParamsAmino;
            fromAminoMsg(object: _82.BlockParamsAminoMsg): _82.BlockParams;
            fromProtoMsg(message: _82.BlockParamsProtoMsg): _82.BlockParams;
            toProto(message: _82.BlockParams): Uint8Array;
            toProtoMsg(message: _82.BlockParams): _82.BlockParamsProtoMsg;
        };
        LastCommitInfo: {
            typeUrl: string;
            is(o: any): o is _82.LastCommitInfo;
            isSDK(o: any): o is _82.LastCommitInfoSDKType;
            isAmino(o: any): o is _82.LastCommitInfoAmino;
            encode(message: _82.LastCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.LastCommitInfo;
            fromJSON(object: any): _82.LastCommitInfo;
            toJSON(message: _82.LastCommitInfo): {
                round: number;
                votes: {
                    validator: {
                        address: string;
                        power: string;
                    };
                    signedLastBlock: boolean;
                }[];
            };
            fromPartial(object: Partial<_82.LastCommitInfo>): _82.LastCommitInfo;
            fromAmino(object: _82.LastCommitInfoAmino): _82.LastCommitInfo;
            toAmino(message: _82.LastCommitInfo): _82.LastCommitInfoAmino;
            fromAminoMsg(object: _82.LastCommitInfoAminoMsg): _82.LastCommitInfo;
            fromProtoMsg(message: _82.LastCommitInfoProtoMsg): _82.LastCommitInfo;
            toProto(message: _82.LastCommitInfo): Uint8Array;
            toProtoMsg(message: _82.LastCommitInfo): _82.LastCommitInfoProtoMsg;
        };
        Event: {
            typeUrl: string;
            is(o: any): o is _82.Event;
            isSDK(o: any): o is _82.EventSDKType;
            isAmino(o: any): o is _82.EventAmino;
            encode(message: _82.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Event;
            fromJSON(object: any): _82.Event;
            toJSON(message: _82.Event): {
                type: string;
                attributes: {
                    key: string;
                    value: string;
                    index: boolean;
                }[];
            };
            fromPartial(object: Partial<_82.Event>): _82.Event;
            fromAmino(object: _82.EventAmino): _82.Event;
            toAmino(message: _82.Event): _82.EventAmino;
            fromAminoMsg(object: _82.EventAminoMsg): _82.Event;
            fromProtoMsg(message: _82.EventProtoMsg): _82.Event;
            toProto(message: _82.Event): Uint8Array;
            toProtoMsg(message: _82.Event): _82.EventProtoMsg;
        };
        EventAttribute: {
            typeUrl: string;
            is(o: any): o is _82.EventAttribute;
            isSDK(o: any): o is _82.EventAttributeSDKType;
            isAmino(o: any): o is _82.EventAttributeAmino;
            encode(message: _82.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.EventAttribute;
            fromJSON(object: any): _82.EventAttribute;
            toJSON(message: _82.EventAttribute): {
                key: string;
                value: string;
                index: boolean;
            };
            fromPartial(object: Partial<_82.EventAttribute>): _82.EventAttribute;
            fromAmino(object: _82.EventAttributeAmino): _82.EventAttribute;
            toAmino(message: _82.EventAttribute): _82.EventAttributeAmino;
            fromAminoMsg(object: _82.EventAttributeAminoMsg): _82.EventAttribute;
            fromProtoMsg(message: _82.EventAttributeProtoMsg): _82.EventAttribute;
            toProto(message: _82.EventAttribute): Uint8Array;
            toProtoMsg(message: _82.EventAttribute): _82.EventAttributeProtoMsg;
        };
        TxResult: {
            typeUrl: string;
            is(o: any): o is _82.TxResult;
            isSDK(o: any): o is _82.TxResultSDKType;
            isAmino(o: any): o is _82.TxResultAmino;
            encode(message: _82.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.TxResult;
            fromJSON(object: any): _82.TxResult;
            toJSON(message: _82.TxResult): {
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
            fromPartial(object: Partial<_82.TxResult>): _82.TxResult;
            fromAmino(object: _82.TxResultAmino): _82.TxResult;
            toAmino(message: _82.TxResult): _82.TxResultAmino;
            fromAminoMsg(object: _82.TxResultAminoMsg): _82.TxResult;
            fromProtoMsg(message: _82.TxResultProtoMsg): _82.TxResult;
            toProto(message: _82.TxResult): Uint8Array;
            toProtoMsg(message: _82.TxResult): _82.TxResultProtoMsg;
        };
        Validator: {
            typeUrl: string;
            is(o: any): o is _82.Validator;
            isSDK(o: any): o is _82.ValidatorSDKType;
            isAmino(o: any): o is _82.ValidatorAmino;
            encode(message: _82.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Validator;
            fromJSON(object: any): _82.Validator;
            toJSON(message: _82.Validator): {
                address: string;
                power: string;
            };
            fromPartial(object: Partial<_82.Validator>): _82.Validator;
            fromAmino(object: _82.ValidatorAmino): _82.Validator;
            toAmino(message: _82.Validator): _82.ValidatorAmino;
            fromAminoMsg(object: _82.ValidatorAminoMsg): _82.Validator;
            fromProtoMsg(message: _82.ValidatorProtoMsg): _82.Validator;
            toProto(message: _82.Validator): Uint8Array;
            toProtoMsg(message: _82.Validator): _82.ValidatorProtoMsg;
        };
        ValidatorUpdate: {
            typeUrl: string;
            is(o: any): o is _82.ValidatorUpdate;
            isSDK(o: any): o is _82.ValidatorUpdateSDKType;
            isAmino(o: any): o is _82.ValidatorUpdateAmino;
            encode(message: _82.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.ValidatorUpdate;
            fromJSON(object: any): _82.ValidatorUpdate;
            toJSON(message: _82.ValidatorUpdate): {
                pubKey: {
                    ed25519?: string;
                    secp256k1?: string;
                };
                power: string;
            };
            fromPartial(object: Partial<_82.ValidatorUpdate>): _82.ValidatorUpdate;
            fromAmino(object: _82.ValidatorUpdateAmino): _82.ValidatorUpdate;
            toAmino(message: _82.ValidatorUpdate): _82.ValidatorUpdateAmino;
            fromAminoMsg(object: _82.ValidatorUpdateAminoMsg): _82.ValidatorUpdate;
            fromProtoMsg(message: _82.ValidatorUpdateProtoMsg): _82.ValidatorUpdate;
            toProto(message: _82.ValidatorUpdate): Uint8Array;
            toProtoMsg(message: _82.ValidatorUpdate): _82.ValidatorUpdateProtoMsg;
        };
        VoteInfo: {
            typeUrl: string;
            is(o: any): o is _82.VoteInfo;
            isSDK(o: any): o is _82.VoteInfoSDKType;
            isAmino(o: any): o is _82.VoteInfoAmino;
            encode(message: _82.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.VoteInfo;
            fromJSON(object: any): _82.VoteInfo;
            toJSON(message: _82.VoteInfo): {
                validator: {
                    address: string;
                    power: string;
                };
                signedLastBlock: boolean;
            };
            fromPartial(object: Partial<_82.VoteInfo>): _82.VoteInfo;
            fromAmino(object: _82.VoteInfoAmino): _82.VoteInfo;
            toAmino(message: _82.VoteInfo): _82.VoteInfoAmino;
            fromAminoMsg(object: _82.VoteInfoAminoMsg): _82.VoteInfo;
            fromProtoMsg(message: _82.VoteInfoProtoMsg): _82.VoteInfo;
            toProto(message: _82.VoteInfo): Uint8Array;
            toProtoMsg(message: _82.VoteInfo): _82.VoteInfoProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            is(o: any): o is _82.Evidence;
            isSDK(o: any): o is _82.EvidenceSDKType;
            isAmino(o: any): o is _82.EvidenceAmino;
            encode(message: _82.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Evidence;
            fromJSON(object: any): _82.Evidence;
            toJSON(message: _82.Evidence): {
                type: _82.EvidenceType;
                validator: {
                    address: string;
                    power: string;
                };
                height: string;
                time: string;
                totalVotingPower: string;
            };
            fromPartial(object: Partial<_82.Evidence>): _82.Evidence;
            fromAmino(object: _82.EvidenceAmino): _82.Evidence;
            toAmino(message: _82.Evidence): _82.EvidenceAmino;
            fromAminoMsg(object: _82.EvidenceAminoMsg): _82.Evidence;
            fromProtoMsg(message: _82.EvidenceProtoMsg): _82.Evidence;
            toProto(message: _82.Evidence): Uint8Array;
            toProtoMsg(message: _82.Evidence): _82.EvidenceProtoMsg;
        };
        Snapshot: {
            typeUrl: string;
            is(o: any): o is _82.Snapshot;
            isSDK(o: any): o is _82.SnapshotSDKType;
            isAmino(o: any): o is _82.SnapshotAmino;
            encode(message: _82.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Snapshot;
            fromJSON(object: any): _82.Snapshot;
            toJSON(message: _82.Snapshot): {
                height: string;
                format: number;
                chunks: number;
                hash: string;
                metadata: string;
            };
            fromPartial(object: Partial<_82.Snapshot>): _82.Snapshot;
            fromAmino(object: _82.SnapshotAmino): _82.Snapshot;
            toAmino(message: _82.Snapshot): _82.SnapshotAmino;
            fromAminoMsg(object: _82.SnapshotAminoMsg): _82.Snapshot;
            fromProtoMsg(message: _82.SnapshotProtoMsg): _82.Snapshot;
            toProto(message: _82.Snapshot): Uint8Array;
            toProtoMsg(message: _82.Snapshot): _82.SnapshotProtoMsg;
        };
    };
    const crypto: {
        Proof: {
            typeUrl: string;
            is(o: any): o is _84.Proof;
            isSDK(o: any): o is _84.ProofSDKType;
            isAmino(o: any): o is _84.ProofAmino;
            encode(message: _84.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Proof;
            fromJSON(object: any): _84.Proof;
            toJSON(message: _84.Proof): {
                total: string;
                index: string;
                leafHash: string;
                aunts: string[];
            };
            fromPartial(object: Partial<_84.Proof>): _84.Proof;
            fromAmino(object: _84.ProofAmino): _84.Proof;
            toAmino(message: _84.Proof): _84.ProofAmino;
            fromAminoMsg(object: _84.ProofAminoMsg): _84.Proof;
            fromProtoMsg(message: _84.ProofProtoMsg): _84.Proof;
            toProto(message: _84.Proof): Uint8Array;
            toProtoMsg(message: _84.Proof): _84.ProofProtoMsg;
        };
        ValueOp: {
            typeUrl: string;
            is(o: any): o is _84.ValueOp;
            isSDK(o: any): o is _84.ValueOpSDKType;
            isAmino(o: any): o is _84.ValueOpAmino;
            encode(message: _84.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ValueOp;
            fromJSON(object: any): _84.ValueOp;
            toJSON(message: _84.ValueOp): {
                key: string;
                proof?: {
                    total: string;
                    index: string;
                    leafHash: string;
                    aunts: string[];
                };
            };
            fromPartial(object: Partial<_84.ValueOp>): _84.ValueOp;
            fromAmino(object: _84.ValueOpAmino): _84.ValueOp;
            toAmino(message: _84.ValueOp): _84.ValueOpAmino;
            fromAminoMsg(object: _84.ValueOpAminoMsg): _84.ValueOp;
            fromProtoMsg(message: _84.ValueOpProtoMsg): _84.ValueOp;
            toProto(message: _84.ValueOp): Uint8Array;
            toProtoMsg(message: _84.ValueOp): _84.ValueOpProtoMsg;
        };
        DominoOp: {
            typeUrl: string;
            is(o: any): o is _84.DominoOp;
            isSDK(o: any): o is _84.DominoOpSDKType;
            isAmino(o: any): o is _84.DominoOpAmino;
            encode(message: _84.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.DominoOp;
            fromJSON(object: any): _84.DominoOp;
            toJSON(message: _84.DominoOp): {
                key: string;
                input: string;
                output: string;
            };
            fromPartial(object: Partial<_84.DominoOp>): _84.DominoOp;
            fromAmino(object: _84.DominoOpAmino): _84.DominoOp;
            toAmino(message: _84.DominoOp): _84.DominoOpAmino;
            fromAminoMsg(object: _84.DominoOpAminoMsg): _84.DominoOp;
            fromProtoMsg(message: _84.DominoOpProtoMsg): _84.DominoOp;
            toProto(message: _84.DominoOp): Uint8Array;
            toProtoMsg(message: _84.DominoOp): _84.DominoOpProtoMsg;
        };
        ProofOp: {
            typeUrl: string;
            is(o: any): o is _84.ProofOp;
            isSDK(o: any): o is _84.ProofOpSDKType;
            isAmino(o: any): o is _84.ProofOpAmino;
            encode(message: _84.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ProofOp;
            fromJSON(object: any): _84.ProofOp;
            toJSON(message: _84.ProofOp): {
                type: string;
                key: string;
                data: string;
            };
            fromPartial(object: Partial<_84.ProofOp>): _84.ProofOp;
            fromAmino(object: _84.ProofOpAmino): _84.ProofOp;
            toAmino(message: _84.ProofOp): _84.ProofOpAmino;
            fromAminoMsg(object: _84.ProofOpAminoMsg): _84.ProofOp;
            fromProtoMsg(message: _84.ProofOpProtoMsg): _84.ProofOp;
            toProto(message: _84.ProofOp): Uint8Array;
            toProtoMsg(message: _84.ProofOp): _84.ProofOpProtoMsg;
        };
        ProofOps: {
            typeUrl: string;
            is(o: any): o is _84.ProofOps;
            isSDK(o: any): o is _84.ProofOpsSDKType;
            isAmino(o: any): o is _84.ProofOpsAmino;
            encode(message: _84.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.ProofOps;
            fromJSON(object: any): _84.ProofOps;
            toJSON(message: _84.ProofOps): {
                ops: {
                    type: string;
                    key: string;
                    data: string;
                }[];
            };
            fromPartial(object: Partial<_84.ProofOps>): _84.ProofOps;
            fromAmino(object: _84.ProofOpsAmino): _84.ProofOps;
            toAmino(message: _84.ProofOps): _84.ProofOpsAmino;
            fromAminoMsg(object: _84.ProofOpsAminoMsg): _84.ProofOps;
            fromProtoMsg(message: _84.ProofOpsProtoMsg): _84.ProofOps;
            toProto(message: _84.ProofOps): Uint8Array;
            toProtoMsg(message: _84.ProofOps): _84.ProofOpsProtoMsg;
        };
        PublicKey: {
            typeUrl: string;
            is(o: any): o is _83.PublicKey;
            isSDK(o: any): o is _83.PublicKeySDKType;
            isAmino(o: any): o is _83.PublicKeyAmino;
            encode(message: _83.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.PublicKey;
            fromJSON(object: any): _83.PublicKey;
            toJSON(message: _83.PublicKey): {
                ed25519?: string;
                secp256k1?: string;
            };
            fromPartial(object: Partial<_83.PublicKey>): _83.PublicKey;
            fromAmino(object: _83.PublicKeyAmino): _83.PublicKey;
            toAmino(message: _83.PublicKey): _83.PublicKeyAmino;
            fromAminoMsg(object: _83.PublicKeyAminoMsg): _83.PublicKey;
            fromProtoMsg(message: _83.PublicKeyProtoMsg): _83.PublicKey;
            toProto(message: _83.PublicKey): Uint8Array;
            toProtoMsg(message: _83.PublicKey): _83.PublicKeyProtoMsg;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                typeUrl: string;
                is(o: any): o is _85.BitArray;
                isSDK(o: any): o is _85.BitArraySDKType;
                isAmino(o: any): o is _85.BitArrayAmino;
                encode(message: _85.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.BitArray;
                fromJSON(object: any): _85.BitArray;
                toJSON(message: _85.BitArray): {
                    bits: string;
                    elems: string[];
                };
                fromPartial(object: Partial<_85.BitArray>): _85.BitArray;
                fromAmino(object: _85.BitArrayAmino): _85.BitArray;
                toAmino(message: _85.BitArray): _85.BitArrayAmino;
                fromAminoMsg(object: _85.BitArrayAminoMsg): _85.BitArray;
                fromProtoMsg(message: _85.BitArrayProtoMsg): _85.BitArray;
                toProto(message: _85.BitArray): Uint8Array;
                toProtoMsg(message: _85.BitArray): _85.BitArrayProtoMsg;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            typeUrl: string;
            is(o: any): o is _86.ProtocolVersion;
            isSDK(o: any): o is _86.ProtocolVersionSDKType;
            isAmino(o: any): o is _86.ProtocolVersionAmino;
            encode(message: _86.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.ProtocolVersion;
            fromJSON(object: any): _86.ProtocolVersion;
            toJSON(message: _86.ProtocolVersion): {
                p2p: string;
                block: string;
                app: string;
            };
            fromPartial(object: Partial<_86.ProtocolVersion>): _86.ProtocolVersion;
            fromAmino(object: _86.ProtocolVersionAmino): _86.ProtocolVersion;
            toAmino(message: _86.ProtocolVersion): _86.ProtocolVersionAmino;
            fromAminoMsg(object: _86.ProtocolVersionAminoMsg): _86.ProtocolVersion;
            fromProtoMsg(message: _86.ProtocolVersionProtoMsg): _86.ProtocolVersion;
            toProto(message: _86.ProtocolVersion): Uint8Array;
            toProtoMsg(message: _86.ProtocolVersion): _86.ProtocolVersionProtoMsg;
        };
        NodeInfo: {
            typeUrl: string;
            is(o: any): o is _86.NodeInfo;
            isSDK(o: any): o is _86.NodeInfoSDKType;
            isAmino(o: any): o is _86.NodeInfoAmino;
            encode(message: _86.NodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.NodeInfo;
            fromJSON(object: any): _86.NodeInfo;
            toJSON(message: _86.NodeInfo): {
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
            fromPartial(object: Partial<_86.NodeInfo>): _86.NodeInfo;
            fromAmino(object: _86.NodeInfoAmino): _86.NodeInfo;
            toAmino(message: _86.NodeInfo): _86.NodeInfoAmino;
            fromAminoMsg(object: _86.NodeInfoAminoMsg): _86.NodeInfo;
            fromProtoMsg(message: _86.NodeInfoProtoMsg): _86.NodeInfo;
            toProto(message: _86.NodeInfo): Uint8Array;
            toProtoMsg(message: _86.NodeInfo): _86.NodeInfoProtoMsg;
        };
        NodeInfoOther: {
            typeUrl: string;
            is(o: any): o is _86.NodeInfoOther;
            isSDK(o: any): o is _86.NodeInfoOtherSDKType;
            isAmino(o: any): o is _86.NodeInfoOtherAmino;
            encode(message: _86.NodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.NodeInfoOther;
            fromJSON(object: any): _86.NodeInfoOther;
            toJSON(message: _86.NodeInfoOther): {
                txIndex: string;
                rpcAddress: string;
            };
            fromPartial(object: Partial<_86.NodeInfoOther>): _86.NodeInfoOther;
            fromAmino(object: _86.NodeInfoOtherAmino): _86.NodeInfoOther;
            toAmino(message: _86.NodeInfoOther): _86.NodeInfoOtherAmino;
            fromAminoMsg(object: _86.NodeInfoOtherAminoMsg): _86.NodeInfoOther;
            fromProtoMsg(message: _86.NodeInfoOtherProtoMsg): _86.NodeInfoOther;
            toProto(message: _86.NodeInfoOther): Uint8Array;
            toProtoMsg(message: _86.NodeInfoOther): _86.NodeInfoOtherProtoMsg;
        };
        PeerInfo: {
            typeUrl: string;
            is(o: any): o is _86.PeerInfo;
            isSDK(o: any): o is _86.PeerInfoSDKType;
            isAmino(o: any): o is _86.PeerInfoAmino;
            encode(message: _86.PeerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.PeerInfo;
            fromJSON(object: any): _86.PeerInfo;
            toJSON(message: _86.PeerInfo): {
                id: string;
                addressInfo: {
                    address: string;
                    lastDialSuccess?: string;
                    lastDialFailure?: string;
                    dialFailures: number;
                }[];
                lastConnected?: string;
            };
            fromPartial(object: Partial<_86.PeerInfo>): _86.PeerInfo;
            fromAmino(object: _86.PeerInfoAmino): _86.PeerInfo;
            toAmino(message: _86.PeerInfo): _86.PeerInfoAmino;
            fromAminoMsg(object: _86.PeerInfoAminoMsg): _86.PeerInfo;
            fromProtoMsg(message: _86.PeerInfoProtoMsg): _86.PeerInfo;
            toProto(message: _86.PeerInfo): Uint8Array;
            toProtoMsg(message: _86.PeerInfo): _86.PeerInfoProtoMsg;
        };
        PeerAddressInfo: {
            typeUrl: string;
            is(o: any): o is _86.PeerAddressInfo;
            isSDK(o: any): o is _86.PeerAddressInfoSDKType;
            isAmino(o: any): o is _86.PeerAddressInfoAmino;
            encode(message: _86.PeerAddressInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _86.PeerAddressInfo;
            fromJSON(object: any): _86.PeerAddressInfo;
            toJSON(message: _86.PeerAddressInfo): {
                address: string;
                lastDialSuccess?: string;
                lastDialFailure?: string;
                dialFailures: number;
            };
            fromPartial(object: Partial<_86.PeerAddressInfo>): _86.PeerAddressInfo;
            fromAmino(object: _86.PeerAddressInfoAmino): _86.PeerAddressInfo;
            toAmino(message: _86.PeerAddressInfo): _86.PeerAddressInfoAmino;
            fromAminoMsg(object: _86.PeerAddressInfoAminoMsg): _86.PeerAddressInfo;
            fromProtoMsg(message: _86.PeerAddressInfoProtoMsg): _86.PeerAddressInfo;
            toProto(message: _86.PeerAddressInfo): Uint8Array;
            toProtoMsg(message: _86.PeerAddressInfo): _86.PeerAddressInfoProtoMsg;
        };
    };
    const types: {
        ValidatorSet: {
            typeUrl: string;
            is(o: any): o is _91.ValidatorSet;
            isSDK(o: any): o is _91.ValidatorSetSDKType;
            isAmino(o: any): o is _91.ValidatorSetAmino;
            encode(message: _91.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.ValidatorSet;
            fromJSON(object: any): _91.ValidatorSet;
            toJSON(message: _91.ValidatorSet): {
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
            fromPartial(object: Partial<_91.ValidatorSet>): _91.ValidatorSet;
            fromAmino(object: _91.ValidatorSetAmino): _91.ValidatorSet;
            toAmino(message: _91.ValidatorSet): _91.ValidatorSetAmino;
            fromAminoMsg(object: _91.ValidatorSetAminoMsg): _91.ValidatorSet;
            fromProtoMsg(message: _91.ValidatorSetProtoMsg): _91.ValidatorSet;
            toProto(message: _91.ValidatorSet): Uint8Array;
            toProtoMsg(message: _91.ValidatorSet): _91.ValidatorSetProtoMsg;
        };
        Validator: {
            typeUrl: string;
            is(o: any): o is _91.Validator;
            isSDK(o: any): o is _91.ValidatorSDKType;
            isAmino(o: any): o is _91.ValidatorAmino;
            encode(message: _91.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Validator;
            fromJSON(object: any): _91.Validator;
            toJSON(message: _91.Validator): {
                address: string;
                pubKey: {
                    ed25519?: string;
                    secp256k1?: string;
                };
                votingPower: string;
                proposerPriority: string;
            };
            fromPartial(object: Partial<_91.Validator>): _91.Validator;
            fromAmino(object: _91.ValidatorAmino): _91.Validator;
            toAmino(message: _91.Validator): _91.ValidatorAmino;
            fromAminoMsg(object: _91.ValidatorAminoMsg): _91.Validator;
            fromProtoMsg(message: _91.ValidatorProtoMsg): _91.Validator;
            toProto(message: _91.Validator): Uint8Array;
            toProtoMsg(message: _91.Validator): _91.ValidatorProtoMsg;
        };
        SimpleValidator: {
            typeUrl: string;
            is(o: any): o is _91.SimpleValidator;
            isSDK(o: any): o is _91.SimpleValidatorSDKType;
            isAmino(o: any): o is _91.SimpleValidatorAmino;
            encode(message: _91.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.SimpleValidator;
            fromJSON(object: any): _91.SimpleValidator;
            toJSON(message: _91.SimpleValidator): {
                pubKey?: {
                    ed25519?: string;
                    secp256k1?: string;
                };
                votingPower: string;
            };
            fromPartial(object: Partial<_91.SimpleValidator>): _91.SimpleValidator;
            fromAmino(object: _91.SimpleValidatorAmino): _91.SimpleValidator;
            toAmino(message: _91.SimpleValidator): _91.SimpleValidatorAmino;
            fromAminoMsg(object: _91.SimpleValidatorAminoMsg): _91.SimpleValidator;
            fromProtoMsg(message: _91.SimpleValidatorProtoMsg): _91.SimpleValidator;
            toProto(message: _91.SimpleValidator): Uint8Array;
            toProtoMsg(message: _91.SimpleValidator): _91.SimpleValidatorProtoMsg;
        };
        blockIDFlagFromJSON(object: any): _90.BlockIDFlag;
        blockIDFlagToJSON(object: _90.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _90.SignedMsgType;
        signedMsgTypeToJSON(object: _90.SignedMsgType): string;
        BlockIDFlag: typeof _90.BlockIDFlag;
        BlockIDFlagSDKType: typeof _90.BlockIDFlag;
        BlockIDFlagAmino: typeof _90.BlockIDFlag;
        SignedMsgType: typeof _90.SignedMsgType;
        SignedMsgTypeSDKType: typeof _90.SignedMsgType;
        SignedMsgTypeAmino: typeof _90.SignedMsgType;
        PartSetHeader: {
            typeUrl: string;
            is(o: any): o is _90.PartSetHeader;
            isSDK(o: any): o is _90.PartSetHeaderSDKType;
            isAmino(o: any): o is _90.PartSetHeaderAmino;
            encode(message: _90.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.PartSetHeader;
            fromJSON(object: any): _90.PartSetHeader;
            toJSON(message: _90.PartSetHeader): {
                total: number;
                hash: string;
            };
            fromPartial(object: Partial<_90.PartSetHeader>): _90.PartSetHeader;
            fromAmino(object: _90.PartSetHeaderAmino): _90.PartSetHeader;
            toAmino(message: _90.PartSetHeader): _90.PartSetHeaderAmino;
            fromAminoMsg(object: _90.PartSetHeaderAminoMsg): _90.PartSetHeader;
            fromProtoMsg(message: _90.PartSetHeaderProtoMsg): _90.PartSetHeader;
            toProto(message: _90.PartSetHeader): Uint8Array;
            toProtoMsg(message: _90.PartSetHeader): _90.PartSetHeaderProtoMsg;
        };
        Part: {
            typeUrl: string;
            is(o: any): o is _90.Part;
            isSDK(o: any): o is _90.PartSDKType;
            isAmino(o: any): o is _90.PartAmino;
            encode(message: _90.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Part;
            fromJSON(object: any): _90.Part;
            toJSON(message: _90.Part): {
                index: number;
                bytes: string;
                proof: {
                    total: string;
                    index: string;
                    leafHash: string;
                    aunts: string[];
                };
            };
            fromPartial(object: Partial<_90.Part>): _90.Part;
            fromAmino(object: _90.PartAmino): _90.Part;
            toAmino(message: _90.Part): _90.PartAmino;
            fromAminoMsg(object: _90.PartAminoMsg): _90.Part;
            fromProtoMsg(message: _90.PartProtoMsg): _90.Part;
            toProto(message: _90.Part): Uint8Array;
            toProtoMsg(message: _90.Part): _90.PartProtoMsg;
        };
        BlockID: {
            typeUrl: string;
            is(o: any): o is _90.BlockID;
            isSDK(o: any): o is _90.BlockIDSDKType;
            isAmino(o: any): o is _90.BlockIDAmino;
            encode(message: _90.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.BlockID;
            fromJSON(object: any): _90.BlockID;
            toJSON(message: _90.BlockID): {
                hash: string;
                partSetHeader: {
                    total: number;
                    hash: string;
                };
            };
            fromPartial(object: Partial<_90.BlockID>): _90.BlockID;
            fromAmino(object: _90.BlockIDAmino): _90.BlockID;
            toAmino(message: _90.BlockID): _90.BlockIDAmino;
            fromAminoMsg(object: _90.BlockIDAminoMsg): _90.BlockID;
            fromProtoMsg(message: _90.BlockIDProtoMsg): _90.BlockID;
            toProto(message: _90.BlockID): Uint8Array;
            toProtoMsg(message: _90.BlockID): _90.BlockIDProtoMsg;
        };
        Header: {
            typeUrl: string;
            is(o: any): o is _90.Header;
            isSDK(o: any): o is _90.HeaderSDKType;
            isAmino(o: any): o is _90.HeaderAmino;
            encode(message: _90.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Header;
            fromJSON(object: any): _90.Header;
            toJSON(message: _90.Header): {
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
            fromPartial(object: Partial<_90.Header>): _90.Header;
            fromAmino(object: _90.HeaderAmino): _90.Header;
            toAmino(message: _90.Header): _90.HeaderAmino;
            fromAminoMsg(object: _90.HeaderAminoMsg): _90.Header;
            fromProtoMsg(message: _90.HeaderProtoMsg): _90.Header;
            toProto(message: _90.Header): Uint8Array;
            toProtoMsg(message: _90.Header): _90.HeaderProtoMsg;
        };
        Data: {
            typeUrl: string;
            is(o: any): o is _90.Data;
            isSDK(o: any): o is _90.DataSDKType;
            isAmino(o: any): o is _90.DataAmino;
            encode(message: _90.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Data;
            fromJSON(object: any): _90.Data;
            toJSON(message: _90.Data): {
                txs: string[];
            };
            fromPartial(object: Partial<_90.Data>): _90.Data;
            fromAmino(object: _90.DataAmino): _90.Data;
            toAmino(message: _90.Data): _90.DataAmino;
            fromAminoMsg(object: _90.DataAminoMsg): _90.Data;
            fromProtoMsg(message: _90.DataProtoMsg): _90.Data;
            toProto(message: _90.Data): Uint8Array;
            toProtoMsg(message: _90.Data): _90.DataProtoMsg;
        };
        Vote: {
            typeUrl: string;
            is(o: any): o is _90.Vote;
            isSDK(o: any): o is _90.VoteSDKType;
            isAmino(o: any): o is _90.VoteAmino;
            encode(message: _90.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Vote;
            fromJSON(object: any): _90.Vote;
            toJSON(message: _90.Vote): {
                type: _90.SignedMsgType;
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
            fromPartial(object: Partial<_90.Vote>): _90.Vote;
            fromAmino(object: _90.VoteAmino): _90.Vote;
            toAmino(message: _90.Vote): _90.VoteAmino;
            fromAminoMsg(object: _90.VoteAminoMsg): _90.Vote;
            fromProtoMsg(message: _90.VoteProtoMsg): _90.Vote;
            toProto(message: _90.Vote): Uint8Array;
            toProtoMsg(message: _90.Vote): _90.VoteProtoMsg;
        };
        Commit: {
            typeUrl: string;
            is(o: any): o is _90.Commit;
            isSDK(o: any): o is _90.CommitSDKType;
            isAmino(o: any): o is _90.CommitAmino;
            encode(message: _90.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Commit;
            fromJSON(object: any): _90.Commit;
            toJSON(message: _90.Commit): {
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
                    blockIdFlag: _90.BlockIDFlag;
                    validatorAddress: string;
                    timestamp: string;
                    signature: string;
                }[];
            };
            fromPartial(object: Partial<_90.Commit>): _90.Commit;
            fromAmino(object: _90.CommitAmino): _90.Commit;
            toAmino(message: _90.Commit): _90.CommitAmino;
            fromAminoMsg(object: _90.CommitAminoMsg): _90.Commit;
            fromProtoMsg(message: _90.CommitProtoMsg): _90.Commit;
            toProto(message: _90.Commit): Uint8Array;
            toProtoMsg(message: _90.Commit): _90.CommitProtoMsg;
        };
        CommitSig: {
            typeUrl: string;
            is(o: any): o is _90.CommitSig;
            isSDK(o: any): o is _90.CommitSigSDKType;
            isAmino(o: any): o is _90.CommitSigAmino;
            encode(message: _90.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.CommitSig;
            fromJSON(object: any): _90.CommitSig;
            toJSON(message: _90.CommitSig): {
                blockIdFlag: _90.BlockIDFlag;
                validatorAddress: string;
                timestamp: string;
                signature: string;
            };
            fromPartial(object: Partial<_90.CommitSig>): _90.CommitSig;
            fromAmino(object: _90.CommitSigAmino): _90.CommitSig;
            toAmino(message: _90.CommitSig): _90.CommitSigAmino;
            fromAminoMsg(object: _90.CommitSigAminoMsg): _90.CommitSig;
            fromProtoMsg(message: _90.CommitSigProtoMsg): _90.CommitSig;
            toProto(message: _90.CommitSig): Uint8Array;
            toProtoMsg(message: _90.CommitSig): _90.CommitSigProtoMsg;
        };
        Proposal: {
            typeUrl: string;
            is(o: any): o is _90.Proposal;
            isSDK(o: any): o is _90.ProposalSDKType;
            isAmino(o: any): o is _90.ProposalAmino;
            encode(message: _90.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.Proposal;
            fromJSON(object: any): _90.Proposal;
            toJSON(message: _90.Proposal): {
                type: _90.SignedMsgType;
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
            fromPartial(object: Partial<_90.Proposal>): _90.Proposal;
            fromAmino(object: _90.ProposalAmino): _90.Proposal;
            toAmino(message: _90.Proposal): _90.ProposalAmino;
            fromAminoMsg(object: _90.ProposalAminoMsg): _90.Proposal;
            fromProtoMsg(message: _90.ProposalProtoMsg): _90.Proposal;
            toProto(message: _90.Proposal): Uint8Array;
            toProtoMsg(message: _90.Proposal): _90.ProposalProtoMsg;
        };
        SignedHeader: {
            typeUrl: string;
            is(o: any): o is _90.SignedHeader;
            isSDK(o: any): o is _90.SignedHeaderSDKType;
            isAmino(o: any): o is _90.SignedHeaderAmino;
            encode(message: _90.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.SignedHeader;
            fromJSON(object: any): _90.SignedHeader;
            toJSON(message: _90.SignedHeader): {
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
                        blockIdFlag: _90.BlockIDFlag;
                        validatorAddress: string;
                        timestamp: string;
                        signature: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_90.SignedHeader>): _90.SignedHeader;
            fromAmino(object: _90.SignedHeaderAmino): _90.SignedHeader;
            toAmino(message: _90.SignedHeader): _90.SignedHeaderAmino;
            fromAminoMsg(object: _90.SignedHeaderAminoMsg): _90.SignedHeader;
            fromProtoMsg(message: _90.SignedHeaderProtoMsg): _90.SignedHeader;
            toProto(message: _90.SignedHeader): Uint8Array;
            toProtoMsg(message: _90.SignedHeader): _90.SignedHeaderProtoMsg;
        };
        LightBlock: {
            typeUrl: string;
            is(o: any): o is _90.LightBlock;
            isSDK(o: any): o is _90.LightBlockSDKType;
            isAmino(o: any): o is _90.LightBlockAmino;
            encode(message: _90.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.LightBlock;
            fromJSON(object: any): _90.LightBlock;
            toJSON(message: _90.LightBlock): {
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
                            blockIdFlag: _90.BlockIDFlag;
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
            fromPartial(object: Partial<_90.LightBlock>): _90.LightBlock;
            fromAmino(object: _90.LightBlockAmino): _90.LightBlock;
            toAmino(message: _90.LightBlock): _90.LightBlockAmino;
            fromAminoMsg(object: _90.LightBlockAminoMsg): _90.LightBlock;
            fromProtoMsg(message: _90.LightBlockProtoMsg): _90.LightBlock;
            toProto(message: _90.LightBlock): Uint8Array;
            toProtoMsg(message: _90.LightBlock): _90.LightBlockProtoMsg;
        };
        BlockMeta: {
            typeUrl: string;
            is(o: any): o is _90.BlockMeta;
            isSDK(o: any): o is _90.BlockMetaSDKType;
            isAmino(o: any): o is _90.BlockMetaAmino;
            encode(message: _90.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.BlockMeta;
            fromJSON(object: any): _90.BlockMeta;
            toJSON(message: _90.BlockMeta): {
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
            fromPartial(object: Partial<_90.BlockMeta>): _90.BlockMeta;
            fromAmino(object: _90.BlockMetaAmino): _90.BlockMeta;
            toAmino(message: _90.BlockMeta): _90.BlockMetaAmino;
            fromAminoMsg(object: _90.BlockMetaAminoMsg): _90.BlockMeta;
            fromProtoMsg(message: _90.BlockMetaProtoMsg): _90.BlockMeta;
            toProto(message: _90.BlockMeta): Uint8Array;
            toProtoMsg(message: _90.BlockMeta): _90.BlockMetaProtoMsg;
        };
        TxProof: {
            typeUrl: string;
            is(o: any): o is _90.TxProof;
            isSDK(o: any): o is _90.TxProofSDKType;
            isAmino(o: any): o is _90.TxProofAmino;
            encode(message: _90.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.TxProof;
            fromJSON(object: any): _90.TxProof;
            toJSON(message: _90.TxProof): {
                rootHash: string;
                data: string;
                proof?: {
                    total: string;
                    index: string;
                    leafHash: string;
                    aunts: string[];
                };
            };
            fromPartial(object: Partial<_90.TxProof>): _90.TxProof;
            fromAmino(object: _90.TxProofAmino): _90.TxProof;
            toAmino(message: _90.TxProof): _90.TxProofAmino;
            fromAminoMsg(object: _90.TxProofAminoMsg): _90.TxProof;
            fromProtoMsg(message: _90.TxProofProtoMsg): _90.TxProof;
            toProto(message: _90.TxProof): Uint8Array;
            toProtoMsg(message: _90.TxProof): _90.TxProofProtoMsg;
        };
        ConsensusParams: {
            typeUrl: string;
            is(o: any): o is _89.ConsensusParams;
            isSDK(o: any): o is _89.ConsensusParamsSDKType;
            isAmino(o: any): o is _89.ConsensusParamsAmino;
            encode(message: _89.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.ConsensusParams;
            fromJSON(object: any): _89.ConsensusParams;
            toJSON(message: _89.ConsensusParams): {
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
            fromPartial(object: Partial<_89.ConsensusParams>): _89.ConsensusParams;
            fromAmino(object: _89.ConsensusParamsAmino): _89.ConsensusParams;
            toAmino(message: _89.ConsensusParams): _89.ConsensusParamsAmino;
            fromAminoMsg(object: _89.ConsensusParamsAminoMsg): _89.ConsensusParams;
            fromProtoMsg(message: _89.ConsensusParamsProtoMsg): _89.ConsensusParams;
            toProto(message: _89.ConsensusParams): Uint8Array;
            toProtoMsg(message: _89.ConsensusParams): _89.ConsensusParamsProtoMsg;
        };
        BlockParams: {
            typeUrl: string;
            is(o: any): o is _89.BlockParams;
            isSDK(o: any): o is _89.BlockParamsSDKType;
            isAmino(o: any): o is _89.BlockParamsAmino;
            encode(message: _89.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.BlockParams;
            fromJSON(object: any): _89.BlockParams;
            toJSON(message: _89.BlockParams): {
                maxBytes: string;
                maxGas: string;
                timeIotaMs: string;
            };
            fromPartial(object: Partial<_89.BlockParams>): _89.BlockParams;
            fromAmino(object: _89.BlockParamsAmino): _89.BlockParams;
            toAmino(message: _89.BlockParams): _89.BlockParamsAmino;
            fromAminoMsg(object: _89.BlockParamsAminoMsg): _89.BlockParams;
            fromProtoMsg(message: _89.BlockParamsProtoMsg): _89.BlockParams;
            toProto(message: _89.BlockParams): Uint8Array;
            toProtoMsg(message: _89.BlockParams): _89.BlockParamsProtoMsg;
        };
        EvidenceParams: {
            typeUrl: string;
            is(o: any): o is _89.EvidenceParams;
            isSDK(o: any): o is _89.EvidenceParamsSDKType;
            isAmino(o: any): o is _89.EvidenceParamsAmino;
            encode(message: _89.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.EvidenceParams;
            fromJSON(object: any): _89.EvidenceParams;
            toJSON(message: _89.EvidenceParams): {
                maxAgeNumBlocks: string;
                maxAgeDuration: {
                    seconds: string;
                    nanos: number;
                };
                maxBytes: string;
            };
            fromPartial(object: Partial<_89.EvidenceParams>): _89.EvidenceParams;
            fromAmino(object: _89.EvidenceParamsAmino): _89.EvidenceParams;
            toAmino(message: _89.EvidenceParams): _89.EvidenceParamsAmino;
            fromAminoMsg(object: _89.EvidenceParamsAminoMsg): _89.EvidenceParams;
            fromProtoMsg(message: _89.EvidenceParamsProtoMsg): _89.EvidenceParams;
            toProto(message: _89.EvidenceParams): Uint8Array;
            toProtoMsg(message: _89.EvidenceParams): _89.EvidenceParamsProtoMsg;
        };
        ValidatorParams: {
            typeUrl: string;
            is(o: any): o is _89.ValidatorParams;
            isSDK(o: any): o is _89.ValidatorParamsSDKType;
            isAmino(o: any): o is _89.ValidatorParamsAmino;
            encode(message: _89.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.ValidatorParams;
            fromJSON(object: any): _89.ValidatorParams;
            toJSON(message: _89.ValidatorParams): {
                pubKeyTypes: string[];
            };
            fromPartial(object: Partial<_89.ValidatorParams>): _89.ValidatorParams;
            fromAmino(object: _89.ValidatorParamsAmino): _89.ValidatorParams;
            toAmino(message: _89.ValidatorParams): _89.ValidatorParamsAmino;
            fromAminoMsg(object: _89.ValidatorParamsAminoMsg): _89.ValidatorParams;
            fromProtoMsg(message: _89.ValidatorParamsProtoMsg): _89.ValidatorParams;
            toProto(message: _89.ValidatorParams): Uint8Array;
            toProtoMsg(message: _89.ValidatorParams): _89.ValidatorParamsProtoMsg;
        };
        VersionParams: {
            typeUrl: string;
            is(o: any): o is _89.VersionParams;
            isSDK(o: any): o is _89.VersionParamsSDKType;
            isAmino(o: any): o is _89.VersionParamsAmino;
            encode(message: _89.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.VersionParams;
            fromJSON(object: any): _89.VersionParams;
            toJSON(message: _89.VersionParams): {
                appVersion: string;
            };
            fromPartial(object: Partial<_89.VersionParams>): _89.VersionParams;
            fromAmino(object: _89.VersionParamsAmino): _89.VersionParams;
            toAmino(message: _89.VersionParams): _89.VersionParamsAmino;
            fromAminoMsg(object: _89.VersionParamsAminoMsg): _89.VersionParams;
            fromProtoMsg(message: _89.VersionParamsProtoMsg): _89.VersionParams;
            toProto(message: _89.VersionParams): Uint8Array;
            toProtoMsg(message: _89.VersionParams): _89.VersionParamsProtoMsg;
        };
        HashedParams: {
            typeUrl: string;
            is(o: any): o is _89.HashedParams;
            isSDK(o: any): o is _89.HashedParamsSDKType;
            isAmino(o: any): o is _89.HashedParamsAmino;
            encode(message: _89.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.HashedParams;
            fromJSON(object: any): _89.HashedParams;
            toJSON(message: _89.HashedParams): {
                blockMaxBytes: string;
                blockMaxGas: string;
            };
            fromPartial(object: Partial<_89.HashedParams>): _89.HashedParams;
            fromAmino(object: _89.HashedParamsAmino): _89.HashedParams;
            toAmino(message: _89.HashedParams): _89.HashedParamsAmino;
            fromAminoMsg(object: _89.HashedParamsAminoMsg): _89.HashedParams;
            fromProtoMsg(message: _89.HashedParamsProtoMsg): _89.HashedParams;
            toProto(message: _89.HashedParams): Uint8Array;
            toProtoMsg(message: _89.HashedParams): _89.HashedParamsProtoMsg;
        };
        Evidence: {
            typeUrl: string;
            is(o: any): o is _88.Evidence;
            isSDK(o: any): o is _88.EvidenceSDKType;
            isAmino(o: any): o is _88.EvidenceAmino;
            encode(message: _88.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.Evidence;
            fromJSON(object: any): _88.Evidence;
            toJSON(message: _88.Evidence): {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type: _90.SignedMsgType;
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
                        type: _90.SignedMsgType;
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
                                    blockIdFlag: _90.BlockIDFlag;
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
            fromPartial(object: Partial<_88.Evidence>): _88.Evidence;
            fromAmino(object: _88.EvidenceAmino): _88.Evidence;
            toAmino(message: _88.Evidence): _88.EvidenceAmino;
            fromAminoMsg(object: _88.EvidenceAminoMsg): _88.Evidence;
            fromProtoMsg(message: _88.EvidenceProtoMsg): _88.Evidence;
            toProto(message: _88.Evidence): Uint8Array;
            toProtoMsg(message: _88.Evidence): _88.EvidenceProtoMsg;
        };
        DuplicateVoteEvidence: {
            typeUrl: string;
            is(o: any): o is _88.DuplicateVoteEvidence;
            isSDK(o: any): o is _88.DuplicateVoteEvidenceSDKType;
            isAmino(o: any): o is _88.DuplicateVoteEvidenceAmino;
            encode(message: _88.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.DuplicateVoteEvidence;
            fromJSON(object: any): _88.DuplicateVoteEvidence;
            toJSON(message: _88.DuplicateVoteEvidence): {
                voteA?: {
                    type: _90.SignedMsgType;
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
                    type: _90.SignedMsgType;
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
            fromPartial(object: Partial<_88.DuplicateVoteEvidence>): _88.DuplicateVoteEvidence;
            fromAmino(object: _88.DuplicateVoteEvidenceAmino): _88.DuplicateVoteEvidence;
            toAmino(message: _88.DuplicateVoteEvidence): _88.DuplicateVoteEvidenceAmino;
            fromAminoMsg(object: _88.DuplicateVoteEvidenceAminoMsg): _88.DuplicateVoteEvidence;
            fromProtoMsg(message: _88.DuplicateVoteEvidenceProtoMsg): _88.DuplicateVoteEvidence;
            toProto(message: _88.DuplicateVoteEvidence): Uint8Array;
            toProtoMsg(message: _88.DuplicateVoteEvidence): _88.DuplicateVoteEvidenceProtoMsg;
        };
        LightClientAttackEvidence: {
            typeUrl: string;
            is(o: any): o is _88.LightClientAttackEvidence;
            isSDK(o: any): o is _88.LightClientAttackEvidenceSDKType;
            isAmino(o: any): o is _88.LightClientAttackEvidenceAmino;
            encode(message: _88.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.LightClientAttackEvidence;
            fromJSON(object: any): _88.LightClientAttackEvidence;
            toJSON(message: _88.LightClientAttackEvidence): {
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
                                blockIdFlag: _90.BlockIDFlag;
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
            fromPartial(object: Partial<_88.LightClientAttackEvidence>): _88.LightClientAttackEvidence;
            fromAmino(object: _88.LightClientAttackEvidenceAmino): _88.LightClientAttackEvidence;
            toAmino(message: _88.LightClientAttackEvidence): _88.LightClientAttackEvidenceAmino;
            fromAminoMsg(object: _88.LightClientAttackEvidenceAminoMsg): _88.LightClientAttackEvidence;
            fromProtoMsg(message: _88.LightClientAttackEvidenceProtoMsg): _88.LightClientAttackEvidence;
            toProto(message: _88.LightClientAttackEvidence): Uint8Array;
            toProtoMsg(message: _88.LightClientAttackEvidence): _88.LightClientAttackEvidenceProtoMsg;
        };
        EvidenceList: {
            typeUrl: string;
            is(o: any): o is _88.EvidenceList;
            isSDK(o: any): o is _88.EvidenceListSDKType;
            isAmino(o: any): o is _88.EvidenceListAmino;
            encode(message: _88.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.EvidenceList;
            fromJSON(object: any): _88.EvidenceList;
            toJSON(message: _88.EvidenceList): {
                evidence: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type: _90.SignedMsgType;
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
                            type: _90.SignedMsgType;
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
                                        blockIdFlag: _90.BlockIDFlag;
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
            fromPartial(object: Partial<_88.EvidenceList>): _88.EvidenceList;
            fromAmino(object: _88.EvidenceListAmino): _88.EvidenceList;
            toAmino(message: _88.EvidenceList): _88.EvidenceListAmino;
            fromAminoMsg(object: _88.EvidenceListAminoMsg): _88.EvidenceList;
            fromProtoMsg(message: _88.EvidenceListProtoMsg): _88.EvidenceList;
            toProto(message: _88.EvidenceList): Uint8Array;
            toProtoMsg(message: _88.EvidenceList): _88.EvidenceListProtoMsg;
        };
        Block: {
            typeUrl: string;
            is(o: any): o is _87.Block;
            isSDK(o: any): o is _87.BlockSDKType;
            isAmino(o: any): o is _87.BlockAmino;
            encode(message: _87.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.Block;
            fromJSON(object: any): _87.Block;
            toJSON(message: _87.Block): {
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
                                type: _90.SignedMsgType;
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
                                type: _90.SignedMsgType;
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
                                            blockIdFlag: _90.BlockIDFlag;
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
                        blockIdFlag: _90.BlockIDFlag;
                        validatorAddress: string;
                        timestamp: string;
                        signature: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_87.Block>): _87.Block;
            fromAmino(object: _87.BlockAmino): _87.Block;
            toAmino(message: _87.Block): _87.BlockAmino;
            fromAminoMsg(object: _87.BlockAminoMsg): _87.Block;
            fromProtoMsg(message: _87.BlockProtoMsg): _87.Block;
            toProto(message: _87.Block): Uint8Array;
            toProtoMsg(message: _87.Block): _87.BlockProtoMsg;
        };
    };
    const version: {
        App: {
            typeUrl: string;
            is(o: any): o is _92.App;
            isSDK(o: any): o is _92.AppSDKType;
            isAmino(o: any): o is _92.AppAmino;
            encode(message: _92.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.App;
            fromJSON(object: any): _92.App;
            toJSON(message: _92.App): {
                protocol: string;
                software: string;
            };
            fromPartial(object: Partial<_92.App>): _92.App;
            fromAmino(object: _92.AppAmino): _92.App;
            toAmino(message: _92.App): _92.AppAmino;
            fromAminoMsg(object: _92.AppAminoMsg): _92.App;
            fromProtoMsg(message: _92.AppProtoMsg): _92.App;
            toProto(message: _92.App): Uint8Array;
            toProtoMsg(message: _92.App): _92.AppProtoMsg;
        };
        Consensus: {
            typeUrl: string;
            is(o: any): o is _92.Consensus;
            isSDK(o: any): o is _92.ConsensusSDKType;
            isAmino(o: any): o is _92.ConsensusAmino;
            encode(message: _92.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.Consensus;
            fromJSON(object: any): _92.Consensus;
            toJSON(message: _92.Consensus): {
                block: string;
                app: string;
            };
            fromPartial(object: Partial<_92.Consensus>): _92.Consensus;
            fromAmino(object: _92.ConsensusAmino): _92.Consensus;
            toAmino(message: _92.Consensus): _92.ConsensusAmino;
            fromAminoMsg(object: _92.ConsensusAminoMsg): _92.Consensus;
            fromProtoMsg(message: _92.ConsensusProtoMsg): _92.Consensus;
            toProto(message: _92.Consensus): Uint8Array;
            toProtoMsg(message: _92.Consensus): _92.ConsensusProtoMsg;
        };
    };
}
