import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddStatusForCommentsAndUpdateId1594844823667
  implements MigrationInterface {
  private tableName = 'comment';

  private newColumn = new TableColumn({
    name: 'status',
    type: 'int',
    isNullable: false,
    default: 0,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
