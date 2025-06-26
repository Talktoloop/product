"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStoryCommentRecipientTable1676546827589 = void 0;
const typeorm_1 = require("typeorm");
class AddStoryCommentRecipientTable1676546827589 {
    constructor() {
        this.tableName = 'story_comment_recipient';
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
                    name: 'email',
                    type: 'varchar',
                    length: '100',
                    isNullable: true,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    length: '20',
                    isNullable: true,
                },
                {
                    name: 'nickname',
                    type: 'varchar',
                    length: '150',
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
                    name: 'updated_at',
                    type: 'datetime',
                    length: '6',
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP(6)',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddStoryCommentRecipientTable1676546827589 = AddStoryCommentRecipientTable1676546827589;
//# sourceMappingURL=1676546827589-addStoryCommentRecipientTable.js.map