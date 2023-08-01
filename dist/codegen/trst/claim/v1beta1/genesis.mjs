import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { ClaimRecord } from "./claim";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        moduleAccountBalance: Coin.fromPartial({}),
        params: Params.fromPartial({}),
        claimRecords: []
    };
}
export const GenesisState = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.moduleAccountBalance !== undefined) {
            Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.claimRecords) {
            ClaimRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.claimRecords.push(ClaimRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.claimRecords = object.claimRecords?.map(e => ClaimRecord.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=genesis.js.map