"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaServiceProvider = exports.AwsTranslationServiceProvider = void 0;
const client_comprehend_1 = require("@aws-sdk/client-comprehend");
const client_lambda_1 = require("@aws-sdk/client-lambda");
const di_constant_1 = require("../constant/di.constant");
const prepare_aws_credentials_1 = require("../utils/prepare-aws-credentials");
const config_1 = require("@nestjs/config");
exports.AwsTranslationServiceProvider = {
    provide: di_constant_1.DI_CONSTANTS.AWS_TRANSLATION,
    inject: [config_1.ConfigService],
    useFactory: (config) => new client_comprehend_1.ComprehendClient((0, prepare_aws_credentials_1.prepareAwsCredentials)(config.get('application'))),
};
exports.LambdaServiceProvider = {
    provide: di_constant_1.DI_CONSTANTS.LAMBDA,
    inject: [config_1.ConfigService],
    useFactory: (config) => new client_lambda_1.LambdaClient((0, prepare_aws_credentials_1.prepareAwsCredentials)(config.get('application'))),
};
//# sourceMappingURL=aws-translation-provider.js.map