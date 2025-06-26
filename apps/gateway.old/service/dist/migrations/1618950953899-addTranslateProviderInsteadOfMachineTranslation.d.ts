import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddTranslateProviderInsteadOfMachineTranslation1618950953899 implements MigrationInterface {
    private tableName;
    private columnToDrop;
    private columnToAdd;
    private newColumn;
    private oldColumn;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
