"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddParentThematicToThematicTable1601458455675 = void 0;
const typeorm_1 = require("typeorm");
class AddParentThematicToThematicTable1601458455675 {
    constructor() {
        this.tableName = 'thematic';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'parent_thematic_id',
            type: 'int',
            isNullable: true,
        });
        this.indexThematicName = 'IDX_THEMATIC_PARENT_THEMATIC_ID';
        this.fkThematicName = 'fk_ThematicParentThematicId';
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexThematicName,
            columnNames: ['parent_thematic_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['parent_thematic_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'thematic',
            name: this.fkThematicName,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex(this.tableName, this.indexThematicName);
        await queryRunner.dropForeignKey(this.tableName, this.fkThematicName);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddParentThematicToThematicTable1601458455675 = AddParentThematicToThematicTable1601458455675;
//# sourceMappingURL=1601458455675-addParentThematicToThematicTable.js.map