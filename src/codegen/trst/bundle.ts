import * as _90 from "./alloc/v1beta1/genesis";
import * as _91 from "./alloc/v1beta1/params";
import * as _92 from "./alloc/v1beta1/query";
import * as _93 from "./autoibctx/v1beta1/genesis";
import * as _94 from "./autoibctx/v1beta1/query";
import * as _95 from "./autoibctx/v1beta1/tx";
import * as _96 from "./autoibctx/v1beta1/types";
import * as _97 from "./autoibctx/v1beta1/usage";
import * as _98 from "./claim/v1beta1/claim";
import * as _99 from "./claim/v1beta1/genesis";
import * as _100 from "./claim/v1beta1/params";
import * as _101 from "./claim/v1beta1/query";
import * as _102 from "./mint/v1beta1/genesis";
import * as _103 from "./mint/v1beta1/mint";
import * as _104 from "./mint/v1beta1/query";
import * as _145 from "./alloc/v1beta1/query.lcd";
import * as _146 from "./autoibctx/v1beta1/query.lcd";
import * as _147 from "./claim/v1beta1/query.lcd";
import * as _148 from "./mint/v1beta1/query.lcd";
import * as _149 from "./alloc/v1beta1/query.rpc.Query";
import * as _150 from "./autoibctx/v1beta1/query.rpc.Query";
import * as _151 from "./claim/v1beta1/query.rpc.Query";
import * as _152 from "./mint/v1beta1/query.rpc.Query";
import * as _153 from "./autoibctx/v1beta1/tx.rpc.msg";
import * as _154 from "./claim/v1beta1/claim.rpc.msg";
import * as _160 from "./lcd";
import * as _161 from "./trst-rpc-client.query";
import * as _162 from "./trst-rpc-client.tx";
export namespace trst {
  export namespace alloc {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._145,
      ..._149
    };
  }
  export namespace autoibctx {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._146,
      ..._150,
      ..._153
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._147,
      ..._151,
      ..._154
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._148,
      ..._152
    };
  }
  export const ClientFactory = {
    ..._160,
    ..._161,
    ..._162
  };
}