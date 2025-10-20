import * as _95 from "./amm/denom_liquidity";
import * as _96 from "./amm/genesis";
import * as _97 from "./amm/params";
import * as _98 from "./amm/pool_asset";
import * as _99 from "./amm/pool_params";
import * as _100 from "./amm/pool";
import * as _101 from "./amm/proposal";
import * as _102 from "./amm/query";
import * as _103 from "./amm/swap_route";
import * as _104 from "./amm/tx";
import * as _105 from "./amm/types";
import * as _106 from "./commitment/airdrop";
import * as _107 from "./commitment/commitments";
import * as _108 from "./commitment/genesis";
import * as _109 from "./commitment/params";
import * as _110 from "./commitment/query";
import * as _111 from "./commitment/tx";
import * as _112 from "./estaking/dex_rewards_tracker";
import * as _113 from "./estaking/elys_staked";
import * as _114 from "./estaking/incentive";
import * as _115 from "./estaking/params";
import * as _116 from "./estaking/tx";
import * as _117 from "./leveragelp/params";
import * as _118 from "./leveragelp/pool";
import * as _119 from "./leveragelp/tx";
import * as _120 from "./leveragelp/types";
import * as _121 from "./masterchef/external_incentive";
import * as _122 from "./masterchef/incentive";
import * as _123 from "./masterchef/params";
import * as _124 from "./masterchef/pool";
import * as _125 from "./masterchef/tx";
import * as _126 from "./masterchef/types";
import * as _127 from "./perpetual/params";
import * as _128 from "./perpetual/pool";
import * as _129 from "./perpetual/tx";
import * as _130 from "./perpetual/types";
import * as _131 from "./stablestake/debt";
import * as _132 from "./stablestake/params";
import * as _133 from "./stablestake/pool";
import * as _134 from "./stablestake/tx";
import * as _135 from "./stablestake/types";
import * as _136 from "./tradeshield/order";
import * as _137 from "./tradeshield/params";
import * as _138 from "./tradeshield/tx";
import * as _139 from "./tradeshield/types";
import * as _213 from "./amm/tx.amino";
import * as _214 from "./commitment/tx.amino";
import * as _215 from "./estaking/tx.amino";
import * as _216 from "./leveragelp/tx.amino";
import * as _217 from "./masterchef/tx.amino";
import * as _218 from "./perpetual/tx.amino";
import * as _219 from "./stablestake/tx.amino";
import * as _220 from "./tradeshield/tx.amino";
import * as _221 from "./amm/tx.registry";
import * as _222 from "./commitment/tx.registry";
import * as _223 from "./estaking/tx.registry";
import * as _224 from "./leveragelp/tx.registry";
import * as _225 from "./masterchef/tx.registry";
import * as _226 from "./perpetual/tx.registry";
import * as _227 from "./stablestake/tx.registry";
import * as _228 from "./tradeshield/tx.registry";
import * as _229 from "./amm/query.rpc.Query";
import * as _230 from "./commitment/query.rpc.Query";
import * as _231 from "./amm/tx.rpc.msg";
import * as _232 from "./commitment/tx.rpc.msg";
import * as _233 from "./estaking/tx.rpc.msg";
import * as _234 from "./leveragelp/tx.rpc.msg";
import * as _235 from "./masterchef/tx.rpc.msg";
import * as _236 from "./perpetual/tx.rpc.msg";
import * as _237 from "./stablestake/tx.rpc.msg";
import * as _238 from "./tradeshield/tx.rpc.msg";
import * as _267 from "./rpc.query";
import * as _268 from "./rpc.tx";
export namespace elys {
  export const amm = {
    ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._213,
    ..._221,
    ..._229,
    ..._231
  };
  export const commitment = {
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._214,
    ..._222,
    ..._230,
    ..._232
  };
  export const estaking = {
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._215,
    ..._223,
    ..._233
  };
  export const leveragelp = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._216,
    ..._224,
    ..._234
  };
  export const masterchef = {
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._217,
    ..._225,
    ..._235
  };
  export const perpetual = {
    ..._127,
    ..._128,
    ..._129,
    ..._130,
    ..._218,
    ..._226,
    ..._236
  };
  export const stablestake = {
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._219,
    ..._227,
    ..._237
  };
  export const tradeshield = {
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._220,
    ..._228,
    ..._238
  };
  export const ClientFactory = {
    ..._267,
    ..._268
  };
}