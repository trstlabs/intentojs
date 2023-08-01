import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator;
    totalVotingPower: bigint;
}
export interface ValidatorSetSDKType {
    validators: ValidatorSDKType[];
    proposer: ValidatorSDKType;
    total_voting_power: bigint;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey;
    votingPower: bigint;
    proposerPriority: bigint;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    pub_key: PublicKeySDKType;
    voting_power: bigint;
    proposer_priority: bigint;
}
export interface SimpleValidator {
    pubKey: PublicKey;
    votingPower: bigint;
}
export interface SimpleValidatorSDKType {
    pub_key: PublicKeySDKType;
    voting_power: bigint;
}
export declare const ValidatorSet: {
    encode(message: ValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet;
    fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet;
};
export declare const Validator: {
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const SimpleValidator: {
    encode(message: SimpleValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator;
    fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator;
};
