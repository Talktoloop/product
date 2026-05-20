import { Injectable } from '@nestjs/common';
import { MaternityStatusRepository } from '../repository/maternity-status.repository';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';
import { LexiconServiceFactory } from '../factory/service.factory';

@Injectable()
export class MaternityStatusService implements LexiconServiceFactory {
  constructor(
    private readonly maternityStatusRepository: MaternityStatusRepository,
  ) {}
  findAll(): Promise<MaternityStatusEntity[]> {
    return this.maternityStatusRepository.findAll();
  }

  findByIdOrFail(id: number): Promise<MaternityStatusEntity> {
    return this.maternityStatusRepository.findByIdOrFail(id);
  }
}
