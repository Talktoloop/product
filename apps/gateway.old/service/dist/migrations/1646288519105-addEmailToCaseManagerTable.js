"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmailToCaseManagerTable1646288519105 = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
class AddEmailToCaseManagerTable1646288519105 {
    constructor() {
        this.tableName = 'case_manager';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'email',
            type: 'varchar',
            length: '100',
            isNullable: true,
            isUnique: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`email\` = ? WHERE nickname = ?`, ['lian@talktoloop.org', 'Lian']);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`id\`, \`email\`, \`nickname\`, \`visible\`)
       VALUES (?, ?, ?, ?)`, [(0, uuid_1.v4)(), 'alex@talktoloop.org', 'Alex', false]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddEmailToCaseManagerTable1646288519105 = AddEmailToCaseManagerTable1646288519105;
//# sourceMappingURL=1646288519105-addEmailToCaseManagerTable.js.map