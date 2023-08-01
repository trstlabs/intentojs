"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const claim_1 = require("./claim");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        moduleAccountBalance: coin_1.Coin.fromPartial({}),
        params: params_1.Params.fromPartial({}),
        claimRecords: []
    };
}
exports.GenesisState = {
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleAccountBalance !== undefined) {
            coin_1.Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.claimRecords) {
            claim_1.ClaimRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.claimRecords.push(claim_1.ClaimRecord.decode(reader, reader.uint32()));
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
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? coin_1.Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.claimRecords = object.claimRecords?.map(e => claim_1.ClaimRecord.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=genesis.js.map