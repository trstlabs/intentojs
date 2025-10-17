import * as _160 from "./interchainquery/v1/genesis";
import * as _161 from "./interchainquery/v1/messages";
import * as _162 from "./interchainquery/v1/query";
import * as _257 from "./interchainquery/v1/messages.amino";
import * as _258 from "./interchainquery/v1/messages.registry";
import * as _259 from "./interchainquery/v1/messages.rpc.msg";
import * as _271 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._160,
      ..._161,
      ..._162,
      ..._257,
      ..._258,
      ..._259
    };
  }
  export const ClientFactory = {
    ..._271
  };
}