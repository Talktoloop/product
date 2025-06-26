"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNameToCountryTable1622584413784 = void 0;
const typeorm_1 = require("typeorm");
const get_countries_1 = __importDefault(require("./utils/get-countries"));
class AddNameToCountryTable1622584413784 {
    constructor() {
        this.tableName = 'country';
        this.newColumn = new typeorm_1.TableColumn({
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.newColumn);
        const countries = (0, get_countries_1.default)();
        const operations = [];
        for (const country of countries) {
            operations.push(queryRunner.query(`UPDATE \`${this.tableName}\` SET \`name\` = ? WHERE code = ?`, [country.name, country.code]));
        }
        await Promise.all(operations);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.newColumn);
    }
}
exports.AddNameToCountryTable1622584413784 = AddNameToCountryTable1622584413784;
//# sourceMappingURL=1622584413784-addNameToCountryTable.js.map