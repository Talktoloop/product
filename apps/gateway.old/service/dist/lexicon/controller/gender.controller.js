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
exports.GenderController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
const filter_dto_1 = require("../../common/dto/filter.dto");
const filter_schema_1 = require("../../common/request/schema/filter.schema");
const id_with_counter_ro_1 = require("../response/id-with-counter.ro");
const gender_service_1 = require("../service/gender.service");
const thematic_service_1 = require("../service/thematic.service");
let GenderController = class GenderController {
    constructor(genderService, thematicService) {
        this.genderService = genderService;
        this.thematicService = thematicService;
    }
    async getListOfGenderValues(filters) {
        if (!(0, helpers_1.isEmpty)(filters)) {
            filters = await (0, helpers_1.updateThematicFilters)(filters, this.thematicService);
        }
        return this.genderService.findAllCounts(filters);
    }
};
exports.GenderController = GenderController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get list of gender values' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: id_with_counter_ro_1.IdWithCounterRO, isArray: true }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(new shared_1.ValidationPipe(filter_schema_1.filterSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
    __metadata("design:returntype", Promise)
], GenderController.prototype, "getListOfGenderValues", null);
exports.GenderController = GenderController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['anonymous'])),
    (0, swagger_1.ApiTags)('Gender'),
    (0, common_1.Controller)('gender'),
    __metadata("design:paramtypes", [gender_service_1.GenderService,
        thematic_service_1.ThematicService])
], GenderController);
//# sourceMappingURL=gender.controller.js.map