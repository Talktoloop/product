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
exports.AssignStoriesRO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const moderator_entity_1 = require("../../lexicon/entity/moderator.entity");
let AssignStoriesRO = class AssignStoriesRO {
};
exports.AssignStoriesRO = AssignStoriesRO;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ isArray: true, type: String }),
    __metadata("design:type", Array)
], AssignStoriesRO.prototype, "assignedStoriesIds", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", moderator_entity_1.ModeratorEntity)
], AssignStoriesRO.prototype, "assignedModerator", void 0);
exports.AssignStoriesRO = AssignStoriesRO = __decorate([
    (0, class_transformer_1.Exclude)()
], AssignStoriesRO);
//# sourceMappingURL=assigned-stories.ro.js.map