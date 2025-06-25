import { MigrationInterface, QueryRunner } from 'typeorm';

export class renameNicknameColumn1643889322537 implements MigrationInterface {
  name = 'renameNicknameColumn1643889322537';
  tableName = 'story';
  oldColumnName = 'nickname';
  newColumnName = 'author_nickname';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      this.tableName,
      this.oldColumnName,
      this.newColumnName,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      this.tableName,
      this.newColumnName,
      this.oldColumnName,
    );
  }
}
