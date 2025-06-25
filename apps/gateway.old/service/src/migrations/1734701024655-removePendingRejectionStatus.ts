import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovePendingRejectionStatus1734701024655 implements MigrationInterface {
    private tableName = 'story';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE ${this.tableName} SET status = 'rejected' WHERE status = 'pending_rejection_not_sensitive';`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
