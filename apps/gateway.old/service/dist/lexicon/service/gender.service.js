"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderService = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("../../common/types");
const class_transformer_1 = require("class-transformer");
const id_with_counter_ro_1 = require("../response/id-with-counter.ro");
const typeorm_1 = __importDefault(require("../../config/typeorm"));
const helpers_1 = require("../../common/helpers");
const shared_1 = require("@ourloop/shared");
let GenderService = class GenderService {
    findAll() {
        return Object.values(types_1.GENDER_VALUE)
            .sort()
            .map((value) => (0, class_transformer_1.plainToClass)(id_with_counter_ro_1.IdWithCounterRO, { id: value }));
    }
    async findAllCounts(filters) {
        const genders = await this.findAll();
        const counts = await this.findCounts(filters);
        const data = [];
        genders.forEach((gender) => {
            var _a, _b;
            data.push({
                id: gender.id,
                count: (_b = (_a = counts.find((count) => count.id === gender.id)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0,
            });
        });
        return data;
    }
    async findCounts(filters) {
        const connection = await (0, helpers_1.getConnection)(typeorm_1.default);
        let query = connection
            .createQueryBuilder()
            .from('story', 'story')
            .leftJoin('story.recipient', 'recipient')
            .addSelect('recipient.genderByModerator', 'id')
            .addSelect('COUNT(DISTINCT story.id)', 'count')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED })
            .groupBy('recipient.genderByModerator');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
        }
        return query.execute();
    }
};
exports.GenderService = GenderService;
exports.GenderService = GenderService = __decorate([
    (0, common_1.Injectable)()
], GenderService);
//# sourceMappingURL=gender.service.js.map