"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocodingProvider = void 0;
const di_constant_1 = require("../constant/di.constant");
const reverse_geocoding_1 = __importDefault(require("reverse-geocoding"));
exports.GeocodingProvider = {
    provide: di_constant_1.DI_CONSTANTS.GEOCODING,
    useFactory: () => reverse_geocoding_1.default,
};
//# sourceMappingURL=geocoding-provider.js.map