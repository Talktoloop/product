import { Injectable } from '@nestjs/common';
import { CaseManagerEntity } from '../entity/case-manager.entity';
import { CaseManagerRepository } from '../repository/case-manager.repository';
import { IsNull, Not } from 'typeorm';

@Injectable()
export class CaseManagerService {
  constructor(private readonly caseManagerRepository: CaseManagerRepository) {}
  async getRandomManager(): Promise<CaseManagerEntity> {
    return this.caseManagerRepository.getRandomManager();
  }

  async findWithEmail(): Promise<CaseManagerEntity[]> {
    return this.caseManagerRepository
      .findByParams({
        email: Not(IsNull()),
      })
      .then((data) => {
        if (!data) {
          return;
        }

        return data;
      });
  }
}
