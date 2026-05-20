import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDialectToLanguages1738913069142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'language',
            new TableColumn({
                name: 'dialect',
                type: 'varchar',
                length: '2',
                isNullable: true,
            }),
        );
        await queryRunner.query(`UPDATE language SET dialect = 'so' WHERE code = 'bnd';`);
        await queryRunner.query(`UPDATE language SET dialect = 'so' WHERE code = 'maa';`);
        await queryRunner.query(`UPDATE language SET dialect = 'so' WHERE code = 'bju';`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('language', 'dialect');
    }

}
