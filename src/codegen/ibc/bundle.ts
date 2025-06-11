import * as _62 from "./applications/transfer/v1/genesis";
import * as _63 from "./applications/transfer/v1/query";
import * as _64 from "./applications/transfer/v1/transfer";
import * as _65 from "./applications/transfer/v1/tx";
import * as _66 from "./applications/transfer/v2/packet";
import * as _67 from "./core/channel/v1/channel";
import * as _68 from "./core/channel/v1/genesis";
import * as _69 from "./core/channel/v1/query";
import * as _70 from "./core/channel/v1/tx";
import * as _71 from "./core/client/v1/client";
import * as _72 from "./core/client/v1/genesis";
import * as _73 from "./core/client/v1/query";
import * as _74 from "./core/client/v1/tx";
import * as _75 from "./core/commitment/v1/commitment";
import * as _76 from "./core/connection/v1/connection";
import * as _77 from "./core/connection/v1/genesis";
import * as _78 from "./core/connection/v1/query";
import * as _79 from "./core/connection/v1/tx";
import * as _80 from "./lightclients/localhost/v1/localhost";
import * as _81 from "./lightclients/solomachine/v1/solomachine";
import * as _82 from "./lightclients/solomachine/v2/solomachine";
import * as _83 from "./lightclients/tendermint/v1/tendermint";
import * as _196 from "./applications/transfer/v1/tx.amino";
import * as _197 from "./core/channel/v1/tx.amino";
import * as _198 from "./core/client/v1/tx.amino";
import * as _199 from "./core/connection/v1/tx.amino";
import * as _200 from "./applications/transfer/v1/tx.registry";
import * as _201 from "./core/channel/v1/tx.registry";
import * as _202 from "./core/client/v1/tx.registry";
import * as _203 from "./core/connection/v1/tx.registry";
import * as _204 from "./applications/transfer/v1/query.rpc.Query";
import * as _205 from "./core/channel/v1/query.rpc.Query";
import * as _206 from "./core/client/v1/query.rpc.Query";
import * as _207 from "./core/connection/v1/query.rpc.Query";
import * as _208 from "./applications/transfer/v1/tx.rpc.msg";
import * as _209 from "./core/channel/v1/tx.rpc.msg";
import * as _210 from "./core/client/v1/tx.rpc.msg";
import * as _211 from "./core/connection/v1/tx.rpc.msg";
import * as _264 from "./rpc.query";
import * as _265 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._196,
        ..._200,
        ..._204,
        ..._208
      };
      export const v2 = {
        ..._66
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._197,
        ..._201,
        ..._205,
        ..._209
      };
    }
    export namespace client {
      export const v1 = {
        ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._198,
        ..._202,
        ..._206,
        ..._210
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._75
      };
    }
    export namespace connection {
      export const v1 = {
        ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._199,
        ..._203,
        ..._207,
        ..._211
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._80
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._81
      };
      export const v2 = {
        ..._82
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._83
      };
    }
  }
  export const ClientFactory = {
    ..._264,
    ..._265
  };
}