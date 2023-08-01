import * as _52 from "./applications/transfer/v1/genesis";
import * as _53 from "./applications/transfer/v1/query";
import * as _54 from "./applications/transfer/v1/transfer";
import * as _55 from "./applications/transfer/v1/tx";
import * as _56 from "./applications/transfer/v2/packet";
import * as _57 from "./core/channel/v1/channel";
import * as _58 from "./core/channel/v1/genesis";
import * as _59 from "./core/channel/v1/query";
import * as _60 from "./core/channel/v1/tx";
import * as _61 from "./core/client/v1/client";
import * as _62 from "./core/client/v1/genesis";
import * as _63 from "./core/client/v1/query";
import * as _64 from "./core/client/v1/tx";
import * as _65 from "./core/commitment/v1/commitment";
import * as _66 from "./core/connection/v1/connection";
import * as _67 from "./core/connection/v1/genesis";
import * as _68 from "./core/connection/v1/query";
import * as _69 from "./core/connection/v1/tx";
import * as _70 from "./lightclients/localhost/v1/localhost";
import * as _71 from "./lightclients/solomachine/v1/solomachine";
import * as _72 from "./lightclients/solomachine/v2/solomachine";
import * as _73 from "./lightclients/tendermint/v1/tendermint";
import * as _126 from "./applications/transfer/v1/query.lcd";
import * as _127 from "./core/channel/v1/query.lcd";
import * as _128 from "./core/client/v1/query.lcd";
import * as _129 from "./core/connection/v1/query.lcd";
import * as _130 from "./applications/transfer/v1/query.rpc.Query";
import * as _131 from "./core/channel/v1/query.rpc.Query";
import * as _132 from "./core/client/v1/query.rpc.Query";
import * as _133 from "./core/connection/v1/query.rpc.Query";
import * as _134 from "./applications/transfer/v1/tx.rpc.msg";
import * as _135 from "./core/channel/v1/tx.rpc.msg";
import * as _136 from "./core/client/v1/tx.rpc.msg";
import * as _137 from "./core/connection/v1/tx.rpc.msg";
import * as _151 from "./lcd";
import * as _152 from "./rpc.query";
import * as _153 from "./rpc.tx";
export var ibc;
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
})(ibc || (ibc = {}));
//# sourceMappingURL=bundle.js.map