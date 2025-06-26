"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeratorRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const moderator_entity_1 = require("../entity/moderator.entity");
let ModeratorRepository = class ModeratorRepository extends typeorm_1.Repository {
    async findAll() {
        const moderators = await this.find({
            where: { role: 2 },
        });
        return moderators.map((moderator) => ({
            id: moderator.id,
            email: moderator.email,
            nickname: moderator.nickname || '',
            firstName: moderator.firstName || '',
            lastName: moderator.lastName || '',
            role: moderator.role.toString(),
        }));
    }
    async findById(id) {
        const moderator = await this.findOne({
            where: {
                id: id,
                role: 2,
            },
        });
        return moderator;
    }
};
exports.ModeratorRepository = ModeratorRepository;
exports.ModeratorRepository = ModeratorRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(moderator_entity_1.ModeratorEntity)
], ModeratorRepository);
//# sourceMappingURL=moderator.repository.js.map