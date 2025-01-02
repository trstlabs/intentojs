import * as _61 from "./applications/transfer/v1/genesis";
import * as _62 from "./applications/transfer/v1/query";
import * as _63 from "./applications/transfer/v1/transfer";
import * as _64 from "./applications/transfer/v1/tx";
import * as _65 from "./applications/transfer/v2/packet";
import * as _66 from "./core/channel/v1/channel";
import * as _67 from "./core/channel/v1/genesis";
import * as _68 from "./core/channel/v1/query";
import * as _69 from "./core/channel/v1/tx";
import * as _70 from "./core/client/v1/client";
import * as _71 from "./core/client/v1/genesis";
import * as _72 from "./core/client/v1/query";
import * as _73 from "./core/client/v1/tx";
import * as _74 from "./core/commitment/v1/commitment";
import * as _75 from "./core/connection/v1/connection";
import * as _76 from "./core/connection/v1/genesis";
import * as _77 from "./core/connection/v1/query";
import * as _78 from "./core/connection/v1/tx";
import * as _79 from "./lightclients/localhost/v1/localhost";
import * as _80 from "./lightclients/solomachine/v1/solomachine";
import * as _81 from "./lightclients/solomachine/v2/solomachine";
import * as _82 from "./lightclients/tendermint/v1/tendermint";
import * as _148 from "./applications/transfer/v1/tx.amino";
import * as _149 from "./core/channel/v1/tx.amino";
import * as _150 from "./core/client/v1/tx.amino";
import * as _151 from "./core/connection/v1/tx.amino";
import * as _152 from "./applications/transfer/v1/tx.registry";
import * as _153 from "./core/channel/v1/tx.registry";
import * as _154 from "./core/client/v1/tx.registry";
import * as _155 from "./core/connection/v1/tx.registry";
import * as _156 from "./applications/transfer/v1/query.rpc.Query";
import * as _157 from "./core/channel/v1/query.rpc.Query";
import * as _158 from "./core/client/v1/query.rpc.Query";
import * as _159 from "./core/connection/v1/query.rpc.Query";
import * as _160 from "./applications/transfer/v1/tx.rpc.msg";
import * as _161 from "./core/channel/v1/tx.rpc.msg";
import * as _162 from "./core/client/v1/tx.rpc.msg";
import * as _163 from "./core/connection/v1/tx.rpc.msg";
import * as _187 from "./rpc.query";
import * as _188 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._61,
        ..._62,
        ..._63,
        ..._64,
        ..._148,
        ..._152,
        ..._156,
        ..._160
      };
      export const v2 = {
        ..._65
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._66,
        ..._67,
        ..._68,
        ..._69,
        ..._149,
        ..._153,
        ..._157,
        ..._161
      };
    }
    export namespace client {
      export const v1 = {
        ..._70,
        ..._71,
        ..._72,
        ..._73,
        ..._150,
        ..._154,
        ..._158,
        ..._162
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._74
      };
    }
    export namespace connection {
      export const v1 = {
        ..._75,
        ..._76,
        ..._77,
        ..._78,
        ..._151,
        ..._155,
        ..._159,
        ..._163
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._79
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._80
      };
      export const v2 = {
        ..._81
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._82
      };
    }
  }
  export const ClientFactory = {
    ..._187,
    ..._188
  };
}