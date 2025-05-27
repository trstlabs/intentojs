import * as _93 from "./amm/denom_liquidity";
import * as _94 from "./amm/genesis";
import * as _95 from "./amm/params";
import * as _96 from "./amm/pool_asset";
import * as _97 from "./amm/pool_params";
import * as _98 from "./amm/pool";
import * as _99 from "./amm/proposal";
import * as _100 from "./amm/query";
import * as _101 from "./amm/swap_route";
import * as _102 from "./amm/tx";
import * as _103 from "./amm/types";
import * as _104 from "./estaking/dex_rewards_tracker";
import * as _105 from "./estaking/elys_staked";
import * as _106 from "./estaking/incentive";
import * as _107 from "./estaking/params";
import * as _108 from "./estaking/tx";
import * as _109 from "./leveragelp/params";
import * as _110 from "./leveragelp/pool";
import * as _111 from "./leveragelp/tx";
import * as _112 from "./leveragelp/types";
import * as _113 from "./masterchef/external_incentive";
import * as _114 from "./masterchef/incentive";
import * as _115 from "./masterchef/params";
import * as _116 from "./masterchef/pool";
import * as _117 from "./masterchef/tx";
import * as _118 from "./masterchef/types";
import * as _119 from "./perpetual/params";
import * as _120 from "./perpetual/pool";
import * as _121 from "./perpetual/tx";
import * as _122 from "./perpetual/types";
import * as _123 from "./stablestake/debt";
import * as _124 from "./stablestake/params";
import * as _125 from "./stablestake/pool";
import * as _126 from "./stablestake/tx";
import * as _127 from "./stablestake/types";
import * as _128 from "./tradeshield/order";
import * as _129 from "./tradeshield/params";
import * as _130 from "./tradeshield/tx";
import * as _131 from "./tradeshield/types";
import * as _201 from "./amm/tx.amino";
import * as _202 from "./estaking/tx.amino";
import * as _203 from "./leveragelp/tx.amino";
import * as _204 from "./masterchef/tx.amino";
import * as _205 from "./perpetual/tx.amino";
import * as _206 from "./stablestake/tx.amino";
import * as _207 from "./tradeshield/tx.amino";
import * as _208 from "./amm/tx.registry";
import * as _209 from "./estaking/tx.registry";
import * as _210 from "./leveragelp/tx.registry";
import * as _211 from "./masterchef/tx.registry";
import * as _212 from "./perpetual/tx.registry";
import * as _213 from "./stablestake/tx.registry";
import * as _214 from "./tradeshield/tx.registry";
import * as _215 from "./amm/query.rpc.Query";
import * as _216 from "./amm/tx.rpc.msg";
import * as _217 from "./estaking/tx.rpc.msg";
import * as _218 from "./leveragelp/tx.rpc.msg";
import * as _219 from "./masterchef/tx.rpc.msg";
import * as _220 from "./perpetual/tx.rpc.msg";
import * as _221 from "./stablestake/tx.rpc.msg";
import * as _222 from "./tradeshield/tx.rpc.msg";
import * as _248 from "./rpc.query";
import * as _249 from "./rpc.tx";
export namespace elys {
  export const amm = {
    ..._93,
    ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._201,
    ..._208,
    ..._215,
    ..._216
  };
  export const estaking = {
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._202,
    ..._209,
    ..._217
  };
  export const leveragelp = {
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._203,
    ..._210,
    ..._218
  };
  export const masterchef = {
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._204,
    ..._211,
    ..._219
  };
  export const perpetual = {
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._205,
    ..._212,
    ..._220
  };
  export const stablestake = {
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._127,
    ..._206,
    ..._213,
    ..._221
  };
  export const tradeshield = {
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._207,
    ..._214,
    ..._222
  };
  export const ClientFactory = {
    ..._248,
    ..._249
  };
}