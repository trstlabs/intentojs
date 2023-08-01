import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export var Action;
(function (Action) {
    Action[Action["ActionAutoTxAuthz"] = 0] = "ActionAutoTxAuthz";
    Action[Action["ActionAutoTxWasm"] = 1] = "ActionAutoTxWasm";
    Action[Action["ActionGovernanceVote"] = 2] = "ActionGovernanceVote";
    Action[Action["ActionDelegateStake"] = 3] = "ActionDelegateStake";
    Action[Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Action || (Action = {}));
export const ActionSDKType = Action;
export function actionFromJSON(object) {
    switch (object) {
        case 0:
        case "ActionAutoTxAuthz":
            return Action.ActionAutoTxAuthz;
        case 1:
        case "ActionAutoTxWasm":
            return Action.ActionAutoTxWasm;
        case 2:
        case "ActionGovernanceVote":
            return Action.ActionGovernanceVote;
        case 3:
        case "ActionDelegateStake":
            return Action.ActionDelegateStake;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Action.UNRECOGNIZED;
    }
}
export function actionToJSON(object) {
    switch (object) {
        case Action.ActionAutoTxAuthz:
            return "ActionAutoTxAuthz";
        case Action.ActionAutoTxWasm:
            return "ActionAutoTxWasm";
        case Action.ActionGovernanceVote:
            return "ActionGovernanceVote";
        case Action.ActionDelegateStake:
            return "ActionDelegateStake";
        case Action.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClaimRecord() {
    return {
        address: "",
        initialClaimableAmount: [],
        status: []
    };
}
export const ClaimRecord = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.initialClaimableAmount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.status) {
            Status.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.status.push(Status.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord();
        message.address = object.address ?? "";
        message.initialClaimableAmount = object.initialClaimableAmount?.map(e => Coin.fromPartial(e)) || [];
        message.status = object.status?.map(e => Status.fromPartial(e)) || [];
        return message;
    }
};
function createBaseStatus() {
    return {
        actionCompleted: false,
        vestingPeriodCompleted: [],
        vestingPeriodClaimed: []
    };
}
export const Status = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.actionCompleted === true) {
            writer.uint32(8).bool(message.actionCompleted);
        }
        writer.uint32(18).fork();
        for (const v of message.vestingPeriodCompleted) {
            writer.bool(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.vestingPeriodClaimed) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionCompleted = reader.bool();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vestingPeriodCompleted.push(reader.bool());
                        }
                    }
                    else {
                        message.vestingPeriodCompleted.push(reader.bool());
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vestingPeriodClaimed.push(reader.bool());
                        }
                    }
                    else {
                        message.vestingPeriodClaimed.push(reader.bool());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStatus();
        message.actionCompleted = object.actionCompleted ?? false;
        message.vestingPeriodCompleted = object.vestingPeriodCompleted?.map(e => e) || [];
        message.vestingPeriodClaimed = object.vestingPeriodClaimed?.map(e => e) || [];
        return message;
    }
};
function createBaseMsgClaimClaimable() {
    return {
        sender: ""
    };
}
export const MsgClaimClaimable = {
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimClaimable();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimClaimable();
        message.sender = object.sender ?? "";
        return message;
    }
};
function createBaseMsgClaimClaimableResponse() {
    return {
        claimedAmount: []
    };
}
export const MsgClaimClaimableResponse = {
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.claimedAmount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimClaimableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimedAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimClaimableResponse();
        message.claimedAmount = object.claimedAmount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    }
};
//# sourceMappingURL=claim.js.map