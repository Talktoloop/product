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
exports.CacheProvider = void 0;
const shared_1 = require("@ourloop/shared");
const redisStore = __importStar(require("cache-manager-redis-store"));
const config_1 = require("@nestjs/config");
const default_1 = require("../../config/default");
const cache_manager_1 = require("@nestjs/cache-manager");
exports.CacheProvider = {
    forwardRef: () => cache_manager_1.CacheModule.registerAsync({
        useFactory: async (configService) => ({
            ttl: default_1.staticConfig.cacheTtl,
            store: redisStore,
            url: (0, shared_1.getRedisURL)(configService.get('redis')),
        }),
        inject: [config_1.ConfigService],
    }),
};
//# sourceMappingURL=cache-provider.js.map