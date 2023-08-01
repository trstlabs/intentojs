import * as _54 from "./applications/transfer/v1/genesis";
import * as _55 from "./applications/transfer/v1/query";
import * as _56 from "./applications/transfer/v1/transfer";
import * as _57 from "./applications/transfer/v1/tx";
import * as _58 from "./applications/transfer/v2/packet";
import * as _59 from "./core/channel/v1/channel";
import * as _60 from "./core/channel/v1/genesis";
import * as _61 from "./core/channel/v1/query";
import * as _62 from "./core/channel/v1/tx";
import * as _63 from "./core/client/v1/client";
import * as _64 from "./core/client/v1/genesis";
import * as _65 from "./core/client/v1/query";
import * as _66 from "./core/client/v1/tx";
import * as _67 from "./core/commitment/v1/commitment";
import * as _68 from "./core/connection/v1/connection";
import * as _69 from "./core/connection/v1/genesis";
import * as _70 from "./core/connection/v1/query";
import * as _71 from "./core/connection/v1/tx";
import * as _72 from "./lightclients/localhost/v1/localhost";
import * as _73 from "./lightclients/solomachine/v1/solomachine";
import * as _74 from "./lightclients/solomachine/v2/solomachine";
import * as _75 from "./lightclients/tendermint/v1/tendermint";
import * as _132 from "./applications/transfer/v1/query.lcd";
import * as _133 from "./core/channel/v1/query.lcd";
import * as _134 from "./core/client/v1/query.lcd";
import * as _135 from "./core/connection/v1/query.lcd";
import * as _136 from "./applications/transfer/v1/query.rpc.Query";
import * as _137 from "./core/channel/v1/query.rpc.Query";
import * as _138 from "./core/client/v1/query.rpc.Query";
import * as _139 from "./core/connection/v1/query.rpc.Query";
import * as _140 from "./applications/transfer/v1/tx.rpc.msg";
import * as _141 from "./core/channel/v1/tx.rpc.msg";
import * as _142 from "./core/client/v1/tx.rpc.msg";
import * as _143 from "./core/connection/v1/tx.rpc.msg";
import * as _158 from "./lcd";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._54,
        ..._55,
        ..._56,
        ..._57,
        ..._132,
        ..._136,
        ..._140
      };
      export const v2 = {
        ..._58
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._59,
        ..._60,
        ..._61,
        ..._62,
        ..._133,
        ..._137,
        ..._141
      };
    }
    export namespace client {
      export const v1 = {
        ..._63,
        ..._64,
        ..._65,
        ..._66,
        ..._134,
        ..._138,
        ..._142
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._67
      };
    }
    export namespace connection {
      export const v1 = {
        ..._68,
        ..._69,
        ..._70,
        ..._71,
        ..._135,
        ..._139,
        ..._143
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._72
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._73
      };
      export const v2 = {
        ..._74
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._75
      };
    }
  }
  export const ClientFactory = {
    ..._158
  };
}