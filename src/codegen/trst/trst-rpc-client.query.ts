import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const trstCreateRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    trst: {
      alloc: {
        v1beta1: (await import("./alloc/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      autoibctx: {
        v1beta1: (await import("./autoibctx/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      claim: {
        v1beta1: (await import("./claim/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("./mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};