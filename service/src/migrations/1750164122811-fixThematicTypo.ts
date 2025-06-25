import { MigrationInterface, QueryRunner } from "typeorm";

export class FixThematicTypo1750164122811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET code = 'aid-distribution-inclusiveness' WHERE code = 'air-distribution-inclusiveness'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET code = 'air-distribution-inclusiveness' WHERE code = 'aid-distribution-inclusiveness'`);
    }

}
