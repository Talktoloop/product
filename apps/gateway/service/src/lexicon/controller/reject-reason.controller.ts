import { Controller, Get, UseGuards } from '@nestjs/common';
import { RejectReasonService } from '../service/reject-reason.service';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { LexiconRO } from '../response/lexicon.ro';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { RejectReasonEntity } from '../entity/reject-reason.entity';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.REJECT_REASON)

@ApiTags('Reject reason')
@Controller('reject_reason')
export class RejectReasonController {
  constructor(private readonly rejectReasonService: RejectReasonService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
  @ApiOperation({ summary: 'Get list of reject reasons' })
  @ApiResponse({ status: 200, type: LexiconRO, isArray: true })
  @Get()
  async getListOfOrganisations(): Promise<RejectReasonEntity[]> {
    return await this.rejectReasonService.findAll();
  }
}
