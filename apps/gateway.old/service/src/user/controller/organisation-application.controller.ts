import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../entity/user.entity';
import { OrganisationApplicationService } from '../service/organisation-application.service';
import { SuccessRO } from '../../common/response/success.ro';
import { plainToClass } from 'class-transformer';
import { ValidationPipe } from '@ourloop/shared';
import { AddOrganisationApplicationDto } from '../request/dto/add-organisation-application.dto';
import { addOrganisationApplication } from '../request/schema/add-organisation-application.schema';
import { UserService } from '../service/user.service';

@ApiTags('User Applications')
@Controller('user/application')
export class OrganisationApplicationController {
  constructor(
    private readonly userService: UserService,
    private readonly organisationApplicationService: OrganisationApplicationService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Apply to the organization' })
  @Post()
  async addOrganisationApplication(
    @Auth(false) user: UserEntity,
    @Body(new ValidationPipe(addOrganisationApplication))
    data: AddOrganisationApplicationDto,
  ): Promise<SuccessRO> {
    user = await this.userService.findById(user.id, [
      'organisationApplication',
    ]);

    if (user.organisationApplication) {
      await this.organisationApplicationService.removeApplicationById(
        user.organisationApplication.id,
      );
    }

    const application = await this.organisationApplicationService.saveApplication(
      user.id,
      data.organisationId,
    );

    return plainToClass(SuccessRO, { success: !!application?.id });
  }
}
