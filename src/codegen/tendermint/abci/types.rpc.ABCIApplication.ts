import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { RequestEcho, ResponseEcho, RequestFlush, ResponseFlush, RequestInfo, ResponseInfo, RequestSetOption, ResponseSetOption, RequestDeliverTx, ResponseDeliverTx, RequestCheckTx, ResponseCheckTx, RequestQuery, ResponseQuery, RequestCommit, ResponseCommit, RequestInitChain, ResponseInitChain, RequestBeginBlock, ResponseBeginBlock, RequestEndBlock, ResponseEndBlock, RequestListSnapshots, ResponseListSnapshots, RequestOfferSnapshot, ResponseOfferSnapshot, RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk, RequestApplySnapshotChunk, ResponseApplySnapshotChunk } from "./types";
export interface ABCIApplication {
  echo(request: RequestEcho): Promise<ResponseEcho>;
  flush(request?: RequestFlush): Promise<ResponseFlush>;
  info(request: RequestInfo): Promise<ResponseInfo>;
  setOption(request: RequestSetOption): Promise<ResponseSetOption>;
  deliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
  checkTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
  query(request: RequestQuery): Promise<ResponseQuery>;
  commit(request?: RequestCommit): Promise<ResponseCommit>;
  initChain(request: RequestInitChain): Promise<ResponseInitChain>;
  beginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
  endBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
  listSnapshots(request?: RequestListSnapshots): Promise<ResponseListSnapshots>;
  offerSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
  loadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk>;
  applySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk>;
}
export class ABCIApplicationClientImpl implements ABCIApplication {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.echo = this.echo.bind(this);
    this.flush = this.flush.bind(this);
    this.info = this.info.bind(this);
    this.setOption = this.setOption.bind(this);
    this.deliverTx = this.deliverTx.bind(this);
    this.checkTx = this.checkTx.bind(this);
    this.query = this.query.bind(this);
    this.commit = this.commit.bind(this);
    this.initChain = this.initChain.bind(this);
    this.beginBlock = this.beginBlock.bind(this);
    this.endBlock = this.endBlock.bind(this);
    this.listSnapshots = this.listSnapshots.bind(this);
    this.offerSnapshot = this.offerSnapshot.bind(this);
    this.loadSnapshotChunk = this.loadSnapshotChunk.bind(this);
    this.applySnapshotChunk = this.applySnapshotChunk.bind(this);
  }
  echo(request: RequestEcho): Promise<ResponseEcho> {
    const data = RequestEcho.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Echo", data);
    return promise.then(data => ResponseEcho.decode(new BinaryReader(data)));
  }
  flush(request: RequestFlush = {}): Promise<ResponseFlush> {
    const data = RequestFlush.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Flush", data);
    return promise.then(data => ResponseFlush.decode(new BinaryReader(data)));
  }
  info(request: RequestInfo): Promise<ResponseInfo> {
    const data = RequestInfo.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Info", data);
    return promise.then(data => ResponseInfo.decode(new BinaryReader(data)));
  }
  setOption(request: RequestSetOption): Promise<ResponseSetOption> {
    const data = RequestSetOption.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "SetOption", data);
    return promise.then(data => ResponseSetOption.decode(new BinaryReader(data)));
  }
  deliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx> {
    const data = RequestDeliverTx.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "DeliverTx", data);
    return promise.then(data => ResponseDeliverTx.decode(new BinaryReader(data)));
  }
  checkTx(request: RequestCheckTx): Promise<ResponseCheckTx> {
    const data = RequestCheckTx.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "CheckTx", data);
    return promise.then(data => ResponseCheckTx.decode(new BinaryReader(data)));
  }
  query(request: RequestQuery): Promise<ResponseQuery> {
    const data = RequestQuery.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Query", data);
    return promise.then(data => ResponseQuery.decode(new BinaryReader(data)));
  }
  commit(request: RequestCommit = {}): Promise<ResponseCommit> {
    const data = RequestCommit.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "Commit", data);
    return promise.then(data => ResponseCommit.decode(new BinaryReader(data)));
  }
  initChain(request: RequestInitChain): Promise<ResponseInitChain> {
    const data = RequestInitChain.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "InitChain", data);
    return promise.then(data => ResponseInitChain.decode(new BinaryReader(data)));
  }
  beginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock> {
    const data = RequestBeginBlock.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "BeginBlock", data);
    return promise.then(data => ResponseBeginBlock.decode(new BinaryReader(data)));
  }
  endBlock(request: RequestEndBlock): Promise<ResponseEndBlock> {
    const data = RequestEndBlock.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "EndBlock", data);
    return promise.then(data => ResponseEndBlock.decode(new BinaryReader(data)));
  }
  listSnapshots(request: RequestListSnapshots = {}): Promise<ResponseListSnapshots> {
    const data = RequestListSnapshots.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ListSnapshots", data);
    return promise.then(data => ResponseListSnapshots.decode(new BinaryReader(data)));
  }
  offerSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot> {
    const data = RequestOfferSnapshot.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "OfferSnapshot", data);
    return promise.then(data => ResponseOfferSnapshot.decode(new BinaryReader(data)));
  }
  loadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk> {
    const data = RequestLoadSnapshotChunk.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "LoadSnapshotChunk", data);
    return promise.then(data => ResponseLoadSnapshotChunk.decode(new BinaryReader(data)));
  }
  applySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk> {
    const data = RequestApplySnapshotChunk.encode(request).finish();
    const promise = this.rpc.request("tendermint.abci.ABCIApplication", "ApplySnapshotChunk", data);
    return promise.then(data => ResponseApplySnapshotChunk.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ABCIApplicationClientImpl(rpc);
  return {
    echo(request: RequestEcho): Promise<ResponseEcho> {
      return queryService.echo(request);
    },
    flush(request?: RequestFlush): Promise<ResponseFlush> {
      return queryService.flush(request);
    },
    info(request: RequestInfo): Promise<ResponseInfo> {
      return queryService.info(request);
    },
    setOption(request: RequestSetOption): Promise<ResponseSetOption> {
      return queryService.setOption(request);
    },
    deliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx> {
      return queryService.deliverTx(request);
    },
    checkTx(request: RequestCheckTx): Promise<ResponseCheckTx> {
      return queryService.checkTx(request);
    },
    query(request: RequestQuery): Promise<ResponseQuery> {
      return queryService.query(request);
    },
    commit(request?: RequestCommit): Promise<ResponseCommit> {
      return queryService.commit(request);
    },
    initChain(request: RequestInitChain): Promise<ResponseInitChain> {
      return queryService.initChain(request);
    },
    beginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock> {
      return queryService.beginBlock(request);
    },
    endBlock(request: RequestEndBlock): Promise<ResponseEndBlock> {
      return queryService.endBlock(request);
    },
    listSnapshots(request?: RequestListSnapshots): Promise<ResponseListSnapshots> {
      return queryService.listSnapshots(request);
    },
    offerSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot> {
      return queryService.offerSnapshot(request);
    },
    loadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk> {
      return queryService.loadSnapshotChunk(request);
    },
    applySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk> {
      return queryService.applySnapshotChunk(request);
    }
  };
};