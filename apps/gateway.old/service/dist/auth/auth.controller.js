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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const status_1 = require("../common/response/status");
const shared_1 = require("@ourloop/shared");
const user_is_confirmed_schema_1 = require("../user/request/schema/user-is-confirmed.schema");
const user_is_confirmed_dto_1 = require("../user/request/dto/user-is-confirmed.dto");
const auth_service_1 = require("./auth.service");
const class_transformer_1 = require("class-transformer");
const passport_1 = require("@nestjs/passport");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async getEmailConfirmation(params) {
        const accountDetails = await this.authService
            .getAccountDetails(params.email)
            .catch((error) => {
            if (error.code === 'UserNotFoundException') {
                throw new common_1.BadRequestException(shared_1.USER_NOT_FOUND);
            }
            throw error;
        });
        const status = accountDetails.UserStatus !== 'UNCONFIRMED';
        return (0, class_transformer_1.plainToClass)(status_1.StatusRO, { status });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get confirmation status' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: status_1.StatusRO }),
    (0, common_1.Get)('confirmation'),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(user_is_confirmed_schema_1.userIsConfirmedSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_is_confirmed_dto_1.UserIsConfirmedDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getEmailConfirmation", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map