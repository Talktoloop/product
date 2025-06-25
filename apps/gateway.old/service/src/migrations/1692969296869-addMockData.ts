import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { setDelay } from '@ourloop/shared';
import 'dotenv/config';
import { faker } from '@faker-js/faker';
import getRandomAge from './utils/get-random-age';
import getRandomGender from './utils/get-random-gender';
import getRandomDifficulty from './utils/get-random-difficulty';
import getRandomThematic from './utils/get-random-thematic-area';
import getRandomCategory from './utils/get-random-category';
import { STORY_STATUS } from '@ourloop/shared';
import { CHANNEL_CONSTANTS } from '../common/constant/channel.constant';

const env = process.env;

export class AddMockData1692969296869 implements MigrationInterface {
  mockUserEmail = 'mock@example.com';
  limit = 6000;

  async findUser(queryRunner: QueryRunner): Promise<{ id: string }> {
    return queryRunner
      .query(`SELECT \`id\` FROM \`user\` WHERE \`email\` = ?`, [
        this.mockUserEmail,
      ])
      .then((result) => result[0]);
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    if (env.NODE_ENV === 'development') {
      await queryRunner.query(
        `INSERT INTO \`user\` (\`id\`, \`email\`) VALUES (?, ?)`,
        [uuidv4(), this.mockUserEmail],
      );

      const languages = await queryRunner.query(
        `SELECT \`id\`, \`is_default\`, \`code\` FROM \`language\` WHERE visible = true`,
      );
      const difficulties = await queryRunner.query(
        `SELECT \`id\` FROM \`difficulty\``,
      );
      const categories = await queryRunner.query(
        `SELECT \`id\` FROM \`category\``,
      );
      const thematicAreas = await queryRunner.query(
        `SELECT \`id\`, \`parent_thematic_id\` as parentThematicId FROM \`thematic\``,
      );
      const administrativeData = await queryRunner.query(
        `SELECT \`administrative_area_id\` as id FROM \`country_administrative_area_name\` WHERE name IN ('powiat rzeszowski', 'województwo podkarpackie')`,
      );
      const mockUser = await this.findUser(queryRunner);
      const country = await queryRunner
        .query(`SELECT \`id\` FROM \`country\` WHERE \`code\` = ?`, ['pl'])
        .then((result) => result[0]);
      const defaultLanguage = languages.find((item) => item.is_default);

      let recipient: { insertId: number };

      for (let index = 0; index < this.limit; index++) {
        recipient = await queryRunner.query(
          `INSERT INTO \`story_recipient\` (\`email\`, \`phone\`, \`nickname\`, \`first_name\`, \`last_name\`, \`gender_by_moderator\`, \`age_by_moderator\`, \`difficulty_by_moderator\`) VALUES (?,?,?,?,?,?,?,?)`,
          [
            faker.internet.email(),
            faker.phone.number('###-###-###'),
            faker.person.fullName(),
            faker.person.firstName(),
            faker.person.lastName(),
            getRandomGender(),
            getRandomAge(),
            getRandomDifficulty(difficulties),
          ],
        );

        await queryRunner.query(
          `INSERT INTO \`story\` (\`id\`, \`published_at\`, \`status\`, \`user_id\`, \`language_id\`, \`channel\`, \`country_id\`, \`status_changed_by\`, \`recipient_id\`) VALUES (?,?,?,?,?,?,?,?,?)`,
          [
            uuidv4(),
            new Date(),
            STORY_STATUS.PUBLISHED,
            mockUser.id,
            defaultLanguage.id,
            CHANNEL_CONSTANTS.WEB,
            country.id,
            mockUser.id,
            recipient.insertId,
          ],
        );
        await Promise.all(
          languages.map((item) =>
            queryRunner.query(
              `INSERT INTO \`story_translation\` (\`story_id\`, \`language_id\`, \`content\`) SELECT s.id, ?, ? FROM \`story\` s WHERE s.recipient_id = ?`,
              [item.id, faker.lorem.sentence(), recipient.insertId],
            ),
          ),
        );
        await queryRunner.query(
          `INSERT INTO \`story_thematic\` (\`story_id\`, \`thematic_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`,
          [getRandomThematic(thematicAreas)?.id, recipient.insertId],
        );
        await queryRunner.query(
          `INSERT INTO \`story_category\` (\`story_id\`, \`category_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`,
          [getRandomCategory(categories)?.id, recipient.insertId],
        );
        await queryRunner.query(
          `INSERT INTO \`story_difficulty\` (\`story_id\`, \`difficulty_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`,
          [getRandomDifficulty(difficulties)?.id, recipient.insertId],
        );
        await Promise.all(
          administrativeData.map((item) =>
            queryRunner.query(
              `INSERT INTO \`story_country_administrative_area\` (\`story_id\`, \`administrative_area_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`,
              [item.id, recipient.insertId],
            ),
          ),
        );
        await setDelay(1000);
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    if (env.NODE_ENV === 'development') {
      const mockUser = await this.findUser(queryRunner);

      if (mockUser) {
        await queryRunner.query(
          `DELETE sr FROM \`story_recipient\` as sr INNER JOIN \`story\` as s ON sr.id = s.recipient_id WHERE s.user_id = ?`,
          [mockUser.id],
        );
        await queryRunner.query(`DELETE FROM \`story\` WHERE user_id = ?`, [
          mockUser.id,
        ]);
        await queryRunner.query(`DELETE FROM \`user\` WHERE id = ?`, [
          mockUser.id,
        ]);
      }
    }
  }
}
