import { Repository } from 'typeorm';
import { EntityRepository } from '../../database/database.decorator';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';
import { CustomError, MATERNITY_STATUS_NOT_FOUND } from '@ourloop/shared';
import { LexiconRepositoryFactory } from '../factory/repository.factory';

@EntityRepository(MaternityStatusEntity)
export class MaternityStatusRepository
  extends Repository<MaternityStatusEntity>
  implements LexiconRepositoryFactory
{
  findAll(): Promise<MaternityStatusEntity[]> {
    return this.find();
  }

  async findByIdOrFail(id: number): Promise<MaternityStatusEntity> {
    if (!id) {
      throw new CustomError(MATERNITY_STATUS_NOT_FOUND, {
        error: 'Maternity Status ID doesnt exist',
      });
    }

    return this.findOne({ where: { id } }).then((data) => {
      if (!data) {
        throw new CustomError(MATERNITY_STATUS_NOT_FOUND, {
          error: 'Maternity Status ID doesnt exist',
        });
      }

      return data;
    });
  }
}
