import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeColumnPublishedByToStatusChangedByInStoryTable1676900016296
  implements MigrationInterface
{
  tableName = 'story';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` RENAME COLUMN published_by TO status_changed_by`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` RENAME COLUMN status_changed_by TO published_by`,
    );
  }
}
