import { Body, Controller, Post, UseGuards, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags, ApiHeader } from '@nestjs/swagger';
import { ValidationPipe, BaseAuthGuard } from '@ourloop/shared';
import { SuccessRO } from '../common/response/success.ro';
import { AirTableClientService } from './airtable-client.service';
import { AirTableSyncDTO } from './request/dto/air-table-sync.dto';
import { airTableSyncSchema } from './request/schema/air-table-sync.schema';
import { plainToClass } from 'class-transformer';
import { DeleteCasesDTO } from './request/dto/delete-cases.dto';
import { deleteCasesSchema } from './request/schema/delete-cases.schema';
import { airTableDeleteNotSensitiveSchema } from './request/schema/air-table-delete-not-sensitive-story.schema';
import { AirTableDeleteStoryDTO } from './request/dto/air-table-delete-story.dto';

@UseGuards(AuthGuard(['cognito', 'anonymous']))
@ApiTags('AirTable Sync')
@Controller('airtable-client')
@UseGuards(BaseAuthGuard)
@ApiHeader({ name: 'authorization' })
export class AirTableClientController {
  constructor(private readonly airTableClientService: AirTableClientService) {}

  @ApiResponse({ status: 201, type: SuccessRO })
  @ApiOperation({ summary: 'Add or update AirTableRow' })
  @Post()
  async synchronizeARow(
    @Body(new ValidationPipe(airTableSyncSchema))
    data: AirTableSyncDTO,
  ): Promise<SuccessRO> {
    await this.airTableClientService.saveOrUpdateRow(data);
    return { success: true };
  }

  @ApiResponse({ status: 201, type: SuccessRO })
  @ApiOperation({ summary: 'Delete record not sensitive' })
  @Post('not-sensitive')
  async deleteNotSensitiveData(
    @Body(new ValidationPipe(airTableDeleteNotSensitiveSchema))
    data: AirTableDeleteStoryDTO,
  ): Promise<SuccessRO> {
    console.log(data);
    await this.airTableClientService.deleteNotSensitiveData(data);
    return { success: true };
  }

  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Delete AirTableRow' })
  @Delete()
  async removeARows(
    @Body(new ValidationPipe(deleteCasesSchema))
    data: DeleteCasesDTO,
  ): Promise<SuccessRO> {
    const result = await this.airTableClientService.removeRows(data.ids);

    return plainToClass(SuccessRO, {
      success: result?.filter((item) => !!item?.affected).length > 0,
    });
  }
}
