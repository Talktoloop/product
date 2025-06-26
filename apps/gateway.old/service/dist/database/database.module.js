"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const database_decorator_1 = require("./database.decorator");
class DatabaseModule {
    static forFeature(repositories) {
        const providers = [];
        for (const repository of repositories) {
            const entity = Reflect.getMetadata(database_decorator_1.ENTITY_REPOSITORY, repository);
            if (!entity) {
                continue;
            }
            providers.push({
                inject: [(0, typeorm_1.getDataSourceToken)()],
                provide: repository,
                useFactory: (dataSource) => {
                    const baseRepository = dataSource.getRepository(entity);
                    return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
                },
            });
        }
        return {
            exports: providers,
            module: DatabaseModule,
            providers,
        };
    }
}
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map