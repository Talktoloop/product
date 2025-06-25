import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnSolutionProposedToStoryComments1732474263945
  implements MigrationInterface
{
  private tableName = 'story_comment';
  private newColumn = new TableColumn({
    name: 'solution_proposed',
    type: 'boolean',
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
