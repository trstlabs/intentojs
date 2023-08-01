import * as _88 from "./alloc/v1beta1/genesis";
import * as _89 from "./alloc/v1beta1/params";
import * as _90 from "./alloc/v1beta1/query";
import * as _91 from "./autoibctx/v1beta1/genesis";
import * as _92 from "./autoibctx/v1beta1/query";
import * as _93 from "./autoibctx/v1beta1/tx";
import * as _94 from "./autoibctx/v1beta1/types";
import * as _95 from "./autoibctx/v1beta1/usage";
import * as _96 from "./claim/v1beta1/claim";
import * as _97 from "./claim/v1beta1/genesis";
import * as _98 from "./claim/v1beta1/params";
import * as _99 from "./claim/v1beta1/query";
import * as _100 from "./mint/v1beta1/genesis";
import * as _101 from "./mint/v1beta1/mint";
import * as _102 from "./mint/v1beta1/query";
import * as _138 from "./alloc/v1beta1/query.lcd";
import * as _139 from "./autoibctx/v1beta1/query.lcd";
import * as _140 from "./claim/v1beta1/query.lcd";
import * as _141 from "./mint/v1beta1/query.lcd";
import * as _142 from "./alloc/v1beta1/query.rpc.Query";
import * as _143 from "./autoibctx/v1beta1/query.rpc.Query";
import * as _144 from "./claim/v1beta1/query.rpc.Query";
import * as _145 from "./mint/v1beta1/query.rpc.Query";
import * as _146 from "./autoibctx/v1beta1/tx.rpc.msg";
import * as _147 from "./claim/v1beta1/claim.rpc.msg";
import * as _154 from "./lcd";
import * as _155 from "./rpc.query";
import * as _156 from "./rpc.tx";
export namespace trst {
  export namespace alloc {
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._90,
      ..._138,
      ..._142
    };
  }
  export namespace autoibctx {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._139,
      ..._143,
      ..._146
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._140,
      ..._144,
      ..._147
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._100,
      ..._101,
      ..._102,
      ..._141,
      ..._145
    };
  }
  export const ClientFactory = {
    ..._154,
    ..._155,
    ..._156
  };
}