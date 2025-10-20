import * as _158 from "./gamm/v1beta1/gamm";
import * as _159 from "./poolmanager/v1beta1/swap_route";
import * as _160 from "./twap/v1beta1/twap";
import * as _255 from "./gamm/v1beta1/gamm.amino";
import * as _256 from "./gamm/v1beta1/gamm.registry";
import * as _257 from "./gamm/v1beta1/gamm.rpc.msg";
import * as _271 from "./rpc.tx";
export namespace osmosis {
  export namespace gamm {
    export const v1beta1 = {
      ..._158,
      ..._255,
      ..._256,
      ..._257
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._159
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._160
    };
  }
  export const ClientFactory = {
    ..._271
  };
}