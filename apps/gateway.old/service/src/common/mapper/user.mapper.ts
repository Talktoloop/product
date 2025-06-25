import { UserEntity } from '../../user/entity/user.entity';
import { UserCommentDetailsRO } from '../../user/response/user-comment-details.ro';
import { plainToClass } from 'class-transformer';

export const formatUser = (
  user: UserEntity | { organisation: { name: string } },
): UserCommentDetailsRO & { organisation: string } => {
  return {
    ...plainToClass(UserCommentDetailsRO, { ...user }),
    ...{ organisation: user?.organisation?.name ?? null },
  };
};
