import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPreferNotToAnswerToDifficulty1748249896068 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO difficulty (code) VALUES ('preferNotToAnswer');"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM difficulty WHERE code = 'preferNotToAnswer';"
        );
    }
}

