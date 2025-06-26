"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddInitialUrgencyToCaseSync1666687833849 = void 0;
const typeorm_1 = require("typeorm");
class AddInitialUrgencyToCaseSync1666687833849 {
    constructor() {
        this.tableName = 'case_sync';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'initial_urgency',
            type: 'varchar',
            length: '100',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`initial_urgency\` = \`urgency\``);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddInitialUrgencyToCaseSync1666687833849 = AddInitialUrgencyToCaseSync1666687833849;
//# sourceMappingURL=1666687833849-addInitialUrgencyToCaseSync.js.map