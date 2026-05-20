import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OrganisationRO } from './response/organisation.ro';
import { organisationsMapper } from './mapper/organisation.mapper';
import { AuthGuard } from '@nestjs/passport';
import { ModeratorGuard } from '../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { CreateOrganisationDto } from './request/dto/create-organisation.dto';
import { createOrganisationSchema } from './request/schema/create-organisation.schema';
import { ValidationPipe } from '@ourloop/shared';
import { IdRo } from './response/id.ro';
import { MessagePattern } from '@nestjs/microservices';
import { SuccessRO } from '../common/response/success.ro';
import { LanguageService } from '../language/language.service';
import { LANGUAGES_CONSTANTS } from '../common/constant/languages.constants';
import { Auth } from '../auth/auth.decorator';
import { UserEntity } from '../user/entity/user.entity';
import { ROLE } from '../user/constant/role.constant';
import { CountryService } from '../country/service/country.service';
import { LinkUsersToOrganisationsDTO } from './request/dto/link-users-to-organisations.dto';
import { linkUsersToOrganisationsSchema } from './request/schema/link-users-to-organisations.schema';
import { StoryService } from '../story/service/story.service';
import {
  STORY_STATUS,
  STORY_INCORRECT_STATUS,
  BaseAuthGuard,
} from '@ourloop/shared';
import { linkedUsersToOrganisationsMapper } from './mapper/linked-users-to-organisations.mapper';
import { LinkedUsersToOrganisationsRO } from './response/linked-users-to-organisations.ro';
import { AirTableOrganisationService } from '../airtable-client/service/airtable-organisation.service';
import { PermissionsCerbos } from '../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../auth/cerbos/permission.enum';
import { PermissionGuard } from '../auth/cerbos/permission.guard';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.CREATE, CERBOS_RESOURCES.ORGANISATION)

@ApiTags('Organisation')
@Controller('organisation')
export class OrganisationController {
  constructor(
    private readonly organisationService: OrganisationService,
    private readonly languageService: LanguageService,
    private readonly countryService: CountryService,
    private readonly storyService: StoryService,
    private readonly airTableOrganisationService: AirTableOrganisationService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard(['cognito', 'anonymous']))
  @ApiOperation({ summary: 'Get list of organisations' })
  @ApiResponse({ status: 200, type: OrganisationRO, isArray: true })
  @Get()
  async getListOfOrganisations(
    @Auth(false) user: UserEntity,
  ): Promise<OrganisationRO[]> {
    const organisations = await this.organisationService.getOrganisationsByRole(
      user?.role,
    );

    return organisationsMapper(organisations);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
  @ApiOperation({ summary: 'Link users to organisations' })
  @ApiResponse({ status: 200, type: LinkedUsersToOrganisationsRO })
  @Post('link-user')
  async linkUsersToOrganisations(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(linkUsersToOrganisationsSchema))
    data: LinkUsersToOrganisationsDTO,
  ): Promise<LinkedUsersToOrganisationsRO> {
    const story = await this.storyService.findById(
      data.storyId,
      STORY_STATUS.PUBLISHED,
    );

    if (!story) {
      throw new BadRequestException(STORY_INCORRECT_STATUS);
    }

    const organisations =
      await this.organisationService.findOrganisationsByIdsAndStatus(
        data.links.map((item) => item.organisationId),
      );
    const linkedUsers = await this.organisationService.linkUsers(
      organisations,
      data.links,
      user,
    );
    const result =
      await this.organisationService.sendNotificationsToLinkedUsers(
        data.storyId,
        user,
        organisations,
        linkedUsers,
      );

    return linkedUsersToOrganisationsMapper(result);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @ApiOperation({ summary: 'Create organisation' })
  @ApiResponse({ status: 200, type: IdRo })
  @Post()
  async createOrganisation(
    @Auth(false) user: UserEntity,
    @Body(new ValidationPipe(createOrganisationSchema))
    body: CreateOrganisationDto,
  ): Promise<IdRo> {
    await this.countryService.findByIdOrFail(body.countryId);

    const { name, countryId, acronym } = body;
    const verified = user.role >= ROLE.MODERATOR;
    const { id } = await this.organisationService.findByNameOrCreate(
      name,
      verified,
      countryId,
      acronym,
    );
    return { id };
  }

  @MessagePattern({ cmd: 'sendNotificationAboutUnansweredStories' })
  async findOrganisationsAndSendNotificationAboutUnansweredStories(): Promise<SuccessRO> {
    const language = await this.languageService.getLanguageByCode(
      LANGUAGES_CONSTANTS.ENGLISH,
    );
    const organizations =
      await this.organisationService.findOrganisationsWithUnasweredStories(
        language.id,
      );

    this.organisationService.sendNotificationAboutUnansweredStories(
      organizations,
    );

    return { success: true };
  }

  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Import organisations to airtable' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Get('import-to-airtable')
  async importToAirtable() {
    const result =
      await this.airTableOrganisationService.importOrganisationsToAirtable();
    return { success: result?.length > 0 };
  }
}
