import * as _86 from "./alloc/v1beta1/genesis";
import * as _87 from "./alloc/v1beta1/params";
import * as _88 from "./alloc/v1beta1/query";
import * as _89 from "./claim/v1beta1/claim";
import * as _90 from "./claim/v1beta1/genesis";
import * as _91 from "./claim/v1beta1/params";
import * as _92 from "./claim/v1beta1/query";
import * as _93 from "./intent/v1beta1/action";
import * as _94 from "./intent/v1beta1/genesis";
import * as _95 from "./intent/v1beta1/params";
import * as _96 from "./intent/v1beta1/query";
import * as _97 from "./intent/v1beta1/tx";
import * as _98 from "./intent/v1beta1/usage";
import * as _99 from "./mint/v1beta1/genesis";
import * as _100 from "./mint/v1beta1/mint";
import * as _101 from "./mint/v1beta1/query";
import * as _144 from "./claim/v1beta1/claim.amino";
import * as _145 from "./intent/v1beta1/tx.amino";
import * as _146 from "./claim/v1beta1/claim.registry";
import * as _147 from "./intent/v1beta1/tx.registry";
import * as _148 from "./alloc/v1beta1/query.rpc.Query";
import * as _149 from "./claim/v1beta1/query.rpc.Query";
import * as _150 from "./intent/v1beta1/query.rpc.Query";
import * as _151 from "./mint/v1beta1/query.rpc.Query";
import * as _152 from "./claim/v1beta1/claim.rpc.msg";
import * as _153 from "./intent/v1beta1/tx.rpc.msg";
import * as _158 from "./rpc.query";
import * as _159 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._148
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._144,
      ..._146,
      ..._149,
      ..._152
    };
  }
  export namespace intent {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._145,
      ..._147,
      ..._150,
      ..._153
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._99,
      ..._100,
      ..._101,
      ..._151
    };
  }
  export const ClientFactory = {
    ..._158,
    ..._159
  };
}