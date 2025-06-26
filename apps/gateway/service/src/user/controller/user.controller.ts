import {
  Controller,
  Get,
  UseGuards,
  Put,
  Query,
  Body,
  Headers,
  Param,
  Logger
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UserProfileRO } from '../response/user-profile.ro';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../entity/user.entity';
import { userToUserProfileRO } from '../mapper/user.mapper';
import { UserService } from '../service/user.service';
import { SuccessRO } from '../../common/response/success.ro';
import { plainToClass } from 'class-transformer';
import { EditUserNotificationDto } from '../request/dto/edit-user-notifications.dto';
import { editUserNotification } from '../request/schema/edit-user-notifications.schema';
import { ValidationPipe, BaseAuthGuard } from '@ourloop/shared';
import { findLocationsByPhraseSchema } from '../request/schema/find-locations-by-phrase.schema';
import { FindLocationsByPhraseDTO } from '../request/dto/find-locations-by-phrase.dto';
import { LANGUAGES_CONSTANTS } from '../../common/constant/languages.constants';
import { LocationRO } from '../response/locations.ro';
import { locationsMapper } from '../mapper/locations.mapper';
import { CountryByIpRO } from '../response/county-by-ip.ro';
import { Ip } from '../../user/ip.decorator';
import { findLocationsByCoordinatesSchema } from '../request/schema/find-locations-by-coordinates.schema';
import { FindLocationsByCoordinatesDTO } from '../request/dto/find-locations-by-coordinates.dto';
import { arrayIncludeAnotherArrayItem } from '../../common/helpers';
import { EditUserDataDto } from '../request/dto/edit-user-data.dto';
import { editUserData } from '../request/schema/edit-user-data.schema';
import { UserOrganisationRO } from '../response/user-organisation.ro';
import { ModeratorGuard } from '../../auth/moderator.guard';
import { Reflector } from '@nestjs/core';
import { EmailValidationPipe } from '../../common/pipe/email-validation.pipe';
import { SubscriptionService } from '../../subscription/service/subscription.service';
import { AirTableUserService } from '../../airtable-client/service/airtable-user.service';
import { MessagePattern } from '@nestjs/microservices';
import { sendInvitationToUserSchema } from '../request/schema/send-invitation-to-user.schema';
import { sendInvitationToUserDTO } from '../request/dto/send-invitation-to-user.dto';
import { OrganisationService } from '../../organisation/organisation.service';
import { editUserHideLastName } from '../request/schema/edit-user-hide-last-name.schema';
import { EditUserHideLastName } from '../request/dto/edit-user-hide-last-name.dto';
import { UserHideLastNameRO } from '../response/user-hide-last-name.ro';
import { PermissionsCerbos } from '../../auth/cerbos/permission.decorator';
import { CERBOS_ACTIONS, CERBOS_RESOURCES } from '../../auth/cerbos/permission.enum';
import { PermissionGuard } from '../../auth/cerbos/permission.guard';

// @UseGuards(AuthGuard('cognito'), PermissionGuard)
// @PermissionsCerbos(CERBOS_ACTIONS.READ, CERBOS_RESOURCES.USER)

@ApiTags('User')
@Controller('user')
export class UserController {
  private readonly logger = new Logger('UserController');
  constructor(
    private readonly userService: UserService,
    private readonly subscriptionService: SubscriptionService,
    private readonly airTableUserService: AirTableUserService,
    private readonly organisationService: OrganisationService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @ApiResponse({ status: 200, type: UserProfileRO })
  @ApiOperation({ summary: 'Get my profile' })
  @Get('/me')
  async profile(@Auth(false) user: UserEntity): Promise<UserProfileRO> {
    const userData = await this.userService.findById(user.id, [
      'organisation',
      'organisationApplication',
    ]);
    const tokenData =
      await this.subscriptionService.getUserSubscriptionToken(userData);

    return userToUserProfileRO(userData, tokenData?.decodedToken);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Update user data' })
  @Put()
  async updateUserData(
    @Auth(false) user: UserEntity,
    @Body(new ValidationPipe(editUserData))
    data: EditUserDataDto,
  ): Promise<SuccessRO> {
    const {
      consents,
      organisationApplicationId,
      optin_marketing,
      ...userData
    } = data;

    const result = await this.userService.updateUserData(
      userData,
      user.id,
      optin_marketing,
      consents,
      organisationApplicationId,
      user.email,
    );

    return plainToClass(SuccessRO, { success: !!result.affected });
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Update user notifications' })
  @Put('/notifications')
  async updateUserNotification(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(editUserNotification))
    data: EditUserNotificationDto,
  ): Promise<SuccessRO> {
    const res = await this.userService.updateUserNotification(data, user.id);

    return plainToClass(SuccessRO, { success: !!res.affected });
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @ApiResponse({ status: 200, type: SuccessRO })
  @ApiOperation({ summary: 'Update user hide last name' })
  @Put('/hide-last-name')
  async updateHideLastName(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(editUserHideLastName))
    data: EditUserHideLastName,
  ): Promise<UserHideLastNameRO> {
    return plainToClass(
      UserHideLastNameRO,
      await this.userService.updateUserHideLastName(data, user.id),
    );
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
    required: false,
  })
  @ApiResponse({ status: 200, type: LocationRO, isArray: true })
  @ApiOperation({ summary: 'Find location by coordinates' })
  @Get('/location/coordinates')
  async findLocationsByCoordinates(
    @Headers('content-language') language: string,
    @Query(new ValidationPipe(findLocationsByCoordinatesSchema))
    params: FindLocationsByCoordinatesDTO,
  ): Promise<any> {
    const data = await this.userService.findLocationsByCoordinates(
      language,
      params,
    );

    const types = [];
    let index = 1;

    while (index < 4) {
      types.push(`administrative_area_level_${index}`);
      index++;
    }

    return locationsMapper(
      data.results.filter(
        (item) =>
          Array.isArray(item.types) &&
          arrayIncludeAnotherArrayItem(item.types, types),
      ),
    );
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiHeader({
    name: 'content-language',
    enum: LANGUAGES_CONSTANTS,
    required: false,
  })
  @ApiResponse({ status: 200, type: LocationRO, isArray: true })
  @ApiOperation({ summary: 'Find locations by phrase and country' })
  @Get('/location/phrase')
  async findLocationsByPhrase(
    @Headers('content-language') language: string,
    @Query(new ValidationPipe(findLocationsByPhraseSchema))
    params: FindLocationsByPhraseDTO,
  ): Promise<LocationRO[]> {
    const data = await this.userService.findLocationsByPhrase(language, params);

    return locationsMapper(data.predictions);
  }

  @UseGuards(AuthGuard(['anonymous']))
  @ApiResponse({ status: 200, type: CountryByIpRO })
  @ApiOperation({ summary: 'Check country' })
  @Get('/country')
  async checkCountry(@Ip() ipAddress: string): Promise<CountryByIpRO> {
    const result = this.userService.checkCountry(ipAddress);

    return plainToClass(CountryByIpRO, result ?? {});
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'), new ModeratorGuard(new Reflector()))
  @ApiResponse({ status: 200, type: UserOrganisationRO })
  @ApiOperation({ summary: 'Get user organisation' })
  @Get('/:email/organisation')
  async getUserOrganisation(
    @Param('email', new EmailValidationPipe()) email: string,
  ): Promise<UserOrganisationRO> {
    return plainToClass(
      UserOrganisationRO,
      this.userService.getUserOrganisationIdByEmail(email),
    );
  }

  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Import users to airtable' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Get('import-to-airtable')
  async importToAirtable() {
    const result = await this.airTableUserService.importUsersToAirtable();
    return { success: result?.length > 0 };
  }

  @MessagePattern({ cmd: 'sendInvitationToUser' })
  async sendInvitationToUser(
    @Body(
      new ValidationPipe(sendInvitationToUserSchema, { isRpcException: true }),
    )
    data: sendInvitationToUserDTO,
  ): Promise<SuccessRO> {
    const user = await this.userService.findById(data.userId, [
      'organisation',
      'language',
    ]);

    if (!user?.organisation_id) {
      return { success: false };
    }

    const result = await this.organisationService
      .sendUserInvitedNotification(
        [user.organisation],
        [
          {
            email: user.email,
            languageCode: user.language?.code,
            organisationId: user.organisation_id,
          },
        ],
      )
      .then((result) => result[0]);

    return plainToClass(SuccessRO, {
      success: result?.body['Messages'][0].Status === 'success',
    });
  }

  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Update users account status' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Get('update-account-status')
  async updateUsersAccountStatus(): Promise<SuccessRO> {
    const result = await this.userService.updateStatuses();
    return plainToClass(SuccessRO, {
      success:
        result.length > 0 ? result.every((user) => user.accountStatus) : false,
    });
  }
}
