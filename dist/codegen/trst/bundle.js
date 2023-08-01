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
const _88 = __importStar(require("./alloc/v1beta1/genesis"));
const _89 = __importStar(require("./alloc/v1beta1/params"));
const _90 = __importStar(require("./alloc/v1beta1/query"));
const _91 = __importStar(require("./autoibctx/v1beta1/genesis"));
const _92 = __importStar(require("./autoibctx/v1beta1/query"));
const _93 = __importStar(require("./autoibctx/v1beta1/tx"));
const _94 = __importStar(require("./autoibctx/v1beta1/types"));
const _95 = __importStar(require("./autoibctx/v1beta1/usage"));
const _96 = __importStar(require("./claim/v1beta1/claim"));
const _97 = __importStar(require("./claim/v1beta1/genesis"));
const _98 = __importStar(require("./claim/v1beta1/params"));
const _99 = __importStar(require("./claim/v1beta1/query"));
const _100 = __importStar(require("./mint/v1beta1/genesis"));
const _101 = __importStar(require("./mint/v1beta1/mint"));
const _102 = __importStar(require("./mint/v1beta1/query"));
const _138 = __importStar(require("./alloc/v1beta1/query.lcd"));
const _139 = __importStar(require("./autoibctx/v1beta1/query.lcd"));
const _140 = __importStar(require("./claim/v1beta1/query.lcd"));
const _141 = __importStar(require("./mint/v1beta1/query.lcd"));
const _142 = __importStar(require("./alloc/v1beta1/query.rpc.Query"));
const _143 = __importStar(require("./autoibctx/v1beta1/query.rpc.Query"));
const _144 = __importStar(require("./claim/v1beta1/query.rpc.Query"));
const _145 = __importStar(require("./mint/v1beta1/query.rpc.Query"));
const _146 = __importStar(require("./autoibctx/v1beta1/tx.rpc.msg"));
const _147 = __importStar(require("./claim/v1beta1/claim.rpc.msg"));
const _154 = __importStar(require("./lcd"));
const _155 = __importStar(require("./rpc.query"));
const _156 = __importStar(require("./rpc.tx"));
var trst;
(function (trst) {
    let alloc;
    (function (alloc) {
        alloc.v1beta1 = {
            ..._88,
            ..._89,
            ..._90,
            ..._138,
            ..._142
        };
    })(alloc = trst.alloc || (trst.alloc = {}));
    let autoibctx;
    (function (autoibctx) {
        autoibctx.v1beta1 = {
            ..._91,
            ..._92,
            ..._93,
            ..._94,
            ..._95,
            ..._139,
            ..._143,
            ..._146
        };
    })(autoibctx = trst.autoibctx || (trst.autoibctx = {}));
    let claim;
    (function (claim) {
        claim.v1beta1 = {
            ..._96,
            ..._97,
            ..._98,
            ..._99,
            ..._140,
            ..._144,
            ..._147
        };
    })(claim = trst.claim || (trst.claim = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._100,
            ..._101,
            ..._102,
            ..._141,
            ..._145
        };
    })(mint = trst.mint || (trst.mint = {}));
    trst.ClientFactory = {
        ..._154,
        ..._155,
        ..._156
    };
})(trst || (exports.trst = trst = {}));
//# sourceMappingURL=bundle.js.map