import * as _161 from "./interchainquery/v1/genesis";
import * as _162 from "./interchainquery/v1/messages";
import * as _163 from "./interchainquery/v1/query";
import * as _258 from "./interchainquery/v1/messages.amino";
import * as _259 from "./interchainquery/v1/messages.registry";
import * as _260 from "./interchainquery/v1/messages.rpc.msg";
import * as _272 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._161,
      ..._162,
      ..._163,
      ..._258,
      ..._259,
      ..._260
    };
  }
  export const ClientFactory = {
    ..._272
  };
}