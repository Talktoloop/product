"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigProvider = void 0;
const di_constant_1 = require("../constant/di.constant");
const config_1 = require("@nestjs/config");
exports.ConfigProvider = {
    provide: di_constant_1.DI_CONSTANTS.CONFIG,
    useExisting: config_1.ConfigService,
};
//# sourceMappingURL=config.provider.js.map