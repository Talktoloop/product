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
exports.ThematicEntity = void 0;
const typeorm_1 = require("typeorm");
let ThematicEntity = class ThematicEntity {
};
exports.ThematicEntity = ThematicEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], ThematicEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ThematicEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], ThematicEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'parent_thematic_id', type: 'int' }),
    __metadata("design:type", Number)
], ThematicEntity.prototype, "parentThematicId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ThematicEntity, (thematic) => thematic.children, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_thematic_id' }),
    __metadata("design:type", ThematicEntity)
], ThematicEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ThematicEntity, (subThematic) => subThematic.parent),
    __metadata("design:type", Array)
], ThematicEntity.prototype, "children", void 0);
exports.ThematicEntity = ThematicEntity = __decorate([
    (0, typeorm_1.Entity)('thematic')
], ThematicEntity);
//# sourceMappingURL=thematic.entity.js.map