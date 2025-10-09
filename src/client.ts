import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
  createDefaultAminoConverters,
} from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { customMsgRegistry } from "./registry";
import {
  intentoProtoRegistry,
  intentoAminoConverters,
  cosmosAminoConverters,
  elysAminoConverters,
  osmosisAminoConverters,
  cosmwasmAminoConverters,
} from "./codegen";
import { GenericAuthorization } from "./codegen/cosmos/authz/v1beta1/authz";
export const getIntentoSigningClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([
    ...defaultTypes,
    ...intentoProtoRegistry,
    ...customMsgRegistry,
  ]);

  const aminoTypes = new AminoTypes({
    ...createDefaultAminoConverters(), // THIS INCLUDES AUTHZ AND ALL STANDARD COSMOS TYPES
    ...intentoAminoConverters,
    ...cosmosAminoConverters,
    ...osmosisAminoConverters,
    ...cosmwasmAminoConverters,
    ...elysAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getIntentoSigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getIntentoSigningClientOptions({
    defaultTypes,
  });
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry: registry as any,
      aminoTypes,
    }
  );
  return client;
};
