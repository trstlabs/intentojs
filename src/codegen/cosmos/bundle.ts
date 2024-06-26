import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/query";
import * as _10 from "./authz/v1beta1/tx";
import * as _11 from "./bank/v1beta1/authz";
import * as _12 from "./bank/v1beta1/bank";
import * as _13 from "./bank/v1beta1/genesis";
import * as _14 from "./bank/v1beta1/query";
import * as _15 from "./bank/v1beta1/tx";
import * as _16 from "./base/abci/v1beta1/abci";
import * as _17 from "./base/query/v1beta1/pagination";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/v1beta1/coin";
import * as _20 from "./crypto/ed25519/keys";
import * as _21 from "./crypto/hd/v1/hd";
import * as _22 from "./crypto/keyring/v1/record";
import * as _23 from "./crypto/multisig/keys";
import * as _24 from "./crypto/secp256k1/keys";
import * as _25 from "./crypto/secp256r1/keys";
import * as _26 from "./distribution/v1beta1/distribution";
import * as _27 from "./distribution/v1beta1/genesis";
import * as _28 from "./distribution/v1beta1/query";
import * as _29 from "./distribution/v1beta1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/upgrade";
import * as _106 from "./authz/v1beta1/tx.amino";
import * as _107 from "./bank/v1beta1/tx.amino";
import * as _108 from "./distribution/v1beta1/tx.amino";
import * as _109 from "./gov/v1beta1/tx.amino";
import * as _110 from "./staking/v1beta1/tx.amino";
import * as _111 from "./upgrade/v1beta1/tx.amino";
import * as _112 from "./authz/v1beta1/tx.registry";
import * as _113 from "./bank/v1beta1/tx.registry";
import * as _114 from "./distribution/v1beta1/tx.registry";
import * as _115 from "./gov/v1beta1/tx.registry";
import * as _116 from "./staking/v1beta1/tx.registry";
import * as _117 from "./upgrade/v1beta1/tx.registry";
import * as _118 from "./auth/v1beta1/query.rpc.Query";
import * as _119 from "./authz/v1beta1/query.rpc.Query";
import * as _120 from "./bank/v1beta1/query.rpc.Query";
import * as _121 from "./distribution/v1beta1/query.rpc.Query";
import * as _122 from "./gov/v1beta1/query.rpc.Query";
import * as _123 from "./staking/v1beta1/query.rpc.Query";
import * as _124 from "./tx/v1beta1/service.rpc.Service";
import * as _125 from "./upgrade/v1beta1/query.rpc.Query";
import * as _126 from "./authz/v1beta1/tx.rpc.msg";
import * as _127 from "./bank/v1beta1/tx.rpc.msg";
import * as _128 from "./distribution/v1beta1/tx.rpc.msg";
import * as _129 from "./gov/v1beta1/tx.rpc.msg";
import * as _130 from "./staking/v1beta1/tx.rpc.msg";
import * as _131 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _158 from "./rpc.query";
import * as _159 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._118
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._106,
      ..._112,
      ..._119,
      ..._126
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._107,
      ..._113,
      ..._120,
      ..._127
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._20
    };
    export namespace hd {
      export const v1 = {
        ..._21
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._22
      };
    }
    export const multisig = {
      ..._23
    };
    export const secp256k1 = {
      ..._24
    };
    export const secp256r1 = {
      ..._25
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._108,
      ..._114,
      ..._121,
      ..._128
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._109,
      ..._115,
      ..._122,
      ..._129
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._110,
      ..._116,
      ..._123,
      ..._130
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._39
      };
    }
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._124
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._111,
      ..._117,
      ..._125,
      ..._131
    };
  }
  export const ClientFactory = {
    ..._158,
    ..._159
  };
}