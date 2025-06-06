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
const _60 = __importStar(require("./applications/transfer/v1/genesis"));
const _61 = __importStar(require("./applications/transfer/v1/query"));
const _62 = __importStar(require("./applications/transfer/v1/transfer"));
const _63 = __importStar(require("./applications/transfer/v1/tx"));
const _64 = __importStar(require("./applications/transfer/v2/packet"));
const _65 = __importStar(require("./core/channel/v1/channel"));
const _66 = __importStar(require("./core/channel/v1/genesis"));
const _67 = __importStar(require("./core/channel/v1/query"));
const _68 = __importStar(require("./core/channel/v1/tx"));
const _69 = __importStar(require("./core/client/v1/client"));
const _70 = __importStar(require("./core/client/v1/genesis"));
const _71 = __importStar(require("./core/client/v1/query"));
const _72 = __importStar(require("./core/client/v1/tx"));
const _73 = __importStar(require("./core/commitment/v1/commitment"));
const _74 = __importStar(require("./core/connection/v1/connection"));
const _75 = __importStar(require("./core/connection/v1/genesis"));
const _76 = __importStar(require("./core/connection/v1/query"));
const _77 = __importStar(require("./core/connection/v1/tx"));
const _78 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _79 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _80 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _81 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _185 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _186 = __importStar(require("./core/channel/v1/tx.amino"));
const _187 = __importStar(require("./core/client/v1/tx.amino"));
const _188 = __importStar(require("./core/connection/v1/tx.amino"));
const _189 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _190 = __importStar(require("./core/channel/v1/tx.registry"));
const _191 = __importStar(require("./core/client/v1/tx.registry"));
const _192 = __importStar(require("./core/connection/v1/tx.registry"));
const _193 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _194 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _195 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _196 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _197 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _198 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _199 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _200 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _246 = __importStar(require("./rpc.query"));
const _247 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._60,
                ..._61,
                ..._62,
                ..._63,
                ..._185,
                ..._189,
                ..._193,
                ..._197
            };
            transfer.v2 = {
                ..._64
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._65,
                ..._66,
                ..._67,
                ..._68,
                ..._186,
                ..._190,
                ..._194,
                ..._198
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._69,
                ..._70,
                ..._71,
                ..._72,
                ..._187,
                ..._191,
                ..._195,
                ..._199
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._73
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._74,
                ..._75,
                ..._76,
                ..._77,
                ..._188,
                ..._192,
                ..._196,
                ..._200
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._78
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._79
            };
            solomachine.v2 = {
                ..._80
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._81
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._246,
        ..._247
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map