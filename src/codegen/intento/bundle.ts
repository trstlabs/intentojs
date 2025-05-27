import * as _132 from "./alloc/v1beta1/genesis";
import * as _133 from "./alloc/v1beta1/params";
import * as _134 from "./alloc/v1beta1/query";
import * as _135 from "./alloc/v1beta1/tx";
import * as _136 from "./claim/v1beta1/claim";
import * as _137 from "./claim/v1beta1/genesis";
import * as _138 from "./claim/v1beta1/params";
import * as _139 from "./claim/v1beta1/query";
import * as _140 from "./intent/v1beta1/flow";
import * as _141 from "./intent/v1beta1/genesis";
import * as _142 from "./intent/v1beta1/hostedaccount";
import * as _143 from "./intent/v1beta1/params";
import * as _144 from "./intent/v1beta1/query";
import * as _145 from "./intent/v1beta1/tx";
import * as _146 from "./mint/v1beta1/genesis";
import * as _147 from "./mint/v1beta1/mint";
import * as _148 from "./mint/v1beta1/query";
import * as _149 from "./mint/v1beta1/tx";
import * as _223 from "./alloc/v1beta1/tx.amino";
import * as _224 from "./claim/v1beta1/claim.amino";
import * as _225 from "./intent/v1beta1/tx.amino";
import * as _226 from "./mint/v1beta1/tx.amino";
import * as _227 from "./alloc/v1beta1/tx.registry";
import * as _228 from "./claim/v1beta1/claim.registry";
import * as _229 from "./intent/v1beta1/tx.registry";
import * as _230 from "./mint/v1beta1/tx.registry";
import * as _231 from "./alloc/v1beta1/query.rpc.Query";
import * as _232 from "./claim/v1beta1/query.rpc.Query";
import * as _233 from "./intent/v1beta1/query.rpc.Query";
import * as _234 from "./mint/v1beta1/query.rpc.Query";
import * as _235 from "./alloc/v1beta1/tx.rpc.msg";
import * as _236 from "./claim/v1beta1/claim.rpc.msg";
import * as _237 from "./intent/v1beta1/tx.rpc.msg";
import * as _238 from "./mint/v1beta1/tx.rpc.msg";
import * as _250 from "./rpc.query";
import * as _251 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._223,
      ..._227,
      ..._231,
      ..._235
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._224,
      ..._228,
      ..._232,
      ..._236
    };
  }
  export namespace intent {
    export const v1beta1 = {
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._225,
      ..._229,
      ..._233,
      ..._237
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._226,
      ..._230,
      ..._234,
      ..._238
    };
  }
  export const ClientFactory = {
    ..._250,
    ..._251
  };
}