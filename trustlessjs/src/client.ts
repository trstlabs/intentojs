import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as trstAutoibctxV1beta1TxRegistry from "./codegen/trst/autoibctx/v1beta1/tx.registry";
import * as trstClaimV1beta1ClaimRegistry from "./codegen/trst/claim/v1beta1/claim.registry";
import * as trstAutoibctxV1beta1TxAmino from "./codegen/trst/autoibctx/v1beta1/tx.amino";
import * as trstClaimV1beta1ClaimAmino from "./codegen/trst/claim/v1beta1/claim.amino";
import { customMsgRegistry } from "./registry";
export const trstAminoConverters = {
  ...trstAutoibctxV1beta1TxAmino.AminoConverter,
  ...trstClaimV1beta1ClaimAmino.AminoConverter,
};
export const trstProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...trstAutoibctxV1beta1TxRegistry.registry,
  ...trstClaimV1beta1ClaimRegistry.registry,
];
export const getTrstSigningClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([
    ...defaultTypes,
    ...trstProtoRegistry,
    ...customMsgRegistry,
  ]);
  const aminoTypes = new AminoTypes({
    ...trstAminoConverters,
  });
  return {
    registry,
    aminoTypes,
  };
};
export const getTrstSigningClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes,
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const { registry, aminoTypes } = getTrstSigningClientOptions({
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
