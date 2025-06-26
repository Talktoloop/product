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
exports.AirTableClientController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("@ourloop/shared");
const success_ro_1 = require("../common/response/success.ro");
const airtable_client_service_1 = require("./airtable-client.service");
const air_table_sync_dto_1 = require("./request/dto/air-table-sync.dto");
const air_table_sync_schema_1 = require("./request/schema/air-table-sync.schema");
const class_transformer_1 = require("class-transformer");
const delete_cases_dto_1 = require("./request/dto/delete-cases.dto");
const delete_cases_schema_1 = require("./request/schema/delete-cases.schema");
const air_table_delete_not_sensitive_story_schema_1 = require("./request/schema/air-table-delete-not-sensitive-story.schema");
const air_table_delete_story_dto_1 = require("./request/dto/air-table-delete-story.dto");
let AirTableClientController = class AirTableClientController {
    constructor(airTableClientService) {
        this.airTableClientService = airTableClientService;
    }
    async synchronizeARow(data) {
        await this.airTableClientService.saveOrUpdateRow(data);
        return { success: true };
    }
    async deleteNotSensitiveData(data) {
        console.log(data);
        await this.airTableClientService.deleteNotSensitiveData(data);
        return { success: true };
    }
    async removeARows(data) {
        const result = await this.airTableClientService.removeRows(data.ids);
        return (0, class_transformer_1.plainToClass)(success_ro_1.SuccessRO, {
            success: (result === null || result === void 0 ? void 0 : result.filter((item) => !!(item === null || item === void 0 ? void 0 : item.affected)).length) > 0,
        });
    }
};
exports.AirTableClientController = AirTableClientController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Add or update AirTableRow' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(air_table_sync_schema_1.airTableSyncSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [air_table_sync_dto_1.AirTableSyncDTO]),
    __metadata("design:returntype", Promise)
], AirTableClientController.prototype, "synchronizeARow", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Delete record not sensitive' }),
    (0, common_1.Post)('not-sensitive'),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(air_table_delete_not_sensitive_story_schema_1.airTableDeleteNotSensitiveSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [air_table_delete_story_dto_1.AirTableDeleteStoryDTO]),
    __metadata("design:returntype", Promise)
], AirTableClientController.prototype, "deleteNotSensitiveData", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, type: success_ro_1.SuccessRO }),
    (0, swagger_1.ApiOperation)({ summary: 'Delete AirTableRow' }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)(new shared_1.ValidationPipe(delete_cases_schema_1.deleteCasesSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_cases_dto_1.DeleteCasesDTO]),
    __metadata("design:returntype", Promise)
], AirTableClientController.prototype, "removeARows", null);
exports.AirTableClientController = AirTableClientController = __decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(['cognito', 'anonymous'])),
    (0, swagger_1.ApiTags)('AirTable Sync'),
    (0, common_1.Controller)('airtable-client'),
    (0, common_1.UseGuards)(shared_1.BaseAuthGuard),
    (0, swagger_1.ApiHeader)({ name: 'authorization' }),
    __metadata("design:paramtypes", [airtable_client_service_1.AirTableClientService])
], AirTableClientController);
//# sourceMappingURL=airtable-client.controller.js.map