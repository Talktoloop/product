import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '@ourloop/shared';
import { FilterDto } from '../../common/dto/filter.dto';
import { filterSchema } from '../../common/request/schema/filter.schema';
import { CountCodeIdWithChildren } from '../../statistic/interfaces/code-count-id.interface';
import { ThematicRO } from '../response/thematic.ro';
import { ThematicService } from '../service/thematic.service';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Thematic')
@Controller('thematic')
export class ThematicController {
  constructor(private readonly thematicService: ThematicService) {}

  @ApiOperation({ summary: 'Get list of thematic area' })
  @ApiResponse({ status: 200, type: ThematicRO, isArray: true })
  @Get()
  async getListOfThematicAreas(
    @Query(new ValidationPipe(filterSchema)) filters: FilterDto,
  ): Promise<CountCodeIdWithChildren[]> {
    return this.thematicService.findAllCounts(filters);
  }
}
