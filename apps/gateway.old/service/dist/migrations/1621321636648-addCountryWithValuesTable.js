"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCountryTableWIthValues1621321636648 = void 0;
const typeorm_1 = require("typeorm");
const get_countries_1 = __importDefault(require("./utils/get-countries"));
class AddCountryTableWIthValues1621321636648 {
    constructor() {
        this.tableName = 'country';
    }
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: this.tableName,
            columns: [
                {
                    name: 'id',
                    type: 'smallint',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'prefix',
                    type: 'smallint',
                    length: '30',
                    isNullable: false,
                },
                {
                    name: 'code',
                    type: 'varchar',
                    isNullable: false,
                    length: '2',
                    isUnique: true,
                },
            ],
        }));
        const countries = (0, get_countries_1.default)();
        for (const country of countries) {
            await queryRunner.query(`INSERT INTO \`${this.tableName}\` (\`prefix\`, \`code\`) VALUES (?, ?)`, [country.prefix, country.code]);
        }
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.tableName);
    }
}
exports.AddCountryTableWIthValues1621321636648 = AddCountryTableWIthValues1621321636648;
//# sourceMappingURL=1621321636648-addCountryWithValuesTable.js.map