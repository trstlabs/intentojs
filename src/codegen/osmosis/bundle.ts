import * as _158 from "./gamm/v1beta1/gamm";
import * as _159 from "./poolmanager/v1beta1/swap_route";
import * as _254 from "./gamm/v1beta1/gamm.amino";
import * as _255 from "./gamm/v1beta1/gamm.registry";
import * as _256 from "./gamm/v1beta1/gamm.rpc.msg";
import * as _270 from "./rpc.tx";
export namespace osmosis {
  export namespace gamm {
    export const v1beta1 = {
      ..._158,
      ..._254,
      ..._255,
      ..._256
    };
  }
  export namespace poolmanager {
    export const v1beta1 = {
      ..._159
    };
  }
  export const ClientFactory = {
    ..._270
  };
}