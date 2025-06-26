"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDialectToLanguages1738913069142 = void 0;
const typeorm_1 = require("typeorm");
class AddDialectToLanguages1738913069142 {
    async up(queryRunner) {
        await queryRunner.addColumn('language', new typeorm_1.TableColumn({
            name: 'dialect',
            type: 'varchar',
            length: '2',
            isNullable: true,
        }));
        await queryRunner.query(`UPDATE language SET dialect = 'so' WHERE code = 'bnd';`);
        await queryRunner.query(`UPDATE language SET dialect = 'so' WHERE code = 'maa';`);
        await queryRunner.query(`UPDATE language SET dialect = 'so' WHERE code = 'bju';`);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('language', 'dialect');
    }
}
exports.AddDialectToLanguages1738913069142 = AddDialectToLanguages1738913069142;
//# sourceMappingURL=1738913069142-addDialectToLanguages.js.map