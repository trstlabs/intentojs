import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/upgrade";
import * as _45 from "./evm/vm/v1/evm";
import * as _46 from "./evm/vm/v1/tx";
import * as _177 from "./auth/v1beta1/query.rpc.Query";
import * as _178 from "./authz/v1beta1/query.rpc.Query";
import * as _179 from "./bank/v1beta1/query.rpc.Query";
import * as _180 from "./distribution/v1beta1/query.rpc.Query";
import * as _181 from "./gov/v1beta1/query.rpc.Query";
import * as _182 from "./staking/v1beta1/query.rpc.Query";
import * as _183 from "./tx/v1beta1/service.rpc.Service";
import * as _184 from "./upgrade/v1beta1/query.rpc.Query";
import * as _185 from "./authz/v1beta1/tx.rpc.msg";
import * as _186 from "./bank/v1beta1/tx.rpc.msg";
import * as _187 from "./distribution/v1beta1/tx.rpc.msg";
import * as _188 from "./gov/v1beta1/tx.rpc.msg";
import * as _189 from "./staking/v1beta1/tx.rpc.msg";
import * as _190 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _191 from "./evm/vm/v1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _5.QueryAccountsRequest): Promise<_5.QueryAccountsResponse>;
                account(request: _5.QueryAccountRequest): Promise<_5.QueryAccountResponse>;
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                moduleAccounts(request?: _5.QueryModuleAccountsRequest): Promise<_5.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _5.Bech32PrefixRequest): Promise<_5.Bech32PrefixResponse>;
                addressBytesToString(request: _5.AddressBytesToStringRequest): Promise<_5.AddressBytesToStringResponse>;
                addressStringToBytes(request: _5.AddressStringToBytesRequest): Promise<_5.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryAccountsRequest;
                isSDK(o: any): o is _5.QueryAccountsRequestSDKType;
                isAmino(o: any): o is _5.QueryAccountsRequestAmino;
                encode(message: _5.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountsRequest;
                fromJSON(object: any): _5.QueryAccountsRequest;
                toJSON(message: _5.QueryAccountsRequest): {
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_5.QueryAccountsRequest>): _5.QueryAccountsRequest;
                fromAmino(object: _5.QueryAccountsRequestAmino): _5.QueryAccountsRequest;
                toAmino(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryAccountsRequestAminoMsg): _5.QueryAccountsRequest;
                toAminoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsRequestProtoMsg): _5.QueryAccountsRequest;
                toProto(message: _5.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsRequest): _5.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryAccountsResponse;
                isSDK(o: any): o is _5.QueryAccountsResponseSDKType;
                isAmino(o: any): o is _5.QueryAccountsResponseAmino;
                encode(message: _5.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountsResponse;
                fromJSON(object: any): _5.QueryAccountsResponse;
                toJSON(message: _5.QueryAccountsResponse): {
                    accounts: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[] | ({
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
                        address: string;
                        pubKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        accountNumber: string;
                        sequence: string;
                    })[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_5.QueryAccountsResponse>): _5.QueryAccountsResponse;
                fromAmino(object: _5.QueryAccountsResponseAmino): _5.QueryAccountsResponse;
                toAmino(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryAccountsResponseAminoMsg): _5.QueryAccountsResponse;
                toAminoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountsResponseProtoMsg): _5.QueryAccountsResponse;
                toProto(message: _5.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountsResponse): _5.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryAccountRequest;
                isSDK(o: any): o is _5.QueryAccountRequestSDKType;
                isAmino(o: any): o is _5.QueryAccountRequestAmino;
                encode(message: _5.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountRequest;
                fromJSON(object: any): _5.QueryAccountRequest;
                toJSON(message: _5.QueryAccountRequest): {
                    address: string;
                };
                fromPartial(object: Partial<_5.QueryAccountRequest>): _5.QueryAccountRequest;
                fromAmino(object: _5.QueryAccountRequestAmino): _5.QueryAccountRequest;
                toAmino(message: _5.QueryAccountRequest): _5.QueryAccountRequestAmino;
                fromAminoMsg(object: _5.QueryAccountRequestAminoMsg): _5.QueryAccountRequest;
                toAminoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _5.QueryAccountRequestProtoMsg): _5.QueryAccountRequest;
                toProto(message: _5.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _5.QueryAccountRequest): _5.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryModuleAccountsRequest;
                isSDK(o: any): o is _5.QueryModuleAccountsRequestSDKType;
                isAmino(o: any): o is _5.QueryModuleAccountsRequestAmino;
                encode(_: _5.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountsRequest;
                fromJSON(_: any): _5.QueryModuleAccountsRequest;
                toJSON(_: _5.QueryModuleAccountsRequest): {};
                fromPartial(_: Partial<_5.QueryModuleAccountsRequest>): _5.QueryModuleAccountsRequest;
                fromAmino(_: _5.QueryModuleAccountsRequestAmino): _5.QueryModuleAccountsRequest;
                toAmino(_: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _5.QueryModuleAccountsRequestAminoMsg): _5.QueryModuleAccountsRequest;
                toAminoMsg(message: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountsRequestProtoMsg): _5.QueryModuleAccountsRequest;
                toProto(message: _5.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountsRequest): _5.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryParamsResponse;
                isSDK(o: any): o is _5.QueryParamsResponseSDKType;
                isAmino(o: any): o is _5.QueryParamsResponseAmino;
                encode(message: _5.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryParamsResponse;
                fromJSON(object: any): _5.QueryParamsResponse;
                toJSON(message: _5.QueryParamsResponse): {
                    params: {
                        maxMemoCharacters: string;
                        txSigLimit: string;
                        txSizeCostPerByte: string;
                        sigVerifyCostEd25519: string;
                        sigVerifyCostSecp256k1: string;
                    };
                };
                fromPartial(object: Partial<_5.QueryParamsResponse>): _5.QueryParamsResponse;
                fromAmino(object: _5.QueryParamsResponseAmino): _5.QueryParamsResponse;
                toAmino(message: _5.QueryParamsResponse): _5.QueryParamsResponseAmino;
                fromAminoMsg(object: _5.QueryParamsResponseAminoMsg): _5.QueryParamsResponse;
                toAminoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryParamsResponseProtoMsg): _5.QueryParamsResponse;
                toProto(message: _5.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryParamsResponse): _5.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryAccountResponse;
                isSDK(o: any): o is _5.QueryAccountResponseSDKType;
                isAmino(o: any): o is _5.QueryAccountResponseAmino;
                encode(message: _5.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryAccountResponse;
                fromJSON(object: any): _5.QueryAccountResponse;
                toJSON(message: _5.QueryAccountResponse): {
                    account?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
                        address: string;
                        pubKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        accountNumber: string;
                        sequence: string;
                    };
                };
                fromPartial(object: Partial<_5.QueryAccountResponse>): _5.QueryAccountResponse;
                fromAmino(object: _5.QueryAccountResponseAmino): _5.QueryAccountResponse;
                toAmino(message: _5.QueryAccountResponse): _5.QueryAccountResponseAmino;
                fromAminoMsg(object: _5.QueryAccountResponseAminoMsg): _5.QueryAccountResponse;
                toAminoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _5.QueryAccountResponseProtoMsg): _5.QueryAccountResponse;
                toProto(message: _5.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _5.QueryAccountResponse): _5.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryParamsRequest;
                isSDK(o: any): o is _5.QueryParamsRequestSDKType;
                isAmino(o: any): o is _5.QueryParamsRequestAmino;
                encode(_: _5.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryParamsRequest;
                fromJSON(_: any): _5.QueryParamsRequest;
                toJSON(_: _5.QueryParamsRequest): {};
                fromPartial(_: Partial<_5.QueryParamsRequest>): _5.QueryParamsRequest;
                fromAmino(_: _5.QueryParamsRequestAmino): _5.QueryParamsRequest;
                toAmino(_: _5.QueryParamsRequest): _5.QueryParamsRequestAmino;
                fromAminoMsg(object: _5.QueryParamsRequestAminoMsg): _5.QueryParamsRequest;
                toAminoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _5.QueryParamsRequestProtoMsg): _5.QueryParamsRequest;
                toProto(message: _5.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _5.QueryParamsRequest): _5.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.QueryModuleAccountsResponse;
                isSDK(o: any): o is _5.QueryModuleAccountsResponseSDKType;
                isAmino(o: any): o is _5.QueryModuleAccountsResponseAmino;
                encode(message: _5.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.QueryModuleAccountsResponse;
                fromJSON(object: any): _5.QueryModuleAccountsResponse;
                toJSON(message: _5.QueryModuleAccountsResponse): {
                    accounts: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[] | ({
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.auth.v1beta1.ModuleAccount";
                        baseAccount?: {
                            $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
                            address: string;
                            pubKey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            accountNumber: string;
                            sequence: string;
                        };
                        name: string;
                        permissions: string[];
                    })[];
                };
                fromPartial(object: Partial<_5.QueryModuleAccountsResponse>): _5.QueryModuleAccountsResponse;
                fromAmino(object: _5.QueryModuleAccountsResponseAmino): _5.QueryModuleAccountsResponse;
                toAmino(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _5.QueryModuleAccountsResponseAminoMsg): _5.QueryModuleAccountsResponse;
                toAminoMsg(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _5.QueryModuleAccountsResponseProtoMsg): _5.QueryModuleAccountsResponse;
                toProto(message: _5.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _5.QueryModuleAccountsResponse): _5.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.Bech32PrefixRequest;
                isSDK(o: any): o is _5.Bech32PrefixRequestSDKType;
                isAmino(o: any): o is _5.Bech32PrefixRequestAmino;
                encode(_: _5.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.Bech32PrefixRequest;
                fromJSON(_: any): _5.Bech32PrefixRequest;
                toJSON(_: _5.Bech32PrefixRequest): {};
                fromPartial(_: Partial<_5.Bech32PrefixRequest>): _5.Bech32PrefixRequest;
                fromAmino(_: _5.Bech32PrefixRequestAmino): _5.Bech32PrefixRequest;
                toAmino(_: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _5.Bech32PrefixRequestAminoMsg): _5.Bech32PrefixRequest;
                toAminoMsg(message: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _5.Bech32PrefixRequestProtoMsg): _5.Bech32PrefixRequest;
                toProto(message: _5.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _5.Bech32PrefixRequest): _5.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.Bech32PrefixResponse;
                isSDK(o: any): o is _5.Bech32PrefixResponseSDKType;
                isAmino(o: any): o is _5.Bech32PrefixResponseAmino;
                encode(message: _5.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.Bech32PrefixResponse;
                fromJSON(object: any): _5.Bech32PrefixResponse;
                toJSON(message: _5.Bech32PrefixResponse): {
                    bech32Prefix: string;
                };
                fromPartial(object: Partial<_5.Bech32PrefixResponse>): _5.Bech32PrefixResponse;
                fromAmino(object: _5.Bech32PrefixResponseAmino): _5.Bech32PrefixResponse;
                toAmino(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _5.Bech32PrefixResponseAminoMsg): _5.Bech32PrefixResponse;
                toAminoMsg(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _5.Bech32PrefixResponseProtoMsg): _5.Bech32PrefixResponse;
                toProto(message: _5.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _5.Bech32PrefixResponse): _5.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.AddressBytesToStringRequest;
                isSDK(o: any): o is _5.AddressBytesToStringRequestSDKType;
                isAmino(o: any): o is _5.AddressBytesToStringRequestAmino;
                encode(message: _5.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressBytesToStringRequest;
                fromJSON(object: any): _5.AddressBytesToStringRequest;
                toJSON(message: _5.AddressBytesToStringRequest): {
                    addressBytes: string;
                };
                fromPartial(object: Partial<_5.AddressBytesToStringRequest>): _5.AddressBytesToStringRequest;
                fromAmino(object: _5.AddressBytesToStringRequestAmino): _5.AddressBytesToStringRequest;
                toAmino(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _5.AddressBytesToStringRequestAminoMsg): _5.AddressBytesToStringRequest;
                toAminoMsg(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _5.AddressBytesToStringRequestProtoMsg): _5.AddressBytesToStringRequest;
                toProto(message: _5.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _5.AddressBytesToStringRequest): _5.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.AddressBytesToStringResponse;
                isSDK(o: any): o is _5.AddressBytesToStringResponseSDKType;
                isAmino(o: any): o is _5.AddressBytesToStringResponseAmino;
                encode(message: _5.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressBytesToStringResponse;
                fromJSON(object: any): _5.AddressBytesToStringResponse;
                toJSON(message: _5.AddressBytesToStringResponse): {
                    addressString: string;
                };
                fromPartial(object: Partial<_5.AddressBytesToStringResponse>): _5.AddressBytesToStringResponse;
                fromAmino(object: _5.AddressBytesToStringResponseAmino): _5.AddressBytesToStringResponse;
                toAmino(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _5.AddressBytesToStringResponseAminoMsg): _5.AddressBytesToStringResponse;
                toAminoMsg(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _5.AddressBytesToStringResponseProtoMsg): _5.AddressBytesToStringResponse;
                toProto(message: _5.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _5.AddressBytesToStringResponse): _5.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.AddressStringToBytesRequest;
                isSDK(o: any): o is _5.AddressStringToBytesRequestSDKType;
                isAmino(o: any): o is _5.AddressStringToBytesRequestAmino;
                encode(message: _5.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressStringToBytesRequest;
                fromJSON(object: any): _5.AddressStringToBytesRequest;
                toJSON(message: _5.AddressStringToBytesRequest): {
                    addressString: string;
                };
                fromPartial(object: Partial<_5.AddressStringToBytesRequest>): _5.AddressStringToBytesRequest;
                fromAmino(object: _5.AddressStringToBytesRequestAmino): _5.AddressStringToBytesRequest;
                toAmino(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _5.AddressStringToBytesRequestAminoMsg): _5.AddressStringToBytesRequest;
                toAminoMsg(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _5.AddressStringToBytesRequestProtoMsg): _5.AddressStringToBytesRequest;
                toProto(message: _5.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _5.AddressStringToBytesRequest): _5.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _5.AddressStringToBytesResponse;
                isSDK(o: any): o is _5.AddressStringToBytesResponseSDKType;
                isAmino(o: any): o is _5.AddressStringToBytesResponseAmino;
                encode(message: _5.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _5.AddressStringToBytesResponse;
                fromJSON(object: any): _5.AddressStringToBytesResponse;
                toJSON(message: _5.AddressStringToBytesResponse): {
                    addressBytes: string;
                };
                fromPartial(object: Partial<_5.AddressStringToBytesResponse>): _5.AddressStringToBytesResponse;
                fromAmino(object: _5.AddressStringToBytesResponseAmino): _5.AddressStringToBytesResponse;
                toAmino(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _5.AddressStringToBytesResponseAminoMsg): _5.AddressStringToBytesResponse;
                toAminoMsg(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _5.AddressStringToBytesResponseProtoMsg): _5.AddressStringToBytesResponse;
                toProto(message: _5.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _5.AddressStringToBytesResponse): _5.AddressStringToBytesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _4.GenesisState;
                isSDK(o: any): o is _4.GenesisStateSDKType;
                isAmino(o: any): o is _4.GenesisStateAmino;
                encode(message: _4.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _4.GenesisState;
                fromJSON(object: any): _4.GenesisState;
                toJSON(message: _4.GenesisState): {
                    params: {
                        maxMemoCharacters: string;
                        txSigLimit: string;
                        txSizeCostPerByte: string;
                        sigVerifyCostEd25519: string;
                        sigVerifyCostSecp256k1: string;
                    };
                    accounts: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[];
                };
                fromPartial(object: Partial<_4.GenesisState>): _4.GenesisState;
                fromAmino(object: _4.GenesisStateAmino): _4.GenesisState;
                toAmino(message: _4.GenesisState): _4.GenesisStateAmino;
                fromAminoMsg(object: _4.GenesisStateAminoMsg): _4.GenesisState;
                toAminoMsg(message: _4.GenesisState): _4.GenesisStateAminoMsg;
                fromProtoMsg(message: _4.GenesisStateProtoMsg): _4.GenesisState;
                toProto(message: _4.GenesisState): Uint8Array;
                toProtoMsg(message: _4.GenesisState): _4.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _3.BaseAccount;
                isSDK(o: any): o is _3.BaseAccountSDKType;
                isAmino(o: any): o is _3.BaseAccountAmino;
                encode(message: _3.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.BaseAccount;
                fromJSON(object: any): _3.BaseAccount;
                toJSON(message: _3.BaseAccount): {
                    $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
                    address: string;
                    pubKey?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    };
                    accountNumber: string;
                    sequence: string;
                };
                fromPartial(object: Partial<_3.BaseAccount>): _3.BaseAccount;
                fromAmino(object: _3.BaseAccountAmino): _3.BaseAccount;
                toAmino(message: _3.BaseAccount): _3.BaseAccountAmino;
                fromAminoMsg(object: _3.BaseAccountAminoMsg): _3.BaseAccount;
                toAminoMsg(message: _3.BaseAccount): _3.BaseAccountAminoMsg;
                fromProtoMsg(message: _3.BaseAccountProtoMsg): _3.BaseAccount;
                toProto(message: _3.BaseAccount): Uint8Array;
                toProtoMsg(message: _3.BaseAccount): _3.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _3.ModuleAccount;
                isSDK(o: any): o is _3.ModuleAccountSDKType;
                isAmino(o: any): o is _3.ModuleAccountAmino;
                encode(message: _3.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.ModuleAccount;
                fromJSON(object: any): _3.ModuleAccount;
                toJSON(message: _3.ModuleAccount): {
                    $typeUrl?: "/cosmos.auth.v1beta1.ModuleAccount";
                    baseAccount?: {
                        $typeUrl?: "/cosmos.auth.v1beta1.BaseAccount";
                        address: string;
                        pubKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        accountNumber: string;
                        sequence: string;
                    };
                    name: string;
                    permissions: string[];
                };
                fromPartial(object: Partial<_3.ModuleAccount>): _3.ModuleAccount;
                fromAmino(object: _3.ModuleAccountAmino): _3.ModuleAccount;
                toAmino(message: _3.ModuleAccount): _3.ModuleAccountAmino;
                fromAminoMsg(object: _3.ModuleAccountAminoMsg): _3.ModuleAccount;
                toAminoMsg(message: _3.ModuleAccount): _3.ModuleAccountAminoMsg;
                fromProtoMsg(message: _3.ModuleAccountProtoMsg): _3.ModuleAccount;
                toProto(message: _3.ModuleAccount): Uint8Array;
                toProtoMsg(message: _3.ModuleAccount): _3.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _3.Params;
                isSDK(o: any): o is _3.ParamsSDKType;
                isAmino(o: any): o is _3.ParamsAmino;
                encode(message: _3.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _3.Params;
                fromJSON(object: any): _3.Params;
                toJSON(message: _3.Params): {
                    maxMemoCharacters: string;
                    txSigLimit: string;
                    txSizeCostPerByte: string;
                    sigVerifyCostEd25519: string;
                    sigVerifyCostSecp256k1: string;
                };
                fromPartial(object: Partial<_3.Params>): _3.Params;
                fromAmino(object: _3.ParamsAmino): _3.Params;
                toAmino(message: _3.Params): _3.ParamsAmino;
                fromAminoMsg(object: _3.ParamsAminoMsg): _3.Params;
                toAminoMsg(message: _3.Params): _3.ParamsAminoMsg;
                fromProtoMsg(message: _3.ParamsProtoMsg): _3.Params;
                toProto(message: _3.Params): Uint8Array;
                toProtoMsg(message: _3.Params): _3.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _9.QueryGrantsRequest): Promise<_9.QueryGrantsResponse>;
                granterGrants(request: _9.QueryGranterGrantsRequest): Promise<_9.QueryGranterGrantsResponse>;
                granteeGrants(request: _9.QueryGranteeGrantsRequest): Promise<_9.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: {
                            granter: string;
                            grantee: string;
                            grant: {
                                authorization?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                                    spendLimit: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                                    maxTokens?: {
                                        denom: string;
                                        amount: string;
                                    };
                                    allowList?: {
                                        address: string[];
                                    };
                                    denyList?: {
                                        address: string[];
                                    };
                                    authorizationType: _34.AuthorizationType;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                                    grants: {
                                        contract: string;
                                        limit?: {
                                            $typeUrl?: string;
                                            typeUrl: string;
                                            value: string;
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                            remaining: string;
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                            amounts: {
                                                denom: string;
                                                amount: string;
                                            }[];
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                            callsRemaining: string;
                                            amounts: {
                                                denom: string;
                                                amount: string;
                                            }[];
                                        };
                                        filter?: {
                                            $typeUrl?: string;
                                            typeUrl: string;
                                            value: string;
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                            keys: string[];
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                            messages: string[];
                                        };
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                                    grants: {
                                        contract: string;
                                        limit?: {
                                            $typeUrl?: string;
                                            typeUrl: string;
                                            value: string;
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                            remaining: string;
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                            amounts: {
                                                denom: string;
                                                amount: string;
                                            }[];
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                            callsRemaining: string;
                                            amounts: {
                                                denom: string;
                                                amount: string;
                                            }[];
                                        };
                                        filter?: {
                                            $typeUrl?: string;
                                            typeUrl: string;
                                            value: string;
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                            keys: string[];
                                        } | {
                                            $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                            messages: string[];
                                        };
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                                    msg: string;
                                };
                                expiration?: string;
                            };
                        };
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: {
                            grantee: string;
                            msgs: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: {
                            granter: string;
                            grantee: string;
                            msgTypeUrl: string;
                        };
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _10.MsgGrant): {
                        typeUrl: string;
                        value: _10.MsgGrant;
                    };
                    exec(value: _10.MsgExec): {
                        typeUrl: string;
                        value: _10.MsgExec;
                    };
                    revoke(value: _10.MsgRevoke): {
                        typeUrl: string;
                        value: _10.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _10.MsgGrant) => _10.MsgGrantAmino;
                    fromAmino: (object: _10.MsgGrantAmino) => _10.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _10.MsgExec) => _10.MsgExecAmino;
                    fromAmino: (object: _10.MsgExecAmino) => _10.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _10.MsgRevoke) => _10.MsgRevokeAmino;
                    fromAmino: (object: _10.MsgRevokeAmino) => _10.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.MsgGrant;
                isSDK(o: any): o is _10.MsgGrantSDKType;
                isAmino(o: any): o is _10.MsgGrantAmino;
                encode(message: _10.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgGrant;
                fromJSON(object: any): _10.MsgGrant;
                toJSON(message: _10.MsgGrant): {
                    granter: string;
                    grantee: string;
                    grant: {
                        authorization?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                            spendLimit: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                            maxTokens?: {
                                denom: string;
                                amount: string;
                            };
                            allowList?: {
                                address: string[];
                            };
                            denyList?: {
                                address: string[];
                            };
                            authorizationType: _34.AuthorizationType;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                            msg: string;
                        };
                        expiration?: string;
                    };
                };
                fromPartial(object: Partial<_10.MsgGrant>): _10.MsgGrant;
                fromAmino(object: _10.MsgGrantAmino): _10.MsgGrant;
                toAmino(message: _10.MsgGrant): _10.MsgGrantAmino;
                fromAminoMsg(object: _10.MsgGrantAminoMsg): _10.MsgGrant;
                toAminoMsg(message: _10.MsgGrant): _10.MsgGrantAminoMsg;
                fromProtoMsg(message: _10.MsgGrantProtoMsg): _10.MsgGrant;
                toProto(message: _10.MsgGrant): Uint8Array;
                toProtoMsg(message: _10.MsgGrant): _10.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.MsgExecResponse;
                isSDK(o: any): o is _10.MsgExecResponseSDKType;
                isAmino(o: any): o is _10.MsgExecResponseAmino;
                encode(message: _10.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgExecResponse;
                fromJSON(object: any): _10.MsgExecResponse;
                toJSON(message: _10.MsgExecResponse): {
                    results: string[];
                };
                fromPartial(object: Partial<_10.MsgExecResponse>): _10.MsgExecResponse;
                fromAmino(object: _10.MsgExecResponseAmino): _10.MsgExecResponse;
                toAmino(message: _10.MsgExecResponse): _10.MsgExecResponseAmino;
                fromAminoMsg(object: _10.MsgExecResponseAminoMsg): _10.MsgExecResponse;
                toAminoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _10.MsgExecResponseProtoMsg): _10.MsgExecResponse;
                toProto(message: _10.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _10.MsgExecResponse): _10.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.MsgExec;
                isSDK(o: any): o is _10.MsgExecSDKType;
                isAmino(o: any): o is _10.MsgExecAmino;
                encode(message: _10.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgExec;
                fromJSON(object: any): _10.MsgExec;
                toJSON(message: _10.MsgExec): {
                    grantee: string;
                    msgs: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[];
                };
                fromPartial(object: Partial<_10.MsgExec>): _10.MsgExec;
                fromAmino(object: _10.MsgExecAmino): _10.MsgExec;
                toAmino(message: _10.MsgExec): _10.MsgExecAmino;
                fromAminoMsg(object: _10.MsgExecAminoMsg): _10.MsgExec;
                toAminoMsg(message: _10.MsgExec): _10.MsgExecAminoMsg;
                fromProtoMsg(message: _10.MsgExecProtoMsg): _10.MsgExec;
                toProto(message: _10.MsgExec): Uint8Array;
                toProtoMsg(message: _10.MsgExec): _10.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.MsgGrantResponse;
                isSDK(o: any): o is _10.MsgGrantResponseSDKType;
                isAmino(o: any): o is _10.MsgGrantResponseAmino;
                encode(_: _10.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgGrantResponse;
                fromJSON(_: any): _10.MsgGrantResponse;
                toJSON(_: _10.MsgGrantResponse): {};
                fromPartial(_: Partial<_10.MsgGrantResponse>): _10.MsgGrantResponse;
                fromAmino(_: _10.MsgGrantResponseAmino): _10.MsgGrantResponse;
                toAmino(_: _10.MsgGrantResponse): _10.MsgGrantResponseAmino;
                fromAminoMsg(object: _10.MsgGrantResponseAminoMsg): _10.MsgGrantResponse;
                toAminoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _10.MsgGrantResponseProtoMsg): _10.MsgGrantResponse;
                toProto(message: _10.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _10.MsgGrantResponse): _10.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.MsgRevoke;
                isSDK(o: any): o is _10.MsgRevokeSDKType;
                isAmino(o: any): o is _10.MsgRevokeAmino;
                encode(message: _10.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRevoke;
                fromJSON(object: any): _10.MsgRevoke;
                toJSON(message: _10.MsgRevoke): {
                    granter: string;
                    grantee: string;
                    msgTypeUrl: string;
                };
                fromPartial(object: Partial<_10.MsgRevoke>): _10.MsgRevoke;
                fromAmino(object: _10.MsgRevokeAmino): _10.MsgRevoke;
                toAmino(message: _10.MsgRevoke): _10.MsgRevokeAmino;
                fromAminoMsg(object: _10.MsgRevokeAminoMsg): _10.MsgRevoke;
                toAminoMsg(message: _10.MsgRevoke): _10.MsgRevokeAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeProtoMsg): _10.MsgRevoke;
                toProto(message: _10.MsgRevoke): Uint8Array;
                toProtoMsg(message: _10.MsgRevoke): _10.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.MsgRevokeResponse;
                isSDK(o: any): o is _10.MsgRevokeResponseSDKType;
                isAmino(o: any): o is _10.MsgRevokeResponseAmino;
                encode(_: _10.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _10.MsgRevokeResponse;
                fromJSON(_: any): _10.MsgRevokeResponse;
                toJSON(_: _10.MsgRevokeResponse): {};
                fromPartial(_: Partial<_10.MsgRevokeResponse>): _10.MsgRevokeResponse;
                fromAmino(_: _10.MsgRevokeResponseAmino): _10.MsgRevokeResponse;
                toAmino(_: _10.MsgRevokeResponse): _10.MsgRevokeResponseAmino;
                fromAminoMsg(object: _10.MsgRevokeResponseAminoMsg): _10.MsgRevokeResponse;
                toAminoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _10.MsgRevokeResponseProtoMsg): _10.MsgRevokeResponse;
                toProto(message: _10.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _10.MsgRevokeResponse): _10.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.QueryGrantsRequest;
                isSDK(o: any): o is _9.QueryGrantsRequestSDKType;
                isAmino(o: any): o is _9.QueryGrantsRequestAmino;
                encode(message: _9.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGrantsRequest;
                fromJSON(object: any): _9.QueryGrantsRequest;
                toJSON(message: _9.QueryGrantsRequest): {
                    granter: string;
                    grantee: string;
                    msgTypeUrl: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_9.QueryGrantsRequest>): _9.QueryGrantsRequest;
                fromAmino(object: _9.QueryGrantsRequestAmino): _9.QueryGrantsRequest;
                toAmino(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGrantsRequestAminoMsg): _9.QueryGrantsRequest;
                toAminoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsRequestProtoMsg): _9.QueryGrantsRequest;
                toProto(message: _9.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsRequest): _9.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.QueryGrantsResponse;
                isSDK(o: any): o is _9.QueryGrantsResponseSDKType;
                isAmino(o: any): o is _9.QueryGrantsResponseAmino;
                encode(message: _9.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGrantsResponse;
                fromJSON(object: any): _9.QueryGrantsResponse;
                toJSON(message: _9.QueryGrantsResponse): {
                    grants: {
                        authorization?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                            spendLimit: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                            maxTokens?: {
                                denom: string;
                                amount: string;
                            };
                            allowList?: {
                                address: string[];
                            };
                            denyList?: {
                                address: string[];
                            };
                            authorizationType: _34.AuthorizationType;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                            msg: string;
                        };
                        expiration?: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_9.QueryGrantsResponse>): _9.QueryGrantsResponse;
                fromAmino(object: _9.QueryGrantsResponseAmino): _9.QueryGrantsResponse;
                toAmino(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGrantsResponseAminoMsg): _9.QueryGrantsResponse;
                toAminoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGrantsResponseProtoMsg): _9.QueryGrantsResponse;
                toProto(message: _9.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGrantsResponse): _9.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.QueryGranterGrantsRequest;
                isSDK(o: any): o is _9.QueryGranterGrantsRequestSDKType;
                isAmino(o: any): o is _9.QueryGranterGrantsRequestAmino;
                encode(message: _9.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranterGrantsRequest;
                fromJSON(object: any): _9.QueryGranterGrantsRequest;
                toJSON(message: _9.QueryGranterGrantsRequest): {
                    granter: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_9.QueryGranterGrantsRequest>): _9.QueryGranterGrantsRequest;
                fromAmino(object: _9.QueryGranterGrantsRequestAmino): _9.QueryGranterGrantsRequest;
                toAmino(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsRequestAminoMsg): _9.QueryGranterGrantsRequest;
                toAminoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsRequestProtoMsg): _9.QueryGranterGrantsRequest;
                toProto(message: _9.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsRequest): _9.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.QueryGranterGrantsResponse;
                isSDK(o: any): o is _9.QueryGranterGrantsResponseSDKType;
                isAmino(o: any): o is _9.QueryGranterGrantsResponseAmino;
                encode(message: _9.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranterGrantsResponse;
                fromJSON(object: any): _9.QueryGranterGrantsResponse;
                toJSON(message: _9.QueryGranterGrantsResponse): {
                    grants: {
                        granter: string;
                        grantee: string;
                        authorization?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                            spendLimit: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                            maxTokens?: {
                                denom: string;
                                amount: string;
                            };
                            allowList?: {
                                address: string[];
                            };
                            denyList?: {
                                address: string[];
                            };
                            authorizationType: _34.AuthorizationType;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                            msg: string;
                        };
                        expiration?: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_9.QueryGranterGrantsResponse>): _9.QueryGranterGrantsResponse;
                fromAmino(object: _9.QueryGranterGrantsResponseAmino): _9.QueryGranterGrantsResponse;
                toAmino(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranterGrantsResponseAminoMsg): _9.QueryGranterGrantsResponse;
                toAminoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranterGrantsResponseProtoMsg): _9.QueryGranterGrantsResponse;
                toProto(message: _9.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranterGrantsResponse): _9.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.QueryGranteeGrantsRequest;
                isSDK(o: any): o is _9.QueryGranteeGrantsRequestSDKType;
                isAmino(o: any): o is _9.QueryGranteeGrantsRequestAmino;
                encode(message: _9.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranteeGrantsRequest;
                fromJSON(object: any): _9.QueryGranteeGrantsRequest;
                toJSON(message: _9.QueryGranteeGrantsRequest): {
                    grantee: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_9.QueryGranteeGrantsRequest>): _9.QueryGranteeGrantsRequest;
                fromAmino(object: _9.QueryGranteeGrantsRequestAmino): _9.QueryGranteeGrantsRequest;
                toAmino(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsRequestAminoMsg): _9.QueryGranteeGrantsRequest;
                toAminoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsRequestProtoMsg): _9.QueryGranteeGrantsRequest;
                toProto(message: _9.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsRequest): _9.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.QueryGranteeGrantsResponse;
                isSDK(o: any): o is _9.QueryGranteeGrantsResponseSDKType;
                isAmino(o: any): o is _9.QueryGranteeGrantsResponseAmino;
                encode(message: _9.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _9.QueryGranteeGrantsResponse;
                fromJSON(object: any): _9.QueryGranteeGrantsResponse;
                toJSON(message: _9.QueryGranteeGrantsResponse): {
                    grants: {
                        granter: string;
                        grantee: string;
                        authorization?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                            spendLimit: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                            maxTokens?: {
                                denom: string;
                                amount: string;
                            };
                            allowList?: {
                                address: string[];
                            };
                            denyList?: {
                                address: string[];
                            };
                            authorizationType: _34.AuthorizationType;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                            msg: string;
                        };
                        expiration?: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_9.QueryGranteeGrantsResponse>): _9.QueryGranteeGrantsResponse;
                fromAmino(object: _9.QueryGranteeGrantsResponseAmino): _9.QueryGranteeGrantsResponse;
                toAmino(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _9.QueryGranteeGrantsResponseAminoMsg): _9.QueryGranteeGrantsResponse;
                toAminoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryGranteeGrantsResponseProtoMsg): _9.QueryGranteeGrantsResponse;
                toProto(message: _9.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryGranteeGrantsResponse): _9.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _8.GenesisState;
                isSDK(o: any): o is _8.GenesisStateSDKType;
                isAmino(o: any): o is _8.GenesisStateAmino;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): {
                    authorization: {
                        granter: string;
                        grantee: string;
                        authorization?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                            spendLimit: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                            maxTokens?: {
                                denom: string;
                                amount: string;
                            };
                            allowList?: {
                                address: string[];
                            };
                            denyList?: {
                                address: string[];
                            };
                            authorizationType: _34.AuthorizationType;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                            grants: {
                                contract: string;
                                limit?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                    remaining: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                    callsRemaining: string;
                                    amounts: {
                                        denom: string;
                                        amount: string;
                                    }[];
                                };
                                filter?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                    keys: string[];
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                    messages: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                            msg: string;
                        };
                        expiration?: string;
                    }[];
                };
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _7.EventGrant;
                isSDK(o: any): o is _7.EventGrantSDKType;
                isAmino(o: any): o is _7.EventGrantAmino;
                encode(message: _7.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.EventGrant;
                fromJSON(object: any): _7.EventGrant;
                toJSON(message: _7.EventGrant): {
                    msgTypeUrl: string;
                    granter: string;
                    grantee: string;
                };
                fromPartial(object: Partial<_7.EventGrant>): _7.EventGrant;
                fromAmino(object: _7.EventGrantAmino): _7.EventGrant;
                toAmino(message: _7.EventGrant): _7.EventGrantAmino;
                fromAminoMsg(object: _7.EventGrantAminoMsg): _7.EventGrant;
                toAminoMsg(message: _7.EventGrant): _7.EventGrantAminoMsg;
                fromProtoMsg(message: _7.EventGrantProtoMsg): _7.EventGrant;
                toProto(message: _7.EventGrant): Uint8Array;
                toProtoMsg(message: _7.EventGrant): _7.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _7.EventRevoke;
                isSDK(o: any): o is _7.EventRevokeSDKType;
                isAmino(o: any): o is _7.EventRevokeAmino;
                encode(message: _7.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _7.EventRevoke;
                fromJSON(object: any): _7.EventRevoke;
                toJSON(message: _7.EventRevoke): {
                    msgTypeUrl: string;
                    granter: string;
                    grantee: string;
                };
                fromPartial(object: Partial<_7.EventRevoke>): _7.EventRevoke;
                fromAmino(object: _7.EventRevokeAmino): _7.EventRevoke;
                toAmino(message: _7.EventRevoke): _7.EventRevokeAmino;
                fromAminoMsg(object: _7.EventRevokeAminoMsg): _7.EventRevoke;
                toAminoMsg(message: _7.EventRevoke): _7.EventRevokeAminoMsg;
                fromProtoMsg(message: _7.EventRevokeProtoMsg): _7.EventRevoke;
                toProto(message: _7.EventRevoke): Uint8Array;
                toProtoMsg(message: _7.EventRevoke): _7.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _6.GenericAuthorization;
                isSDK(o: any): o is _6.GenericAuthorizationSDKType;
                isAmino(o: any): o is _6.GenericAuthorizationAmino;
                encode(message: _6.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GenericAuthorization;
                fromJSON(object: any): _6.GenericAuthorization;
                toJSON(message: _6.GenericAuthorization): {
                    $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                    msg: string;
                };
                fromPartial(object: Partial<_6.GenericAuthorization>): _6.GenericAuthorization;
                fromAmino(object: _6.GenericAuthorizationAmino): _6.GenericAuthorization;
                toAmino(message: _6.GenericAuthorization): _6.GenericAuthorizationAmino;
                fromAminoMsg(object: _6.GenericAuthorizationAminoMsg): _6.GenericAuthorization;
                toAminoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GenericAuthorizationProtoMsg): _6.GenericAuthorization;
                toProto(message: _6.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _6.GenericAuthorization): _6.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _6.Grant;
                isSDK(o: any): o is _6.GrantSDKType;
                isAmino(o: any): o is _6.GrantAmino;
                encode(message: _6.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.Grant;
                fromJSON(object: any): _6.Grant;
                toJSON(message: _6.Grant): {
                    authorization?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                        spendLimit: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                        maxTokens?: {
                            denom: string;
                            amount: string;
                        };
                        allowList?: {
                            address: string[];
                        };
                        denyList?: {
                            address: string[];
                        };
                        authorizationType: _34.AuthorizationType;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                        grants: {
                            contract: string;
                            limit?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                remaining: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                callsRemaining: string;
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            };
                            filter?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                keys: string[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                messages: string[];
                            };
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                        grants: {
                            contract: string;
                            limit?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                remaining: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                callsRemaining: string;
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            };
                            filter?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                keys: string[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                messages: string[];
                            };
                        }[];
                    } | {
                        $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                        msg: string;
                    };
                    expiration?: string;
                };
                fromPartial(object: Partial<_6.Grant>): _6.Grant;
                fromAmino(object: _6.GrantAmino): _6.Grant;
                toAmino(message: _6.Grant): _6.GrantAmino;
                fromAminoMsg(object: _6.GrantAminoMsg): _6.Grant;
                toAminoMsg(message: _6.Grant): _6.GrantAminoMsg;
                fromProtoMsg(message: _6.GrantProtoMsg): _6.Grant;
                toProto(message: _6.Grant): Uint8Array;
                toProtoMsg(message: _6.Grant): _6.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _6.GrantAuthorization;
                isSDK(o: any): o is _6.GrantAuthorizationSDKType;
                isAmino(o: any): o is _6.GrantAuthorizationAmino;
                encode(message: _6.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GrantAuthorization;
                fromJSON(object: any): _6.GrantAuthorization;
                toJSON(message: _6.GrantAuthorization): {
                    granter: string;
                    grantee: string;
                    authorization?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                        spendLimit: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                        maxTokens?: {
                            denom: string;
                            amount: string;
                        };
                        allowList?: {
                            address: string[];
                        };
                        denyList?: {
                            address: string[];
                        };
                        authorizationType: _34.AuthorizationType;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                        grants: {
                            contract: string;
                            limit?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                remaining: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                callsRemaining: string;
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            };
                            filter?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                keys: string[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                messages: string[];
                            };
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
                        grants: {
                            contract: string;
                            limit?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxCallsLimit";
                                remaining: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MaxFundsLimit";
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.CombinedLimit";
                                callsRemaining: string;
                                amounts: {
                                    denom: string;
                                    amount: string;
                                }[];
                            };
                            filter?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
                                keys: string[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
                                messages: string[];
                            };
                        }[];
                    } | {
                        $typeUrl?: "/cosmos.authz.v1beta1.GenericAuthorization";
                        msg: string;
                    };
                    expiration?: string;
                };
                fromPartial(object: Partial<_6.GrantAuthorization>): _6.GrantAuthorization;
                fromAmino(object: _6.GrantAuthorizationAmino): _6.GrantAuthorization;
                toAmino(message: _6.GrantAuthorization): _6.GrantAuthorizationAmino;
                fromAminoMsg(object: _6.GrantAuthorizationAminoMsg): _6.GrantAuthorization;
                toAminoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _6.GrantAuthorizationProtoMsg): _6.GrantAuthorization;
                toProto(message: _6.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _6.GrantAuthorization): _6.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _6.GrantQueueItem;
                isSDK(o: any): o is _6.GrantQueueItemSDKType;
                isAmino(o: any): o is _6.GrantQueueItemAmino;
                encode(message: _6.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _6.GrantQueueItem;
                fromJSON(object: any): _6.GrantQueueItem;
                toJSON(message: _6.GrantQueueItem): {
                    msgTypeUrls: string[];
                };
                fromPartial(object: Partial<_6.GrantQueueItem>): _6.GrantQueueItem;
                fromAmino(object: _6.GrantQueueItemAmino): _6.GrantQueueItem;
                toAmino(message: _6.GrantQueueItem): _6.GrantQueueItemAmino;
                fromAminoMsg(object: _6.GrantQueueItemAminoMsg): _6.GrantQueueItem;
                toAminoMsg(message: _6.GrantQueueItem): _6.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _6.GrantQueueItemProtoMsg): _6.GrantQueueItem;
                toProto(message: _6.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _6.GrantQueueItem): _6.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _14.QueryBalanceRequest): Promise<_14.QueryBalanceResponse>;
                allBalances(request: _14.QueryAllBalancesRequest): Promise<_14.QueryAllBalancesResponse>;
                spendableBalances(request: _14.QuerySpendableBalancesRequest): Promise<_14.QuerySpendableBalancesResponse>;
                totalSupply(request?: _14.QueryTotalSupplyRequest): Promise<_14.QueryTotalSupplyResponse>;
                supplyOf(request: _14.QuerySupplyOfRequest): Promise<_14.QuerySupplyOfResponse>;
                params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                denomMetadata(request: _14.QueryDenomMetadataRequest): Promise<_14.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _14.QueryDenomsMetadataRequest): Promise<_14.QueryDenomsMetadataResponse>;
                denomOwners(request: _14.QueryDenomOwnersRequest): Promise<_14.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: {
                            fromAddress: string;
                            toAddress: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: {
                            inputs: {
                                address: string;
                                coins: {
                                    denom: string;
                                    amount: string;
                                }[];
                            }[];
                            outputs: {
                                address: string;
                                coins: {
                                    denom: string;
                                    amount: string;
                                }[];
                            }[];
                        };
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _15.MsgSend): {
                        typeUrl: string;
                        value: _15.MsgSend;
                    };
                    multiSend(value: _15.MsgMultiSend): {
                        typeUrl: string;
                        value: _15.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgSend) => _15.MsgSendAmino;
                    fromAmino: (object: _15.MsgSendAmino) => _15.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _15.MsgMultiSend) => _15.MsgMultiSendAmino;
                    fromAmino: (object: _15.MsgMultiSendAmino) => _15.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _15.MsgSend;
                isSDK(o: any): o is _15.MsgSendSDKType;
                isAmino(o: any): o is _15.MsgSendAmino;
                encode(message: _15.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgSend;
                fromJSON(object: any): _15.MsgSend;
                toJSON(message: _15.MsgSend): {
                    fromAddress: string;
                    toAddress: string;
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_15.MsgSend>): _15.MsgSend;
                fromAmino(object: _15.MsgSendAmino): _15.MsgSend;
                toAmino(message: _15.MsgSend): _15.MsgSendAmino;
                fromAminoMsg(object: _15.MsgSendAminoMsg): _15.MsgSend;
                toAminoMsg(message: _15.MsgSend): _15.MsgSendAminoMsg;
                fromProtoMsg(message: _15.MsgSendProtoMsg): _15.MsgSend;
                toProto(message: _15.MsgSend): Uint8Array;
                toProtoMsg(message: _15.MsgSend): _15.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _15.MsgSendResponse;
                isSDK(o: any): o is _15.MsgSendResponseSDKType;
                isAmino(o: any): o is _15.MsgSendResponseAmino;
                encode(_: _15.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgSendResponse;
                fromJSON(_: any): _15.MsgSendResponse;
                toJSON(_: _15.MsgSendResponse): {};
                fromPartial(_: Partial<_15.MsgSendResponse>): _15.MsgSendResponse;
                fromAmino(_: _15.MsgSendResponseAmino): _15.MsgSendResponse;
                toAmino(_: _15.MsgSendResponse): _15.MsgSendResponseAmino;
                fromAminoMsg(object: _15.MsgSendResponseAminoMsg): _15.MsgSendResponse;
                toAminoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgSendResponseProtoMsg): _15.MsgSendResponse;
                toProto(message: _15.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgSendResponse): _15.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _15.MsgMultiSend;
                isSDK(o: any): o is _15.MsgMultiSendSDKType;
                isAmino(o: any): o is _15.MsgMultiSendAmino;
                encode(message: _15.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgMultiSend;
                fromJSON(object: any): _15.MsgMultiSend;
                toJSON(message: _15.MsgMultiSend): {
                    inputs: {
                        address: string;
                        coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                    outputs: {
                        address: string;
                        coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                };
                fromPartial(object: Partial<_15.MsgMultiSend>): _15.MsgMultiSend;
                fromAmino(object: _15.MsgMultiSendAmino): _15.MsgMultiSend;
                toAmino(message: _15.MsgMultiSend): _15.MsgMultiSendAmino;
                fromAminoMsg(object: _15.MsgMultiSendAminoMsg): _15.MsgMultiSend;
                toAminoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendProtoMsg): _15.MsgMultiSend;
                toProto(message: _15.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSend): _15.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _15.MsgMultiSendResponse;
                isSDK(o: any): o is _15.MsgMultiSendResponseSDKType;
                isAmino(o: any): o is _15.MsgMultiSendResponseAmino;
                encode(_: _15.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _15.MsgMultiSendResponse;
                fromJSON(_: any): _15.MsgMultiSendResponse;
                toJSON(_: _15.MsgMultiSendResponse): {};
                fromPartial(_: Partial<_15.MsgMultiSendResponse>): _15.MsgMultiSendResponse;
                fromAmino(_: _15.MsgMultiSendResponseAmino): _15.MsgMultiSendResponse;
                toAmino(_: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _15.MsgMultiSendResponseAminoMsg): _15.MsgMultiSendResponse;
                toAminoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _15.MsgMultiSendResponseProtoMsg): _15.MsgMultiSendResponse;
                toProto(message: _15.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _15.MsgMultiSendResponse): _15.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryBalanceRequest;
                isSDK(o: any): o is _14.QueryBalanceRequestSDKType;
                isAmino(o: any): o is _14.QueryBalanceRequestAmino;
                encode(message: _14.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryBalanceRequest;
                fromJSON(object: any): _14.QueryBalanceRequest;
                toJSON(message: _14.QueryBalanceRequest): {
                    address: string;
                    denom: string;
                };
                fromPartial(object: Partial<_14.QueryBalanceRequest>): _14.QueryBalanceRequest;
                fromAmino(object: _14.QueryBalanceRequestAmino): _14.QueryBalanceRequest;
                toAmino(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAmino;
                fromAminoMsg(object: _14.QueryBalanceRequestAminoMsg): _14.QueryBalanceRequest;
                toAminoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceRequestProtoMsg): _14.QueryBalanceRequest;
                toProto(message: _14.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceRequest): _14.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryBalanceResponse;
                isSDK(o: any): o is _14.QueryBalanceResponseSDKType;
                isAmino(o: any): o is _14.QueryBalanceResponseAmino;
                encode(message: _14.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryBalanceResponse;
                fromJSON(object: any): _14.QueryBalanceResponse;
                toJSON(message: _14.QueryBalanceResponse): {
                    balance?: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_14.QueryBalanceResponse>): _14.QueryBalanceResponse;
                fromAmino(object: _14.QueryBalanceResponseAmino): _14.QueryBalanceResponse;
                toAmino(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAmino;
                fromAminoMsg(object: _14.QueryBalanceResponseAminoMsg): _14.QueryBalanceResponse;
                toAminoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _14.QueryBalanceResponseProtoMsg): _14.QueryBalanceResponse;
                toProto(message: _14.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _14.QueryBalanceResponse): _14.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryAllBalancesRequest;
                isSDK(o: any): o is _14.QueryAllBalancesRequestSDKType;
                isAmino(o: any): o is _14.QueryAllBalancesRequestAmino;
                encode(message: _14.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryAllBalancesRequest;
                fromJSON(object: any): _14.QueryAllBalancesRequest;
                toJSON(message: _14.QueryAllBalancesRequest): {
                    address: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_14.QueryAllBalancesRequest>): _14.QueryAllBalancesRequest;
                fromAmino(object: _14.QueryAllBalancesRequestAmino): _14.QueryAllBalancesRequest;
                toAmino(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _14.QueryAllBalancesRequestAminoMsg): _14.QueryAllBalancesRequest;
                toAminoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesRequestProtoMsg): _14.QueryAllBalancesRequest;
                toProto(message: _14.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesRequest): _14.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryAllBalancesResponse;
                isSDK(o: any): o is _14.QueryAllBalancesResponseSDKType;
                isAmino(o: any): o is _14.QueryAllBalancesResponseAmino;
                encode(message: _14.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryAllBalancesResponse;
                fromJSON(object: any): _14.QueryAllBalancesResponse;
                toJSON(message: _14.QueryAllBalancesResponse): {
                    balances: {
                        denom: string;
                        amount: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_14.QueryAllBalancesResponse>): _14.QueryAllBalancesResponse;
                fromAmino(object: _14.QueryAllBalancesResponseAmino): _14.QueryAllBalancesResponse;
                toAmino(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _14.QueryAllBalancesResponseAminoMsg): _14.QueryAllBalancesResponse;
                toAminoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QueryAllBalancesResponseProtoMsg): _14.QueryAllBalancesResponse;
                toProto(message: _14.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QueryAllBalancesResponse): _14.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QuerySpendableBalancesRequest;
                isSDK(o: any): o is _14.QuerySpendableBalancesRequestSDKType;
                isAmino(o: any): o is _14.QuerySpendableBalancesRequestAmino;
                encode(message: _14.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySpendableBalancesRequest;
                fromJSON(object: any): _14.QuerySpendableBalancesRequest;
                toJSON(message: _14.QuerySpendableBalancesRequest): {
                    address: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_14.QuerySpendableBalancesRequest>): _14.QuerySpendableBalancesRequest;
                fromAmino(object: _14.QuerySpendableBalancesRequestAmino): _14.QuerySpendableBalancesRequest;
                toAmino(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesRequestAminoMsg): _14.QuerySpendableBalancesRequest;
                toAminoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesRequestProtoMsg): _14.QuerySpendableBalancesRequest;
                toProto(message: _14.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesRequest): _14.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QuerySpendableBalancesResponse;
                isSDK(o: any): o is _14.QuerySpendableBalancesResponseSDKType;
                isAmino(o: any): o is _14.QuerySpendableBalancesResponseAmino;
                encode(message: _14.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySpendableBalancesResponse;
                fromJSON(object: any): _14.QuerySpendableBalancesResponse;
                toJSON(message: _14.QuerySpendableBalancesResponse): {
                    balances: {
                        denom: string;
                        amount: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_14.QuerySpendableBalancesResponse>): _14.QuerySpendableBalancesResponse;
                fromAmino(object: _14.QuerySpendableBalancesResponseAmino): _14.QuerySpendableBalancesResponse;
                toAmino(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _14.QuerySpendableBalancesResponseAminoMsg): _14.QuerySpendableBalancesResponse;
                toAminoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySpendableBalancesResponseProtoMsg): _14.QuerySpendableBalancesResponse;
                toProto(message: _14.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySpendableBalancesResponse): _14.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryTotalSupplyRequest;
                isSDK(o: any): o is _14.QueryTotalSupplyRequestSDKType;
                isAmino(o: any): o is _14.QueryTotalSupplyRequestAmino;
                encode(message: _14.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryTotalSupplyRequest;
                fromJSON(object: any): _14.QueryTotalSupplyRequest;
                toJSON(message: _14.QueryTotalSupplyRequest): {
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_14.QueryTotalSupplyRequest>): _14.QueryTotalSupplyRequest;
                fromAmino(object: _14.QueryTotalSupplyRequestAmino): _14.QueryTotalSupplyRequest;
                toAmino(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyRequestAminoMsg): _14.QueryTotalSupplyRequest;
                toAminoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyRequestProtoMsg): _14.QueryTotalSupplyRequest;
                toProto(message: _14.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyRequest): _14.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryTotalSupplyResponse;
                isSDK(o: any): o is _14.QueryTotalSupplyResponseSDKType;
                isAmino(o: any): o is _14.QueryTotalSupplyResponseAmino;
                encode(message: _14.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryTotalSupplyResponse;
                fromJSON(object: any): _14.QueryTotalSupplyResponse;
                toJSON(message: _14.QueryTotalSupplyResponse): {
                    supply: {
                        denom: string;
                        amount: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_14.QueryTotalSupplyResponse>): _14.QueryTotalSupplyResponse;
                fromAmino(object: _14.QueryTotalSupplyResponseAmino): _14.QueryTotalSupplyResponse;
                toAmino(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _14.QueryTotalSupplyResponseAminoMsg): _14.QueryTotalSupplyResponse;
                toAminoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _14.QueryTotalSupplyResponseProtoMsg): _14.QueryTotalSupplyResponse;
                toProto(message: _14.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _14.QueryTotalSupplyResponse): _14.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QuerySupplyOfRequest;
                isSDK(o: any): o is _14.QuerySupplyOfRequestSDKType;
                isAmino(o: any): o is _14.QuerySupplyOfRequestAmino;
                encode(message: _14.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySupplyOfRequest;
                fromJSON(object: any): _14.QuerySupplyOfRequest;
                toJSON(message: _14.QuerySupplyOfRequest): {
                    denom: string;
                };
                fromPartial(object: Partial<_14.QuerySupplyOfRequest>): _14.QuerySupplyOfRequest;
                fromAmino(object: _14.QuerySupplyOfRequestAmino): _14.QuerySupplyOfRequest;
                toAmino(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _14.QuerySupplyOfRequestAminoMsg): _14.QuerySupplyOfRequest;
                toAminoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfRequestProtoMsg): _14.QuerySupplyOfRequest;
                toProto(message: _14.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfRequest): _14.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QuerySupplyOfResponse;
                isSDK(o: any): o is _14.QuerySupplyOfResponseSDKType;
                isAmino(o: any): o is _14.QuerySupplyOfResponseAmino;
                encode(message: _14.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QuerySupplyOfResponse;
                fromJSON(object: any): _14.QuerySupplyOfResponse;
                toJSON(message: _14.QuerySupplyOfResponse): {
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_14.QuerySupplyOfResponse>): _14.QuerySupplyOfResponse;
                fromAmino(object: _14.QuerySupplyOfResponseAmino): _14.QuerySupplyOfResponse;
                toAmino(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _14.QuerySupplyOfResponseAminoMsg): _14.QuerySupplyOfResponse;
                toAminoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _14.QuerySupplyOfResponseProtoMsg): _14.QuerySupplyOfResponse;
                toProto(message: _14.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _14.QuerySupplyOfResponse): _14.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryParamsRequest;
                isSDK(o: any): o is _14.QueryParamsRequestSDKType;
                isAmino(o: any): o is _14.QueryParamsRequestAmino;
                encode(_: _14.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryParamsRequest;
                fromJSON(_: any): _14.QueryParamsRequest;
                toJSON(_: _14.QueryParamsRequest): {};
                fromPartial(_: Partial<_14.QueryParamsRequest>): _14.QueryParamsRequest;
                fromAmino(_: _14.QueryParamsRequestAmino): _14.QueryParamsRequest;
                toAmino(_: _14.QueryParamsRequest): _14.QueryParamsRequestAmino;
                fromAminoMsg(object: _14.QueryParamsRequestAminoMsg): _14.QueryParamsRequest;
                toAminoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _14.QueryParamsRequestProtoMsg): _14.QueryParamsRequest;
                toProto(message: _14.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _14.QueryParamsRequest): _14.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryParamsResponse;
                isSDK(o: any): o is _14.QueryParamsResponseSDKType;
                isAmino(o: any): o is _14.QueryParamsResponseAmino;
                encode(message: _14.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryParamsResponse;
                fromJSON(object: any): _14.QueryParamsResponse;
                toJSON(message: _14.QueryParamsResponse): {
                    params: {
                        sendEnabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        defaultSendEnabled: boolean;
                    };
                };
                fromPartial(object: Partial<_14.QueryParamsResponse>): _14.QueryParamsResponse;
                fromAmino(object: _14.QueryParamsResponseAmino): _14.QueryParamsResponse;
                toAmino(message: _14.QueryParamsResponse): _14.QueryParamsResponseAmino;
                fromAminoMsg(object: _14.QueryParamsResponseAminoMsg): _14.QueryParamsResponse;
                toAminoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _14.QueryParamsResponseProtoMsg): _14.QueryParamsResponse;
                toProto(message: _14.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _14.QueryParamsResponse): _14.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryDenomsMetadataRequest;
                isSDK(o: any): o is _14.QueryDenomsMetadataRequestSDKType;
                isAmino(o: any): o is _14.QueryDenomsMetadataRequestAmino;
                encode(message: _14.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomsMetadataRequest;
                fromJSON(object: any): _14.QueryDenomsMetadataRequest;
                toJSON(message: _14.QueryDenomsMetadataRequest): {
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_14.QueryDenomsMetadataRequest>): _14.QueryDenomsMetadataRequest;
                fromAmino(object: _14.QueryDenomsMetadataRequestAmino): _14.QueryDenomsMetadataRequest;
                toAmino(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataRequestAminoMsg): _14.QueryDenomsMetadataRequest;
                toAminoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataRequestProtoMsg): _14.QueryDenomsMetadataRequest;
                toProto(message: _14.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataRequest): _14.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryDenomsMetadataResponse;
                isSDK(o: any): o is _14.QueryDenomsMetadataResponseSDKType;
                isAmino(o: any): o is _14.QueryDenomsMetadataResponseAmino;
                encode(message: _14.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomsMetadataResponse;
                fromJSON(object: any): _14.QueryDenomsMetadataResponse;
                toJSON(message: _14.QueryDenomsMetadataResponse): {
                    metadatas: {
                        description: string;
                        denomUnits: {
                            denom: string;
                            exponent: number;
                            aliases: string[];
                        }[];
                        base: string;
                        display: string;
                        name: string;
                        symbol: string;
                        uri: string;
                        uriHash: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_14.QueryDenomsMetadataResponse>): _14.QueryDenomsMetadataResponse;
                fromAmino(object: _14.QueryDenomsMetadataResponseAmino): _14.QueryDenomsMetadataResponse;
                toAmino(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomsMetadataResponseAminoMsg): _14.QueryDenomsMetadataResponse;
                toAminoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomsMetadataResponseProtoMsg): _14.QueryDenomsMetadataResponse;
                toProto(message: _14.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomsMetadataResponse): _14.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryDenomMetadataRequest;
                isSDK(o: any): o is _14.QueryDenomMetadataRequestSDKType;
                isAmino(o: any): o is _14.QueryDenomMetadataRequestAmino;
                encode(message: _14.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomMetadataRequest;
                fromJSON(object: any): _14.QueryDenomMetadataRequest;
                toJSON(message: _14.QueryDenomMetadataRequest): {
                    denom: string;
                };
                fromPartial(object: Partial<_14.QueryDenomMetadataRequest>): _14.QueryDenomMetadataRequest;
                fromAmino(object: _14.QueryDenomMetadataRequestAmino): _14.QueryDenomMetadataRequest;
                toAmino(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataRequestAminoMsg): _14.QueryDenomMetadataRequest;
                toAminoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataRequestProtoMsg): _14.QueryDenomMetadataRequest;
                toProto(message: _14.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataRequest): _14.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryDenomMetadataResponse;
                isSDK(o: any): o is _14.QueryDenomMetadataResponseSDKType;
                isAmino(o: any): o is _14.QueryDenomMetadataResponseAmino;
                encode(message: _14.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomMetadataResponse;
                fromJSON(object: any): _14.QueryDenomMetadataResponse;
                toJSON(message: _14.QueryDenomMetadataResponse): {
                    metadata: {
                        description: string;
                        denomUnits: {
                            denom: string;
                            exponent: number;
                            aliases: string[];
                        }[];
                        base: string;
                        display: string;
                        name: string;
                        symbol: string;
                        uri: string;
                        uriHash: string;
                    };
                };
                fromPartial(object: Partial<_14.QueryDenomMetadataResponse>): _14.QueryDenomMetadataResponse;
                fromAmino(object: _14.QueryDenomMetadataResponseAmino): _14.QueryDenomMetadataResponse;
                toAmino(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _14.QueryDenomMetadataResponseAminoMsg): _14.QueryDenomMetadataResponse;
                toAminoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomMetadataResponseProtoMsg): _14.QueryDenomMetadataResponse;
                toProto(message: _14.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomMetadataResponse): _14.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryDenomOwnersRequest;
                isSDK(o: any): o is _14.QueryDenomOwnersRequestSDKType;
                isAmino(o: any): o is _14.QueryDenomOwnersRequestAmino;
                encode(message: _14.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomOwnersRequest;
                fromJSON(object: any): _14.QueryDenomOwnersRequest;
                toJSON(message: _14.QueryDenomOwnersRequest): {
                    denom: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_14.QueryDenomOwnersRequest>): _14.QueryDenomOwnersRequest;
                fromAmino(object: _14.QueryDenomOwnersRequestAmino): _14.QueryDenomOwnersRequest;
                toAmino(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _14.QueryDenomOwnersRequestAminoMsg): _14.QueryDenomOwnersRequest;
                toAminoMsg(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _14.QueryDenomOwnersRequestProtoMsg): _14.QueryDenomOwnersRequest;
                toProto(message: _14.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _14.QueryDenomOwnersRequest): _14.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.DenomOwner;
                isSDK(o: any): o is _14.DenomOwnerSDKType;
                isAmino(o: any): o is _14.DenomOwnerAmino;
                encode(message: _14.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.DenomOwner;
                fromJSON(object: any): _14.DenomOwner;
                toJSON(message: _14.DenomOwner): {
                    address: string;
                    balance: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_14.DenomOwner>): _14.DenomOwner;
                fromAmino(object: _14.DenomOwnerAmino): _14.DenomOwner;
                toAmino(message: _14.DenomOwner): _14.DenomOwnerAmino;
                fromAminoMsg(object: _14.DenomOwnerAminoMsg): _14.DenomOwner;
                toAminoMsg(message: _14.DenomOwner): _14.DenomOwnerAminoMsg;
                fromProtoMsg(message: _14.DenomOwnerProtoMsg): _14.DenomOwner;
                toProto(message: _14.DenomOwner): Uint8Array;
                toProtoMsg(message: _14.DenomOwner): _14.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _14.QueryDenomOwnersResponse;
                isSDK(o: any): o is _14.QueryDenomOwnersResponseSDKType;
                isAmino(o: any): o is _14.QueryDenomOwnersResponseAmino;
                encode(message: _14.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _14.QueryDenomOwnersResponse;
                fromJSON(object: any): _14.QueryDenomOwnersResponse;
                toJSON(message: _14.QueryDenomOwnersResponse): {
                    denomOwners: {
                        address: string;
                        balance: {
                            denom: string;
                            amount: string;
                        };
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_14.QueryDenomOwnersResponse>): _14.QueryDenomOwnersResponse;
                fromAmino(object: _14.QueryDenomOwnersResponseAmino): _14.QueryDenomOwnersResponse;
                toAmino(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _14.QueryDenomOwnersResponseAminoMsg): _14.QueryDenomOwnersResponse;
                toAminoMsg(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _14.QueryDenomOwnersResponseProtoMsg): _14.QueryDenomOwnersResponse;
                toProto(message: _14.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _14.QueryDenomOwnersResponse): _14.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _13.GenesisState;
                isSDK(o: any): o is _13.GenesisStateSDKType;
                isAmino(o: any): o is _13.GenesisStateAmino;
                encode(message: _13.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.GenesisState;
                fromJSON(object: any): _13.GenesisState;
                toJSON(message: _13.GenesisState): {
                    params: {
                        sendEnabled: {
                            denom: string;
                            enabled: boolean;
                        }[];
                        defaultSendEnabled: boolean;
                    };
                    balances: {
                        address: string;
                        coins: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                    supply: {
                        denom: string;
                        amount: string;
                    }[];
                    denomMetadata: {
                        description: string;
                        denomUnits: {
                            denom: string;
                            exponent: number;
                            aliases: string[];
                        }[];
                        base: string;
                        display: string;
                        name: string;
                        symbol: string;
                        uri: string;
                        uriHash: string;
                    }[];
                };
                fromPartial(object: Partial<_13.GenesisState>): _13.GenesisState;
                fromAmino(object: _13.GenesisStateAmino): _13.GenesisState;
                toAmino(message: _13.GenesisState): _13.GenesisStateAmino;
                fromAminoMsg(object: _13.GenesisStateAminoMsg): _13.GenesisState;
                toAminoMsg(message: _13.GenesisState): _13.GenesisStateAminoMsg;
                fromProtoMsg(message: _13.GenesisStateProtoMsg): _13.GenesisState;
                toProto(message: _13.GenesisState): Uint8Array;
                toProtoMsg(message: _13.GenesisState): _13.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _13.Balance;
                isSDK(o: any): o is _13.BalanceSDKType;
                isAmino(o: any): o is _13.BalanceAmino;
                encode(message: _13.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _13.Balance;
                fromJSON(object: any): _13.Balance;
                toJSON(message: _13.Balance): {
                    address: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_13.Balance>): _13.Balance;
                fromAmino(object: _13.BalanceAmino): _13.Balance;
                toAmino(message: _13.Balance): _13.BalanceAmino;
                fromAminoMsg(object: _13.BalanceAminoMsg): _13.Balance;
                toAminoMsg(message: _13.Balance): _13.BalanceAminoMsg;
                fromProtoMsg(message: _13.BalanceProtoMsg): _13.Balance;
                toProto(message: _13.Balance): Uint8Array;
                toProtoMsg(message: _13.Balance): _13.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.Params;
                isSDK(o: any): o is _12.ParamsSDKType;
                isAmino(o: any): o is _12.ParamsAmino;
                encode(message: _12.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Params;
                fromJSON(object: any): _12.Params;
                toJSON(message: _12.Params): {
                    sendEnabled: {
                        denom: string;
                        enabled: boolean;
                    }[];
                    defaultSendEnabled: boolean;
                };
                fromPartial(object: Partial<_12.Params>): _12.Params;
                fromAmino(object: _12.ParamsAmino): _12.Params;
                toAmino(message: _12.Params): _12.ParamsAmino;
                fromAminoMsg(object: _12.ParamsAminoMsg): _12.Params;
                toAminoMsg(message: _12.Params): _12.ParamsAminoMsg;
                fromProtoMsg(message: _12.ParamsProtoMsg): _12.Params;
                toProto(message: _12.Params): Uint8Array;
                toProtoMsg(message: _12.Params): _12.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.SendEnabled;
                isSDK(o: any): o is _12.SendEnabledSDKType;
                isAmino(o: any): o is _12.SendEnabledAmino;
                encode(message: _12.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.SendEnabled;
                fromJSON(object: any): _12.SendEnabled;
                toJSON(message: _12.SendEnabled): {
                    denom: string;
                    enabled: boolean;
                };
                fromPartial(object: Partial<_12.SendEnabled>): _12.SendEnabled;
                fromAmino(object: _12.SendEnabledAmino): _12.SendEnabled;
                toAmino(message: _12.SendEnabled): _12.SendEnabledAmino;
                fromAminoMsg(object: _12.SendEnabledAminoMsg): _12.SendEnabled;
                toAminoMsg(message: _12.SendEnabled): _12.SendEnabledAminoMsg;
                fromProtoMsg(message: _12.SendEnabledProtoMsg): _12.SendEnabled;
                toProto(message: _12.SendEnabled): Uint8Array;
                toProtoMsg(message: _12.SendEnabled): _12.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.Input;
                isSDK(o: any): o is _12.InputSDKType;
                isAmino(o: any): o is _12.InputAmino;
                encode(message: _12.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Input;
                fromJSON(object: any): _12.Input;
                toJSON(message: _12.Input): {
                    address: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_12.Input>): _12.Input;
                fromAmino(object: _12.InputAmino): _12.Input;
                toAmino(message: _12.Input): _12.InputAmino;
                fromAminoMsg(object: _12.InputAminoMsg): _12.Input;
                toAminoMsg(message: _12.Input): _12.InputAminoMsg;
                fromProtoMsg(message: _12.InputProtoMsg): _12.Input;
                toProto(message: _12.Input): Uint8Array;
                toProtoMsg(message: _12.Input): _12.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.Output;
                isSDK(o: any): o is _12.OutputSDKType;
                isAmino(o: any): o is _12.OutputAmino;
                encode(message: _12.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Output;
                fromJSON(object: any): _12.Output;
                toJSON(message: _12.Output): {
                    address: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_12.Output>): _12.Output;
                fromAmino(object: _12.OutputAmino): _12.Output;
                toAmino(message: _12.Output): _12.OutputAmino;
                fromAminoMsg(object: _12.OutputAminoMsg): _12.Output;
                toAminoMsg(message: _12.Output): _12.OutputAminoMsg;
                fromProtoMsg(message: _12.OutputProtoMsg): _12.Output;
                toProto(message: _12.Output): Uint8Array;
                toProtoMsg(message: _12.Output): _12.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.Supply;
                isSDK(o: any): o is _12.SupplySDKType;
                isAmino(o: any): o is _12.SupplyAmino;
                encode(message: _12.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Supply;
                fromJSON(object: any): _12.Supply;
                toJSON(message: _12.Supply): {
                    $typeUrl?: "/cosmos.bank.v1beta1.Supply";
                    total: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_12.Supply>): _12.Supply;
                fromAmino(object: _12.SupplyAmino): _12.Supply;
                toAmino(message: _12.Supply): _12.SupplyAmino;
                fromAminoMsg(object: _12.SupplyAminoMsg): _12.Supply;
                toAminoMsg(message: _12.Supply): _12.SupplyAminoMsg;
                fromProtoMsg(message: _12.SupplyProtoMsg): _12.Supply;
                toProto(message: _12.Supply): Uint8Array;
                toProtoMsg(message: _12.Supply): _12.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.DenomUnit;
                isSDK(o: any): o is _12.DenomUnitSDKType;
                isAmino(o: any): o is _12.DenomUnitAmino;
                encode(message: _12.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.DenomUnit;
                fromJSON(object: any): _12.DenomUnit;
                toJSON(message: _12.DenomUnit): {
                    denom: string;
                    exponent: number;
                    aliases: string[];
                };
                fromPartial(object: Partial<_12.DenomUnit>): _12.DenomUnit;
                fromAmino(object: _12.DenomUnitAmino): _12.DenomUnit;
                toAmino(message: _12.DenomUnit): _12.DenomUnitAmino;
                fromAminoMsg(object: _12.DenomUnitAminoMsg): _12.DenomUnit;
                toAminoMsg(message: _12.DenomUnit): _12.DenomUnitAminoMsg;
                fromProtoMsg(message: _12.DenomUnitProtoMsg): _12.DenomUnit;
                toProto(message: _12.DenomUnit): Uint8Array;
                toProtoMsg(message: _12.DenomUnit): _12.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.Metadata;
                isSDK(o: any): o is _12.MetadataSDKType;
                isAmino(o: any): o is _12.MetadataAmino;
                encode(message: _12.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _12.Metadata;
                fromJSON(object: any): _12.Metadata;
                toJSON(message: _12.Metadata): {
                    description: string;
                    denomUnits: {
                        denom: string;
                        exponent: number;
                        aliases: string[];
                    }[];
                    base: string;
                    display: string;
                    name: string;
                    symbol: string;
                    uri: string;
                    uriHash: string;
                };
                fromPartial(object: Partial<_12.Metadata>): _12.Metadata;
                fromAmino(object: _12.MetadataAmino): _12.Metadata;
                toAmino(message: _12.Metadata): _12.MetadataAmino;
                fromAminoMsg(object: _12.MetadataAminoMsg): _12.Metadata;
                toAminoMsg(message: _12.Metadata): _12.MetadataAminoMsg;
                fromProtoMsg(message: _12.MetadataProtoMsg): _12.Metadata;
                toProto(message: _12.Metadata): Uint8Array;
                toProtoMsg(message: _12.Metadata): _12.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.SendAuthorization;
                isSDK(o: any): o is _11.SendAuthorizationSDKType;
                isAmino(o: any): o is _11.SendAuthorizationAmino;
                encode(message: _11.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _11.SendAuthorization;
                fromJSON(object: any): _11.SendAuthorization;
                toJSON(message: _11.SendAuthorization): {
                    $typeUrl?: "/cosmos.bank.v1beta1.SendAuthorization";
                    spendLimit: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_11.SendAuthorization>): _11.SendAuthorization;
                fromAmino(object: _11.SendAuthorizationAmino): _11.SendAuthorization;
                toAmino(message: _11.SendAuthorization): _11.SendAuthorizationAmino;
                fromAminoMsg(object: _11.SendAuthorizationAminoMsg): _11.SendAuthorization;
                toAminoMsg(message: _11.SendAuthorization): _11.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _11.SendAuthorizationProtoMsg): _11.SendAuthorization;
                toProto(message: _11.SendAuthorization): Uint8Array;
                toProtoMsg(message: _11.SendAuthorization): _11.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.TxResponse;
                    isSDK(o: any): o is _16.TxResponseSDKType;
                    isAmino(o: any): o is _16.TxResponseAmino;
                    encode(message: _16.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.TxResponse;
                    fromJSON(object: any): _16.TxResponse;
                    toJSON(message: _16.TxResponse): {
                        height: string;
                        txhash: string;
                        codespace: string;
                        code: number;
                        data: string;
                        rawLog: string;
                        logs: {
                            msgIndex: number;
                            log: string;
                            events: {
                                type: string;
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            }[];
                        }[];
                        info: string;
                        gasWanted: string;
                        gasUsed: string;
                        tx?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        timestamp: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                                index: boolean;
                            }[];
                        }[];
                    };
                    fromPartial(object: Partial<_16.TxResponse>): _16.TxResponse;
                    fromAmino(object: _16.TxResponseAmino): _16.TxResponse;
                    toAmino(message: _16.TxResponse): _16.TxResponseAmino;
                    fromAminoMsg(object: _16.TxResponseAminoMsg): _16.TxResponse;
                    toAminoMsg(message: _16.TxResponse): _16.TxResponseAminoMsg;
                    fromProtoMsg(message: _16.TxResponseProtoMsg): _16.TxResponse;
                    toProto(message: _16.TxResponse): Uint8Array;
                    toProtoMsg(message: _16.TxResponse): _16.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.ABCIMessageLog;
                    isSDK(o: any): o is _16.ABCIMessageLogSDKType;
                    isAmino(o: any): o is _16.ABCIMessageLogAmino;
                    encode(message: _16.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.ABCIMessageLog;
                    fromJSON(object: any): _16.ABCIMessageLog;
                    toJSON(message: _16.ABCIMessageLog): {
                        msgIndex: number;
                        log: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                    };
                    fromPartial(object: Partial<_16.ABCIMessageLog>): _16.ABCIMessageLog;
                    fromAmino(object: _16.ABCIMessageLogAmino): _16.ABCIMessageLog;
                    toAmino(message: _16.ABCIMessageLog): _16.ABCIMessageLogAmino;
                    fromAminoMsg(object: _16.ABCIMessageLogAminoMsg): _16.ABCIMessageLog;
                    toAminoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _16.ABCIMessageLogProtoMsg): _16.ABCIMessageLog;
                    toProto(message: _16.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _16.ABCIMessageLog): _16.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.StringEvent;
                    isSDK(o: any): o is _16.StringEventSDKType;
                    isAmino(o: any): o is _16.StringEventAmino;
                    encode(message: _16.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.StringEvent;
                    fromJSON(object: any): _16.StringEvent;
                    toJSON(message: _16.StringEvent): {
                        type: string;
                        attributes: {
                            key: string;
                            value: string;
                        }[];
                    };
                    fromPartial(object: Partial<_16.StringEvent>): _16.StringEvent;
                    fromAmino(object: _16.StringEventAmino): _16.StringEvent;
                    toAmino(message: _16.StringEvent): _16.StringEventAmino;
                    fromAminoMsg(object: _16.StringEventAminoMsg): _16.StringEvent;
                    toAminoMsg(message: _16.StringEvent): _16.StringEventAminoMsg;
                    fromProtoMsg(message: _16.StringEventProtoMsg): _16.StringEvent;
                    toProto(message: _16.StringEvent): Uint8Array;
                    toProtoMsg(message: _16.StringEvent): _16.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.Attribute;
                    isSDK(o: any): o is _16.AttributeSDKType;
                    isAmino(o: any): o is _16.AttributeAmino;
                    encode(message: _16.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Attribute;
                    fromJSON(object: any): _16.Attribute;
                    toJSON(message: _16.Attribute): {
                        key: string;
                        value: string;
                    };
                    fromPartial(object: Partial<_16.Attribute>): _16.Attribute;
                    fromAmino(object: _16.AttributeAmino): _16.Attribute;
                    toAmino(message: _16.Attribute): _16.AttributeAmino;
                    fromAminoMsg(object: _16.AttributeAminoMsg): _16.Attribute;
                    toAminoMsg(message: _16.Attribute): _16.AttributeAminoMsg;
                    fromProtoMsg(message: _16.AttributeProtoMsg): _16.Attribute;
                    toProto(message: _16.Attribute): Uint8Array;
                    toProtoMsg(message: _16.Attribute): _16.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GasInfo;
                    isSDK(o: any): o is _16.GasInfoSDKType;
                    isAmino(o: any): o is _16.GasInfoAmino;
                    encode(message: _16.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.GasInfo;
                    fromJSON(object: any): _16.GasInfo;
                    toJSON(message: _16.GasInfo): {
                        gasWanted: string;
                        gasUsed: string;
                    };
                    fromPartial(object: Partial<_16.GasInfo>): _16.GasInfo;
                    fromAmino(object: _16.GasInfoAmino): _16.GasInfo;
                    toAmino(message: _16.GasInfo): _16.GasInfoAmino;
                    fromAminoMsg(object: _16.GasInfoAminoMsg): _16.GasInfo;
                    toAminoMsg(message: _16.GasInfo): _16.GasInfoAminoMsg;
                    fromProtoMsg(message: _16.GasInfoProtoMsg): _16.GasInfo;
                    toProto(message: _16.GasInfo): Uint8Array;
                    toProtoMsg(message: _16.GasInfo): _16.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.Result;
                    isSDK(o: any): o is _16.ResultSDKType;
                    isAmino(o: any): o is _16.ResultAmino;
                    encode(message: _16.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.Result;
                    fromJSON(object: any): _16.Result;
                    toJSON(message: _16.Result): {
                        data: string;
                        log: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                                index: boolean;
                            }[];
                        }[];
                        msgResponses: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        }[];
                    };
                    fromPartial(object: Partial<_16.Result>): _16.Result;
                    fromAmino(object: _16.ResultAmino): _16.Result;
                    toAmino(message: _16.Result): _16.ResultAmino;
                    fromAminoMsg(object: _16.ResultAminoMsg): _16.Result;
                    toAminoMsg(message: _16.Result): _16.ResultAminoMsg;
                    fromProtoMsg(message: _16.ResultProtoMsg): _16.Result;
                    toProto(message: _16.Result): Uint8Array;
                    toProtoMsg(message: _16.Result): _16.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.SimulationResponse;
                    isSDK(o: any): o is _16.SimulationResponseSDKType;
                    isAmino(o: any): o is _16.SimulationResponseAmino;
                    encode(message: _16.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.SimulationResponse;
                    fromJSON(object: any): _16.SimulationResponse;
                    toJSON(message: _16.SimulationResponse): {
                        gasInfo: {
                            gasWanted: string;
                            gasUsed: string;
                        };
                        result?: {
                            data: string;
                            log: string;
                            events: {
                                type: string;
                                attributes: {
                                    key: string;
                                    value: string;
                                    index: boolean;
                                }[];
                            }[];
                            msgResponses: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                    };
                    fromPartial(object: Partial<_16.SimulationResponse>): _16.SimulationResponse;
                    fromAmino(object: _16.SimulationResponseAmino): _16.SimulationResponse;
                    toAmino(message: _16.SimulationResponse): _16.SimulationResponseAmino;
                    fromAminoMsg(object: _16.SimulationResponseAminoMsg): _16.SimulationResponse;
                    toAminoMsg(message: _16.SimulationResponse): _16.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _16.SimulationResponseProtoMsg): _16.SimulationResponse;
                    toProto(message: _16.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _16.SimulationResponse): _16.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.MsgData;
                    isSDK(o: any): o is _16.MsgDataSDKType;
                    isAmino(o: any): o is _16.MsgDataAmino;
                    encode(message: _16.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.MsgData;
                    fromJSON(object: any): _16.MsgData;
                    toJSON(message: _16.MsgData): {
                        msgType: string;
                        data: string;
                    };
                    fromPartial(object: Partial<_16.MsgData>): _16.MsgData;
                    fromAmino(object: _16.MsgDataAmino): _16.MsgData;
                    toAmino(message: _16.MsgData): _16.MsgDataAmino;
                    fromAminoMsg(object: _16.MsgDataAminoMsg): _16.MsgData;
                    toAminoMsg(message: _16.MsgData): _16.MsgDataAminoMsg;
                    fromProtoMsg(message: _16.MsgDataProtoMsg): _16.MsgData;
                    toProto(message: _16.MsgData): Uint8Array;
                    toProtoMsg(message: _16.MsgData): _16.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.TxMsgData;
                    isSDK(o: any): o is _16.TxMsgDataSDKType;
                    isAmino(o: any): o is _16.TxMsgDataAmino;
                    encode(message: _16.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.TxMsgData;
                    fromJSON(object: any): _16.TxMsgData;
                    toJSON(message: _16.TxMsgData): {
                        data: {
                            msgType: string;
                            data: string;
                        }[];
                        msgResponses: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        }[];
                    };
                    fromPartial(object: Partial<_16.TxMsgData>): _16.TxMsgData;
                    fromAmino(object: _16.TxMsgDataAmino): _16.TxMsgData;
                    toAmino(message: _16.TxMsgData): _16.TxMsgDataAmino;
                    fromAminoMsg(object: _16.TxMsgDataAminoMsg): _16.TxMsgData;
                    toAminoMsg(message: _16.TxMsgData): _16.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _16.TxMsgDataProtoMsg): _16.TxMsgData;
                    toProto(message: _16.TxMsgData): Uint8Array;
                    toProtoMsg(message: _16.TxMsgData): _16.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.SearchTxsResult;
                    isSDK(o: any): o is _16.SearchTxsResultSDKType;
                    isAmino(o: any): o is _16.SearchTxsResultAmino;
                    encode(message: _16.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _16.SearchTxsResult;
                    fromJSON(object: any): _16.SearchTxsResult;
                    toJSON(message: _16.SearchTxsResult): {
                        totalCount: string;
                        count: string;
                        pageNumber: string;
                        pageTotal: string;
                        limit: string;
                        txs: {
                            height: string;
                            txhash: string;
                            codespace: string;
                            code: number;
                            data: string;
                            rawLog: string;
                            logs: {
                                msgIndex: number;
                                log: string;
                                events: {
                                    type: string;
                                    attributes: {
                                        key: string;
                                        value: string;
                                    }[];
                                }[];
                            }[];
                            info: string;
                            gasWanted: string;
                            gasUsed: string;
                            tx?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            timestamp: string;
                            events: {
                                type: string;
                                attributes: {
                                    key: string;
                                    value: string;
                                    index: boolean;
                                }[];
                            }[];
                        }[];
                    };
                    fromPartial(object: Partial<_16.SearchTxsResult>): _16.SearchTxsResult;
                    fromAmino(object: _16.SearchTxsResultAmino): _16.SearchTxsResult;
                    toAmino(message: _16.SearchTxsResult): _16.SearchTxsResultAmino;
                    fromAminoMsg(object: _16.SearchTxsResultAminoMsg): _16.SearchTxsResult;
                    toAminoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _16.SearchTxsResultProtoMsg): _16.SearchTxsResult;
                    toProto(message: _16.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _16.SearchTxsResult): _16.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _17.PageRequest;
                    isSDK(o: any): o is _17.PageRequestSDKType;
                    isAmino(o: any): o is _17.PageRequestAmino;
                    encode(message: _17.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.PageRequest;
                    fromJSON(object: any): _17.PageRequest;
                    toJSON(message: _17.PageRequest): {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                    fromPartial(object: Partial<_17.PageRequest>): _17.PageRequest;
                    fromAmino(object: _17.PageRequestAmino): _17.PageRequest;
                    toAmino(message: _17.PageRequest): _17.PageRequestAmino;
                    fromAminoMsg(object: _17.PageRequestAminoMsg): _17.PageRequest;
                    toAminoMsg(message: _17.PageRequest): _17.PageRequestAminoMsg;
                    fromProtoMsg(message: _17.PageRequestProtoMsg): _17.PageRequest;
                    toProto(message: _17.PageRequest): Uint8Array;
                    toProtoMsg(message: _17.PageRequest): _17.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _17.PageResponse;
                    isSDK(o: any): o is _17.PageResponseSDKType;
                    isAmino(o: any): o is _17.PageResponseAmino;
                    encode(message: _17.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _17.PageResponse;
                    fromJSON(object: any): _17.PageResponse;
                    toJSON(message: _17.PageResponse): {
                        nextKey: string;
                        total: string;
                    };
                    fromPartial(object: Partial<_17.PageResponse>): _17.PageResponse;
                    fromAmino(object: _17.PageResponseAmino): _17.PageResponse;
                    toAmino(message: _17.PageResponse): _17.PageResponseAmino;
                    fromAminoMsg(object: _17.PageResponseAminoMsg): _17.PageResponse;
                    toAminoMsg(message: _17.PageResponse): _17.PageResponseAminoMsg;
                    fromProtoMsg(message: _17.PageResponseProtoMsg): _17.PageResponse;
                    toProto(message: _17.PageResponse): Uint8Array;
                    toProtoMsg(message: _17.PageResponse): _17.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.AppDescriptor;
                    isSDK(o: any): o is _18.AppDescriptorSDKType;
                    isAmino(o: any): o is _18.AppDescriptorAmino;
                    encode(message: _18.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AppDescriptor;
                    fromJSON(object: any): _18.AppDescriptor;
                    toJSON(message: _18.AppDescriptor): {
                        authn?: {
                            signModes: {
                                name: string;
                                number: number;
                                authnInfoProviderMethodFullname: string;
                            }[];
                        };
                        chain?: {
                            id: string;
                        };
                        codec?: {
                            interfaces: {
                                fullname: string;
                                interfaceAcceptingMessages: {
                                    fullname: string;
                                    fieldDescriptorNames: string[];
                                }[];
                                interfaceImplementers: {
                                    fullname: string;
                                    typeUrl: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix: string;
                        };
                        queryServices?: {
                            queryServices: {
                                fullname: string;
                                isModule: boolean;
                                methods: {
                                    name: string;
                                    fullQueryPath: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname: string;
                            msgs: {
                                msgTypeUrl: string;
                            }[];
                        };
                    };
                    fromPartial(object: Partial<_18.AppDescriptor>): _18.AppDescriptor;
                    fromAmino(object: _18.AppDescriptorAmino): _18.AppDescriptor;
                    toAmino(message: _18.AppDescriptor): _18.AppDescriptorAmino;
                    fromAminoMsg(object: _18.AppDescriptorAminoMsg): _18.AppDescriptor;
                    toAminoMsg(message: _18.AppDescriptor): _18.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AppDescriptorProtoMsg): _18.AppDescriptor;
                    toProto(message: _18.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AppDescriptor): _18.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.TxDescriptor;
                    isSDK(o: any): o is _18.TxDescriptorSDKType;
                    isAmino(o: any): o is _18.TxDescriptorAmino;
                    encode(message: _18.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.TxDescriptor;
                    fromJSON(object: any): _18.TxDescriptor;
                    toJSON(message: _18.TxDescriptor): {
                        fullname: string;
                        msgs: {
                            msgTypeUrl: string;
                        }[];
                    };
                    fromPartial(object: Partial<_18.TxDescriptor>): _18.TxDescriptor;
                    fromAmino(object: _18.TxDescriptorAmino): _18.TxDescriptor;
                    toAmino(message: _18.TxDescriptor): _18.TxDescriptorAmino;
                    fromAminoMsg(object: _18.TxDescriptorAminoMsg): _18.TxDescriptor;
                    toAminoMsg(message: _18.TxDescriptor): _18.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _18.TxDescriptorProtoMsg): _18.TxDescriptor;
                    toProto(message: _18.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _18.TxDescriptor): _18.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.AuthnDescriptor;
                    isSDK(o: any): o is _18.AuthnDescriptorSDKType;
                    isAmino(o: any): o is _18.AuthnDescriptorAmino;
                    encode(message: _18.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.AuthnDescriptor;
                    fromJSON(object: any): _18.AuthnDescriptor;
                    toJSON(message: _18.AuthnDescriptor): {
                        signModes: {
                            name: string;
                            number: number;
                            authnInfoProviderMethodFullname: string;
                        }[];
                    };
                    fromPartial(object: Partial<_18.AuthnDescriptor>): _18.AuthnDescriptor;
                    fromAmino(object: _18.AuthnDescriptorAmino): _18.AuthnDescriptor;
                    toAmino(message: _18.AuthnDescriptor): _18.AuthnDescriptorAmino;
                    fromAminoMsg(object: _18.AuthnDescriptorAminoMsg): _18.AuthnDescriptor;
                    toAminoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _18.AuthnDescriptorProtoMsg): _18.AuthnDescriptor;
                    toProto(message: _18.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _18.AuthnDescriptor): _18.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.SigningModeDescriptor;
                    isSDK(o: any): o is _18.SigningModeDescriptorSDKType;
                    isAmino(o: any): o is _18.SigningModeDescriptorAmino;
                    encode(message: _18.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.SigningModeDescriptor;
                    fromJSON(object: any): _18.SigningModeDescriptor;
                    toJSON(message: _18.SigningModeDescriptor): {
                        name: string;
                        number: number;
                        authnInfoProviderMethodFullname: string;
                    };
                    fromPartial(object: Partial<_18.SigningModeDescriptor>): _18.SigningModeDescriptor;
                    fromAmino(object: _18.SigningModeDescriptorAmino): _18.SigningModeDescriptor;
                    toAmino(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _18.SigningModeDescriptorAminoMsg): _18.SigningModeDescriptor;
                    toAminoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _18.SigningModeDescriptorProtoMsg): _18.SigningModeDescriptor;
                    toProto(message: _18.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _18.SigningModeDescriptor): _18.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.ChainDescriptor;
                    isSDK(o: any): o is _18.ChainDescriptorSDKType;
                    isAmino(o: any): o is _18.ChainDescriptorAmino;
                    encode(message: _18.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.ChainDescriptor;
                    fromJSON(object: any): _18.ChainDescriptor;
                    toJSON(message: _18.ChainDescriptor): {
                        id: string;
                    };
                    fromPartial(object: Partial<_18.ChainDescriptor>): _18.ChainDescriptor;
                    fromAmino(object: _18.ChainDescriptorAmino): _18.ChainDescriptor;
                    toAmino(message: _18.ChainDescriptor): _18.ChainDescriptorAmino;
                    fromAminoMsg(object: _18.ChainDescriptorAminoMsg): _18.ChainDescriptor;
                    toAminoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ChainDescriptorProtoMsg): _18.ChainDescriptor;
                    toProto(message: _18.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ChainDescriptor): _18.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.CodecDescriptor;
                    isSDK(o: any): o is _18.CodecDescriptorSDKType;
                    isAmino(o: any): o is _18.CodecDescriptorAmino;
                    encode(message: _18.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.CodecDescriptor;
                    fromJSON(object: any): _18.CodecDescriptor;
                    toJSON(message: _18.CodecDescriptor): {
                        interfaces: {
                            fullname: string;
                            interfaceAcceptingMessages: {
                                fullname: string;
                                fieldDescriptorNames: string[];
                            }[];
                            interfaceImplementers: {
                                fullname: string;
                                typeUrl: string;
                            }[];
                        }[];
                    };
                    fromPartial(object: Partial<_18.CodecDescriptor>): _18.CodecDescriptor;
                    fromAmino(object: _18.CodecDescriptorAmino): _18.CodecDescriptor;
                    toAmino(message: _18.CodecDescriptor): _18.CodecDescriptorAmino;
                    fromAminoMsg(object: _18.CodecDescriptorAminoMsg): _18.CodecDescriptor;
                    toAminoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _18.CodecDescriptorProtoMsg): _18.CodecDescriptor;
                    toProto(message: _18.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _18.CodecDescriptor): _18.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.InterfaceDescriptor;
                    isSDK(o: any): o is _18.InterfaceDescriptorSDKType;
                    isAmino(o: any): o is _18.InterfaceDescriptorAmino;
                    encode(message: _18.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.InterfaceDescriptor;
                    fromJSON(object: any): _18.InterfaceDescriptor;
                    toJSON(message: _18.InterfaceDescriptor): {
                        fullname: string;
                        interfaceAcceptingMessages: {
                            fullname: string;
                            fieldDescriptorNames: string[];
                        }[];
                        interfaceImplementers: {
                            fullname: string;
                            typeUrl: string;
                        }[];
                    };
                    fromPartial(object: Partial<_18.InterfaceDescriptor>): _18.InterfaceDescriptor;
                    fromAmino(object: _18.InterfaceDescriptorAmino): _18.InterfaceDescriptor;
                    toAmino(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceDescriptorAminoMsg): _18.InterfaceDescriptor;
                    toAminoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceDescriptorProtoMsg): _18.InterfaceDescriptor;
                    toProto(message: _18.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceDescriptor): _18.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.InterfaceImplementerDescriptor;
                    isSDK(o: any): o is _18.InterfaceImplementerDescriptorSDKType;
                    isAmino(o: any): o is _18.InterfaceImplementerDescriptorAmino;
                    encode(message: _18.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _18.InterfaceImplementerDescriptor;
                    toJSON(message: _18.InterfaceImplementerDescriptor): {
                        fullname: string;
                        typeUrl: string;
                    };
                    fromPartial(object: Partial<_18.InterfaceImplementerDescriptor>): _18.InterfaceImplementerDescriptor;
                    fromAmino(object: _18.InterfaceImplementerDescriptorAmino): _18.InterfaceImplementerDescriptor;
                    toAmino(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceImplementerDescriptorAminoMsg): _18.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceImplementerDescriptorProtoMsg): _18.InterfaceImplementerDescriptor;
                    toProto(message: _18.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceImplementerDescriptor): _18.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.InterfaceAcceptingMessageDescriptor;
                    isSDK(o: any): o is _18.InterfaceAcceptingMessageDescriptorSDKType;
                    isAmino(o: any): o is _18.InterfaceAcceptingMessageDescriptorAmino;
                    encode(message: _18.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _18.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _18.InterfaceAcceptingMessageDescriptor): {
                        fullname: string;
                        fieldDescriptorNames: string[];
                    };
                    fromPartial(object: Partial<_18.InterfaceAcceptingMessageDescriptor>): _18.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _18.InterfaceAcceptingMessageDescriptorAmino): _18.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _18.InterfaceAcceptingMessageDescriptorAminoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _18.InterfaceAcceptingMessageDescriptorProtoMsg): _18.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _18.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _18.InterfaceAcceptingMessageDescriptor): _18.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.ConfigurationDescriptor;
                    isSDK(o: any): o is _18.ConfigurationDescriptorSDKType;
                    isAmino(o: any): o is _18.ConfigurationDescriptorAmino;
                    encode(message: _18.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.ConfigurationDescriptor;
                    fromJSON(object: any): _18.ConfigurationDescriptor;
                    toJSON(message: _18.ConfigurationDescriptor): {
                        bech32AccountAddressPrefix: string;
                    };
                    fromPartial(object: Partial<_18.ConfigurationDescriptor>): _18.ConfigurationDescriptor;
                    fromAmino(object: _18.ConfigurationDescriptorAmino): _18.ConfigurationDescriptor;
                    toAmino(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _18.ConfigurationDescriptorAminoMsg): _18.ConfigurationDescriptor;
                    toAminoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _18.ConfigurationDescriptorProtoMsg): _18.ConfigurationDescriptor;
                    toProto(message: _18.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _18.ConfigurationDescriptor): _18.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.MsgDescriptor;
                    isSDK(o: any): o is _18.MsgDescriptorSDKType;
                    isAmino(o: any): o is _18.MsgDescriptorAmino;
                    encode(message: _18.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.MsgDescriptor;
                    fromJSON(object: any): _18.MsgDescriptor;
                    toJSON(message: _18.MsgDescriptor): {
                        msgTypeUrl: string;
                    };
                    fromPartial(object: Partial<_18.MsgDescriptor>): _18.MsgDescriptor;
                    fromAmino(object: _18.MsgDescriptorAmino): _18.MsgDescriptor;
                    toAmino(message: _18.MsgDescriptor): _18.MsgDescriptorAmino;
                    fromAminoMsg(object: _18.MsgDescriptorAminoMsg): _18.MsgDescriptor;
                    toAminoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _18.MsgDescriptorProtoMsg): _18.MsgDescriptor;
                    toProto(message: _18.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _18.MsgDescriptor): _18.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetAuthnDescriptorRequest;
                    isSDK(o: any): o is _18.GetAuthnDescriptorRequestSDKType;
                    isAmino(o: any): o is _18.GetAuthnDescriptorRequestAmino;
                    encode(_: _18.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _18.GetAuthnDescriptorRequest;
                    toJSON(_: _18.GetAuthnDescriptorRequest): {};
                    fromPartial(_: Partial<_18.GetAuthnDescriptorRequest>): _18.GetAuthnDescriptorRequest;
                    fromAmino(_: _18.GetAuthnDescriptorRequestAmino): _18.GetAuthnDescriptorRequest;
                    toAmino(_: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorRequestAminoMsg): _18.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorRequestProtoMsg): _18.GetAuthnDescriptorRequest;
                    toProto(message: _18.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorRequest): _18.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetAuthnDescriptorResponse;
                    isSDK(o: any): o is _18.GetAuthnDescriptorResponseSDKType;
                    isAmino(o: any): o is _18.GetAuthnDescriptorResponseAmino;
                    encode(message: _18.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _18.GetAuthnDescriptorResponse;
                    toJSON(message: _18.GetAuthnDescriptorResponse): {
                        authn?: {
                            signModes: {
                                name: string;
                                number: number;
                                authnInfoProviderMethodFullname: string;
                            }[];
                        };
                    };
                    fromPartial(object: Partial<_18.GetAuthnDescriptorResponse>): _18.GetAuthnDescriptorResponse;
                    fromAmino(object: _18.GetAuthnDescriptorResponseAmino): _18.GetAuthnDescriptorResponse;
                    toAmino(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetAuthnDescriptorResponseAminoMsg): _18.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetAuthnDescriptorResponseProtoMsg): _18.GetAuthnDescriptorResponse;
                    toProto(message: _18.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetAuthnDescriptorResponse): _18.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetChainDescriptorRequest;
                    isSDK(o: any): o is _18.GetChainDescriptorRequestSDKType;
                    isAmino(o: any): o is _18.GetChainDescriptorRequestAmino;
                    encode(_: _18.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetChainDescriptorRequest;
                    fromJSON(_: any): _18.GetChainDescriptorRequest;
                    toJSON(_: _18.GetChainDescriptorRequest): {};
                    fromPartial(_: Partial<_18.GetChainDescriptorRequest>): _18.GetChainDescriptorRequest;
                    fromAmino(_: _18.GetChainDescriptorRequestAmino): _18.GetChainDescriptorRequest;
                    toAmino(_: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorRequestAminoMsg): _18.GetChainDescriptorRequest;
                    toAminoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorRequestProtoMsg): _18.GetChainDescriptorRequest;
                    toProto(message: _18.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorRequest): _18.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetChainDescriptorResponse;
                    isSDK(o: any): o is _18.GetChainDescriptorResponseSDKType;
                    isAmino(o: any): o is _18.GetChainDescriptorResponseAmino;
                    encode(message: _18.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetChainDescriptorResponse;
                    fromJSON(object: any): _18.GetChainDescriptorResponse;
                    toJSON(message: _18.GetChainDescriptorResponse): {
                        chain?: {
                            id: string;
                        };
                    };
                    fromPartial(object: Partial<_18.GetChainDescriptorResponse>): _18.GetChainDescriptorResponse;
                    fromAmino(object: _18.GetChainDescriptorResponseAmino): _18.GetChainDescriptorResponse;
                    toAmino(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetChainDescriptorResponseAminoMsg): _18.GetChainDescriptorResponse;
                    toAminoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetChainDescriptorResponseProtoMsg): _18.GetChainDescriptorResponse;
                    toProto(message: _18.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetChainDescriptorResponse): _18.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetCodecDescriptorRequest;
                    isSDK(o: any): o is _18.GetCodecDescriptorRequestSDKType;
                    isAmino(o: any): o is _18.GetCodecDescriptorRequestAmino;
                    encode(_: _18.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetCodecDescriptorRequest;
                    fromJSON(_: any): _18.GetCodecDescriptorRequest;
                    toJSON(_: _18.GetCodecDescriptorRequest): {};
                    fromPartial(_: Partial<_18.GetCodecDescriptorRequest>): _18.GetCodecDescriptorRequest;
                    fromAmino(_: _18.GetCodecDescriptorRequestAmino): _18.GetCodecDescriptorRequest;
                    toAmino(_: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorRequestAminoMsg): _18.GetCodecDescriptorRequest;
                    toAminoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorRequestProtoMsg): _18.GetCodecDescriptorRequest;
                    toProto(message: _18.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorRequest): _18.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetCodecDescriptorResponse;
                    isSDK(o: any): o is _18.GetCodecDescriptorResponseSDKType;
                    isAmino(o: any): o is _18.GetCodecDescriptorResponseAmino;
                    encode(message: _18.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetCodecDescriptorResponse;
                    fromJSON(object: any): _18.GetCodecDescriptorResponse;
                    toJSON(message: _18.GetCodecDescriptorResponse): {
                        codec?: {
                            interfaces: {
                                fullname: string;
                                interfaceAcceptingMessages: {
                                    fullname: string;
                                    fieldDescriptorNames: string[];
                                }[];
                                interfaceImplementers: {
                                    fullname: string;
                                    typeUrl: string;
                                }[];
                            }[];
                        };
                    };
                    fromPartial(object: Partial<_18.GetCodecDescriptorResponse>): _18.GetCodecDescriptorResponse;
                    fromAmino(object: _18.GetCodecDescriptorResponseAmino): _18.GetCodecDescriptorResponse;
                    toAmino(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetCodecDescriptorResponseAminoMsg): _18.GetCodecDescriptorResponse;
                    toAminoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetCodecDescriptorResponseProtoMsg): _18.GetCodecDescriptorResponse;
                    toProto(message: _18.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetCodecDescriptorResponse): _18.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetConfigurationDescriptorRequest;
                    isSDK(o: any): o is _18.GetConfigurationDescriptorRequestSDKType;
                    isAmino(o: any): o is _18.GetConfigurationDescriptorRequestAmino;
                    encode(_: _18.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _18.GetConfigurationDescriptorRequest;
                    toJSON(_: _18.GetConfigurationDescriptorRequest): {};
                    fromPartial(_: Partial<_18.GetConfigurationDescriptorRequest>): _18.GetConfigurationDescriptorRequest;
                    fromAmino(_: _18.GetConfigurationDescriptorRequestAmino): _18.GetConfigurationDescriptorRequest;
                    toAmino(_: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorRequestAminoMsg): _18.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorRequestProtoMsg): _18.GetConfigurationDescriptorRequest;
                    toProto(message: _18.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorRequest): _18.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetConfigurationDescriptorResponse;
                    isSDK(o: any): o is _18.GetConfigurationDescriptorResponseSDKType;
                    isAmino(o: any): o is _18.GetConfigurationDescriptorResponseAmino;
                    encode(message: _18.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _18.GetConfigurationDescriptorResponse;
                    toJSON(message: _18.GetConfigurationDescriptorResponse): {
                        config?: {
                            bech32AccountAddressPrefix: string;
                        };
                    };
                    fromPartial(object: Partial<_18.GetConfigurationDescriptorResponse>): _18.GetConfigurationDescriptorResponse;
                    fromAmino(object: _18.GetConfigurationDescriptorResponseAmino): _18.GetConfigurationDescriptorResponse;
                    toAmino(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetConfigurationDescriptorResponseAminoMsg): _18.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetConfigurationDescriptorResponseProtoMsg): _18.GetConfigurationDescriptorResponse;
                    toProto(message: _18.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetConfigurationDescriptorResponse): _18.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetQueryServicesDescriptorRequest;
                    isSDK(o: any): o is _18.GetQueryServicesDescriptorRequestSDKType;
                    isAmino(o: any): o is _18.GetQueryServicesDescriptorRequestAmino;
                    encode(_: _18.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _18.GetQueryServicesDescriptorRequest;
                    toJSON(_: _18.GetQueryServicesDescriptorRequest): {};
                    fromPartial(_: Partial<_18.GetQueryServicesDescriptorRequest>): _18.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _18.GetQueryServicesDescriptorRequestAmino): _18.GetQueryServicesDescriptorRequest;
                    toAmino(_: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorRequestAminoMsg): _18.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorRequestProtoMsg): _18.GetQueryServicesDescriptorRequest;
                    toProto(message: _18.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorRequest): _18.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetQueryServicesDescriptorResponse;
                    isSDK(o: any): o is _18.GetQueryServicesDescriptorResponseSDKType;
                    isAmino(o: any): o is _18.GetQueryServicesDescriptorResponseAmino;
                    encode(message: _18.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _18.GetQueryServicesDescriptorResponse;
                    toJSON(message: _18.GetQueryServicesDescriptorResponse): {
                        queries?: {
                            queryServices: {
                                fullname: string;
                                isModule: boolean;
                                methods: {
                                    name: string;
                                    fullQueryPath: string;
                                }[];
                            }[];
                        };
                    };
                    fromPartial(object: Partial<_18.GetQueryServicesDescriptorResponse>): _18.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _18.GetQueryServicesDescriptorResponseAmino): _18.GetQueryServicesDescriptorResponse;
                    toAmino(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetQueryServicesDescriptorResponseAminoMsg): _18.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetQueryServicesDescriptorResponseProtoMsg): _18.GetQueryServicesDescriptorResponse;
                    toProto(message: _18.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetQueryServicesDescriptorResponse): _18.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetTxDescriptorRequest;
                    isSDK(o: any): o is _18.GetTxDescriptorRequestSDKType;
                    isAmino(o: any): o is _18.GetTxDescriptorRequestAmino;
                    encode(_: _18.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetTxDescriptorRequest;
                    fromJSON(_: any): _18.GetTxDescriptorRequest;
                    toJSON(_: _18.GetTxDescriptorRequest): {};
                    fromPartial(_: Partial<_18.GetTxDescriptorRequest>): _18.GetTxDescriptorRequest;
                    fromAmino(_: _18.GetTxDescriptorRequestAmino): _18.GetTxDescriptorRequest;
                    toAmino(_: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorRequestAminoMsg): _18.GetTxDescriptorRequest;
                    toAminoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorRequestProtoMsg): _18.GetTxDescriptorRequest;
                    toProto(message: _18.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorRequest): _18.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.GetTxDescriptorResponse;
                    isSDK(o: any): o is _18.GetTxDescriptorResponseSDKType;
                    isAmino(o: any): o is _18.GetTxDescriptorResponseAmino;
                    encode(message: _18.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.GetTxDescriptorResponse;
                    fromJSON(object: any): _18.GetTxDescriptorResponse;
                    toJSON(message: _18.GetTxDescriptorResponse): {
                        tx?: {
                            fullname: string;
                            msgs: {
                                msgTypeUrl: string;
                            }[];
                        };
                    };
                    fromPartial(object: Partial<_18.GetTxDescriptorResponse>): _18.GetTxDescriptorResponse;
                    fromAmino(object: _18.GetTxDescriptorResponseAmino): _18.GetTxDescriptorResponse;
                    toAmino(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _18.GetTxDescriptorResponseAminoMsg): _18.GetTxDescriptorResponse;
                    toAminoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _18.GetTxDescriptorResponseProtoMsg): _18.GetTxDescriptorResponse;
                    toProto(message: _18.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _18.GetTxDescriptorResponse): _18.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.QueryServicesDescriptor;
                    isSDK(o: any): o is _18.QueryServicesDescriptorSDKType;
                    isAmino(o: any): o is _18.QueryServicesDescriptorAmino;
                    encode(message: _18.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryServicesDescriptor;
                    fromJSON(object: any): _18.QueryServicesDescriptor;
                    toJSON(message: _18.QueryServicesDescriptor): {
                        queryServices: {
                            fullname: string;
                            isModule: boolean;
                            methods: {
                                name: string;
                                fullQueryPath: string;
                            }[];
                        }[];
                    };
                    fromPartial(object: Partial<_18.QueryServicesDescriptor>): _18.QueryServicesDescriptor;
                    fromAmino(object: _18.QueryServicesDescriptorAmino): _18.QueryServicesDescriptor;
                    toAmino(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServicesDescriptorAminoMsg): _18.QueryServicesDescriptor;
                    toAminoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServicesDescriptorProtoMsg): _18.QueryServicesDescriptor;
                    toProto(message: _18.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServicesDescriptor): _18.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.QueryServiceDescriptor;
                    isSDK(o: any): o is _18.QueryServiceDescriptorSDKType;
                    isAmino(o: any): o is _18.QueryServiceDescriptorAmino;
                    encode(message: _18.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryServiceDescriptor;
                    fromJSON(object: any): _18.QueryServiceDescriptor;
                    toJSON(message: _18.QueryServiceDescriptor): {
                        fullname: string;
                        isModule: boolean;
                        methods: {
                            name: string;
                            fullQueryPath: string;
                        }[];
                    };
                    fromPartial(object: Partial<_18.QueryServiceDescriptor>): _18.QueryServiceDescriptor;
                    fromAmino(object: _18.QueryServiceDescriptorAmino): _18.QueryServiceDescriptor;
                    toAmino(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _18.QueryServiceDescriptorAminoMsg): _18.QueryServiceDescriptor;
                    toAminoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryServiceDescriptorProtoMsg): _18.QueryServiceDescriptor;
                    toProto(message: _18.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryServiceDescriptor): _18.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _18.QueryMethodDescriptor;
                    isSDK(o: any): o is _18.QueryMethodDescriptorSDKType;
                    isAmino(o: any): o is _18.QueryMethodDescriptorAmino;
                    encode(message: _18.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _18.QueryMethodDescriptor;
                    fromJSON(object: any): _18.QueryMethodDescriptor;
                    toJSON(message: _18.QueryMethodDescriptor): {
                        name: string;
                        fullQueryPath: string;
                    };
                    fromPartial(object: Partial<_18.QueryMethodDescriptor>): _18.QueryMethodDescriptor;
                    fromAmino(object: _18.QueryMethodDescriptorAmino): _18.QueryMethodDescriptor;
                    toAmino(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _18.QueryMethodDescriptorAminoMsg): _18.QueryMethodDescriptor;
                    toAminoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _18.QueryMethodDescriptorProtoMsg): _18.QueryMethodDescriptor;
                    toProto(message: _18.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _18.QueryMethodDescriptor): _18.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _19.Coin;
                isSDK(o: any): o is _19.CoinSDKType;
                isAmino(o: any): o is _19.CoinAmino;
                encode(message: _19.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.Coin;
                fromJSON(object: any): _19.Coin;
                toJSON(message: _19.Coin): {
                    denom: string;
                    amount: string;
                };
                fromPartial(object: Partial<_19.Coin>): _19.Coin;
                fromAmino(object: _19.CoinAmino): _19.Coin;
                toAmino(message: _19.Coin): _19.CoinAmino;
                fromAminoMsg(object: _19.CoinAminoMsg): _19.Coin;
                toAminoMsg(message: _19.Coin): _19.CoinAminoMsg;
                fromProtoMsg(message: _19.CoinProtoMsg): _19.Coin;
                toProto(message: _19.Coin): Uint8Array;
                toProtoMsg(message: _19.Coin): _19.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _19.DecCoin;
                isSDK(o: any): o is _19.DecCoinSDKType;
                isAmino(o: any): o is _19.DecCoinAmino;
                encode(message: _19.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.DecCoin;
                fromJSON(object: any): _19.DecCoin;
                toJSON(message: _19.DecCoin): {
                    denom: string;
                    amount: string;
                };
                fromPartial(object: Partial<_19.DecCoin>): _19.DecCoin;
                fromAmino(object: _19.DecCoinAmino): _19.DecCoin;
                toAmino(message: _19.DecCoin): _19.DecCoinAmino;
                fromAminoMsg(object: _19.DecCoinAminoMsg): _19.DecCoin;
                toAminoMsg(message: _19.DecCoin): _19.DecCoinAminoMsg;
                fromProtoMsg(message: _19.DecCoinProtoMsg): _19.DecCoin;
                toProto(message: _19.DecCoin): Uint8Array;
                toProtoMsg(message: _19.DecCoin): _19.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _19.IntProto;
                isSDK(o: any): o is _19.IntProtoSDKType;
                isAmino(o: any): o is _19.IntProtoAmino;
                encode(message: _19.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.IntProto;
                fromJSON(object: any): _19.IntProto;
                toJSON(message: _19.IntProto): {
                    int: string;
                };
                fromPartial(object: Partial<_19.IntProto>): _19.IntProto;
                fromAmino(object: _19.IntProtoAmino): _19.IntProto;
                toAmino(message: _19.IntProto): _19.IntProtoAmino;
                fromAminoMsg(object: _19.IntProtoAminoMsg): _19.IntProto;
                toAminoMsg(message: _19.IntProto): _19.IntProtoAminoMsg;
                fromProtoMsg(message: _19.IntProtoProtoMsg): _19.IntProto;
                toProto(message: _19.IntProto): Uint8Array;
                toProtoMsg(message: _19.IntProto): _19.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _19.DecProto;
                isSDK(o: any): o is _19.DecProtoSDKType;
                isAmino(o: any): o is _19.DecProtoAmino;
                encode(message: _19.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _19.DecProto;
                fromJSON(object: any): _19.DecProto;
                toJSON(message: _19.DecProto): {
                    dec: string;
                };
                fromPartial(object: Partial<_19.DecProto>): _19.DecProto;
                fromAmino(object: _19.DecProtoAmino): _19.DecProto;
                toAmino(message: _19.DecProto): _19.DecProtoAmino;
                fromAminoMsg(object: _19.DecProtoAminoMsg): _19.DecProto;
                toAminoMsg(message: _19.DecProto): _19.DecProtoAminoMsg;
                fromProtoMsg(message: _19.DecProtoProtoMsg): _19.DecProto;
                toProto(message: _19.DecProto): Uint8Array;
                toProtoMsg(message: _19.DecProto): _19.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _20.PubKey;
                isSDK(o: any): o is _20.PubKeySDKType;
                isAmino(o: any): o is _20.PubKeyAmino;
                encode(message: _20.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.PubKey;
                fromJSON(object: any): _20.PubKey;
                toJSON(message: _20.PubKey): {
                    key: string;
                };
                fromPartial(object: Partial<_20.PubKey>): _20.PubKey;
                fromAmino(object: _20.PubKeyAmino): _20.PubKey;
                toAmino(message: _20.PubKey): _20.PubKeyAmino;
                fromAminoMsg(object: _20.PubKeyAminoMsg): _20.PubKey;
                toAminoMsg(message: _20.PubKey): _20.PubKeyAminoMsg;
                fromProtoMsg(message: _20.PubKeyProtoMsg): _20.PubKey;
                toProto(message: _20.PubKey): Uint8Array;
                toProtoMsg(message: _20.PubKey): _20.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _20.PrivKey;
                isSDK(o: any): o is _20.PrivKeySDKType;
                isAmino(o: any): o is _20.PrivKeyAmino;
                encode(message: _20.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _20.PrivKey;
                fromJSON(object: any): _20.PrivKey;
                toJSON(message: _20.PrivKey): {
                    key: string;
                };
                fromPartial(object: Partial<_20.PrivKey>): _20.PrivKey;
                fromAmino(object: _20.PrivKeyAmino): _20.PrivKey;
                toAmino(message: _20.PrivKey): _20.PrivKeyAmino;
                fromAminoMsg(object: _20.PrivKeyAminoMsg): _20.PrivKey;
                toAminoMsg(message: _20.PrivKey): _20.PrivKeyAminoMsg;
                fromProtoMsg(message: _20.PrivKeyProtoMsg): _20.PrivKey;
                toProto(message: _20.PrivKey): Uint8Array;
                toProtoMsg(message: _20.PrivKey): _20.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _21.BIP44Params;
                    isSDK(o: any): o is _21.BIP44ParamsSDKType;
                    isAmino(o: any): o is _21.BIP44ParamsAmino;
                    encode(message: _21.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _21.BIP44Params;
                    fromJSON(object: any): _21.BIP44Params;
                    toJSON(message: _21.BIP44Params): {
                        purpose: number;
                        coinType: number;
                        account: number;
                        change: boolean;
                        addressIndex: number;
                    };
                    fromPartial(object: Partial<_21.BIP44Params>): _21.BIP44Params;
                    fromAmino(object: _21.BIP44ParamsAmino): _21.BIP44Params;
                    toAmino(message: _21.BIP44Params): _21.BIP44ParamsAmino;
                    fromAminoMsg(object: _21.BIP44ParamsAminoMsg): _21.BIP44Params;
                    toAminoMsg(message: _21.BIP44Params): _21.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _21.BIP44ParamsProtoMsg): _21.BIP44Params;
                    toProto(message: _21.BIP44Params): Uint8Array;
                    toProtoMsg(message: _21.BIP44Params): _21.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _22.Record;
                    isSDK(o: any): o is _22.RecordSDKType;
                    isAmino(o: any): o is _22.RecordAmino;
                    encode(message: _22.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Record;
                    fromJSON(object: any): _22.Record;
                    toJSON(message: _22.Record): {
                        name: string;
                        pubKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        local?: {
                            privKey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            privKeyType: string;
                        };
                        ledger?: {
                            path?: {
                                purpose: number;
                                coinType: number;
                                account: number;
                                change: boolean;
                                addressIndex: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    };
                    fromPartial(object: Partial<_22.Record>): _22.Record;
                    fromAmino(object: _22.RecordAmino): _22.Record;
                    toAmino(message: _22.Record): _22.RecordAmino;
                    fromAminoMsg(object: _22.RecordAminoMsg): _22.Record;
                    toAminoMsg(message: _22.Record): _22.RecordAminoMsg;
                    fromProtoMsg(message: _22.RecordProtoMsg): _22.Record;
                    toProto(message: _22.Record): Uint8Array;
                    toProtoMsg(message: _22.Record): _22.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _22.Record_Local;
                    isSDK(o: any): o is _22.Record_LocalSDKType;
                    isAmino(o: any): o is _22.Record_LocalAmino;
                    encode(message: _22.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Record_Local;
                    fromJSON(object: any): _22.Record_Local;
                    toJSON(message: _22.Record_Local): {
                        privKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        privKeyType: string;
                    };
                    fromPartial(object: Partial<_22.Record_Local>): _22.Record_Local;
                    fromAmino(object: _22.Record_LocalAmino): _22.Record_Local;
                    toAmino(message: _22.Record_Local): _22.Record_LocalAmino;
                    fromAminoMsg(object: _22.Record_LocalAminoMsg): _22.Record_Local;
                    toAminoMsg(message: _22.Record_Local): _22.Record_LocalAminoMsg;
                    fromProtoMsg(message: _22.Record_LocalProtoMsg): _22.Record_Local;
                    toProto(message: _22.Record_Local): Uint8Array;
                    toProtoMsg(message: _22.Record_Local): _22.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _22.Record_Ledger;
                    isSDK(o: any): o is _22.Record_LedgerSDKType;
                    isAmino(o: any): o is _22.Record_LedgerAmino;
                    encode(message: _22.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Record_Ledger;
                    fromJSON(object: any): _22.Record_Ledger;
                    toJSON(message: _22.Record_Ledger): {
                        path?: {
                            purpose: number;
                            coinType: number;
                            account: number;
                            change: boolean;
                            addressIndex: number;
                        };
                    };
                    fromPartial(object: Partial<_22.Record_Ledger>): _22.Record_Ledger;
                    fromAmino(object: _22.Record_LedgerAmino): _22.Record_Ledger;
                    toAmino(message: _22.Record_Ledger): _22.Record_LedgerAmino;
                    fromAminoMsg(object: _22.Record_LedgerAminoMsg): _22.Record_Ledger;
                    toAminoMsg(message: _22.Record_Ledger): _22.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _22.Record_LedgerProtoMsg): _22.Record_Ledger;
                    toProto(message: _22.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _22.Record_Ledger): _22.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _22.Record_Multi;
                    isSDK(o: any): o is _22.Record_MultiSDKType;
                    isAmino(o: any): o is _22.Record_MultiAmino;
                    encode(_: _22.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Record_Multi;
                    fromJSON(_: any): _22.Record_Multi;
                    toJSON(_: _22.Record_Multi): {};
                    fromPartial(_: Partial<_22.Record_Multi>): _22.Record_Multi;
                    fromAmino(_: _22.Record_MultiAmino): _22.Record_Multi;
                    toAmino(_: _22.Record_Multi): _22.Record_MultiAmino;
                    fromAminoMsg(object: _22.Record_MultiAminoMsg): _22.Record_Multi;
                    toAminoMsg(message: _22.Record_Multi): _22.Record_MultiAminoMsg;
                    fromProtoMsg(message: _22.Record_MultiProtoMsg): _22.Record_Multi;
                    toProto(message: _22.Record_Multi): Uint8Array;
                    toProtoMsg(message: _22.Record_Multi): _22.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _22.Record_Offline;
                    isSDK(o: any): o is _22.Record_OfflineSDKType;
                    isAmino(o: any): o is _22.Record_OfflineAmino;
                    encode(_: _22.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _22.Record_Offline;
                    fromJSON(_: any): _22.Record_Offline;
                    toJSON(_: _22.Record_Offline): {};
                    fromPartial(_: Partial<_22.Record_Offline>): _22.Record_Offline;
                    fromAmino(_: _22.Record_OfflineAmino): _22.Record_Offline;
                    toAmino(_: _22.Record_Offline): _22.Record_OfflineAmino;
                    fromAminoMsg(object: _22.Record_OfflineAminoMsg): _22.Record_Offline;
                    toAminoMsg(message: _22.Record_Offline): _22.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _22.Record_OfflineProtoMsg): _22.Record_Offline;
                    toProto(message: _22.Record_Offline): Uint8Array;
                    toProtoMsg(message: _22.Record_Offline): _22.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _23.LegacyAminoPubKey;
                isSDK(o: any): o is _23.LegacyAminoPubKeySDKType;
                isAmino(o: any): o is _23.LegacyAminoPubKeyAmino;
                encode(message: _23.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _23.LegacyAminoPubKey;
                fromJSON(object: any): _23.LegacyAminoPubKey;
                toJSON(message: _23.LegacyAminoPubKey): {
                    threshold: number;
                    publicKeys: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[];
                };
                fromPartial(object: Partial<_23.LegacyAminoPubKey>): _23.LegacyAminoPubKey;
                fromAmino(object: _23.LegacyAminoPubKeyAmino): _23.LegacyAminoPubKey;
                toAmino(message: _23.LegacyAminoPubKey): _23.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _23.LegacyAminoPubKeyAminoMsg): _23.LegacyAminoPubKey;
                toAminoMsg(message: _23.LegacyAminoPubKey): _23.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _23.LegacyAminoPubKeyProtoMsg): _23.LegacyAminoPubKey;
                toProto(message: _23.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _23.LegacyAminoPubKey): _23.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.PubKey;
                isSDK(o: any): o is _24.PubKeySDKType;
                isAmino(o: any): o is _24.PubKeyAmino;
                encode(message: _24.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.PubKey;
                fromJSON(object: any): _24.PubKey;
                toJSON(message: _24.PubKey): {
                    key: string;
                };
                fromPartial(object: Partial<_24.PubKey>): _24.PubKey;
                fromAmino(object: _24.PubKeyAmino): _24.PubKey;
                toAmino(message: _24.PubKey): _24.PubKeyAmino;
                fromAminoMsg(object: _24.PubKeyAminoMsg): _24.PubKey;
                toAminoMsg(message: _24.PubKey): _24.PubKeyAminoMsg;
                fromProtoMsg(message: _24.PubKeyProtoMsg): _24.PubKey;
                toProto(message: _24.PubKey): Uint8Array;
                toProtoMsg(message: _24.PubKey): _24.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.PrivKey;
                isSDK(o: any): o is _24.PrivKeySDKType;
                isAmino(o: any): o is _24.PrivKeyAmino;
                encode(message: _24.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _24.PrivKey;
                fromJSON(object: any): _24.PrivKey;
                toJSON(message: _24.PrivKey): {
                    key: string;
                };
                fromPartial(object: Partial<_24.PrivKey>): _24.PrivKey;
                fromAmino(object: _24.PrivKeyAmino): _24.PrivKey;
                toAmino(message: _24.PrivKey): _24.PrivKeyAmino;
                fromAminoMsg(object: _24.PrivKeyAminoMsg): _24.PrivKey;
                toAminoMsg(message: _24.PrivKey): _24.PrivKeyAminoMsg;
                fromProtoMsg(message: _24.PrivKeyProtoMsg): _24.PrivKey;
                toProto(message: _24.PrivKey): Uint8Array;
                toProtoMsg(message: _24.PrivKey): _24.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.PubKey;
                isSDK(o: any): o is _25.PubKeySDKType;
                isAmino(o: any): o is _25.PubKeyAmino;
                encode(message: _25.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.PubKey;
                fromJSON(object: any): _25.PubKey;
                toJSON(message: _25.PubKey): {
                    key: string;
                };
                fromPartial(object: Partial<_25.PubKey>): _25.PubKey;
                fromAmino(object: _25.PubKeyAmino): _25.PubKey;
                toAmino(message: _25.PubKey): _25.PubKeyAmino;
                fromAminoMsg(object: _25.PubKeyAminoMsg): _25.PubKey;
                toAminoMsg(message: _25.PubKey): _25.PubKeyAminoMsg;
                fromProtoMsg(message: _25.PubKeyProtoMsg): _25.PubKey;
                toProto(message: _25.PubKey): Uint8Array;
                toProtoMsg(message: _25.PubKey): _25.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.PrivKey;
                isSDK(o: any): o is _25.PrivKeySDKType;
                isAmino(o: any): o is _25.PrivKeyAmino;
                encode(message: _25.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _25.PrivKey;
                fromJSON(object: any): _25.PrivKey;
                toJSON(message: _25.PrivKey): {
                    secret: string;
                };
                fromPartial(object: Partial<_25.PrivKey>): _25.PrivKey;
                fromAmino(object: _25.PrivKeyAmino): _25.PrivKey;
                toAmino(message: _25.PrivKey): _25.PrivKeyAmino;
                fromAminoMsg(object: _25.PrivKeyAminoMsg): _25.PrivKey;
                toAminoMsg(message: _25.PrivKey): _25.PrivKeyAminoMsg;
                fromProtoMsg(message: _25.PrivKeyProtoMsg): _25.PrivKey;
                toProto(message: _25.PrivKey): Uint8Array;
                toProtoMsg(message: _25.PrivKey): _25.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                validatorOutstandingRewards(request: _28.QueryValidatorOutstandingRewardsRequest): Promise<_28.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _28.QueryValidatorCommissionRequest): Promise<_28.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _28.QueryValidatorSlashesRequest): Promise<_28.QueryValidatorSlashesResponse>;
                delegationRewards(request: _28.QueryDelegationRewardsRequest): Promise<_28.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _28.QueryDelegationTotalRewardsRequest): Promise<_28.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _28.QueryDelegatorValidatorsRequest): Promise<_28.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _28.QueryDelegatorWithdrawAddressRequest): Promise<_28.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _28.QueryCommunityPoolRequest): Promise<_28.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _29.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _29.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _29.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _29.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            withdrawAddress: string;
                        };
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            validatorAddress: string;
                        };
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: {
                            validatorAddress: string;
                        };
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: {
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            depositor: string;
                        };
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _29.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _29.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _29.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _29.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _29.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _29.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _29.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _29.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _29.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _29.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _29.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _29.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSetWithdrawAddress) => _29.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _29.MsgSetWithdrawAddressAmino) => _29.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _29.MsgWithdrawDelegatorReward) => _29.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _29.MsgWithdrawDelegatorRewardAmino) => _29.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _29.MsgWithdrawValidatorCommission) => _29.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _29.MsgWithdrawValidatorCommissionAmino) => _29.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _29.MsgFundCommunityPool) => _29.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _29.MsgFundCommunityPoolAmino) => _29.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgSetWithdrawAddress;
                isSDK(o: any): o is _29.MsgSetWithdrawAddressSDKType;
                isAmino(o: any): o is _29.MsgSetWithdrawAddressAmino;
                encode(message: _29.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgSetWithdrawAddress;
                fromJSON(object: any): _29.MsgSetWithdrawAddress;
                toJSON(message: _29.MsgSetWithdrawAddress): {
                    delegatorAddress: string;
                    withdrawAddress: string;
                };
                fromPartial(object: Partial<_29.MsgSetWithdrawAddress>): _29.MsgSetWithdrawAddress;
                fromAmino(object: _29.MsgSetWithdrawAddressAmino): _29.MsgSetWithdrawAddress;
                toAmino(message: _29.MsgSetWithdrawAddress): _29.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _29.MsgSetWithdrawAddressAminoMsg): _29.MsgSetWithdrawAddress;
                toAminoMsg(message: _29.MsgSetWithdrawAddress): _29.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _29.MsgSetWithdrawAddressProtoMsg): _29.MsgSetWithdrawAddress;
                toProto(message: _29.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _29.MsgSetWithdrawAddress): _29.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgSetWithdrawAddressResponse;
                isSDK(o: any): o is _29.MsgSetWithdrawAddressResponseSDKType;
                isAmino(o: any): o is _29.MsgSetWithdrawAddressResponseAmino;
                encode(_: _29.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _29.MsgSetWithdrawAddressResponse;
                toJSON(_: _29.MsgSetWithdrawAddressResponse): {};
                fromPartial(_: Partial<_29.MsgSetWithdrawAddressResponse>): _29.MsgSetWithdrawAddressResponse;
                fromAmino(_: _29.MsgSetWithdrawAddressResponseAmino): _29.MsgSetWithdrawAddressResponse;
                toAmino(_: _29.MsgSetWithdrawAddressResponse): _29.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _29.MsgSetWithdrawAddressResponseAminoMsg): _29.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _29.MsgSetWithdrawAddressResponse): _29.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSetWithdrawAddressResponseProtoMsg): _29.MsgSetWithdrawAddressResponse;
                toProto(message: _29.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSetWithdrawAddressResponse): _29.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgWithdrawDelegatorReward;
                isSDK(o: any): o is _29.MsgWithdrawDelegatorRewardSDKType;
                isAmino(o: any): o is _29.MsgWithdrawDelegatorRewardAmino;
                encode(message: _29.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _29.MsgWithdrawDelegatorReward;
                toJSON(message: _29.MsgWithdrawDelegatorReward): {
                    delegatorAddress: string;
                    validatorAddress: string;
                };
                fromPartial(object: Partial<_29.MsgWithdrawDelegatorReward>): _29.MsgWithdrawDelegatorReward;
                fromAmino(object: _29.MsgWithdrawDelegatorRewardAmino): _29.MsgWithdrawDelegatorReward;
                toAmino(message: _29.MsgWithdrawDelegatorReward): _29.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _29.MsgWithdrawDelegatorRewardAminoMsg): _29.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _29.MsgWithdrawDelegatorReward): _29.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawDelegatorRewardProtoMsg): _29.MsgWithdrawDelegatorReward;
                toProto(message: _29.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawDelegatorReward): _29.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgWithdrawDelegatorRewardResponse;
                isSDK(o: any): o is _29.MsgWithdrawDelegatorRewardResponseSDKType;
                isAmino(o: any): o is _29.MsgWithdrawDelegatorRewardResponseAmino;
                encode(message: _29.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _29.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _29.MsgWithdrawDelegatorRewardResponse): {
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_29.MsgWithdrawDelegatorRewardResponse>): _29.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _29.MsgWithdrawDelegatorRewardResponseAmino): _29.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _29.MsgWithdrawDelegatorRewardResponse): _29.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _29.MsgWithdrawDelegatorRewardResponseAminoMsg): _29.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _29.MsgWithdrawDelegatorRewardResponse): _29.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawDelegatorRewardResponseProtoMsg): _29.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _29.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawDelegatorRewardResponse): _29.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgWithdrawValidatorCommission;
                isSDK(o: any): o is _29.MsgWithdrawValidatorCommissionSDKType;
                isAmino(o: any): o is _29.MsgWithdrawValidatorCommissionAmino;
                encode(message: _29.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _29.MsgWithdrawValidatorCommission;
                toJSON(message: _29.MsgWithdrawValidatorCommission): {
                    validatorAddress: string;
                };
                fromPartial(object: Partial<_29.MsgWithdrawValidatorCommission>): _29.MsgWithdrawValidatorCommission;
                fromAmino(object: _29.MsgWithdrawValidatorCommissionAmino): _29.MsgWithdrawValidatorCommission;
                toAmino(message: _29.MsgWithdrawValidatorCommission): _29.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _29.MsgWithdrawValidatorCommissionAminoMsg): _29.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _29.MsgWithdrawValidatorCommission): _29.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawValidatorCommissionProtoMsg): _29.MsgWithdrawValidatorCommission;
                toProto(message: _29.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawValidatorCommission): _29.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgWithdrawValidatorCommissionResponse;
                isSDK(o: any): o is _29.MsgWithdrawValidatorCommissionResponseSDKType;
                isAmino(o: any): o is _29.MsgWithdrawValidatorCommissionResponseAmino;
                encode(message: _29.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _29.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _29.MsgWithdrawValidatorCommissionResponse): {
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_29.MsgWithdrawValidatorCommissionResponse>): _29.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _29.MsgWithdrawValidatorCommissionResponseAmino): _29.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _29.MsgWithdrawValidatorCommissionResponse): _29.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _29.MsgWithdrawValidatorCommissionResponseAminoMsg): _29.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _29.MsgWithdrawValidatorCommissionResponse): _29.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _29.MsgWithdrawValidatorCommissionResponseProtoMsg): _29.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _29.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _29.MsgWithdrawValidatorCommissionResponse): _29.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgFundCommunityPool;
                isSDK(o: any): o is _29.MsgFundCommunityPoolSDKType;
                isAmino(o: any): o is _29.MsgFundCommunityPoolAmino;
                encode(message: _29.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgFundCommunityPool;
                fromJSON(object: any): _29.MsgFundCommunityPool;
                toJSON(message: _29.MsgFundCommunityPool): {
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                    depositor: string;
                };
                fromPartial(object: Partial<_29.MsgFundCommunityPool>): _29.MsgFundCommunityPool;
                fromAmino(object: _29.MsgFundCommunityPoolAmino): _29.MsgFundCommunityPool;
                toAmino(message: _29.MsgFundCommunityPool): _29.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _29.MsgFundCommunityPoolAminoMsg): _29.MsgFundCommunityPool;
                toAminoMsg(message: _29.MsgFundCommunityPool): _29.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _29.MsgFundCommunityPoolProtoMsg): _29.MsgFundCommunityPool;
                toProto(message: _29.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _29.MsgFundCommunityPool): _29.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.MsgFundCommunityPoolResponse;
                isSDK(o: any): o is _29.MsgFundCommunityPoolResponseSDKType;
                isAmino(o: any): o is _29.MsgFundCommunityPoolResponseAmino;
                encode(_: _29.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _29.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _29.MsgFundCommunityPoolResponse;
                toJSON(_: _29.MsgFundCommunityPoolResponse): {};
                fromPartial(_: Partial<_29.MsgFundCommunityPoolResponse>): _29.MsgFundCommunityPoolResponse;
                fromAmino(_: _29.MsgFundCommunityPoolResponseAmino): _29.MsgFundCommunityPoolResponse;
                toAmino(_: _29.MsgFundCommunityPoolResponse): _29.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _29.MsgFundCommunityPoolResponseAminoMsg): _29.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _29.MsgFundCommunityPoolResponse): _29.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _29.MsgFundCommunityPoolResponseProtoMsg): _29.MsgFundCommunityPoolResponse;
                toProto(message: _29.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _29.MsgFundCommunityPoolResponse): _29.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryParamsRequest;
                isSDK(o: any): o is _28.QueryParamsRequestSDKType;
                isAmino(o: any): o is _28.QueryParamsRequestAmino;
                encode(_: _28.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryParamsRequest;
                fromJSON(_: any): _28.QueryParamsRequest;
                toJSON(_: _28.QueryParamsRequest): {};
                fromPartial(_: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
                fromAmino(_: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(_: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryParamsResponse;
                isSDK(o: any): o is _28.QueryParamsResponseSDKType;
                isAmino(o: any): o is _28.QueryParamsResponseAmino;
                encode(message: _28.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryParamsResponse;
                fromJSON(object: any): _28.QueryParamsResponse;
                toJSON(message: _28.QueryParamsResponse): {
                    params: {
                        communityTax: string;
                        baseProposerReward: string;
                        bonusProposerReward: string;
                        withdrawAddrEnabled: boolean;
                    };
                };
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryValidatorOutstandingRewardsRequest;
                isSDK(o: any): o is _28.QueryValidatorOutstandingRewardsRequestSDKType;
                isAmino(o: any): o is _28.QueryValidatorOutstandingRewardsRequestAmino;
                encode(message: _28.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _28.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _28.QueryValidatorOutstandingRewardsRequest): {
                    validatorAddress: string;
                };
                fromPartial(object: Partial<_28.QueryValidatorOutstandingRewardsRequest>): _28.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _28.QueryValidatorOutstandingRewardsRequestAmino): _28.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _28.QueryValidatorOutstandingRewardsRequest): _28.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _28.QueryValidatorOutstandingRewardsRequestAminoMsg): _28.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _28.QueryValidatorOutstandingRewardsRequest): _28.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorOutstandingRewardsRequestProtoMsg): _28.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _28.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorOutstandingRewardsRequest): _28.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryValidatorOutstandingRewardsResponse;
                isSDK(o: any): o is _28.QueryValidatorOutstandingRewardsResponseSDKType;
                isAmino(o: any): o is _28.QueryValidatorOutstandingRewardsResponseAmino;
                encode(message: _28.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _28.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _28.QueryValidatorOutstandingRewardsResponse): {
                    rewards: {
                        rewards: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_28.QueryValidatorOutstandingRewardsResponse>): _28.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _28.QueryValidatorOutstandingRewardsResponseAmino): _28.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _28.QueryValidatorOutstandingRewardsResponse): _28.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _28.QueryValidatorOutstandingRewardsResponseAminoMsg): _28.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _28.QueryValidatorOutstandingRewardsResponse): _28.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorOutstandingRewardsResponseProtoMsg): _28.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _28.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorOutstandingRewardsResponse): _28.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryValidatorCommissionRequest;
                isSDK(o: any): o is _28.QueryValidatorCommissionRequestSDKType;
                isAmino(o: any): o is _28.QueryValidatorCommissionRequestAmino;
                encode(message: _28.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryValidatorCommissionRequest;
                fromJSON(object: any): _28.QueryValidatorCommissionRequest;
                toJSON(message: _28.QueryValidatorCommissionRequest): {
                    validatorAddress: string;
                };
                fromPartial(object: Partial<_28.QueryValidatorCommissionRequest>): _28.QueryValidatorCommissionRequest;
                fromAmino(object: _28.QueryValidatorCommissionRequestAmino): _28.QueryValidatorCommissionRequest;
                toAmino(message: _28.QueryValidatorCommissionRequest): _28.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _28.QueryValidatorCommissionRequestAminoMsg): _28.QueryValidatorCommissionRequest;
                toAminoMsg(message: _28.QueryValidatorCommissionRequest): _28.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorCommissionRequestProtoMsg): _28.QueryValidatorCommissionRequest;
                toProto(message: _28.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorCommissionRequest): _28.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryValidatorCommissionResponse;
                isSDK(o: any): o is _28.QueryValidatorCommissionResponseSDKType;
                isAmino(o: any): o is _28.QueryValidatorCommissionResponseAmino;
                encode(message: _28.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryValidatorCommissionResponse;
                fromJSON(object: any): _28.QueryValidatorCommissionResponse;
                toJSON(message: _28.QueryValidatorCommissionResponse): {
                    commission: {
                        commission: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_28.QueryValidatorCommissionResponse>): _28.QueryValidatorCommissionResponse;
                fromAmino(object: _28.QueryValidatorCommissionResponseAmino): _28.QueryValidatorCommissionResponse;
                toAmino(message: _28.QueryValidatorCommissionResponse): _28.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _28.QueryValidatorCommissionResponseAminoMsg): _28.QueryValidatorCommissionResponse;
                toAminoMsg(message: _28.QueryValidatorCommissionResponse): _28.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorCommissionResponseProtoMsg): _28.QueryValidatorCommissionResponse;
                toProto(message: _28.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorCommissionResponse): _28.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryValidatorSlashesRequest;
                isSDK(o: any): o is _28.QueryValidatorSlashesRequestSDKType;
                isAmino(o: any): o is _28.QueryValidatorSlashesRequestAmino;
                encode(message: _28.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryValidatorSlashesRequest;
                fromJSON(object: any): _28.QueryValidatorSlashesRequest;
                toJSON(message: _28.QueryValidatorSlashesRequest): {
                    validatorAddress: string;
                    startingHeight: string;
                    endingHeight: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_28.QueryValidatorSlashesRequest>): _28.QueryValidatorSlashesRequest;
                fromAmino(object: _28.QueryValidatorSlashesRequestAmino): _28.QueryValidatorSlashesRequest;
                toAmino(message: _28.QueryValidatorSlashesRequest): _28.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _28.QueryValidatorSlashesRequestAminoMsg): _28.QueryValidatorSlashesRequest;
                toAminoMsg(message: _28.QueryValidatorSlashesRequest): _28.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorSlashesRequestProtoMsg): _28.QueryValidatorSlashesRequest;
                toProto(message: _28.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorSlashesRequest): _28.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryValidatorSlashesResponse;
                isSDK(o: any): o is _28.QueryValidatorSlashesResponseSDKType;
                isAmino(o: any): o is _28.QueryValidatorSlashesResponseAmino;
                encode(message: _28.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryValidatorSlashesResponse;
                fromJSON(object: any): _28.QueryValidatorSlashesResponse;
                toJSON(message: _28.QueryValidatorSlashesResponse): {
                    slashes: {
                        validatorPeriod: string;
                        fraction: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_28.QueryValidatorSlashesResponse>): _28.QueryValidatorSlashesResponse;
                fromAmino(object: _28.QueryValidatorSlashesResponseAmino): _28.QueryValidatorSlashesResponse;
                toAmino(message: _28.QueryValidatorSlashesResponse): _28.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _28.QueryValidatorSlashesResponseAminoMsg): _28.QueryValidatorSlashesResponse;
                toAminoMsg(message: _28.QueryValidatorSlashesResponse): _28.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _28.QueryValidatorSlashesResponseProtoMsg): _28.QueryValidatorSlashesResponse;
                toProto(message: _28.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryValidatorSlashesResponse): _28.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegationRewardsRequest;
                isSDK(o: any): o is _28.QueryDelegationRewardsRequestSDKType;
                isAmino(o: any): o is _28.QueryDelegationRewardsRequestAmino;
                encode(message: _28.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegationRewardsRequest;
                fromJSON(object: any): _28.QueryDelegationRewardsRequest;
                toJSON(message: _28.QueryDelegationRewardsRequest): {
                    delegatorAddress: string;
                    validatorAddress: string;
                };
                fromPartial(object: Partial<_28.QueryDelegationRewardsRequest>): _28.QueryDelegationRewardsRequest;
                fromAmino(object: _28.QueryDelegationRewardsRequestAmino): _28.QueryDelegationRewardsRequest;
                toAmino(message: _28.QueryDelegationRewardsRequest): _28.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _28.QueryDelegationRewardsRequestAminoMsg): _28.QueryDelegationRewardsRequest;
                toAminoMsg(message: _28.QueryDelegationRewardsRequest): _28.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationRewardsRequestProtoMsg): _28.QueryDelegationRewardsRequest;
                toProto(message: _28.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationRewardsRequest): _28.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegationRewardsResponse;
                isSDK(o: any): o is _28.QueryDelegationRewardsResponseSDKType;
                isAmino(o: any): o is _28.QueryDelegationRewardsResponseAmino;
                encode(message: _28.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegationRewardsResponse;
                fromJSON(object: any): _28.QueryDelegationRewardsResponse;
                toJSON(message: _28.QueryDelegationRewardsResponse): {
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_28.QueryDelegationRewardsResponse>): _28.QueryDelegationRewardsResponse;
                fromAmino(object: _28.QueryDelegationRewardsResponseAmino): _28.QueryDelegationRewardsResponse;
                toAmino(message: _28.QueryDelegationRewardsResponse): _28.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _28.QueryDelegationRewardsResponseAminoMsg): _28.QueryDelegationRewardsResponse;
                toAminoMsg(message: _28.QueryDelegationRewardsResponse): _28.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationRewardsResponseProtoMsg): _28.QueryDelegationRewardsResponse;
                toProto(message: _28.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationRewardsResponse): _28.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegationTotalRewardsRequest;
                isSDK(o: any): o is _28.QueryDelegationTotalRewardsRequestSDKType;
                isAmino(o: any): o is _28.QueryDelegationTotalRewardsRequestAmino;
                encode(message: _28.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _28.QueryDelegationTotalRewardsRequest;
                toJSON(message: _28.QueryDelegationTotalRewardsRequest): {
                    delegatorAddress: string;
                };
                fromPartial(object: Partial<_28.QueryDelegationTotalRewardsRequest>): _28.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _28.QueryDelegationTotalRewardsRequestAmino): _28.QueryDelegationTotalRewardsRequest;
                toAmino(message: _28.QueryDelegationTotalRewardsRequest): _28.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _28.QueryDelegationTotalRewardsRequestAminoMsg): _28.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _28.QueryDelegationTotalRewardsRequest): _28.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationTotalRewardsRequestProtoMsg): _28.QueryDelegationTotalRewardsRequest;
                toProto(message: _28.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationTotalRewardsRequest): _28.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegationTotalRewardsResponse;
                isSDK(o: any): o is _28.QueryDelegationTotalRewardsResponseSDKType;
                isAmino(o: any): o is _28.QueryDelegationTotalRewardsResponseAmino;
                encode(message: _28.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _28.QueryDelegationTotalRewardsResponse;
                toJSON(message: _28.QueryDelegationTotalRewardsResponse): {
                    rewards: {
                        validatorAddress: string;
                        reward: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                    total: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_28.QueryDelegationTotalRewardsResponse>): _28.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _28.QueryDelegationTotalRewardsResponseAmino): _28.QueryDelegationTotalRewardsResponse;
                toAmino(message: _28.QueryDelegationTotalRewardsResponse): _28.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _28.QueryDelegationTotalRewardsResponseAminoMsg): _28.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _28.QueryDelegationTotalRewardsResponse): _28.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegationTotalRewardsResponseProtoMsg): _28.QueryDelegationTotalRewardsResponse;
                toProto(message: _28.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegationTotalRewardsResponse): _28.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegatorValidatorsRequest;
                isSDK(o: any): o is _28.QueryDelegatorValidatorsRequestSDKType;
                isAmino(o: any): o is _28.QueryDelegatorValidatorsRequestAmino;
                encode(message: _28.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _28.QueryDelegatorValidatorsRequest;
                toJSON(message: _28.QueryDelegatorValidatorsRequest): {
                    delegatorAddress: string;
                };
                fromPartial(object: Partial<_28.QueryDelegatorValidatorsRequest>): _28.QueryDelegatorValidatorsRequest;
                fromAmino(object: _28.QueryDelegatorValidatorsRequestAmino): _28.QueryDelegatorValidatorsRequest;
                toAmino(message: _28.QueryDelegatorValidatorsRequest): _28.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _28.QueryDelegatorValidatorsRequestAminoMsg): _28.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _28.QueryDelegatorValidatorsRequest): _28.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorValidatorsRequestProtoMsg): _28.QueryDelegatorValidatorsRequest;
                toProto(message: _28.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorValidatorsRequest): _28.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegatorValidatorsResponse;
                isSDK(o: any): o is _28.QueryDelegatorValidatorsResponseSDKType;
                isAmino(o: any): o is _28.QueryDelegatorValidatorsResponseAmino;
                encode(message: _28.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _28.QueryDelegatorValidatorsResponse;
                toJSON(message: _28.QueryDelegatorValidatorsResponse): {
                    validators: string[];
                };
                fromPartial(object: Partial<_28.QueryDelegatorValidatorsResponse>): _28.QueryDelegatorValidatorsResponse;
                fromAmino(object: _28.QueryDelegatorValidatorsResponseAmino): _28.QueryDelegatorValidatorsResponse;
                toAmino(message: _28.QueryDelegatorValidatorsResponse): _28.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _28.QueryDelegatorValidatorsResponseAminoMsg): _28.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _28.QueryDelegatorValidatorsResponse): _28.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorValidatorsResponseProtoMsg): _28.QueryDelegatorValidatorsResponse;
                toProto(message: _28.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorValidatorsResponse): _28.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegatorWithdrawAddressRequest;
                isSDK(o: any): o is _28.QueryDelegatorWithdrawAddressRequestSDKType;
                isAmino(o: any): o is _28.QueryDelegatorWithdrawAddressRequestAmino;
                encode(message: _28.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _28.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _28.QueryDelegatorWithdrawAddressRequest): {
                    delegatorAddress: string;
                };
                fromPartial(object: Partial<_28.QueryDelegatorWithdrawAddressRequest>): _28.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _28.QueryDelegatorWithdrawAddressRequestAmino): _28.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _28.QueryDelegatorWithdrawAddressRequest): _28.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _28.QueryDelegatorWithdrawAddressRequestAminoMsg): _28.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _28.QueryDelegatorWithdrawAddressRequest): _28.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorWithdrawAddressRequestProtoMsg): _28.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _28.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorWithdrawAddressRequest): _28.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryDelegatorWithdrawAddressResponse;
                isSDK(o: any): o is _28.QueryDelegatorWithdrawAddressResponseSDKType;
                isAmino(o: any): o is _28.QueryDelegatorWithdrawAddressResponseAmino;
                encode(message: _28.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _28.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _28.QueryDelegatorWithdrawAddressResponse): {
                    withdrawAddress: string;
                };
                fromPartial(object: Partial<_28.QueryDelegatorWithdrawAddressResponse>): _28.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _28.QueryDelegatorWithdrawAddressResponseAmino): _28.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _28.QueryDelegatorWithdrawAddressResponse): _28.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _28.QueryDelegatorWithdrawAddressResponseAminoMsg): _28.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _28.QueryDelegatorWithdrawAddressResponse): _28.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDelegatorWithdrawAddressResponseProtoMsg): _28.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _28.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDelegatorWithdrawAddressResponse): _28.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryCommunityPoolRequest;
                isSDK(o: any): o is _28.QueryCommunityPoolRequestSDKType;
                isAmino(o: any): o is _28.QueryCommunityPoolRequestAmino;
                encode(_: _28.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryCommunityPoolRequest;
                fromJSON(_: any): _28.QueryCommunityPoolRequest;
                toJSON(_: _28.QueryCommunityPoolRequest): {};
                fromPartial(_: Partial<_28.QueryCommunityPoolRequest>): _28.QueryCommunityPoolRequest;
                fromAmino(_: _28.QueryCommunityPoolRequestAmino): _28.QueryCommunityPoolRequest;
                toAmino(_: _28.QueryCommunityPoolRequest): _28.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _28.QueryCommunityPoolRequestAminoMsg): _28.QueryCommunityPoolRequest;
                toAminoMsg(message: _28.QueryCommunityPoolRequest): _28.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _28.QueryCommunityPoolRequestProtoMsg): _28.QueryCommunityPoolRequest;
                toProto(message: _28.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _28.QueryCommunityPoolRequest): _28.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.QueryCommunityPoolResponse;
                isSDK(o: any): o is _28.QueryCommunityPoolResponseSDKType;
                isAmino(o: any): o is _28.QueryCommunityPoolResponseAmino;
                encode(message: _28.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _28.QueryCommunityPoolResponse;
                fromJSON(object: any): _28.QueryCommunityPoolResponse;
                toJSON(message: _28.QueryCommunityPoolResponse): {
                    pool: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_28.QueryCommunityPoolResponse>): _28.QueryCommunityPoolResponse;
                fromAmino(object: _28.QueryCommunityPoolResponseAmino): _28.QueryCommunityPoolResponse;
                toAmino(message: _28.QueryCommunityPoolResponse): _28.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _28.QueryCommunityPoolResponseAminoMsg): _28.QueryCommunityPoolResponse;
                toAminoMsg(message: _28.QueryCommunityPoolResponse): _28.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _28.QueryCommunityPoolResponseProtoMsg): _28.QueryCommunityPoolResponse;
                toProto(message: _28.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _28.QueryCommunityPoolResponse): _28.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.DelegatorWithdrawInfo;
                isSDK(o: any): o is _27.DelegatorWithdrawInfoSDKType;
                isAmino(o: any): o is _27.DelegatorWithdrawInfoAmino;
                encode(message: _27.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.DelegatorWithdrawInfo;
                fromJSON(object: any): _27.DelegatorWithdrawInfo;
                toJSON(message: _27.DelegatorWithdrawInfo): {
                    delegatorAddress: string;
                    withdrawAddress: string;
                };
                fromPartial(object: Partial<_27.DelegatorWithdrawInfo>): _27.DelegatorWithdrawInfo;
                fromAmino(object: _27.DelegatorWithdrawInfoAmino): _27.DelegatorWithdrawInfo;
                toAmino(message: _27.DelegatorWithdrawInfo): _27.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _27.DelegatorWithdrawInfoAminoMsg): _27.DelegatorWithdrawInfo;
                toAminoMsg(message: _27.DelegatorWithdrawInfo): _27.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _27.DelegatorWithdrawInfoProtoMsg): _27.DelegatorWithdrawInfo;
                toProto(message: _27.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _27.DelegatorWithdrawInfo): _27.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.ValidatorOutstandingRewardsRecord;
                isSDK(o: any): o is _27.ValidatorOutstandingRewardsRecordSDKType;
                isAmino(o: any): o is _27.ValidatorOutstandingRewardsRecordAmino;
                encode(message: _27.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _27.ValidatorOutstandingRewardsRecord;
                toJSON(message: _27.ValidatorOutstandingRewardsRecord): {
                    validatorAddress: string;
                    outstandingRewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_27.ValidatorOutstandingRewardsRecord>): _27.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _27.ValidatorOutstandingRewardsRecordAmino): _27.ValidatorOutstandingRewardsRecord;
                toAmino(message: _27.ValidatorOutstandingRewardsRecord): _27.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _27.ValidatorOutstandingRewardsRecordAminoMsg): _27.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _27.ValidatorOutstandingRewardsRecord): _27.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorOutstandingRewardsRecordProtoMsg): _27.ValidatorOutstandingRewardsRecord;
                toProto(message: _27.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorOutstandingRewardsRecord): _27.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.ValidatorAccumulatedCommissionRecord;
                isSDK(o: any): o is _27.ValidatorAccumulatedCommissionRecordSDKType;
                isAmino(o: any): o is _27.ValidatorAccumulatedCommissionRecordAmino;
                encode(message: _27.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _27.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _27.ValidatorAccumulatedCommissionRecord): {
                    validatorAddress: string;
                    accumulated: {
                        commission: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_27.ValidatorAccumulatedCommissionRecord>): _27.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _27.ValidatorAccumulatedCommissionRecordAmino): _27.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _27.ValidatorAccumulatedCommissionRecord): _27.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _27.ValidatorAccumulatedCommissionRecordAminoMsg): _27.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _27.ValidatorAccumulatedCommissionRecord): _27.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorAccumulatedCommissionRecordProtoMsg): _27.ValidatorAccumulatedCommissionRecord;
                toProto(message: _27.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorAccumulatedCommissionRecord): _27.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.ValidatorHistoricalRewardsRecord;
                isSDK(o: any): o is _27.ValidatorHistoricalRewardsRecordSDKType;
                isAmino(o: any): o is _27.ValidatorHistoricalRewardsRecordAmino;
                encode(message: _27.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _27.ValidatorHistoricalRewardsRecord;
                toJSON(message: _27.ValidatorHistoricalRewardsRecord): {
                    validatorAddress: string;
                    period: string;
                    rewards: {
                        cumulativeRewardRatio: {
                            denom: string;
                            amount: string;
                        }[];
                        referenceCount: number;
                    };
                };
                fromPartial(object: Partial<_27.ValidatorHistoricalRewardsRecord>): _27.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _27.ValidatorHistoricalRewardsRecordAmino): _27.ValidatorHistoricalRewardsRecord;
                toAmino(message: _27.ValidatorHistoricalRewardsRecord): _27.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _27.ValidatorHistoricalRewardsRecordAminoMsg): _27.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _27.ValidatorHistoricalRewardsRecord): _27.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorHistoricalRewardsRecordProtoMsg): _27.ValidatorHistoricalRewardsRecord;
                toProto(message: _27.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorHistoricalRewardsRecord): _27.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.ValidatorCurrentRewardsRecord;
                isSDK(o: any): o is _27.ValidatorCurrentRewardsRecordSDKType;
                isAmino(o: any): o is _27.ValidatorCurrentRewardsRecordAmino;
                encode(message: _27.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _27.ValidatorCurrentRewardsRecord;
                toJSON(message: _27.ValidatorCurrentRewardsRecord): {
                    validatorAddress: string;
                    rewards: {
                        rewards: {
                            denom: string;
                            amount: string;
                        }[];
                        period: string;
                    };
                };
                fromPartial(object: Partial<_27.ValidatorCurrentRewardsRecord>): _27.ValidatorCurrentRewardsRecord;
                fromAmino(object: _27.ValidatorCurrentRewardsRecordAmino): _27.ValidatorCurrentRewardsRecord;
                toAmino(message: _27.ValidatorCurrentRewardsRecord): _27.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _27.ValidatorCurrentRewardsRecordAminoMsg): _27.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _27.ValidatorCurrentRewardsRecord): _27.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorCurrentRewardsRecordProtoMsg): _27.ValidatorCurrentRewardsRecord;
                toProto(message: _27.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorCurrentRewardsRecord): _27.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.DelegatorStartingInfoRecord;
                isSDK(o: any): o is _27.DelegatorStartingInfoRecordSDKType;
                isAmino(o: any): o is _27.DelegatorStartingInfoRecordAmino;
                encode(message: _27.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.DelegatorStartingInfoRecord;
                fromJSON(object: any): _27.DelegatorStartingInfoRecord;
                toJSON(message: _27.DelegatorStartingInfoRecord): {
                    delegatorAddress: string;
                    validatorAddress: string;
                    startingInfo: {
                        previousPeriod: string;
                        stake: string;
                        height: string;
                    };
                };
                fromPartial(object: Partial<_27.DelegatorStartingInfoRecord>): _27.DelegatorStartingInfoRecord;
                fromAmino(object: _27.DelegatorStartingInfoRecordAmino): _27.DelegatorStartingInfoRecord;
                toAmino(message: _27.DelegatorStartingInfoRecord): _27.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _27.DelegatorStartingInfoRecordAminoMsg): _27.DelegatorStartingInfoRecord;
                toAminoMsg(message: _27.DelegatorStartingInfoRecord): _27.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _27.DelegatorStartingInfoRecordProtoMsg): _27.DelegatorStartingInfoRecord;
                toProto(message: _27.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _27.DelegatorStartingInfoRecord): _27.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.ValidatorSlashEventRecord;
                isSDK(o: any): o is _27.ValidatorSlashEventRecordSDKType;
                isAmino(o: any): o is _27.ValidatorSlashEventRecordAmino;
                encode(message: _27.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.ValidatorSlashEventRecord;
                fromJSON(object: any): _27.ValidatorSlashEventRecord;
                toJSON(message: _27.ValidatorSlashEventRecord): {
                    validatorAddress: string;
                    height: string;
                    period: string;
                    validatorSlashEvent: {
                        validatorPeriod: string;
                        fraction: string;
                    };
                };
                fromPartial(object: Partial<_27.ValidatorSlashEventRecord>): _27.ValidatorSlashEventRecord;
                fromAmino(object: _27.ValidatorSlashEventRecordAmino): _27.ValidatorSlashEventRecord;
                toAmino(message: _27.ValidatorSlashEventRecord): _27.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _27.ValidatorSlashEventRecordAminoMsg): _27.ValidatorSlashEventRecord;
                toAminoMsg(message: _27.ValidatorSlashEventRecord): _27.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _27.ValidatorSlashEventRecordProtoMsg): _27.ValidatorSlashEventRecord;
                toProto(message: _27.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _27.ValidatorSlashEventRecord): _27.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.GenesisState;
                isSDK(o: any): o is _27.GenesisStateSDKType;
                isAmino(o: any): o is _27.GenesisStateAmino;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _27.GenesisState;
                fromJSON(object: any): _27.GenesisState;
                toJSON(message: _27.GenesisState): {
                    params: {
                        communityTax: string;
                        baseProposerReward: string;
                        bonusProposerReward: string;
                        withdrawAddrEnabled: boolean;
                    };
                    feePool: {
                        communityPool: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    delegatorWithdrawInfos: {
                        delegatorAddress: string;
                        withdrawAddress: string;
                    }[];
                    previousProposer: string;
                    outstandingRewards: {
                        validatorAddress: string;
                        outstandingRewards: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions: {
                        validatorAddress: string;
                        accumulated: {
                            commission: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards: {
                        validatorAddress: string;
                        period: string;
                        rewards: {
                            cumulativeRewardRatio: {
                                denom: string;
                                amount: string;
                            }[];
                            referenceCount: number;
                        };
                    }[];
                    validatorCurrentRewards: {
                        validatorAddress: string;
                        rewards: {
                            rewards: {
                                denom: string;
                                amount: string;
                            }[];
                            period: string;
                        };
                    }[];
                    delegatorStartingInfos: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        startingInfo: {
                            previousPeriod: string;
                            stake: string;
                            height: string;
                        };
                    }[];
                    validatorSlashEvents: {
                        validatorAddress: string;
                        height: string;
                        period: string;
                        validatorSlashEvent: {
                            validatorPeriod: string;
                            fraction: string;
                        };
                    }[];
                };
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.Params;
                isSDK(o: any): o is _26.ParamsSDKType;
                isAmino(o: any): o is _26.ParamsAmino;
                encode(message: _26.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.Params;
                fromJSON(object: any): _26.Params;
                toJSON(message: _26.Params): {
                    communityTax: string;
                    baseProposerReward: string;
                    bonusProposerReward: string;
                    withdrawAddrEnabled: boolean;
                };
                fromPartial(object: Partial<_26.Params>): _26.Params;
                fromAmino(object: _26.ParamsAmino): _26.Params;
                toAmino(message: _26.Params): _26.ParamsAmino;
                fromAminoMsg(object: _26.ParamsAminoMsg): _26.Params;
                toAminoMsg(message: _26.Params): _26.ParamsAminoMsg;
                fromProtoMsg(message: _26.ParamsProtoMsg): _26.Params;
                toProto(message: _26.Params): Uint8Array;
                toProtoMsg(message: _26.Params): _26.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.ValidatorHistoricalRewards;
                isSDK(o: any): o is _26.ValidatorHistoricalRewardsSDKType;
                isAmino(o: any): o is _26.ValidatorHistoricalRewardsAmino;
                encode(message: _26.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ValidatorHistoricalRewards;
                fromJSON(object: any): _26.ValidatorHistoricalRewards;
                toJSON(message: _26.ValidatorHistoricalRewards): {
                    cumulativeRewardRatio: {
                        denom: string;
                        amount: string;
                    }[];
                    referenceCount: number;
                };
                fromPartial(object: Partial<_26.ValidatorHistoricalRewards>): _26.ValidatorHistoricalRewards;
                fromAmino(object: _26.ValidatorHistoricalRewardsAmino): _26.ValidatorHistoricalRewards;
                toAmino(message: _26.ValidatorHistoricalRewards): _26.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _26.ValidatorHistoricalRewardsAminoMsg): _26.ValidatorHistoricalRewards;
                toAminoMsg(message: _26.ValidatorHistoricalRewards): _26.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _26.ValidatorHistoricalRewardsProtoMsg): _26.ValidatorHistoricalRewards;
                toProto(message: _26.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _26.ValidatorHistoricalRewards): _26.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.ValidatorCurrentRewards;
                isSDK(o: any): o is _26.ValidatorCurrentRewardsSDKType;
                isAmino(o: any): o is _26.ValidatorCurrentRewardsAmino;
                encode(message: _26.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ValidatorCurrentRewards;
                fromJSON(object: any): _26.ValidatorCurrentRewards;
                toJSON(message: _26.ValidatorCurrentRewards): {
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                    period: string;
                };
                fromPartial(object: Partial<_26.ValidatorCurrentRewards>): _26.ValidatorCurrentRewards;
                fromAmino(object: _26.ValidatorCurrentRewardsAmino): _26.ValidatorCurrentRewards;
                toAmino(message: _26.ValidatorCurrentRewards): _26.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _26.ValidatorCurrentRewardsAminoMsg): _26.ValidatorCurrentRewards;
                toAminoMsg(message: _26.ValidatorCurrentRewards): _26.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _26.ValidatorCurrentRewardsProtoMsg): _26.ValidatorCurrentRewards;
                toProto(message: _26.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _26.ValidatorCurrentRewards): _26.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.ValidatorAccumulatedCommission;
                isSDK(o: any): o is _26.ValidatorAccumulatedCommissionSDKType;
                isAmino(o: any): o is _26.ValidatorAccumulatedCommissionAmino;
                encode(message: _26.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ValidatorAccumulatedCommission;
                fromJSON(object: any): _26.ValidatorAccumulatedCommission;
                toJSON(message: _26.ValidatorAccumulatedCommission): {
                    commission: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_26.ValidatorAccumulatedCommission>): _26.ValidatorAccumulatedCommission;
                fromAmino(object: _26.ValidatorAccumulatedCommissionAmino): _26.ValidatorAccumulatedCommission;
                toAmino(message: _26.ValidatorAccumulatedCommission): _26.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _26.ValidatorAccumulatedCommissionAminoMsg): _26.ValidatorAccumulatedCommission;
                toAminoMsg(message: _26.ValidatorAccumulatedCommission): _26.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _26.ValidatorAccumulatedCommissionProtoMsg): _26.ValidatorAccumulatedCommission;
                toProto(message: _26.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _26.ValidatorAccumulatedCommission): _26.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.ValidatorOutstandingRewards;
                isSDK(o: any): o is _26.ValidatorOutstandingRewardsSDKType;
                isAmino(o: any): o is _26.ValidatorOutstandingRewardsAmino;
                encode(message: _26.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ValidatorOutstandingRewards;
                fromJSON(object: any): _26.ValidatorOutstandingRewards;
                toJSON(message: _26.ValidatorOutstandingRewards): {
                    rewards: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_26.ValidatorOutstandingRewards>): _26.ValidatorOutstandingRewards;
                fromAmino(object: _26.ValidatorOutstandingRewardsAmino): _26.ValidatorOutstandingRewards;
                toAmino(message: _26.ValidatorOutstandingRewards): _26.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _26.ValidatorOutstandingRewardsAminoMsg): _26.ValidatorOutstandingRewards;
                toAminoMsg(message: _26.ValidatorOutstandingRewards): _26.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _26.ValidatorOutstandingRewardsProtoMsg): _26.ValidatorOutstandingRewards;
                toProto(message: _26.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _26.ValidatorOutstandingRewards): _26.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.ValidatorSlashEvent;
                isSDK(o: any): o is _26.ValidatorSlashEventSDKType;
                isAmino(o: any): o is _26.ValidatorSlashEventAmino;
                encode(message: _26.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ValidatorSlashEvent;
                fromJSON(object: any): _26.ValidatorSlashEvent;
                toJSON(message: _26.ValidatorSlashEvent): {
                    validatorPeriod: string;
                    fraction: string;
                };
                fromPartial(object: Partial<_26.ValidatorSlashEvent>): _26.ValidatorSlashEvent;
                fromAmino(object: _26.ValidatorSlashEventAmino): _26.ValidatorSlashEvent;
                toAmino(message: _26.ValidatorSlashEvent): _26.ValidatorSlashEventAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventAminoMsg): _26.ValidatorSlashEvent;
                toAminoMsg(message: _26.ValidatorSlashEvent): _26.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventProtoMsg): _26.ValidatorSlashEvent;
                toProto(message: _26.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEvent): _26.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.ValidatorSlashEvents;
                isSDK(o: any): o is _26.ValidatorSlashEventsSDKType;
                isAmino(o: any): o is _26.ValidatorSlashEventsAmino;
                encode(message: _26.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.ValidatorSlashEvents;
                fromJSON(object: any): _26.ValidatorSlashEvents;
                toJSON(message: _26.ValidatorSlashEvents): {
                    validatorSlashEvents: {
                        validatorPeriod: string;
                        fraction: string;
                    }[];
                };
                fromPartial(object: Partial<_26.ValidatorSlashEvents>): _26.ValidatorSlashEvents;
                fromAmino(object: _26.ValidatorSlashEventsAmino): _26.ValidatorSlashEvents;
                toAmino(message: _26.ValidatorSlashEvents): _26.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventsAminoMsg): _26.ValidatorSlashEvents;
                toAminoMsg(message: _26.ValidatorSlashEvents): _26.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventsProtoMsg): _26.ValidatorSlashEvents;
                toProto(message: _26.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEvents): _26.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.FeePool;
                isSDK(o: any): o is _26.FeePoolSDKType;
                isAmino(o: any): o is _26.FeePoolAmino;
                encode(message: _26.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.FeePool;
                fromJSON(object: any): _26.FeePool;
                toJSON(message: _26.FeePool): {
                    communityPool: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_26.FeePool>): _26.FeePool;
                fromAmino(object: _26.FeePoolAmino): _26.FeePool;
                toAmino(message: _26.FeePool): _26.FeePoolAmino;
                fromAminoMsg(object: _26.FeePoolAminoMsg): _26.FeePool;
                toAminoMsg(message: _26.FeePool): _26.FeePoolAminoMsg;
                fromProtoMsg(message: _26.FeePoolProtoMsg): _26.FeePool;
                toProto(message: _26.FeePool): Uint8Array;
                toProtoMsg(message: _26.FeePool): _26.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.CommunityPoolSpendProposal;
                isSDK(o: any): o is _26.CommunityPoolSpendProposalSDKType;
                isAmino(o: any): o is _26.CommunityPoolSpendProposalAmino;
                encode(message: _26.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.CommunityPoolSpendProposal;
                fromJSON(object: any): _26.CommunityPoolSpendProposal;
                toJSON(message: _26.CommunityPoolSpendProposal): {
                    $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                    title: string;
                    description: string;
                    recipient: string;
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_26.CommunityPoolSpendProposal>): _26.CommunityPoolSpendProposal;
                fromAmino(object: _26.CommunityPoolSpendProposalAmino): _26.CommunityPoolSpendProposal;
                toAmino(message: _26.CommunityPoolSpendProposal): _26.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _26.CommunityPoolSpendProposalAminoMsg): _26.CommunityPoolSpendProposal;
                toAminoMsg(message: _26.CommunityPoolSpendProposal): _26.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _26.CommunityPoolSpendProposalProtoMsg): _26.CommunityPoolSpendProposal;
                toProto(message: _26.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolSpendProposal): _26.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.DelegatorStartingInfo;
                isSDK(o: any): o is _26.DelegatorStartingInfoSDKType;
                isAmino(o: any): o is _26.DelegatorStartingInfoAmino;
                encode(message: _26.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.DelegatorStartingInfo;
                fromJSON(object: any): _26.DelegatorStartingInfo;
                toJSON(message: _26.DelegatorStartingInfo): {
                    previousPeriod: string;
                    stake: string;
                    height: string;
                };
                fromPartial(object: Partial<_26.DelegatorStartingInfo>): _26.DelegatorStartingInfo;
                fromAmino(object: _26.DelegatorStartingInfoAmino): _26.DelegatorStartingInfo;
                toAmino(message: _26.DelegatorStartingInfo): _26.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _26.DelegatorStartingInfoAminoMsg): _26.DelegatorStartingInfo;
                toAminoMsg(message: _26.DelegatorStartingInfo): _26.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _26.DelegatorStartingInfoProtoMsg): _26.DelegatorStartingInfo;
                toProto(message: _26.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _26.DelegatorStartingInfo): _26.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.DelegationDelegatorReward;
                isSDK(o: any): o is _26.DelegationDelegatorRewardSDKType;
                isAmino(o: any): o is _26.DelegationDelegatorRewardAmino;
                encode(message: _26.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.DelegationDelegatorReward;
                fromJSON(object: any): _26.DelegationDelegatorReward;
                toJSON(message: _26.DelegationDelegatorReward): {
                    validatorAddress: string;
                    reward: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_26.DelegationDelegatorReward>): _26.DelegationDelegatorReward;
                fromAmino(object: _26.DelegationDelegatorRewardAmino): _26.DelegationDelegatorReward;
                toAmino(message: _26.DelegationDelegatorReward): _26.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _26.DelegationDelegatorRewardAminoMsg): _26.DelegationDelegatorReward;
                toAminoMsg(message: _26.DelegationDelegatorReward): _26.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _26.DelegationDelegatorRewardProtoMsg): _26.DelegationDelegatorReward;
                toProto(message: _26.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _26.DelegationDelegatorReward): _26.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.CommunityPoolSpendProposalWithDeposit;
                isSDK(o: any): o is _26.CommunityPoolSpendProposalWithDepositSDKType;
                isAmino(o: any): o is _26.CommunityPoolSpendProposalWithDepositAmino;
                encode(message: _26.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _26.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _26.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _26.CommunityPoolSpendProposalWithDeposit): {
                    $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                    title: string;
                    description: string;
                    recipient: string;
                    amount: string;
                    deposit: string;
                };
                fromPartial(object: Partial<_26.CommunityPoolSpendProposalWithDeposit>): _26.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _26.CommunityPoolSpendProposalWithDepositAmino): _26.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _26.CommunityPoolSpendProposalWithDeposit): _26.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _26.CommunityPoolSpendProposalWithDepositAminoMsg): _26.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _26.CommunityPoolSpendProposalWithDeposit): _26.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _26.CommunityPoolSpendProposalWithDepositProtoMsg): _26.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _26.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _26.CommunityPoolSpendProposalWithDeposit): _26.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: {
                            content?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            } | {
                                $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                                title: string;
                                description: string;
                                recipient: string;
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                                title: string;
                                description: string;
                                recipient: string;
                                amount: string;
                                deposit: string;
                            } | {
                                $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                            } | {
                                $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                                title: string;
                                description: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
                                title: string;
                                description: string;
                                runAs: string;
                                wasmByteCode: string;
                                instantiatePermission?: {
                                    permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                    address: string;
                                    addresses: string[];
                                };
                                unpinCode: boolean;
                                source: string;
                                builder: string;
                                codeHash: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
                                title: string;
                                description: string;
                                runAs: string;
                                admin: string;
                                codeId: string;
                                label: string;
                                msg: string;
                                funds: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
                                title: string;
                                description: string;
                                runAs: string;
                                admin: string;
                                codeId: string;
                                label: string;
                                msg: string;
                                funds: {
                                    denom: string;
                                    amount: string;
                                }[];
                                salt: string;
                                fixMsg: boolean;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
                                title: string;
                                description: string;
                                contract: string;
                                codeId: string;
                                msg: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
                                title: string;
                                description: string;
                                contract: string;
                                msg: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
                                title: string;
                                description: string;
                                runAs: string;
                                contract: string;
                                msg: string;
                                funds: {
                                    denom: string;
                                    amount: string;
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
                                title: string;
                                description: string;
                                newAdmin: string;
                                contract: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
                                title: string;
                                description: string;
                                contract: string;
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
                                title: string;
                                description: string;
                                codeIds: string[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
                                title: string;
                                description: string;
                                codeIds: string[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
                                title: string;
                                description: string;
                                accessConfigUpdates: {
                                    codeId: string;
                                    instantiatePermission: {
                                        permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                        address: string;
                                        addresses: string[];
                                    };
                                }[];
                            } | {
                                $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
                                title: string;
                                description: string;
                                runAs: string;
                                wasmByteCode: string;
                                instantiatePermission?: {
                                    permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                    address: string;
                                    addresses: string[];
                                };
                                unpinCode: boolean;
                                admin: string;
                                label: string;
                                msg: string;
                                funds: {
                                    denom: string;
                                    amount: string;
                                }[];
                                source: string;
                                builder: string;
                                codeHash: string;
                            } | {
                                $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                                title: string;
                                description: string;
                                subjectClientId: string;
                                substituteClientId: string;
                            } | {
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
                            } | {
                                $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                                title: string;
                                description: string;
                            };
                            initialDeposit: {
                                denom: string;
                                amount: string;
                            }[];
                            proposer: string;
                        };
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: {
                            proposalId: string;
                            voter: string;
                            option: _31.VoteOption;
                        };
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: {
                            proposalId: string;
                            voter: string;
                            options: {
                                option: _31.VoteOption;
                                weight: string;
                            }[];
                        };
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: {
                            proposalId: string;
                            depositor: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        };
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _33.MsgSubmitProposal) => _33.MsgSubmitProposalAmino;
                    fromAmino: (object: _33.MsgSubmitProposalAmino) => _33.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVote) => _33.MsgVoteAmino;
                    fromAmino: (object: _33.MsgVoteAmino) => _33.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVoteWeighted) => _33.MsgVoteWeightedAmino;
                    fromAmino: (object: _33.MsgVoteWeightedAmino) => _33.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _33.MsgDeposit) => _33.MsgDepositAmino;
                    fromAmino: (object: _33.MsgDepositAmino) => _33.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgSubmitProposal;
                isSDK(o: any): o is _33.MsgSubmitProposalSDKType;
                isAmino(o: any): o is _33.MsgSubmitProposalAmino;
                encode(message: _33.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgSubmitProposal;
                fromJSON(object: any): _33.MsgSubmitProposal;
                toJSON(message: _33.MsgSubmitProposal): {
                    content?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                        title: string;
                        description: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                        title: string;
                        description: string;
                        recipient: string;
                        amount: string;
                        deposit: string;
                    } | {
                        $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                    } | {
                        $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                        title: string;
                        description: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        wasmByteCode: string;
                        instantiatePermission?: {
                            permission: import("../cosmwasm/wasm/v1/types").AccessType;
                            address: string;
                            addresses: string[];
                        };
                        unpinCode: boolean;
                        source: string;
                        builder: string;
                        codeHash: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        admin: string;
                        codeId: string;
                        label: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
                        title: string;
                        description: string;
                        runAs: string;
                        admin: string;
                        codeId: string;
                        label: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: string;
                        fixMsg: boolean;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
                        title: string;
                        description: string;
                        contract: string;
                        codeId: string;
                        msg: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
                        title: string;
                        description: string;
                        contract: string;
                        msg: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        contract: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
                        title: string;
                        description: string;
                        newAdmin: string;
                        contract: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
                        title: string;
                        description: string;
                        contract: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
                        title: string;
                        description: string;
                        codeIds: string[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
                        title: string;
                        description: string;
                        codeIds: string[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
                        title: string;
                        description: string;
                        accessConfigUpdates: {
                            codeId: string;
                            instantiatePermission: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        wasmByteCode: string;
                        instantiatePermission?: {
                            permission: import("../cosmwasm/wasm/v1/types").AccessType;
                            address: string;
                            addresses: string[];
                        };
                        unpinCode: boolean;
                        admin: string;
                        label: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        source: string;
                        builder: string;
                        codeHash: string;
                    } | {
                        $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                        title: string;
                        description: string;
                        subjectClientId: string;
                        substituteClientId: string;
                    } | {
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
                    } | {
                        $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                        title: string;
                        description: string;
                    };
                    initialDeposit: {
                        denom: string;
                        amount: string;
                    }[];
                    proposer: string;
                };
                fromPartial(object: Partial<_33.MsgSubmitProposal>): _33.MsgSubmitProposal;
                fromAmino(object: _33.MsgSubmitProposalAmino): _33.MsgSubmitProposal;
                toAmino(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalAminoMsg): _33.MsgSubmitProposal;
                toAminoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalProtoMsg): _33.MsgSubmitProposal;
                toProto(message: _33.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgSubmitProposalResponse;
                isSDK(o: any): o is _33.MsgSubmitProposalResponseSDKType;
                isAmino(o: any): o is _33.MsgSubmitProposalResponseAmino;
                encode(message: _33.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgSubmitProposalResponse;
                fromJSON(object: any): _33.MsgSubmitProposalResponse;
                toJSON(message: _33.MsgSubmitProposalResponse): {
                    proposalId: string;
                };
                fromPartial(object: Partial<_33.MsgSubmitProposalResponse>): _33.MsgSubmitProposalResponse;
                fromAmino(object: _33.MsgSubmitProposalResponseAmino): _33.MsgSubmitProposalResponse;
                toAmino(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalResponseAminoMsg): _33.MsgSubmitProposalResponse;
                toAminoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalResponseProtoMsg): _33.MsgSubmitProposalResponse;
                toProto(message: _33.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgVote;
                isSDK(o: any): o is _33.MsgVoteSDKType;
                isAmino(o: any): o is _33.MsgVoteAmino;
                encode(message: _33.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgVote;
                fromJSON(object: any): _33.MsgVote;
                toJSON(message: _33.MsgVote): {
                    proposalId: string;
                    voter: string;
                    option: _31.VoteOption;
                };
                fromPartial(object: Partial<_33.MsgVote>): _33.MsgVote;
                fromAmino(object: _33.MsgVoteAmino): _33.MsgVote;
                toAmino(message: _33.MsgVote): _33.MsgVoteAmino;
                fromAminoMsg(object: _33.MsgVoteAminoMsg): _33.MsgVote;
                toAminoMsg(message: _33.MsgVote): _33.MsgVoteAminoMsg;
                fromProtoMsg(message: _33.MsgVoteProtoMsg): _33.MsgVote;
                toProto(message: _33.MsgVote): Uint8Array;
                toProtoMsg(message: _33.MsgVote): _33.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgVoteResponse;
                isSDK(o: any): o is _33.MsgVoteResponseSDKType;
                isAmino(o: any): o is _33.MsgVoteResponseAmino;
                encode(_: _33.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgVoteResponse;
                fromJSON(_: any): _33.MsgVoteResponse;
                toJSON(_: _33.MsgVoteResponse): {};
                fromPartial(_: Partial<_33.MsgVoteResponse>): _33.MsgVoteResponse;
                fromAmino(_: _33.MsgVoteResponseAmino): _33.MsgVoteResponse;
                toAmino(_: _33.MsgVoteResponse): _33.MsgVoteResponseAmino;
                fromAminoMsg(object: _33.MsgVoteResponseAminoMsg): _33.MsgVoteResponse;
                toAminoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteResponseProtoMsg): _33.MsgVoteResponse;
                toProto(message: _33.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgVoteWeighted;
                isSDK(o: any): o is _33.MsgVoteWeightedSDKType;
                isAmino(o: any): o is _33.MsgVoteWeightedAmino;
                encode(message: _33.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgVoteWeighted;
                fromJSON(object: any): _33.MsgVoteWeighted;
                toJSON(message: _33.MsgVoteWeighted): {
                    proposalId: string;
                    voter: string;
                    options: {
                        option: _31.VoteOption;
                        weight: string;
                    }[];
                };
                fromPartial(object: Partial<_33.MsgVoteWeighted>): _33.MsgVoteWeighted;
                fromAmino(object: _33.MsgVoteWeightedAmino): _33.MsgVoteWeighted;
                toAmino(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedAminoMsg): _33.MsgVoteWeighted;
                toAminoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedProtoMsg): _33.MsgVoteWeighted;
                toProto(message: _33.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgVoteWeightedResponse;
                isSDK(o: any): o is _33.MsgVoteWeightedResponseSDKType;
                isAmino(o: any): o is _33.MsgVoteWeightedResponseAmino;
                encode(_: _33.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgVoteWeightedResponse;
                fromJSON(_: any): _33.MsgVoteWeightedResponse;
                toJSON(_: _33.MsgVoteWeightedResponse): {};
                fromPartial(_: Partial<_33.MsgVoteWeightedResponse>): _33.MsgVoteWeightedResponse;
                fromAmino(_: _33.MsgVoteWeightedResponseAmino): _33.MsgVoteWeightedResponse;
                toAmino(_: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedResponseAminoMsg): _33.MsgVoteWeightedResponse;
                toAminoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedResponseProtoMsg): _33.MsgVoteWeightedResponse;
                toProto(message: _33.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgDeposit;
                isSDK(o: any): o is _33.MsgDepositSDKType;
                isAmino(o: any): o is _33.MsgDepositAmino;
                encode(message: _33.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgDeposit;
                fromJSON(object: any): _33.MsgDeposit;
                toJSON(message: _33.MsgDeposit): {
                    proposalId: string;
                    depositor: string;
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_33.MsgDeposit>): _33.MsgDeposit;
                fromAmino(object: _33.MsgDepositAmino): _33.MsgDeposit;
                toAmino(message: _33.MsgDeposit): _33.MsgDepositAmino;
                fromAminoMsg(object: _33.MsgDepositAminoMsg): _33.MsgDeposit;
                toAminoMsg(message: _33.MsgDeposit): _33.MsgDepositAminoMsg;
                fromProtoMsg(message: _33.MsgDepositProtoMsg): _33.MsgDeposit;
                toProto(message: _33.MsgDeposit): Uint8Array;
                toProtoMsg(message: _33.MsgDeposit): _33.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.MsgDepositResponse;
                isSDK(o: any): o is _33.MsgDepositResponseSDKType;
                isAmino(o: any): o is _33.MsgDepositResponseAmino;
                encode(_: _33.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _33.MsgDepositResponse;
                fromJSON(_: any): _33.MsgDepositResponse;
                toJSON(_: _33.MsgDepositResponse): {};
                fromPartial(_: Partial<_33.MsgDepositResponse>): _33.MsgDepositResponse;
                fromAmino(_: _33.MsgDepositResponseAmino): _33.MsgDepositResponse;
                toAmino(_: _33.MsgDepositResponse): _33.MsgDepositResponseAmino;
                fromAminoMsg(object: _33.MsgDepositResponseAminoMsg): _33.MsgDepositResponse;
                toAminoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _33.MsgDepositResponseProtoMsg): _33.MsgDepositResponse;
                toProto(message: _33.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryProposalRequest;
                isSDK(o: any): o is _32.QueryProposalRequestSDKType;
                isAmino(o: any): o is _32.QueryProposalRequestAmino;
                encode(message: _32.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryProposalRequest;
                fromJSON(object: any): _32.QueryProposalRequest;
                toJSON(message: _32.QueryProposalRequest): {
                    proposalId: string;
                };
                fromPartial(object: Partial<_32.QueryProposalRequest>): _32.QueryProposalRequest;
                fromAmino(object: _32.QueryProposalRequestAmino): _32.QueryProposalRequest;
                toAmino(message: _32.QueryProposalRequest): _32.QueryProposalRequestAmino;
                fromAminoMsg(object: _32.QueryProposalRequestAminoMsg): _32.QueryProposalRequest;
                toAminoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalRequestProtoMsg): _32.QueryProposalRequest;
                toProto(message: _32.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryProposalResponse;
                isSDK(o: any): o is _32.QueryProposalResponseSDKType;
                isAmino(o: any): o is _32.QueryProposalResponseAmino;
                encode(message: _32.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryProposalResponse;
                fromJSON(object: any): _32.QueryProposalResponse;
                toJSON(message: _32.QueryProposalResponse): {
                    proposal: {
                        proposalId: string;
                        content?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                            title: string;
                            description: string;
                            recipient: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                            title: string;
                            description: string;
                            recipient: string;
                            amount: string;
                            deposit: string;
                        } | {
                            $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                        } | {
                            $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                            title: string;
                            description: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            wasmByteCode: string;
                            instantiatePermission?: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                            unpinCode: boolean;
                            source: string;
                            builder: string;
                            codeHash: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            admin: string;
                            codeId: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
                            title: string;
                            description: string;
                            runAs: string;
                            admin: string;
                            codeId: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                            salt: string;
                            fixMsg: boolean;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
                            title: string;
                            description: string;
                            contract: string;
                            codeId: string;
                            msg: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
                            title: string;
                            description: string;
                            contract: string;
                            msg: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            contract: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
                            title: string;
                            description: string;
                            newAdmin: string;
                            contract: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
                            title: string;
                            description: string;
                            contract: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
                            title: string;
                            description: string;
                            codeIds: string[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
                            title: string;
                            description: string;
                            codeIds: string[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
                            title: string;
                            description: string;
                            accessConfigUpdates: {
                                codeId: string;
                                instantiatePermission: {
                                    permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                    address: string;
                                    addresses: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            wasmByteCode: string;
                            instantiatePermission?: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                            unpinCode: boolean;
                            admin: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                            source: string;
                            builder: string;
                            codeHash: string;
                        } | {
                            $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                            title: string;
                            description: string;
                            subjectClientId: string;
                            substituteClientId: string;
                        } | {
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
                        } | {
                            $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                            title: string;
                            description: string;
                        };
                        status: _31.ProposalStatus;
                        finalTallyResult: {
                            yes: string;
                            abstain: string;
                            no: string;
                            noWithVeto: string;
                        };
                        submitTime: string;
                        depositEndTime: string;
                        totalDeposit: {
                            denom: string;
                            amount: string;
                        }[];
                        votingStartTime: string;
                        votingEndTime: string;
                    };
                };
                fromPartial(object: Partial<_32.QueryProposalResponse>): _32.QueryProposalResponse;
                fromAmino(object: _32.QueryProposalResponseAmino): _32.QueryProposalResponse;
                toAmino(message: _32.QueryProposalResponse): _32.QueryProposalResponseAmino;
                fromAminoMsg(object: _32.QueryProposalResponseAminoMsg): _32.QueryProposalResponse;
                toAminoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalResponseProtoMsg): _32.QueryProposalResponse;
                toProto(message: _32.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryProposalsRequest;
                isSDK(o: any): o is _32.QueryProposalsRequestSDKType;
                isAmino(o: any): o is _32.QueryProposalsRequestAmino;
                encode(message: _32.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryProposalsRequest;
                fromJSON(object: any): _32.QueryProposalsRequest;
                toJSON(message: _32.QueryProposalsRequest): {
                    proposalStatus: _31.ProposalStatus;
                    voter: string;
                    depositor: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_32.QueryProposalsRequest>): _32.QueryProposalsRequest;
                fromAmino(object: _32.QueryProposalsRequestAmino): _32.QueryProposalsRequest;
                toAmino(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAmino;
                fromAminoMsg(object: _32.QueryProposalsRequestAminoMsg): _32.QueryProposalsRequest;
                toAminoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsRequestProtoMsg): _32.QueryProposalsRequest;
                toProto(message: _32.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryProposalsResponse;
                isSDK(o: any): o is _32.QueryProposalsResponseSDKType;
                isAmino(o: any): o is _32.QueryProposalsResponseAmino;
                encode(message: _32.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryProposalsResponse;
                fromJSON(object: any): _32.QueryProposalsResponse;
                toJSON(message: _32.QueryProposalsResponse): {
                    proposals: {
                        proposalId: string;
                        content?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                            title: string;
                            description: string;
                            recipient: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                            title: string;
                            description: string;
                            recipient: string;
                            amount: string;
                            deposit: string;
                        } | {
                            $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                        } | {
                            $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                            title: string;
                            description: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            wasmByteCode: string;
                            instantiatePermission?: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                            unpinCode: boolean;
                            source: string;
                            builder: string;
                            codeHash: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            admin: string;
                            codeId: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
                            title: string;
                            description: string;
                            runAs: string;
                            admin: string;
                            codeId: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                            salt: string;
                            fixMsg: boolean;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
                            title: string;
                            description: string;
                            contract: string;
                            codeId: string;
                            msg: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
                            title: string;
                            description: string;
                            contract: string;
                            msg: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            contract: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
                            title: string;
                            description: string;
                            newAdmin: string;
                            contract: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
                            title: string;
                            description: string;
                            contract: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
                            title: string;
                            description: string;
                            codeIds: string[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
                            title: string;
                            description: string;
                            codeIds: string[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
                            title: string;
                            description: string;
                            accessConfigUpdates: {
                                codeId: string;
                                instantiatePermission: {
                                    permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                    address: string;
                                    addresses: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            wasmByteCode: string;
                            instantiatePermission?: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                            unpinCode: boolean;
                            admin: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                            source: string;
                            builder: string;
                            codeHash: string;
                        } | {
                            $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                            title: string;
                            description: string;
                            subjectClientId: string;
                            substituteClientId: string;
                        } | {
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
                        } | {
                            $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                            title: string;
                            description: string;
                        };
                        status: _31.ProposalStatus;
                        finalTallyResult: {
                            yes: string;
                            abstain: string;
                            no: string;
                            noWithVeto: string;
                        };
                        submitTime: string;
                        depositEndTime: string;
                        totalDeposit: {
                            denom: string;
                            amount: string;
                        }[];
                        votingStartTime: string;
                        votingEndTime: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_32.QueryProposalsResponse>): _32.QueryProposalsResponse;
                fromAmino(object: _32.QueryProposalsResponseAmino): _32.QueryProposalsResponse;
                toAmino(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAmino;
                fromAminoMsg(object: _32.QueryProposalsResponseAminoMsg): _32.QueryProposalsResponse;
                toAminoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsResponseProtoMsg): _32.QueryProposalsResponse;
                toProto(message: _32.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryVoteRequest;
                isSDK(o: any): o is _32.QueryVoteRequestSDKType;
                isAmino(o: any): o is _32.QueryVoteRequestAmino;
                encode(message: _32.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryVoteRequest;
                fromJSON(object: any): _32.QueryVoteRequest;
                toJSON(message: _32.QueryVoteRequest): {
                    proposalId: string;
                    voter: string;
                };
                fromPartial(object: Partial<_32.QueryVoteRequest>): _32.QueryVoteRequest;
                fromAmino(object: _32.QueryVoteRequestAmino): _32.QueryVoteRequest;
                toAmino(message: _32.QueryVoteRequest): _32.QueryVoteRequestAmino;
                fromAminoMsg(object: _32.QueryVoteRequestAminoMsg): _32.QueryVoteRequest;
                toAminoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVoteRequestProtoMsg): _32.QueryVoteRequest;
                toProto(message: _32.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryVoteResponse;
                isSDK(o: any): o is _32.QueryVoteResponseSDKType;
                isAmino(o: any): o is _32.QueryVoteResponseAmino;
                encode(message: _32.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryVoteResponse;
                fromJSON(object: any): _32.QueryVoteResponse;
                toJSON(message: _32.QueryVoteResponse): {
                    vote: {
                        proposalId: string;
                        voter: string;
                        option: _31.VoteOption;
                        options: {
                            option: _31.VoteOption;
                            weight: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_32.QueryVoteResponse>): _32.QueryVoteResponse;
                fromAmino(object: _32.QueryVoteResponseAmino): _32.QueryVoteResponse;
                toAmino(message: _32.QueryVoteResponse): _32.QueryVoteResponseAmino;
                fromAminoMsg(object: _32.QueryVoteResponseAminoMsg): _32.QueryVoteResponse;
                toAminoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVoteResponseProtoMsg): _32.QueryVoteResponse;
                toProto(message: _32.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryVotesRequest;
                isSDK(o: any): o is _32.QueryVotesRequestSDKType;
                isAmino(o: any): o is _32.QueryVotesRequestAmino;
                encode(message: _32.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryVotesRequest;
                fromJSON(object: any): _32.QueryVotesRequest;
                toJSON(message: _32.QueryVotesRequest): {
                    proposalId: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_32.QueryVotesRequest>): _32.QueryVotesRequest;
                fromAmino(object: _32.QueryVotesRequestAmino): _32.QueryVotesRequest;
                toAmino(message: _32.QueryVotesRequest): _32.QueryVotesRequestAmino;
                fromAminoMsg(object: _32.QueryVotesRequestAminoMsg): _32.QueryVotesRequest;
                toAminoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVotesRequestProtoMsg): _32.QueryVotesRequest;
                toProto(message: _32.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryVotesResponse;
                isSDK(o: any): o is _32.QueryVotesResponseSDKType;
                isAmino(o: any): o is _32.QueryVotesResponseAmino;
                encode(message: _32.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryVotesResponse;
                fromJSON(object: any): _32.QueryVotesResponse;
                toJSON(message: _32.QueryVotesResponse): {
                    votes: {
                        proposalId: string;
                        voter: string;
                        option: _31.VoteOption;
                        options: {
                            option: _31.VoteOption;
                            weight: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_32.QueryVotesResponse>): _32.QueryVotesResponse;
                fromAmino(object: _32.QueryVotesResponseAmino): _32.QueryVotesResponse;
                toAmino(message: _32.QueryVotesResponse): _32.QueryVotesResponseAmino;
                fromAminoMsg(object: _32.QueryVotesResponseAminoMsg): _32.QueryVotesResponse;
                toAminoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVotesResponseProtoMsg): _32.QueryVotesResponse;
                toProto(message: _32.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryParamsRequest;
                isSDK(o: any): o is _32.QueryParamsRequestSDKType;
                isAmino(o: any): o is _32.QueryParamsRequestAmino;
                encode(message: _32.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryParamsRequest;
                fromJSON(object: any): _32.QueryParamsRequest;
                toJSON(message: _32.QueryParamsRequest): {
                    paramsType: string;
                };
                fromPartial(object: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
                fromAmino(object: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
                toAmino(message: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
                fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
                toAminoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
                toProto(message: _32.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryParamsResponse;
                isSDK(o: any): o is _32.QueryParamsResponseSDKType;
                isAmino(o: any): o is _32.QueryParamsResponseAmino;
                encode(message: _32.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryParamsResponse;
                fromJSON(object: any): _32.QueryParamsResponse;
                toJSON(message: _32.QueryParamsResponse): {
                    votingParams: {
                        votingPeriod: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    depositParams: {
                        minDeposit: {
                            denom: string;
                            amount: string;
                        }[];
                        maxDepositPeriod: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    tallyParams: {
                        quorum: string;
                        threshold: string;
                        vetoThreshold: string;
                    };
                };
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
                fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
                toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
                fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
                toAminoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
                toProto(message: _32.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryDepositRequest;
                isSDK(o: any): o is _32.QueryDepositRequestSDKType;
                isAmino(o: any): o is _32.QueryDepositRequestAmino;
                encode(message: _32.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDepositRequest;
                fromJSON(object: any): _32.QueryDepositRequest;
                toJSON(message: _32.QueryDepositRequest): {
                    proposalId: string;
                    depositor: string;
                };
                fromPartial(object: Partial<_32.QueryDepositRequest>): _32.QueryDepositRequest;
                fromAmino(object: _32.QueryDepositRequestAmino): _32.QueryDepositRequest;
                toAmino(message: _32.QueryDepositRequest): _32.QueryDepositRequestAmino;
                fromAminoMsg(object: _32.QueryDepositRequestAminoMsg): _32.QueryDepositRequest;
                toAminoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositRequestProtoMsg): _32.QueryDepositRequest;
                toProto(message: _32.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryDepositResponse;
                isSDK(o: any): o is _32.QueryDepositResponseSDKType;
                isAmino(o: any): o is _32.QueryDepositResponseAmino;
                encode(message: _32.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDepositResponse;
                fromJSON(object: any): _32.QueryDepositResponse;
                toJSON(message: _32.QueryDepositResponse): {
                    deposit: {
                        proposalId: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_32.QueryDepositResponse>): _32.QueryDepositResponse;
                fromAmino(object: _32.QueryDepositResponseAmino): _32.QueryDepositResponse;
                toAmino(message: _32.QueryDepositResponse): _32.QueryDepositResponseAmino;
                fromAminoMsg(object: _32.QueryDepositResponseAminoMsg): _32.QueryDepositResponse;
                toAminoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositResponseProtoMsg): _32.QueryDepositResponse;
                toProto(message: _32.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryDepositsRequest;
                isSDK(o: any): o is _32.QueryDepositsRequestSDKType;
                isAmino(o: any): o is _32.QueryDepositsRequestAmino;
                encode(message: _32.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDepositsRequest;
                fromJSON(object: any): _32.QueryDepositsRequest;
                toJSON(message: _32.QueryDepositsRequest): {
                    proposalId: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_32.QueryDepositsRequest>): _32.QueryDepositsRequest;
                fromAmino(object: _32.QueryDepositsRequestAmino): _32.QueryDepositsRequest;
                toAmino(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAmino;
                fromAminoMsg(object: _32.QueryDepositsRequestAminoMsg): _32.QueryDepositsRequest;
                toAminoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsRequestProtoMsg): _32.QueryDepositsRequest;
                toProto(message: _32.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryDepositsResponse;
                isSDK(o: any): o is _32.QueryDepositsResponseSDKType;
                isAmino(o: any): o is _32.QueryDepositsResponseAmino;
                encode(message: _32.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryDepositsResponse;
                fromJSON(object: any): _32.QueryDepositsResponse;
                toJSON(message: _32.QueryDepositsResponse): {
                    deposits: {
                        proposalId: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_32.QueryDepositsResponse>): _32.QueryDepositsResponse;
                fromAmino(object: _32.QueryDepositsResponseAmino): _32.QueryDepositsResponse;
                toAmino(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAmino;
                fromAminoMsg(object: _32.QueryDepositsResponseAminoMsg): _32.QueryDepositsResponse;
                toAminoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsResponseProtoMsg): _32.QueryDepositsResponse;
                toProto(message: _32.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryTallyResultRequest;
                isSDK(o: any): o is _32.QueryTallyResultRequestSDKType;
                isAmino(o: any): o is _32.QueryTallyResultRequestAmino;
                encode(message: _32.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryTallyResultRequest;
                fromJSON(object: any): _32.QueryTallyResultRequest;
                toJSON(message: _32.QueryTallyResultRequest): {
                    proposalId: string;
                };
                fromPartial(object: Partial<_32.QueryTallyResultRequest>): _32.QueryTallyResultRequest;
                fromAmino(object: _32.QueryTallyResultRequestAmino): _32.QueryTallyResultRequest;
                toAmino(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _32.QueryTallyResultRequestAminoMsg): _32.QueryTallyResultRequest;
                toAminoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultRequestProtoMsg): _32.QueryTallyResultRequest;
                toProto(message: _32.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.QueryTallyResultResponse;
                isSDK(o: any): o is _32.QueryTallyResultResponseSDKType;
                isAmino(o: any): o is _32.QueryTallyResultResponseAmino;
                encode(message: _32.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _32.QueryTallyResultResponse;
                fromJSON(object: any): _32.QueryTallyResultResponse;
                toJSON(message: _32.QueryTallyResultResponse): {
                    tally: {
                        yes: string;
                        abstain: string;
                        no: string;
                        noWithVeto: string;
                    };
                };
                fromPartial(object: Partial<_32.QueryTallyResultResponse>): _32.QueryTallyResultResponse;
                fromAmino(object: _32.QueryTallyResultResponseAmino): _32.QueryTallyResultResponse;
                toAmino(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _32.QueryTallyResultResponseAminoMsg): _32.QueryTallyResultResponse;
                toAminoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultResponseProtoMsg): _32.QueryTallyResultResponse;
                toProto(message: _32.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _31.VoteOption;
            voteOptionToJSON(object: _31.VoteOption): string;
            proposalStatusFromJSON(object: any): _31.ProposalStatus;
            proposalStatusToJSON(object: _31.ProposalStatus): string;
            VoteOption: typeof _31.VoteOption;
            VoteOptionSDKType: typeof _31.VoteOption;
            VoteOptionAmino: typeof _31.VoteOption;
            ProposalStatus: typeof _31.ProposalStatus;
            ProposalStatusSDKType: typeof _31.ProposalStatus;
            ProposalStatusAmino: typeof _31.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.WeightedVoteOption;
                isSDK(o: any): o is _31.WeightedVoteOptionSDKType;
                isAmino(o: any): o is _31.WeightedVoteOptionAmino;
                encode(message: _31.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.WeightedVoteOption;
                fromJSON(object: any): _31.WeightedVoteOption;
                toJSON(message: _31.WeightedVoteOption): {
                    option: _31.VoteOption;
                    weight: string;
                };
                fromPartial(object: Partial<_31.WeightedVoteOption>): _31.WeightedVoteOption;
                fromAmino(object: _31.WeightedVoteOptionAmino): _31.WeightedVoteOption;
                toAmino(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAmino;
                fromAminoMsg(object: _31.WeightedVoteOptionAminoMsg): _31.WeightedVoteOption;
                toAminoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _31.WeightedVoteOptionProtoMsg): _31.WeightedVoteOption;
                toProto(message: _31.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.TextProposal;
                isSDK(o: any): o is _31.TextProposalSDKType;
                isAmino(o: any): o is _31.TextProposalAmino;
                encode(message: _31.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.TextProposal;
                fromJSON(object: any): _31.TextProposal;
                toJSON(message: _31.TextProposal): {
                    $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                    title: string;
                    description: string;
                };
                fromPartial(object: Partial<_31.TextProposal>): _31.TextProposal;
                fromAmino(object: _31.TextProposalAmino): _31.TextProposal;
                toAmino(message: _31.TextProposal): _31.TextProposalAmino;
                fromAminoMsg(object: _31.TextProposalAminoMsg): _31.TextProposal;
                toAminoMsg(message: _31.TextProposal): _31.TextProposalAminoMsg;
                fromProtoMsg(message: _31.TextProposalProtoMsg): _31.TextProposal;
                toProto(message: _31.TextProposal): Uint8Array;
                toProtoMsg(message: _31.TextProposal): _31.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.Deposit;
                isSDK(o: any): o is _31.DepositSDKType;
                isAmino(o: any): o is _31.DepositAmino;
                encode(message: _31.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Deposit;
                fromJSON(object: any): _31.Deposit;
                toJSON(message: _31.Deposit): {
                    proposalId: string;
                    depositor: string;
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                };
                fromPartial(object: Partial<_31.Deposit>): _31.Deposit;
                fromAmino(object: _31.DepositAmino): _31.Deposit;
                toAmino(message: _31.Deposit): _31.DepositAmino;
                fromAminoMsg(object: _31.DepositAminoMsg): _31.Deposit;
                toAminoMsg(message: _31.Deposit): _31.DepositAminoMsg;
                fromProtoMsg(message: _31.DepositProtoMsg): _31.Deposit;
                toProto(message: _31.Deposit): Uint8Array;
                toProtoMsg(message: _31.Deposit): _31.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.Proposal;
                isSDK(o: any): o is _31.ProposalSDKType;
                isAmino(o: any): o is _31.ProposalAmino;
                encode(message: _31.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Proposal;
                fromJSON(object: any): _31.Proposal;
                toJSON(message: _31.Proposal): {
                    proposalId: string;
                    content?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    } | {
                        $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                        title: string;
                        description: string;
                        recipient: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                        title: string;
                        description: string;
                        recipient: string;
                        amount: string;
                        deposit: string;
                    } | {
                        $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                    } | {
                        $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                        title: string;
                        description: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        wasmByteCode: string;
                        instantiatePermission?: {
                            permission: import("../cosmwasm/wasm/v1/types").AccessType;
                            address: string;
                            addresses: string[];
                        };
                        unpinCode: boolean;
                        source: string;
                        builder: string;
                        codeHash: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        admin: string;
                        codeId: string;
                        label: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
                        title: string;
                        description: string;
                        runAs: string;
                        admin: string;
                        codeId: string;
                        label: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: string;
                        fixMsg: boolean;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
                        title: string;
                        description: string;
                        contract: string;
                        codeId: string;
                        msg: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
                        title: string;
                        description: string;
                        contract: string;
                        msg: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        contract: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
                        title: string;
                        description: string;
                        newAdmin: string;
                        contract: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
                        title: string;
                        description: string;
                        contract: string;
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
                        title: string;
                        description: string;
                        codeIds: string[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
                        title: string;
                        description: string;
                        codeIds: string[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
                        title: string;
                        description: string;
                        accessConfigUpdates: {
                            codeId: string;
                            instantiatePermission: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                        }[];
                    } | {
                        $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
                        title: string;
                        description: string;
                        runAs: string;
                        wasmByteCode: string;
                        instantiatePermission?: {
                            permission: import("../cosmwasm/wasm/v1/types").AccessType;
                            address: string;
                            addresses: string[];
                        };
                        unpinCode: boolean;
                        admin: string;
                        label: string;
                        msg: string;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        source: string;
                        builder: string;
                        codeHash: string;
                    } | {
                        $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                        title: string;
                        description: string;
                        subjectClientId: string;
                        substituteClientId: string;
                    } | {
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
                    } | {
                        $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                        title: string;
                        description: string;
                    };
                    status: _31.ProposalStatus;
                    finalTallyResult: {
                        yes: string;
                        abstain: string;
                        no: string;
                        noWithVeto: string;
                    };
                    submitTime: string;
                    depositEndTime: string;
                    totalDeposit: {
                        denom: string;
                        amount: string;
                    }[];
                    votingStartTime: string;
                    votingEndTime: string;
                };
                fromPartial(object: Partial<_31.Proposal>): _31.Proposal;
                fromAmino(object: _31.ProposalAmino): _31.Proposal;
                toAmino(message: _31.Proposal): _31.ProposalAmino;
                fromAminoMsg(object: _31.ProposalAminoMsg): _31.Proposal;
                toAminoMsg(message: _31.Proposal): _31.ProposalAminoMsg;
                fromProtoMsg(message: _31.ProposalProtoMsg): _31.Proposal;
                toProto(message: _31.Proposal): Uint8Array;
                toProtoMsg(message: _31.Proposal): _31.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.TallyResult;
                isSDK(o: any): o is _31.TallyResultSDKType;
                isAmino(o: any): o is _31.TallyResultAmino;
                encode(message: _31.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.TallyResult;
                fromJSON(object: any): _31.TallyResult;
                toJSON(message: _31.TallyResult): {
                    yes: string;
                    abstain: string;
                    no: string;
                    noWithVeto: string;
                };
                fromPartial(object: Partial<_31.TallyResult>): _31.TallyResult;
                fromAmino(object: _31.TallyResultAmino): _31.TallyResult;
                toAmino(message: _31.TallyResult): _31.TallyResultAmino;
                fromAminoMsg(object: _31.TallyResultAminoMsg): _31.TallyResult;
                toAminoMsg(message: _31.TallyResult): _31.TallyResultAminoMsg;
                fromProtoMsg(message: _31.TallyResultProtoMsg): _31.TallyResult;
                toProto(message: _31.TallyResult): Uint8Array;
                toProtoMsg(message: _31.TallyResult): _31.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.Vote;
                isSDK(o: any): o is _31.VoteSDKType;
                isAmino(o: any): o is _31.VoteAmino;
                encode(message: _31.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.Vote;
                fromJSON(object: any): _31.Vote;
                toJSON(message: _31.Vote): {
                    proposalId: string;
                    voter: string;
                    option: _31.VoteOption;
                    options: {
                        option: _31.VoteOption;
                        weight: string;
                    }[];
                };
                fromPartial(object: Partial<_31.Vote>): _31.Vote;
                fromAmino(object: _31.VoteAmino): _31.Vote;
                toAmino(message: _31.Vote): _31.VoteAmino;
                fromAminoMsg(object: _31.VoteAminoMsg): _31.Vote;
                toAminoMsg(message: _31.Vote): _31.VoteAminoMsg;
                fromProtoMsg(message: _31.VoteProtoMsg): _31.Vote;
                toProto(message: _31.Vote): Uint8Array;
                toProtoMsg(message: _31.Vote): _31.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.DepositParams;
                isSDK(o: any): o is _31.DepositParamsSDKType;
                isAmino(o: any): o is _31.DepositParamsAmino;
                encode(message: _31.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.DepositParams;
                fromJSON(object: any): _31.DepositParams;
                toJSON(message: _31.DepositParams): {
                    minDeposit: {
                        denom: string;
                        amount: string;
                    }[];
                    maxDepositPeriod: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromPartial(object: Partial<_31.DepositParams>): _31.DepositParams;
                fromAmino(object: _31.DepositParamsAmino): _31.DepositParams;
                toAmino(message: _31.DepositParams): _31.DepositParamsAmino;
                fromAminoMsg(object: _31.DepositParamsAminoMsg): _31.DepositParams;
                toAminoMsg(message: _31.DepositParams): _31.DepositParamsAminoMsg;
                fromProtoMsg(message: _31.DepositParamsProtoMsg): _31.DepositParams;
                toProto(message: _31.DepositParams): Uint8Array;
                toProtoMsg(message: _31.DepositParams): _31.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.VotingParams;
                isSDK(o: any): o is _31.VotingParamsSDKType;
                isAmino(o: any): o is _31.VotingParamsAmino;
                encode(message: _31.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.VotingParams;
                fromJSON(object: any): _31.VotingParams;
                toJSON(message: _31.VotingParams): {
                    votingPeriod: {
                        seconds: string;
                        nanos: number;
                    };
                };
                fromPartial(object: Partial<_31.VotingParams>): _31.VotingParams;
                fromAmino(object: _31.VotingParamsAmino): _31.VotingParams;
                toAmino(message: _31.VotingParams): _31.VotingParamsAmino;
                fromAminoMsg(object: _31.VotingParamsAminoMsg): _31.VotingParams;
                toAminoMsg(message: _31.VotingParams): _31.VotingParamsAminoMsg;
                fromProtoMsg(message: _31.VotingParamsProtoMsg): _31.VotingParams;
                toProto(message: _31.VotingParams): Uint8Array;
                toProtoMsg(message: _31.VotingParams): _31.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.TallyParams;
                isSDK(o: any): o is _31.TallyParamsSDKType;
                isAmino(o: any): o is _31.TallyParamsAmino;
                encode(message: _31.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _31.TallyParams;
                fromJSON(object: any): _31.TallyParams;
                toJSON(message: _31.TallyParams): {
                    quorum: string;
                    threshold: string;
                    vetoThreshold: string;
                };
                fromPartial(object: Partial<_31.TallyParams>): _31.TallyParams;
                fromAmino(object: _31.TallyParamsAmino): _31.TallyParams;
                toAmino(message: _31.TallyParams): _31.TallyParamsAmino;
                fromAminoMsg(object: _31.TallyParamsAminoMsg): _31.TallyParams;
                toAminoMsg(message: _31.TallyParams): _31.TallyParamsAminoMsg;
                fromProtoMsg(message: _31.TallyParamsProtoMsg): _31.TallyParams;
                toProto(message: _31.TallyParams): Uint8Array;
                toProtoMsg(message: _31.TallyParams): _31.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.GenesisState;
                isSDK(o: any): o is _30.GenesisStateSDKType;
                isAmino(o: any): o is _30.GenesisStateAmino;
                encode(message: _30.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _30.GenesisState;
                fromJSON(object: any): _30.GenesisState;
                toJSON(message: _30.GenesisState): {
                    startingProposalId: string;
                    deposits: {
                        proposalId: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }[];
                    votes: {
                        proposalId: string;
                        voter: string;
                        option: _31.VoteOption;
                        options: {
                            option: _31.VoteOption;
                            weight: string;
                        }[];
                    }[];
                    proposals: {
                        proposalId: string;
                        content?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        } | {
                            $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
                            title: string;
                            description: string;
                            recipient: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
                            title: string;
                            description: string;
                            recipient: string;
                            amount: string;
                            deposit: string;
                        } | {
                            $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                        } | {
                            $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                            title: string;
                            description: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.StoreCodeProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            wasmByteCode: string;
                            instantiatePermission?: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                            unpinCode: boolean;
                            source: string;
                            builder: string;
                            codeHash: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            admin: string;
                            codeId: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.InstantiateContract2Proposal";
                            title: string;
                            description: string;
                            runAs: string;
                            admin: string;
                            codeId: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                            salt: string;
                            fixMsg: boolean;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.MigrateContractProposal";
                            title: string;
                            description: string;
                            contract: string;
                            codeId: string;
                            msg: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.SudoContractProposal";
                            title: string;
                            description: string;
                            contract: string;
                            msg: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ExecuteContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            contract: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UpdateAdminProposal";
                            title: string;
                            description: string;
                            newAdmin: string;
                            contract: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.ClearAdminProposal";
                            title: string;
                            description: string;
                            contract: string;
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.PinCodesProposal";
                            title: string;
                            description: string;
                            codeIds: string[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UnpinCodesProposal";
                            title: string;
                            description: string;
                            codeIds: string[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
                            title: string;
                            description: string;
                            accessConfigUpdates: {
                                codeId: string;
                                instantiatePermission: {
                                    permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                    address: string;
                                    addresses: string[];
                                };
                            }[];
                        } | {
                            $typeUrl?: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
                            title: string;
                            description: string;
                            runAs: string;
                            wasmByteCode: string;
                            instantiatePermission?: {
                                permission: import("../cosmwasm/wasm/v1/types").AccessType;
                                address: string;
                                addresses: string[];
                            };
                            unpinCode: boolean;
                            admin: string;
                            label: string;
                            msg: string;
                            funds: {
                                denom: string;
                                amount: string;
                            }[];
                            source: string;
                            builder: string;
                            codeHash: string;
                        } | {
                            $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                            title: string;
                            description: string;
                            subjectClientId: string;
                            substituteClientId: string;
                        } | {
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
                        } | {
                            $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
                            title: string;
                            description: string;
                        };
                        status: _31.ProposalStatus;
                        finalTallyResult: {
                            yes: string;
                            abstain: string;
                            no: string;
                            noWithVeto: string;
                        };
                        submitTime: string;
                        depositEndTime: string;
                        totalDeposit: {
                            denom: string;
                            amount: string;
                        }[];
                        votingStartTime: string;
                        votingEndTime: string;
                    }[];
                    depositParams: {
                        minDeposit: {
                            denom: string;
                            amount: string;
                        }[];
                        maxDepositPeriod: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    votingParams: {
                        votingPeriod: {
                            seconds: string;
                            nanos: number;
                        };
                    };
                    tallyParams: {
                        quorum: string;
                        threshold: string;
                        vetoThreshold: string;
                    };
                };
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: {
                            description: {
                                moniker: string;
                                identity: string;
                                website: string;
                                securityContact: string;
                                details: string;
                            };
                            commission: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            minSelfDelegation: string;
                            delegatorAddress: string;
                            validatorAddress: string;
                            pubkey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            value: {
                                denom: string;
                                amount: string;
                            };
                        };
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: {
                            description: {
                                moniker: string;
                                identity: string;
                                website: string;
                                securityContact: string;
                                details: string;
                            };
                            validatorAddress: string;
                            commissionRate: string;
                            minSelfDelegation: string;
                        };
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            validatorAddress: string;
                            amount: {
                                denom: string;
                                amount: string;
                            };
                        };
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            validatorSrcAddress: string;
                            validatorDstAddress: string;
                            amount: {
                                denom: string;
                                amount: string;
                            };
                        };
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            validatorAddress: string;
                            amount: {
                                denom: string;
                                amount: string;
                            };
                        };
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _38.MsgCreateValidator) => _38.MsgCreateValidatorAmino;
                    fromAmino: (object: _38.MsgCreateValidatorAmino) => _38.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _38.MsgEditValidator) => _38.MsgEditValidatorAmino;
                    fromAmino: (object: _38.MsgEditValidatorAmino) => _38.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgDelegate) => _38.MsgDelegateAmino;
                    fromAmino: (object: _38.MsgDelegateAmino) => _38.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgBeginRedelegate) => _38.MsgBeginRedelegateAmino;
                    fromAmino: (object: _38.MsgBeginRedelegateAmino) => _38.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _38.MsgUndelegate) => _38.MsgUndelegateAmino;
                    fromAmino: (object: _38.MsgUndelegateAmino) => _38.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgCreateValidator;
                isSDK(o: any): o is _38.MsgCreateValidatorSDKType;
                isAmino(o: any): o is _38.MsgCreateValidatorAmino;
                encode(message: _38.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgCreateValidator;
                fromJSON(object: any): _38.MsgCreateValidator;
                toJSON(message: _38.MsgCreateValidator): {
                    description: {
                        moniker: string;
                        identity: string;
                        website: string;
                        securityContact: string;
                        details: string;
                    };
                    commission: {
                        rate: string;
                        maxRate: string;
                        maxChangeRate: string;
                    };
                    minSelfDelegation: string;
                    delegatorAddress: string;
                    validatorAddress: string;
                    pubkey?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    };
                    value: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_38.MsgCreateValidator>): _38.MsgCreateValidator;
                fromAmino(object: _38.MsgCreateValidatorAmino): _38.MsgCreateValidator;
                toAmino(message: _38.MsgCreateValidator): _38.MsgCreateValidatorAmino;
                fromAminoMsg(object: _38.MsgCreateValidatorAminoMsg): _38.MsgCreateValidator;
                toAminoMsg(message: _38.MsgCreateValidator): _38.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _38.MsgCreateValidatorProtoMsg): _38.MsgCreateValidator;
                toProto(message: _38.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _38.MsgCreateValidator): _38.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgCreateValidatorResponse;
                isSDK(o: any): o is _38.MsgCreateValidatorResponseSDKType;
                isAmino(o: any): o is _38.MsgCreateValidatorResponseAmino;
                encode(_: _38.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgCreateValidatorResponse;
                fromJSON(_: any): _38.MsgCreateValidatorResponse;
                toJSON(_: _38.MsgCreateValidatorResponse): {};
                fromPartial(_: Partial<_38.MsgCreateValidatorResponse>): _38.MsgCreateValidatorResponse;
                fromAmino(_: _38.MsgCreateValidatorResponseAmino): _38.MsgCreateValidatorResponse;
                toAmino(_: _38.MsgCreateValidatorResponse): _38.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _38.MsgCreateValidatorResponseAminoMsg): _38.MsgCreateValidatorResponse;
                toAminoMsg(message: _38.MsgCreateValidatorResponse): _38.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.MsgCreateValidatorResponseProtoMsg): _38.MsgCreateValidatorResponse;
                toProto(message: _38.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.MsgCreateValidatorResponse): _38.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgEditValidator;
                isSDK(o: any): o is _38.MsgEditValidatorSDKType;
                isAmino(o: any): o is _38.MsgEditValidatorAmino;
                encode(message: _38.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgEditValidator;
                fromJSON(object: any): _38.MsgEditValidator;
                toJSON(message: _38.MsgEditValidator): {
                    description: {
                        moniker: string;
                        identity: string;
                        website: string;
                        securityContact: string;
                        details: string;
                    };
                    validatorAddress: string;
                    commissionRate: string;
                    minSelfDelegation: string;
                };
                fromPartial(object: Partial<_38.MsgEditValidator>): _38.MsgEditValidator;
                fromAmino(object: _38.MsgEditValidatorAmino): _38.MsgEditValidator;
                toAmino(message: _38.MsgEditValidator): _38.MsgEditValidatorAmino;
                fromAminoMsg(object: _38.MsgEditValidatorAminoMsg): _38.MsgEditValidator;
                toAminoMsg(message: _38.MsgEditValidator): _38.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _38.MsgEditValidatorProtoMsg): _38.MsgEditValidator;
                toProto(message: _38.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _38.MsgEditValidator): _38.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgEditValidatorResponse;
                isSDK(o: any): o is _38.MsgEditValidatorResponseSDKType;
                isAmino(o: any): o is _38.MsgEditValidatorResponseAmino;
                encode(_: _38.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgEditValidatorResponse;
                fromJSON(_: any): _38.MsgEditValidatorResponse;
                toJSON(_: _38.MsgEditValidatorResponse): {};
                fromPartial(_: Partial<_38.MsgEditValidatorResponse>): _38.MsgEditValidatorResponse;
                fromAmino(_: _38.MsgEditValidatorResponseAmino): _38.MsgEditValidatorResponse;
                toAmino(_: _38.MsgEditValidatorResponse): _38.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _38.MsgEditValidatorResponseAminoMsg): _38.MsgEditValidatorResponse;
                toAminoMsg(message: _38.MsgEditValidatorResponse): _38.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _38.MsgEditValidatorResponseProtoMsg): _38.MsgEditValidatorResponse;
                toProto(message: _38.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _38.MsgEditValidatorResponse): _38.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgDelegate;
                isSDK(o: any): o is _38.MsgDelegateSDKType;
                isAmino(o: any): o is _38.MsgDelegateAmino;
                encode(message: _38.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgDelegate;
                fromJSON(object: any): _38.MsgDelegate;
                toJSON(message: _38.MsgDelegate): {
                    delegatorAddress: string;
                    validatorAddress: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_38.MsgDelegate>): _38.MsgDelegate;
                fromAmino(object: _38.MsgDelegateAmino): _38.MsgDelegate;
                toAmino(message: _38.MsgDelegate): _38.MsgDelegateAmino;
                fromAminoMsg(object: _38.MsgDelegateAminoMsg): _38.MsgDelegate;
                toAminoMsg(message: _38.MsgDelegate): _38.MsgDelegateAminoMsg;
                fromProtoMsg(message: _38.MsgDelegateProtoMsg): _38.MsgDelegate;
                toProto(message: _38.MsgDelegate): Uint8Array;
                toProtoMsg(message: _38.MsgDelegate): _38.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgDelegateResponse;
                isSDK(o: any): o is _38.MsgDelegateResponseSDKType;
                isAmino(o: any): o is _38.MsgDelegateResponseAmino;
                encode(_: _38.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgDelegateResponse;
                fromJSON(_: any): _38.MsgDelegateResponse;
                toJSON(_: _38.MsgDelegateResponse): {};
                fromPartial(_: Partial<_38.MsgDelegateResponse>): _38.MsgDelegateResponse;
                fromAmino(_: _38.MsgDelegateResponseAmino): _38.MsgDelegateResponse;
                toAmino(_: _38.MsgDelegateResponse): _38.MsgDelegateResponseAmino;
                fromAminoMsg(object: _38.MsgDelegateResponseAminoMsg): _38.MsgDelegateResponse;
                toAminoMsg(message: _38.MsgDelegateResponse): _38.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _38.MsgDelegateResponseProtoMsg): _38.MsgDelegateResponse;
                toProto(message: _38.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgDelegateResponse): _38.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgBeginRedelegate;
                isSDK(o: any): o is _38.MsgBeginRedelegateSDKType;
                isAmino(o: any): o is _38.MsgBeginRedelegateAmino;
                encode(message: _38.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgBeginRedelegate;
                fromJSON(object: any): _38.MsgBeginRedelegate;
                toJSON(message: _38.MsgBeginRedelegate): {
                    delegatorAddress: string;
                    validatorSrcAddress: string;
                    validatorDstAddress: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_38.MsgBeginRedelegate>): _38.MsgBeginRedelegate;
                fromAmino(object: _38.MsgBeginRedelegateAmino): _38.MsgBeginRedelegate;
                toAmino(message: _38.MsgBeginRedelegate): _38.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _38.MsgBeginRedelegateAminoMsg): _38.MsgBeginRedelegate;
                toAminoMsg(message: _38.MsgBeginRedelegate): _38.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _38.MsgBeginRedelegateProtoMsg): _38.MsgBeginRedelegate;
                toProto(message: _38.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _38.MsgBeginRedelegate): _38.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgBeginRedelegateResponse;
                isSDK(o: any): o is _38.MsgBeginRedelegateResponseSDKType;
                isAmino(o: any): o is _38.MsgBeginRedelegateResponseAmino;
                encode(message: _38.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgBeginRedelegateResponse;
                fromJSON(object: any): _38.MsgBeginRedelegateResponse;
                toJSON(message: _38.MsgBeginRedelegateResponse): {
                    completionTime: string;
                };
                fromPartial(object: Partial<_38.MsgBeginRedelegateResponse>): _38.MsgBeginRedelegateResponse;
                fromAmino(object: _38.MsgBeginRedelegateResponseAmino): _38.MsgBeginRedelegateResponse;
                toAmino(message: _38.MsgBeginRedelegateResponse): _38.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _38.MsgBeginRedelegateResponseAminoMsg): _38.MsgBeginRedelegateResponse;
                toAminoMsg(message: _38.MsgBeginRedelegateResponse): _38.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _38.MsgBeginRedelegateResponseProtoMsg): _38.MsgBeginRedelegateResponse;
                toProto(message: _38.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgBeginRedelegateResponse): _38.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgUndelegate;
                isSDK(o: any): o is _38.MsgUndelegateSDKType;
                isAmino(o: any): o is _38.MsgUndelegateAmino;
                encode(message: _38.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgUndelegate;
                fromJSON(object: any): _38.MsgUndelegate;
                toJSON(message: _38.MsgUndelegate): {
                    delegatorAddress: string;
                    validatorAddress: string;
                    amount: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_38.MsgUndelegate>): _38.MsgUndelegate;
                fromAmino(object: _38.MsgUndelegateAmino): _38.MsgUndelegate;
                toAmino(message: _38.MsgUndelegate): _38.MsgUndelegateAmino;
                fromAminoMsg(object: _38.MsgUndelegateAminoMsg): _38.MsgUndelegate;
                toAminoMsg(message: _38.MsgUndelegate): _38.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _38.MsgUndelegateProtoMsg): _38.MsgUndelegate;
                toProto(message: _38.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _38.MsgUndelegate): _38.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.MsgUndelegateResponse;
                isSDK(o: any): o is _38.MsgUndelegateResponseSDKType;
                isAmino(o: any): o is _38.MsgUndelegateResponseAmino;
                encode(message: _38.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _38.MsgUndelegateResponse;
                fromJSON(object: any): _38.MsgUndelegateResponse;
                toJSON(message: _38.MsgUndelegateResponse): {
                    completionTime: string;
                };
                fromPartial(object: Partial<_38.MsgUndelegateResponse>): _38.MsgUndelegateResponse;
                fromAmino(object: _38.MsgUndelegateResponseAmino): _38.MsgUndelegateResponse;
                toAmino(message: _38.MsgUndelegateResponse): _38.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _38.MsgUndelegateResponseAminoMsg): _38.MsgUndelegateResponse;
                toAminoMsg(message: _38.MsgUndelegateResponse): _38.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _38.MsgUndelegateResponseProtoMsg): _38.MsgUndelegateResponse;
                toProto(message: _38.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _38.MsgUndelegateResponse): _38.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _37.BondStatus;
            bondStatusToJSON(object: _37.BondStatus): string;
            BondStatus: typeof _37.BondStatus;
            BondStatusSDKType: typeof _37.BondStatus;
            BondStatusAmino: typeof _37.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.HistoricalInfo;
                isSDK(o: any): o is _37.HistoricalInfoSDKType;
                isAmino(o: any): o is _37.HistoricalInfoAmino;
                encode(message: _37.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.HistoricalInfo;
                fromJSON(object: any): _37.HistoricalInfo;
                toJSON(message: _37.HistoricalInfo): {
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
                    valset: {
                        operatorAddress: string;
                        consensusPubkey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        jailed: boolean;
                        status: _37.BondStatus;
                        tokens: string;
                        delegatorShares: string;
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            securityContact: string;
                            details: string;
                        };
                        unbondingHeight: string;
                        unbondingTime: string;
                        commission: {
                            commissionRates: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            updateTime: string;
                        };
                        minSelfDelegation: string;
                    }[];
                };
                fromPartial(object: Partial<_37.HistoricalInfo>): _37.HistoricalInfo;
                fromAmino(object: _37.HistoricalInfoAmino): _37.HistoricalInfo;
                toAmino(message: _37.HistoricalInfo): _37.HistoricalInfoAmino;
                fromAminoMsg(object: _37.HistoricalInfoAminoMsg): _37.HistoricalInfo;
                toAminoMsg(message: _37.HistoricalInfo): _37.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _37.HistoricalInfoProtoMsg): _37.HistoricalInfo;
                toProto(message: _37.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _37.HistoricalInfo): _37.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.CommissionRates;
                isSDK(o: any): o is _37.CommissionRatesSDKType;
                isAmino(o: any): o is _37.CommissionRatesAmino;
                encode(message: _37.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.CommissionRates;
                fromJSON(object: any): _37.CommissionRates;
                toJSON(message: _37.CommissionRates): {
                    rate: string;
                    maxRate: string;
                    maxChangeRate: string;
                };
                fromPartial(object: Partial<_37.CommissionRates>): _37.CommissionRates;
                fromAmino(object: _37.CommissionRatesAmino): _37.CommissionRates;
                toAmino(message: _37.CommissionRates): _37.CommissionRatesAmino;
                fromAminoMsg(object: _37.CommissionRatesAminoMsg): _37.CommissionRates;
                toAminoMsg(message: _37.CommissionRates): _37.CommissionRatesAminoMsg;
                fromProtoMsg(message: _37.CommissionRatesProtoMsg): _37.CommissionRates;
                toProto(message: _37.CommissionRates): Uint8Array;
                toProtoMsg(message: _37.CommissionRates): _37.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Commission;
                isSDK(o: any): o is _37.CommissionSDKType;
                isAmino(o: any): o is _37.CommissionAmino;
                encode(message: _37.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Commission;
                fromJSON(object: any): _37.Commission;
                toJSON(message: _37.Commission): {
                    commissionRates: {
                        rate: string;
                        maxRate: string;
                        maxChangeRate: string;
                    };
                    updateTime: string;
                };
                fromPartial(object: Partial<_37.Commission>): _37.Commission;
                fromAmino(object: _37.CommissionAmino): _37.Commission;
                toAmino(message: _37.Commission): _37.CommissionAmino;
                fromAminoMsg(object: _37.CommissionAminoMsg): _37.Commission;
                toAminoMsg(message: _37.Commission): _37.CommissionAminoMsg;
                fromProtoMsg(message: _37.CommissionProtoMsg): _37.Commission;
                toProto(message: _37.Commission): Uint8Array;
                toProtoMsg(message: _37.Commission): _37.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Description;
                isSDK(o: any): o is _37.DescriptionSDKType;
                isAmino(o: any): o is _37.DescriptionAmino;
                encode(message: _37.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Description;
                fromJSON(object: any): _37.Description;
                toJSON(message: _37.Description): {
                    moniker: string;
                    identity: string;
                    website: string;
                    securityContact: string;
                    details: string;
                };
                fromPartial(object: Partial<_37.Description>): _37.Description;
                fromAmino(object: _37.DescriptionAmino): _37.Description;
                toAmino(message: _37.Description): _37.DescriptionAmino;
                fromAminoMsg(object: _37.DescriptionAminoMsg): _37.Description;
                toAminoMsg(message: _37.Description): _37.DescriptionAminoMsg;
                fromProtoMsg(message: _37.DescriptionProtoMsg): _37.Description;
                toProto(message: _37.Description): Uint8Array;
                toProtoMsg(message: _37.Description): _37.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Validator;
                isSDK(o: any): o is _37.ValidatorSDKType;
                isAmino(o: any): o is _37.ValidatorAmino;
                encode(message: _37.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Validator;
                fromJSON(object: any): _37.Validator;
                toJSON(message: _37.Validator): {
                    operatorAddress: string;
                    consensusPubkey?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    };
                    jailed: boolean;
                    status: _37.BondStatus;
                    tokens: string;
                    delegatorShares: string;
                    description: {
                        moniker: string;
                        identity: string;
                        website: string;
                        securityContact: string;
                        details: string;
                    };
                    unbondingHeight: string;
                    unbondingTime: string;
                    commission: {
                        commissionRates: {
                            rate: string;
                            maxRate: string;
                            maxChangeRate: string;
                        };
                        updateTime: string;
                    };
                    minSelfDelegation: string;
                };
                fromPartial(object: Partial<_37.Validator>): _37.Validator;
                fromAmino(object: _37.ValidatorAmino): _37.Validator;
                toAmino(message: _37.Validator): _37.ValidatorAmino;
                fromAminoMsg(object: _37.ValidatorAminoMsg): _37.Validator;
                toAminoMsg(message: _37.Validator): _37.ValidatorAminoMsg;
                fromProtoMsg(message: _37.ValidatorProtoMsg): _37.Validator;
                toProto(message: _37.Validator): Uint8Array;
                toProtoMsg(message: _37.Validator): _37.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.ValAddresses;
                isSDK(o: any): o is _37.ValAddressesSDKType;
                isAmino(o: any): o is _37.ValAddressesAmino;
                encode(message: _37.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.ValAddresses;
                fromJSON(object: any): _37.ValAddresses;
                toJSON(message: _37.ValAddresses): {
                    addresses: string[];
                };
                fromPartial(object: Partial<_37.ValAddresses>): _37.ValAddresses;
                fromAmino(object: _37.ValAddressesAmino): _37.ValAddresses;
                toAmino(message: _37.ValAddresses): _37.ValAddressesAmino;
                fromAminoMsg(object: _37.ValAddressesAminoMsg): _37.ValAddresses;
                toAminoMsg(message: _37.ValAddresses): _37.ValAddressesAminoMsg;
                fromProtoMsg(message: _37.ValAddressesProtoMsg): _37.ValAddresses;
                toProto(message: _37.ValAddresses): Uint8Array;
                toProtoMsg(message: _37.ValAddresses): _37.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.DVPair;
                isSDK(o: any): o is _37.DVPairSDKType;
                isAmino(o: any): o is _37.DVPairAmino;
                encode(message: _37.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DVPair;
                fromJSON(object: any): _37.DVPair;
                toJSON(message: _37.DVPair): {
                    delegatorAddress: string;
                    validatorAddress: string;
                };
                fromPartial(object: Partial<_37.DVPair>): _37.DVPair;
                fromAmino(object: _37.DVPairAmino): _37.DVPair;
                toAmino(message: _37.DVPair): _37.DVPairAmino;
                fromAminoMsg(object: _37.DVPairAminoMsg): _37.DVPair;
                toAminoMsg(message: _37.DVPair): _37.DVPairAminoMsg;
                fromProtoMsg(message: _37.DVPairProtoMsg): _37.DVPair;
                toProto(message: _37.DVPair): Uint8Array;
                toProtoMsg(message: _37.DVPair): _37.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.DVPairs;
                isSDK(o: any): o is _37.DVPairsSDKType;
                isAmino(o: any): o is _37.DVPairsAmino;
                encode(message: _37.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DVPairs;
                fromJSON(object: any): _37.DVPairs;
                toJSON(message: _37.DVPairs): {
                    pairs: {
                        delegatorAddress: string;
                        validatorAddress: string;
                    }[];
                };
                fromPartial(object: Partial<_37.DVPairs>): _37.DVPairs;
                fromAmino(object: _37.DVPairsAmino): _37.DVPairs;
                toAmino(message: _37.DVPairs): _37.DVPairsAmino;
                fromAminoMsg(object: _37.DVPairsAminoMsg): _37.DVPairs;
                toAminoMsg(message: _37.DVPairs): _37.DVPairsAminoMsg;
                fromProtoMsg(message: _37.DVPairsProtoMsg): _37.DVPairs;
                toProto(message: _37.DVPairs): Uint8Array;
                toProtoMsg(message: _37.DVPairs): _37.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.DVVTriplet;
                isSDK(o: any): o is _37.DVVTripletSDKType;
                isAmino(o: any): o is _37.DVVTripletAmino;
                encode(message: _37.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DVVTriplet;
                fromJSON(object: any): _37.DVVTriplet;
                toJSON(message: _37.DVVTriplet): {
                    delegatorAddress: string;
                    validatorSrcAddress: string;
                    validatorDstAddress: string;
                };
                fromPartial(object: Partial<_37.DVVTriplet>): _37.DVVTriplet;
                fromAmino(object: _37.DVVTripletAmino): _37.DVVTriplet;
                toAmino(message: _37.DVVTriplet): _37.DVVTripletAmino;
                fromAminoMsg(object: _37.DVVTripletAminoMsg): _37.DVVTriplet;
                toAminoMsg(message: _37.DVVTriplet): _37.DVVTripletAminoMsg;
                fromProtoMsg(message: _37.DVVTripletProtoMsg): _37.DVVTriplet;
                toProto(message: _37.DVVTriplet): Uint8Array;
                toProtoMsg(message: _37.DVVTriplet): _37.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.DVVTriplets;
                isSDK(o: any): o is _37.DVVTripletsSDKType;
                isAmino(o: any): o is _37.DVVTripletsAmino;
                encode(message: _37.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DVVTriplets;
                fromJSON(object: any): _37.DVVTriplets;
                toJSON(message: _37.DVVTriplets): {
                    triplets: {
                        delegatorAddress: string;
                        validatorSrcAddress: string;
                        validatorDstAddress: string;
                    }[];
                };
                fromPartial(object: Partial<_37.DVVTriplets>): _37.DVVTriplets;
                fromAmino(object: _37.DVVTripletsAmino): _37.DVVTriplets;
                toAmino(message: _37.DVVTriplets): _37.DVVTripletsAmino;
                fromAminoMsg(object: _37.DVVTripletsAminoMsg): _37.DVVTriplets;
                toAminoMsg(message: _37.DVVTriplets): _37.DVVTripletsAminoMsg;
                fromProtoMsg(message: _37.DVVTripletsProtoMsg): _37.DVVTriplets;
                toProto(message: _37.DVVTriplets): Uint8Array;
                toProtoMsg(message: _37.DVVTriplets): _37.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Delegation;
                isSDK(o: any): o is _37.DelegationSDKType;
                isAmino(o: any): o is _37.DelegationAmino;
                encode(message: _37.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Delegation;
                fromJSON(object: any): _37.Delegation;
                toJSON(message: _37.Delegation): {
                    delegatorAddress: string;
                    validatorAddress: string;
                    shares: string;
                };
                fromPartial(object: Partial<_37.Delegation>): _37.Delegation;
                fromAmino(object: _37.DelegationAmino): _37.Delegation;
                toAmino(message: _37.Delegation): _37.DelegationAmino;
                fromAminoMsg(object: _37.DelegationAminoMsg): _37.Delegation;
                toAminoMsg(message: _37.Delegation): _37.DelegationAminoMsg;
                fromProtoMsg(message: _37.DelegationProtoMsg): _37.Delegation;
                toProto(message: _37.Delegation): Uint8Array;
                toProtoMsg(message: _37.Delegation): _37.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.UnbondingDelegation;
                isSDK(o: any): o is _37.UnbondingDelegationSDKType;
                isAmino(o: any): o is _37.UnbondingDelegationAmino;
                encode(message: _37.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.UnbondingDelegation;
                fromJSON(object: any): _37.UnbondingDelegation;
                toJSON(message: _37.UnbondingDelegation): {
                    delegatorAddress: string;
                    validatorAddress: string;
                    entries: {
                        creationHeight: string;
                        completionTime: string;
                        initialBalance: string;
                        balance: string;
                    }[];
                };
                fromPartial(object: Partial<_37.UnbondingDelegation>): _37.UnbondingDelegation;
                fromAmino(object: _37.UnbondingDelegationAmino): _37.UnbondingDelegation;
                toAmino(message: _37.UnbondingDelegation): _37.UnbondingDelegationAmino;
                fromAminoMsg(object: _37.UnbondingDelegationAminoMsg): _37.UnbondingDelegation;
                toAminoMsg(message: _37.UnbondingDelegation): _37.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _37.UnbondingDelegationProtoMsg): _37.UnbondingDelegation;
                toProto(message: _37.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _37.UnbondingDelegation): _37.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.UnbondingDelegationEntry;
                isSDK(o: any): o is _37.UnbondingDelegationEntrySDKType;
                isAmino(o: any): o is _37.UnbondingDelegationEntryAmino;
                encode(message: _37.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.UnbondingDelegationEntry;
                fromJSON(object: any): _37.UnbondingDelegationEntry;
                toJSON(message: _37.UnbondingDelegationEntry): {
                    creationHeight: string;
                    completionTime: string;
                    initialBalance: string;
                    balance: string;
                };
                fromPartial(object: Partial<_37.UnbondingDelegationEntry>): _37.UnbondingDelegationEntry;
                fromAmino(object: _37.UnbondingDelegationEntryAmino): _37.UnbondingDelegationEntry;
                toAmino(message: _37.UnbondingDelegationEntry): _37.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _37.UnbondingDelegationEntryAminoMsg): _37.UnbondingDelegationEntry;
                toAminoMsg(message: _37.UnbondingDelegationEntry): _37.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _37.UnbondingDelegationEntryProtoMsg): _37.UnbondingDelegationEntry;
                toProto(message: _37.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _37.UnbondingDelegationEntry): _37.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.RedelegationEntry;
                isSDK(o: any): o is _37.RedelegationEntrySDKType;
                isAmino(o: any): o is _37.RedelegationEntryAmino;
                encode(message: _37.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.RedelegationEntry;
                fromJSON(object: any): _37.RedelegationEntry;
                toJSON(message: _37.RedelegationEntry): {
                    creationHeight: string;
                    completionTime: string;
                    initialBalance: string;
                    sharesDst: string;
                };
                fromPartial(object: Partial<_37.RedelegationEntry>): _37.RedelegationEntry;
                fromAmino(object: _37.RedelegationEntryAmino): _37.RedelegationEntry;
                toAmino(message: _37.RedelegationEntry): _37.RedelegationEntryAmino;
                fromAminoMsg(object: _37.RedelegationEntryAminoMsg): _37.RedelegationEntry;
                toAminoMsg(message: _37.RedelegationEntry): _37.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _37.RedelegationEntryProtoMsg): _37.RedelegationEntry;
                toProto(message: _37.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _37.RedelegationEntry): _37.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Redelegation;
                isSDK(o: any): o is _37.RedelegationSDKType;
                isAmino(o: any): o is _37.RedelegationAmino;
                encode(message: _37.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Redelegation;
                fromJSON(object: any): _37.Redelegation;
                toJSON(message: _37.Redelegation): {
                    delegatorAddress: string;
                    validatorSrcAddress: string;
                    validatorDstAddress: string;
                    entries: {
                        creationHeight: string;
                        completionTime: string;
                        initialBalance: string;
                        sharesDst: string;
                    }[];
                };
                fromPartial(object: Partial<_37.Redelegation>): _37.Redelegation;
                fromAmino(object: _37.RedelegationAmino): _37.Redelegation;
                toAmino(message: _37.Redelegation): _37.RedelegationAmino;
                fromAminoMsg(object: _37.RedelegationAminoMsg): _37.Redelegation;
                toAminoMsg(message: _37.Redelegation): _37.RedelegationAminoMsg;
                fromProtoMsg(message: _37.RedelegationProtoMsg): _37.Redelegation;
                toProto(message: _37.Redelegation): Uint8Array;
                toProtoMsg(message: _37.Redelegation): _37.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Params;
                isSDK(o: any): o is _37.ParamsSDKType;
                isAmino(o: any): o is _37.ParamsAmino;
                encode(message: _37.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Params;
                fromJSON(object: any): _37.Params;
                toJSON(message: _37.Params): {
                    unbondingTime: {
                        seconds: string;
                        nanos: number;
                    };
                    maxValidators: number;
                    maxEntries: number;
                    historicalEntries: number;
                    bondDenom: string;
                    minCommissionRate: string;
                };
                fromPartial(object: Partial<_37.Params>): _37.Params;
                fromAmino(object: _37.ParamsAmino): _37.Params;
                toAmino(message: _37.Params): _37.ParamsAmino;
                fromAminoMsg(object: _37.ParamsAminoMsg): _37.Params;
                toAminoMsg(message: _37.Params): _37.ParamsAminoMsg;
                fromProtoMsg(message: _37.ParamsProtoMsg): _37.Params;
                toProto(message: _37.Params): Uint8Array;
                toProtoMsg(message: _37.Params): _37.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.DelegationResponse;
                isSDK(o: any): o is _37.DelegationResponseSDKType;
                isAmino(o: any): o is _37.DelegationResponseAmino;
                encode(message: _37.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.DelegationResponse;
                fromJSON(object: any): _37.DelegationResponse;
                toJSON(message: _37.DelegationResponse): {
                    delegation: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        shares: string;
                    };
                    balance: {
                        denom: string;
                        amount: string;
                    };
                };
                fromPartial(object: Partial<_37.DelegationResponse>): _37.DelegationResponse;
                fromAmino(object: _37.DelegationResponseAmino): _37.DelegationResponse;
                toAmino(message: _37.DelegationResponse): _37.DelegationResponseAmino;
                fromAminoMsg(object: _37.DelegationResponseAminoMsg): _37.DelegationResponse;
                toAminoMsg(message: _37.DelegationResponse): _37.DelegationResponseAminoMsg;
                fromProtoMsg(message: _37.DelegationResponseProtoMsg): _37.DelegationResponse;
                toProto(message: _37.DelegationResponse): Uint8Array;
                toProtoMsg(message: _37.DelegationResponse): _37.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.RedelegationEntryResponse;
                isSDK(o: any): o is _37.RedelegationEntryResponseSDKType;
                isAmino(o: any): o is _37.RedelegationEntryResponseAmino;
                encode(message: _37.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.RedelegationEntryResponse;
                fromJSON(object: any): _37.RedelegationEntryResponse;
                toJSON(message: _37.RedelegationEntryResponse): {
                    redelegationEntry: {
                        creationHeight: string;
                        completionTime: string;
                        initialBalance: string;
                        sharesDst: string;
                    };
                    balance: string;
                };
                fromPartial(object: Partial<_37.RedelegationEntryResponse>): _37.RedelegationEntryResponse;
                fromAmino(object: _37.RedelegationEntryResponseAmino): _37.RedelegationEntryResponse;
                toAmino(message: _37.RedelegationEntryResponse): _37.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _37.RedelegationEntryResponseAminoMsg): _37.RedelegationEntryResponse;
                toAminoMsg(message: _37.RedelegationEntryResponse): _37.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _37.RedelegationEntryResponseProtoMsg): _37.RedelegationEntryResponse;
                toProto(message: _37.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _37.RedelegationEntryResponse): _37.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.RedelegationResponse;
                isSDK(o: any): o is _37.RedelegationResponseSDKType;
                isAmino(o: any): o is _37.RedelegationResponseAmino;
                encode(message: _37.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.RedelegationResponse;
                fromJSON(object: any): _37.RedelegationResponse;
                toJSON(message: _37.RedelegationResponse): {
                    redelegation: {
                        delegatorAddress: string;
                        validatorSrcAddress: string;
                        validatorDstAddress: string;
                        entries: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            sharesDst: string;
                        }[];
                    };
                    entries: {
                        redelegationEntry: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            sharesDst: string;
                        };
                        balance: string;
                    }[];
                };
                fromPartial(object: Partial<_37.RedelegationResponse>): _37.RedelegationResponse;
                fromAmino(object: _37.RedelegationResponseAmino): _37.RedelegationResponse;
                toAmino(message: _37.RedelegationResponse): _37.RedelegationResponseAmino;
                fromAminoMsg(object: _37.RedelegationResponseAminoMsg): _37.RedelegationResponse;
                toAminoMsg(message: _37.RedelegationResponse): _37.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _37.RedelegationResponseProtoMsg): _37.RedelegationResponse;
                toProto(message: _37.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _37.RedelegationResponse): _37.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Pool;
                isSDK(o: any): o is _37.PoolSDKType;
                isAmino(o: any): o is _37.PoolAmino;
                encode(message: _37.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _37.Pool;
                fromJSON(object: any): _37.Pool;
                toJSON(message: _37.Pool): {
                    notBondedTokens: string;
                    bondedTokens: string;
                };
                fromPartial(object: Partial<_37.Pool>): _37.Pool;
                fromAmino(object: _37.PoolAmino): _37.Pool;
                toAmino(message: _37.Pool): _37.PoolAmino;
                fromAminoMsg(object: _37.PoolAminoMsg): _37.Pool;
                toAminoMsg(message: _37.Pool): _37.PoolAminoMsg;
                fromProtoMsg(message: _37.PoolProtoMsg): _37.Pool;
                toProto(message: _37.Pool): Uint8Array;
                toProtoMsg(message: _37.Pool): _37.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorsRequest;
                isSDK(o: any): o is _36.QueryValidatorsRequestSDKType;
                isAmino(o: any): o is _36.QueryValidatorsRequestAmino;
                encode(message: _36.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorsRequest;
                fromJSON(object: any): _36.QueryValidatorsRequest;
                toJSON(message: _36.QueryValidatorsRequest): {
                    status: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorsRequest>): _36.QueryValidatorsRequest;
                fromAmino(object: _36.QueryValidatorsRequestAmino): _36.QueryValidatorsRequest;
                toAmino(message: _36.QueryValidatorsRequest): _36.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorsRequestAminoMsg): _36.QueryValidatorsRequest;
                toAminoMsg(message: _36.QueryValidatorsRequest): _36.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorsRequestProtoMsg): _36.QueryValidatorsRequest;
                toProto(message: _36.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorsRequest): _36.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorsResponse;
                isSDK(o: any): o is _36.QueryValidatorsResponseSDKType;
                isAmino(o: any): o is _36.QueryValidatorsResponseAmino;
                encode(message: _36.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorsResponse;
                fromJSON(object: any): _36.QueryValidatorsResponse;
                toJSON(message: _36.QueryValidatorsResponse): {
                    validators: {
                        operatorAddress: string;
                        consensusPubkey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        jailed: boolean;
                        status: _37.BondStatus;
                        tokens: string;
                        delegatorShares: string;
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            securityContact: string;
                            details: string;
                        };
                        unbondingHeight: string;
                        unbondingTime: string;
                        commission: {
                            commissionRates: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            updateTime: string;
                        };
                        minSelfDelegation: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorsResponse>): _36.QueryValidatorsResponse;
                fromAmino(object: _36.QueryValidatorsResponseAmino): _36.QueryValidatorsResponse;
                toAmino(message: _36.QueryValidatorsResponse): _36.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorsResponseAminoMsg): _36.QueryValidatorsResponse;
                toAminoMsg(message: _36.QueryValidatorsResponse): _36.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorsResponseProtoMsg): _36.QueryValidatorsResponse;
                toProto(message: _36.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorsResponse): _36.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorRequest;
                isSDK(o: any): o is _36.QueryValidatorRequestSDKType;
                isAmino(o: any): o is _36.QueryValidatorRequestAmino;
                encode(message: _36.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorRequest;
                fromJSON(object: any): _36.QueryValidatorRequest;
                toJSON(message: _36.QueryValidatorRequest): {
                    validatorAddr: string;
                };
                fromPartial(object: Partial<_36.QueryValidatorRequest>): _36.QueryValidatorRequest;
                fromAmino(object: _36.QueryValidatorRequestAmino): _36.QueryValidatorRequest;
                toAmino(message: _36.QueryValidatorRequest): _36.QueryValidatorRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorRequestAminoMsg): _36.QueryValidatorRequest;
                toAminoMsg(message: _36.QueryValidatorRequest): _36.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorRequestProtoMsg): _36.QueryValidatorRequest;
                toProto(message: _36.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorRequest): _36.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorResponse;
                isSDK(o: any): o is _36.QueryValidatorResponseSDKType;
                isAmino(o: any): o is _36.QueryValidatorResponseAmino;
                encode(message: _36.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorResponse;
                fromJSON(object: any): _36.QueryValidatorResponse;
                toJSON(message: _36.QueryValidatorResponse): {
                    validator: {
                        operatorAddress: string;
                        consensusPubkey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        jailed: boolean;
                        status: _37.BondStatus;
                        tokens: string;
                        delegatorShares: string;
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            securityContact: string;
                            details: string;
                        };
                        unbondingHeight: string;
                        unbondingTime: string;
                        commission: {
                            commissionRates: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            updateTime: string;
                        };
                        minSelfDelegation: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorResponse>): _36.QueryValidatorResponse;
                fromAmino(object: _36.QueryValidatorResponseAmino): _36.QueryValidatorResponse;
                toAmino(message: _36.QueryValidatorResponse): _36.QueryValidatorResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorResponseAminoMsg): _36.QueryValidatorResponse;
                toAminoMsg(message: _36.QueryValidatorResponse): _36.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorResponseProtoMsg): _36.QueryValidatorResponse;
                toProto(message: _36.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorResponse): _36.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorDelegationsRequest;
                isSDK(o: any): o is _36.QueryValidatorDelegationsRequestSDKType;
                isAmino(o: any): o is _36.QueryValidatorDelegationsRequestAmino;
                encode(message: _36.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _36.QueryValidatorDelegationsRequest;
                toJSON(message: _36.QueryValidatorDelegationsRequest): {
                    validatorAddr: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorDelegationsRequest>): _36.QueryValidatorDelegationsRequest;
                fromAmino(object: _36.QueryValidatorDelegationsRequestAmino): _36.QueryValidatorDelegationsRequest;
                toAmino(message: _36.QueryValidatorDelegationsRequest): _36.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorDelegationsRequestAminoMsg): _36.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _36.QueryValidatorDelegationsRequest): _36.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorDelegationsRequestProtoMsg): _36.QueryValidatorDelegationsRequest;
                toProto(message: _36.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorDelegationsRequest): _36.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorDelegationsResponse;
                isSDK(o: any): o is _36.QueryValidatorDelegationsResponseSDKType;
                isAmino(o: any): o is _36.QueryValidatorDelegationsResponseAmino;
                encode(message: _36.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _36.QueryValidatorDelegationsResponse;
                toJSON(message: _36.QueryValidatorDelegationsResponse): {
                    delegationResponses: {
                        delegation: {
                            delegatorAddress: string;
                            validatorAddress: string;
                            shares: string;
                        };
                        balance: {
                            denom: string;
                            amount: string;
                        };
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorDelegationsResponse>): _36.QueryValidatorDelegationsResponse;
                fromAmino(object: _36.QueryValidatorDelegationsResponseAmino): _36.QueryValidatorDelegationsResponse;
                toAmino(message: _36.QueryValidatorDelegationsResponse): _36.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorDelegationsResponseAminoMsg): _36.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _36.QueryValidatorDelegationsResponse): _36.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorDelegationsResponseProtoMsg): _36.QueryValidatorDelegationsResponse;
                toProto(message: _36.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorDelegationsResponse): _36.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorUnbondingDelegationsRequest;
                isSDK(o: any): o is _36.QueryValidatorUnbondingDelegationsRequestSDKType;
                isAmino(o: any): o is _36.QueryValidatorUnbondingDelegationsRequestAmino;
                encode(message: _36.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _36.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _36.QueryValidatorUnbondingDelegationsRequest): {
                    validatorAddr: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorUnbondingDelegationsRequest>): _36.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _36.QueryValidatorUnbondingDelegationsRequestAmino): _36.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _36.QueryValidatorUnbondingDelegationsRequest): _36.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryValidatorUnbondingDelegationsRequestAminoMsg): _36.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _36.QueryValidatorUnbondingDelegationsRequest): _36.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorUnbondingDelegationsRequestProtoMsg): _36.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _36.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorUnbondingDelegationsRequest): _36.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryValidatorUnbondingDelegationsResponse;
                isSDK(o: any): o is _36.QueryValidatorUnbondingDelegationsResponseSDKType;
                isAmino(o: any): o is _36.QueryValidatorUnbondingDelegationsResponseAmino;
                encode(message: _36.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _36.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _36.QueryValidatorUnbondingDelegationsResponse): {
                    unbondingResponses: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        entries: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            balance: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryValidatorUnbondingDelegationsResponse>): _36.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _36.QueryValidatorUnbondingDelegationsResponseAmino): _36.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _36.QueryValidatorUnbondingDelegationsResponse): _36.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryValidatorUnbondingDelegationsResponseAminoMsg): _36.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _36.QueryValidatorUnbondingDelegationsResponse): _36.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryValidatorUnbondingDelegationsResponseProtoMsg): _36.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _36.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryValidatorUnbondingDelegationsResponse): _36.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegationRequest;
                isSDK(o: any): o is _36.QueryDelegationRequestSDKType;
                isAmino(o: any): o is _36.QueryDelegationRequestAmino;
                encode(message: _36.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegationRequest;
                fromJSON(object: any): _36.QueryDelegationRequest;
                toJSON(message: _36.QueryDelegationRequest): {
                    delegatorAddr: string;
                    validatorAddr: string;
                };
                fromPartial(object: Partial<_36.QueryDelegationRequest>): _36.QueryDelegationRequest;
                fromAmino(object: _36.QueryDelegationRequestAmino): _36.QueryDelegationRequest;
                toAmino(message: _36.QueryDelegationRequest): _36.QueryDelegationRequestAmino;
                fromAminoMsg(object: _36.QueryDelegationRequestAminoMsg): _36.QueryDelegationRequest;
                toAminoMsg(message: _36.QueryDelegationRequest): _36.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationRequestProtoMsg): _36.QueryDelegationRequest;
                toProto(message: _36.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationRequest): _36.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegationResponse;
                isSDK(o: any): o is _36.QueryDelegationResponseSDKType;
                isAmino(o: any): o is _36.QueryDelegationResponseAmino;
                encode(message: _36.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegationResponse;
                fromJSON(object: any): _36.QueryDelegationResponse;
                toJSON(message: _36.QueryDelegationResponse): {
                    delegationResponse?: {
                        delegation: {
                            delegatorAddress: string;
                            validatorAddress: string;
                            shares: string;
                        };
                        balance: {
                            denom: string;
                            amount: string;
                        };
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegationResponse>): _36.QueryDelegationResponse;
                fromAmino(object: _36.QueryDelegationResponseAmino): _36.QueryDelegationResponse;
                toAmino(message: _36.QueryDelegationResponse): _36.QueryDelegationResponseAmino;
                fromAminoMsg(object: _36.QueryDelegationResponseAminoMsg): _36.QueryDelegationResponse;
                toAminoMsg(message: _36.QueryDelegationResponse): _36.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegationResponseProtoMsg): _36.QueryDelegationResponse;
                toProto(message: _36.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegationResponse): _36.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryUnbondingDelegationRequest;
                isSDK(o: any): o is _36.QueryUnbondingDelegationRequestSDKType;
                isAmino(o: any): o is _36.QueryUnbondingDelegationRequestAmino;
                encode(message: _36.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _36.QueryUnbondingDelegationRequest;
                toJSON(message: _36.QueryUnbondingDelegationRequest): {
                    delegatorAddr: string;
                    validatorAddr: string;
                };
                fromPartial(object: Partial<_36.QueryUnbondingDelegationRequest>): _36.QueryUnbondingDelegationRequest;
                fromAmino(object: _36.QueryUnbondingDelegationRequestAmino): _36.QueryUnbondingDelegationRequest;
                toAmino(message: _36.QueryUnbondingDelegationRequest): _36.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _36.QueryUnbondingDelegationRequestAminoMsg): _36.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _36.QueryUnbondingDelegationRequest): _36.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _36.QueryUnbondingDelegationRequestProtoMsg): _36.QueryUnbondingDelegationRequest;
                toProto(message: _36.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _36.QueryUnbondingDelegationRequest): _36.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryUnbondingDelegationResponse;
                isSDK(o: any): o is _36.QueryUnbondingDelegationResponseSDKType;
                isAmino(o: any): o is _36.QueryUnbondingDelegationResponseAmino;
                encode(message: _36.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _36.QueryUnbondingDelegationResponse;
                toJSON(message: _36.QueryUnbondingDelegationResponse): {
                    unbond: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        entries: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            balance: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_36.QueryUnbondingDelegationResponse>): _36.QueryUnbondingDelegationResponse;
                fromAmino(object: _36.QueryUnbondingDelegationResponseAmino): _36.QueryUnbondingDelegationResponse;
                toAmino(message: _36.QueryUnbondingDelegationResponse): _36.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _36.QueryUnbondingDelegationResponseAminoMsg): _36.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _36.QueryUnbondingDelegationResponse): _36.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _36.QueryUnbondingDelegationResponseProtoMsg): _36.QueryUnbondingDelegationResponse;
                toProto(message: _36.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _36.QueryUnbondingDelegationResponse): _36.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorDelegationsRequest;
                isSDK(o: any): o is _36.QueryDelegatorDelegationsRequestSDKType;
                isAmino(o: any): o is _36.QueryDelegatorDelegationsRequestAmino;
                encode(message: _36.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _36.QueryDelegatorDelegationsRequest;
                toJSON(message: _36.QueryDelegatorDelegationsRequest): {
                    delegatorAddr: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorDelegationsRequest>): _36.QueryDelegatorDelegationsRequest;
                fromAmino(object: _36.QueryDelegatorDelegationsRequestAmino): _36.QueryDelegatorDelegationsRequest;
                toAmino(message: _36.QueryDelegatorDelegationsRequest): _36.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorDelegationsRequestAminoMsg): _36.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _36.QueryDelegatorDelegationsRequest): _36.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorDelegationsRequestProtoMsg): _36.QueryDelegatorDelegationsRequest;
                toProto(message: _36.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorDelegationsRequest): _36.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorDelegationsResponse;
                isSDK(o: any): o is _36.QueryDelegatorDelegationsResponseSDKType;
                isAmino(o: any): o is _36.QueryDelegatorDelegationsResponseAmino;
                encode(message: _36.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _36.QueryDelegatorDelegationsResponse;
                toJSON(message: _36.QueryDelegatorDelegationsResponse): {
                    delegationResponses: {
                        delegation: {
                            delegatorAddress: string;
                            validatorAddress: string;
                            shares: string;
                        };
                        balance: {
                            denom: string;
                            amount: string;
                        };
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorDelegationsResponse>): _36.QueryDelegatorDelegationsResponse;
                fromAmino(object: _36.QueryDelegatorDelegationsResponseAmino): _36.QueryDelegatorDelegationsResponse;
                toAmino(message: _36.QueryDelegatorDelegationsResponse): _36.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorDelegationsResponseAminoMsg): _36.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _36.QueryDelegatorDelegationsResponse): _36.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorDelegationsResponseProtoMsg): _36.QueryDelegatorDelegationsResponse;
                toProto(message: _36.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorDelegationsResponse): _36.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorUnbondingDelegationsRequest;
                isSDK(o: any): o is _36.QueryDelegatorUnbondingDelegationsRequestSDKType;
                isAmino(o: any): o is _36.QueryDelegatorUnbondingDelegationsRequestAmino;
                encode(message: _36.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _36.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _36.QueryDelegatorUnbondingDelegationsRequest): {
                    delegatorAddr: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorUnbondingDelegationsRequest>): _36.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _36.QueryDelegatorUnbondingDelegationsRequestAmino): _36.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _36.QueryDelegatorUnbondingDelegationsRequest): _36.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _36.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _36.QueryDelegatorUnbondingDelegationsRequest): _36.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _36.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _36.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsRequest): _36.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorUnbondingDelegationsResponse;
                isSDK(o: any): o is _36.QueryDelegatorUnbondingDelegationsResponseSDKType;
                isAmino(o: any): o is _36.QueryDelegatorUnbondingDelegationsResponseAmino;
                encode(message: _36.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _36.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _36.QueryDelegatorUnbondingDelegationsResponse): {
                    unbondingResponses: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        entries: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            balance: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorUnbondingDelegationsResponse>): _36.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _36.QueryDelegatorUnbondingDelegationsResponseAmino): _36.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _36.QueryDelegatorUnbondingDelegationsResponse): _36.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _36.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _36.QueryDelegatorUnbondingDelegationsResponse): _36.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _36.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _36.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorUnbondingDelegationsResponse): _36.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryRedelegationsRequest;
                isSDK(o: any): o is _36.QueryRedelegationsRequestSDKType;
                isAmino(o: any): o is _36.QueryRedelegationsRequestAmino;
                encode(message: _36.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryRedelegationsRequest;
                fromJSON(object: any): _36.QueryRedelegationsRequest;
                toJSON(message: _36.QueryRedelegationsRequest): {
                    delegatorAddr: string;
                    srcValidatorAddr: string;
                    dstValidatorAddr: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryRedelegationsRequest>): _36.QueryRedelegationsRequest;
                fromAmino(object: _36.QueryRedelegationsRequestAmino): _36.QueryRedelegationsRequest;
                toAmino(message: _36.QueryRedelegationsRequest): _36.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _36.QueryRedelegationsRequestAminoMsg): _36.QueryRedelegationsRequest;
                toAminoMsg(message: _36.QueryRedelegationsRequest): _36.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryRedelegationsRequestProtoMsg): _36.QueryRedelegationsRequest;
                toProto(message: _36.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryRedelegationsRequest): _36.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryRedelegationsResponse;
                isSDK(o: any): o is _36.QueryRedelegationsResponseSDKType;
                isAmino(o: any): o is _36.QueryRedelegationsResponseAmino;
                encode(message: _36.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryRedelegationsResponse;
                fromJSON(object: any): _36.QueryRedelegationsResponse;
                toJSON(message: _36.QueryRedelegationsResponse): {
                    redelegationResponses: {
                        redelegation: {
                            delegatorAddress: string;
                            validatorSrcAddress: string;
                            validatorDstAddress: string;
                            entries: {
                                creationHeight: string;
                                completionTime: string;
                                initialBalance: string;
                                sharesDst: string;
                            }[];
                        };
                        entries: {
                            redelegationEntry: {
                                creationHeight: string;
                                completionTime: string;
                                initialBalance: string;
                                sharesDst: string;
                            };
                            balance: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryRedelegationsResponse>): _36.QueryRedelegationsResponse;
                fromAmino(object: _36.QueryRedelegationsResponseAmino): _36.QueryRedelegationsResponse;
                toAmino(message: _36.QueryRedelegationsResponse): _36.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _36.QueryRedelegationsResponseAminoMsg): _36.QueryRedelegationsResponse;
                toAminoMsg(message: _36.QueryRedelegationsResponse): _36.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryRedelegationsResponseProtoMsg): _36.QueryRedelegationsResponse;
                toProto(message: _36.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryRedelegationsResponse): _36.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorValidatorsRequest;
                isSDK(o: any): o is _36.QueryDelegatorValidatorsRequestSDKType;
                isAmino(o: any): o is _36.QueryDelegatorValidatorsRequestAmino;
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _36.QueryDelegatorValidatorsRequest;
                toJSON(message: _36.QueryDelegatorValidatorsRequest): {
                    delegatorAddr: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsRequest>): _36.QueryDelegatorValidatorsRequest;
                fromAmino(object: _36.QueryDelegatorValidatorsRequestAmino): _36.QueryDelegatorValidatorsRequest;
                toAmino(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorsRequestAminoMsg): _36.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorsRequestProtoMsg): _36.QueryDelegatorValidatorsRequest;
                toProto(message: _36.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorsRequest): _36.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorValidatorsResponse;
                isSDK(o: any): o is _36.QueryDelegatorValidatorsResponseSDKType;
                isAmino(o: any): o is _36.QueryDelegatorValidatorsResponseAmino;
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _36.QueryDelegatorValidatorsResponse;
                toJSON(message: _36.QueryDelegatorValidatorsResponse): {
                    validators: {
                        operatorAddress: string;
                        consensusPubkey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        jailed: boolean;
                        status: _37.BondStatus;
                        tokens: string;
                        delegatorShares: string;
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            securityContact: string;
                            details: string;
                        };
                        unbondingHeight: string;
                        unbondingTime: string;
                        commission: {
                            commissionRates: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            updateTime: string;
                        };
                        minSelfDelegation: string;
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorValidatorsResponse>): _36.QueryDelegatorValidatorsResponse;
                fromAmino(object: _36.QueryDelegatorValidatorsResponseAmino): _36.QueryDelegatorValidatorsResponse;
                toAmino(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorsResponseAminoMsg): _36.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorsResponseProtoMsg): _36.QueryDelegatorValidatorsResponse;
                toProto(message: _36.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorsResponse): _36.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorValidatorRequest;
                isSDK(o: any): o is _36.QueryDelegatorValidatorRequestSDKType;
                isAmino(o: any): o is _36.QueryDelegatorValidatorRequestAmino;
                encode(message: _36.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _36.QueryDelegatorValidatorRequest;
                toJSON(message: _36.QueryDelegatorValidatorRequest): {
                    delegatorAddr: string;
                    validatorAddr: string;
                };
                fromPartial(object: Partial<_36.QueryDelegatorValidatorRequest>): _36.QueryDelegatorValidatorRequest;
                fromAmino(object: _36.QueryDelegatorValidatorRequestAmino): _36.QueryDelegatorValidatorRequest;
                toAmino(message: _36.QueryDelegatorValidatorRequest): _36.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorRequestAminoMsg): _36.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _36.QueryDelegatorValidatorRequest): _36.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorRequestProtoMsg): _36.QueryDelegatorValidatorRequest;
                toProto(message: _36.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorRequest): _36.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryDelegatorValidatorResponse;
                isSDK(o: any): o is _36.QueryDelegatorValidatorResponseSDKType;
                isAmino(o: any): o is _36.QueryDelegatorValidatorResponseAmino;
                encode(message: _36.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _36.QueryDelegatorValidatorResponse;
                toJSON(message: _36.QueryDelegatorValidatorResponse): {
                    validator: {
                        operatorAddress: string;
                        consensusPubkey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        jailed: boolean;
                        status: _37.BondStatus;
                        tokens: string;
                        delegatorShares: string;
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            securityContact: string;
                            details: string;
                        };
                        unbondingHeight: string;
                        unbondingTime: string;
                        commission: {
                            commissionRates: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            updateTime: string;
                        };
                        minSelfDelegation: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryDelegatorValidatorResponse>): _36.QueryDelegatorValidatorResponse;
                fromAmino(object: _36.QueryDelegatorValidatorResponseAmino): _36.QueryDelegatorValidatorResponse;
                toAmino(message: _36.QueryDelegatorValidatorResponse): _36.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _36.QueryDelegatorValidatorResponseAminoMsg): _36.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _36.QueryDelegatorValidatorResponse): _36.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDelegatorValidatorResponseProtoMsg): _36.QueryDelegatorValidatorResponse;
                toProto(message: _36.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDelegatorValidatorResponse): _36.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryHistoricalInfoRequest;
                isSDK(o: any): o is _36.QueryHistoricalInfoRequestSDKType;
                isAmino(o: any): o is _36.QueryHistoricalInfoRequestAmino;
                encode(message: _36.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryHistoricalInfoRequest;
                fromJSON(object: any): _36.QueryHistoricalInfoRequest;
                toJSON(message: _36.QueryHistoricalInfoRequest): {
                    height: string;
                };
                fromPartial(object: Partial<_36.QueryHistoricalInfoRequest>): _36.QueryHistoricalInfoRequest;
                fromAmino(object: _36.QueryHistoricalInfoRequestAmino): _36.QueryHistoricalInfoRequest;
                toAmino(message: _36.QueryHistoricalInfoRequest): _36.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _36.QueryHistoricalInfoRequestAminoMsg): _36.QueryHistoricalInfoRequest;
                toAminoMsg(message: _36.QueryHistoricalInfoRequest): _36.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _36.QueryHistoricalInfoRequestProtoMsg): _36.QueryHistoricalInfoRequest;
                toProto(message: _36.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _36.QueryHistoricalInfoRequest): _36.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryHistoricalInfoResponse;
                isSDK(o: any): o is _36.QueryHistoricalInfoResponseSDKType;
                isAmino(o: any): o is _36.QueryHistoricalInfoResponseAmino;
                encode(message: _36.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryHistoricalInfoResponse;
                fromJSON(object: any): _36.QueryHistoricalInfoResponse;
                toJSON(message: _36.QueryHistoricalInfoResponse): {
                    hist?: {
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
                        valset: {
                            operatorAddress: string;
                            consensusPubkey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            jailed: boolean;
                            status: _37.BondStatus;
                            tokens: string;
                            delegatorShares: string;
                            description: {
                                moniker: string;
                                identity: string;
                                website: string;
                                securityContact: string;
                                details: string;
                            };
                            unbondingHeight: string;
                            unbondingTime: string;
                            commission: {
                                commissionRates: {
                                    rate: string;
                                    maxRate: string;
                                    maxChangeRate: string;
                                };
                                updateTime: string;
                            };
                            minSelfDelegation: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_36.QueryHistoricalInfoResponse>): _36.QueryHistoricalInfoResponse;
                fromAmino(object: _36.QueryHistoricalInfoResponseAmino): _36.QueryHistoricalInfoResponse;
                toAmino(message: _36.QueryHistoricalInfoResponse): _36.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _36.QueryHistoricalInfoResponseAminoMsg): _36.QueryHistoricalInfoResponse;
                toAminoMsg(message: _36.QueryHistoricalInfoResponse): _36.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _36.QueryHistoricalInfoResponseProtoMsg): _36.QueryHistoricalInfoResponse;
                toProto(message: _36.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _36.QueryHistoricalInfoResponse): _36.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryPoolRequest;
                isSDK(o: any): o is _36.QueryPoolRequestSDKType;
                isAmino(o: any): o is _36.QueryPoolRequestAmino;
                encode(_: _36.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryPoolRequest;
                fromJSON(_: any): _36.QueryPoolRequest;
                toJSON(_: _36.QueryPoolRequest): {};
                fromPartial(_: Partial<_36.QueryPoolRequest>): _36.QueryPoolRequest;
                fromAmino(_: _36.QueryPoolRequestAmino): _36.QueryPoolRequest;
                toAmino(_: _36.QueryPoolRequest): _36.QueryPoolRequestAmino;
                fromAminoMsg(object: _36.QueryPoolRequestAminoMsg): _36.QueryPoolRequest;
                toAminoMsg(message: _36.QueryPoolRequest): _36.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _36.QueryPoolRequestProtoMsg): _36.QueryPoolRequest;
                toProto(message: _36.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _36.QueryPoolRequest): _36.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryPoolResponse;
                isSDK(o: any): o is _36.QueryPoolResponseSDKType;
                isAmino(o: any): o is _36.QueryPoolResponseAmino;
                encode(message: _36.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryPoolResponse;
                fromJSON(object: any): _36.QueryPoolResponse;
                toJSON(message: _36.QueryPoolResponse): {
                    pool: {
                        notBondedTokens: string;
                        bondedTokens: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryPoolResponse>): _36.QueryPoolResponse;
                fromAmino(object: _36.QueryPoolResponseAmino): _36.QueryPoolResponse;
                toAmino(message: _36.QueryPoolResponse): _36.QueryPoolResponseAmino;
                fromAminoMsg(object: _36.QueryPoolResponseAminoMsg): _36.QueryPoolResponse;
                toAminoMsg(message: _36.QueryPoolResponse): _36.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _36.QueryPoolResponseProtoMsg): _36.QueryPoolResponse;
                toProto(message: _36.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _36.QueryPoolResponse): _36.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryParamsRequest;
                isSDK(o: any): o is _36.QueryParamsRequestSDKType;
                isAmino(o: any): o is _36.QueryParamsRequestAmino;
                encode(_: _36.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryParamsRequest;
                fromJSON(_: any): _36.QueryParamsRequest;
                toJSON(_: _36.QueryParamsRequest): {};
                fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
                fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
                toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
                fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
                toAminoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
                toProto(message: _36.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.QueryParamsResponse;
                isSDK(o: any): o is _36.QueryParamsResponseSDKType;
                isAmino(o: any): o is _36.QueryParamsResponseAmino;
                encode(message: _36.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _36.QueryParamsResponse;
                fromJSON(object: any): _36.QueryParamsResponse;
                toJSON(message: _36.QueryParamsResponse): {
                    params: {
                        unbondingTime: {
                            seconds: string;
                            nanos: number;
                        };
                        maxValidators: number;
                        maxEntries: number;
                        historicalEntries: number;
                        bondDenom: string;
                        minCommissionRate: string;
                    };
                };
                fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
                fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
                toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
                fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
                toAminoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
                toProto(message: _36.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _35.GenesisState;
                isSDK(o: any): o is _35.GenesisStateSDKType;
                isAmino(o: any): o is _35.GenesisStateAmino;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.GenesisState;
                fromJSON(object: any): _35.GenesisState;
                toJSON(message: _35.GenesisState): {
                    params: {
                        unbondingTime: {
                            seconds: string;
                            nanos: number;
                        };
                        maxValidators: number;
                        maxEntries: number;
                        historicalEntries: number;
                        bondDenom: string;
                        minCommissionRate: string;
                    };
                    lastTotalPower: string;
                    lastValidatorPowers: {
                        address: string;
                        power: string;
                    }[];
                    validators: {
                        operatorAddress: string;
                        consensusPubkey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        jailed: boolean;
                        status: _37.BondStatus;
                        tokens: string;
                        delegatorShares: string;
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            securityContact: string;
                            details: string;
                        };
                        unbondingHeight: string;
                        unbondingTime: string;
                        commission: {
                            commissionRates: {
                                rate: string;
                                maxRate: string;
                                maxChangeRate: string;
                            };
                            updateTime: string;
                        };
                        minSelfDelegation: string;
                    }[];
                    delegations: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        shares: string;
                    }[];
                    unbondingDelegations: {
                        delegatorAddress: string;
                        validatorAddress: string;
                        entries: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            balance: string;
                        }[];
                    }[];
                    redelegations: {
                        delegatorAddress: string;
                        validatorSrcAddress: string;
                        validatorDstAddress: string;
                        entries: {
                            creationHeight: string;
                            completionTime: string;
                            initialBalance: string;
                            sharesDst: string;
                        }[];
                    }[];
                    exported: boolean;
                };
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _35.LastValidatorPower;
                isSDK(o: any): o is _35.LastValidatorPowerSDKType;
                isAmino(o: any): o is _35.LastValidatorPowerAmino;
                encode(message: _35.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _35.LastValidatorPower;
                fromJSON(object: any): _35.LastValidatorPower;
                toJSON(message: _35.LastValidatorPower): {
                    address: string;
                    power: string;
                };
                fromPartial(object: Partial<_35.LastValidatorPower>): _35.LastValidatorPower;
                fromAmino(object: _35.LastValidatorPowerAmino): _35.LastValidatorPower;
                toAmino(message: _35.LastValidatorPower): _35.LastValidatorPowerAmino;
                fromAminoMsg(object: _35.LastValidatorPowerAminoMsg): _35.LastValidatorPower;
                toAminoMsg(message: _35.LastValidatorPower): _35.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _35.LastValidatorPowerProtoMsg): _35.LastValidatorPower;
                toProto(message: _35.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _35.LastValidatorPower): _35.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _34.AuthorizationType;
            authorizationTypeToJSON(object: _34.AuthorizationType): string;
            AuthorizationType: typeof _34.AuthorizationType;
            AuthorizationTypeSDKType: typeof _34.AuthorizationType;
            AuthorizationTypeAmino: typeof _34.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.StakeAuthorization;
                isSDK(o: any): o is _34.StakeAuthorizationSDKType;
                isAmino(o: any): o is _34.StakeAuthorizationAmino;
                encode(message: _34.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.StakeAuthorization;
                fromJSON(object: any): _34.StakeAuthorization;
                toJSON(message: _34.StakeAuthorization): {
                    $typeUrl?: "/cosmos.staking.v1beta1.StakeAuthorization";
                    maxTokens?: {
                        denom: string;
                        amount: string;
                    };
                    allowList?: {
                        address: string[];
                    };
                    denyList?: {
                        address: string[];
                    };
                    authorizationType: _34.AuthorizationType;
                };
                fromPartial(object: Partial<_34.StakeAuthorization>): _34.StakeAuthorization;
                fromAmino(object: _34.StakeAuthorizationAmino): _34.StakeAuthorization;
                toAmino(message: _34.StakeAuthorization): _34.StakeAuthorizationAmino;
                fromAminoMsg(object: _34.StakeAuthorizationAminoMsg): _34.StakeAuthorization;
                toAminoMsg(message: _34.StakeAuthorization): _34.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _34.StakeAuthorizationProtoMsg): _34.StakeAuthorization;
                toProto(message: _34.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _34.StakeAuthorization): _34.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.StakeAuthorization_Validators;
                isSDK(o: any): o is _34.StakeAuthorization_ValidatorsSDKType;
                isAmino(o: any): o is _34.StakeAuthorization_ValidatorsAmino;
                encode(message: _34.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _34.StakeAuthorization_Validators;
                fromJSON(object: any): _34.StakeAuthorization_Validators;
                toJSON(message: _34.StakeAuthorization_Validators): {
                    address: string[];
                };
                fromPartial(object: Partial<_34.StakeAuthorization_Validators>): _34.StakeAuthorization_Validators;
                fromAmino(object: _34.StakeAuthorization_ValidatorsAmino): _34.StakeAuthorization_Validators;
                toAmino(message: _34.StakeAuthorization_Validators): _34.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _34.StakeAuthorization_ValidatorsAminoMsg): _34.StakeAuthorization_Validators;
                toAminoMsg(message: _34.StakeAuthorization_Validators): _34.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _34.StakeAuthorization_ValidatorsProtoMsg): _34.StakeAuthorization_Validators;
                toProto(message: _34.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _34.StakeAuthorization_Validators): _34.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _39.SignMode;
                signModeToJSON(object: _39.SignMode): string;
                SignMode: typeof _39.SignMode;
                SignModeSDKType: typeof _39.SignMode;
                SignModeAmino: typeof _39.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _39.SignatureDescriptors;
                    isSDK(o: any): o is _39.SignatureDescriptorsSDKType;
                    isAmino(o: any): o is _39.SignatureDescriptorsAmino;
                    encode(message: _39.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.SignatureDescriptors;
                    fromJSON(object: any): _39.SignatureDescriptors;
                    toJSON(message: _39.SignatureDescriptors): {
                        signatures: {
                            publicKey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            data?: {
                                single?: {
                                    mode: _39.SignMode;
                                    signature: string;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored: number;
                                        elems: string;
                                    };
                                    signatures: any[];
                                };
                            };
                            sequence: string;
                        }[];
                    };
                    fromPartial(object: Partial<_39.SignatureDescriptors>): _39.SignatureDescriptors;
                    fromAmino(object: _39.SignatureDescriptorsAmino): _39.SignatureDescriptors;
                    toAmino(message: _39.SignatureDescriptors): _39.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _39.SignatureDescriptorsAminoMsg): _39.SignatureDescriptors;
                    toAminoMsg(message: _39.SignatureDescriptors): _39.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptorsProtoMsg): _39.SignatureDescriptors;
                    toProto(message: _39.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptors): _39.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _39.SignatureDescriptor;
                    isSDK(o: any): o is _39.SignatureDescriptorSDKType;
                    isAmino(o: any): o is _39.SignatureDescriptorAmino;
                    encode(message: _39.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.SignatureDescriptor;
                    fromJSON(object: any): _39.SignatureDescriptor;
                    toJSON(message: _39.SignatureDescriptor): {
                        publicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        data?: {
                            single?: {
                                mode: _39.SignMode;
                                signature: string;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored: number;
                                    elems: string;
                                };
                                signatures: any[];
                            };
                        };
                        sequence: string;
                    };
                    fromPartial(object: Partial<_39.SignatureDescriptor>): _39.SignatureDescriptor;
                    fromAmino(object: _39.SignatureDescriptorAmino): _39.SignatureDescriptor;
                    toAmino(message: _39.SignatureDescriptor): _39.SignatureDescriptorAmino;
                    fromAminoMsg(object: _39.SignatureDescriptorAminoMsg): _39.SignatureDescriptor;
                    toAminoMsg(message: _39.SignatureDescriptor): _39.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptorProtoMsg): _39.SignatureDescriptor;
                    toProto(message: _39.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor): _39.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _39.SignatureDescriptor_Data;
                    isSDK(o: any): o is _39.SignatureDescriptor_DataSDKType;
                    isAmino(o: any): o is _39.SignatureDescriptor_DataAmino;
                    encode(message: _39.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.SignatureDescriptor_Data;
                    fromJSON(object: any): _39.SignatureDescriptor_Data;
                    toJSON(message: _39.SignatureDescriptor_Data): {
                        single?: {
                            mode: _39.SignMode;
                            signature: string;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored: number;
                                elems: string;
                            };
                            signatures: any[];
                        };
                    };
                    fromPartial(object: Partial<_39.SignatureDescriptor_Data>): _39.SignatureDescriptor_Data;
                    fromAmino(object: _39.SignatureDescriptor_DataAmino): _39.SignatureDescriptor_Data;
                    toAmino(message: _39.SignatureDescriptor_Data): _39.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _39.SignatureDescriptor_DataAminoMsg): _39.SignatureDescriptor_Data;
                    toAminoMsg(message: _39.SignatureDescriptor_Data): _39.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptor_DataProtoMsg): _39.SignatureDescriptor_Data;
                    toProto(message: _39.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor_Data): _39.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _39.SignatureDescriptor_Data_Single;
                    isSDK(o: any): o is _39.SignatureDescriptor_Data_SingleSDKType;
                    isAmino(o: any): o is _39.SignatureDescriptor_Data_SingleAmino;
                    encode(message: _39.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _39.SignatureDescriptor_Data_Single;
                    toJSON(message: _39.SignatureDescriptor_Data_Single): {
                        mode: _39.SignMode;
                        signature: string;
                    };
                    fromPartial(object: Partial<_39.SignatureDescriptor_Data_Single>): _39.SignatureDescriptor_Data_Single;
                    fromAmino(object: _39.SignatureDescriptor_Data_SingleAmino): _39.SignatureDescriptor_Data_Single;
                    toAmino(message: _39.SignatureDescriptor_Data_Single): _39.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _39.SignatureDescriptor_Data_SingleAminoMsg): _39.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _39.SignatureDescriptor_Data_Single): _39.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptor_Data_SingleProtoMsg): _39.SignatureDescriptor_Data_Single;
                    toProto(message: _39.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor_Data_Single): _39.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _39.SignatureDescriptor_Data_Multi;
                    isSDK(o: any): o is _39.SignatureDescriptor_Data_MultiSDKType;
                    isAmino(o: any): o is _39.SignatureDescriptor_Data_MultiAmino;
                    encode(message: _39.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _39.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _39.SignatureDescriptor_Data_Multi;
                    toJSON(message: _39.SignatureDescriptor_Data_Multi): {
                        bitarray?: {
                            extraBitsStored: number;
                            elems: string;
                        };
                        signatures: {
                            single?: {
                                mode: _39.SignMode;
                                signature: string;
                            };
                            multi?: any;
                        }[];
                    };
                    fromPartial(object: Partial<_39.SignatureDescriptor_Data_Multi>): _39.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _39.SignatureDescriptor_Data_MultiAmino): _39.SignatureDescriptor_Data_Multi;
                    toAmino(message: _39.SignatureDescriptor_Data_Multi): _39.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _39.SignatureDescriptor_Data_MultiAminoMsg): _39.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _39.SignatureDescriptor_Data_Multi): _39.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _39.SignatureDescriptor_Data_MultiProtoMsg): _39.SignatureDescriptor_Data_Multi;
                    toProto(message: _39.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _39.SignatureDescriptor_Data_Multi): _39.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _183.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                getBlockWithTxs(request: _40.GetBlockWithTxsRequest): Promise<_40.GetBlockWithTxsResponse>;
            };
            Tx: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.Tx;
                isSDK(o: any): o is _41.TxSDKType;
                isAmino(o: any): o is _41.TxAmino;
                encode(message: _41.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Tx;
                fromJSON(object: any): _41.Tx;
                toJSON(message: _41.Tx): {
                    body?: {
                        messages: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        }[];
                        memo: string;
                        timeoutHeight: string;
                        extensionOptions: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        }[];
                        nonCriticalExtensionOptions: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        }[];
                    };
                    authInfo?: {
                        signerInfos: {
                            publicKey?: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            };
                            modeInfo?: {
                                single?: {
                                    mode: _39.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored: number;
                                        elems: string;
                                    };
                                    modeInfos: any[];
                                };
                            };
                            sequence: string;
                        }[];
                        fee?: {
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            gasLimit: string;
                            payer: string;
                            granter: string;
                        };
                        tip?: {
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            tipper: string;
                        };
                    };
                    signatures: string[];
                };
                fromPartial(object: Partial<_41.Tx>): _41.Tx;
                fromAmino(object: _41.TxAmino): _41.Tx;
                toAmino(message: _41.Tx): _41.TxAmino;
                fromAminoMsg(object: _41.TxAminoMsg): _41.Tx;
                toAminoMsg(message: _41.Tx): _41.TxAminoMsg;
                fromProtoMsg(message: _41.TxProtoMsg): _41.Tx;
                toProto(message: _41.Tx): Uint8Array;
                toProtoMsg(message: _41.Tx): _41.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.TxRaw;
                isSDK(o: any): o is _41.TxRawSDKType;
                isAmino(o: any): o is _41.TxRawAmino;
                encode(message: _41.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.TxRaw;
                fromJSON(object: any): _41.TxRaw;
                toJSON(message: _41.TxRaw): {
                    bodyBytes: string;
                    authInfoBytes: string;
                    signatures: string[];
                };
                fromPartial(object: Partial<_41.TxRaw>): _41.TxRaw;
                fromAmino(object: _41.TxRawAmino): _41.TxRaw;
                toAmino(message: _41.TxRaw): _41.TxRawAmino;
                fromAminoMsg(object: _41.TxRawAminoMsg): _41.TxRaw;
                toAminoMsg(message: _41.TxRaw): _41.TxRawAminoMsg;
                fromProtoMsg(message: _41.TxRawProtoMsg): _41.TxRaw;
                toProto(message: _41.TxRaw): Uint8Array;
                toProtoMsg(message: _41.TxRaw): _41.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.SignDoc;
                isSDK(o: any): o is _41.SignDocSDKType;
                isAmino(o: any): o is _41.SignDocAmino;
                encode(message: _41.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.SignDoc;
                fromJSON(object: any): _41.SignDoc;
                toJSON(message: _41.SignDoc): {
                    bodyBytes: string;
                    authInfoBytes: string;
                    chainId: string;
                    accountNumber: string;
                };
                fromPartial(object: Partial<_41.SignDoc>): _41.SignDoc;
                fromAmino(object: _41.SignDocAmino): _41.SignDoc;
                toAmino(message: _41.SignDoc): _41.SignDocAmino;
                fromAminoMsg(object: _41.SignDocAminoMsg): _41.SignDoc;
                toAminoMsg(message: _41.SignDoc): _41.SignDocAminoMsg;
                fromProtoMsg(message: _41.SignDocProtoMsg): _41.SignDoc;
                toProto(message: _41.SignDoc): Uint8Array;
                toProtoMsg(message: _41.SignDoc): _41.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.SignDocDirectAux;
                isSDK(o: any): o is _41.SignDocDirectAuxSDKType;
                isAmino(o: any): o is _41.SignDocDirectAuxAmino;
                encode(message: _41.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.SignDocDirectAux;
                fromJSON(object: any): _41.SignDocDirectAux;
                toJSON(message: _41.SignDocDirectAux): {
                    bodyBytes: string;
                    publicKey?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    };
                    chainId: string;
                    accountNumber: string;
                    sequence: string;
                    tip?: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        tipper: string;
                    };
                };
                fromPartial(object: Partial<_41.SignDocDirectAux>): _41.SignDocDirectAux;
                fromAmino(object: _41.SignDocDirectAuxAmino): _41.SignDocDirectAux;
                toAmino(message: _41.SignDocDirectAux): _41.SignDocDirectAuxAmino;
                fromAminoMsg(object: _41.SignDocDirectAuxAminoMsg): _41.SignDocDirectAux;
                toAminoMsg(message: _41.SignDocDirectAux): _41.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _41.SignDocDirectAuxProtoMsg): _41.SignDocDirectAux;
                toProto(message: _41.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _41.SignDocDirectAux): _41.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.TxBody;
                isSDK(o: any): o is _41.TxBodySDKType;
                isAmino(o: any): o is _41.TxBodyAmino;
                encode(message: _41.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.TxBody;
                fromJSON(object: any): _41.TxBody;
                toJSON(message: _41.TxBody): {
                    messages: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[];
                    memo: string;
                    timeoutHeight: string;
                    extensionOptions: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[];
                    nonCriticalExtensionOptions: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    }[];
                };
                fromPartial(object: Partial<_41.TxBody>): _41.TxBody;
                fromAmino(object: _41.TxBodyAmino): _41.TxBody;
                toAmino(message: _41.TxBody): _41.TxBodyAmino;
                fromAminoMsg(object: _41.TxBodyAminoMsg): _41.TxBody;
                toAminoMsg(message: _41.TxBody): _41.TxBodyAminoMsg;
                fromProtoMsg(message: _41.TxBodyProtoMsg): _41.TxBody;
                toProto(message: _41.TxBody): Uint8Array;
                toProtoMsg(message: _41.TxBody): _41.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.AuthInfo;
                isSDK(o: any): o is _41.AuthInfoSDKType;
                isAmino(o: any): o is _41.AuthInfoAmino;
                encode(message: _41.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.AuthInfo;
                fromJSON(object: any): _41.AuthInfo;
                toJSON(message: _41.AuthInfo): {
                    signerInfos: {
                        publicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        modeInfo?: {
                            single?: {
                                mode: _39.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored: number;
                                    elems: string;
                                };
                                modeInfos: any[];
                            };
                        };
                        sequence: string;
                    }[];
                    fee?: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        gasLimit: string;
                        payer: string;
                        granter: string;
                    };
                    tip?: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        tipper: string;
                    };
                };
                fromPartial(object: Partial<_41.AuthInfo>): _41.AuthInfo;
                fromAmino(object: _41.AuthInfoAmino): _41.AuthInfo;
                toAmino(message: _41.AuthInfo): _41.AuthInfoAmino;
                fromAminoMsg(object: _41.AuthInfoAminoMsg): _41.AuthInfo;
                toAminoMsg(message: _41.AuthInfo): _41.AuthInfoAminoMsg;
                fromProtoMsg(message: _41.AuthInfoProtoMsg): _41.AuthInfo;
                toProto(message: _41.AuthInfo): Uint8Array;
                toProtoMsg(message: _41.AuthInfo): _41.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.SignerInfo;
                isSDK(o: any): o is _41.SignerInfoSDKType;
                isAmino(o: any): o is _41.SignerInfoAmino;
                encode(message: _41.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.SignerInfo;
                fromJSON(object: any): _41.SignerInfo;
                toJSON(message: _41.SignerInfo): {
                    publicKey?: {
                        $typeUrl?: string;
                        typeUrl: string;
                        value: string;
                    };
                    modeInfo?: {
                        single?: {
                            mode: _39.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored: number;
                                elems: string;
                            };
                            modeInfos: any[];
                        };
                    };
                    sequence: string;
                };
                fromPartial(object: Partial<_41.SignerInfo>): _41.SignerInfo;
                fromAmino(object: _41.SignerInfoAmino): _41.SignerInfo;
                toAmino(message: _41.SignerInfo): _41.SignerInfoAmino;
                fromAminoMsg(object: _41.SignerInfoAminoMsg): _41.SignerInfo;
                toAminoMsg(message: _41.SignerInfo): _41.SignerInfoAminoMsg;
                fromProtoMsg(message: _41.SignerInfoProtoMsg): _41.SignerInfo;
                toProto(message: _41.SignerInfo): Uint8Array;
                toProtoMsg(message: _41.SignerInfo): _41.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.ModeInfo;
                isSDK(o: any): o is _41.ModeInfoSDKType;
                isAmino(o: any): o is _41.ModeInfoAmino;
                encode(message: _41.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.ModeInfo;
                fromJSON(object: any): _41.ModeInfo;
                toJSON(message: _41.ModeInfo): {
                    single?: {
                        mode: _39.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored: number;
                            elems: string;
                        };
                        modeInfos: any[];
                    };
                };
                fromPartial(object: Partial<_41.ModeInfo>): _41.ModeInfo;
                fromAmino(object: _41.ModeInfoAmino): _41.ModeInfo;
                toAmino(message: _41.ModeInfo): _41.ModeInfoAmino;
                fromAminoMsg(object: _41.ModeInfoAminoMsg): _41.ModeInfo;
                toAminoMsg(message: _41.ModeInfo): _41.ModeInfoAminoMsg;
                fromProtoMsg(message: _41.ModeInfoProtoMsg): _41.ModeInfo;
                toProto(message: _41.ModeInfo): Uint8Array;
                toProtoMsg(message: _41.ModeInfo): _41.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.ModeInfo_Single;
                isSDK(o: any): o is _41.ModeInfo_SingleSDKType;
                isAmino(o: any): o is _41.ModeInfo_SingleAmino;
                encode(message: _41.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.ModeInfo_Single;
                fromJSON(object: any): _41.ModeInfo_Single;
                toJSON(message: _41.ModeInfo_Single): {
                    mode: _39.SignMode;
                };
                fromPartial(object: Partial<_41.ModeInfo_Single>): _41.ModeInfo_Single;
                fromAmino(object: _41.ModeInfo_SingleAmino): _41.ModeInfo_Single;
                toAmino(message: _41.ModeInfo_Single): _41.ModeInfo_SingleAmino;
                fromAminoMsg(object: _41.ModeInfo_SingleAminoMsg): _41.ModeInfo_Single;
                toAminoMsg(message: _41.ModeInfo_Single): _41.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _41.ModeInfo_SingleProtoMsg): _41.ModeInfo_Single;
                toProto(message: _41.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _41.ModeInfo_Single): _41.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.ModeInfo_Multi;
                isSDK(o: any): o is _41.ModeInfo_MultiSDKType;
                isAmino(o: any): o is _41.ModeInfo_MultiAmino;
                encode(message: _41.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.ModeInfo_Multi;
                fromJSON(object: any): _41.ModeInfo_Multi;
                toJSON(message: _41.ModeInfo_Multi): {
                    bitarray?: {
                        extraBitsStored: number;
                        elems: string;
                    };
                    modeInfos: {
                        single?: {
                            mode: _39.SignMode;
                        };
                        multi?: any;
                    }[];
                };
                fromPartial(object: Partial<_41.ModeInfo_Multi>): _41.ModeInfo_Multi;
                fromAmino(object: _41.ModeInfo_MultiAmino): _41.ModeInfo_Multi;
                toAmino(message: _41.ModeInfo_Multi): _41.ModeInfo_MultiAmino;
                fromAminoMsg(object: _41.ModeInfo_MultiAminoMsg): _41.ModeInfo_Multi;
                toAminoMsg(message: _41.ModeInfo_Multi): _41.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _41.ModeInfo_MultiProtoMsg): _41.ModeInfo_Multi;
                toProto(message: _41.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _41.ModeInfo_Multi): _41.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.Fee;
                isSDK(o: any): o is _41.FeeSDKType;
                isAmino(o: any): o is _41.FeeAmino;
                encode(message: _41.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Fee;
                fromJSON(object: any): _41.Fee;
                toJSON(message: _41.Fee): {
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                    gasLimit: string;
                    payer: string;
                    granter: string;
                };
                fromPartial(object: Partial<_41.Fee>): _41.Fee;
                fromAmino(object: _41.FeeAmino): _41.Fee;
                toAmino(message: _41.Fee): _41.FeeAmino;
                fromAminoMsg(object: _41.FeeAminoMsg): _41.Fee;
                toAminoMsg(message: _41.Fee): _41.FeeAminoMsg;
                fromProtoMsg(message: _41.FeeProtoMsg): _41.Fee;
                toProto(message: _41.Fee): Uint8Array;
                toProtoMsg(message: _41.Fee): _41.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.Tip;
                isSDK(o: any): o is _41.TipSDKType;
                isAmino(o: any): o is _41.TipAmino;
                encode(message: _41.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.Tip;
                fromJSON(object: any): _41.Tip;
                toJSON(message: _41.Tip): {
                    amount: {
                        denom: string;
                        amount: string;
                    }[];
                    tipper: string;
                };
                fromPartial(object: Partial<_41.Tip>): _41.Tip;
                fromAmino(object: _41.TipAmino): _41.Tip;
                toAmino(message: _41.Tip): _41.TipAmino;
                fromAminoMsg(object: _41.TipAminoMsg): _41.Tip;
                toAminoMsg(message: _41.Tip): _41.TipAminoMsg;
                fromProtoMsg(message: _41.TipProtoMsg): _41.Tip;
                toProto(message: _41.Tip): Uint8Array;
                toProtoMsg(message: _41.Tip): _41.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _41.AuxSignerData;
                isSDK(o: any): o is _41.AuxSignerDataSDKType;
                isAmino(o: any): o is _41.AuxSignerDataAmino;
                encode(message: _41.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _41.AuxSignerData;
                fromJSON(object: any): _41.AuxSignerData;
                toJSON(message: _41.AuxSignerData): {
                    address: string;
                    signDoc?: {
                        bodyBytes: string;
                        publicKey?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        chainId: string;
                        accountNumber: string;
                        sequence: string;
                        tip?: {
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            tipper: string;
                        };
                    };
                    mode: _39.SignMode;
                    sig: string;
                };
                fromPartial(object: Partial<_41.AuxSignerData>): _41.AuxSignerData;
                fromAmino(object: _41.AuxSignerDataAmino): _41.AuxSignerData;
                toAmino(message: _41.AuxSignerData): _41.AuxSignerDataAmino;
                fromAminoMsg(object: _41.AuxSignerDataAminoMsg): _41.AuxSignerData;
                toAminoMsg(message: _41.AuxSignerData): _41.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _41.AuxSignerDataProtoMsg): _41.AuxSignerData;
                toProto(message: _41.AuxSignerData): Uint8Array;
                toProtoMsg(message: _41.AuxSignerData): _41.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _40.OrderBy;
            orderByToJSON(object: _40.OrderBy): string;
            broadcastModeFromJSON(object: any): _40.BroadcastMode;
            broadcastModeToJSON(object: _40.BroadcastMode): string;
            OrderBy: typeof _40.OrderBy;
            OrderBySDKType: typeof _40.OrderBy;
            OrderByAmino: typeof _40.OrderBy;
            BroadcastMode: typeof _40.BroadcastMode;
            BroadcastModeSDKType: typeof _40.BroadcastMode;
            BroadcastModeAmino: typeof _40.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.GetTxsEventRequest;
                isSDK(o: any): o is _40.GetTxsEventRequestSDKType;
                isAmino(o: any): o is _40.GetTxsEventRequestAmino;
                encode(message: _40.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GetTxsEventRequest;
                fromJSON(object: any): _40.GetTxsEventRequest;
                toJSON(message: _40.GetTxsEventRequest): {
                    events: string[];
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                    orderBy: _40.OrderBy;
                };
                fromPartial(object: Partial<_40.GetTxsEventRequest>): _40.GetTxsEventRequest;
                fromAmino(object: _40.GetTxsEventRequestAmino): _40.GetTxsEventRequest;
                toAmino(message: _40.GetTxsEventRequest): _40.GetTxsEventRequestAmino;
                fromAminoMsg(object: _40.GetTxsEventRequestAminoMsg): _40.GetTxsEventRequest;
                toAminoMsg(message: _40.GetTxsEventRequest): _40.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _40.GetTxsEventRequestProtoMsg): _40.GetTxsEventRequest;
                toProto(message: _40.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _40.GetTxsEventRequest): _40.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.GetTxsEventResponse;
                isSDK(o: any): o is _40.GetTxsEventResponseSDKType;
                isAmino(o: any): o is _40.GetTxsEventResponseAmino;
                encode(message: _40.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GetTxsEventResponse;
                fromJSON(object: any): _40.GetTxsEventResponse;
                toJSON(message: _40.GetTxsEventResponse): {
                    txs: {
                        body?: {
                            messages: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            memo: string;
                            timeoutHeight: string;
                            extensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            nonCriticalExtensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                        authInfo?: {
                            signerInfos: {
                                publicKey?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored: number;
                                            elems: string;
                                        };
                                        modeInfos: any[];
                                    };
                                };
                                sequence: string;
                            }[];
                            fee?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                gasLimit: string;
                                payer: string;
                                granter: string;
                            };
                            tip?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                tipper: string;
                            };
                        };
                        signatures: string[];
                    }[];
                    txResponses: {
                        height: string;
                        txhash: string;
                        codespace: string;
                        code: number;
                        data: string;
                        rawLog: string;
                        logs: {
                            msgIndex: number;
                            log: string;
                            events: {
                                type: string;
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            }[];
                        }[];
                        info: string;
                        gasWanted: string;
                        gasUsed: string;
                        tx?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        timestamp: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                                index: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_40.GetTxsEventResponse>): _40.GetTxsEventResponse;
                fromAmino(object: _40.GetTxsEventResponseAmino): _40.GetTxsEventResponse;
                toAmino(message: _40.GetTxsEventResponse): _40.GetTxsEventResponseAmino;
                fromAminoMsg(object: _40.GetTxsEventResponseAminoMsg): _40.GetTxsEventResponse;
                toAminoMsg(message: _40.GetTxsEventResponse): _40.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _40.GetTxsEventResponseProtoMsg): _40.GetTxsEventResponse;
                toProto(message: _40.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _40.GetTxsEventResponse): _40.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.BroadcastTxRequest;
                isSDK(o: any): o is _40.BroadcastTxRequestSDKType;
                isAmino(o: any): o is _40.BroadcastTxRequestAmino;
                encode(message: _40.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.BroadcastTxRequest;
                fromJSON(object: any): _40.BroadcastTxRequest;
                toJSON(message: _40.BroadcastTxRequest): {
                    txBytes: string;
                    mode: _40.BroadcastMode;
                };
                fromPartial(object: Partial<_40.BroadcastTxRequest>): _40.BroadcastTxRequest;
                fromAmino(object: _40.BroadcastTxRequestAmino): _40.BroadcastTxRequest;
                toAmino(message: _40.BroadcastTxRequest): _40.BroadcastTxRequestAmino;
                fromAminoMsg(object: _40.BroadcastTxRequestAminoMsg): _40.BroadcastTxRequest;
                toAminoMsg(message: _40.BroadcastTxRequest): _40.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _40.BroadcastTxRequestProtoMsg): _40.BroadcastTxRequest;
                toProto(message: _40.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _40.BroadcastTxRequest): _40.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.BroadcastTxResponse;
                isSDK(o: any): o is _40.BroadcastTxResponseSDKType;
                isAmino(o: any): o is _40.BroadcastTxResponseAmino;
                encode(message: _40.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.BroadcastTxResponse;
                fromJSON(object: any): _40.BroadcastTxResponse;
                toJSON(message: _40.BroadcastTxResponse): {
                    txResponse?: {
                        height: string;
                        txhash: string;
                        codespace: string;
                        code: number;
                        data: string;
                        rawLog: string;
                        logs: {
                            msgIndex: number;
                            log: string;
                            events: {
                                type: string;
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            }[];
                        }[];
                        info: string;
                        gasWanted: string;
                        gasUsed: string;
                        tx?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        timestamp: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                                index: boolean;
                            }[];
                        }[];
                    };
                };
                fromPartial(object: Partial<_40.BroadcastTxResponse>): _40.BroadcastTxResponse;
                fromAmino(object: _40.BroadcastTxResponseAmino): _40.BroadcastTxResponse;
                toAmino(message: _40.BroadcastTxResponse): _40.BroadcastTxResponseAmino;
                fromAminoMsg(object: _40.BroadcastTxResponseAminoMsg): _40.BroadcastTxResponse;
                toAminoMsg(message: _40.BroadcastTxResponse): _40.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _40.BroadcastTxResponseProtoMsg): _40.BroadcastTxResponse;
                toProto(message: _40.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _40.BroadcastTxResponse): _40.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.SimulateRequest;
                isSDK(o: any): o is _40.SimulateRequestSDKType;
                isAmino(o: any): o is _40.SimulateRequestAmino;
                encode(message: _40.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.SimulateRequest;
                fromJSON(object: any): _40.SimulateRequest;
                toJSON(message: _40.SimulateRequest): {
                    tx?: {
                        body?: {
                            messages: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            memo: string;
                            timeoutHeight: string;
                            extensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            nonCriticalExtensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                        authInfo?: {
                            signerInfos: {
                                publicKey?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored: number;
                                            elems: string;
                                        };
                                        modeInfos: any[];
                                    };
                                };
                                sequence: string;
                            }[];
                            fee?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                gasLimit: string;
                                payer: string;
                                granter: string;
                            };
                            tip?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                tipper: string;
                            };
                        };
                        signatures: string[];
                    };
                    txBytes: string;
                };
                fromPartial(object: Partial<_40.SimulateRequest>): _40.SimulateRequest;
                fromAmino(object: _40.SimulateRequestAmino): _40.SimulateRequest;
                toAmino(message: _40.SimulateRequest): _40.SimulateRequestAmino;
                fromAminoMsg(object: _40.SimulateRequestAminoMsg): _40.SimulateRequest;
                toAminoMsg(message: _40.SimulateRequest): _40.SimulateRequestAminoMsg;
                fromProtoMsg(message: _40.SimulateRequestProtoMsg): _40.SimulateRequest;
                toProto(message: _40.SimulateRequest): Uint8Array;
                toProtoMsg(message: _40.SimulateRequest): _40.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.SimulateResponse;
                isSDK(o: any): o is _40.SimulateResponseSDKType;
                isAmino(o: any): o is _40.SimulateResponseAmino;
                encode(message: _40.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.SimulateResponse;
                fromJSON(object: any): _40.SimulateResponse;
                toJSON(message: _40.SimulateResponse): {
                    gasInfo?: {
                        gasWanted: string;
                        gasUsed: string;
                    };
                    result?: {
                        data: string;
                        log: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                                index: boolean;
                            }[];
                        }[];
                        msgResponses: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        }[];
                    };
                };
                fromPartial(object: Partial<_40.SimulateResponse>): _40.SimulateResponse;
                fromAmino(object: _40.SimulateResponseAmino): _40.SimulateResponse;
                toAmino(message: _40.SimulateResponse): _40.SimulateResponseAmino;
                fromAminoMsg(object: _40.SimulateResponseAminoMsg): _40.SimulateResponse;
                toAminoMsg(message: _40.SimulateResponse): _40.SimulateResponseAminoMsg;
                fromProtoMsg(message: _40.SimulateResponseProtoMsg): _40.SimulateResponse;
                toProto(message: _40.SimulateResponse): Uint8Array;
                toProtoMsg(message: _40.SimulateResponse): _40.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.GetTxRequest;
                isSDK(o: any): o is _40.GetTxRequestSDKType;
                isAmino(o: any): o is _40.GetTxRequestAmino;
                encode(message: _40.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GetTxRequest;
                fromJSON(object: any): _40.GetTxRequest;
                toJSON(message: _40.GetTxRequest): {
                    hash: string;
                };
                fromPartial(object: Partial<_40.GetTxRequest>): _40.GetTxRequest;
                fromAmino(object: _40.GetTxRequestAmino): _40.GetTxRequest;
                toAmino(message: _40.GetTxRequest): _40.GetTxRequestAmino;
                fromAminoMsg(object: _40.GetTxRequestAminoMsg): _40.GetTxRequest;
                toAminoMsg(message: _40.GetTxRequest): _40.GetTxRequestAminoMsg;
                fromProtoMsg(message: _40.GetTxRequestProtoMsg): _40.GetTxRequest;
                toProto(message: _40.GetTxRequest): Uint8Array;
                toProtoMsg(message: _40.GetTxRequest): _40.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.GetTxResponse;
                isSDK(o: any): o is _40.GetTxResponseSDKType;
                isAmino(o: any): o is _40.GetTxResponseAmino;
                encode(message: _40.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GetTxResponse;
                fromJSON(object: any): _40.GetTxResponse;
                toJSON(message: _40.GetTxResponse): {
                    tx?: {
                        body?: {
                            messages: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            memo: string;
                            timeoutHeight: string;
                            extensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            nonCriticalExtensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                        authInfo?: {
                            signerInfos: {
                                publicKey?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored: number;
                                            elems: string;
                                        };
                                        modeInfos: any[];
                                    };
                                };
                                sequence: string;
                            }[];
                            fee?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                gasLimit: string;
                                payer: string;
                                granter: string;
                            };
                            tip?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                tipper: string;
                            };
                        };
                        signatures: string[];
                    };
                    txResponse?: {
                        height: string;
                        txhash: string;
                        codespace: string;
                        code: number;
                        data: string;
                        rawLog: string;
                        logs: {
                            msgIndex: number;
                            log: string;
                            events: {
                                type: string;
                                attributes: {
                                    key: string;
                                    value: string;
                                }[];
                            }[];
                        }[];
                        info: string;
                        gasWanted: string;
                        gasUsed: string;
                        tx?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        timestamp: string;
                        events: {
                            type: string;
                            attributes: {
                                key: string;
                                value: string;
                                index: boolean;
                            }[];
                        }[];
                    };
                };
                fromPartial(object: Partial<_40.GetTxResponse>): _40.GetTxResponse;
                fromAmino(object: _40.GetTxResponseAmino): _40.GetTxResponse;
                toAmino(message: _40.GetTxResponse): _40.GetTxResponseAmino;
                fromAminoMsg(object: _40.GetTxResponseAminoMsg): _40.GetTxResponse;
                toAminoMsg(message: _40.GetTxResponse): _40.GetTxResponseAminoMsg;
                fromProtoMsg(message: _40.GetTxResponseProtoMsg): _40.GetTxResponse;
                toProto(message: _40.GetTxResponse): Uint8Array;
                toProtoMsg(message: _40.GetTxResponse): _40.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.GetBlockWithTxsRequest;
                isSDK(o: any): o is _40.GetBlockWithTxsRequestSDKType;
                isAmino(o: any): o is _40.GetBlockWithTxsRequestAmino;
                encode(message: _40.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GetBlockWithTxsRequest;
                fromJSON(object: any): _40.GetBlockWithTxsRequest;
                toJSON(message: _40.GetBlockWithTxsRequest): {
                    height: string;
                    pagination?: {
                        key: string;
                        offset: string;
                        limit: string;
                        countTotal: boolean;
                        reverse: boolean;
                    };
                };
                fromPartial(object: Partial<_40.GetBlockWithTxsRequest>): _40.GetBlockWithTxsRequest;
                fromAmino(object: _40.GetBlockWithTxsRequestAmino): _40.GetBlockWithTxsRequest;
                toAmino(message: _40.GetBlockWithTxsRequest): _40.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _40.GetBlockWithTxsRequestAminoMsg): _40.GetBlockWithTxsRequest;
                toAminoMsg(message: _40.GetBlockWithTxsRequest): _40.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _40.GetBlockWithTxsRequestProtoMsg): _40.GetBlockWithTxsRequest;
                toProto(message: _40.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _40.GetBlockWithTxsRequest): _40.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.GetBlockWithTxsResponse;
                isSDK(o: any): o is _40.GetBlockWithTxsResponseSDKType;
                isAmino(o: any): o is _40.GetBlockWithTxsResponseAmino;
                encode(message: _40.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _40.GetBlockWithTxsResponse;
                fromJSON(object: any): _40.GetBlockWithTxsResponse;
                toJSON(message: _40.GetBlockWithTxsResponse): {
                    txs: {
                        body?: {
                            messages: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            memo: string;
                            timeoutHeight: string;
                            extensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                            nonCriticalExtensionOptions: {
                                $typeUrl?: string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                        authInfo?: {
                            signerInfos: {
                                publicKey?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored: number;
                                            elems: string;
                                        };
                                        modeInfos: any[];
                                    };
                                };
                                sequence: string;
                            }[];
                            fee?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                gasLimit: string;
                                payer: string;
                                granter: string;
                            };
                            tip?: {
                                amount: {
                                    denom: string;
                                    amount: string;
                                }[];
                                tipper: string;
                            };
                        };
                        signatures: string[];
                    }[];
                    blockId?: {
                        hash: string;
                        partSetHeader: {
                            total: number;
                            hash: string;
                        };
                    };
                    block?: {
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
                                        type: import("../tendermint/types/types").SignedMsgType;
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
                                        type: import("../tendermint/types/types").SignedMsgType;
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
                                blockIdFlag: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress: string;
                                timestamp: string;
                                signature: string;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey: string;
                        total: string;
                    };
                };
                fromPartial(object: Partial<_40.GetBlockWithTxsResponse>): _40.GetBlockWithTxsResponse;
                fromAmino(object: _40.GetBlockWithTxsResponseAmino): _40.GetBlockWithTxsResponse;
                toAmino(message: _40.GetBlockWithTxsResponse): _40.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _40.GetBlockWithTxsResponseAminoMsg): _40.GetBlockWithTxsResponse;
                toAminoMsg(message: _40.GetBlockWithTxsResponse): _40.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _40.GetBlockWithTxsResponseProtoMsg): _40.GetBlockWithTxsResponse;
                toProto(message: _40.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _40.GetBlockWithTxsResponse): _40.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                authority(request?: _42.QueryAuthorityRequest): Promise<_42.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: {
                            authority: string;
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
                        };
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: {
                            authority: string;
                        };
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _43.MsgSoftwareUpgrade) => _43.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _43.MsgSoftwareUpgradeAmino) => _43.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _43.MsgCancelUpgrade) => _43.MsgCancelUpgradeAmino;
                    fromAmino: (object: _43.MsgCancelUpgradeAmino) => _43.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.Plan;
                isSDK(o: any): o is _44.PlanSDKType;
                isAmino(o: any): o is _44.PlanAmino;
                encode(message: _44.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.Plan;
                fromJSON(object: any): _44.Plan;
                toJSON(message: _44.Plan): {
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
                fromPartial(object: Partial<_44.Plan>): _44.Plan;
                fromAmino(object: _44.PlanAmino): _44.Plan;
                toAmino(message: _44.Plan): _44.PlanAmino;
                fromAminoMsg(object: _44.PlanAminoMsg): _44.Plan;
                toAminoMsg(message: _44.Plan): _44.PlanAminoMsg;
                fromProtoMsg(message: _44.PlanProtoMsg): _44.Plan;
                toProto(message: _44.Plan): Uint8Array;
                toProtoMsg(message: _44.Plan): _44.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.SoftwareUpgradeProposal;
                isSDK(o: any): o is _44.SoftwareUpgradeProposalSDKType;
                isAmino(o: any): o is _44.SoftwareUpgradeProposalAmino;
                encode(message: _44.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.SoftwareUpgradeProposal;
                fromJSON(object: any): _44.SoftwareUpgradeProposal;
                toJSON(message: _44.SoftwareUpgradeProposal): {
                    $typeUrl?: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
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
                };
                fromPartial(object: Partial<_44.SoftwareUpgradeProposal>): _44.SoftwareUpgradeProposal;
                fromAmino(object: _44.SoftwareUpgradeProposalAmino): _44.SoftwareUpgradeProposal;
                toAmino(message: _44.SoftwareUpgradeProposal): _44.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _44.SoftwareUpgradeProposalAminoMsg): _44.SoftwareUpgradeProposal;
                toAminoMsg(message: _44.SoftwareUpgradeProposal): _44.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _44.SoftwareUpgradeProposalProtoMsg): _44.SoftwareUpgradeProposal;
                toProto(message: _44.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _44.SoftwareUpgradeProposal): _44.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.CancelSoftwareUpgradeProposal;
                isSDK(o: any): o is _44.CancelSoftwareUpgradeProposalSDKType;
                isAmino(o: any): o is _44.CancelSoftwareUpgradeProposalAmino;
                encode(message: _44.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _44.CancelSoftwareUpgradeProposal;
                toJSON(message: _44.CancelSoftwareUpgradeProposal): {
                    $typeUrl?: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
                    title: string;
                    description: string;
                };
                fromPartial(object: Partial<_44.CancelSoftwareUpgradeProposal>): _44.CancelSoftwareUpgradeProposal;
                fromAmino(object: _44.CancelSoftwareUpgradeProposalAmino): _44.CancelSoftwareUpgradeProposal;
                toAmino(message: _44.CancelSoftwareUpgradeProposal): _44.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _44.CancelSoftwareUpgradeProposalAminoMsg): _44.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _44.CancelSoftwareUpgradeProposal): _44.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _44.CancelSoftwareUpgradeProposalProtoMsg): _44.CancelSoftwareUpgradeProposal;
                toProto(message: _44.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _44.CancelSoftwareUpgradeProposal): _44.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _44.ModuleVersion;
                isSDK(o: any): o is _44.ModuleVersionSDKType;
                isAmino(o: any): o is _44.ModuleVersionAmino;
                encode(message: _44.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _44.ModuleVersion;
                fromJSON(object: any): _44.ModuleVersion;
                toJSON(message: _44.ModuleVersion): {
                    name: string;
                    version: string;
                };
                fromPartial(object: Partial<_44.ModuleVersion>): _44.ModuleVersion;
                fromAmino(object: _44.ModuleVersionAmino): _44.ModuleVersion;
                toAmino(message: _44.ModuleVersion): _44.ModuleVersionAmino;
                fromAminoMsg(object: _44.ModuleVersionAminoMsg): _44.ModuleVersion;
                toAminoMsg(message: _44.ModuleVersion): _44.ModuleVersionAminoMsg;
                fromProtoMsg(message: _44.ModuleVersionProtoMsg): _44.ModuleVersion;
                toProto(message: _44.ModuleVersion): Uint8Array;
                toProtoMsg(message: _44.ModuleVersion): _44.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _43.MsgSoftwareUpgrade;
                isSDK(o: any): o is _43.MsgSoftwareUpgradeSDKType;
                isAmino(o: any): o is _43.MsgSoftwareUpgradeAmino;
                encode(message: _43.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.MsgSoftwareUpgrade;
                fromJSON(object: any): _43.MsgSoftwareUpgrade;
                toJSON(message: _43.MsgSoftwareUpgrade): {
                    authority: string;
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
                };
                fromPartial(object: Partial<_43.MsgSoftwareUpgrade>): _43.MsgSoftwareUpgrade;
                fromAmino(object: _43.MsgSoftwareUpgradeAmino): _43.MsgSoftwareUpgrade;
                toAmino(message: _43.MsgSoftwareUpgrade): _43.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _43.MsgSoftwareUpgradeAminoMsg): _43.MsgSoftwareUpgrade;
                toAminoMsg(message: _43.MsgSoftwareUpgrade): _43.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _43.MsgSoftwareUpgradeProtoMsg): _43.MsgSoftwareUpgrade;
                toProto(message: _43.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _43.MsgSoftwareUpgrade): _43.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _43.MsgSoftwareUpgradeResponse;
                isSDK(o: any): o is _43.MsgSoftwareUpgradeResponseSDKType;
                isAmino(o: any): o is _43.MsgSoftwareUpgradeResponseAmino;
                encode(_: _43.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _43.MsgSoftwareUpgradeResponse;
                toJSON(_: _43.MsgSoftwareUpgradeResponse): {};
                fromPartial(_: Partial<_43.MsgSoftwareUpgradeResponse>): _43.MsgSoftwareUpgradeResponse;
                fromAmino(_: _43.MsgSoftwareUpgradeResponseAmino): _43.MsgSoftwareUpgradeResponse;
                toAmino(_: _43.MsgSoftwareUpgradeResponse): _43.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _43.MsgSoftwareUpgradeResponseAminoMsg): _43.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _43.MsgSoftwareUpgradeResponse): _43.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _43.MsgSoftwareUpgradeResponseProtoMsg): _43.MsgSoftwareUpgradeResponse;
                toProto(message: _43.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _43.MsgSoftwareUpgradeResponse): _43.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _43.MsgCancelUpgrade;
                isSDK(o: any): o is _43.MsgCancelUpgradeSDKType;
                isAmino(o: any): o is _43.MsgCancelUpgradeAmino;
                encode(message: _43.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.MsgCancelUpgrade;
                fromJSON(object: any): _43.MsgCancelUpgrade;
                toJSON(message: _43.MsgCancelUpgrade): {
                    authority: string;
                };
                fromPartial(object: Partial<_43.MsgCancelUpgrade>): _43.MsgCancelUpgrade;
                fromAmino(object: _43.MsgCancelUpgradeAmino): _43.MsgCancelUpgrade;
                toAmino(message: _43.MsgCancelUpgrade): _43.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _43.MsgCancelUpgradeAminoMsg): _43.MsgCancelUpgrade;
                toAminoMsg(message: _43.MsgCancelUpgrade): _43.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _43.MsgCancelUpgradeProtoMsg): _43.MsgCancelUpgrade;
                toProto(message: _43.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _43.MsgCancelUpgrade): _43.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _43.MsgCancelUpgradeResponse;
                isSDK(o: any): o is _43.MsgCancelUpgradeResponseSDKType;
                isAmino(o: any): o is _43.MsgCancelUpgradeResponseAmino;
                encode(_: _43.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _43.MsgCancelUpgradeResponse;
                fromJSON(_: any): _43.MsgCancelUpgradeResponse;
                toJSON(_: _43.MsgCancelUpgradeResponse): {};
                fromPartial(_: Partial<_43.MsgCancelUpgradeResponse>): _43.MsgCancelUpgradeResponse;
                fromAmino(_: _43.MsgCancelUpgradeResponseAmino): _43.MsgCancelUpgradeResponse;
                toAmino(_: _43.MsgCancelUpgradeResponse): _43.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _43.MsgCancelUpgradeResponseAminoMsg): _43.MsgCancelUpgradeResponse;
                toAminoMsg(message: _43.MsgCancelUpgradeResponse): _43.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _43.MsgCancelUpgradeResponseProtoMsg): _43.MsgCancelUpgradeResponse;
                toProto(message: _43.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _43.MsgCancelUpgradeResponse): _43.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryCurrentPlanRequest;
                isSDK(o: any): o is _42.QueryCurrentPlanRequestSDKType;
                isAmino(o: any): o is _42.QueryCurrentPlanRequestAmino;
                encode(_: _42.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryCurrentPlanRequest;
                fromJSON(_: any): _42.QueryCurrentPlanRequest;
                toJSON(_: _42.QueryCurrentPlanRequest): {};
                fromPartial(_: Partial<_42.QueryCurrentPlanRequest>): _42.QueryCurrentPlanRequest;
                fromAmino(_: _42.QueryCurrentPlanRequestAmino): _42.QueryCurrentPlanRequest;
                toAmino(_: _42.QueryCurrentPlanRequest): _42.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _42.QueryCurrentPlanRequestAminoMsg): _42.QueryCurrentPlanRequest;
                toAminoMsg(message: _42.QueryCurrentPlanRequest): _42.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _42.QueryCurrentPlanRequestProtoMsg): _42.QueryCurrentPlanRequest;
                toProto(message: _42.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _42.QueryCurrentPlanRequest): _42.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryCurrentPlanResponse;
                isSDK(o: any): o is _42.QueryCurrentPlanResponseSDKType;
                isAmino(o: any): o is _42.QueryCurrentPlanResponseAmino;
                encode(message: _42.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryCurrentPlanResponse;
                fromJSON(object: any): _42.QueryCurrentPlanResponse;
                toJSON(message: _42.QueryCurrentPlanResponse): {
                    plan?: {
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
                };
                fromPartial(object: Partial<_42.QueryCurrentPlanResponse>): _42.QueryCurrentPlanResponse;
                fromAmino(object: _42.QueryCurrentPlanResponseAmino): _42.QueryCurrentPlanResponse;
                toAmino(message: _42.QueryCurrentPlanResponse): _42.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _42.QueryCurrentPlanResponseAminoMsg): _42.QueryCurrentPlanResponse;
                toAminoMsg(message: _42.QueryCurrentPlanResponse): _42.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _42.QueryCurrentPlanResponseProtoMsg): _42.QueryCurrentPlanResponse;
                toProto(message: _42.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _42.QueryCurrentPlanResponse): _42.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryAppliedPlanRequest;
                isSDK(o: any): o is _42.QueryAppliedPlanRequestSDKType;
                isAmino(o: any): o is _42.QueryAppliedPlanRequestAmino;
                encode(message: _42.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryAppliedPlanRequest;
                fromJSON(object: any): _42.QueryAppliedPlanRequest;
                toJSON(message: _42.QueryAppliedPlanRequest): {
                    name: string;
                };
                fromPartial(object: Partial<_42.QueryAppliedPlanRequest>): _42.QueryAppliedPlanRequest;
                fromAmino(object: _42.QueryAppliedPlanRequestAmino): _42.QueryAppliedPlanRequest;
                toAmino(message: _42.QueryAppliedPlanRequest): _42.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _42.QueryAppliedPlanRequestAminoMsg): _42.QueryAppliedPlanRequest;
                toAminoMsg(message: _42.QueryAppliedPlanRequest): _42.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAppliedPlanRequestProtoMsg): _42.QueryAppliedPlanRequest;
                toProto(message: _42.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAppliedPlanRequest): _42.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryAppliedPlanResponse;
                isSDK(o: any): o is _42.QueryAppliedPlanResponseSDKType;
                isAmino(o: any): o is _42.QueryAppliedPlanResponseAmino;
                encode(message: _42.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryAppliedPlanResponse;
                fromJSON(object: any): _42.QueryAppliedPlanResponse;
                toJSON(message: _42.QueryAppliedPlanResponse): {
                    height: string;
                };
                fromPartial(object: Partial<_42.QueryAppliedPlanResponse>): _42.QueryAppliedPlanResponse;
                fromAmino(object: _42.QueryAppliedPlanResponseAmino): _42.QueryAppliedPlanResponse;
                toAmino(message: _42.QueryAppliedPlanResponse): _42.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _42.QueryAppliedPlanResponseAminoMsg): _42.QueryAppliedPlanResponse;
                toAminoMsg(message: _42.QueryAppliedPlanResponse): _42.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAppliedPlanResponseProtoMsg): _42.QueryAppliedPlanResponse;
                toProto(message: _42.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAppliedPlanResponse): _42.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryUpgradedConsensusStateRequest;
                isSDK(o: any): o is _42.QueryUpgradedConsensusStateRequestSDKType;
                isAmino(o: any): o is _42.QueryUpgradedConsensusStateRequestAmino;
                encode(message: _42.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _42.QueryUpgradedConsensusStateRequest;
                toJSON(message: _42.QueryUpgradedConsensusStateRequest): {
                    lastHeight: string;
                };
                fromPartial(object: Partial<_42.QueryUpgradedConsensusStateRequest>): _42.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _42.QueryUpgradedConsensusStateRequestAmino): _42.QueryUpgradedConsensusStateRequest;
                toAmino(message: _42.QueryUpgradedConsensusStateRequest): _42.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _42.QueryUpgradedConsensusStateRequestAminoMsg): _42.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _42.QueryUpgradedConsensusStateRequest): _42.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _42.QueryUpgradedConsensusStateRequestProtoMsg): _42.QueryUpgradedConsensusStateRequest;
                toProto(message: _42.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _42.QueryUpgradedConsensusStateRequest): _42.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryUpgradedConsensusStateResponse;
                isSDK(o: any): o is _42.QueryUpgradedConsensusStateResponseSDKType;
                isAmino(o: any): o is _42.QueryUpgradedConsensusStateResponseAmino;
                encode(message: _42.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _42.QueryUpgradedConsensusStateResponse;
                toJSON(message: _42.QueryUpgradedConsensusStateResponse): {
                    upgradedConsensusState: string;
                };
                fromPartial(object: Partial<_42.QueryUpgradedConsensusStateResponse>): _42.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _42.QueryUpgradedConsensusStateResponseAmino): _42.QueryUpgradedConsensusStateResponse;
                toAmino(message: _42.QueryUpgradedConsensusStateResponse): _42.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _42.QueryUpgradedConsensusStateResponseAminoMsg): _42.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _42.QueryUpgradedConsensusStateResponse): _42.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _42.QueryUpgradedConsensusStateResponseProtoMsg): _42.QueryUpgradedConsensusStateResponse;
                toProto(message: _42.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _42.QueryUpgradedConsensusStateResponse): _42.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryModuleVersionsRequest;
                isSDK(o: any): o is _42.QueryModuleVersionsRequestSDKType;
                isAmino(o: any): o is _42.QueryModuleVersionsRequestAmino;
                encode(message: _42.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryModuleVersionsRequest;
                fromJSON(object: any): _42.QueryModuleVersionsRequest;
                toJSON(message: _42.QueryModuleVersionsRequest): {
                    moduleName: string;
                };
                fromPartial(object: Partial<_42.QueryModuleVersionsRequest>): _42.QueryModuleVersionsRequest;
                fromAmino(object: _42.QueryModuleVersionsRequestAmino): _42.QueryModuleVersionsRequest;
                toAmino(message: _42.QueryModuleVersionsRequest): _42.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _42.QueryModuleVersionsRequestAminoMsg): _42.QueryModuleVersionsRequest;
                toAminoMsg(message: _42.QueryModuleVersionsRequest): _42.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _42.QueryModuleVersionsRequestProtoMsg): _42.QueryModuleVersionsRequest;
                toProto(message: _42.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _42.QueryModuleVersionsRequest): _42.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryModuleVersionsResponse;
                isSDK(o: any): o is _42.QueryModuleVersionsResponseSDKType;
                isAmino(o: any): o is _42.QueryModuleVersionsResponseAmino;
                encode(message: _42.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryModuleVersionsResponse;
                fromJSON(object: any): _42.QueryModuleVersionsResponse;
                toJSON(message: _42.QueryModuleVersionsResponse): {
                    moduleVersions: {
                        name: string;
                        version: string;
                    }[];
                };
                fromPartial(object: Partial<_42.QueryModuleVersionsResponse>): _42.QueryModuleVersionsResponse;
                fromAmino(object: _42.QueryModuleVersionsResponseAmino): _42.QueryModuleVersionsResponse;
                toAmino(message: _42.QueryModuleVersionsResponse): _42.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _42.QueryModuleVersionsResponseAminoMsg): _42.QueryModuleVersionsResponse;
                toAminoMsg(message: _42.QueryModuleVersionsResponse): _42.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _42.QueryModuleVersionsResponseProtoMsg): _42.QueryModuleVersionsResponse;
                toProto(message: _42.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _42.QueryModuleVersionsResponse): _42.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryAuthorityRequest;
                isSDK(o: any): o is _42.QueryAuthorityRequestSDKType;
                isAmino(o: any): o is _42.QueryAuthorityRequestAmino;
                encode(_: _42.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryAuthorityRequest;
                fromJSON(_: any): _42.QueryAuthorityRequest;
                toJSON(_: _42.QueryAuthorityRequest): {};
                fromPartial(_: Partial<_42.QueryAuthorityRequest>): _42.QueryAuthorityRequest;
                fromAmino(_: _42.QueryAuthorityRequestAmino): _42.QueryAuthorityRequest;
                toAmino(_: _42.QueryAuthorityRequest): _42.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _42.QueryAuthorityRequestAminoMsg): _42.QueryAuthorityRequest;
                toAminoMsg(message: _42.QueryAuthorityRequest): _42.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _42.QueryAuthorityRequestProtoMsg): _42.QueryAuthorityRequest;
                toProto(message: _42.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _42.QueryAuthorityRequest): _42.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _42.QueryAuthorityResponse;
                isSDK(o: any): o is _42.QueryAuthorityResponseSDKType;
                isAmino(o: any): o is _42.QueryAuthorityResponseAmino;
                encode(message: _42.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _42.QueryAuthorityResponse;
                fromJSON(object: any): _42.QueryAuthorityResponse;
                toJSON(message: _42.QueryAuthorityResponse): {
                    address: string;
                };
                fromPartial(object: Partial<_42.QueryAuthorityResponse>): _42.QueryAuthorityResponse;
                fromAmino(object: _42.QueryAuthorityResponseAmino): _42.QueryAuthorityResponse;
                toAmino(message: _42.QueryAuthorityResponse): _42.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _42.QueryAuthorityResponseAminoMsg): _42.QueryAuthorityResponse;
                toAminoMsg(message: _42.QueryAuthorityResponse): _42.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _42.QueryAuthorityResponseProtoMsg): _42.QueryAuthorityResponse;
                toProto(message: _42.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _42.QueryAuthorityResponse): _42.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace evm {
        namespace vm {
            const v1: {
                MsgClientImpl: typeof _191.MsgClientImpl;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        ethereumTx(value: _46.MsgEthereumTx): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _46.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        ethereumTx(value: _46.MsgEthereumTx): {
                            typeUrl: string;
                            value: _46.MsgEthereumTx;
                        };
                        updateParams(value: _46.MsgUpdateParams): {
                            typeUrl: string;
                            value: _46.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        ethereumTx(value: _46.MsgEthereumTx): {
                            typeUrl: string;
                            value: {
                                data?: {
                                    $typeUrl?: string;
                                    typeUrl: string;
                                    value: string;
                                };
                                size: number;
                                hash: string;
                                from: string;
                            };
                        };
                        updateParams(value: _46.MsgUpdateParams): {
                            typeUrl: string;
                            value: {
                                authority: string;
                                params: {
                                    evmDenom: string;
                                    extraEips: string[];
                                    allowUnprotectedTxs: boolean;
                                    evmChannels: string[];
                                    accessControl: {
                                        create: {
                                            accessType: _45.AccessType;
                                            accessControlList: string[];
                                        };
                                        call: {
                                            accessType: _45.AccessType;
                                            accessControlList: string[];
                                        };
                                    };
                                    activeStaticPrecompiles: string[];
                                };
                            };
                        };
                    };
                    fromJSON: {
                        ethereumTx(value: any): {
                            typeUrl: string;
                            value: _46.MsgEthereumTx;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _46.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        ethereumTx(value: _46.MsgEthereumTx): {
                            typeUrl: string;
                            value: _46.MsgEthereumTx;
                        };
                        updateParams(value: _46.MsgUpdateParams): {
                            typeUrl: string;
                            value: _46.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/cosmos.evm.vm.v1.MsgEthereumTx": {
                        aminoType: string;
                        toAmino: (message: _46.MsgEthereumTx) => _46.MsgEthereumTxAmino;
                        fromAmino: (object: _46.MsgEthereumTxAmino) => _46.MsgEthereumTx;
                    };
                    "/cosmos.evm.vm.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _46.MsgUpdateParams) => _46.MsgUpdateParamsAmino;
                        fromAmino: (object: _46.MsgUpdateParamsAmino) => _46.MsgUpdateParams;
                    };
                };
                MsgEthereumTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.MsgEthereumTx;
                    isSDK(o: any): o is _46.MsgEthereumTxSDKType;
                    isAmino(o: any): o is _46.MsgEthereumTxAmino;
                    encode(message: _46.MsgEthereumTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgEthereumTx;
                    fromJSON(object: any): _46.MsgEthereumTx;
                    toJSON(message: _46.MsgEthereumTx): {
                        data?: {
                            $typeUrl?: string;
                            typeUrl: string;
                            value: string;
                        };
                        size: number;
                        hash: string;
                        from: string;
                    };
                    fromPartial(object: Partial<_46.MsgEthereumTx>): _46.MsgEthereumTx;
                    fromAmino(object: _46.MsgEthereumTxAmino): _46.MsgEthereumTx;
                    toAmino(message: _46.MsgEthereumTx): _46.MsgEthereumTxAmino;
                    fromAminoMsg(object: _46.MsgEthereumTxAminoMsg): _46.MsgEthereumTx;
                    toAminoMsg(message: _46.MsgEthereumTx): _46.MsgEthereumTxAminoMsg;
                    fromProtoMsg(message: _46.MsgEthereumTxProtoMsg): _46.MsgEthereumTx;
                    toProto(message: _46.MsgEthereumTx): Uint8Array;
                    toProtoMsg(message: _46.MsgEthereumTx): _46.MsgEthereumTxProtoMsg;
                };
                LegacyTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.LegacyTx;
                    isSDK(o: any): o is _46.LegacyTxSDKType;
                    isAmino(o: any): o is _46.LegacyTxAmino;
                    encode(message: _46.LegacyTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.LegacyTx;
                    fromJSON(object: any): _46.LegacyTx;
                    toJSON(message: _46.LegacyTx): {
                        $typeUrl?: "/cosmos.evm.vm.v1.LegacyTx";
                        nonce: string;
                        gasPrice: string;
                        gas: string;
                        to: string;
                        value: string;
                        data: string;
                        v: string;
                        r: string;
                        s: string;
                    };
                    fromPartial(object: Partial<_46.LegacyTx>): _46.LegacyTx;
                    fromAmino(object: _46.LegacyTxAmino): _46.LegacyTx;
                    toAmino(message: _46.LegacyTx): _46.LegacyTxAmino;
                    fromAminoMsg(object: _46.LegacyTxAminoMsg): _46.LegacyTx;
                    toAminoMsg(message: _46.LegacyTx): _46.LegacyTxAminoMsg;
                    fromProtoMsg(message: _46.LegacyTxProtoMsg): _46.LegacyTx;
                    toProto(message: _46.LegacyTx): Uint8Array;
                    toProtoMsg(message: _46.LegacyTx): _46.LegacyTxProtoMsg;
                };
                AccessListTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.AccessListTx;
                    isSDK(o: any): o is _46.AccessListTxSDKType;
                    isAmino(o: any): o is _46.AccessListTxAmino;
                    encode(message: _46.AccessListTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.AccessListTx;
                    fromJSON(object: any): _46.AccessListTx;
                    toJSON(message: _46.AccessListTx): {
                        $typeUrl?: "/cosmos.evm.vm.v1.AccessListTx";
                        chainId: string;
                        nonce: string;
                        gasPrice: string;
                        gas: string;
                        to: string;
                        value: string;
                        data: string;
                        accesses: {
                            address: string;
                            storageKeys: string[];
                        }[];
                        v: string;
                        r: string;
                        s: string;
                    };
                    fromPartial(object: Partial<_46.AccessListTx>): _46.AccessListTx;
                    fromAmino(object: _46.AccessListTxAmino): _46.AccessListTx;
                    toAmino(message: _46.AccessListTx): _46.AccessListTxAmino;
                    fromAminoMsg(object: _46.AccessListTxAminoMsg): _46.AccessListTx;
                    toAminoMsg(message: _46.AccessListTx): _46.AccessListTxAminoMsg;
                    fromProtoMsg(message: _46.AccessListTxProtoMsg): _46.AccessListTx;
                    toProto(message: _46.AccessListTx): Uint8Array;
                    toProtoMsg(message: _46.AccessListTx): _46.AccessListTxProtoMsg;
                };
                DynamicFeeTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.DynamicFeeTx;
                    isSDK(o: any): o is _46.DynamicFeeTxSDKType;
                    isAmino(o: any): o is _46.DynamicFeeTxAmino;
                    encode(message: _46.DynamicFeeTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.DynamicFeeTx;
                    fromJSON(object: any): _46.DynamicFeeTx;
                    toJSON(message: _46.DynamicFeeTx): {
                        $typeUrl?: "/cosmos.evm.vm.v1.DynamicFeeTx";
                        chainId: string;
                        nonce: string;
                        gasTipCap: string;
                        gasFeeCap: string;
                        gas: string;
                        to: string;
                        value: string;
                        data: string;
                        accesses: {
                            address: string;
                            storageKeys: string[];
                        }[];
                        v: string;
                        r: string;
                        s: string;
                    };
                    fromPartial(object: Partial<_46.DynamicFeeTx>): _46.DynamicFeeTx;
                    fromAmino(object: _46.DynamicFeeTxAmino): _46.DynamicFeeTx;
                    toAmino(message: _46.DynamicFeeTx): _46.DynamicFeeTxAmino;
                    fromAminoMsg(object: _46.DynamicFeeTxAminoMsg): _46.DynamicFeeTx;
                    toAminoMsg(message: _46.DynamicFeeTx): _46.DynamicFeeTxAminoMsg;
                    fromProtoMsg(message: _46.DynamicFeeTxProtoMsg): _46.DynamicFeeTx;
                    toProto(message: _46.DynamicFeeTx): Uint8Array;
                    toProtoMsg(message: _46.DynamicFeeTx): _46.DynamicFeeTxProtoMsg;
                };
                ExtensionOptionsEthereumTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.ExtensionOptionsEthereumTx;
                    isSDK(o: any): o is _46.ExtensionOptionsEthereumTxSDKType;
                    isAmino(o: any): o is _46.ExtensionOptionsEthereumTxAmino;
                    encode(_: _46.ExtensionOptionsEthereumTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.ExtensionOptionsEthereumTx;
                    fromJSON(_: any): _46.ExtensionOptionsEthereumTx;
                    toJSON(_: _46.ExtensionOptionsEthereumTx): {};
                    fromPartial(_: Partial<_46.ExtensionOptionsEthereumTx>): _46.ExtensionOptionsEthereumTx;
                    fromAmino(_: _46.ExtensionOptionsEthereumTxAmino): _46.ExtensionOptionsEthereumTx;
                    toAmino(_: _46.ExtensionOptionsEthereumTx): _46.ExtensionOptionsEthereumTxAmino;
                    fromAminoMsg(object: _46.ExtensionOptionsEthereumTxAminoMsg): _46.ExtensionOptionsEthereumTx;
                    toAminoMsg(message: _46.ExtensionOptionsEthereumTx): _46.ExtensionOptionsEthereumTxAminoMsg;
                    fromProtoMsg(message: _46.ExtensionOptionsEthereumTxProtoMsg): _46.ExtensionOptionsEthereumTx;
                    toProto(message: _46.ExtensionOptionsEthereumTx): Uint8Array;
                    toProtoMsg(message: _46.ExtensionOptionsEthereumTx): _46.ExtensionOptionsEthereumTxProtoMsg;
                };
                MsgEthereumTxResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.MsgEthereumTxResponse;
                    isSDK(o: any): o is _46.MsgEthereumTxResponseSDKType;
                    isAmino(o: any): o is _46.MsgEthereumTxResponseAmino;
                    encode(message: _46.MsgEthereumTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgEthereumTxResponse;
                    fromJSON(object: any): _46.MsgEthereumTxResponse;
                    toJSON(message: _46.MsgEthereumTxResponse): {
                        hash: string;
                        logs: {
                            address: string;
                            topics: string[];
                            data: string;
                            blockNumber: string;
                            txHash: string;
                            txIndex: string;
                            blockHash: string;
                            index: string;
                            removed: boolean;
                        }[];
                        ret: string;
                        vmError: string;
                        gasUsed: string;
                    };
                    fromPartial(object: Partial<_46.MsgEthereumTxResponse>): _46.MsgEthereumTxResponse;
                    fromAmino(object: _46.MsgEthereumTxResponseAmino): _46.MsgEthereumTxResponse;
                    toAmino(message: _46.MsgEthereumTxResponse): _46.MsgEthereumTxResponseAmino;
                    fromAminoMsg(object: _46.MsgEthereumTxResponseAminoMsg): _46.MsgEthereumTxResponse;
                    toAminoMsg(message: _46.MsgEthereumTxResponse): _46.MsgEthereumTxResponseAminoMsg;
                    fromProtoMsg(message: _46.MsgEthereumTxResponseProtoMsg): _46.MsgEthereumTxResponse;
                    toProto(message: _46.MsgEthereumTxResponse): Uint8Array;
                    toProtoMsg(message: _46.MsgEthereumTxResponse): _46.MsgEthereumTxResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.MsgUpdateParams;
                    isSDK(o: any): o is _46.MsgUpdateParamsSDKType;
                    isAmino(o: any): o is _46.MsgUpdateParamsAmino;
                    encode(message: _46.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateParams;
                    fromJSON(object: any): _46.MsgUpdateParams;
                    toJSON(message: _46.MsgUpdateParams): {
                        authority: string;
                        params: {
                            evmDenom: string;
                            extraEips: string[];
                            allowUnprotectedTxs: boolean;
                            evmChannels: string[];
                            accessControl: {
                                create: {
                                    accessType: _45.AccessType;
                                    accessControlList: string[];
                                };
                                call: {
                                    accessType: _45.AccessType;
                                    accessControlList: string[];
                                };
                            };
                            activeStaticPrecompiles: string[];
                        };
                    };
                    fromPartial(object: Partial<_46.MsgUpdateParams>): _46.MsgUpdateParams;
                    fromAmino(object: _46.MsgUpdateParamsAmino): _46.MsgUpdateParams;
                    toAmino(message: _46.MsgUpdateParams): _46.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _46.MsgUpdateParamsAminoMsg): _46.MsgUpdateParams;
                    toAminoMsg(message: _46.MsgUpdateParams): _46.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _46.MsgUpdateParamsProtoMsg): _46.MsgUpdateParams;
                    toProto(message: _46.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _46.MsgUpdateParams): _46.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _46.MsgUpdateParamsResponse;
                    isSDK(o: any): o is _46.MsgUpdateParamsResponseSDKType;
                    isAmino(o: any): o is _46.MsgUpdateParamsResponseAmino;
                    encode(_: _46.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _46.MsgUpdateParamsResponse;
                    fromJSON(_: any): _46.MsgUpdateParamsResponse;
                    toJSON(_: _46.MsgUpdateParamsResponse): {};
                    fromPartial(_: Partial<_46.MsgUpdateParamsResponse>): _46.MsgUpdateParamsResponse;
                    fromAmino(_: _46.MsgUpdateParamsResponseAmino): _46.MsgUpdateParamsResponse;
                    toAmino(_: _46.MsgUpdateParamsResponse): _46.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _46.MsgUpdateParamsResponseAminoMsg): _46.MsgUpdateParamsResponse;
                    toAminoMsg(message: _46.MsgUpdateParamsResponse): _46.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _46.MsgUpdateParamsResponseProtoMsg): _46.MsgUpdateParamsResponse;
                    toProto(message: _46.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _46.MsgUpdateParamsResponse): _46.MsgUpdateParamsResponseProtoMsg;
                };
                accessTypeFromJSON(object: any): _45.AccessType;
                accessTypeToJSON(object: _45.AccessType): string;
                AccessType: typeof _45.AccessType;
                AccessTypeSDKType: typeof _45.AccessType;
                AccessTypeAmino: typeof _45.AccessType;
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.Params;
                    isSDK(o: any): o is _45.ParamsSDKType;
                    isAmino(o: any): o is _45.ParamsAmino;
                    encode(message: _45.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Params;
                    fromJSON(object: any): _45.Params;
                    toJSON(message: _45.Params): {
                        evmDenom: string;
                        extraEips: string[];
                        allowUnprotectedTxs: boolean;
                        evmChannels: string[];
                        accessControl: {
                            create: {
                                accessType: _45.AccessType;
                                accessControlList: string[];
                            };
                            call: {
                                accessType: _45.AccessType;
                                accessControlList: string[];
                            };
                        };
                        activeStaticPrecompiles: string[];
                    };
                    fromPartial(object: Partial<_45.Params>): _45.Params;
                    fromAmino(object: _45.ParamsAmino): _45.Params;
                    toAmino(message: _45.Params): _45.ParamsAmino;
                    fromAminoMsg(object: _45.ParamsAminoMsg): _45.Params;
                    toAminoMsg(message: _45.Params): _45.ParamsAminoMsg;
                    fromProtoMsg(message: _45.ParamsProtoMsg): _45.Params;
                    toProto(message: _45.Params): Uint8Array;
                    toProtoMsg(message: _45.Params): _45.ParamsProtoMsg;
                };
                AccessControl: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.AccessControl;
                    isSDK(o: any): o is _45.AccessControlSDKType;
                    isAmino(o: any): o is _45.AccessControlAmino;
                    encode(message: _45.AccessControl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.AccessControl;
                    fromJSON(object: any): _45.AccessControl;
                    toJSON(message: _45.AccessControl): {
                        create: {
                            accessType: _45.AccessType;
                            accessControlList: string[];
                        };
                        call: {
                            accessType: _45.AccessType;
                            accessControlList: string[];
                        };
                    };
                    fromPartial(object: Partial<_45.AccessControl>): _45.AccessControl;
                    fromAmino(object: _45.AccessControlAmino): _45.AccessControl;
                    toAmino(message: _45.AccessControl): _45.AccessControlAmino;
                    fromAminoMsg(object: _45.AccessControlAminoMsg): _45.AccessControl;
                    toAminoMsg(message: _45.AccessControl): _45.AccessControlAminoMsg;
                    fromProtoMsg(message: _45.AccessControlProtoMsg): _45.AccessControl;
                    toProto(message: _45.AccessControl): Uint8Array;
                    toProtoMsg(message: _45.AccessControl): _45.AccessControlProtoMsg;
                };
                AccessControlType: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.AccessControlType;
                    isSDK(o: any): o is _45.AccessControlTypeSDKType;
                    isAmino(o: any): o is _45.AccessControlTypeAmino;
                    encode(message: _45.AccessControlType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.AccessControlType;
                    fromJSON(object: any): _45.AccessControlType;
                    toJSON(message: _45.AccessControlType): {
                        accessType: _45.AccessType;
                        accessControlList: string[];
                    };
                    fromPartial(object: Partial<_45.AccessControlType>): _45.AccessControlType;
                    fromAmino(object: _45.AccessControlTypeAmino): _45.AccessControlType;
                    toAmino(message: _45.AccessControlType): _45.AccessControlTypeAmino;
                    fromAminoMsg(object: _45.AccessControlTypeAminoMsg): _45.AccessControlType;
                    toAminoMsg(message: _45.AccessControlType): _45.AccessControlTypeAminoMsg;
                    fromProtoMsg(message: _45.AccessControlTypeProtoMsg): _45.AccessControlType;
                    toProto(message: _45.AccessControlType): Uint8Array;
                    toProtoMsg(message: _45.AccessControlType): _45.AccessControlTypeProtoMsg;
                };
                ChainConfig: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.ChainConfig;
                    isSDK(o: any): o is _45.ChainConfigSDKType;
                    isAmino(o: any): o is _45.ChainConfigAmino;
                    encode(message: _45.ChainConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.ChainConfig;
                    fromJSON(object: any): _45.ChainConfig;
                    toJSON(message: _45.ChainConfig): {
                        homesteadBlock: string;
                        daoForkBlock: string;
                        daoForkSupport: boolean;
                        eip150Block: string;
                        eip155Block: string;
                        eip158Block: string;
                        byzantiumBlock: string;
                        constantinopleBlock: string;
                        petersburgBlock: string;
                        istanbulBlock: string;
                        muirGlacierBlock: string;
                        berlinBlock: string;
                        londonBlock: string;
                        arrowGlacierBlock: string;
                        grayGlacierBlock: string;
                        mergeNetsplitBlock: string;
                        chainId: string;
                        denom: string;
                        decimals: string;
                        shanghaiTime: string;
                        cancunTime: string;
                        pragueTime: string;
                        verkleTime: string;
                        osakaTime: string;
                    };
                    fromPartial(object: Partial<_45.ChainConfig>): _45.ChainConfig;
                    fromAmino(object: _45.ChainConfigAmino): _45.ChainConfig;
                    toAmino(message: _45.ChainConfig): _45.ChainConfigAmino;
                    fromAminoMsg(object: _45.ChainConfigAminoMsg): _45.ChainConfig;
                    toAminoMsg(message: _45.ChainConfig): _45.ChainConfigAminoMsg;
                    fromProtoMsg(message: _45.ChainConfigProtoMsg): _45.ChainConfig;
                    toProto(message: _45.ChainConfig): Uint8Array;
                    toProtoMsg(message: _45.ChainConfig): _45.ChainConfigProtoMsg;
                };
                State: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.State;
                    isSDK(o: any): o is _45.StateSDKType;
                    isAmino(o: any): o is _45.StateAmino;
                    encode(message: _45.State, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.State;
                    fromJSON(object: any): _45.State;
                    toJSON(message: _45.State): {
                        key: string;
                        value: string;
                    };
                    fromPartial(object: Partial<_45.State>): _45.State;
                    fromAmino(object: _45.StateAmino): _45.State;
                    toAmino(message: _45.State): _45.StateAmino;
                    fromAminoMsg(object: _45.StateAminoMsg): _45.State;
                    toAminoMsg(message: _45.State): _45.StateAminoMsg;
                    fromProtoMsg(message: _45.StateProtoMsg): _45.State;
                    toProto(message: _45.State): Uint8Array;
                    toProtoMsg(message: _45.State): _45.StateProtoMsg;
                };
                TransactionLogs: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.TransactionLogs;
                    isSDK(o: any): o is _45.TransactionLogsSDKType;
                    isAmino(o: any): o is _45.TransactionLogsAmino;
                    encode(message: _45.TransactionLogs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.TransactionLogs;
                    fromJSON(object: any): _45.TransactionLogs;
                    toJSON(message: _45.TransactionLogs): {
                        hash: string;
                        logs: {
                            address: string;
                            topics: string[];
                            data: string;
                            blockNumber: string;
                            txHash: string;
                            txIndex: string;
                            blockHash: string;
                            index: string;
                            removed: boolean;
                        }[];
                    };
                    fromPartial(object: Partial<_45.TransactionLogs>): _45.TransactionLogs;
                    fromAmino(object: _45.TransactionLogsAmino): _45.TransactionLogs;
                    toAmino(message: _45.TransactionLogs): _45.TransactionLogsAmino;
                    fromAminoMsg(object: _45.TransactionLogsAminoMsg): _45.TransactionLogs;
                    toAminoMsg(message: _45.TransactionLogs): _45.TransactionLogsAminoMsg;
                    fromProtoMsg(message: _45.TransactionLogsProtoMsg): _45.TransactionLogs;
                    toProto(message: _45.TransactionLogs): Uint8Array;
                    toProtoMsg(message: _45.TransactionLogs): _45.TransactionLogsProtoMsg;
                };
                Log: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.Log;
                    isSDK(o: any): o is _45.LogSDKType;
                    isAmino(o: any): o is _45.LogAmino;
                    encode(message: _45.Log, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.Log;
                    fromJSON(object: any): _45.Log;
                    toJSON(message: _45.Log): {
                        address: string;
                        topics: string[];
                        data: string;
                        blockNumber: string;
                        txHash: string;
                        txIndex: string;
                        blockHash: string;
                        index: string;
                        removed: boolean;
                    };
                    fromPartial(object: Partial<_45.Log>): _45.Log;
                    fromAmino(object: _45.LogAmino): _45.Log;
                    toAmino(message: _45.Log): _45.LogAmino;
                    fromAminoMsg(object: _45.LogAminoMsg): _45.Log;
                    toAminoMsg(message: _45.Log): _45.LogAminoMsg;
                    fromProtoMsg(message: _45.LogProtoMsg): _45.Log;
                    toProto(message: _45.Log): Uint8Array;
                    toProtoMsg(message: _45.Log): _45.LogProtoMsg;
                };
                TxResult: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.TxResult;
                    isSDK(o: any): o is _45.TxResultSDKType;
                    isAmino(o: any): o is _45.TxResultAmino;
                    encode(message: _45.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.TxResult;
                    fromJSON(object: any): _45.TxResult;
                    toJSON(message: _45.TxResult): {
                        contractAddress: string;
                        bloom: string;
                        txLogs: {
                            hash: string;
                            logs: {
                                address: string;
                                topics: string[];
                                data: string;
                                blockNumber: string;
                                txHash: string;
                                txIndex: string;
                                blockHash: string;
                                index: string;
                                removed: boolean;
                            }[];
                        };
                        ret: string;
                        reverted: boolean;
                        gasUsed: string;
                    };
                    fromPartial(object: Partial<_45.TxResult>): _45.TxResult;
                    fromAmino(object: _45.TxResultAmino): _45.TxResult;
                    toAmino(message: _45.TxResult): _45.TxResultAmino;
                    fromAminoMsg(object: _45.TxResultAminoMsg): _45.TxResult;
                    toAminoMsg(message: _45.TxResult): _45.TxResultAminoMsg;
                    fromProtoMsg(message: _45.TxResultProtoMsg): _45.TxResult;
                    toProto(message: _45.TxResult): Uint8Array;
                    toProtoMsg(message: _45.TxResult): _45.TxResultProtoMsg;
                };
                AccessTuple: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.AccessTuple;
                    isSDK(o: any): o is _45.AccessTupleSDKType;
                    isAmino(o: any): o is _45.AccessTupleAmino;
                    encode(message: _45.AccessTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.AccessTuple;
                    fromJSON(object: any): _45.AccessTuple;
                    toJSON(message: _45.AccessTuple): {
                        address: string;
                        storageKeys: string[];
                    };
                    fromPartial(object: Partial<_45.AccessTuple>): _45.AccessTuple;
                    fromAmino(object: _45.AccessTupleAmino): _45.AccessTuple;
                    toAmino(message: _45.AccessTuple): _45.AccessTupleAmino;
                    fromAminoMsg(object: _45.AccessTupleAminoMsg): _45.AccessTuple;
                    toAminoMsg(message: _45.AccessTuple): _45.AccessTupleAminoMsg;
                    fromProtoMsg(message: _45.AccessTupleProtoMsg): _45.AccessTuple;
                    toProto(message: _45.AccessTuple): Uint8Array;
                    toProtoMsg(message: _45.AccessTuple): _45.AccessTupleProtoMsg;
                };
                TraceConfig: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _45.TraceConfig;
                    isSDK(o: any): o is _45.TraceConfigSDKType;
                    isAmino(o: any): o is _45.TraceConfigAmino;
                    encode(message: _45.TraceConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _45.TraceConfig;
                    fromJSON(object: any): _45.TraceConfig;
                    toJSON(message: _45.TraceConfig): {
                        tracer: string;
                        timeout: string;
                        reexec: string;
                        disableStack: boolean;
                        disableStorage: boolean;
                        debug: boolean;
                        limit: number;
                        overrides?: {
                            homesteadBlock: string;
                            daoForkBlock: string;
                            daoForkSupport: boolean;
                            eip150Block: string;
                            eip155Block: string;
                            eip158Block: string;
                            byzantiumBlock: string;
                            constantinopleBlock: string;
                            petersburgBlock: string;
                            istanbulBlock: string;
                            muirGlacierBlock: string;
                            berlinBlock: string;
                            londonBlock: string;
                            arrowGlacierBlock: string;
                            grayGlacierBlock: string;
                            mergeNetsplitBlock: string;
                            chainId: string;
                            denom: string;
                            decimals: string;
                            shanghaiTime: string;
                            cancunTime: string;
                            pragueTime: string;
                            verkleTime: string;
                            osakaTime: string;
                        };
                        enableMemory: boolean;
                        enableReturnData: boolean;
                        tracerJsonConfig: string;
                    };
                    fromPartial(object: Partial<_45.TraceConfig>): _45.TraceConfig;
                    fromAmino(object: _45.TraceConfigAmino): _45.TraceConfig;
                    toAmino(message: _45.TraceConfig): _45.TraceConfigAmino;
                    fromAminoMsg(object: _45.TraceConfigAminoMsg): _45.TraceConfig;
                    toAminoMsg(message: _45.TraceConfig): _45.TraceConfigAminoMsg;
                    fromProtoMsg(message: _45.TraceConfigProtoMsg): _45.TraceConfig;
                    toProto(message: _45.TraceConfig): Uint8Array;
                    toProtoMsg(message: _45.TraceConfig): _45.TraceConfigProtoMsg;
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
                    v1beta1: _185.MsgClientImpl;
                };
                bank: {
                    v1beta1: _186.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _187.MsgClientImpl;
                };
                gov: {
                    v1beta1: _188.MsgClientImpl;
                };
                staking: {
                    v1beta1: _189.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _190.MsgClientImpl;
                };
                evm: {
                    vm: {
                        v1: _191.MsgClientImpl;
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
                        accounts(request?: _5.QueryAccountsRequest): Promise<_5.QueryAccountsResponse>;
                        account(request: _5.QueryAccountRequest): Promise<_5.QueryAccountResponse>;
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                        moduleAccounts(request?: _5.QueryModuleAccountsRequest): Promise<_5.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _5.Bech32PrefixRequest): Promise<_5.Bech32PrefixResponse>;
                        addressBytesToString(request: _5.AddressBytesToStringRequest): Promise<_5.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _5.AddressStringToBytesRequest): Promise<_5.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _9.QueryGrantsRequest): Promise<_9.QueryGrantsResponse>;
                        granterGrants(request: _9.QueryGranterGrantsRequest): Promise<_9.QueryGranterGrantsResponse>;
                        granteeGrants(request: _9.QueryGranteeGrantsRequest): Promise<_9.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _14.QueryBalanceRequest): Promise<_14.QueryBalanceResponse>;
                        allBalances(request: _14.QueryAllBalancesRequest): Promise<_14.QueryAllBalancesResponse>;
                        spendableBalances(request: _14.QuerySpendableBalancesRequest): Promise<_14.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _14.QueryTotalSupplyRequest): Promise<_14.QueryTotalSupplyResponse>;
                        supplyOf(request: _14.QuerySupplyOfRequest): Promise<_14.QuerySupplyOfResponse>;
                        params(request?: _14.QueryParamsRequest): Promise<_14.QueryParamsResponse>;
                        denomMetadata(request: _14.QueryDenomMetadataRequest): Promise<_14.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _14.QueryDenomsMetadataRequest): Promise<_14.QueryDenomsMetadataResponse>;
                        denomOwners(request: _14.QueryDenomOwnersRequest): Promise<_14.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _28.QueryValidatorOutstandingRewardsRequest): Promise<_28.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _28.QueryValidatorCommissionRequest): Promise<_28.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _28.QueryValidatorSlashesRequest): Promise<_28.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _28.QueryDelegationRewardsRequest): Promise<_28.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _28.QueryDelegationTotalRewardsRequest): Promise<_28.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _28.QueryDelegatorValidatorsRequest): Promise<_28.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _28.QueryDelegatorWithdrawAddressRequest): Promise<_28.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _28.QueryCommunityPoolRequest): Promise<_28.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                        proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                        vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                        votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                        params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                        deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                        tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                        validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                        validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                        unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                        pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                        getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                        broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                        getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                        getBlockWithTxs(request: _40.GetBlockWithTxsRequest): Promise<_40.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                        appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                        authority(request?: _42.QueryAuthorityRequest): Promise<_42.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
