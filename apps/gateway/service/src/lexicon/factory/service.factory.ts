import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { ThematicEntity } from '../entity/thematic.entity';
import { RejectReasonEntity } from '../entity/reject-reason.entity';
import { MaternityStatusEntity } from '../entity/maternity-status.entity';
import { DifficultyEntity } from '../entity/difficulty.entity';

export interface LexiconServiceFactory {
  findAll(): Promise<
    (
      | OrganisationEntity
      | ThematicEntity
      | RejectReasonEntity
      | MaternityStatusEntity
      | DifficultyEntity
    )[]
  >;
  findByIdOrFail(
    id: number | string,
  ): Promise<
    | OrganisationEntity
    | ThematicEntity
    | RejectReasonEntity
    | MaternityStatusEntity
    | DifficultyEntity
  >;
}
