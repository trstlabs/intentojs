import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponseSDKType, QueryAutoTxRequest, QueryAutoTxResponseSDKType, QueryAutoTxsRequest, QueryAutoTxsResponseSDKType, QueryAutoTxsForOwnerRequest, QueryAutoTxsForOwnerResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryAutoTxIbcUsageRequest, QueryAutoTxIbcUsageResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.interchainAccountFromAddress = this.interchainAccountFromAddress.bind(this);
    this.autoTx = this.autoTx.bind(this);
    this.autoTxs = this.autoTxs.bind(this);
    this.autoTxsForOwner = this.autoTxsForOwner.bind(this);
    this.params = this.params.bind(this);
    this.autoTxIbcTxUsage = this.autoTxIbcTxUsage.bind(this);
  }
  /* QueryInterchainAccountFromAddress returns the interchain account for given
   owner address on a given connection pair */
  async interchainAccountFromAddress(params: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }
    const endpoint = `auto-ibc-tx/v1beta1/address-to-ica`;
    return await this.req.get<QueryInterchainAccountFromAddressResponseSDKType>(endpoint, options);
  }
  /* AutoTx returns the auto-executing interchain account tx */
  async autoTx(params: QueryAutoTxRequest): Promise<QueryAutoTxResponseSDKType> {
    const endpoint = `auto-ibc-tx/v1beta1/auto-tx/${params.id}`;
    return await this.req.get<QueryAutoTxResponseSDKType>(endpoint);
  }
  /* AutoTxs returns the all auto-executing interchain account messages */
  async autoTxs(params: QueryAutoTxsRequest = {
    pagination: undefined
  }): Promise<QueryAutoTxsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `auto-ibc-tx/v1beta1/auto-txs`;
    return await this.req.get<QueryAutoTxsResponseSDKType>(endpoint, options);
  }
  /* AutoTxsForOwner returns the auto-executing interchain account messages for
   given owner */
  async autoTxsForOwner(params: QueryAutoTxsForOwnerRequest): Promise<QueryAutoTxsForOwnerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `auto-ibc-tx/v1beta1/auto-txs-for-owner/${params.owner}`;
    return await this.req.get<QueryAutoTxsForOwnerResponseSDKType>(endpoint, options);
  }
  /* Params returns the total set of AutoIbcTx parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `auto-ibc-tx/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* AutoTxIbcTxUsage returns statistics on usage of IBC transactions */
  async autoTxIbcTxUsage(params: QueryAutoTxIbcUsageRequest = {
    pagination: undefined
  }): Promise<QueryAutoTxIbcUsageResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `auto-ibc-tx/v1beta1/auto-tx-ibc-usage`;
    return await this.req.get<QueryAutoTxIbcUsageResponseSDKType>(endpoint, options);
  }
}