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
exports.RecordingsRO = exports.RecordingRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let RecordingRO = class RecordingRO {
};
exports.RecordingRO = RecordingRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], RecordingRO.prototype, "text", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], RecordingRO.prototype, "audio", void 0);
exports.RecordingRO = RecordingRO = __decorate([
    (0, class_transformer_1.Exclude)()
], RecordingRO);
let RecordingsRO = class RecordingsRO {
};
exports.RecordingsRO = RecordingsRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: RecordingRO }),
    __metadata("design:type", RecordingRO)
], RecordingsRO.prototype, "intro", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: RecordingRO }),
    __metadata("design:type", RecordingRO)
], RecordingsRO.prototype, "outro", void 0);
exports.RecordingsRO = RecordingsRO = __decorate([
    (0, class_transformer_1.Exclude)()
], RecordingsRO);
//# sourceMappingURL=recordings.ro.js.map