"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRejectReasonsAndPutData1599652560190 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableRejectReasonsAndPutData1599652560190 {
    constructor() {
        this.tableName = 'reject_reason';
        this.listOfRejectReasons = [
            'The story has offensive or discriminatory language in it',
            'The story does not follow the community standards, designed to ensure a safe space to share feedback',
            'There is a concern about the authenticity of the story',
            'There was a concern that the story could cause harm if posted publicly. It is being referred on to specialists',
            'The story does not respect the right to privacy of others',
        ];
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
                    name: 'title',
                    type: 'varchar',
                    length: '200',
                    isNullable: false,
                },
            ],
        }), true);
        Promise.all(this.listOfRejectReasons.map(async (reason) => await queryRunner.query(`
				INSERT INTO \`${this.tableName}\` (\`title\`)
				VALUES (?)
			  `, [reason])));
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.CreateTableRejectReasonsAndPutData1599652560190 = CreateTableRejectReasonsAndPutData1599652560190;
//# sourceMappingURL=1599652560190-createTableRejectReasonsAndPutData.js.map