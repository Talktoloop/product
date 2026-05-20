import { MigrationInterface, QueryRunner } from 'typeorm';

export class addNullableTranslationForComment1617739347096
  implements MigrationInterface {
  private tableName = 'comment_translation';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY content MEDIUMTEXT;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY content MEDIUMTEXT NOT NULL;`,
    );
  }
}
