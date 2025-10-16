import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./authz/v1beta1/authz";
import * as _7 from "./authz/v1beta1/event";
import * as _8 from "./authz/v1beta1/genesis";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/query/v1beta1/pagination";
import * as _16 from "./base/reflection/v2alpha1/reflection";
import * as _17 from "./base/v1beta1/coin";
import * as _18 from "./crypto/ed25519/keys";
import * as _19 from "./crypto/hd/v1/hd";
import * as _20 from "./crypto/keyring/v1/record";
import * as _21 from "./crypto/multisig/keys";
import * as _22 from "./crypto/secp256k1/keys";
import * as _23 from "./crypto/secp256r1/keys";
import * as _24 from "./distribution/v1beta1/distribution";
import * as _25 from "./distribution/v1beta1/genesis";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1beta1/genesis";
import * as _28 from "./gov/v1beta1/gov";
import * as _29 from "./gov/v1beta1/query";
import * as _30 from "./gov/v1beta1/tx";
import * as _31 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/genesis";
import * as _33 from "./staking/v1beta1/staking";
import * as _34 from "./staking/v1beta1/tx";
import * as _35 from "./tx/signing/v1beta1/signing";
import * as _36 from "./tx/v1beta1/service";
import * as _37 from "./tx/v1beta1/tx";
import * as _38 from "./upgrade/v1beta1/query";
import * as _39 from "./upgrade/v1beta1/tx";
import * as _40 from "./upgrade/v1beta1/upgrade";
import * as _41 from "./evm/vm/v1/evm";
import * as _42 from "./evm/vm/v1/tx";
import * as _159 from "./authz/v1beta1/tx.amino";
import * as _160 from "./bank/v1beta1/tx.amino";
import * as _161 from "./distribution/v1beta1/tx.amino";
import * as _162 from "./gov/v1beta1/tx.amino";
import * as _163 from "./staking/v1beta1/tx.amino";
import * as _164 from "./upgrade/v1beta1/tx.amino";
import * as _165 from "./evm/vm/v1/tx.amino";
import * as _166 from "./authz/v1beta1/tx.registry";
import * as _167 from "./bank/v1beta1/tx.registry";
import * as _168 from "./distribution/v1beta1/tx.registry";
import * as _169 from "./gov/v1beta1/tx.registry";
import * as _170 from "./staking/v1beta1/tx.registry";
import * as _171 from "./upgrade/v1beta1/tx.registry";
import * as _172 from "./evm/vm/v1/tx.registry";
import * as _173 from "./auth/v1beta1/query.rpc.Query";
import * as _174 from "./gov/v1beta1/query.rpc.Query";
import * as _175 from "./tx/v1beta1/service.rpc.Service";
import * as _176 from "./upgrade/v1beta1/query.rpc.Query";
import * as _177 from "./authz/v1beta1/tx.rpc.msg";
import * as _178 from "./bank/v1beta1/tx.rpc.msg";
import * as _179 from "./distribution/v1beta1/tx.rpc.msg";
import * as _180 from "./gov/v1beta1/tx.rpc.msg";
import * as _181 from "./staking/v1beta1/tx.rpc.msg";
import * as _182 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _183 from "./evm/vm/v1/tx.rpc.msg";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._173
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._159,
      ..._166,
      ..._177
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._160,
      ..._167,
      ..._178
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._15
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._16
      };
    }
    export const v1beta1 = {
      ..._17
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._18
    };
    export namespace hd {
      export const v1 = {
        ..._19
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._20
      };
    }
    export const multisig = {
      ..._21
    };
    export const secp256k1 = {
      ..._22
    };
    export const secp256r1 = {
      ..._23
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._161,
      ..._168,
      ..._179
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._162,
      ..._169,
      ..._174,
      ..._180
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._163,
      ..._170,
      ..._181
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._35
      };
    }
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._175
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._38,
      ..._39,
      ..._40,
      ..._164,
      ..._171,
      ..._176,
      ..._182
    };
  }
  export namespace evm {
    export namespace vm {
      export const v1 = {
        ..._41,
        ..._42,
        ..._165,
        ..._172,
        ..._183
      };
    }
  }
  export const ClientFactory = {
    ..._252,
    ..._253
  };
}