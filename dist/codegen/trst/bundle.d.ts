import * as _88 from "./alloc/v1beta1/genesis";
import * as _89 from "./alloc/v1beta1/params";
import * as _90 from "./alloc/v1beta1/query";
import * as _91 from "./autoibctx/v1beta1/genesis";
import * as _92 from "./autoibctx/v1beta1/query";
import * as _93 from "./autoibctx/v1beta1/tx";
import * as _94 from "./autoibctx/v1beta1/types";
import * as _95 from "./autoibctx/v1beta1/usage";
import * as _96 from "./claim/v1beta1/claim";
import * as _97 from "./claim/v1beta1/genesis";
import * as _98 from "./claim/v1beta1/params";
import * as _99 from "./claim/v1beta1/query";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _138 from "./alloc/v1beta1/query.lcd";
import * as _139 from "./autoibctx/v1beta1/query.lcd";
import * as _140 from "./claim/v1beta1/query.lcd";
import * as _141 from "./mint/v1beta1/query.lcd";
import * as _142 from "./alloc/v1beta1/query.rpc.Query";
import * as _143 from "./autoibctx/v1beta1/query.rpc.Query";
import * as _144 from "./claim/v1beta1/query.rpc.Query";
import * as _145 from "./mint/v1beta1/query.rpc.Query";
import * as _146 from "./autoibctx/v1beta1/tx.rpc.msg";
import * as _147 from "./claim/v1beta1/claim.rpc.msg";
export declare namespace trst {
    namespace alloc {
        const v1beta1: {
            QueryClientImpl: typeof _142.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryParamsRequest;
                fromPartial(_: {}): _90.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _90.QueryParamsResponse;
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
                }): _90.QueryParamsResponse;
            };
            WeightedAddress: {
                encode(message: _89.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.WeightedAddress;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _89.WeightedAddress;
            };
            DistributionProportions: {
                encode(message: _89.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.DistributionProportions;
                fromPartial(object: {
                    staking?: string;
                    trustlessContractIncentives?: string;
                    relayerIncentives?: string;
                    contributorRewards?: string;
                    communityPool?: string;
                }): _89.DistributionProportions;
            };
            Params: {
                encode(message: _89.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _89.Params;
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
                }): _89.Params;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _88.GenesisState;
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
                }): _88.GenesisState;
            };
        };
    }
    namespace autoibctx {
        const v1beta1: {
            MsgClientImpl: typeof _146.MsgClientImpl;
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                interchainAccountFromAddress(request: _92.QueryInterchainAccountFromAddressRequest): Promise<_92.QueryInterchainAccountFromAddressResponse>;
                autoTx(request: _92.QueryAutoTxRequest): Promise<_92.QueryAutoTxResponse>;
                autoTxs(request?: _92.QueryAutoTxsRequest): Promise<_92.QueryAutoTxsResponse>;
                autoTxsForOwner(request: _92.QueryAutoTxsForOwnerRequest): Promise<_92.QueryAutoTxsForOwnerResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                autoTxIbcTxUsage(request?: _92.QueryAutoTxIbcUsageRequest): Promise<_92.QueryAutoTxIbcUsageResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            AutoTxIbcUsage: {
                encode(message: _95.AutoTxIbcUsage, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.AutoTxIbcUsage;
                fromPartial(object: {
                    address?: string;
                    txs?: {
                        coin?: {
                            denom?: string;
                            amount?: string;
                        };
                        connectionId?: string;
                    }[];
                }): _95.AutoTxIbcUsage;
            };
            AutoIbcTxAck: {
                encode(message: _95.AutoIbcTxAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _95.AutoIbcTxAck;
                fromPartial(object: {
                    coin?: {
                        denom?: string;
                        amount?: string;
                    };
                    connectionId?: string;
                }): _95.AutoIbcTxAck;
            };
            AutoTxInfo: {
                encode(message: _94.AutoTxInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.AutoTxInfo;
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
                }): _94.AutoTxInfo;
            };
            AutoTxHistoryEntry: {
                encode(message: _94.AutoTxHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.AutoTxHistoryEntry;
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
                }): _94.AutoTxHistoryEntry;
            };
            Params: {
                encode(message: _94.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _94.Params;
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
                }): _94.Params;
            };
            MsgRegisterAccount: {
                encode(message: _93.MsgRegisterAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgRegisterAccount;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    version?: string;
                }): _93.MsgRegisterAccount;
            };
            MsgRegisterAccountResponse: {
                encode(_: _93.MsgRegisterAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgRegisterAccountResponse;
                fromPartial(_: {}): _93.MsgRegisterAccountResponse;
            };
            MsgSubmitTx: {
                encode(message: _93.MsgSubmitTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgSubmitTx;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                    msg?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _93.MsgSubmitTx;
            };
            MsgSubmitTxResponse: {
                encode(_: _93.MsgSubmitTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgSubmitTxResponse;
                fromPartial(_: {}): _93.MsgSubmitTxResponse;
            };
            MsgSubmitAutoTx: {
                encode(message: _93.MsgSubmitAutoTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgSubmitAutoTx;
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
                }): _93.MsgSubmitAutoTx;
            };
            MsgSubmitAutoTxResponse: {
                encode(_: _93.MsgSubmitAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgSubmitAutoTxResponse;
                fromPartial(_: {}): _93.MsgSubmitAutoTxResponse;
            };
            MsgRegisterAccountAndSubmitAutoTx: {
                encode(message: _93.MsgRegisterAccountAndSubmitAutoTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgRegisterAccountAndSubmitAutoTx;
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
                }): _93.MsgRegisterAccountAndSubmitAutoTx;
            };
            MsgRegisterAccountAndSubmitAutoTxResponse: {
                encode(_: _93.MsgRegisterAccountAndSubmitAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgRegisterAccountAndSubmitAutoTxResponse;
                fromPartial(_: {}): _93.MsgRegisterAccountAndSubmitAutoTxResponse;
            };
            MsgUpdateAutoTx: {
                encode(message: _93.MsgUpdateAutoTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgUpdateAutoTx;
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
                }): _93.MsgUpdateAutoTx;
            };
            MsgUpdateAutoTxResponse: {
                encode(_: _93.MsgUpdateAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _93.MsgUpdateAutoTxResponse;
                fromPartial(_: {}): _93.MsgUpdateAutoTxResponse;
            };
            QueryInterchainAccountFromAddressRequest: {
                encode(message: _92.QueryInterchainAccountFromAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryInterchainAccountFromAddressRequest;
                fromPartial(object: {
                    owner?: string;
                    connectionId?: string;
                }): _92.QueryInterchainAccountFromAddressRequest;
            };
            QueryInterchainAccountFromAddressResponse: {
                encode(message: _92.QueryInterchainAccountFromAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryInterchainAccountFromAddressResponse;
                fromPartial(object: {
                    interchainAccountAddress?: string;
                }): _92.QueryInterchainAccountFromAddressResponse;
            };
            QueryAutoTxRequest: {
                encode(message: _92.QueryAutoTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxRequest;
                fromPartial(object: {
                    id?: string;
                }): _92.QueryAutoTxRequest;
            };
            QueryAutoTxResponse: {
                encode(message: _92.QueryAutoTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxResponse;
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
                }): _92.QueryAutoTxResponse;
            };
            QueryAutoTxsRequest: {
                encode(message: _92.QueryAutoTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryAutoTxsRequest;
            };
            QueryAutoTxsResponse: {
                encode(message: _92.QueryAutoTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxsResponse;
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
                }): _92.QueryAutoTxsResponse;
            };
            QueryAutoTxsForOwnerRequest: {
                encode(message: _92.QueryAutoTxsForOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxsForOwnerRequest;
                fromPartial(object: {
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryAutoTxsForOwnerRequest;
            };
            QueryAutoTxsForOwnerResponse: {
                encode(message: _92.QueryAutoTxsForOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxsForOwnerResponse;
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
                }): _92.QueryAutoTxsForOwnerResponse;
            };
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
                }): _92.QueryParamsResponse;
            };
            QueryAutoTxIbcUsageRequest: {
                encode(message: _92.QueryAutoTxIbcUsageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxIbcUsageRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _92.QueryAutoTxIbcUsageRequest;
            };
            QueryAutoTxIbcUsageResponse: {
                encode(message: _92.QueryAutoTxIbcUsageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _92.QueryAutoTxIbcUsageResponse;
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
                }): _92.QueryAutoTxIbcUsageResponse;
            };
            GenesisState: {
                encode(message: _91.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.GenesisState;
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
                }): _91.GenesisState;
            };
            Sequence: {
                encode(message: _91.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _91.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: bigint;
                }): _91.Sequence;
            };
        };
    }
    namespace claim {
        const v1beta1: {
            MsgClientImpl: typeof _147.MsgClientImpl;
            QueryClientImpl: typeof _144.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _99.QueryModuleAccountBalanceRequest): Promise<_99.QueryModuleAccountBalanceResponse>;
                params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                claimRecord(request: _99.QueryClaimRecordRequest): Promise<_99.QueryClaimRecordResponse>;
                claimableForAction(request: _99.QueryClaimableForActionRequest): Promise<_99.QueryClaimableForActionResponse>;
                totalClaimable(request: _99.QueryTotalClaimableRequest): Promise<_99.QueryTotalClaimableResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            QueryModuleAccountBalanceRequest: {
                encode(_: _99.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryModuleAccountBalanceRequest;
                fromPartial(_: {}): _99.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _99.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryModuleAccountBalanceResponse;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _99.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _99.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryParamsRequest;
                fromPartial(_: {}): _99.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _99.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryParamsResponse;
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
                }): _99.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _99.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClaimRecordRequest;
                fromPartial(object: {
                    address?: string;
                }): _99.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _99.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClaimRecordResponse;
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
                }): _99.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _99.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClaimableForActionRequest;
                fromPartial(object: {
                    address?: string;
                    action?: _96.Action;
                }): _99.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _99.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryClaimableForActionResponse;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _99.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _99.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryTotalClaimableRequest;
                fromPartial(object: {
                    address?: string;
                }): _99.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _99.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.QueryTotalClaimableResponse;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _99.QueryTotalClaimableResponse;
            };
            Params: {
                encode(message: _98.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Params;
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
                }): _98.Params;
            };
            GenesisState: {
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.GenesisState;
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
                }): _97.GenesisState;
            };
            actionFromJSON(object: any): _96.Action;
            actionToJSON(object: _96.Action): string;
            Action: typeof _96.Action;
            ActionSDKType: typeof _96.Action;
            ClaimRecord: {
                encode(message: _96.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.ClaimRecord;
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
                }): _96.ClaimRecord;
            };
            Status: {
                encode(message: _96.Status, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.Status;
                fromPartial(object: {
                    actionCompleted?: boolean;
                    vestingPeriodCompleted?: boolean[];
                    vestingPeriodClaimed?: boolean[];
                }): _96.Status;
            };
            MsgClaimClaimable: {
                encode(message: _96.MsgClaimClaimable, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MsgClaimClaimable;
                fromPartial(object: {
                    sender?: string;
                }): _96.MsgClaimClaimable;
            };
            MsgClaimClaimableResponse: {
                encode(message: _96.MsgClaimClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _96.MsgClaimClaimableResponse;
                fromPartial(object: {
                    claimedAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _96.MsgClaimClaimableResponse;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _145.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                annualProvisions(request?: _102.QueryAnnualProvisionsRequest): Promise<_102.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _102.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QueryParamsRequest;
                fromPartial(_: {}): _102.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _102.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QueryParamsResponse;
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
                }): _102.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _102.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _102.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _102.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _102.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _101.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Minter;
                fromPartial(object: {
                    annualProvisions?: string;
                }): _101.Minter;
            };
            Params: {
                encode(message: _101.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    startTime?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: bigint;
                }): _101.Params;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.GenesisState;
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
                }): _100.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            trst: {
                autoibctx: {
                    v1beta1: _146.MsgClientImpl;
                };
                claim: {
                    v1beta1: _147.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            trst: {
                alloc: {
                    v1beta1: {
                        params(request?: _90.QueryParamsRequest): Promise<_90.QueryParamsResponse>;
                    };
                };
                autoibctx: {
                    v1beta1: {
                        interchainAccountFromAddress(request: _92.QueryInterchainAccountFromAddressRequest): Promise<_92.QueryInterchainAccountFromAddressResponse>;
                        autoTx(request: _92.QueryAutoTxRequest): Promise<_92.QueryAutoTxResponse>;
                        autoTxs(request?: _92.QueryAutoTxsRequest): Promise<_92.QueryAutoTxsResponse>;
                        autoTxsForOwner(request: _92.QueryAutoTxsForOwnerRequest): Promise<_92.QueryAutoTxsForOwnerResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                        autoTxIbcTxUsage(request?: _92.QueryAutoTxIbcUsageRequest): Promise<_92.QueryAutoTxIbcUsageResponse>;
                    };
                };
                claim: {
                    v1beta1: {
                        moduleAccountBalance(request?: _99.QueryModuleAccountBalanceRequest): Promise<_99.QueryModuleAccountBalanceResponse>;
                        params(request?: _99.QueryParamsRequest): Promise<_99.QueryParamsResponse>;
                        claimRecord(request: _99.QueryClaimRecordRequest): Promise<_99.QueryClaimRecordResponse>;
                        claimableForAction(request: _99.QueryClaimableForActionRequest): Promise<_99.QueryClaimableForActionResponse>;
                        totalClaimable(request: _99.QueryTotalClaimableRequest): Promise<_99.QueryTotalClaimableResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _102.QueryParamsRequest): Promise<_102.QueryParamsResponse>;
                        annualProvisions(request?: _102.QueryAnnualProvisionsRequest): Promise<_102.QueryAnnualProvisionsResponse>;
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
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
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
                    v1beta1: _138.LCDQueryClient;
                };
                autoibctx: {
                    v1beta1: _139.LCDQueryClient;
                };
                claim: {
                    v1beta1: _140.LCDQueryClient;
                };
                mint: {
                    v1beta1: _141.LCDQueryClient;
                };
            };
        }>;
    };
}
