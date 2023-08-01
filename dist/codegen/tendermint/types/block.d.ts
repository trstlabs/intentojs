import { Header, HeaderSDKType, Data, DataSDKType, Commit, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListSDKType } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    lastCommit: Commit;
}
export interface BlockSDKType {
    header: HeaderSDKType;
    data: DataSDKType;
    evidence: EvidenceListSDKType;
    last_commit: CommitSDKType;
}
export declare const Block: {
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromPartial(object: DeepPartial<Block>): Block;
};
