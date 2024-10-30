import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as intentoClaimV1beta1ClaimRegistry from "./claim/v1beta1/claim.registry";
import * as intentoIntentV1beta1TxRegistry from "./intent/v1beta1/tx.registry";
import * as intentoInterchainqueryV1MessagesRegistry from "./interchainquery/v1/messages.registry";
import * as intentoClaimV1beta1ClaimAmino from "./claim/v1beta1/claim.amino";
import * as intentoIntentV1beta1TxAmino from "./intent/v1beta1/tx.amino";
import * as intentoInterchainqueryV1MessagesAmino from "./interchainquery/v1/messages.amino";
export const intentoAminoConverters = {
  ...intentoClaimV1beta1ClaimAmino.AminoConverter,
  ...intentoIntentV1beta1TxAmino.AminoConverter,
  ...intentoInterchainqueryV1MessagesAmino.AminoConverter
};
export const intentoProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...intentoClaimV1beta1ClaimRegistry.registry, ...intentoIntentV1beta1TxRegistry.registry, ...intentoInterchainqueryV1MessagesRegistry.registry];
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
    registry: (registry as any),
    aminoTypes
  });
  return client;
};