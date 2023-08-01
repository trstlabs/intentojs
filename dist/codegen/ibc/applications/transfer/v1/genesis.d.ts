import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    portId: string;
    denomTraces: DenomTrace[];
    params: Params;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateSDKType {
    port_id: string;
    denom_traces: DenomTraceSDKType[];
    params: ParamsSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
