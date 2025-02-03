import * as _1 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _1.HashOp;
    hashOpToJSON(object: _1.HashOp): string;
    lengthOpFromJSON(object: any): _1.LengthOp;
    lengthOpToJSON(object: _1.LengthOp): string;
    HashOp: typeof _1.HashOp;
    HashOpSDKType: typeof _1.HashOp;
    HashOpAmino: typeof _1.HashOp;
    LengthOp: typeof _1.LengthOp;
    LengthOpSDKType: typeof _1.LengthOp;
    LengthOpAmino: typeof _1.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        is(o: any): o is _1.ExistenceProof;
        isSDK(o: any): o is _1.ExistenceProofSDKType;
        isAmino(o: any): o is _1.ExistenceProofAmino;
        encode(message: _1.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.ExistenceProof;
        fromJSON(object: any): _1.ExistenceProof;
        toJSON(message: _1.ExistenceProof): {
            key: string;
            value: string;
            leaf?: {
                hash: _1.HashOp;
                prehashKey: _1.HashOp;
                prehashValue: _1.HashOp;
                length: _1.LengthOp;
                prefix: string;
            };
            path: {
                hash: _1.HashOp;
                prefix: string;
                suffix: string;
            }[];
        };
        fromPartial(object: Partial<_1.ExistenceProof>): _1.ExistenceProof;
        fromAmino(object: _1.ExistenceProofAmino): _1.ExistenceProof;
        toAmino(message: _1.ExistenceProof): _1.ExistenceProofAmino;
        fromAminoMsg(object: _1.ExistenceProofAminoMsg): _1.ExistenceProof;
        fromProtoMsg(message: _1.ExistenceProofProtoMsg): _1.ExistenceProof;
        toProto(message: _1.ExistenceProof): Uint8Array;
        toProtoMsg(message: _1.ExistenceProof): _1.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        is(o: any): o is _1.NonExistenceProof;
        isSDK(o: any): o is _1.NonExistenceProofSDKType;
        isAmino(o: any): o is _1.NonExistenceProofAmino;
        encode(message: _1.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.NonExistenceProof;
        fromJSON(object: any): _1.NonExistenceProof;
        toJSON(message: _1.NonExistenceProof): {
            key: string;
            left?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
                    prefix: string;
                };
                path: {
                    hash: _1.HashOp;
                    prefix: string;
                    suffix: string;
                }[];
            };
            right?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
                    prefix: string;
                };
                path: {
                    hash: _1.HashOp;
                    prefix: string;
                    suffix: string;
                }[];
            };
        };
        fromPartial(object: Partial<_1.NonExistenceProof>): _1.NonExistenceProof;
        fromAmino(object: _1.NonExistenceProofAmino): _1.NonExistenceProof;
        toAmino(message: _1.NonExistenceProof): _1.NonExistenceProofAmino;
        fromAminoMsg(object: _1.NonExistenceProofAminoMsg): _1.NonExistenceProof;
        fromProtoMsg(message: _1.NonExistenceProofProtoMsg): _1.NonExistenceProof;
        toProto(message: _1.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _1.NonExistenceProof): _1.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        is(o: any): o is _1.CommitmentProof;
        isSDK(o: any): o is _1.CommitmentProofSDKType;
        isAmino(o: any): o is _1.CommitmentProofAmino;
        encode(message: _1.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CommitmentProof;
        fromJSON(object: any): _1.CommitmentProof;
        toJSON(message: _1.CommitmentProof): {
            exist?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
                    prefix: string;
                };
                path: {
                    hash: _1.HashOp;
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
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: {
                        hash: _1.HashOp;
                        prefix: string;
                        suffix: string;
                    }[];
                };
                right?: {
                    key: string;
                    value: string;
                    leaf?: {
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: {
                        hash: _1.HashOp;
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
                            hash: _1.HashOp;
                            prehashKey: _1.HashOp;
                            prehashValue: _1.HashOp;
                            length: _1.LengthOp;
                            prefix: string;
                        };
                        path: {
                            hash: _1.HashOp;
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
                                hash: _1.HashOp;
                                prehashKey: _1.HashOp;
                                prehashValue: _1.HashOp;
                                length: _1.LengthOp;
                                prefix: string;
                            };
                            path: {
                                hash: _1.HashOp;
                                prefix: string;
                                suffix: string;
                            }[];
                        };
                        right?: {
                            key: string;
                            value: string;
                            leaf?: {
                                hash: _1.HashOp;
                                prehashKey: _1.HashOp;
                                prehashValue: _1.HashOp;
                                length: _1.LengthOp;
                                prefix: string;
                            };
                            path: {
                                hash: _1.HashOp;
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
                            hash: _1.HashOp;
                            prehashKey: _1.HashOp;
                            prehashValue: _1.HashOp;
                            length: _1.LengthOp;
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
                                hash: _1.HashOp;
                                prehashKey: _1.HashOp;
                                prehashValue: _1.HashOp;
                                length: _1.LengthOp;
                                prefix: string;
                            };
                            path: number[];
                        };
                        right?: {
                            key: string;
                            value: string;
                            leaf?: {
                                hash: _1.HashOp;
                                prehashKey: _1.HashOp;
                                prehashValue: _1.HashOp;
                                length: _1.LengthOp;
                                prefix: string;
                            };
                            path: number[];
                        };
                    };
                }[];
                lookupInners: {
                    hash: _1.HashOp;
                    prefix: string;
                    suffix: string;
                }[];
            };
        };
        fromPartial(object: Partial<_1.CommitmentProof>): _1.CommitmentProof;
        fromAmino(object: _1.CommitmentProofAmino): _1.CommitmentProof;
        toAmino(message: _1.CommitmentProof): _1.CommitmentProofAmino;
        fromAminoMsg(object: _1.CommitmentProofAminoMsg): _1.CommitmentProof;
        fromProtoMsg(message: _1.CommitmentProofProtoMsg): _1.CommitmentProof;
        toProto(message: _1.CommitmentProof): Uint8Array;
        toProtoMsg(message: _1.CommitmentProof): _1.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        is(o: any): o is _1.LeafOp;
        isSDK(o: any): o is _1.LeafOpSDKType;
        isAmino(o: any): o is _1.LeafOpAmino;
        encode(message: _1.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.LeafOp;
        fromJSON(object: any): _1.LeafOp;
        toJSON(message: _1.LeafOp): {
            hash: _1.HashOp;
            prehashKey: _1.HashOp;
            prehashValue: _1.HashOp;
            length: _1.LengthOp;
            prefix: string;
        };
        fromPartial(object: Partial<_1.LeafOp>): _1.LeafOp;
        fromAmino(object: _1.LeafOpAmino): _1.LeafOp;
        toAmino(message: _1.LeafOp): _1.LeafOpAmino;
        fromAminoMsg(object: _1.LeafOpAminoMsg): _1.LeafOp;
        fromProtoMsg(message: _1.LeafOpProtoMsg): _1.LeafOp;
        toProto(message: _1.LeafOp): Uint8Array;
        toProtoMsg(message: _1.LeafOp): _1.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        is(o: any): o is _1.InnerOp;
        isSDK(o: any): o is _1.InnerOpSDKType;
        isAmino(o: any): o is _1.InnerOpAmino;
        encode(message: _1.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.InnerOp;
        fromJSON(object: any): _1.InnerOp;
        toJSON(message: _1.InnerOp): {
            hash: _1.HashOp;
            prefix: string;
            suffix: string;
        };
        fromPartial(object: Partial<_1.InnerOp>): _1.InnerOp;
        fromAmino(object: _1.InnerOpAmino): _1.InnerOp;
        toAmino(message: _1.InnerOp): _1.InnerOpAmino;
        fromAminoMsg(object: _1.InnerOpAminoMsg): _1.InnerOp;
        fromProtoMsg(message: _1.InnerOpProtoMsg): _1.InnerOp;
        toProto(message: _1.InnerOp): Uint8Array;
        toProtoMsg(message: _1.InnerOp): _1.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        is(o: any): o is _1.ProofSpec;
        isSDK(o: any): o is _1.ProofSpecSDKType;
        isAmino(o: any): o is _1.ProofSpecAmino;
        encode(message: _1.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.ProofSpec;
        fromJSON(object: any): _1.ProofSpec;
        toJSON(message: _1.ProofSpec): {
            leafSpec?: {
                hash: _1.HashOp;
                prehashKey: _1.HashOp;
                prehashValue: _1.HashOp;
                length: _1.LengthOp;
                prefix: string;
            };
            innerSpec?: {
                childOrder: number[];
                childSize: number;
                minPrefixLength: number;
                maxPrefixLength: number;
                emptyChild: string;
                hash: _1.HashOp;
            };
            maxDepth: number;
            minDepth: number;
        };
        fromPartial(object: Partial<_1.ProofSpec>): _1.ProofSpec;
        fromAmino(object: _1.ProofSpecAmino): _1.ProofSpec;
        toAmino(message: _1.ProofSpec): _1.ProofSpecAmino;
        fromAminoMsg(object: _1.ProofSpecAminoMsg): _1.ProofSpec;
        fromProtoMsg(message: _1.ProofSpecProtoMsg): _1.ProofSpec;
        toProto(message: _1.ProofSpec): Uint8Array;
        toProtoMsg(message: _1.ProofSpec): _1.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        is(o: any): o is _1.InnerSpec;
        isSDK(o: any): o is _1.InnerSpecSDKType;
        isAmino(o: any): o is _1.InnerSpecAmino;
        encode(message: _1.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.InnerSpec;
        fromJSON(object: any): _1.InnerSpec;
        toJSON(message: _1.InnerSpec): {
            childOrder: number[];
            childSize: number;
            minPrefixLength: number;
            maxPrefixLength: number;
            emptyChild: string;
            hash: _1.HashOp;
        };
        fromPartial(object: Partial<_1.InnerSpec>): _1.InnerSpec;
        fromAmino(object: _1.InnerSpecAmino): _1.InnerSpec;
        toAmino(message: _1.InnerSpec): _1.InnerSpecAmino;
        fromAminoMsg(object: _1.InnerSpecAminoMsg): _1.InnerSpec;
        fromProtoMsg(message: _1.InnerSpecProtoMsg): _1.InnerSpec;
        toProto(message: _1.InnerSpec): Uint8Array;
        toProtoMsg(message: _1.InnerSpec): _1.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        is(o: any): o is _1.BatchProof;
        isSDK(o: any): o is _1.BatchProofSDKType;
        isAmino(o: any): o is _1.BatchProofAmino;
        encode(message: _1.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.BatchProof;
        fromJSON(object: any): _1.BatchProof;
        toJSON(message: _1.BatchProof): {
            entries: {
                exist?: {
                    key: string;
                    value: string;
                    leaf?: {
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: {
                        hash: _1.HashOp;
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
                            hash: _1.HashOp;
                            prehashKey: _1.HashOp;
                            prehashValue: _1.HashOp;
                            length: _1.LengthOp;
                            prefix: string;
                        };
                        path: {
                            hash: _1.HashOp;
                            prefix: string;
                            suffix: string;
                        }[];
                    };
                    right?: {
                        key: string;
                        value: string;
                        leaf?: {
                            hash: _1.HashOp;
                            prehashKey: _1.HashOp;
                            prehashValue: _1.HashOp;
                            length: _1.LengthOp;
                            prefix: string;
                        };
                        path: {
                            hash: _1.HashOp;
                            prefix: string;
                            suffix: string;
                        }[];
                    };
                };
            }[];
        };
        fromPartial(object: Partial<_1.BatchProof>): _1.BatchProof;
        fromAmino(object: _1.BatchProofAmino): _1.BatchProof;
        toAmino(message: _1.BatchProof): _1.BatchProofAmino;
        fromAminoMsg(object: _1.BatchProofAminoMsg): _1.BatchProof;
        fromProtoMsg(message: _1.BatchProofProtoMsg): _1.BatchProof;
        toProto(message: _1.BatchProof): Uint8Array;
        toProtoMsg(message: _1.BatchProof): _1.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        is(o: any): o is _1.BatchEntry;
        isSDK(o: any): o is _1.BatchEntrySDKType;
        isAmino(o: any): o is _1.BatchEntryAmino;
        encode(message: _1.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.BatchEntry;
        fromJSON(object: any): _1.BatchEntry;
        toJSON(message: _1.BatchEntry): {
            exist?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
                    prefix: string;
                };
                path: {
                    hash: _1.HashOp;
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
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: {
                        hash: _1.HashOp;
                        prefix: string;
                        suffix: string;
                    }[];
                };
                right?: {
                    key: string;
                    value: string;
                    leaf?: {
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: {
                        hash: _1.HashOp;
                        prefix: string;
                        suffix: string;
                    }[];
                };
            };
        };
        fromPartial(object: Partial<_1.BatchEntry>): _1.BatchEntry;
        fromAmino(object: _1.BatchEntryAmino): _1.BatchEntry;
        toAmino(message: _1.BatchEntry): _1.BatchEntryAmino;
        fromAminoMsg(object: _1.BatchEntryAminoMsg): _1.BatchEntry;
        fromProtoMsg(message: _1.BatchEntryProtoMsg): _1.BatchEntry;
        toProto(message: _1.BatchEntry): Uint8Array;
        toProtoMsg(message: _1.BatchEntry): _1.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        is(o: any): o is _1.CompressedBatchProof;
        isSDK(o: any): o is _1.CompressedBatchProofSDKType;
        isAmino(o: any): o is _1.CompressedBatchProofAmino;
        encode(message: _1.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedBatchProof;
        fromJSON(object: any): _1.CompressedBatchProof;
        toJSON(message: _1.CompressedBatchProof): {
            entries: {
                exist?: {
                    key: string;
                    value: string;
                    leaf?: {
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
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
                            hash: _1.HashOp;
                            prehashKey: _1.HashOp;
                            prehashValue: _1.HashOp;
                            length: _1.LengthOp;
                            prefix: string;
                        };
                        path: number[];
                    };
                    right?: {
                        key: string;
                        value: string;
                        leaf?: {
                            hash: _1.HashOp;
                            prehashKey: _1.HashOp;
                            prehashValue: _1.HashOp;
                            length: _1.LengthOp;
                            prefix: string;
                        };
                        path: number[];
                    };
                };
            }[];
            lookupInners: {
                hash: _1.HashOp;
                prefix: string;
                suffix: string;
            }[];
        };
        fromPartial(object: Partial<_1.CompressedBatchProof>): _1.CompressedBatchProof;
        fromAmino(object: _1.CompressedBatchProofAmino): _1.CompressedBatchProof;
        toAmino(message: _1.CompressedBatchProof): _1.CompressedBatchProofAmino;
        fromAminoMsg(object: _1.CompressedBatchProofAminoMsg): _1.CompressedBatchProof;
        fromProtoMsg(message: _1.CompressedBatchProofProtoMsg): _1.CompressedBatchProof;
        toProto(message: _1.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _1.CompressedBatchProof): _1.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        is(o: any): o is _1.CompressedBatchEntry;
        isSDK(o: any): o is _1.CompressedBatchEntrySDKType;
        isAmino(o: any): o is _1.CompressedBatchEntryAmino;
        encode(message: _1.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedBatchEntry;
        fromJSON(object: any): _1.CompressedBatchEntry;
        toJSON(message: _1.CompressedBatchEntry): {
            exist?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
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
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: number[];
                };
                right?: {
                    key: string;
                    value: string;
                    leaf?: {
                        hash: _1.HashOp;
                        prehashKey: _1.HashOp;
                        prehashValue: _1.HashOp;
                        length: _1.LengthOp;
                        prefix: string;
                    };
                    path: number[];
                };
            };
        };
        fromPartial(object: Partial<_1.CompressedBatchEntry>): _1.CompressedBatchEntry;
        fromAmino(object: _1.CompressedBatchEntryAmino): _1.CompressedBatchEntry;
        toAmino(message: _1.CompressedBatchEntry): _1.CompressedBatchEntryAmino;
        fromAminoMsg(object: _1.CompressedBatchEntryAminoMsg): _1.CompressedBatchEntry;
        fromProtoMsg(message: _1.CompressedBatchEntryProtoMsg): _1.CompressedBatchEntry;
        toProto(message: _1.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _1.CompressedBatchEntry): _1.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        is(o: any): o is _1.CompressedExistenceProof;
        isSDK(o: any): o is _1.CompressedExistenceProofSDKType;
        isAmino(o: any): o is _1.CompressedExistenceProofAmino;
        encode(message: _1.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedExistenceProof;
        fromJSON(object: any): _1.CompressedExistenceProof;
        toJSON(message: _1.CompressedExistenceProof): {
            key: string;
            value: string;
            leaf?: {
                hash: _1.HashOp;
                prehashKey: _1.HashOp;
                prehashValue: _1.HashOp;
                length: _1.LengthOp;
                prefix: string;
            };
            path: number[];
        };
        fromPartial(object: Partial<_1.CompressedExistenceProof>): _1.CompressedExistenceProof;
        fromAmino(object: _1.CompressedExistenceProofAmino): _1.CompressedExistenceProof;
        toAmino(message: _1.CompressedExistenceProof): _1.CompressedExistenceProofAmino;
        fromAminoMsg(object: _1.CompressedExistenceProofAminoMsg): _1.CompressedExistenceProof;
        fromProtoMsg(message: _1.CompressedExistenceProofProtoMsg): _1.CompressedExistenceProof;
        toProto(message: _1.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _1.CompressedExistenceProof): _1.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        is(o: any): o is _1.CompressedNonExistenceProof;
        isSDK(o: any): o is _1.CompressedNonExistenceProofSDKType;
        isAmino(o: any): o is _1.CompressedNonExistenceProofAmino;
        encode(message: _1.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedNonExistenceProof;
        fromJSON(object: any): _1.CompressedNonExistenceProof;
        toJSON(message: _1.CompressedNonExistenceProof): {
            key: string;
            left?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
                    prefix: string;
                };
                path: number[];
            };
            right?: {
                key: string;
                value: string;
                leaf?: {
                    hash: _1.HashOp;
                    prehashKey: _1.HashOp;
                    prehashValue: _1.HashOp;
                    length: _1.LengthOp;
                    prefix: string;
                };
                path: number[];
            };
        };
        fromPartial(object: Partial<_1.CompressedNonExistenceProof>): _1.CompressedNonExistenceProof;
        fromAmino(object: _1.CompressedNonExistenceProofAmino): _1.CompressedNonExistenceProof;
        toAmino(message: _1.CompressedNonExistenceProof): _1.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _1.CompressedNonExistenceProofAminoMsg): _1.CompressedNonExistenceProof;
        fromProtoMsg(message: _1.CompressedNonExistenceProofProtoMsg): _1.CompressedNonExistenceProof;
        toProto(message: _1.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _1.CompressedNonExistenceProof): _1.CompressedNonExistenceProofProtoMsg;
    };
};
