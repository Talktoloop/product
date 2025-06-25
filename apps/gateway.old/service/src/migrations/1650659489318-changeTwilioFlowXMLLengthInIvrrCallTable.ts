import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTwilioFlowXMLLengthInIvrrCallTable1650659489318
  implements MigrationInterface
{
  private tableName = 'ivrr_call';
  private columnName = 'twilio_flow_xml';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY COLUMN ${this.columnName} VARCHAR(1000)`,
    );
  }

  public async down(): Promise<void> {
    // no return possible
  }
}
