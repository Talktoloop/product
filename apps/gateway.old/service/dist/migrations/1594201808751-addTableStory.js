"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStory1594201808751 = void 0;
const typeorm_1 = require("typeorm");
class AddTableStory1594201808751 {
    constructor() {
        this.tableName = 'story';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '100',
                    isNullable: true,
                },
                {
                    name: 'content',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'place',
                    type: 'varchar',
                    length: '100',
                    isNullable: true,
                },
                {
                    name: 'gender',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
                {
                    name: 'published_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: true,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddTableStory1594201808751 = AddTableStory1594201808751;
//# sourceMappingURL=1594201808751-addTableStory.js.map