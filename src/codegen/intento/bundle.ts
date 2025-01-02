import * as _94 from "./alloc/v1beta1/genesis";
import * as _95 from "./alloc/v1beta1/params";
import * as _96 from "./alloc/v1beta1/query";
import * as _97 from "./alloc/v1beta1/tx";
import * as _98 from "./claim/v1beta1/claim";
import * as _99 from "./claim/v1beta1/genesis";
import * as _100 from "./claim/v1beta1/params";
import * as _101 from "./claim/v1beta1/query";
import * as _102 from "./intent/v1beta1/action";
import * as _103 from "./intent/v1beta1/genesis";
import * as _104 from "./intent/v1beta1/hostedaccount";
import * as _105 from "./intent/v1beta1/params";
import * as _106 from "./intent/v1beta1/query";
import * as _107 from "./intent/v1beta1/tx";
import * as _108 from "./intent/v1beta1/usage";
import * as _109 from "./interchainquery/v1/genesis";
import * as _110 from "./interchainquery/v1/query";
import * as _111 from "./mint/v1beta1/genesis";
import * as _112 from "./mint/v1beta1/mint";
import * as _113 from "./mint/v1beta1/query";
import * as _114 from "./mint/v1beta1/tx";
import * as _164 from "./alloc/v1beta1/tx.amino";
import * as _165 from "./claim/v1beta1/claim.amino";
import * as _166 from "./intent/v1beta1/tx.amino";
import * as _167 from "./mint/v1beta1/tx.amino";
import * as _168 from "./alloc/v1beta1/tx.registry";
import * as _169 from "./claim/v1beta1/claim.registry";
import * as _170 from "./intent/v1beta1/tx.registry";
import * as _171 from "./mint/v1beta1/tx.registry";
import * as _172 from "./alloc/v1beta1/query.rpc.Query";
import * as _173 from "./claim/v1beta1/query.rpc.Query";
import * as _174 from "./intent/v1beta1/query.rpc.Query";
import * as _175 from "./mint/v1beta1/query.rpc.Query";
import * as _176 from "./alloc/v1beta1/tx.rpc.msg";
import * as _177 from "./claim/v1beta1/claim.rpc.msg";
import * as _178 from "./intent/v1beta1/tx.rpc.msg";
import * as _179 from "./mint/v1beta1/tx.rpc.msg";
import * as _189 from "./rpc.query";
import * as _190 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._164,
      ..._168,
      ..._172,
      ..._176
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._165,
      ..._169,
      ..._173,
      ..._177
    };
  }
  export namespace intent {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._108,
      ..._166,
      ..._170,
      ..._174,
      ..._178
    };
  }
  export namespace interchainquery {
    export const v1 = {
      ..._109,
      ..._110
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._167,
      ..._171,
      ..._175,
      ..._179
    };
  }
  export const ClientFactory = {
    ..._189,
    ..._190
  };
}