import { Module } from '@nestjs/common';
import { ThematicService } from './service/thematic.service';
import { ThematicController } from './controller/thematic.controller';
import { ThematicEntity } from './entity/thematic.entity';
import { DatabaseModule } from '../database/database.module';
import { ThematicRepository } from './repository/thematic.repository';
import { DifficultyService } from './service/difficulty.service';
import { DifficultyController } from './controller/difficulty.controller';
import { DifficultyEntity } from './entity/difficulty.entity';
import { DifficultyRepository } from './repository/difficulty.repository';
import { MaternityStatusEntity } from './entity/maternity-status.entity';
import { MaternityStatusRepository } from './repository/maternity-status.repository';
import { MaternityStatusController } from './controller/maternity-status.controller';
import { MaternityStatusService } from './service/maternity-status.service';
import { RejectReasonRepository } from './repository/reject-reason.repository';
import { RejectReasonEntity } from './entity/reject-reason.entity';
import { RejectReasonService } from './service/reject-reason.service';
import { RejectReasonController } from './controller/reject-reason.controller';
import { AgeController } from './controller/age.controller';
import { GenderController } from './controller/gender.controller';
import { AgeService } from './service/age.service';
import { GenderService } from './service/gender.service';
import { StorySortingController } from './controller/story-sorting.controller';
import { ModeratorEntity } from './entity/moderator.entity';
import { ModeratorRepository } from './repository/moderator.repository';
import { ModeratorService } from './service/moderators.service';
import { ModeratorsController } from './controller/moderators.controller';
import { CerbosService } from '../common/cerbos/cerbos.service';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

@Module({
  imports: [
    DatabaseModule.forFeature([
      ThematicEntity,
      ThematicRepository,
      DifficultyEntity,
      DifficultyRepository,
      MaternityStatusEntity,
      MaternityStatusRepository,
      RejectReasonEntity,
      RejectReasonRepository,
      ModeratorEntity,
      ModeratorRepository,
    ]),

  ],
  providers: [
    ThematicService,
    DifficultyService,
    MaternityStatusService,
    RejectReasonService,
    AgeService,
    GenderService,
    ModeratorService,
    PermissionGuard,
    CerbosService
  ],
  controllers: [
    ThematicController,
    DifficultyController,
    MaternityStatusController,
    RejectReasonController,
    AgeController,
    GenderController,
    StorySortingController,
    ModeratorsController,
  ],
  exports: [
    DifficultyService,
    MaternityStatusService,
    RejectReasonService,
    ThematicService,
    ModeratorService,
  ],
})
export class LexiconModule { }
