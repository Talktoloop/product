"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GooglePlacesProvider = void 0;
const di_constant_1 = require("../constant/di.constant");
const google_places_web_1 = __importDefault(require("google-places-web"));
const config_1 = require("@nestjs/config");
exports.GooglePlacesProvider = {
    provide: di_constant_1.DI_CONSTANTS.GOOGLE_PLACES,
    inject: [config_1.ConfigService],
    useFactory: (config) => {
        google_places_web_1.default.apiKey = config.get('location.googleApiKey');
        return google_places_web_1.default;
    },
};
//# sourceMappingURL=google-places-provider.js.map