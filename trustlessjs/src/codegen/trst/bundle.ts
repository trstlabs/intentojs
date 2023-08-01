import * as _89 from "./alloc/v1beta1/genesis";
import * as _90 from "./alloc/v1beta1/params";
import * as _91 from "./alloc/v1beta1/query";
import * as _92 from "./autoibctx/v1beta1/genesis";
import * as _93 from "./autoibctx/v1beta1/query";
import * as _94 from "./autoibctx/v1beta1/tx";
import * as _95 from "./autoibctx/v1beta1/types";
import * as _96 from "./autoibctx/v1beta1/usage";
import * as _97 from "./claim/v1beta1/claim";
import * as _98 from "./claim/v1beta1/genesis";
import * as _99 from "./claim/v1beta1/params";
import * as _100 from "./claim/v1beta1/query";
import * as _101 from "./mint/v1beta1/genesis";
import * as _102 from "./mint/v1beta1/mint";
import * as _103 from "./mint/v1beta1/query";
import * as _146 from "./autoibctx/v1beta1/tx.amino";
import * as _147 from "./claim/v1beta1/claim.amino";
import * as _148 from "./autoibctx/v1beta1/tx.registry";
import * as _149 from "./claim/v1beta1/claim.registry";
import * as _150 from "./alloc/v1beta1/query.rpc.Query";
import * as _151 from "./autoibctx/v1beta1/query.rpc.Query";
import * as _152 from "./claim/v1beta1/query.rpc.Query";
import * as _153 from "./mint/v1beta1/query.rpc.Query";
import * as _154 from "./autoibctx/v1beta1/tx.rpc.msg";
import * as _155 from "./claim/v1beta1/claim.rpc.msg";
import * as _160 from "./rpc.query";
import * as _161 from "./rpc.tx";
export namespace trst {
  export namespace alloc {
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._150
    };
  }
  export namespace autoibctx {
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._146,
      ..._148,
      ..._151,
      ..._154
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._147,
      ..._149,
      ..._152,
      ..._155
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._153
    };
  }
  export const ClientFactory = {
    ..._160,
    ..._161
  };
}