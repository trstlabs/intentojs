import * as _140 from "./alloc/v1beta1/genesis";
import * as _141 from "./alloc/v1beta1/params";
import * as _142 from "./alloc/v1beta1/query";
import * as _143 from "./alloc/v1beta1/tx";
import * as _144 from "./claim/v1beta1/claim";
import * as _145 from "./claim/v1beta1/genesis";
import * as _146 from "./claim/v1beta1/params";
import * as _147 from "./claim/v1beta1/query";
import * as _148 from "./intent/v1beta1/flow";
import * as _149 from "./intent/v1beta1/genesis";
import * as _150 from "./intent/v1beta1/hostedaccount";
import * as _151 from "./intent/v1beta1/params";
import * as _152 from "./intent/v1beta1/query";
import * as _153 from "./intent/v1beta1/tx";
import * as _154 from "./mint/v1beta1/genesis";
import * as _155 from "./mint/v1beta1/mint";
import * as _156 from "./mint/v1beta1/query";
import * as _157 from "./mint/v1beta1/tx";
import * as _238 from "./alloc/v1beta1/tx.amino";
import * as _239 from "./claim/v1beta1/claim.amino";
import * as _240 from "./intent/v1beta1/tx.amino";
import * as _241 from "./mint/v1beta1/tx.amino";
import * as _242 from "./alloc/v1beta1/tx.registry";
import * as _243 from "./claim/v1beta1/claim.registry";
import * as _244 from "./intent/v1beta1/tx.registry";
import * as _245 from "./mint/v1beta1/tx.registry";
import * as _246 from "./alloc/v1beta1/query.rpc.Query";
import * as _247 from "./claim/v1beta1/query.rpc.Query";
import * as _248 from "./intent/v1beta1/query.rpc.Query";
import * as _249 from "./mint/v1beta1/query.rpc.Query";
import * as _250 from "./alloc/v1beta1/tx.rpc.msg";
import * as _251 from "./claim/v1beta1/claim.rpc.msg";
import * as _252 from "./intent/v1beta1/tx.rpc.msg";
import * as _253 from "./mint/v1beta1/tx.rpc.msg";
import * as _268 from "./rpc.query";
import * as _269 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._238,
      ..._242,
      ..._246,
      ..._250
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._239,
      ..._243,
      ..._247,
      ..._251
    };
  }
  export namespace intent {
    export const v1beta1 = {
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._240,
      ..._244,
      ..._248,
      ..._252
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._241,
      ..._245,
      ..._249,
      ..._253
    };
  }
  export const ClientFactory = {
    ..._268,
    ..._269
  };
}