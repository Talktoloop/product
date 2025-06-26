"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleTranslationServiceProvider = void 0;
const di_constant_1 = require("../constant/di.constant");
const translate_1 = require("@google-cloud/translate");
const config_1 = require("@nestjs/config");
exports.GoogleTranslationServiceProvider = {
    provide: di_constant_1.DI_CONSTANTS.GOOGLE_TRANSLATION,
    inject: [config_1.ConfigService],
    useFactory: (config) => {
        const credentials = config.get('translation.google.credentials');
        return new translate_1.TranslationServiceClient({ credentials });
    },
};
//# sourceMappingURL=google-translation-provider.js.map