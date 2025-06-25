import { ExecutionContext } from '@nestjs/common';
import { getUsersByRole } from '../entity/user.mock';
import { faker } from '@faker-js/faker';

export const authGuardMock = {
  canActivate: async (context: ExecutionContext): Promise<boolean> => {
    const request = context.switchToHttp().getRequest();
    const userRole = Number(request.headers.authorization);

    if (Number.isInteger(userRole)) {
      const users = await getUsersByRole(userRole);

      request.user = {
        role: userRole,
        id: users[0].id,
        nickname: faker.person.fullName(),
      };
    }

    return true;
  },
};
