import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from '../user/entity/user.entity';
import { ROLE } from '../user/constant/role.constant';

@Injectable()
export class ModeratorGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const user: UserEntity = context.switchToHttp().getRequest().user;

    if (user.role >= ROLE.MODERATOR) {
      return true;
    } else {
      return false;
    }
  }
}
