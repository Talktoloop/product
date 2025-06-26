"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const strategy_anonymous_1 = require("./strategy-anonymous");
const passport_jwt_1 = require("passport-jwt");
const user_service_1 = require("../user/service/user.service");
const auth_service_1 = require("./auth.service");
let AnonymousStrategy = class AnonymousStrategy extends (0, passport_1.PassportStrategy)(strategy_anonymous_1.StrategyAnonymous, 'anonymous') {
    constructor(userService, authService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            auth: authService,
            user: userService,
        });
        this.userService = userService;
        this.authService = authService;
    }
};
exports.AnonymousStrategy = AnonymousStrategy;
exports.AnonymousStrategy = AnonymousStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], AnonymousStrategy);
//# sourceMappingURL=anonymous.strategy.js.map