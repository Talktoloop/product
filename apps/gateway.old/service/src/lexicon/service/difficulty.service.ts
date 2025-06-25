import { Injectable } from '@nestjs/common';
import { DifficultyRepository } from '../repository/difficulty.repository';
import { DifficultyEntity } from '../entity/difficulty.entity';
import { LexiconServiceFactory } from '../factory/service.factory';
import { FilterDto } from '../../common/dto/filter.dto';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';
import { In } from 'typeorm';

@Injectable()
export class DifficultyService implements LexiconServiceFactory {
  async findAllCounts(filters: FilterDto): Promise<CountCodeId[]> {
    const difficulties = await this.difficultlyRepository.findAll();
    const counts = await this.difficultlyRepository.findCounts(filters);
    const data = [] as CountCodeId[];
    difficulties.forEach((difficulty) => {
      data.push({
        code: difficulty.code,
        count: counts.find((count) => count.id === difficulty.id)?.count ?? 0,
        id: difficulty.id,
      });
    });
    return data;
  }

  constructor(private readonly difficultlyRepository: DifficultyRepository) {}

  findAll(): Promise<DifficultyEntity[]> {
    return this.difficultlyRepository.findAll();
  }

  findByIdOrFail(id: number): Promise<DifficultyEntity> {
    return this.difficultlyRepository.findByIdOrFail(id);
  }

  findByCodes(codes: string[]): Promise<DifficultyEntity[]> {
    return this.difficultlyRepository.find({
      where: {
        code: In(codes),
      },
    });
  }
}
