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
const _52 = __importStar(require("./applications/transfer/v1/genesis"));
const _53 = __importStar(require("./applications/transfer/v1/query"));
const _54 = __importStar(require("./applications/transfer/v1/transfer"));
const _55 = __importStar(require("./applications/transfer/v1/tx"));
const _56 = __importStar(require("./applications/transfer/v2/packet"));
const _57 = __importStar(require("./core/channel/v1/channel"));
const _58 = __importStar(require("./core/channel/v1/genesis"));
const _59 = __importStar(require("./core/channel/v1/query"));
const _60 = __importStar(require("./core/channel/v1/tx"));
const _61 = __importStar(require("./core/client/v1/client"));
const _62 = __importStar(require("./core/client/v1/genesis"));
const _63 = __importStar(require("./core/client/v1/query"));
const _64 = __importStar(require("./core/client/v1/tx"));
const _65 = __importStar(require("./core/commitment/v1/commitment"));
const _66 = __importStar(require("./core/connection/v1/connection"));
const _67 = __importStar(require("./core/connection/v1/genesis"));
const _68 = __importStar(require("./core/connection/v1/query"));
const _69 = __importStar(require("./core/connection/v1/tx"));
const _70 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _71 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _72 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _73 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _126 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _127 = __importStar(require("./core/channel/v1/query.lcd"));
const _128 = __importStar(require("./core/client/v1/query.lcd"));
const _129 = __importStar(require("./core/connection/v1/query.lcd"));
const _130 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _131 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _132 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _133 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _134 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _135 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _136 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _137 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _151 = __importStar(require("./lcd"));
const _152 = __importStar(require("./rpc.query"));
const _153 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._52,
                ..._53,
                ..._54,
                ..._55,
                ..._126,
                ..._130,
                ..._134
            };
            transfer.v2 = {
                ..._56
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._57,
                ..._58,
                ..._59,
                ..._60,
                ..._127,
                ..._131,
                ..._135
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._61,
                ..._62,
                ..._63,
                ..._64,
                ..._128,
                ..._132,
                ..._136
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._65
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._66,
                ..._67,
                ..._68,
                ..._69,
                ..._129,
                ..._133,
                ..._137
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._70
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._71
            };
            solomachine.v2 = {
                ..._72
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._73
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._151,
        ..._152,
        ..._153
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map