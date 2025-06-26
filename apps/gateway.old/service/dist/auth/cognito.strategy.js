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
exports.CognitoStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
const user_service_1 = require("../user/service/user.service");
const strategy_1 = require("./strategy");
const auth_service_1 = require("./auth.service");
const role_constant_1 = require("../user/constant/role.constant");
const airtable_user_service_1 = require("../airtable-client/service/airtable-user.service");
let CognitoStrategy = class CognitoStrategy extends (0, passport_1.PassportStrategy)(strategy_1.Strategy, 'cognito') {
    constructor(userService, authService, airTableUserService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            auth: authService,
        }, async (request, token, done) => {
            let user = await this.userService.findById(token.sub);
            if (user && !user.isEnabled) {
                done(null);
                return;
            }
            if (!user) {
                const userAttributes = await this.authService.getUserAttributes(token.sub);
                if (!userAttributes) {
                    done(null);
                    return;
                }
                user = await this.userService.findByEmail(userAttributes.email);
                if (user) {
                    await this.userService.migrateUser(user, token.sub);
                    this.airTableUserService.findByEmailAndUpdateId(userAttributes.email, token.sub);
                }
                else {
                    await this.userService.saveUser({
                        id: token.sub,
                        email: userAttributes.email,
                        nickname: userAttributes.name,
                        role: role_constant_1.ROLE.USER,
                        notifications: true,
                        hideLastName: false,
                        lastActivity: new Date(),
                    });
                }
                user = await this.userService.findById(token.sub);
            }
            await this.userService.updateLastActivity(user.id);
            done(user, null);
        });
        this.userService = userService;
        this.authService = authService;
        this.airTableUserService = airTableUserService;
    }
    static getToken(request) {
        return (request.headers.authorization &&
            request.headers.authorization.split(' ')[1]);
    }
};
exports.CognitoStrategy = CognitoStrategy;
exports.CognitoStrategy = CognitoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService,
        airtable_user_service_1.AirTableUserService])
], CognitoStrategy);
//# sourceMappingURL=cognito.strategy.js.map