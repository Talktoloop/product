"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareAwsCredentials = prepareAwsCredentials;
function prepareAwsCredentials(config) {
    if (config.environment === 'local') {
        return {
            region: config.awsRegion,
            endpoint: 'http://host.docker.internal:3001',
            credentials: {
                accessKeyId: 'mock',
                secretAccessKey: 'mock'
            }
        };
    }
    const { awsAccessKey, awsSecretKey, awsRegion, awsEndpoint } = config;
    const credentials = {
        region: awsRegion,
    };
    if (awsEndpoint) {
        credentials.endpoint = awsEndpoint;
    }
    if (awsAccessKey && awsSecretKey) {
        credentials.accessKeyId = awsAccessKey;
        credentials.secretAccessKey = awsSecretKey;
    }
    return credentials;
}
//# sourceMappingURL=prepare-aws-credentials.js.map