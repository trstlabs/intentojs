import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({ restEndpoint }) => {
    const requestClient = new LCDClient({
        restEndpoint
    });
    return {
        cosmos: {
            authz: {
                v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            bank: {
                v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            distribution: {
                v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            gov: {
                v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
                    requestClient
                }),
                v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            staking: {
                v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            tx: {
                v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            upgrade: {
                v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            }
        },
        trst: {
            alloc: {
                v1beta1: new (await import("./alloc/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            autoibctx: {
                v1beta1: new (await import("./autoibctx/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            claim: {
                v1beta1: new (await import("./claim/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            mint: {
                v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            }
        }
    };
};
//# sourceMappingURL=lcd.js.map