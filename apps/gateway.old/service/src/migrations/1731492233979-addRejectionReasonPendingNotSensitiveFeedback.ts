import { MigrationInterface, QueryRunner } from "typeorm"

export class AddRejectionReasonPendingNotSensitiveFeedback1731492233979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO reject_reason (code, is_top_level)
            VALUES ('notSensitive', true)
          `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Delete the 'Not sensitive' rejection reason
        await queryRunner.query(`
                    DELETE FROM reject_reason
                    WHERE code = 'notSensitive'
                  `);
    }

}
