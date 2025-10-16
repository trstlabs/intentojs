import * as _43 from "./wasm/v1/authz";
import * as _44 from "./wasm/v1/genesis";
import * as _45 from "./wasm/v1/ibc";
import * as _46 from "./wasm/v1/proposal";
import * as _47 from "./wasm/v1/query";
import * as _48 from "./wasm/v1/tx";
import * as _49 from "./wasm/v1/types";
import * as _184 from "./wasm/v1/tx.amino";
import * as _185 from "./wasm/v1/tx.registry";
import * as _186 from "./wasm/v1/query.rpc.Query";
import * as _187 from "./wasm/v1/tx.rpc.msg";
import * as _254 from "./rpc.query";
import * as _255 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._184,
      ..._185,
      ..._186,
      ..._187
    };
  }
  export const ClientFactory = {
    ..._254,
    ..._255
  };
}