"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageId = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = __importDefault(require("../config/typeorm"));
const helpers_1 = require("../common/helpers");
const shared_1 = require("@ourloop/shared");
exports.LanguageId = (0, common_1.createParamDecorator)(async (_, ctx) => {
    var _a;
    const request = ctx.switchToHttp().getRequest();
    const code = request.headers['content-language'];
    const connection = await (0, helpers_1.getConnection)(typeorm_1.default);
    const languages = await connection
        .query(`select id, code from language where code = ? or is_default = 1`, [
        code,
    ])
        .catch(() => {
        throw new common_1.BadRequestException(shared_1.LANGUAGE_NOT_FOUND);
    });
    const language = languages.filter((entity) => entity.code === code);
    if (language.length > 0) {
        return language[0].id;
    }
    return (_a = languages[0]) === null || _a === void 0 ? void 0 : _a.id;
});
//# sourceMappingURL=language-id.decorator.js.map