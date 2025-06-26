"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddColumnCountryIdToConversationTable1622231540968 = void 0;
const typeorm_1 = require("typeorm");
class AddColumnCountryIdToConversationTable1622231540968 {
    constructor() {
        this.tableName = 'conversation';
        this.foreignKeyCountryId = 'FKconversationToCountry';
        this.indexCountryId = 'IDX_CONVERSATION_COUNTRY_ID';
        this.codes = {
            ZMB: 'zm',
            PHI: 'ph',
            OTH: null,
        };
        this.oldColumn = new typeorm_1.TableColumn({
            name: 'country',
            type: 'varchar',
            length: '3',
            isNullable: false,
        });
        this.newColumn = new typeorm_1.TableColumn({
            name: 'country_id',
            type: 'smallint',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        var _a;
        const countries = await queryRunner.query(`SELECT \`id\`, \`code\` FROM \`country\` WHERE \`code\` IN (?)`, [Object.values(this.codes)]);
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexCountryId,
            columnNames: ['country_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['country_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'country',
            name: this.foreignKeyCountryId,
        }));
        for (const [key, value] of Object.entries(this.codes)) {
            await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.newColumn.name}\` = ? WHERE \`${this.oldColumn.name}\` = ?`, [(_a = countries.find((item) => item.code === value)) === null || _a === void 0 ? void 0 : _a.id, key]);
        }
        await queryRunner.dropColumn(this.tableName, this.oldColumn);
    }
    async down(queryRunner) {
        var _a, _b;
        const countries = await queryRunner.query(`SELECT \`id\`, \`code\` FROM \`country\` WHERE \`code\` IN (?)`, [Object.values(this.codes)]);
        const conversations = await queryRunner.query(`SELECT DISTINCT \`${this.newColumn.name}\` FROM \`${this.tableName}\``);
        const entries = Object.entries(this.codes);
        let code;
        await queryRunner.addColumn(this.tableName, this.oldColumn);
        for (const conversation of conversations) {
            code = (_a = countries.find((item) => item.id === conversation.country_id)) === null || _a === void 0 ? void 0 : _a.code;
            if (code) {
                await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`${this.oldColumn.name}\` = ? WHERE \`${this.newColumn.name}\` = ?`, [
                    (_b = entries.find((item) => item[1] === code)) === null || _b === void 0 ? void 0 : _b[0],
                    conversation.country_id,
                ]);
            }
        }
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCountryId);
        await queryRunner.dropIndex(this.tableName, this.indexCountryId);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddColumnCountryIdToConversationTable1622231540968 = AddColumnCountryIdToConversationTable1622231540968;
//# sourceMappingURL=1622231540968-addColumnCountryIdToConversationTable.js.map