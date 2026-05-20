import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAlternativeProviderForTagalogInLanguageTable1676964855939
  implements MigrationInterface
{
  tableName = 'language';
  newColumn = new TableColumn({
    name: 'alternative_provider',
    type: 'varchar',
    length: '10',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    await queryRunner.query(
      `UPDATE \`${this.tableName}\` SET \`alternative_provider\` = ? WHERE code = ?`,
      ['aws', 'tl'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
