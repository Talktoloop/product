import { OrganisationEntity } from '../../organisation/entity/organisation.entity';
import { LanguageEntity } from '../../language/entity/language.entity';
import { SummaryRO } from '../response/summary.ro';
import { formatISO } from 'date-fns';

export const summaryMapper = (data: {
  organisations: OrganisationEntity[];
  languages: LanguageEntity[];
  storyIds: string[];
  commentIds: string[];
}): SummaryRO => {
  return {
    numberOfOrganisations: data.organisations.length,
    numberOfLanguages: data.languages.length,
    numberOfFeedback: data.storyIds.length,
    numberOfComments: data.commentIds.length,
    currentTime: formatISO(new Date()),
  };
};
