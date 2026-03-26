import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLocalMarketsToLivelihoods1759144123456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('local-markets', 23, 0, 'Local markets')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM thematic WHERE code = 'local-markets'`);
    }

} 