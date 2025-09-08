import * as _154 from "./gamm/v1beta1/gamm";
import * as _155 from "./poolmanager/v1beta1/swap_route";
import * as _246 from "./gamm/v1beta1/gamm.amino";
import * as _247 from "./gamm/v1beta1/gamm.registry";
import * as _248 from "./gamm/v1beta1/gamm.rpc.msg";
import * as _262 from "./rpc.tx";
export namespace osmosis {
  export namespace gamm {
    export const v1beta1 = {
      ..._154,
      ..._246,
      ..._247,
      ..._248
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._155
    };
  }
  export const ClientFactory = {
    ..._262
  };
}