import {
  Controller,
  Body,
  Post,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBasicAuth,
} from '@nestjs/swagger';
import { SubscriptionService } from '../service/subscription.service';
import { SuccessRO } from '../../common/response/success.ro';
import { ValidationPipe, BaseAuthGuard } from '@ourloop/shared';
import { subscriptionAccessSchema } from '../request/schema/subscription-access.schema';
import { SubscriptionAccessDTO } from '../request/dto/subscription-access.dto';
import { AuthGuard } from '@nestjs/passport';
import { Auth } from '../../auth/auth.decorator';
import { UserEntity } from '../../user/entity/user.entity';
import { SubscriptionTokenRO } from '../response/subscription-token.ro';
import { generateTokenSchema } from '../request/schema/generate-token.schema';
import { GenerateTokenDTO } from '../request/dto/generate-token.dto';
import { plainToClass } from 'class-transformer';
import { sendTokenSchema } from '../request/schema/send-token.schema';
import { SendTokenDTO } from '../request/dto/send-token.dto';
import { UserService } from '../../user/service/user.service';
import { USER_NOT_FOUND, SUBSCRIPTION_TOKEN_NOT_FOUND } from '@ourloop/shared';
import { SUBSCRIPTION_TYPE } from '../constant/subscription-type.constant';

@ApiTags('Subscription')
@Controller('subscription')
export class SubscriptionController {
  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly userService: UserService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('cognito'))
  @Post('request')
  @ApiOperation({ summary: 'Send email with subscription request' })
  @ApiResponse({ status: 200, type: SuccessRO })
  async sendEmailWithSubscriptionRequest(
    @Auth() user: UserEntity,
    @Body(new ValidationPipe(subscriptionAccessSchema))
    params: SubscriptionAccessDTO,
  ): Promise<SuccessRO> {
    const { access } = params;

    const application =
      await this.subscriptionService.saveSubscriptionApplication(
        user.id,
        access,
        SUBSCRIPTION_TYPE.PREMIUM,
      );

    const result =
      await this.subscriptionService.sendEmailWithSubscriptionRequest(
        user,
        access,
      );

    return { success: !!(application && result) };
  }

  @ApiBasicAuth()
  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Generate subscription user token' })
  @ApiResponse({ status: 200, type: SubscriptionTokenRO })
  @Post('generate-token')
  async generateSubscriptionToken(
    @Body(new ValidationPipe(generateTokenSchema))
    data: GenerateTokenDTO,
  ): Promise<SubscriptionTokenRO> {
    return plainToClass(
      SubscriptionTokenRO,
      await this.subscriptionService.generateSubscriptionToken(data),
    );
  }

  @ApiBasicAuth()
  @UseGuards(BaseAuthGuard)
  @ApiOperation({ summary: 'Send subscription user token by email' })
  @ApiResponse({ status: 200, type: SuccessRO })
  @Post('send-token')
  async sendSubscriptionToken(
    @Body(new ValidationPipe(sendTokenSchema))
    data: SendTokenDTO,
  ): Promise<SuccessRO> {
    const user = await this.userService.findByEmail(data.email, ['language']);

    if (!user) {
      throw new BadRequestException(USER_NOT_FOUND);
    }

    const tokenData =
      await this.subscriptionService.getUserSubscriptionToken(user);

    if (!tokenData?.token) {
      throw new BadRequestException(SUBSCRIPTION_TOKEN_NOT_FOUND);
    }

    return this.subscriptionService
      .sendNotificationWithToken(user, tokenData.token)
      .then((result) =>
        plainToClass(SuccessRO, {
          success: result.body['Messages'][0].Status === 'success',
        }),
      );
  }
}
