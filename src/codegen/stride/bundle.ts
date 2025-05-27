import * as _152 from "./interchainquery/v1/genesis";
import * as _153 from "./interchainquery/v1/messages";
import * as _154 from "./interchainquery/v1/query";
import * as _239 from "./interchainquery/v1/messages.amino";
import * as _240 from "./interchainquery/v1/messages.registry";
import * as _241 from "./interchainquery/v1/messages.rpc.msg";
import * as _252 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._152,
      ..._153,
      ..._154,
      ..._239,
      ..._240,
      ..._241
    };
  }
  export const ClientFactory = {
    ..._252
  };
}