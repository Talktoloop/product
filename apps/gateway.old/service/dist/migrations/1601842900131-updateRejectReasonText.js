"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRejectReasonText1601842900131 = void 0;
class UpdateRejectReasonText1601842900131 {
    constructor() {
        this.tableName = 'reject_reason';
        this.listOfRejectReasonsOld = [
            {
                id: 1,
                title: 'The story has offensive or discriminatory language in it',
            },
            {
                id: 2,
                title: 'The story does not follow the community standards, designed to ensure a safe space to share feedback',
            },
            { id: 3, title: 'There is a concern about the authenticity of the story' },
            {
                id: 4,
                title: 'There was a concern that the story could cause harm if posted publicly. It is being referred on to specialists',
            },
            {
                id: 5,
                title: 'The story does not respect the right to privacy of others',
            },
        ];
        this.listOfRejectReasonsNew = [
            {
                id: 1,
                title: 'The story / reply has offensive or discriminatory language in it',
            },
            {
                id: 2,
                title: 'The story / reply does not follow the community standards, designed to ensure a safe space to share feedback',
            },
            {
                id: 3,
                title: 'There is a concern about the authenticity of the story / reply',
            },
            {
                id: 4,
                title: 'There was a concern that the story / reply could cause harm if posted publicly. It is being referred on to specialists',
            },
            {
                id: 5,
                title: 'The story / reply does not respect the right to privacy of others',
            },
        ];
    }
    async up(queryRunner) {
        await Promise.all(this.listOfRejectReasonsNew.map(async (reason) => await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`, [reason.title, reason.id])));
    }
    async down(queryRunner) {
        await Promise.all(this.listOfRejectReasonsOld.map(async (reason) => await queryRunner.query(`UPDATE \`${this.tableName}\` SET \`title\` = ? WHERE id = ?`, [reason.title, reason.id])));
    }
}
exports.UpdateRejectReasonText1601842900131 = UpdateRejectReasonText1601842900131;
//# sourceMappingURL=1601842900131-updateRejectReasonText.js.map