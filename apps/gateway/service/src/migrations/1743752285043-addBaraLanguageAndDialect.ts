import { MigrationInterface, QueryRunner } from "typeorm";

export class AddBaraLanguageAndDialect1743752285043 implements MigrationInterface {
    private tableName = 'language';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`${this.tableName}\` 
          MODIFY \`code\` VARCHAR(4) NOT NULL,
          MODIFY \`dialect\` VARCHAR(4)`
        );

        await queryRunner.query(
            `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`, \`dialect\`, \`transcribe_lang\`) VALUES (?, ?, ?, ?, ?)`,
            ['bara', null, 1, 'so', 'so-SO'],
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
            ['bara'],
        );

        await queryRunner.query(
            `ALTER TABLE \`${this.tableName}\` 
          MODIFY \`code\` VARCHAR(2) NOT NULL,
          MODIFY \`dialect\` VARCHAR(2)`
        );
    }
}
