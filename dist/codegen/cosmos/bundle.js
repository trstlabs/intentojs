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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const _45 = __importStar(require("./evm/vm/v1/evm"));
const _46 = __importStar(require("./evm/vm/v1/tx"));
const _163 = __importStar(require("./authz/v1beta1/tx.amino"));
const _164 = __importStar(require("./bank/v1beta1/tx.amino"));
const _165 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _166 = __importStar(require("./gov/v1beta1/tx.amino"));
const _167 = __importStar(require("./staking/v1beta1/tx.amino"));
const _168 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _169 = __importStar(require("./evm/vm/v1/tx.amino"));
const _170 = __importStar(require("./authz/v1beta1/tx.registry"));
const _171 = __importStar(require("./bank/v1beta1/tx.registry"));
const _172 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _173 = __importStar(require("./gov/v1beta1/tx.registry"));
const _174 = __importStar(require("./staking/v1beta1/tx.registry"));
const _175 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _176 = __importStar(require("./evm/vm/v1/tx.registry"));
const _177 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _178 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _179 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _180 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _181 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _182 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _183 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _184 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _185 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _186 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _187 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _188 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _189 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _190 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _191 = __importStar(require("./evm/vm/v1/tx.rpc.msg"));
const _260 = __importStar(require("./rpc.query"));
const _261 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._3,
            ..._4,
            ..._5,
            ..._177
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
            ..._163,
            ..._170,
            ..._178,
            ..._185
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
            ..._164,
            ..._171,
            ..._179,
            ..._186
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
            ..._165,
            ..._172,
            ..._180,
            ..._187
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let gov;
    (function (gov) {
        gov.v1beta1 = {
            ..._30,
            ..._31,
            ..._32,
            ..._33,
            ..._166,
            ..._173,
            ..._181,
            ..._188
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
            ..._167,
            ..._174,
            ..._182,
            ..._189
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
            ..._183
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._42,
            ..._43,
            ..._44,
            ..._168,
            ..._175,
            ..._184,
            ..._190
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let evm;
    (function (evm) {
        let vm;
        (function (vm) {
            vm.v1 = {
                ..._45,
                ..._46,
                ..._169,
                ..._176,
                ..._191
            };
        })(vm = evm.vm || (evm.vm = {}));
    })(evm = cosmos.evm || (cosmos.evm = {}));
    cosmos.ClientFactory = {
        ..._260,
        ..._261
    };
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map