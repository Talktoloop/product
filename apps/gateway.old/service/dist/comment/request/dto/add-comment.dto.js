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
exports.AddCommentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AddCommentDto {
}
exports.AddCommentDto = AddCommentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    __metadata("design:type", String)
], AddCommentDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 60 }),
    __metadata("design:type", String)
], AddCommentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 20 }),
    __metadata("design:type", String)
], AddCommentDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 36 }),
    __metadata("design:type", String)
], AddCommentDto.prototype, "parentCommentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, maxLength: 60 }),
    __metadata("design:type", String)
], AddCommentDto.prototype, "nickname", void 0);
//# sourceMappingURL=add-comment.dto.js.map