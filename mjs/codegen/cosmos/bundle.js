import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/query/v1beta1/pagination";
import * as _15 from "./base/reflection/v2alpha1/reflection";
import * as _16 from "./base/v1beta1/coin";
import * as _17 from "./crypto/ed25519/keys";
import * as _18 from "./crypto/hd/v1/hd";
import * as _19 from "./crypto/keyring/v1/record";
import * as _20 from "./crypto/multisig/keys";
import * as _21 from "./crypto/secp256k1/keys";
import * as _22 from "./crypto/secp256r1/keys";
import * as _23 from "./distribution/v1beta1/distribution";
import * as _24 from "./distribution/v1beta1/genesis";
import * as _25 from "./distribution/v1beta1/query";
import * as _26 from "./distribution/v1beta1/tx";
import * as _27 from "./gov/v1/genesis";
import * as _28 from "./gov/v1/gov";
import * as _29 from "./gov/v1/query";
import * as _30 from "./gov/v1/tx";
import * as _31 from "./gov/v1beta1/genesis";
import * as _32 from "./gov/v1beta1/gov";
import * as _33 from "./gov/v1beta1/query";
import * as _34 from "./gov/v1beta1/tx";
import * as _35 from "./params/v1beta1/params";
import * as _36 from "./params/v1beta1/query";
import * as _37 from "./staking/v1beta1/authz";
import * as _38 from "./staking/v1beta1/genesis";
import * as _39 from "./staking/v1beta1/query";
import * as _40 from "./staking/v1beta1/staking";
import * as _41 from "./staking/v1beta1/tx";
import * as _42 from "./tx/signing/v1beta1/signing";
import * as _43 from "./tx/v1beta1/service";
import * as _44 from "./tx/v1beta1/tx";
import * as _45 from "./upgrade/v1beta1/query";
import * as _46 from "./upgrade/v1beta1/tx";
import * as _47 from "./upgrade/v1beta1/upgrade";
import * as _105 from "./authz/v1beta1/query.lcd";
import * as _106 from "./bank/v1beta1/query.lcd";
import * as _107 from "./base/reflection/v2alpha1/reflection.lcd";
import * as _108 from "./distribution/v1beta1/query.lcd";
import * as _109 from "./gov/v1/query.lcd";
import * as _110 from "./gov/v1beta1/query.lcd";
import * as _111 from "./params/v1beta1/query.lcd";
import * as _112 from "./staking/v1beta1/query.lcd";
import * as _113 from "./tx/v1beta1/service.lcd";
import * as _114 from "./upgrade/v1beta1/query.lcd";
import * as _115 from "./authz/v1beta1/query.rpc.Query";
import * as _116 from "./bank/v1beta1/query.rpc.Query";
import * as _117 from "./base/reflection/v2alpha1/reflection.rpc.ReflectionService";
import * as _118 from "./distribution/v1beta1/query.rpc.Query";
import * as _119 from "./gov/v1/query.rpc.Query";
import * as _120 from "./gov/v1beta1/query.rpc.Query";
import * as _121 from "./params/v1beta1/query.rpc.Query";
import * as _122 from "./staking/v1beta1/query.rpc.Query";
import * as _123 from "./tx/v1beta1/service.rpc.Service";
import * as _124 from "./upgrade/v1beta1/query.rpc.Query";
import * as _125 from "./authz/v1beta1/tx.rpc.msg";
import * as _126 from "./bank/v1beta1/tx.rpc.msg";
import * as _127 from "./distribution/v1beta1/tx.rpc.msg";
import * as _128 from "./gov/v1/tx.rpc.msg";
import * as _129 from "./gov/v1beta1/tx.rpc.msg";
import * as _130 from "./staking/v1beta1/tx.rpc.msg";
import * as _131 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _155 from "./lcd";
import * as _156 from "./cosmos-rpc-client.query";
import * as _157 from "./cosmos-rpc-client.tx";
export var cosmos;
(function (cosmos) {
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._3,
            ..._4,
            ..._5,
            ..._6,
            ..._7,
            ..._105,
            ..._115,
            ..._125
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._12,
            ..._106,
            ..._116,
            ..._126
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._13
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._14
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._15,
                ..._107,
                ..._117
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._16
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._17
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._18
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._19
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._20
        };
        crypto.secp256k1 = {
            ..._21
        };
        crypto.secp256r1 = {
            ..._22
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._23,
            ..._24,
            ..._25,
            ..._26,
            ..._108,
            ..._118,
            ..._127
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._109,
            ..._119,
            ..._128
        };
        gov.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._34,
            ..._110,
            ..._120,
            ..._129
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._35,
            ..._36,
            ..._111,
            ..._121
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._37,
            ..._38,
            ..._39,
            ..._40,
            ..._41,
            ..._112,
            ..._122,
            ..._130
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._42
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._43,
            ..._44,
            ..._113,
            ..._123
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._45,
            ..._46,
            ..._47,
            ..._114,
            ..._124,
            ..._131
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._155,
        ..._156,
        ..._157
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map