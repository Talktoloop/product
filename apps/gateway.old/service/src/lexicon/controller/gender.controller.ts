import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@ourloop/shared';
import { isEmpty, updateThematicFilters } from '../../common/helpers';
import { FilterDto } from '../../common/dto/filter.dto';
import { filterSchema } from '../../common/request/schema/filter.schema';
import { IdWithCounterRO } from '../response/id-with-counter.ro';
import { GenderService } from '../service/gender.service';
import { ThematicService } from '../service/thematic.service';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Gender')
@Controller('gender')
export class GenderController {
  constructor(
    private readonly genderService: GenderService,
    private readonly thematicService: ThematicService,
  ) {}

  @ApiOperation({ summary: 'Get list of gender values' })
  @ApiResponse({ status: 200, type: IdWithCounterRO, isArray: true })
  @Get()
  async getListOfGenderValues(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<IdWithCounterRO[]> {
    if (!isEmpty(filters)) {
      filters = await updateThematicFilters(filters, this.thematicService);
    }

    return this.genderService.findAllCounts(filters);
  }
}
