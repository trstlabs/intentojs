import { Header, HeaderAmino, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsAmino, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsAmino, ValidatorParamsSDKType, VersionParams, VersionParamsAmino, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare const CheckTxTypeSDKType: typeof CheckTxType;
export declare const CheckTxTypeAmino: typeof CheckTxType;
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseOfferSnapshot_ResultSDKType: typeof ResponseOfferSnapshot_Result;
export declare const ResponseOfferSnapshot_ResultAmino: typeof ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare const ResponseApplySnapshotChunk_ResultSDKType: typeof ResponseApplySnapshotChunk_Result;
export declare const ResponseApplySnapshotChunk_ResultAmino: typeof ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare const EvidenceTypeSDKType: typeof EvidenceType;
export declare const EvidenceTypeAmino: typeof EvidenceType;
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    setOption?: RequestSetOption;
    initChain?: RequestInitChain;
    query?: RequestQuery;
    beginBlock?: RequestBeginBlock;
    checkTx?: RequestCheckTx;
    deliverTx?: RequestDeliverTx;
    endBlock?: RequestEndBlock;
    commit?: RequestCommit;
    listSnapshots?: RequestListSnapshots;
    offerSnapshot?: RequestOfferSnapshot;
    loadSnapshotChunk?: RequestLoadSnapshotChunk;
    applySnapshotChunk?: RequestApplySnapshotChunk;
}
export interface RequestProtoMsg {
    typeUrl: "/tendermint.abci.Request";
    value: Uint8Array;
}
export interface RequestAmino {
    echo?: RequestEchoAmino;
    flush?: RequestFlushAmino;
    info?: RequestInfoAmino;
    set_option?: RequestSetOptionAmino;
    init_chain?: RequestInitChainAmino;
    query?: RequestQueryAmino;
    begin_block?: RequestBeginBlockAmino;
    check_tx?: RequestCheckTxAmino;
    deliver_tx?: RequestDeliverTxAmino;
    end_block?: RequestEndBlockAmino;
    commit?: RequestCommitAmino;
    list_snapshots?: RequestListSnapshotsAmino;
    offer_snapshot?: RequestOfferSnapshotAmino;
    load_snapshot_chunk?: RequestLoadSnapshotChunkAmino;
    apply_snapshot_chunk?: RequestApplySnapshotChunkAmino;
}
export interface RequestAminoMsg {
    type: "/tendermint.abci.Request";
    value: RequestAmino;
}
export interface RequestSDKType {
    echo?: RequestEchoSDKType;
    flush?: RequestFlushSDKType;
    info?: RequestInfoSDKType;
    set_option?: RequestSetOptionSDKType;
    init_chain?: RequestInitChainSDKType;
    query?: RequestQuerySDKType;
    begin_block?: RequestBeginBlockSDKType;
    check_tx?: RequestCheckTxSDKType;
    deliver_tx?: RequestDeliverTxSDKType;
    end_block?: RequestEndBlockSDKType;
    commit?: RequestCommitSDKType;
    list_snapshots?: RequestListSnapshotsSDKType;
    offer_snapshot?: RequestOfferSnapshotSDKType;
    load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
}
export interface RequestEcho {
    message: string;
}
export interface RequestEchoProtoMsg {
    typeUrl: "/tendermint.abci.RequestEcho";
    value: Uint8Array;
}
export interface RequestEchoAmino {
    message?: string;
}
export interface RequestEchoAminoMsg {
    type: "/tendermint.abci.RequestEcho";
    value: RequestEchoAmino;
}
export interface RequestEchoSDKType {
    message: string;
}
export interface RequestFlush {
}
export interface RequestFlushProtoMsg {
    typeUrl: "/tendermint.abci.RequestFlush";
    value: Uint8Array;
}
export interface RequestFlushAmino {
}
export interface RequestFlushAminoMsg {
    type: "/tendermint.abci.RequestFlush";
    value: RequestFlushAmino;
}
export interface RequestFlushSDKType {
}
export interface RequestInfo {
    version: string;
    blockVersion: bigint;
    p2pVersion: bigint;
}
export interface RequestInfoProtoMsg {
    typeUrl: "/tendermint.abci.RequestInfo";
    value: Uint8Array;
}
export interface RequestInfoAmino {
    version?: string;
    block_version?: string;
    p2p_version?: string;
}
export interface RequestInfoAminoMsg {
    type: "/tendermint.abci.RequestInfo";
    value: RequestInfoAmino;
}
export interface RequestInfoSDKType {
    version: string;
    block_version: bigint;
    p2p_version: bigint;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestSetOptionProtoMsg {
    typeUrl: "/tendermint.abci.RequestSetOption";
    value: Uint8Array;
}
/** nondeterministic */
export interface RequestSetOptionAmino {
    key?: string;
    value?: string;
}
export interface RequestSetOptionAminoMsg {
    type: "/tendermint.abci.RequestSetOption";
    value: RequestSetOptionAmino;
}
/** nondeterministic */
export interface RequestSetOptionSDKType {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time: Date;
    chainId: string;
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: bigint;
}
export interface RequestInitChainProtoMsg {
    typeUrl: "/tendermint.abci.RequestInitChain";
    value: Uint8Array;
}
export interface RequestInitChainAmino {
    time?: string;
    chain_id?: string;
    consensus_params?: ConsensusParamsAmino;
    validators?: ValidatorUpdateAmino[];
    app_state_bytes?: string;
    initial_height?: string;
}
export interface RequestInitChainAminoMsg {
    type: "/tendermint.abci.RequestInitChain";
    value: RequestInitChainAmino;
}
export interface RequestInitChainSDKType {
    time: Date;
    chain_id: string;
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_state_bytes: Uint8Array;
    initial_height: bigint;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestQueryProtoMsg {
    typeUrl: "/tendermint.abci.RequestQuery";
    value: Uint8Array;
}
export interface RequestQueryAmino {
    data?: string;
    path?: string;
    height?: string;
    prove?: boolean;
}
export interface RequestQueryAminoMsg {
    type: "/tendermint.abci.RequestQuery";
    value: RequestQueryAmino;
}
export interface RequestQuerySDKType {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header;
    lastCommitInfo: LastCommitInfo;
    byzantineValidators: Evidence[];
}
export interface RequestBeginBlockProtoMsg {
    typeUrl: "/tendermint.abci.RequestBeginBlock";
    value: Uint8Array;
}
export interface RequestBeginBlockAmino {
    hash?: string;
    header?: HeaderAmino;
    last_commit_info?: LastCommitInfoAmino;
    byzantine_validators?: EvidenceAmino[];
}
export interface RequestBeginBlockAminoMsg {
    type: "/tendermint.abci.RequestBeginBlock";
    value: RequestBeginBlockAmino;
}
export interface RequestBeginBlockSDKType {
    hash: Uint8Array;
    header: HeaderSDKType;
    last_commit_info: LastCommitInfoSDKType;
    byzantine_validators: EvidenceSDKType[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
    typeUrl: "/tendermint.abci.RequestCheckTx";
    value: Uint8Array;
}
export interface RequestCheckTxAmino {
    tx?: string;
    type?: CheckTxType;
}
export interface RequestCheckTxAminoMsg {
    type: "/tendermint.abci.RequestCheckTx";
    value: RequestCheckTxAmino;
}
export interface RequestCheckTxSDKType {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestDeliverTxProtoMsg {
    typeUrl: "/tendermint.abci.RequestDeliverTx";
    value: Uint8Array;
}
export interface RequestDeliverTxAmino {
    tx?: string;
}
export interface RequestDeliverTxAminoMsg {
    type: "/tendermint.abci.RequestDeliverTx";
    value: RequestDeliverTxAmino;
}
export interface RequestDeliverTxSDKType {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: bigint;
}
export interface RequestEndBlockProtoMsg {
    typeUrl: "/tendermint.abci.RequestEndBlock";
    value: Uint8Array;
}
export interface RequestEndBlockAmino {
    height?: string;
}
export interface RequestEndBlockAminoMsg {
    type: "/tendermint.abci.RequestEndBlock";
    value: RequestEndBlockAmino;
}
export interface RequestEndBlockSDKType {
    height: bigint;
}
export interface RequestCommit {
}
export interface RequestCommitProtoMsg {
    typeUrl: "/tendermint.abci.RequestCommit";
    value: Uint8Array;
}
export interface RequestCommitAmino {
}
export interface RequestCommitAminoMsg {
    type: "/tendermint.abci.RequestCommit";
    value: RequestCommitAmino;
}
export interface RequestCommitSDKType {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
export interface RequestListSnapshotsProtoMsg {
    typeUrl: "/tendermint.abci.RequestListSnapshots";
    value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {
}
export interface RequestListSnapshotsAminoMsg {
    type: "/tendermint.abci.RequestListSnapshots";
    value: RequestListSnapshotsAmino;
}
/** lists available snapshots */
export interface RequestListSnapshotsSDKType {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot";
    value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotAmino {
    /** snapshot offered by peers */
    snapshot?: SnapshotAmino;
    /** light client-verified app hash for snapshot height */
    app_hash?: string;
}
export interface RequestOfferSnapshotAminoMsg {
    type: "/tendermint.abci.RequestOfferSnapshot";
    value: RequestOfferSnapshotAmino;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotSDKType {
    snapshot?: SnapshotSDKType;
    app_hash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: bigint;
    format: number;
    chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
    height?: string;
    format?: number;
    chunk?: number;
}
export interface RequestLoadSnapshotChunkAminoMsg {
    type: "/tendermint.abci.RequestLoadSnapshotChunk";
    value: RequestLoadSnapshotChunkAmino;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkSDKType {
    height: bigint;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk";
    value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkAmino {
    index?: number;
    chunk?: string;
    sender?: string;
}
export interface RequestApplySnapshotChunkAminoMsg {
    type: "/tendermint.abci.RequestApplySnapshotChunk";
    value: RequestApplySnapshotChunkAmino;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkSDKType {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    setOption?: ResponseSetOption;
    initChain?: ResponseInitChain;
    query?: ResponseQuery;
    beginBlock?: ResponseBeginBlock;
    checkTx?: ResponseCheckTx;
    deliverTx?: ResponseDeliverTx;
    endBlock?: ResponseEndBlock;
    commit?: ResponseCommit;
    listSnapshots?: ResponseListSnapshots;
    offerSnapshot?: ResponseOfferSnapshot;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk;
    applySnapshotChunk?: ResponseApplySnapshotChunk;
}
export interface ResponseProtoMsg {
    typeUrl: "/tendermint.abci.Response";
    value: Uint8Array;
}
export interface ResponseAmino {
    exception?: ResponseExceptionAmino;
    echo?: ResponseEchoAmino;
    flush?: ResponseFlushAmino;
    info?: ResponseInfoAmino;
    set_option?: ResponseSetOptionAmino;
    init_chain?: ResponseInitChainAmino;
    query?: ResponseQueryAmino;
    begin_block?: ResponseBeginBlockAmino;
    check_tx?: ResponseCheckTxAmino;
    deliver_tx?: ResponseDeliverTxAmino;
    end_block?: ResponseEndBlockAmino;
    commit?: ResponseCommitAmino;
    list_snapshots?: ResponseListSnapshotsAmino;
    offer_snapshot?: ResponseOfferSnapshotAmino;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkAmino;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkAmino;
}
export interface ResponseAminoMsg {
    type: "/tendermint.abci.Response";
    value: ResponseAmino;
}
export interface ResponseSDKType {
    exception?: ResponseExceptionSDKType;
    echo?: ResponseEchoSDKType;
    flush?: ResponseFlushSDKType;
    info?: ResponseInfoSDKType;
    set_option?: ResponseSetOptionSDKType;
    init_chain?: ResponseInitChainSDKType;
    query?: ResponseQuerySDKType;
    begin_block?: ResponseBeginBlockSDKType;
    check_tx?: ResponseCheckTxSDKType;
    deliver_tx?: ResponseDeliverTxSDKType;
    end_block?: ResponseEndBlockSDKType;
    commit?: ResponseCommitSDKType;
    list_snapshots?: ResponseListSnapshotsSDKType;
    offer_snapshot?: ResponseOfferSnapshotSDKType;
    load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
    apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseExceptionProtoMsg {
    typeUrl: "/tendermint.abci.ResponseException";
    value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionAmino {
    error?: string;
}
export interface ResponseExceptionAminoMsg {
    type: "/tendermint.abci.ResponseException";
    value: ResponseExceptionAmino;
}
/** nondeterministic */
export interface ResponseExceptionSDKType {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseEchoProtoMsg {
    typeUrl: "/tendermint.abci.ResponseEcho";
    value: Uint8Array;
}
export interface ResponseEchoAmino {
    message?: string;
}
export interface ResponseEchoAminoMsg {
    type: "/tendermint.abci.ResponseEcho";
    value: ResponseEchoAmino;
}
export interface ResponseEchoSDKType {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseFlushProtoMsg {
    typeUrl: "/tendermint.abci.ResponseFlush";
    value: Uint8Array;
}
export interface ResponseFlushAmino {
}
export interface ResponseFlushAminoMsg {
    type: "/tendermint.abci.ResponseFlush";
    value: ResponseFlushAmino;
}
export interface ResponseFlushSDKType {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: bigint;
    lastBlockHeight: bigint;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
    typeUrl: "/tendermint.abci.ResponseInfo";
    value: Uint8Array;
}
export interface ResponseInfoAmino {
    data?: string;
    version?: string;
    app_version?: string;
    last_block_height?: string;
    last_block_app_hash?: string;
}
export interface ResponseInfoAminoMsg {
    type: "/tendermint.abci.ResponseInfo";
    value: ResponseInfoAmino;
}
export interface ResponseInfoSDKType {
    data: string;
    version: string;
    app_version: bigint;
    last_block_height: bigint;
    last_block_app_hash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseSetOptionProtoMsg {
    typeUrl: "/tendermint.abci.ResponseSetOption";
    value: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOptionAmino {
    code?: number;
    /** bytes data = 2; */
    log?: string;
    info?: string;
}
export interface ResponseSetOptionAminoMsg {
    type: "/tendermint.abci.ResponseSetOption";
    value: ResponseSetOptionAmino;
}
/** nondeterministic */
export interface ResponseSetOptionSDKType {
    code: number;
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
    typeUrl: "/tendermint.abci.ResponseInitChain";
    value: Uint8Array;
}
export interface ResponseInitChainAmino {
    consensus_params?: ConsensusParamsAmino;
    validators?: ValidatorUpdateAmino[];
    app_hash?: string;
}
export interface ResponseInitChainAminoMsg {
    type: "/tendermint.abci.ResponseInitChain";
    value: ResponseInitChainAmino;
}
export interface ResponseInitChainSDKType {
    consensus_params?: ConsensusParamsSDKType;
    validators: ValidatorUpdateSDKType[];
    app_hash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: bigint;
    codespace: string;
}
export interface ResponseQueryProtoMsg {
    typeUrl: "/tendermint.abci.ResponseQuery";
    value: Uint8Array;
}
export interface ResponseQueryAmino {
    code?: number;
    /** bytes data = 2; // use "value" instead. */
    log?: string;
    /** nondeterministic */
    info?: string;
    index?: string;
    key?: string;
    value?: string;
    proof_ops?: ProofOpsAmino;
    height?: string;
    codespace?: string;
}
export interface ResponseQueryAminoMsg {
    type: "/tendermint.abci.ResponseQuery";
    value: ResponseQueryAmino;
}
export interface ResponseQuerySDKType {
    code: number;
    log: string;
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: bigint;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseBeginBlockProtoMsg {
    typeUrl: "/tendermint.abci.ResponseBeginBlock";
    value: Uint8Array;
}
export interface ResponseBeginBlockAmino {
    events?: EventAmino[];
}
export interface ResponseBeginBlockAminoMsg {
    type: "/tendermint.abci.ResponseBeginBlock";
    value: ResponseBeginBlockAmino;
}
export interface ResponseBeginBlockSDKType {
    events: EventSDKType[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: bigint;
    gasUsed: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseCheckTxProtoMsg {
    typeUrl: "/tendermint.abci.ResponseCheckTx";
    value: Uint8Array;
}
export interface ResponseCheckTxAmino {
    code?: number;
    data?: string;
    /** nondeterministic */
    log?: string;
    /** nondeterministic */
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    events?: EventAmino[];
    codespace?: string;
}
export interface ResponseCheckTxAminoMsg {
    type: "/tendermint.abci.ResponseCheckTx";
    value: ResponseCheckTxAmino;
}
export interface ResponseCheckTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: bigint;
    gasUsed: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTxProtoMsg {
    typeUrl: "/tendermint.abci.ResponseDeliverTx";
    value: Uint8Array;
}
export interface ResponseDeliverTxAmino {
    code?: number;
    data?: string;
    /** nondeterministic */
    log?: string;
    /** nondeterministic */
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    events?: EventAmino[];
    codespace?: string;
}
export interface ResponseDeliverTxAminoMsg {
    type: "/tendermint.abci.ResponseDeliverTx";
    value: ResponseDeliverTxAmino;
}
export interface ResponseDeliverTxSDKType {
    code: number;
    data: Uint8Array;
    log: string;
    info: string;
    gas_wanted: bigint;
    gas_used: bigint;
    events: EventSDKType[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates?: ConsensusParams;
    events: Event[];
}
export interface ResponseEndBlockProtoMsg {
    typeUrl: "/tendermint.abci.ResponseEndBlock";
    value: Uint8Array;
}
export interface ResponseEndBlockAmino {
    validator_updates?: ValidatorUpdateAmino[];
    consensus_param_updates?: ConsensusParamsAmino;
    events?: EventAmino[];
}
export interface ResponseEndBlockAminoMsg {
    type: "/tendermint.abci.ResponseEndBlock";
    value: ResponseEndBlockAmino;
}
export interface ResponseEndBlockSDKType {
    validator_updates: ValidatorUpdateSDKType[];
    consensus_param_updates?: ConsensusParamsSDKType;
    events: EventSDKType[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: bigint;
}
export interface ResponseCommitProtoMsg {
    typeUrl: "/tendermint.abci.ResponseCommit";
    value: Uint8Array;
}
export interface ResponseCommitAmino {
    /** reserve 1 */
    data?: string;
    retain_height?: string;
}
export interface ResponseCommitAminoMsg {
    type: "/tendermint.abci.ResponseCommit";
    value: ResponseCommitAmino;
}
export interface ResponseCommitSDKType {
    data: Uint8Array;
    retain_height: bigint;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
    typeUrl: "/tendermint.abci.ResponseListSnapshots";
    value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
    snapshots?: SnapshotAmino[];
}
export interface ResponseListSnapshotsAminoMsg {
    type: "/tendermint.abci.ResponseListSnapshots";
    value: ResponseListSnapshotsAmino;
}
export interface ResponseListSnapshotsSDKType {
    snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot";
    value: Uint8Array;
}
export interface ResponseOfferSnapshotAmino {
    result?: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotAminoMsg {
    type: "/tendermint.abci.ResponseOfferSnapshot";
    value: ResponseOfferSnapshotAmino;
}
export interface ResponseOfferSnapshotSDKType {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk";
    value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAmino {
    chunk?: string;
}
export interface ResponseLoadSnapshotChunkAminoMsg {
    type: "/tendermint.abci.ResponseLoadSnapshotChunk";
    value: ResponseLoadSnapshotChunkAmino;
}
export interface ResponseLoadSnapshotChunkSDKType {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk";
    value: Uint8Array;
}
export interface ResponseApplySnapshotChunkAmino {
    result?: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetch_chunks?: number[];
    /** Chunk senders to reject and ban */
    reject_senders?: string[];
}
export interface ResponseApplySnapshotChunkAminoMsg {
    type: "/tendermint.abci.ResponseApplySnapshotChunk";
    value: ResponseApplySnapshotChunkAmino;
}
export interface ResponseApplySnapshotChunkSDKType {
    result: ResponseApplySnapshotChunk_Result;
    refetch_chunks: number[];
    reject_senders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
}
export interface ConsensusParamsProtoMsg {
    typeUrl: "/tendermint.abci.ConsensusParams";
    value: Uint8Array;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsAmino {
    block?: BlockParamsAmino;
    evidence?: EvidenceParamsAmino;
    validator?: ValidatorParamsAmino;
    version?: VersionParamsAmino;
}
export interface ConsensusParamsAminoMsg {
    type: "/tendermint.abci.ConsensusParams";
    value: ConsensusParamsAmino;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParamsSDKType {
    block?: BlockParamsSDKType;
    evidence?: EvidenceParamsSDKType;
    validator?: ValidatorParamsSDKType;
    version?: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    maxBytes: bigint;
    /** Note: must be greater or equal to -1 */
    maxGas: bigint;
}
export interface BlockParamsProtoMsg {
    typeUrl: "/tendermint.abci.BlockParams";
    value: Uint8Array;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsAmino {
    /** Note: must be greater than 0 */
    max_bytes?: string;
    /** Note: must be greater or equal to -1 */
    max_gas?: string;
}
export interface BlockParamsAminoMsg {
    type: "/tendermint.abci.BlockParams";
    value: BlockParamsAmino;
}
/** BlockParams contains limits on the block size. */
export interface BlockParamsSDKType {
    max_bytes: bigint;
    max_gas: bigint;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
export interface LastCommitInfoProtoMsg {
    typeUrl: "/tendermint.abci.LastCommitInfo";
    value: Uint8Array;
}
export interface LastCommitInfoAmino {
    round?: number;
    votes?: VoteInfoAmino[];
}
export interface LastCommitInfoAminoMsg {
    type: "/tendermint.abci.LastCommitInfo";
    value: LastCommitInfoAmino;
}
export interface LastCommitInfoSDKType {
    round: number;
    votes: VoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
export interface EventProtoMsg {
    typeUrl: "/tendermint.abci.Event";
    value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventAmino {
    type?: string;
    attributes?: EventAttributeAmino[];
}
export interface EventAminoMsg {
    type: "/tendermint.abci.Event";
    value: EventAmino;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface EventSDKType {
    type: string;
    attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
export interface EventAttributeProtoMsg {
    typeUrl: "/tendermint.abci.EventAttribute";
    value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
    key?: string;
    value?: string;
    /** nondeterministic */
    index?: boolean;
}
export interface EventAttributeAminoMsg {
    type: "/tendermint.abci.EventAttribute";
    value: EventAttributeAmino;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeSDKType {
    key: Uint8Array;
    value: Uint8Array;
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: bigint;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx;
}
export interface TxResultProtoMsg {
    typeUrl: "/tendermint.abci.TxResult";
    value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultAmino {
    height?: string;
    index?: number;
    tx?: string;
    result?: ResponseDeliverTxAmino;
}
export interface TxResultAminoMsg {
    type: "/tendermint.abci.TxResult";
    value: TxResultAmino;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResultSDKType {
    height: bigint;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTxSDKType;
}
/** Validator */
export interface Validator {
    /** The first 20 bytes of SHA256(public key) */
    address: Uint8Array;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power: bigint;
}
export interface ValidatorProtoMsg {
    typeUrl: "/tendermint.abci.Validator";
    value: Uint8Array;
}
/** Validator */
export interface ValidatorAmino {
    /** The first 20 bytes of SHA256(public key) */
    address?: string;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power?: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.abci.Validator";
    value: ValidatorAmino;
}
/** Validator */
export interface ValidatorSDKType {
    address: Uint8Array;
    power: bigint;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey: PublicKey;
    power: bigint;
}
export interface ValidatorUpdateProtoMsg {
    typeUrl: "/tendermint.abci.ValidatorUpdate";
    value: Uint8Array;
}
/** ValidatorUpdate */
export interface ValidatorUpdateAmino {
    pub_key?: PublicKeyAmino;
    power?: string;
}
export interface ValidatorUpdateAminoMsg {
    type: "/tendermint.abci.ValidatorUpdate";
    value: ValidatorUpdateAmino;
}
/** ValidatorUpdate */
export interface ValidatorUpdateSDKType {
    pub_key: PublicKeySDKType;
    power: bigint;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator;
    signedLastBlock: boolean;
}
export interface VoteInfoProtoMsg {
    typeUrl: "/tendermint.abci.VoteInfo";
    value: Uint8Array;
}
/** VoteInfo */
export interface VoteInfoAmino {
    validator?: ValidatorAmino;
    signed_last_block?: boolean;
}
export interface VoteInfoAminoMsg {
    type: "/tendermint.abci.VoteInfo";
    value: VoteInfoAmino;
}
/** VoteInfo */
export interface VoteInfoSDKType {
    validator: ValidatorSDKType;
    signed_last_block: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator: Validator;
    /** The height when the offense occurred */
    height: bigint;
    /** The corresponding time where the offense occurred */
    time: Date;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: bigint;
}
export interface EvidenceProtoMsg {
    typeUrl: "/tendermint.abci.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    type?: EvidenceType;
    /** The offending validator */
    validator?: ValidatorAmino;
    /** The height when the offense occurred */
    height?: string;
    /** The corresponding time where the offense occurred */
    time?: string;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    total_voting_power?: string;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.abci.Evidence";
    value: EvidenceAmino;
}
export interface EvidenceSDKType {
    type: EvidenceType;
    validator: ValidatorSDKType;
    height: bigint;
    time: Date;
    total_voting_power: bigint;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: bigint;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
    typeUrl: "/tendermint.abci.Snapshot";
    value: Uint8Array;
}
export interface SnapshotAmino {
    /** The height at which the snapshot was taken */
    height?: string;
    /** The application-specific snapshot format */
    format?: number;
    /** Number of chunks in the snapshot */
    chunks?: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash?: string;
    /** Arbitrary application metadata */
    metadata?: string;
}
export interface SnapshotAminoMsg {
    type: "/tendermint.abci.Snapshot";
    value: SnapshotAmino;
}
export interface SnapshotSDKType {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export declare const Request: {
    typeUrl: string;
    is(o: any): o is Request;
    isSDK(o: any): o is RequestSDKType;
    isAmino(o: any): o is RequestAmino;
    encode(message: Request, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): JsonSafe<Request>;
    fromPartial(object: Partial<Request>): Request;
    fromAmino(object: RequestAmino): Request;
    toAmino(message: Request): RequestAmino;
    fromAminoMsg(object: RequestAminoMsg): Request;
    fromProtoMsg(message: RequestProtoMsg): Request;
    toProto(message: Request): Uint8Array;
    toProtoMsg(message: Request): RequestProtoMsg;
};
export declare const RequestEcho: {
    typeUrl: string;
    is(o: any): o is RequestEcho;
    isSDK(o: any): o is RequestEchoSDKType;
    isAmino(o: any): o is RequestEchoAmino;
    encode(message: RequestEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): JsonSafe<RequestEcho>;
    fromPartial(object: Partial<RequestEcho>): RequestEcho;
    fromAmino(object: RequestEchoAmino): RequestEcho;
    toAmino(message: RequestEcho): RequestEchoAmino;
    fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho;
    fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho;
    toProto(message: RequestEcho): Uint8Array;
    toProtoMsg(message: RequestEcho): RequestEchoProtoMsg;
};
export declare const RequestFlush: {
    typeUrl: string;
    is(o: any): o is RequestFlush;
    isSDK(o: any): o is RequestFlushSDKType;
    isAmino(o: any): o is RequestFlushAmino;
    encode(_: RequestFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): JsonSafe<RequestFlush>;
    fromPartial(_: Partial<RequestFlush>): RequestFlush;
    fromAmino(_: RequestFlushAmino): RequestFlush;
    toAmino(_: RequestFlush): RequestFlushAmino;
    fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush;
    fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush;
    toProto(message: RequestFlush): Uint8Array;
    toProtoMsg(message: RequestFlush): RequestFlushProtoMsg;
};
export declare const RequestInfo: {
    typeUrl: string;
    is(o: any): o is RequestInfo;
    isSDK(o: any): o is RequestInfoSDKType;
    isAmino(o: any): o is RequestInfoAmino;
    encode(message: RequestInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): JsonSafe<RequestInfo>;
    fromPartial(object: Partial<RequestInfo>): RequestInfo;
    fromAmino(object: RequestInfoAmino): RequestInfo;
    toAmino(message: RequestInfo): RequestInfoAmino;
    fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo;
    fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo;
    toProto(message: RequestInfo): Uint8Array;
    toProtoMsg(message: RequestInfo): RequestInfoProtoMsg;
};
export declare const RequestSetOption: {
    typeUrl: string;
    is(o: any): o is RequestSetOption;
    isSDK(o: any): o is RequestSetOptionSDKType;
    isAmino(o: any): o is RequestSetOptionAmino;
    encode(message: RequestSetOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): JsonSafe<RequestSetOption>;
    fromPartial(object: Partial<RequestSetOption>): RequestSetOption;
    fromAmino(object: RequestSetOptionAmino): RequestSetOption;
    toAmino(message: RequestSetOption): RequestSetOptionAmino;
    fromAminoMsg(object: RequestSetOptionAminoMsg): RequestSetOption;
    fromProtoMsg(message: RequestSetOptionProtoMsg): RequestSetOption;
    toProto(message: RequestSetOption): Uint8Array;
    toProtoMsg(message: RequestSetOption): RequestSetOptionProtoMsg;
};
export declare const RequestInitChain: {
    typeUrl: string;
    is(o: any): o is RequestInitChain;
    isSDK(o: any): o is RequestInitChainSDKType;
    isAmino(o: any): o is RequestInitChainAmino;
    encode(message: RequestInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): JsonSafe<RequestInitChain>;
    fromPartial(object: Partial<RequestInitChain>): RequestInitChain;
    fromAmino(object: RequestInitChainAmino): RequestInitChain;
    toAmino(message: RequestInitChain): RequestInitChainAmino;
    fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain;
    fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain;
    toProto(message: RequestInitChain): Uint8Array;
    toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg;
};
export declare const RequestQuery: {
    typeUrl: string;
    is(o: any): o is RequestQuery;
    isSDK(o: any): o is RequestQuerySDKType;
    isAmino(o: any): o is RequestQueryAmino;
    encode(message: RequestQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): JsonSafe<RequestQuery>;
    fromPartial(object: Partial<RequestQuery>): RequestQuery;
    fromAmino(object: RequestQueryAmino): RequestQuery;
    toAmino(message: RequestQuery): RequestQueryAmino;
    fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery;
    fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery;
    toProto(message: RequestQuery): Uint8Array;
    toProtoMsg(message: RequestQuery): RequestQueryProtoMsg;
};
export declare const RequestBeginBlock: {
    typeUrl: string;
    is(o: any): o is RequestBeginBlock;
    isSDK(o: any): o is RequestBeginBlockSDKType;
    isAmino(o: any): o is RequestBeginBlockAmino;
    encode(message: RequestBeginBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): JsonSafe<RequestBeginBlock>;
    fromPartial(object: Partial<RequestBeginBlock>): RequestBeginBlock;
    fromAmino(object: RequestBeginBlockAmino): RequestBeginBlock;
    toAmino(message: RequestBeginBlock): RequestBeginBlockAmino;
    fromAminoMsg(object: RequestBeginBlockAminoMsg): RequestBeginBlock;
    fromProtoMsg(message: RequestBeginBlockProtoMsg): RequestBeginBlock;
    toProto(message: RequestBeginBlock): Uint8Array;
    toProtoMsg(message: RequestBeginBlock): RequestBeginBlockProtoMsg;
};
export declare const RequestCheckTx: {
    typeUrl: string;
    is(o: any): o is RequestCheckTx;
    isSDK(o: any): o is RequestCheckTxSDKType;
    isAmino(o: any): o is RequestCheckTxAmino;
    encode(message: RequestCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): JsonSafe<RequestCheckTx>;
    fromPartial(object: Partial<RequestCheckTx>): RequestCheckTx;
    fromAmino(object: RequestCheckTxAmino): RequestCheckTx;
    toAmino(message: RequestCheckTx): RequestCheckTxAmino;
    fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx;
    fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx;
    toProto(message: RequestCheckTx): Uint8Array;
    toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg;
};
export declare const RequestDeliverTx: {
    typeUrl: string;
    is(o: any): o is RequestDeliverTx;
    isSDK(o: any): o is RequestDeliverTxSDKType;
    isAmino(o: any): o is RequestDeliverTxAmino;
    encode(message: RequestDeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): JsonSafe<RequestDeliverTx>;
    fromPartial(object: Partial<RequestDeliverTx>): RequestDeliverTx;
    fromAmino(object: RequestDeliverTxAmino): RequestDeliverTx;
    toAmino(message: RequestDeliverTx): RequestDeliverTxAmino;
    fromAminoMsg(object: RequestDeliverTxAminoMsg): RequestDeliverTx;
    fromProtoMsg(message: RequestDeliverTxProtoMsg): RequestDeliverTx;
    toProto(message: RequestDeliverTx): Uint8Array;
    toProtoMsg(message: RequestDeliverTx): RequestDeliverTxProtoMsg;
};
export declare const RequestEndBlock: {
    typeUrl: string;
    is(o: any): o is RequestEndBlock;
    isSDK(o: any): o is RequestEndBlockSDKType;
    isAmino(o: any): o is RequestEndBlockAmino;
    encode(message: RequestEndBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): JsonSafe<RequestEndBlock>;
    fromPartial(object: Partial<RequestEndBlock>): RequestEndBlock;
    fromAmino(object: RequestEndBlockAmino): RequestEndBlock;
    toAmino(message: RequestEndBlock): RequestEndBlockAmino;
    fromAminoMsg(object: RequestEndBlockAminoMsg): RequestEndBlock;
    fromProtoMsg(message: RequestEndBlockProtoMsg): RequestEndBlock;
    toProto(message: RequestEndBlock): Uint8Array;
    toProtoMsg(message: RequestEndBlock): RequestEndBlockProtoMsg;
};
export declare const RequestCommit: {
    typeUrl: string;
    is(o: any): o is RequestCommit;
    isSDK(o: any): o is RequestCommitSDKType;
    isAmino(o: any): o is RequestCommitAmino;
    encode(_: RequestCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): JsonSafe<RequestCommit>;
    fromPartial(_: Partial<RequestCommit>): RequestCommit;
    fromAmino(_: RequestCommitAmino): RequestCommit;
    toAmino(_: RequestCommit): RequestCommitAmino;
    fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit;
    fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit;
    toProto(message: RequestCommit): Uint8Array;
    toProtoMsg(message: RequestCommit): RequestCommitProtoMsg;
};
export declare const RequestListSnapshots: {
    typeUrl: string;
    is(o: any): o is RequestListSnapshots;
    isSDK(o: any): o is RequestListSnapshotsSDKType;
    isAmino(o: any): o is RequestListSnapshotsAmino;
    encode(_: RequestListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): JsonSafe<RequestListSnapshots>;
    fromPartial(_: Partial<RequestListSnapshots>): RequestListSnapshots;
    fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots;
    toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino;
    fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots;
    fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots;
    toProto(message: RequestListSnapshots): Uint8Array;
    toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg;
};
export declare const RequestOfferSnapshot: {
    typeUrl: string;
    is(o: any): o is RequestOfferSnapshot;
    isSDK(o: any): o is RequestOfferSnapshotSDKType;
    isAmino(o: any): o is RequestOfferSnapshotAmino;
    encode(message: RequestOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): JsonSafe<RequestOfferSnapshot>;
    fromPartial(object: Partial<RequestOfferSnapshot>): RequestOfferSnapshot;
    fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot;
    toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino;
    fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot;
    fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot;
    toProto(message: RequestOfferSnapshot): Uint8Array;
    toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg;
};
export declare const RequestLoadSnapshotChunk: {
    typeUrl: string;
    is(o: any): o is RequestLoadSnapshotChunk;
    isSDK(o: any): o is RequestLoadSnapshotChunkSDKType;
    isAmino(o: any): o is RequestLoadSnapshotChunkAmino;
    encode(message: RequestLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): JsonSafe<RequestLoadSnapshotChunk>;
    fromPartial(object: Partial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
    fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk;
    toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino;
    fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk;
    fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk;
    toProto(message: RequestLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg;
};
export declare const RequestApplySnapshotChunk: {
    typeUrl: string;
    is(o: any): o is RequestApplySnapshotChunk;
    isSDK(o: any): o is RequestApplySnapshotChunkSDKType;
    isAmino(o: any): o is RequestApplySnapshotChunkAmino;
    encode(message: RequestApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): JsonSafe<RequestApplySnapshotChunk>;
    fromPartial(object: Partial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
    fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk;
    toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino;
    fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk;
    fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk;
    toProto(message: RequestApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg;
};
export declare const Response: {
    typeUrl: string;
    is(o: any): o is Response;
    isSDK(o: any): o is ResponseSDKType;
    isAmino(o: any): o is ResponseAmino;
    encode(message: Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): JsonSafe<Response>;
    fromPartial(object: Partial<Response>): Response;
    fromAmino(object: ResponseAmino): Response;
    toAmino(message: Response): ResponseAmino;
    fromAminoMsg(object: ResponseAminoMsg): Response;
    fromProtoMsg(message: ResponseProtoMsg): Response;
    toProto(message: Response): Uint8Array;
    toProtoMsg(message: Response): ResponseProtoMsg;
};
export declare const ResponseException: {
    typeUrl: string;
    is(o: any): o is ResponseException;
    isSDK(o: any): o is ResponseExceptionSDKType;
    isAmino(o: any): o is ResponseExceptionAmino;
    encode(message: ResponseException, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): JsonSafe<ResponseException>;
    fromPartial(object: Partial<ResponseException>): ResponseException;
    fromAmino(object: ResponseExceptionAmino): ResponseException;
    toAmino(message: ResponseException): ResponseExceptionAmino;
    fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException;
    fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException;
    toProto(message: ResponseException): Uint8Array;
    toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg;
};
export declare const ResponseEcho: {
    typeUrl: string;
    is(o: any): o is ResponseEcho;
    isSDK(o: any): o is ResponseEchoSDKType;
    isAmino(o: any): o is ResponseEchoAmino;
    encode(message: ResponseEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): JsonSafe<ResponseEcho>;
    fromPartial(object: Partial<ResponseEcho>): ResponseEcho;
    fromAmino(object: ResponseEchoAmino): ResponseEcho;
    toAmino(message: ResponseEcho): ResponseEchoAmino;
    fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho;
    fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho;
    toProto(message: ResponseEcho): Uint8Array;
    toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg;
};
export declare const ResponseFlush: {
    typeUrl: string;
    is(o: any): o is ResponseFlush;
    isSDK(o: any): o is ResponseFlushSDKType;
    isAmino(o: any): o is ResponseFlushAmino;
    encode(_: ResponseFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): JsonSafe<ResponseFlush>;
    fromPartial(_: Partial<ResponseFlush>): ResponseFlush;
    fromAmino(_: ResponseFlushAmino): ResponseFlush;
    toAmino(_: ResponseFlush): ResponseFlushAmino;
    fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush;
    fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush;
    toProto(message: ResponseFlush): Uint8Array;
    toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg;
};
export declare const ResponseInfo: {
    typeUrl: string;
    is(o: any): o is ResponseInfo;
    isSDK(o: any): o is ResponseInfoSDKType;
    isAmino(o: any): o is ResponseInfoAmino;
    encode(message: ResponseInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): JsonSafe<ResponseInfo>;
    fromPartial(object: Partial<ResponseInfo>): ResponseInfo;
    fromAmino(object: ResponseInfoAmino): ResponseInfo;
    toAmino(message: ResponseInfo): ResponseInfoAmino;
    fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo;
    fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo;
    toProto(message: ResponseInfo): Uint8Array;
    toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg;
};
export declare const ResponseSetOption: {
    typeUrl: string;
    is(o: any): o is ResponseSetOption;
    isSDK(o: any): o is ResponseSetOptionSDKType;
    isAmino(o: any): o is ResponseSetOptionAmino;
    encode(message: ResponseSetOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): JsonSafe<ResponseSetOption>;
    fromPartial(object: Partial<ResponseSetOption>): ResponseSetOption;
    fromAmino(object: ResponseSetOptionAmino): ResponseSetOption;
    toAmino(message: ResponseSetOption): ResponseSetOptionAmino;
    fromAminoMsg(object: ResponseSetOptionAminoMsg): ResponseSetOption;
    fromProtoMsg(message: ResponseSetOptionProtoMsg): ResponseSetOption;
    toProto(message: ResponseSetOption): Uint8Array;
    toProtoMsg(message: ResponseSetOption): ResponseSetOptionProtoMsg;
};
export declare const ResponseInitChain: {
    typeUrl: string;
    is(o: any): o is ResponseInitChain;
    isSDK(o: any): o is ResponseInitChainSDKType;
    isAmino(o: any): o is ResponseInitChainAmino;
    encode(message: ResponseInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): JsonSafe<ResponseInitChain>;
    fromPartial(object: Partial<ResponseInitChain>): ResponseInitChain;
    fromAmino(object: ResponseInitChainAmino): ResponseInitChain;
    toAmino(message: ResponseInitChain): ResponseInitChainAmino;
    fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain;
    fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain;
    toProto(message: ResponseInitChain): Uint8Array;
    toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg;
};
export declare const ResponseQuery: {
    typeUrl: string;
    is(o: any): o is ResponseQuery;
    isSDK(o: any): o is ResponseQuerySDKType;
    isAmino(o: any): o is ResponseQueryAmino;
    encode(message: ResponseQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): JsonSafe<ResponseQuery>;
    fromPartial(object: Partial<ResponseQuery>): ResponseQuery;
    fromAmino(object: ResponseQueryAmino): ResponseQuery;
    toAmino(message: ResponseQuery): ResponseQueryAmino;
    fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery;
    fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery;
    toProto(message: ResponseQuery): Uint8Array;
    toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg;
};
export declare const ResponseBeginBlock: {
    typeUrl: string;
    is(o: any): o is ResponseBeginBlock;
    isSDK(o: any): o is ResponseBeginBlockSDKType;
    isAmino(o: any): o is ResponseBeginBlockAmino;
    encode(message: ResponseBeginBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): JsonSafe<ResponseBeginBlock>;
    fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock;
    fromAmino(object: ResponseBeginBlockAmino): ResponseBeginBlock;
    toAmino(message: ResponseBeginBlock): ResponseBeginBlockAmino;
    fromAminoMsg(object: ResponseBeginBlockAminoMsg): ResponseBeginBlock;
    fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock;
    toProto(message: ResponseBeginBlock): Uint8Array;
    toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg;
};
export declare const ResponseCheckTx: {
    typeUrl: string;
    is(o: any): o is ResponseCheckTx;
    isSDK(o: any): o is ResponseCheckTxSDKType;
    isAmino(o: any): o is ResponseCheckTxAmino;
    encode(message: ResponseCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): JsonSafe<ResponseCheckTx>;
    fromPartial(object: Partial<ResponseCheckTx>): ResponseCheckTx;
    fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx;
    toAmino(message: ResponseCheckTx): ResponseCheckTxAmino;
    fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx;
    fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx;
    toProto(message: ResponseCheckTx): Uint8Array;
    toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg;
};
export declare const ResponseDeliverTx: {
    typeUrl: string;
    is(o: any): o is ResponseDeliverTx;
    isSDK(o: any): o is ResponseDeliverTxSDKType;
    isAmino(o: any): o is ResponseDeliverTxAmino;
    encode(message: ResponseDeliverTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): JsonSafe<ResponseDeliverTx>;
    fromPartial(object: Partial<ResponseDeliverTx>): ResponseDeliverTx;
    fromAmino(object: ResponseDeliverTxAmino): ResponseDeliverTx;
    toAmino(message: ResponseDeliverTx): ResponseDeliverTxAmino;
    fromAminoMsg(object: ResponseDeliverTxAminoMsg): ResponseDeliverTx;
    fromProtoMsg(message: ResponseDeliverTxProtoMsg): ResponseDeliverTx;
    toProto(message: ResponseDeliverTx): Uint8Array;
    toProtoMsg(message: ResponseDeliverTx): ResponseDeliverTxProtoMsg;
};
export declare const ResponseEndBlock: {
    typeUrl: string;
    is(o: any): o is ResponseEndBlock;
    isSDK(o: any): o is ResponseEndBlockSDKType;
    isAmino(o: any): o is ResponseEndBlockAmino;
    encode(message: ResponseEndBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): JsonSafe<ResponseEndBlock>;
    fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock;
    fromAmino(object: ResponseEndBlockAmino): ResponseEndBlock;
    toAmino(message: ResponseEndBlock): ResponseEndBlockAmino;
    fromAminoMsg(object: ResponseEndBlockAminoMsg): ResponseEndBlock;
    fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock;
    toProto(message: ResponseEndBlock): Uint8Array;
    toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg;
};
export declare const ResponseCommit: {
    typeUrl: string;
    is(o: any): o is ResponseCommit;
    isSDK(o: any): o is ResponseCommitSDKType;
    isAmino(o: any): o is ResponseCommitAmino;
    encode(message: ResponseCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): JsonSafe<ResponseCommit>;
    fromPartial(object: Partial<ResponseCommit>): ResponseCommit;
    fromAmino(object: ResponseCommitAmino): ResponseCommit;
    toAmino(message: ResponseCommit): ResponseCommitAmino;
    fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit;
    fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit;
    toProto(message: ResponseCommit): Uint8Array;
    toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg;
};
export declare const ResponseListSnapshots: {
    typeUrl: string;
    is(o: any): o is ResponseListSnapshots;
    isSDK(o: any): o is ResponseListSnapshotsSDKType;
    isAmino(o: any): o is ResponseListSnapshotsAmino;
    encode(message: ResponseListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): JsonSafe<ResponseListSnapshots>;
    fromPartial(object: Partial<ResponseListSnapshots>): ResponseListSnapshots;
    fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots;
    toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino;
    fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots;
    fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots;
    toProto(message: ResponseListSnapshots): Uint8Array;
    toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg;
};
export declare const ResponseOfferSnapshot: {
    typeUrl: string;
    is(o: any): o is ResponseOfferSnapshot;
    isSDK(o: any): o is ResponseOfferSnapshotSDKType;
    isAmino(o: any): o is ResponseOfferSnapshotAmino;
    encode(message: ResponseOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): JsonSafe<ResponseOfferSnapshot>;
    fromPartial(object: Partial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
    fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot;
    toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino;
    fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot;
    fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot;
    toProto(message: ResponseOfferSnapshot): Uint8Array;
    toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg;
};
export declare const ResponseLoadSnapshotChunk: {
    typeUrl: string;
    is(o: any): o is ResponseLoadSnapshotChunk;
    isSDK(o: any): o is ResponseLoadSnapshotChunkSDKType;
    isAmino(o: any): o is ResponseLoadSnapshotChunkAmino;
    encode(message: ResponseLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): JsonSafe<ResponseLoadSnapshotChunk>;
    fromPartial(object: Partial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
    fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk;
    toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino;
    fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk;
    fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk;
    toProto(message: ResponseLoadSnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg;
};
export declare const ResponseApplySnapshotChunk: {
    typeUrl: string;
    is(o: any): o is ResponseApplySnapshotChunk;
    isSDK(o: any): o is ResponseApplySnapshotChunkSDKType;
    isAmino(o: any): o is ResponseApplySnapshotChunkAmino;
    encode(message: ResponseApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): JsonSafe<ResponseApplySnapshotChunk>;
    fromPartial(object: Partial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
    fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk;
    toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino;
    fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk;
    fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk;
    toProto(message: ResponseApplySnapshotChunk): Uint8Array;
    toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg;
};
export declare const ConsensusParams: {
    typeUrl: string;
    is(o: any): o is ConsensusParams;
    isSDK(o: any): o is ConsensusParamsSDKType;
    isAmino(o: any): o is ConsensusParamsAmino;
    encode(message: ConsensusParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): JsonSafe<ConsensusParams>;
    fromPartial(object: Partial<ConsensusParams>): ConsensusParams;
    fromAmino(object: ConsensusParamsAmino): ConsensusParams;
    toAmino(message: ConsensusParams): ConsensusParamsAmino;
    fromAminoMsg(object: ConsensusParamsAminoMsg): ConsensusParams;
    fromProtoMsg(message: ConsensusParamsProtoMsg): ConsensusParams;
    toProto(message: ConsensusParams): Uint8Array;
    toProtoMsg(message: ConsensusParams): ConsensusParamsProtoMsg;
};
export declare const BlockParams: {
    typeUrl: string;
    is(o: any): o is BlockParams;
    isSDK(o: any): o is BlockParamsSDKType;
    isAmino(o: any): o is BlockParamsAmino;
    encode(message: BlockParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): JsonSafe<BlockParams>;
    fromPartial(object: Partial<BlockParams>): BlockParams;
    fromAmino(object: BlockParamsAmino): BlockParams;
    toAmino(message: BlockParams): BlockParamsAmino;
    fromAminoMsg(object: BlockParamsAminoMsg): BlockParams;
    fromProtoMsg(message: BlockParamsProtoMsg): BlockParams;
    toProto(message: BlockParams): Uint8Array;
    toProtoMsg(message: BlockParams): BlockParamsProtoMsg;
};
export declare const LastCommitInfo: {
    typeUrl: string;
    is(o: any): o is LastCommitInfo;
    isSDK(o: any): o is LastCommitInfoSDKType;
    isAmino(o: any): o is LastCommitInfoAmino;
    encode(message: LastCommitInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): JsonSafe<LastCommitInfo>;
    fromPartial(object: Partial<LastCommitInfo>): LastCommitInfo;
    fromAmino(object: LastCommitInfoAmino): LastCommitInfo;
    toAmino(message: LastCommitInfo): LastCommitInfoAmino;
    fromAminoMsg(object: LastCommitInfoAminoMsg): LastCommitInfo;
    fromProtoMsg(message: LastCommitInfoProtoMsg): LastCommitInfo;
    toProto(message: LastCommitInfo): Uint8Array;
    toProtoMsg(message: LastCommitInfo): LastCommitInfoProtoMsg;
};
export declare const Event: {
    typeUrl: string;
    is(o: any): o is Event;
    isSDK(o: any): o is EventSDKType;
    isAmino(o: any): o is EventAmino;
    encode(message: Event, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): JsonSafe<Event>;
    fromPartial(object: Partial<Event>): Event;
    fromAmino(object: EventAmino): Event;
    toAmino(message: Event): EventAmino;
    fromAminoMsg(object: EventAminoMsg): Event;
    fromProtoMsg(message: EventProtoMsg): Event;
    toProto(message: Event): Uint8Array;
    toProtoMsg(message: Event): EventProtoMsg;
};
export declare const EventAttribute: {
    typeUrl: string;
    is(o: any): o is EventAttribute;
    isSDK(o: any): o is EventAttributeSDKType;
    isAmino(o: any): o is EventAttributeAmino;
    encode(message: EventAttribute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): JsonSafe<EventAttribute>;
    fromPartial(object: Partial<EventAttribute>): EventAttribute;
    fromAmino(object: EventAttributeAmino): EventAttribute;
    toAmino(message: EventAttribute): EventAttributeAmino;
    fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute;
    fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute;
    toProto(message: EventAttribute): Uint8Array;
    toProtoMsg(message: EventAttribute): EventAttributeProtoMsg;
};
export declare const TxResult: {
    typeUrl: string;
    is(o: any): o is TxResult;
    isSDK(o: any): o is TxResultSDKType;
    isAmino(o: any): o is TxResultAmino;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): JsonSafe<TxResult>;
    fromPartial(object: Partial<TxResult>): TxResult;
    fromAmino(object: TxResultAmino): TxResult;
    toAmino(message: TxResult): TxResultAmino;
    fromAminoMsg(object: TxResultAminoMsg): TxResult;
    fromProtoMsg(message: TxResultProtoMsg): TxResult;
    toProto(message: TxResult): Uint8Array;
    toProtoMsg(message: TxResult): TxResultProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    is(o: any): o is Validator;
    isSDK(o: any): o is ValidatorSDKType;
    isAmino(o: any): o is ValidatorAmino;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): JsonSafe<Validator>;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const ValidatorUpdate: {
    typeUrl: string;
    is(o: any): o is ValidatorUpdate;
    isSDK(o: any): o is ValidatorUpdateSDKType;
    isAmino(o: any): o is ValidatorUpdateAmino;
    encode(message: ValidatorUpdate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): JsonSafe<ValidatorUpdate>;
    fromPartial(object: Partial<ValidatorUpdate>): ValidatorUpdate;
    fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate;
    toAmino(message: ValidatorUpdate): ValidatorUpdateAmino;
    fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate;
    fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate;
    toProto(message: ValidatorUpdate): Uint8Array;
    toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg;
};
export declare const VoteInfo: {
    typeUrl: string;
    is(o: any): o is VoteInfo;
    isSDK(o: any): o is VoteInfoSDKType;
    isAmino(o: any): o is VoteInfoAmino;
    encode(message: VoteInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): JsonSafe<VoteInfo>;
    fromPartial(object: Partial<VoteInfo>): VoteInfo;
    fromAmino(object: VoteInfoAmino): VoteInfo;
    toAmino(message: VoteInfo): VoteInfoAmino;
    fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo;
    fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo;
    toProto(message: VoteInfo): Uint8Array;
    toProtoMsg(message: VoteInfo): VoteInfoProtoMsg;
};
export declare const Evidence: {
    typeUrl: string;
    is(o: any): o is Evidence;
    isSDK(o: any): o is EvidenceSDKType;
    isAmino(o: any): o is EvidenceAmino;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): JsonSafe<Evidence>;
    fromPartial(object: Partial<Evidence>): Evidence;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const Snapshot: {
    typeUrl: string;
    is(o: any): o is Snapshot;
    isSDK(o: any): o is SnapshotSDKType;
    isAmino(o: any): o is SnapshotAmino;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): JsonSafe<Snapshot>;
    fromPartial(object: Partial<Snapshot>): Snapshot;
    fromAmino(object: SnapshotAmino): Snapshot;
    toAmino(message: Snapshot): SnapshotAmino;
    fromAminoMsg(object: SnapshotAminoMsg): Snapshot;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
