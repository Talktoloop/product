import { addStory } from '../entity/story.mock';
import { faker } from '@faker-js/faker';
import { AGE_VALUE, GENDER_VALUE } from '../../src/common/types';
import { STORY_STATUS, COMMENT_STATUS } from '@ourloop/shared';
import { getRandomCountry } from '../entity/country.mock';
import { initializeDataset as initializeCountryDataset } from './country';
import { StoryEntity } from '../../src/story/entity/story.entity';
import {
  getOrganizations,
  getRandomOrganization,
} from '../entity/organization.mock';
import { addUsers, getUserByOrganizationId } from '../entity/user.mock';
import { addDays, subDays } from 'date-fns';
import { getDifficulties } from '../entity/difficulty.mock';
import getRandomDifficulty from '../../src/migrations/utils/get-random-difficulty';
import { getCategories } from '../entity/category.mock';
import { CASE_STATUS } from '../../src/airtable-client/constant/case-status.constant';
import { addSyncData } from '../entity/airtable.mock';
import { getKeyByValue } from '../../src/common/helpers';
import { ALLEGATION_TYPE_TEXT } from '../../src/airtable-client/constant/allegation-type.constant';
import { URGENT } from '../../src/airtable-client/constant/urgent.constant';
import { GENDER_TEXT } from '../../src/airtable-client/constant/gender.constant';
import { CaseSyncAuthorPerspectiveEntity } from '../../src/airtable-client/entity/case-sync-author-perspective.entity';
import { AUTHOR_PERSPECTIVE } from '../../src/airtable-client/constant/author-perspective.constant';
import { CASE_ACCOUNTABILITY } from '../../src/airtable-client/constant/case-accountability.constant';
import { ASSISTANCE_RENDERED } from '../../src/airtable-client/constant/assistance-rendered.constant';
import { THEMATIC } from '../../src/airtable-client/constant/thematic.constant';
import { getThematics } from '../entity/thematic.mock';
import { CaseSyncThematicAreaEntity } from '../../src/airtable-client/entity/case-sync-thematic-area.entity';
import { addRecipient } from '../entity/story-recipient.mock';

export const initializeDataset = async (): Promise<{
  stories: StoryEntity[];
}> => {
  const organizations = await getOrganizations();
  const phrase = faker.lorem.sentence();
  const stories = [];
  const countries = (await initializeCountryDataset()).countries;
  const categories = await getCategories();
  const thematics = await getThematics();
  const organisation = getRandomOrganization(organizations);
  await addUsers();
  const dateStart = new Date();

  const author = await getUserByOrganizationId(organisation.id);
  const difficulties = await getDifficulties();
  const recipient = await addRecipient({});

  const comments = [
    {
      status: COMMENT_STATUS.PUBLISHED,
      author,
      publishedAt: addDays(dateStart, 1),
    },
    {
      status: COMMENT_STATUS.REJECTED,
      author,
    },
    {
      status: COMMENT_STATUS.PUBLISHED,
      author: null,
      publishedAt: dateStart,
    },
  ];

  const commentsWithoutOragnisation = [
    {
      status: COMMENT_STATUS.PUBLISHED,
      author: null,
      publishedAt: addDays(dateStart, 2),
    },
    {
      status: COMMENT_STATUS.PENDING_REVIEW,
      author: null,
    },
  ];

  stories.push(
    await addStory(
      {
        content: `${faker.lorem.sentence()} ${phrase}`,
        status: STORY_STATUS.PUBLISHED,
        countryId: getRandomCountry(countries).id,
        publishedAt: subDays(dateStart, 31),
        recipientId: recipient.id,
      },
      {
        organizations: [
          organisation,
          getRandomOrganization(organizations),
          getRandomOrganization(organizations),
        ],
        comments,
        author,
        categories: [categories[0], categories[1]],
        storyRecipient: recipient,
      },
    ),
    await addStory(
      {
        content: `${faker.lorem.sentence()} ${phrase}`,
        status: STORY_STATUS.PUBLISHED,
        countryId: getRandomCountry(countries).id,
        publishedAt: dateStart,
        recipientId: recipient.id,
      },
      {
        comments: commentsWithoutOragnisation,
        difficulties: [getRandomDifficulty(difficulties)],
        categories: [categories[1], categories[2]],
        storyRecipient: recipient,
      },
    ),
    await addStory(
      {
        content: `${faker.lorem.sentence()} ${phrase}`,
        status: STORY_STATUS.PUBLISHED,
        countryId: getRandomCountry(countries).id,
        publishedAt: dateStart,
        recipientId: recipient.id,
      },
      {
        categories: [categories[1], categories[2]],
        storyRecipient: recipient,
      },
    ),
    await addStory(
      {
        content: `${faker.lorem.sentence()} ${phrase}`,
        status: STORY_STATUS.SENT_TO_CASE_MANAGER,
        countryId: getRandomCountry(countries).id,
        publishedAt: dateStart,
        isSensitive: true,
        recipientId: recipient.id,
      },
      {
        comments: [...commentsWithoutOragnisation, ...comments],
        categories,
        difficulties: [getRandomDifficulty(difficulties)],
        organizations: [
          organisation,
          getRandomOrganization(organizations),
          getRandomOrganization(organizations),
          getRandomOrganization(organizations),
        ],
        thematics: [thematics[0], thematics[16]],
        storyRecipient: recipient,
      },
    ),
  );

  await addSyncData([
    {
      caseUUID: faker.string.uuid(),
      storyCreated: new Date(),
      caseClosed: addDays(new Date(), 10),
      caseStatus: CASE_STATUS.closed,
      caseCreated: new Date(),
      urgency: getKeyByValue(URGENT, 0),
      allegationType: ALLEGATION_TYPE_TEXT.SEAH,
      survivorGender: GENDER_TEXT.female,
      authorPerspective: [
        new CaseSyncAuthorPerspectiveEntity({
          authorPerspective: AUTHOR_PERSPECTIVE.friendOrRelativeOfSurvivor,
        }),
        new CaseSyncAuthorPerspectiveEntity({
          authorPerspective: AUTHOR_PERSPECTIVE.organisationPersonnel,
        }),
      ],
      survivorAge: '60+',
      organisationType: null,
      hasTheSurvivorBeenRenderedAssistance: ASSISTANCE_RENDERED.assistanceNA,
      caseAccountability: CASE_ACCOUNTABILITY.processAndRefer,
      thematicArea: [
        new CaseSyncThematicAreaEntity({
          thematicArea: THEMATIC['1. Health'],
        }),
      ],
    },
    {
      caseClosed: addDays(new Date(), 20),
      caseUUID: faker.string.uuid(),
      storyCreated: new Date(),
      caseStatus: CASE_STATUS.closed,
      caseCreated: new Date(),
      allegationType: ALLEGATION_TYPE_TEXT.SEAH,
      survivorGender: GENDER_TEXT.female,
      authorPerspective: [
        new CaseSyncAuthorPerspectiveEntity({
          authorPerspective: AUTHOR_PERSPECTIVE.organisationPersonnel,
        }),
      ],
      survivorAge: 'No answer',
      hasTheSurvivorBeenRenderedAssistance: ASSISTANCE_RENDERED.yes,
      caseAccountability: CASE_ACCOUNTABILITY.completeInvestigation,
      thematicArea: [
        new CaseSyncThematicAreaEntity({
          thematicArea: THEMATIC['2. Food security'],
        }),
      ],
    },
    {
      caseUUID: faker.string.uuid(),
      storyCreated: new Date(),
      caseStatus: CASE_STATUS.open,
      caseCreated: new Date(),
      allegationType: ALLEGATION_TYPE_TEXT.SEAH,
      survivorGender: GENDER_TEXT.female,
      authorPerspective: [
        new CaseSyncAuthorPerspectiveEntity({
          authorPerspective: AUTHOR_PERSPECTIVE.organisationPersonnel,
        }),
      ],
      survivorAge: 'No answer',
      hasTheSurvivorBeenRenderedAssistance: ASSISTANCE_RENDERED.yes,
      caseAccountability: CASE_ACCOUNTABILITY.completeInvestigation,
      thematicArea: [],
    },
  ]);

  return { stories };
};

type EnumType = typeof AGE_VALUE | typeof GENDER_VALUE;

export const getEnumSize = (Enum: EnumType): number => {
  let size = 0;
  for (const element in Enum) {
    if (isNaN(Number(element))) {
      size++;
    }
  }
  return size;
};
