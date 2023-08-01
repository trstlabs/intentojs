import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionSDKType } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    content: Any;
    initialDeposit: Coin[];
    proposer: string;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
    content: AnySDKType;
    initial_deposit: CoinSDKType[];
    proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: bigint;
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
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
    proposal_id: bigint;
    voter: string;
    option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {
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
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
    proposal_id: bigint;
    depositor: string;
    amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {
}
export declare const MsgSubmitProposal: {
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal;
    fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse;
};
export declare const MsgVote: {
    encode(message: MsgVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVote;
    fromPartial(object: DeepPartial<MsgVote>): MsgVote;
};
export declare const MsgVoteResponse: {
    encode(_: MsgVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse;
    fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse;
};
export declare const MsgVoteWeighted: {
    encode(message: MsgVoteWeighted, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted;
    fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted;
};
export declare const MsgVoteWeightedResponse: {
    encode(_: MsgVoteWeightedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse;
    fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse;
};
export declare const MsgDeposit: {
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit;
    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit;
};
export declare const MsgDepositResponse: {
    encode(_: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse;
    fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse;
};
