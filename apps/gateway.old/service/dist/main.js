"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const helmet_1 = __importDefault(require("helmet"));
const common_1 = require("@nestjs/common");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("@ourloop/shared");
const config_validation_1 = require("./common/validation/config.validation");
const config_1 = require("@nestjs/config");
const typeorm_1 = __importDefault(require("./config/typeorm"));
const helpers_1 = require("./common/helpers");
const setupSwagger = (app, backendUrl) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Loop')
        .addBasicAuth({ type: 'http', scheme: 'basic' }, 'basic-authorization')
        .addServer(backendUrl)
        .setDescription('Loop API description')
        .setVersion('0.1')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'bearer-authorization')
        .build();
    swagger_1.SwaggerModule.setup('api', app, swagger_1.SwaggerModule.createDocument(app, options));
};
const isLocalOrDevelopment = (environment) => ['development', 'local'].includes(environment);
const bootstrap = async () => {
    await (0, helpers_1.getConnection)(typeorm_1.default);
    await config_validation_1.configSchema.validateAsync(process.env).catch((error) => {
        throw error;
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = +configService.get('application.port');
    app.enableShutdownHooks();
    app.setGlobalPrefix(configService.get('application.global_prefix'));
    app.use((0, helmet_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.enableCors({
        origin: isLocalOrDevelopment(configService.get('application.environment'))
            ? true
            : [
                configService.get('frontend.url'),
                configService.get('landingPage.url'),
            ],
        credentials: true,
    });
    app.useGlobalFilters(new shared_1.ExceptionsFilter());
    if (isLocalOrDevelopment(configService.get('application.environment'))) {
        setupSwagger(app, configService.get('backend.url'));
    }
    try {
        app.connectMicroservice({
            name: 'GATEWAY',
            transport: microservices_1.Transport.REDIS,
            options: (0, shared_1._omit)(configService.get('redis'), [
                'connectionName',
                'schema',
                'user'
            ]),
        });
    }
    catch (error) {
        common_1.Logger.error(error.message || null, error, 'Can\'t connect to redis');
    }
    await app.startAllMicroservices().catch((error) => {
        common_1.Logger.error(error.message || null, error, 'Bootstrap');
    });
    await app.listen(port);
    common_1.Logger.log(`Application running on port: ${port}`);
};
bootstrap().catch((error) => {
    common_1.Logger.error(error.message || null, error, 'Bootstrap');
});
//# sourceMappingURL=main.js.map