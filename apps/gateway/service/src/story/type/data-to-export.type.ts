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

// One row per (comment, translation language). Comment text lives in
// story_comment_translation.content; the row is keyed back to a story via
// story_comment.story_id. Replies are comments with a non-null parentCommentId.
export type CommentToExport = {
  commentId: string;
  storyId: string;
  parentCommentId: string | null;
  commentLanguageId: number;
  translationLanguageId: number;
  content: string;
  createdAt: Date;
  // Public author identity only (matches the public comment view): pseudonymous
  // nickname + organisation. No account real names — the export needs no login.
  nickname?: string;
  organisationName?: string;
};

// Per-story count of community reactions (upvotes) from the story_vote table.
export type StoryVoteCountToExport = { storyId: string; count: number };

export type DataToExport = {
  stories: StoryEntity[];
  comments: CommentEntity[];
  commentContents: CommentToExport[];
  voteCounts: StoryVoteCountToExport[];
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
