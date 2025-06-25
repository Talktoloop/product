import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddTopLevelBooleanAndSetDefaultLevels1730284025227 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        // 1. Add new columns to the reject_reason table
        await queryRunner.addColumn(
            'reject_reason',
            new TableColumn({
                name: 'parent_rejection_id',
                type: 'int',
                isNullable: true,
            }),
        );

        await queryRunner.addColumn(
            'reject_reason',
            new TableColumn({
                name: 'is_top_level',
                type: 'boolean',
                default: false,
            }),
        );

        // 2. Add foreign key constraint to parent_rejection_id
        await queryRunner.createForeignKey(
            'reject_reason',
            new TableForeignKey({
                columnNames: ['parent_rejection_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'reject_reason',
                onDelete: 'CASCADE',
            }),
        );

        // 3. Insert new top-level reasons: 'duplicate' and 'communityStandards'
        await queryRunner.query(`
        INSERT INTO reject_reason (code, is_top_level)
        VALUES ('duplicate', true),
               ('communityStandards', true)
      `);

        // 4. Set 'poorAudioQuality' and 'other' as top-level reasons
        await queryRunner.query(`
        UPDATE reject_reason
        SET is_top_level = true
        WHERE code IN ('poorAudioQuality', 'other')
      `);

        // 5. Assign first five reasons as children of 'communityStandards'
        // First, get the ID of 'communityStandards'
        const communityStandards = await queryRunner.query(`
        SELECT id FROM reject_reason WHERE code = 'communityStandards'
      `);

        const communityStandardsId = communityStandards[0]?.id;

        if (communityStandardsId) {
            // Update parent_rejection_id for the first five reasons
            await queryRunner.query(`
          UPDATE reject_reason
          SET parent_rejection_id = ${communityStandardsId}
          WHERE id IN (1, 2, 3, 4, 5)
        `);
        } else {
            throw new Error("Failed to find 'communityStandards' ID");
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        // 1. Remove foreign key constraint
        const table = await queryRunner.getTable('reject_reason');
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf('parent_rejection_id') !== -1,
        );
        if (foreignKey) {
            await queryRunner.dropForeignKey('reject_reason', foreignKey);
        }

        // 2. Remove the new columns
        await queryRunner.dropColumn('reject_reason', 'parent_rejection_id');
        await queryRunner.dropColumn('reject_reason', 'is_top_level');

        // 3. Delete the new top-level reasons
        await queryRunner.query(`
        DELETE FROM reject_reason
        WHERE code IN ('duplicate', 'communityStandards')
      `);

        // 4. Reset 'is_top_level' for 'poorAudioQuality' and 'other'
        await queryRunner.query(`
        UPDATE reject_reason
        SET is_top_level = false
        WHERE code IN ('poorAudioQuality', 'other')
      `);

        // 5. Reset 'parent_rejection_id' for the first five reasons
        await queryRunner.query(`
        UPDATE reject_reason
        SET parent_rejection_id = NULL
        WHERE id IN (1, 2, 3, 4, 5)
      `);
    }
}