"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStoryCountryAdministrativeAreaTable1683620651337 = void 0;
const typeorm_1 = require("typeorm");
class AddStoryCountryAdministrativeAreaTable1683620651337 {
    constructor() {
        this.tableName = 'story_country_administrative_area';
        this.foreignKeyStoryId = 'fkStoryCountryAdministrativeAreaToStory';
        this.indexStoryId = 'idxStoryCountryAdministrativeAreaStoryId';
        this.foreignKeyAdministrativeAreaId = 'fkStoryCountryAdministrativeAreaToCountryAdministrativeArea';
        this.indexAdministrativeAreaId = 'idxStoryCountryAdministrativeAreaAdministrativeAreaId';
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
                    name: 'story_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'administrative_area_id',
                    type: 'int',
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
            name: this.indexStoryId,
            columnNames: ['story_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: this.foreignKeyStoryId,
            onDelete: 'CASCADE',
        }));
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
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyAdministrativeAreaId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddStoryCountryAdministrativeAreaTable1683620651337 = AddStoryCountryAdministrativeAreaTable1683620651337;
//# sourceMappingURL=1683620651337-addStoryCountryAdministrativeAreaTable.js.map