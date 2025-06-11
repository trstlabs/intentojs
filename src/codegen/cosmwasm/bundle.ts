import * as _47 from "./wasm/v1/authz";
import * as _48 from "./wasm/v1/genesis";
import * as _49 from "./wasm/v1/ibc";
import * as _50 from "./wasm/v1/proposal";
import * as _51 from "./wasm/v1/query";
import * as _52 from "./wasm/v1/tx";
import * as _53 from "./wasm/v1/types";
import * as _192 from "./wasm/v1/tx.amino";
import * as _193 from "./wasm/v1/tx.registry";
import * as _194 from "./wasm/v1/query.rpc.Query";
import * as _195 from "./wasm/v1/tx.rpc.msg";
import * as _262 from "./rpc.query";
import * as _263 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._192,
      ..._193,
      ..._194,
      ..._195
    };
  }
  export const ClientFactory = {
    ..._262,
    ..._263
  };
}