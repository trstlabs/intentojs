import * as _45 from "./wasm/v1/authz";
import * as _46 from "./wasm/v1/genesis";
import * as _47 from "./wasm/v1/ibc";
import * as _48 from "./wasm/v1/proposal";
import * as _49 from "./wasm/v1/query";
import * as _50 from "./wasm/v1/tx";
import * as _51 from "./wasm/v1/types";
import * as _181 from "./wasm/v1/tx.amino";
import * as _182 from "./wasm/v1/tx.registry";
import * as _183 from "./wasm/v1/query.rpc.Query";
import * as _184 from "./wasm/v1/tx.rpc.msg";
import * as _244 from "./rpc.query";
import * as _245 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._181,
      ..._182,
      ..._183,
      ..._184
    };
  }
  export const ClientFactory = {
    ..._244,
    ..._245
  };
}