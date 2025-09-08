import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v2alpha1/reflection";
import * as _17 from "./base/v1beta1/coin";
import * as _18 from "./crypto/ed25519/keys";
import * as _19 from "./crypto/hd/v1/hd";
import * as _20 from "./crypto/keyring/v1/record";
import * as _21 from "./crypto/multisig/keys";
import * as _22 from "./crypto/secp256k1/keys";
import * as _23 from "./crypto/secp256r1/keys";
import * as _24 from "./distribution/v1beta1/distribution";
import * as _25 from "./distribution/v1beta1/genesis";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/genesis";
import * as _33 from "./staking/v1beta1/staking";
import * as _34 from "./staking/v1beta1/tx";
import * as _35 from "./tx/signing/v1beta1/signing";
import * as _36 from "./tx/v1beta1/service";
import * as _37 from "./tx/v1beta1/tx";
import * as _38 from "./upgrade/v1beta1/query";
import * as _39 from "./upgrade/v1beta1/tx";
import * as _40 from "./upgrade/v1beta1/upgrade";
import * as _41 from "./evm/vm/v1/evm";
import * as _42 from "./evm/vm/v1/tx";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./gov/v1beta1/query.rpc.Query";
import * as _175 from "./tx/v1beta1/service.rpc.Service";
import * as _176 from "./upgrade/v1beta1/query.rpc.Query";
import * as _177 from "./authz/v1beta1/tx.rpc.msg";
import * as _178 from "./bank/v1beta1/tx.rpc.msg";
import * as _179 from "./distribution/v1beta1/tx.rpc.msg";
import * as _180 from "./gov/v1beta1/tx.rpc.msg";
import * as _181 from "./staking/v1beta1/tx.rpc.msg";
import * as _182 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _183 from "./evm/vm/v1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _173.QueryClientImpl;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryAccountsRequest;
                fromJSON(object: any): _5.QueryAccountsRequest;
                toJSON(message: _5.QueryAccountsRequest): import("..").JsonSafe<_5.QueryAccountsRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryAccountsResponse;
                fromJSON(object: any): _5.QueryAccountsResponse;
                toJSON(message: _5.QueryAccountsResponse): import("..").JsonSafe<_5.QueryAccountsResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryAccountRequest;
                fromJSON(object: any): _5.QueryAccountRequest;
                toJSON(message: _5.QueryAccountRequest): import("..").JsonSafe<_5.QueryAccountRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryModuleAccountsRequest;
                fromJSON(_: any): _5.QueryModuleAccountsRequest;
                toJSON(_: _5.QueryModuleAccountsRequest): import("..").JsonSafe<_5.QueryModuleAccountsRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryParamsResponse;
                fromJSON(object: any): _5.QueryParamsResponse;
                toJSON(message: _5.QueryParamsResponse): import("..").JsonSafe<_5.QueryParamsResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryAccountResponse;
                fromJSON(object: any): _5.QueryAccountResponse;
                toJSON(message: _5.QueryAccountResponse): import("..").JsonSafe<_5.QueryAccountResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryParamsRequest;
                fromJSON(_: any): _5.QueryParamsRequest;
                toJSON(_: _5.QueryParamsRequest): import("..").JsonSafe<_5.QueryParamsRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.QueryModuleAccountsResponse;
                fromJSON(object: any): _5.QueryModuleAccountsResponse;
                toJSON(message: _5.QueryModuleAccountsResponse): import("..").JsonSafe<_5.QueryModuleAccountsResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.Bech32PrefixRequest;
                fromJSON(_: any): _5.Bech32PrefixRequest;
                toJSON(_: _5.Bech32PrefixRequest): import("..").JsonSafe<_5.Bech32PrefixRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.Bech32PrefixResponse;
                fromJSON(object: any): _5.Bech32PrefixResponse;
                toJSON(message: _5.Bech32PrefixResponse): import("..").JsonSafe<_5.Bech32PrefixResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.AddressBytesToStringRequest;
                fromJSON(object: any): _5.AddressBytesToStringRequest;
                toJSON(message: _5.AddressBytesToStringRequest): import("..").JsonSafe<_5.AddressBytesToStringRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.AddressBytesToStringResponse;
                fromJSON(object: any): _5.AddressBytesToStringResponse;
                toJSON(message: _5.AddressBytesToStringResponse): import("..").JsonSafe<_5.AddressBytesToStringResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.AddressStringToBytesRequest;
                fromJSON(object: any): _5.AddressStringToBytesRequest;
                toJSON(message: _5.AddressStringToBytesRequest): import("..").JsonSafe<_5.AddressStringToBytesRequest>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _5.AddressStringToBytesResponse;
                fromJSON(object: any): _5.AddressStringToBytesResponse;
                toJSON(message: _5.AddressStringToBytesResponse): import("..").JsonSafe<_5.AddressStringToBytesResponse>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _4.GenesisState;
                fromJSON(object: any): _4.GenesisState;
                toJSON(message: _4.GenesisState): import("..").JsonSafe<_4.GenesisState>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.BaseAccount;
                fromJSON(object: any): _3.BaseAccount;
                toJSON(message: _3.BaseAccount): import("..").JsonSafe<_3.BaseAccount>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.ModuleAccount;
                fromJSON(object: any): _3.ModuleAccount;
                toJSON(message: _3.ModuleAccount): import("..").JsonSafe<_3.ModuleAccount>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _3.Params;
                fromJSON(object: any): _3.Params;
                toJSON(message: _3.Params): import("..").JsonSafe<_3.Params>;
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
            MsgClientImpl: typeof _177.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: {
                            granter: string;
                            grantee: string;
                            grant: {
                                authorization?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
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
                                    authorizationType: _31.AuthorizationType;
                                } | {
                                    $typeUrl?: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
                                    grants: {
                                        contract: string;
                                        limit?: {
                                            $typeUrl?: "/google.protobuf.Any" | string;
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
                                            $typeUrl?: "/google.protobuf.Any" | string;
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
                                            $typeUrl?: "/google.protobuf.Any" | string;
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
                                            $typeUrl?: "/google.protobuf.Any" | string;
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
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: {
                            grantee: string;
                            msgs: {
                                $typeUrl?: "/google.protobuf.Any" | string;
                                typeUrl: string;
                                value: string;
                            }[];
                        };
                    };
                    revoke(value: _9.MsgRevoke): {
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
                        value: _9.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _9.MsgGrant) => _9.MsgGrantAmino;
                    fromAmino: (object: _9.MsgGrantAmino) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _9.MsgExec) => _9.MsgExecAmino;
                    fromAmino: (object: _9.MsgExecAmino) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _9.MsgRevoke) => _9.MsgRevokeAmino;
                    fromAmino: (object: _9.MsgRevokeAmino) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.MsgGrant;
                isSDK(o: any): o is _9.MsgGrantSDKType;
                isAmino(o: any): o is _9.MsgGrantAmino;
                encode(message: _9.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.MsgGrant;
                fromJSON(object: any): _9.MsgGrant;
                toJSON(message: _9.MsgGrant): import("..").JsonSafe<_9.MsgGrant>;
                fromPartial(object: Partial<_9.MsgGrant>): _9.MsgGrant;
                fromAmino(object: _9.MsgGrantAmino): _9.MsgGrant;
                toAmino(message: _9.MsgGrant): _9.MsgGrantAmino;
                fromAminoMsg(object: _9.MsgGrantAminoMsg): _9.MsgGrant;
                toAminoMsg(message: _9.MsgGrant): _9.MsgGrantAminoMsg;
                fromProtoMsg(message: _9.MsgGrantProtoMsg): _9.MsgGrant;
                toProto(message: _9.MsgGrant): Uint8Array;
                toProtoMsg(message: _9.MsgGrant): _9.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.MsgExecResponse;
                isSDK(o: any): o is _9.MsgExecResponseSDKType;
                isAmino(o: any): o is _9.MsgExecResponseAmino;
                encode(message: _9.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.MsgExecResponse;
                fromJSON(object: any): _9.MsgExecResponse;
                toJSON(message: _9.MsgExecResponse): import("..").JsonSafe<_9.MsgExecResponse>;
                fromPartial(object: Partial<_9.MsgExecResponse>): _9.MsgExecResponse;
                fromAmino(object: _9.MsgExecResponseAmino): _9.MsgExecResponse;
                toAmino(message: _9.MsgExecResponse): _9.MsgExecResponseAmino;
                fromAminoMsg(object: _9.MsgExecResponseAminoMsg): _9.MsgExecResponse;
                toAminoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _9.MsgExecResponseProtoMsg): _9.MsgExecResponse;
                toProto(message: _9.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _9.MsgExecResponse): _9.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.MsgExec;
                isSDK(o: any): o is _9.MsgExecSDKType;
                isAmino(o: any): o is _9.MsgExecAmino;
                encode(message: _9.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.MsgExec;
                fromJSON(object: any): _9.MsgExec;
                toJSON(message: _9.MsgExec): import("..").JsonSafe<_9.MsgExec>;
                fromPartial(object: Partial<_9.MsgExec>): _9.MsgExec;
                fromAmino(object: _9.MsgExecAmino): _9.MsgExec;
                toAmino(message: _9.MsgExec): _9.MsgExecAmino;
                fromAminoMsg(object: _9.MsgExecAminoMsg): _9.MsgExec;
                toAminoMsg(message: _9.MsgExec): _9.MsgExecAminoMsg;
                fromProtoMsg(message: _9.MsgExecProtoMsg): _9.MsgExec;
                toProto(message: _9.MsgExec): Uint8Array;
                toProtoMsg(message: _9.MsgExec): _9.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.MsgGrantResponse;
                isSDK(o: any): o is _9.MsgGrantResponseSDKType;
                isAmino(o: any): o is _9.MsgGrantResponseAmino;
                encode(_: _9.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.MsgGrantResponse;
                fromJSON(_: any): _9.MsgGrantResponse;
                toJSON(_: _9.MsgGrantResponse): import("..").JsonSafe<_9.MsgGrantResponse>;
                fromPartial(_: Partial<_9.MsgGrantResponse>): _9.MsgGrantResponse;
                fromAmino(_: _9.MsgGrantResponseAmino): _9.MsgGrantResponse;
                toAmino(_: _9.MsgGrantResponse): _9.MsgGrantResponseAmino;
                fromAminoMsg(object: _9.MsgGrantResponseAminoMsg): _9.MsgGrantResponse;
                toAminoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _9.MsgGrantResponseProtoMsg): _9.MsgGrantResponse;
                toProto(message: _9.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _9.MsgGrantResponse): _9.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.MsgRevoke;
                isSDK(o: any): o is _9.MsgRevokeSDKType;
                isAmino(o: any): o is _9.MsgRevokeAmino;
                encode(message: _9.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.MsgRevoke;
                fromJSON(object: any): _9.MsgRevoke;
                toJSON(message: _9.MsgRevoke): import("..").JsonSafe<_9.MsgRevoke>;
                fromPartial(object: Partial<_9.MsgRevoke>): _9.MsgRevoke;
                fromAmino(object: _9.MsgRevokeAmino): _9.MsgRevoke;
                toAmino(message: _9.MsgRevoke): _9.MsgRevokeAmino;
                fromAminoMsg(object: _9.MsgRevokeAminoMsg): _9.MsgRevoke;
                toAminoMsg(message: _9.MsgRevoke): _9.MsgRevokeAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeProtoMsg): _9.MsgRevoke;
                toProto(message: _9.MsgRevoke): Uint8Array;
                toProtoMsg(message: _9.MsgRevoke): _9.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _9.MsgRevokeResponse;
                isSDK(o: any): o is _9.MsgRevokeResponseSDKType;
                isAmino(o: any): o is _9.MsgRevokeResponseAmino;
                encode(_: _9.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _9.MsgRevokeResponse;
                fromJSON(_: any): _9.MsgRevokeResponse;
                toJSON(_: _9.MsgRevokeResponse): import("..").JsonSafe<_9.MsgRevokeResponse>;
                fromPartial(_: Partial<_9.MsgRevokeResponse>): _9.MsgRevokeResponse;
                fromAmino(_: _9.MsgRevokeResponseAmino): _9.MsgRevokeResponse;
                toAmino(_: _9.MsgRevokeResponse): _9.MsgRevokeResponseAmino;
                fromAminoMsg(object: _9.MsgRevokeResponseAminoMsg): _9.MsgRevokeResponse;
                toAminoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _9.MsgRevokeResponseProtoMsg): _9.MsgRevokeResponse;
                toProto(message: _9.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _9.MsgRevokeResponse): _9.MsgRevokeResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _8.GenesisState;
                isSDK(o: any): o is _8.GenesisStateSDKType;
                isAmino(o: any): o is _8.GenesisStateAmino;
                encode(message: _8.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): import("..").JsonSafe<_8.GenesisState>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.EventGrant;
                fromJSON(object: any): _7.EventGrant;
                toJSON(message: _7.EventGrant): import("..").JsonSafe<_7.EventGrant>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _7.EventRevoke;
                fromJSON(object: any): _7.EventRevoke;
                toJSON(message: _7.EventRevoke): import("..").JsonSafe<_7.EventRevoke>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.GenericAuthorization;
                fromJSON(object: any): _6.GenericAuthorization;
                toJSON(message: _6.GenericAuthorization): import("..").JsonSafe<_6.GenericAuthorization>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.Grant;
                fromJSON(object: any): _6.Grant;
                toJSON(message: _6.Grant): import("..").JsonSafe<_6.Grant>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.GrantAuthorization;
                fromJSON(object: any): _6.GrantAuthorization;
                toJSON(message: _6.GrantAuthorization): import("..").JsonSafe<_6.GrantAuthorization>;
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
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _6.GrantQueueItem;
                fromJSON(object: any): _6.GrantQueueItem;
                toJSON(message: _6.GrantQueueItem): import("..").JsonSafe<_6.GrantQueueItem>;
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
            MsgClientImpl: typeof _178.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _13.MsgSend): {
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
                    multiSend(value: _13.MsgMultiSend): {
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
                        value: _13.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgSend) => _13.MsgSendAmino;
                    fromAmino: (object: _13.MsgSendAmino) => _13.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgMultiSend) => _13.MsgMultiSendAmino;
                    fromAmino: (object: _13.MsgMultiSendAmino) => _13.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _13.MsgSend;
                isSDK(o: any): o is _13.MsgSendSDKType;
                isAmino(o: any): o is _13.MsgSendAmino;
                encode(message: _13.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgSend;
                fromJSON(object: any): _13.MsgSend;
                toJSON(message: _13.MsgSend): import("..").JsonSafe<_13.MsgSend>;
                fromPartial(object: Partial<_13.MsgSend>): _13.MsgSend;
                fromAmino(object: _13.MsgSendAmino): _13.MsgSend;
                toAmino(message: _13.MsgSend): _13.MsgSendAmino;
                fromAminoMsg(object: _13.MsgSendAminoMsg): _13.MsgSend;
                toAminoMsg(message: _13.MsgSend): _13.MsgSendAminoMsg;
                fromProtoMsg(message: _13.MsgSendProtoMsg): _13.MsgSend;
                toProto(message: _13.MsgSend): Uint8Array;
                toProtoMsg(message: _13.MsgSend): _13.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _13.MsgSendResponse;
                isSDK(o: any): o is _13.MsgSendResponseSDKType;
                isAmino(o: any): o is _13.MsgSendResponseAmino;
                encode(_: _13.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgSendResponse;
                fromJSON(_: any): _13.MsgSendResponse;
                toJSON(_: _13.MsgSendResponse): import("..").JsonSafe<_13.MsgSendResponse>;
                fromPartial(_: Partial<_13.MsgSendResponse>): _13.MsgSendResponse;
                fromAmino(_: _13.MsgSendResponseAmino): _13.MsgSendResponse;
                toAmino(_: _13.MsgSendResponse): _13.MsgSendResponseAmino;
                fromAminoMsg(object: _13.MsgSendResponseAminoMsg): _13.MsgSendResponse;
                toAminoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgSendResponseProtoMsg): _13.MsgSendResponse;
                toProto(message: _13.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _13.MsgMultiSend;
                isSDK(o: any): o is _13.MsgMultiSendSDKType;
                isAmino(o: any): o is _13.MsgMultiSendAmino;
                encode(message: _13.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgMultiSend;
                fromJSON(object: any): _13.MsgMultiSend;
                toJSON(message: _13.MsgMultiSend): import("..").JsonSafe<_13.MsgMultiSend>;
                fromPartial(object: Partial<_13.MsgMultiSend>): _13.MsgMultiSend;
                fromAmino(object: _13.MsgMultiSendAmino): _13.MsgMultiSend;
                toAmino(message: _13.MsgMultiSend): _13.MsgMultiSendAmino;
                fromAminoMsg(object: _13.MsgMultiSendAminoMsg): _13.MsgMultiSend;
                toAminoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendProtoMsg): _13.MsgMultiSend;
                toProto(message: _13.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _13.MsgMultiSendResponse;
                isSDK(o: any): o is _13.MsgMultiSendResponseSDKType;
                isAmino(o: any): o is _13.MsgMultiSendResponseAmino;
                encode(_: _13.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _13.MsgMultiSendResponse;
                fromJSON(_: any): _13.MsgMultiSendResponse;
                toJSON(_: _13.MsgMultiSendResponse): import("..").JsonSafe<_13.MsgMultiSendResponse>;
                fromPartial(_: Partial<_13.MsgMultiSendResponse>): _13.MsgMultiSendResponse;
                fromAmino(_: _13.MsgMultiSendResponseAmino): _13.MsgMultiSendResponse;
                toAmino(_: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _13.MsgMultiSendResponseAminoMsg): _13.MsgMultiSendResponse;
                toAminoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendResponseProtoMsg): _13.MsgMultiSendResponse;
                toProto(message: _13.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.GenesisState;
                isSDK(o: any): o is _12.GenesisStateSDKType;
                isAmino(o: any): o is _12.GenesisStateAmino;
                encode(message: _12.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): import("..").JsonSafe<_12.GenesisState>;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _12.Balance;
                isSDK(o: any): o is _12.BalanceSDKType;
                isAmino(o: any): o is _12.BalanceAmino;
                encode(message: _12.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _12.Balance;
                fromJSON(object: any): _12.Balance;
                toJSON(message: _12.Balance): import("..").JsonSafe<_12.Balance>;
                fromPartial(object: Partial<_12.Balance>): _12.Balance;
                fromAmino(object: _12.BalanceAmino): _12.Balance;
                toAmino(message: _12.Balance): _12.BalanceAmino;
                fromAminoMsg(object: _12.BalanceAminoMsg): _12.Balance;
                toAminoMsg(message: _12.Balance): _12.BalanceAminoMsg;
                fromProtoMsg(message: _12.BalanceProtoMsg): _12.Balance;
                toProto(message: _12.Balance): Uint8Array;
                toProtoMsg(message: _12.Balance): _12.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.Params;
                isSDK(o: any): o is _11.ParamsSDKType;
                isAmino(o: any): o is _11.ParamsAmino;
                encode(message: _11.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): import("..").JsonSafe<_11.Params>;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.SendEnabled;
                isSDK(o: any): o is _11.SendEnabledSDKType;
                isAmino(o: any): o is _11.SendEnabledAmino;
                encode(message: _11.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.SendEnabled;
                fromJSON(object: any): _11.SendEnabled;
                toJSON(message: _11.SendEnabled): import("..").JsonSafe<_11.SendEnabled>;
                fromPartial(object: Partial<_11.SendEnabled>): _11.SendEnabled;
                fromAmino(object: _11.SendEnabledAmino): _11.SendEnabled;
                toAmino(message: _11.SendEnabled): _11.SendEnabledAmino;
                fromAminoMsg(object: _11.SendEnabledAminoMsg): _11.SendEnabled;
                toAminoMsg(message: _11.SendEnabled): _11.SendEnabledAminoMsg;
                fromProtoMsg(message: _11.SendEnabledProtoMsg): _11.SendEnabled;
                toProto(message: _11.SendEnabled): Uint8Array;
                toProtoMsg(message: _11.SendEnabled): _11.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.Input;
                isSDK(o: any): o is _11.InputSDKType;
                isAmino(o: any): o is _11.InputAmino;
                encode(message: _11.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Input;
                fromJSON(object: any): _11.Input;
                toJSON(message: _11.Input): import("..").JsonSafe<_11.Input>;
                fromPartial(object: Partial<_11.Input>): _11.Input;
                fromAmino(object: _11.InputAmino): _11.Input;
                toAmino(message: _11.Input): _11.InputAmino;
                fromAminoMsg(object: _11.InputAminoMsg): _11.Input;
                toAminoMsg(message: _11.Input): _11.InputAminoMsg;
                fromProtoMsg(message: _11.InputProtoMsg): _11.Input;
                toProto(message: _11.Input): Uint8Array;
                toProtoMsg(message: _11.Input): _11.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.Output;
                isSDK(o: any): o is _11.OutputSDKType;
                isAmino(o: any): o is _11.OutputAmino;
                encode(message: _11.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Output;
                fromJSON(object: any): _11.Output;
                toJSON(message: _11.Output): import("..").JsonSafe<_11.Output>;
                fromPartial(object: Partial<_11.Output>): _11.Output;
                fromAmino(object: _11.OutputAmino): _11.Output;
                toAmino(message: _11.Output): _11.OutputAmino;
                fromAminoMsg(object: _11.OutputAminoMsg): _11.Output;
                toAminoMsg(message: _11.Output): _11.OutputAminoMsg;
                fromProtoMsg(message: _11.OutputProtoMsg): _11.Output;
                toProto(message: _11.Output): Uint8Array;
                toProtoMsg(message: _11.Output): _11.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.Supply;
                isSDK(o: any): o is _11.SupplySDKType;
                isAmino(o: any): o is _11.SupplyAmino;
                encode(message: _11.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Supply;
                fromJSON(object: any): _11.Supply;
                toJSON(message: _11.Supply): import("..").JsonSafe<_11.Supply>;
                fromPartial(object: Partial<_11.Supply>): _11.Supply;
                fromAmino(object: _11.SupplyAmino): _11.Supply;
                toAmino(message: _11.Supply): _11.SupplyAmino;
                fromAminoMsg(object: _11.SupplyAminoMsg): _11.Supply;
                toAminoMsg(message: _11.Supply): _11.SupplyAminoMsg;
                fromProtoMsg(message: _11.SupplyProtoMsg): _11.Supply;
                toProto(message: _11.Supply): Uint8Array;
                toProtoMsg(message: _11.Supply): _11.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.DenomUnit;
                isSDK(o: any): o is _11.DenomUnitSDKType;
                isAmino(o: any): o is _11.DenomUnitAmino;
                encode(message: _11.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.DenomUnit;
                fromJSON(object: any): _11.DenomUnit;
                toJSON(message: _11.DenomUnit): import("..").JsonSafe<_11.DenomUnit>;
                fromPartial(object: Partial<_11.DenomUnit>): _11.DenomUnit;
                fromAmino(object: _11.DenomUnitAmino): _11.DenomUnit;
                toAmino(message: _11.DenomUnit): _11.DenomUnitAmino;
                fromAminoMsg(object: _11.DenomUnitAminoMsg): _11.DenomUnit;
                toAminoMsg(message: _11.DenomUnit): _11.DenomUnitAminoMsg;
                fromProtoMsg(message: _11.DenomUnitProtoMsg): _11.DenomUnit;
                toProto(message: _11.DenomUnit): Uint8Array;
                toProtoMsg(message: _11.DenomUnit): _11.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _11.Metadata;
                isSDK(o: any): o is _11.MetadataSDKType;
                isAmino(o: any): o is _11.MetadataAmino;
                encode(message: _11.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _11.Metadata;
                fromJSON(object: any): _11.Metadata;
                toJSON(message: _11.Metadata): import("..").JsonSafe<_11.Metadata>;
                fromPartial(object: Partial<_11.Metadata>): _11.Metadata;
                fromAmino(object: _11.MetadataAmino): _11.Metadata;
                toAmino(message: _11.Metadata): _11.MetadataAmino;
                fromAminoMsg(object: _11.MetadataAminoMsg): _11.Metadata;
                toAminoMsg(message: _11.Metadata): _11.MetadataAminoMsg;
                fromProtoMsg(message: _11.MetadataProtoMsg): _11.Metadata;
                toProto(message: _11.Metadata): Uint8Array;
                toProtoMsg(message: _11.Metadata): _11.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _10.SendAuthorization;
                isSDK(o: any): o is _10.SendAuthorizationSDKType;
                isAmino(o: any): o is _10.SendAuthorizationAmino;
                encode(message: _10.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _10.SendAuthorization;
                fromJSON(object: any): _10.SendAuthorization;
                toJSON(message: _10.SendAuthorization): import("..").JsonSafe<_10.SendAuthorization>;
                fromPartial(object: Partial<_10.SendAuthorization>): _10.SendAuthorization;
                fromAmino(object: _10.SendAuthorizationAmino): _10.SendAuthorization;
                toAmino(message: _10.SendAuthorization): _10.SendAuthorizationAmino;
                fromAminoMsg(object: _10.SendAuthorizationAminoMsg): _10.SendAuthorization;
                toAminoMsg(message: _10.SendAuthorization): _10.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _10.SendAuthorizationProtoMsg): _10.SendAuthorization;
                toProto(message: _10.SendAuthorization): Uint8Array;
                toProtoMsg(message: _10.SendAuthorization): _10.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.TxResponse;
                    isSDK(o: any): o is _14.TxResponseSDKType;
                    isAmino(o: any): o is _14.TxResponseAmino;
                    encode(message: _14.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.TxResponse;
                    fromJSON(object: any): _14.TxResponse;
                    toJSON(message: _14.TxResponse): import("..").JsonSafe<_14.TxResponse>;
                    fromPartial(object: Partial<_14.TxResponse>): _14.TxResponse;
                    fromAmino(object: _14.TxResponseAmino): _14.TxResponse;
                    toAmino(message: _14.TxResponse): _14.TxResponseAmino;
                    fromAminoMsg(object: _14.TxResponseAminoMsg): _14.TxResponse;
                    toAminoMsg(message: _14.TxResponse): _14.TxResponseAminoMsg;
                    fromProtoMsg(message: _14.TxResponseProtoMsg): _14.TxResponse;
                    toProto(message: _14.TxResponse): Uint8Array;
                    toProtoMsg(message: _14.TxResponse): _14.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.ABCIMessageLog;
                    isSDK(o: any): o is _14.ABCIMessageLogSDKType;
                    isAmino(o: any): o is _14.ABCIMessageLogAmino;
                    encode(message: _14.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.ABCIMessageLog;
                    fromJSON(object: any): _14.ABCIMessageLog;
                    toJSON(message: _14.ABCIMessageLog): import("..").JsonSafe<_14.ABCIMessageLog>;
                    fromPartial(object: Partial<_14.ABCIMessageLog>): _14.ABCIMessageLog;
                    fromAmino(object: _14.ABCIMessageLogAmino): _14.ABCIMessageLog;
                    toAmino(message: _14.ABCIMessageLog): _14.ABCIMessageLogAmino;
                    fromAminoMsg(object: _14.ABCIMessageLogAminoMsg): _14.ABCIMessageLog;
                    toAminoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _14.ABCIMessageLogProtoMsg): _14.ABCIMessageLog;
                    toProto(message: _14.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.StringEvent;
                    isSDK(o: any): o is _14.StringEventSDKType;
                    isAmino(o: any): o is _14.StringEventAmino;
                    encode(message: _14.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.StringEvent;
                    fromJSON(object: any): _14.StringEvent;
                    toJSON(message: _14.StringEvent): import("..").JsonSafe<_14.StringEvent>;
                    fromPartial(object: Partial<_14.StringEvent>): _14.StringEvent;
                    fromAmino(object: _14.StringEventAmino): _14.StringEvent;
                    toAmino(message: _14.StringEvent): _14.StringEventAmino;
                    fromAminoMsg(object: _14.StringEventAminoMsg): _14.StringEvent;
                    toAminoMsg(message: _14.StringEvent): _14.StringEventAminoMsg;
                    fromProtoMsg(message: _14.StringEventProtoMsg): _14.StringEvent;
                    toProto(message: _14.StringEvent): Uint8Array;
                    toProtoMsg(message: _14.StringEvent): _14.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.Attribute;
                    isSDK(o: any): o is _14.AttributeSDKType;
                    isAmino(o: any): o is _14.AttributeAmino;
                    encode(message: _14.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.Attribute;
                    fromJSON(object: any): _14.Attribute;
                    toJSON(message: _14.Attribute): import("..").JsonSafe<_14.Attribute>;
                    fromPartial(object: Partial<_14.Attribute>): _14.Attribute;
                    fromAmino(object: _14.AttributeAmino): _14.Attribute;
                    toAmino(message: _14.Attribute): _14.AttributeAmino;
                    fromAminoMsg(object: _14.AttributeAminoMsg): _14.Attribute;
                    toAminoMsg(message: _14.Attribute): _14.AttributeAminoMsg;
                    fromProtoMsg(message: _14.AttributeProtoMsg): _14.Attribute;
                    toProto(message: _14.Attribute): Uint8Array;
                    toProtoMsg(message: _14.Attribute): _14.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.GasInfo;
                    isSDK(o: any): o is _14.GasInfoSDKType;
                    isAmino(o: any): o is _14.GasInfoAmino;
                    encode(message: _14.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.GasInfo;
                    fromJSON(object: any): _14.GasInfo;
                    toJSON(message: _14.GasInfo): import("..").JsonSafe<_14.GasInfo>;
                    fromPartial(object: Partial<_14.GasInfo>): _14.GasInfo;
                    fromAmino(object: _14.GasInfoAmino): _14.GasInfo;
                    toAmino(message: _14.GasInfo): _14.GasInfoAmino;
                    fromAminoMsg(object: _14.GasInfoAminoMsg): _14.GasInfo;
                    toAminoMsg(message: _14.GasInfo): _14.GasInfoAminoMsg;
                    fromProtoMsg(message: _14.GasInfoProtoMsg): _14.GasInfo;
                    toProto(message: _14.GasInfo): Uint8Array;
                    toProtoMsg(message: _14.GasInfo): _14.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.Result;
                    isSDK(o: any): o is _14.ResultSDKType;
                    isAmino(o: any): o is _14.ResultAmino;
                    encode(message: _14.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.Result;
                    fromJSON(object: any): _14.Result;
                    toJSON(message: _14.Result): import("..").JsonSafe<_14.Result>;
                    fromPartial(object: Partial<_14.Result>): _14.Result;
                    fromAmino(object: _14.ResultAmino): _14.Result;
                    toAmino(message: _14.Result): _14.ResultAmino;
                    fromAminoMsg(object: _14.ResultAminoMsg): _14.Result;
                    toAminoMsg(message: _14.Result): _14.ResultAminoMsg;
                    fromProtoMsg(message: _14.ResultProtoMsg): _14.Result;
                    toProto(message: _14.Result): Uint8Array;
                    toProtoMsg(message: _14.Result): _14.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.SimulationResponse;
                    isSDK(o: any): o is _14.SimulationResponseSDKType;
                    isAmino(o: any): o is _14.SimulationResponseAmino;
                    encode(message: _14.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.SimulationResponse;
                    fromJSON(object: any): _14.SimulationResponse;
                    toJSON(message: _14.SimulationResponse): import("..").JsonSafe<_14.SimulationResponse>;
                    fromPartial(object: Partial<_14.SimulationResponse>): _14.SimulationResponse;
                    fromAmino(object: _14.SimulationResponseAmino): _14.SimulationResponse;
                    toAmino(message: _14.SimulationResponse): _14.SimulationResponseAmino;
                    fromAminoMsg(object: _14.SimulationResponseAminoMsg): _14.SimulationResponse;
                    toAminoMsg(message: _14.SimulationResponse): _14.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _14.SimulationResponseProtoMsg): _14.SimulationResponse;
                    toProto(message: _14.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _14.SimulationResponse): _14.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.MsgData;
                    isSDK(o: any): o is _14.MsgDataSDKType;
                    isAmino(o: any): o is _14.MsgDataAmino;
                    encode(message: _14.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.MsgData;
                    fromJSON(object: any): _14.MsgData;
                    toJSON(message: _14.MsgData): import("..").JsonSafe<_14.MsgData>;
                    fromPartial(object: Partial<_14.MsgData>): _14.MsgData;
                    fromAmino(object: _14.MsgDataAmino): _14.MsgData;
                    toAmino(message: _14.MsgData): _14.MsgDataAmino;
                    fromAminoMsg(object: _14.MsgDataAminoMsg): _14.MsgData;
                    toAminoMsg(message: _14.MsgData): _14.MsgDataAminoMsg;
                    fromProtoMsg(message: _14.MsgDataProtoMsg): _14.MsgData;
                    toProto(message: _14.MsgData): Uint8Array;
                    toProtoMsg(message: _14.MsgData): _14.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.TxMsgData;
                    isSDK(o: any): o is _14.TxMsgDataSDKType;
                    isAmino(o: any): o is _14.TxMsgDataAmino;
                    encode(message: _14.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.TxMsgData;
                    fromJSON(object: any): _14.TxMsgData;
                    toJSON(message: _14.TxMsgData): import("..").JsonSafe<_14.TxMsgData>;
                    fromPartial(object: Partial<_14.TxMsgData>): _14.TxMsgData;
                    fromAmino(object: _14.TxMsgDataAmino): _14.TxMsgData;
                    toAmino(message: _14.TxMsgData): _14.TxMsgDataAmino;
                    fromAminoMsg(object: _14.TxMsgDataAminoMsg): _14.TxMsgData;
                    toAminoMsg(message: _14.TxMsgData): _14.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _14.TxMsgDataProtoMsg): _14.TxMsgData;
                    toProto(message: _14.TxMsgData): Uint8Array;
                    toProtoMsg(message: _14.TxMsgData): _14.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _14.SearchTxsResult;
                    isSDK(o: any): o is _14.SearchTxsResultSDKType;
                    isAmino(o: any): o is _14.SearchTxsResultAmino;
                    encode(message: _14.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _14.SearchTxsResult;
                    fromJSON(object: any): _14.SearchTxsResult;
                    toJSON(message: _14.SearchTxsResult): import("..").JsonSafe<_14.SearchTxsResult>;
                    fromPartial(object: Partial<_14.SearchTxsResult>): _14.SearchTxsResult;
                    fromAmino(object: _14.SearchTxsResultAmino): _14.SearchTxsResult;
                    toAmino(message: _14.SearchTxsResult): _14.SearchTxsResultAmino;
                    fromAminoMsg(object: _14.SearchTxsResultAminoMsg): _14.SearchTxsResult;
                    toAminoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _14.SearchTxsResultProtoMsg): _14.SearchTxsResult;
                    toProto(message: _14.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _15.PageRequest;
                    isSDK(o: any): o is _15.PageRequestSDKType;
                    isAmino(o: any): o is _15.PageRequestAmino;
                    encode(message: _15.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.PageRequest;
                    fromJSON(object: any): _15.PageRequest;
                    toJSON(message: _15.PageRequest): import("..").JsonSafe<_15.PageRequest>;
                    fromPartial(object: Partial<_15.PageRequest>): _15.PageRequest;
                    fromAmino(object: _15.PageRequestAmino): _15.PageRequest;
                    toAmino(message: _15.PageRequest): _15.PageRequestAmino;
                    fromAminoMsg(object: _15.PageRequestAminoMsg): _15.PageRequest;
                    toAminoMsg(message: _15.PageRequest): _15.PageRequestAminoMsg;
                    fromProtoMsg(message: _15.PageRequestProtoMsg): _15.PageRequest;
                    toProto(message: _15.PageRequest): Uint8Array;
                    toProtoMsg(message: _15.PageRequest): _15.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _15.PageResponse;
                    isSDK(o: any): o is _15.PageResponseSDKType;
                    isAmino(o: any): o is _15.PageResponseAmino;
                    encode(message: _15.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _15.PageResponse;
                    fromJSON(object: any): _15.PageResponse;
                    toJSON(message: _15.PageResponse): import("..").JsonSafe<_15.PageResponse>;
                    fromPartial(object: Partial<_15.PageResponse>): _15.PageResponse;
                    fromAmino(object: _15.PageResponseAmino): _15.PageResponse;
                    toAmino(message: _15.PageResponse): _15.PageResponseAmino;
                    fromAminoMsg(object: _15.PageResponseAminoMsg): _15.PageResponse;
                    toAminoMsg(message: _15.PageResponse): _15.PageResponseAminoMsg;
                    fromProtoMsg(message: _15.PageResponseProtoMsg): _15.PageResponse;
                    toProto(message: _15.PageResponse): Uint8Array;
                    toProtoMsg(message: _15.PageResponse): _15.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.AppDescriptor;
                    isSDK(o: any): o is _16.AppDescriptorSDKType;
                    isAmino(o: any): o is _16.AppDescriptorAmino;
                    encode(message: _16.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.AppDescriptor;
                    fromJSON(object: any): _16.AppDescriptor;
                    toJSON(message: _16.AppDescriptor): import("..").JsonSafe<_16.AppDescriptor>;
                    fromPartial(object: Partial<_16.AppDescriptor>): _16.AppDescriptor;
                    fromAmino(object: _16.AppDescriptorAmino): _16.AppDescriptor;
                    toAmino(message: _16.AppDescriptor): _16.AppDescriptorAmino;
                    fromAminoMsg(object: _16.AppDescriptorAminoMsg): _16.AppDescriptor;
                    toAminoMsg(message: _16.AppDescriptor): _16.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _16.AppDescriptorProtoMsg): _16.AppDescriptor;
                    toProto(message: _16.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _16.AppDescriptor): _16.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.TxDescriptor;
                    isSDK(o: any): o is _16.TxDescriptorSDKType;
                    isAmino(o: any): o is _16.TxDescriptorAmino;
                    encode(message: _16.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.TxDescriptor;
                    fromJSON(object: any): _16.TxDescriptor;
                    toJSON(message: _16.TxDescriptor): import("..").JsonSafe<_16.TxDescriptor>;
                    fromPartial(object: Partial<_16.TxDescriptor>): _16.TxDescriptor;
                    fromAmino(object: _16.TxDescriptorAmino): _16.TxDescriptor;
                    toAmino(message: _16.TxDescriptor): _16.TxDescriptorAmino;
                    fromAminoMsg(object: _16.TxDescriptorAminoMsg): _16.TxDescriptor;
                    toAminoMsg(message: _16.TxDescriptor): _16.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _16.TxDescriptorProtoMsg): _16.TxDescriptor;
                    toProto(message: _16.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _16.TxDescriptor): _16.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.AuthnDescriptor;
                    isSDK(o: any): o is _16.AuthnDescriptorSDKType;
                    isAmino(o: any): o is _16.AuthnDescriptorAmino;
                    encode(message: _16.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.AuthnDescriptor;
                    fromJSON(object: any): _16.AuthnDescriptor;
                    toJSON(message: _16.AuthnDescriptor): import("..").JsonSafe<_16.AuthnDescriptor>;
                    fromPartial(object: Partial<_16.AuthnDescriptor>): _16.AuthnDescriptor;
                    fromAmino(object: _16.AuthnDescriptorAmino): _16.AuthnDescriptor;
                    toAmino(message: _16.AuthnDescriptor): _16.AuthnDescriptorAmino;
                    fromAminoMsg(object: _16.AuthnDescriptorAminoMsg): _16.AuthnDescriptor;
                    toAminoMsg(message: _16.AuthnDescriptor): _16.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _16.AuthnDescriptorProtoMsg): _16.AuthnDescriptor;
                    toProto(message: _16.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _16.AuthnDescriptor): _16.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.SigningModeDescriptor;
                    isSDK(o: any): o is _16.SigningModeDescriptorSDKType;
                    isAmino(o: any): o is _16.SigningModeDescriptorAmino;
                    encode(message: _16.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.SigningModeDescriptor;
                    fromJSON(object: any): _16.SigningModeDescriptor;
                    toJSON(message: _16.SigningModeDescriptor): import("..").JsonSafe<_16.SigningModeDescriptor>;
                    fromPartial(object: Partial<_16.SigningModeDescriptor>): _16.SigningModeDescriptor;
                    fromAmino(object: _16.SigningModeDescriptorAmino): _16.SigningModeDescriptor;
                    toAmino(message: _16.SigningModeDescriptor): _16.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _16.SigningModeDescriptorAminoMsg): _16.SigningModeDescriptor;
                    toAminoMsg(message: _16.SigningModeDescriptor): _16.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _16.SigningModeDescriptorProtoMsg): _16.SigningModeDescriptor;
                    toProto(message: _16.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _16.SigningModeDescriptor): _16.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.ChainDescriptor;
                    isSDK(o: any): o is _16.ChainDescriptorSDKType;
                    isAmino(o: any): o is _16.ChainDescriptorAmino;
                    encode(message: _16.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.ChainDescriptor;
                    fromJSON(object: any): _16.ChainDescriptor;
                    toJSON(message: _16.ChainDescriptor): import("..").JsonSafe<_16.ChainDescriptor>;
                    fromPartial(object: Partial<_16.ChainDescriptor>): _16.ChainDescriptor;
                    fromAmino(object: _16.ChainDescriptorAmino): _16.ChainDescriptor;
                    toAmino(message: _16.ChainDescriptor): _16.ChainDescriptorAmino;
                    fromAminoMsg(object: _16.ChainDescriptorAminoMsg): _16.ChainDescriptor;
                    toAminoMsg(message: _16.ChainDescriptor): _16.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _16.ChainDescriptorProtoMsg): _16.ChainDescriptor;
                    toProto(message: _16.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _16.ChainDescriptor): _16.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.CodecDescriptor;
                    isSDK(o: any): o is _16.CodecDescriptorSDKType;
                    isAmino(o: any): o is _16.CodecDescriptorAmino;
                    encode(message: _16.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.CodecDescriptor;
                    fromJSON(object: any): _16.CodecDescriptor;
                    toJSON(message: _16.CodecDescriptor): import("..").JsonSafe<_16.CodecDescriptor>;
                    fromPartial(object: Partial<_16.CodecDescriptor>): _16.CodecDescriptor;
                    fromAmino(object: _16.CodecDescriptorAmino): _16.CodecDescriptor;
                    toAmino(message: _16.CodecDescriptor): _16.CodecDescriptorAmino;
                    fromAminoMsg(object: _16.CodecDescriptorAminoMsg): _16.CodecDescriptor;
                    toAminoMsg(message: _16.CodecDescriptor): _16.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _16.CodecDescriptorProtoMsg): _16.CodecDescriptor;
                    toProto(message: _16.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _16.CodecDescriptor): _16.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.InterfaceDescriptor;
                    isSDK(o: any): o is _16.InterfaceDescriptorSDKType;
                    isAmino(o: any): o is _16.InterfaceDescriptorAmino;
                    encode(message: _16.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.InterfaceDescriptor;
                    fromJSON(object: any): _16.InterfaceDescriptor;
                    toJSON(message: _16.InterfaceDescriptor): import("..").JsonSafe<_16.InterfaceDescriptor>;
                    fromPartial(object: Partial<_16.InterfaceDescriptor>): _16.InterfaceDescriptor;
                    fromAmino(object: _16.InterfaceDescriptorAmino): _16.InterfaceDescriptor;
                    toAmino(message: _16.InterfaceDescriptor): _16.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _16.InterfaceDescriptorAminoMsg): _16.InterfaceDescriptor;
                    toAminoMsg(message: _16.InterfaceDescriptor): _16.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _16.InterfaceDescriptorProtoMsg): _16.InterfaceDescriptor;
                    toProto(message: _16.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _16.InterfaceDescriptor): _16.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.InterfaceImplementerDescriptor;
                    isSDK(o: any): o is _16.InterfaceImplementerDescriptorSDKType;
                    isAmino(o: any): o is _16.InterfaceImplementerDescriptorAmino;
                    encode(message: _16.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _16.InterfaceImplementerDescriptor;
                    toJSON(message: _16.InterfaceImplementerDescriptor): import("..").JsonSafe<_16.InterfaceImplementerDescriptor>;
                    fromPartial(object: Partial<_16.InterfaceImplementerDescriptor>): _16.InterfaceImplementerDescriptor;
                    fromAmino(object: _16.InterfaceImplementerDescriptorAmino): _16.InterfaceImplementerDescriptor;
                    toAmino(message: _16.InterfaceImplementerDescriptor): _16.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _16.InterfaceImplementerDescriptorAminoMsg): _16.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _16.InterfaceImplementerDescriptor): _16.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _16.InterfaceImplementerDescriptorProtoMsg): _16.InterfaceImplementerDescriptor;
                    toProto(message: _16.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _16.InterfaceImplementerDescriptor): _16.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.InterfaceAcceptingMessageDescriptor;
                    isSDK(o: any): o is _16.InterfaceAcceptingMessageDescriptorSDKType;
                    isAmino(o: any): o is _16.InterfaceAcceptingMessageDescriptorAmino;
                    encode(message: _16.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _16.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _16.InterfaceAcceptingMessageDescriptor): import("..").JsonSafe<_16.InterfaceAcceptingMessageDescriptor>;
                    fromPartial(object: Partial<_16.InterfaceAcceptingMessageDescriptor>): _16.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _16.InterfaceAcceptingMessageDescriptorAmino): _16.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _16.InterfaceAcceptingMessageDescriptor): _16.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _16.InterfaceAcceptingMessageDescriptorAminoMsg): _16.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _16.InterfaceAcceptingMessageDescriptor): _16.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _16.InterfaceAcceptingMessageDescriptorProtoMsg): _16.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _16.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _16.InterfaceAcceptingMessageDescriptor): _16.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.ConfigurationDescriptor;
                    isSDK(o: any): o is _16.ConfigurationDescriptorSDKType;
                    isAmino(o: any): o is _16.ConfigurationDescriptorAmino;
                    encode(message: _16.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.ConfigurationDescriptor;
                    fromJSON(object: any): _16.ConfigurationDescriptor;
                    toJSON(message: _16.ConfigurationDescriptor): import("..").JsonSafe<_16.ConfigurationDescriptor>;
                    fromPartial(object: Partial<_16.ConfigurationDescriptor>): _16.ConfigurationDescriptor;
                    fromAmino(object: _16.ConfigurationDescriptorAmino): _16.ConfigurationDescriptor;
                    toAmino(message: _16.ConfigurationDescriptor): _16.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _16.ConfigurationDescriptorAminoMsg): _16.ConfigurationDescriptor;
                    toAminoMsg(message: _16.ConfigurationDescriptor): _16.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _16.ConfigurationDescriptorProtoMsg): _16.ConfigurationDescriptor;
                    toProto(message: _16.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _16.ConfigurationDescriptor): _16.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.MsgDescriptor;
                    isSDK(o: any): o is _16.MsgDescriptorSDKType;
                    isAmino(o: any): o is _16.MsgDescriptorAmino;
                    encode(message: _16.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.MsgDescriptor;
                    fromJSON(object: any): _16.MsgDescriptor;
                    toJSON(message: _16.MsgDescriptor): import("..").JsonSafe<_16.MsgDescriptor>;
                    fromPartial(object: Partial<_16.MsgDescriptor>): _16.MsgDescriptor;
                    fromAmino(object: _16.MsgDescriptorAmino): _16.MsgDescriptor;
                    toAmino(message: _16.MsgDescriptor): _16.MsgDescriptorAmino;
                    fromAminoMsg(object: _16.MsgDescriptorAminoMsg): _16.MsgDescriptor;
                    toAminoMsg(message: _16.MsgDescriptor): _16.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _16.MsgDescriptorProtoMsg): _16.MsgDescriptor;
                    toProto(message: _16.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _16.MsgDescriptor): _16.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetAuthnDescriptorRequest;
                    isSDK(o: any): o is _16.GetAuthnDescriptorRequestSDKType;
                    isAmino(o: any): o is _16.GetAuthnDescriptorRequestAmino;
                    encode(_: _16.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _16.GetAuthnDescriptorRequest;
                    toJSON(_: _16.GetAuthnDescriptorRequest): import("..").JsonSafe<_16.GetAuthnDescriptorRequest>;
                    fromPartial(_: Partial<_16.GetAuthnDescriptorRequest>): _16.GetAuthnDescriptorRequest;
                    fromAmino(_: _16.GetAuthnDescriptorRequestAmino): _16.GetAuthnDescriptorRequest;
                    toAmino(_: _16.GetAuthnDescriptorRequest): _16.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _16.GetAuthnDescriptorRequestAminoMsg): _16.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _16.GetAuthnDescriptorRequest): _16.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _16.GetAuthnDescriptorRequestProtoMsg): _16.GetAuthnDescriptorRequest;
                    toProto(message: _16.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _16.GetAuthnDescriptorRequest): _16.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetAuthnDescriptorResponse;
                    isSDK(o: any): o is _16.GetAuthnDescriptorResponseSDKType;
                    isAmino(o: any): o is _16.GetAuthnDescriptorResponseAmino;
                    encode(message: _16.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _16.GetAuthnDescriptorResponse;
                    toJSON(message: _16.GetAuthnDescriptorResponse): import("..").JsonSafe<_16.GetAuthnDescriptorResponse>;
                    fromPartial(object: Partial<_16.GetAuthnDescriptorResponse>): _16.GetAuthnDescriptorResponse;
                    fromAmino(object: _16.GetAuthnDescriptorResponseAmino): _16.GetAuthnDescriptorResponse;
                    toAmino(message: _16.GetAuthnDescriptorResponse): _16.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _16.GetAuthnDescriptorResponseAminoMsg): _16.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _16.GetAuthnDescriptorResponse): _16.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _16.GetAuthnDescriptorResponseProtoMsg): _16.GetAuthnDescriptorResponse;
                    toProto(message: _16.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _16.GetAuthnDescriptorResponse): _16.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetChainDescriptorRequest;
                    isSDK(o: any): o is _16.GetChainDescriptorRequestSDKType;
                    isAmino(o: any): o is _16.GetChainDescriptorRequestAmino;
                    encode(_: _16.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetChainDescriptorRequest;
                    fromJSON(_: any): _16.GetChainDescriptorRequest;
                    toJSON(_: _16.GetChainDescriptorRequest): import("..").JsonSafe<_16.GetChainDescriptorRequest>;
                    fromPartial(_: Partial<_16.GetChainDescriptorRequest>): _16.GetChainDescriptorRequest;
                    fromAmino(_: _16.GetChainDescriptorRequestAmino): _16.GetChainDescriptorRequest;
                    toAmino(_: _16.GetChainDescriptorRequest): _16.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _16.GetChainDescriptorRequestAminoMsg): _16.GetChainDescriptorRequest;
                    toAminoMsg(message: _16.GetChainDescriptorRequest): _16.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _16.GetChainDescriptorRequestProtoMsg): _16.GetChainDescriptorRequest;
                    toProto(message: _16.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _16.GetChainDescriptorRequest): _16.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetChainDescriptorResponse;
                    isSDK(o: any): o is _16.GetChainDescriptorResponseSDKType;
                    isAmino(o: any): o is _16.GetChainDescriptorResponseAmino;
                    encode(message: _16.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetChainDescriptorResponse;
                    fromJSON(object: any): _16.GetChainDescriptorResponse;
                    toJSON(message: _16.GetChainDescriptorResponse): import("..").JsonSafe<_16.GetChainDescriptorResponse>;
                    fromPartial(object: Partial<_16.GetChainDescriptorResponse>): _16.GetChainDescriptorResponse;
                    fromAmino(object: _16.GetChainDescriptorResponseAmino): _16.GetChainDescriptorResponse;
                    toAmino(message: _16.GetChainDescriptorResponse): _16.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _16.GetChainDescriptorResponseAminoMsg): _16.GetChainDescriptorResponse;
                    toAminoMsg(message: _16.GetChainDescriptorResponse): _16.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _16.GetChainDescriptorResponseProtoMsg): _16.GetChainDescriptorResponse;
                    toProto(message: _16.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _16.GetChainDescriptorResponse): _16.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetCodecDescriptorRequest;
                    isSDK(o: any): o is _16.GetCodecDescriptorRequestSDKType;
                    isAmino(o: any): o is _16.GetCodecDescriptorRequestAmino;
                    encode(_: _16.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetCodecDescriptorRequest;
                    fromJSON(_: any): _16.GetCodecDescriptorRequest;
                    toJSON(_: _16.GetCodecDescriptorRequest): import("..").JsonSafe<_16.GetCodecDescriptorRequest>;
                    fromPartial(_: Partial<_16.GetCodecDescriptorRequest>): _16.GetCodecDescriptorRequest;
                    fromAmino(_: _16.GetCodecDescriptorRequestAmino): _16.GetCodecDescriptorRequest;
                    toAmino(_: _16.GetCodecDescriptorRequest): _16.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _16.GetCodecDescriptorRequestAminoMsg): _16.GetCodecDescriptorRequest;
                    toAminoMsg(message: _16.GetCodecDescriptorRequest): _16.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _16.GetCodecDescriptorRequestProtoMsg): _16.GetCodecDescriptorRequest;
                    toProto(message: _16.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _16.GetCodecDescriptorRequest): _16.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetCodecDescriptorResponse;
                    isSDK(o: any): o is _16.GetCodecDescriptorResponseSDKType;
                    isAmino(o: any): o is _16.GetCodecDescriptorResponseAmino;
                    encode(message: _16.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetCodecDescriptorResponse;
                    fromJSON(object: any): _16.GetCodecDescriptorResponse;
                    toJSON(message: _16.GetCodecDescriptorResponse): import("..").JsonSafe<_16.GetCodecDescriptorResponse>;
                    fromPartial(object: Partial<_16.GetCodecDescriptorResponse>): _16.GetCodecDescriptorResponse;
                    fromAmino(object: _16.GetCodecDescriptorResponseAmino): _16.GetCodecDescriptorResponse;
                    toAmino(message: _16.GetCodecDescriptorResponse): _16.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _16.GetCodecDescriptorResponseAminoMsg): _16.GetCodecDescriptorResponse;
                    toAminoMsg(message: _16.GetCodecDescriptorResponse): _16.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _16.GetCodecDescriptorResponseProtoMsg): _16.GetCodecDescriptorResponse;
                    toProto(message: _16.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _16.GetCodecDescriptorResponse): _16.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetConfigurationDescriptorRequest;
                    isSDK(o: any): o is _16.GetConfigurationDescriptorRequestSDKType;
                    isAmino(o: any): o is _16.GetConfigurationDescriptorRequestAmino;
                    encode(_: _16.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _16.GetConfigurationDescriptorRequest;
                    toJSON(_: _16.GetConfigurationDescriptorRequest): import("..").JsonSafe<_16.GetConfigurationDescriptorRequest>;
                    fromPartial(_: Partial<_16.GetConfigurationDescriptorRequest>): _16.GetConfigurationDescriptorRequest;
                    fromAmino(_: _16.GetConfigurationDescriptorRequestAmino): _16.GetConfigurationDescriptorRequest;
                    toAmino(_: _16.GetConfigurationDescriptorRequest): _16.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _16.GetConfigurationDescriptorRequestAminoMsg): _16.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _16.GetConfigurationDescriptorRequest): _16.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _16.GetConfigurationDescriptorRequestProtoMsg): _16.GetConfigurationDescriptorRequest;
                    toProto(message: _16.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _16.GetConfigurationDescriptorRequest): _16.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetConfigurationDescriptorResponse;
                    isSDK(o: any): o is _16.GetConfigurationDescriptorResponseSDKType;
                    isAmino(o: any): o is _16.GetConfigurationDescriptorResponseAmino;
                    encode(message: _16.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _16.GetConfigurationDescriptorResponse;
                    toJSON(message: _16.GetConfigurationDescriptorResponse): import("..").JsonSafe<_16.GetConfigurationDescriptorResponse>;
                    fromPartial(object: Partial<_16.GetConfigurationDescriptorResponse>): _16.GetConfigurationDescriptorResponse;
                    fromAmino(object: _16.GetConfigurationDescriptorResponseAmino): _16.GetConfigurationDescriptorResponse;
                    toAmino(message: _16.GetConfigurationDescriptorResponse): _16.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _16.GetConfigurationDescriptorResponseAminoMsg): _16.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _16.GetConfigurationDescriptorResponse): _16.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _16.GetConfigurationDescriptorResponseProtoMsg): _16.GetConfigurationDescriptorResponse;
                    toProto(message: _16.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _16.GetConfigurationDescriptorResponse): _16.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetQueryServicesDescriptorRequest;
                    isSDK(o: any): o is _16.GetQueryServicesDescriptorRequestSDKType;
                    isAmino(o: any): o is _16.GetQueryServicesDescriptorRequestAmino;
                    encode(_: _16.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _16.GetQueryServicesDescriptorRequest;
                    toJSON(_: _16.GetQueryServicesDescriptorRequest): import("..").JsonSafe<_16.GetQueryServicesDescriptorRequest>;
                    fromPartial(_: Partial<_16.GetQueryServicesDescriptorRequest>): _16.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _16.GetQueryServicesDescriptorRequestAmino): _16.GetQueryServicesDescriptorRequest;
                    toAmino(_: _16.GetQueryServicesDescriptorRequest): _16.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _16.GetQueryServicesDescriptorRequestAminoMsg): _16.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _16.GetQueryServicesDescriptorRequest): _16.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _16.GetQueryServicesDescriptorRequestProtoMsg): _16.GetQueryServicesDescriptorRequest;
                    toProto(message: _16.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _16.GetQueryServicesDescriptorRequest): _16.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetQueryServicesDescriptorResponse;
                    isSDK(o: any): o is _16.GetQueryServicesDescriptorResponseSDKType;
                    isAmino(o: any): o is _16.GetQueryServicesDescriptorResponseAmino;
                    encode(message: _16.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _16.GetQueryServicesDescriptorResponse;
                    toJSON(message: _16.GetQueryServicesDescriptorResponse): import("..").JsonSafe<_16.GetQueryServicesDescriptorResponse>;
                    fromPartial(object: Partial<_16.GetQueryServicesDescriptorResponse>): _16.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _16.GetQueryServicesDescriptorResponseAmino): _16.GetQueryServicesDescriptorResponse;
                    toAmino(message: _16.GetQueryServicesDescriptorResponse): _16.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _16.GetQueryServicesDescriptorResponseAminoMsg): _16.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _16.GetQueryServicesDescriptorResponse): _16.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _16.GetQueryServicesDescriptorResponseProtoMsg): _16.GetQueryServicesDescriptorResponse;
                    toProto(message: _16.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _16.GetQueryServicesDescriptorResponse): _16.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetTxDescriptorRequest;
                    isSDK(o: any): o is _16.GetTxDescriptorRequestSDKType;
                    isAmino(o: any): o is _16.GetTxDescriptorRequestAmino;
                    encode(_: _16.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetTxDescriptorRequest;
                    fromJSON(_: any): _16.GetTxDescriptorRequest;
                    toJSON(_: _16.GetTxDescriptorRequest): import("..").JsonSafe<_16.GetTxDescriptorRequest>;
                    fromPartial(_: Partial<_16.GetTxDescriptorRequest>): _16.GetTxDescriptorRequest;
                    fromAmino(_: _16.GetTxDescriptorRequestAmino): _16.GetTxDescriptorRequest;
                    toAmino(_: _16.GetTxDescriptorRequest): _16.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _16.GetTxDescriptorRequestAminoMsg): _16.GetTxDescriptorRequest;
                    toAminoMsg(message: _16.GetTxDescriptorRequest): _16.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _16.GetTxDescriptorRequestProtoMsg): _16.GetTxDescriptorRequest;
                    toProto(message: _16.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _16.GetTxDescriptorRequest): _16.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.GetTxDescriptorResponse;
                    isSDK(o: any): o is _16.GetTxDescriptorResponseSDKType;
                    isAmino(o: any): o is _16.GetTxDescriptorResponseAmino;
                    encode(message: _16.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.GetTxDescriptorResponse;
                    fromJSON(object: any): _16.GetTxDescriptorResponse;
                    toJSON(message: _16.GetTxDescriptorResponse): import("..").JsonSafe<_16.GetTxDescriptorResponse>;
                    fromPartial(object: Partial<_16.GetTxDescriptorResponse>): _16.GetTxDescriptorResponse;
                    fromAmino(object: _16.GetTxDescriptorResponseAmino): _16.GetTxDescriptorResponse;
                    toAmino(message: _16.GetTxDescriptorResponse): _16.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _16.GetTxDescriptorResponseAminoMsg): _16.GetTxDescriptorResponse;
                    toAminoMsg(message: _16.GetTxDescriptorResponse): _16.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _16.GetTxDescriptorResponseProtoMsg): _16.GetTxDescriptorResponse;
                    toProto(message: _16.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _16.GetTxDescriptorResponse): _16.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.QueryServicesDescriptor;
                    isSDK(o: any): o is _16.QueryServicesDescriptorSDKType;
                    isAmino(o: any): o is _16.QueryServicesDescriptorAmino;
                    encode(message: _16.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryServicesDescriptor;
                    fromJSON(object: any): _16.QueryServicesDescriptor;
                    toJSON(message: _16.QueryServicesDescriptor): import("..").JsonSafe<_16.QueryServicesDescriptor>;
                    fromPartial(object: Partial<_16.QueryServicesDescriptor>): _16.QueryServicesDescriptor;
                    fromAmino(object: _16.QueryServicesDescriptorAmino): _16.QueryServicesDescriptor;
                    toAmino(message: _16.QueryServicesDescriptor): _16.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _16.QueryServicesDescriptorAminoMsg): _16.QueryServicesDescriptor;
                    toAminoMsg(message: _16.QueryServicesDescriptor): _16.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _16.QueryServicesDescriptorProtoMsg): _16.QueryServicesDescriptor;
                    toProto(message: _16.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _16.QueryServicesDescriptor): _16.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.QueryServiceDescriptor;
                    isSDK(o: any): o is _16.QueryServiceDescriptorSDKType;
                    isAmino(o: any): o is _16.QueryServiceDescriptorAmino;
                    encode(message: _16.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryServiceDescriptor;
                    fromJSON(object: any): _16.QueryServiceDescriptor;
                    toJSON(message: _16.QueryServiceDescriptor): import("..").JsonSafe<_16.QueryServiceDescriptor>;
                    fromPartial(object: Partial<_16.QueryServiceDescriptor>): _16.QueryServiceDescriptor;
                    fromAmino(object: _16.QueryServiceDescriptorAmino): _16.QueryServiceDescriptor;
                    toAmino(message: _16.QueryServiceDescriptor): _16.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _16.QueryServiceDescriptorAminoMsg): _16.QueryServiceDescriptor;
                    toAminoMsg(message: _16.QueryServiceDescriptor): _16.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _16.QueryServiceDescriptorProtoMsg): _16.QueryServiceDescriptor;
                    toProto(message: _16.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _16.QueryServiceDescriptor): _16.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _16.QueryMethodDescriptor;
                    isSDK(o: any): o is _16.QueryMethodDescriptorSDKType;
                    isAmino(o: any): o is _16.QueryMethodDescriptorAmino;
                    encode(message: _16.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _16.QueryMethodDescriptor;
                    fromJSON(object: any): _16.QueryMethodDescriptor;
                    toJSON(message: _16.QueryMethodDescriptor): import("..").JsonSafe<_16.QueryMethodDescriptor>;
                    fromPartial(object: Partial<_16.QueryMethodDescriptor>): _16.QueryMethodDescriptor;
                    fromAmino(object: _16.QueryMethodDescriptorAmino): _16.QueryMethodDescriptor;
                    toAmino(message: _16.QueryMethodDescriptor): _16.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _16.QueryMethodDescriptorAminoMsg): _16.QueryMethodDescriptor;
                    toAminoMsg(message: _16.QueryMethodDescriptor): _16.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _16.QueryMethodDescriptorProtoMsg): _16.QueryMethodDescriptor;
                    toProto(message: _16.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _16.QueryMethodDescriptor): _16.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _17.Coin;
                isSDK(o: any): o is _17.CoinSDKType;
                isAmino(o: any): o is _17.CoinAmino;
                encode(message: _17.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.Coin;
                fromJSON(object: any): _17.Coin;
                toJSON(message: _17.Coin): import("..").JsonSafe<_17.Coin>;
                fromPartial(object: Partial<_17.Coin>): _17.Coin;
                fromAmino(object: _17.CoinAmino): _17.Coin;
                toAmino(message: _17.Coin): _17.CoinAmino;
                fromAminoMsg(object: _17.CoinAminoMsg): _17.Coin;
                toAminoMsg(message: _17.Coin): _17.CoinAminoMsg;
                fromProtoMsg(message: _17.CoinProtoMsg): _17.Coin;
                toProto(message: _17.Coin): Uint8Array;
                toProtoMsg(message: _17.Coin): _17.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _17.DecCoin;
                isSDK(o: any): o is _17.DecCoinSDKType;
                isAmino(o: any): o is _17.DecCoinAmino;
                encode(message: _17.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.DecCoin;
                fromJSON(object: any): _17.DecCoin;
                toJSON(message: _17.DecCoin): import("..").JsonSafe<_17.DecCoin>;
                fromPartial(object: Partial<_17.DecCoin>): _17.DecCoin;
                fromAmino(object: _17.DecCoinAmino): _17.DecCoin;
                toAmino(message: _17.DecCoin): _17.DecCoinAmino;
                fromAminoMsg(object: _17.DecCoinAminoMsg): _17.DecCoin;
                toAminoMsg(message: _17.DecCoin): _17.DecCoinAminoMsg;
                fromProtoMsg(message: _17.DecCoinProtoMsg): _17.DecCoin;
                toProto(message: _17.DecCoin): Uint8Array;
                toProtoMsg(message: _17.DecCoin): _17.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _17.IntProto;
                isSDK(o: any): o is _17.IntProtoSDKType;
                isAmino(o: any): o is _17.IntProtoAmino;
                encode(message: _17.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.IntProto;
                fromJSON(object: any): _17.IntProto;
                toJSON(message: _17.IntProto): import("..").JsonSafe<_17.IntProto>;
                fromPartial(object: Partial<_17.IntProto>): _17.IntProto;
                fromAmino(object: _17.IntProtoAmino): _17.IntProto;
                toAmino(message: _17.IntProto): _17.IntProtoAmino;
                fromAminoMsg(object: _17.IntProtoAminoMsg): _17.IntProto;
                toAminoMsg(message: _17.IntProto): _17.IntProtoAminoMsg;
                fromProtoMsg(message: _17.IntProtoProtoMsg): _17.IntProto;
                toProto(message: _17.IntProto): Uint8Array;
                toProtoMsg(message: _17.IntProto): _17.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _17.DecProto;
                isSDK(o: any): o is _17.DecProtoSDKType;
                isAmino(o: any): o is _17.DecProtoAmino;
                encode(message: _17.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.DecProto;
                fromJSON(object: any): _17.DecProto;
                toJSON(message: _17.DecProto): import("..").JsonSafe<_17.DecProto>;
                fromPartial(object: Partial<_17.DecProto>): _17.DecProto;
                fromAmino(object: _17.DecProtoAmino): _17.DecProto;
                toAmino(message: _17.DecProto): _17.DecProtoAmino;
                fromAminoMsg(object: _17.DecProtoAminoMsg): _17.DecProto;
                toAminoMsg(message: _17.DecProto): _17.DecProtoAminoMsg;
                fromProtoMsg(message: _17.DecProtoProtoMsg): _17.DecProto;
                toProto(message: _17.DecProto): Uint8Array;
                toProtoMsg(message: _17.DecProto): _17.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _18.PubKey;
                isSDK(o: any): o is _18.PubKeySDKType;
                isAmino(o: any): o is _18.PubKeyAmino;
                encode(message: _18.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.PubKey;
                fromJSON(object: any): _18.PubKey;
                toJSON(message: _18.PubKey): import("..").JsonSafe<_18.PubKey>;
                fromPartial(object: Partial<_18.PubKey>): _18.PubKey;
                fromAmino(object: _18.PubKeyAmino): _18.PubKey;
                toAmino(message: _18.PubKey): _18.PubKeyAmino;
                fromAminoMsg(object: _18.PubKeyAminoMsg): _18.PubKey;
                toAminoMsg(message: _18.PubKey): _18.PubKeyAminoMsg;
                fromProtoMsg(message: _18.PubKeyProtoMsg): _18.PubKey;
                toProto(message: _18.PubKey): Uint8Array;
                toProtoMsg(message: _18.PubKey): _18.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _18.PrivKey;
                isSDK(o: any): o is _18.PrivKeySDKType;
                isAmino(o: any): o is _18.PrivKeyAmino;
                encode(message: _18.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.PrivKey;
                fromJSON(object: any): _18.PrivKey;
                toJSON(message: _18.PrivKey): import("..").JsonSafe<_18.PrivKey>;
                fromPartial(object: Partial<_18.PrivKey>): _18.PrivKey;
                fromAmino(object: _18.PrivKeyAmino): _18.PrivKey;
                toAmino(message: _18.PrivKey): _18.PrivKeyAmino;
                fromAminoMsg(object: _18.PrivKeyAminoMsg): _18.PrivKey;
                toAminoMsg(message: _18.PrivKey): _18.PrivKeyAminoMsg;
                fromProtoMsg(message: _18.PrivKeyProtoMsg): _18.PrivKey;
                toProto(message: _18.PrivKey): Uint8Array;
                toProtoMsg(message: _18.PrivKey): _18.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _19.BIP44Params;
                    isSDK(o: any): o is _19.BIP44ParamsSDKType;
                    isAmino(o: any): o is _19.BIP44ParamsAmino;
                    encode(message: _19.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.BIP44Params;
                    fromJSON(object: any): _19.BIP44Params;
                    toJSON(message: _19.BIP44Params): import("..").JsonSafe<_19.BIP44Params>;
                    fromPartial(object: Partial<_19.BIP44Params>): _19.BIP44Params;
                    fromAmino(object: _19.BIP44ParamsAmino): _19.BIP44Params;
                    toAmino(message: _19.BIP44Params): _19.BIP44ParamsAmino;
                    fromAminoMsg(object: _19.BIP44ParamsAminoMsg): _19.BIP44Params;
                    toAminoMsg(message: _19.BIP44Params): _19.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _19.BIP44ParamsProtoMsg): _19.BIP44Params;
                    toProto(message: _19.BIP44Params): Uint8Array;
                    toProtoMsg(message: _19.BIP44Params): _19.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _20.Record;
                    isSDK(o: any): o is _20.RecordSDKType;
                    isAmino(o: any): o is _20.RecordAmino;
                    encode(message: _20.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.Record;
                    fromJSON(object: any): _20.Record;
                    toJSON(message: _20.Record): import("..").JsonSafe<_20.Record>;
                    fromPartial(object: Partial<_20.Record>): _20.Record;
                    fromAmino(object: _20.RecordAmino): _20.Record;
                    toAmino(message: _20.Record): _20.RecordAmino;
                    fromAminoMsg(object: _20.RecordAminoMsg): _20.Record;
                    toAminoMsg(message: _20.Record): _20.RecordAminoMsg;
                    fromProtoMsg(message: _20.RecordProtoMsg): _20.Record;
                    toProto(message: _20.Record): Uint8Array;
                    toProtoMsg(message: _20.Record): _20.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _20.Record_Local;
                    isSDK(o: any): o is _20.Record_LocalSDKType;
                    isAmino(o: any): o is _20.Record_LocalAmino;
                    encode(message: _20.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.Record_Local;
                    fromJSON(object: any): _20.Record_Local;
                    toJSON(message: _20.Record_Local): import("..").JsonSafe<_20.Record_Local>;
                    fromPartial(object: Partial<_20.Record_Local>): _20.Record_Local;
                    fromAmino(object: _20.Record_LocalAmino): _20.Record_Local;
                    toAmino(message: _20.Record_Local): _20.Record_LocalAmino;
                    fromAminoMsg(object: _20.Record_LocalAminoMsg): _20.Record_Local;
                    toAminoMsg(message: _20.Record_Local): _20.Record_LocalAminoMsg;
                    fromProtoMsg(message: _20.Record_LocalProtoMsg): _20.Record_Local;
                    toProto(message: _20.Record_Local): Uint8Array;
                    toProtoMsg(message: _20.Record_Local): _20.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _20.Record_Ledger;
                    isSDK(o: any): o is _20.Record_LedgerSDKType;
                    isAmino(o: any): o is _20.Record_LedgerAmino;
                    encode(message: _20.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.Record_Ledger;
                    fromJSON(object: any): _20.Record_Ledger;
                    toJSON(message: _20.Record_Ledger): import("..").JsonSafe<_20.Record_Ledger>;
                    fromPartial(object: Partial<_20.Record_Ledger>): _20.Record_Ledger;
                    fromAmino(object: _20.Record_LedgerAmino): _20.Record_Ledger;
                    toAmino(message: _20.Record_Ledger): _20.Record_LedgerAmino;
                    fromAminoMsg(object: _20.Record_LedgerAminoMsg): _20.Record_Ledger;
                    toAminoMsg(message: _20.Record_Ledger): _20.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _20.Record_LedgerProtoMsg): _20.Record_Ledger;
                    toProto(message: _20.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _20.Record_Ledger): _20.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _20.Record_Multi;
                    isSDK(o: any): o is _20.Record_MultiSDKType;
                    isAmino(o: any): o is _20.Record_MultiAmino;
                    encode(_: _20.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.Record_Multi;
                    fromJSON(_: any): _20.Record_Multi;
                    toJSON(_: _20.Record_Multi): import("..").JsonSafe<_20.Record_Multi>;
                    fromPartial(_: Partial<_20.Record_Multi>): _20.Record_Multi;
                    fromAmino(_: _20.Record_MultiAmino): _20.Record_Multi;
                    toAmino(_: _20.Record_Multi): _20.Record_MultiAmino;
                    fromAminoMsg(object: _20.Record_MultiAminoMsg): _20.Record_Multi;
                    toAminoMsg(message: _20.Record_Multi): _20.Record_MultiAminoMsg;
                    fromProtoMsg(message: _20.Record_MultiProtoMsg): _20.Record_Multi;
                    toProto(message: _20.Record_Multi): Uint8Array;
                    toProtoMsg(message: _20.Record_Multi): _20.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _20.Record_Offline;
                    isSDK(o: any): o is _20.Record_OfflineSDKType;
                    isAmino(o: any): o is _20.Record_OfflineAmino;
                    encode(_: _20.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.Record_Offline;
                    fromJSON(_: any): _20.Record_Offline;
                    toJSON(_: _20.Record_Offline): import("..").JsonSafe<_20.Record_Offline>;
                    fromPartial(_: Partial<_20.Record_Offline>): _20.Record_Offline;
                    fromAmino(_: _20.Record_OfflineAmino): _20.Record_Offline;
                    toAmino(_: _20.Record_Offline): _20.Record_OfflineAmino;
                    fromAminoMsg(object: _20.Record_OfflineAminoMsg): _20.Record_Offline;
                    toAminoMsg(message: _20.Record_Offline): _20.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _20.Record_OfflineProtoMsg): _20.Record_Offline;
                    toProto(message: _20.Record_Offline): Uint8Array;
                    toProtoMsg(message: _20.Record_Offline): _20.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _21.LegacyAminoPubKey;
                isSDK(o: any): o is _21.LegacyAminoPubKeySDKType;
                isAmino(o: any): o is _21.LegacyAminoPubKeyAmino;
                encode(message: _21.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.LegacyAminoPubKey;
                fromJSON(object: any): _21.LegacyAminoPubKey;
                toJSON(message: _21.LegacyAminoPubKey): import("..").JsonSafe<_21.LegacyAminoPubKey>;
                fromPartial(object: Partial<_21.LegacyAminoPubKey>): _21.LegacyAminoPubKey;
                fromAmino(object: _21.LegacyAminoPubKeyAmino): _21.LegacyAminoPubKey;
                toAmino(message: _21.LegacyAminoPubKey): _21.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _21.LegacyAminoPubKeyAminoMsg): _21.LegacyAminoPubKey;
                toAminoMsg(message: _21.LegacyAminoPubKey): _21.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _21.LegacyAminoPubKeyProtoMsg): _21.LegacyAminoPubKey;
                toProto(message: _21.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _21.LegacyAminoPubKey): _21.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _22.PubKey;
                isSDK(o: any): o is _22.PubKeySDKType;
                isAmino(o: any): o is _22.PubKeyAmino;
                encode(message: _22.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.PubKey;
                fromJSON(object: any): _22.PubKey;
                toJSON(message: _22.PubKey): import("..").JsonSafe<_22.PubKey>;
                fromPartial(object: Partial<_22.PubKey>): _22.PubKey;
                fromAmino(object: _22.PubKeyAmino): _22.PubKey;
                toAmino(message: _22.PubKey): _22.PubKeyAmino;
                fromAminoMsg(object: _22.PubKeyAminoMsg): _22.PubKey;
                toAminoMsg(message: _22.PubKey): _22.PubKeyAminoMsg;
                fromProtoMsg(message: _22.PubKeyProtoMsg): _22.PubKey;
                toProto(message: _22.PubKey): Uint8Array;
                toProtoMsg(message: _22.PubKey): _22.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _22.PrivKey;
                isSDK(o: any): o is _22.PrivKeySDKType;
                isAmino(o: any): o is _22.PrivKeyAmino;
                encode(message: _22.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.PrivKey;
                fromJSON(object: any): _22.PrivKey;
                toJSON(message: _22.PrivKey): import("..").JsonSafe<_22.PrivKey>;
                fromPartial(object: Partial<_22.PrivKey>): _22.PrivKey;
                fromAmino(object: _22.PrivKeyAmino): _22.PrivKey;
                toAmino(message: _22.PrivKey): _22.PrivKeyAmino;
                fromAminoMsg(object: _22.PrivKeyAminoMsg): _22.PrivKey;
                toAminoMsg(message: _22.PrivKey): _22.PrivKeyAminoMsg;
                fromProtoMsg(message: _22.PrivKeyProtoMsg): _22.PrivKey;
                toProto(message: _22.PrivKey): Uint8Array;
                toProtoMsg(message: _22.PrivKey): _22.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _23.PubKey;
                isSDK(o: any): o is _23.PubKeySDKType;
                isAmino(o: any): o is _23.PubKeyAmino;
                encode(message: _23.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _23.PubKey;
                fromJSON(object: any): _23.PubKey;
                toJSON(message: _23.PubKey): import("..").JsonSafe<_23.PubKey>;
                fromPartial(object: Partial<_23.PubKey>): _23.PubKey;
                fromAmino(object: _23.PubKeyAmino): _23.PubKey;
                toAmino(message: _23.PubKey): _23.PubKeyAmino;
                fromAminoMsg(object: _23.PubKeyAminoMsg): _23.PubKey;
                toAminoMsg(message: _23.PubKey): _23.PubKeyAminoMsg;
                fromProtoMsg(message: _23.PubKeyProtoMsg): _23.PubKey;
                toProto(message: _23.PubKey): Uint8Array;
                toProtoMsg(message: _23.PubKey): _23.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _23.PrivKey;
                isSDK(o: any): o is _23.PrivKeySDKType;
                isAmino(o: any): o is _23.PrivKeyAmino;
                encode(message: _23.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _23.PrivKey;
                fromJSON(object: any): _23.PrivKey;
                toJSON(message: _23.PrivKey): import("..").JsonSafe<_23.PrivKey>;
                fromPartial(object: Partial<_23.PrivKey>): _23.PrivKey;
                fromAmino(object: _23.PrivKeyAmino): _23.PrivKey;
                toAmino(message: _23.PrivKey): _23.PrivKeyAmino;
                fromAminoMsg(object: _23.PrivKeyAminoMsg): _23.PrivKey;
                toAminoMsg(message: _23.PrivKey): _23.PrivKeyAminoMsg;
                fromProtoMsg(message: _23.PrivKeyProtoMsg): _23.PrivKey;
                toProto(message: _23.PrivKey): Uint8Array;
                toProtoMsg(message: _23.PrivKey): _23.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _179.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            withdrawAddress: string;
                        };
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: {
                            delegatorAddress: string;
                            validatorAddress: string;
                        };
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: {
                            validatorAddress: string;
                        };
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
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
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _26.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _26.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _26.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _26.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _26.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _26.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _26.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _26.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _26.MsgSetWithdrawAddress) => _26.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _26.MsgSetWithdrawAddressAmino) => _26.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdrawDelegatorReward) => _26.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _26.MsgWithdrawDelegatorRewardAmino) => _26.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _26.MsgWithdrawValidatorCommission) => _26.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _26.MsgWithdrawValidatorCommissionAmino) => _26.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _26.MsgFundCommunityPool) => _26.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _26.MsgFundCommunityPoolAmino) => _26.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgSetWithdrawAddress;
                isSDK(o: any): o is _26.MsgSetWithdrawAddressSDKType;
                isAmino(o: any): o is _26.MsgSetWithdrawAddressAmino;
                encode(message: _26.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgSetWithdrawAddress;
                fromJSON(object: any): _26.MsgSetWithdrawAddress;
                toJSON(message: _26.MsgSetWithdrawAddress): import("..").JsonSafe<_26.MsgSetWithdrawAddress>;
                fromPartial(object: Partial<_26.MsgSetWithdrawAddress>): _26.MsgSetWithdrawAddress;
                fromAmino(object: _26.MsgSetWithdrawAddressAmino): _26.MsgSetWithdrawAddress;
                toAmino(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _26.MsgSetWithdrawAddressAminoMsg): _26.MsgSetWithdrawAddress;
                toAminoMsg(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _26.MsgSetWithdrawAddressProtoMsg): _26.MsgSetWithdrawAddress;
                toProto(message: _26.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _26.MsgSetWithdrawAddress): _26.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgSetWithdrawAddressResponse;
                isSDK(o: any): o is _26.MsgSetWithdrawAddressResponseSDKType;
                isAmino(o: any): o is _26.MsgSetWithdrawAddressResponseAmino;
                encode(_: _26.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _26.MsgSetWithdrawAddressResponse;
                toJSON(_: _26.MsgSetWithdrawAddressResponse): import("..").JsonSafe<_26.MsgSetWithdrawAddressResponse>;
                fromPartial(_: Partial<_26.MsgSetWithdrawAddressResponse>): _26.MsgSetWithdrawAddressResponse;
                fromAmino(_: _26.MsgSetWithdrawAddressResponseAmino): _26.MsgSetWithdrawAddressResponse;
                toAmino(_: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _26.MsgSetWithdrawAddressResponseAminoMsg): _26.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _26.MsgSetWithdrawAddressResponseProtoMsg): _26.MsgSetWithdrawAddressResponse;
                toProto(message: _26.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _26.MsgSetWithdrawAddressResponse): _26.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgWithdrawDelegatorReward;
                isSDK(o: any): o is _26.MsgWithdrawDelegatorRewardSDKType;
                isAmino(o: any): o is _26.MsgWithdrawDelegatorRewardAmino;
                encode(message: _26.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _26.MsgWithdrawDelegatorReward;
                toJSON(message: _26.MsgWithdrawDelegatorReward): import("..").JsonSafe<_26.MsgWithdrawDelegatorReward>;
                fromPartial(object: Partial<_26.MsgWithdrawDelegatorReward>): _26.MsgWithdrawDelegatorReward;
                fromAmino(object: _26.MsgWithdrawDelegatorRewardAmino): _26.MsgWithdrawDelegatorReward;
                toAmino(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _26.MsgWithdrawDelegatorRewardAminoMsg): _26.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawDelegatorRewardProtoMsg): _26.MsgWithdrawDelegatorReward;
                toProto(message: _26.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawDelegatorReward): _26.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgWithdrawDelegatorRewardResponse;
                isSDK(o: any): o is _26.MsgWithdrawDelegatorRewardResponseSDKType;
                isAmino(o: any): o is _26.MsgWithdrawDelegatorRewardResponseAmino;
                encode(message: _26.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _26.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _26.MsgWithdrawDelegatorRewardResponse): import("..").JsonSafe<_26.MsgWithdrawDelegatorRewardResponse>;
                fromPartial(object: Partial<_26.MsgWithdrawDelegatorRewardResponse>): _26.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _26.MsgWithdrawDelegatorRewardResponseAmino): _26.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawDelegatorRewardResponseAminoMsg): _26.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawDelegatorRewardResponseProtoMsg): _26.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _26.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawDelegatorRewardResponse): _26.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgWithdrawValidatorCommission;
                isSDK(o: any): o is _26.MsgWithdrawValidatorCommissionSDKType;
                isAmino(o: any): o is _26.MsgWithdrawValidatorCommissionAmino;
                encode(message: _26.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _26.MsgWithdrawValidatorCommission;
                toJSON(message: _26.MsgWithdrawValidatorCommission): import("..").JsonSafe<_26.MsgWithdrawValidatorCommission>;
                fromPartial(object: Partial<_26.MsgWithdrawValidatorCommission>): _26.MsgWithdrawValidatorCommission;
                fromAmino(object: _26.MsgWithdrawValidatorCommissionAmino): _26.MsgWithdrawValidatorCommission;
                toAmino(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _26.MsgWithdrawValidatorCommissionAminoMsg): _26.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawValidatorCommissionProtoMsg): _26.MsgWithdrawValidatorCommission;
                toProto(message: _26.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawValidatorCommission): _26.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgWithdrawValidatorCommissionResponse;
                isSDK(o: any): o is _26.MsgWithdrawValidatorCommissionResponseSDKType;
                isAmino(o: any): o is _26.MsgWithdrawValidatorCommissionResponseAmino;
                encode(message: _26.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _26.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _26.MsgWithdrawValidatorCommissionResponse): import("..").JsonSafe<_26.MsgWithdrawValidatorCommissionResponse>;
                fromPartial(object: Partial<_26.MsgWithdrawValidatorCommissionResponse>): _26.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _26.MsgWithdrawValidatorCommissionResponseAmino): _26.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _26.MsgWithdrawValidatorCommissionResponseAminoMsg): _26.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _26.MsgWithdrawValidatorCommissionResponseProtoMsg): _26.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _26.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _26.MsgWithdrawValidatorCommissionResponse): _26.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgFundCommunityPool;
                isSDK(o: any): o is _26.MsgFundCommunityPoolSDKType;
                isAmino(o: any): o is _26.MsgFundCommunityPoolAmino;
                encode(message: _26.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgFundCommunityPool;
                fromJSON(object: any): _26.MsgFundCommunityPool;
                toJSON(message: _26.MsgFundCommunityPool): import("..").JsonSafe<_26.MsgFundCommunityPool>;
                fromPartial(object: Partial<_26.MsgFundCommunityPool>): _26.MsgFundCommunityPool;
                fromAmino(object: _26.MsgFundCommunityPoolAmino): _26.MsgFundCommunityPool;
                toAmino(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _26.MsgFundCommunityPoolAminoMsg): _26.MsgFundCommunityPool;
                toAminoMsg(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _26.MsgFundCommunityPoolProtoMsg): _26.MsgFundCommunityPool;
                toProto(message: _26.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _26.MsgFundCommunityPool): _26.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _26.MsgFundCommunityPoolResponse;
                isSDK(o: any): o is _26.MsgFundCommunityPoolResponseSDKType;
                isAmino(o: any): o is _26.MsgFundCommunityPoolResponseAmino;
                encode(_: _26.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _26.MsgFundCommunityPoolResponse;
                toJSON(_: _26.MsgFundCommunityPoolResponse): import("..").JsonSafe<_26.MsgFundCommunityPoolResponse>;
                fromPartial(_: Partial<_26.MsgFundCommunityPoolResponse>): _26.MsgFundCommunityPoolResponse;
                fromAmino(_: _26.MsgFundCommunityPoolResponseAmino): _26.MsgFundCommunityPoolResponse;
                toAmino(_: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _26.MsgFundCommunityPoolResponseAminoMsg): _26.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _26.MsgFundCommunityPoolResponseProtoMsg): _26.MsgFundCommunityPoolResponse;
                toProto(message: _26.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _26.MsgFundCommunityPoolResponse): _26.MsgFundCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.DelegatorWithdrawInfo;
                isSDK(o: any): o is _25.DelegatorWithdrawInfoSDKType;
                isAmino(o: any): o is _25.DelegatorWithdrawInfoAmino;
                encode(message: _25.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.DelegatorWithdrawInfo;
                fromJSON(object: any): _25.DelegatorWithdrawInfo;
                toJSON(message: _25.DelegatorWithdrawInfo): import("..").JsonSafe<_25.DelegatorWithdrawInfo>;
                fromPartial(object: Partial<_25.DelegatorWithdrawInfo>): _25.DelegatorWithdrawInfo;
                fromAmino(object: _25.DelegatorWithdrawInfoAmino): _25.DelegatorWithdrawInfo;
                toAmino(message: _25.DelegatorWithdrawInfo): _25.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _25.DelegatorWithdrawInfoAminoMsg): _25.DelegatorWithdrawInfo;
                toAminoMsg(message: _25.DelegatorWithdrawInfo): _25.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _25.DelegatorWithdrawInfoProtoMsg): _25.DelegatorWithdrawInfo;
                toProto(message: _25.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _25.DelegatorWithdrawInfo): _25.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.ValidatorOutstandingRewardsRecord;
                isSDK(o: any): o is _25.ValidatorOutstandingRewardsRecordSDKType;
                isAmino(o: any): o is _25.ValidatorOutstandingRewardsRecordAmino;
                encode(message: _25.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _25.ValidatorOutstandingRewardsRecord;
                toJSON(message: _25.ValidatorOutstandingRewardsRecord): import("..").JsonSafe<_25.ValidatorOutstandingRewardsRecord>;
                fromPartial(object: Partial<_25.ValidatorOutstandingRewardsRecord>): _25.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _25.ValidatorOutstandingRewardsRecordAmino): _25.ValidatorOutstandingRewardsRecord;
                toAmino(message: _25.ValidatorOutstandingRewardsRecord): _25.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _25.ValidatorOutstandingRewardsRecordAminoMsg): _25.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _25.ValidatorOutstandingRewardsRecord): _25.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorOutstandingRewardsRecordProtoMsg): _25.ValidatorOutstandingRewardsRecord;
                toProto(message: _25.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorOutstandingRewardsRecord): _25.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.ValidatorAccumulatedCommissionRecord;
                isSDK(o: any): o is _25.ValidatorAccumulatedCommissionRecordSDKType;
                isAmino(o: any): o is _25.ValidatorAccumulatedCommissionRecordAmino;
                encode(message: _25.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _25.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _25.ValidatorAccumulatedCommissionRecord): import("..").JsonSafe<_25.ValidatorAccumulatedCommissionRecord>;
                fromPartial(object: Partial<_25.ValidatorAccumulatedCommissionRecord>): _25.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _25.ValidatorAccumulatedCommissionRecordAmino): _25.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _25.ValidatorAccumulatedCommissionRecord): _25.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _25.ValidatorAccumulatedCommissionRecordAminoMsg): _25.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _25.ValidatorAccumulatedCommissionRecord): _25.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorAccumulatedCommissionRecordProtoMsg): _25.ValidatorAccumulatedCommissionRecord;
                toProto(message: _25.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorAccumulatedCommissionRecord): _25.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.ValidatorHistoricalRewardsRecord;
                isSDK(o: any): o is _25.ValidatorHistoricalRewardsRecordSDKType;
                isAmino(o: any): o is _25.ValidatorHistoricalRewardsRecordAmino;
                encode(message: _25.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _25.ValidatorHistoricalRewardsRecord;
                toJSON(message: _25.ValidatorHistoricalRewardsRecord): import("..").JsonSafe<_25.ValidatorHistoricalRewardsRecord>;
                fromPartial(object: Partial<_25.ValidatorHistoricalRewardsRecord>): _25.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _25.ValidatorHistoricalRewardsRecordAmino): _25.ValidatorHistoricalRewardsRecord;
                toAmino(message: _25.ValidatorHistoricalRewardsRecord): _25.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _25.ValidatorHistoricalRewardsRecordAminoMsg): _25.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _25.ValidatorHistoricalRewardsRecord): _25.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorHistoricalRewardsRecordProtoMsg): _25.ValidatorHistoricalRewardsRecord;
                toProto(message: _25.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorHistoricalRewardsRecord): _25.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.ValidatorCurrentRewardsRecord;
                isSDK(o: any): o is _25.ValidatorCurrentRewardsRecordSDKType;
                isAmino(o: any): o is _25.ValidatorCurrentRewardsRecordAmino;
                encode(message: _25.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _25.ValidatorCurrentRewardsRecord;
                toJSON(message: _25.ValidatorCurrentRewardsRecord): import("..").JsonSafe<_25.ValidatorCurrentRewardsRecord>;
                fromPartial(object: Partial<_25.ValidatorCurrentRewardsRecord>): _25.ValidatorCurrentRewardsRecord;
                fromAmino(object: _25.ValidatorCurrentRewardsRecordAmino): _25.ValidatorCurrentRewardsRecord;
                toAmino(message: _25.ValidatorCurrentRewardsRecord): _25.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _25.ValidatorCurrentRewardsRecordAminoMsg): _25.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _25.ValidatorCurrentRewardsRecord): _25.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorCurrentRewardsRecordProtoMsg): _25.ValidatorCurrentRewardsRecord;
                toProto(message: _25.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorCurrentRewardsRecord): _25.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.DelegatorStartingInfoRecord;
                isSDK(o: any): o is _25.DelegatorStartingInfoRecordSDKType;
                isAmino(o: any): o is _25.DelegatorStartingInfoRecordAmino;
                encode(message: _25.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.DelegatorStartingInfoRecord;
                fromJSON(object: any): _25.DelegatorStartingInfoRecord;
                toJSON(message: _25.DelegatorStartingInfoRecord): import("..").JsonSafe<_25.DelegatorStartingInfoRecord>;
                fromPartial(object: Partial<_25.DelegatorStartingInfoRecord>): _25.DelegatorStartingInfoRecord;
                fromAmino(object: _25.DelegatorStartingInfoRecordAmino): _25.DelegatorStartingInfoRecord;
                toAmino(message: _25.DelegatorStartingInfoRecord): _25.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _25.DelegatorStartingInfoRecordAminoMsg): _25.DelegatorStartingInfoRecord;
                toAminoMsg(message: _25.DelegatorStartingInfoRecord): _25.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _25.DelegatorStartingInfoRecordProtoMsg): _25.DelegatorStartingInfoRecord;
                toProto(message: _25.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _25.DelegatorStartingInfoRecord): _25.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.ValidatorSlashEventRecord;
                isSDK(o: any): o is _25.ValidatorSlashEventRecordSDKType;
                isAmino(o: any): o is _25.ValidatorSlashEventRecordAmino;
                encode(message: _25.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.ValidatorSlashEventRecord;
                fromJSON(object: any): _25.ValidatorSlashEventRecord;
                toJSON(message: _25.ValidatorSlashEventRecord): import("..").JsonSafe<_25.ValidatorSlashEventRecord>;
                fromPartial(object: Partial<_25.ValidatorSlashEventRecord>): _25.ValidatorSlashEventRecord;
                fromAmino(object: _25.ValidatorSlashEventRecordAmino): _25.ValidatorSlashEventRecord;
                toAmino(message: _25.ValidatorSlashEventRecord): _25.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventRecordAminoMsg): _25.ValidatorSlashEventRecord;
                toAminoMsg(message: _25.ValidatorSlashEventRecord): _25.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventRecordProtoMsg): _25.ValidatorSlashEventRecord;
                toProto(message: _25.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEventRecord): _25.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _25.GenesisState;
                isSDK(o: any): o is _25.GenesisStateSDKType;
                isAmino(o: any): o is _25.GenesisStateAmino;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.GenesisState;
                fromJSON(object: any): _25.GenesisState;
                toJSON(message: _25.GenesisState): import("..").JsonSafe<_25.GenesisState>;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.Params;
                isSDK(o: any): o is _24.ParamsSDKType;
                isAmino(o: any): o is _24.ParamsAmino;
                encode(message: _24.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.Params;
                fromJSON(object: any): _24.Params;
                toJSON(message: _24.Params): import("..").JsonSafe<_24.Params>;
                fromPartial(object: Partial<_24.Params>): _24.Params;
                fromAmino(object: _24.ParamsAmino): _24.Params;
                toAmino(message: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                toAminoMsg(message: _24.Params): _24.ParamsAminoMsg;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.ValidatorHistoricalRewards;
                isSDK(o: any): o is _24.ValidatorHistoricalRewardsSDKType;
                isAmino(o: any): o is _24.ValidatorHistoricalRewardsAmino;
                encode(message: _24.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ValidatorHistoricalRewards;
                fromJSON(object: any): _24.ValidatorHistoricalRewards;
                toJSON(message: _24.ValidatorHistoricalRewards): import("..").JsonSafe<_24.ValidatorHistoricalRewards>;
                fromPartial(object: Partial<_24.ValidatorHistoricalRewards>): _24.ValidatorHistoricalRewards;
                fromAmino(object: _24.ValidatorHistoricalRewardsAmino): _24.ValidatorHistoricalRewards;
                toAmino(message: _24.ValidatorHistoricalRewards): _24.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _24.ValidatorHistoricalRewardsAminoMsg): _24.ValidatorHistoricalRewards;
                toAminoMsg(message: _24.ValidatorHistoricalRewards): _24.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _24.ValidatorHistoricalRewardsProtoMsg): _24.ValidatorHistoricalRewards;
                toProto(message: _24.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _24.ValidatorHistoricalRewards): _24.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.ValidatorCurrentRewards;
                isSDK(o: any): o is _24.ValidatorCurrentRewardsSDKType;
                isAmino(o: any): o is _24.ValidatorCurrentRewardsAmino;
                encode(message: _24.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ValidatorCurrentRewards;
                fromJSON(object: any): _24.ValidatorCurrentRewards;
                toJSON(message: _24.ValidatorCurrentRewards): import("..").JsonSafe<_24.ValidatorCurrentRewards>;
                fromPartial(object: Partial<_24.ValidatorCurrentRewards>): _24.ValidatorCurrentRewards;
                fromAmino(object: _24.ValidatorCurrentRewardsAmino): _24.ValidatorCurrentRewards;
                toAmino(message: _24.ValidatorCurrentRewards): _24.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _24.ValidatorCurrentRewardsAminoMsg): _24.ValidatorCurrentRewards;
                toAminoMsg(message: _24.ValidatorCurrentRewards): _24.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _24.ValidatorCurrentRewardsProtoMsg): _24.ValidatorCurrentRewards;
                toProto(message: _24.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _24.ValidatorCurrentRewards): _24.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.ValidatorAccumulatedCommission;
                isSDK(o: any): o is _24.ValidatorAccumulatedCommissionSDKType;
                isAmino(o: any): o is _24.ValidatorAccumulatedCommissionAmino;
                encode(message: _24.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ValidatorAccumulatedCommission;
                fromJSON(object: any): _24.ValidatorAccumulatedCommission;
                toJSON(message: _24.ValidatorAccumulatedCommission): import("..").JsonSafe<_24.ValidatorAccumulatedCommission>;
                fromPartial(object: Partial<_24.ValidatorAccumulatedCommission>): _24.ValidatorAccumulatedCommission;
                fromAmino(object: _24.ValidatorAccumulatedCommissionAmino): _24.ValidatorAccumulatedCommission;
                toAmino(message: _24.ValidatorAccumulatedCommission): _24.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _24.ValidatorAccumulatedCommissionAminoMsg): _24.ValidatorAccumulatedCommission;
                toAminoMsg(message: _24.ValidatorAccumulatedCommission): _24.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _24.ValidatorAccumulatedCommissionProtoMsg): _24.ValidatorAccumulatedCommission;
                toProto(message: _24.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _24.ValidatorAccumulatedCommission): _24.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.ValidatorOutstandingRewards;
                isSDK(o: any): o is _24.ValidatorOutstandingRewardsSDKType;
                isAmino(o: any): o is _24.ValidatorOutstandingRewardsAmino;
                encode(message: _24.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ValidatorOutstandingRewards;
                fromJSON(object: any): _24.ValidatorOutstandingRewards;
                toJSON(message: _24.ValidatorOutstandingRewards): import("..").JsonSafe<_24.ValidatorOutstandingRewards>;
                fromPartial(object: Partial<_24.ValidatorOutstandingRewards>): _24.ValidatorOutstandingRewards;
                fromAmino(object: _24.ValidatorOutstandingRewardsAmino): _24.ValidatorOutstandingRewards;
                toAmino(message: _24.ValidatorOutstandingRewards): _24.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _24.ValidatorOutstandingRewardsAminoMsg): _24.ValidatorOutstandingRewards;
                toAminoMsg(message: _24.ValidatorOutstandingRewards): _24.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _24.ValidatorOutstandingRewardsProtoMsg): _24.ValidatorOutstandingRewards;
                toProto(message: _24.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _24.ValidatorOutstandingRewards): _24.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.ValidatorSlashEvent;
                isSDK(o: any): o is _24.ValidatorSlashEventSDKType;
                isAmino(o: any): o is _24.ValidatorSlashEventAmino;
                encode(message: _24.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ValidatorSlashEvent;
                fromJSON(object: any): _24.ValidatorSlashEvent;
                toJSON(message: _24.ValidatorSlashEvent): import("..").JsonSafe<_24.ValidatorSlashEvent>;
                fromPartial(object: Partial<_24.ValidatorSlashEvent>): _24.ValidatorSlashEvent;
                fromAmino(object: _24.ValidatorSlashEventAmino): _24.ValidatorSlashEvent;
                toAmino(message: _24.ValidatorSlashEvent): _24.ValidatorSlashEventAmino;
                fromAminoMsg(object: _24.ValidatorSlashEventAminoMsg): _24.ValidatorSlashEvent;
                toAminoMsg(message: _24.ValidatorSlashEvent): _24.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _24.ValidatorSlashEventProtoMsg): _24.ValidatorSlashEvent;
                toProto(message: _24.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _24.ValidatorSlashEvent): _24.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.ValidatorSlashEvents;
                isSDK(o: any): o is _24.ValidatorSlashEventsSDKType;
                isAmino(o: any): o is _24.ValidatorSlashEventsAmino;
                encode(message: _24.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ValidatorSlashEvents;
                fromJSON(object: any): _24.ValidatorSlashEvents;
                toJSON(message: _24.ValidatorSlashEvents): import("..").JsonSafe<_24.ValidatorSlashEvents>;
                fromPartial(object: Partial<_24.ValidatorSlashEvents>): _24.ValidatorSlashEvents;
                fromAmino(object: _24.ValidatorSlashEventsAmino): _24.ValidatorSlashEvents;
                toAmino(message: _24.ValidatorSlashEvents): _24.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _24.ValidatorSlashEventsAminoMsg): _24.ValidatorSlashEvents;
                toAminoMsg(message: _24.ValidatorSlashEvents): _24.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _24.ValidatorSlashEventsProtoMsg): _24.ValidatorSlashEvents;
                toProto(message: _24.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _24.ValidatorSlashEvents): _24.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.FeePool;
                isSDK(o: any): o is _24.FeePoolSDKType;
                isAmino(o: any): o is _24.FeePoolAmino;
                encode(message: _24.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.FeePool;
                fromJSON(object: any): _24.FeePool;
                toJSON(message: _24.FeePool): import("..").JsonSafe<_24.FeePool>;
                fromPartial(object: Partial<_24.FeePool>): _24.FeePool;
                fromAmino(object: _24.FeePoolAmino): _24.FeePool;
                toAmino(message: _24.FeePool): _24.FeePoolAmino;
                fromAminoMsg(object: _24.FeePoolAminoMsg): _24.FeePool;
                toAminoMsg(message: _24.FeePool): _24.FeePoolAminoMsg;
                fromProtoMsg(message: _24.FeePoolProtoMsg): _24.FeePool;
                toProto(message: _24.FeePool): Uint8Array;
                toProtoMsg(message: _24.FeePool): _24.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.CommunityPoolSpendProposal;
                isSDK(o: any): o is _24.CommunityPoolSpendProposalSDKType;
                isAmino(o: any): o is _24.CommunityPoolSpendProposalAmino;
                encode(message: _24.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.CommunityPoolSpendProposal;
                fromJSON(object: any): _24.CommunityPoolSpendProposal;
                toJSON(message: _24.CommunityPoolSpendProposal): import("..").JsonSafe<_24.CommunityPoolSpendProposal>;
                fromPartial(object: Partial<_24.CommunityPoolSpendProposal>): _24.CommunityPoolSpendProposal;
                fromAmino(object: _24.CommunityPoolSpendProposalAmino): _24.CommunityPoolSpendProposal;
                toAmino(message: _24.CommunityPoolSpendProposal): _24.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _24.CommunityPoolSpendProposalAminoMsg): _24.CommunityPoolSpendProposal;
                toAminoMsg(message: _24.CommunityPoolSpendProposal): _24.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _24.CommunityPoolSpendProposalProtoMsg): _24.CommunityPoolSpendProposal;
                toProto(message: _24.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _24.CommunityPoolSpendProposal): _24.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.DelegatorStartingInfo;
                isSDK(o: any): o is _24.DelegatorStartingInfoSDKType;
                isAmino(o: any): o is _24.DelegatorStartingInfoAmino;
                encode(message: _24.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.DelegatorStartingInfo;
                fromJSON(object: any): _24.DelegatorStartingInfo;
                toJSON(message: _24.DelegatorStartingInfo): import("..").JsonSafe<_24.DelegatorStartingInfo>;
                fromPartial(object: Partial<_24.DelegatorStartingInfo>): _24.DelegatorStartingInfo;
                fromAmino(object: _24.DelegatorStartingInfoAmino): _24.DelegatorStartingInfo;
                toAmino(message: _24.DelegatorStartingInfo): _24.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _24.DelegatorStartingInfoAminoMsg): _24.DelegatorStartingInfo;
                toAminoMsg(message: _24.DelegatorStartingInfo): _24.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _24.DelegatorStartingInfoProtoMsg): _24.DelegatorStartingInfo;
                toProto(message: _24.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _24.DelegatorStartingInfo): _24.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.DelegationDelegatorReward;
                isSDK(o: any): o is _24.DelegationDelegatorRewardSDKType;
                isAmino(o: any): o is _24.DelegationDelegatorRewardAmino;
                encode(message: _24.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.DelegationDelegatorReward;
                fromJSON(object: any): _24.DelegationDelegatorReward;
                toJSON(message: _24.DelegationDelegatorReward): import("..").JsonSafe<_24.DelegationDelegatorReward>;
                fromPartial(object: Partial<_24.DelegationDelegatorReward>): _24.DelegationDelegatorReward;
                fromAmino(object: _24.DelegationDelegatorRewardAmino): _24.DelegationDelegatorReward;
                toAmino(message: _24.DelegationDelegatorReward): _24.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _24.DelegationDelegatorRewardAminoMsg): _24.DelegationDelegatorReward;
                toAminoMsg(message: _24.DelegationDelegatorReward): _24.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _24.DelegationDelegatorRewardProtoMsg): _24.DelegationDelegatorReward;
                toProto(message: _24.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _24.DelegationDelegatorReward): _24.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _24.CommunityPoolSpendProposalWithDeposit;
                isSDK(o: any): o is _24.CommunityPoolSpendProposalWithDepositSDKType;
                isAmino(o: any): o is _24.CommunityPoolSpendProposalWithDepositAmino;
                encode(message: _24.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _24.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _24.CommunityPoolSpendProposalWithDeposit): import("..").JsonSafe<_24.CommunityPoolSpendProposalWithDeposit>;
                fromPartial(object: Partial<_24.CommunityPoolSpendProposalWithDeposit>): _24.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _24.CommunityPoolSpendProposalWithDepositAmino): _24.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _24.CommunityPoolSpendProposalWithDeposit): _24.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _24.CommunityPoolSpendProposalWithDepositAminoMsg): _24.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _24.CommunityPoolSpendProposalWithDeposit): _24.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _24.CommunityPoolSpendProposalWithDepositProtoMsg): _24.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _24.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _24.CommunityPoolSpendProposalWithDeposit): _24.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _180.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: {
                            content?: {
                                $typeUrl?: "/google.protobuf.Any" | string;
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
                                        $typeUrl?: "/google.protobuf.Any" | string;
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
                                        $typeUrl?: "/google.protobuf.Any" | string;
                                        typeUrl: string;
                                        value: string;
                                    };
                                };
                                upgradedClientState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
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
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: {
                            proposalId: string;
                            voter: string;
                            option: _28.VoteOption;
                        };
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: {
                            proposalId: string;
                            voter: string;
                            options: {
                                option: _28.VoteOption;
                                weight: string;
                            }[];
                        };
                    };
                    deposit(value: _30.MsgDeposit): {
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
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _30.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _30.MsgSubmitProposal;
                    };
                    vote(value: _30.MsgVote): {
                        typeUrl: string;
                        value: _30.MsgVote;
                    };
                    voteWeighted(value: _30.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _30.MsgVoteWeighted;
                    };
                    deposit(value: _30.MsgDeposit): {
                        typeUrl: string;
                        value: _30.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _30.MsgSubmitProposal) => _30.MsgSubmitProposalAmino;
                    fromAmino: (object: _30.MsgSubmitProposalAmino) => _30.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVote) => _30.MsgVoteAmino;
                    fromAmino: (object: _30.MsgVoteAmino) => _30.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _30.MsgVoteWeighted) => _30.MsgVoteWeightedAmino;
                    fromAmino: (object: _30.MsgVoteWeightedAmino) => _30.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _30.MsgDeposit) => _30.MsgDepositAmino;
                    fromAmino: (object: _30.MsgDepositAmino) => _30.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgSubmitProposal;
                isSDK(o: any): o is _30.MsgSubmitProposalSDKType;
                isAmino(o: any): o is _30.MsgSubmitProposalAmino;
                encode(message: _30.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgSubmitProposal;
                fromJSON(object: any): _30.MsgSubmitProposal;
                toJSON(message: _30.MsgSubmitProposal): import("..").JsonSafe<_30.MsgSubmitProposal>;
                fromPartial(object: Partial<_30.MsgSubmitProposal>): _30.MsgSubmitProposal;
                fromAmino(object: _30.MsgSubmitProposalAmino): _30.MsgSubmitProposal;
                toAmino(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalAmino;
                fromAminoMsg(object: _30.MsgSubmitProposalAminoMsg): _30.MsgSubmitProposal;
                toAminoMsg(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _30.MsgSubmitProposalProtoMsg): _30.MsgSubmitProposal;
                toProto(message: _30.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitProposal): _30.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgSubmitProposalResponse;
                isSDK(o: any): o is _30.MsgSubmitProposalResponseSDKType;
                isAmino(o: any): o is _30.MsgSubmitProposalResponseAmino;
                encode(message: _30.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgSubmitProposalResponse;
                fromJSON(object: any): _30.MsgSubmitProposalResponse;
                toJSON(message: _30.MsgSubmitProposalResponse): import("..").JsonSafe<_30.MsgSubmitProposalResponse>;
                fromPartial(object: Partial<_30.MsgSubmitProposalResponse>): _30.MsgSubmitProposalResponse;
                fromAmino(object: _30.MsgSubmitProposalResponseAmino): _30.MsgSubmitProposalResponse;
                toAmino(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _30.MsgSubmitProposalResponseAminoMsg): _30.MsgSubmitProposalResponse;
                toAminoMsg(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _30.MsgSubmitProposalResponseProtoMsg): _30.MsgSubmitProposalResponse;
                toProto(message: _30.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _30.MsgSubmitProposalResponse): _30.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgVote;
                isSDK(o: any): o is _30.MsgVoteSDKType;
                isAmino(o: any): o is _30.MsgVoteAmino;
                encode(message: _30.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgVote;
                fromJSON(object: any): _30.MsgVote;
                toJSON(message: _30.MsgVote): import("..").JsonSafe<_30.MsgVote>;
                fromPartial(object: Partial<_30.MsgVote>): _30.MsgVote;
                fromAmino(object: _30.MsgVoteAmino): _30.MsgVote;
                toAmino(message: _30.MsgVote): _30.MsgVoteAmino;
                fromAminoMsg(object: _30.MsgVoteAminoMsg): _30.MsgVote;
                toAminoMsg(message: _30.MsgVote): _30.MsgVoteAminoMsg;
                fromProtoMsg(message: _30.MsgVoteProtoMsg): _30.MsgVote;
                toProto(message: _30.MsgVote): Uint8Array;
                toProtoMsg(message: _30.MsgVote): _30.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgVoteResponse;
                isSDK(o: any): o is _30.MsgVoteResponseSDKType;
                isAmino(o: any): o is _30.MsgVoteResponseAmino;
                encode(_: _30.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgVoteResponse;
                fromJSON(_: any): _30.MsgVoteResponse;
                toJSON(_: _30.MsgVoteResponse): import("..").JsonSafe<_30.MsgVoteResponse>;
                fromPartial(_: Partial<_30.MsgVoteResponse>): _30.MsgVoteResponse;
                fromAmino(_: _30.MsgVoteResponseAmino): _30.MsgVoteResponse;
                toAmino(_: _30.MsgVoteResponse): _30.MsgVoteResponseAmino;
                fromAminoMsg(object: _30.MsgVoteResponseAminoMsg): _30.MsgVoteResponse;
                toAminoMsg(message: _30.MsgVoteResponse): _30.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVoteResponseProtoMsg): _30.MsgVoteResponse;
                toProto(message: _30.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVoteResponse): _30.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgVoteWeighted;
                isSDK(o: any): o is _30.MsgVoteWeightedSDKType;
                isAmino(o: any): o is _30.MsgVoteWeightedAmino;
                encode(message: _30.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgVoteWeighted;
                fromJSON(object: any): _30.MsgVoteWeighted;
                toJSON(message: _30.MsgVoteWeighted): import("..").JsonSafe<_30.MsgVoteWeighted>;
                fromPartial(object: Partial<_30.MsgVoteWeighted>): _30.MsgVoteWeighted;
                fromAmino(object: _30.MsgVoteWeightedAmino): _30.MsgVoteWeighted;
                toAmino(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedAmino;
                fromAminoMsg(object: _30.MsgVoteWeightedAminoMsg): _30.MsgVoteWeighted;
                toAminoMsg(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _30.MsgVoteWeightedProtoMsg): _30.MsgVoteWeighted;
                toProto(message: _30.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _30.MsgVoteWeighted): _30.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgVoteWeightedResponse;
                isSDK(o: any): o is _30.MsgVoteWeightedResponseSDKType;
                isAmino(o: any): o is _30.MsgVoteWeightedResponseAmino;
                encode(_: _30.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgVoteWeightedResponse;
                fromJSON(_: any): _30.MsgVoteWeightedResponse;
                toJSON(_: _30.MsgVoteWeightedResponse): import("..").JsonSafe<_30.MsgVoteWeightedResponse>;
                fromPartial(_: Partial<_30.MsgVoteWeightedResponse>): _30.MsgVoteWeightedResponse;
                fromAmino(_: _30.MsgVoteWeightedResponseAmino): _30.MsgVoteWeightedResponse;
                toAmino(_: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _30.MsgVoteWeightedResponseAminoMsg): _30.MsgVoteWeightedResponse;
                toAminoMsg(message: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _30.MsgVoteWeightedResponseProtoMsg): _30.MsgVoteWeightedResponse;
                toProto(message: _30.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _30.MsgVoteWeightedResponse): _30.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgDeposit;
                isSDK(o: any): o is _30.MsgDepositSDKType;
                isAmino(o: any): o is _30.MsgDepositAmino;
                encode(message: _30.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgDeposit;
                fromJSON(object: any): _30.MsgDeposit;
                toJSON(message: _30.MsgDeposit): import("..").JsonSafe<_30.MsgDeposit>;
                fromPartial(object: Partial<_30.MsgDeposit>): _30.MsgDeposit;
                fromAmino(object: _30.MsgDepositAmino): _30.MsgDeposit;
                toAmino(message: _30.MsgDeposit): _30.MsgDepositAmino;
                fromAminoMsg(object: _30.MsgDepositAminoMsg): _30.MsgDeposit;
                toAminoMsg(message: _30.MsgDeposit): _30.MsgDepositAminoMsg;
                fromProtoMsg(message: _30.MsgDepositProtoMsg): _30.MsgDeposit;
                toProto(message: _30.MsgDeposit): Uint8Array;
                toProtoMsg(message: _30.MsgDeposit): _30.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _30.MsgDepositResponse;
                isSDK(o: any): o is _30.MsgDepositResponseSDKType;
                isAmino(o: any): o is _30.MsgDepositResponseAmino;
                encode(_: _30.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.MsgDepositResponse;
                fromJSON(_: any): _30.MsgDepositResponse;
                toJSON(_: _30.MsgDepositResponse): import("..").JsonSafe<_30.MsgDepositResponse>;
                fromPartial(_: Partial<_30.MsgDepositResponse>): _30.MsgDepositResponse;
                fromAmino(_: _30.MsgDepositResponseAmino): _30.MsgDepositResponse;
                toAmino(_: _30.MsgDepositResponse): _30.MsgDepositResponseAmino;
                fromAminoMsg(object: _30.MsgDepositResponseAminoMsg): _30.MsgDepositResponse;
                toAminoMsg(message: _30.MsgDepositResponse): _30.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _30.MsgDepositResponseProtoMsg): _30.MsgDepositResponse;
                toProto(message: _30.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _30.MsgDepositResponse): _30.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryProposalRequest;
                isSDK(o: any): o is _29.QueryProposalRequestSDKType;
                isAmino(o: any): o is _29.QueryProposalRequestAmino;
                encode(message: _29.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryProposalRequest;
                fromJSON(object: any): _29.QueryProposalRequest;
                toJSON(message: _29.QueryProposalRequest): import("..").JsonSafe<_29.QueryProposalRequest>;
                fromPartial(object: Partial<_29.QueryProposalRequest>): _29.QueryProposalRequest;
                fromAmino(object: _29.QueryProposalRequestAmino): _29.QueryProposalRequest;
                toAmino(message: _29.QueryProposalRequest): _29.QueryProposalRequestAmino;
                fromAminoMsg(object: _29.QueryProposalRequestAminoMsg): _29.QueryProposalRequest;
                toAminoMsg(message: _29.QueryProposalRequest): _29.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _29.QueryProposalRequestProtoMsg): _29.QueryProposalRequest;
                toProto(message: _29.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _29.QueryProposalRequest): _29.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryProposalResponse;
                isSDK(o: any): o is _29.QueryProposalResponseSDKType;
                isAmino(o: any): o is _29.QueryProposalResponseAmino;
                encode(message: _29.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryProposalResponse;
                fromJSON(object: any): _29.QueryProposalResponse;
                toJSON(message: _29.QueryProposalResponse): import("..").JsonSafe<_29.QueryProposalResponse>;
                fromPartial(object: Partial<_29.QueryProposalResponse>): _29.QueryProposalResponse;
                fromAmino(object: _29.QueryProposalResponseAmino): _29.QueryProposalResponse;
                toAmino(message: _29.QueryProposalResponse): _29.QueryProposalResponseAmino;
                fromAminoMsg(object: _29.QueryProposalResponseAminoMsg): _29.QueryProposalResponse;
                toAminoMsg(message: _29.QueryProposalResponse): _29.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _29.QueryProposalResponseProtoMsg): _29.QueryProposalResponse;
                toProto(message: _29.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _29.QueryProposalResponse): _29.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryProposalsRequest;
                isSDK(o: any): o is _29.QueryProposalsRequestSDKType;
                isAmino(o: any): o is _29.QueryProposalsRequestAmino;
                encode(message: _29.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryProposalsRequest;
                fromJSON(object: any): _29.QueryProposalsRequest;
                toJSON(message: _29.QueryProposalsRequest): import("..").JsonSafe<_29.QueryProposalsRequest>;
                fromPartial(object: Partial<_29.QueryProposalsRequest>): _29.QueryProposalsRequest;
                fromAmino(object: _29.QueryProposalsRequestAmino): _29.QueryProposalsRequest;
                toAmino(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestAmino;
                fromAminoMsg(object: _29.QueryProposalsRequestAminoMsg): _29.QueryProposalsRequest;
                toAminoMsg(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryProposalsRequestProtoMsg): _29.QueryProposalsRequest;
                toProto(message: _29.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryProposalsRequest): _29.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryProposalsResponse;
                isSDK(o: any): o is _29.QueryProposalsResponseSDKType;
                isAmino(o: any): o is _29.QueryProposalsResponseAmino;
                encode(message: _29.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryProposalsResponse;
                fromJSON(object: any): _29.QueryProposalsResponse;
                toJSON(message: _29.QueryProposalsResponse): import("..").JsonSafe<_29.QueryProposalsResponse>;
                fromPartial(object: Partial<_29.QueryProposalsResponse>): _29.QueryProposalsResponse;
                fromAmino(object: _29.QueryProposalsResponseAmino): _29.QueryProposalsResponse;
                toAmino(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseAmino;
                fromAminoMsg(object: _29.QueryProposalsResponseAminoMsg): _29.QueryProposalsResponse;
                toAminoMsg(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryProposalsResponseProtoMsg): _29.QueryProposalsResponse;
                toProto(message: _29.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryProposalsResponse): _29.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryVoteRequest;
                isSDK(o: any): o is _29.QueryVoteRequestSDKType;
                isAmino(o: any): o is _29.QueryVoteRequestAmino;
                encode(message: _29.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryVoteRequest;
                fromJSON(object: any): _29.QueryVoteRequest;
                toJSON(message: _29.QueryVoteRequest): import("..").JsonSafe<_29.QueryVoteRequest>;
                fromPartial(object: Partial<_29.QueryVoteRequest>): _29.QueryVoteRequest;
                fromAmino(object: _29.QueryVoteRequestAmino): _29.QueryVoteRequest;
                toAmino(message: _29.QueryVoteRequest): _29.QueryVoteRequestAmino;
                fromAminoMsg(object: _29.QueryVoteRequestAminoMsg): _29.QueryVoteRequest;
                toAminoMsg(message: _29.QueryVoteRequest): _29.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _29.QueryVoteRequestProtoMsg): _29.QueryVoteRequest;
                toProto(message: _29.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _29.QueryVoteRequest): _29.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryVoteResponse;
                isSDK(o: any): o is _29.QueryVoteResponseSDKType;
                isAmino(o: any): o is _29.QueryVoteResponseAmino;
                encode(message: _29.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryVoteResponse;
                fromJSON(object: any): _29.QueryVoteResponse;
                toJSON(message: _29.QueryVoteResponse): import("..").JsonSafe<_29.QueryVoteResponse>;
                fromPartial(object: Partial<_29.QueryVoteResponse>): _29.QueryVoteResponse;
                fromAmino(object: _29.QueryVoteResponseAmino): _29.QueryVoteResponse;
                toAmino(message: _29.QueryVoteResponse): _29.QueryVoteResponseAmino;
                fromAminoMsg(object: _29.QueryVoteResponseAminoMsg): _29.QueryVoteResponse;
                toAminoMsg(message: _29.QueryVoteResponse): _29.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _29.QueryVoteResponseProtoMsg): _29.QueryVoteResponse;
                toProto(message: _29.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _29.QueryVoteResponse): _29.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryVotesRequest;
                isSDK(o: any): o is _29.QueryVotesRequestSDKType;
                isAmino(o: any): o is _29.QueryVotesRequestAmino;
                encode(message: _29.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryVotesRequest;
                fromJSON(object: any): _29.QueryVotesRequest;
                toJSON(message: _29.QueryVotesRequest): import("..").JsonSafe<_29.QueryVotesRequest>;
                fromPartial(object: Partial<_29.QueryVotesRequest>): _29.QueryVotesRequest;
                fromAmino(object: _29.QueryVotesRequestAmino): _29.QueryVotesRequest;
                toAmino(message: _29.QueryVotesRequest): _29.QueryVotesRequestAmino;
                fromAminoMsg(object: _29.QueryVotesRequestAminoMsg): _29.QueryVotesRequest;
                toAminoMsg(message: _29.QueryVotesRequest): _29.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _29.QueryVotesRequestProtoMsg): _29.QueryVotesRequest;
                toProto(message: _29.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _29.QueryVotesRequest): _29.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryVotesResponse;
                isSDK(o: any): o is _29.QueryVotesResponseSDKType;
                isAmino(o: any): o is _29.QueryVotesResponseAmino;
                encode(message: _29.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryVotesResponse;
                fromJSON(object: any): _29.QueryVotesResponse;
                toJSON(message: _29.QueryVotesResponse): import("..").JsonSafe<_29.QueryVotesResponse>;
                fromPartial(object: Partial<_29.QueryVotesResponse>): _29.QueryVotesResponse;
                fromAmino(object: _29.QueryVotesResponseAmino): _29.QueryVotesResponse;
                toAmino(message: _29.QueryVotesResponse): _29.QueryVotesResponseAmino;
                fromAminoMsg(object: _29.QueryVotesResponseAminoMsg): _29.QueryVotesResponse;
                toAminoMsg(message: _29.QueryVotesResponse): _29.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _29.QueryVotesResponseProtoMsg): _29.QueryVotesResponse;
                toProto(message: _29.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _29.QueryVotesResponse): _29.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryParamsRequest;
                isSDK(o: any): o is _29.QueryParamsRequestSDKType;
                isAmino(o: any): o is _29.QueryParamsRequestAmino;
                encode(message: _29.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryParamsRequest;
                fromJSON(object: any): _29.QueryParamsRequest;
                toJSON(message: _29.QueryParamsRequest): import("..").JsonSafe<_29.QueryParamsRequest>;
                fromPartial(object: Partial<_29.QueryParamsRequest>): _29.QueryParamsRequest;
                fromAmino(object: _29.QueryParamsRequestAmino): _29.QueryParamsRequest;
                toAmino(message: _29.QueryParamsRequest): _29.QueryParamsRequestAmino;
                fromAminoMsg(object: _29.QueryParamsRequestAminoMsg): _29.QueryParamsRequest;
                toAminoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryParamsRequestProtoMsg): _29.QueryParamsRequest;
                toProto(message: _29.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryParamsRequest): _29.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryParamsResponse;
                isSDK(o: any): o is _29.QueryParamsResponseSDKType;
                isAmino(o: any): o is _29.QueryParamsResponseAmino;
                encode(message: _29.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryParamsResponse;
                fromJSON(object: any): _29.QueryParamsResponse;
                toJSON(message: _29.QueryParamsResponse): import("..").JsonSafe<_29.QueryParamsResponse>;
                fromPartial(object: Partial<_29.QueryParamsResponse>): _29.QueryParamsResponse;
                fromAmino(object: _29.QueryParamsResponseAmino): _29.QueryParamsResponse;
                toAmino(message: _29.QueryParamsResponse): _29.QueryParamsResponseAmino;
                fromAminoMsg(object: _29.QueryParamsResponseAminoMsg): _29.QueryParamsResponse;
                toAminoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryParamsResponseProtoMsg): _29.QueryParamsResponse;
                toProto(message: _29.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryParamsResponse): _29.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryDepositRequest;
                isSDK(o: any): o is _29.QueryDepositRequestSDKType;
                isAmino(o: any): o is _29.QueryDepositRequestAmino;
                encode(message: _29.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryDepositRequest;
                fromJSON(object: any): _29.QueryDepositRequest;
                toJSON(message: _29.QueryDepositRequest): import("..").JsonSafe<_29.QueryDepositRequest>;
                fromPartial(object: Partial<_29.QueryDepositRequest>): _29.QueryDepositRequest;
                fromAmino(object: _29.QueryDepositRequestAmino): _29.QueryDepositRequest;
                toAmino(message: _29.QueryDepositRequest): _29.QueryDepositRequestAmino;
                fromAminoMsg(object: _29.QueryDepositRequestAminoMsg): _29.QueryDepositRequest;
                toAminoMsg(message: _29.QueryDepositRequest): _29.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDepositRequestProtoMsg): _29.QueryDepositRequest;
                toProto(message: _29.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDepositRequest): _29.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryDepositResponse;
                isSDK(o: any): o is _29.QueryDepositResponseSDKType;
                isAmino(o: any): o is _29.QueryDepositResponseAmino;
                encode(message: _29.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryDepositResponse;
                fromJSON(object: any): _29.QueryDepositResponse;
                toJSON(message: _29.QueryDepositResponse): import("..").JsonSafe<_29.QueryDepositResponse>;
                fromPartial(object: Partial<_29.QueryDepositResponse>): _29.QueryDepositResponse;
                fromAmino(object: _29.QueryDepositResponseAmino): _29.QueryDepositResponse;
                toAmino(message: _29.QueryDepositResponse): _29.QueryDepositResponseAmino;
                fromAminoMsg(object: _29.QueryDepositResponseAminoMsg): _29.QueryDepositResponse;
                toAminoMsg(message: _29.QueryDepositResponse): _29.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDepositResponseProtoMsg): _29.QueryDepositResponse;
                toProto(message: _29.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDepositResponse): _29.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryDepositsRequest;
                isSDK(o: any): o is _29.QueryDepositsRequestSDKType;
                isAmino(o: any): o is _29.QueryDepositsRequestAmino;
                encode(message: _29.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryDepositsRequest;
                fromJSON(object: any): _29.QueryDepositsRequest;
                toJSON(message: _29.QueryDepositsRequest): import("..").JsonSafe<_29.QueryDepositsRequest>;
                fromPartial(object: Partial<_29.QueryDepositsRequest>): _29.QueryDepositsRequest;
                fromAmino(object: _29.QueryDepositsRequestAmino): _29.QueryDepositsRequest;
                toAmino(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestAmino;
                fromAminoMsg(object: _29.QueryDepositsRequestAminoMsg): _29.QueryDepositsRequest;
                toAminoMsg(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _29.QueryDepositsRequestProtoMsg): _29.QueryDepositsRequest;
                toProto(message: _29.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _29.QueryDepositsRequest): _29.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryDepositsResponse;
                isSDK(o: any): o is _29.QueryDepositsResponseSDKType;
                isAmino(o: any): o is _29.QueryDepositsResponseAmino;
                encode(message: _29.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryDepositsResponse;
                fromJSON(object: any): _29.QueryDepositsResponse;
                toJSON(message: _29.QueryDepositsResponse): import("..").JsonSafe<_29.QueryDepositsResponse>;
                fromPartial(object: Partial<_29.QueryDepositsResponse>): _29.QueryDepositsResponse;
                fromAmino(object: _29.QueryDepositsResponseAmino): _29.QueryDepositsResponse;
                toAmino(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseAmino;
                fromAminoMsg(object: _29.QueryDepositsResponseAminoMsg): _29.QueryDepositsResponse;
                toAminoMsg(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _29.QueryDepositsResponseProtoMsg): _29.QueryDepositsResponse;
                toProto(message: _29.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _29.QueryDepositsResponse): _29.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryTallyResultRequest;
                isSDK(o: any): o is _29.QueryTallyResultRequestSDKType;
                isAmino(o: any): o is _29.QueryTallyResultRequestAmino;
                encode(message: _29.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryTallyResultRequest;
                fromJSON(object: any): _29.QueryTallyResultRequest;
                toJSON(message: _29.QueryTallyResultRequest): import("..").JsonSafe<_29.QueryTallyResultRequest>;
                fromPartial(object: Partial<_29.QueryTallyResultRequest>): _29.QueryTallyResultRequest;
                fromAmino(object: _29.QueryTallyResultRequestAmino): _29.QueryTallyResultRequest;
                toAmino(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _29.QueryTallyResultRequestAminoMsg): _29.QueryTallyResultRequest;
                toAminoMsg(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _29.QueryTallyResultRequestProtoMsg): _29.QueryTallyResultRequest;
                toProto(message: _29.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _29.QueryTallyResultRequest): _29.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _29.QueryTallyResultResponse;
                isSDK(o: any): o is _29.QueryTallyResultResponseSDKType;
                isAmino(o: any): o is _29.QueryTallyResultResponseAmino;
                encode(message: _29.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.QueryTallyResultResponse;
                fromJSON(object: any): _29.QueryTallyResultResponse;
                toJSON(message: _29.QueryTallyResultResponse): import("..").JsonSafe<_29.QueryTallyResultResponse>;
                fromPartial(object: Partial<_29.QueryTallyResultResponse>): _29.QueryTallyResultResponse;
                fromAmino(object: _29.QueryTallyResultResponseAmino): _29.QueryTallyResultResponse;
                toAmino(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _29.QueryTallyResultResponseAminoMsg): _29.QueryTallyResultResponse;
                toAminoMsg(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _29.QueryTallyResultResponseProtoMsg): _29.QueryTallyResultResponse;
                toProto(message: _29.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _29.QueryTallyResultResponse): _29.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _28.VoteOption;
            voteOptionToJSON(object: _28.VoteOption): string;
            proposalStatusFromJSON(object: any): _28.ProposalStatus;
            proposalStatusToJSON(object: _28.ProposalStatus): string;
            VoteOption: typeof _28.VoteOption;
            VoteOptionSDKType: typeof _28.VoteOption;
            VoteOptionAmino: typeof _28.VoteOption;
            ProposalStatus: typeof _28.ProposalStatus;
            ProposalStatusSDKType: typeof _28.ProposalStatus;
            ProposalStatusAmino: typeof _28.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.WeightedVoteOption;
                isSDK(o: any): o is _28.WeightedVoteOptionSDKType;
                isAmino(o: any): o is _28.WeightedVoteOptionAmino;
                encode(message: _28.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.WeightedVoteOption;
                fromJSON(object: any): _28.WeightedVoteOption;
                toJSON(message: _28.WeightedVoteOption): import("..").JsonSafe<_28.WeightedVoteOption>;
                fromPartial(object: Partial<_28.WeightedVoteOption>): _28.WeightedVoteOption;
                fromAmino(object: _28.WeightedVoteOptionAmino): _28.WeightedVoteOption;
                toAmino(message: _28.WeightedVoteOption): _28.WeightedVoteOptionAmino;
                fromAminoMsg(object: _28.WeightedVoteOptionAminoMsg): _28.WeightedVoteOption;
                toAminoMsg(message: _28.WeightedVoteOption): _28.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _28.WeightedVoteOptionProtoMsg): _28.WeightedVoteOption;
                toProto(message: _28.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _28.WeightedVoteOption): _28.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.TextProposal;
                isSDK(o: any): o is _28.TextProposalSDKType;
                isAmino(o: any): o is _28.TextProposalAmino;
                encode(message: _28.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.TextProposal;
                fromJSON(object: any): _28.TextProposal;
                toJSON(message: _28.TextProposal): import("..").JsonSafe<_28.TextProposal>;
                fromPartial(object: Partial<_28.TextProposal>): _28.TextProposal;
                fromAmino(object: _28.TextProposalAmino): _28.TextProposal;
                toAmino(message: _28.TextProposal): _28.TextProposalAmino;
                fromAminoMsg(object: _28.TextProposalAminoMsg): _28.TextProposal;
                toAminoMsg(message: _28.TextProposal): _28.TextProposalAminoMsg;
                fromProtoMsg(message: _28.TextProposalProtoMsg): _28.TextProposal;
                toProto(message: _28.TextProposal): Uint8Array;
                toProtoMsg(message: _28.TextProposal): _28.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.Deposit;
                isSDK(o: any): o is _28.DepositSDKType;
                isAmino(o: any): o is _28.DepositAmino;
                encode(message: _28.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.Deposit;
                fromJSON(object: any): _28.Deposit;
                toJSON(message: _28.Deposit): import("..").JsonSafe<_28.Deposit>;
                fromPartial(object: Partial<_28.Deposit>): _28.Deposit;
                fromAmino(object: _28.DepositAmino): _28.Deposit;
                toAmino(message: _28.Deposit): _28.DepositAmino;
                fromAminoMsg(object: _28.DepositAminoMsg): _28.Deposit;
                toAminoMsg(message: _28.Deposit): _28.DepositAminoMsg;
                fromProtoMsg(message: _28.DepositProtoMsg): _28.Deposit;
                toProto(message: _28.Deposit): Uint8Array;
                toProtoMsg(message: _28.Deposit): _28.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.Proposal;
                isSDK(o: any): o is _28.ProposalSDKType;
                isAmino(o: any): o is _28.ProposalAmino;
                encode(message: _28.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.Proposal;
                fromJSON(object: any): _28.Proposal;
                toJSON(message: _28.Proposal): import("..").JsonSafe<_28.Proposal>;
                fromPartial(object: Partial<_28.Proposal>): _28.Proposal;
                fromAmino(object: _28.ProposalAmino): _28.Proposal;
                toAmino(message: _28.Proposal): _28.ProposalAmino;
                fromAminoMsg(object: _28.ProposalAminoMsg): _28.Proposal;
                toAminoMsg(message: _28.Proposal): _28.ProposalAminoMsg;
                fromProtoMsg(message: _28.ProposalProtoMsg): _28.Proposal;
                toProto(message: _28.Proposal): Uint8Array;
                toProtoMsg(message: _28.Proposal): _28.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.TallyResult;
                isSDK(o: any): o is _28.TallyResultSDKType;
                isAmino(o: any): o is _28.TallyResultAmino;
                encode(message: _28.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.TallyResult;
                fromJSON(object: any): _28.TallyResult;
                toJSON(message: _28.TallyResult): import("..").JsonSafe<_28.TallyResult>;
                fromPartial(object: Partial<_28.TallyResult>): _28.TallyResult;
                fromAmino(object: _28.TallyResultAmino): _28.TallyResult;
                toAmino(message: _28.TallyResult): _28.TallyResultAmino;
                fromAminoMsg(object: _28.TallyResultAminoMsg): _28.TallyResult;
                toAminoMsg(message: _28.TallyResult): _28.TallyResultAminoMsg;
                fromProtoMsg(message: _28.TallyResultProtoMsg): _28.TallyResult;
                toProto(message: _28.TallyResult): Uint8Array;
                toProtoMsg(message: _28.TallyResult): _28.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.Vote;
                isSDK(o: any): o is _28.VoteSDKType;
                isAmino(o: any): o is _28.VoteAmino;
                encode(message: _28.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.Vote;
                fromJSON(object: any): _28.Vote;
                toJSON(message: _28.Vote): import("..").JsonSafe<_28.Vote>;
                fromPartial(object: Partial<_28.Vote>): _28.Vote;
                fromAmino(object: _28.VoteAmino): _28.Vote;
                toAmino(message: _28.Vote): _28.VoteAmino;
                fromAminoMsg(object: _28.VoteAminoMsg): _28.Vote;
                toAminoMsg(message: _28.Vote): _28.VoteAminoMsg;
                fromProtoMsg(message: _28.VoteProtoMsg): _28.Vote;
                toProto(message: _28.Vote): Uint8Array;
                toProtoMsg(message: _28.Vote): _28.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.DepositParams;
                isSDK(o: any): o is _28.DepositParamsSDKType;
                isAmino(o: any): o is _28.DepositParamsAmino;
                encode(message: _28.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.DepositParams;
                fromJSON(object: any): _28.DepositParams;
                toJSON(message: _28.DepositParams): import("..").JsonSafe<_28.DepositParams>;
                fromPartial(object: Partial<_28.DepositParams>): _28.DepositParams;
                fromAmino(object: _28.DepositParamsAmino): _28.DepositParams;
                toAmino(message: _28.DepositParams): _28.DepositParamsAmino;
                fromAminoMsg(object: _28.DepositParamsAminoMsg): _28.DepositParams;
                toAminoMsg(message: _28.DepositParams): _28.DepositParamsAminoMsg;
                fromProtoMsg(message: _28.DepositParamsProtoMsg): _28.DepositParams;
                toProto(message: _28.DepositParams): Uint8Array;
                toProtoMsg(message: _28.DepositParams): _28.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.VotingParams;
                isSDK(o: any): o is _28.VotingParamsSDKType;
                isAmino(o: any): o is _28.VotingParamsAmino;
                encode(message: _28.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.VotingParams;
                fromJSON(object: any): _28.VotingParams;
                toJSON(message: _28.VotingParams): import("..").JsonSafe<_28.VotingParams>;
                fromPartial(object: Partial<_28.VotingParams>): _28.VotingParams;
                fromAmino(object: _28.VotingParamsAmino): _28.VotingParams;
                toAmino(message: _28.VotingParams): _28.VotingParamsAmino;
                fromAminoMsg(object: _28.VotingParamsAminoMsg): _28.VotingParams;
                toAminoMsg(message: _28.VotingParams): _28.VotingParamsAminoMsg;
                fromProtoMsg(message: _28.VotingParamsProtoMsg): _28.VotingParams;
                toProto(message: _28.VotingParams): Uint8Array;
                toProtoMsg(message: _28.VotingParams): _28.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _28.TallyParams;
                isSDK(o: any): o is _28.TallyParamsSDKType;
                isAmino(o: any): o is _28.TallyParamsAmino;
                encode(message: _28.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.TallyParams;
                fromJSON(object: any): _28.TallyParams;
                toJSON(message: _28.TallyParams): import("..").JsonSafe<_28.TallyParams>;
                fromPartial(object: Partial<_28.TallyParams>): _28.TallyParams;
                fromAmino(object: _28.TallyParamsAmino): _28.TallyParams;
                toAmino(message: _28.TallyParams): _28.TallyParamsAmino;
                fromAminoMsg(object: _28.TallyParamsAminoMsg): _28.TallyParams;
                toAminoMsg(message: _28.TallyParams): _28.TallyParamsAminoMsg;
                fromProtoMsg(message: _28.TallyParamsProtoMsg): _28.TallyParams;
                toProto(message: _28.TallyParams): Uint8Array;
                toProtoMsg(message: _28.TallyParams): _28.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _27.GenesisState;
                isSDK(o: any): o is _27.GenesisStateSDKType;
                isAmino(o: any): o is _27.GenesisStateAmino;
                encode(message: _27.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.GenesisState;
                fromJSON(object: any): _27.GenesisState;
                toJSON(message: _27.GenesisState): import("..").JsonSafe<_27.GenesisState>;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
                fromAmino(object: _27.GenesisStateAmino): _27.GenesisState;
                toAmino(message: _27.GenesisState): _27.GenesisStateAmino;
                fromAminoMsg(object: _27.GenesisStateAminoMsg): _27.GenesisState;
                toAminoMsg(message: _27.GenesisState): _27.GenesisStateAminoMsg;
                fromProtoMsg(message: _27.GenesisStateProtoMsg): _27.GenesisState;
                toProto(message: _27.GenesisState): Uint8Array;
                toProtoMsg(message: _27.GenesisState): _27.GenesisStateProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _181.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _34.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    editValidator(value: _34.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    delegate(value: _34.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    beginRedelegate(value: _34.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    undelegate(value: _34.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _34.MsgCreateValidator): {
                        typeUrl: string;
                        value: _34.MsgCreateValidator;
                    };
                    editValidator(value: _34.MsgEditValidator): {
                        typeUrl: string;
                        value: _34.MsgEditValidator;
                    };
                    delegate(value: _34.MsgDelegate): {
                        typeUrl: string;
                        value: _34.MsgDelegate;
                    };
                    beginRedelegate(value: _34.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _34.MsgBeginRedelegate;
                    };
                    undelegate(value: _34.MsgUndelegate): {
                        typeUrl: string;
                        value: _34.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _34.MsgCreateValidator): {
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
                                $typeUrl?: "/google.protobuf.Any" | string;
                                typeUrl: string;
                                value: string;
                            };
                            value: {
                                denom: string;
                                amount: string;
                            };
                        };
                    };
                    editValidator(value: _34.MsgEditValidator): {
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
                    delegate(value: _34.MsgDelegate): {
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
                    beginRedelegate(value: _34.MsgBeginRedelegate): {
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
                    undelegate(value: _34.MsgUndelegate): {
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
                        value: _34.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _34.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _34.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _34.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _34.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _34.MsgCreateValidator): {
                        typeUrl: string;
                        value: _34.MsgCreateValidator;
                    };
                    editValidator(value: _34.MsgEditValidator): {
                        typeUrl: string;
                        value: _34.MsgEditValidator;
                    };
                    delegate(value: _34.MsgDelegate): {
                        typeUrl: string;
                        value: _34.MsgDelegate;
                    };
                    beginRedelegate(value: _34.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _34.MsgBeginRedelegate;
                    };
                    undelegate(value: _34.MsgUndelegate): {
                        typeUrl: string;
                        value: _34.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _34.MsgCreateValidator) => _34.MsgCreateValidatorAmino;
                    fromAmino: (object: _34.MsgCreateValidatorAmino) => _34.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _34.MsgEditValidator) => _34.MsgEditValidatorAmino;
                    fromAmino: (object: _34.MsgEditValidatorAmino) => _34.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _34.MsgDelegate) => _34.MsgDelegateAmino;
                    fromAmino: (object: _34.MsgDelegateAmino) => _34.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _34.MsgBeginRedelegate) => _34.MsgBeginRedelegateAmino;
                    fromAmino: (object: _34.MsgBeginRedelegateAmino) => _34.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _34.MsgUndelegate) => _34.MsgUndelegateAmino;
                    fromAmino: (object: _34.MsgUndelegateAmino) => _34.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgCreateValidator;
                isSDK(o: any): o is _34.MsgCreateValidatorSDKType;
                isAmino(o: any): o is _34.MsgCreateValidatorAmino;
                encode(message: _34.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgCreateValidator;
                fromJSON(object: any): _34.MsgCreateValidator;
                toJSON(message: _34.MsgCreateValidator): import("..").JsonSafe<_34.MsgCreateValidator>;
                fromPartial(object: Partial<_34.MsgCreateValidator>): _34.MsgCreateValidator;
                fromAmino(object: _34.MsgCreateValidatorAmino): _34.MsgCreateValidator;
                toAmino(message: _34.MsgCreateValidator): _34.MsgCreateValidatorAmino;
                fromAminoMsg(object: _34.MsgCreateValidatorAminoMsg): _34.MsgCreateValidator;
                toAminoMsg(message: _34.MsgCreateValidator): _34.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _34.MsgCreateValidatorProtoMsg): _34.MsgCreateValidator;
                toProto(message: _34.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _34.MsgCreateValidator): _34.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgCreateValidatorResponse;
                isSDK(o: any): o is _34.MsgCreateValidatorResponseSDKType;
                isAmino(o: any): o is _34.MsgCreateValidatorResponseAmino;
                encode(_: _34.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgCreateValidatorResponse;
                fromJSON(_: any): _34.MsgCreateValidatorResponse;
                toJSON(_: _34.MsgCreateValidatorResponse): import("..").JsonSafe<_34.MsgCreateValidatorResponse>;
                fromPartial(_: Partial<_34.MsgCreateValidatorResponse>): _34.MsgCreateValidatorResponse;
                fromAmino(_: _34.MsgCreateValidatorResponseAmino): _34.MsgCreateValidatorResponse;
                toAmino(_: _34.MsgCreateValidatorResponse): _34.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _34.MsgCreateValidatorResponseAminoMsg): _34.MsgCreateValidatorResponse;
                toAminoMsg(message: _34.MsgCreateValidatorResponse): _34.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _34.MsgCreateValidatorResponseProtoMsg): _34.MsgCreateValidatorResponse;
                toProto(message: _34.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _34.MsgCreateValidatorResponse): _34.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgEditValidator;
                isSDK(o: any): o is _34.MsgEditValidatorSDKType;
                isAmino(o: any): o is _34.MsgEditValidatorAmino;
                encode(message: _34.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgEditValidator;
                fromJSON(object: any): _34.MsgEditValidator;
                toJSON(message: _34.MsgEditValidator): import("..").JsonSafe<_34.MsgEditValidator>;
                fromPartial(object: Partial<_34.MsgEditValidator>): _34.MsgEditValidator;
                fromAmino(object: _34.MsgEditValidatorAmino): _34.MsgEditValidator;
                toAmino(message: _34.MsgEditValidator): _34.MsgEditValidatorAmino;
                fromAminoMsg(object: _34.MsgEditValidatorAminoMsg): _34.MsgEditValidator;
                toAminoMsg(message: _34.MsgEditValidator): _34.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _34.MsgEditValidatorProtoMsg): _34.MsgEditValidator;
                toProto(message: _34.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _34.MsgEditValidator): _34.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgEditValidatorResponse;
                isSDK(o: any): o is _34.MsgEditValidatorResponseSDKType;
                isAmino(o: any): o is _34.MsgEditValidatorResponseAmino;
                encode(_: _34.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgEditValidatorResponse;
                fromJSON(_: any): _34.MsgEditValidatorResponse;
                toJSON(_: _34.MsgEditValidatorResponse): import("..").JsonSafe<_34.MsgEditValidatorResponse>;
                fromPartial(_: Partial<_34.MsgEditValidatorResponse>): _34.MsgEditValidatorResponse;
                fromAmino(_: _34.MsgEditValidatorResponseAmino): _34.MsgEditValidatorResponse;
                toAmino(_: _34.MsgEditValidatorResponse): _34.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _34.MsgEditValidatorResponseAminoMsg): _34.MsgEditValidatorResponse;
                toAminoMsg(message: _34.MsgEditValidatorResponse): _34.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _34.MsgEditValidatorResponseProtoMsg): _34.MsgEditValidatorResponse;
                toProto(message: _34.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _34.MsgEditValidatorResponse): _34.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgDelegate;
                isSDK(o: any): o is _34.MsgDelegateSDKType;
                isAmino(o: any): o is _34.MsgDelegateAmino;
                encode(message: _34.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgDelegate;
                fromJSON(object: any): _34.MsgDelegate;
                toJSON(message: _34.MsgDelegate): import("..").JsonSafe<_34.MsgDelegate>;
                fromPartial(object: Partial<_34.MsgDelegate>): _34.MsgDelegate;
                fromAmino(object: _34.MsgDelegateAmino): _34.MsgDelegate;
                toAmino(message: _34.MsgDelegate): _34.MsgDelegateAmino;
                fromAminoMsg(object: _34.MsgDelegateAminoMsg): _34.MsgDelegate;
                toAminoMsg(message: _34.MsgDelegate): _34.MsgDelegateAminoMsg;
                fromProtoMsg(message: _34.MsgDelegateProtoMsg): _34.MsgDelegate;
                toProto(message: _34.MsgDelegate): Uint8Array;
                toProtoMsg(message: _34.MsgDelegate): _34.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgDelegateResponse;
                isSDK(o: any): o is _34.MsgDelegateResponseSDKType;
                isAmino(o: any): o is _34.MsgDelegateResponseAmino;
                encode(_: _34.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgDelegateResponse;
                fromJSON(_: any): _34.MsgDelegateResponse;
                toJSON(_: _34.MsgDelegateResponse): import("..").JsonSafe<_34.MsgDelegateResponse>;
                fromPartial(_: Partial<_34.MsgDelegateResponse>): _34.MsgDelegateResponse;
                fromAmino(_: _34.MsgDelegateResponseAmino): _34.MsgDelegateResponse;
                toAmino(_: _34.MsgDelegateResponse): _34.MsgDelegateResponseAmino;
                fromAminoMsg(object: _34.MsgDelegateResponseAminoMsg): _34.MsgDelegateResponse;
                toAminoMsg(message: _34.MsgDelegateResponse): _34.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _34.MsgDelegateResponseProtoMsg): _34.MsgDelegateResponse;
                toProto(message: _34.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _34.MsgDelegateResponse): _34.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgBeginRedelegate;
                isSDK(o: any): o is _34.MsgBeginRedelegateSDKType;
                isAmino(o: any): o is _34.MsgBeginRedelegateAmino;
                encode(message: _34.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgBeginRedelegate;
                fromJSON(object: any): _34.MsgBeginRedelegate;
                toJSON(message: _34.MsgBeginRedelegate): import("..").JsonSafe<_34.MsgBeginRedelegate>;
                fromPartial(object: Partial<_34.MsgBeginRedelegate>): _34.MsgBeginRedelegate;
                fromAmino(object: _34.MsgBeginRedelegateAmino): _34.MsgBeginRedelegate;
                toAmino(message: _34.MsgBeginRedelegate): _34.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _34.MsgBeginRedelegateAminoMsg): _34.MsgBeginRedelegate;
                toAminoMsg(message: _34.MsgBeginRedelegate): _34.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _34.MsgBeginRedelegateProtoMsg): _34.MsgBeginRedelegate;
                toProto(message: _34.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _34.MsgBeginRedelegate): _34.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgBeginRedelegateResponse;
                isSDK(o: any): o is _34.MsgBeginRedelegateResponseSDKType;
                isAmino(o: any): o is _34.MsgBeginRedelegateResponseAmino;
                encode(message: _34.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgBeginRedelegateResponse;
                fromJSON(object: any): _34.MsgBeginRedelegateResponse;
                toJSON(message: _34.MsgBeginRedelegateResponse): import("..").JsonSafe<_34.MsgBeginRedelegateResponse>;
                fromPartial(object: Partial<_34.MsgBeginRedelegateResponse>): _34.MsgBeginRedelegateResponse;
                fromAmino(object: _34.MsgBeginRedelegateResponseAmino): _34.MsgBeginRedelegateResponse;
                toAmino(message: _34.MsgBeginRedelegateResponse): _34.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _34.MsgBeginRedelegateResponseAminoMsg): _34.MsgBeginRedelegateResponse;
                toAminoMsg(message: _34.MsgBeginRedelegateResponse): _34.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _34.MsgBeginRedelegateResponseProtoMsg): _34.MsgBeginRedelegateResponse;
                toProto(message: _34.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _34.MsgBeginRedelegateResponse): _34.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgUndelegate;
                isSDK(o: any): o is _34.MsgUndelegateSDKType;
                isAmino(o: any): o is _34.MsgUndelegateAmino;
                encode(message: _34.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgUndelegate;
                fromJSON(object: any): _34.MsgUndelegate;
                toJSON(message: _34.MsgUndelegate): import("..").JsonSafe<_34.MsgUndelegate>;
                fromPartial(object: Partial<_34.MsgUndelegate>): _34.MsgUndelegate;
                fromAmino(object: _34.MsgUndelegateAmino): _34.MsgUndelegate;
                toAmino(message: _34.MsgUndelegate): _34.MsgUndelegateAmino;
                fromAminoMsg(object: _34.MsgUndelegateAminoMsg): _34.MsgUndelegate;
                toAminoMsg(message: _34.MsgUndelegate): _34.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _34.MsgUndelegateProtoMsg): _34.MsgUndelegate;
                toProto(message: _34.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _34.MsgUndelegate): _34.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _34.MsgUndelegateResponse;
                isSDK(o: any): o is _34.MsgUndelegateResponseSDKType;
                isAmino(o: any): o is _34.MsgUndelegateResponseAmino;
                encode(message: _34.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgUndelegateResponse;
                fromJSON(object: any): _34.MsgUndelegateResponse;
                toJSON(message: _34.MsgUndelegateResponse): import("..").JsonSafe<_34.MsgUndelegateResponse>;
                fromPartial(object: Partial<_34.MsgUndelegateResponse>): _34.MsgUndelegateResponse;
                fromAmino(object: _34.MsgUndelegateResponseAmino): _34.MsgUndelegateResponse;
                toAmino(message: _34.MsgUndelegateResponse): _34.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _34.MsgUndelegateResponseAminoMsg): _34.MsgUndelegateResponse;
                toAminoMsg(message: _34.MsgUndelegateResponse): _34.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _34.MsgUndelegateResponseProtoMsg): _34.MsgUndelegateResponse;
                toProto(message: _34.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _34.MsgUndelegateResponse): _34.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _33.BondStatus;
            bondStatusToJSON(object: _33.BondStatus): string;
            BondStatus: typeof _33.BondStatus;
            BondStatusSDKType: typeof _33.BondStatus;
            BondStatusAmino: typeof _33.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.HistoricalInfo;
                isSDK(o: any): o is _33.HistoricalInfoSDKType;
                isAmino(o: any): o is _33.HistoricalInfoAmino;
                encode(message: _33.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.HistoricalInfo;
                fromJSON(object: any): _33.HistoricalInfo;
                toJSON(message: _33.HistoricalInfo): import("..").JsonSafe<_33.HistoricalInfo>;
                fromPartial(object: Partial<_33.HistoricalInfo>): _33.HistoricalInfo;
                fromAmino(object: _33.HistoricalInfoAmino): _33.HistoricalInfo;
                toAmino(message: _33.HistoricalInfo): _33.HistoricalInfoAmino;
                fromAminoMsg(object: _33.HistoricalInfoAminoMsg): _33.HistoricalInfo;
                toAminoMsg(message: _33.HistoricalInfo): _33.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _33.HistoricalInfoProtoMsg): _33.HistoricalInfo;
                toProto(message: _33.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _33.HistoricalInfo): _33.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.CommissionRates;
                isSDK(o: any): o is _33.CommissionRatesSDKType;
                isAmino(o: any): o is _33.CommissionRatesAmino;
                encode(message: _33.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.CommissionRates;
                fromJSON(object: any): _33.CommissionRates;
                toJSON(message: _33.CommissionRates): import("..").JsonSafe<_33.CommissionRates>;
                fromPartial(object: Partial<_33.CommissionRates>): _33.CommissionRates;
                fromAmino(object: _33.CommissionRatesAmino): _33.CommissionRates;
                toAmino(message: _33.CommissionRates): _33.CommissionRatesAmino;
                fromAminoMsg(object: _33.CommissionRatesAminoMsg): _33.CommissionRates;
                toAminoMsg(message: _33.CommissionRates): _33.CommissionRatesAminoMsg;
                fromProtoMsg(message: _33.CommissionRatesProtoMsg): _33.CommissionRates;
                toProto(message: _33.CommissionRates): Uint8Array;
                toProtoMsg(message: _33.CommissionRates): _33.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Commission;
                isSDK(o: any): o is _33.CommissionSDKType;
                isAmino(o: any): o is _33.CommissionAmino;
                encode(message: _33.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Commission;
                fromJSON(object: any): _33.Commission;
                toJSON(message: _33.Commission): import("..").JsonSafe<_33.Commission>;
                fromPartial(object: Partial<_33.Commission>): _33.Commission;
                fromAmino(object: _33.CommissionAmino): _33.Commission;
                toAmino(message: _33.Commission): _33.CommissionAmino;
                fromAminoMsg(object: _33.CommissionAminoMsg): _33.Commission;
                toAminoMsg(message: _33.Commission): _33.CommissionAminoMsg;
                fromProtoMsg(message: _33.CommissionProtoMsg): _33.Commission;
                toProto(message: _33.Commission): Uint8Array;
                toProtoMsg(message: _33.Commission): _33.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Description;
                isSDK(o: any): o is _33.DescriptionSDKType;
                isAmino(o: any): o is _33.DescriptionAmino;
                encode(message: _33.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Description;
                fromJSON(object: any): _33.Description;
                toJSON(message: _33.Description): import("..").JsonSafe<_33.Description>;
                fromPartial(object: Partial<_33.Description>): _33.Description;
                fromAmino(object: _33.DescriptionAmino): _33.Description;
                toAmino(message: _33.Description): _33.DescriptionAmino;
                fromAminoMsg(object: _33.DescriptionAminoMsg): _33.Description;
                toAminoMsg(message: _33.Description): _33.DescriptionAminoMsg;
                fromProtoMsg(message: _33.DescriptionProtoMsg): _33.Description;
                toProto(message: _33.Description): Uint8Array;
                toProtoMsg(message: _33.Description): _33.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Validator;
                isSDK(o: any): o is _33.ValidatorSDKType;
                isAmino(o: any): o is _33.ValidatorAmino;
                encode(message: _33.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Validator;
                fromJSON(object: any): _33.Validator;
                toJSON(message: _33.Validator): import("..").JsonSafe<_33.Validator>;
                fromPartial(object: Partial<_33.Validator>): _33.Validator;
                fromAmino(object: _33.ValidatorAmino): _33.Validator;
                toAmino(message: _33.Validator): _33.ValidatorAmino;
                fromAminoMsg(object: _33.ValidatorAminoMsg): _33.Validator;
                toAminoMsg(message: _33.Validator): _33.ValidatorAminoMsg;
                fromProtoMsg(message: _33.ValidatorProtoMsg): _33.Validator;
                toProto(message: _33.Validator): Uint8Array;
                toProtoMsg(message: _33.Validator): _33.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.ValAddresses;
                isSDK(o: any): o is _33.ValAddressesSDKType;
                isAmino(o: any): o is _33.ValAddressesAmino;
                encode(message: _33.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.ValAddresses;
                fromJSON(object: any): _33.ValAddresses;
                toJSON(message: _33.ValAddresses): import("..").JsonSafe<_33.ValAddresses>;
                fromPartial(object: Partial<_33.ValAddresses>): _33.ValAddresses;
                fromAmino(object: _33.ValAddressesAmino): _33.ValAddresses;
                toAmino(message: _33.ValAddresses): _33.ValAddressesAmino;
                fromAminoMsg(object: _33.ValAddressesAminoMsg): _33.ValAddresses;
                toAminoMsg(message: _33.ValAddresses): _33.ValAddressesAminoMsg;
                fromProtoMsg(message: _33.ValAddressesProtoMsg): _33.ValAddresses;
                toProto(message: _33.ValAddresses): Uint8Array;
                toProtoMsg(message: _33.ValAddresses): _33.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.DVPair;
                isSDK(o: any): o is _33.DVPairSDKType;
                isAmino(o: any): o is _33.DVPairAmino;
                encode(message: _33.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.DVPair;
                fromJSON(object: any): _33.DVPair;
                toJSON(message: _33.DVPair): import("..").JsonSafe<_33.DVPair>;
                fromPartial(object: Partial<_33.DVPair>): _33.DVPair;
                fromAmino(object: _33.DVPairAmino): _33.DVPair;
                toAmino(message: _33.DVPair): _33.DVPairAmino;
                fromAminoMsg(object: _33.DVPairAminoMsg): _33.DVPair;
                toAminoMsg(message: _33.DVPair): _33.DVPairAminoMsg;
                fromProtoMsg(message: _33.DVPairProtoMsg): _33.DVPair;
                toProto(message: _33.DVPair): Uint8Array;
                toProtoMsg(message: _33.DVPair): _33.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.DVPairs;
                isSDK(o: any): o is _33.DVPairsSDKType;
                isAmino(o: any): o is _33.DVPairsAmino;
                encode(message: _33.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.DVPairs;
                fromJSON(object: any): _33.DVPairs;
                toJSON(message: _33.DVPairs): import("..").JsonSafe<_33.DVPairs>;
                fromPartial(object: Partial<_33.DVPairs>): _33.DVPairs;
                fromAmino(object: _33.DVPairsAmino): _33.DVPairs;
                toAmino(message: _33.DVPairs): _33.DVPairsAmino;
                fromAminoMsg(object: _33.DVPairsAminoMsg): _33.DVPairs;
                toAminoMsg(message: _33.DVPairs): _33.DVPairsAminoMsg;
                fromProtoMsg(message: _33.DVPairsProtoMsg): _33.DVPairs;
                toProto(message: _33.DVPairs): Uint8Array;
                toProtoMsg(message: _33.DVPairs): _33.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.DVVTriplet;
                isSDK(o: any): o is _33.DVVTripletSDKType;
                isAmino(o: any): o is _33.DVVTripletAmino;
                encode(message: _33.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.DVVTriplet;
                fromJSON(object: any): _33.DVVTriplet;
                toJSON(message: _33.DVVTriplet): import("..").JsonSafe<_33.DVVTriplet>;
                fromPartial(object: Partial<_33.DVVTriplet>): _33.DVVTriplet;
                fromAmino(object: _33.DVVTripletAmino): _33.DVVTriplet;
                toAmino(message: _33.DVVTriplet): _33.DVVTripletAmino;
                fromAminoMsg(object: _33.DVVTripletAminoMsg): _33.DVVTriplet;
                toAminoMsg(message: _33.DVVTriplet): _33.DVVTripletAminoMsg;
                fromProtoMsg(message: _33.DVVTripletProtoMsg): _33.DVVTriplet;
                toProto(message: _33.DVVTriplet): Uint8Array;
                toProtoMsg(message: _33.DVVTriplet): _33.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.DVVTriplets;
                isSDK(o: any): o is _33.DVVTripletsSDKType;
                isAmino(o: any): o is _33.DVVTripletsAmino;
                encode(message: _33.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.DVVTriplets;
                fromJSON(object: any): _33.DVVTriplets;
                toJSON(message: _33.DVVTriplets): import("..").JsonSafe<_33.DVVTriplets>;
                fromPartial(object: Partial<_33.DVVTriplets>): _33.DVVTriplets;
                fromAmino(object: _33.DVVTripletsAmino): _33.DVVTriplets;
                toAmino(message: _33.DVVTriplets): _33.DVVTripletsAmino;
                fromAminoMsg(object: _33.DVVTripletsAminoMsg): _33.DVVTriplets;
                toAminoMsg(message: _33.DVVTriplets): _33.DVVTripletsAminoMsg;
                fromProtoMsg(message: _33.DVVTripletsProtoMsg): _33.DVVTriplets;
                toProto(message: _33.DVVTriplets): Uint8Array;
                toProtoMsg(message: _33.DVVTriplets): _33.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Delegation;
                isSDK(o: any): o is _33.DelegationSDKType;
                isAmino(o: any): o is _33.DelegationAmino;
                encode(message: _33.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Delegation;
                fromJSON(object: any): _33.Delegation;
                toJSON(message: _33.Delegation): import("..").JsonSafe<_33.Delegation>;
                fromPartial(object: Partial<_33.Delegation>): _33.Delegation;
                fromAmino(object: _33.DelegationAmino): _33.Delegation;
                toAmino(message: _33.Delegation): _33.DelegationAmino;
                fromAminoMsg(object: _33.DelegationAminoMsg): _33.Delegation;
                toAminoMsg(message: _33.Delegation): _33.DelegationAminoMsg;
                fromProtoMsg(message: _33.DelegationProtoMsg): _33.Delegation;
                toProto(message: _33.Delegation): Uint8Array;
                toProtoMsg(message: _33.Delegation): _33.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.UnbondingDelegation;
                isSDK(o: any): o is _33.UnbondingDelegationSDKType;
                isAmino(o: any): o is _33.UnbondingDelegationAmino;
                encode(message: _33.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.UnbondingDelegation;
                fromJSON(object: any): _33.UnbondingDelegation;
                toJSON(message: _33.UnbondingDelegation): import("..").JsonSafe<_33.UnbondingDelegation>;
                fromPartial(object: Partial<_33.UnbondingDelegation>): _33.UnbondingDelegation;
                fromAmino(object: _33.UnbondingDelegationAmino): _33.UnbondingDelegation;
                toAmino(message: _33.UnbondingDelegation): _33.UnbondingDelegationAmino;
                fromAminoMsg(object: _33.UnbondingDelegationAminoMsg): _33.UnbondingDelegation;
                toAminoMsg(message: _33.UnbondingDelegation): _33.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _33.UnbondingDelegationProtoMsg): _33.UnbondingDelegation;
                toProto(message: _33.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _33.UnbondingDelegation): _33.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.UnbondingDelegationEntry;
                isSDK(o: any): o is _33.UnbondingDelegationEntrySDKType;
                isAmino(o: any): o is _33.UnbondingDelegationEntryAmino;
                encode(message: _33.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.UnbondingDelegationEntry;
                fromJSON(object: any): _33.UnbondingDelegationEntry;
                toJSON(message: _33.UnbondingDelegationEntry): import("..").JsonSafe<_33.UnbondingDelegationEntry>;
                fromPartial(object: Partial<_33.UnbondingDelegationEntry>): _33.UnbondingDelegationEntry;
                fromAmino(object: _33.UnbondingDelegationEntryAmino): _33.UnbondingDelegationEntry;
                toAmino(message: _33.UnbondingDelegationEntry): _33.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _33.UnbondingDelegationEntryAminoMsg): _33.UnbondingDelegationEntry;
                toAminoMsg(message: _33.UnbondingDelegationEntry): _33.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _33.UnbondingDelegationEntryProtoMsg): _33.UnbondingDelegationEntry;
                toProto(message: _33.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _33.UnbondingDelegationEntry): _33.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.RedelegationEntry;
                isSDK(o: any): o is _33.RedelegationEntrySDKType;
                isAmino(o: any): o is _33.RedelegationEntryAmino;
                encode(message: _33.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.RedelegationEntry;
                fromJSON(object: any): _33.RedelegationEntry;
                toJSON(message: _33.RedelegationEntry): import("..").JsonSafe<_33.RedelegationEntry>;
                fromPartial(object: Partial<_33.RedelegationEntry>): _33.RedelegationEntry;
                fromAmino(object: _33.RedelegationEntryAmino): _33.RedelegationEntry;
                toAmino(message: _33.RedelegationEntry): _33.RedelegationEntryAmino;
                fromAminoMsg(object: _33.RedelegationEntryAminoMsg): _33.RedelegationEntry;
                toAminoMsg(message: _33.RedelegationEntry): _33.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _33.RedelegationEntryProtoMsg): _33.RedelegationEntry;
                toProto(message: _33.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _33.RedelegationEntry): _33.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Redelegation;
                isSDK(o: any): o is _33.RedelegationSDKType;
                isAmino(o: any): o is _33.RedelegationAmino;
                encode(message: _33.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Redelegation;
                fromJSON(object: any): _33.Redelegation;
                toJSON(message: _33.Redelegation): import("..").JsonSafe<_33.Redelegation>;
                fromPartial(object: Partial<_33.Redelegation>): _33.Redelegation;
                fromAmino(object: _33.RedelegationAmino): _33.Redelegation;
                toAmino(message: _33.Redelegation): _33.RedelegationAmino;
                fromAminoMsg(object: _33.RedelegationAminoMsg): _33.Redelegation;
                toAminoMsg(message: _33.Redelegation): _33.RedelegationAminoMsg;
                fromProtoMsg(message: _33.RedelegationProtoMsg): _33.Redelegation;
                toProto(message: _33.Redelegation): Uint8Array;
                toProtoMsg(message: _33.Redelegation): _33.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Params;
                isSDK(o: any): o is _33.ParamsSDKType;
                isAmino(o: any): o is _33.ParamsAmino;
                encode(message: _33.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Params;
                fromJSON(object: any): _33.Params;
                toJSON(message: _33.Params): import("..").JsonSafe<_33.Params>;
                fromPartial(object: Partial<_33.Params>): _33.Params;
                fromAmino(object: _33.ParamsAmino): _33.Params;
                toAmino(message: _33.Params): _33.ParamsAmino;
                fromAminoMsg(object: _33.ParamsAminoMsg): _33.Params;
                toAminoMsg(message: _33.Params): _33.ParamsAminoMsg;
                fromProtoMsg(message: _33.ParamsProtoMsg): _33.Params;
                toProto(message: _33.Params): Uint8Array;
                toProtoMsg(message: _33.Params): _33.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.DelegationResponse;
                isSDK(o: any): o is _33.DelegationResponseSDKType;
                isAmino(o: any): o is _33.DelegationResponseAmino;
                encode(message: _33.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.DelegationResponse;
                fromJSON(object: any): _33.DelegationResponse;
                toJSON(message: _33.DelegationResponse): import("..").JsonSafe<_33.DelegationResponse>;
                fromPartial(object: Partial<_33.DelegationResponse>): _33.DelegationResponse;
                fromAmino(object: _33.DelegationResponseAmino): _33.DelegationResponse;
                toAmino(message: _33.DelegationResponse): _33.DelegationResponseAmino;
                fromAminoMsg(object: _33.DelegationResponseAminoMsg): _33.DelegationResponse;
                toAminoMsg(message: _33.DelegationResponse): _33.DelegationResponseAminoMsg;
                fromProtoMsg(message: _33.DelegationResponseProtoMsg): _33.DelegationResponse;
                toProto(message: _33.DelegationResponse): Uint8Array;
                toProtoMsg(message: _33.DelegationResponse): _33.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.RedelegationEntryResponse;
                isSDK(o: any): o is _33.RedelegationEntryResponseSDKType;
                isAmino(o: any): o is _33.RedelegationEntryResponseAmino;
                encode(message: _33.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.RedelegationEntryResponse;
                fromJSON(object: any): _33.RedelegationEntryResponse;
                toJSON(message: _33.RedelegationEntryResponse): import("..").JsonSafe<_33.RedelegationEntryResponse>;
                fromPartial(object: Partial<_33.RedelegationEntryResponse>): _33.RedelegationEntryResponse;
                fromAmino(object: _33.RedelegationEntryResponseAmino): _33.RedelegationEntryResponse;
                toAmino(message: _33.RedelegationEntryResponse): _33.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _33.RedelegationEntryResponseAminoMsg): _33.RedelegationEntryResponse;
                toAminoMsg(message: _33.RedelegationEntryResponse): _33.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _33.RedelegationEntryResponseProtoMsg): _33.RedelegationEntryResponse;
                toProto(message: _33.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _33.RedelegationEntryResponse): _33.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.RedelegationResponse;
                isSDK(o: any): o is _33.RedelegationResponseSDKType;
                isAmino(o: any): o is _33.RedelegationResponseAmino;
                encode(message: _33.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.RedelegationResponse;
                fromJSON(object: any): _33.RedelegationResponse;
                toJSON(message: _33.RedelegationResponse): import("..").JsonSafe<_33.RedelegationResponse>;
                fromPartial(object: Partial<_33.RedelegationResponse>): _33.RedelegationResponse;
                fromAmino(object: _33.RedelegationResponseAmino): _33.RedelegationResponse;
                toAmino(message: _33.RedelegationResponse): _33.RedelegationResponseAmino;
                fromAminoMsg(object: _33.RedelegationResponseAminoMsg): _33.RedelegationResponse;
                toAminoMsg(message: _33.RedelegationResponse): _33.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _33.RedelegationResponseProtoMsg): _33.RedelegationResponse;
                toProto(message: _33.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _33.RedelegationResponse): _33.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _33.Pool;
                isSDK(o: any): o is _33.PoolSDKType;
                isAmino(o: any): o is _33.PoolAmino;
                encode(message: _33.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Pool;
                fromJSON(object: any): _33.Pool;
                toJSON(message: _33.Pool): import("..").JsonSafe<_33.Pool>;
                fromPartial(object: Partial<_33.Pool>): _33.Pool;
                fromAmino(object: _33.PoolAmino): _33.Pool;
                toAmino(message: _33.Pool): _33.PoolAmino;
                fromAminoMsg(object: _33.PoolAminoMsg): _33.Pool;
                toAminoMsg(message: _33.Pool): _33.PoolAminoMsg;
                fromProtoMsg(message: _33.PoolProtoMsg): _33.Pool;
                toProto(message: _33.Pool): Uint8Array;
                toProtoMsg(message: _33.Pool): _33.PoolProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.GenesisState;
                isSDK(o: any): o is _32.GenesisStateSDKType;
                isAmino(o: any): o is _32.GenesisStateAmino;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): import("..").JsonSafe<_32.GenesisState>;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _32.LastValidatorPower;
                isSDK(o: any): o is _32.LastValidatorPowerSDKType;
                isAmino(o: any): o is _32.LastValidatorPowerAmino;
                encode(message: _32.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.LastValidatorPower;
                fromJSON(object: any): _32.LastValidatorPower;
                toJSON(message: _32.LastValidatorPower): import("..").JsonSafe<_32.LastValidatorPower>;
                fromPartial(object: Partial<_32.LastValidatorPower>): _32.LastValidatorPower;
                fromAmino(object: _32.LastValidatorPowerAmino): _32.LastValidatorPower;
                toAmino(message: _32.LastValidatorPower): _32.LastValidatorPowerAmino;
                fromAminoMsg(object: _32.LastValidatorPowerAminoMsg): _32.LastValidatorPower;
                toAminoMsg(message: _32.LastValidatorPower): _32.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _32.LastValidatorPowerProtoMsg): _32.LastValidatorPower;
                toProto(message: _32.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _32.LastValidatorPower): _32.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _31.AuthorizationType;
            authorizationTypeToJSON(object: _31.AuthorizationType): string;
            AuthorizationType: typeof _31.AuthorizationType;
            AuthorizationTypeSDKType: typeof _31.AuthorizationType;
            AuthorizationTypeAmino: typeof _31.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.StakeAuthorization;
                isSDK(o: any): o is _31.StakeAuthorizationSDKType;
                isAmino(o: any): o is _31.StakeAuthorizationAmino;
                encode(message: _31.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.StakeAuthorization;
                fromJSON(object: any): _31.StakeAuthorization;
                toJSON(message: _31.StakeAuthorization): import("..").JsonSafe<_31.StakeAuthorization>;
                fromPartial(object: Partial<_31.StakeAuthorization>): _31.StakeAuthorization;
                fromAmino(object: _31.StakeAuthorizationAmino): _31.StakeAuthorization;
                toAmino(message: _31.StakeAuthorization): _31.StakeAuthorizationAmino;
                fromAminoMsg(object: _31.StakeAuthorizationAminoMsg): _31.StakeAuthorization;
                toAminoMsg(message: _31.StakeAuthorization): _31.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _31.StakeAuthorizationProtoMsg): _31.StakeAuthorization;
                toProto(message: _31.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _31.StakeAuthorization): _31.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _31.StakeAuthorization_Validators;
                isSDK(o: any): o is _31.StakeAuthorization_ValidatorsSDKType;
                isAmino(o: any): o is _31.StakeAuthorization_ValidatorsAmino;
                encode(message: _31.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.StakeAuthorization_Validators;
                fromJSON(object: any): _31.StakeAuthorization_Validators;
                toJSON(message: _31.StakeAuthorization_Validators): import("..").JsonSafe<_31.StakeAuthorization_Validators>;
                fromPartial(object: Partial<_31.StakeAuthorization_Validators>): _31.StakeAuthorization_Validators;
                fromAmino(object: _31.StakeAuthorization_ValidatorsAmino): _31.StakeAuthorization_Validators;
                toAmino(message: _31.StakeAuthorization_Validators): _31.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _31.StakeAuthorization_ValidatorsAminoMsg): _31.StakeAuthorization_Validators;
                toAminoMsg(message: _31.StakeAuthorization_Validators): _31.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _31.StakeAuthorization_ValidatorsProtoMsg): _31.StakeAuthorization_Validators;
                toProto(message: _31.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _31.StakeAuthorization_Validators): _31.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _35.SignMode;
                signModeToJSON(object: _35.SignMode): string;
                SignMode: typeof _35.SignMode;
                SignModeSDKType: typeof _35.SignMode;
                SignModeAmino: typeof _35.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _35.SignatureDescriptors;
                    isSDK(o: any): o is _35.SignatureDescriptorsSDKType;
                    isAmino(o: any): o is _35.SignatureDescriptorsAmino;
                    encode(message: _35.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SignatureDescriptors;
                    fromJSON(object: any): _35.SignatureDescriptors;
                    toJSON(message: _35.SignatureDescriptors): import("..").JsonSafe<_35.SignatureDescriptors>;
                    fromPartial(object: Partial<_35.SignatureDescriptors>): _35.SignatureDescriptors;
                    fromAmino(object: _35.SignatureDescriptorsAmino): _35.SignatureDescriptors;
                    toAmino(message: _35.SignatureDescriptors): _35.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _35.SignatureDescriptorsAminoMsg): _35.SignatureDescriptors;
                    toAminoMsg(message: _35.SignatureDescriptors): _35.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _35.SignatureDescriptorsProtoMsg): _35.SignatureDescriptors;
                    toProto(message: _35.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _35.SignatureDescriptors): _35.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _35.SignatureDescriptor;
                    isSDK(o: any): o is _35.SignatureDescriptorSDKType;
                    isAmino(o: any): o is _35.SignatureDescriptorAmino;
                    encode(message: _35.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SignatureDescriptor;
                    fromJSON(object: any): _35.SignatureDescriptor;
                    toJSON(message: _35.SignatureDescriptor): import("..").JsonSafe<_35.SignatureDescriptor>;
                    fromPartial(object: Partial<_35.SignatureDescriptor>): _35.SignatureDescriptor;
                    fromAmino(object: _35.SignatureDescriptorAmino): _35.SignatureDescriptor;
                    toAmino(message: _35.SignatureDescriptor): _35.SignatureDescriptorAmino;
                    fromAminoMsg(object: _35.SignatureDescriptorAminoMsg): _35.SignatureDescriptor;
                    toAminoMsg(message: _35.SignatureDescriptor): _35.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _35.SignatureDescriptorProtoMsg): _35.SignatureDescriptor;
                    toProto(message: _35.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _35.SignatureDescriptor): _35.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _35.SignatureDescriptor_Data;
                    isSDK(o: any): o is _35.SignatureDescriptor_DataSDKType;
                    isAmino(o: any): o is _35.SignatureDescriptor_DataAmino;
                    encode(message: _35.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SignatureDescriptor_Data;
                    fromJSON(object: any): _35.SignatureDescriptor_Data;
                    toJSON(message: _35.SignatureDescriptor_Data): import("..").JsonSafe<_35.SignatureDescriptor_Data>;
                    fromPartial(object: Partial<_35.SignatureDescriptor_Data>): _35.SignatureDescriptor_Data;
                    fromAmino(object: _35.SignatureDescriptor_DataAmino): _35.SignatureDescriptor_Data;
                    toAmino(message: _35.SignatureDescriptor_Data): _35.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _35.SignatureDescriptor_DataAminoMsg): _35.SignatureDescriptor_Data;
                    toAminoMsg(message: _35.SignatureDescriptor_Data): _35.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _35.SignatureDescriptor_DataProtoMsg): _35.SignatureDescriptor_Data;
                    toProto(message: _35.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _35.SignatureDescriptor_Data): _35.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _35.SignatureDescriptor_Data_Single;
                    isSDK(o: any): o is _35.SignatureDescriptor_Data_SingleSDKType;
                    isAmino(o: any): o is _35.SignatureDescriptor_Data_SingleAmino;
                    encode(message: _35.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _35.SignatureDescriptor_Data_Single;
                    toJSON(message: _35.SignatureDescriptor_Data_Single): import("..").JsonSafe<_35.SignatureDescriptor_Data_Single>;
                    fromPartial(object: Partial<_35.SignatureDescriptor_Data_Single>): _35.SignatureDescriptor_Data_Single;
                    fromAmino(object: _35.SignatureDescriptor_Data_SingleAmino): _35.SignatureDescriptor_Data_Single;
                    toAmino(message: _35.SignatureDescriptor_Data_Single): _35.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _35.SignatureDescriptor_Data_SingleAminoMsg): _35.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _35.SignatureDescriptor_Data_Single): _35.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _35.SignatureDescriptor_Data_SingleProtoMsg): _35.SignatureDescriptor_Data_Single;
                    toProto(message: _35.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _35.SignatureDescriptor_Data_Single): _35.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _35.SignatureDescriptor_Data_Multi;
                    isSDK(o: any): o is _35.SignatureDescriptor_Data_MultiSDKType;
                    isAmino(o: any): o is _35.SignatureDescriptor_Data_MultiAmino;
                    encode(message: _35.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _35.SignatureDescriptor_Data_Multi;
                    toJSON(message: _35.SignatureDescriptor_Data_Multi): import("..").JsonSafe<_35.SignatureDescriptor_Data_Multi>;
                    fromPartial(object: Partial<_35.SignatureDescriptor_Data_Multi>): _35.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _35.SignatureDescriptor_Data_MultiAmino): _35.SignatureDescriptor_Data_Multi;
                    toAmino(message: _35.SignatureDescriptor_Data_Multi): _35.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _35.SignatureDescriptor_Data_MultiAminoMsg): _35.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _35.SignatureDescriptor_Data_Multi): _35.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _35.SignatureDescriptor_Data_MultiProtoMsg): _35.SignatureDescriptor_Data_Multi;
                    toProto(message: _35.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _35.SignatureDescriptor_Data_Multi): _35.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _175.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _36.SimulateRequest): Promise<_36.SimulateResponse>;
                getTx(request: _36.GetTxRequest): Promise<_36.GetTxResponse>;
                broadcastTx(request: _36.BroadcastTxRequest): Promise<_36.BroadcastTxResponse>;
                getTxsEvent(request: _36.GetTxsEventRequest): Promise<_36.GetTxsEventResponse>;
                getBlockWithTxs(request: _36.GetBlockWithTxsRequest): Promise<_36.GetBlockWithTxsResponse>;
            };
            Tx: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Tx;
                isSDK(o: any): o is _37.TxSDKType;
                isAmino(o: any): o is _37.TxAmino;
                encode(message: _37.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.Tx;
                fromJSON(object: any): _37.Tx;
                toJSON(message: _37.Tx): import("..").JsonSafe<_37.Tx>;
                fromPartial(object: Partial<_37.Tx>): _37.Tx;
                fromAmino(object: _37.TxAmino): _37.Tx;
                toAmino(message: _37.Tx): _37.TxAmino;
                fromAminoMsg(object: _37.TxAminoMsg): _37.Tx;
                toAminoMsg(message: _37.Tx): _37.TxAminoMsg;
                fromProtoMsg(message: _37.TxProtoMsg): _37.Tx;
                toProto(message: _37.Tx): Uint8Array;
                toProtoMsg(message: _37.Tx): _37.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.TxRaw;
                isSDK(o: any): o is _37.TxRawSDKType;
                isAmino(o: any): o is _37.TxRawAmino;
                encode(message: _37.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.TxRaw;
                fromJSON(object: any): _37.TxRaw;
                toJSON(message: _37.TxRaw): import("..").JsonSafe<_37.TxRaw>;
                fromPartial(object: Partial<_37.TxRaw>): _37.TxRaw;
                fromAmino(object: _37.TxRawAmino): _37.TxRaw;
                toAmino(message: _37.TxRaw): _37.TxRawAmino;
                fromAminoMsg(object: _37.TxRawAminoMsg): _37.TxRaw;
                toAminoMsg(message: _37.TxRaw): _37.TxRawAminoMsg;
                fromProtoMsg(message: _37.TxRawProtoMsg): _37.TxRaw;
                toProto(message: _37.TxRaw): Uint8Array;
                toProtoMsg(message: _37.TxRaw): _37.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.SignDoc;
                isSDK(o: any): o is _37.SignDocSDKType;
                isAmino(o: any): o is _37.SignDocAmino;
                encode(message: _37.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.SignDoc;
                fromJSON(object: any): _37.SignDoc;
                toJSON(message: _37.SignDoc): import("..").JsonSafe<_37.SignDoc>;
                fromPartial(object: Partial<_37.SignDoc>): _37.SignDoc;
                fromAmino(object: _37.SignDocAmino): _37.SignDoc;
                toAmino(message: _37.SignDoc): _37.SignDocAmino;
                fromAminoMsg(object: _37.SignDocAminoMsg): _37.SignDoc;
                toAminoMsg(message: _37.SignDoc): _37.SignDocAminoMsg;
                fromProtoMsg(message: _37.SignDocProtoMsg): _37.SignDoc;
                toProto(message: _37.SignDoc): Uint8Array;
                toProtoMsg(message: _37.SignDoc): _37.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.SignDocDirectAux;
                isSDK(o: any): o is _37.SignDocDirectAuxSDKType;
                isAmino(o: any): o is _37.SignDocDirectAuxAmino;
                encode(message: _37.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.SignDocDirectAux;
                fromJSON(object: any): _37.SignDocDirectAux;
                toJSON(message: _37.SignDocDirectAux): import("..").JsonSafe<_37.SignDocDirectAux>;
                fromPartial(object: Partial<_37.SignDocDirectAux>): _37.SignDocDirectAux;
                fromAmino(object: _37.SignDocDirectAuxAmino): _37.SignDocDirectAux;
                toAmino(message: _37.SignDocDirectAux): _37.SignDocDirectAuxAmino;
                fromAminoMsg(object: _37.SignDocDirectAuxAminoMsg): _37.SignDocDirectAux;
                toAminoMsg(message: _37.SignDocDirectAux): _37.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _37.SignDocDirectAuxProtoMsg): _37.SignDocDirectAux;
                toProto(message: _37.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _37.SignDocDirectAux): _37.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.TxBody;
                isSDK(o: any): o is _37.TxBodySDKType;
                isAmino(o: any): o is _37.TxBodyAmino;
                encode(message: _37.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.TxBody;
                fromJSON(object: any): _37.TxBody;
                toJSON(message: _37.TxBody): import("..").JsonSafe<_37.TxBody>;
                fromPartial(object: Partial<_37.TxBody>): _37.TxBody;
                fromAmino(object: _37.TxBodyAmino): _37.TxBody;
                toAmino(message: _37.TxBody): _37.TxBodyAmino;
                fromAminoMsg(object: _37.TxBodyAminoMsg): _37.TxBody;
                toAminoMsg(message: _37.TxBody): _37.TxBodyAminoMsg;
                fromProtoMsg(message: _37.TxBodyProtoMsg): _37.TxBody;
                toProto(message: _37.TxBody): Uint8Array;
                toProtoMsg(message: _37.TxBody): _37.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.AuthInfo;
                isSDK(o: any): o is _37.AuthInfoSDKType;
                isAmino(o: any): o is _37.AuthInfoAmino;
                encode(message: _37.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.AuthInfo;
                fromJSON(object: any): _37.AuthInfo;
                toJSON(message: _37.AuthInfo): import("..").JsonSafe<_37.AuthInfo>;
                fromPartial(object: Partial<_37.AuthInfo>): _37.AuthInfo;
                fromAmino(object: _37.AuthInfoAmino): _37.AuthInfo;
                toAmino(message: _37.AuthInfo): _37.AuthInfoAmino;
                fromAminoMsg(object: _37.AuthInfoAminoMsg): _37.AuthInfo;
                toAminoMsg(message: _37.AuthInfo): _37.AuthInfoAminoMsg;
                fromProtoMsg(message: _37.AuthInfoProtoMsg): _37.AuthInfo;
                toProto(message: _37.AuthInfo): Uint8Array;
                toProtoMsg(message: _37.AuthInfo): _37.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.SignerInfo;
                isSDK(o: any): o is _37.SignerInfoSDKType;
                isAmino(o: any): o is _37.SignerInfoAmino;
                encode(message: _37.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.SignerInfo;
                fromJSON(object: any): _37.SignerInfo;
                toJSON(message: _37.SignerInfo): import("..").JsonSafe<_37.SignerInfo>;
                fromPartial(object: Partial<_37.SignerInfo>): _37.SignerInfo;
                fromAmino(object: _37.SignerInfoAmino): _37.SignerInfo;
                toAmino(message: _37.SignerInfo): _37.SignerInfoAmino;
                fromAminoMsg(object: _37.SignerInfoAminoMsg): _37.SignerInfo;
                toAminoMsg(message: _37.SignerInfo): _37.SignerInfoAminoMsg;
                fromProtoMsg(message: _37.SignerInfoProtoMsg): _37.SignerInfo;
                toProto(message: _37.SignerInfo): Uint8Array;
                toProtoMsg(message: _37.SignerInfo): _37.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.ModeInfo;
                isSDK(o: any): o is _37.ModeInfoSDKType;
                isAmino(o: any): o is _37.ModeInfoAmino;
                encode(message: _37.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ModeInfo;
                fromJSON(object: any): _37.ModeInfo;
                toJSON(message: _37.ModeInfo): import("..").JsonSafe<_37.ModeInfo>;
                fromPartial(object: Partial<_37.ModeInfo>): _37.ModeInfo;
                fromAmino(object: _37.ModeInfoAmino): _37.ModeInfo;
                toAmino(message: _37.ModeInfo): _37.ModeInfoAmino;
                fromAminoMsg(object: _37.ModeInfoAminoMsg): _37.ModeInfo;
                toAminoMsg(message: _37.ModeInfo): _37.ModeInfoAminoMsg;
                fromProtoMsg(message: _37.ModeInfoProtoMsg): _37.ModeInfo;
                toProto(message: _37.ModeInfo): Uint8Array;
                toProtoMsg(message: _37.ModeInfo): _37.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.ModeInfo_Single;
                isSDK(o: any): o is _37.ModeInfo_SingleSDKType;
                isAmino(o: any): o is _37.ModeInfo_SingleAmino;
                encode(message: _37.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ModeInfo_Single;
                fromJSON(object: any): _37.ModeInfo_Single;
                toJSON(message: _37.ModeInfo_Single): import("..").JsonSafe<_37.ModeInfo_Single>;
                fromPartial(object: Partial<_37.ModeInfo_Single>): _37.ModeInfo_Single;
                fromAmino(object: _37.ModeInfo_SingleAmino): _37.ModeInfo_Single;
                toAmino(message: _37.ModeInfo_Single): _37.ModeInfo_SingleAmino;
                fromAminoMsg(object: _37.ModeInfo_SingleAminoMsg): _37.ModeInfo_Single;
                toAminoMsg(message: _37.ModeInfo_Single): _37.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _37.ModeInfo_SingleProtoMsg): _37.ModeInfo_Single;
                toProto(message: _37.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _37.ModeInfo_Single): _37.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.ModeInfo_Multi;
                isSDK(o: any): o is _37.ModeInfo_MultiSDKType;
                isAmino(o: any): o is _37.ModeInfo_MultiAmino;
                encode(message: _37.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ModeInfo_Multi;
                fromJSON(object: any): _37.ModeInfo_Multi;
                toJSON(message: _37.ModeInfo_Multi): import("..").JsonSafe<_37.ModeInfo_Multi>;
                fromPartial(object: Partial<_37.ModeInfo_Multi>): _37.ModeInfo_Multi;
                fromAmino(object: _37.ModeInfo_MultiAmino): _37.ModeInfo_Multi;
                toAmino(message: _37.ModeInfo_Multi): _37.ModeInfo_MultiAmino;
                fromAminoMsg(object: _37.ModeInfo_MultiAminoMsg): _37.ModeInfo_Multi;
                toAminoMsg(message: _37.ModeInfo_Multi): _37.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _37.ModeInfo_MultiProtoMsg): _37.ModeInfo_Multi;
                toProto(message: _37.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _37.ModeInfo_Multi): _37.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Fee;
                isSDK(o: any): o is _37.FeeSDKType;
                isAmino(o: any): o is _37.FeeAmino;
                encode(message: _37.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.Fee;
                fromJSON(object: any): _37.Fee;
                toJSON(message: _37.Fee): import("..").JsonSafe<_37.Fee>;
                fromPartial(object: Partial<_37.Fee>): _37.Fee;
                fromAmino(object: _37.FeeAmino): _37.Fee;
                toAmino(message: _37.Fee): _37.FeeAmino;
                fromAminoMsg(object: _37.FeeAminoMsg): _37.Fee;
                toAminoMsg(message: _37.Fee): _37.FeeAminoMsg;
                fromProtoMsg(message: _37.FeeProtoMsg): _37.Fee;
                toProto(message: _37.Fee): Uint8Array;
                toProtoMsg(message: _37.Fee): _37.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.Tip;
                isSDK(o: any): o is _37.TipSDKType;
                isAmino(o: any): o is _37.TipAmino;
                encode(message: _37.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.Tip;
                fromJSON(object: any): _37.Tip;
                toJSON(message: _37.Tip): import("..").JsonSafe<_37.Tip>;
                fromPartial(object: Partial<_37.Tip>): _37.Tip;
                fromAmino(object: _37.TipAmino): _37.Tip;
                toAmino(message: _37.Tip): _37.TipAmino;
                fromAminoMsg(object: _37.TipAminoMsg): _37.Tip;
                toAminoMsg(message: _37.Tip): _37.TipAminoMsg;
                fromProtoMsg(message: _37.TipProtoMsg): _37.Tip;
                toProto(message: _37.Tip): Uint8Array;
                toProtoMsg(message: _37.Tip): _37.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _37.AuxSignerData;
                isSDK(o: any): o is _37.AuxSignerDataSDKType;
                isAmino(o: any): o is _37.AuxSignerDataAmino;
                encode(message: _37.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.AuxSignerData;
                fromJSON(object: any): _37.AuxSignerData;
                toJSON(message: _37.AuxSignerData): import("..").JsonSafe<_37.AuxSignerData>;
                fromPartial(object: Partial<_37.AuxSignerData>): _37.AuxSignerData;
                fromAmino(object: _37.AuxSignerDataAmino): _37.AuxSignerData;
                toAmino(message: _37.AuxSignerData): _37.AuxSignerDataAmino;
                fromAminoMsg(object: _37.AuxSignerDataAminoMsg): _37.AuxSignerData;
                toAminoMsg(message: _37.AuxSignerData): _37.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _37.AuxSignerDataProtoMsg): _37.AuxSignerData;
                toProto(message: _37.AuxSignerData): Uint8Array;
                toProtoMsg(message: _37.AuxSignerData): _37.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _36.OrderBy;
            orderByToJSON(object: _36.OrderBy): string;
            broadcastModeFromJSON(object: any): _36.BroadcastMode;
            broadcastModeToJSON(object: _36.BroadcastMode): string;
            OrderBy: typeof _36.OrderBy;
            OrderBySDKType: typeof _36.OrderBy;
            OrderByAmino: typeof _36.OrderBy;
            BroadcastMode: typeof _36.BroadcastMode;
            BroadcastModeSDKType: typeof _36.BroadcastMode;
            BroadcastModeAmino: typeof _36.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.GetTxsEventRequest;
                isSDK(o: any): o is _36.GetTxsEventRequestSDKType;
                isAmino(o: any): o is _36.GetTxsEventRequestAmino;
                encode(message: _36.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.GetTxsEventRequest;
                fromJSON(object: any): _36.GetTxsEventRequest;
                toJSON(message: _36.GetTxsEventRequest): import("..").JsonSafe<_36.GetTxsEventRequest>;
                fromPartial(object: Partial<_36.GetTxsEventRequest>): _36.GetTxsEventRequest;
                fromAmino(object: _36.GetTxsEventRequestAmino): _36.GetTxsEventRequest;
                toAmino(message: _36.GetTxsEventRequest): _36.GetTxsEventRequestAmino;
                fromAminoMsg(object: _36.GetTxsEventRequestAminoMsg): _36.GetTxsEventRequest;
                toAminoMsg(message: _36.GetTxsEventRequest): _36.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _36.GetTxsEventRequestProtoMsg): _36.GetTxsEventRequest;
                toProto(message: _36.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _36.GetTxsEventRequest): _36.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.GetTxsEventResponse;
                isSDK(o: any): o is _36.GetTxsEventResponseSDKType;
                isAmino(o: any): o is _36.GetTxsEventResponseAmino;
                encode(message: _36.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.GetTxsEventResponse;
                fromJSON(object: any): _36.GetTxsEventResponse;
                toJSON(message: _36.GetTxsEventResponse): import("..").JsonSafe<_36.GetTxsEventResponse>;
                fromPartial(object: Partial<_36.GetTxsEventResponse>): _36.GetTxsEventResponse;
                fromAmino(object: _36.GetTxsEventResponseAmino): _36.GetTxsEventResponse;
                toAmino(message: _36.GetTxsEventResponse): _36.GetTxsEventResponseAmino;
                fromAminoMsg(object: _36.GetTxsEventResponseAminoMsg): _36.GetTxsEventResponse;
                toAminoMsg(message: _36.GetTxsEventResponse): _36.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _36.GetTxsEventResponseProtoMsg): _36.GetTxsEventResponse;
                toProto(message: _36.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _36.GetTxsEventResponse): _36.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.BroadcastTxRequest;
                isSDK(o: any): o is _36.BroadcastTxRequestSDKType;
                isAmino(o: any): o is _36.BroadcastTxRequestAmino;
                encode(message: _36.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.BroadcastTxRequest;
                fromJSON(object: any): _36.BroadcastTxRequest;
                toJSON(message: _36.BroadcastTxRequest): import("..").JsonSafe<_36.BroadcastTxRequest>;
                fromPartial(object: Partial<_36.BroadcastTxRequest>): _36.BroadcastTxRequest;
                fromAmino(object: _36.BroadcastTxRequestAmino): _36.BroadcastTxRequest;
                toAmino(message: _36.BroadcastTxRequest): _36.BroadcastTxRequestAmino;
                fromAminoMsg(object: _36.BroadcastTxRequestAminoMsg): _36.BroadcastTxRequest;
                toAminoMsg(message: _36.BroadcastTxRequest): _36.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _36.BroadcastTxRequestProtoMsg): _36.BroadcastTxRequest;
                toProto(message: _36.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _36.BroadcastTxRequest): _36.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.BroadcastTxResponse;
                isSDK(o: any): o is _36.BroadcastTxResponseSDKType;
                isAmino(o: any): o is _36.BroadcastTxResponseAmino;
                encode(message: _36.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.BroadcastTxResponse;
                fromJSON(object: any): _36.BroadcastTxResponse;
                toJSON(message: _36.BroadcastTxResponse): import("..").JsonSafe<_36.BroadcastTxResponse>;
                fromPartial(object: Partial<_36.BroadcastTxResponse>): _36.BroadcastTxResponse;
                fromAmino(object: _36.BroadcastTxResponseAmino): _36.BroadcastTxResponse;
                toAmino(message: _36.BroadcastTxResponse): _36.BroadcastTxResponseAmino;
                fromAminoMsg(object: _36.BroadcastTxResponseAminoMsg): _36.BroadcastTxResponse;
                toAminoMsg(message: _36.BroadcastTxResponse): _36.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _36.BroadcastTxResponseProtoMsg): _36.BroadcastTxResponse;
                toProto(message: _36.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _36.BroadcastTxResponse): _36.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.SimulateRequest;
                isSDK(o: any): o is _36.SimulateRequestSDKType;
                isAmino(o: any): o is _36.SimulateRequestAmino;
                encode(message: _36.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.SimulateRequest;
                fromJSON(object: any): _36.SimulateRequest;
                toJSON(message: _36.SimulateRequest): import("..").JsonSafe<_36.SimulateRequest>;
                fromPartial(object: Partial<_36.SimulateRequest>): _36.SimulateRequest;
                fromAmino(object: _36.SimulateRequestAmino): _36.SimulateRequest;
                toAmino(message: _36.SimulateRequest): _36.SimulateRequestAmino;
                fromAminoMsg(object: _36.SimulateRequestAminoMsg): _36.SimulateRequest;
                toAminoMsg(message: _36.SimulateRequest): _36.SimulateRequestAminoMsg;
                fromProtoMsg(message: _36.SimulateRequestProtoMsg): _36.SimulateRequest;
                toProto(message: _36.SimulateRequest): Uint8Array;
                toProtoMsg(message: _36.SimulateRequest): _36.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.SimulateResponse;
                isSDK(o: any): o is _36.SimulateResponseSDKType;
                isAmino(o: any): o is _36.SimulateResponseAmino;
                encode(message: _36.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.SimulateResponse;
                fromJSON(object: any): _36.SimulateResponse;
                toJSON(message: _36.SimulateResponse): import("..").JsonSafe<_36.SimulateResponse>;
                fromPartial(object: Partial<_36.SimulateResponse>): _36.SimulateResponse;
                fromAmino(object: _36.SimulateResponseAmino): _36.SimulateResponse;
                toAmino(message: _36.SimulateResponse): _36.SimulateResponseAmino;
                fromAminoMsg(object: _36.SimulateResponseAminoMsg): _36.SimulateResponse;
                toAminoMsg(message: _36.SimulateResponse): _36.SimulateResponseAminoMsg;
                fromProtoMsg(message: _36.SimulateResponseProtoMsg): _36.SimulateResponse;
                toProto(message: _36.SimulateResponse): Uint8Array;
                toProtoMsg(message: _36.SimulateResponse): _36.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.GetTxRequest;
                isSDK(o: any): o is _36.GetTxRequestSDKType;
                isAmino(o: any): o is _36.GetTxRequestAmino;
                encode(message: _36.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.GetTxRequest;
                fromJSON(object: any): _36.GetTxRequest;
                toJSON(message: _36.GetTxRequest): import("..").JsonSafe<_36.GetTxRequest>;
                fromPartial(object: Partial<_36.GetTxRequest>): _36.GetTxRequest;
                fromAmino(object: _36.GetTxRequestAmino): _36.GetTxRequest;
                toAmino(message: _36.GetTxRequest): _36.GetTxRequestAmino;
                fromAminoMsg(object: _36.GetTxRequestAminoMsg): _36.GetTxRequest;
                toAminoMsg(message: _36.GetTxRequest): _36.GetTxRequestAminoMsg;
                fromProtoMsg(message: _36.GetTxRequestProtoMsg): _36.GetTxRequest;
                toProto(message: _36.GetTxRequest): Uint8Array;
                toProtoMsg(message: _36.GetTxRequest): _36.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.GetTxResponse;
                isSDK(o: any): o is _36.GetTxResponseSDKType;
                isAmino(o: any): o is _36.GetTxResponseAmino;
                encode(message: _36.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.GetTxResponse;
                fromJSON(object: any): _36.GetTxResponse;
                toJSON(message: _36.GetTxResponse): import("..").JsonSafe<_36.GetTxResponse>;
                fromPartial(object: Partial<_36.GetTxResponse>): _36.GetTxResponse;
                fromAmino(object: _36.GetTxResponseAmino): _36.GetTxResponse;
                toAmino(message: _36.GetTxResponse): _36.GetTxResponseAmino;
                fromAminoMsg(object: _36.GetTxResponseAminoMsg): _36.GetTxResponse;
                toAminoMsg(message: _36.GetTxResponse): _36.GetTxResponseAminoMsg;
                fromProtoMsg(message: _36.GetTxResponseProtoMsg): _36.GetTxResponse;
                toProto(message: _36.GetTxResponse): Uint8Array;
                toProtoMsg(message: _36.GetTxResponse): _36.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.GetBlockWithTxsRequest;
                isSDK(o: any): o is _36.GetBlockWithTxsRequestSDKType;
                isAmino(o: any): o is _36.GetBlockWithTxsRequestAmino;
                encode(message: _36.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.GetBlockWithTxsRequest;
                fromJSON(object: any): _36.GetBlockWithTxsRequest;
                toJSON(message: _36.GetBlockWithTxsRequest): import("..").JsonSafe<_36.GetBlockWithTxsRequest>;
                fromPartial(object: Partial<_36.GetBlockWithTxsRequest>): _36.GetBlockWithTxsRequest;
                fromAmino(object: _36.GetBlockWithTxsRequestAmino): _36.GetBlockWithTxsRequest;
                toAmino(message: _36.GetBlockWithTxsRequest): _36.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _36.GetBlockWithTxsRequestAminoMsg): _36.GetBlockWithTxsRequest;
                toAminoMsg(message: _36.GetBlockWithTxsRequest): _36.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _36.GetBlockWithTxsRequestProtoMsg): _36.GetBlockWithTxsRequest;
                toProto(message: _36.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _36.GetBlockWithTxsRequest): _36.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _36.GetBlockWithTxsResponse;
                isSDK(o: any): o is _36.GetBlockWithTxsResponseSDKType;
                isAmino(o: any): o is _36.GetBlockWithTxsResponseAmino;
                encode(message: _36.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.GetBlockWithTxsResponse;
                fromJSON(object: any): _36.GetBlockWithTxsResponse;
                toJSON(message: _36.GetBlockWithTxsResponse): import("..").JsonSafe<_36.GetBlockWithTxsResponse>;
                fromPartial(object: Partial<_36.GetBlockWithTxsResponse>): _36.GetBlockWithTxsResponse;
                fromAmino(object: _36.GetBlockWithTxsResponseAmino): _36.GetBlockWithTxsResponse;
                toAmino(message: _36.GetBlockWithTxsResponse): _36.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _36.GetBlockWithTxsResponseAminoMsg): _36.GetBlockWithTxsResponse;
                toAminoMsg(message: _36.GetBlockWithTxsResponse): _36.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _36.GetBlockWithTxsResponseProtoMsg): _36.GetBlockWithTxsResponse;
                toProto(message: _36.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _36.GetBlockWithTxsResponse): _36.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _38.QueryCurrentPlanRequest): Promise<_38.QueryCurrentPlanResponse>;
                appliedPlan(request: _38.QueryAppliedPlanRequest): Promise<_38.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _38.QueryUpgradedConsensusStateRequest): Promise<_38.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _38.QueryModuleVersionsRequest): Promise<_38.QueryModuleVersionsResponse>;
                authority(request?: _38.QueryAuthorityRequest): Promise<_38.QueryAuthorityResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _39.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    cancelUpgrade(value: _39.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _39.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _39.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _39.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _39.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _39.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: {
                            authority: string;
                            plan: {
                                name: string;
                                time: string;
                                height: string;
                                info: string;
                                upgradedClientState?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                            };
                        };
                    };
                    cancelUpgrade(value: _39.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: {
                            authority: string;
                        };
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _39.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _39.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _39.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _39.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _39.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _39.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _39.MsgSoftwareUpgrade) => _39.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _39.MsgSoftwareUpgradeAmino) => _39.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _39.MsgCancelUpgrade) => _39.MsgCancelUpgradeAmino;
                    fromAmino: (object: _39.MsgCancelUpgradeAmino) => _39.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.Plan;
                isSDK(o: any): o is _40.PlanSDKType;
                isAmino(o: any): o is _40.PlanAmino;
                encode(message: _40.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.Plan;
                fromJSON(object: any): _40.Plan;
                toJSON(message: _40.Plan): import("..").JsonSafe<_40.Plan>;
                fromPartial(object: Partial<_40.Plan>): _40.Plan;
                fromAmino(object: _40.PlanAmino): _40.Plan;
                toAmino(message: _40.Plan): _40.PlanAmino;
                fromAminoMsg(object: _40.PlanAminoMsg): _40.Plan;
                toAminoMsg(message: _40.Plan): _40.PlanAminoMsg;
                fromProtoMsg(message: _40.PlanProtoMsg): _40.Plan;
                toProto(message: _40.Plan): Uint8Array;
                toProtoMsg(message: _40.Plan): _40.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.SoftwareUpgradeProposal;
                isSDK(o: any): o is _40.SoftwareUpgradeProposalSDKType;
                isAmino(o: any): o is _40.SoftwareUpgradeProposalAmino;
                encode(message: _40.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.SoftwareUpgradeProposal;
                fromJSON(object: any): _40.SoftwareUpgradeProposal;
                toJSON(message: _40.SoftwareUpgradeProposal): import("..").JsonSafe<_40.SoftwareUpgradeProposal>;
                fromPartial(object: Partial<_40.SoftwareUpgradeProposal>): _40.SoftwareUpgradeProposal;
                fromAmino(object: _40.SoftwareUpgradeProposalAmino): _40.SoftwareUpgradeProposal;
                toAmino(message: _40.SoftwareUpgradeProposal): _40.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _40.SoftwareUpgradeProposalAminoMsg): _40.SoftwareUpgradeProposal;
                toAminoMsg(message: _40.SoftwareUpgradeProposal): _40.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _40.SoftwareUpgradeProposalProtoMsg): _40.SoftwareUpgradeProposal;
                toProto(message: _40.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _40.SoftwareUpgradeProposal): _40.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.CancelSoftwareUpgradeProposal;
                isSDK(o: any): o is _40.CancelSoftwareUpgradeProposalSDKType;
                isAmino(o: any): o is _40.CancelSoftwareUpgradeProposalAmino;
                encode(message: _40.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _40.CancelSoftwareUpgradeProposal;
                toJSON(message: _40.CancelSoftwareUpgradeProposal): import("..").JsonSafe<_40.CancelSoftwareUpgradeProposal>;
                fromPartial(object: Partial<_40.CancelSoftwareUpgradeProposal>): _40.CancelSoftwareUpgradeProposal;
                fromAmino(object: _40.CancelSoftwareUpgradeProposalAmino): _40.CancelSoftwareUpgradeProposal;
                toAmino(message: _40.CancelSoftwareUpgradeProposal): _40.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _40.CancelSoftwareUpgradeProposalAminoMsg): _40.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _40.CancelSoftwareUpgradeProposal): _40.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _40.CancelSoftwareUpgradeProposalProtoMsg): _40.CancelSoftwareUpgradeProposal;
                toProto(message: _40.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _40.CancelSoftwareUpgradeProposal): _40.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _40.ModuleVersion;
                isSDK(o: any): o is _40.ModuleVersionSDKType;
                isAmino(o: any): o is _40.ModuleVersionAmino;
                encode(message: _40.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.ModuleVersion;
                fromJSON(object: any): _40.ModuleVersion;
                toJSON(message: _40.ModuleVersion): import("..").JsonSafe<_40.ModuleVersion>;
                fromPartial(object: Partial<_40.ModuleVersion>): _40.ModuleVersion;
                fromAmino(object: _40.ModuleVersionAmino): _40.ModuleVersion;
                toAmino(message: _40.ModuleVersion): _40.ModuleVersionAmino;
                fromAminoMsg(object: _40.ModuleVersionAminoMsg): _40.ModuleVersion;
                toAminoMsg(message: _40.ModuleVersion): _40.ModuleVersionAminoMsg;
                fromProtoMsg(message: _40.ModuleVersionProtoMsg): _40.ModuleVersion;
                toProto(message: _40.ModuleVersion): Uint8Array;
                toProtoMsg(message: _40.ModuleVersion): _40.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _39.MsgSoftwareUpgrade;
                isSDK(o: any): o is _39.MsgSoftwareUpgradeSDKType;
                isAmino(o: any): o is _39.MsgSoftwareUpgradeAmino;
                encode(message: _39.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgSoftwareUpgrade;
                fromJSON(object: any): _39.MsgSoftwareUpgrade;
                toJSON(message: _39.MsgSoftwareUpgrade): import("..").JsonSafe<_39.MsgSoftwareUpgrade>;
                fromPartial(object: Partial<_39.MsgSoftwareUpgrade>): _39.MsgSoftwareUpgrade;
                fromAmino(object: _39.MsgSoftwareUpgradeAmino): _39.MsgSoftwareUpgrade;
                toAmino(message: _39.MsgSoftwareUpgrade): _39.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _39.MsgSoftwareUpgradeAminoMsg): _39.MsgSoftwareUpgrade;
                toAminoMsg(message: _39.MsgSoftwareUpgrade): _39.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _39.MsgSoftwareUpgradeProtoMsg): _39.MsgSoftwareUpgrade;
                toProto(message: _39.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _39.MsgSoftwareUpgrade): _39.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _39.MsgSoftwareUpgradeResponse;
                isSDK(o: any): o is _39.MsgSoftwareUpgradeResponseSDKType;
                isAmino(o: any): o is _39.MsgSoftwareUpgradeResponseAmino;
                encode(_: _39.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _39.MsgSoftwareUpgradeResponse;
                toJSON(_: _39.MsgSoftwareUpgradeResponse): import("..").JsonSafe<_39.MsgSoftwareUpgradeResponse>;
                fromPartial(_: Partial<_39.MsgSoftwareUpgradeResponse>): _39.MsgSoftwareUpgradeResponse;
                fromAmino(_: _39.MsgSoftwareUpgradeResponseAmino): _39.MsgSoftwareUpgradeResponse;
                toAmino(_: _39.MsgSoftwareUpgradeResponse): _39.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _39.MsgSoftwareUpgradeResponseAminoMsg): _39.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _39.MsgSoftwareUpgradeResponse): _39.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _39.MsgSoftwareUpgradeResponseProtoMsg): _39.MsgSoftwareUpgradeResponse;
                toProto(message: _39.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _39.MsgSoftwareUpgradeResponse): _39.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _39.MsgCancelUpgrade;
                isSDK(o: any): o is _39.MsgCancelUpgradeSDKType;
                isAmino(o: any): o is _39.MsgCancelUpgradeAmino;
                encode(message: _39.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgCancelUpgrade;
                fromJSON(object: any): _39.MsgCancelUpgrade;
                toJSON(message: _39.MsgCancelUpgrade): import("..").JsonSafe<_39.MsgCancelUpgrade>;
                fromPartial(object: Partial<_39.MsgCancelUpgrade>): _39.MsgCancelUpgrade;
                fromAmino(object: _39.MsgCancelUpgradeAmino): _39.MsgCancelUpgrade;
                toAmino(message: _39.MsgCancelUpgrade): _39.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _39.MsgCancelUpgradeAminoMsg): _39.MsgCancelUpgrade;
                toAminoMsg(message: _39.MsgCancelUpgrade): _39.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _39.MsgCancelUpgradeProtoMsg): _39.MsgCancelUpgrade;
                toProto(message: _39.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _39.MsgCancelUpgrade): _39.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _39.MsgCancelUpgradeResponse;
                isSDK(o: any): o is _39.MsgCancelUpgradeResponseSDKType;
                isAmino(o: any): o is _39.MsgCancelUpgradeResponseAmino;
                encode(_: _39.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgCancelUpgradeResponse;
                fromJSON(_: any): _39.MsgCancelUpgradeResponse;
                toJSON(_: _39.MsgCancelUpgradeResponse): import("..").JsonSafe<_39.MsgCancelUpgradeResponse>;
                fromPartial(_: Partial<_39.MsgCancelUpgradeResponse>): _39.MsgCancelUpgradeResponse;
                fromAmino(_: _39.MsgCancelUpgradeResponseAmino): _39.MsgCancelUpgradeResponse;
                toAmino(_: _39.MsgCancelUpgradeResponse): _39.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _39.MsgCancelUpgradeResponseAminoMsg): _39.MsgCancelUpgradeResponse;
                toAminoMsg(message: _39.MsgCancelUpgradeResponse): _39.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _39.MsgCancelUpgradeResponseProtoMsg): _39.MsgCancelUpgradeResponse;
                toProto(message: _39.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _39.MsgCancelUpgradeResponse): _39.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryCurrentPlanRequest;
                isSDK(o: any): o is _38.QueryCurrentPlanRequestSDKType;
                isAmino(o: any): o is _38.QueryCurrentPlanRequestAmino;
                encode(_: _38.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryCurrentPlanRequest;
                fromJSON(_: any): _38.QueryCurrentPlanRequest;
                toJSON(_: _38.QueryCurrentPlanRequest): import("..").JsonSafe<_38.QueryCurrentPlanRequest>;
                fromPartial(_: Partial<_38.QueryCurrentPlanRequest>): _38.QueryCurrentPlanRequest;
                fromAmino(_: _38.QueryCurrentPlanRequestAmino): _38.QueryCurrentPlanRequest;
                toAmino(_: _38.QueryCurrentPlanRequest): _38.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _38.QueryCurrentPlanRequestAminoMsg): _38.QueryCurrentPlanRequest;
                toAminoMsg(message: _38.QueryCurrentPlanRequest): _38.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _38.QueryCurrentPlanRequestProtoMsg): _38.QueryCurrentPlanRequest;
                toProto(message: _38.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _38.QueryCurrentPlanRequest): _38.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryCurrentPlanResponse;
                isSDK(o: any): o is _38.QueryCurrentPlanResponseSDKType;
                isAmino(o: any): o is _38.QueryCurrentPlanResponseAmino;
                encode(message: _38.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryCurrentPlanResponse;
                fromJSON(object: any): _38.QueryCurrentPlanResponse;
                toJSON(message: _38.QueryCurrentPlanResponse): import("..").JsonSafe<_38.QueryCurrentPlanResponse>;
                fromPartial(object: Partial<_38.QueryCurrentPlanResponse>): _38.QueryCurrentPlanResponse;
                fromAmino(object: _38.QueryCurrentPlanResponseAmino): _38.QueryCurrentPlanResponse;
                toAmino(message: _38.QueryCurrentPlanResponse): _38.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _38.QueryCurrentPlanResponseAminoMsg): _38.QueryCurrentPlanResponse;
                toAminoMsg(message: _38.QueryCurrentPlanResponse): _38.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _38.QueryCurrentPlanResponseProtoMsg): _38.QueryCurrentPlanResponse;
                toProto(message: _38.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _38.QueryCurrentPlanResponse): _38.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryAppliedPlanRequest;
                isSDK(o: any): o is _38.QueryAppliedPlanRequestSDKType;
                isAmino(o: any): o is _38.QueryAppliedPlanRequestAmino;
                encode(message: _38.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryAppliedPlanRequest;
                fromJSON(object: any): _38.QueryAppliedPlanRequest;
                toJSON(message: _38.QueryAppliedPlanRequest): import("..").JsonSafe<_38.QueryAppliedPlanRequest>;
                fromPartial(object: Partial<_38.QueryAppliedPlanRequest>): _38.QueryAppliedPlanRequest;
                fromAmino(object: _38.QueryAppliedPlanRequestAmino): _38.QueryAppliedPlanRequest;
                toAmino(message: _38.QueryAppliedPlanRequest): _38.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _38.QueryAppliedPlanRequestAminoMsg): _38.QueryAppliedPlanRequest;
                toAminoMsg(message: _38.QueryAppliedPlanRequest): _38.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAppliedPlanRequestProtoMsg): _38.QueryAppliedPlanRequest;
                toProto(message: _38.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAppliedPlanRequest): _38.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryAppliedPlanResponse;
                isSDK(o: any): o is _38.QueryAppliedPlanResponseSDKType;
                isAmino(o: any): o is _38.QueryAppliedPlanResponseAmino;
                encode(message: _38.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryAppliedPlanResponse;
                fromJSON(object: any): _38.QueryAppliedPlanResponse;
                toJSON(message: _38.QueryAppliedPlanResponse): import("..").JsonSafe<_38.QueryAppliedPlanResponse>;
                fromPartial(object: Partial<_38.QueryAppliedPlanResponse>): _38.QueryAppliedPlanResponse;
                fromAmino(object: _38.QueryAppliedPlanResponseAmino): _38.QueryAppliedPlanResponse;
                toAmino(message: _38.QueryAppliedPlanResponse): _38.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _38.QueryAppliedPlanResponseAminoMsg): _38.QueryAppliedPlanResponse;
                toAminoMsg(message: _38.QueryAppliedPlanResponse): _38.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAppliedPlanResponseProtoMsg): _38.QueryAppliedPlanResponse;
                toProto(message: _38.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAppliedPlanResponse): _38.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryUpgradedConsensusStateRequest;
                isSDK(o: any): o is _38.QueryUpgradedConsensusStateRequestSDKType;
                isAmino(o: any): o is _38.QueryUpgradedConsensusStateRequestAmino;
                encode(message: _38.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _38.QueryUpgradedConsensusStateRequest;
                toJSON(message: _38.QueryUpgradedConsensusStateRequest): import("..").JsonSafe<_38.QueryUpgradedConsensusStateRequest>;
                fromPartial(object: Partial<_38.QueryUpgradedConsensusStateRequest>): _38.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _38.QueryUpgradedConsensusStateRequestAmino): _38.QueryUpgradedConsensusStateRequest;
                toAmino(message: _38.QueryUpgradedConsensusStateRequest): _38.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _38.QueryUpgradedConsensusStateRequestAminoMsg): _38.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _38.QueryUpgradedConsensusStateRequest): _38.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _38.QueryUpgradedConsensusStateRequestProtoMsg): _38.QueryUpgradedConsensusStateRequest;
                toProto(message: _38.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _38.QueryUpgradedConsensusStateRequest): _38.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryUpgradedConsensusStateResponse;
                isSDK(o: any): o is _38.QueryUpgradedConsensusStateResponseSDKType;
                isAmino(o: any): o is _38.QueryUpgradedConsensusStateResponseAmino;
                encode(message: _38.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _38.QueryUpgradedConsensusStateResponse;
                toJSON(message: _38.QueryUpgradedConsensusStateResponse): import("..").JsonSafe<_38.QueryUpgradedConsensusStateResponse>;
                fromPartial(object: Partial<_38.QueryUpgradedConsensusStateResponse>): _38.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _38.QueryUpgradedConsensusStateResponseAmino): _38.QueryUpgradedConsensusStateResponse;
                toAmino(message: _38.QueryUpgradedConsensusStateResponse): _38.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _38.QueryUpgradedConsensusStateResponseAminoMsg): _38.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _38.QueryUpgradedConsensusStateResponse): _38.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _38.QueryUpgradedConsensusStateResponseProtoMsg): _38.QueryUpgradedConsensusStateResponse;
                toProto(message: _38.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _38.QueryUpgradedConsensusStateResponse): _38.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryModuleVersionsRequest;
                isSDK(o: any): o is _38.QueryModuleVersionsRequestSDKType;
                isAmino(o: any): o is _38.QueryModuleVersionsRequestAmino;
                encode(message: _38.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryModuleVersionsRequest;
                fromJSON(object: any): _38.QueryModuleVersionsRequest;
                toJSON(message: _38.QueryModuleVersionsRequest): import("..").JsonSafe<_38.QueryModuleVersionsRequest>;
                fromPartial(object: Partial<_38.QueryModuleVersionsRequest>): _38.QueryModuleVersionsRequest;
                fromAmino(object: _38.QueryModuleVersionsRequestAmino): _38.QueryModuleVersionsRequest;
                toAmino(message: _38.QueryModuleVersionsRequest): _38.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _38.QueryModuleVersionsRequestAminoMsg): _38.QueryModuleVersionsRequest;
                toAminoMsg(message: _38.QueryModuleVersionsRequest): _38.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryModuleVersionsRequestProtoMsg): _38.QueryModuleVersionsRequest;
                toProto(message: _38.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryModuleVersionsRequest): _38.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryModuleVersionsResponse;
                isSDK(o: any): o is _38.QueryModuleVersionsResponseSDKType;
                isAmino(o: any): o is _38.QueryModuleVersionsResponseAmino;
                encode(message: _38.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryModuleVersionsResponse;
                fromJSON(object: any): _38.QueryModuleVersionsResponse;
                toJSON(message: _38.QueryModuleVersionsResponse): import("..").JsonSafe<_38.QueryModuleVersionsResponse>;
                fromPartial(object: Partial<_38.QueryModuleVersionsResponse>): _38.QueryModuleVersionsResponse;
                fromAmino(object: _38.QueryModuleVersionsResponseAmino): _38.QueryModuleVersionsResponse;
                toAmino(message: _38.QueryModuleVersionsResponse): _38.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _38.QueryModuleVersionsResponseAminoMsg): _38.QueryModuleVersionsResponse;
                toAminoMsg(message: _38.QueryModuleVersionsResponse): _38.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryModuleVersionsResponseProtoMsg): _38.QueryModuleVersionsResponse;
                toProto(message: _38.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryModuleVersionsResponse): _38.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryAuthorityRequest;
                isSDK(o: any): o is _38.QueryAuthorityRequestSDKType;
                isAmino(o: any): o is _38.QueryAuthorityRequestAmino;
                encode(_: _38.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryAuthorityRequest;
                fromJSON(_: any): _38.QueryAuthorityRequest;
                toJSON(_: _38.QueryAuthorityRequest): import("..").JsonSafe<_38.QueryAuthorityRequest>;
                fromPartial(_: Partial<_38.QueryAuthorityRequest>): _38.QueryAuthorityRequest;
                fromAmino(_: _38.QueryAuthorityRequestAmino): _38.QueryAuthorityRequest;
                toAmino(_: _38.QueryAuthorityRequest): _38.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _38.QueryAuthorityRequestAminoMsg): _38.QueryAuthorityRequest;
                toAminoMsg(message: _38.QueryAuthorityRequest): _38.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAuthorityRequestProtoMsg): _38.QueryAuthorityRequest;
                toProto(message: _38.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAuthorityRequest): _38.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _38.QueryAuthorityResponse;
                isSDK(o: any): o is _38.QueryAuthorityResponseSDKType;
                isAmino(o: any): o is _38.QueryAuthorityResponseAmino;
                encode(message: _38.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryAuthorityResponse;
                fromJSON(object: any): _38.QueryAuthorityResponse;
                toJSON(message: _38.QueryAuthorityResponse): import("..").JsonSafe<_38.QueryAuthorityResponse>;
                fromPartial(object: Partial<_38.QueryAuthorityResponse>): _38.QueryAuthorityResponse;
                fromAmino(object: _38.QueryAuthorityResponseAmino): _38.QueryAuthorityResponse;
                toAmino(message: _38.QueryAuthorityResponse): _38.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _38.QueryAuthorityResponseAminoMsg): _38.QueryAuthorityResponse;
                toAminoMsg(message: _38.QueryAuthorityResponse): _38.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAuthorityResponseProtoMsg): _38.QueryAuthorityResponse;
                toProto(message: _38.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAuthorityResponse): _38.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace evm {
        namespace vm {
            const v1: {
                MsgClientImpl: typeof _183.MsgClientImpl;
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        ethereumTx(value: _42.MsgEthereumTx): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                        updateParams(value: _42.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array<ArrayBufferLike>;
                        };
                    };
                    withTypeUrl: {
                        ethereumTx(value: _42.MsgEthereumTx): {
                            typeUrl: string;
                            value: _42.MsgEthereumTx;
                        };
                        updateParams(value: _42.MsgUpdateParams): {
                            typeUrl: string;
                            value: _42.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        ethereumTx(value: _42.MsgEthereumTx): {
                            typeUrl: string;
                            value: {
                                data?: {
                                    $typeUrl?: "/google.protobuf.Any" | string;
                                    typeUrl: string;
                                    value: string;
                                };
                                size: number;
                                hash: string;
                                from: string;
                            };
                        };
                        updateParams(value: _42.MsgUpdateParams): {
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
                                            accessType: _41.AccessType;
                                            accessControlList: string[];
                                        };
                                        call: {
                                            accessType: _41.AccessType;
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
                            value: _42.MsgEthereumTx;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _42.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        ethereumTx(value: _42.MsgEthereumTx): {
                            typeUrl: string;
                            value: _42.MsgEthereumTx;
                        };
                        updateParams(value: _42.MsgUpdateParams): {
                            typeUrl: string;
                            value: _42.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/cosmos.evm.vm.v1.MsgEthereumTx": {
                        aminoType: string;
                        toAmino: (message: _42.MsgEthereumTx) => _42.MsgEthereumTxAmino;
                        fromAmino: (object: _42.MsgEthereumTxAmino) => _42.MsgEthereumTx;
                    };
                    "/cosmos.evm.vm.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _42.MsgUpdateParams) => _42.MsgUpdateParamsAmino;
                        fromAmino: (object: _42.MsgUpdateParamsAmino) => _42.MsgUpdateParams;
                    };
                };
                MsgEthereumTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.MsgEthereumTx;
                    isSDK(o: any): o is _42.MsgEthereumTxSDKType;
                    isAmino(o: any): o is _42.MsgEthereumTxAmino;
                    encode(message: _42.MsgEthereumTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.MsgEthereumTx;
                    fromJSON(object: any): _42.MsgEthereumTx;
                    toJSON(message: _42.MsgEthereumTx): import("..").JsonSafe<_42.MsgEthereumTx>;
                    fromPartial(object: Partial<_42.MsgEthereumTx>): _42.MsgEthereumTx;
                    fromAmino(object: _42.MsgEthereumTxAmino): _42.MsgEthereumTx;
                    toAmino(message: _42.MsgEthereumTx): _42.MsgEthereumTxAmino;
                    fromAminoMsg(object: _42.MsgEthereumTxAminoMsg): _42.MsgEthereumTx;
                    toAminoMsg(message: _42.MsgEthereumTx): _42.MsgEthereumTxAminoMsg;
                    fromProtoMsg(message: _42.MsgEthereumTxProtoMsg): _42.MsgEthereumTx;
                    toProto(message: _42.MsgEthereumTx): Uint8Array;
                    toProtoMsg(message: _42.MsgEthereumTx): _42.MsgEthereumTxProtoMsg;
                };
                LegacyTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.LegacyTx;
                    isSDK(o: any): o is _42.LegacyTxSDKType;
                    isAmino(o: any): o is _42.LegacyTxAmino;
                    encode(message: _42.LegacyTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.LegacyTx;
                    fromJSON(object: any): _42.LegacyTx;
                    toJSON(message: _42.LegacyTx): import("..").JsonSafe<_42.LegacyTx>;
                    fromPartial(object: Partial<_42.LegacyTx>): _42.LegacyTx;
                    fromAmino(object: _42.LegacyTxAmino): _42.LegacyTx;
                    toAmino(message: _42.LegacyTx): _42.LegacyTxAmino;
                    fromAminoMsg(object: _42.LegacyTxAminoMsg): _42.LegacyTx;
                    toAminoMsg(message: _42.LegacyTx): _42.LegacyTxAminoMsg;
                    fromProtoMsg(message: _42.LegacyTxProtoMsg): _42.LegacyTx;
                    toProto(message: _42.LegacyTx): Uint8Array;
                    toProtoMsg(message: _42.LegacyTx): _42.LegacyTxProtoMsg;
                };
                AccessListTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.AccessListTx;
                    isSDK(o: any): o is _42.AccessListTxSDKType;
                    isAmino(o: any): o is _42.AccessListTxAmino;
                    encode(message: _42.AccessListTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.AccessListTx;
                    fromJSON(object: any): _42.AccessListTx;
                    toJSON(message: _42.AccessListTx): import("..").JsonSafe<_42.AccessListTx>;
                    fromPartial(object: Partial<_42.AccessListTx>): _42.AccessListTx;
                    fromAmino(object: _42.AccessListTxAmino): _42.AccessListTx;
                    toAmino(message: _42.AccessListTx): _42.AccessListTxAmino;
                    fromAminoMsg(object: _42.AccessListTxAminoMsg): _42.AccessListTx;
                    toAminoMsg(message: _42.AccessListTx): _42.AccessListTxAminoMsg;
                    fromProtoMsg(message: _42.AccessListTxProtoMsg): _42.AccessListTx;
                    toProto(message: _42.AccessListTx): Uint8Array;
                    toProtoMsg(message: _42.AccessListTx): _42.AccessListTxProtoMsg;
                };
                DynamicFeeTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.DynamicFeeTx;
                    isSDK(o: any): o is _42.DynamicFeeTxSDKType;
                    isAmino(o: any): o is _42.DynamicFeeTxAmino;
                    encode(message: _42.DynamicFeeTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.DynamicFeeTx;
                    fromJSON(object: any): _42.DynamicFeeTx;
                    toJSON(message: _42.DynamicFeeTx): import("..").JsonSafe<_42.DynamicFeeTx>;
                    fromPartial(object: Partial<_42.DynamicFeeTx>): _42.DynamicFeeTx;
                    fromAmino(object: _42.DynamicFeeTxAmino): _42.DynamicFeeTx;
                    toAmino(message: _42.DynamicFeeTx): _42.DynamicFeeTxAmino;
                    fromAminoMsg(object: _42.DynamicFeeTxAminoMsg): _42.DynamicFeeTx;
                    toAminoMsg(message: _42.DynamicFeeTx): _42.DynamicFeeTxAminoMsg;
                    fromProtoMsg(message: _42.DynamicFeeTxProtoMsg): _42.DynamicFeeTx;
                    toProto(message: _42.DynamicFeeTx): Uint8Array;
                    toProtoMsg(message: _42.DynamicFeeTx): _42.DynamicFeeTxProtoMsg;
                };
                ExtensionOptionsEthereumTx: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.ExtensionOptionsEthereumTx;
                    isSDK(o: any): o is _42.ExtensionOptionsEthereumTxSDKType;
                    isAmino(o: any): o is _42.ExtensionOptionsEthereumTxAmino;
                    encode(_: _42.ExtensionOptionsEthereumTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ExtensionOptionsEthereumTx;
                    fromJSON(_: any): _42.ExtensionOptionsEthereumTx;
                    toJSON(_: _42.ExtensionOptionsEthereumTx): import("..").JsonSafe<_42.ExtensionOptionsEthereumTx>;
                    fromPartial(_: Partial<_42.ExtensionOptionsEthereumTx>): _42.ExtensionOptionsEthereumTx;
                    fromAmino(_: _42.ExtensionOptionsEthereumTxAmino): _42.ExtensionOptionsEthereumTx;
                    toAmino(_: _42.ExtensionOptionsEthereumTx): _42.ExtensionOptionsEthereumTxAmino;
                    fromAminoMsg(object: _42.ExtensionOptionsEthereumTxAminoMsg): _42.ExtensionOptionsEthereumTx;
                    toAminoMsg(message: _42.ExtensionOptionsEthereumTx): _42.ExtensionOptionsEthereumTxAminoMsg;
                    fromProtoMsg(message: _42.ExtensionOptionsEthereumTxProtoMsg): _42.ExtensionOptionsEthereumTx;
                    toProto(message: _42.ExtensionOptionsEthereumTx): Uint8Array;
                    toProtoMsg(message: _42.ExtensionOptionsEthereumTx): _42.ExtensionOptionsEthereumTxProtoMsg;
                };
                MsgEthereumTxResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.MsgEthereumTxResponse;
                    isSDK(o: any): o is _42.MsgEthereumTxResponseSDKType;
                    isAmino(o: any): o is _42.MsgEthereumTxResponseAmino;
                    encode(message: _42.MsgEthereumTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.MsgEthereumTxResponse;
                    fromJSON(object: any): _42.MsgEthereumTxResponse;
                    toJSON(message: _42.MsgEthereumTxResponse): import("..").JsonSafe<_42.MsgEthereumTxResponse>;
                    fromPartial(object: Partial<_42.MsgEthereumTxResponse>): _42.MsgEthereumTxResponse;
                    fromAmino(object: _42.MsgEthereumTxResponseAmino): _42.MsgEthereumTxResponse;
                    toAmino(message: _42.MsgEthereumTxResponse): _42.MsgEthereumTxResponseAmino;
                    fromAminoMsg(object: _42.MsgEthereumTxResponseAminoMsg): _42.MsgEthereumTxResponse;
                    toAminoMsg(message: _42.MsgEthereumTxResponse): _42.MsgEthereumTxResponseAminoMsg;
                    fromProtoMsg(message: _42.MsgEthereumTxResponseProtoMsg): _42.MsgEthereumTxResponse;
                    toProto(message: _42.MsgEthereumTxResponse): Uint8Array;
                    toProtoMsg(message: _42.MsgEthereumTxResponse): _42.MsgEthereumTxResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.MsgUpdateParams;
                    isSDK(o: any): o is _42.MsgUpdateParamsSDKType;
                    isAmino(o: any): o is _42.MsgUpdateParamsAmino;
                    encode(message: _42.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.MsgUpdateParams;
                    fromJSON(object: any): _42.MsgUpdateParams;
                    toJSON(message: _42.MsgUpdateParams): import("..").JsonSafe<_42.MsgUpdateParams>;
                    fromPartial(object: Partial<_42.MsgUpdateParams>): _42.MsgUpdateParams;
                    fromAmino(object: _42.MsgUpdateParamsAmino): _42.MsgUpdateParams;
                    toAmino(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _42.MsgUpdateParamsAminoMsg): _42.MsgUpdateParams;
                    toAminoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _42.MsgUpdateParamsProtoMsg): _42.MsgUpdateParams;
                    toProto(message: _42.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _42.MsgUpdateParamsResponse;
                    isSDK(o: any): o is _42.MsgUpdateParamsResponseSDKType;
                    isAmino(o: any): o is _42.MsgUpdateParamsResponseAmino;
                    encode(_: _42.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.MsgUpdateParamsResponse;
                    fromJSON(_: any): _42.MsgUpdateParamsResponse;
                    toJSON(_: _42.MsgUpdateParamsResponse): import("..").JsonSafe<_42.MsgUpdateParamsResponse>;
                    fromPartial(_: Partial<_42.MsgUpdateParamsResponse>): _42.MsgUpdateParamsResponse;
                    fromAmino(_: _42.MsgUpdateParamsResponseAmino): _42.MsgUpdateParamsResponse;
                    toAmino(_: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _42.MsgUpdateParamsResponseAminoMsg): _42.MsgUpdateParamsResponse;
                    toAminoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _42.MsgUpdateParamsResponseProtoMsg): _42.MsgUpdateParamsResponse;
                    toProto(message: _42.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseProtoMsg;
                };
                accessTypeFromJSON(object: any): _41.AccessType;
                accessTypeToJSON(object: _41.AccessType): string;
                AccessType: typeof _41.AccessType;
                AccessTypeSDKType: typeof _41.AccessType;
                AccessTypeAmino: typeof _41.AccessType;
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.Params;
                    isSDK(o: any): o is _41.ParamsSDKType;
                    isAmino(o: any): o is _41.ParamsAmino;
                    encode(message: _41.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.Params;
                    fromJSON(object: any): _41.Params;
                    toJSON(message: _41.Params): import("..").JsonSafe<_41.Params>;
                    fromPartial(object: Partial<_41.Params>): _41.Params;
                    fromAmino(object: _41.ParamsAmino): _41.Params;
                    toAmino(message: _41.Params): _41.ParamsAmino;
                    fromAminoMsg(object: _41.ParamsAminoMsg): _41.Params;
                    toAminoMsg(message: _41.Params): _41.ParamsAminoMsg;
                    fromProtoMsg(message: _41.ParamsProtoMsg): _41.Params;
                    toProto(message: _41.Params): Uint8Array;
                    toProtoMsg(message: _41.Params): _41.ParamsProtoMsg;
                };
                AccessControl: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.AccessControl;
                    isSDK(o: any): o is _41.AccessControlSDKType;
                    isAmino(o: any): o is _41.AccessControlAmino;
                    encode(message: _41.AccessControl, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.AccessControl;
                    fromJSON(object: any): _41.AccessControl;
                    toJSON(message: _41.AccessControl): import("..").JsonSafe<_41.AccessControl>;
                    fromPartial(object: Partial<_41.AccessControl>): _41.AccessControl;
                    fromAmino(object: _41.AccessControlAmino): _41.AccessControl;
                    toAmino(message: _41.AccessControl): _41.AccessControlAmino;
                    fromAminoMsg(object: _41.AccessControlAminoMsg): _41.AccessControl;
                    toAminoMsg(message: _41.AccessControl): _41.AccessControlAminoMsg;
                    fromProtoMsg(message: _41.AccessControlProtoMsg): _41.AccessControl;
                    toProto(message: _41.AccessControl): Uint8Array;
                    toProtoMsg(message: _41.AccessControl): _41.AccessControlProtoMsg;
                };
                AccessControlType: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.AccessControlType;
                    isSDK(o: any): o is _41.AccessControlTypeSDKType;
                    isAmino(o: any): o is _41.AccessControlTypeAmino;
                    encode(message: _41.AccessControlType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.AccessControlType;
                    fromJSON(object: any): _41.AccessControlType;
                    toJSON(message: _41.AccessControlType): import("..").JsonSafe<_41.AccessControlType>;
                    fromPartial(object: Partial<_41.AccessControlType>): _41.AccessControlType;
                    fromAmino(object: _41.AccessControlTypeAmino): _41.AccessControlType;
                    toAmino(message: _41.AccessControlType): _41.AccessControlTypeAmino;
                    fromAminoMsg(object: _41.AccessControlTypeAminoMsg): _41.AccessControlType;
                    toAminoMsg(message: _41.AccessControlType): _41.AccessControlTypeAminoMsg;
                    fromProtoMsg(message: _41.AccessControlTypeProtoMsg): _41.AccessControlType;
                    toProto(message: _41.AccessControlType): Uint8Array;
                    toProtoMsg(message: _41.AccessControlType): _41.AccessControlTypeProtoMsg;
                };
                ChainConfig: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.ChainConfig;
                    isSDK(o: any): o is _41.ChainConfigSDKType;
                    isAmino(o: any): o is _41.ChainConfigAmino;
                    encode(message: _41.ChainConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.ChainConfig;
                    fromJSON(object: any): _41.ChainConfig;
                    toJSON(message: _41.ChainConfig): import("..").JsonSafe<_41.ChainConfig>;
                    fromPartial(object: Partial<_41.ChainConfig>): _41.ChainConfig;
                    fromAmino(object: _41.ChainConfigAmino): _41.ChainConfig;
                    toAmino(message: _41.ChainConfig): _41.ChainConfigAmino;
                    fromAminoMsg(object: _41.ChainConfigAminoMsg): _41.ChainConfig;
                    toAminoMsg(message: _41.ChainConfig): _41.ChainConfigAminoMsg;
                    fromProtoMsg(message: _41.ChainConfigProtoMsg): _41.ChainConfig;
                    toProto(message: _41.ChainConfig): Uint8Array;
                    toProtoMsg(message: _41.ChainConfig): _41.ChainConfigProtoMsg;
                };
                State: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.State;
                    isSDK(o: any): o is _41.StateSDKType;
                    isAmino(o: any): o is _41.StateAmino;
                    encode(message: _41.State, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.State;
                    fromJSON(object: any): _41.State;
                    toJSON(message: _41.State): import("..").JsonSafe<_41.State>;
                    fromPartial(object: Partial<_41.State>): _41.State;
                    fromAmino(object: _41.StateAmino): _41.State;
                    toAmino(message: _41.State): _41.StateAmino;
                    fromAminoMsg(object: _41.StateAminoMsg): _41.State;
                    toAminoMsg(message: _41.State): _41.StateAminoMsg;
                    fromProtoMsg(message: _41.StateProtoMsg): _41.State;
                    toProto(message: _41.State): Uint8Array;
                    toProtoMsg(message: _41.State): _41.StateProtoMsg;
                };
                TransactionLogs: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.TransactionLogs;
                    isSDK(o: any): o is _41.TransactionLogsSDKType;
                    isAmino(o: any): o is _41.TransactionLogsAmino;
                    encode(message: _41.TransactionLogs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.TransactionLogs;
                    fromJSON(object: any): _41.TransactionLogs;
                    toJSON(message: _41.TransactionLogs): import("..").JsonSafe<_41.TransactionLogs>;
                    fromPartial(object: Partial<_41.TransactionLogs>): _41.TransactionLogs;
                    fromAmino(object: _41.TransactionLogsAmino): _41.TransactionLogs;
                    toAmino(message: _41.TransactionLogs): _41.TransactionLogsAmino;
                    fromAminoMsg(object: _41.TransactionLogsAminoMsg): _41.TransactionLogs;
                    toAminoMsg(message: _41.TransactionLogs): _41.TransactionLogsAminoMsg;
                    fromProtoMsg(message: _41.TransactionLogsProtoMsg): _41.TransactionLogs;
                    toProto(message: _41.TransactionLogs): Uint8Array;
                    toProtoMsg(message: _41.TransactionLogs): _41.TransactionLogsProtoMsg;
                };
                Log: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.Log;
                    isSDK(o: any): o is _41.LogSDKType;
                    isAmino(o: any): o is _41.LogAmino;
                    encode(message: _41.Log, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.Log;
                    fromJSON(object: any): _41.Log;
                    toJSON(message: _41.Log): import("..").JsonSafe<_41.Log>;
                    fromPartial(object: Partial<_41.Log>): _41.Log;
                    fromAmino(object: _41.LogAmino): _41.Log;
                    toAmino(message: _41.Log): _41.LogAmino;
                    fromAminoMsg(object: _41.LogAminoMsg): _41.Log;
                    toAminoMsg(message: _41.Log): _41.LogAminoMsg;
                    fromProtoMsg(message: _41.LogProtoMsg): _41.Log;
                    toProto(message: _41.Log): Uint8Array;
                    toProtoMsg(message: _41.Log): _41.LogProtoMsg;
                };
                TxResult: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.TxResult;
                    isSDK(o: any): o is _41.TxResultSDKType;
                    isAmino(o: any): o is _41.TxResultAmino;
                    encode(message: _41.TxResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.TxResult;
                    fromJSON(object: any): _41.TxResult;
                    toJSON(message: _41.TxResult): import("..").JsonSafe<_41.TxResult>;
                    fromPartial(object: Partial<_41.TxResult>): _41.TxResult;
                    fromAmino(object: _41.TxResultAmino): _41.TxResult;
                    toAmino(message: _41.TxResult): _41.TxResultAmino;
                    fromAminoMsg(object: _41.TxResultAminoMsg): _41.TxResult;
                    toAminoMsg(message: _41.TxResult): _41.TxResultAminoMsg;
                    fromProtoMsg(message: _41.TxResultProtoMsg): _41.TxResult;
                    toProto(message: _41.TxResult): Uint8Array;
                    toProtoMsg(message: _41.TxResult): _41.TxResultProtoMsg;
                };
                AccessTuple: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.AccessTuple;
                    isSDK(o: any): o is _41.AccessTupleSDKType;
                    isAmino(o: any): o is _41.AccessTupleAmino;
                    encode(message: _41.AccessTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.AccessTuple;
                    fromJSON(object: any): _41.AccessTuple;
                    toJSON(message: _41.AccessTuple): import("..").JsonSafe<_41.AccessTuple>;
                    fromPartial(object: Partial<_41.AccessTuple>): _41.AccessTuple;
                    fromAmino(object: _41.AccessTupleAmino): _41.AccessTuple;
                    toAmino(message: _41.AccessTuple): _41.AccessTupleAmino;
                    fromAminoMsg(object: _41.AccessTupleAminoMsg): _41.AccessTuple;
                    toAminoMsg(message: _41.AccessTuple): _41.AccessTupleAminoMsg;
                    fromProtoMsg(message: _41.AccessTupleProtoMsg): _41.AccessTuple;
                    toProto(message: _41.AccessTuple): Uint8Array;
                    toProtoMsg(message: _41.AccessTuple): _41.AccessTupleProtoMsg;
                };
                TraceConfig: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _41.TraceConfig;
                    isSDK(o: any): o is _41.TraceConfigSDKType;
                    isAmino(o: any): o is _41.TraceConfigAmino;
                    encode(message: _41.TraceConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.TraceConfig;
                    fromJSON(object: any): _41.TraceConfig;
                    toJSON(message: _41.TraceConfig): import("..").JsonSafe<_41.TraceConfig>;
                    fromPartial(object: Partial<_41.TraceConfig>): _41.TraceConfig;
                    fromAmino(object: _41.TraceConfigAmino): _41.TraceConfig;
                    toAmino(message: _41.TraceConfig): _41.TraceConfigAmino;
                    fromAminoMsg(object: _41.TraceConfigAminoMsg): _41.TraceConfig;
                    toAminoMsg(message: _41.TraceConfig): _41.TraceConfigAminoMsg;
                    fromProtoMsg(message: _41.TraceConfigProtoMsg): _41.TraceConfig;
                    toProto(message: _41.TraceConfig): Uint8Array;
                    toProtoMsg(message: _41.TraceConfig): _41.TraceConfigProtoMsg;
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
                    v1beta1: _177.MsgClientImpl;
                };
                bank: {
                    v1beta1: _178.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _179.MsgClientImpl;
                };
                gov: {
                    v1beta1: _180.MsgClientImpl;
                };
                staking: {
                    v1beta1: _181.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _182.MsgClientImpl;
                };
                evm: {
                    vm: {
                        v1: _183.MsgClientImpl;
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
                gov: {
                    v1beta1: {
                        proposal(request: _29.QueryProposalRequest): Promise<_29.QueryProposalResponse>;
                        proposals(request: _29.QueryProposalsRequest): Promise<_29.QueryProposalsResponse>;
                        vote(request: _29.QueryVoteRequest): Promise<_29.QueryVoteResponse>;
                        votes(request: _29.QueryVotesRequest): Promise<_29.QueryVotesResponse>;
                        params(request: _29.QueryParamsRequest): Promise<_29.QueryParamsResponse>;
                        deposit(request: _29.QueryDepositRequest): Promise<_29.QueryDepositResponse>;
                        deposits(request: _29.QueryDepositsRequest): Promise<_29.QueryDepositsResponse>;
                        tallyResult(request: _29.QueryTallyResultRequest): Promise<_29.QueryTallyResultResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _36.SimulateRequest): Promise<_36.SimulateResponse>;
                        getTx(request: _36.GetTxRequest): Promise<_36.GetTxResponse>;
                        broadcastTx(request: _36.BroadcastTxRequest): Promise<_36.BroadcastTxResponse>;
                        getTxsEvent(request: _36.GetTxsEventRequest): Promise<_36.GetTxsEventResponse>;
                        getBlockWithTxs(request: _36.GetBlockWithTxsRequest): Promise<_36.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _38.QueryCurrentPlanRequest): Promise<_38.QueryCurrentPlanResponse>;
                        appliedPlan(request: _38.QueryAppliedPlanRequest): Promise<_38.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _38.QueryUpgradedConsensusStateRequest): Promise<_38.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _38.QueryModuleVersionsRequest): Promise<_38.QueryModuleVersionsResponse>;
                        authority(request?: _38.QueryAuthorityRequest): Promise<_38.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
