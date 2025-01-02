import * as _116 from "./interchainquery/v1/messages";
import * as _179 from "./interchainquery/v1/messages.amino";
import * as _180 from "./interchainquery/v1/messages.registry";
import * as _181 from "./interchainquery/v1/messages.rpc.msg";
import * as _190 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._116,
      ..._179,
      ..._180,
      ..._181
    };
  }
  export const ClientFactory = {
    ..._190
  };
}