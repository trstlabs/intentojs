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
const _54 = __importStar(require("./applications/transfer/v1/genesis"));
const _55 = __importStar(require("./applications/transfer/v1/query"));
const _56 = __importStar(require("./applications/transfer/v1/transfer"));
const _57 = __importStar(require("./applications/transfer/v1/tx"));
const _58 = __importStar(require("./applications/transfer/v2/packet"));
const _59 = __importStar(require("./core/channel/v1/channel"));
const _60 = __importStar(require("./core/channel/v1/genesis"));
const _61 = __importStar(require("./core/channel/v1/query"));
const _62 = __importStar(require("./core/channel/v1/tx"));
const _63 = __importStar(require("./core/client/v1/client"));
const _64 = __importStar(require("./core/client/v1/genesis"));
const _65 = __importStar(require("./core/client/v1/query"));
const _66 = __importStar(require("./core/client/v1/tx"));
const _67 = __importStar(require("./core/commitment/v1/commitment"));
const _68 = __importStar(require("./core/connection/v1/connection"));
const _69 = __importStar(require("./core/connection/v1/genesis"));
const _70 = __importStar(require("./core/connection/v1/query"));
const _71 = __importStar(require("./core/connection/v1/tx"));
const _72 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _73 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _74 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _75 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _132 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _133 = __importStar(require("./core/channel/v1/query.lcd"));
const _134 = __importStar(require("./core/client/v1/query.lcd"));
const _135 = __importStar(require("./core/connection/v1/query.lcd"));
const _136 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _137 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _138 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _139 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _140 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _141 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _142 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _143 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _158 = __importStar(require("./lcd"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._54,
                ..._55,
                ..._56,
                ..._57,
                ..._132,
                ..._136,
                ..._140
            };
            transfer.v2 = {
                ..._58
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._59,
                ..._60,
                ..._61,
                ..._62,
                ..._133,
                ..._137,
                ..._141
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._63,
                ..._64,
                ..._65,
                ..._66,
                ..._134,
                ..._138,
                ..._142
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._67
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._68,
                ..._69,
                ..._70,
                ..._71,
                ..._135,
                ..._139,
                ..._143
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._72
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._73
            };
            solomachine.v2 = {
                ..._74
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._75
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._158
    };
})(ibc || (exports.ibc = ibc = {}));
//# sourceMappingURL=bundle.js.map