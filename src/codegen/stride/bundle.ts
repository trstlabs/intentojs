import * as _117 from "./interchainquery/v1/messages";
import * as _180 from "./interchainquery/v1/messages.amino";
import * as _181 from "./interchainquery/v1/messages.registry";
import * as _182 from "./interchainquery/v1/messages.rpc.msg";
import * as _191 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._117,
      ..._180,
      ..._181,
      ..._182
    };
  }
  export const ClientFactory = {
    ..._191
  };
}