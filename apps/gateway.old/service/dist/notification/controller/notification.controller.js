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
var NotificationController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const success_ro_1 = require("../../common/response/success.ro");
const notification_service_1 = require("../service/notification.service");
const microservices_1 = require("@nestjs/microservices");
const microservices_2 = require("@nestjs/microservices");
const class_transformer_1 = require("class-transformer");
const send_message_to_support_schema_1 = require("../request/schema/send-message-to-support.schema");
const send_message_to_support_dto_1 = require("../request/dto/send-message-to-support.dto");
let NotificationController = NotificationController_1 = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.logger = new common_1.Logger(NotificationController_1.name);
    }
    async sendMessageToSupportTeam(data) {
        return this.notificationService
            .sendMessageToSupportTeam(data.message)
            .then((result) => (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, {
            success: result.body['Messages'][0].Status === 'success',
        }))
            .catch((error) => {
            throw new microservices_1.RpcException(error);
        });
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, microservices_2.MessagePattern)({ cmd: 'sendMessageToSupportTeam' }),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(send_message_to_support_schema_1.sendMessageToSupportSchema, { isRpcException: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_message_to_support_dto_1.SendMessageToSupportDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendMessageToSupportTeam", null);
exports.NotificationController = NotificationController = NotificationController_1 = __decorate([
    (0, common_1.Controller)('notification'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map