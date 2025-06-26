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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const jwt = __importStar(require("jsonwebtoken"));
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const di_constant_1 = require("../common/constant/di.constant");
const jwkToPem = require('jwk-to-pem');
let AuthService = AuthService_1 = class AuthService {
    constructor(cognito, config) {
        this.cognito = cognito;
        this.config = config;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async getPem() {
        return axios_1.default
            .get(this.config.get('authorization.jwks'))
            .then((res) => {
            var _a;
            const jwks = res.data.keys[1];
            if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.keys.length) < 1) {
                throw new Error('Missing JWKS keys');
            }
            this.pem = jwkToPem(jwks);
        })
            .catch((error) => {
            console.log('====here====', error);
            this.logger.error(error.response);
            this.logger.error('AWS credentials are wrong');
        });
    }
    async authenticate(token) {
        return new Promise(async (resolve, reject) => {
            if (!this.pem) {
                await this.getPem();
            }
            jwt.verify(token, this.pem, (error, decodedToken) => {
                if (error) {
                    reject(error);
                }
                resolve(decodedToken);
            });
        });
    }
    getAccountDetails(email) {
        return new Promise((resolve, reject) => {
            this.cognito.adminGetUser({
                UserPoolId: this.config.get('authorization.userPoolId'),
                Username: email,
            }, (error, result) => {
                if (!error) {
                    console.log('====HERE====', error);
                    resolve(result);
                }
                reject(error);
            });
        });
    }
    getUserAttributes(tokenSub) {
        return new Promise((resolve) => {
            this.cognito.listUsers({
                UserPoolId: this.config.get('authorization.userPoolId'),
                Filter: `sub = "${tokenSub}"`,
            }, (error, data) => {
                if (error || data.Users.length !== 1) {
                    this.logger.error((error === null || error === void 0 ? void 0 : error.message) || null, error === null || error === void 0 ? void 0 : error.stack, 'CognitoStrategy');
                    resolve(null);
                    return;
                }
                const attributes = {};
                data.Users[0].Attributes.forEach((attribute) => (attributes[attribute.Name] = attribute.Value));
                resolve(attributes);
            });
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(client_cognito_identity_provider_1.CognitoIdentityProvider)),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [client_cognito_identity_provider_1.CognitoIdentityProvider,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map