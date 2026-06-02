import { Injectable } from '@nestjs/common';
import { CaseManagerEntity } from '../entity/case-manager.entity';
import { CaseManagerRepository } from '../repository/case-manager.repository';

@Injectable()
export class CaseManagerService {
  constructor(private readonly caseManagerRepository: CaseManagerRepository) {}
  async getRandomManager(): Promise<CaseManagerEntity> {
    return this.caseManagerRepository.getRandomManager();
  }

  async findWithEmail(countryId: number): Promise<CaseManagerEntity[]> {
    return this.caseManagerRepository.findRecipientsForCountry(countryId);
  }
}
