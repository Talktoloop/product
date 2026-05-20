import { Injectable } from '@nestjs/common';
import { ThematicRepository } from '../repository/thematic.repository';
import { ThematicEntity } from '../entity/thematic.entity';
import { LexiconServiceFactory } from '../factory/service.factory';
import {
  CountCodeId,
  CountCodeIdWithChildren,
} from '../../statistic/interfaces/code-count-id.interface';
import { FilterDto } from '../../common/dto/filter.dto';
import { In } from 'typeorm';

@Injectable()
export class ThematicService implements LexiconServiceFactory {
  constructor(private readonly thematicRepository: ThematicRepository) {}

  async findAllCounts(filters?: FilterDto): Promise<CountCodeIdWithChildren[]> {
    const thematics = await this.thematicRepository.findAll();
    const counts = await this.thematicRepository.findCounts(filters);
    const data = [] as CountCodeIdWithChildren[];
    thematics.find((thematic) => {
      data.push({
        code: thematic.code,
        count: counts.find((count) => count.id === thematic.id)?.count ?? 0,
        id: thematic.id,
        children: [] as CountCodeId[],
      });

      thematic.children?.forEach((child) => {
        data[data.length - 1].children.push({
          code: child.code,
          count: counts.find((count) => count.id === child.id)?.count ?? 0,
          id: child.id,
        });
      });
    });
    return data;
  }
  findAll(): Promise<ThematicEntity[]> {
    return this.thematicRepository.findAll();
  }

  findDataToExport(): Promise<ThematicEntity[]> {
    return this.thematicRepository.find();
  }

  findByIds(ids: number[]): Promise<ThematicEntity[]> {
    return this.thematicRepository.findByIds(ids);
  }

  findByIdOrFail(id: number): Promise<ThematicEntity> {
    return this.thematicRepository.findByIdOrFail(id);
  }

  findByCodes(codes: string[]): Promise<ThematicEntity[]> {
    return this.thematicRepository.find({
      where: {
        code: In(codes),
      },
    });
  }
}
