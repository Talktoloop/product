import { MigrationInterface, QueryRunner } from "typeorm";

export class AddKiziguaLanguage1755187562228 implements MigrationInterface {
    private tableName = 'language';

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(
            `INSERT INTO \`${this.tableName}\` (\`code\`, \`provider\`, \`visible\`, \`dialect\`, \`transcribe_lang\`) VALUES (?, ?, ?, ?, ?)`,
            ['kiz', null, 1, 'so', 'so-SO'],
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM \`${this.tableName}\` WHERE \`code\` = ?`,
            ['kiz'],
        );
    }

}
