"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableCommentTranslationAndMigrateValues1611748162224 = void 0;
const typeorm_1 = require("typeorm");
const get_default_language_1 = __importDefault(require("./utils/get-default-language"));
class AddTableCommentTranslationAndMigrateValues1611748162224 {
    constructor() {
        this.translationTableName = 'comment_translation';
        this.migratedTableName = 'comment';
        this.migrationColumn = new typeorm_1.TableColumn({
            name: 'comment',
            type: 'text',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.translationTableName,
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'comment_id',
                    type: 'varchar',
                    length: '36',
                    isPrimary: true,
                },
                {
                    name: 'language_id',
                    type: 'smallint',
                    length: '2',
                },
                {
                    name: 'content',
                    type: 'text',
                    isNullable: false,
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
        await queryRunner.createIndex(this.translationTableName, new typeorm_1.TableIndex({
            name: 'IDXcommentTranslationStoryId',
            columnNames: ['comment_id'],
        }));
        await queryRunner.createIndex(this.translationTableName, new typeorm_1.TableIndex({
            name: 'IDXcommentTranslationLanguageId',
            columnNames: ['language_id'],
        }));
        await queryRunner.createForeignKey(this.translationTableName, new typeorm_1.TableForeignKey({
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: 'FKcommentTranslationToLanguage',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey(this.translationTableName, new typeorm_1.TableForeignKey({
            columnNames: ['comment_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'comment',
            name: 'FKcommentTranslationToComment',
            onDelete: 'CASCADE',
        }));
        const language = await (0, get_default_language_1.default)(queryRunner);
        const comments = await queryRunner.query(`SELECT \`id\`, \`comment\` FROM \`${this.migratedTableName}\``);
        for (const comment of comments) {
            await queryRunner.query(`INSERT INTO \`${this.translationTableName}\` (\`comment_id\`, \`language_id\`, \`content\`) VALUES (?, ?, ?)`, [comment.id, language.id, comment.comment]);
        }
        await queryRunner.dropColumn(this.migratedTableName, this.migrationColumn);
    }
    async down(queryRunner) {
        const language = await (0, get_default_language_1.default)(queryRunner);
        const translations = await queryRunner.query(`SELECT \`comment_id\`, \`content\` FROM \`${this.translationTableName}\` WHERE \`language_id\` = ${language.id}`);
        await queryRunner.addColumn(this.migratedTableName, this.migrationColumn);
        for (const translation of translations) {
            await queryRunner.query(`UPDATE \`${this.migratedTableName}\` SET \`comment\` = ? WHERE id = ?`, [translation.content, translation.comment_id]);
        }
        await queryRunner.dropTable(this.translationTableName);
    }
}
exports.AddTableCommentTranslationAndMigrateValues1611748162224 = AddTableCommentTranslationAndMigrateValues1611748162224;
//# sourceMappingURL=1611748162224-addTableCommentTranslationAndMigrateValues.js.map