"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMockData1692969296869 = void 0;
const uuid_1 = require("uuid");
const shared_1 = require("@ourloop/shared");
require("dotenv/config");
const faker_1 = require("@faker-js/faker");
const get_random_age_1 = __importDefault(require("./utils/get-random-age"));
const get_random_gender_1 = __importDefault(require("./utils/get-random-gender"));
const get_random_difficulty_1 = __importDefault(require("./utils/get-random-difficulty"));
const get_random_thematic_area_1 = __importDefault(require("./utils/get-random-thematic-area"));
const get_random_category_1 = __importDefault(require("./utils/get-random-category"));
const shared_2 = require("@ourloop/shared");
const channel_constant_1 = require("../common/constant/channel.constant");
const env = process.env;
class AddMockData1692969296869 {
    constructor() {
        this.mockUserEmail = 'mock@example.com';
        this.limit = 6000;
    }
    async findUser(queryRunner) {
        return queryRunner
            .query(`SELECT \`id\` FROM \`user\` WHERE \`email\` = ?`, [
            this.mockUserEmail,
        ])
            .then((result) => result[0]);
    }
    async up(queryRunner) {
        var _a, _b, _c;
        if (env.NODE_ENV === 'development') {
            await queryRunner.query(`INSERT INTO \`user\` (\`id\`, \`email\`) VALUES (?, ?)`, [(0, uuid_1.v4)(), this.mockUserEmail]);
            const languages = await queryRunner.query(`SELECT \`id\`, \`is_default\`, \`code\` FROM \`language\` WHERE visible = true`);
            const difficulties = await queryRunner.query(`SELECT \`id\` FROM \`difficulty\``);
            const categories = await queryRunner.query(`SELECT \`id\` FROM \`category\``);
            const thematicAreas = await queryRunner.query(`SELECT \`id\`, \`parent_thematic_id\` as parentThematicId FROM \`thematic\``);
            const administrativeData = await queryRunner.query(`SELECT \`administrative_area_id\` as id FROM \`country_administrative_area_name\` WHERE name IN ('powiat rzeszowski', 'województwo podkarpackie')`);
            const mockUser = await this.findUser(queryRunner);
            const country = await queryRunner
                .query(`SELECT \`id\` FROM \`country\` WHERE \`code\` = ?`, ['pl'])
                .then((result) => result[0]);
            const defaultLanguage = languages.find((item) => item.is_default);
            let recipient;
            for (let index = 0; index < this.limit; index++) {
                recipient = await queryRunner.query(`INSERT INTO \`story_recipient\` (\`email\`, \`phone\`, \`nickname\`, \`first_name\`, \`last_name\`, \`gender_by_moderator\`, \`age_by_moderator\`, \`difficulty_by_moderator\`) VALUES (?,?,?,?,?,?,?,?)`, [
                    faker_1.faker.internet.email(),
                    faker_1.faker.phone.number('###-###-###'),
                    faker_1.faker.person.fullName(),
                    faker_1.faker.person.firstName(),
                    faker_1.faker.person.lastName(),
                    (0, get_random_gender_1.default)(),
                    (0, get_random_age_1.default)(),
                    (0, get_random_difficulty_1.default)(difficulties),
                ]);
                await queryRunner.query(`INSERT INTO \`story\` (\`id\`, \`published_at\`, \`status\`, \`user_id\`, \`language_id\`, \`channel\`, \`country_id\`, \`status_changed_by\`, \`recipient_id\`) VALUES (?,?,?,?,?,?,?,?,?)`, [
                    (0, uuid_1.v4)(),
                    new Date(),
                    shared_2.STORY_STATUS.PUBLISHED,
                    mockUser.id,
                    defaultLanguage.id,
                    channel_constant_1.CHANNEL_CONSTANTS.WEB,
                    country.id,
                    mockUser.id,
                    recipient.insertId,
                ]);
                await Promise.all(languages.map((item) => queryRunner.query(`INSERT INTO \`story_translation\` (\`story_id\`, \`language_id\`, \`content\`) SELECT s.id, ?, ? FROM \`story\` s WHERE s.recipient_id = ?`, [item.id, faker_1.faker.lorem.sentence(), recipient.insertId])));
                await queryRunner.query(`INSERT INTO \`story_thematic\` (\`story_id\`, \`thematic_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`, [(_a = (0, get_random_thematic_area_1.default)(thematicAreas)) === null || _a === void 0 ? void 0 : _a.id, recipient.insertId]);
                await queryRunner.query(`INSERT INTO \`story_category\` (\`story_id\`, \`category_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`, [(_b = (0, get_random_category_1.default)(categories)) === null || _b === void 0 ? void 0 : _b.id, recipient.insertId]);
                await queryRunner.query(`INSERT INTO \`story_difficulty\` (\`story_id\`, \`difficulty_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`, [(_c = (0, get_random_difficulty_1.default)(difficulties)) === null || _c === void 0 ? void 0 : _c.id, recipient.insertId]);
                await Promise.all(administrativeData.map((item) => queryRunner.query(`INSERT INTO \`story_country_administrative_area\` (\`story_id\`, \`administrative_area_id\`) SELECT s.id, ? FROM \`story\` s WHERE s.recipient_id = ?`, [item.id, recipient.insertId])));
                await (0, shared_1.setDelay)(1000);
            }
        }
    }
    async down(queryRunner) {
        if (env.NODE_ENV === 'development') {
            const mockUser = await this.findUser(queryRunner);
            if (mockUser) {
                await queryRunner.query(`DELETE sr FROM \`story_recipient\` as sr INNER JOIN \`story\` as s ON sr.id = s.recipient_id WHERE s.user_id = ?`, [mockUser.id]);
                await queryRunner.query(`DELETE FROM \`story\` WHERE user_id = ?`, [
                    mockUser.id,
                ]);
                await queryRunner.query(`DELETE FROM \`user\` WHERE id = ?`, [
                    mockUser.id,
                ]);
            }
        }
    }
}
exports.AddMockData1692969296869 = AddMockData1692969296869;
//# sourceMappingURL=1692969296869-addMockData.js.map