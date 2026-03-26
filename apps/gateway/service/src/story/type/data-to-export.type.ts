import { CommentEntity } from '../../comment/entity/comment.entity';
import { StoryEntity } from '../entity/story.entity';
import { StoryTranslationEntity } from '../entity/story-translation.entity';
import { AdministrativeDataToExport } from './administrative-data-to-export.type';
import { CategoryEntity } from '../../category/entity/category.entity';
import { CountryEntity } from '../../country/entity/country.entity';
import { StoryRecipientEntity } from '../entity/story-recipient.entity';
import { DifficultyEntity } from '../../lexicon/entity/difficulty.entity';
import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { ThematicEntity } from '../../lexicon/entity/thematic.entity';
import { VulnerabilityFactorsEntity } from '../../lexicon/entity/vulnerability-factors.entity';

export type CategoryToExport = { storyId: string; categoryId: string };
export type DifficultyToExport = { storyId: string; difficultyId: string };
export type OrganisationToExport = { storyId: string; organisationId: string };
export type ThematicAreaToExport = { storyId: string; thematicAreaId: number };
export type StoryRecipientToExport = { storyId: string, storyRecipientId: number, isMinority: boolean}
export type VulnerabilityFactorToExport = { storyId: string; vulnerabilityFactorId: number };

export type DataToExport = {
  stories: StoryEntity[];
  comments: CommentEntity[];
  translations: (StoryTranslationEntity & { storyLanguageId: number })[];
  administrativeData: AdministrativeDataToExport[];
  categories: CategoryEntity[];
  storyCategories: CategoryToExport[];
  countries: CountryEntity[];
  recipients: (StoryRecipientEntity & { storyId: string })[];
  difficulties: DifficultyEntity[];
  storyDifficulties: DifficultyToExport[];
  organisations: OrganisationEntity[];
  storyOrganisations: OrganisationToExport[];
  thematicAreas: ThematicEntity[];
  storyThematicAreas: ThematicAreaToExport[];
  storyRecipients: StoryRecipientToExport[];
  vulnerabilityFactors: VulnerabilityFactorsEntity[];
  storyVulnerabilityFactors: VulnerabilityFactorToExport[];
};
