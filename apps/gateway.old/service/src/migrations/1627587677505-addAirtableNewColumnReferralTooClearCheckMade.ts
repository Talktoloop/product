import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAirtableNewColumnReferralTooClearCheckMade1627587677505
  implements MigrationInterface {
  private tableName = 'case_sync';
  private newColumn = new TableColumn({
    name: 'referral_to_clear_check_made',
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
