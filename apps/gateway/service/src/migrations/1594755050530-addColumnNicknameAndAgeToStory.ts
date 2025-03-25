import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnNicknameAndAgeToStory1594755050530
  implements MigrationInterface {
  private tableName = 'story';

  private newColumnNickname = new TableColumn({
    name: 'nickname',
    type: 'varchar',
    length: '60',
    isNullable: true,
  });

  private newColumnAge = new TableColumn({
    name: 'age',
    type: 'int',
    default: 4,
    isNullable: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      this.newColumnAge,
      this.newColumnNickname,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, [
      this.newColumnAge,
      this.newColumnNickname,
    ]);
  }
}
