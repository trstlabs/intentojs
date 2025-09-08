import * as _91 from "./amm/denom_liquidity";
import * as _92 from "./amm/genesis";
import * as _93 from "./amm/params";
import * as _94 from "./amm/pool_asset";
import * as _95 from "./amm/pool_params";
import * as _96 from "./amm/pool";
import * as _97 from "./amm/proposal";
import * as _98 from "./amm/query";
import * as _99 from "./amm/swap_route";
import * as _100 from "./amm/tx";
import * as _101 from "./amm/types";
import * as _102 from "./commitment/airdrop";
import * as _103 from "./commitment/commitments";
import * as _104 from "./commitment/genesis";
import * as _105 from "./commitment/params";
import * as _106 from "./commitment/query";
import * as _107 from "./commitment/tx";
import * as _108 from "./estaking/dex_rewards_tracker";
import * as _109 from "./estaking/elys_staked";
import * as _110 from "./estaking/incentive";
import * as _111 from "./estaking/params";
import * as _112 from "./estaking/tx";
import * as _113 from "./leveragelp/params";
import * as _114 from "./leveragelp/pool";
import * as _115 from "./leveragelp/tx";
import * as _116 from "./leveragelp/types";
import * as _117 from "./masterchef/external_incentive";
import * as _118 from "./masterchef/incentive";
import * as _119 from "./masterchef/params";
import * as _120 from "./masterchef/pool";
import * as _121 from "./masterchef/tx";
import * as _122 from "./masterchef/types";
import * as _123 from "./perpetual/params";
import * as _124 from "./perpetual/pool";
import * as _125 from "./perpetual/tx";
import * as _126 from "./perpetual/types";
import * as _127 from "./stablestake/debt";
import * as _128 from "./stablestake/params";
import * as _129 from "./stablestake/pool";
import * as _130 from "./stablestake/tx";
import * as _131 from "./stablestake/types";
import * as _132 from "./tradeshield/order";
import * as _133 from "./tradeshield/params";
import * as _134 from "./tradeshield/tx";
import * as _135 from "./tradeshield/types";
import * as _204 from "./amm/tx.amino";
import * as _205 from "./commitment/tx.amino";
import * as _206 from "./estaking/tx.amino";
import * as _207 from "./leveragelp/tx.amino";
import * as _208 from "./masterchef/tx.amino";
import * as _209 from "./perpetual/tx.amino";
import * as _210 from "./stablestake/tx.amino";
import * as _211 from "./tradeshield/tx.amino";
import * as _212 from "./amm/tx.registry";
import * as _213 from "./commitment/tx.registry";
import * as _214 from "./estaking/tx.registry";
import * as _215 from "./leveragelp/tx.registry";
import * as _216 from "./masterchef/tx.registry";
import * as _217 from "./perpetual/tx.registry";
import * as _218 from "./stablestake/tx.registry";
import * as _219 from "./tradeshield/tx.registry";
import * as _220 from "./amm/query.rpc.Query";
import * as _221 from "./commitment/query.rpc.Query";
import * as _222 from "./amm/tx.rpc.msg";
import * as _223 from "./commitment/tx.rpc.msg";
import * as _224 from "./estaking/tx.rpc.msg";
import * as _225 from "./leveragelp/tx.rpc.msg";
import * as _226 from "./masterchef/tx.rpc.msg";
import * as _227 from "./perpetual/tx.rpc.msg";
import * as _228 from "./stablestake/tx.rpc.msg";
import * as _229 from "./tradeshield/tx.rpc.msg";
import * as _258 from "./rpc.query";
import * as _259 from "./rpc.tx";
export namespace elys {
  export const amm = {
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._204,
    ..._212,
    ..._220,
    ..._222
  };
  export const commitment = {
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._205,
    ..._213,
    ..._221,
    ..._223
  };
  export const estaking = {
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._206,
    ..._214,
    ..._224
  };
  export const leveragelp = {
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._207,
    ..._215,
    ..._225
  };
  export const masterchef = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._208,
    ..._216,
    ..._226
  };
  export const perpetual = {
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._209,
    ..._217,
    ..._227
  };
  export const stablestake = {
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._210,
    ..._218,
    ..._228
  };
  export const tradeshield = {
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._211,
    ..._219,
    ..._229
  };
  export const ClientFactory = {
    ..._258,
    ..._259
  };
}