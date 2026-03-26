import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAccessibilityOfAidToAidEffectiveness1759998415754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO thematic (code, parent_thematic_id, \`order\`, label) VALUES ('aid-accessibility', 107, 0, 'Accessibility of Aid')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM thematic WHERE code = 'aid-accessibility'`);
    }

}

