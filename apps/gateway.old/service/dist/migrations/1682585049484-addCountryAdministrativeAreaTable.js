"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCountryAdministrativeAreaTable1682585049484 = void 0;
const typeorm_1 = require("typeorm");
class AddCountryAdministrativeAreaTable1682585049484 {
    constructor() {
        this.tableName = 'country_administrative_area';
        this.foreignKeyCountryId = 'fkCountryAdministrativeAreaToCountry';
        this.indexCountryId = 'idxCountryAdministrativeAreaCountryId';
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
                    name: 'country_id',
                    type: 'smallint',
                    isNullable: false,
                },
                {
                    name: 'parent_id',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'level',
                    type: 'tinyint',
                    isNullable: false,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '150',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }), true);
        await queryRunner.createIndex(this.tableName, new typeorm_1.TableIndex({
            name: this.indexCountryId,
            columnNames: ['country_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['country_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'country',
            name: this.foreignKeyCountryId,
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyCountryId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddCountryAdministrativeAreaTable1682585049484 = AddCountryAdministrativeAreaTable1682585049484;
//# sourceMappingURL=1682585049484-addCountryAdministrativeAreaTable.js.map