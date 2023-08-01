"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLCDClient = void 0;
const lcd_1 = require("@cosmology/lcd");
const createLCDClient = async ({ restEndpoint }) => {
    const requestClient = new lcd_1.LCDClient({
        restEndpoint
    });
    return {
        cosmos: {
            authz: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            bank: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            base: {
                reflection: {
                    v2alpha1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/base/reflection/v2alpha1/reflection.lcd")))).LCDQueryClient({
                        requestClient
                    })
                }
            },
            distribution: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            gov: {
                v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/query.lcd")))).LCDQueryClient({
                    requestClient
                }),
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            params: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/params/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            staking: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            tx: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.lcd")))).LCDQueryClient({
                    requestClient
                })
            },
            upgrade: {
                v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.lcd")))).LCDQueryClient({
                    requestClient
                })
            }
        },
        ibc: {
            applications: {
                transfer: {
                    v1: new (await Promise.resolve().then(() => __importStar(require("./applications/transfer/v1/query.lcd")))).LCDQueryClient({
                        requestClient
                    })
                }
            },
            core: {
                channel: {
                    v1: new (await Promise.resolve().then(() => __importStar(require("./core/channel/v1/query.lcd")))).LCDQueryClient({
                        requestClient
                    })
                },
                client: {
                    v1: new (await Promise.resolve().then(() => __importStar(require("./core/client/v1/query.lcd")))).LCDQueryClient({
                        requestClient
                    })
                },
                connection: {
                    v1: new (await Promise.resolve().then(() => __importStar(require("./core/connection/v1/query.lcd")))).LCDQueryClient({
                        requestClient
                    })
                }
            }
        }
    };
};
exports.createLCDClient = createLCDClient;
//# sourceMappingURL=lcd.js.map