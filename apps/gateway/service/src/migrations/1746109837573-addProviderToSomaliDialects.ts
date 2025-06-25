import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProviderToSomaliDialects1746109837573 implements MigrationInterface {
    private tableName = 'language';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE ${this.tableName} SET provider = 'google' WHERE code = 'bju' OR code = 'bnd' OR code = 'bnd'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE ${this.tableName} SET provider = NULL WHERE code = 'bju' OR code = 'bnd' OR code = 'bnd'`);
    }

}
