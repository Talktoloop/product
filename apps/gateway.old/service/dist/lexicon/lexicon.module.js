"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexiconModule = void 0;
const common_1 = require("@nestjs/common");
const thematic_service_1 = require("./service/thematic.service");
const thematic_controller_1 = require("./controller/thematic.controller");
const thematic_entity_1 = require("./entity/thematic.entity");
const database_module_1 = require("../database/database.module");
const thematic_repository_1 = require("./repository/thematic.repository");
const difficulty_service_1 = require("./service/difficulty.service");
const difficulty_controller_1 = require("./controller/difficulty.controller");
const difficulty_entity_1 = require("./entity/difficulty.entity");
const difficulty_repository_1 = require("./repository/difficulty.repository");
const maternity_status_entity_1 = require("./entity/maternity-status.entity");
const maternity_status_repository_1 = require("./repository/maternity-status.repository");
const maternity_status_controller_1 = require("./controller/maternity-status.controller");
const maternity_status_service_1 = require("./service/maternity-status.service");
const reject_reason_repository_1 = require("./repository/reject-reason.repository");
const reject_reason_entity_1 = require("./entity/reject-reason.entity");
const reject_reason_service_1 = require("./service/reject-reason.service");
const reject_reason_controller_1 = require("./controller/reject-reason.controller");
const age_controller_1 = require("./controller/age.controller");
const gender_controller_1 = require("./controller/gender.controller");
const age_service_1 = require("./service/age.service");
const gender_service_1 = require("./service/gender.service");
const story_sorting_controller_1 = require("./controller/story-sorting.controller");
const moderator_entity_1 = require("./entity/moderator.entity");
const moderator_repository_1 = require("./repository/moderator.repository");
const moderators_service_1 = require("./service/moderators.service");
const moderators_controller_1 = require("./controller/moderators.controller");
const cerbos_service_1 = require("../common/cerbos/cerbos.service");
const permission_guard_1 = require("../auth/cerbos/permission.guard");
let LexiconModule = class LexiconModule {
};
exports.LexiconModule = LexiconModule;
exports.LexiconModule = LexiconModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule.forFeature([
                thematic_entity_1.ThematicEntity,
                thematic_repository_1.ThematicRepository,
                difficulty_entity_1.DifficultyEntity,
                difficulty_repository_1.DifficultyRepository,
                maternity_status_entity_1.MaternityStatusEntity,
                maternity_status_repository_1.MaternityStatusRepository,
                reject_reason_entity_1.RejectReasonEntity,
                reject_reason_repository_1.RejectReasonRepository,
                moderator_entity_1.ModeratorEntity,
                moderator_repository_1.ModeratorRepository,
            ]),
        ],
        providers: [
            thematic_service_1.ThematicService,
            difficulty_service_1.DifficultyService,
            maternity_status_service_1.MaternityStatusService,
            reject_reason_service_1.RejectReasonService,
            age_service_1.AgeService,
            gender_service_1.GenderService,
            moderators_service_1.ModeratorService,
            permission_guard_1.PermissionGuard,
            cerbos_service_1.CerbosService
        ],
        controllers: [
            thematic_controller_1.ThematicController,
            difficulty_controller_1.DifficultyController,
            maternity_status_controller_1.MaternityStatusController,
            reject_reason_controller_1.RejectReasonController,
            age_controller_1.AgeController,
            gender_controller_1.GenderController,
            story_sorting_controller_1.StorySortingController,
            moderators_controller_1.ModeratorsController,
        ],
        exports: [
            difficulty_service_1.DifficultyService,
            maternity_status_service_1.MaternityStatusService,
            reject_reason_service_1.RejectReasonService,
            thematic_service_1.ThematicService,
            moderators_service_1.ModeratorService,
        ],
    })
], LexiconModule);
//# sourceMappingURL=lexicon.module.js.map