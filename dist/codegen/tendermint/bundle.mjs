import * as _74 from "./abci/types";
import * as _75 from "./crypto/keys";
import * as _76 from "./crypto/proof";
import * as _77 from "./libs/bits/types";
import * as _78 from "./p2p/types";
import * as _79 from "./types/block";
import * as _80 from "./types/evidence";
import * as _81 from "./types/params";
import * as _82 from "./types/types";
import * as _83 from "./types/validator";
import * as _84 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._74
    };
    tendermint.crypto = {
        ..._75,
        ..._76
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._77
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._78
    };
    tendermint.types = {
        ..._79,
        ..._80,
        ..._81,
        ..._82,
        ..._83
    };
    tendermint.version = {
        ..._84
    };
})(tendermint || (tendermint = {}));
//# sourceMappingURL=bundle.js.map