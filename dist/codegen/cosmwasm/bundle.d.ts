import * as _85 from "./wasm/v1/cosmwasm";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgInstantiateContract: {
                encode(message: _85.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgInstantiateContract;
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
                }): _85.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _85.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgInstantiateContract2;
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
                }): _85.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _85.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _85.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _85.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgInstantiateContract2Response;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _85.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _85.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _85.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _85.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _85.MsgExecuteContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _85.MsgExecuteContractResponse;
            };
        };
    }
}
