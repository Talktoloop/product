"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const default_1 = require("./default");
const buildDataSource = async () => {
    const config = await (0, default_1.dynamicConfiguration)();
    const options = {
        type: 'mysql',
        host: config.database.host,
        port: config.database.port,
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        synchronize: false,
        logging: false,
        bigNumberStrings: false,
        connectTimeout: 60 * 60 * 1000,
        acquireTimeout: 60 * 60 * 1000,
    };
    return new typeorm_1.DataSource(options);
};
exports.default = buildDataSource();
//# sourceMappingURL=typeorm.js.map