import { plainToClass } from 'class-transformer';
import { UserEntity } from '../entity/user.entity';
import { UserProfileRO } from '../response/user-profile.ro';
import { OrganisationRO } from '../../organisation/response/organisation.ro';
import { checkRegistrationStatus } from '../../common/helpers';
import { SubscriptionToken } from '../../subscription/type/subscription-token.type';
import { format } from 'date-fns';

export const userToUserProfileRO = (
  user: UserEntity,
  token: SubscriptionToken,
): UserProfileRO =>
  plainToClass(UserProfileRO, {
    ...user,
    registrationStatus: checkRegistrationStatus(user),
    organisation: plainToClass(OrganisationRO, user.organisation),
    plan: token?.plan ?? null,
    validityTimeInDays: token?.exp
      ? Math.ceil((token?.exp - parseInt(format(new Date(), 't'))) / 86400)
      : null,
  });
