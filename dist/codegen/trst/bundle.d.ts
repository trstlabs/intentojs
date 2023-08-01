import * as _90 from "./alloc/v1beta1/genesis";
import * as _91 from "./alloc/v1beta1/params";
import * as _92 from "./alloc/v1beta1/query";
import * as _93 from "./autoibctx/v1beta1/genesis";
import * as _94 from "./autoibctx/v1beta1/query";
import * as _95 from "./autoibctx/v1beta1/tx";
import * as _96 from "./autoibctx/v1beta1/types";
import * as _97 from "./autoibctx/v1beta1/usage";
import * as _98 from "./claim/v1beta1/claim";
import * as _99 from "./claim/v1beta1/genesis";
import * as _100 from "./claim/v1beta1/params";
import * as _101 from "./claim/v1beta1/query";
import * as _102 from "./mint/v1beta1/genesis";
import * as _103 from "./mint/v1beta1/mint";
import * as _104 from "./mint/v1beta1/query";
import * as _145 from "./alloc/v1beta1/query.lcd";
import * as _146 from "./autoibctx/v1beta1/query.lcd";
import * as _147 from "./claim/v1beta1/query.lcd";
import * as _148 from "./mint/v1beta1/query.lcd";
import * as _149 from "./alloc/v1beta1/query.rpc.Query";
import * as _150 from "./autoibctx/v1beta1/query.rpc.Query";
import * as _151 from "./claim/v1beta1/query.rpc.Query";
import * as _152 from "./mint/v1beta1/query.rpc.Query";
import * as _153 from "./autoibctx/v1beta1/tx.rpc.msg";
import * as _154 from "./claim/v1beta1/claim.rpc.msg";
export declare namespace trst {
    namespace alloc {
        const v1beta1: {
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryParamsRequest;
                fromPartial(_: {}): _92.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            staking?: string;
                            trustlessContractIncentives?: string;
                            relayerIncentives?: string;
                            contributorRewards?: string;
                            communityPool?: string;
                        };
                        weightedContributorRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    };
                }): _92.QueryParamsResponse;
            };
            WeightedAddress: {
                encode(message: _91.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _91.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _91.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    trustlessContractIncentives?: string;
                    relayerIncentives?: string;
                    contributorRewards?: string;
                    communityPool?: string;
                }): _91.DistributionProportions;
            };
            Params: {
                encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Params;
                fromPartial(object: {
                    distributionProportions?: {
                        staking?: string;
                        trustlessContractIncentives?: string;
                        relayerIncentives?: string;
                        contributorRewards?: string;
                        communityPool?: string;
                    };
                    weightedContributorRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                }): _91.Params;
            };
            GenesisState: {
                encode(message: _90.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.GenesisState;
                fromPartial(object: {
                    params?: {
                        distributionProportions?: {
                            staking?: string;
                            trustlessContractIncentives?: string;
                            relayerIncentives?: string;
                            contributorRewards?: string;
                            communityPool?: string;
                        };
                        weightedContributorRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    };
                }): _90.GenesisState;
            };
        };
    }
    namespace autoibctx {
        const v1beta1: {
            MsgClientImpl: typeof _153.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                interchainAccountFromAddress(request: _94.QueryInterchainAccountFromAddressRequest): Promise<_94.QueryInterchainAccountFromAddressResponse>;
                autoTx(request: _94.QueryAutoTxRequest): Promise<_94.QueryAutoTxResponse>;
                autoTxs(request?: _94.QueryAutoTxsRequest): Promise<_94.QueryAutoTxsResponse>;
                autoTxsForOwner(request: _94.QueryAutoTxsForOwnerRequest): Promise<_94.QueryAutoTxsForOwnerResponse>;
                params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                autoTxIbcTxUsage(request?: _94.QueryAutoTxIbcUsageRequest): Promise<_94.QueryAutoTxIbcUsageResponse>;
            };
            LCDQueryClient: typeof _146.LCDQueryClient;
            AutoTxIbcUsage: {
                encode(message: _97.AutoTxIbcUsage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.AutoTxIbcUsage;
                fromPartial(object: {
                    address?: string;
                    txs?: {
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        connectionId?: string;
                    }[];
                }): _97.AutoTxIbcUsage;
            };
            AutoIbcTxAck: {
                encode(message: _97.AutoIbcTxAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.AutoIbcTxAck;
                fromPartial(object: {
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    connectionId?: string;
                }): _97.AutoIbcTxAck;
            };
            AutoTxInfo: {
                encode(message: _96.AutoTxInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.AutoTxInfo;
                fromPartial(object: {
                    txId?: bigint;
                    owner?: string;
                    label?: string;
                    feeAddress?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    interval?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    startTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    execTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    autoTxHistory?: {
                        scheduledExecTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        actualExecTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        execFee?: {
                            denom?: string;
                            amount?: string;
                        };
                        executed?: boolean;
                        timedOut?: boolean;
                        error?: string;
                    }[];
                    portId?: string;
                    connectionId?: string;
                    dependsOnTxIds?: bigint[];
                    updateHistory?: {
                        seconds?: bigint;
                        nanos?: number;
                    }[];
                }): _96.AutoTxInfo;
            };
            AutoTxHistoryEntry: {
                encode(message: _96.AutoTxHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.AutoTxHistoryEntry;
                fromPartial(object: {
                    scheduledExecTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    actualExecTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    execFee?: {
                        denom?: string;
                        amount?: string;
                    };
                    executed?: boolean;
                    timedOut?: boolean;
                    error?: string;
                }): _96.AutoTxHistoryEntry;
            };
            Params: {
                encode(message: _96.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Params;
                fromPartial(object: {
                    AutoTxFundsCommission?: bigint;
                    AutoTxFlexFeeMul?: bigint;
                    AutoTxConstantFee?: bigint;
                    RecurringAutoTxConstantFee?: bigint;
                    MaxAutoTxDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    MinAutoTxDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    MinAutoTxInterval?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    relayerRewards?: bigint[];
                }): _96.Params;
            };
            MsgRegisterAccount: {
                encode(message: _95.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRegisterAccount;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    version?: string;
                }): _95.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _95.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRegisterAccountResponse;
                fromPartial(_: {}): _95.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _95.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSubmitTx;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    msg?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _95.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _95.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSubmitTxResponse;
                fromPartial(_: {}): _95.MsgSubmitTxResponse;
            };
            MsgSubmitAutoTx: {
                encode(message: _95.MsgSubmitAutoTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSubmitAutoTx;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    label?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    duration?: string;
                    startAt?: bigint;
                    interval?: string;
                    feeFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    dependsOnTxIds?: bigint[];
                }): _95.MsgSubmitAutoTx;
            };
            MsgSubmitAutoTxResponse: {
                encode(_: _95.MsgSubmitAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgSubmitAutoTxResponse;
                fromPartial(_: {}): _95.MsgSubmitAutoTxResponse;
            };
            MsgRegisterAccountAndSubmitAutoTx: {
                encode(message: _95.MsgRegisterAccountAndSubmitAutoTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRegisterAccountAndSubmitAutoTx;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    label?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    duration?: string;
                    startAt?: bigint;
                    interval?: string;
                    feeFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    dependsOnTxIds?: bigint[];
                    version?: string;
                }): _95.MsgRegisterAccountAndSubmitAutoTx;
            };
            MsgRegisterAccountAndSubmitAutoTxResponse: {
                encode(_: _95.MsgRegisterAccountAndSubmitAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgRegisterAccountAndSubmitAutoTxResponse;
                fromPartial(_: {}): _95.MsgRegisterAccountAndSubmitAutoTxResponse;
            };
            MsgUpdateAutoTx: {
                encode(message: _95.MsgUpdateAutoTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateAutoTx;
                fromPartial(object: {
                    owner?: string;
                    txId?: bigint;
                    connectionId?: string;
                    label?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    endTime?: bigint;
                    startAt?: bigint;
                    interval?: string;
                    feeFunds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    dependsOnTxIds?: bigint[];
                }): _95.MsgUpdateAutoTx;
            };
            MsgUpdateAutoTxResponse: {
                encode(_: _95.MsgUpdateAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.MsgUpdateAutoTxResponse;
                fromPartial(_: {}): _95.MsgUpdateAutoTxResponse;
            };
            QueryInterchainAccountFromAddressRequest: {
                encode(message: _94.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryInterchainAccountFromAddressRequest;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _94.QueryInterchainAccountFromAddressRequest;
            };
            QueryInterchainAccountFromAddressResponse: {
                encode(message: _94.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryInterchainAccountFromAddressResponse;
                fromPartial(object: {
                    interchainAccountAddress?: string;
                }): _94.QueryInterchainAccountFromAddressResponse;
            };
            QueryAutoTxRequest: {
                encode(message: _94.QueryAutoTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxRequest;
                fromPartial(object: {
                    id?: string;
                }): _94.QueryAutoTxRequest;
            };
            QueryAutoTxResponse: {
                encode(message: _94.QueryAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxResponse;
                fromPartial(object: {
                    autoTxInfo?: {
                        txId?: bigint;
                        owner?: string;
                        label?: string;
                        feeAddress?: string;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        interval?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        startTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        execTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        endTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        autoTxHistory?: {
                            scheduledExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            actualExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            execFee?: {
                                denom?: string;
                                amount?: string;
                            };
                            executed?: boolean;
                            timedOut?: boolean;
                            error?: string;
                        }[];
                        portId?: string;
                        connectionId?: string;
                        dependsOnTxIds?: bigint[];
                        updateHistory?: {
                            seconds?: bigint;
                            nanos?: number;
                        }[];
                    };
                }): _94.QueryAutoTxResponse;
            };
            QueryAutoTxsRequest: {
                encode(message: _94.QueryAutoTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _94.QueryAutoTxsRequest;
            };
            QueryAutoTxsResponse: {
                encode(message: _94.QueryAutoTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxsResponse;
                fromPartial(object: {
                    autoTxInfos?: {
                        txId?: bigint;
                        owner?: string;
                        label?: string;
                        feeAddress?: string;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        interval?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        startTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        execTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        endTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        autoTxHistory?: {
                            scheduledExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            actualExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            execFee?: {
                                denom?: string;
                                amount?: string;
                            };
                            executed?: boolean;
                            timedOut?: boolean;
                            error?: string;
                        }[];
                        portId?: string;
                        connectionId?: string;
                        dependsOnTxIds?: bigint[];
                        updateHistory?: {
                            seconds?: bigint;
                            nanos?: number;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _94.QueryAutoTxsResponse;
            };
            QueryAutoTxsForOwnerRequest: {
                encode(message: _94.QueryAutoTxsForOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxsForOwnerRequest;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _94.QueryAutoTxsForOwnerRequest;
            };
            QueryAutoTxsForOwnerResponse: {
                encode(message: _94.QueryAutoTxsForOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxsForOwnerResponse;
                fromPartial(object: {
                    autoTxInfos?: {
                        txId?: bigint;
                        owner?: string;
                        label?: string;
                        feeAddress?: string;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        interval?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        startTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        execTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        endTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        autoTxHistory?: {
                            scheduledExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            actualExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            execFee?: {
                                denom?: string;
                                amount?: string;
                            };
                            executed?: boolean;
                            timedOut?: boolean;
                            error?: string;
                        }[];
                        portId?: string;
                        connectionId?: string;
                        dependsOnTxIds?: bigint[];
                        updateHistory?: {
                            seconds?: bigint;
                            nanos?: number;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _94.QueryAutoTxsForOwnerResponse;
            };
            QueryParamsRequest: {
                encode(_: _94.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryParamsRequest;
                fromPartial(_: {}): _94.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _94.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        AutoTxFundsCommission?: bigint;
                        AutoTxFlexFeeMul?: bigint;
                        AutoTxConstantFee?: bigint;
                        RecurringAutoTxConstantFee?: bigint;
                        MaxAutoTxDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        MinAutoTxDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        MinAutoTxInterval?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        relayerRewards?: bigint[];
                    };
                }): _94.QueryParamsResponse;
            };
            QueryAutoTxIbcUsageRequest: {
                encode(message: _94.QueryAutoTxIbcUsageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxIbcUsageRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _94.QueryAutoTxIbcUsageRequest;
            };
            QueryAutoTxIbcUsageResponse: {
                encode(message: _94.QueryAutoTxIbcUsageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.QueryAutoTxIbcUsageResponse;
                fromPartial(object: {
                    autoTxIbcUsage?: {
                        address?: string;
                        txs?: {
                            coin?: {
                                denom?: string;
                                amount?: string;
                            };
                            connectionId?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _94.QueryAutoTxIbcUsageResponse;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.GenesisState;
                fromPartial(object: {
                    params?: {
                        AutoTxFundsCommission?: bigint;
                        AutoTxFlexFeeMul?: bigint;
                        AutoTxConstantFee?: bigint;
                        RecurringAutoTxConstantFee?: bigint;
                        MaxAutoTxDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        MinAutoTxDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        MinAutoTxInterval?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        relayerRewards?: bigint[];
                    };
                    interchainAccountAddresses?: string[];
                    autoTxInfos?: {
                        txId?: bigint;
                        owner?: string;
                        label?: string;
                        feeAddress?: string;
                        msgs?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        interval?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        startTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        execTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        endTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        autoTxHistory?: {
                            scheduledExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            actualExecTime?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            execFee?: {
                                denom?: string;
                                amount?: string;
                            };
                            executed?: boolean;
                            timedOut?: boolean;
                            error?: string;
                        }[];
                        portId?: string;
                        connectionId?: string;
                        dependsOnTxIds?: bigint[];
                        updateHistory?: {
                            seconds?: bigint;
                            nanos?: number;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: bigint;
                    }[];
                }): _93.GenesisState;
            };
            Sequence: {
                encode(message: _93.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: bigint;
                }): _93.Sequence;
            };
        };
    }
    namespace claim {
        const v1beta1: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _101.QueryModuleAccountBalanceRequest): Promise<_101.QueryModuleAccountBalanceResponse>;
                params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                claimRecord(request: _101.QueryClaimRecordRequest): Promise<_101.QueryClaimRecordResponse>;
                claimableForAction(request: _101.QueryClaimableForActionRequest): Promise<_101.QueryClaimableForActionResponse>;
                totalClaimable(request: _101.QueryTotalClaimableRequest): Promise<_101.QueryTotalClaimableResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            QueryModuleAccountBalanceRequest: {
                encode(_: _101.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryModuleAccountBalanceRequest;
                fromPartial(_: {}): _101.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _101.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryModuleAccountBalanceResponse;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _101.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _101.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryParamsRequest;
                fromPartial(_: {}): _101.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _101.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        airdropStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        claimDenom?: string;
                        durationVestingPeriods?: {
                            seconds?: bigint;
                            nanos?: number;
                        }[];
                    };
                }): _101.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _101.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryClaimRecordRequest;
                fromPartial(object: {
                    address?: string;
                }): _101.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _101.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryClaimRecordResponse;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: {
                            actionCompleted?: boolean;
                            vestingPeriodCompleted?: boolean[];
                            vestingPeriodClaimed?: boolean[];
                        }[];
                    };
                }): _101.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _101.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryClaimableForActionRequest;
                fromPartial(object: {
                    address?: string;
                    action?: _98.Action;
                }): _101.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _101.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryClaimableForActionResponse;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _101.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _101.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryTotalClaimableRequest;
                fromPartial(object: {
                    address?: string;
                }): _101.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _101.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.QueryTotalClaimableResponse;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _101.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _100.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Params;
                fromPartial(object: {
                    airdropStartTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    durationUntilDecay?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    durationOfDecay?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    claimDenom?: string;
                    durationVestingPeriods?: {
                        seconds?: bigint;
                        nanos?: number;
                    }[];
                }): _100.Params;
            };
            GenesisState: {
                encode(message: _99.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.GenesisState;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    params?: {
                        airdropStartTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationUntilDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        claimDenom?: string;
                        durationVestingPeriods?: {
                            seconds?: bigint;
                            nanos?: number;
                        }[];
                    };
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        status?: {
                            actionCompleted?: boolean;
                            vestingPeriodCompleted?: boolean[];
                            vestingPeriodClaimed?: boolean[];
                        }[];
                    }[];
                }): _99.GenesisState;
            };
            actionFromJSON(object: any): _98.Action;
            actionToJSON(object: _98.Action): string;
            Action: typeof _98.Action;
            ActionSDKType: typeof _98.Action;
            ClaimRecord: {
                encode(message: _98.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.ClaimRecord;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    status?: {
                        actionCompleted?: boolean;
                        vestingPeriodCompleted?: boolean[];
                        vestingPeriodClaimed?: boolean[];
                    }[];
                }): _98.ClaimRecord;
            };
            Status: {
                encode(message: _98.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Status;
                fromPartial(object: {
                    actionCompleted?: boolean;
                    vestingPeriodCompleted?: boolean[];
                    vestingPeriodClaimed?: boolean[];
                }): _98.Status;
            };
            MsgClaimClaimable: {
                encode(message: _98.MsgClaimClaimable, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgClaimClaimable;
                fromPartial(object: {
                    sender?: string;
                }): _98.MsgClaimClaimable;
            };
            MsgClaimClaimableResponse: {
                encode(message: _98.MsgClaimClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.MsgClaimClaimableResponse;
                fromPartial(object: {
                    claimedAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _98.MsgClaimClaimableResponse;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _152.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                annualProvisions(request?: _104.QueryAnnualProvisionsRequest): Promise<_104.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _104.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryParamsRequest;
                fromPartial(_: {}): _104.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _104.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        startTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: bigint;
                    };
                }): _104.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _104.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _104.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _104.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _104.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _104.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _103.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Minter;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _103.Minter;
            };
            Params: {
                encode(message: _103.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _103.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: bigint;
                }): _103.Params;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.GenesisState;
                fromPartial(object: {
                    minter?: {
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        startTime?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: bigint;
                    };
                }): _102.GenesisState;
            };
        };
    }
    const ClientFactory: {
        trstCreateRPCTxClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            trst: {
                autoibctx: {
                    v1beta1: _153.MsgClientImpl;
                };
                claim: {
                    v1beta1: _154.MsgClientImpl;
                };
            };
        }>;
        trstCreateRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            trst: {
                alloc: {
                    v1beta1: {
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                autoibctx: {
                    v1beta1: {
                        interchainAccountFromAddress(request: _94.QueryInterchainAccountFromAddressRequest): Promise<_94.QueryInterchainAccountFromAddressResponse>;
                        autoTx(request: _94.QueryAutoTxRequest): Promise<_94.QueryAutoTxResponse>;
                        autoTxs(request?: _94.QueryAutoTxsRequest): Promise<_94.QueryAutoTxsResponse>;
                        autoTxsForOwner(request: _94.QueryAutoTxsForOwnerRequest): Promise<_94.QueryAutoTxsForOwnerResponse>;
                        params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                        autoTxIbcTxUsage(request?: _94.QueryAutoTxIbcUsageRequest): Promise<_94.QueryAutoTxIbcUsageResponse>;
                    };
                };
                claim: {
                    v1beta1: {
                        moduleAccountBalance(request?: _101.QueryModuleAccountBalanceRequest): Promise<_101.QueryModuleAccountBalanceResponse>;
                        params(request?: _101.QueryParamsRequest): Promise<_101.QueryParamsResponse>;
                        claimRecord(request: _101.QueryClaimRecordRequest): Promise<_101.QueryClaimRecordResponse>;
                        claimableForAction(request: _101.QueryClaimableForActionRequest): Promise<_101.QueryClaimableForActionResponse>;
                        totalClaimable(request: _101.QueryTotalClaimableRequest): Promise<_101.QueryTotalClaimableResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        annualProvisions(request?: _104.QueryAnnualProvisionsRequest): Promise<_104.QueryAnnualProvisionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    reflection: {
                        v2alpha1: import("../cosmos/base/reflection/v2alpha1/reflection.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            trst: {
                alloc: {
                    v1beta1: _145.LCDQueryClient;
                };
                autoibctx: {
                    v1beta1: _146.LCDQueryClient;
                };
                claim: {
                    v1beta1: _147.LCDQueryClient;
                };
                mint: {
                    v1beta1: _148.LCDQueryClient;
                };
            };
        }>;
    };
}
