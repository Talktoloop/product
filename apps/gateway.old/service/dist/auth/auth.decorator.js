"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const registration_status_constant_1 = require("./../user/constant/registration-status.constant");
const common_1 = require("@nestjs/common");
const shared_1 = require("@ourloop/shared");
const helpers_1 = require("../common/helpers");
exports.Auth = (0, common_1.createParamDecorator)((registrationIsCompleted = true, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    if (user &&
        registrationIsCompleted &&
        (0, helpers_1.checkRegistrationStatus)(user) ===
            registration_status_constant_1.REGISTRATION_STATUS.REQUIRE_PROFILE_UPDATE) {
        throw new common_1.ForbiddenException(shared_1.USER_HAS_NOT_COMPLETED_REGISTRATION_PROCESS);
    }
    return user;
});
//# sourceMappingURL=auth.decorator.js.map