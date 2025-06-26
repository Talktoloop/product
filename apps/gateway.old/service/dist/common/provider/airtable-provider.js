"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableSensitiveCasesProvider = exports.AirTableDashboardProvider = void 0;
const config_1 = require("@nestjs/config");
const airtable_node_1 = __importDefault(require("airtable-node"));
const di_constant_1 = require("../constant/di.constant");
exports.AirTableDashboardProvider = {
    provide: di_constant_1.DI_CONSTANTS.AIRTABLE,
    inject: [config_1.ConfigService],
    useFactory: (config) => {
        return new airtable_node_1.default({ apiKey: config.get('airTable.apiKey') }).base(config.get('airTable.base.dashboard'));
    },
};
exports.AirTableSensitiveCasesProvider = {
    provide: di_constant_1.DI_CONSTANTS.AIRTABLE,
    inject: [config_1.ConfigService],
    useFactory: (config) => {
        return new airtable_node_1.default({ apiKey: config.get('airTable.apiKey') }).base(config.get('airTable.base.sensitiveCases'));
    },
};
//# sourceMappingURL=airtable-provider.js.map