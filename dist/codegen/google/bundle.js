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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.google = void 0;
const _51 = __importStar(require("./api/annotations"));
const _52 = __importStar(require("./api/http"));
const _53 = __importStar(require("./protobuf/any"));
const _54 = __importStar(require("./protobuf/descriptor"));
const _55 = __importStar(require("./protobuf/duration"));
const _56 = __importStar(require("./protobuf/empty"));
const _57 = __importStar(require("./protobuf/timestamp"));
var google;
(function (google) {
    google.api = {
        ..._51,
        ..._52
    };
    google.protobuf = {
        ..._53,
        ..._54,
        ..._55,
        ..._56,
        ..._57
    };
})(google || (exports.google = google = {}));
//# sourceMappingURL=bundle.js.map