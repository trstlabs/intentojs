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
exports.trst = void 0;
const _90 = __importStar(require("./alloc/v1beta1/genesis"));
const _91 = __importStar(require("./alloc/v1beta1/params"));
const _92 = __importStar(require("./alloc/v1beta1/query"));
const _93 = __importStar(require("./autoibctx/v1beta1/genesis"));
const _94 = __importStar(require("./autoibctx/v1beta1/query"));
const _95 = __importStar(require("./autoibctx/v1beta1/tx"));
const _96 = __importStar(require("./autoibctx/v1beta1/types"));
const _97 = __importStar(require("./autoibctx/v1beta1/usage"));
const _98 = __importStar(require("./claim/v1beta1/claim"));
const _99 = __importStar(require("./claim/v1beta1/genesis"));
const _100 = __importStar(require("./claim/v1beta1/params"));
const _101 = __importStar(require("./claim/v1beta1/query"));
const _102 = __importStar(require("./mint/v1beta1/genesis"));
const _103 = __importStar(require("./mint/v1beta1/mint"));
const _104 = __importStar(require("./mint/v1beta1/query"));
const _145 = __importStar(require("./alloc/v1beta1/query.lcd"));
const _146 = __importStar(require("./autoibctx/v1beta1/query.lcd"));
const _147 = __importStar(require("./claim/v1beta1/query.lcd"));
const _148 = __importStar(require("./mint/v1beta1/query.lcd"));
const _149 = __importStar(require("./alloc/v1beta1/query.rpc.Query"));
const _150 = __importStar(require("./autoibctx/v1beta1/query.rpc.Query"));
const _151 = __importStar(require("./claim/v1beta1/query.rpc.Query"));
const _152 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _153 = __importStar(require("./autoibctx/v1beta1/tx.rpc.msg"));
const _154 = __importStar(require("./claim/v1beta1/claim.rpc.msg"));
const _160 = __importStar(require("./lcd"));
const _161 = __importStar(require("./trst-rpc-client.query"));
const _162 = __importStar(require("./trst-rpc-client.tx"));
var trst;
(function (trst) {
    let alloc;
    (function (alloc) {
        alloc.v1beta1 = {
            ..._90,
            ..._91,
            ..._92,
            ..._145,
            ..._149
        };
    })(alloc = trst.alloc || (trst.alloc = {}));
    let autoibctx;
    (function (autoibctx) {
        autoibctx.v1beta1 = {
            ..._93,
            ..._94,
            ..._95,
            ..._96,
            ..._97,
            ..._146,
            ..._150,
            ..._153
        };
    })(autoibctx = trst.autoibctx || (trst.autoibctx = {}));
    let claim;
    (function (claim) {
        claim.v1beta1 = {
            ..._98,
            ..._99,
            ..._100,
            ..._101,
            ..._147,
            ..._151,
            ..._154
        };
    })(claim = trst.claim || (trst.claim = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._102,
            ..._103,
            ..._104,
            ..._148,
            ..._152
        };
    })(mint = trst.mint || (trst.mint = {}));
    trst.ClientFactory = {
        ..._160,
        ..._161,
        ..._162
    };
})(trst || (exports.trst = trst = {}));
//# sourceMappingURL=bundle.js.map