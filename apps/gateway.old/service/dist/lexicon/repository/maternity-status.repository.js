"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaternityStatusRepository = void 0;
const typeorm_1 = require("typeorm");
const database_decorator_1 = require("../../database/database.decorator");
const maternity_status_entity_1 = require("../entity/maternity-status.entity");
const shared_1 = require("@ourloop/shared");
let MaternityStatusRepository = class MaternityStatusRepository extends typeorm_1.Repository {
    findAll() {
        return this.find();
    }
    async findByIdOrFail(id) {
        if (!id) {
            throw new shared_1.CustomError(shared_1.MATERNITY_STATUS_NOT_FOUND, {
                error: 'Maternity Status ID doesnt exist',
            });
        }
        return this.findOne({ where: { id } }).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.MATERNITY_STATUS_NOT_FOUND, {
                    error: 'Maternity Status ID doesnt exist',
                });
            }
            return data;
        });
    }
};
exports.MaternityStatusRepository = MaternityStatusRepository;
exports.MaternityStatusRepository = MaternityStatusRepository = __decorate([
    (0, database_decorator_1.EntityRepository)(maternity_status_entity_1.MaternityStatusEntity)
], MaternityStatusRepository);
//# sourceMappingURL=maternity-status.repository.js.map