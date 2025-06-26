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
exports.ThematicService = void 0;
const common_1 = require("@nestjs/common");
const thematic_repository_1 = require("../repository/thematic.repository");
const typeorm_1 = require("typeorm");
let ThematicService = class ThematicService {
    constructor(thematicRepository) {
        this.thematicRepository = thematicRepository;
    }
    async findAllCounts(filters) {
        const thematics = await this.thematicRepository.findAll();
        const counts = await this.thematicRepository.findCounts(filters);
        const data = [];
        thematics.find((thematic) => {
            var _a, _b, _c;
            data.push({
                code: thematic.code,
                count: (_b = (_a = counts.find((count) => count.id === thematic.id)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0,
                id: thematic.id,
                children: [],
            });
            (_c = thematic.children) === null || _c === void 0 ? void 0 : _c.forEach((child) => {
                var _a, _b;
                data[data.length - 1].children.push({
                    code: child.code,
                    count: (_b = (_a = counts.find((count) => count.id === child.id)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0,
                    id: child.id,
                });
            });
        });
        return data;
    }
    findAll() {
        return this.thematicRepository.findAll();
    }
    findDataToExport() {
        return this.thematicRepository.find();
    }
    findByIds(ids) {
        return this.thematicRepository.findByIds(ids);
    }
    findByIdOrFail(id) {
        return this.thematicRepository.findByIdOrFail(id);
    }
    findByCodes(codes) {
        return this.thematicRepository.find({
            where: {
                code: (0, typeorm_1.In)(codes),
            },
        });
    }
};
exports.ThematicService = ThematicService;
exports.ThematicService = ThematicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [thematic_repository_1.ThematicRepository])
], ThematicService);
//# sourceMappingURL=thematic.service.js.map