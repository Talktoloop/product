import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DifficultyService } from '../service/difficulty.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LexiconRO } from '../response/lexicon.ro';
import { filterSchema } from '../../common/request/schema/filter.schema';
import { FilterDto } from '../../common/dto/filter.dto';
import { ValidationPipe } from '@ourloop/shared';
import { isEmpty, updateThematicFilters } from '../../common/helpers';
import { ThematicService } from '../service/thematic.service';
import { CountCodeId } from '../../statistic/interfaces/code-count-id.interface';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Difficulty')
@Controller('difficulty')
export class DifficultyController {
  constructor(
    private readonly difficultyService: DifficultyService,
    private readonly thematicService: ThematicService,
  ) {}

  @ApiOperation({ summary: 'Get list of difficulties' })
  @ApiResponse({ status: 200, type: LexiconRO, isArray: true })
  @Get()
  async getListOfOrganisations(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<CountCodeId[]> {
    if (!isEmpty(filters)) {
      filters = await updateThematicFilters(filters, this.thematicService);
    }
    return await this.difficultyService.findAllCounts(filters);
  }
}
