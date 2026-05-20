import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateMessageProviderType1631653326741
  implements MigrationInterface {
  private tableName = 'message';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} MODIFY provider varchar(100)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      ` ALTER TABLE ${this.tableName} MODIFY provider enum`,
    );
  }
}
