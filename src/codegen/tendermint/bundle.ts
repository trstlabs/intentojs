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
export namespace tendermint {
  export const abci = {
    ..._74
  };
  export const crypto = {
    ..._75,
    ..._76
  };
  export namespace libs {
    export const bits = {
      ..._77
    };
  }
  export const p2p = {
    ..._78
  };
  export const types = {
    ..._79,
    ..._80,
    ..._81,
    ..._82,
    ..._83
  };
  export const version = {
    ..._84
  };
}