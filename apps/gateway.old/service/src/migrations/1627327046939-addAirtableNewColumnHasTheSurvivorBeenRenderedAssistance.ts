import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAirtableNewColumnHasTheSurvivorBeenRenderedAssistance1627327046939
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumn = new TableColumn({
    name: 'has_the_survivor_been_rendered_assistance',
    type: 'varchar',
    length: '100',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
