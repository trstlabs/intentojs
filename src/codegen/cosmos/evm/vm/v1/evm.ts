import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
/** AccessType defines the types of permissions for the operations */
export enum AccessType {
  /** ACCESS_TYPE_PERMISSIONLESS - ACCESS_TYPE_PERMISSIONLESS does not restrict the operation to anyone */
  ACCESS_TYPE_PERMISSIONLESS = 0,
  /** ACCESS_TYPE_RESTRICTED - ACCESS_TYPE_RESTRICTED restrict the operation to anyone */
  ACCESS_TYPE_RESTRICTED = 1,
  /** ACCESS_TYPE_PERMISSIONED - ACCESS_TYPE_PERMISSIONED only allows the operation for specific addresses */
  ACCESS_TYPE_PERMISSIONED = 2,
  UNRECOGNIZED = -1,
}
export const AccessTypeSDKType = AccessType;
export const AccessTypeAmino = AccessType;
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_PERMISSIONLESS":
      return AccessType.ACCESS_TYPE_PERMISSIONLESS;
    case 1:
    case "ACCESS_TYPE_RESTRICTED":
      return AccessType.ACCESS_TYPE_RESTRICTED;
    case 2:
    case "ACCESS_TYPE_PERMISSIONED":
      return AccessType.ACCESS_TYPE_PERMISSIONED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.ACCESS_TYPE_PERMISSIONLESS:
      return "ACCESS_TYPE_PERMISSIONLESS";
    case AccessType.ACCESS_TYPE_RESTRICTED:
      return "ACCESS_TYPE_RESTRICTED";
    case AccessType.ACCESS_TYPE_PERMISSIONED:
      return "ACCESS_TYPE_PERMISSIONED";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the EVM module parameters */
export interface Params {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evmDenom: string;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extraEips: bigint[];
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allowUnprotectedTxs: boolean;
  /** evm_channels is the list of channel identifiers from EVM compatible chains */
  evmChannels: string[];
  /** access_control defines the permission policy of the EVM */
  accessControl: AccessControl;
  /**
   * active_static_precompiles defines the slice of hex addresses of the
   * precompiled contracts that are active
   */
  activeStaticPrecompiles: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.Params";
  value: Uint8Array;
}
/** Params defines the EVM module parameters */
export interface ParamsAmino {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evm_denom?: string;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extra_eips?: string[];
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allow_unprotected_txs?: boolean;
  /** evm_channels is the list of channel identifiers from EVM compatible chains */
  evm_channels?: string[];
  /** access_control defines the permission policy of the EVM */
  access_control?: AccessControlAmino;
  /**
   * active_static_precompiles defines the slice of hex addresses of the
   * precompiled contracts that are active
   */
  active_static_precompiles?: string[];
}
export interface ParamsAminoMsg {
  type: "cosmos/evm/v1/Params";
  value: ParamsAmino;
}
/** Params defines the EVM module parameters */
export interface ParamsSDKType {
  evm_denom: string;
  extra_eips: bigint[];
  allow_unprotected_txs: boolean;
  evm_channels: string[];
  access_control: AccessControlSDKType;
  active_static_precompiles: string[];
}
/**
 * AccessControl defines the permission policy of the EVM
 * for creating and calling contracts
 */
export interface AccessControl {
  /** create defines the permission policy for creating contracts */
  create: AccessControlType;
  /** call defines the permission policy for calling contracts */
  call: AccessControlType;
}
export interface AccessControlProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.AccessControl";
  value: Uint8Array;
}
/**
 * AccessControl defines the permission policy of the EVM
 * for creating and calling contracts
 */
export interface AccessControlAmino {
  /** create defines the permission policy for creating contracts */
  create?: AccessControlTypeAmino;
  /** call defines the permission policy for calling contracts */
  call?: AccessControlTypeAmino;
}
export interface AccessControlAminoMsg {
  type: "cosmos-sdk/AccessControl";
  value: AccessControlAmino;
}
/**
 * AccessControl defines the permission policy of the EVM
 * for creating and calling contracts
 */
export interface AccessControlSDKType {
  create: AccessControlTypeSDKType;
  call: AccessControlTypeSDKType;
}
/** AccessControlType defines the permission type for policies */
export interface AccessControlType {
  /** access_type defines which type of permission is required for the operation */
  accessType: AccessType;
  /**
   * access_control_list defines defines different things depending on the
   * AccessType:
   * - ACCESS_TYPE_PERMISSIONLESS: list of addresses that are blocked from
   * performing the operation
   * - ACCESS_TYPE_RESTRICTED: ignored
   * - ACCESS_TYPE_PERMISSIONED: list of addresses that are allowed to perform
   * the operation
   */
  accessControlList: string[];
}
export interface AccessControlTypeProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.AccessControlType";
  value: Uint8Array;
}
/** AccessControlType defines the permission type for policies */
export interface AccessControlTypeAmino {
  /** access_type defines which type of permission is required for the operation */
  access_type?: AccessType;
  /**
   * access_control_list defines defines different things depending on the
   * AccessType:
   * - ACCESS_TYPE_PERMISSIONLESS: list of addresses that are blocked from
   * performing the operation
   * - ACCESS_TYPE_RESTRICTED: ignored
   * - ACCESS_TYPE_PERMISSIONED: list of addresses that are allowed to perform
   * the operation
   */
  access_control_list?: string[];
}
export interface AccessControlTypeAminoMsg {
  type: "cosmos-sdk/AccessControlType";
  value: AccessControlTypeAmino;
}
/** AccessControlType defines the permission type for policies */
export interface AccessControlTypeSDKType {
  access_type: AccessType;
  access_control_list: string[];
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfig {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homesteadBlock: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  daoForkBlock: string;
  /**
   * dao_fork_support defines whether the nodes supports or opposes the DAO
   * hard-fork
   */
  daoForkSupport: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150Block: string;
  /** eip155_block: EIP155Block HF block */
  eip155Block: string;
  /** eip158_block: EIP158 HF block */
  eip158Block: string;
  /**
   * byzantium_block: Byzantium switch block (nil no fork, 0 = already on
   * byzantium)
   */
  byzantiumBlock: string;
  /**
   * constantinople_block: Constantinople switch block (nil no fork, 0 = already
   * activated)
   */
  constantinopleBlock: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburgBlock: string;
  /**
   * istanbul_block: Istanbul switch block (nil no fork, 0 = already on
   * istanbul)
   */
  istanbulBlock: string;
  /**
   * muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 =
   * already activated)
   */
  muirGlacierBlock: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlinBlock: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  londonBlock: string;
  /**
   * arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 =
   * already activated)
   */
  arrowGlacierBlock: string;
  /**
   * gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 =
   * already activated)
   */
  grayGlacierBlock: string;
  /**
   * merge_netsplit_block: Virtual fork after The Merge to use as a network
   * splitter
   */
  mergeNetsplitBlock: string;
  /** chain_id is the id of the chain (EIP-155) */
  chainId: bigint;
  /** denom is the denomination used on the EVM */
  denom: string;
  /** decimals is the real decimal precision of the denomination used on the EVM */
  decimals: bigint;
  /**
   * shanghai_time: Shanghai switch time (nil = no fork, 0 = already on
   * shanghai)
   */
  shanghaiTime: string;
  /** cancun_time: Cancun switch time (nil = no fork, 0 = already on cancun) */
  cancunTime: string;
  /** prague_time: Prague switch time (nil = no fork, 0 = already on prague) */
  pragueTime: string;
  /** verkle_time: Verkle switch time (nil = no fork, 0 = already on verkle) */
  verkleTime: string;
  /** osaka_time: Osaka switch time (nil = no fork, 0 = already on osaka) */
  osakaTime: string;
}
export interface ChainConfigProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.ChainConfig";
  value: Uint8Array;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigAmino {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homestead_block?: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  dao_fork_block?: string;
  /**
   * dao_fork_support defines whether the nodes supports or opposes the DAO
   * hard-fork
   */
  dao_fork_support?: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150_block?: string;
  /** eip155_block: EIP155Block HF block */
  eip155_block?: string;
  /** eip158_block: EIP158 HF block */
  eip158_block?: string;
  /**
   * byzantium_block: Byzantium switch block (nil no fork, 0 = already on
   * byzantium)
   */
  byzantium_block?: string;
  /**
   * constantinople_block: Constantinople switch block (nil no fork, 0 = already
   * activated)
   */
  constantinople_block?: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburg_block?: string;
  /**
   * istanbul_block: Istanbul switch block (nil no fork, 0 = already on
   * istanbul)
   */
  istanbul_block?: string;
  /**
   * muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 =
   * already activated)
   */
  muir_glacier_block?: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlin_block?: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  london_block?: string;
  /**
   * arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 =
   * already activated)
   */
  arrow_glacier_block?: string;
  /**
   * gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 =
   * already activated)
   */
  gray_glacier_block?: string;
  /**
   * merge_netsplit_block: Virtual fork after The Merge to use as a network
   * splitter
   */
  merge_netsplit_block?: string;
  /** chain_id is the id of the chain (EIP-155) */
  chain_id?: string;
  /** denom is the denomination used on the EVM */
  denom?: string;
  /** decimals is the real decimal precision of the denomination used on the EVM */
  decimals?: string;
  /**
   * shanghai_time: Shanghai switch time (nil = no fork, 0 = already on
   * shanghai)
   */
  shanghai_time?: string;
  /** cancun_time: Cancun switch time (nil = no fork, 0 = already on cancun) */
  cancun_time?: string;
  /** prague_time: Prague switch time (nil = no fork, 0 = already on prague) */
  prague_time?: string;
  /** verkle_time: Verkle switch time (nil = no fork, 0 = already on verkle) */
  verkle_time?: string;
  /** osaka_time: Osaka switch time (nil = no fork, 0 = already on osaka) */
  osaka_time?: string;
}
export interface ChainConfigAminoMsg {
  type: "cosmos-sdk/ChainConfig";
  value: ChainConfigAmino;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigSDKType {
  homestead_block: string;
  dao_fork_block: string;
  dao_fork_support: boolean;
  eip150_block: string;
  eip155_block: string;
  eip158_block: string;
  byzantium_block: string;
  constantinople_block: string;
  petersburg_block: string;
  istanbul_block: string;
  muir_glacier_block: string;
  berlin_block: string;
  london_block: string;
  arrow_glacier_block: string;
  gray_glacier_block: string;
  merge_netsplit_block: string;
  chain_id: bigint;
  denom: string;
  decimals: bigint;
  shanghai_time: string;
  cancun_time: string;
  prague_time: string;
  verkle_time: string;
  osaka_time: string;
}
/** State represents a single Storage key value pair item. */
export interface State {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}
export interface StateProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.State";
  value: Uint8Array;
}
/** State represents a single Storage key value pair item. */
export interface StateAmino {
  /** key is the stored key */
  key?: string;
  /** value is the stored value for the given key */
  value?: string;
}
export interface StateAminoMsg {
  type: "cosmos-sdk/State";
  value: StateAmino;
}
/** State represents a single Storage key value pair item. */
export interface StateSDKType {
  key: string;
  value: string;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogs {
  /** hash of the transaction */
  hash: string;
  /** logs is an array of Logs for the given transaction hash */
  logs: Log[];
}
export interface TransactionLogsProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.TransactionLogs";
  value: Uint8Array;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsAmino {
  /** hash of the transaction */
  hash?: string;
  /** logs is an array of Logs for the given transaction hash */
  logs?: LogAmino[];
}
export interface TransactionLogsAminoMsg {
  type: "cosmos-sdk/TransactionLogs";
  value: TransactionLogsAmino;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsSDKType {
  hash: string;
  logs: LogSDKType[];
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface Log {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: Uint8Array;
  /** block_number of the block in which the transaction was included */
  blockNumber: bigint;
  /** tx_hash is the transaction hash */
  txHash: string;
  /** tx_index of the transaction in the block */
  txIndex: bigint;
  /** block_hash of the block in which the transaction was included */
  blockHash: string;
  /** index of the log in the block */
  index: bigint;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}
export interface LogProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.Log";
  value: Uint8Array;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface LogAmino {
  /** address of the contract that generated the event */
  address?: string;
  /** topics is a list of topics provided by the contract. */
  topics?: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data?: string;
  /** block_number of the block in which the transaction was included */
  block_number: string;
  /** tx_hash is the transaction hash */
  tx_hash: string;
  /** tx_index of the transaction in the block */
  tx_index: string;
  /** block_hash of the block in which the transaction was included */
  block_hash: string;
  /** index of the log in the block */
  index: string;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed?: boolean;
}
export interface LogAminoMsg {
  type: "cosmos-sdk/Log";
  value: LogAmino;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface LogSDKType {
  address: string;
  topics: string[];
  data: Uint8Array;
  block_number: bigint;
  tx_hash: string;
  tx_index: bigint;
  block_hash: string;
  index: bigint;
  removed: boolean;
}
/** TxResult stores results of Tx execution. */
export interface TxResult {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contractAddress: string;
  /** bloom represents the bloom filter bytes */
  bloom: Uint8Array;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  txLogs: TransactionLogs;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gasUsed: bigint;
}
export interface TxResultProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.TxResult";
  value: Uint8Array;
}
/** TxResult stores results of Tx execution. */
export interface TxResultAmino {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contract_address?: string;
  /** bloom represents the bloom filter bytes */
  bloom?: string;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  tx_logs: TransactionLogsAmino;
  /** ret defines the bytes from the execution. */
  ret?: string;
  /** reverted flag is set to true when the call has been reverted */
  reverted?: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gas_used?: string;
}
export interface TxResultAminoMsg {
  type: "cosmos-sdk/TxResult";
  value: TxResultAmino;
}
/** TxResult stores results of Tx execution. */
export interface TxResultSDKType {
  contract_address: string;
  bloom: Uint8Array;
  tx_logs: TransactionLogsSDKType;
  ret: Uint8Array;
  reverted: boolean;
  gas_used: bigint;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storageKeys: string[];
}
export interface AccessTupleProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.AccessTuple";
  value: Uint8Array;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleAmino {
  /** address is a hex formatted ethereum address */
  address?: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storage_keys: string[];
}
export interface AccessTupleAminoMsg {
  type: "cosmos-sdk/AccessTuple";
  value: AccessTupleAmino;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleSDKType {
  address: string;
  storage_keys: string[];
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based
   * tracing calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: bigint;
  /** disable_stack switches stack capture */
  disableStack: boolean;
  /** disable_storage switches storage capture */
  disableStorage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfig;
  /** enable_memory switches memory capture */
  enableMemory: boolean;
  /** enable_return_data switches the capture of return data */
  enableReturnData: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracerJsonConfig: string;
}
export interface TraceConfigProtoMsg {
  typeUrl: "/cosmos.evm.vm.v1.TraceConfig";
  value: Uint8Array;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigAmino {
  /** tracer is a custom javascript tracer */
  tracer?: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based
   * tracing calls
   */
  timeout?: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec?: string;
  /** disable_stack switches stack capture */
  disable_stack: boolean;
  /** disable_storage switches storage capture */
  disable_storage: boolean;
  /** debug can be used to print output during capture end */
  debug?: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit?: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfigAmino;
  /** enable_memory switches memory capture */
  enable_memory: boolean;
  /** enable_return_data switches the capture of return data */
  enable_return_data: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracer_json_config: string;
}
export interface TraceConfigAminoMsg {
  type: "cosmos-sdk/TraceConfig";
  value: TraceConfigAmino;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigSDKType {
  tracer: string;
  timeout: string;
  reexec: bigint;
  disable_stack: boolean;
  disable_storage: boolean;
  debug: boolean;
  limit: number;
  overrides?: ChainConfigSDKType;
  enable_memory: boolean;
  enable_return_data: boolean;
  tracer_json_config: string;
}
function createBaseParams(): Params {
  return {
    evmDenom: "",
    extraEips: [],
    allowUnprotectedTxs: false,
    evmChannels: [],
    accessControl: AccessControl.fromPartial({}),
    activeStaticPrecompiles: []
  };
}
export const Params = {
  typeUrl: "/cosmos.evm.vm.v1.Params",
  aminoType: "cosmos/evm/v1/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evmDenom === "string" && Array.isArray(o.extraEips) && (!o.extraEips.length || typeof o.extraEips[0] === "bigint") && typeof o.allowUnprotectedTxs === "boolean" && Array.isArray(o.evmChannels) && (!o.evmChannels.length || typeof o.evmChannels[0] === "string") && AccessControl.is(o.accessControl) && Array.isArray(o.activeStaticPrecompiles) && (!o.activeStaticPrecompiles.length || typeof o.activeStaticPrecompiles[0] === "string"));
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evm_denom === "string" && Array.isArray(o.extra_eips) && (!o.extra_eips.length || typeof o.extra_eips[0] === "bigint") && typeof o.allow_unprotected_txs === "boolean" && Array.isArray(o.evm_channels) && (!o.evm_channels.length || typeof o.evm_channels[0] === "string") && AccessControl.isSDK(o.access_control) && Array.isArray(o.active_static_precompiles) && (!o.active_static_precompiles.length || typeof o.active_static_precompiles[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evm_denom === "string" && Array.isArray(o.extra_eips) && (!o.extra_eips.length || typeof o.extra_eips[0] === "bigint") && typeof o.allow_unprotected_txs === "boolean" && Array.isArray(o.evm_channels) && (!o.evm_channels.length || typeof o.evm_channels[0] === "string") && AccessControl.isAmino(o.access_control) && Array.isArray(o.active_static_precompiles) && (!o.active_static_precompiles.length || typeof o.active_static_precompiles[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evmDenom !== "") {
      writer.uint32(10).string(message.evmDenom);
    }
    writer.uint32(34).fork();
    for (const v of message.extraEips) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.allowUnprotectedTxs === true) {
      writer.uint32(40).bool(message.allowUnprotectedTxs);
    }
    for (const v of message.evmChannels) {
      writer.uint32(58).string(v!);
    }
    if (message.accessControl !== undefined) {
      AccessControl.encode(message.accessControl, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.activeStaticPrecompiles) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evmDenom = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extraEips.push(reader.int64());
            }
          } else {
            message.extraEips.push(reader.int64());
          }
          break;
        case 5:
          message.allowUnprotectedTxs = reader.bool();
          break;
        case 7:
          message.evmChannels.push(reader.string());
          break;
        case 8:
          message.accessControl = AccessControl.decode(reader, reader.uint32());
          break;
        case 9:
          message.activeStaticPrecompiles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      evmDenom: isSet(object.evmDenom) ? String(object.evmDenom) : "",
      extraEips: Array.isArray(object?.extraEips) ? object.extraEips.map((e: any) => BigInt(e.toString())) : [],
      allowUnprotectedTxs: isSet(object.allowUnprotectedTxs) ? Boolean(object.allowUnprotectedTxs) : false,
      evmChannels: Array.isArray(object?.evmChannels) ? object.evmChannels.map((e: any) => String(e)) : [],
      accessControl: isSet(object.accessControl) ? AccessControl.fromJSON(object.accessControl) : undefined,
      activeStaticPrecompiles: Array.isArray(object?.activeStaticPrecompiles) ? object.activeStaticPrecompiles.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.evmDenom !== undefined && (obj.evmDenom = message.evmDenom);
    if (message.extraEips) {
      obj.extraEips = message.extraEips.map(e => (e || BigInt(0)).toString());
    } else {
      obj.extraEips = [];
    }
    message.allowUnprotectedTxs !== undefined && (obj.allowUnprotectedTxs = message.allowUnprotectedTxs);
    if (message.evmChannels) {
      obj.evmChannels = message.evmChannels.map(e => e);
    } else {
      obj.evmChannels = [];
    }
    message.accessControl !== undefined && (obj.accessControl = message.accessControl ? AccessControl.toJSON(message.accessControl) : undefined);
    if (message.activeStaticPrecompiles) {
      obj.activeStaticPrecompiles = message.activeStaticPrecompiles.map(e => e);
    } else {
      obj.activeStaticPrecompiles = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.evmDenom = object.evmDenom ?? "";
    message.extraEips = object.extraEips?.map(e => BigInt(e.toString())) || [];
    message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
    message.evmChannels = object.evmChannels?.map(e => e) || [];
    message.accessControl = object.accessControl !== undefined && object.accessControl !== null ? AccessControl.fromPartial(object.accessControl) : undefined;
    message.activeStaticPrecompiles = object.activeStaticPrecompiles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.evm_denom !== undefined && object.evm_denom !== null) {
      message.evmDenom = object.evm_denom;
    }
    message.extraEips = object.extra_eips?.map(e => BigInt(e)) || [];
    if (object.allow_unprotected_txs !== undefined && object.allow_unprotected_txs !== null) {
      message.allowUnprotectedTxs = object.allow_unprotected_txs;
    }
    message.evmChannels = object.evm_channels?.map(e => e) || [];
    if (object.access_control !== undefined && object.access_control !== null) {
      message.accessControl = AccessControl.fromAmino(object.access_control);
    }
    message.activeStaticPrecompiles = object.active_static_precompiles?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.evm_denom = message.evmDenom === "" ? undefined : message.evmDenom;
    if (message.extraEips) {
      obj.extra_eips = message.extraEips.map(e => e.toString());
    } else {
      obj.extra_eips = message.extraEips;
    }
    obj.allow_unprotected_txs = message.allowUnprotectedTxs === false ? undefined : message.allowUnprotectedTxs;
    if (message.evmChannels) {
      obj.evm_channels = message.evmChannels.map(e => e);
    } else {
      obj.evm_channels = message.evmChannels;
    }
    obj.access_control = message.accessControl ? AccessControl.toAmino(message.accessControl) : undefined;
    if (message.activeStaticPrecompiles) {
      obj.active_static_precompiles = message.activeStaticPrecompiles.map(e => e);
    } else {
      obj.active_static_precompiles = message.activeStaticPrecompiles;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos/evm/v1/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseAccessControl(): AccessControl {
  return {
    create: AccessControlType.fromPartial({}),
    call: AccessControlType.fromPartial({})
  };
}
export const AccessControl = {
  typeUrl: "/cosmos.evm.vm.v1.AccessControl",
  aminoType: "cosmos-sdk/AccessControl",
  is(o: any): o is AccessControl {
    return o && (o.$typeUrl === AccessControl.typeUrl || AccessControlType.is(o.create) && AccessControlType.is(o.call));
  },
  isSDK(o: any): o is AccessControlSDKType {
    return o && (o.$typeUrl === AccessControl.typeUrl || AccessControlType.isSDK(o.create) && AccessControlType.isSDK(o.call));
  },
  isAmino(o: any): o is AccessControlAmino {
    return o && (o.$typeUrl === AccessControl.typeUrl || AccessControlType.isAmino(o.create) && AccessControlType.isAmino(o.call));
  },
  encode(message: AccessControl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.create !== undefined) {
      AccessControlType.encode(message.create, writer.uint32(10).fork()).ldelim();
    }
    if (message.call !== undefined) {
      AccessControlType.encode(message.call, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessControl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create = AccessControlType.decode(reader, reader.uint32());
          break;
        case 2:
          message.call = AccessControlType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessControl {
    return {
      create: isSet(object.create) ? AccessControlType.fromJSON(object.create) : undefined,
      call: isSet(object.call) ? AccessControlType.fromJSON(object.call) : undefined
    };
  },
  toJSON(message: AccessControl): JsonSafe<AccessControl> {
    const obj: any = {};
    message.create !== undefined && (obj.create = message.create ? AccessControlType.toJSON(message.create) : undefined);
    message.call !== undefined && (obj.call = message.call ? AccessControlType.toJSON(message.call) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AccessControl>): AccessControl {
    const message = createBaseAccessControl();
    message.create = object.create !== undefined && object.create !== null ? AccessControlType.fromPartial(object.create) : undefined;
    message.call = object.call !== undefined && object.call !== null ? AccessControlType.fromPartial(object.call) : undefined;
    return message;
  },
  fromAmino(object: AccessControlAmino): AccessControl {
    const message = createBaseAccessControl();
    if (object.create !== undefined && object.create !== null) {
      message.create = AccessControlType.fromAmino(object.create);
    }
    if (object.call !== undefined && object.call !== null) {
      message.call = AccessControlType.fromAmino(object.call);
    }
    return message;
  },
  toAmino(message: AccessControl): AccessControlAmino {
    const obj: any = {};
    obj.create = message.create ? AccessControlType.toAmino(message.create) : undefined;
    obj.call = message.call ? AccessControlType.toAmino(message.call) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccessControlAminoMsg): AccessControl {
    return AccessControl.fromAmino(object.value);
  },
  toAminoMsg(message: AccessControl): AccessControlAminoMsg {
    return {
      type: "cosmos-sdk/AccessControl",
      value: AccessControl.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessControlProtoMsg): AccessControl {
    return AccessControl.decode(message.value);
  },
  toProto(message: AccessControl): Uint8Array {
    return AccessControl.encode(message).finish();
  },
  toProtoMsg(message: AccessControl): AccessControlProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.AccessControl",
      value: AccessControl.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccessControl.typeUrl, AccessControl);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessControl.aminoType, AccessControl.typeUrl);
function createBaseAccessControlType(): AccessControlType {
  return {
    accessType: 0,
    accessControlList: []
  };
}
export const AccessControlType = {
  typeUrl: "/cosmos.evm.vm.v1.AccessControlType",
  aminoType: "cosmos-sdk/AccessControlType",
  is(o: any): o is AccessControlType {
    return o && (o.$typeUrl === AccessControlType.typeUrl || isSet(o.accessType) && Array.isArray(o.accessControlList) && (!o.accessControlList.length || typeof o.accessControlList[0] === "string"));
  },
  isSDK(o: any): o is AccessControlTypeSDKType {
    return o && (o.$typeUrl === AccessControlType.typeUrl || isSet(o.access_type) && Array.isArray(o.access_control_list) && (!o.access_control_list.length || typeof o.access_control_list[0] === "string"));
  },
  isAmino(o: any): o is AccessControlTypeAmino {
    return o && (o.$typeUrl === AccessControlType.typeUrl || isSet(o.access_type) && Array.isArray(o.access_control_list) && (!o.access_control_list.length || typeof o.access_control_list[0] === "string"));
  },
  encode(message: AccessControlType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accessType !== 0) {
      writer.uint32(8).int32(message.accessType);
    }
    for (const v of message.accessControlList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessControlType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessType = reader.int32() as any;
          break;
        case 2:
          message.accessControlList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessControlType {
    return {
      accessType: isSet(object.accessType) ? accessTypeFromJSON(object.accessType) : -1,
      accessControlList: Array.isArray(object?.accessControlList) ? object.accessControlList.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AccessControlType): JsonSafe<AccessControlType> {
    const obj: any = {};
    message.accessType !== undefined && (obj.accessType = accessTypeToJSON(message.accessType));
    if (message.accessControlList) {
      obj.accessControlList = message.accessControlList.map(e => e);
    } else {
      obj.accessControlList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AccessControlType>): AccessControlType {
    const message = createBaseAccessControlType();
    message.accessType = object.accessType ?? 0;
    message.accessControlList = object.accessControlList?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccessControlTypeAmino): AccessControlType {
    const message = createBaseAccessControlType();
    if (object.access_type !== undefined && object.access_type !== null) {
      message.accessType = object.access_type;
    }
    message.accessControlList = object.access_control_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: AccessControlType): AccessControlTypeAmino {
    const obj: any = {};
    obj.access_type = message.accessType === 0 ? undefined : message.accessType;
    if (message.accessControlList) {
      obj.access_control_list = message.accessControlList.map(e => e);
    } else {
      obj.access_control_list = message.accessControlList;
    }
    return obj;
  },
  fromAminoMsg(object: AccessControlTypeAminoMsg): AccessControlType {
    return AccessControlType.fromAmino(object.value);
  },
  toAminoMsg(message: AccessControlType): AccessControlTypeAminoMsg {
    return {
      type: "cosmos-sdk/AccessControlType",
      value: AccessControlType.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessControlTypeProtoMsg): AccessControlType {
    return AccessControlType.decode(message.value);
  },
  toProto(message: AccessControlType): Uint8Array {
    return AccessControlType.encode(message).finish();
  },
  toProtoMsg(message: AccessControlType): AccessControlTypeProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.AccessControlType",
      value: AccessControlType.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccessControlType.typeUrl, AccessControlType);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessControlType.aminoType, AccessControlType.typeUrl);
function createBaseChainConfig(): ChainConfig {
  return {
    homesteadBlock: "",
    daoForkBlock: "",
    daoForkSupport: false,
    eip150Block: "",
    eip155Block: "",
    eip158Block: "",
    byzantiumBlock: "",
    constantinopleBlock: "",
    petersburgBlock: "",
    istanbulBlock: "",
    muirGlacierBlock: "",
    berlinBlock: "",
    londonBlock: "",
    arrowGlacierBlock: "",
    grayGlacierBlock: "",
    mergeNetsplitBlock: "",
    chainId: BigInt(0),
    denom: "",
    decimals: BigInt(0),
    shanghaiTime: "",
    cancunTime: "",
    pragueTime: "",
    verkleTime: "",
    osakaTime: ""
  };
}
export const ChainConfig = {
  typeUrl: "/cosmos.evm.vm.v1.ChainConfig",
  aminoType: "cosmos-sdk/ChainConfig",
  is(o: any): o is ChainConfig {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homesteadBlock === "string" && typeof o.daoForkBlock === "string" && typeof o.daoForkSupport === "boolean" && typeof o.eip150Block === "string" && typeof o.eip155Block === "string" && typeof o.eip158Block === "string" && typeof o.byzantiumBlock === "string" && typeof o.constantinopleBlock === "string" && typeof o.petersburgBlock === "string" && typeof o.istanbulBlock === "string" && typeof o.muirGlacierBlock === "string" && typeof o.berlinBlock === "string" && typeof o.londonBlock === "string" && typeof o.arrowGlacierBlock === "string" && typeof o.grayGlacierBlock === "string" && typeof o.mergeNetsplitBlock === "string" && typeof o.chainId === "bigint" && typeof o.denom === "string" && typeof o.decimals === "bigint" && typeof o.shanghaiTime === "string" && typeof o.cancunTime === "string" && typeof o.pragueTime === "string" && typeof o.verkleTime === "string" && typeof o.osakaTime === "string");
  },
  isSDK(o: any): o is ChainConfigSDKType {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homestead_block === "string" && typeof o.dao_fork_block === "string" && typeof o.dao_fork_support === "boolean" && typeof o.eip150_block === "string" && typeof o.eip155_block === "string" && typeof o.eip158_block === "string" && typeof o.byzantium_block === "string" && typeof o.constantinople_block === "string" && typeof o.petersburg_block === "string" && typeof o.istanbul_block === "string" && typeof o.muir_glacier_block === "string" && typeof o.berlin_block === "string" && typeof o.london_block === "string" && typeof o.arrow_glacier_block === "string" && typeof o.gray_glacier_block === "string" && typeof o.merge_netsplit_block === "string" && typeof o.chain_id === "bigint" && typeof o.denom === "string" && typeof o.decimals === "bigint" && typeof o.shanghai_time === "string" && typeof o.cancun_time === "string" && typeof o.prague_time === "string" && typeof o.verkle_time === "string" && typeof o.osaka_time === "string");
  },
  isAmino(o: any): o is ChainConfigAmino {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homestead_block === "string" && typeof o.dao_fork_block === "string" && typeof o.dao_fork_support === "boolean" && typeof o.eip150_block === "string" && typeof o.eip155_block === "string" && typeof o.eip158_block === "string" && typeof o.byzantium_block === "string" && typeof o.constantinople_block === "string" && typeof o.petersburg_block === "string" && typeof o.istanbul_block === "string" && typeof o.muir_glacier_block === "string" && typeof o.berlin_block === "string" && typeof o.london_block === "string" && typeof o.arrow_glacier_block === "string" && typeof o.gray_glacier_block === "string" && typeof o.merge_netsplit_block === "string" && typeof o.chain_id === "bigint" && typeof o.denom === "string" && typeof o.decimals === "bigint" && typeof o.shanghai_time === "string" && typeof o.cancun_time === "string" && typeof o.prague_time === "string" && typeof o.verkle_time === "string" && typeof o.osaka_time === "string");
  },
  encode(message: ChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.homesteadBlock !== "") {
      writer.uint32(10).string(message.homesteadBlock);
    }
    if (message.daoForkBlock !== "") {
      writer.uint32(18).string(message.daoForkBlock);
    }
    if (message.daoForkSupport === true) {
      writer.uint32(24).bool(message.daoForkSupport);
    }
    if (message.eip150Block !== "") {
      writer.uint32(34).string(message.eip150Block);
    }
    if (message.eip155Block !== "") {
      writer.uint32(50).string(message.eip155Block);
    }
    if (message.eip158Block !== "") {
      writer.uint32(58).string(message.eip158Block);
    }
    if (message.byzantiumBlock !== "") {
      writer.uint32(66).string(message.byzantiumBlock);
    }
    if (message.constantinopleBlock !== "") {
      writer.uint32(74).string(message.constantinopleBlock);
    }
    if (message.petersburgBlock !== "") {
      writer.uint32(82).string(message.petersburgBlock);
    }
    if (message.istanbulBlock !== "") {
      writer.uint32(90).string(message.istanbulBlock);
    }
    if (message.muirGlacierBlock !== "") {
      writer.uint32(98).string(message.muirGlacierBlock);
    }
    if (message.berlinBlock !== "") {
      writer.uint32(106).string(message.berlinBlock);
    }
    if (message.londonBlock !== "") {
      writer.uint32(138).string(message.londonBlock);
    }
    if (message.arrowGlacierBlock !== "") {
      writer.uint32(146).string(message.arrowGlacierBlock);
    }
    if (message.grayGlacierBlock !== "") {
      writer.uint32(162).string(message.grayGlacierBlock);
    }
    if (message.mergeNetsplitBlock !== "") {
      writer.uint32(170).string(message.mergeNetsplitBlock);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(192).uint64(message.chainId);
    }
    if (message.denom !== "") {
      writer.uint32(202).string(message.denom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(208).uint64(message.decimals);
    }
    if (message.shanghaiTime !== "") {
      writer.uint32(218).string(message.shanghaiTime);
    }
    if (message.cancunTime !== "") {
      writer.uint32(226).string(message.cancunTime);
    }
    if (message.pragueTime !== "") {
      writer.uint32(234).string(message.pragueTime);
    }
    if (message.verkleTime !== "") {
      writer.uint32(242).string(message.verkleTime);
    }
    if (message.osakaTime !== "") {
      writer.uint32(250).string(message.osakaTime);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.homesteadBlock = reader.string();
          break;
        case 2:
          message.daoForkBlock = reader.string();
          break;
        case 3:
          message.daoForkSupport = reader.bool();
          break;
        case 4:
          message.eip150Block = reader.string();
          break;
        case 6:
          message.eip155Block = reader.string();
          break;
        case 7:
          message.eip158Block = reader.string();
          break;
        case 8:
          message.byzantiumBlock = reader.string();
          break;
        case 9:
          message.constantinopleBlock = reader.string();
          break;
        case 10:
          message.petersburgBlock = reader.string();
          break;
        case 11:
          message.istanbulBlock = reader.string();
          break;
        case 12:
          message.muirGlacierBlock = reader.string();
          break;
        case 13:
          message.berlinBlock = reader.string();
          break;
        case 17:
          message.londonBlock = reader.string();
          break;
        case 18:
          message.arrowGlacierBlock = reader.string();
          break;
        case 20:
          message.grayGlacierBlock = reader.string();
          break;
        case 21:
          message.mergeNetsplitBlock = reader.string();
          break;
        case 24:
          message.chainId = reader.uint64();
          break;
        case 25:
          message.denom = reader.string();
          break;
        case 26:
          message.decimals = reader.uint64();
          break;
        case 27:
          message.shanghaiTime = reader.string();
          break;
        case 28:
          message.cancunTime = reader.string();
          break;
        case 29:
          message.pragueTime = reader.string();
          break;
        case 30:
          message.verkleTime = reader.string();
          break;
        case 31:
          message.osakaTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainConfig {
    return {
      homesteadBlock: isSet(object.homesteadBlock) ? String(object.homesteadBlock) : "",
      daoForkBlock: isSet(object.daoForkBlock) ? String(object.daoForkBlock) : "",
      daoForkSupport: isSet(object.daoForkSupport) ? Boolean(object.daoForkSupport) : false,
      eip150Block: isSet(object.eip150Block) ? String(object.eip150Block) : "",
      eip155Block: isSet(object.eip155Block) ? String(object.eip155Block) : "",
      eip158Block: isSet(object.eip158Block) ? String(object.eip158Block) : "",
      byzantiumBlock: isSet(object.byzantiumBlock) ? String(object.byzantiumBlock) : "",
      constantinopleBlock: isSet(object.constantinopleBlock) ? String(object.constantinopleBlock) : "",
      petersburgBlock: isSet(object.petersburgBlock) ? String(object.petersburgBlock) : "",
      istanbulBlock: isSet(object.istanbulBlock) ? String(object.istanbulBlock) : "",
      muirGlacierBlock: isSet(object.muirGlacierBlock) ? String(object.muirGlacierBlock) : "",
      berlinBlock: isSet(object.berlinBlock) ? String(object.berlinBlock) : "",
      londonBlock: isSet(object.londonBlock) ? String(object.londonBlock) : "",
      arrowGlacierBlock: isSet(object.arrowGlacierBlock) ? String(object.arrowGlacierBlock) : "",
      grayGlacierBlock: isSet(object.grayGlacierBlock) ? String(object.grayGlacierBlock) : "",
      mergeNetsplitBlock: isSet(object.mergeNetsplitBlock) ? String(object.mergeNetsplitBlock) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? BigInt(object.decimals.toString()) : BigInt(0),
      shanghaiTime: isSet(object.shanghaiTime) ? String(object.shanghaiTime) : "",
      cancunTime: isSet(object.cancunTime) ? String(object.cancunTime) : "",
      pragueTime: isSet(object.pragueTime) ? String(object.pragueTime) : "",
      verkleTime: isSet(object.verkleTime) ? String(object.verkleTime) : "",
      osakaTime: isSet(object.osakaTime) ? String(object.osakaTime) : ""
    };
  },
  toJSON(message: ChainConfig): JsonSafe<ChainConfig> {
    const obj: any = {};
    message.homesteadBlock !== undefined && (obj.homesteadBlock = message.homesteadBlock);
    message.daoForkBlock !== undefined && (obj.daoForkBlock = message.daoForkBlock);
    message.daoForkSupport !== undefined && (obj.daoForkSupport = message.daoForkSupport);
    message.eip150Block !== undefined && (obj.eip150Block = message.eip150Block);
    message.eip155Block !== undefined && (obj.eip155Block = message.eip155Block);
    message.eip158Block !== undefined && (obj.eip158Block = message.eip158Block);
    message.byzantiumBlock !== undefined && (obj.byzantiumBlock = message.byzantiumBlock);
    message.constantinopleBlock !== undefined && (obj.constantinopleBlock = message.constantinopleBlock);
    message.petersburgBlock !== undefined && (obj.petersburgBlock = message.petersburgBlock);
    message.istanbulBlock !== undefined && (obj.istanbulBlock = message.istanbulBlock);
    message.muirGlacierBlock !== undefined && (obj.muirGlacierBlock = message.muirGlacierBlock);
    message.berlinBlock !== undefined && (obj.berlinBlock = message.berlinBlock);
    message.londonBlock !== undefined && (obj.londonBlock = message.londonBlock);
    message.arrowGlacierBlock !== undefined && (obj.arrowGlacierBlock = message.arrowGlacierBlock);
    message.grayGlacierBlock !== undefined && (obj.grayGlacierBlock = message.grayGlacierBlock);
    message.mergeNetsplitBlock !== undefined && (obj.mergeNetsplitBlock = message.mergeNetsplitBlock);
    message.chainId !== undefined && (obj.chainId = (message.chainId || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
    message.shanghaiTime !== undefined && (obj.shanghaiTime = message.shanghaiTime);
    message.cancunTime !== undefined && (obj.cancunTime = message.cancunTime);
    message.pragueTime !== undefined && (obj.pragueTime = message.pragueTime);
    message.verkleTime !== undefined && (obj.verkleTime = message.verkleTime);
    message.osakaTime !== undefined && (obj.osakaTime = message.osakaTime);
    return obj;
  },
  fromPartial(object: Partial<ChainConfig>): ChainConfig {
    const message = createBaseChainConfig();
    message.homesteadBlock = object.homesteadBlock ?? "";
    message.daoForkBlock = object.daoForkBlock ?? "";
    message.daoForkSupport = object.daoForkSupport ?? false;
    message.eip150Block = object.eip150Block ?? "";
    message.eip155Block = object.eip155Block ?? "";
    message.eip158Block = object.eip158Block ?? "";
    message.byzantiumBlock = object.byzantiumBlock ?? "";
    message.constantinopleBlock = object.constantinopleBlock ?? "";
    message.petersburgBlock = object.petersburgBlock ?? "";
    message.istanbulBlock = object.istanbulBlock ?? "";
    message.muirGlacierBlock = object.muirGlacierBlock ?? "";
    message.berlinBlock = object.berlinBlock ?? "";
    message.londonBlock = object.londonBlock ?? "";
    message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
    message.grayGlacierBlock = object.grayGlacierBlock ?? "";
    message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    message.shanghaiTime = object.shanghaiTime ?? "";
    message.cancunTime = object.cancunTime ?? "";
    message.pragueTime = object.pragueTime ?? "";
    message.verkleTime = object.verkleTime ?? "";
    message.osakaTime = object.osakaTime ?? "";
    return message;
  },
  fromAmino(object: ChainConfigAmino): ChainConfig {
    const message = createBaseChainConfig();
    if (object.homestead_block !== undefined && object.homestead_block !== null) {
      message.homesteadBlock = object.homestead_block;
    }
    if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
      message.daoForkBlock = object.dao_fork_block;
    }
    if (object.dao_fork_support !== undefined && object.dao_fork_support !== null) {
      message.daoForkSupport = object.dao_fork_support;
    }
    if (object.eip150_block !== undefined && object.eip150_block !== null) {
      message.eip150Block = object.eip150_block;
    }
    if (object.eip155_block !== undefined && object.eip155_block !== null) {
      message.eip155Block = object.eip155_block;
    }
    if (object.eip158_block !== undefined && object.eip158_block !== null) {
      message.eip158Block = object.eip158_block;
    }
    if (object.byzantium_block !== undefined && object.byzantium_block !== null) {
      message.byzantiumBlock = object.byzantium_block;
    }
    if (object.constantinople_block !== undefined && object.constantinople_block !== null) {
      message.constantinopleBlock = object.constantinople_block;
    }
    if (object.petersburg_block !== undefined && object.petersburg_block !== null) {
      message.petersburgBlock = object.petersburg_block;
    }
    if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
      message.istanbulBlock = object.istanbul_block;
    }
    if (object.muir_glacier_block !== undefined && object.muir_glacier_block !== null) {
      message.muirGlacierBlock = object.muir_glacier_block;
    }
    if (object.berlin_block !== undefined && object.berlin_block !== null) {
      message.berlinBlock = object.berlin_block;
    }
    if (object.london_block !== undefined && object.london_block !== null) {
      message.londonBlock = object.london_block;
    }
    if (object.arrow_glacier_block !== undefined && object.arrow_glacier_block !== null) {
      message.arrowGlacierBlock = object.arrow_glacier_block;
    }
    if (object.gray_glacier_block !== undefined && object.gray_glacier_block !== null) {
      message.grayGlacierBlock = object.gray_glacier_block;
    }
    if (object.merge_netsplit_block !== undefined && object.merge_netsplit_block !== null) {
      message.mergeNetsplitBlock = object.merge_netsplit_block;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals);
    }
    if (object.shanghai_time !== undefined && object.shanghai_time !== null) {
      message.shanghaiTime = object.shanghai_time;
    }
    if (object.cancun_time !== undefined && object.cancun_time !== null) {
      message.cancunTime = object.cancun_time;
    }
    if (object.prague_time !== undefined && object.prague_time !== null) {
      message.pragueTime = object.prague_time;
    }
    if (object.verkle_time !== undefined && object.verkle_time !== null) {
      message.verkleTime = object.verkle_time;
    }
    if (object.osaka_time !== undefined && object.osaka_time !== null) {
      message.osakaTime = object.osaka_time;
    }
    return message;
  },
  toAmino(message: ChainConfig): ChainConfigAmino {
    const obj: any = {};
    obj.homestead_block = message.homesteadBlock === "" ? undefined : message.homesteadBlock;
    obj.dao_fork_block = message.daoForkBlock === "" ? undefined : message.daoForkBlock;
    obj.dao_fork_support = message.daoForkSupport === false ? undefined : message.daoForkSupport;
    obj.eip150_block = message.eip150Block === "" ? undefined : message.eip150Block;
    obj.eip155_block = message.eip155Block === "" ? undefined : message.eip155Block;
    obj.eip158_block = message.eip158Block === "" ? undefined : message.eip158Block;
    obj.byzantium_block = message.byzantiumBlock === "" ? undefined : message.byzantiumBlock;
    obj.constantinople_block = message.constantinopleBlock === "" ? undefined : message.constantinopleBlock;
    obj.petersburg_block = message.petersburgBlock === "" ? undefined : message.petersburgBlock;
    obj.istanbul_block = message.istanbulBlock === "" ? undefined : message.istanbulBlock;
    obj.muir_glacier_block = message.muirGlacierBlock === "" ? undefined : message.muirGlacierBlock;
    obj.berlin_block = message.berlinBlock === "" ? undefined : message.berlinBlock;
    obj.london_block = message.londonBlock === "" ? undefined : message.londonBlock;
    obj.arrow_glacier_block = message.arrowGlacierBlock === "" ? undefined : message.arrowGlacierBlock;
    obj.gray_glacier_block = message.grayGlacierBlock === "" ? undefined : message.grayGlacierBlock;
    obj.merge_netsplit_block = message.mergeNetsplitBlock === "" ? undefined : message.mergeNetsplitBlock;
    obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.decimals = message.decimals !== BigInt(0) ? message.decimals?.toString() : undefined;
    obj.shanghai_time = message.shanghaiTime === "" ? undefined : message.shanghaiTime;
    obj.cancun_time = message.cancunTime === "" ? undefined : message.cancunTime;
    obj.prague_time = message.pragueTime === "" ? undefined : message.pragueTime;
    obj.verkle_time = message.verkleTime === "" ? undefined : message.verkleTime;
    obj.osaka_time = message.osakaTime === "" ? undefined : message.osakaTime;
    return obj;
  },
  fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig {
    return ChainConfig.fromAmino(object.value);
  },
  toAminoMsg(message: ChainConfig): ChainConfigAminoMsg {
    return {
      type: "cosmos-sdk/ChainConfig",
      value: ChainConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: ChainConfigProtoMsg): ChainConfig {
    return ChainConfig.decode(message.value);
  },
  toProto(message: ChainConfig): Uint8Array {
    return ChainConfig.encode(message).finish();
  },
  toProtoMsg(message: ChainConfig): ChainConfigProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.ChainConfig",
      value: ChainConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChainConfig.typeUrl, ChainConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(ChainConfig.aminoType, ChainConfig.typeUrl);
function createBaseState(): State {
  return {
    key: "",
    value: ""
  };
}
export const State = {
  typeUrl: "/cosmos.evm.vm.v1.State",
  aminoType: "cosmos-sdk/State",
  is(o: any): o is State {
    return o && (o.$typeUrl === State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isSDK(o: any): o is StateSDKType {
    return o && (o.$typeUrl === State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isAmino(o: any): o is StateAmino {
    return o && (o.$typeUrl === State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: State): JsonSafe<State> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: StateAmino): State {
    const message = createBaseState();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  toAminoMsg(message: State): StateAminoMsg {
    return {
      type: "cosmos-sdk/State",
      value: State.toAmino(message)
    };
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.State",
      value: State.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(State.typeUrl, State);
GlobalDecoderRegistry.registerAminoProtoMapping(State.aminoType, State.typeUrl);
function createBaseTransactionLogs(): TransactionLogs {
  return {
    hash: "",
    logs: []
  };
}
export const TransactionLogs = {
  typeUrl: "/cosmos.evm.vm.v1.TransactionLogs",
  aminoType: "cosmos-sdk/TransactionLogs",
  is(o: any): o is TransactionLogs {
    return o && (o.$typeUrl === TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || Log.is(o.logs[0])));
  },
  isSDK(o: any): o is TransactionLogsSDKType {
    return o && (o.$typeUrl === TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || Log.isSDK(o.logs[0])));
  },
  isAmino(o: any): o is TransactionLogsAmino {
    return o && (o.$typeUrl === TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || Log.isAmino(o.logs[0])));
  },
  encode(message: TransactionLogs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionLogs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransactionLogs {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : []
    };
  },
  toJSON(message: TransactionLogs): JsonSafe<TransactionLogs> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TransactionLogs>): TransactionLogs {
    const message = createBaseTransactionLogs();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TransactionLogsAmino): TransactionLogs {
    const message = createBaseTransactionLogs();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TransactionLogs): TransactionLogsAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = message.logs;
    }
    return obj;
  },
  fromAminoMsg(object: TransactionLogsAminoMsg): TransactionLogs {
    return TransactionLogs.fromAmino(object.value);
  },
  toAminoMsg(message: TransactionLogs): TransactionLogsAminoMsg {
    return {
      type: "cosmos-sdk/TransactionLogs",
      value: TransactionLogs.toAmino(message)
    };
  },
  fromProtoMsg(message: TransactionLogsProtoMsg): TransactionLogs {
    return TransactionLogs.decode(message.value);
  },
  toProto(message: TransactionLogs): Uint8Array {
    return TransactionLogs.encode(message).finish();
  },
  toProtoMsg(message: TransactionLogs): TransactionLogsProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.TransactionLogs",
      value: TransactionLogs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TransactionLogs.typeUrl, TransactionLogs);
GlobalDecoderRegistry.registerAminoProtoMapping(TransactionLogs.aminoType, TransactionLogs.typeUrl);
function createBaseLog(): Log {
  return {
    address: "",
    topics: [],
    data: new Uint8Array(),
    blockNumber: BigInt(0),
    txHash: "",
    txIndex: BigInt(0),
    blockHash: "",
    index: BigInt(0),
    removed: false
  };
}
export const Log = {
  typeUrl: "/cosmos.evm.vm.v1.Log",
  aminoType: "cosmos-sdk/Log",
  is(o: any): o is Log {
    return o && (o.$typeUrl === Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.blockNumber === "bigint" && typeof o.txHash === "string" && typeof o.txIndex === "bigint" && typeof o.blockHash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
  },
  isSDK(o: any): o is LogSDKType {
    return o && (o.$typeUrl === Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.block_number === "bigint" && typeof o.tx_hash === "string" && typeof o.tx_index === "bigint" && typeof o.block_hash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
  },
  isAmino(o: any): o is LogAmino {
    return o && (o.$typeUrl === Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.block_number === "bigint" && typeof o.tx_hash === "string" && typeof o.tx_index === "bigint" && typeof o.block_hash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
  },
  encode(message: Log, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(48).uint64(message.txIndex);
    }
    if (message.blockHash !== "") {
      writer.uint32(58).string(message.blockHash);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(64).uint64(message.index);
    }
    if (message.removed === true) {
      writer.uint32(72).bool(message.removed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Log {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.topics.push(reader.string());
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.blockNumber = reader.uint64();
          break;
        case 5:
          message.txHash = reader.string();
          break;
        case 6:
          message.txIndex = reader.uint64();
          break;
        case 7:
          message.blockHash = reader.string();
          break;
        case 8:
          message.index = reader.uint64();
          break;
        case 9:
          message.removed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Log {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      topics: Array.isArray(object?.topics) ? object.topics.map((e: any) => String(e)) : [],
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      blockNumber: isSet(object.blockNumber) ? BigInt(object.blockNumber.toString()) : BigInt(0),
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      txIndex: isSet(object.txIndex) ? BigInt(object.txIndex.toString()) : BigInt(0),
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      removed: isSet(object.removed) ? Boolean(object.removed) : false
    };
  },
  toJSON(message: Log): JsonSafe<Log> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.topics) {
      obj.topics = message.topics.map(e => e);
    } else {
      obj.topics = [];
    }
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || BigInt(0)).toString());
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.txIndex !== undefined && (obj.txIndex = (message.txIndex || BigInt(0)).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.removed !== undefined && (obj.removed = message.removed);
    return obj;
  },
  fromPartial(object: Partial<Log>): Log {
    const message = createBaseLog();
    message.address = object.address ?? "";
    message.topics = object.topics?.map(e => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
    message.blockHash = object.blockHash ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.removed = object.removed ?? false;
    return message;
  },
  fromAmino(object: LogAmino): Log {
    const message = createBaseLog();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.topics = object.topics?.map(e => e) || [];
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = BigInt(object.block_number);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.txIndex = BigInt(object.tx_index);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.removed !== undefined && object.removed !== null) {
      message.removed = object.removed;
    }
    return message;
  },
  toAmino(message: Log): LogAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.topics) {
      obj.topics = message.topics.map(e => e);
    } else {
      obj.topics = message.topics;
    }
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.block_number = message.blockNumber ? message.blockNumber?.toString() : "0";
    obj.tx_hash = message.txHash ?? "";
    obj.tx_index = message.txIndex ? message.txIndex?.toString() : "0";
    obj.block_hash = message.blockHash ?? "";
    obj.index = message.index ? message.index?.toString() : "0";
    obj.removed = message.removed === false ? undefined : message.removed;
    return obj;
  },
  fromAminoMsg(object: LogAminoMsg): Log {
    return Log.fromAmino(object.value);
  },
  toAminoMsg(message: Log): LogAminoMsg {
    return {
      type: "cosmos-sdk/Log",
      value: Log.toAmino(message)
    };
  },
  fromProtoMsg(message: LogProtoMsg): Log {
    return Log.decode(message.value);
  },
  toProto(message: Log): Uint8Array {
    return Log.encode(message).finish();
  },
  toProtoMsg(message: Log): LogProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.Log",
      value: Log.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Log.typeUrl, Log);
GlobalDecoderRegistry.registerAminoProtoMapping(Log.aminoType, Log.typeUrl);
function createBaseTxResult(): TxResult {
  return {
    contractAddress: "",
    bloom: new Uint8Array(),
    txLogs: TransactionLogs.fromPartial({}),
    ret: new Uint8Array(),
    reverted: false,
    gasUsed: BigInt(0)
  };
}
export const TxResult = {
  typeUrl: "/cosmos.evm.vm.v1.TxResult",
  aminoType: "cosmos-sdk/TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contractAddress === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.is(o.txLogs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gasUsed === "bigint");
  },
  isSDK(o: any): o is TxResultSDKType {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contract_address === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.isSDK(o.tx_logs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gas_used === "bigint");
  },
  isAmino(o: any): o is TxResultAmino {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contract_address === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.isAmino(o.tx_logs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gas_used === "bigint");
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.bloom.length !== 0) {
      writer.uint32(18).bytes(message.bloom);
    }
    if (message.txLogs !== undefined) {
      TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(34).bytes(message.ret);
    }
    if (message.reverted === true) {
      writer.uint32(40).bool(message.reverted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.bloom = reader.bytes();
          break;
        case 3:
          message.txLogs = TransactionLogs.decode(reader, reader.uint32());
          break;
        case 4:
          message.ret = reader.bytes();
          break;
        case 5:
          message.reverted = reader.bool();
          break;
        case 6:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxResult {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      bloom: isSet(object.bloom) ? bytesFromBase64(object.bloom) : new Uint8Array(),
      txLogs: isSet(object.txLogs) ? TransactionLogs.fromJSON(object.txLogs) : undefined,
      ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(),
      reverted: isSet(object.reverted) ? Boolean(object.reverted) : false,
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0)
    };
  },
  toJSON(message: TxResult): JsonSafe<TxResult> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.bloom !== undefined && (obj.bloom = base64FromBytes(message.bloom !== undefined ? message.bloom : new Uint8Array()));
    message.txLogs !== undefined && (obj.txLogs = message.txLogs ? TransactionLogs.toJSON(message.txLogs) : undefined);
    message.ret !== undefined && (obj.ret = base64FromBytes(message.ret !== undefined ? message.ret : new Uint8Array()));
    message.reverted !== undefined && (obj.reverted = message.reverted);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.contractAddress = object.contractAddress ?? "";
    message.bloom = object.bloom ?? new Uint8Array();
    message.txLogs = object.txLogs !== undefined && object.txLogs !== null ? TransactionLogs.fromPartial(object.txLogs) : undefined;
    message.ret = object.ret ?? new Uint8Array();
    message.reverted = object.reverted ?? false;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.bloom !== undefined && object.bloom !== null) {
      message.bloom = bytesFromBase64(object.bloom);
    }
    if (object.tx_logs !== undefined && object.tx_logs !== null) {
      message.txLogs = TransactionLogs.fromAmino(object.tx_logs);
    }
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = bytesFromBase64(object.ret);
    }
    if (object.reverted !== undefined && object.reverted !== null) {
      message.reverted = object.reverted;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.bloom = message.bloom ? base64FromBytes(message.bloom) : undefined;
    obj.tx_logs = message.txLogs ? TransactionLogs.toAmino(message.txLogs) : TransactionLogs.toAmino(TransactionLogs.fromPartial({}));
    obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
    obj.reverted = message.reverted === false ? undefined : message.reverted;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  toAminoMsg(message: TxResult): TxResultAminoMsg {
    return {
      type: "cosmos-sdk/TxResult",
      value: TxResult.toAmino(message)
    };
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.TxResult",
      value: TxResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxResult.typeUrl, TxResult);
GlobalDecoderRegistry.registerAminoProtoMapping(TxResult.aminoType, TxResult.typeUrl);
function createBaseAccessTuple(): AccessTuple {
  return {
    address: "",
    storageKeys: []
  };
}
export const AccessTuple = {
  typeUrl: "/cosmos.evm.vm.v1.AccessTuple",
  aminoType: "cosmos-sdk/AccessTuple",
  is(o: any): o is AccessTuple {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storageKeys) && (!o.storageKeys.length || typeof o.storageKeys[0] === "string"));
  },
  isSDK(o: any): o is AccessTupleSDKType {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storage_keys) && (!o.storage_keys.length || typeof o.storage_keys[0] === "string"));
  },
  isAmino(o: any): o is AccessTupleAmino {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storage_keys) && (!o.storage_keys.length || typeof o.storage_keys[0] === "string"));
  },
  encode(message: AccessTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.storageKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessTuple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.storageKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessTuple {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      storageKeys: Array.isArray(object?.storageKeys) ? object.storageKeys.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AccessTuple): JsonSafe<AccessTuple> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.storageKeys) {
      obj.storageKeys = message.storageKeys.map(e => e);
    } else {
      obj.storageKeys = [];
    }
    return obj;
  },
  fromPartial(object: Partial<AccessTuple>): AccessTuple {
    const message = createBaseAccessTuple();
    message.address = object.address ?? "";
    message.storageKeys = object.storageKeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccessTupleAmino): AccessTuple {
    const message = createBaseAccessTuple();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.storageKeys = object.storage_keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: AccessTuple): AccessTupleAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.storageKeys) {
      obj.storage_keys = message.storageKeys.map(e => e);
    } else {
      obj.storage_keys = message.storageKeys;
    }
    return obj;
  },
  fromAminoMsg(object: AccessTupleAminoMsg): AccessTuple {
    return AccessTuple.fromAmino(object.value);
  },
  toAminoMsg(message: AccessTuple): AccessTupleAminoMsg {
    return {
      type: "cosmos-sdk/AccessTuple",
      value: AccessTuple.toAmino(message)
    };
  },
  fromProtoMsg(message: AccessTupleProtoMsg): AccessTuple {
    return AccessTuple.decode(message.value);
  },
  toProto(message: AccessTuple): Uint8Array {
    return AccessTuple.encode(message).finish();
  },
  toProtoMsg(message: AccessTuple): AccessTupleProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.AccessTuple",
      value: AccessTuple.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AccessTuple.typeUrl, AccessTuple);
GlobalDecoderRegistry.registerAminoProtoMapping(AccessTuple.aminoType, AccessTuple.typeUrl);
function createBaseTraceConfig(): TraceConfig {
  return {
    tracer: "",
    timeout: "",
    reexec: BigInt(0),
    disableStack: false,
    disableStorage: false,
    debug: false,
    limit: 0,
    overrides: undefined,
    enableMemory: false,
    enableReturnData: false,
    tracerJsonConfig: ""
  };
}
export const TraceConfig = {
  typeUrl: "/cosmos.evm.vm.v1.TraceConfig",
  aminoType: "cosmos-sdk/TraceConfig",
  is(o: any): o is TraceConfig {
    return o && (o.$typeUrl === TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disableStack === "boolean" && typeof o.disableStorage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enableMemory === "boolean" && typeof o.enableReturnData === "boolean" && typeof o.tracerJsonConfig === "string");
  },
  isSDK(o: any): o is TraceConfigSDKType {
    return o && (o.$typeUrl === TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disable_stack === "boolean" && typeof o.disable_storage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enable_memory === "boolean" && typeof o.enable_return_data === "boolean" && typeof o.tracer_json_config === "string");
  },
  isAmino(o: any): o is TraceConfigAmino {
    return o && (o.$typeUrl === TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disable_stack === "boolean" && typeof o.disable_storage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enable_memory === "boolean" && typeof o.enable_return_data === "boolean" && typeof o.tracer_json_config === "string");
  },
  encode(message: TraceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tracer !== "") {
      writer.uint32(10).string(message.tracer);
    }
    if (message.timeout !== "") {
      writer.uint32(18).string(message.timeout);
    }
    if (message.reexec !== BigInt(0)) {
      writer.uint32(24).uint64(message.reexec);
    }
    if (message.disableStack === true) {
      writer.uint32(40).bool(message.disableStack);
    }
    if (message.disableStorage === true) {
      writer.uint32(48).bool(message.disableStorage);
    }
    if (message.debug === true) {
      writer.uint32(64).bool(message.debug);
    }
    if (message.limit !== 0) {
      writer.uint32(72).int32(message.limit);
    }
    if (message.overrides !== undefined) {
      ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
    }
    if (message.enableMemory === true) {
      writer.uint32(88).bool(message.enableMemory);
    }
    if (message.enableReturnData === true) {
      writer.uint32(96).bool(message.enableReturnData);
    }
    if (message.tracerJsonConfig !== "") {
      writer.uint32(106).string(message.tracerJsonConfig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TraceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracer = reader.string();
          break;
        case 2:
          message.timeout = reader.string();
          break;
        case 3:
          message.reexec = reader.uint64();
          break;
        case 5:
          message.disableStack = reader.bool();
          break;
        case 6:
          message.disableStorage = reader.bool();
          break;
        case 8:
          message.debug = reader.bool();
          break;
        case 9:
          message.limit = reader.int32();
          break;
        case 10:
          message.overrides = ChainConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.enableMemory = reader.bool();
          break;
        case 12:
          message.enableReturnData = reader.bool();
          break;
        case 13:
          message.tracerJsonConfig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TraceConfig {
    return {
      tracer: isSet(object.tracer) ? String(object.tracer) : "",
      timeout: isSet(object.timeout) ? String(object.timeout) : "",
      reexec: isSet(object.reexec) ? BigInt(object.reexec.toString()) : BigInt(0),
      disableStack: isSet(object.disableStack) ? Boolean(object.disableStack) : false,
      disableStorage: isSet(object.disableStorage) ? Boolean(object.disableStorage) : false,
      debug: isSet(object.debug) ? Boolean(object.debug) : false,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      overrides: isSet(object.overrides) ? ChainConfig.fromJSON(object.overrides) : undefined,
      enableMemory: isSet(object.enableMemory) ? Boolean(object.enableMemory) : false,
      enableReturnData: isSet(object.enableReturnData) ? Boolean(object.enableReturnData) : false,
      tracerJsonConfig: isSet(object.tracerJsonConfig) ? String(object.tracerJsonConfig) : ""
    };
  },
  toJSON(message: TraceConfig): JsonSafe<TraceConfig> {
    const obj: any = {};
    message.tracer !== undefined && (obj.tracer = message.tracer);
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.reexec !== undefined && (obj.reexec = (message.reexec || BigInt(0)).toString());
    message.disableStack !== undefined && (obj.disableStack = message.disableStack);
    message.disableStorage !== undefined && (obj.disableStorage = message.disableStorage);
    message.debug !== undefined && (obj.debug = message.debug);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.overrides !== undefined && (obj.overrides = message.overrides ? ChainConfig.toJSON(message.overrides) : undefined);
    message.enableMemory !== undefined && (obj.enableMemory = message.enableMemory);
    message.enableReturnData !== undefined && (obj.enableReturnData = message.enableReturnData);
    message.tracerJsonConfig !== undefined && (obj.tracerJsonConfig = message.tracerJsonConfig);
    return obj;
  },
  fromPartial(object: Partial<TraceConfig>): TraceConfig {
    const message = createBaseTraceConfig();
    message.tracer = object.tracer ?? "";
    message.timeout = object.timeout ?? "";
    message.reexec = object.reexec !== undefined && object.reexec !== null ? BigInt(object.reexec.toString()) : BigInt(0);
    message.disableStack = object.disableStack ?? false;
    message.disableStorage = object.disableStorage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    message.overrides = object.overrides !== undefined && object.overrides !== null ? ChainConfig.fromPartial(object.overrides) : undefined;
    message.enableMemory = object.enableMemory ?? false;
    message.enableReturnData = object.enableReturnData ?? false;
    message.tracerJsonConfig = object.tracerJsonConfig ?? "";
    return message;
  },
  fromAmino(object: TraceConfigAmino): TraceConfig {
    const message = createBaseTraceConfig();
    if (object.tracer !== undefined && object.tracer !== null) {
      message.tracer = object.tracer;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout;
    }
    if (object.reexec !== undefined && object.reexec !== null) {
      message.reexec = BigInt(object.reexec);
    }
    if (object.disable_stack !== undefined && object.disable_stack !== null) {
      message.disableStack = object.disable_stack;
    }
    if (object.disable_storage !== undefined && object.disable_storage !== null) {
      message.disableStorage = object.disable_storage;
    }
    if (object.debug !== undefined && object.debug !== null) {
      message.debug = object.debug;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    if (object.overrides !== undefined && object.overrides !== null) {
      message.overrides = ChainConfig.fromAmino(object.overrides);
    }
    if (object.enable_memory !== undefined && object.enable_memory !== null) {
      message.enableMemory = object.enable_memory;
    }
    if (object.enable_return_data !== undefined && object.enable_return_data !== null) {
      message.enableReturnData = object.enable_return_data;
    }
    if (object.tracer_json_config !== undefined && object.tracer_json_config !== null) {
      message.tracerJsonConfig = object.tracer_json_config;
    }
    return message;
  },
  toAmino(message: TraceConfig): TraceConfigAmino {
    const obj: any = {};
    obj.tracer = message.tracer === "" ? undefined : message.tracer;
    obj.timeout = message.timeout === "" ? undefined : message.timeout;
    obj.reexec = message.reexec !== BigInt(0) ? message.reexec?.toString() : undefined;
    obj.disable_stack = message.disableStack ?? false;
    obj.disable_storage = message.disableStorage ?? false;
    obj.debug = message.debug === false ? undefined : message.debug;
    obj.limit = message.limit === 0 ? undefined : message.limit;
    obj.overrides = message.overrides ? ChainConfig.toAmino(message.overrides) : undefined;
    obj.enable_memory = message.enableMemory ?? false;
    obj.enable_return_data = message.enableReturnData ?? false;
    obj.tracer_json_config = message.tracerJsonConfig ?? "";
    return obj;
  },
  fromAminoMsg(object: TraceConfigAminoMsg): TraceConfig {
    return TraceConfig.fromAmino(object.value);
  },
  toAminoMsg(message: TraceConfig): TraceConfigAminoMsg {
    return {
      type: "cosmos-sdk/TraceConfig",
      value: TraceConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: TraceConfigProtoMsg): TraceConfig {
    return TraceConfig.decode(message.value);
  },
  toProto(message: TraceConfig): Uint8Array {
    return TraceConfig.encode(message).finish();
  },
  toProtoMsg(message: TraceConfig): TraceConfigProtoMsg {
    return {
      typeUrl: "/cosmos.evm.vm.v1.TraceConfig",
      value: TraceConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TraceConfig.typeUrl, TraceConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(TraceConfig.aminoType, TraceConfig.typeUrl);