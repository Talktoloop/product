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
exports.RejectReasonService = void 0;
const common_1 = require("@nestjs/common");
const reject_reason_repository_1 = require("../repository/reject-reason.repository");
const shared_1 = require("@ourloop/shared");
let RejectReasonService = class RejectReasonService {
    constructor(rejectReasonRepository) {
        this.rejectReasonRepository = rejectReasonRepository;
    }
    findAll() {
        return this.rejectReasonRepository.find({ where: { isTopLevel: true }, relations: { children: true }, order: { id: 'DESC' } });
    }
    findByIdsOrFail(ids) {
        return Promise.all(ids.map((value) => this.findOneByParamsOrFail({ id: value })));
    }
    async findOneByParamsOrFail(params) {
        return this.rejectReasonRepository.findOneByParams(params).then((data) => {
            if (!data) {
                throw new shared_1.CustomError(shared_1.REJECT_REASON_NOT_FOUND, {
                    error: 'Reject reason ID does not exist',
                });
            }
            return data;
        });
    }
};
exports.RejectReasonService = RejectReasonService;
exports.RejectReasonService = RejectReasonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reject_reason_repository_1.RejectReasonRepository])
], RejectReasonService);
//# sourceMappingURL=reject-reason.service.js.map