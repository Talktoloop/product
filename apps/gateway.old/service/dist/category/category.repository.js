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
exports.CategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = __importDefault(require("../config/typeorm"));
const database_decorator_1 = require("../database/database.decorator");
const category_entity_1 = require("./entity/category.entity");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../common/helpers");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    async findAll() {
        return this.createQueryBuilder('category').select('category').getMany();
    }
    findByIds(ids, order = { order: 'ASC' }) {
        return this.find({
            where: { id: (0, typeorm_1.In)(ids) },
            order,
        });
    }
    async findCounts(filters) {
        const connection = await (0, helpers_1.getConnection)(typeorm_2.default);
        let query = connection
            .createQueryBuilder()
            .from('category', 'type')
            .addSelect('type.id', 'id')
            .addSelect('COUNT(DISTINCT story.id)', 'count')
            .leftJoin('story_category', 'sc', 'sc.category_id = type.id')
            .leftJoin('story', 'story', 'story.id = sc.story_id')
            .where('story.status = :status', { status: shared_1.STORY_STATUS.PUBLISHED })
            .groupBy('type.id');
        if (!(0, helpers_1.isEmpty)(filters)) {
            query = (0, helpers_1.addFilterCondition)(filters, (0, helpers_1.addFilterJoins)(query, ['story.categories']));
        }
        return query.execute();
    }
    async findByIdOrFail(id) {
        if (!id) {
            throw new shared_1.CustomError(shared_1.CATEGORY_NOT_FOUND, {
                error: 'Category ID does not exist',
            });
        }
        return this.findOne({ where: { id } }).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.CATEGORY_NOT_FOUND, {
                    error: 'Category ID does not exist',
                });
            }
            return data;
        });
    }
};
exports.CategoryRepository = CategoryRepository;
exports.CategoryRepository = CategoryRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(category_entity_1.CategoryEntity)
], CategoryRepository);
//# sourceMappingURL=category.repository.js.map