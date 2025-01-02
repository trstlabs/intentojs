"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmos = void 0;
const _3 = __importStar(require("./auth/v1beta1/auth"));
const _4 = __importStar(require("./auth/v1beta1/genesis"));
const _5 = __importStar(require("./auth/v1beta1/query"));
const _6 = __importStar(require("./authz/v1beta1/authz"));
const _7 = __importStar(require("./authz/v1beta1/event"));
const _8 = __importStar(require("./authz/v1beta1/genesis"));
const _9 = __importStar(require("./authz/v1beta1/query"));
const _10 = __importStar(require("./authz/v1beta1/tx"));
const _11 = __importStar(require("./bank/v1beta1/authz"));
const _12 = __importStar(require("./bank/v1beta1/bank"));
const _13 = __importStar(require("./bank/v1beta1/genesis"));
const _14 = __importStar(require("./bank/v1beta1/query"));
const _15 = __importStar(require("./bank/v1beta1/tx"));
const _16 = __importStar(require("./base/abci/v1beta1/abci"));
const _17 = __importStar(require("./base/query/v1beta1/pagination"));
const _18 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _19 = __importStar(require("./base/v1beta1/coin"));
const _20 = __importStar(require("./crypto/ed25519/keys"));
const _21 = __importStar(require("./crypto/hd/v1/hd"));
const _22 = __importStar(require("./crypto/keyring/v1/record"));
const _23 = __importStar(require("./crypto/multisig/keys"));
const _24 = __importStar(require("./crypto/secp256k1/keys"));
const _25 = __importStar(require("./crypto/secp256r1/keys"));
const _26 = __importStar(require("./distribution/v1beta1/distribution"));
const _27 = __importStar(require("./distribution/v1beta1/genesis"));
const _28 = __importStar(require("./distribution/v1beta1/query"));
const _29 = __importStar(require("./distribution/v1beta1/tx"));
const _30 = __importStar(require("./gov/v1beta1/genesis"));
const _31 = __importStar(require("./gov/v1beta1/gov"));
const _32 = __importStar(require("./gov/v1beta1/query"));
const _33 = __importStar(require("./gov/v1beta1/tx"));
const _34 = __importStar(require("./staking/v1beta1/authz"));
const _35 = __importStar(require("./staking/v1beta1/genesis"));
const _36 = __importStar(require("./staking/v1beta1/query"));
const _37 = __importStar(require("./staking/v1beta1/staking"));
const _38 = __importStar(require("./staking/v1beta1/tx"));
const _39 = __importStar(require("./tx/signing/v1beta1/signing"));
const _40 = __importStar(require("./tx/v1beta1/service"));
const _41 = __importStar(require("./tx/v1beta1/tx"));
const _42 = __importStar(require("./upgrade/v1beta1/query"));
const _43 = __importStar(require("./upgrade/v1beta1/tx"));
const _44 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _118 = __importStar(require("./authz/v1beta1/tx.amino"));
const _119 = __importStar(require("./bank/v1beta1/tx.amino"));
const _120 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _121 = __importStar(require("./gov/v1beta1/tx.amino"));
const _122 = __importStar(require("./staking/v1beta1/tx.amino"));
const _123 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _124 = __importStar(require("./authz/v1beta1/tx.registry"));
const _125 = __importStar(require("./bank/v1beta1/tx.registry"));
const _126 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _127 = __importStar(require("./gov/v1beta1/tx.registry"));
const _128 = __importStar(require("./staking/v1beta1/tx.registry"));
const _129 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _130 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _131 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _132 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _133 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _134 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _135 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _136 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _137 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _138 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _139 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _140 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _141 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _142 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _143 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _183 = __importStar(require("./rpc.query"));
const _184 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._3,
            ..._4,
            ..._5,
            ..._130
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._6,
            ..._7,
            ..._8,
            ..._9,
            ..._10,
            ..._118,
            ..._124,
            ..._131,
            ..._138
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._11,
            ..._12,
            ..._13,
            ..._14,
            ..._15,
            ..._119,
            ..._125,
            ..._132,
            ..._139
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._16
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._17
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._18
            };
        })(reflection = base.reflection || (base.reflection = {}));
        base.v1beta1 = {
            ..._19
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._20
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._21
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._22
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._23
        };
        crypto.secp256k1 = {
            ..._24
        };
        crypto.secp256r1 = {
            ..._25
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._26,
            ..._27,
            ..._28,
            ..._29,
            ..._120,
            ..._126,
            ..._133,
            ..._140
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._30,
            ..._31,
            ..._32,
            ..._33,
            ..._121,
            ..._127,
            ..._134,
            ..._141
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._34,
            ..._35,
            ..._36,
            ..._37,
            ..._38,
            ..._122,
            ..._128,
            ..._135,
            ..._142
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._39
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._40,
            ..._41,
            ..._136
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._42,
            ..._43,
            ..._44,
            ..._123,
            ..._129,
            ..._137,
            ..._143
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._183,
        ..._184
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map