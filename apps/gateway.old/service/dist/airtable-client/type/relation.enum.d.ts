import { CaseSyncAllegationReferralEntity } from '../entity/case-sync-allegation_referral.entity';
import { CaseSyncAuthorPerspectiveEntity } from '../entity/case-sync-author-perspective.entity';
import { CaseSyncThematicAreaEntity } from '../entity/case-sync-thematic-area.entity';
import { CaseSyncThematicAreaSubsectionEntity } from '../entity/case-sync-thematic-area-subsection.entity';
import { CaseSyncSurvivorDisabilityEntity } from '../entity/case-sync-survivor-disability.entity';
import { CaseSyncInvestigationEntity } from '../entity/case-sync-investigation.entity';
import { CaseSyncAllegationReferralOrganisationEntity } from '../entity/case-sync-allegation_referral_organisation.entity';
export type CaseRelations = CaseSyncAuthorPerspectiveEntity | CaseSyncThematicAreaEntity | CaseSyncThematicAreaSubsectionEntity | CaseSyncSurvivorDisabilityEntity | CaseSyncInvestigationEntity | CaseSyncAllegationReferralEntity | CaseSyncAllegationReferralOrganisationEntity;
