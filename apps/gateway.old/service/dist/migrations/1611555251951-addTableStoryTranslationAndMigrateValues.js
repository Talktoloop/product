"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTableStoryTranslationAndMigrateValues1611555251951 = void 0;
const typeorm_1 = require("typeorm");
const get_default_language_1 = __importDefault(require("./utils/get-default-language"));
class AddTableStoryTranslationAndMigrateValues1611555251951 {
    constructor() {
        this.translationTableName = 'story_translation';
        this.migratedTableName = 'story';
        this.migrationColumn = new typeorm_1.TableColumn({
            name: 'content',
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
                    name: 'story_id',
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
            name: 'IDXstoryTranslationStoryId',
            columnNames: ['story_id'],
        }));
        await queryRunner.createIndex(this.translationTableName, new typeorm_1.TableIndex({
            name: 'IDXstoryTranslationLanguageId',
            columnNames: ['language_id'],
        }));
        await queryRunner.createForeignKey(this.translationTableName, new typeorm_1.TableForeignKey({
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: 'FKstoryTranslationToLanguage',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey(this.translationTableName, new typeorm_1.TableForeignKey({
            columnNames: ['story_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'story',
            name: 'FKstoryTranslationToStory',
            onDelete: 'CASCADE',
        }));
        const language = await (0, get_default_language_1.default)(queryRunner);
        const stories = await queryRunner.query(`SELECT \`id\`, \`content\` FROM \`${this.migratedTableName}\``);
        for (const story of stories) {
            await queryRunner.query(`INSERT INTO \`${this.translationTableName}\` (\`story_id\`, \`language_id\`, \`content\`) VALUES (?, ?, ?)`, [story.id, language.id, story.content]);
        }
        await queryRunner.dropColumn(this.migratedTableName, this.migrationColumn);
    }
    async down(queryRunner) {
        const language = await (0, get_default_language_1.default)(queryRunner);
        const stories = await queryRunner.query(`SELECT \`story_id\`, \`content\` FROM \`${this.translationTableName}\` WHERE \`language_id\` = ${language.id}`);
        await queryRunner.addColumn(this.migratedTableName, this.migrationColumn);
        for (const story of stories) {
            await queryRunner.query(`UPDATE \`${this.migratedTableName}\` SET \`content\` = ? WHERE id = ?`, [story.content, story.story_id]);
        }
        await queryRunner.dropTable(this.translationTableName);
    }
}
exports.AddTableStoryTranslationAndMigrateValues1611555251951 = AddTableStoryTranslationAndMigrateValues1611555251951;
//# sourceMappingURL=1611555251951-addTableStoryTranslationAndMigrateValues.js.map