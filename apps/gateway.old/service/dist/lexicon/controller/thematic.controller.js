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
exports.ThematicController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("@ourloop/shared");
const filter_dto_1 = require("../../common/dto/filter.dto");
const filter_schema_1 = require("../../common/request/schema/filter.schema");
const thematic_ro_1 = require("../response/thematic.ro");
const thematic_service_1 = require("../service/thematic.service");
let ThematicController = class ThematicController {
    constructor(thematicService) {
        this.thematicService = thematicService;
    }
    async getListOfThematicAreas(filters) {
        return this.thematicService.findAllCounts(filters);
    }
};
exports.ThematicController = ThematicController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get list of thematic area' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: thematic_ro_1.ThematicRO, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], ThematicController.prototype, "getListOfThematicAreas", null);
exports.ThematicController = ThematicController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Thematic'),
    (0, common_1.Controller)('thematic'),
    __metadata("design:paramtypes", [thematic_service_1.ThematicService])
], ThematicController);
//# sourceMappingURL=thematic.controller.js.map