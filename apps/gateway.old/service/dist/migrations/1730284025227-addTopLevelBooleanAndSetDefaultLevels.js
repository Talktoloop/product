"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTopLevelBooleanAndSetDefaultLevels1730284025227 = void 0;
const typeorm_1 = require("typeorm");
class AddTopLevelBooleanAndSetDefaultLevels1730284025227 {
    async up(queryRunner) {
        var _a;
        await queryRunner.addColumn('reject_reason', new typeorm_1.TableColumn({
            name: 'parent_rejection_id',
            type: 'int',
            isNullable: true,
        }));
        await queryRunner.addColumn('reject_reason', new typeorm_1.TableColumn({
            name: 'is_top_level',
            type: 'boolean',
            default: false,
        }));
        await queryRunner.createForeignKey('reject_reason', new typeorm_1.TableForeignKey({
            columnNames: ['parent_rejection_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'reject_reason',
            onDelete: 'CASCADE',
        }));
        await queryRunner.query(`
        INSERT INTO reject_reason (code, is_top_level)
        VALUES ('duplicate', true),
               ('communityStandards', true)
      `);
        await queryRunner.query(`
        UPDATE reject_reason
        SET is_top_level = true
        WHERE code IN ('poorAudioQuality', 'other')
      `);
        const communityStandards = await queryRunner.query(`
        SELECT id FROM reject_reason WHERE code = 'communityStandards'
      `);
        const communityStandardsId = (_a = communityStandards[0]) === null || _a === void 0 ? void 0 : _a.id;
        if (communityStandardsId) {
            await queryRunner.query(`
          UPDATE reject_reason
          SET parent_rejection_id = ${communityStandardsId}
          WHERE id IN (1, 2, 3, 4, 5)
        `);
        }
        else {
            throw new Error("Failed to find 'communityStandards' ID");
        }
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('reject_reason');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('parent_rejection_id') !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey('reject_reason', foreignKey);
        }
        await queryRunner.dropColumn('reject_reason', 'parent_rejection_id');
        await queryRunner.dropColumn('reject_reason', 'is_top_level');
        await queryRunner.query(`
        DELETE FROM reject_reason
        WHERE code IN ('duplicate', 'communityStandards')
      `);
        await queryRunner.query(`
        UPDATE reject_reason
        SET is_top_level = false
        WHERE code IN ('poorAudioQuality', 'other')
      `);
        await queryRunner.query(`
        UPDATE reject_reason
        SET parent_rejection_id = NULL
        WHERE id IN (1, 2, 3, 4, 5)
      `);
    }
}
exports.AddTopLevelBooleanAndSetDefaultLevels1730284025227 = AddTopLevelBooleanAndSetDefaultLevels1730284025227;
//# sourceMappingURL=1730284025227-addTopLevelBooleanAndSetDefaultLevels.js.map