import * as _87 from "./alloc/v1beta1/genesis";
import * as _88 from "./alloc/v1beta1/params";
import * as _89 from "./alloc/v1beta1/query";
import * as _90 from "./claim/v1beta1/claim";
import * as _91 from "./claim/v1beta1/genesis";
import * as _92 from "./claim/v1beta1/params";
import * as _93 from "./claim/v1beta1/query";
import * as _94 from "./intent/v1beta1/action";
import * as _95 from "./intent/v1beta1/genesis";
import * as _96 from "./intent/v1beta1/params";
import * as _97 from "./intent/v1beta1/query";
import * as _98 from "./intent/v1beta1/tx";
import * as _99 from "./intent/v1beta1/usage";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _147 from "./claim/v1beta1/claim.amino";
import * as _148 from "./intent/v1beta1/tx.amino";
import * as _149 from "./claim/v1beta1/claim.registry";
import * as _150 from "./intent/v1beta1/tx.registry";
import * as _151 from "./alloc/v1beta1/query.rpc.Query";
import * as _152 from "./claim/v1beta1/query.rpc.Query";
import * as _153 from "./intent/v1beta1/query.rpc.Query";
import * as _154 from "./mint/v1beta1/query.rpc.Query";
import * as _155 from "./claim/v1beta1/claim.rpc.msg";
import * as _156 from "./intent/v1beta1/tx.rpc.msg";
import * as _161 from "./rpc.query";
import * as _162 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._151
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._147,
      ..._149,
      ..._152,
      ..._155
    };
  }
  export namespace intent {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._148,
      ..._150,
      ..._153,
      ..._156
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._154
    };
  }
  export const ClientFactory = {
    ..._161,
    ..._162
  };
}