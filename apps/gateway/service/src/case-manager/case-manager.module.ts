import { Module } from '@nestjs/common';
import { CaseManagerController } from './controller/case-manager.controller';
import { CaseManagerEntity } from './entity/case-manager.entity';
import { CaseManagerRepository } from './repository/case-manager.repository';
import { CaseManagerService } from './service/case-manager.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule.forFeature([CaseManagerEntity, CaseManagerRepository]),
  ],
  controllers: [CaseManagerController],
  providers: [CaseManagerService],
  exports: [CaseManagerService],
})
export class CaseManagerModule {}
