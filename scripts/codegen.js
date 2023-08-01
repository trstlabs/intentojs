import { join } from "path";
import telescope from "@cosmology/telescope";
import { sync as rimraf } from "rimraf";

const protoDirs = [
  join(__dirname, "../proto"),
  join(__dirname, "../Trustless-Hub/build"),
  
];
const outPath = join(__dirname, "../src/codegen");

rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    prototypes: {
      excluded: {
        packages: [
          "cosmos.auth.v1beta1",
          "cosmos.app.v1alpha1",
          "cosmos.app.v1beta1",
          "cosmos.base.kv.v1beta1",
          "cosmos.base.reflection.v1beta1",
          "cosmos.base.snapshots.v1beta1",
          "cosmos.base.store.v1beta1",
          "cosmos.base.tendermint.v1beta1",
          "cosmos.crisis.v1beta1",
          "cosmos.evidence.v1beta1",
          "cosmos.feegrant.v1beta1",
          "cosmos.genutil.v1beta1",
          "cosmos.group.v1beta1",
          "cosmos.mint.v1beta1",
          "cosmos.group.v1",
          "cosmos.msg.v1",
          "cosmos.nft.v1beta1",
          "cosmos.capability.v1beta1",
          "cosmos.orm.v1alpha1",
          "cosmos.orm.v1",
          "cosmos.params.v1beta1",
          "cosmos.slashing.v1beta1",
          "cosmos.vesting.v1beta1",
          "google.api",
          "ibc.core.port.v1",
          "ibc.core.types.v1",
        ],
      },
      parser: {
        keepCase: false,
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: "timestamp",
        duration: "duration",
        num64: "bigint",
      },
    },
    aminoEncoding: {
      enabled: false,
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
      // scoped: [
      //   {
      //     dir: 'trst',
      //     // filename: 'osmosis-rpc-client.ts',
      //     packages: [
      //       'cosmos.bank.v1beta1',
      //       'cosmos.staking.v1beta1',
      //       'cosmos.distribution.v1beta1',
      //       'trst.mint.v1beta1',
      //       'trst.alloc.v1beta1',
      //       'trst.claim.v1beta1',
      //       'trst.autoibctx.v1beta1',
      //     ],
      //     addToBundle: true,
      //     methodNameQuery: 'createRPCQueryClient',
      //     methodNameTx: 'createRPCTxClient'
      //   }
      // ]
    },
  },
})
  .then(() => {
    console.log("✨ all done!");
  })
  .catch((e) => {
    console.error(e);
  });
