import { MigrationInterface, QueryRunner } from 'typeorm';

export class ivrrcallContentNullableField1650482454360
  implements MigrationInterface
{
  tableName = 'ivrr_call';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY \`content\` text null`,
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
