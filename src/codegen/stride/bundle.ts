import * as _156 from "./interchainquery/v1/genesis";
import * as _157 from "./interchainquery/v1/messages";
import * as _158 from "./interchainquery/v1/query";
import * as _249 from "./interchainquery/v1/messages.amino";
import * as _250 from "./interchainquery/v1/messages.registry";
import * as _251 from "./interchainquery/v1/messages.rpc.msg";
import * as _263 from "./rpc.tx";
export namespace stride {
  export namespace interchainquery {
    export const v1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._249,
      ..._250,
      ..._251
    };
  }
  export const ClientFactory = {
    ..._263
  };
}