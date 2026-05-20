import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOpinionToSuggestionOpinion1747991703649 implements MigrationInterface {
    name = 'UpdateOpinionToSuggestionOpinion1747991703649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE category
            SET code = 'suggestion_opinion'
            WHERE code = 'opinion'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE category
            SET code = 'opinion'
            WHERE code = 'suggestion_opinion'
        `);
    }
}
