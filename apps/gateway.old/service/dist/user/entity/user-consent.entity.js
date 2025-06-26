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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConsentEntity = void 0;
const typeorm_1 = require("typeorm");
const comment_entity_1 = require("../../comment/entity/comment.entity");
const message_entity_1 = require("../../sms/entity/message.entity");
let UserConsentEntity = class UserConsentEntity {
};
exports.UserConsentEntity = UserConsentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], UserConsentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], UserConsentEntity.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserConsentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.user),
    __metadata("design:type", Array)
], UserConsentEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.MessageEntity, (message) => message.user),
    __metadata("design:type", Array)
], UserConsentEntity.prototype, "messages", void 0);
exports.UserConsentEntity = UserConsentEntity = __decorate([
    (0, typeorm_1.Entity)('user_consent')
], UserConsentEntity);
//# sourceMappingURL=user-consent.entity.js.map