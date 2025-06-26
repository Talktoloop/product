"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddResponsivenessByStepColumnsToCaseSync1636491432927 = void 0;
const typeorm_1 = require("typeorm");
class AddResponsivenessByStepColumnsToCaseSync1636491432927 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'process_and_refer_responsiveness',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'referral_response_responsiveness',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'investigation_responsiveness',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'investigation_result_responsiveness',
                type: 'varchar',
                isNullable: true,
                length: '100',
            }),
            new typeorm_1.TableColumn({
                name: 'informing_author_responsiveness',
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
exports.AddResponsivenessByStepColumnsToCaseSync1636491432927 = AddResponsivenessByStepColumnsToCaseSync1636491432927;
//# sourceMappingURL=1636491432927-addResponsivenessByStepColumnsToCaseSync.js.map