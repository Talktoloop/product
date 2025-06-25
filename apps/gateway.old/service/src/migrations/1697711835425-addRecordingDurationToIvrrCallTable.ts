import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addRecordingDurationToIvrrCallTable1697711835425
  implements MigrationInterface
{
  tableName = 'ivrr_call';
  column = new TableColumn({
    name: 'recording_duration',
    type: 'int',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.column);
  }
}
