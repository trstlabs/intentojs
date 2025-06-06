import * as _54 from "./api/http";
import * as _55 from "./protobuf/any";
import * as _56 from "./protobuf/descriptor";
import * as _57 from "./protobuf/duration";
import * as _58 from "./protobuf/empty";
import * as _59 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            is(o: any): o is _54.Http;
            isSDK(o: any): o is _54.HttpSDKType;
            isAmino(o: any): o is _54.HttpAmino;
            encode(message: _54.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.Http;
            fromJSON(object: any): _54.Http;
            toJSON(message: _54.Http): {
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
            fromPartial(object: Partial<_54.Http>): _54.Http;
            fromAmino(object: _54.HttpAmino): _54.Http;
            toAmino(message: _54.Http): _54.HttpAmino;
            fromAminoMsg(object: _54.HttpAminoMsg): _54.Http;
            fromProtoMsg(message: _54.HttpProtoMsg): _54.Http;
            toProto(message: _54.Http): Uint8Array;
            toProtoMsg(message: _54.Http): _54.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            is(o: any): o is _54.HttpRule;
            isSDK(o: any): o is _54.HttpRuleSDKType;
            isAmino(o: any): o is _54.HttpRuleAmino;
            encode(message: _54.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.HttpRule;
            fromJSON(object: any): _54.HttpRule;
            toJSON(message: _54.HttpRule): {
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
            fromPartial(object: Partial<_54.HttpRule>): _54.HttpRule;
            fromAmino(object: _54.HttpRuleAmino): _54.HttpRule;
            toAmino(message: _54.HttpRule): _54.HttpRuleAmino;
            fromAminoMsg(object: _54.HttpRuleAminoMsg): _54.HttpRule;
            fromProtoMsg(message: _54.HttpRuleProtoMsg): _54.HttpRule;
            toProto(message: _54.HttpRule): Uint8Array;
            toProtoMsg(message: _54.HttpRule): _54.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            is(o: any): o is _54.CustomHttpPattern;
            isSDK(o: any): o is _54.CustomHttpPatternSDKType;
            isAmino(o: any): o is _54.CustomHttpPatternAmino;
            encode(message: _54.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _54.CustomHttpPattern;
            fromJSON(object: any): _54.CustomHttpPattern;
            toJSON(message: _54.CustomHttpPattern): {
                kind: string;
                path: string;
            };
            fromPartial(object: Partial<_54.CustomHttpPattern>): _54.CustomHttpPattern;
            fromAmino(object: _54.CustomHttpPatternAmino): _54.CustomHttpPattern;
            toAmino(message: _54.CustomHttpPattern): _54.CustomHttpPatternAmino;
            fromAminoMsg(object: _54.CustomHttpPatternAminoMsg): _54.CustomHttpPattern;
            fromProtoMsg(message: _54.CustomHttpPatternProtoMsg): _54.CustomHttpPattern;
            toProto(message: _54.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _54.CustomHttpPattern): _54.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            is(o: any): o is _59.Timestamp;
            isSDK(o: any): o is _59.TimestampSDKType;
            isAmino(o: any): o is string;
            encode(message: _59.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _59.Timestamp;
            fromJSON(object: any): _59.Timestamp;
            toJSON(message: _59.Timestamp): {
                seconds: string;
                nanos: number;
            };
            fromPartial(object: Partial<_59.Timestamp>): _59.Timestamp;
            fromAmino(object: string): _59.Timestamp;
            toAmino(message: _59.Timestamp): string;
            fromAminoMsg(object: _59.TimestampAminoMsg): _59.Timestamp;
            fromProtoMsg(message: _59.TimestampProtoMsg): _59.Timestamp;
            toProto(message: _59.Timestamp): Uint8Array;
            toProtoMsg(message: _59.Timestamp): _59.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            is(o: any): o is _58.Empty;
            isSDK(o: any): o is _58.EmptySDKType;
            isAmino(o: any): o is _58.EmptyAmino;
            encode(_: _58.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _58.Empty;
            fromJSON(_: any): _58.Empty;
            toJSON(_: _58.Empty): {};
            fromPartial(_: Partial<_58.Empty>): _58.Empty;
            fromAmino(_: _58.EmptyAmino): _58.Empty;
            toAmino(_: _58.Empty): _58.EmptyAmino;
            fromAminoMsg(object: _58.EmptyAminoMsg): _58.Empty;
            fromProtoMsg(message: _58.EmptyProtoMsg): _58.Empty;
            toProto(message: _58.Empty): Uint8Array;
            toProtoMsg(message: _58.Empty): _58.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            is(o: any): o is _57.Duration;
            isSDK(o: any): o is _57.DurationSDKType;
            isAmino(o: any): o is string;
            encode(message: _57.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _57.Duration;
            fromJSON(object: any): _57.Duration;
            toJSON(message: _57.Duration): {
                seconds: string;
                nanos: number;
            };
            fromPartial(object: Partial<_57.Duration>): _57.Duration;
            fromAmino(object: string): _57.Duration;
            toAmino(message: _57.Duration): string;
            fromAminoMsg(object: _57.DurationAminoMsg): _57.Duration;
            fromProtoMsg(message: _57.DurationProtoMsg): _57.Duration;
            toProto(message: _57.Duration): Uint8Array;
            toProtoMsg(message: _57.Duration): _57.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _56.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _56.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _56.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _56.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _56.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _56.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _56.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _56.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _56.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _56.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _56.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _56.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _56.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _56.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _56.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _56.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _56.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _56.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _56.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _56.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _56.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _56.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _56.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _56.FieldOptions_CType;
        FieldOptions_JSType: typeof _56.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _56.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _56.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _56.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _56.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _56.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            is(o: any): o is _56.FileDescriptorSet;
            isSDK(o: any): o is _56.FileDescriptorSetSDKType;
            isAmino(o: any): o is _56.FileDescriptorSetAmino;
            encode(message: _56.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.FileDescriptorSet;
            fromJSON(object: any): _56.FileDescriptorSet;
            toJSON(message: _56.FileDescriptorSet): {
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
                            label: _56.FieldDescriptorProto_Label;
                            type: _56.FieldDescriptorProto_Type;
                            typeName: string;
                            extendee: string;
                            defaultValue: string;
                            oneofIndex: number;
                            jsonName: string;
                            options?: {
                                ctype: _56.FieldOptions_CType;
                                packed: boolean;
                                jstype: _56.FieldOptions_JSType;
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
                            label: _56.FieldDescriptorProto_Label;
                            type: _56.FieldDescriptorProto_Type;
                            typeName: string;
                            extendee: string;
                            defaultValue: string;
                            oneofIndex: number;
                            jsonName: string;
                            options?: {
                                ctype: _56.FieldOptions_CType;
                                packed: boolean;
                                jstype: _56.FieldOptions_JSType;
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
                                idempotencyLevel: _56.MethodOptions_IdempotencyLevel;
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
                        label: _56.FieldDescriptorProto_Label;
                        type: _56.FieldDescriptorProto_Type;
                        typeName: string;
                        extendee: string;
                        defaultValue: string;
                        oneofIndex: number;
                        jsonName: string;
                        options?: {
                            ctype: _56.FieldOptions_CType;
                            packed: boolean;
                            jstype: _56.FieldOptions_JSType;
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
                        optimizeFor: _56.FileOptions_OptimizeMode;
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
            fromPartial(object: Partial<_56.FileDescriptorSet>): _56.FileDescriptorSet;
            fromAmino(object: _56.FileDescriptorSetAmino): _56.FileDescriptorSet;
            toAmino(message: _56.FileDescriptorSet): _56.FileDescriptorSetAmino;
            fromAminoMsg(object: _56.FileDescriptorSetAminoMsg): _56.FileDescriptorSet;
            fromProtoMsg(message: _56.FileDescriptorSetProtoMsg): _56.FileDescriptorSet;
            toProto(message: _56.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _56.FileDescriptorSet): _56.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.FileDescriptorProto;
            isSDK(o: any): o is _56.FileDescriptorProtoSDKType;
            isAmino(o: any): o is _56.FileDescriptorProtoAmino;
            encode(message: _56.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.FileDescriptorProto;
            fromJSON(object: any): _56.FileDescriptorProto;
            toJSON(message: _56.FileDescriptorProto): {
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
                        label: _56.FieldDescriptorProto_Label;
                        type: _56.FieldDescriptorProto_Type;
                        typeName: string;
                        extendee: string;
                        defaultValue: string;
                        oneofIndex: number;
                        jsonName: string;
                        options?: {
                            ctype: _56.FieldOptions_CType;
                            packed: boolean;
                            jstype: _56.FieldOptions_JSType;
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
                        label: _56.FieldDescriptorProto_Label;
                        type: _56.FieldDescriptorProto_Type;
                        typeName: string;
                        extendee: string;
                        defaultValue: string;
                        oneofIndex: number;
                        jsonName: string;
                        options?: {
                            ctype: _56.FieldOptions_CType;
                            packed: boolean;
                            jstype: _56.FieldOptions_JSType;
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
                            idempotencyLevel: _56.MethodOptions_IdempotencyLevel;
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
                    label: _56.FieldDescriptorProto_Label;
                    type: _56.FieldDescriptorProto_Type;
                    typeName: string;
                    extendee: string;
                    defaultValue: string;
                    oneofIndex: number;
                    jsonName: string;
                    options?: {
                        ctype: _56.FieldOptions_CType;
                        packed: boolean;
                        jstype: _56.FieldOptions_JSType;
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
                    optimizeFor: _56.FileOptions_OptimizeMode;
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
            fromPartial(object: Partial<_56.FileDescriptorProto>): _56.FileDescriptorProto;
            fromAmino(object: _56.FileDescriptorProtoAmino): _56.FileDescriptorProto;
            toAmino(message: _56.FileDescriptorProto): _56.FileDescriptorProtoAmino;
            fromAminoMsg(object: _56.FileDescriptorProtoAminoMsg): _56.FileDescriptorProto;
            fromProtoMsg(message: _56.FileDescriptorProtoProtoMsg): _56.FileDescriptorProto;
            toProto(message: _56.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.FileDescriptorProto): _56.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.DescriptorProto;
            isSDK(o: any): o is _56.DescriptorProtoSDKType;
            isAmino(o: any): o is _56.DescriptorProtoAmino;
            encode(message: _56.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.DescriptorProto;
            fromJSON(object: any): _56.DescriptorProto;
            toJSON(message: _56.DescriptorProto): {
                name: string;
                field: {
                    name: string;
                    number: number;
                    label: _56.FieldDescriptorProto_Label;
                    type: _56.FieldDescriptorProto_Type;
                    typeName: string;
                    extendee: string;
                    defaultValue: string;
                    oneofIndex: number;
                    jsonName: string;
                    options?: {
                        ctype: _56.FieldOptions_CType;
                        packed: boolean;
                        jstype: _56.FieldOptions_JSType;
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
                    label: _56.FieldDescriptorProto_Label;
                    type: _56.FieldDescriptorProto_Type;
                    typeName: string;
                    extendee: string;
                    defaultValue: string;
                    oneofIndex: number;
                    jsonName: string;
                    options?: {
                        ctype: _56.FieldOptions_CType;
                        packed: boolean;
                        jstype: _56.FieldOptions_JSType;
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
            fromPartial(object: Partial<_56.DescriptorProto>): _56.DescriptorProto;
            fromAmino(object: _56.DescriptorProtoAmino): _56.DescriptorProto;
            toAmino(message: _56.DescriptorProto): _56.DescriptorProtoAmino;
            fromAminoMsg(object: _56.DescriptorProtoAminoMsg): _56.DescriptorProto;
            fromProtoMsg(message: _56.DescriptorProtoProtoMsg): _56.DescriptorProto;
            toProto(message: _56.DescriptorProto): Uint8Array;
            toProtoMsg(message: _56.DescriptorProto): _56.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            is(o: any): o is _56.DescriptorProto_ExtensionRange;
            isSDK(o: any): o is _56.DescriptorProto_ExtensionRangeSDKType;
            isAmino(o: any): o is _56.DescriptorProto_ExtensionRangeAmino;
            encode(message: _56.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _56.DescriptorProto_ExtensionRange;
            toJSON(message: _56.DescriptorProto_ExtensionRange): {
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
            fromPartial(object: Partial<_56.DescriptorProto_ExtensionRange>): _56.DescriptorProto_ExtensionRange;
            fromAmino(object: _56.DescriptorProto_ExtensionRangeAmino): _56.DescriptorProto_ExtensionRange;
            toAmino(message: _56.DescriptorProto_ExtensionRange): _56.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _56.DescriptorProto_ExtensionRangeAminoMsg): _56.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _56.DescriptorProto_ExtensionRangeProtoMsg): _56.DescriptorProto_ExtensionRange;
            toProto(message: _56.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _56.DescriptorProto_ExtensionRange): _56.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            is(o: any): o is _56.DescriptorProto_ReservedRange;
            isSDK(o: any): o is _56.DescriptorProto_ReservedRangeSDKType;
            isAmino(o: any): o is _56.DescriptorProto_ReservedRangeAmino;
            encode(message: _56.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.DescriptorProto_ReservedRange;
            fromJSON(object: any): _56.DescriptorProto_ReservedRange;
            toJSON(message: _56.DescriptorProto_ReservedRange): {
                start: number;
                end: number;
            };
            fromPartial(object: Partial<_56.DescriptorProto_ReservedRange>): _56.DescriptorProto_ReservedRange;
            fromAmino(object: _56.DescriptorProto_ReservedRangeAmino): _56.DescriptorProto_ReservedRange;
            toAmino(message: _56.DescriptorProto_ReservedRange): _56.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _56.DescriptorProto_ReservedRangeAminoMsg): _56.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _56.DescriptorProto_ReservedRangeProtoMsg): _56.DescriptorProto_ReservedRange;
            toProto(message: _56.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _56.DescriptorProto_ReservedRange): _56.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            is(o: any): o is _56.ExtensionRangeOptions;
            isSDK(o: any): o is _56.ExtensionRangeOptionsSDKType;
            isAmino(o: any): o is _56.ExtensionRangeOptionsAmino;
            encode(message: _56.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.ExtensionRangeOptions;
            fromJSON(object: any): _56.ExtensionRangeOptions;
            toJSON(message: _56.ExtensionRangeOptions): {
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
            fromPartial(object: Partial<_56.ExtensionRangeOptions>): _56.ExtensionRangeOptions;
            fromAmino(object: _56.ExtensionRangeOptionsAmino): _56.ExtensionRangeOptions;
            toAmino(message: _56.ExtensionRangeOptions): _56.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _56.ExtensionRangeOptionsAminoMsg): _56.ExtensionRangeOptions;
            fromProtoMsg(message: _56.ExtensionRangeOptionsProtoMsg): _56.ExtensionRangeOptions;
            toProto(message: _56.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _56.ExtensionRangeOptions): _56.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.FieldDescriptorProto;
            isSDK(o: any): o is _56.FieldDescriptorProtoSDKType;
            isAmino(o: any): o is _56.FieldDescriptorProtoAmino;
            encode(message: _56.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.FieldDescriptorProto;
            fromJSON(object: any): _56.FieldDescriptorProto;
            toJSON(message: _56.FieldDescriptorProto): {
                name: string;
                number: number;
                label: _56.FieldDescriptorProto_Label;
                type: _56.FieldDescriptorProto_Type;
                typeName: string;
                extendee: string;
                defaultValue: string;
                oneofIndex: number;
                jsonName: string;
                options?: {
                    ctype: _56.FieldOptions_CType;
                    packed: boolean;
                    jstype: _56.FieldOptions_JSType;
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
            fromPartial(object: Partial<_56.FieldDescriptorProto>): _56.FieldDescriptorProto;
            fromAmino(object: _56.FieldDescriptorProtoAmino): _56.FieldDescriptorProto;
            toAmino(message: _56.FieldDescriptorProto): _56.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _56.FieldDescriptorProtoAminoMsg): _56.FieldDescriptorProto;
            fromProtoMsg(message: _56.FieldDescriptorProtoProtoMsg): _56.FieldDescriptorProto;
            toProto(message: _56.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.FieldDescriptorProto): _56.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.OneofDescriptorProto;
            isSDK(o: any): o is _56.OneofDescriptorProtoSDKType;
            isAmino(o: any): o is _56.OneofDescriptorProtoAmino;
            encode(message: _56.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.OneofDescriptorProto;
            fromJSON(object: any): _56.OneofDescriptorProto;
            toJSON(message: _56.OneofDescriptorProto): {
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
            fromPartial(object: Partial<_56.OneofDescriptorProto>): _56.OneofDescriptorProto;
            fromAmino(object: _56.OneofDescriptorProtoAmino): _56.OneofDescriptorProto;
            toAmino(message: _56.OneofDescriptorProto): _56.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _56.OneofDescriptorProtoAminoMsg): _56.OneofDescriptorProto;
            fromProtoMsg(message: _56.OneofDescriptorProtoProtoMsg): _56.OneofDescriptorProto;
            toProto(message: _56.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.OneofDescriptorProto): _56.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.EnumDescriptorProto;
            isSDK(o: any): o is _56.EnumDescriptorProtoSDKType;
            isAmino(o: any): o is _56.EnumDescriptorProtoAmino;
            encode(message: _56.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.EnumDescriptorProto;
            fromJSON(object: any): _56.EnumDescriptorProto;
            toJSON(message: _56.EnumDescriptorProto): {
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
            fromPartial(object: Partial<_56.EnumDescriptorProto>): _56.EnumDescriptorProto;
            fromAmino(object: _56.EnumDescriptorProtoAmino): _56.EnumDescriptorProto;
            toAmino(message: _56.EnumDescriptorProto): _56.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _56.EnumDescriptorProtoAminoMsg): _56.EnumDescriptorProto;
            fromProtoMsg(message: _56.EnumDescriptorProtoProtoMsg): _56.EnumDescriptorProto;
            toProto(message: _56.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.EnumDescriptorProto): _56.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            is(o: any): o is _56.EnumDescriptorProto_EnumReservedRange;
            isSDK(o: any): o is _56.EnumDescriptorProto_EnumReservedRangeSDKType;
            isAmino(o: any): o is _56.EnumDescriptorProto_EnumReservedRangeAmino;
            encode(message: _56.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _56.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _56.EnumDescriptorProto_EnumReservedRange): {
                start: number;
                end: number;
            };
            fromPartial(object: Partial<_56.EnumDescriptorProto_EnumReservedRange>): _56.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _56.EnumDescriptorProto_EnumReservedRangeAmino): _56.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _56.EnumDescriptorProto_EnumReservedRange): _56.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _56.EnumDescriptorProto_EnumReservedRangeAminoMsg): _56.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _56.EnumDescriptorProto_EnumReservedRangeProtoMsg): _56.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _56.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _56.EnumDescriptorProto_EnumReservedRange): _56.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.EnumValueDescriptorProto;
            isSDK(o: any): o is _56.EnumValueDescriptorProtoSDKType;
            isAmino(o: any): o is _56.EnumValueDescriptorProtoAmino;
            encode(message: _56.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.EnumValueDescriptorProto;
            fromJSON(object: any): _56.EnumValueDescriptorProto;
            toJSON(message: _56.EnumValueDescriptorProto): {
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
            fromPartial(object: Partial<_56.EnumValueDescriptorProto>): _56.EnumValueDescriptorProto;
            fromAmino(object: _56.EnumValueDescriptorProtoAmino): _56.EnumValueDescriptorProto;
            toAmino(message: _56.EnumValueDescriptorProto): _56.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _56.EnumValueDescriptorProtoAminoMsg): _56.EnumValueDescriptorProto;
            fromProtoMsg(message: _56.EnumValueDescriptorProtoProtoMsg): _56.EnumValueDescriptorProto;
            toProto(message: _56.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.EnumValueDescriptorProto): _56.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.ServiceDescriptorProto;
            isSDK(o: any): o is _56.ServiceDescriptorProtoSDKType;
            isAmino(o: any): o is _56.ServiceDescriptorProtoAmino;
            encode(message: _56.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.ServiceDescriptorProto;
            fromJSON(object: any): _56.ServiceDescriptorProto;
            toJSON(message: _56.ServiceDescriptorProto): {
                name: string;
                method: {
                    name: string;
                    inputType: string;
                    outputType: string;
                    options?: {
                        deprecated: boolean;
                        idempotencyLevel: _56.MethodOptions_IdempotencyLevel;
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
            fromPartial(object: Partial<_56.ServiceDescriptorProto>): _56.ServiceDescriptorProto;
            fromAmino(object: _56.ServiceDescriptorProtoAmino): _56.ServiceDescriptorProto;
            toAmino(message: _56.ServiceDescriptorProto): _56.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _56.ServiceDescriptorProtoAminoMsg): _56.ServiceDescriptorProto;
            fromProtoMsg(message: _56.ServiceDescriptorProtoProtoMsg): _56.ServiceDescriptorProto;
            toProto(message: _56.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.ServiceDescriptorProto): _56.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            is(o: any): o is _56.MethodDescriptorProto;
            isSDK(o: any): o is _56.MethodDescriptorProtoSDKType;
            isAmino(o: any): o is _56.MethodDescriptorProtoAmino;
            encode(message: _56.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MethodDescriptorProto;
            fromJSON(object: any): _56.MethodDescriptorProto;
            toJSON(message: _56.MethodDescriptorProto): {
                name: string;
                inputType: string;
                outputType: string;
                options?: {
                    deprecated: boolean;
                    idempotencyLevel: _56.MethodOptions_IdempotencyLevel;
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
            fromPartial(object: Partial<_56.MethodDescriptorProto>): _56.MethodDescriptorProto;
            fromAmino(object: _56.MethodDescriptorProtoAmino): _56.MethodDescriptorProto;
            toAmino(message: _56.MethodDescriptorProto): _56.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _56.MethodDescriptorProtoAminoMsg): _56.MethodDescriptorProto;
            fromProtoMsg(message: _56.MethodDescriptorProtoProtoMsg): _56.MethodDescriptorProto;
            toProto(message: _56.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _56.MethodDescriptorProto): _56.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            is(o: any): o is _56.FileOptions;
            isSDK(o: any): o is _56.FileOptionsSDKType;
            isAmino(o: any): o is _56.FileOptionsAmino;
            encode(message: _56.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.FileOptions;
            fromJSON(object: any): _56.FileOptions;
            toJSON(message: _56.FileOptions): {
                javaPackage: string;
                javaOuterClassname: string;
                javaMultipleFiles: boolean;
                javaGenerateEqualsAndHash: boolean;
                javaStringCheckUtf8: boolean;
                optimizeFor: _56.FileOptions_OptimizeMode;
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
            fromPartial(object: Partial<_56.FileOptions>): _56.FileOptions;
            fromAmino(object: _56.FileOptionsAmino): _56.FileOptions;
            toAmino(message: _56.FileOptions): _56.FileOptionsAmino;
            fromAminoMsg(object: _56.FileOptionsAminoMsg): _56.FileOptions;
            fromProtoMsg(message: _56.FileOptionsProtoMsg): _56.FileOptions;
            toProto(message: _56.FileOptions): Uint8Array;
            toProtoMsg(message: _56.FileOptions): _56.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            is(o: any): o is _56.MessageOptions;
            isSDK(o: any): o is _56.MessageOptionsSDKType;
            isAmino(o: any): o is _56.MessageOptionsAmino;
            encode(message: _56.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MessageOptions;
            fromJSON(object: any): _56.MessageOptions;
            toJSON(message: _56.MessageOptions): {
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
            fromPartial(object: Partial<_56.MessageOptions>): _56.MessageOptions;
            fromAmino(object: _56.MessageOptionsAmino): _56.MessageOptions;
            toAmino(message: _56.MessageOptions): _56.MessageOptionsAmino;
            fromAminoMsg(object: _56.MessageOptionsAminoMsg): _56.MessageOptions;
            fromProtoMsg(message: _56.MessageOptionsProtoMsg): _56.MessageOptions;
            toProto(message: _56.MessageOptions): Uint8Array;
            toProtoMsg(message: _56.MessageOptions): _56.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            is(o: any): o is _56.FieldOptions;
            isSDK(o: any): o is _56.FieldOptionsSDKType;
            isAmino(o: any): o is _56.FieldOptionsAmino;
            encode(message: _56.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.FieldOptions;
            fromJSON(object: any): _56.FieldOptions;
            toJSON(message: _56.FieldOptions): {
                ctype: _56.FieldOptions_CType;
                packed: boolean;
                jstype: _56.FieldOptions_JSType;
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
            fromPartial(object: Partial<_56.FieldOptions>): _56.FieldOptions;
            fromAmino(object: _56.FieldOptionsAmino): _56.FieldOptions;
            toAmino(message: _56.FieldOptions): _56.FieldOptionsAmino;
            fromAminoMsg(object: _56.FieldOptionsAminoMsg): _56.FieldOptions;
            fromProtoMsg(message: _56.FieldOptionsProtoMsg): _56.FieldOptions;
            toProto(message: _56.FieldOptions): Uint8Array;
            toProtoMsg(message: _56.FieldOptions): _56.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            is(o: any): o is _56.OneofOptions;
            isSDK(o: any): o is _56.OneofOptionsSDKType;
            isAmino(o: any): o is _56.OneofOptionsAmino;
            encode(message: _56.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.OneofOptions;
            fromJSON(object: any): _56.OneofOptions;
            toJSON(message: _56.OneofOptions): {
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
            fromPartial(object: Partial<_56.OneofOptions>): _56.OneofOptions;
            fromAmino(object: _56.OneofOptionsAmino): _56.OneofOptions;
            toAmino(message: _56.OneofOptions): _56.OneofOptionsAmino;
            fromAminoMsg(object: _56.OneofOptionsAminoMsg): _56.OneofOptions;
            fromProtoMsg(message: _56.OneofOptionsProtoMsg): _56.OneofOptions;
            toProto(message: _56.OneofOptions): Uint8Array;
            toProtoMsg(message: _56.OneofOptions): _56.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            is(o: any): o is _56.EnumOptions;
            isSDK(o: any): o is _56.EnumOptionsSDKType;
            isAmino(o: any): o is _56.EnumOptionsAmino;
            encode(message: _56.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.EnumOptions;
            fromJSON(object: any): _56.EnumOptions;
            toJSON(message: _56.EnumOptions): {
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
            fromPartial(object: Partial<_56.EnumOptions>): _56.EnumOptions;
            fromAmino(object: _56.EnumOptionsAmino): _56.EnumOptions;
            toAmino(message: _56.EnumOptions): _56.EnumOptionsAmino;
            fromAminoMsg(object: _56.EnumOptionsAminoMsg): _56.EnumOptions;
            fromProtoMsg(message: _56.EnumOptionsProtoMsg): _56.EnumOptions;
            toProto(message: _56.EnumOptions): Uint8Array;
            toProtoMsg(message: _56.EnumOptions): _56.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            is(o: any): o is _56.EnumValueOptions;
            isSDK(o: any): o is _56.EnumValueOptionsSDKType;
            isAmino(o: any): o is _56.EnumValueOptionsAmino;
            encode(message: _56.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.EnumValueOptions;
            fromJSON(object: any): _56.EnumValueOptions;
            toJSON(message: _56.EnumValueOptions): {
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
            fromPartial(object: Partial<_56.EnumValueOptions>): _56.EnumValueOptions;
            fromAmino(object: _56.EnumValueOptionsAmino): _56.EnumValueOptions;
            toAmino(message: _56.EnumValueOptions): _56.EnumValueOptionsAmino;
            fromAminoMsg(object: _56.EnumValueOptionsAminoMsg): _56.EnumValueOptions;
            fromProtoMsg(message: _56.EnumValueOptionsProtoMsg): _56.EnumValueOptions;
            toProto(message: _56.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _56.EnumValueOptions): _56.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            is(o: any): o is _56.ServiceOptions;
            isSDK(o: any): o is _56.ServiceOptionsSDKType;
            isAmino(o: any): o is _56.ServiceOptionsAmino;
            encode(message: _56.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.ServiceOptions;
            fromJSON(object: any): _56.ServiceOptions;
            toJSON(message: _56.ServiceOptions): {
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
            fromPartial(object: Partial<_56.ServiceOptions>): _56.ServiceOptions;
            fromAmino(object: _56.ServiceOptionsAmino): _56.ServiceOptions;
            toAmino(message: _56.ServiceOptions): _56.ServiceOptionsAmino;
            fromAminoMsg(object: _56.ServiceOptionsAminoMsg): _56.ServiceOptions;
            fromProtoMsg(message: _56.ServiceOptionsProtoMsg): _56.ServiceOptions;
            toProto(message: _56.ServiceOptions): Uint8Array;
            toProtoMsg(message: _56.ServiceOptions): _56.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            is(o: any): o is _56.MethodOptions;
            isSDK(o: any): o is _56.MethodOptionsSDKType;
            isAmino(o: any): o is _56.MethodOptionsAmino;
            encode(message: _56.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.MethodOptions;
            fromJSON(object: any): _56.MethodOptions;
            toJSON(message: _56.MethodOptions): {
                deprecated: boolean;
                idempotencyLevel: _56.MethodOptions_IdempotencyLevel;
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
            fromPartial(object: Partial<_56.MethodOptions>): _56.MethodOptions;
            fromAmino(object: _56.MethodOptionsAmino): _56.MethodOptions;
            toAmino(message: _56.MethodOptions): _56.MethodOptionsAmino;
            fromAminoMsg(object: _56.MethodOptionsAminoMsg): _56.MethodOptions;
            fromProtoMsg(message: _56.MethodOptionsProtoMsg): _56.MethodOptions;
            toProto(message: _56.MethodOptions): Uint8Array;
            toProtoMsg(message: _56.MethodOptions): _56.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            is(o: any): o is _56.UninterpretedOption;
            isSDK(o: any): o is _56.UninterpretedOptionSDKType;
            isAmino(o: any): o is _56.UninterpretedOptionAmino;
            encode(message: _56.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.UninterpretedOption;
            fromJSON(object: any): _56.UninterpretedOption;
            toJSON(message: _56.UninterpretedOption): {
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
            fromPartial(object: Partial<_56.UninterpretedOption>): _56.UninterpretedOption;
            fromAmino(object: _56.UninterpretedOptionAmino): _56.UninterpretedOption;
            toAmino(message: _56.UninterpretedOption): _56.UninterpretedOptionAmino;
            fromAminoMsg(object: _56.UninterpretedOptionAminoMsg): _56.UninterpretedOption;
            fromProtoMsg(message: _56.UninterpretedOptionProtoMsg): _56.UninterpretedOption;
            toProto(message: _56.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _56.UninterpretedOption): _56.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            is(o: any): o is _56.UninterpretedOption_NamePart;
            isSDK(o: any): o is _56.UninterpretedOption_NamePartSDKType;
            isAmino(o: any): o is _56.UninterpretedOption_NamePartAmino;
            encode(message: _56.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.UninterpretedOption_NamePart;
            fromJSON(object: any): _56.UninterpretedOption_NamePart;
            toJSON(message: _56.UninterpretedOption_NamePart): {
                namePart: string;
                isExtension: boolean;
            };
            fromPartial(object: Partial<_56.UninterpretedOption_NamePart>): _56.UninterpretedOption_NamePart;
            fromAmino(object: _56.UninterpretedOption_NamePartAmino): _56.UninterpretedOption_NamePart;
            toAmino(message: _56.UninterpretedOption_NamePart): _56.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _56.UninterpretedOption_NamePartAminoMsg): _56.UninterpretedOption_NamePart;
            fromProtoMsg(message: _56.UninterpretedOption_NamePartProtoMsg): _56.UninterpretedOption_NamePart;
            toProto(message: _56.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _56.UninterpretedOption_NamePart): _56.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            is(o: any): o is _56.SourceCodeInfo;
            isSDK(o: any): o is _56.SourceCodeInfoSDKType;
            isAmino(o: any): o is _56.SourceCodeInfoAmino;
            encode(message: _56.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.SourceCodeInfo;
            fromJSON(object: any): _56.SourceCodeInfo;
            toJSON(message: _56.SourceCodeInfo): {
                location: {
                    path: number[];
                    span: number[];
                    leadingComments: string;
                    trailingComments: string;
                    leadingDetachedComments: string[];
                }[];
            };
            fromPartial(object: Partial<_56.SourceCodeInfo>): _56.SourceCodeInfo;
            fromAmino(object: _56.SourceCodeInfoAmino): _56.SourceCodeInfo;
            toAmino(message: _56.SourceCodeInfo): _56.SourceCodeInfoAmino;
            fromAminoMsg(object: _56.SourceCodeInfoAminoMsg): _56.SourceCodeInfo;
            fromProtoMsg(message: _56.SourceCodeInfoProtoMsg): _56.SourceCodeInfo;
            toProto(message: _56.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _56.SourceCodeInfo): _56.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            is(o: any): o is _56.SourceCodeInfo_Location;
            isSDK(o: any): o is _56.SourceCodeInfo_LocationSDKType;
            isAmino(o: any): o is _56.SourceCodeInfo_LocationAmino;
            encode(message: _56.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.SourceCodeInfo_Location;
            fromJSON(object: any): _56.SourceCodeInfo_Location;
            toJSON(message: _56.SourceCodeInfo_Location): {
                path: number[];
                span: number[];
                leadingComments: string;
                trailingComments: string;
                leadingDetachedComments: string[];
            };
            fromPartial(object: Partial<_56.SourceCodeInfo_Location>): _56.SourceCodeInfo_Location;
            fromAmino(object: _56.SourceCodeInfo_LocationAmino): _56.SourceCodeInfo_Location;
            toAmino(message: _56.SourceCodeInfo_Location): _56.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _56.SourceCodeInfo_LocationAminoMsg): _56.SourceCodeInfo_Location;
            fromProtoMsg(message: _56.SourceCodeInfo_LocationProtoMsg): _56.SourceCodeInfo_Location;
            toProto(message: _56.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _56.SourceCodeInfo_Location): _56.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            is(o: any): o is _56.GeneratedCodeInfo;
            isSDK(o: any): o is _56.GeneratedCodeInfoSDKType;
            isAmino(o: any): o is _56.GeneratedCodeInfoAmino;
            encode(message: _56.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.GeneratedCodeInfo;
            fromJSON(object: any): _56.GeneratedCodeInfo;
            toJSON(message: _56.GeneratedCodeInfo): {
                annotation: {
                    path: number[];
                    sourceFile: string;
                    begin: number;
                    end: number;
                }[];
            };
            fromPartial(object: Partial<_56.GeneratedCodeInfo>): _56.GeneratedCodeInfo;
            fromAmino(object: _56.GeneratedCodeInfoAmino): _56.GeneratedCodeInfo;
            toAmino(message: _56.GeneratedCodeInfo): _56.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _56.GeneratedCodeInfoAminoMsg): _56.GeneratedCodeInfo;
            fromProtoMsg(message: _56.GeneratedCodeInfoProtoMsg): _56.GeneratedCodeInfo;
            toProto(message: _56.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _56.GeneratedCodeInfo): _56.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            is(o: any): o is _56.GeneratedCodeInfo_Annotation;
            isSDK(o: any): o is _56.GeneratedCodeInfo_AnnotationSDKType;
            isAmino(o: any): o is _56.GeneratedCodeInfo_AnnotationAmino;
            encode(message: _56.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _56.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _56.GeneratedCodeInfo_Annotation;
            toJSON(message: _56.GeneratedCodeInfo_Annotation): {
                path: number[];
                sourceFile: string;
                begin: number;
                end: number;
            };
            fromPartial(object: Partial<_56.GeneratedCodeInfo_Annotation>): _56.GeneratedCodeInfo_Annotation;
            fromAmino(object: _56.GeneratedCodeInfo_AnnotationAmino): _56.GeneratedCodeInfo_Annotation;
            toAmino(message: _56.GeneratedCodeInfo_Annotation): _56.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _56.GeneratedCodeInfo_AnnotationAminoMsg): _56.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _56.GeneratedCodeInfo_AnnotationProtoMsg): _56.GeneratedCodeInfo_Annotation;
            toProto(message: _56.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _56.GeneratedCodeInfo_Annotation): _56.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            is(o: any): o is _55.Any;
            isSDK(o: any): o is _55.AnySDKType;
            isAmino(o: any): o is _55.AnyAmino;
            encode(message: _55.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _55.Any;
            fromJSON(object: any): _55.Any;
            toJSON(message: _55.Any): {
                $typeUrl?: string;
                typeUrl: string;
                value: string;
            };
            fromPartial(object: Partial<_55.Any>): _55.Any;
            fromAmino(object: _55.AnyAmino): _55.Any;
            toAmino(message: _55.Any): _55.AnyAmino;
            fromAminoMsg(object: _55.AnyAminoMsg): _55.Any;
            fromProtoMsg(message: _55.AnyProtoMsg): _55.Any;
            toProto(message: _55.Any): Uint8Array;
            toProtoMsg(message: _55.Any): _55.AnyProtoMsg;
        };
    };
}
