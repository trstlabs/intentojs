import * as _93 from "./alloc/v1beta1/genesis";
import * as _94 from "./alloc/v1beta1/params";
import * as _95 from "./alloc/v1beta1/query";
import * as _96 from "./alloc/v1beta1/tx";
import * as _97 from "./claim/v1beta1/claim";
import * as _98 from "./claim/v1beta1/genesis";
import * as _99 from "./claim/v1beta1/params";
import * as _100 from "./claim/v1beta1/query";
import * as _101 from "./intent/v1beta1/action";
import * as _102 from "./intent/v1beta1/genesis";
import * as _103 from "./intent/v1beta1/hostedaccount";
import * as _104 from "./intent/v1beta1/params";
import * as _105 from "./intent/v1beta1/query";
import * as _106 from "./intent/v1beta1/tx";
import * as _107 from "./intent/v1beta1/usage";
import * as _108 from "./interchainquery/v1/genesis";
import * as _109 from "./interchainquery/v1/query";
import * as _110 from "./mint/v1beta1/genesis";
import * as _111 from "./mint/v1beta1/mint";
import * as _112 from "./mint/v1beta1/query";
import * as _113 from "./mint/v1beta1/tx";
import * as _163 from "./alloc/v1beta1/tx.amino";
import * as _164 from "./claim/v1beta1/claim.amino";
import * as _165 from "./intent/v1beta1/tx.amino";
import * as _166 from "./mint/v1beta1/tx.amino";
import * as _167 from "./alloc/v1beta1/tx.registry";
import * as _168 from "./claim/v1beta1/claim.registry";
import * as _169 from "./intent/v1beta1/tx.registry";
import * as _170 from "./mint/v1beta1/tx.registry";
import * as _171 from "./alloc/v1beta1/query.rpc.Query";
import * as _172 from "./claim/v1beta1/query.rpc.Query";
import * as _173 from "./intent/v1beta1/query.rpc.Query";
import * as _174 from "./mint/v1beta1/query.rpc.Query";
import * as _175 from "./alloc/v1beta1/tx.rpc.msg";
import * as _176 from "./claim/v1beta1/claim.rpc.msg";
import * as _177 from "./intent/v1beta1/tx.rpc.msg";
import * as _178 from "./mint/v1beta1/tx.rpc.msg";
import * as _188 from "./rpc.query";
import * as _189 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._163,
      ..._167,
      ..._171,
      ..._175
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._164,
      ..._168,
      ..._172,
      ..._176
    };
  }
  export namespace intent {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._165,
      ..._169,
      ..._173,
      ..._177
    };
  }
  export namespace interchainquery {
    export const v1 = {
      ..._108,
      ..._109
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._166,
      ..._170,
      ..._174,
      ..._178
    };
  }
  export const ClientFactory = {
    ..._188,
    ..._189
  };
}