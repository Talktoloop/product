import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddContentAndTranscriptionStatus1647898487084
  implements MigrationInterface
{
  private tableName = 'ivrr_call';
  private newColumns = [
    new TableColumn({
      name: 'content',
      type: 'text',
      isNullable: false,
    }),
    new TableColumn({
      name: 'transcription_status',
      type: 'int',
      isNullable: true,
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, this.newColumns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, this.newColumns);
  }
}
