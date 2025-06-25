import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeMaximumLengrhOfContentInMessageTable1620155117122
  implements MigrationInterface {
  private tableName = 'message';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` modify COLUMN \`content\` varchar(640);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`${this.tableName}\` modify COLUMN \`content\` varchar(500);`,
    );
  }
}
