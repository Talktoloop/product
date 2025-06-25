import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ModeratorService } from '../service/moderators.service';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { ModeratorEntity } from '../entity/moderator.entity';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

//  @UseGuards(AuthGuard('cognito'), PermissionGuard)
//  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.MODERATOR)

@ApiTags('Moderators List')
@Controller('moderators')
export class ModeratorsController {
  constructor(private readonly moderatorService: ModeratorService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
  @ApiOperation({ summary: 'Get list of moderators' })
  @ApiResponse({ status: 200, type: ModeratorEntity, isArray: true })
  @Get()
  async getListOfModerators(
  ): Promise<Record<string, string>[]> {
    return await this.moderatorService.findAllModerators()
  }
}
