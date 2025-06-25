import { MigrationInterface, QueryRunner, TableIndex } from "typeorm";

export class AddFullTextIndexToStoryTranslation1732282619309 implements MigrationInterface {
    private translationTableName = 'story_translation';
    private columnToIndex = 'content'
    private indexName = 'IDX_FullText_Content';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE FULLTEXT INDEX ${this.indexName} ON ${this.translationTableName}(${this.columnToIndex})`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `DROP INDEX ${this.indexName} ON ${this.translationTableName}`
        );
    }

}
