import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name: string;
    /**
     * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
     * has been removed from the SDK.
     * If this field is not empty, an error will be thrown.
     */
    /** @deprecated */
    time: Timestamp;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     */
    height: bigint;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info: string;
    /**
     * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
     * moved to the IBC module in the sub module 02-client.
     * If this field is not empty, an error will be thrown.
     */
    /** @deprecated */
    upgradedClientState: Any;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanSDKType {
    name: string;
    /** @deprecated */
    time: TimestampSDKType;
    height: bigint;
    info: string;
    /** @deprecated */
    upgraded_client_state: AnySDKType;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 */
/** @deprecated */
export interface SoftwareUpgradeProposal {
    title: string;
    description: string;
    plan: Plan;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 */
/** @deprecated */
export interface SoftwareUpgradeProposalSDKType {
    title: string;
    description: string;
    plan: PlanSDKType;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 */
/** @deprecated */
export interface CancelSoftwareUpgradeProposal {
    title: string;
    description: string;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 */
/** @deprecated */
export interface CancelSoftwareUpgradeProposalSDKType {
    title: string;
    description: string;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersion {
    /** name of the app module */
    name: string;
    /** consensus version of the app module */
    version: bigint;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersionSDKType {
    name: string;
    version: bigint;
}
export declare const Plan: {
    encode(message: Plan, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Plan;
    fromPartial(object: DeepPartial<Plan>): Plan;
};
export declare const SoftwareUpgradeProposal: {
    encode(message: SoftwareUpgradeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SoftwareUpgradeProposal;
    fromPartial(object: DeepPartial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal;
};
export declare const CancelSoftwareUpgradeProposal: {
    encode(message: CancelSoftwareUpgradeProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CancelSoftwareUpgradeProposal;
    fromPartial(object: DeepPartial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal;
};
export declare const ModuleVersion: {
    encode(message: ModuleVersion, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleVersion;
    fromPartial(object: DeepPartial<ModuleVersion>): ModuleVersion;
};
