import * as _136 from "./alloc/v1/genesis";
import * as _137 from "./alloc/v1/params";
import * as _138 from "./alloc/v1/query";
import * as _139 from "./alloc/v1/tx";
import * as _140 from "./claim/v1/claim";
import * as _141 from "./claim/v1/genesis";
import * as _142 from "./claim/v1/params";
import * as _143 from "./claim/v1/query";
import * as _144 from "./intent/v1/flow";
import * as _145 from "./intent/v1/genesis";
import * as _146 from "./intent/v1/params";
import * as _147 from "./intent/v1/query";
import * as _148 from "./intent/v1/trustless_agent";
import * as _149 from "./intent/v1/tx";
import * as _150 from "./mint/v1/genesis";
import * as _151 from "./mint/v1/mint";
import * as _152 from "./mint/v1/query";
import * as _153 from "./mint/v1/tx";
import * as _230 from "./alloc/v1/tx.amino";
import * as _231 from "./claim/v1/claim.amino";
import * as _232 from "./intent/v1/tx.amino";
import * as _233 from "./mint/v1/tx.amino";
import * as _234 from "./alloc/v1/tx.registry";
import * as _235 from "./claim/v1/claim.registry";
import * as _236 from "./intent/v1/tx.registry";
import * as _237 from "./mint/v1/tx.registry";
import * as _238 from "./alloc/v1/query.rpc.Query";
import * as _239 from "./claim/v1/query.rpc.Query";
import * as _240 from "./intent/v1/query.rpc.Query";
import * as _241 from "./mint/v1/query.rpc.Query";
import * as _242 from "./alloc/v1/tx.rpc.msg";
import * as _243 from "./claim/v1/claim.rpc.msg";
import * as _244 from "./intent/v1/tx.rpc.msg";
import * as _245 from "./mint/v1/tx.rpc.msg";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._230,
      ..._234,
      ..._238,
      ..._242
    };
  }
  export namespace claim {
    export const v1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._231,
      ..._235,
      ..._239,
      ..._243
    };
  }
  export namespace intent {
    export const v1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._232,
      ..._236,
      ..._240,
      ..._244
    };
  }
  export namespace mint {
    export const v1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._233,
      ..._237,
      ..._241,
      ..._245
    };
  }
  export const ClientFactory = {
    ..._260,
    ..._261
  };
}