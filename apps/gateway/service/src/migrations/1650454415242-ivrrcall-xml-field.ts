import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ivrrcallXmlField1650454415242 implements MigrationInterface {
  tableName = 'ivrr_call';
  newColumn = new TableColumn({
    type: 'varchar',
    name: 'twilio_flow_xml',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` MODIFY s3_file_id varchar(100) null`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
