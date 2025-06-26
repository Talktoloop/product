"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNicknameAndOrganisationToComment1597319050878 = void 0;
const typeorm_1 = require("typeorm");
class AddNicknameAndOrganisationToComment1597319050878 {
    constructor() {
        this.tableName = 'comment';
        this.newColumns = [
            new typeorm_1.TableColumn({
                name: 'nickname',
                type: 'varchar',
                length: '60',
                isNullable: true,
            }),
            new typeorm_1.TableColumn({
                name: 'organisation',
                type: 'varchar',
                length: '100',
                isNullable: true,
            }),
        ];
    }
    async up(queryRunner) {
        await queryRunner.addColumns(this.tableName, this.newColumns);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns(this.tableName, this.newColumns);
    }
}
exports.AddNicknameAndOrganisationToComment1597319050878 = AddNicknameAndOrganisationToComment1597319050878;
//# sourceMappingURL=1597319050878-addNicknameAndOrganisationToComment.js.map