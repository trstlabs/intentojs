import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes,
  AminoTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
// import * as intentoAutoibctxV1beta1TxRegistry from "./codegen/intento/intent/v1beta1/tx.registry";
// import * as intentoClaimV1beta1ClaimRegistry from "./codegen/intento/claim/v1beta1/claim.registry";
// import * as intentoAutoibctxV1beta1TxAmino from "./codegen/intento/intent/v1beta1/tx.amino";
// import * as intentoClaimV1beta1ClaimAmino from "./codegen/intento/claim/v1beta1/claim.amino";
import { customMsgRegistry } from "./registry";

export const getIntentoSigningClientOptions = ({
  defaultTypes = defaultRegistryTypes,
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...customMsgRegistry]);
  const aminoTypes = new AminoTypes({});
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
