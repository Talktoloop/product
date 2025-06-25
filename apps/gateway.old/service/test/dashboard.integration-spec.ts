import { INestApplication } from '@nestjs/common';
import supertest from 'supertest';
import { getAppInstance } from './mocks/app.mock';
import { initializeDataset } from './helpers/dashboard';
import { clearDatabase } from './helpers';
import { ROLE } from '../src/user/constant/role.constant';
import { COMMENT_STATUS, STORY_STATUS } from '@ourloop/shared';
import { StoryEntity } from '../src/story/entity/story.entity';
import { CommentEntity } from '../src/comment/entity/comment.entity';
import config from '../src/config/typeorm';
import { getConnection } from '../src/common/helpers';
import { DataSource } from 'typeorm';

describe('DashboardController (integration)', () => {
  let app: INestApplication;
  let api: supertest.SuperTest<supertest.Test>;
  let connection: DataSource;

  let dataset: any;

  beforeAll(async () => {
    app = await getAppInstance();
    api = supertest(app.getHttpServer());
    connection = await getConnection(config);

    await clearDatabase();
    dataset = await initializeDataset();
  });

  afterAll(async () => {
    await connection.destroy();

    app.close();
  });

  describe('/quantity/incoming (GET)', () => {
    it('Should return number of incoming stories and comments, return status 200 and valid body', async () => {
      return api
        .get('/dashboard/quantity/incoming')
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .then((res) => {
          expect(res.status).toBe(200);

          for (const field of ['numberOfStories', 'numberOfComments']) {
            expect(res.body).toHaveProperty(field);
          }

          expect(res.body.numberOfStories).toBe(
            dataset.stories.filter(
              (story: StoryEntity) =>
                ![
                  STORY_STATUS.PUBLISHED,
                  STORY_STATUS.REJECTED,
                  STORY_STATUS.CONDITIONALLY_REJECTED,
                  STORY_STATUS.SENT_TO_CASE_MANAGER,
                ].includes(story.status as STORY_STATUS),
            ).length,
          );

          expect(res.body.numberOfComments).toBe(
            dataset.comments.filter(
              (comment: CommentEntity) =>
                ![
                  COMMENT_STATUS.PUBLISHED,
                  COMMENT_STATUS.REJECTED,
                  COMMENT_STATUS.CONDITIONALLY_REJECTED,
                  COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
                  COMMENT_STATUS.PENDING_RECORDING,
                ].includes(comment.status as COMMENT_STATUS),
            ).length,
          );
        });
    });
  });

  describe('/quantity/outgoing (GET)', () => {
    it('Should return number of outgoing comments, return status 200 and valid body', async () => {
      return api
        .get('/dashboard/quantity/outgoing')
        .set('Authorization', String(ROLE.MODERATOR))
        .send()
        .then((res) => {
          expect(res.status).toBe(200);

          for (const field of [
            'numberOfPendingRecordingComments',
            'numberOfScheduledComments',
          ]) {
            expect(res.body).toHaveProperty(field);
          }

          expect(res.body.numberOfPendingRecordingComments).toBe(
            dataset.comments.filter(
              (comment: CommentEntity) =>
                comment.status === COMMENT_STATUS.PENDING_RECORDING,
            ).length,
          );

          expect(res.body.numberOfScheduledComments).toBe(
            dataset.comments.filter(
              (comment: CommentEntity) =>
                comment.status === COMMENT_STATUS.PUBLISHED_AND_PENDING_CALL,
            ).length,
          );
        });
    });
  });
});
