import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, TextProposal, TextProposalProtoMsg, TextProposalSDKType } from "./gov";
import { CommunityPoolSpendProposal, CommunityPoolSpendProposalProtoMsg, CommunityPoolSpendProposalSDKType, CommunityPoolSpendProposalWithDeposit, CommunityPoolSpendProposalWithDepositProtoMsg, CommunityPoolSpendProposalWithDepositSDKType } from "../../distribution/v1beta1/distribution";
import { SoftwareUpgradeProposal, SoftwareUpgradeProposalProtoMsg, SoftwareUpgradeProposalSDKType, CancelSoftwareUpgradeProposal, CancelSoftwareUpgradeProposalProtoMsg, CancelSoftwareUpgradeProposalSDKType } from "../../upgrade/v1beta1/upgrade";
import { StoreCodeProposal as StoreCodeProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreCodeProposalProtoMsg as StoreCodeProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreCodeProposalSDKType as StoreCodeProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContractProposal as InstantiateContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContractProposalProtoMsg as InstantiateContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContractProposalSDKType as InstantiateContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContract2Proposal as InstantiateContract2Proposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContract2ProposalProtoMsg as InstantiateContract2Proposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { InstantiateContract2ProposalSDKType as InstantiateContract2Proposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { MigrateContractProposal as MigrateContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { MigrateContractProposalProtoMsg as MigrateContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { MigrateContractProposalSDKType as MigrateContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { SudoContractProposal as SudoContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { SudoContractProposalProtoMsg as SudoContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { SudoContractProposalSDKType as SudoContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { ExecuteContractProposal as ExecuteContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { ExecuteContractProposalProtoMsg as ExecuteContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { ExecuteContractProposalSDKType as ExecuteContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateAdminProposal as UpdateAdminProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateAdminProposalProtoMsg as UpdateAdminProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateAdminProposalSDKType as UpdateAdminProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { ClearAdminProposal as ClearAdminProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { ClearAdminProposalProtoMsg as ClearAdminProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { ClearAdminProposalSDKType as ClearAdminProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { PinCodesProposal as PinCodesProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { PinCodesProposalProtoMsg as PinCodesProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { PinCodesProposalSDKType as PinCodesProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UnpinCodesProposal as UnpinCodesProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { UnpinCodesProposalProtoMsg as UnpinCodesProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UnpinCodesProposalSDKType as UnpinCodesProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateInstantiateConfigProposal as UpdateInstantiateConfigProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateInstantiateConfigProposalProtoMsg as UpdateInstantiateConfigProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { UpdateInstantiateConfigProposalSDKType as UpdateInstantiateConfigProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreAndInstantiateContractProposal as StoreAndInstantiateContractProposal1 } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreAndInstantiateContractProposalProtoMsg as StoreAndInstantiateContractProposal1ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal";
import { StoreAndInstantiateContractProposalSDKType as StoreAndInstantiateContractProposal1SDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { ClientUpdateProposal, ClientUpdateProposalProtoMsg, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalProtoMsg, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { StoreCodeProposal as StoreCodeProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreCodeProposalProtoMsg as StoreCodeProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreCodeProposalSDKType as StoreCodeProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContractProposal as InstantiateContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContractProposalProtoMsg as InstantiateContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContractProposalSDKType as InstantiateContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2Proposal as InstantiateContract2Proposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2ProposalProtoMsg as InstantiateContract2Proposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { InstantiateContract2ProposalSDKType as InstantiateContract2Proposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { MigrateContractProposal as MigrateContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { MigrateContractProposalProtoMsg as MigrateContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { MigrateContractProposalSDKType as MigrateContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SudoContractProposal as SudoContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SudoContractProposalProtoMsg as SudoContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { SudoContractProposalSDKType as SudoContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposal as ExecuteContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposalProtoMsg as ExecuteContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ExecuteContractProposalSDKType as ExecuteContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateAdminProposal as UpdateAdminProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateAdminProposalProtoMsg as UpdateAdminProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateAdminProposalSDKType as UpdateAdminProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClearAdminProposal as ClearAdminProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClearAdminProposalProtoMsg as ClearAdminProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { ClearAdminProposalSDKType as ClearAdminProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { PinCodesProposal as PinCodesProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { PinCodesProposalProtoMsg as PinCodesProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { PinCodesProposalSDKType as PinCodesProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnpinCodesProposal as UnpinCodesProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnpinCodesProposalProtoMsg as UnpinCodesProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UnpinCodesProposalSDKType as UnpinCodesProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposal as UpdateInstantiateConfigProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposalProtoMsg as UpdateInstantiateConfigProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { UpdateInstantiateConfigProposalSDKType as UpdateInstantiateConfigProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreAndInstantiateContractProposal as StoreAndInstantiateContractProposal2 } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreAndInstantiateContractProposalProtoMsg as StoreAndInstantiateContractProposal2ProtoMsg } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { StoreAndInstantiateContractProposalSDKType as StoreAndInstantiateContractProposal2SDKType } from "../../../cosmwasm/wasm/v1/proposal_legacy";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    content?: CommunityPoolSpendProposal | CommunityPoolSpendProposalWithDeposit | TextProposal | SoftwareUpgradeProposal | CancelSoftwareUpgradeProposal | StoreCodeProposal1 | InstantiateContractProposal1 | InstantiateContract2Proposal1 | MigrateContractProposal1 | SudoContractProposal1 | ExecuteContractProposal1 | UpdateAdminProposal1 | ClearAdminProposal1 | PinCodesProposal1 | UnpinCodesProposal1 | UpdateInstantiateConfigProposal1 | StoreAndInstantiateContractProposal1 | ClientUpdateProposal | UpgradeProposal | StoreCodeProposal2 | InstantiateContractProposal2 | InstantiateContract2Proposal2 | MigrateContractProposal2 | SudoContractProposal2 | ExecuteContractProposal2 | UpdateAdminProposal2 | ClearAdminProposal2 | PinCodesProposal2 | UnpinCodesProposal2 | UpdateInstantiateConfigProposal2 | StoreAndInstantiateContractProposal2 | Any | undefined;
    initialDeposit: Coin[];
    proposer: string;
}
export interface MsgSubmitProposalProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
    value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "content"> & {
    content?: CommunityPoolSpendProposalProtoMsg | CommunityPoolSpendProposalWithDepositProtoMsg | TextProposalProtoMsg | SoftwareUpgradeProposalProtoMsg | CancelSoftwareUpgradeProposalProtoMsg | StoreCodeProposal1ProtoMsg | InstantiateContractProposal1ProtoMsg | InstantiateContract2Proposal1ProtoMsg | MigrateContractProposal1ProtoMsg | SudoContractProposal1ProtoMsg | ExecuteContractProposal1ProtoMsg | UpdateAdminProposal1ProtoMsg | ClearAdminProposal1ProtoMsg | PinCodesProposal1ProtoMsg | UnpinCodesProposal1ProtoMsg | UpdateInstantiateConfigProposal1ProtoMsg | StoreAndInstantiateContractProposal1ProtoMsg | ClientUpdateProposalProtoMsg | UpgradeProposalProtoMsg | StoreCodeProposal2ProtoMsg | InstantiateContractProposal2ProtoMsg | InstantiateContract2Proposal2ProtoMsg | MigrateContractProposal2ProtoMsg | SudoContractProposal2ProtoMsg | ExecuteContractProposal2ProtoMsg | UpdateAdminProposal2ProtoMsg | ClearAdminProposal2ProtoMsg | PinCodesProposal2ProtoMsg | UnpinCodesProposal2ProtoMsg | UpdateInstantiateConfigProposal2ProtoMsg | StoreAndInstantiateContractProposal2ProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
    content?: AnyAmino;
    initial_deposit?: CoinAmino[];
    proposer?: string;
}
export interface MsgSubmitProposalAminoMsg {
    type: "cosmos-sdk/MsgSubmitProposal";
    value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
    content?: CommunityPoolSpendProposalSDKType | CommunityPoolSpendProposalWithDepositSDKType | TextProposalSDKType | SoftwareUpgradeProposalSDKType | CancelSoftwareUpgradeProposalSDKType | StoreCodeProposal1SDKType | InstantiateContractProposal1SDKType | InstantiateContract2Proposal1SDKType | MigrateContractProposal1SDKType | SudoContractProposal1SDKType | ExecuteContractProposal1SDKType | UpdateAdminProposal1SDKType | ClearAdminProposal1SDKType | PinCodesProposal1SDKType | UnpinCodesProposal1SDKType | UpdateInstantiateConfigProposal1SDKType | StoreAndInstantiateContractProposal1SDKType | ClientUpdateProposalSDKType | UpgradeProposalSDKType | StoreCodeProposal2SDKType | InstantiateContractProposal2SDKType | InstantiateContract2Proposal2SDKType | MigrateContractProposal2SDKType | SudoContractProposal2SDKType | ExecuteContractProposal2SDKType | UpdateAdminProposal2SDKType | ClearAdminProposal2SDKType | PinCodesProposal2SDKType | UnpinCodesProposal2SDKType | UpdateInstantiateConfigProposal2SDKType | StoreAndInstantiateContractProposal2SDKType | AnySDKType | undefined;
    initial_deposit: CoinSDKType[];
    proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
    value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
    proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitProposalResponse";
    value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    proposal_id: bigint;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposalId: bigint;
    voter: string;
    option: VoteOption;
}
export interface MsgVoteProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote";
    value: Uint8Array;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
    proposal_id?: string;
    voter?: string;
    option?: VoteOption;
}
export interface MsgVoteAminoMsg {
    type: "cosmos-sdk/MsgVote";
    value: MsgVoteAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
    proposal_id: bigint;
    voter: string;
    option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
}
export interface MsgVoteResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse";
    value: Uint8Array;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {
}
export interface MsgVoteResponseAminoMsg {
    type: "cosmos-sdk/MsgVoteResponse";
    value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
    proposalId: bigint;
    voter: string;
    options: WeightedVoteOption[];
}
export interface MsgVoteWeightedProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted";
    value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedAmino {
    proposal_id: string;
    voter?: string;
    options?: WeightedVoteOptionAmino[];
}
export interface MsgVoteWeightedAminoMsg {
    type: "cosmos-sdk/MsgVoteWeighted";
    value: MsgVoteWeightedAmino;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedSDKType {
    proposal_id: bigint;
    voter: string;
    options: WeightedVoteOptionSDKType[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {
}
export interface MsgVoteWeightedResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
    value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseAmino {
}
export interface MsgVoteWeightedResponseAminoMsg {
    type: "cosmos-sdk/MsgVoteWeightedResponse";
    value: MsgVoteWeightedResponseAmino;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseSDKType {
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposalId: bigint;
    depositor: string;
    amount: Coin[];
}
export interface MsgDepositProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
    value: Uint8Array;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
    proposal_id: string;
    depositor?: string;
    amount?: CoinAmino[];
}
export interface MsgDepositAminoMsg {
    type: "cosmos-sdk/MsgDeposit";
    value: MsgDepositAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
    proposal_id: bigint;
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
export interface MsgDepositResponseProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse";
    value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {
}
export interface MsgDepositResponseAminoMsg {
    type: "cosmos-sdk/MsgDepositResponse";
    value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
export declare const MsgSubmitProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitProposal;
    isSDK(o: any): o is MsgSubmitProposalSDKType;
    isAmino(o: any): o is MsgSubmitProposalAmino;
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): unknown;
    fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal;
    fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal;
    toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino;
    fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal;
    toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal;
    toProto(message: MsgSubmitProposal): Uint8Array;
    toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg;
};
export declare const MsgSubmitProposalResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitProposalResponse;
    isSDK(o: any): o is MsgSubmitProposalResponseSDKType;
    isAmino(o: any): o is MsgSubmitProposalResponseAmino;
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): unknown;
    fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
    fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse;
    toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino;
    fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse;
    toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse;
    toProto(message: MsgSubmitProposalResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg;
};
export declare const MsgVote: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgVote;
    isSDK(o: any): o is MsgVoteSDKType;
    isAmino(o: any): o is MsgVoteAmino;
    encode(message: MsgVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVote;
    fromJSON(object: any): MsgVote;
    toJSON(message: MsgVote): unknown;
    fromPartial(object: Partial<MsgVote>): MsgVote;
    fromAmino(object: MsgVoteAmino): MsgVote;
    toAmino(message: MsgVote): MsgVoteAmino;
    fromAminoMsg(object: MsgVoteAminoMsg): MsgVote;
    toAminoMsg(message: MsgVote): MsgVoteAminoMsg;
    fromProtoMsg(message: MsgVoteProtoMsg): MsgVote;
    toProto(message: MsgVote): Uint8Array;
    toProtoMsg(message: MsgVote): MsgVoteProtoMsg;
};
export declare const MsgVoteResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgVoteResponse;
    isSDK(o: any): o is MsgVoteResponseSDKType;
    isAmino(o: any): o is MsgVoteResponseAmino;
    encode(_: MsgVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse;
    fromJSON(_: any): MsgVoteResponse;
    toJSON(_: MsgVoteResponse): unknown;
    fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse;
    fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse;
    toAmino(_: MsgVoteResponse): MsgVoteResponseAmino;
    fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse;
    toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg;
    fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse;
    toProto(message: MsgVoteResponse): Uint8Array;
    toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg;
};
export declare const MsgVoteWeighted: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgVoteWeighted;
    isSDK(o: any): o is MsgVoteWeightedSDKType;
    isAmino(o: any): o is MsgVoteWeightedAmino;
    encode(message: MsgVoteWeighted, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted;
    fromJSON(object: any): MsgVoteWeighted;
    toJSON(message: MsgVoteWeighted): unknown;
    fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted;
    fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted;
    toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino;
    fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted;
    toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg;
    fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted;
    toProto(message: MsgVoteWeighted): Uint8Array;
    toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg;
};
export declare const MsgVoteWeightedResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgVoteWeightedResponse;
    isSDK(o: any): o is MsgVoteWeightedResponseSDKType;
    isAmino(o: any): o is MsgVoteWeightedResponseAmino;
    encode(_: MsgVoteWeightedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromJSON(_: any): MsgVoteWeightedResponse;
    toJSON(_: MsgVoteWeightedResponse): unknown;
    fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse;
    fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse;
    toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino;
    fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse;
    toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg;
    fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse;
    toProto(message: MsgVoteWeightedResponse): Uint8Array;
    toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg;
};
export declare const MsgDeposit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDeposit;
    isSDK(o: any): o is MsgDepositSDKType;
    isAmino(o: any): o is MsgDepositAmino;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): unknown;
    fromPartial(object: Partial<MsgDeposit>): MsgDeposit;
    fromAmino(object: MsgDepositAmino): MsgDeposit;
    toAmino(message: MsgDeposit): MsgDepositAmino;
    fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit;
    toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg;
    fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit;
    toProto(message: MsgDeposit): Uint8Array;
    toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDepositResponse;
    isSDK(o: any): o is MsgDepositResponseSDKType;
    isAmino(o: any): o is MsgDepositResponseAmino;
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(_: any): MsgDepositResponse;
    toJSON(_: MsgDepositResponse): unknown;
    fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse;
    fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse;
    toAmino(_: MsgDepositResponse): MsgDepositResponseAmino;
    fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse;
    toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg;
    fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse;
    toProto(message: MsgDepositResponse): Uint8Array;
    toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg;
};
