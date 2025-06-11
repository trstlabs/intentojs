import * as _56 from "./api/http";
import * as _57 from "./protobuf/any";
import * as _58 from "./protobuf/descriptor";
import * as _59 from "./protobuf/duration";
import * as _60 from "./protobuf/empty";
import * as _61 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            is(o: any): o is _56.Http;
            isSDK(o: any): o is _56.HttpSDKType;
            isAmino(o: any): o is _56.HttpAmino;
            encode(message: _56.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.Http;
            fromJSON(object: any): _56.Http;
            toJSON(message: _56.Http): {
                rules: {
                    selector: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind: string;
                        path: string;
                    };
                    body: string;
                    responseBody: string;
                    additionalBindings: any[];
                }[];
                fullyDecodeReservedExpansion: boolean;
            };
            fromPartial(object: Partial<_56.Http>): _56.Http;
            fromAmino(object: _56.HttpAmino): _56.Http;
            toAmino(message: _56.Http): _56.HttpAmino;
            fromAminoMsg(object: _56.HttpAminoMsg): _56.Http;
            fromProtoMsg(message: _56.HttpProtoMsg): _56.Http;
            toProto(message: _56.Http): Uint8Array;
            toProtoMsg(message: _56.Http): _56.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            is(o: any): o is _56.HttpRule;
            isSDK(o: any): o is _56.HttpRuleSDKType;
            isAmino(o: any): o is _56.HttpRuleAmino;
            encode(message: _56.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.HttpRule;
            fromJSON(object: any): _56.HttpRule;
            toJSON(message: _56.HttpRule): {
                selector: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind: string;
                    path: string;
                };
                body: string;
                responseBody: string;
                additionalBindings: any[];
            };
            fromPartial(object: Partial<_56.HttpRule>): _56.HttpRule;
            fromAmino(object: _56.HttpRuleAmino): _56.HttpRule;
            toAmino(message: _56.HttpRule): _56.HttpRuleAmino;
            fromAminoMsg(object: _56.HttpRuleAminoMsg): _56.HttpRule;
            fromProtoMsg(message: _56.HttpRuleProtoMsg): _56.HttpRule;
            toProto(message: _56.HttpRule): Uint8Array;
            toProtoMsg(message: _56.HttpRule): _56.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            is(o: any): o is _56.CustomHttpPattern;
            isSDK(o: any): o is _56.CustomHttpPatternSDKType;
            isAmino(o: any): o is _56.CustomHttpPatternAmino;
            encode(message: _56.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.CustomHttpPattern;
            fromJSON(object: any): _56.CustomHttpPattern;
            toJSON(message: _56.CustomHttpPattern): {
                kind: string;
                path: string;
            };
            fromPartial(object: Partial<_56.CustomHttpPattern>): _56.CustomHttpPattern;
            fromAmino(object: _56.CustomHttpPatternAmino): _56.CustomHttpPattern;
            toAmino(message: _56.CustomHttpPattern): _56.CustomHttpPatternAmino;
            fromAminoMsg(object: _56.CustomHttpPatternAminoMsg): _56.CustomHttpPattern;
            fromProtoMsg(message: _56.CustomHttpPatternProtoMsg): _56.CustomHttpPattern;
            toProto(message: _56.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _56.CustomHttpPattern): _56.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            is(o: any): o is _61.Timestamp;
            isSDK(o: any): o is _61.TimestampSDKType;
            isAmino(o: any): o is string;
            encode(message: _61.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _61.Timestamp;
            fromJSON(object: any): _61.Timestamp;
            toJSON(message: _61.Timestamp): {
                seconds: string;
                nanos: number;
            };
            fromPartial(object: Partial<_61.Timestamp>): _61.Timestamp;
            fromAmino(object: string): _61.Timestamp;
            toAmino(message: _61.Timestamp): string;
            fromAminoMsg(object: _61.TimestampAminoMsg): _61.Timestamp;
            fromProtoMsg(message: _61.TimestampProtoMsg): _61.Timestamp;
            toProto(message: _61.Timestamp): Uint8Array;
            toProtoMsg(message: _61.Timestamp): _61.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            is(o: any): o is _60.Empty;
            isSDK(o: any): o is _60.EmptySDKType;
            isAmino(o: any): o is _60.EmptyAmino;
            encode(_: _60.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _60.Empty;
            fromJSON(_: any): _60.Empty;
            toJSON(_: _60.Empty): {};
            fromPartial(_: Partial<_60.Empty>): _60.Empty;
            fromAmino(_: _60.EmptyAmino): _60.Empty;
            toAmino(_: _60.Empty): _60.EmptyAmino;
            fromAminoMsg(object: _60.EmptyAminoMsg): _60.Empty;
            fromProtoMsg(message: _60.EmptyProtoMsg): _60.Empty;
            toProto(message: _60.Empty): Uint8Array;
            toProtoMsg(message: _60.Empty): _60.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            is(o: any): o is _59.Duration;
            isSDK(o: any): o is _59.DurationSDKType;
            isAmino(o: any): o is string;
            encode(message: _59.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Duration;
            fromJSON(object: any): _59.Duration;
            toJSON(message: _59.Duration): {
                seconds: string;
                nanos: number;
            };
            fromPartial(object: Partial<_59.Duration>): _59.Duration;
            fromAmino(object: string): _59.Duration;
            toAmino(message: _59.Duration): string;
            fromAminoMsg(object: _59.DurationAminoMsg): _59.Duration;
            fromProtoMsg(message: _59.DurationProtoMsg): _59.Duration;
            toProto(message: _59.Duration): Uint8Array;
            toProtoMsg(message: _59.Duration): _59.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _58.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _58.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _58.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _58.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _58.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _58.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _58.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _58.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _58.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _58.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _58.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _58.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _58.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _58.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _58.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _58.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _58.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _58.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _58.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _58.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _58.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _58.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _58.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _58.FieldOptions_CType;
        FieldOptions_JSType: typeof _58.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _58.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _58.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _58.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _58.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _58.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            is(o: any): o is _58.FileDescriptorSet;
            isSDK(o: any): o is _58.FileDescriptorSetSDKType;
            isAmino(o: any): o is _58.FileDescriptorSetAmino;
            encode(message: _58.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.FileDescriptorSet;
            fromJSON(object: any): _58.FileDescriptorSet;
            toJSON(message: _58.FileDescriptorSet): {
                file: {
                    name: string;
                    package: string;
                    dependency: string[];
                    publicDependency: number[];
                    weakDependency: number[];
                    messageType: {
                        name: string;
                        field: {
                            name: string;
                            number: number;
                            label: _58.FieldDescriptorProto_Label;
                            type: _58.FieldDescriptorProto_Type;
                            typeName: string;
                            extendee: string;
                            defaultValue: string;
                            oneofIndex: number;
                            jsonName: string;
                            options?: {
                                ctype: _58.FieldOptions_CType;
                                packed: boolean;
                                jstype: _58.FieldOptions_JSType;
                                lazy: boolean;
                                deprecated: boolean;
                                weak: boolean;
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                        }[];
                        extension: {
                            name: string;
                            number: number;
                            label: _58.FieldDescriptorProto_Label;
                            type: _58.FieldDescriptorProto_Type;
                            typeName: string;
                            extendee: string;
                            defaultValue: string;
                            oneofIndex: number;
                            jsonName: string;
                            options?: {
                                ctype: _58.FieldOptions_CType;
                                packed: boolean;
                                jstype: _58.FieldOptions_JSType;
                                lazy: boolean;
                                deprecated: boolean;
                                weak: boolean;
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                        }[];
                        nestedType: any[];
                        enumType: {
                            name: string;
                            value: {
                                name: string;
                                number: number;
                                options?: {
                                    deprecated: boolean;
                                    uninterpretedOption: {
                                        name: {
                                            namePart: string;
                                            isExtension: boolean;
                                        }[];
                                        identifierValue: string;
                                        positiveIntValue: string;
                                        negativeIntValue: string;
                                        doubleValue: number;
                                        stringValue: string;
                                        aggregateValue: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias: boolean;
                                deprecated: boolean;
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                            reservedRange: {
                                start: number;
                                end: number;
                            }[];
                            reservedName: string[];
                        }[];
                        extensionRange: {
                            start: number;
                            end: number;
                            options?: {
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                        }[];
                        oneofDecl: {
                            name: string;
                            options?: {
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat: boolean;
                            noStandardDescriptorAccessor: boolean;
                            deprecated: boolean;
                            mapEntry: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                        reservedRange: {
                            start: number;
                            end: number;
                        }[];
                        reservedName: string[];
                    }[];
                    enumType: {
                        name: string;
                        value: {
                            name: string;
                            number: number;
                            options?: {
                                deprecated: boolean;
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias: boolean;
                            deprecated: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                        reservedRange: {
                            start: number;
                            end: number;
                        }[];
                        reservedName: string[];
                    }[];
                    service: {
                        name: string;
                        method: {
                            name: string;
                            inputType: string;
                            outputType: string;
                            options?: {
                                deprecated: boolean;
                                idempotencyLevel: _58.MethodOptions_IdempotencyLevel;
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                            clientStreaming: boolean;
                            serverStreaming: boolean;
                        }[];
                        options?: {
                            deprecated: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    extension: {
                        name: string;
                        number: number;
                        label: _58.FieldDescriptorProto_Label;
                        type: _58.FieldDescriptorProto_Type;
                        typeName: string;
                        extendee: string;
                        defaultValue: string;
                        oneofIndex: number;
                        jsonName: string;
                        options?: {
                            ctype: _58.FieldOptions_CType;
                            packed: boolean;
                            jstype: _58.FieldOptions_JSType;
                            lazy: boolean;
                            deprecated: boolean;
                            weak: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage: string;
                        javaOuterClassname: string;
                        javaMultipleFiles: boolean;
                        javaGenerateEqualsAndHash: boolean;
                        javaStringCheckUtf8: boolean;
                        optimizeFor: _58.FileOptions_OptimizeMode;
                        goPackage: string;
                        ccGenericServices: boolean;
                        javaGenericServices: boolean;
                        pyGenericServices: boolean;
                        phpGenericServices: boolean;
                        deprecated: boolean;
                        ccEnableArenas: boolean;
                        objcClassPrefix: string;
                        csharpNamespace: string;
                        swiftPrefix: string;
                        phpClassPrefix: string;
                        phpNamespace: string;
                        phpMetadataNamespace: string;
                        rubyPackage: string;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location: {
                            path: number[];
                            span: number[];
                            leadingComments: string;
                            trailingComments: string;
                            leadingDetachedComments: string[];
                        }[];
                    };
                    syntax: string;
                }[];
            };
            fromPartial(object: Partial<_58.FileDescriptorSet>): _58.FileDescriptorSet;
            fromAmino(object: _58.FileDescriptorSetAmino): _58.FileDescriptorSet;
            toAmino(message: _58.FileDescriptorSet): _58.FileDescriptorSetAmino;
            fromAminoMsg(object: _58.FileDescriptorSetAminoMsg): _58.FileDescriptorSet;
            fromProtoMsg(message: _58.FileDescriptorSetProtoMsg): _58.FileDescriptorSet;
            toProto(message: _58.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _58.FileDescriptorSet): _58.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.FileDescriptorProto;
            isSDK(o: any): o is _58.FileDescriptorProtoSDKType;
            isAmino(o: any): o is _58.FileDescriptorProtoAmino;
            encode(message: _58.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.FileDescriptorProto;
            fromJSON(object: any): _58.FileDescriptorProto;
            toJSON(message: _58.FileDescriptorProto): {
                name: string;
                package: string;
                dependency: string[];
                publicDependency: number[];
                weakDependency: number[];
                messageType: {
                    name: string;
                    field: {
                        name: string;
                        number: number;
                        label: _58.FieldDescriptorProto_Label;
                        type: _58.FieldDescriptorProto_Type;
                        typeName: string;
                        extendee: string;
                        defaultValue: string;
                        oneofIndex: number;
                        jsonName: string;
                        options?: {
                            ctype: _58.FieldOptions_CType;
                            packed: boolean;
                            jstype: _58.FieldOptions_JSType;
                            lazy: boolean;
                            deprecated: boolean;
                            weak: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    extension: {
                        name: string;
                        number: number;
                        label: _58.FieldDescriptorProto_Label;
                        type: _58.FieldDescriptorProto_Type;
                        typeName: string;
                        extendee: string;
                        defaultValue: string;
                        oneofIndex: number;
                        jsonName: string;
                        options?: {
                            ctype: _58.FieldOptions_CType;
                            packed: boolean;
                            jstype: _58.FieldOptions_JSType;
                            lazy: boolean;
                            deprecated: boolean;
                            weak: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    nestedType: any[];
                    enumType: {
                        name: string;
                        value: {
                            name: string;
                            number: number;
                            options?: {
                                deprecated: boolean;
                                uninterpretedOption: {
                                    name: {
                                        namePart: string;
                                        isExtension: boolean;
                                    }[];
                                    identifierValue: string;
                                    positiveIntValue: string;
                                    negativeIntValue: string;
                                    doubleValue: number;
                                    stringValue: string;
                                    aggregateValue: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias: boolean;
                            deprecated: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                        reservedRange: {
                            start: number;
                            end: number;
                        }[];
                        reservedName: string[];
                    }[];
                    extensionRange: {
                        start: number;
                        end: number;
                        options?: {
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    oneofDecl: {
                        name: string;
                        options?: {
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat: boolean;
                        noStandardDescriptorAccessor: boolean;
                        deprecated: boolean;
                        mapEntry: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                    reservedRange: {
                        start: number;
                        end: number;
                    }[];
                    reservedName: string[];
                }[];
                enumType: {
                    name: string;
                    value: {
                        name: string;
                        number: number;
                        options?: {
                            deprecated: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias: boolean;
                        deprecated: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                    reservedRange: {
                        start: number;
                        end: number;
                    }[];
                    reservedName: string[];
                }[];
                service: {
                    name: string;
                    method: {
                        name: string;
                        inputType: string;
                        outputType: string;
                        options?: {
                            deprecated: boolean;
                            idempotencyLevel: _58.MethodOptions_IdempotencyLevel;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                        clientStreaming: boolean;
                        serverStreaming: boolean;
                    }[];
                    options?: {
                        deprecated: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                extension: {
                    name: string;
                    number: number;
                    label: _58.FieldDescriptorProto_Label;
                    type: _58.FieldDescriptorProto_Type;
                    typeName: string;
                    extendee: string;
                    defaultValue: string;
                    oneofIndex: number;
                    jsonName: string;
                    options?: {
                        ctype: _58.FieldOptions_CType;
                        packed: boolean;
                        jstype: _58.FieldOptions_JSType;
                        lazy: boolean;
                        deprecated: boolean;
                        weak: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage: string;
                    javaOuterClassname: string;
                    javaMultipleFiles: boolean;
                    javaGenerateEqualsAndHash: boolean;
                    javaStringCheckUtf8: boolean;
                    optimizeFor: _58.FileOptions_OptimizeMode;
                    goPackage: string;
                    ccGenericServices: boolean;
                    javaGenericServices: boolean;
                    pyGenericServices: boolean;
                    phpGenericServices: boolean;
                    deprecated: boolean;
                    ccEnableArenas: boolean;
                    objcClassPrefix: string;
                    csharpNamespace: string;
                    swiftPrefix: string;
                    phpClassPrefix: string;
                    phpNamespace: string;
                    phpMetadataNamespace: string;
                    rubyPackage: string;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location: {
                        path: number[];
                        span: number[];
                        leadingComments: string;
                        trailingComments: string;
                        leadingDetachedComments: string[];
                    }[];
                };
                syntax: string;
            };
            fromPartial(object: Partial<_58.FileDescriptorProto>): _58.FileDescriptorProto;
            fromAmino(object: _58.FileDescriptorProtoAmino): _58.FileDescriptorProto;
            toAmino(message: _58.FileDescriptorProto): _58.FileDescriptorProtoAmino;
            fromAminoMsg(object: _58.FileDescriptorProtoAminoMsg): _58.FileDescriptorProto;
            fromProtoMsg(message: _58.FileDescriptorProtoProtoMsg): _58.FileDescriptorProto;
            toProto(message: _58.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.FileDescriptorProto): _58.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.DescriptorProto;
            isSDK(o: any): o is _58.DescriptorProtoSDKType;
            isAmino(o: any): o is _58.DescriptorProtoAmino;
            encode(message: _58.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.DescriptorProto;
            fromJSON(object: any): _58.DescriptorProto;
            toJSON(message: _58.DescriptorProto): {
                name: string;
                field: {
                    name: string;
                    number: number;
                    label: _58.FieldDescriptorProto_Label;
                    type: _58.FieldDescriptorProto_Type;
                    typeName: string;
                    extendee: string;
                    defaultValue: string;
                    oneofIndex: number;
                    jsonName: string;
                    options?: {
                        ctype: _58.FieldOptions_CType;
                        packed: boolean;
                        jstype: _58.FieldOptions_JSType;
                        lazy: boolean;
                        deprecated: boolean;
                        weak: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                extension: {
                    name: string;
                    number: number;
                    label: _58.FieldDescriptorProto_Label;
                    type: _58.FieldDescriptorProto_Type;
                    typeName: string;
                    extendee: string;
                    defaultValue: string;
                    oneofIndex: number;
                    jsonName: string;
                    options?: {
                        ctype: _58.FieldOptions_CType;
                        packed: boolean;
                        jstype: _58.FieldOptions_JSType;
                        lazy: boolean;
                        deprecated: boolean;
                        weak: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                nestedType: any[];
                enumType: {
                    name: string;
                    value: {
                        name: string;
                        number: number;
                        options?: {
                            deprecated: boolean;
                            uninterpretedOption: {
                                name: {
                                    namePart: string;
                                    isExtension: boolean;
                                }[];
                                identifierValue: string;
                                positiveIntValue: string;
                                negativeIntValue: string;
                                doubleValue: number;
                                stringValue: string;
                                aggregateValue: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias: boolean;
                        deprecated: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                    reservedRange: {
                        start: number;
                        end: number;
                    }[];
                    reservedName: string[];
                }[];
                extensionRange: {
                    start: number;
                    end: number;
                    options?: {
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                oneofDecl: {
                    name: string;
                    options?: {
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat: boolean;
                    noStandardDescriptorAccessor: boolean;
                    deprecated: boolean;
                    mapEntry: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
                reservedRange: {
                    start: number;
                    end: number;
                }[];
                reservedName: string[];
            };
            fromPartial(object: Partial<_58.DescriptorProto>): _58.DescriptorProto;
            fromAmino(object: _58.DescriptorProtoAmino): _58.DescriptorProto;
            toAmino(message: _58.DescriptorProto): _58.DescriptorProtoAmino;
            fromAminoMsg(object: _58.DescriptorProtoAminoMsg): _58.DescriptorProto;
            fromProtoMsg(message: _58.DescriptorProtoProtoMsg): _58.DescriptorProto;
            toProto(message: _58.DescriptorProto): Uint8Array;
            toProtoMsg(message: _58.DescriptorProto): _58.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            is(o: any): o is _58.DescriptorProto_ExtensionRange;
            isSDK(o: any): o is _58.DescriptorProto_ExtensionRangeSDKType;
            isAmino(o: any): o is _58.DescriptorProto_ExtensionRangeAmino;
            encode(message: _58.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _58.DescriptorProto_ExtensionRange;
            toJSON(message: _58.DescriptorProto_ExtensionRange): {
                start: number;
                end: number;
                options?: {
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_58.DescriptorProto_ExtensionRange>): _58.DescriptorProto_ExtensionRange;
            fromAmino(object: _58.DescriptorProto_ExtensionRangeAmino): _58.DescriptorProto_ExtensionRange;
            toAmino(message: _58.DescriptorProto_ExtensionRange): _58.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _58.DescriptorProto_ExtensionRangeAminoMsg): _58.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _58.DescriptorProto_ExtensionRangeProtoMsg): _58.DescriptorProto_ExtensionRange;
            toProto(message: _58.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _58.DescriptorProto_ExtensionRange): _58.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            is(o: any): o is _58.DescriptorProto_ReservedRange;
            isSDK(o: any): o is _58.DescriptorProto_ReservedRangeSDKType;
            isAmino(o: any): o is _58.DescriptorProto_ReservedRangeAmino;
            encode(message: _58.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.DescriptorProto_ReservedRange;
            fromJSON(object: any): _58.DescriptorProto_ReservedRange;
            toJSON(message: _58.DescriptorProto_ReservedRange): {
                start: number;
                end: number;
            };
            fromPartial(object: Partial<_58.DescriptorProto_ReservedRange>): _58.DescriptorProto_ReservedRange;
            fromAmino(object: _58.DescriptorProto_ReservedRangeAmino): _58.DescriptorProto_ReservedRange;
            toAmino(message: _58.DescriptorProto_ReservedRange): _58.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _58.DescriptorProto_ReservedRangeAminoMsg): _58.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _58.DescriptorProto_ReservedRangeProtoMsg): _58.DescriptorProto_ReservedRange;
            toProto(message: _58.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _58.DescriptorProto_ReservedRange): _58.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            is(o: any): o is _58.ExtensionRangeOptions;
            isSDK(o: any): o is _58.ExtensionRangeOptionsSDKType;
            isAmino(o: any): o is _58.ExtensionRangeOptionsAmino;
            encode(message: _58.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.ExtensionRangeOptions;
            fromJSON(object: any): _58.ExtensionRangeOptions;
            toJSON(message: _58.ExtensionRangeOptions): {
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.ExtensionRangeOptions>): _58.ExtensionRangeOptions;
            fromAmino(object: _58.ExtensionRangeOptionsAmino): _58.ExtensionRangeOptions;
            toAmino(message: _58.ExtensionRangeOptions): _58.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _58.ExtensionRangeOptionsAminoMsg): _58.ExtensionRangeOptions;
            fromProtoMsg(message: _58.ExtensionRangeOptionsProtoMsg): _58.ExtensionRangeOptions;
            toProto(message: _58.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _58.ExtensionRangeOptions): _58.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.FieldDescriptorProto;
            isSDK(o: any): o is _58.FieldDescriptorProtoSDKType;
            isAmino(o: any): o is _58.FieldDescriptorProtoAmino;
            encode(message: _58.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.FieldDescriptorProto;
            fromJSON(object: any): _58.FieldDescriptorProto;
            toJSON(message: _58.FieldDescriptorProto): {
                name: string;
                number: number;
                label: _58.FieldDescriptorProto_Label;
                type: _58.FieldDescriptorProto_Type;
                typeName: string;
                extendee: string;
                defaultValue: string;
                oneofIndex: number;
                jsonName: string;
                options?: {
                    ctype: _58.FieldOptions_CType;
                    packed: boolean;
                    jstype: _58.FieldOptions_JSType;
                    lazy: boolean;
                    deprecated: boolean;
                    weak: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_58.FieldDescriptorProto>): _58.FieldDescriptorProto;
            fromAmino(object: _58.FieldDescriptorProtoAmino): _58.FieldDescriptorProto;
            toAmino(message: _58.FieldDescriptorProto): _58.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _58.FieldDescriptorProtoAminoMsg): _58.FieldDescriptorProto;
            fromProtoMsg(message: _58.FieldDescriptorProtoProtoMsg): _58.FieldDescriptorProto;
            toProto(message: _58.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.FieldDescriptorProto): _58.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.OneofDescriptorProto;
            isSDK(o: any): o is _58.OneofDescriptorProtoSDKType;
            isAmino(o: any): o is _58.OneofDescriptorProtoAmino;
            encode(message: _58.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.OneofDescriptorProto;
            fromJSON(object: any): _58.OneofDescriptorProto;
            toJSON(message: _58.OneofDescriptorProto): {
                name: string;
                options?: {
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_58.OneofDescriptorProto>): _58.OneofDescriptorProto;
            fromAmino(object: _58.OneofDescriptorProtoAmino): _58.OneofDescriptorProto;
            toAmino(message: _58.OneofDescriptorProto): _58.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _58.OneofDescriptorProtoAminoMsg): _58.OneofDescriptorProto;
            fromProtoMsg(message: _58.OneofDescriptorProtoProtoMsg): _58.OneofDescriptorProto;
            toProto(message: _58.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.OneofDescriptorProto): _58.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.EnumDescriptorProto;
            isSDK(o: any): o is _58.EnumDescriptorProtoSDKType;
            isAmino(o: any): o is _58.EnumDescriptorProtoAmino;
            encode(message: _58.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.EnumDescriptorProto;
            fromJSON(object: any): _58.EnumDescriptorProto;
            toJSON(message: _58.EnumDescriptorProto): {
                name: string;
                value: {
                    name: string;
                    number: number;
                    options?: {
                        deprecated: boolean;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias: boolean;
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
                reservedRange: {
                    start: number;
                    end: number;
                }[];
                reservedName: string[];
            };
            fromPartial(object: Partial<_58.EnumDescriptorProto>): _58.EnumDescriptorProto;
            fromAmino(object: _58.EnumDescriptorProtoAmino): _58.EnumDescriptorProto;
            toAmino(message: _58.EnumDescriptorProto): _58.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _58.EnumDescriptorProtoAminoMsg): _58.EnumDescriptorProto;
            fromProtoMsg(message: _58.EnumDescriptorProtoProtoMsg): _58.EnumDescriptorProto;
            toProto(message: _58.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.EnumDescriptorProto): _58.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            is(o: any): o is _58.EnumDescriptorProto_EnumReservedRange;
            isSDK(o: any): o is _58.EnumDescriptorProto_EnumReservedRangeSDKType;
            isAmino(o: any): o is _58.EnumDescriptorProto_EnumReservedRangeAmino;
            encode(message: _58.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _58.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _58.EnumDescriptorProto_EnumReservedRange): {
                start: number;
                end: number;
            };
            fromPartial(object: Partial<_58.EnumDescriptorProto_EnumReservedRange>): _58.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _58.EnumDescriptorProto_EnumReservedRangeAmino): _58.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _58.EnumDescriptorProto_EnumReservedRange): _58.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _58.EnumDescriptorProto_EnumReservedRangeAminoMsg): _58.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _58.EnumDescriptorProto_EnumReservedRangeProtoMsg): _58.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _58.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _58.EnumDescriptorProto_EnumReservedRange): _58.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.EnumValueDescriptorProto;
            isSDK(o: any): o is _58.EnumValueDescriptorProtoSDKType;
            isAmino(o: any): o is _58.EnumValueDescriptorProtoAmino;
            encode(message: _58.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.EnumValueDescriptorProto;
            fromJSON(object: any): _58.EnumValueDescriptorProto;
            toJSON(message: _58.EnumValueDescriptorProto): {
                name: string;
                number: number;
                options?: {
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_58.EnumValueDescriptorProto>): _58.EnumValueDescriptorProto;
            fromAmino(object: _58.EnumValueDescriptorProtoAmino): _58.EnumValueDescriptorProto;
            toAmino(message: _58.EnumValueDescriptorProto): _58.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _58.EnumValueDescriptorProtoAminoMsg): _58.EnumValueDescriptorProto;
            fromProtoMsg(message: _58.EnumValueDescriptorProtoProtoMsg): _58.EnumValueDescriptorProto;
            toProto(message: _58.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.EnumValueDescriptorProto): _58.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.ServiceDescriptorProto;
            isSDK(o: any): o is _58.ServiceDescriptorProtoSDKType;
            isAmino(o: any): o is _58.ServiceDescriptorProtoAmino;
            encode(message: _58.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.ServiceDescriptorProto;
            fromJSON(object: any): _58.ServiceDescriptorProto;
            toJSON(message: _58.ServiceDescriptorProto): {
                name: string;
                method: {
                    name: string;
                    inputType: string;
                    outputType: string;
                    options?: {
                        deprecated: boolean;
                        idempotencyLevel: _58.MethodOptions_IdempotencyLevel;
                        uninterpretedOption: {
                            name: {
                                namePart: string;
                                isExtension: boolean;
                            }[];
                            identifierValue: string;
                            positiveIntValue: string;
                            negativeIntValue: string;
                            doubleValue: number;
                            stringValue: string;
                            aggregateValue: string;
                        }[];
                    };
                    clientStreaming: boolean;
                    serverStreaming: boolean;
                }[];
                options?: {
                    deprecated: boolean;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
            };
            fromPartial(object: Partial<_58.ServiceDescriptorProto>): _58.ServiceDescriptorProto;
            fromAmino(object: _58.ServiceDescriptorProtoAmino): _58.ServiceDescriptorProto;
            toAmino(message: _58.ServiceDescriptorProto): _58.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _58.ServiceDescriptorProtoAminoMsg): _58.ServiceDescriptorProto;
            fromProtoMsg(message: _58.ServiceDescriptorProtoProtoMsg): _58.ServiceDescriptorProto;
            toProto(message: _58.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.ServiceDescriptorProto): _58.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _58.MethodDescriptorProto;
            isSDK(o: any): o is _58.MethodDescriptorProtoSDKType;
            isAmino(o: any): o is _58.MethodDescriptorProtoAmino;
            encode(message: _58.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MethodDescriptorProto;
            fromJSON(object: any): _58.MethodDescriptorProto;
            toJSON(message: _58.MethodDescriptorProto): {
                name: string;
                inputType: string;
                outputType: string;
                options?: {
                    deprecated: boolean;
                    idempotencyLevel: _58.MethodOptions_IdempotencyLevel;
                    uninterpretedOption: {
                        name: {
                            namePart: string;
                            isExtension: boolean;
                        }[];
                        identifierValue: string;
                        positiveIntValue: string;
                        negativeIntValue: string;
                        doubleValue: number;
                        stringValue: string;
                        aggregateValue: string;
                    }[];
                };
                clientStreaming: boolean;
                serverStreaming: boolean;
            };
            fromPartial(object: Partial<_58.MethodDescriptorProto>): _58.MethodDescriptorProto;
            fromAmino(object: _58.MethodDescriptorProtoAmino): _58.MethodDescriptorProto;
            toAmino(message: _58.MethodDescriptorProto): _58.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _58.MethodDescriptorProtoAminoMsg): _58.MethodDescriptorProto;
            fromProtoMsg(message: _58.MethodDescriptorProtoProtoMsg): _58.MethodDescriptorProto;
            toProto(message: _58.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _58.MethodDescriptorProto): _58.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            is(o: any): o is _58.FileOptions;
            isSDK(o: any): o is _58.FileOptionsSDKType;
            isAmino(o: any): o is _58.FileOptionsAmino;
            encode(message: _58.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.FileOptions;
            fromJSON(object: any): _58.FileOptions;
            toJSON(message: _58.FileOptions): {
                javaPackage: string;
                javaOuterClassname: string;
                javaMultipleFiles: boolean;
                javaGenerateEqualsAndHash: boolean;
                javaStringCheckUtf8: boolean;
                optimizeFor: _58.FileOptions_OptimizeMode;
                goPackage: string;
                ccGenericServices: boolean;
                javaGenericServices: boolean;
                pyGenericServices: boolean;
                phpGenericServices: boolean;
                deprecated: boolean;
                ccEnableArenas: boolean;
                objcClassPrefix: string;
                csharpNamespace: string;
                swiftPrefix: string;
                phpClassPrefix: string;
                phpNamespace: string;
                phpMetadataNamespace: string;
                rubyPackage: string;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.FileOptions>): _58.FileOptions;
            fromAmino(object: _58.FileOptionsAmino): _58.FileOptions;
            toAmino(message: _58.FileOptions): _58.FileOptionsAmino;
            fromAminoMsg(object: _58.FileOptionsAminoMsg): _58.FileOptions;
            fromProtoMsg(message: _58.FileOptionsProtoMsg): _58.FileOptions;
            toProto(message: _58.FileOptions): Uint8Array;
            toProtoMsg(message: _58.FileOptions): _58.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            is(o: any): o is _58.MessageOptions;
            isSDK(o: any): o is _58.MessageOptionsSDKType;
            isAmino(o: any): o is _58.MessageOptionsAmino;
            encode(message: _58.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MessageOptions;
            fromJSON(object: any): _58.MessageOptions;
            toJSON(message: _58.MessageOptions): {
                messageSetWireFormat: boolean;
                noStandardDescriptorAccessor: boolean;
                deprecated: boolean;
                mapEntry: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.MessageOptions>): _58.MessageOptions;
            fromAmino(object: _58.MessageOptionsAmino): _58.MessageOptions;
            toAmino(message: _58.MessageOptions): _58.MessageOptionsAmino;
            fromAminoMsg(object: _58.MessageOptionsAminoMsg): _58.MessageOptions;
            fromProtoMsg(message: _58.MessageOptionsProtoMsg): _58.MessageOptions;
            toProto(message: _58.MessageOptions): Uint8Array;
            toProtoMsg(message: _58.MessageOptions): _58.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            is(o: any): o is _58.FieldOptions;
            isSDK(o: any): o is _58.FieldOptionsSDKType;
            isAmino(o: any): o is _58.FieldOptionsAmino;
            encode(message: _58.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.FieldOptions;
            fromJSON(object: any): _58.FieldOptions;
            toJSON(message: _58.FieldOptions): {
                ctype: _58.FieldOptions_CType;
                packed: boolean;
                jstype: _58.FieldOptions_JSType;
                lazy: boolean;
                deprecated: boolean;
                weak: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.FieldOptions>): _58.FieldOptions;
            fromAmino(object: _58.FieldOptionsAmino): _58.FieldOptions;
            toAmino(message: _58.FieldOptions): _58.FieldOptionsAmino;
            fromAminoMsg(object: _58.FieldOptionsAminoMsg): _58.FieldOptions;
            fromProtoMsg(message: _58.FieldOptionsProtoMsg): _58.FieldOptions;
            toProto(message: _58.FieldOptions): Uint8Array;
            toProtoMsg(message: _58.FieldOptions): _58.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            is(o: any): o is _58.OneofOptions;
            isSDK(o: any): o is _58.OneofOptionsSDKType;
            isAmino(o: any): o is _58.OneofOptionsAmino;
            encode(message: _58.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.OneofOptions;
            fromJSON(object: any): _58.OneofOptions;
            toJSON(message: _58.OneofOptions): {
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.OneofOptions>): _58.OneofOptions;
            fromAmino(object: _58.OneofOptionsAmino): _58.OneofOptions;
            toAmino(message: _58.OneofOptions): _58.OneofOptionsAmino;
            fromAminoMsg(object: _58.OneofOptionsAminoMsg): _58.OneofOptions;
            fromProtoMsg(message: _58.OneofOptionsProtoMsg): _58.OneofOptions;
            toProto(message: _58.OneofOptions): Uint8Array;
            toProtoMsg(message: _58.OneofOptions): _58.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            is(o: any): o is _58.EnumOptions;
            isSDK(o: any): o is _58.EnumOptionsSDKType;
            isAmino(o: any): o is _58.EnumOptionsAmino;
            encode(message: _58.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.EnumOptions;
            fromJSON(object: any): _58.EnumOptions;
            toJSON(message: _58.EnumOptions): {
                allowAlias: boolean;
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.EnumOptions>): _58.EnumOptions;
            fromAmino(object: _58.EnumOptionsAmino): _58.EnumOptions;
            toAmino(message: _58.EnumOptions): _58.EnumOptionsAmino;
            fromAminoMsg(object: _58.EnumOptionsAminoMsg): _58.EnumOptions;
            fromProtoMsg(message: _58.EnumOptionsProtoMsg): _58.EnumOptions;
            toProto(message: _58.EnumOptions): Uint8Array;
            toProtoMsg(message: _58.EnumOptions): _58.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            is(o: any): o is _58.EnumValueOptions;
            isSDK(o: any): o is _58.EnumValueOptionsSDKType;
            isAmino(o: any): o is _58.EnumValueOptionsAmino;
            encode(message: _58.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.EnumValueOptions;
            fromJSON(object: any): _58.EnumValueOptions;
            toJSON(message: _58.EnumValueOptions): {
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.EnumValueOptions>): _58.EnumValueOptions;
            fromAmino(object: _58.EnumValueOptionsAmino): _58.EnumValueOptions;
            toAmino(message: _58.EnumValueOptions): _58.EnumValueOptionsAmino;
            fromAminoMsg(object: _58.EnumValueOptionsAminoMsg): _58.EnumValueOptions;
            fromProtoMsg(message: _58.EnumValueOptionsProtoMsg): _58.EnumValueOptions;
            toProto(message: _58.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _58.EnumValueOptions): _58.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            is(o: any): o is _58.ServiceOptions;
            isSDK(o: any): o is _58.ServiceOptionsSDKType;
            isAmino(o: any): o is _58.ServiceOptionsAmino;
            encode(message: _58.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.ServiceOptions;
            fromJSON(object: any): _58.ServiceOptions;
            toJSON(message: _58.ServiceOptions): {
                deprecated: boolean;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.ServiceOptions>): _58.ServiceOptions;
            fromAmino(object: _58.ServiceOptionsAmino): _58.ServiceOptions;
            toAmino(message: _58.ServiceOptions): _58.ServiceOptionsAmino;
            fromAminoMsg(object: _58.ServiceOptionsAminoMsg): _58.ServiceOptions;
            fromProtoMsg(message: _58.ServiceOptionsProtoMsg): _58.ServiceOptions;
            toProto(message: _58.ServiceOptions): Uint8Array;
            toProtoMsg(message: _58.ServiceOptions): _58.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            is(o: any): o is _58.MethodOptions;
            isSDK(o: any): o is _58.MethodOptionsSDKType;
            isAmino(o: any): o is _58.MethodOptionsAmino;
            encode(message: _58.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.MethodOptions;
            fromJSON(object: any): _58.MethodOptions;
            toJSON(message: _58.MethodOptions): {
                deprecated: boolean;
                idempotencyLevel: _58.MethodOptions_IdempotencyLevel;
                uninterpretedOption: {
                    name: {
                        namePart: string;
                        isExtension: boolean;
                    }[];
                    identifierValue: string;
                    positiveIntValue: string;
                    negativeIntValue: string;
                    doubleValue: number;
                    stringValue: string;
                    aggregateValue: string;
                }[];
            };
            fromPartial(object: Partial<_58.MethodOptions>): _58.MethodOptions;
            fromAmino(object: _58.MethodOptionsAmino): _58.MethodOptions;
            toAmino(message: _58.MethodOptions): _58.MethodOptionsAmino;
            fromAminoMsg(object: _58.MethodOptionsAminoMsg): _58.MethodOptions;
            fromProtoMsg(message: _58.MethodOptionsProtoMsg): _58.MethodOptions;
            toProto(message: _58.MethodOptions): Uint8Array;
            toProtoMsg(message: _58.MethodOptions): _58.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            is(o: any): o is _58.UninterpretedOption;
            isSDK(o: any): o is _58.UninterpretedOptionSDKType;
            isAmino(o: any): o is _58.UninterpretedOptionAmino;
            encode(message: _58.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.UninterpretedOption;
            fromJSON(object: any): _58.UninterpretedOption;
            toJSON(message: _58.UninterpretedOption): {
                name: {
                    namePart: string;
                    isExtension: boolean;
                }[];
                identifierValue: string;
                positiveIntValue: string;
                negativeIntValue: string;
                doubleValue: number;
                stringValue: string;
                aggregateValue: string;
            };
            fromPartial(object: Partial<_58.UninterpretedOption>): _58.UninterpretedOption;
            fromAmino(object: _58.UninterpretedOptionAmino): _58.UninterpretedOption;
            toAmino(message: _58.UninterpretedOption): _58.UninterpretedOptionAmino;
            fromAminoMsg(object: _58.UninterpretedOptionAminoMsg): _58.UninterpretedOption;
            fromProtoMsg(message: _58.UninterpretedOptionProtoMsg): _58.UninterpretedOption;
            toProto(message: _58.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _58.UninterpretedOption): _58.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            is(o: any): o is _58.UninterpretedOption_NamePart;
            isSDK(o: any): o is _58.UninterpretedOption_NamePartSDKType;
            isAmino(o: any): o is _58.UninterpretedOption_NamePartAmino;
            encode(message: _58.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.UninterpretedOption_NamePart;
            fromJSON(object: any): _58.UninterpretedOption_NamePart;
            toJSON(message: _58.UninterpretedOption_NamePart): {
                namePart: string;
                isExtension: boolean;
            };
            fromPartial(object: Partial<_58.UninterpretedOption_NamePart>): _58.UninterpretedOption_NamePart;
            fromAmino(object: _58.UninterpretedOption_NamePartAmino): _58.UninterpretedOption_NamePart;
            toAmino(message: _58.UninterpretedOption_NamePart): _58.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _58.UninterpretedOption_NamePartAminoMsg): _58.UninterpretedOption_NamePart;
            fromProtoMsg(message: _58.UninterpretedOption_NamePartProtoMsg): _58.UninterpretedOption_NamePart;
            toProto(message: _58.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _58.UninterpretedOption_NamePart): _58.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            is(o: any): o is _58.SourceCodeInfo;
            isSDK(o: any): o is _58.SourceCodeInfoSDKType;
            isAmino(o: any): o is _58.SourceCodeInfoAmino;
            encode(message: _58.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.SourceCodeInfo;
            fromJSON(object: any): _58.SourceCodeInfo;
            toJSON(message: _58.SourceCodeInfo): {
                location: {
                    path: number[];
                    span: number[];
                    leadingComments: string;
                    trailingComments: string;
                    leadingDetachedComments: string[];
                }[];
            };
            fromPartial(object: Partial<_58.SourceCodeInfo>): _58.SourceCodeInfo;
            fromAmino(object: _58.SourceCodeInfoAmino): _58.SourceCodeInfo;
            toAmino(message: _58.SourceCodeInfo): _58.SourceCodeInfoAmino;
            fromAminoMsg(object: _58.SourceCodeInfoAminoMsg): _58.SourceCodeInfo;
            fromProtoMsg(message: _58.SourceCodeInfoProtoMsg): _58.SourceCodeInfo;
            toProto(message: _58.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _58.SourceCodeInfo): _58.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            is(o: any): o is _58.SourceCodeInfo_Location;
            isSDK(o: any): o is _58.SourceCodeInfo_LocationSDKType;
            isAmino(o: any): o is _58.SourceCodeInfo_LocationAmino;
            encode(message: _58.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.SourceCodeInfo_Location;
            fromJSON(object: any): _58.SourceCodeInfo_Location;
            toJSON(message: _58.SourceCodeInfo_Location): {
                path: number[];
                span: number[];
                leadingComments: string;
                trailingComments: string;
                leadingDetachedComments: string[];
            };
            fromPartial(object: Partial<_58.SourceCodeInfo_Location>): _58.SourceCodeInfo_Location;
            fromAmino(object: _58.SourceCodeInfo_LocationAmino): _58.SourceCodeInfo_Location;
            toAmino(message: _58.SourceCodeInfo_Location): _58.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _58.SourceCodeInfo_LocationAminoMsg): _58.SourceCodeInfo_Location;
            fromProtoMsg(message: _58.SourceCodeInfo_LocationProtoMsg): _58.SourceCodeInfo_Location;
            toProto(message: _58.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _58.SourceCodeInfo_Location): _58.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            is(o: any): o is _58.GeneratedCodeInfo;
            isSDK(o: any): o is _58.GeneratedCodeInfoSDKType;
            isAmino(o: any): o is _58.GeneratedCodeInfoAmino;
            encode(message: _58.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.GeneratedCodeInfo;
            fromJSON(object: any): _58.GeneratedCodeInfo;
            toJSON(message: _58.GeneratedCodeInfo): {
                annotation: {
                    path: number[];
                    sourceFile: string;
                    begin: number;
                    end: number;
                }[];
            };
            fromPartial(object: Partial<_58.GeneratedCodeInfo>): _58.GeneratedCodeInfo;
            fromAmino(object: _58.GeneratedCodeInfoAmino): _58.GeneratedCodeInfo;
            toAmino(message: _58.GeneratedCodeInfo): _58.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _58.GeneratedCodeInfoAminoMsg): _58.GeneratedCodeInfo;
            fromProtoMsg(message: _58.GeneratedCodeInfoProtoMsg): _58.GeneratedCodeInfo;
            toProto(message: _58.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _58.GeneratedCodeInfo): _58.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            is(o: any): o is _58.GeneratedCodeInfo_Annotation;
            isSDK(o: any): o is _58.GeneratedCodeInfo_AnnotationSDKType;
            isAmino(o: any): o is _58.GeneratedCodeInfo_AnnotationAmino;
            encode(message: _58.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _58.GeneratedCodeInfo_Annotation;
            toJSON(message: _58.GeneratedCodeInfo_Annotation): {
                path: number[];
                sourceFile: string;
                begin: number;
                end: number;
            };
            fromPartial(object: Partial<_58.GeneratedCodeInfo_Annotation>): _58.GeneratedCodeInfo_Annotation;
            fromAmino(object: _58.GeneratedCodeInfo_AnnotationAmino): _58.GeneratedCodeInfo_Annotation;
            toAmino(message: _58.GeneratedCodeInfo_Annotation): _58.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _58.GeneratedCodeInfo_AnnotationAminoMsg): _58.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _58.GeneratedCodeInfo_AnnotationProtoMsg): _58.GeneratedCodeInfo_Annotation;
            toProto(message: _58.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _58.GeneratedCodeInfo_Annotation): _58.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            is(o: any): o is _57.Any;
            isSDK(o: any): o is _57.AnySDKType;
            isAmino(o: any): o is _57.AnyAmino;
            encode(message: _57.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Any;
            fromJSON(object: any): _57.Any;
            toJSON(message: _57.Any): {
                $typeUrl?: string;
                typeUrl: string;
                value: string;
            };
            fromPartial(object: Partial<_57.Any>): _57.Any;
            fromAmino(object: _57.AnyAmino): _57.Any;
            toAmino(message: _57.Any): _57.AnyAmino;
            fromAminoMsg(object: _57.AnyAminoMsg): _57.Any;
            fromProtoMsg(message: _57.AnyProtoMsg): _57.Any;
            toProto(message: _57.Any): Uint8Array;
            toProtoMsg(message: _57.Any): _57.AnyProtoMsg;
        };
    };
}
