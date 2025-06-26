"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableLanguageWithDefaultValue1611554285956 = void 0;
const typeorm_1 = require("typeorm");
class AddTableLanguageWithDefaultValue1611554285956 {
    constructor() {
        this.tableName = 'language';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'smallint',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'code',
                    type: 'varchar',
                    length: '2',
                },
                {
                    name: 'is_default',
                    type: 'boolean',
                    default: false,
                },
            ],
        }), true);
        await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`code\`, \`is_default\`) VALUES ('en', 1)`);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableLanguageWithDefaultValue1611554285956 = AddTableLanguageWithDefaultValue1611554285956;
//# sourceMappingURL=1611554285956-addTableLanguageWithDefaultValue.js.map