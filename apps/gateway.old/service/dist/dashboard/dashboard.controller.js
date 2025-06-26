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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const passport_1 = require("@nestjs/passport");
const shared_1 = require("@ourloop/shared");
const incoming_stories_and_comments_ro_1 = require("./response/incoming-stories-and-comments.ro");
const outgoing_comments_ro_1 = require("./response/outgoing-comments.ro");
const dashboard_service_1 = require("./dashboard.service");
const dashboard_filter_dto_1 = require("./request/dto/dashboard-filter.dto");
const dashboard_filter_schema_1 = require("./request/schema/dashboard-filter.schema");
const incoming_data_dashboard_filter_dto_1 = require("./request/dto/incoming-data-dashboard-filter.dto");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
const permission_decorator_1 = require("../auth/cerbos/permission.decorator");
const permission_enum_1 = require("../auth/cerbos/permission.enum");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    async getNumberOfIncomingStoriesAndComments(params) {
        return (0, class_transformer_1.plainToClass)(incoming_stories_and_comments_ro_1.IncomingStoriesAndCommentsRO, await this.dashboardService.getNumberOfIncomingStoriesAndComments(params));
    }
    async getNumberOfOutgoingComments(params) {
        return (0, class_transformer_1.plainToClass)(outgoing_comments_ro_1.OutgoingCommentsRO, await this.dashboardService.getNumberOfOutgoingComments(params));
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get number of incoming stories and incoming comments',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: incoming_stories_and_comments_ro_1.IncomingStoriesAndCommentsRO }),
    (0, common_1.Get)('quantity/incoming'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.STORY),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(dashboard_filter_schema_1.dashboardFilterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [incoming_data_dashboard_filter_dto_1.IncomingDataDashboardFilterDTO]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getNumberOfIncomingStoriesAndComments", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get number of outgoing comments',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: outgoing_comments_ro_1.OutgoingCommentsRO }),
    (0, common_1.Get)('quantity/outgoing'),
    (0, permission_decorator_1.PermissionsCerbos)(permission_enum_1.CERBOS_ACTIONS.READ, permission_enum_1.CERBOS_RESOURCES.COMMENT),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(dashboard_filter_schema_1.dashboardFilterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDTO]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getNumberOfOutgoingComments", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('cognito'), permission_guard_1.PermissionGuard),
    (0, swagger_1.ApiTags)('Dashboard'),
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map