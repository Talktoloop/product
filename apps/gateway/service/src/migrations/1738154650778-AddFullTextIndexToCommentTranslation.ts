import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFullTextIndexToCommentTranslation1738154650778 implements MigrationInterface {

    private translationTableName = 'story_comment_translation';
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
