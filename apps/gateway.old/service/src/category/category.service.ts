import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CategoryEntity } from './entity/category.entity';
import { FilterDto } from '../common/dto/filter.dto';
import { CountCodeId } from '../statistic/interfaces/code-count-id.interface';
import { In } from 'typeorm';
@Injectable()
export class CategoryService {
  findByIdOrFail(id: number): Promise<CategoryEntity> {
    return this.categoryRepository.findByIdOrFail(id);
  }
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findAllCounts(filters?: FilterDto): Promise<CountCodeId[]> {
    const categories = await this.findAll({ order: 'ASC' });
    const counts = await this.categoryRepository.findCounts(filters);
    const data = [] as CountCodeId[];
    categories.forEach((category) => {
      data.push({
        code: category.code,
        count: counts.find((count) => count.id === category.id)?.count ?? 0,
        id: category.id,
      });
    });
    return data;
  }

  findAll(order: Record<string, string> = {}): Promise<CategoryEntity[]> {
    return this.categoryRepository.find({
      order,
    });
  }

  findByCodes(codes: string[]): Promise<CategoryEntity[]> {
    return this.categoryRepository.find({
      where: {
        code: In(codes),
      },
    });
  }
}
