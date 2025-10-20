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
const _62 = __importStar(require("./applications/transfer/v1/genesis"));
const _63 = __importStar(require("./applications/transfer/v1/query"));
const _64 = __importStar(require("./applications/transfer/v1/transfer"));
const _65 = __importStar(require("./applications/transfer/v1/tx"));
const _66 = __importStar(require("./applications/transfer/v2/packet"));
const _67 = __importStar(require("./core/channel/v1/channel"));
const _68 = __importStar(require("./core/channel/v1/genesis"));
const _69 = __importStar(require("./core/channel/v1/query"));
const _70 = __importStar(require("./core/channel/v1/tx"));
const _71 = __importStar(require("./core/client/v1/client"));
const _72 = __importStar(require("./core/client/v1/genesis"));
const _73 = __importStar(require("./core/client/v1/query"));
const _74 = __importStar(require("./core/client/v1/tx"));
const _75 = __importStar(require("./core/commitment/v1/commitment"));
const _76 = __importStar(require("./core/connection/v1/connection"));
const _77 = __importStar(require("./core/connection/v1/genesis"));
const _78 = __importStar(require("./core/connection/v1/query"));
const _79 = __importStar(require("./core/connection/v1/tx"));
const _80 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _81 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _82 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _83 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _197 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _198 = __importStar(require("./core/channel/v1/tx.amino"));
const _199 = __importStar(require("./core/client/v1/tx.amino"));
const _200 = __importStar(require("./core/connection/v1/tx.amino"));
const _201 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _202 = __importStar(require("./core/channel/v1/tx.registry"));
const _203 = __importStar(require("./core/client/v1/tx.registry"));
const _204 = __importStar(require("./core/connection/v1/tx.registry"));
const _205 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _206 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _207 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _208 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _209 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _210 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _211 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _212 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _265 = __importStar(require("./rpc.query"));
const _266 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._62,
                ..._63,
                ..._64,
                ..._65,
                ..._197,
                ..._201,
                ..._205,
                ..._209
            };
            transfer.v2 = {
                ..._66
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._67,
                ..._68,
                ..._69,
                ..._70,
                ..._198,
                ..._202,
                ..._206,
                ..._210
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._71,
                ..._72,
                ..._73,
                ..._74,
                ..._199,
                ..._203,
                ..._207,
                ..._211
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._75
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._76,
                ..._77,
                ..._78,
                ..._79,
                ..._200,
                ..._204,
                ..._208,
                ..._212
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._80
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._81
            };
            solomachine.v2 = {
                ..._82
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._83
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._265,
        ..._266
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map