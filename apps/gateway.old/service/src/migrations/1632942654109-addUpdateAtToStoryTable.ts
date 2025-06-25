import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUpdateAtToStoryTable1632942654109
  implements MigrationInterface {
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'updated_at',
    type: 'datetime',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
