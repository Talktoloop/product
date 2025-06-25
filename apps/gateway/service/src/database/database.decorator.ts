import { SetMetadata } from '@nestjs/common';

export const ENTITY_REPOSITORY = 'ENTITY_REPOSITORY';

export function EntityRepository(entity: any): ClassDecorator {
  return SetMetadata(ENTITY_REPOSITORY, entity);
}
