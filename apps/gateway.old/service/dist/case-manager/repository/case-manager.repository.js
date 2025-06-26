"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CaseManagerRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseManagerRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const common_1 = require("@nestjs/common");
const case_manager_entity_1 = require("../entity/case-manager.entity");
let CaseManagerRepository = CaseManagerRepository_1 = class CaseManagerRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(CaseManagerRepository_1.name);
    }
    async getRandomManager() {
        const query = this.createQueryBuilder('case_manager')
            .select('case_manager')
            .leftJoinAndSelect('case_manager.languages', 'languages')
            .where('visible = 1')
            .addOrderBy('RAND()')
            .limit(1);
        return query.getOne();
    }
    async findByParams(params) {
        return this.find({ where: params }).catch((error) => this.logger.error(error));
    }
};
exports.CaseManagerRepository = CaseManagerRepository;
exports.CaseManagerRepository = CaseManagerRepository = CaseManagerRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(case_manager_entity_1.CaseManagerEntity)
], CaseManagerRepository);
//# sourceMappingURL=case-manager.repository.js.map