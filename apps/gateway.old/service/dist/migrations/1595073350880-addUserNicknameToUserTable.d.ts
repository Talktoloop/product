import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUserNicknameToUserTable1595073350880 implements MigrationInterface {
    private tableName;
    private newColumnNickname;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
