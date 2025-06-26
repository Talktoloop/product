"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTableIvrrScheduler1679293659294 = void 0;
const typeorm_1 = require("typeorm");
class addTableIvrrScheduler1679293659294 {
    constructor() {
        this.tableName = 'ivrr_scheduler';
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
                    name: 'source_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'type',
                    type: 'enum',
                    enum: ['story', 'comment'],
                    enumName: 'typeEnum',
                    isNullable: false,
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['inProgress', 'pending', 'done', 'failed'],
                    enumName: 'statusEnum',
                    isNullable: false,
                },
                {
                    name: 'lang',
                    type: 'varchar',
                    length: '3',
                    isNullable: false,
                },
                {
                    name: 'provider_number',
                    type: 'varchar',
                    length: '20',
                    isNullable: false,
                },
                {
                    name: 'call_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: true,
                },
                {
                    name: 'time',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                },
                {
                    name: 'timezone',
                    type: 'tinyint',
                    isNullable: false,
                },
                {
                    name: 'sequence_number',
                    type: 'tinyint',
                    isNullable: true,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.addTableIvrrScheduler1679293659294 = addTableIvrrScheduler1679293659294;
//# sourceMappingURL=1679293659294-addTableIvrrScheduler.js.map