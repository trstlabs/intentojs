import * as _76 from "./abci/types";
import * as _77 from "./crypto/keys";
import * as _78 from "./crypto/proof";
import * as _79 from "./libs/bits/types";
import * as _80 from "./p2p/types";
import * as _81 from "./types/block";
import * as _82 from "./types/evidence";
import * as _83 from "./types/params";
import * as _84 from "./types/types";
import * as _85 from "./types/validator";
import * as _86 from "./version/types";
import * as _144 from "./abci/types.rpc.ABCIApplication";
import * as _159 from "./lcd";
export var tendermint;
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
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map