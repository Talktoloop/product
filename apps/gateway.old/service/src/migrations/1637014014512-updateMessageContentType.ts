import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateMessageContentType1637014014512
  implements MigrationInterface {
  private tableName = 'message';
  private columnName = 'content';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY ${this.columnName} text`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY ${this.columnName} VARCHAR(640)`,
    );
  }
}
