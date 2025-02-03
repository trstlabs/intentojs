import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as intentoAllocV1beta1TxRegistry from "./alloc/v1beta1/tx.registry";
import * as intentoClaimV1beta1ClaimRegistry from "./claim/v1beta1/claim.registry";
import * as intentoIntentV1beta1TxRegistry from "./intent/v1beta1/tx.registry";
import * as intentoMintV1beta1TxRegistry from "./mint/v1beta1/tx.registry";
import * as intentoAllocV1beta1TxAmino from "./alloc/v1beta1/tx.amino";
import * as intentoClaimV1beta1ClaimAmino from "./claim/v1beta1/claim.amino";
import * as intentoIntentV1beta1TxAmino from "./intent/v1beta1/tx.amino";
import * as intentoMintV1beta1TxAmino from "./mint/v1beta1/tx.amino";
export const intentoAminoConverters = {
  ...intentoAllocV1beta1TxAmino.AminoConverter,
  ...intentoClaimV1beta1ClaimAmino.AminoConverter,
  ...intentoIntentV1beta1TxAmino.AminoConverter,
  ...intentoMintV1beta1TxAmino.AminoConverter
};
export const intentoProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...intentoAllocV1beta1TxRegistry.registry, ...intentoClaimV1beta1ClaimRegistry.registry, ...intentoIntentV1beta1TxRegistry.registry, ...intentoMintV1beta1TxRegistry.registry];
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