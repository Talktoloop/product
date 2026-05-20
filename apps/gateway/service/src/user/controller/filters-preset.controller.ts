import { Controller, Get, Post, Query, Body, UseGuards, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FiltersPresetService } from '../service/filters-preset.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatePresetDTO, UpdatePresetDTO } from '../request/dto/add-user-preset-data.dto';
import { UserEntity } from '../entity/user.entity';
import { Auth } from '../../auth/auth.decorator';
import { instanceToPlain } from 'class-transformer';

@ApiTags('Preset Filters')
@Controller('filters-preset')
export class FiltersPresetController {
  constructor(private readonly presetFiltersService: FiltersPresetService) {}

  @ApiOperation({ summary: 'Get user preset-filters' })
  @ApiResponse({ status: 200, type: Array })
  @UseGuards(AuthGuard('cognito'))
  @Get()
  async getUserPresetFilters(
    @Auth() user: UserEntity
  ) {
    const userId = user.id;
    const presets = await this.presetFiltersService.getPresetFilters(userId);
    return instanceToPlain(presets);
  }

  @ApiOperation({ summary: 'Create user preset-filters' })
  @ApiResponse({ status: 201 })
  @UseGuards(AuthGuard('cognito'))
  @Post('create')
  async createUserPresetFilters(
    @Auth() user: UserEntity,
    @Body() data: CreatePresetDTO,
  ) {
    const userId = user.id;
    return await this.presetFiltersService.createUserPresetFilters(userId, data.filters, data.presetName);
  }

  @ApiOperation({ summary: 'Share user filters-preset' })
  @ApiResponse({ status: 201 })
  @UseGuards(AuthGuard('cognito'))
  @Post('share')
  async shareUserPresetFilters(
    @Auth() user: UserEntity,
    @Body('presetId') presetId: string,
  ) {
    const userOrganisationId = user.organisation_id;
    return await this.presetFiltersService.shareUserPresetFilters(presetId, userOrganisationId);
  }

  @ApiOperation({ summary: 'Update user filters-preset' })
  @ApiResponse({ status: 201 })
  @Post('update')
  async updateUserPresetFilters(
    @Body() filtersData: UpdatePresetDTO,
  ) {
    const { presetId, filters } = filtersData;
    return await this.presetFiltersService.updateUserPresetFilters(presetId, filters);
  }


  @ApiOperation({ summary: 'Remove user preset-filters' })
  @ApiResponse({ status: 200 })
  @UseGuards(AuthGuard('cognito'))
  @Delete('delete')
  async deleteUserPresetFilters(
    @Auth() user: UserEntity,
    @Query('presetId') presetId: string,
  ) {
    const userId = user.id;
    return await this.presetFiltersService.deleteUserPresetFilters(userId, presetId);
  }
}