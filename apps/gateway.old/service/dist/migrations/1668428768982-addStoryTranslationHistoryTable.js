"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStoryTranslationHistoryTable1668428768982 = void 0;
const typeorm_1 = require("typeorm");
class AddStoryTranslationHistoryTable1668428768982 {
    constructor() {
        this.tableName = 'story_translation_history';
        this.foreignKeyStoryTranslationId = 'FKhistoricalStoryTranslationToStoryTranslation';
        this.foreignKeyUserId = 'FKhistoricalStoryTranslationToUser';
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
                    name: 'translation_id',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'moderator_id',
                    type: 'varchar',
                    length: '36',
                    isNullable: true,
                },
                {
                    name: 'content',
                    type: 'mediumtext',
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
            name: 'IDXhistoricalStoryTranslationTranslationId',
            columnNames: ['translation_id'],
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['translation_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story_translation',
            name: this.foreignKeyStoryTranslationId,
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['moderator_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            name: this.foreignKeyUserId,
            onDelete: 'SET NULL',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyStoryTranslationId);
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyUserId);
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddStoryTranslationHistoryTable1668428768982 = AddStoryTranslationHistoryTable1668428768982;
//# sourceMappingURL=1668428768982-addStoryTranslationHistoryTable.js.map