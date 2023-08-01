import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export declare enum Action {
    ActionAutoTxAuthz = 0,
    ActionAutoTxWasm = 1,
    ActionGovernanceVote = 2,
    ActionDelegateStake = 3,
    UNRECOGNIZED = -1
}
export declare const ActionSDKType: typeof Action;
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
    /** address of recipient */
    address: string;
    /** total initial claimable amount for the address */
    initialClaimableAmount: Coin[];
    /** index of status array refers to action enum # */
    status: Status[];
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
    address: string;
    initial_claimable_amount: CoinSDKType[];
    status: StatusSDKType[];
}
/** Status contains for an action if it is completed and claimed */
export interface Status {
    /** true if action is completed */
    actionCompleted: boolean;
    /**
     * true if action is completed
     * index refers to the 4 vesting periods for the given action
     */
    vestingPeriodCompleted: boolean[];
    /**
     * true if action is completed
     * index refers to the 4 vesting periods for the given action
     */
    vestingPeriodClaimed: boolean[];
}
/** Status contains for an action if it is completed and claimed */
export interface StatusSDKType {
    action_completed: boolean;
    vesting_period_completed: boolean[];
    vesting_period_claimed: boolean[];
}
export interface MsgClaimClaimable {
    sender: string;
}
export interface MsgClaimClaimableSDKType {
    sender: string;
}
export interface MsgClaimClaimableResponse {
    /** returned claimable amount for the address */
    claimedAmount: Coin[];
}
export interface MsgClaimClaimableResponseSDKType {
    claimed_amount: CoinSDKType[];
}
export declare const ClaimRecord: {
    encode(message: ClaimRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord;
    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord;
};
export declare const Status: {
    encode(message: Status, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Status;
    fromPartial(object: DeepPartial<Status>): Status;
};
export declare const MsgClaimClaimable: {
    encode(message: MsgClaimClaimable, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimClaimable;
    fromPartial(object: DeepPartial<MsgClaimClaimable>): MsgClaimClaimable;
};
export declare const MsgClaimClaimableResponse: {
    encode(message: MsgClaimClaimableResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimClaimableResponse;
    fromPartial(object: DeepPartial<MsgClaimClaimableResponse>): MsgClaimClaimableResponse;
};
