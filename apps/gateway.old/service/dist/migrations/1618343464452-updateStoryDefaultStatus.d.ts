import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UpdateStoryDefaultStatus1618343464452 implements MigrationInterface {
    private tableName;
    private newDefaultValue;
    private oldDefaultValue;
    private columnName;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
