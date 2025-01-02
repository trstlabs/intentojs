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
exports.ibc = void 0;
const _61 = __importStar(require("./applications/transfer/v1/genesis"));
const _62 = __importStar(require("./applications/transfer/v1/query"));
const _63 = __importStar(require("./applications/transfer/v1/transfer"));
const _64 = __importStar(require("./applications/transfer/v1/tx"));
const _65 = __importStar(require("./applications/transfer/v2/packet"));
const _66 = __importStar(require("./core/channel/v1/channel"));
const _67 = __importStar(require("./core/channel/v1/genesis"));
const _68 = __importStar(require("./core/channel/v1/query"));
const _69 = __importStar(require("./core/channel/v1/tx"));
const _70 = __importStar(require("./core/client/v1/client"));
const _71 = __importStar(require("./core/client/v1/genesis"));
const _72 = __importStar(require("./core/client/v1/query"));
const _73 = __importStar(require("./core/client/v1/tx"));
const _74 = __importStar(require("./core/commitment/v1/commitment"));
const _75 = __importStar(require("./core/connection/v1/connection"));
const _76 = __importStar(require("./core/connection/v1/genesis"));
const _77 = __importStar(require("./core/connection/v1/query"));
const _78 = __importStar(require("./core/connection/v1/tx"));
const _79 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _80 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _81 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _82 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _148 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _149 = __importStar(require("./core/channel/v1/tx.amino"));
const _150 = __importStar(require("./core/client/v1/tx.amino"));
const _151 = __importStar(require("./core/connection/v1/tx.amino"));
const _152 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _153 = __importStar(require("./core/channel/v1/tx.registry"));
const _154 = __importStar(require("./core/client/v1/tx.registry"));
const _155 = __importStar(require("./core/connection/v1/tx.registry"));
const _156 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _157 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _158 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _159 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _160 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _161 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _162 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _163 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _187 = __importStar(require("./rpc.query"));
const _188 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._61,
                ..._62,
                ..._63,
                ..._64,
                ..._148,
                ..._152,
                ..._156,
                ..._160
            };
            transfer.v2 = {
                ..._65
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._66,
                ..._67,
                ..._68,
                ..._69,
                ..._149,
                ..._153,
                ..._157,
                ..._161
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._70,
                ..._71,
                ..._72,
                ..._73,
                ..._150,
                ..._154,
                ..._158,
                ..._162
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._74
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._75,
                ..._76,
                ..._77,
                ..._78,
                ..._151,
                ..._155,
                ..._159,
                ..._163
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._79
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._80
            };
            solomachine.v2 = {
                ..._81
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._82
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._187,
        ..._188
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map