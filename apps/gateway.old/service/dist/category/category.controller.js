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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const category_ro_1 = require("./response/category.ro");
const category_service_1 = require("./category.service");
const filter_schema_1 = require("../common/request/schema/filter.schema");
const filter_dto_1 = require("../common/dto/filter.dto");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../common/helpers");
const thematic_service_1 = require("../lexicon/service/thematic.service");
let CategoryController = class CategoryController {
    constructor(categoryService, thematicService) {
        this.categoryService = categoryService;
        this.thematicService = thematicService;
    }
    async getListOfCategories(filters) {
        if (!(0, helpers_1.isEmpty)(filters)) {
            filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        }
        return this.categoryService.findAllCounts(filters);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get list of categories' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: category_ro_1.CategoryRO, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getListOfCategories", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Category'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        thematic_service_1.ThematicService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map