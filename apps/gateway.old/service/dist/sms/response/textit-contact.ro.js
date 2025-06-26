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
exports.TextItContactRO = void 0;
const swagger_1 = require("@nestjs/swagger");
class TextItUuidName {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItUuidName.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItUuidName.prototype, "name", void 0);
class TextItFields {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItFields.prototype, "triggered", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItFields.prototype, "execution_date", void 0);
class TextItContactRO {
}
exports.TextItContactRO = TextItContactRO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], TextItContactRO.prototype, "urns", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TextItUuidName] }),
    __metadata("design:type", Array)
], TextItContactRO.prototype, "groups", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: TextItFields }),
    __metadata("design:type", TextItFields)
], TextItContactRO.prototype, "fields", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TextItUuidName] }),
    __metadata("design:type", Array)
], TextItContactRO.prototype, "flow", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "created_on", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "modified_on", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TextItContactRO.prototype, "last_seen_on", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], TextItContactRO.prototype, "blocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], TextItContactRO.prototype, "stopped", void 0);
//# sourceMappingURL=textit-contact.ro.js.map