import * as _87 from "./wasm/v1/cosmwasm";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgInstantiateContract: {
                encode(message: _87.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _87.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContract2;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _87.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _87.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _87.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _87.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgInstantiateContract2Response;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _87.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _87.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _87.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _87.MsgExecuteContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _87.MsgExecuteContractResponse;
            };
        };
    }
}
