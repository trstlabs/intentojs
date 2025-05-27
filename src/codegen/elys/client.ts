import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as elysAmmTxRegistry from "./amm/tx.registry";
import * as elysEstakingTxRegistry from "./estaking/tx.registry";
import * as elysLeveragelpTxRegistry from "./leveragelp/tx.registry";
import * as elysMasterchefTxRegistry from "./masterchef/tx.registry";
import * as elysPerpetualTxRegistry from "./perpetual/tx.registry";
import * as elysStablestakeTxRegistry from "./stablestake/tx.registry";
import * as elysTradeshieldTxRegistry from "./tradeshield/tx.registry";
import * as elysAmmTxAmino from "./amm/tx.amino";
import * as elysEstakingTxAmino from "./estaking/tx.amino";
import * as elysLeveragelpTxAmino from "./leveragelp/tx.amino";
import * as elysMasterchefTxAmino from "./masterchef/tx.amino";
import * as elysPerpetualTxAmino from "./perpetual/tx.amino";
import * as elysStablestakeTxAmino from "./stablestake/tx.amino";
import * as elysTradeshieldTxAmino from "./tradeshield/tx.amino";
export const elysAminoConverters = {
  ...elysAmmTxAmino.AminoConverter,
  ...elysEstakingTxAmino.AminoConverter,
  ...elysLeveragelpTxAmino.AminoConverter,
  ...elysMasterchefTxAmino.AminoConverter,
  ...elysPerpetualTxAmino.AminoConverter,
  ...elysStablestakeTxAmino.AminoConverter,
  ...elysTradeshieldTxAmino.AminoConverter
};
export const elysProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...elysAmmTxRegistry.registry, ...elysEstakingTxRegistry.registry, ...elysLeveragelpTxRegistry.registry, ...elysMasterchefTxRegistry.registry, ...elysPerpetualTxRegistry.registry, ...elysStablestakeTxRegistry.registry, ...elysTradeshieldTxRegistry.registry];
export const getSigningElysClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...elysProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...elysAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningElysClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningElysClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};