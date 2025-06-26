import { Repository } from 'typeorm';
import { ModeratorEntity } from '../entity/moderator.entity';
export declare class ModeratorRepository extends Repository<ModeratorEntity> {
    findAll(): Promise<Record<string, string>[]>;
    findById(id: string): Promise<ModeratorEntity>;
}
