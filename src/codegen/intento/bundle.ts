import * as _86 from "./alloc/v1beta1/genesis";
import * as _87 from "./alloc/v1beta1/params";
import * as _88 from "./alloc/v1beta1/query";
import * as _89 from "./alloc/v1beta1/tx";
import * as _90 from "./claim/v1beta1/claim";
import * as _91 from "./claim/v1beta1/genesis";
import * as _92 from "./claim/v1beta1/params";
import * as _93 from "./claim/v1beta1/query";
import * as _94 from "./intent/v1beta1/action";
import * as _95 from "./intent/v1beta1/genesis";
import * as _96 from "./intent/v1beta1/hostedaccount";
import * as _97 from "./intent/v1beta1/params";
import * as _98 from "./intent/v1beta1/query";
import * as _99 from "./intent/v1beta1/tx";
import * as _100 from "./intent/v1beta1/usage";
import * as _101 from "./interchainquery/v1/genesis";
import * as _102 from "./interchainquery/v1/query";
import * as _103 from "./mint/v1beta1/genesis";
import * as _104 from "./mint/v1beta1/mint";
import * as _105 from "./mint/v1beta1/query";
import * as _106 from "./mint/v1beta1/tx";
import * as _152 from "./alloc/v1beta1/tx.amino";
import * as _153 from "./claim/v1beta1/claim.amino";
import * as _154 from "./intent/v1beta1/tx.amino";
import * as _155 from "./mint/v1beta1/tx.amino";
import * as _156 from "./alloc/v1beta1/tx.registry";
import * as _157 from "./claim/v1beta1/claim.registry";
import * as _158 from "./intent/v1beta1/tx.registry";
import * as _159 from "./mint/v1beta1/tx.registry";
import * as _160 from "./alloc/v1beta1/query.rpc.Query";
import * as _161 from "./claim/v1beta1/query.rpc.Query";
import * as _162 from "./intent/v1beta1/query.rpc.Query";
import * as _163 from "./mint/v1beta1/query.rpc.Query";
import * as _164 from "./alloc/v1beta1/tx.rpc.msg";
import * as _165 from "./claim/v1beta1/claim.rpc.msg";
import * as _166 from "./intent/v1beta1/tx.rpc.msg";
import * as _167 from "./mint/v1beta1/tx.rpc.msg";
import * as _175 from "./rpc.query";
import * as _176 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._152,
      ..._156,
      ..._160,
      ..._164
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._153,
      ..._157,
      ..._161,
      ..._165
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
      ..._100,
      ..._154,
      ..._158,
      ..._162,
      ..._166
    };
  }
  export namespace interchainquery {
    export const v1 = {
      ..._101,
      ..._102
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._155,
      ..._159,
      ..._163,
      ..._167
    };
  }
  export const ClientFactory = {
    ..._175,
    ..._176
  };
}