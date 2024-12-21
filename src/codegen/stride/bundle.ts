import * as _109 from "./interchainquery/v1/messages";
import * as _168 from "./interchainquery/v1/messages.amino";
import * as _169 from "./interchainquery/v1/messages.registry";
import * as _170 from "./interchainquery/v1/messages.rpc.msg";
import * as _177 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._109,
      ..._168,
      ..._169,
      ..._170
    };
  }
  export const ClientFactory = {
    ..._177
  };
}