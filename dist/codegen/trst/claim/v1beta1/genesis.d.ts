import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { ClaimRecord, ClaimRecordSDKType } from "./claim";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the claim module's genesis state. */
export interface GenesisState {
    /** balance of the claim module's account */
    moduleAccountBalance: Coin;
    /** params defines all the parameters of the module. */
    params: Params;
    /** list of claim records, one for every airdrop recipient */
    claimRecords: ClaimRecord[];
}
/** GenesisState defines the claim module's genesis state. */
export interface GenesisStateSDKType {
    module_account_balance: CoinSDKType;
    params: ParamsSDKType;
    claim_records: ClaimRecordSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
