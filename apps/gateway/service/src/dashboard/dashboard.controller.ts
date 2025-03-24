import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../auth/moderator.guard';
import { ValidationPipe } from '@ourloop/shared';
import { IncomingStoriesAndCommentsRO } from './response/incoming-stories-and-comments.ro';
import { OutgoingCommentsRO } from './response/outgoing-comments.ro';
import { DashboardService } from './dashboard.service';
import { DashboardFilterDTO } from './request/dto/dashboard-filter.dto';
import { dashboardFilterSchema } from './request/schema/dashboard-filter.schema';
import { IncomingDataDashboardFilterDTO } from './request/dto/incoming-data-dashboard-filter.dto';
import { PermissionGuard } from '../auth/cerbos/permission.guard';
import { PermissionsCerbos } from '../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../auth/cerbos/permission.enum';

@UseGuards(AuthGuard('cognito'), PermissionGuard)
@ApiTags('Dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) { }

  @ApiOperation({
    summary: 'Get number of incoming stories and incoming comments',
  })
  @ApiResponse({ status: 200, type: IncomingStoriesAndCommentsRO })
  @Get('quantity/incoming')
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.STORY)
  async getNumberOfIncomingStoriesAndComments(
    @Query(new ValidationPipe(dashboardFilterSchema))
    params: IncomingDataDashboardFilterDTO,
  ): Promise<IncomingStoriesAndCommentsRO> {
    return plainToClass(
      IncomingStoriesAndCommentsRO,
      await this.dashboardService.getNumberOfIncomingStoriesAndComments(params),
    );
  }

  @ApiOperation({
    summary: 'Get number of outgoing comments',
  })
  @ApiResponse({ status: 200, type: OutgoingCommentsRO })
  @Get('quantity/outgoing')
  @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.COMMENT)
  async getNumberOfOutgoingComments(
    @Query(new ValidationPipe(dashboardFilterSchema))
    params: DashboardFilterDTO,
  ): Promise<OutgoingCommentsRO> {
    return plainToClass(
      OutgoingCommentsRO,
      await this.dashboardService.getNumberOfOutgoingComments(params),
    );
  }
}
