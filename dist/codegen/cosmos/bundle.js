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
const _3 = __importStar(require("./authz/v1beta1/authz"));
const _4 = __importStar(require("./authz/v1beta1/event"));
const _5 = __importStar(require("./authz/v1beta1/genesis"));
const _6 = __importStar(require("./authz/v1beta1/query"));
const _7 = __importStar(require("./authz/v1beta1/tx"));
const _8 = __importStar(require("./bank/v1beta1/authz"));
const _9 = __importStar(require("./bank/v1beta1/bank"));
const _10 = __importStar(require("./bank/v1beta1/genesis"));
const _11 = __importStar(require("./bank/v1beta1/query"));
const _12 = __importStar(require("./bank/v1beta1/tx"));
const _13 = __importStar(require("./base/abci/v1beta1/abci"));
const _14 = __importStar(require("./base/query/v1beta1/pagination"));
const _15 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _16 = __importStar(require("./base/v1beta1/coin"));
const _17 = __importStar(require("./crypto/ed25519/keys"));
const _18 = __importStar(require("./crypto/hd/v1/hd"));
const _19 = __importStar(require("./crypto/keyring/v1/record"));
const _20 = __importStar(require("./crypto/multisig/keys"));
const _21 = __importStar(require("./crypto/secp256k1/keys"));
const _22 = __importStar(require("./crypto/secp256r1/keys"));
const _23 = __importStar(require("./distribution/v1beta1/distribution"));
const _24 = __importStar(require("./distribution/v1beta1/genesis"));
const _25 = __importStar(require("./distribution/v1beta1/query"));
const _26 = __importStar(require("./distribution/v1beta1/tx"));
const _27 = __importStar(require("./gov/v1/genesis"));
const _28 = __importStar(require("./gov/v1/gov"));
const _29 = __importStar(require("./gov/v1/query"));
const _30 = __importStar(require("./gov/v1/tx"));
const _31 = __importStar(require("./gov/v1beta1/genesis"));
const _32 = __importStar(require("./gov/v1beta1/gov"));
const _33 = __importStar(require("./gov/v1beta1/query"));
const _34 = __importStar(require("./gov/v1beta1/tx"));
const _35 = __importStar(require("./params/v1beta1/params"));
const _36 = __importStar(require("./params/v1beta1/query"));
const _37 = __importStar(require("./staking/v1beta1/authz"));
const _38 = __importStar(require("./staking/v1beta1/genesis"));
const _39 = __importStar(require("./staking/v1beta1/query"));
const _40 = __importStar(require("./staking/v1beta1/staking"));
const _41 = __importStar(require("./staking/v1beta1/tx"));
const _42 = __importStar(require("./tx/signing/v1beta1/signing"));
const _43 = __importStar(require("./tx/v1beta1/service"));
const _44 = __importStar(require("./tx/v1beta1/tx"));
const _45 = __importStar(require("./upgrade/v1beta1/query"));
const _46 = __importStar(require("./upgrade/v1beta1/tx"));
const _47 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _105 = __importStar(require("./authz/v1beta1/query.lcd"));
const _106 = __importStar(require("./bank/v1beta1/query.lcd"));
const _107 = __importStar(require("./base/reflection/v2alpha1/reflection.lcd"));
const _108 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _109 = __importStar(require("./gov/v1/query.lcd"));
const _110 = __importStar(require("./gov/v1beta1/query.lcd"));
const _111 = __importStar(require("./params/v1beta1/query.lcd"));
const _112 = __importStar(require("./staking/v1beta1/query.lcd"));
const _113 = __importStar(require("./tx/v1beta1/service.lcd"));
const _114 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _115 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _116 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _117 = __importStar(require("./base/reflection/v2alpha1/reflection.rpc.ReflectionService"));
const _118 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _119 = __importStar(require("./gov/v1/query.rpc.Query"));
const _120 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _121 = __importStar(require("./params/v1beta1/query.rpc.Query"));
const _122 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _123 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _124 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _125 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _126 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _127 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _128 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _129 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _130 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _131 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _155 = __importStar(require("./lcd"));
const _156 = __importStar(require("./cosmos-rpc-client.query"));
const _157 = __importStar(require("./cosmos-rpc-client.tx"));
var cosmos;
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
})(cosmos || (exports.cosmos = cosmos = {}));
//# sourceMappingURL=bundle.js.map