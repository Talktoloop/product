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
exports.CaseManagerService = void 0;
const common_1 = require("@nestjs/common");
const case_manager_repository_1 = require("../repository/case-manager.repository");
const typeorm_1 = require("typeorm");
let CaseManagerService = class CaseManagerService {
    constructor(caseManagerRepository) {
        this.caseManagerRepository = caseManagerRepository;
    }
    async getRandomManager() {
        return this.caseManagerRepository.getRandomManager();
    }
    async findWithEmail() {
        return this.caseManagerRepository
            .findByParams({
            email: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
        })
            .then((data) => {
            if (!data) {
                return;
            }
            return data;
        });
    }
};
exports.CaseManagerService = CaseManagerService;
exports.CaseManagerService = CaseManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [case_manager_repository_1.CaseManagerRepository])
], CaseManagerService);
//# sourceMappingURL=case-manager.service.js.map