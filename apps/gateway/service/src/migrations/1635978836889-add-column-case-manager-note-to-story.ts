import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnCaseManagerNoteToStory1635978836889
  implements MigrationInterface {
  private tableName = 'story';
  private newColumn = new TableColumn({
    name: 'case_manager_note',
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
