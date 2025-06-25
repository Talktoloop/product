import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTypeToStoryTranslationTable1616737677312
  implements MigrationInterface {
  private tableName = 'story_translation';
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
        UPDATE \`${this.tableName}\` st 
        LEFT JOIN \`story\` s ON st.story_id = s.id AND st.language_id = s.language_id 
        SET st.type = 'machine' where s.id is null
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.newColumn);
  }
}
