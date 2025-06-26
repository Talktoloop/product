"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOriginalLanguageIdToStory1611843248330 = void 0;
const typeorm_1 = require("typeorm");
const get_default_language_1 = __importDefault(require("./utils/get-default-language"));
class AddOriginalLanguageIdToStory1611843248330 {
    constructor() {
        this.tableName = 'story';
        this.foreignKeyName = 'FKstoryToLanguage';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'language_id',
            type: 'smallint',
            length: '2',
        });
    }
    async up(queryRunner) {
        const language = await (0, get_default_language_1.default)(queryRunner);
        this.newColumn.default = language.id;
        await queryRunner.addColumn(this.tableName, this.newColumn);
        await queryRunner.createForeignKey(this.tableName, new typeorm_1.TableForeignKey({
            columnNames: ['language_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'language',
            name: this.foreignKeyName,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey(this.tableName, this.foreignKeyName);
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddOriginalLanguageIdToStory1611843248330 = AddOriginalLanguageIdToStory1611843248330;
//# sourceMappingURL=1611843248330-addOriginalLanguageIdToStory.js.map