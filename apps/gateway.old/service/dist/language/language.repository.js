"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../database/database.decorator");
const language_entity_1 = require("./entity/language.entity");
let LanguageRepository = class LanguageRepository extends typeorm_1.Repository {
    async findAllLanguageProviders() {
        return this.createQueryBuilder('language')
            .select('language.provider', 'provider')
            .where('provider IS NOT NULL')
            .groupBy('provider')
            .getRawMany();
    }
    async findMachineTranslatedLanguages(order) {
        let query = 'SELECT *, alternative_provider as alternativeProvider FROM language WHERE provider IS NOT NULL';
        if (order) {
            query += ` ORDER BY FIELD(provider, '${order.join("','")}'), id ASC`;
        }
        return this.query(query);
    }
    findByCodeOrDefault(code) {
        return this.find({
            where: [{ code }, { isDefault: true }],
        });
    }
};
exports.LanguageRepository = LanguageRepository;
exports.LanguageRepository = LanguageRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(language_entity_1.LanguageEntity)
], LanguageRepository);
//# sourceMappingURL=language.repository.js.map