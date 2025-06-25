import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { UserExportCsvActivityEntity } from '../entity/user-export-csv-activity.entity';

@EntityRepository(UserExportCsvActivityEntity)
export class UserExportCsvActivityRepository extends Repository<UserExportCsvActivityEntity> {}
