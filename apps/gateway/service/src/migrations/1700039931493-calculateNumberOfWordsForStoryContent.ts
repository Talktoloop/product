import { MigrationInterface, QueryRunner } from 'typeorm';
import { calculateNumberOfSubstringsByDivider } from '@ourloop/shared';

export class CalculateNumberOfWordsForStoryContent1700039931493
  implements MigrationInterface
{
  tableName = 'story_translation';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const translations = await queryRunner.query(
      `SELECT \`id\`, \`content\` FROM \`${this.tableName}\` WHERE \`number_of_words\` IS NULL`,
    );

    for (const translation of translations) {
      await queryRunner.query(
        `UPDATE \`${this.tableName}\` SET \`number_of_words\` = ? WHERE \`id\` = ?`,
        [
          calculateNumberOfSubstringsByDivider(translation.content, ' '),
          translation.id,
        ],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`number_of_words\` = ?`,
      [null],
    );
  }
}
