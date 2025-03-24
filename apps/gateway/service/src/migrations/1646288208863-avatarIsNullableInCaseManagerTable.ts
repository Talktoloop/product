import { MigrationInterface, QueryRunner } from 'typeorm';

export class AvatarIsNullableInCaseManagerTable1646288208863
  implements MigrationInterface
{
  tableName = 'case_manager';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY avatar varchar(255) null`,
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
