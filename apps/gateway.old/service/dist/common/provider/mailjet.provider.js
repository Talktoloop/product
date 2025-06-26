"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailJetProvider = void 0;
const di_constant_1 = require("../constant/di.constant");
const config_1 = require("@nestjs/config");
const node_mailjet_1 = __importDefault(require("node-mailjet"));
exports.MailJetProvider = {
    provide: di_constant_1.DI_CONSTANTS.MAIL_JET,
    inject: [config_1.ConfigService],
    useFactory: (config) => {
        return node_mailjet_1.default.apiConnect(config.get('mailJet.apiKey'), config.get('mailJet.apiSecret'));
    },
};
//# sourceMappingURL=mailjet.provider.js.map