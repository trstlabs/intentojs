import * as _53 from "./applications/transfer/v1/genesis";
import * as _54 from "./applications/transfer/v1/query";
import * as _55 from "./applications/transfer/v1/transfer";
import * as _56 from "./applications/transfer/v1/tx";
import * as _57 from "./applications/transfer/v2/packet";
import * as _58 from "./core/channel/v1/channel";
import * as _59 from "./core/channel/v1/genesis";
import * as _60 from "./core/channel/v1/query";
import * as _61 from "./core/channel/v1/tx";
import * as _62 from "./core/client/v1/client";
import * as _63 from "./core/client/v1/genesis";
import * as _64 from "./core/client/v1/query";
import * as _65 from "./core/client/v1/tx";
import * as _66 from "./core/commitment/v1/commitment";
import * as _67 from "./core/connection/v1/connection";
import * as _68 from "./core/connection/v1/genesis";
import * as _69 from "./core/connection/v1/query";
import * as _70 from "./core/connection/v1/tx";
import * as _71 from "./lightclients/localhost/v1/localhost";
import * as _72 from "./lightclients/solomachine/v1/solomachine";
import * as _73 from "./lightclients/solomachine/v2/solomachine";
import * as _74 from "./lightclients/tendermint/v1/tendermint";
import * as _135 from "./applications/transfer/v1/tx.amino";
import * as _136 from "./core/channel/v1/tx.amino";
import * as _137 from "./core/client/v1/tx.amino";
import * as _138 from "./core/connection/v1/tx.amino";
import * as _139 from "./applications/transfer/v1/tx.registry";
import * as _140 from "./core/channel/v1/tx.registry";
import * as _141 from "./core/client/v1/tx.registry";
import * as _142 from "./core/connection/v1/tx.registry";
import * as _143 from "./applications/transfer/v1/query.rpc.Query";
import * as _144 from "./core/channel/v1/query.rpc.Query";
import * as _145 from "./core/client/v1/query.rpc.Query";
import * as _146 from "./core/connection/v1/query.rpc.Query";
import * as _147 from "./applications/transfer/v1/tx.rpc.msg";
import * as _148 from "./core/channel/v1/tx.rpc.msg";
import * as _149 from "./core/client/v1/tx.rpc.msg";
import * as _150 from "./core/connection/v1/tx.rpc.msg";
import * as _166 from "./rpc.query";
import * as _167 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._53,
        ..._54,
        ..._55,
        ..._56,
        ..._135,
        ..._139,
        ..._143,
        ..._147
      };
      export const v2 = {
        ..._57
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._58,
        ..._59,
        ..._60,
        ..._61,
        ..._136,
        ..._140,
        ..._144,
        ..._148
      };
    }
    export namespace client {
      export const v1 = {
        ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._137,
        ..._141,
        ..._145,
        ..._149
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._66
      };
    }
    export namespace connection {
      export const v1 = {
        ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._138,
        ..._142,
        ..._146,
        ..._150
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._71
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._72
      };
      export const v2 = {
        ..._73
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._74
      };
    }
  }
  export const ClientFactory = {
    ..._166,
    ..._167
  };
}