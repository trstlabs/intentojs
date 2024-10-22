import * as _87 from "./alloc/v1beta1/genesis";
import * as _88 from "./alloc/v1beta1/params";
import * as _89 from "./alloc/v1beta1/query";
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
import * as _102 from "./interchainquery/v1/messages";
import * as _103 from "./interchainquery/v1/query";
import * as _104 from "./mint/v1beta1/genesis";
import * as _105 from "./mint/v1beta1/mint";
import * as _106 from "./mint/v1beta1/query";
import * as _151 from "./claim/v1beta1/claim.amino";
import * as _152 from "./intent/v1beta1/tx.amino";
import * as _153 from "./interchainquery/v1/messages.amino";
import * as _154 from "./claim/v1beta1/claim.registry";
import * as _155 from "./intent/v1beta1/tx.registry";
import * as _156 from "./interchainquery/v1/messages.registry";
import * as _157 from "./alloc/v1beta1/query.rpc.Query";
import * as _158 from "./claim/v1beta1/query.rpc.Query";
import * as _159 from "./intent/v1beta1/query.rpc.Query";
import * as _160 from "./mint/v1beta1/query.rpc.Query";
import * as _161 from "./claim/v1beta1/claim.rpc.msg";
import * as _162 from "./intent/v1beta1/tx.rpc.msg";
import * as _163 from "./interchainquery/v1/messages.rpc.msg";
import * as _168 from "./rpc.query";
import * as _169 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._157
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._151,
      ..._154,
      ..._158,
      ..._161
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
      ..._152,
      ..._155,
      ..._159,
      ..._162
    };
  }
  export namespace interchainquery {
    export const v1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._153,
      ..._156,
      ..._163
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._104,
      ..._105,
      ..._106,
      ..._160
    };
  }
  export const ClientFactory = {
    ..._168,
    ..._169
  };
}