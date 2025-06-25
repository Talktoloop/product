import { MigrationInterface, QueryRunner } from "typeorm"

export class UpdateTypoOrdnance1731578538134 implements MigrationInterface {
    private tableName = 'thematic';
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE ${this.tableName}
            SET code = 'landmines/UnexplodedOrdnance'
            WHERE code = 'landmines/UnexplodedOrdinance'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE ${this.tableName}
            SET code = 'landmines/UnexplodedOrdinance'
            WHERE code = 'landmines/UnexplodedOrdnance'
        `);
    }

}
