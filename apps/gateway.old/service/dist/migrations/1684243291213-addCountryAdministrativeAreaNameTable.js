"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCountryAdministrativeAreaNameTable1684243291213 = void 0;
const typeorm_1 = require("typeorm");
class AddCountryAdministrativeAreaNameTable1684243291213 {
    constructor() {
        this.tableName = 'country_administrative_area_name';
        this.foreignKeyAdministrativeAreaId = 'fkCountryAdministrativeAreaNameToCountryAdministrativeArea';
        this.indexAdministrativeAreaId = 'idxCountryAdministrativeAreaNameAdministrativeAreaId';
        this.foreignKeyLanguageId = 'fkCountryAdministrativeAreaNameToLanguage';
        this.indexLanguageId = 'idxCountryAdministrativeAreaNameLanguageId';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'language_id',
                    type: 'smallint',
                    isNullable: false,
                },
                {
                    name: 'administrative_area_id',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '150',
                    isNullable: false,
                },
            ],
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexAdministrativeAreaId,
            columnNames: ['administrative_area_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['administrative_area_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'country_administrative_area',
            name: this.foreignKeyAdministrativeAreaId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexLanguageId,
            columnNames: ['language_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyLanguageId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyAdministrativeAreaId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyLanguageId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddCountryAdministrativeAreaNameTable1684243291213 = AddCountryAdministrativeAreaNameTable1684243291213;
//# sourceMappingURL=1684243291213-addCountryAdministrativeAreaNameTable.js.map