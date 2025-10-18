const { join } = require("path");
const { readFileSync, writeFileSync, existsSync, mkdirSync } = require("fs");
const telescope = require("@cosmology/telescope").default;
const rimraf = require("rimraf").rimrafSync;
const { AMINO_MAP } = require("./aminos");

const protoDirs = [
  join(__dirname, "/../proto"),
  join(__dirname, "/../intento/proto"),
];
const outPath = join(__dirname, "../src/codegen");
const registryPath = join(outPath, "registry.ts");

// Backup custom registry.ts if it exists
let customRegistryContent = null;
if (existsSync(registryPath)) {
  console.log("Backing up custom registry.ts...");
  customRegistryContent = readFileSync(registryPath, 'utf-8');
}

// Clean and regenerate code
console.log("Cleaning and regenerating code...");
rimraf(outPath);

// Create the codegen directory if it doesn't exist
mkdirSync(outPath, { recursive: true });

// Run the code generation
telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: [
        "cosmos/authz/v1beta1/tx.amino.ts",
        "cosmos/staking/v1beta1/tx.amino.ts",
      ],
      patterns: ["**/*amino.ts", "**/*registry.ts"],
    },
    includePackageVar: false,
    experimentalGlobalProtoNamespace: true,
    interfaces: {
      enabled: true,
      useUnionTypes: true,
      useGlobalDecoderRegistry: true,
      registerAllDecodersToGlobal: true,
      useByDefault: false,
    },
    prototypes: {
      enabled: true,
      excluded: {
        packages: [
          "cosmos.app.v1alpha1",
          "cosmos.app.v1beta1",
          "cosmos.autocli.v1",
          "cosmos.base.kv.v1beta1",
          "cosmos.base.reflection.v1beta1",
          "cosmos.base.snapshots.v1beta1",
          "cosmos.base.store.v1beta1",
          "cosmos.base.tendermint.v1beta1",
          "cosmos.capability.v1beta1",
          "cosmos.crisis.v1beta1",
          "cosmos.evidence.v1beta1",
          "cosmos.feegrant.v1beta1",
          "cosmos.genutil.v1beta1",
          "cosmos.gov.v1",
          "cosmos.group.v1",
          "cosmos.group.v1beta1",
          "cosmos.mint.v1beta1",
          "cosmos.msg.v1",
          "cosmos.nft.v1beta1",
          "cosmos.orm.v1",
          "cosmos.orm.v1alpha1",
          "cosmos.params.v1beta1",
          "cosmos.slashing.v1beta1",
          "cosmos.vesting.v1beta1",
          "ibc.core.port.v1",
          "ibc.core.types.v1",
        ],
      },
      methods: {
        fromJSON: true,
        toJSON: true,
        encode: true,
        decode: true,
        fromPartial: true,
        toAmino: true,
        fromAmino: true,
      },
      addTypeUrlToDecoders: true,
      addTypeUrlToObjects: true,
      addAminoTypeToObjects: true,
      parser: {
        keepCase: false,
      },
      typingsFormat: {
        duration: "duration",
        timestamp: "date",
        useExact: false,
        useDeepPartial: false,
        num64: "bigint",
        customTypes: {
          useCosmosSDKDec: true,
        },
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
    reactQuery: {
      enabled: false,
    },
    aminoEncoding: {
      enabled: true
    },
  },
}).then(() => {
  // After code generation is complete, restore the custom registry.ts if it existed
  if (customRegistryContent) {
    console.log("Restoring custom registry.ts...");
    writeFileSync(registryPath, customRegistryContent, 'utf-8');
    console.log("Custom registry.ts has been restored successfully!");
  }
  console.log("Code generation completed successfully!");
}).catch((e) => {
  console.error("Error during code generation:", e);
  process.exit(1);
});