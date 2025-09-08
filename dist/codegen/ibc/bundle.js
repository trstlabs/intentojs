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
exports.ibc = void 0;
const _58 = __importStar(require("./applications/transfer/v1/genesis"));
const _59 = __importStar(require("./applications/transfer/v1/query"));
const _60 = __importStar(require("./applications/transfer/v1/transfer"));
const _61 = __importStar(require("./applications/transfer/v1/tx"));
const _62 = __importStar(require("./applications/transfer/v2/packet"));
const _63 = __importStar(require("./core/channel/v1/channel"));
const _64 = __importStar(require("./core/channel/v1/genesis"));
const _65 = __importStar(require("./core/channel/v1/query"));
const _66 = __importStar(require("./core/channel/v1/tx"));
const _67 = __importStar(require("./core/client/v1/client"));
const _68 = __importStar(require("./core/client/v1/genesis"));
const _69 = __importStar(require("./core/client/v1/query"));
const _70 = __importStar(require("./core/client/v1/tx"));
const _71 = __importStar(require("./core/commitment/v1/commitment"));
const _72 = __importStar(require("./core/connection/v1/connection"));
const _73 = __importStar(require("./core/connection/v1/genesis"));
const _74 = __importStar(require("./core/connection/v1/query"));
const _75 = __importStar(require("./core/connection/v1/tx"));
const _76 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _77 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _78 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _79 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _188 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _189 = __importStar(require("./core/channel/v1/tx.amino"));
const _190 = __importStar(require("./core/client/v1/tx.amino"));
const _191 = __importStar(require("./core/connection/v1/tx.amino"));
const _192 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _193 = __importStar(require("./core/channel/v1/tx.registry"));
const _194 = __importStar(require("./core/client/v1/tx.registry"));
const _195 = __importStar(require("./core/connection/v1/tx.registry"));
const _196 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _197 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _198 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _199 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _200 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _201 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _202 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _203 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _256 = __importStar(require("./rpc.query"));
const _257 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._58,
                ..._59,
                ..._60,
                ..._61,
                ..._188,
                ..._192,
                ..._196,
                ..._200
            };
            transfer.v2 = {
                ..._62
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._63,
                ..._64,
                ..._65,
                ..._66,
                ..._189,
                ..._193,
                ..._197,
                ..._201
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._67,
                ..._68,
                ..._69,
                ..._70,
                ..._190,
                ..._194,
                ..._198,
                ..._202
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._71
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._72,
                ..._73,
                ..._74,
                ..._75,
                ..._191,
                ..._195,
                ..._199,
                ..._203
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._76
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._77
            };
            solomachine.v2 = {
                ..._78
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._79
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._256,
        ..._257
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map