"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFiltersPresetTable1734613020140 = void 0;
const typeorm_1 = require("typeorm");
class CreateFiltersPresetTable1734613020140 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "filters_preset",
            columns: [
                {
                    name: "id",
                    type: "char",
                    length: "36",
                    isPrimary: true,
                    isGenerated: false
                },
                {
                    name: "preset_name",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "filters",
                    type: "json",
                    isNullable: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("filters_preset");
    }
}
exports.CreateFiltersPresetTable1734613020140 = CreateFiltersPresetTable1734613020140;
//# sourceMappingURL=1734613020140-CreateFiltersPresetTable.js.map