"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyAnonymous = void 0;
const util = __importStar(require("util"));
const passport = __importStar(require("passport"));
class StrategyAnonymous {
    constructor(options) {
        this.name = 'anonymous';
        passport.Strategy.call(this);
        this.auth = options.auth;
        this.user = options.user;
        this.jwtFromRequest = options.jwtFromRequest;
    }
    async authenticate(request) {
        const token = this.jwtFromRequest(request);
        if (token) {
            const decodedToken = await this.auth
                .authenticate(token)
                .catch(() => this.fail());
            const user = await this.user.findById(decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.sub);
            if (!user || !user.isEnabled) {
                return this.fail();
            }
        }
        this.pass();
    }
}
exports.StrategyAnonymous = StrategyAnonymous;
util.inherits(StrategyAnonymous, passport.Strategy);
//# sourceMappingURL=strategy-anonymous.js.map