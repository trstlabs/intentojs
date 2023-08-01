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
import * as _35 from "./staking/v1beta1/authz";
import * as _36 from "./staking/v1beta1/genesis";
import * as _37 from "./staking/v1beta1/query";
import * as _38 from "./staking/v1beta1/staking";
import * as _39 from "./staking/v1beta1/tx";
import * as _40 from "./tx/signing/v1beta1/signing";
import * as _41 from "./tx/v1beta1/service";
import * as _42 from "./tx/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/query";
import * as _44 from "./upgrade/v1beta1/tx";
import * as _45 from "./upgrade/v1beta1/upgrade";
import * as _103 from "./authz/v1beta1/query.lcd";
import * as _104 from "./bank/v1beta1/query.lcd";
import * as _105 from "./distribution/v1beta1/query.lcd";
import * as _106 from "./gov/v1/query.lcd";
import * as _107 from "./gov/v1beta1/query.lcd";
import * as _108 from "./staking/v1beta1/query.lcd";
import * as _109 from "./tx/v1beta1/service.lcd";
import * as _110 from "./upgrade/v1beta1/query.lcd";
import * as _111 from "./authz/v1beta1/query.rpc.Query";
import * as _112 from "./bank/v1beta1/query.rpc.Query";
import * as _113 from "./distribution/v1beta1/query.rpc.Query";
import * as _114 from "./gov/v1/query.rpc.Query";
import * as _115 from "./gov/v1beta1/query.rpc.Query";
import * as _116 from "./staking/v1beta1/query.rpc.Query";
import * as _117 from "./tx/v1beta1/service.rpc.Service";
import * as _118 from "./upgrade/v1beta1/query.rpc.Query";
import * as _119 from "./authz/v1beta1/tx.rpc.msg";
import * as _120 from "./bank/v1beta1/tx.rpc.msg";
import * as _121 from "./distribution/v1beta1/tx.rpc.msg";
import * as _122 from "./gov/v1/tx.rpc.msg";
import * as _123 from "./gov/v1beta1/tx.rpc.msg";
import * as _124 from "./staking/v1beta1/tx.rpc.msg";
import * as _125 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _148 from "./lcd";
import * as _149 from "./rpc.query";
import * as _150 from "./rpc.tx";
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
            ..._103,
            ..._111,
            ..._119
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
            ..._104,
            ..._112,
            ..._120
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
                ..._15
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
            ..._105,
            ..._113,
            ..._121
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._27,
            ..._28,
            ..._29,
            ..._30,
            ..._106,
            ..._114,
            ..._122
        };
        gov.v1beta1 = {
            ..._31,
            ..._32,
            ..._33,
            ..._34,
            ..._107,
            ..._115,
            ..._123
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._35,
            ..._36,
            ..._37,
            ..._38,
            ..._39,
            ..._108,
            ..._116,
            ..._124
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._40
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._41,
            ..._42,
            ..._109,
            ..._117
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._43,
            ..._44,
            ..._45,
            ..._110,
            ..._118,
            ..._125
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._148,
        ..._149,
        ..._150
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map