import * as _93 from "./alloc/v1beta1/genesis";
import * as _94 from "./alloc/v1beta1/params";
import * as _95 from "./alloc/v1beta1/query";
import * as _96 from "./alloc/v1beta1/tx";
import * as _97 from "./claim/v1beta1/claim";
import * as _98 from "./claim/v1beta1/genesis";
import * as _99 from "./claim/v1beta1/params";
import * as _100 from "./claim/v1beta1/query";
import * as _101 from "./intent/v1beta1/flow";
import * as _102 from "./intent/v1beta1/genesis";
import * as _103 from "./intent/v1beta1/hostedaccount";
import * as _104 from "./intent/v1beta1/params";
import * as _105 from "./intent/v1beta1/query";
import * as _106 from "./intent/v1beta1/tx";
import * as _107 from "./mint/v1beta1/genesis";
import * as _108 from "./mint/v1beta1/mint";
import * as _109 from "./mint/v1beta1/query";
import * as _110 from "./mint/v1beta1/tx";
import * as _162 from "./alloc/v1beta1/tx.amino";
import * as _163 from "./claim/v1beta1/claim.amino";
import * as _164 from "./intent/v1beta1/tx.amino";
import * as _165 from "./mint/v1beta1/tx.amino";
import * as _166 from "./alloc/v1beta1/tx.registry";
import * as _167 from "./claim/v1beta1/claim.registry";
import * as _168 from "./intent/v1beta1/tx.registry";
import * as _169 from "./mint/v1beta1/tx.registry";
import * as _170 from "./alloc/v1beta1/query.rpc.Query";
import * as _171 from "./claim/v1beta1/query.rpc.Query";
import * as _172 from "./intent/v1beta1/query.rpc.Query";
import * as _173 from "./mint/v1beta1/query.rpc.Query";
import * as _174 from "./alloc/v1beta1/tx.rpc.msg";
import * as _175 from "./claim/v1beta1/claim.rpc.msg";
import * as _176 from "./intent/v1beta1/tx.rpc.msg";
import * as _177 from "./mint/v1beta1/tx.rpc.msg";
import * as _187 from "./rpc.query";
import * as _188 from "./rpc.tx";
export namespace intento {
  export namespace alloc {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._162,
      ..._166,
      ..._170,
      ..._174
    };
  }
  export namespace claim {
    export const v1beta1 = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._163,
      ..._167,
      ..._171,
      ..._175
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
      ..._164,
      ..._168,
      ..._172,
      ..._176
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._165,
      ..._169,
      ..._173,
      ..._177
    };
  }
  export const ClientFactory = {
    ..._187,
    ..._188
  };
}