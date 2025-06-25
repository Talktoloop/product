import { REGISTRATION_STATUS } from './../user/constant/registration-status.constant';
import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { USER_HAS_NOT_COMPLETED_REGISTRATION_PROCESS } from '@ourloop/shared';
import { checkRegistrationStatus } from '../common/helpers';

export const Auth = createParamDecorator(
  (registrationIsCompleted = true, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    if (
      user &&
      registrationIsCompleted &&
      checkRegistrationStatus(user) ===
        REGISTRATION_STATUS.REQUIRE_PROFILE_UPDATE
    ) {
      throw new ForbiddenException(USER_HAS_NOT_COMPLETED_REGISTRATION_PROCESS);
    }

    return user;
  },
);
