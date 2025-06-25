import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnCountryToStory1594758248916
  implements MigrationInterface {
  private tableName = 'story';

  private newColumn = new TableColumn({
    name: 'country',
    type: 'varchar',
    length: '3',
    isNullable: false,
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
