import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddSensitiveFieldToStory1614197830902
  implements MigrationInterface {
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'isSensitive',
    type: 'tinyint',
    length: '1',
    isNullable: false,
    default: false,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
