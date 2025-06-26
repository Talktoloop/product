"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnsToCaseSyncTable1630523055445 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnsToCaseSyncTable1630523055445 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'process_and_refer_last_update_time',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'response_to_referral_last_update_time',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'enough_information_to_investigate_last_update',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'investigation_status_last_update',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'author_informed_of_case_outcomes_last_update',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'decision_to_investigate_status_last_update',
                type: 'datetime',
                length: '6',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'thematic_area',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'thematic_area_subsection',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddColumnsToCaseSyncTable1630523055445 = AddColumnsToCaseSyncTable1630523055445;
//# sourceMappingURL=1630523055445-addColumnsToCaseSyncTable.js.map