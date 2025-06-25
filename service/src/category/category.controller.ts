import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryRO } from './response/category.ro';
import { CategoryService } from './category.service';
import { filterSchema } from '../common/request/schema/filter.schema';
import { FilterDto } from '../common/dto/filter.dto';
import { ValidationPipe } from '@ourloop/shared';
import { isEmpty, updateThematicFilters } from '../common/helpers';
import { ThematicService } from '../lexicon/service/thematic.service';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly thematicService: ThematicService,
  ) {}
  @ApiOperation({ summary: 'Get list of categories' })
  @ApiResponse({ status: 200, type: CategoryRO, isArray: true })
  @Get()
  async getListOfCategories(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<CategoryRO[]> {
    if (!isEmpty(filters)) {
      filters = await updateThematicFilters(filters, this.thematicService);
    }
    return this.categoryService.findAllCounts(filters);
  }
}
