"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const user_entity_1 = require("../entity/user.entity");
const shared_1 = require("@ourloop/shared");
const common_1 = require("@nestjs/common");
let UserRepository = UserRepository_1 = class UserRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger(UserRepository_1.name);
    }
    async findUsersWithNotificationOn(organisations) {
        return this.createQueryBuilder('user')
            .leftJoinAndSelect('user.organisation', 'organisation')
            .leftJoinAndSelect('user.language', 'language')
            .where('notifications = :notifications', { notifications: 1 })
            .andWhere('organisation_id IN (:...organisations)', {
            organisations: organisations.map((organisation) => organisation.id),
        })
            .getMany();
    }
    async findUsersWithRemindersOn(organisations) {
        return this.createQueryBuilder('user')
            .leftJoinAndSelect('user.organisation', 'organisation')
            .where('reminders = :reminders', { reminders: 1 })
            .andWhere('organisation_id IN (:...organisations)', {
            organisations: organisations.map((organisation) => organisation.id),
        })
            .getMany();
    }
    findById(id, relations) {
        if (!id)
            return;
        return this.findOne({
            where: { id },
            relations: relations !== null && relations !== void 0 ? relations : [],
        });
    }
    saveUser(data) {
        return this.save(data);
    }
    async findUsersToAirtable(userId) {
        let queryBuilder = this.createQueryBuilder('user')
            .select('user.id', 'ID')
            .addSelect('user.nickname', 'Nickname')
            .addSelect('user.email', 'Email')
            .addSelect('user.account_status', 'Account status');
        if (userId) {
            queryBuilder = queryBuilder.where('user.id = :userId', { userId });
        }
        return queryBuilder.execute().catch((error) => {
            this.logger.error(error);
            throw new common_1.BadRequestException(shared_1.GET_USERS_FAILED);
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = UserRepository_1 = __decorate([
    (0, database_decorator_1.EntityRepository)(user_entity_1.UserEntity)
], UserRepository);
//# sourceMappingURL=user.repository.js.map