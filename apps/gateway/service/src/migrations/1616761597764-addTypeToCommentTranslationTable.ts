import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTypeToCommentTranslationTable1616761597764
  implements MigrationInterface {
  private tableName = 'comment_translation';
  private newColumn = new TableColumn({
    name: 'type',
    type: 'enum',
    enum: ['manual', 'machine'],
    enumName: 'typeEnum',
    default: '"manual"',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(this.tableName, this.newColumn);
    await queryRunner.query(`
        UPDATE \`${this.tableName}\` ct 
        LEFT JOIN \`comment\` c ON ct.comment_id = c.id AND ct.language_id = c.language_id 
        SET ct.type = 'machine' where c.id is null
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
