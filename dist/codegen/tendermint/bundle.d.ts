import * as _74 from "./abci/types";
import * as _75 from "./crypto/keys";
import * as _76 from "./crypto/proof";
import * as _77 from "./libs/bits/types";
import * as _78 from "./p2p/types";
import * as _79 from "./types/block";
import * as _80 from "./types/evidence";
import * as _81 from "./types/params";
import * as _82 from "./types/types";
import * as _83 from "./types/validator";
import * as _84 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _74.CheckTxType;
        checkTxTypeToJSON(object: _74.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _74.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _74.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _74.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _74.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _74.EvidenceType;
        evidenceTypeToJSON(object: _74.EvidenceType): string;
        CheckTxType: typeof _74.CheckTxType;
        CheckTxTypeSDKType: typeof _74.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _74.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _74.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _74.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _74.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _74.EvidenceType;
        EvidenceTypeSDKType: typeof _74.EvidenceType;
        Request: {
            encode(message: _74.Request, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Request;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: bigint;
                    p2pVersion?: bigint;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: bigint;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: bigint;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: bigint;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _74.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        height?: bigint;
                        time?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        totalVotingPower?: bigint;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _74.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: bigint;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: bigint;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _74.Request;
        };
        RequestEcho: {
            encode(message: _74.RequestEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestEcho;
            fromPartial(object: {
                message?: string;
            }): _74.RequestEcho;
        };
        RequestFlush: {
            encode(_: _74.RequestFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestFlush;
            fromPartial(_: {}): _74.RequestFlush;
        };
        RequestInfo: {
            encode(message: _74.RequestInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestInfo;
            fromPartial(object: {
                version?: string;
                blockVersion?: bigint;
                p2pVersion?: bigint;
            }): _74.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _74.RequestSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestSetOption;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _74.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _74.RequestInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestInitChain;
            fromPartial(object: {
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: bigint;
            }): _74.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _74.RequestQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestQuery;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: bigint;
                prove?: boolean;
            }): _74.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _74.RequestBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestBeginBlock;
            fromPartial(object: {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: bigint;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _74.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    height?: bigint;
                    time?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    totalVotingPower?: bigint;
                }[];
            }): _74.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _74.RequestCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestCheckTx;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _74.CheckTxType;
            }): _74.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _74.RequestDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestDeliverTx;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _74.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _74.RequestEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestEndBlock;
            fromPartial(object: {
                height?: bigint;
            }): _74.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _74.RequestCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestCommit;
            fromPartial(_: {}): _74.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _74.RequestListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestListSnapshots;
            fromPartial(_: {}): _74.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _74.RequestOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestOfferSnapshot;
            fromPartial(object: {
                snapshot?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _74.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _74.RequestLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestLoadSnapshotChunk;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunk?: number;
            }): _74.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _74.RequestApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.RequestApplySnapshotChunk;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _74.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _74.Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Response;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: bigint;
                    lastBlockHeight?: bigint;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: bigint;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: bigint;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: bigint;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: bigint;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: bigint;
                            maxGas?: bigint;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: bigint;
                            maxAgeDuration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            maxBytes?: bigint;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: bigint;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: bigint;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: bigint;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _74.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _74.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _74.Response;
        };
        ResponseException: {
            encode(message: _74.ResponseException, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseException;
            fromPartial(object: {
                error?: string;
            }): _74.ResponseException;
        };
        ResponseEcho: {
            encode(message: _74.ResponseEcho, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseEcho;
            fromPartial(object: {
                message?: string;
            }): _74.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _74.ResponseFlush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseFlush;
            fromPartial(_: {}): _74.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _74.ResponseInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseInfo;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: bigint;
                lastBlockHeight?: bigint;
                lastBlockAppHash?: Uint8Array;
            }): _74.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _74.ResponseSetOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseSetOption;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _74.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _74.ResponseInitChain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseInitChain;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: bigint;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                appHash?: Uint8Array;
            }): _74.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _74.ResponseQuery, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseQuery;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: bigint;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: bigint;
                codespace?: string;
            }): _74.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _74.ResponseBeginBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseBeginBlock;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _74.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _74.ResponseCheckTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseCheckTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _74.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _74.ResponseDeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseDeliverTx;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: bigint;
                gasUsed?: bigint;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _74.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _74.ResponseEndBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseEndBlock;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: bigint;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: bigint;
                        maxGas?: bigint;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: bigint;
                        maxAgeDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxBytes?: bigint;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: bigint;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _74.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _74.ResponseCommit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseCommit;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: bigint;
            }): _74.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _74.ResponseListSnapshots, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseListSnapshots;
            fromPartial(object: {
                snapshots?: {
                    height?: bigint;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _74.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _74.ResponseOfferSnapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseOfferSnapshot;
            fromPartial(object: {
                result?: _74.ResponseOfferSnapshot_Result;
            }): _74.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _74.ResponseLoadSnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseLoadSnapshotChunk;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _74.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _74.ResponseApplySnapshotChunk, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ResponseApplySnapshotChunk;
            fromPartial(object: {
                result?: _74.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _74.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _74.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                };
                evidence?: {
                    maxAgeNumBlocks?: bigint;
                    maxAgeDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxBytes?: bigint;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: bigint;
                };
            }): _74.ConsensusParams;
        };
        BlockParams: {
            encode(message: _74.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.BlockParams;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
            }): _74.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _74.LastCommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.LastCommitInfo;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: bigint;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _74.LastCommitInfo;
        };
        Event: {
            encode(message: _74.Event, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Event;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _74.Event;
        };
        EventAttribute: {
            encode(message: _74.EventAttribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.EventAttribute;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _74.EventAttribute;
        };
        TxResult: {
            encode(message: _74.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.TxResult;
            fromPartial(object: {
                height?: bigint;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: bigint;
                    gasUsed?: bigint;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _74.TxResult;
        };
        Validator: {
            encode(message: _74.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                power?: bigint;
            }): _74.Validator;
        };
        ValidatorUpdate: {
            encode(message: _74.ValidatorUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.ValidatorUpdate;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: bigint;
            }): _74.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _74.VoteInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.VoteInfo;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                signedLastBlock?: boolean;
            }): _74.VoteInfo;
        };
        Evidence: {
            encode(message: _74.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Evidence;
            fromPartial(object: {
                type?: _74.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: bigint;
                };
                height?: bigint;
                time?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                totalVotingPower?: bigint;
            }): _74.Evidence;
        };
        Snapshot: {
            encode(message: _74.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _74.Snapshot;
            fromPartial(object: {
                height?: bigint;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _74.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _76.Proof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.Proof;
            fromPartial(object: {
                total?: bigint;
                index?: bigint;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _76.Proof;
        };
        ValueOp: {
            encode(message: _76.ValueOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.ValueOp;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _76.ValueOp;
        };
        DominoOp: {
            encode(message: _76.DominoOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.DominoOp;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _76.DominoOp;
        };
        ProofOp: {
            encode(message: _76.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.ProofOp;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _76.ProofOp;
        };
        ProofOps: {
            encode(message: _76.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _76.ProofOps;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _76.ProofOps;
        };
        PublicKey: {
            encode(message: _75.PublicKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _75.PublicKey;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _75.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _77.BitArray, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _77.BitArray;
                fromPartial(object: {
                    bits?: bigint;
                    elems?: bigint[];
                }): _77.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _78.ProtocolVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.ProtocolVersion;
            fromPartial(object: {
                p2p?: bigint;
                block?: bigint;
                app?: bigint;
            }): _78.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _78.NodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.NodeInfo;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: bigint;
                    block?: bigint;
                    app?: bigint;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _78.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _78.NodeInfoOther, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.NodeInfoOther;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _78.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _78.PeerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.PeerInfo;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    lastDialFailure?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    dialFailures?: number;
                }[];
                lastConnected?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _78.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _78.PeerAddressInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _78.PeerAddressInfo;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                lastDialFailure?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                dialFailures?: number;
            }): _78.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _83.ValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.ValidatorSet;
            fromPartial(object: {
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
            }): _83.ValidatorSet;
        };
        Validator: {
            encode(message: _83.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.Validator;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
                proposerPriority?: bigint;
            }): _83.Validator;
        };
        SimpleValidator: {
            encode(message: _83.SimpleValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _83.SimpleValidator;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: bigint;
            }): _83.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _82.BlockIDFlag;
        blockIDFlagToJSON(object: _82.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _82.SignedMsgType;
        signedMsgTypeToJSON(object: _82.SignedMsgType): string;
        BlockIDFlag: typeof _82.BlockIDFlag;
        BlockIDFlagSDKType: typeof _82.BlockIDFlag;
        SignedMsgType: typeof _82.SignedMsgType;
        SignedMsgTypeSDKType: typeof _82.SignedMsgType;
        PartSetHeader: {
            encode(message: _82.PartSetHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.PartSetHeader;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _82.PartSetHeader;
        };
        Part: {
            encode(message: _82.Part, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Part;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _82.Part;
        };
        BlockID: {
            encode(message: _82.BlockID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.BlockID;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _82.BlockID;
        };
        Header: {
            encode(message: _82.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Header;
            fromPartial(object: {
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
            }): _82.Header;
        };
        Data: {
            encode(message: _82.Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Data;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _82.Data;
        };
        Vote: {
            encode(message: _82.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Vote;
            fromPartial(object: {
                type?: _82.SignedMsgType;
                height?: bigint;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _82.Vote;
        };
        Commit: {
            encode(message: _82.Commit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Commit;
            fromPartial(object: {
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
                    blockIdFlag?: _82.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _82.Commit;
        };
        CommitSig: {
            encode(message: _82.CommitSig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.CommitSig;
            fromPartial(object: {
                blockIdFlag?: _82.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _82.CommitSig;
        };
        Proposal: {
            encode(message: _82.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.Proposal;
            fromPartial(object: {
                type?: _82.SignedMsgType;
                height?: bigint;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _82.Proposal;
        };
        SignedHeader: {
            encode(message: _82.SignedHeader, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.SignedHeader;
            fromPartial(object: {
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
                        blockIdFlag?: _82.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _82.SignedHeader;
        };
        LightBlock: {
            encode(message: _82.LightBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.LightBlock;
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
                            blockIdFlag?: _82.BlockIDFlag;
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
            }): _82.LightBlock;
        };
        BlockMeta: {
            encode(message: _82.BlockMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.BlockMeta;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: bigint;
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
                numTxs?: bigint;
            }): _82.BlockMeta;
        };
        TxProof: {
            encode(message: _82.TxProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _82.TxProof;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: bigint;
                    index?: bigint;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _82.TxProof;
        };
        ConsensusParams: {
            encode(message: _81.ConsensusParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ConsensusParams;
            fromPartial(object: {
                block?: {
                    maxBytes?: bigint;
                    maxGas?: bigint;
                    timeIotaMs?: bigint;
                };
                evidence?: {
                    maxAgeNumBlocks?: bigint;
                    maxAgeDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    maxBytes?: bigint;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: bigint;
                };
            }): _81.ConsensusParams;
        };
        BlockParams: {
            encode(message: _81.BlockParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.BlockParams;
            fromPartial(object: {
                maxBytes?: bigint;
                maxGas?: bigint;
                timeIotaMs?: bigint;
            }): _81.BlockParams;
        };
        EvidenceParams: {
            encode(message: _81.EvidenceParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.EvidenceParams;
            fromPartial(object: {
                maxAgeNumBlocks?: bigint;
                maxAgeDuration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                maxBytes?: bigint;
            }): _81.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _81.ValidatorParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.ValidatorParams;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _81.ValidatorParams;
        };
        VersionParams: {
            encode(message: _81.VersionParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.VersionParams;
            fromPartial(object: {
                appVersion?: bigint;
            }): _81.VersionParams;
        };
        HashedParams: {
            encode(message: _81.HashedParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _81.HashedParams;
            fromPartial(object: {
                blockMaxBytes?: bigint;
                blockMaxGas?: bigint;
            }): _81.HashedParams;
        };
        Evidence: {
            encode(message: _80.Evidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.Evidence;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _82.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _82.SignedMsgType;
                        height?: bigint;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: bigint;
                    validatorPower?: bigint;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
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
                                    blockIdFlag?: _82.BlockIDFlag;
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
                    };
                    commonHeight?: bigint;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: bigint;
                        proposerPriority?: bigint;
                    }[];
                    totalVotingPower?: bigint;
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                };
            }): _80.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _80.DuplicateVoteEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.DuplicateVoteEvidence;
            fromPartial(object: {
                voteA?: {
                    type?: _82.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _82.SignedMsgType;
                    height?: bigint;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: bigint;
                validatorPower?: bigint;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _80.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _80.LightClientAttackEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.LightClientAttackEvidence;
            fromPartial(object: {
                conflictingBlock?: {
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
                                blockIdFlag?: _82.BlockIDFlag;
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
                };
                commonHeight?: bigint;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: bigint;
                    proposerPriority?: bigint;
                }[];
                totalVotingPower?: bigint;
                timestamp?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _80.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _80.EvidenceList, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _80.EvidenceList;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _82.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _82.SignedMsgType;
                            height?: bigint;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: bigint;
                        validatorPower?: bigint;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
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
                                        blockIdFlag?: _82.BlockIDFlag;
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
                        };
                        commonHeight?: bigint;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: bigint;
                            proposerPriority?: bigint;
                        }[];
                        totalVotingPower?: bigint;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }[];
            }): _80.EvidenceList;
        };
        Block: {
            encode(message: _79.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _79.Block;
            fromPartial(object: {
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
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _82.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _82.SignedMsgType;
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: {
                                    seconds?: bigint;
                                    nanos?: number;
                                };
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: bigint;
                            validatorPower?: bigint;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
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
                                            blockIdFlag?: _82.BlockIDFlag;
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
                            };
                            commonHeight?: bigint;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            totalVotingPower?: bigint;
                            timestamp?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        };
                    }[];
                };
                lastCommit?: {
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
                        blockIdFlag?: _82.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _79.Block;
        };
    };
    const version: {
        App: {
            encode(message: _84.App, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.App;
            fromPartial(object: {
                protocol?: bigint;
                software?: string;
            }): _84.App;
        };
        Consensus: {
            encode(message: _84.Consensus, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _84.Consensus;
            fromPartial(object: {
                block?: bigint;
                app?: bigint;
            }): _84.Consensus;
        };
    };
}
