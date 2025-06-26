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
exports.TextItMessageRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class TextItMessageData {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageData.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageData.prototype, "channel_uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageData.prototype, "msg_uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageData.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageData.prototype, "urn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageData.prototype, "received_on", void 0);
let TextItMessageRO = class TextItMessageRO {
};
exports.TextItMessageRO = TextItMessageRO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], TextItMessageRO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TextItMessageData] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], TextItMessageRO.prototype, "data", void 0);
exports.TextItMessageRO = TextItMessageRO = __decorate([
    (0, class_transformer_1.Exclude)()
], TextItMessageRO);
//# sourceMappingURL=textit-message.ro.js.map