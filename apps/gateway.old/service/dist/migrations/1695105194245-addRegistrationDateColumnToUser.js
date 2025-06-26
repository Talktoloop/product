"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRegistrationDateColumnToUser1695105194245 = void 0;
const typeorm_1 = require("typeorm");
class addRegistrationDateColumnToUser1695105194245 {
    constructor() {
        this.tableName = 'user';
        this.column = new typeorm_1.TableColumn({
            name: 'registration_date',
            type: 'datetime',
            isNullable: true,
        });
    }
    async up(queryRunner) {
        await queryRunner.addColumn(this.tableName, this.column);
    }
    async down(queryRunner) {
        await queryRunner.dropColumn(this.tableName, this.column);
    }
}
exports.addRegistrationDateColumnToUser1695105194245 = addRegistrationDateColumnToUser1695105194245;
//# sourceMappingURL=1695105194245-addRegistrationDateColumnToUser.js.map