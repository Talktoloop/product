import { ModeratorRepository } from '../repository/moderator.repository';
import { ModeratorEntity } from '../entity/moderator.entity';
export declare class ModeratorService {
    private readonly moderatorService;
    constructor(moderatorService: ModeratorRepository);
    findAllModerators(): Promise<Record<string, string>[]>;
    findModeratorById(id: string): Promise<ModeratorEntity>;
}
