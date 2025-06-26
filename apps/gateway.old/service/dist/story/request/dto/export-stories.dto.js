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
exports.ExportStoriesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ExportStoriesDTO {
}
exports.ExportStoriesDTO = ExportStoriesDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    __metadata("design:type", String)
], ExportStoriesDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    __metadata("design:type", String)
], ExportStoriesDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Boolean }),
    __metadata("design:type", Boolean)
], ExportStoriesDTO.prototype, "withSensitiveStories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: String }),
    __metadata("design:type", String)
], ExportStoriesDTO.prototype, "organisation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], ExportStoriesDTO.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: Date }),
    __metadata("design:type", String)
], ExportStoriesDTO.prototype, "to", void 0);
//# sourceMappingURL=export-stories.dto.js.map