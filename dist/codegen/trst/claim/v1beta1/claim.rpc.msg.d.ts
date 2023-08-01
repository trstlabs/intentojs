import { Rpc } from "../../../helpers";
import { MsgClaimClaimable, MsgClaimClaimableResponse } from "./claim";
/** Msg defines the Msg service. */
export interface Msg {
    claimClaimable(request: MsgClaimClaimable): Promise<MsgClaimClaimableResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimClaimable(request: MsgClaimClaimable): Promise<MsgClaimClaimableResponse>;
}
