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
const _76 = __importStar(require("./abci/types"));
const _77 = __importStar(require("./crypto/keys"));
const _78 = __importStar(require("./crypto/proof"));
const _79 = __importStar(require("./libs/bits/types"));
const _80 = __importStar(require("./p2p/types"));
const _81 = __importStar(require("./types/block"));
const _82 = __importStar(require("./types/evidence"));
const _83 = __importStar(require("./types/params"));
const _84 = __importStar(require("./types/types"));
const _85 = __importStar(require("./types/validator"));
const _86 = __importStar(require("./version/types"));
const _144 = __importStar(require("./abci/types.rpc.ABCIApplication"));
const _159 = __importStar(require("./lcd"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._76,
        ..._144
    };
    tendermint.crypto = {
        ..._77,
        ..._78
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._79
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._80
    };
    tendermint.types = {
        ..._81,
        ..._82,
        ..._83,
        ..._84,
        ..._85
    };
    tendermint.version = {
        ..._86
    };
    tendermint.ClientFactory = {
        ..._159
    };
})(tendermint || (exports.tendermint = tendermint = {}));
//# sourceMappingURL=bundle.js.map