import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MaternityStatusService } from '../service/maternity-status.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LexiconRO } from '../response/lexicon.ro';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Maternity status')
@Controller('maternity_status')
export class MaternityStatusController {
  constructor(
    private readonly maternintyStatusService: MaternityStatusService,
  ) {}

  @ApiOperation({ summary: 'Get list of maternity status' })
  @ApiResponse({ status: 200, type: LexiconRO, isArray: true })
  @Get()
  async getListOfmaternintyStatus(): Promise<MaternityStatusEntity[]> {
    return await this.maternintyStatusService.findAll();
  }
}
