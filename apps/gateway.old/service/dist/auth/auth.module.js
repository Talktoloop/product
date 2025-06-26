"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const user_module_1 = require("../user/user.module");
const passport_1 = require("@nestjs/passport");
const cognito_strategy_1 = require("./cognito.strategy");
const anonymous_strategy_1 = require("./anonymous.strategy");
const auth_controller_1 = require("./auth.controller");
const cognito_identity_service_provider_1 = require("../common/provider/cognito-identity-service-provider");
const config_provider_1 = require("../common/provider/config.provider");
const default_1 = require("../config/default");
const config_1 = require("@nestjs/config");
const subscription_strategy_1 = require("./subscription.strategy");
const subscription_module_1 = require("../subscription/subscription.module");
const airtable_client_module_1 = require("../airtable-client/airtable-client.module");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [default_1.dynamicConfiguration],
            }),
            passport_1.PassportModule.register({
                defaultStrategy: ['cognito', 'anonymous', 'subscription'],
            }),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            subscription_module_1.SubscriptionModule,
            airtable_client_module_1.AirTableClientModule,
        ],
        providers: [
            cognito_strategy_1.CognitoStrategy,
            subscription_strategy_1.SubscriptionStrategy,
            auth_service_1.AuthService,
            anonymous_strategy_1.AnonymousStrategy,
            cognito_identity_service_provider_1.CognitoIdentityServiceProvider,
            config_provider_1.ConfigProvider,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map