"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const subscription_service_1 = require("../service/subscription.service");
const success_ro_1 = require("../../common/response/success.ro");
const shared_1 = require("@ourloop/shared");
const subscription_access_schema_1 = require("../request/schema/subscription-access.schema");
const subscription_access_dto_1 = require("../request/dto/subscription-access.dto");
const passport_1 = require("@nestjs/passport");
const auth_decorator_1 = require("../../auth/auth.decorator");
const user_entity_1 = require("../../user/entity/user.entity");
const subscription_token_ro_1 = require("../response/subscription-token.ro");
const generate_token_schema_1 = require("../request/schema/generate-token.schema");
const generate_token_dto_1 = require("../request/dto/generate-token.dto");
const class_transformer_1 = require("class-transformer");
const send_token_schema_1 = require("../request/schema/send-token.schema");
const send_token_dto_1 = require("../request/dto/send-token.dto");
const user_service_1 = require("../../user/service/user.service");
const shared_2 = require("@ourloop/shared");
const subscription_type_constant_1 = require("../constant/subscription-type.constant");
let SubscriptionController = class SubscriptionController {
    constructor(subscriptionService, userService) {
        this.subscriptionService = subscriptionService;
        this.userService = userService;
    }
    async sendEmailWithSubscriptionRequest(user, params) {
        const { access } = params;
        const application = await this.subscriptionService.saveSubscriptionApplication(user.id, access, subscription_type_constant_1.SUBSCRIPTION_TYPE.PREMIUM);
        const result = await this.subscriptionService.sendEmailWithSubscriptionRequest(user, access);
        return { success: !!(application && result) };
    }
    async generateSubscriptionToken(data) {
        return (0, class_transformer_1.plainToClass)(subscription_token_ro_1.SubscriptionTokenRO, await this.subscriptionService.generateSubscriptionToken(data));
    }
    async sendSubscriptionToken(data) {
        const user = await this.userService.findByEmail(data.email, ['language']);
        if (!user) {
            throw new common_1.BadRequestException(shared_2.USER_NOT_FOUND);
        }
        const tokenData = await this.subscriptionService.getUserSubscriptionToken(user);
        if (!(tokenData === null || tokenData === void 0 ? void 0 : tokenData.token)) {
            throw new common_1.BadRequestException(shared_2.SUBSCRIPTION_TOKEN_NOT_FOUND);
        }
        return this.subscriptionService
            .sendNotificationWithToken(user, tokenData.token)
            .then((result) => (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, {
            success: result.body['Messages'][0].Status === 'success',
        }));
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito')),
    (0, common_1.Post)('request'),
    (0, swagger_1.ApiOperation)({ summary: 'Send email with subscription request' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    __param(0, (0, auth_decorator_1.Auth)()),
    __param(1, (0, common_1.Body)(new shared_1.ValidationPipe(subscription_access_schema_1.subscriptionAccessSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        subscription_access_dto_1.SubscriptionAccessDTO]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "sendEmailWithSubscriptionRequest", null);
__decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Generate subscription user token' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: subscription_token_ro_1.SubscriptionTokenRO }),
    (0, common_1.Post)('generate-token'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(generate_token_schema_1.generateTokenSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_token_dto_1.GenerateTokenDTO]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "generateSubscriptionToken", null);
__decorate([
    (0, swagger_1.ApiBasicAuth)(),
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Send subscription user token by email' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, common_1.Post)('send-token'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(send_token_schema_1.sendTokenSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_token_dto_1.SendTokenDTO]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "sendSubscriptionToken", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, swagger_1.ApiTags)('Subscription'),
    (0, common_1.Controller)('subscription'),
    __metadata("design:paramtypes", [subscription_service_1.SubscriptionService,
        user_service_1.UserService])
], SubscriptionController);
//# sourceMappingURL=subscription.controller.js.map