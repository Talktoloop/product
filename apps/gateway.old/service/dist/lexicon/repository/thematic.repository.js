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
exports.ThematicRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = __importDefault(require("../../config/typeorm"));
const database_decorator_1 = require("../../database/database.decorator");
const thematic_entity_1 = require("../entity/thematic.entity");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../../common/helpers");
let ThematicRepository = class ThematicRepository extends typeorm_1.Repository {
    async findCounts(filters) {
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        let query = connection
            .createQueryBuilder()
            .from('thematic', 'thematic')
            .addSelect('thematic.id', 'id')
            .addSelect('COUNT(DISTINCT story.id)', 'count')
            .leftJoin('story_thematic', 'st', 'st.thematic_id = thematic.id')
            .leftJoin('story', 'story', 'story.id = st.story_id')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED })
            .groupBy('thematic.id');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query));
            if (filters === null || filters === void 0 ? void 0 : filters.thematic) {
                const key = 'thematic';
                query = query.andWhere(`thematic.id IN (:...${key})`, {
                    [key]: filters.thematic.toString().split(','),
                });
            }
        }
        return query.execute();
    }
    findAll() {
        return this.createQueryBuilder('thematic')
            .leftJoinAndSelect('thematic.children', 'children')
            .where('thematic.parent_thematic_id IS NULL')
            .orderBy('thematic.order', 'ASC')
            .addOrderBy('children.order', 'ASC')
            .getMany();
    }
    async findByIdOrFail(id) {
        if (!id) {
            throw new shared_1.CustomError(shared_1.THEMATIC_NOT_FOUND, {
                error: 'Thematic ID does not exist',
            });
        }
        return this.findOne({ where: { id } }).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.THEMATIC_NOT_FOUND, {
                    error: 'Thematic ID does not exist',
                });
            }
            return data;
        });
    }
    findByIds(ids) {
        return this.find({
            where: { id: (0, typeorm_1.In)(ids) },
        });
    }
};
exports.ThematicRepository = ThematicRepository;
exports.ThematicRepository = ThematicRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(thematic_entity_1.ThematicEntity)
], ThematicRepository);
//# sourceMappingURL=thematic.repository.js.map