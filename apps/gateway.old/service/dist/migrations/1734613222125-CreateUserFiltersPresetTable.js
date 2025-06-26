"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserFiltersPresetTable1734613222125 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserFiltersPresetTable1734613222125 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user_filters_preset",
            columns: [
                {
                    name: "id",
                    type: "char",
                    length: "36",
                    isPrimary: true,
                    isGenerated: false,
                },
                {
                    name: "user_id",
                    type: "char",
                    length: "36",
                    isNullable: false,
                },
                {
                    name: "filters_preset_id",
                    type: "char",
                    length: "36",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP",
                },
            ],
        }));
        await queryRunner.createForeignKeys("user_filters_preset", [
            new typeorm_1.TableForeignKey({
                columnNames: ["user_id"],
                referencedTableName: "user",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
            new typeorm_1.TableForeignKey({
                columnNames: ["filters_preset_id"],
                referencedTableName: "filters_preset",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user_filters_preset");
    }
}
exports.CreateUserFiltersPresetTable1734613222125 = CreateUserFiltersPresetTable1734613222125;
//# sourceMappingURL=1734613222125-CreateUserFiltersPresetTable.js.map