import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as intentoAllocV1TxRegistry from "./alloc/v1/tx.registry";
import * as intentoClaimV1ClaimRegistry from "./claim/v1/claim.registry";
import * as intentoIntentV1TxRegistry from "./intent/v1/tx.registry";
import * as intentoMintV1TxRegistry from "./mint/v1/tx.registry";
import * as intentoAllocV1TxAmino from "./alloc/v1/tx.amino";
import * as intentoClaimV1ClaimAmino from "./claim/v1/claim.amino";
import * as intentoIntentV1TxAmino from "./intent/v1/tx.amino";
import * as intentoMintV1TxAmino from "./mint/v1/tx.amino";
export const intentoAminoConverters = {
  ...intentoAllocV1TxAmino.AminoConverter,
  ...intentoClaimV1ClaimAmino.AminoConverter,
  ...intentoIntentV1TxAmino.AminoConverter,
  ...intentoMintV1TxAmino.AminoConverter
};
export const intentoProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...intentoAllocV1TxRegistry.registry, ...intentoClaimV1ClaimRegistry.registry, ...intentoIntentV1TxRegistry.registry, ...intentoMintV1TxRegistry.registry];
export const getSigningIntentoClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...intentoProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...intentoAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningIntentoClient = async ({
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
  } = getSigningIntentoClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};