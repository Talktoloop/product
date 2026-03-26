import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAwarenessRaisingLabel1758888481798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET label = 'Communication, awareness raising and materials' WHERE code = 'awareness-raising'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE thematic SET label = 'Awareness raising and materials' WHERE code = 'awareness-raising'`);
    }

} 