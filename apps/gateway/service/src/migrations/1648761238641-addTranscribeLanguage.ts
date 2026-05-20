import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTranscribeLanguage1648761238641 implements MigrationInterface {
  private tableName = 'language';
  private columnName = 'transcribe_lang';
  private newColumn = new TableColumn({
    name: this.columnName,
    type: 'varchar',
    length: '10',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);

    const map = new Map();
    map.set('en', 'en-GB');
    map.set('fr', 'fr-FR');
    map.set('id', 'id-ID');
    map.set('es', 'es-ES');
    map.set('ar', 'ar-SA');

    for (const [key, value] of map) {
      await queryRunner.query(
        `UPDATE ${this.tableName} SET ${this.columnName} = ? WHERE code = ?`,
        [value, key],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
