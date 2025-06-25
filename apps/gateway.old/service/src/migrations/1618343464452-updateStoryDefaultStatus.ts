import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateStoryDefaultStatus1618343464452
  implements MigrationInterface {
  private tableName = 'story';
  private newDefaultValue = 1;
  private oldDefaultValue = 0;
  private columnName = 'status';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` ALTER \`${this.columnName}\` SET DEFAULT ${this.newDefaultValue}`,
    );

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`${this.columnName}\` = ? WHERE \`${this.columnName}\` = ?`,
      [this.newDefaultValue, this.oldDefaultValue],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ALTER ${this.columnName} SET DEFAULT ${this.oldDefaultValue}`,
    );
  }
}
