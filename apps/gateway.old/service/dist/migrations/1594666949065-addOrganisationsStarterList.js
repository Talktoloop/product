"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddOrganisationsStarterList1594666949065 = void 0;
const uuid_1 = require("uuid");
class AddOrganisationsStarterList1594666949065 {
    constructor() {
        this.tableName = 'organisation';
        this.listOfOrganisation = [
            'Red Cross',
            'Meheba camp',
            'Belay Rehabilitation Ceter',
        ];
    }
    async up(queryRunner) {
        await Promise.all(this.listOfOrganisation.map(async (organisation) => await queryRunner.query(`
						INSERT INTO \`${this.tableName}\` (\`name\`, \`id\` )
						VALUES (?, ?)
					  `, [organisation, (0, uuid_1.v4)()])));
    }
    async down(queryRunner) {
        const queryBuilder = queryRunner.manager.createQueryBuilder();
        Promise.all(this.listOfOrganisation.map(async (organisation) => await queryBuilder
            .delete()
            .from(this.tableName)
            .where({ name: organisation })
            .execute()));
    }
}
exports.AddOrganisationsStarterList1594666949065 = AddOrganisationsStarterList1594666949065;
//# sourceMappingURL=1594666949065-addOrganisationsStarterList.js.map