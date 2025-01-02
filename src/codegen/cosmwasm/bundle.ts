import * as _45 from "./wasm/v1/authz";
import * as _46 from "./wasm/v1/genesis";
import * as _47 from "./wasm/v1/ibc";
import * as _48 from "./wasm/v1/proposal";
import * as _49 from "./wasm/v1/query";
import * as _50 from "./wasm/v1/tx";
import * as _51 from "./wasm/v1/types";
import * as _52 from "./wasm/v1/proposal_legacy";
import * as _144 from "./wasm/v1/tx.amino";
import * as _145 from "./wasm/v1/tx.registry";
import * as _146 from "./wasm/v1/query.rpc.Query";
import * as _147 from "./wasm/v1/tx.rpc.msg";
import * as _185 from "./rpc.query";
import * as _186 from "./rpc.tx";
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
      ..._52,
      ..._144,
      ..._145,
      ..._146,
      ..._147
    };
  }
  export const ClientFactory = {
    ..._185,
    ..._186
  };
}