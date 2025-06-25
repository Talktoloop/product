import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import config from '../config/typeorm';
import { getConnection } from '../common/helpers';
import { LANGUAGE_NOT_FOUND } from '@ourloop/shared';

export const LanguageId = createParamDecorator(
  async (_, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const code = request.headers['content-language'];
    const connection = await getConnection(config);
    const languages: { code: string; id: number }[] = await connection
      .query(`select id, code from language where code = ? or is_default = 1`, [
        code,
      ])
      .catch(() => {
        throw new BadRequestException(LANGUAGE_NOT_FOUND);
      });
    const language = languages.filter((entity) => entity.code === code);

    if (language.length > 0) {
      return language[0].id;
    }

    return languages[0]?.id;
  },
);
