import * as _113 from "./interchainquery/v1/genesis";
import * as _114 from "./interchainquery/v1/messages";
import * as _115 from "./interchainquery/v1/query";
import * as _178 from "./interchainquery/v1/messages.amino";
import * as _179 from "./interchainquery/v1/messages.registry";
import * as _180 from "./interchainquery/v1/messages.rpc.msg";
import * as _189 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._113,
      ..._114,
      ..._115,
      ..._178,
      ..._179,
      ..._180
    };
  }
  export const ClientFactory = {
    ..._189
  };
}