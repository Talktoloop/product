"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseManagerModule = void 0;
const common_1 = require("@nestjs/common");
const case_manager_controller_1 = require("./controller/case-manager.controller");
const case_manager_entity_1 = require("./entity/case-manager.entity");
const case_manager_repository_1 = require("./repository/case-manager.repository");
const case_manager_service_1 = require("./service/case-manager.service");
const database_module_1 = require("../database/database.module");
let CaseManagerModule = class CaseManagerModule {
};
exports.CaseManagerModule = CaseManagerModule;
exports.CaseManagerModule = CaseManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule.forFeature([case_manager_entity_1.CaseManagerEntity, case_manager_repository_1.CaseManagerRepository]),
        ],
        controllers: [case_manager_controller_1.CaseManagerController],
        providers: [case_manager_service_1.CaseManagerService],
        exports: [case_manager_service_1.CaseManagerService],
    })
], CaseManagerModule);
//# sourceMappingURL=case-manager.module.js.map