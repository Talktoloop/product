import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveColumnTitleFromStoryTable1611642295025
  implements MigrationInterface {
  private tableName = 'story';
  private column = new TableColumn({
    name: 'title',
    type: 'varchar',
    length: '100',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }
}
