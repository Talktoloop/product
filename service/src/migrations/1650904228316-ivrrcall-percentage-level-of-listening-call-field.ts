import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ivrrcallPercentageLevelOfListeningCallField1650904228316
  implements MigrationInterface
{
  tableName = 'ivrr_call';
  newColumn = new TableColumn({
    type: 'int',
    name: 'percentage_level_of_listening_call',
    default: 0,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
