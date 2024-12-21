import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as strideInterchainqueryV1MessagesRegistry from "./interchainquery/v1/messages.registry";
import * as strideInterchainqueryV1MessagesAmino from "./interchainquery/v1/messages.amino";
export const strideAminoConverters = {
  ...strideInterchainqueryV1MessagesAmino.AminoConverter
};
export const strideProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...strideInterchainqueryV1MessagesRegistry.registry];
export const getSigningStrideClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...strideProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...strideAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStrideClient = async ({
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
  } = getSigningStrideClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};