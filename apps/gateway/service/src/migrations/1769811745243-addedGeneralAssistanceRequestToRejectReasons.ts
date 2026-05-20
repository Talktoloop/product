import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedGeneralAssistanceRequestToRejectReasons1769811745243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO reject_reason (code, is_top_level)
            VALUES ('generalAssistanceRequest', false)
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM reject_reason
            WHERE code = 'generalAssistanceRequest'
          `)
    }

}
