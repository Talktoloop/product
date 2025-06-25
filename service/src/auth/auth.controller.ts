import {
  BadRequestException,
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StatusRO } from '../common/response/status';
import { ValidationPipe, USER_NOT_FOUND } from '@ourloop/shared';
import { userIsConfirmedSchema } from '../user/request/schema/user-is-confirmed.schema';
import { UserIsConfirmedDTO } from '../user/request/dto/user-is-confirmed.dto';
import { AuthService } from './auth.service';
import { plainToClass } from 'class-transformer';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard(['anonymous']))
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Get confirmation status' })
  @ApiResponse({ status: 200, type: StatusRO })
  @Get('confirmation')
  async getEmailConfirmation(
    @Query(new ValidationPipe(userIsConfirmedSchema))
    params: UserIsConfirmedDTO,
  ): Promise<StatusRO> {
    const accountDetails = await this.authService
      .getAccountDetails(params.email)
      .catch((error) => {
        if (error.code === 'UserNotFoundException') {
          throw new BadRequestException(USER_NOT_FOUND);
        }

        throw error;
      });
    const status = accountDetails.UserStatus !== 'UNCONFIRMED';

    return plainToClass(StatusRO, { status });
  }
}
