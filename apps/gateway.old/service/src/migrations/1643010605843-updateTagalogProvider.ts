import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTagalogProvider1643010605843 implements MigrationInterface {
  private tableName = 'language';
  private columnName = 'provider';
  private newProvider = 'google';
  private oldProvider = 'AWS';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `,
      [this.newProvider, 'tl'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`code\` = ? `,
      [this.oldProvider, 'tl'],
    );
  }
}
