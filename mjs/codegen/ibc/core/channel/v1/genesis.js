import { IdentifiedChannel, PacketState } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: BigInt(0)
    };
}
export const GenesisState = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.nextChannelSequence !== BigInt(0)) {
            writer.uint32(64).uint64(message.nextChannelSequence);
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
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nextChannelSequence = reader.uint64();
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
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
        message.sendSequences = object.sendSequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.recvSequences = object.recvSequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.ackSequences = object.ackSequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.nextChannelSequence = object.nextChannelSequence !== undefined && object.nextChannelSequence !== null ? BigInt(object.nextChannelSequence.toString()) : BigInt(0);
        return message;
    }
};
function createBasePacketSequence() {
    return {
        portId: "",
        channelId: "",
        sequence: BigInt(0)
    };
}
export const PacketSequence = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacketSequence();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    }
};
//# sourceMappingURL=genesis.js.map