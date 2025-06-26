"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const dashboard_controller_1 = require("./dashboard.controller");
const dashboard_service_1 = require("./dashboard.service");
const story_entity_1 = require("../story/entity/story.entity");
const story_repository_1 = require("../story/repository/story.repository");
const comment_repository_1 = require("../comment/repository/comment.repository");
const comment_entity_1 = require("../comment/entity/comment.entity");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule.forFeature([
                story_entity_1.StoryEntity,
                story_repository_1.StoryRepository,
                comment_entity_1.CommentEntity,
                comment_repository_1.CommentRepository,
            ]),
        ],
        controllers: [dashboard_controller_1.DashboardController],
        providers: [dashboard_service_1.DashboardService, permission_guard_1.PermissionGuard, cerbos_service_1.CerbosService],
        exports: [dashboard_service_1.DashboardService],
    })
], DashboardModule);
//# sourceMappingURL=dashboard.module.js.map