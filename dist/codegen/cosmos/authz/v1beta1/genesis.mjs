import { GrantAuthorization } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        authorization: []
    };
}
export const GenesisState = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.authorization) {
            GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
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
        message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=genesis.js.map