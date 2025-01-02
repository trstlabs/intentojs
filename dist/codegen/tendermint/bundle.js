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
exports.tendermint = void 0;
const _83 = __importStar(require("./abci/types"));
const _84 = __importStar(require("./crypto/keys"));
const _85 = __importStar(require("./crypto/proof"));
const _86 = __importStar(require("./libs/bits/types"));
const _87 = __importStar(require("./p2p/types"));
const _88 = __importStar(require("./types/block"));
const _89 = __importStar(require("./types/evidence"));
const _90 = __importStar(require("./types/params"));
const _91 = __importStar(require("./types/types"));
const _92 = __importStar(require("./types/validator"));
const _93 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._83
    };
    tendermint.crypto = {
        ..._84,
        ..._85
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._86
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._87
    };
    tendermint.types = {
        ..._88,
        ..._89,
        ..._90,
        ..._91,
        ..._92
    };
    tendermint.version = {
        ..._93
    };
})(tendermint || (exports.tendermint = tendermint = {}));
//# sourceMappingURL=bundle.js.map