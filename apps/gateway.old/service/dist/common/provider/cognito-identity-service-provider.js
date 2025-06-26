"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoIdentityServiceProvider = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const prepare_aws_credentials_1 = require("../utils/prepare-aws-credentials");
const config_1 = require("@nestjs/config");
exports.CognitoIdentityServiceProvider = {
    provide: client_cognito_identity_provider_1.CognitoIdentityProvider,
    inject: [config_1.ConfigService],
    useFactory: (config) => new client_cognito_identity_provider_1.CognitoIdentityProvider((0, prepare_aws_credentials_1.prepareAwsCredentials)(config.get('application'))),
};
//# sourceMappingURL=cognito-identity-service-provider.js.map