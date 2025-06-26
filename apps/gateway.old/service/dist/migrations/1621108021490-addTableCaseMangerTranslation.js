"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableCaseMangerTranslation1621108021490 = void 0;
const typeorm_1 = require("typeorm");
class AddTableCaseMangerTranslation1621108021490 {
    constructor() {
        this.tableName = 'case_manager_text';
        this.indexCaseManagerText = 'IDX_CASE_MANAGER_CASE_MANAGER_TEXT';
        this.fkCaseManagerText = 'fk_CaseManagerText';
        this.indexCaseManagerLanguage = 'IDX_CASE_MANAGER_LANGUAGE_ID';
        this.fkCaseManagerLanguage = 'fk_CaseManagerLanguage';
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
                    name: 'case_manager_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'language_id',
                    type: 'smallint',
                    isNullable: false,
                },
                {
                    name: 'text',
                    type: 'text',
                    isNullable: false,
                },
            ],
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkCaseManagerText,
            columnNames: ['case_manager_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['case_manager_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'case_manager',
            name: this.indexCaseManagerText,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.fkCaseManagerLanguage,
            columnNames: ['language_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.indexCaseManagerLanguage,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropIndex(this.tableName, this.indexCaseManagerLanguage);
        await queryRunner.dropForeignKey(this.tableName, this.fkCaseManagerLanguage);
        await queryRunner.dropIndex(this.tableName, this.indexCaseManagerText);
        await queryRunner.dropForeignKey(this.tableName, this.fkCaseManagerText);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableCaseMangerTranslation1621108021490 = AddTableCaseMangerTranslation1621108021490;
//# sourceMappingURL=1621108021490-addTableCaseMangerTranslation.js.map