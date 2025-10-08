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
exports.tendermint = void 0;
const _84 = __importStar(require("./abci/types"));
const _85 = __importStar(require("./crypto/keys"));
const _86 = __importStar(require("./crypto/proof"));
const _87 = __importStar(require("./libs/bits/types"));
const _88 = __importStar(require("./p2p/types"));
const _89 = __importStar(require("./types/block"));
const _90 = __importStar(require("./types/evidence"));
const _91 = __importStar(require("./types/params"));
const _92 = __importStar(require("./types/types"));
const _93 = __importStar(require("./types/validator"));
const _94 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._84
    };
    tendermint.crypto = {
        ..._85,
        ..._86
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._87
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._88
    };
    tendermint.types = {
        ..._89,
        ..._90,
        ..._91,
        ..._92,
        ..._93
    };
    tendermint.version = {
        ..._94
    };
})(tendermint || (exports.tendermint = tendermint = {}));
//# sourceMappingURL=bundle.js.map