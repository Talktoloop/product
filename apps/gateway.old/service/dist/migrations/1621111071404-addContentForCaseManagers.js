"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContentForCaseManagers1621111071404 = void 0;
const uuid_1 = require("uuid");
class AddContentForCaseManagers1621111071404 {
    constructor() {
        this.tableName = 'case_manager';
        this.tableNameExtend = 'case_manager_text';
        this.content = [
            {
                id: (0, uuid_1.v4)(),
                nickname: 'Lian',
                avatar: 'https://cdn.loop.elitecrew.io/lian.png',
                languages: [
                    {
                        languageId: 1,
                        text: 'As a Case Manager at Loop, I personally read sensitive stories written by people just like you. I do my utmost to ensure that any allegations of wrongdoing are investigated, and if necessary, action is taken. You can trust me to handle your sensitive story with care and discretion.',
                    },
                ],
            },
            {
                id: (0, uuid_1.v4)(),
                nickname: 'Joe',
                avatar: 'https://cdn.loop.elitecrew.io/placeholder.png',
                languages: [
                    {
                        languageId: 1,
                        text: 'As a Case Manager at Loop, I will try to help you. Please contact me any time you want',
                    },
                ],
            },
            {
                id: (0, uuid_1.v4)(),
                nickname: 'Jannet',
                avatar: 'https://cdn.loop.elitecrew.io/placeholder.png',
                languages: [
                    {
                        languageId: 1,
                        text: 'As a Case Manager at Loop, I do my best',
                    },
                ],
            },
        ];
    }
    async up(queryRunner) {
        for (const element of this.content) {
            await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`id\`, \`nickname\`, \`avatar\`) VALUES (?, ?, ?)`, [element.id, element.nickname, element.avatar]);
            for (const language of element.languages) {
                await queryRunner.query(`INSERT INTO \`${this.tableNameExtend}\` (\`case_manager_id\`, \`language_id\`, \`text\`) VALUES (?, ?, ?)`, [element.id, language.languageId, language.text]);
            }
        }
    }
    async down(queryRunner) {
        await queryRunner.clearTable(this.tableName);
        await queryRunner.clearTable(this.tableNameExtend);
    }
}
exports.AddContentForCaseManagers1621111071404 = AddContentForCaseManagers1621111071404;
//# sourceMappingURL=1621111071404-addContentForCaseManagers.js.map